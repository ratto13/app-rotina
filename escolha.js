/* ============ PERGUNTAS DO COMEÇO E TELA DE ESCOLHA ============ */
// Este arquivo cuida das perguntas que a pessoa responde antes do cardápio:
// 1) quem come em casa, 2) quantos potes tem, 3) quantas refeições por dia
// e 4) o que quer comer (a tela que substitui o "Do que você não gosta?").
// Ele usa os dados do banco.js (BANCO e BANCO_ID) e segue o padrão do banco
// de dados (versão 1.4, seção 7).
// As respostas ficam guardadas em G, a "gaveta" de gostos criada no script.js,
// que vale para todas as semanas.

/* ============ PESSOAS E PORÇÕES ============ */
// Adulto conta 1 porção; criança com menos de 10 anos conta meia porção (manual, seção 0.11).
// No máximo 4 pessoas por casa, e sempre pelo menos 1 adulto.
const MAX_PESSOAS = 4;
const adultos = () => G.adultos || 1;
const criancas = () => G.criancas || 0;
// porcoesCasa(): a soma das porções. Ex.: 2 adultos e 2 crianças = 3 porções.
const porcoesCasa = () => adultos() + criancas() * 0.5;

/* ============ POTES ============ */
// Os três tamanhos de pote que o método usa (manual, seção 4.6).
const POTES = [370, 640, 1040];
// tamanhoPote(): o pote de porção certo para a casa.
// 1 ou 1½ porção: 370 ml; 2 ou 2½: 640 ml; 3 a 4: 1040 ml.
function tamanhoPote(){
  const p = porcoesCasa();
  if (p < 2) return 370;
  if (p < 3) return 640;
  return 1040;
}
const potes = ml => (G.potes && G.potes[ml]) || 0;
// FAIXAS: a tabela do plano de potes do manual (seção 0.6), contada em potes de porção da casa.
const FAIXAS = [
  {ate: 10, nome: "Até 10 potes", texto: "Semana pequena: almoço pronto, e o resto feito na hora (tapioca, cuscuz, lanches e ovos). Sem torta."},
  {ate: 25, nome: "De 11 a 25 potes", texto: "Almoço e parte das jantas prontos, com 1 legume. A torta entra em meia receita, se sobrarem 4 potes."},
  {ate: 40, nome: "De 26 a 40 potes", texto: "Quase a lista completa: 2 proteínas, 1 legume e a torta inteira."},
  {ate: Infinity, nome: "Mais de 40 potes", texto: "A lista completa do nível 1."}
];
// faixa(): em qual linha da tabela a casa está, pelos potes de porção do tamanho certo.
const faixa = () => FAIXAS.find(f => potes(tamanhoPote()) <= f.ate);
// semAssado(): com até 10 potes de porção, a semana não leva assado de forma (torta),
// como manda a tabela do plano de potes (manual, seção 0.6). A página avisa a pessoa.
const semAssado = () => potes(tamanhoPote()) <= 10;
const ehAssado = item => item.modulo === "assado de forma";
// A semana completa do nível 1 usa cerca de 37 potes de porção e 9 potes da praça (Anexo A, seção A.6.1).
const POTES_SEMANA_COMPLETA = {porcao: 37, praca: 9};
// SUGESTAO_INICIO: quantos potes sugerir para começar (manual, seção 0.6):
// cerca de 10 potes de porção na primeira semana e de 3 a 5 potes da praça (aqui, 4).
const SUGESTAO_INICIO = {porcao: 10, praca: 4};
// sugestao(): a sugestão já no tamanho de pote certo para a casa.
// Quando o pote de porção da casa é o de 640 ml, os dois usos somam no mesmo tamanho.
function sugestao(){
  const ml = tamanhoPote();
  const s = {370: 0, 640: 0, 1040: 0};
  s[ml] += SUGESTAO_INICIO.porcao;
  s[640] += SUGESTAO_INICIO.praca;
  return s;
}

/* ============ O QUE A PESSOA ESCOLHEU ============ */
// G.escolha guarda o id de cada item marcado (true = marcado).
// Na primeira vez, já vêm marcados os recomendados (tapioca, flocão, farelo de aveia e torta).
function iniciaEscolha(){
  if (G.escolha) return;
  G.escolha = {};
  [...BANCO.ingredientes, ...BANCO.preparos].forEach(i => { if (i.recomendado && i.nivel === 1) G.escolha[i.id] = true; });
  saveGostos();
}
const escolheu = id => !!(G.escolha && G.escolha[id]);
// NIVEL: a primeira semana é sempre nível 1.
const NIVEL = 1;
// nomeTela(): o nome que aparece na tela. Se a ficha diz "aparece na tela como ...", usa esse nome.
function nomeTela(item){
  const m = (item.obs || "").match(/aparece na tela como "([^"]+)"/);
  return m ? m[1] : item.nome;
}

/* ============ O QUE DÁ PARA MONTAR ============ */
// disponivel(): responde se um item pode ser usado, com as escolhas da pessoa.
// - Item que aparece na tela (escolha preenchida): só se a pessoa marcou.
// - Ingrediente que não aparece na tela: sempre (entra na compra sozinho).
// - Preparo que não aparece na tela: se tudo o que a receita pede estiver disponível.
// - Item sem ficha que não é comprado (água): sempre.
// O "visto" evita voltas infinitas quando um item aponta para outro.
function disponivel(id, visto){
  visto = visto || {};
  if (visto[id]) return false;
  visto[id] = true;
  if (BANCO_SEM_FICHA.includes(id)) return true;
  const it = BANCO_ID[id];
  if (!it || it.nivel > NIVEL) return false;
  if (it.escolha) return escolheu(id);
  if (it.tipo === "ingrediente") return true;
  const lista = it.tipo === "prato" ? it.componentes : (it.receita || []);
  return lista.every((r, n) => usavel(r, visto, n === 0));
}
// usavel(): um item da receita (ou dos componentes) pode ser usado se:
// estiver disponível, ou for opcional, ou tiver um substituto disponível (padrão, seção 6).
// Cuidados nesta versão, para a troca não criar pratos estranhos ou repetidos:
// - o primeiro item (o principal, como o arroz no arroz com feijão) não é trocado;
// - preparos não são trocados (o frango grelhado não vira carne moída);
// - o substituto precisa ser um ingrediente (exemplo: presunto troca por peito de peru).
function usavel(r, visto, principal){
  if (r.opcional) return true;
  if (disponivel(r.id, Object.assign({}, visto))) return true;
  const it = BANCO_ID[r.id];
  if (principal || !it || it.tipo !== "ingrediente") return false;
  return (it.substitutos || []).some(s => BANCO_ID[s] && BANCO_ID[s].tipo === "ingrediente" && disponivel(s, Object.assign({}, visto)));
}

// USADOS: os ids de preparos que algum prato na hora usa como componente.
// Um preparo que já entra num prato (ex.: arroz, hambúrguer) não conta sozinho como prato.
const USADOS = new Set(BANCO.pratos.flatMap(p => p.componentes.map(c => c.id)));
// candidatos(): todos os pratos que podem aparecer numa refeição (pelo nome da refeição).
// Entram os pratos na hora e os preparos que vão direto para o prato, como a torta.
function candidatos(ref){
  const pratos = BANCO.pratos.filter(p => p.nivel <= NIVEL && p.refeicoes.includes(ref) && disponivel(p.id));
  // Com até 10 potes, o assado de forma (torta) não entra (semAssado).
  const preparos = BANCO.preparos.filter(p => p.nivel <= NIVEL && p.refeicoes.includes(ref) && !USADOS.has(p.id) && disponivel(p.id)
    && !(semAssado() && ehAssado(p)));
  return [...pratos, ...preparos];
}
// tipoPrato(): separa o que é bebida, o que é acompanhamento de vegetal e o que é o prato principal.
function tipoPrato(p){
  const pr = p.preenche || [];
  if (pr[0] === "bebida") return "bebida";
  if (pr.length === 1 && pr[0] === "vegetal") return "acomp";
  return "prato";
}
// familia(): o que conta como "prato diferente" (manual, seção 0.12): o módulo, não a combinação.
// Tapioca com queijo e tapioca com presunto são o mesmo prato: os recheados contam pela base.
// Mingau, prato de ovos, vitamina e suco contam pelo módulo. O resto conta pelo próprio prato.
function familia(p){
  if (p.tipo === "prato" && p.modulo === "recheado") return "base:" + p.componentes[0].id;
  if (["mingau", "prato de ovos", "vitamina", "suco"].includes(p.modulo)) return "modulo:" + p.modulo;
  return p.id;
}
// REFS: as 6 refeições, com o nome usado nas fichas e o mínimo de cada uma (padrão, seção 7.4).
// pratos = quantos pratos diferentes; acomp = acompanhamentos de vegetal; soBase = só conta o que tem carboidrato;
// comProteina = no almoço e na janta, só conta como prato o que tem proteína (polenta sozinha é acompanhamento).
const REFS = [
  {i: 0, nome: "café", tela: "café da manhã", pratos: 2, soBase: true, dica: "Bases do café e dos lanches"},
  {i: 1, nome: "lanche da manhã", tela: "lanche da manhã", pratos: 2, soBase: true, vitamina: true, dica: "Bases do café e dos lanches"},
  {i: 2, nome: "almoço", tela: "almoço", pratos: 3, acomp: 3, comProteina: true, dica: "Proteínas ou Bases do almoço e da janta"},
  {i: 3, nome: "lanche da tarde", tela: "lanche da tarde", pratos: 3, dica: "Bases do café e dos lanches, Recheios ou Pratos prontos do freezer"},
  {i: 4, nome: "janta", tela: "janta", pratos: 3, acomp: 3, comProteina: true, dica: "Proteínas, Recheios ou Bases do almoço e da janta"},
  {i: 5, nome: "ceia", tela: "ceia", pratos: 3, dica: "Bases do café e dos lanches ou Recheios"}
];
// contaRef(): conta, numa refeição, quantos pratos diferentes e quantos acompanhamentos dá para montar.
function contaRef(r){
  const c = candidatos(r.nome);
  const tem = (p, papel) => (p.preenche || []).includes(papel);
  const principais = c.filter(p => tipoPrato(p) === "prato"
    && (!r.soBase || tem(p, "carboidrato"))
    && (!r.comProteina || tem(p, "proteína") || tem(p, "proteína leve")));
  const pratos = new Set(principais.map(familia)).size;
  const acomp = new Set(c.filter(p => tipoPrato(p) === "acomp").map(familia)).size;
  const vitamina = c.some(p => p.modulo === "vitamina");
  return {pratos, acomp, vitamina};
}
// folga(): quanto a refeição passa do mínimo. Negativo = ainda falta.
// so = "pratos" olha só os pratos; so = "acomp" olha só os legumes e saladas; sem so, olha tudo.
function folga(r, so){
  const n = contaRef(r);
  const fp = n.pratos - r.pratos - (r.vitamina && !n.vitamina ? 99 : 0);
  const fa = r.acomp ? n.acomp - r.acomp : Infinity;
  if (so === "pratos") return fp;
  if (so === "acomp") return r.acomp ? fa : Infinity;
  return Math.min(fp, fa);
}
// refsAtivas(): só as refeições que a pessoa vai fazer (pergunta 3).
// Com 4 ou 3 refeições, a vitamina passa para o café (como no script.js).
function refsAtivas(){
  return REFS.filter(r => ativas().includes(r.i));
}
// faltas(): as refeições que ainda não chegaram ao mínimo, com a dica do que marcar.
function faltas(){
  // Cada falta já diz em qual grupo marcar.
  return refsAtivas().filter(r => folga(r) < 0).map(r => {
    const n = contaRef(r), msg = [];
    if (n.pratos < r.pratos) msg.push(`faltam ${r.pratos - n.pratos} ${r.soBase ? "base(s)" : "prato(s)"} diferente(s); marque em ${r.dica}`);
    if (r.acomp && n.acomp < r.acomp) msg.push(`faltam ${r.acomp - n.acomp} legume(s) ou salada(s); marque em Legumes e folhas`);
    if (r.vitamina && !n.vitamina) msg.push("falta a vitamina; marque banana em Frutas e leite em Bebidas");
    return {r, msg};
  });
}
// medidor(): o aviso de variedade de cada grupo, pelas refeições que os itens do grupo atendem.
// Falta pouco (abaixo do mínimo), Mínimo, Boa variedade (1 ou 2 a mais) e Ótima variedade (3 ou mais).
function medidor(grupo){
  const refsGrupo = new Set(itensGrupo(grupo).filter(i => i.nivel === 1).flatMap(i => i.refeicoes));
  const lista = refsAtivas().filter(r => refsGrupo.has(r.nome));
  if (!lista.length) return null;
  // Legumes e folhas mede os acompanhamentos; os outros grupos medem os pratos.
  const so = grupo === "Legumes e folhas" ? "acomp" : "pratos";
  const f = Math.min(...lista.map(r => folga(r, so)));
  if (f === Infinity) return null;
  if (f < 0) return {cls: "falta", txt: "⚠️ Falta pouco"};
  if (f === 0) return {cls: "minimo", txt: "Mínimo"};
  if (f <= 2) return {cls: "boa", txt: "Boa variedade"};
  return {cls: "otima", txt: "Ótima variedade"};
}
// GRUPOS: a ordem dos grupos na tela (padrão, lista 5.8).
const GRUPOS = ["Proteínas", "Bases do almoço e da janta", "Bases do café e dos lanches", "Pratos prontos do freezer", "Recheios", "Frutas", "Legumes e folhas", "Bebidas"];
const itensGrupo = g => [...BANCO.ingredientes, ...BANCO.preparos].filter(i => i.escolha === g);

/* ============ TELA 1: QUEM COME EM CASA ============ */
// gostos(): a explicação de como o cardápio é montado e a primeira pergunta.
// O nome "gostos" continua o mesmo para os links antigos (#gostos) seguirem funcionando.
function gostos(){
  $app.innerHTML = `<h1>Como o seu cardápio é montado</h1>

    <div class="card" style="background:var(--tomato-l);border-color:#F2CDB9">
      <b>⚠️ Método em teste</b>
      <p>Este método ainda está sendo testado e <b>não serve para pessoas com restrição alimentar</b>: alergia, intolerância (como à lactose ou ao glúten), doença celíaca, diabetes ou dieta vegetariana. Nesses casos, procure uma nutricionista.</p>
    </div>

    <h2>🕒 Seis refeições, de 3 em 3 horas</h2>
    <p>O método foi pensado para <b>6 refeições por dia</b>: café da manhã, lanche da manhã, almoço, lanche da tarde, janta e ceia. Comer de 3 em 3 horas evita chegar com muita fome na refeição seguinte.</p>

    <h2>🧩 Você escolhe, a página monta</h2>
    <p>Você marca os alimentos que quer comer. A página monta o cardápio da semana só com eles, junto com a lista de compras e o passo a passo da cozinha. <b>Quanto mais alimentos você marcar, mais variado fica o cardápio.</b></p>

    <h2>🎲 Regras para não enjoar</h2>
    <ul class="lista">
      <li>Nenhum prato aparece mais de 3 vezes na semana na mesma refeição.</li>
      <li>O mesmo prato não se repete na mesma refeição em dias seguidos.</li>
      <li>O que estraga rápido (cenoura ralada, mamão picado) vem nos primeiros dias.</li>
    </ul>

    <div class="card" style="background:var(--green-l);border-color:#BFD9C7;margin-top:22px">
      <b>📝 Para montar o seu cardápio, responda 4 perguntas rápidas.</b>
    </div>
    <span class="pill s">Pergunta 1 de 4</span>
    <h2 style="margin-top:8px">🏠 Quem come em casa?</h2>
    <p class="muted">Até 4 pessoas. Criança com menos de 10 anos come cerca de meia porção.</p>
    <div class="card" style="padding:4px 14px">
      ${contador("adultos", "Adultos", adultos(), 1, MAX_PESSOAS - criancas())}
      ${contador("criancas", "Crianças com menos de 10 anos", criancas(), 0, MAX_PESSOAS - adultos())}
    </div>
    <p class="muted">A comida da semana é calculada para <b>${fmtPorcao(porcoesCasa())}</b>. No fim da semana, você conta se a porção foi pouca, certa ou muita, e a próxima se ajusta.</p>
    <p class="muted" style="font-size:.85rem">Nesta versão de teste, todos seguem o mesmo objetivo: comer melhor, com praticidade. A meia porção da criança é uma estimativa e ainda vai ser revisada por uma nutricionista.</p>

    <button class="btn" id="prox" style="width:100%;margin-top:8px">Próxima pergunta ›</button>`;
  ligaContadores(gostos);
  document.getElementById("prox").onclick = () => { S.tab = "potes"; go(); window.scrollTo(0,0); };
}

// contador(): uma linha com o nome e os botões − e + (usada nas perguntas 1 e 2).
function contador(campo, nome, valor, min, max, extra){
  return `<div class="stk"><div class="grow">${nome}${extra ? `<div class="muted" style="font-size:.8rem">${extra}</div>` : ""}</div>
    <div class="cont">
      <button data-c="${campo}" data-d="-1" ${valor <= min ? "disabled" : ""}>−</button>
      <b>${valor}</b>
      <button data-c="${campo}" data-d="1" ${valor >= max ? "disabled" : ""}>+</button>
    </div></div>`;
}
// ligaContadores(): faz os botões − e + funcionarem. Os potes ficam em G.potes; o resto, direto em G.
// Depois de mudar, salva e redesenha a mesma tela (tela = a função que desenha).
function ligaContadores(tela){
  $app.querySelectorAll("[data-c]").forEach(b => b.onclick = () => {
    const campo = b.dataset.c, d = +b.dataset.d;
    if (campo.startsWith("pote")){
      const ml = +campo.slice(4);
      G.potes = G.potes || {};
      G.potes[ml] = Math.max(0, potes(ml) + d);
    } else {
      G[campo] = (campo === "adultos" ? adultos() : criancas()) + d;
    }
    saveGostos(); const y = window.scrollY; tela(); window.scrollTo(0,y);
  });
}
// fmtPorcao(): escreve "1 porção", "1½ porção", "3 porções".
function fmtPorcao(p){
  const t = Number.isInteger(p) ? String(p) : (Math.floor(p) ? Math.floor(p) + "½" : "½");
  return t + (p > 1.5 ? " porções" : " porção");
}

/* ============ TELA 2: POTES ============ */
// potesTela(): pergunta quantos potes a pessoa tem de cada tamanho e mostra o tamanho da semana.
function potesTela(){
  const ml = tamanhoPote(), f = faixa();
  const tem = potes(ml), praca = potes(640);
  // Se a casa usa o pote de 640 ml para as porções, ele também é o pote da praça:
  // os dois usos dividem os mesmos potes, então a conta junta os dois.
  const faltaPorcao = ml === 640
    ? Math.max(0, POTES_SEMANA_COMPLETA.porcao + POTES_SEMANA_COMPLETA.praca - tem)
    : Math.max(0, POTES_SEMANA_COMPLETA.porcao - tem);
  const faltaPraca = ml === 640 ? 0 : Math.max(0, POTES_SEMANA_COMPLETA.praca - praca);
  const sug = sugestao();
  // Texto da sugestão: só os tamanhos que entram (ex.: "10 potes de 370 ml e 4 potes de 640 ml").
  const sugTexto = POTES.filter(m => sug[m]).map(m => `<b>${sug[m]} potes de ${m} ml</b>`).join(" e ");
  $app.innerHTML = `<span class="pill s">Pergunta 2 de 4</span>
    <h1 style="margin-top:8px">🫙 Quantos potes você tem?</h1>
    <p class="muted">O método foi pensado em potes com tampa de <b>370 ml</b>, os mais comuns no mercado. Conte os que você já tem.</p>
    <div class="card" style="background:var(--green-l);border-color:#BFD9C7">
      <b>💡 Não sabe quantos precisa? Use a sugestão para começar</b>
      <p>Para a sua casa (${fmtPorcao(porcoesCasa())}): ${sugTexto}.</p>
      <ul class="lista">
        <li><b>Pote de porção (${ml} ml):</b> vai para o freezer com uma refeição de todos que comem nela. Exemplo: o arroz do almoço da casa num pote, o feijão em outro.</li>
        <li><b>Pote da praça (640 ml):</b> fica na geladeira com o que você usa todo dia para montar o prato: folhas, cenoura ralada, queijo, presunto.</li>
      </ul>
      <p class="muted" style="font-size:.88rem">Com a sugestão, a primeira semana é pequena e fácil de fazer. Os potes entram aos poucos: a cada semana que der certo, mais 10, até chegar à semana completa.</p>
      <button class="btn small" id="usarSug">Usar a quantidade sugerida</button>
    </div>
    <div class="card" style="padding:4px 14px">
      ${contador("pote370", "Potes de 370 ml", potes(370), 0, 200, ml === 370 ? "O seu pote de porção" : "")}
      ${contador("pote640", "Potes de 640 ml", potes(640), 0, 200, ml === 640 ? "O seu pote de porção e o pote da praça" : "Pote da praça (geladeira)")}
      ${contador("pote1040", "Potes de 1040 ml", potes(1040), 0, 200, ml === 1040 ? "O seu pote de porção" : "")}
    </div>
    <div class="card" style="background:var(--blue-l);border-color:#C8DBE8">
      <b>Na sua casa (${fmtPorcao(porcoesCasa())}), cada refeição vai num pote de ${ml} ml.</b>
      <p><b>Tamanho da sua semana:</b> ${f.nome}. ${f.texto}</p>
      ${semAssado() ? `<p><b>A torta fica para depois:</b> ela vem recomendada, mas só entra no cardápio quando você tiver mais de 10 potes de porção.</p>` : ""}
    </div>
    <div class="card">
      <b>Para a semana completa do nível 1</b>
      <p class="muted">São cerca de ${POTES_SEMANA_COMPLETA.porcao} potes de porção e ${POTES_SEMANA_COMPLETA.praca} potes da praça.
      ${faltaPorcao || faltaPraca ? `Para chegar lá, faltariam ${[faltaPorcao ? faltaPorcao + " potes de " + ml + " ml" : "", faltaPraca ? faltaPraca + " potes de 640 ml" : ""].filter(Boolean).join(" e ")}. Não precisa comprar tudo agora: os potes entram aos poucos, semana a semana.` : "Você já tem potes suficientes."}</p>
    </div>
    <button class="btn" id="prox" style="width:100%;margin-top:8px">Próxima pergunta ›</button>
    <button class="btn ghost" id="volta" style="width:100%;margin-top:10px">‹ Voltar</button>`;
  ligaContadores(potesTela);
  // Usar a sugestão: preenche os contadores com a quantidade sugerida e redesenha a tela.
  document.getElementById("usarSug").onclick = () => {
    G.potes = sugestao(); saveGostos(); const y = window.scrollY; potesTela(); window.scrollTo(0,y);
    toast("Sugestão aplicada ✓");
  };
  document.getElementById("prox").onclick = () => { S.tab = "refeicoes"; go(); window.scrollTo(0,0); };
  document.getElementById("volta").onclick = () => { S.tab = "gostos"; go(); window.scrollTo(0,0); };
}

/* ============ TELA 3: REFEIÇÕES POR DIA ============ */
// refeicoes(): a mesma pergunta de antes, agora como pergunta 3.
function refeicoes(){
  $app.innerHTML = `<span class="pill s">Pergunta 3 de 4</span>
    <h1 style="margin-top:8px">🍽️ Quantas refeições por dia você quer fazer?</h1>
    <p class="muted">Se 6 for demais para a sua rotina, dá para fazer menos. A página junta ou tira refeições para caber no seu dia.</p>
    <div class="card" style="padding:4px 12px">
      ${[[6,"6 refeições (recomendado)","Café, lanche da manhã, almoço, lanche da tarde, janta e ceia."],
         [5,"5 refeições","Sem a ceia."],
         [4,"4 refeições","Sem a ceia e sem o lanche da manhã. A vitamina passa para o café."],
         [3,"3 refeições","Só café, almoço e janta. A vitamina passa para o café."]]
        .map(([n,t,dsc]) => `<div class="chk ${nRef()===n?"on":""}" data-ref="${n}"><div class="box" style="border-radius:50%">${nRef()===n?"✓":""}</div><div class="lbl" style="text-decoration:none;color:var(--ink)"><b>${t}</b><div class="muted" style="font-size:.85rem">${dsc}</div></div></div>`).join("")}
    </div>
    ${nRef() < 6 ? `<p class="muted" style="font-size:.88rem">Com menos refeições, fica mais difícil comer toda a proteína do dia.</p>` : ""}
    <button class="btn" id="prox" style="width:100%;margin-top:8px">Próxima pergunta ›</button>
    <button class="btn ghost" id="volta" style="width:100%;margin-top:10px">‹ Voltar</button>`;
  // Escolher quantas refeições por dia: salva e redesenha a tela.
  $app.querySelectorAll("[data-ref]").forEach(el => el.onclick = () => {
    G.refeicoes = +el.dataset.ref; saveGostos(); const y = window.scrollY; refeicoes(); window.scrollTo(0,y);
  });
  document.getElementById("prox").onclick = () => { S.tab = "escolha"; go(); window.scrollTo(0,0); };
  document.getElementById("volta").onclick = () => { S.tab = "potes"; go(); window.scrollTo(0,0); };
}

/* ============ TELA 4: O QUE VOCÊ QUER COMER? ============ */
// escolha(): a lista de alimentos por grupo, com os recomendados, o medidor de variedade
// e os níveis 2 a 4 fechados, só para ver.
function escolha(){
  iniciaEscolha();
  const fal = faltas();
  let html = `<span class="pill s">Pergunta 4 de 4</span>
    <h1 style="margin-top:8px">🥗 O que você quer comer?</h1>
    <p><b>Quanto mais alimentos você marcar, mais variado fica o seu cardápio.</b> Com poucos alimentos, as refeições ficam parecidas durante a semana.</p>
    <div class="card" style="background:var(--sun-l);border-color:#F3DFA8"><b>⭐ Recomendados</b><p>Os itens com estrela já vêm marcados: o método foi pensado para estes lanches rápidos. Você pode desmarcar.</p></div>`;
  // Um bloco por grupo: título, medidor e a lista de itens do nível 1.
  GRUPOS.forEach(g => {
    const itens = itensGrupo(g);
    const n1 = itens.filter(i => i.nivel === 1);
    const depois = itens.filter(i => i.nivel > 1);
    const med = medidor(g);
    html += `<div class="grp"><div class="sec-t">${g}</div>${med ? `<span class="med ${med.cls}">${med.txt}</span>` : ""}</div>
      <div class="card" style="padding:4px 12px">
      ${n1.map(i => `<div class="chk ${escolheu(i.id) ? "on esc" : ""}" data-esc="${i.id}"><div class="box">${escolheu(i.id) ? "✓" : ""}</div>
        <div class="lbl" style="text-decoration:none">${esc(nomeTela(i))}${i.recomendado ? ` <span class="selo">⭐ recomendado</span>` : ""}
          ${semAssado() && ehAssado(i) ? `<div class="muted" style="font-size:.8rem">Não entra nesta semana: precisa de mais de 10 potes de porção.</div>` : ""}</div></div>`).join("")}
      </div>`;
    // Níveis 2 a 4: fechados, só para ver, separados por nível.
    if (depois.length){
      html += `<details class="mais"><summary>Ver os próximos níveis (${depois.length})</summary>
        ${[2,3,4].filter(nv => depois.some(i => i.nivel === nv)).map(nv => `<div class="sub-t">Nível ${nv}</div>
          <div class="trancado">${depois.filter(i => i.nivel === nv).map(i => `<span>🔒 ${esc(nomeTela(i))}</span>`).join("")}</div>`).join("")}
        <p class="muted" style="font-size:.85rem">Libera quando você avançar de nível.</p></details>`;
    }
  });
  // Aviso da torta: marcada, mas fora da semana por causa do número de potes.
  const assadosMarcados = [...BANCO.preparos].filter(i => ehAssado(i) && escolheu(i.id));
  if (semAssado() && assadosMarcados.length){
    html += `<div class="card" style="background:var(--sun-l);border-color:#F3DFA8"><b>🫙 ${assadosMarcados.map(nomeTela).join(", ")}: fica para depois.</b>
      <p>Com até 10 potes de porção, a semana não leva torta. Ela entra quando você tiver mais potes. <a href="#potes">Mudar os potes</a></p></div>`;
  }
  // Aviso do que falta para o mínimo, ou a confirmação de que já dá para montar.
  html += fal.length
    ? `<div class="card" style="background:var(--tomato-l);border-color:#F2CDB9"><b>Ainda falta pouco para montar a semana sem repetir demais:</b>
        <ul class="lista">${fal.map(x => `<li><b>${cap1(x.r.tela)}:</b> ${x.msg.join(". ")}.</li>`).join("")}</ul></div>`
    : `<div class="card" style="background:var(--green-l);border-color:#BFD9C7"><b>✓ Já dá para montar a sua semana.</b> Se quiser mais variedade, marque mais alimentos.</div>`;
  html += `<button class="btn" id="pronto" style="width:100%;margin-top:8px" ${fal.length ? "disabled" : ""}>Montar meu cardápio ›</button>
    <button class="btn ghost" id="volta" style="width:100%;margin-top:10px">‹ Voltar</button>`;
  $app.innerHTML = html;
  // Marcar ou desmarcar um alimento: salva e redesenha, para o medidor se atualizar.
  $app.querySelectorAll("[data-esc]").forEach(el => el.onclick = () => {
    const id = el.dataset.esc; G.escolha[id] = !G.escolha[id]; if (!G.escolha[id]) delete G.escolha[id];
    saveGostos(); const y = window.scrollY; escolha(); window.scrollTo(0,y);
  });
  // Montar: marca as perguntas como respondidas e abre o cardápio para aprovar.
  document.getElementById("pronto").onclick = () => { if (faltas().length) return; G._visto = true; saveGostos(); S.tab = "aprovar"; go(); window.scrollTo(0,0); };
  document.getElementById("volta").onclick = () => { S.tab = "refeicoes"; go(); window.scrollTo(0,0); };
}
// cap1(): primeira letra maiúscula (ex.: "almoço" vira "Almoço").
const cap1 = s => s[0].toUpperCase() + s.slice(1);
// nomesEscolhidos(): os nomes do que a pessoa marcou, para o relatório.
const nomesEscolhidos = () => [...BANCO.ingredientes, ...BANCO.preparos].filter(i => escolheu(i.id)).map(nomeTela);
