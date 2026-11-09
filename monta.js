/* ============ MONTAGEM AUTOMÁTICA DA SEMANA ============ */
// Este arquivo monta a semana sozinho, a partir das respostas da pessoa:
// o cardápio, a lista de compras, o guardar, a cozinha e a conferência.
// Ele segue as regras de montagem do padrão do banco de dados (versão 1.8, seção 7).
// Desde o padrão 1.7, as regras de repetição e o limite de potes são SUGESTÃO:
// a página tenta seguir; quando não dá, monta assim mesmo e avisa a pessoa.
// Não usa IA: as mesmas respostas sempre dão a mesma semana.
//
// Como funciona, em 5 passos:
// 1) montaCardapio(): escolhe o prato de cada refeição, de segunda a domingo.
// 2) gastos(): soma o que a semana usa de cada preparo e de cada ingrediente.
// 3) compraDaSemana(): transforma o que a semana usa na lista de compras.
// 4) guardarDaSemana() e cozinhaDaSemana(): montam os passos de guardar e de cozinhar.
// 5) montaSemana(): coloca tudo nas listas que o script.js desenha (WEEK, SHOP, ARM...).
//
// A página carrega, nesta ordem: banco.js, escolha.js, dados-semana1.js, este arquivo e script.js.
// Os dados fixos do dados-semana1.js continuam lá só como modelo: quando a pessoa
// responde as perguntas, este arquivo troca o conteúdo deles pela semana montada.

/* ============ SEMANA 2 DURANTE O TESTE ============ */
// A Semana 2 ainda é fixa e não usa as escolhas da pessoa. Por isso, durante o teste,
// o botão "Começar a Semana 2" (no fim do relatório) fica escondido: sem página seguinte, ele não aparece.
SEMANA.proxima = null;

/* ============ AJUDANTES DE NÚMERO E TEXTO ============ */
// primeiroNum(): pega o primeiro número de um texto. "140 g, com o caldo" → 140; "½" → 0,5.
function primeiroNum(t){
  const m = String(t || "").replace("½", ".5").match(/\d+([.,]\d+)?/);
  return m ? parseFloat(m[0].replace(",", ".")) : null;
}
// gramasPorcao(): o peso de 1 porção de um preparo, em gramas. "105 g (150 g cru)" → 105.
const gramasPorcao = p => /\d\s*g\b/.test(p.porcao || "") ? primeiroNum(p.porcao) : null;
// maxDias(): quantos dias, no máximo, um preparo dura na geladeira. "3 a 4 dias" → 4.
function maxDias(p){
  const t = (p.validade && p.validade.geladeira) || "";
  if (!/dia/.test(t)) return null;
  const nums = (t.match(/\d+/g) || []).map(Number);
  return nums.length ? Math.max(...nums) : null;
}
// limiteDia(): até que dia da semana o preparo pode aparecer (0 = segunda, 6 = domingo).
// Padrão, seção 7.5, regra 4: o que dura até 4 dias só até a quarta; até 3 dias, só até a terça.
// Seguindo a mesma conta, o que dura 2 dias fica só para a segunda.
// O que dura mais de 4 dias pode aparecer a semana toda.
function limiteDia(p){
  if (!p || p.tipo !== "preparo" || p.local !== "geladeira") return 6;
  const d = maxDias(p);
  return d && d <= 4 ? Math.max(0, d - 2) : 6;
}
// rendePorcoes(): quantas porções de 1 pessoa uma receita do preparo dá.
// Cada ficha escreve o rendimento de um jeito ("5 potes", "7 pedaços", "350 g"...),
// então esta função entende os jeitos que aparecem no nível 1.
function rendePorcoes(p){
  const r = p.rende || "";
  const g = gramasPorcao(p);
  const cubos = r.match(/(\d+)\s*cubos/);
  if (cubos) return +cubos[1];                                   // pasta de alho e cebola: 45 cubos
  if (/^\s*(cerca de\s*)?\d+\s*g\b/.test(r)) {                   // "350 g" ou "cerca de 150 g"
    const total = primeiroNum(r);
    return g ? total / g : total / 10;                           // crisps: 1 colher de sopa ≈ 10 g
  }
  if (/pote da praça/.test(r) && g) {                            // cenoura ralada, mamão picado
    const total = (p.receita || []).reduce((s, x) => s + (/g/.test(x.unidade) ? (x.qtd || 0) : 0), 0);
    return total / g;
  }
  return primeiroNum(r) || 1;                                    // "5 potes", "7 pedaços", "1 kit"
}
// fmtNum(): escreve um número com vírgula e com as frações mais comuns (½, ¼, ¾).
function fmtNum(n){
  const w = Math.floor(n + 1e-9), f = n - w;
  if (f < 0.13) return String(w || (n > 0 ? "¼" : "0"));
  const fr = f < 0.38 ? "¼" : f < 0.63 ? "½" : f < 0.88 ? "¾" : null;
  if (!fr) return String(w + 1);
  return (w ? w : "") + fr;
}
// fmtPeso(): escreve gramas e mililitros arredondados. 1250 g → "1,25 kg"; 135 g → "135 g".
function fmtPeso(v, un){
  if (un === "g") return v >= 1000 ? String(Math.round(v / 10) / 100).replace(".", ",") + " kg" : Math.round(v / 5) * 5 + " g";
  return v >= 1000 ? String(Math.round(v / 100) / 10).replace(".", ",") + " litro" + (v >= 2000 ? "s" : "") : Math.round(v / 10) * 10 + " ml";
}
// minus(): a primeira letra em minúscula, para juntar nomes numa frase.
const minus = t => t ? t[0].toLowerCase() + t.slice(1) : t;
// frase(): junta itens com vírgula e "e" no fim. ["a","b","c"] → "a, b e c".
const frase = l => l.length < 2 ? (l[0] || "") : l.slice(0, -1).join(", ") + " e " + l[l.length - 1];
// plural(): coloca no plural as palavras de unidade quando o número passa de 1.
function plural(n, palavra){
  if (n <= 1) return palavra;
  return palavra.split(" ").map((w, i) => i === 0 ? (w.endsWith("ão") ? w.slice(0, -2) + "ões" : /[aeiou]$/.test(w) ? w + "s" : w) : w).join(" ");
}

/* ============ O QUE CADA ITEM USA ============ */
// resolve(): diz qual item entra de verdade no lugar de um item da receita (ou do prato).
// - Se o item está disponível, entra ele mesmo.
// - Se é opcional e não está disponível, sai (null).
// - Se não está disponível, entra o primeiro substituto disponível (padrão, seção 6).
// - Se o preparo foi escolhido pelo nome (exemplo: torta), a receita vem inteira (padrão, lista 5.8).
function resolve(r, receitaInteira){
  if (BANCO_SEM_FICHA.includes(r.id)) return null;            // água: não entra na compra
  if (receitaInteira) return r.id;
  if (disponivel(r.id)) return r.id;
  if (r.opcional) return null;
  const it = BANCO_ID[r.id];
  const sub = ((it && it.substitutos) || []).find(s => BANCO_ID[s] && BANCO_ID[s].tipo === "ingrediente" && disponivel(s));
  return sub || r.id;
}
// partes(): a lista do que um prato ou preparo leva, já com as trocas feitas.
// Cada parte tem: id (o que entra), qtd, unidade e o item original da ficha (r).
function partes(item){
  const lista = item.tipo === "prato" ? item.componentes : (item.receita || []);
  const inteira = item.tipo === "preparo" && !!item.escolha && escolheu(item.id);
  return lista.map(r => ({id: resolve(r, inteira), qtd: r.qtd, unidade: r.unidade, texto: r.texto, r}))
    .filter(x => x.id);
}
// porcoesDe(): quantas porções de um preparo uma parte representa.
// Exemplos: "1 pote" de arroz = 1 porção; "½ pote" de molho = meia porção;
// "150 g" de frango desfiado = 150 ÷ 40 g; "3" ovos cozidos = 1½ porção (a porção é de 2 ovos).
function porcoesDe(x){
  const p = BANCO_ID[x.id];
  const q = x.qtd == null ? 1 : x.qtd;
  if (x.id === "ovos-cozidos" && x.unidade === "") return q / 2;
  if (/^g\b/.test(x.unidade) && gramasPorcao(p)) return q / gramasPorcao(p);
  if (/colher/.test(x.unidade) && gramasPorcao(p)) return q * 10 / gramasPorcao(p);
  return q;
}
// ehGuardado(): o preparo fica no freezer em pote de porção (é o que conta no limite de potes).
const ehPotePorcao = p => p && p.tipo === "preparo" && p.local === "freezer" && p.embalagem === "pote de porção";
// FREEZER_KEY: os itens que aparecem no estoque do freezer (preparos do freezer e a polpa de fruta).
const noFreezer = id => { const p = BANCO_ID[id]; return p && ((p.tipo === "preparo" && p.local === "freezer" && p.embalagem !== "cubo") || id === "polpa-fruta"); };
// usoFreezer(): o que um item do cardápio tira do freezer, em potes (ou saquinhos) da casa.
// Cada pote guarda a refeição de todos da casa, então 1 pote por refeição.
// A polpa é contada em pacotes: 1 por pessoa.
function usoFreezer(item){
  const u = {};
  const soma = (k, v) => u[k] = (u[k] || 0) + v;
  if (item.tipo === "preparo") { if (noFreezer(item.id)) soma(item.id, 1); return u; }
  if (item.tipo !== "prato") return u;
  partes(item).forEach(x => {
    if (!noFreezer(x.id)) return;
    if (x.id === "polpa-fruta") soma(x.id, (x.qtd || 1) * porcoesCasa());
    else soma(x.id, porcoesDe(x));
  });
  return u;
}
// todosIds(): todos os ids que um item usa, descendo pelas receitas (para as regras da ceia).
function todosIds(item, visto){
  visto = visto || {};
  if (!item || visto[item.id]) return [];
  visto[item.id] = true;
  if (item.tipo === "ingrediente") return [item.id];
  return [item.id, ...partes(item).flatMap(x => BANCO_ID[x.id] ? todosIds(BANCO_ID[x.id], visto) : [x.id])];
}
// temPapel(): o item cumpre um papel no prato? (carboidrato, proteína, vegetal, fruta, bebida...)
const temPapel = (item, papel) => (item.preenche || item.papel || []).includes(papel);
const temProteina = item => temPapel(item, "proteína") || temPapel(item, "proteína leve");

/* ============ REGRAS DA CEIA E DA VALIDADE ============ */
// CEIA_FORA: o que não entra na ceia: cafeína, itens gordurosos e picantes (manual, seção 5.5).
const CEIA_FORA = ["cafe-soluvel", "calabresa", "crisps-calabresa", "carne-moida", "bolonhesa", "pimenta-do-reino"];
const podeNaCeia = item => !todosIds(item).some(id => CEIA_FORA.includes(id));
// diaLimite(): o último dia em que o item pode aparecer, pela validade curta das partes dele.
function diaLimite(item){
  if (item.tipo === "preparo") return limiteDia(item);
  if (item.tipo !== "prato") return 6;
  return Math.min(6, ...partes(item).map(x => limiteDia(BANCO_ID[x.id])));
}
// recomendadoEm(): o item é (ou usa) um alimento recomendado (tapioca, flocão, farelo de aveia, torta).
const recomendadoEm = item => item.recomendado || (item.tipo === "prato" && partes(item).some(x => BANCO_ID[x.id] && BANCO_ID[x.id].recomendado));
// ORDEM_BANCO: a posição de cada item no banco de dados (último desempate).
const ORDEM_BANCO = {};
[...BANCO.ingredientes, ...BANCO.preparos, ...BANCO.pratos].forEach((it, i) => ORDEM_BANCO[it.id] = i);

/* ============ POTES DA PESSOA ============ */
// orcamentoPotes(): quantos potes de porção a pessoa tem. Desde o manual 3.19, isso NÃO limita
// a semana: só decide se sobra pote para guardar receitas inteiras (seção 2) e se aparece o aviso de potes.
// Quando o pote de porção da casa é o de 640 ml, ele divide espaço com o pote da praça:
// a página separa 4 potes para a praça (a quantidade sugerida) e usa o resto como pote de porção.
function orcamentoPotes(){
  const ml = tamanhoPote();
  if (ml === 640) return Math.max(0, potes(640) - SUGESTAO_INICIO.praca);
  return potes(ml);
}
// potesNovos(): quantos potes novos um item gasta, dado o que já foi usado na semana.
// O molho usa meio pote por refeição: dois pratos dividem o mesmo pote.
function potesNovos(item, usados){
  let n = 0;
  const u = usoFreezer(item);
  for (const k in u) if (ehPotePorcao(BANCO_ID[k])) n += Math.ceil((usados[k] || 0) + u[k] - 1e-9) - Math.ceil((usados[k] || 0) - 1e-9);
  return n;
}

/* ============ 1. O CARDÁPIO ============ */
// As refeições na ordem de montagem (padrão, seção 7.5): café, lanche da manhã, almoço,
// lanche da tarde, janta e ceia. A página preenche cada refeição de segunda a domingo.
// principais(): os pratos que podem ser o prato principal da refeição.
// Usa as mesmas regras da contagem da tela de escolha (escolha.js, contaRef).
function principais(r){
  return candidatos(r.nome).filter(p => tipoPrato(p) === "prato"
    && (!r.soBase || temPapel(p, "carboidrato"))
    && (!r.comProteina || temProteina(p))
    && (r.nome !== "ceia" || podeNaCeia(p)));
}
// reservas(): pratos feitos na hora (recheado, salada com proteína, prato de ovos) que também
// podem entrar no almoço e na janta, para dar mais variedade (manual, seção 0.6).
function reservas(r){
  if (!r.comProteina) return [];
  return BANCO.pratos.filter(p => p.nivel <= NIVEL && ["recheado", "prato de ovos", "salada"].includes(p.modulo)
    && (p.modulo === "prato de ovos" ? temProteina(p) : temPapel(p, "proteína")) && tipoPrato(p) === "prato" && !p.refeicoes.includes(r.nome)
    && p.refeicoes.some(x => ["janta", "lanche da tarde", "café"].includes(x)) && disponivel(p.id));
}
// opcoes(): as bebidas, os pratos de ovos, as frutas e os acompanhamentos que completam o molde.
function bebidas(ref){ return candidatos(ref).filter(p => tipoPrato(p) === "bebida"); }
function acomps(ref){ return candidatos(ref).filter(p => tipoPrato(p) === "acomp"); }
function pratosOvos(ref){ return candidatos(ref).filter(p => p.modulo === "prato de ovos" && p.refeicoes.includes(ref)); }
// frutas(): no café, a fruta pode ser o mamão picado ou uma fruta inteira escolhida.
// O mamão só entra picado (preparo); laranja, limão e polpa ficam para o suco.
function frutas(){
  // (o mamão picado é usado na aveia dormida, por isso não sai em candidatos(): é buscado direto no banco)
  const prep = BANCO.preparos.filter(p => p.nivel <= NIVEL && p.refeicoes.includes("café") && temPapel(p, "fruta") && disponivel(p.id));
  const ing = BANCO.ingredientes.filter(i => i.nivel <= NIVEL && i.papel[0] === "fruta" && i.refeicoes.includes("café")
    && !BANCO.preparos.some(p => p.nivel <= NIVEL && temPapel(p, "fruta") && p.local === "geladeira" && (p.receita || []).some(r => r.id === i.id))
    && disponivel(i.id));
  return [...prep, ...ing];
}

// opcoesOk(): as opções de uma lista que servem para um dia e uma refeição, da melhor para a pior.
// lista = as opções; ctx = o que já foi escolhido na semana; duro = regras que não podem quebrar.
// Regras (padrão, seção 7.5):
// 1) no máximo 3 vezes na semana naquela refeição (menos no café e no lanche da manhã);
// 2) não repetir o do dia anterior naquela refeição;
// 3) não repetir no mesmo dia um prato de outra refeição;
// 4) validade curta; 5) a ceia (já filtrada em principais).
// As regras 1, 2 e 3 são PREFERÊNCIA: com opc.relax = true, elas são ignoradas
// (é o que a página usa quando a pessoa marcou poucos alimentos). As regras 4 e 5 valem sempre.
// Os potes não entram mais aqui: a semana não é limitada pelos potes (manual 3.19, seção 0.6).
// Desempate: o menos usado, o de validade mais curta, o recomendado e a ordem do banco.
function opcoesOk(lista, dia, ri, ctx, opc){
  opc = opc || {};
  const fam = opc.porId ? (p => p.id) : familia;
  const naRef = ctx.contaRef[ri] || (ctx.contaRef[ri] = {});
  const ontem = dia > 0 ? (ctx.ontem[ri] && ctx.ontem[ri][opc.slot || "p"]) : null;
  const ok = lista.filter(p => {
    if (!opc.relax && opc.max3 && (naRef[fam(p)] || 0) >= 3) return false;                              // regra 1
    if (!opc.relax && opc.semSeguido !== false && ontem && fam(BANCO_ID[ontem] || {id: ontem}) === fam(p)) return false;  // regra 2
    if (!opc.relax && (ctx.hoje[p.id] || 0) > 0 && p.tipo !== "ingrediente" && tipoPrato(p) !== "bebida") return false;  // regra 3
    if (dia > diaLimite(p)) return false;                                                                 // regra 4 (sempre)
    return true;
  });
  return ok.sort((a, b) =>
    ((naRef[fam(a)] || 0) - (naRef[fam(b)] || 0)) ||
    ((ctx.semana[a.id] || 0) - (ctx.semana[b.id] || 0)) ||
    (diaLimite(a) - diaLimite(b)) ||
    ((recomendadoEm(b) ? 1 : 0) - (recomendadoEm(a) ? 1 : 0)) ||
    (ORDEM_BANCO[a.id] - ORDEM_BANCO[b.id]));
}
// escolhe(): a melhor opção que respeita as regras (ou null, se nenhuma respeita).
const escolhe = (lista, dia, ri, ctx, opc) => opcoesOk(lista, dia, ri, ctx, opc)[0] || null;
// marca(): registra o item escolhido: conta na semana, no dia, na refeição e nos potes.
function marca(p, ri, ctx, slot, porId){
  const fam = porId ? p.id : familia(p);
  const cr = ctx.contaRef[ri] || (ctx.contaRef[ri] = {});
  cr[fam] = (cr[fam] || 0) + 1;
  ctx.semana[p.id] = (ctx.semana[p.id] || 0) + 1;
  ctx.hoje[p.id] = (ctx.hoje[p.id] || 0) + 1;
  (ctx.ontemNovo[ri] = ctx.ontemNovo[ri] || {})[slot] = p.id;
  ctx.gastos += potesNovos(p, ctx.usados);
  const u = usoFreezer(p);
  for (const k in u) if (ehPotePorcao(BANCO_ID[k])) ctx.usados[k] = (ctx.usados[k] || 0) + u[k];
}
// nomeDe() e curtoDe(): o texto de um item no cardápio e na tabela da semana.
const nomeDe = it => it.tipo === "ingrediente" ? it.nome.split(" ")[0] : it.nome;
const curtoDe = it => it.curto || (it.tipo === "ingrediente" ? it.nome.split(" ")[0] : it.nome);

// montaCardapio(): monta as 7 × 6 refeições. Devolve {dias, erro}.
// Cada refeição é {itens: [...], texto, curto}. Refeições que a pessoa não faz ficam vazias.
function montaCardapio(){
  // A ordem do padrão é café, lanche da manhã, almoço, lanche da tarde, janta e ceia.
  // Se uma refeição não fechar (por exemplo, a janta, porque o almoço já usou os potes),
  // a página tenta de novo começando por ela. São no máximo 3 tentativas.
  let ordem = REFS.slice(), res = null;
  for (let t = 0; t < 3; t++){
    res = montaNaOrdem(ordem);
    if (!res.erro) return res;
    ordem = [res.falhou, ...ordem.filter(r => r !== res.falhou)];
  }
  return res;
}
// montaNaOrdem(): monta as refeições na ordem pedida.
function montaNaOrdem(ordemRefs){
  // orc: Infinity = sem limite de potes na montagem (o aviso de potes é feito depois, em avisoDePotes).
  const ctx = {contaRef: {}, semana: {}, usados: {}, gastos: 0, orc: Infinity, ontem: {}};
  const dias = Array.from({length: 7}, () => Array.from({length: 6}, () => null));
  let erro = null;
  // Com até 4 refeições, o lanche da manhã sai, mas a vitamina vai para o café (script.js, ATIVAS).
  const ativasAgora = ativas();
  const fazVitamina = ativasAgora.includes(1) || vitNoCafe();
  // A ordem de montagem é por refeição (café de segunda a domingo, depois o lanche da manhã...).
  // Para a regra do "mesmo dia", cada dia guarda o que já entrou nele (hojePorDia).
  const hojePorDia = Array.from({length: 7}, () => ({}));
  const ontemPorRef = {};
  const DIAS = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];
  // foto() e volta(): guardam e devolvem o estado da montagem. Servem para "voltar atrás":
  // se um dia não fecha, a página desfaz o dia anterior e tenta a opção seguinte.
  const foto = () => JSON.stringify({c: ctx.contaRef, s: ctx.semana, u: ctx.usados, g: ctx.gastos, h: hojePorDia, o: ontemPorRef});
  const volta = f => {
    const x = JSON.parse(f);
    ctx.contaRef = x.c; ctx.semana = x.s; ctx.usados = x.u; ctx.gastos = x.g;
    hojePorDia.splice(0, 7, ...x.h);
    Object.keys(ontemPorRef).forEach(k => delete ontemPorRef[k]); Object.assign(ontemPorRef, x.o);
  };
  let falhou = null;
  ordemRefs.forEach(r => {
    if (erro) return;
    const ativa = ativasAgora.includes(r.i);
    if (!ativa && !(r.i === 1 && fazVitamina)) return;
    const vit = bebidas("lanche da manhã").filter(p => p.modulo === "vitamina")[0];
    // poeDia(): coloca o prato p no dia d e completa o molde da refeição.
    const poeDia = (d, p) => {
      ctx.hoje = hojePorDia[d];
      ctx.ontem = {[r.i]: d > 0 ? ontemPorRef[r.i] : null};
      ctx.ontemNovo = {};
      const itens = [];
      // Lanche da manhã: a vitamina aparece todo dia, e a base alterna.
      if (r.i === 1 && vit) { itens.push(vit); marca(vit, r.i, ctx, "vit", true); }
      if (!p) { dias[d][r.i] = {itens, so: true}; ontemPorRef[r.i] = ctx.ontemNovo[r.i]; return; }
      marca(p, r.i, ctx, "p");
      // Completar o molde da refeição (manual, seções 5.1 e 5.2).
      const extras = completa(r, p, d, ctx);
      dias[d][r.i] = {itens: [...itens, p, ...extras], principal: p, extras, r};
      ontemPorRef[r.i] = ctx.ontemNovo[r.i];
    };
    // Lanche da manhã que a pessoa não faz: só a vitamina, que vai para o café.
    if (!ativa) { for (let d = 0; d < 7; d++) poeDia(d, null); return; }
    const max3 = r.i >= 2;
    let passos = 0, maisLonge = 0;
    // tenta(): preenche a refeição do dia d em diante. Começa pela melhor opção;
    // se lá na frente algum dia não fechar, volta e tenta a próxima.
    const tenta = d => {
      if (d === 7) return true;
      maisLonge = Math.max(maisLonge, d);
      if (++passos > 4000) return false;
      ctx.hoje = hojePorDia[d];
      ctx.ontem = {[r.i]: d > 0 ? ontemPorRef[r.i] : null};
      // As opções, na ordem: na ceia, primeiro as que têm carboidrato (manual, seção 5.1);
      // depois os pratos da refeição; no almoço e na janta, depois os pratos feitos na hora (reservas).
      // Primeiro vêm as opções que seguem as regras 1 a 3; no fim da lista, as mesmas opções
      // "soltas" (relax), que só entram quando nenhuma outra serve (manual 3.19, seção 0.12).
      const lista = [];
      [{max3}, {max3, relax: true}].forEach(opc => {
        if (r.nome === "ceia") lista.push(...opcoesOk(principais(r).filter(x => temPapel(x, "carboidrato")), d, r.i, ctx, opc));
        lista.push(...opcoesOk(principais(r), d, r.i, ctx, opc));
        if (r.comProteina) lista.push(...opcoesOk(reservas(r), d, r.i, ctx, opc));
      });
      const vistos = new Set();
      for (const p of lista){
        if (vistos.has(p.id)) continue;
        vistos.add(p.id);
        const f = foto();
        poeDia(d, p);
        if (tenta(d + 1)) return true;
        volta(f);
        dias[d][r.i] = null;
      }
      return false;
    };
    if (!tenta(0)) falhou = r, erro = erro || `Não deu para montar ${r.tela === "café da manhã" ? "o café da manhã" : r.tela === "janta" || r.tela === "ceia" ? "a " + r.tela : "o " + r.tela} de ${DIAS[maisLonge]}.`;
  });
  // Escreve os textos de cada refeição.
  dias.forEach(dia => dia.forEach(m => { if (m) Object.assign(m, textos(m)); }));
  return {dias, erro, falhou, potesUsados: ctx.gastos, orc: orcamentoPotes()};
}
// completa(): o que falta no molde, além do prato principal.
// Café: bebida, proteína leve (ovos) e fruta. Almoço: suco e acompanhamento de vegetal.
// Lanche da tarde: bebida. Janta: acompanhamento de vegetal. Ceia: ovos com o mingau sem ovo.
function completa(r, p, d, ctx){
  const ex = [];
  const add = (lista, slot, opc) => { const x = escolhe(lista, d, r.i, ctx, Object.assign({porId: true, slot}, opc)); if (x) { marca(x, r.i, ctx, slot, true); ex.push(x); } return x; };
  // "suave": se nada respeitar as regras, aceita repetir (bebidas e frutas alternam quando dá).
  const addSuave = (lista, slot) => add(lista, slot) || add(lista, slot, {relax: true});
  // addAcomp(): legume ou salada, no máximo 3 vezes na semana; com poucos escolhidos, repete (relax).
  const addAcomp = ref => add(acomps(ref), "acomp", {max3: true}) || add(acomps(ref), "acomp", {relax: true});
  if (r.nome === "café"){
    addSuave(bebidas("café"), "beb");
    if (!temProteina(p)) addSuave(pratosOvos("café"), "ovo");
    if (!temPapel(p, "fruta")) addSuave(frutas(), "fruta");
  } else if (r.nome === "almoço"){
    addSuave(bebidas("almoço"), "beb");
    if (!temPapel(p, "vegetal")) addAcomp("almoço");
  } else if (r.nome === "lanche da tarde"){
    if (!temPapel(p, "bebida")) addSuave(bebidas("lanche da tarde").filter(b => b.modulo !== "vitamina"), "beb");
  } else if (r.nome === "janta"){
    if (!temPapel(p, "vegetal")) addAcomp("janta");
  } else if (r.nome === "ceia"){
    // O mingau vai sempre com uma proteína leve (manual, seção 5.3).
    if (p.modulo === "mingau" && !temProteina(p)) addSuave(pratosOvos("ceia"), "ovo");
  }
  return ex;
}
// textos(): o texto completo (dia a dia) e o curto (tabela da semana) de uma refeição.
function textos(m){
  if (m.so) return {texto: m.itens.map(nomeDe).join(", "), curto: "Vitamina"};
  const p = m.principal, ex = m.extras, i = m.r.i;
  const beb = ex.find(x => tipoPrato(x) === "bebida");
  const ac = ex.find(x => tipoPrato(x) === "acomp");
  const ovo = ex.find(x => x.modulo === "prato de ovos");
  const fr = ex.find(x => x !== beb && x !== ovo && x !== ac);
  const N = x => minus(nomeDe(x));
  // juntaCurto(): "Arroz, feijão e frango" + "salada" → "Arroz, feijão, frango e salada" (texto curto da tabela).
  const juntaCurto = (a, x) => x ? a.replace(/ e ([^,]+)$/, ", $1") + " e " + (x.modulo === "salada" ? "salada" : minus(curtoDe(x))) : a;
  if (i === 0){
    const l = [beb, ovo, p, fr].filter(Boolean);
    return {texto: nomeDe(l[0]) + (l.length > 1 ? ", " + frase(l.slice(1).map(N)) : ""),
            curto: frase([ovo, p, fr].filter(Boolean).map((x, k) => k ? minus(curtoDe(x)) : curtoDe(x)))};
  }
  if (i === 1) return {texto: "Vitamina de frutas e " + N(p), curto: "Vitamina e " + minus(curtoDe(p))};
  if (i === 2) return {texto: (beb ? nomeDe(beb) + ", " + N(p) : nomeDe(p)) + (ac ? ", com " + N(ac) : ""),
                       curto: juntaCurto(curtoDe(p), ac)};
  if (i === 3) return {texto: nomeDe(p) + (beb ? " e " + N(beb) : ""), curto: curtoDe(p)};
  if (i === 4) return {texto: nomeDe(p) + (ac ? ", com " + N(ac) : ""), curto: juntaCurto(curtoDe(p), ac)};
  return {texto: nomeDe(p) + (ovo ? " e " + N(ovo) : ""), curto: curtoDe(p) + (ovo ? " e ovos" : "")};
}

/* ============ 2. O QUE A SEMANA GASTA ============ */
// gastos(): soma, em porções de 1 pessoa, o que a semana usa de cada preparo,
// e, em quantidade, o que usa de cada ingrediente.
// Só contam as refeições que a pessoa faz (e a vitamina, quando ela vai para o café).
// Toda quantidade é multiplicada pelas porções da casa (padrão, seção 7.1.1).
function gastos(dias){
  const P = porcoesCasa();
  const prep = {};     // preparo → porções guardadas para o cardápio
  const ing = {};      // ingrediente → lista de {qtd, unidade}
  const addIng = (id, qtd, unidade, mult) => (ing[id] = ing[id] || []).push({qtd: qtd == null ? null : qtd * mult, unidade});
  const usa = (item, mult) => {
    if (item.tipo === "ingrediente") { addIng(item.id, 1, "unidade", mult); return; }
    if (item.tipo === "preparo") { prep[item.id] = (prep[item.id] || 0) + mult; return; }
    partes(item).forEach(x => {
      const it = BANCO_ID[x.id];
      if (!it) return;
      if (it.tipo === "preparo") prep[x.id] = (prep[x.id] || 0) + porcoesDe(x) * mult;
      else addIng(x.id, x.qtd, x.unidade, mult);
    });
  };
  dias.forEach(dia => dia.forEach(m => { if (m) m.itens.forEach(it => usa(it, P)); }));
  return {prep, ing};
}
// producao(): quanto fazer de cada preparo.
// 1) Os preparos que usam outros (exemplo: a bolonhesa usa molho e carne moída) são vistos primeiro,
//    e somam o que precisam nos preparos de que dependem.
// 2) Cada preparo é feito em receitas inteiras quando a sobra cabe nos potes (padrão, seção 7.6:
//    as porções a mais ficam no freezer para a próxima semana). Se não couber, faz só o que a semana usa.
function producao(g, potesUsados, orc){
  const P = porcoesCasa();
  const precisa = Object.assign({}, g.prep);           // porções: cardápio + outros preparos
  const guardado = Object.assign({}, g.prep);          // porções que vão para o cardápio
  // ordem: quem usa vem antes de quem é usado.
  const ordem = [];
  const visita = (id, vis) => {
    if (vis[id]) return; vis[id] = true;
    const p = BANCO_ID[id];
    partes(p).forEach(x => { if (BANCO_ID[x.id] && BANCO_ID[x.id].tipo === "preparo") visita(x.id, vis); });
    ordem.unshift(id);
  };
  const todos = new Set(Object.keys(precisa));
  // inclui os preparos que só servem para outros (molhos, pasta de alho e cebola, crisps...)
  let mudou = true;
  while (mudou){ mudou = false; [...todos].forEach(id => partes(BANCO_ID[id]).forEach(x => { if (BANCO_ID[x.id] && BANCO_ID[x.id].tipo === "preparo" && !todos.has(x.id)) { todos.add(x.id); mudou = true; } })); }
  const vis = {}; [...todos].forEach(id => visita(id, vis));
  const res = {};
  // Receitas inteiras só quando a sobra cabe nos potes que a pessoa tem (com potes faltando, nada sobra).
  let sobraPotes = Math.max(0, orc - potesUsados);
  ordem.forEach(id => {
    const p = BANCO_ID[id];
    const T = precisa[id] || 0;
    if (T <= 0) return;
    const rp = rendePorcoes(p);
    const exata = T / rp;
    let receitas = Math.ceil(exata - 1e-9);
    const usoCasa = (guardado[id] || 0) / P;             // refeições da casa no cardápio
    let potesCasa = Math.ceil(usoCasa - 1e-9);
    if (id === "kit-vitamina-base" || id === "ovos-cozidos") receitas = exata;     // 1 kit ou 2 ovos de cada vez
    if (ehPotePorcao(p)){
      // Sobra da receita inteira, em potes da casa (o que não vai para outros preparos).
      const sobraPorcoes = receitas * rp - T;
      const extra = Math.floor(sobraPorcoes / P + 1e-9);
      if (extra > sobraPotes) receitas = exata;
      else { potesCasa += extra; sobraPotes -= extra; }
    }
    if (p.local === "freezer" && p.embalagem === "saquinho") potesCasa = Math.floor((receitas * rp - (T - (guardado[id] || 0))) / P + 1e-9);
    res[id] = {p, receitas, porcoes: receitas * rp, potes: potesCasa, usoCasa};
    // Soma nos preparos de que este depende.
    partes(p).forEach(x => {
      const it = BANCO_ID[x.id];
      if (it && it.tipo === "preparo") precisa[x.id] = (precisa[x.id] || 0) + porcoesDe(x) * receitas;
    });
  });
  // Ingredientes usados nas receitas.
  const ing = {};
  Object.keys(g.ing).forEach(k => ing[k] = g.ing[k].slice());
  Object.values(res).forEach(({p, receitas}) => partes(p).forEach(x => {
    const it = BANCO_ID[x.id];
    if (it && it.tipo === "ingrediente") (ing[x.id] = ing[x.id] || []).push({qtd: x.qtd == null ? null : x.qtd * receitas, unidade: x.unidade});
  }));
  return {prep: res, ing};
}

/* ============ 3. A LISTA DE COMPRAS ============ */
// Para fazer as contas, cada medida vira gramas, mililitros ou unidades.
// Medidas caseiras usadas no nível 1 (estimativas, para conferir no teste):
const XICARA = {"farinha-de-trigo": 120, "fuba": 120, "leite-integral": 240};          // g ou ml por xícara
const COLHER = {"cenoura-ralada": 10};                                                   // g por colher de sopa
// CONTA: os itens comprados por unidade e contados um a um (os outros pacotes entram 1 vez).
const CONTA = ["ovos", "atum", "polpa-fruta", "alho", "pao-frances"];
const UNID_G = {"banana-nanica": 150, "maca-gala": 150, "laranja-pera": 200, "limao-tahiti": 100}; // g por unidade, com casca
// medida(): uma quantidade da ficha em {g}, {ml} ou {un}. Devolve null quando não dá para medir
// (a gosto, colheres de temperos, fatias...): esses itens entram na compra uma vez (padrão, seção 7.6, item 5).
function medida(id, qtd, unidade){
  if (qtd == null) return null;
  const u = unidade || "";
  if (/^g\b/.test(u)) return {g: qtd};
  if (u === "kg") return {g: qtd * 1000, bruto: true};          // "1 kg" já é o peso de compra
  if (u === "ml") return {ml: qtd};
  if (/xícara/.test(u) && XICARA[id]) return id === "leite-integral" ? {ml: qtd * 240} : {g: qtd * XICARA[id]};
  if (/colher/.test(u) && COLHER[id]) return {g: qtd * COLHER[id]};
  if (/unidade/.test(u) && UNID_G[id]) return {g: qtd * UNID_G[id], bruto: true};
  if (CONTA.includes(id) && (u === "" || u === "por porção" || /lata|cabeça|unidade/.test(u))) return {un: qtd};
  return null;
}
// aproveitamento(): a parte que se aproveita do ingrediente (sem casca, caroço ou osso).
// Quando a ficha traz um texto ("60% (suco: 45%)"), usa o primeiro número em %.
function aproveitamento(it){
  if (typeof it.aproveitavel === "number") return it.aproveitavel;
  const m = String(it.aproveitavel || "").match(/(\d+)%/);
  return m && !/cozido|como crisps/.test(it.aproveitavel) ? +m[1] / 100 : 1;
}
// compraDe(): a quantidade de compra de um ingrediente, arredondada para cima pela unidade de compra.
// Exemplo do padrão: 1,3 kg de banana a 65% → 2 kg.
function compraDe(it, usos){
  let g = 0, ml = 0, un = 0, medido = false;
  const ap = aproveitamento(it);
  usos.forEach(x => {
    const m = medida(it.id, x.qtd, x.unidade);
    if (!m) return;
    medido = true;
    if (m.g != null) g += m.bruto ? m.g : m.g / ap;
    if (m.ml != null) ml += m.ml;
    if (m.un != null) un += m.un;
  });
  const c = it.compra;
  if (!medido) return c.texto;                                     // itens de base: 1 vez
  if (c.unidade === "kg") { const kg = Math.max(0.5, Math.ceil(g / 500 - 1e-9) / 2); return kg < 1 ? "500 g" : String(kg).replace(".", ",") + " kg"; }
  if (c.unidade === "g") { const t = Math.ceil(g / c.qtd - 1e-9) * c.qtd; return t >= 1000 ? String(t / 1000).replace(".", ",") + " kg" : t + " g"; }
  if (c.unidade === "litro") { const l = Math.max(1, Math.ceil(ml / 1000 - 1e-9)); return l + (l > 1 ? " litros" : " litro"); }
  if (c.unidade === "unidade" && un > 0){
    let n = Math.ceil(un - 1e-9);
    if (it.id === "ovos") n = Math.ceil(n / 6) * 6;                 // ovos: de 6 em 6
    const resto = c.texto.replace(/^\d+\s*/, "");                  // "30 unidades" → "unidades"
    const pal = resto.split(" de ")[0], depois = resto.includes(" de ") ? " de " + resto.split(" de ").slice(1).join(" de ") : "";
    const sing = pal.replace(/ões$/, "ão").replace(/s$/, "");
    return n + " " + plural(n, sing) + depois;
  }
  return c.texto;
}
// SECOES: a ordem e o ícone das seções do mercado (padrão, lista 5.6).
const SECOES = [["hortifrúti", "🥬 Hortifrúti", ["frutas", "legumes", "folhas"]],
  ["mercearia", "🥫 Mercearia", ["grãos e massas", "farinhas", "matinais", "leite e ovos", "óleos e temperos", "enlatados"]],
  ["açougue", "🥩 Açougue", [""]], ["resfriados", "🧊 Resfriados", [""]]];
const cap = t => t ? t[0].toUpperCase() + t.slice(1) : t;
// compraDaSemana(): monta a lista no formato do SHOP (seção → subseção → itens).
function compraDaSemana(prod){
  const itens = Object.keys(prod.ing).map(id => BANCO_ID[id]).filter(Boolean);
  return SECOES.map(([sec, titulo, subs]) => ({sec: titulo, g: subs.map(s => ({
    s: cap(s),
    i: itens.filter(it => it.secao === sec && (it.subsecao || "") === s).sort((a, b) => ORDEM_BANCO[a.id] - ORDEM_BANCO[b.id])
      .map(it => it.nome + ": " + compraDe(it, prod.ing[it.id]))
  })).filter(gr => gr.i.length)})).filter(sc => sc.g.length);
}

/* ============ POTES DE CADA PREPARO ============ */
// CABE: quanto cabe em cada pote, com folga no topo (padrão, seção 7.1.2: até 90%).
const CABE = {370: 330, 640: 575, 1040: 935};
// potesPara(): em que potes vai uma refeição da casa de um preparo (exemplo: "1 pote de 640 ml").
// Se não couber no pote da casa, vai no tamanho seguinte; no lugar do de 1040 ml, 2 ou 3 de 640 ml.
function potesPara(peso){
  const ml = tamanhoPote();
  const ordem = [370, 640, 1040];
  for (let i = ordem.indexOf(ml); i < ordem.length; i++) if (peso <= CABE[ordem[i]]) return {n: 1, ml: ordem[i]};
  return {n: peso <= 2 * CABE[640] ? 2 : 3, ml: 640};
}
// pesoRefeicao(): o peso de uma refeição da casa de um preparo (porção × porções da casa).
const pesoRefeicao = p => (gramasPorcao(p) || 0) * porcoesCasa();
const textoPotes = (n, pp) => `${n * pp.n} ${plural(n * pp.n, "pote")} de ${pp.ml} ml`;

/* ============ 4. GUARDAR E COZINHA ============ */
// MODO: o modo de fazer de cada preparo do nível 1, sem as quantidades
// (as quantidades aparecem em "Ingredientes", já calculadas para a casa).
// Os textos vêm do Anexo A (seções A.3 e A.6) e do modelo da Semana 1.
const MODO = {
  "arroz": "Refogue a pasta de alho e cebola e o arroz. Junte a água quente e o sal. Cozinhe em fogo baixo por 15 a 20 minutos. Destampe no final.",
  "feijao": "Escorra o feijão que ficou de molho. Refogue a pasta no óleo (se tiver crisps de calabresa, use o óleo que sobrou na panela). Junte o feijão e a água. Cozinhe por 30 minutos na pressão. Acerte o sal.",
  "frango-grelhado": "Seque os filés da cura e divida em porções de 150 g crus. Grelhe sem sal (a cura já salgou). Junte a pasta de alho e cebola no final.",
  "carne-moida": "Refogue a pasta. Junte a carne e solte bem. Cozinhe até secar. Acerte o sal.",
  "polenta": "Misture o fubá na água fria com sal. Mexa em fogo baixo por 15 a 20 minutos. Espalhe numa forma, esfrie e corte.",
  "cenoura-branqueada": "Descasque e corte em barras. Ferva por 3 minutos em água com sal. Passe na água com gelo e seque bem. Divida nos potes e congele.",
  "cenoura-ralada": "Descasque e rale. Guarde no pote da praça, na geladeira. Dura 3 a 4 dias: use primeiro.",
  "mamao-picado": "Descasque, tire as sementes e pique. Guarde no pote da praça, na geladeira. Dura 3 a 4 dias: use primeiro.",
  "ovos-cozidos": "Coloque os ovos na água fria, leve ao fogo e conte 9 minutos depois de ferver. Esfrie e guarde com casca na geladeira, por até 7 dias.",
  "molho-tomate": "Corte o tomate em 3 e tire a parte branca e as sementes. Refogue a pasta no azeite, na panela da carne moída. Junte o tomate e uma pitada de sal e tampe até desmanchar. Bata no liquidificador e volte à panela. Retire a espuma ao ferver. Cozinhe tampado, em fogo baixo, por 30 minutos. Acerte o sal e o orégano.",
  "molho-branco": "Derreta a manteiga na frigideira do frango, raspando o douradinho. Junte a farinha e mexa por 1 a 2 minutos. Junte o leite frio aos poucos, mexendo sempre. Cozinhe até não escorrer nas costas da colher. Cubra com plástico-filme encostado no molho enquanto esfria.",
  "pasta-alho-cebola": "Descasque a cebola e o alho. Triture com sal. Encha as forminhas de gelo e congele. Vai do freezer direto para a panela.",
  "crisps-calabresa": "Corte em rodelas finas. Frite na panela de pressão até dourar. Retire e deixe o óleo na panela para o feijão. Guarde num pote da praça, na geladeira. Duram 5 dias.",
  "kit-vitamina-base": "Pese em cada saquinho as frutas e a cenoura picadas. Tire o ar, feche e congele.",
  "torta-frango": "Grelhe as tiras de frango com sal e desfie. Tire as sementes do tomate e pique. Bata a massa no liquidificador (ovos, leite, óleo, farinha, sal e fermento). Em forma untada, coloque metade da massa, o recheio (frango, cenoura ralada e tomate) e o restante da massa. Asse a 180 °C por cerca de 40 minutos. Esfrie e corte em pedaços iguais.",
  "hamburguer": "Misture tudo. Molde os discos. Enrole cada um em plástico-filme, coloque no saquinho e congele.",
  "frango-molho-branco": "Esquente o molho branco na panela, junte o frango grelhado em cubos e cozinhe junto por 5 a 10 minutos, até pegar sabor. Esfrie e divida nos potes, com o molho.",
  "frango-desfiado": "Cozinhe o frango em pedaços em água com sal e a pasta de alho e cebola por cerca de 20 minutos (ou 10 na pressão). Escorra e desfie no processador ou com dois garfos. Guarde no pote da praça, na geladeira. Dura 2 a 3 dias: use primeiro.",
  "arroz-com-legumes": "Faça como o arroz e junte a cenoura branqueada picada nos últimos 5 minutos.",
  "pate-atum": "Escorra o atum e misture com a maionese e a cenoura ralada. Guarde no pote da praça, na geladeira. Dura 2 dias.",
  "pasta-frango": "Misture o frango desfiado com o requeijão e o sal. Guarde no pote da praça, na geladeira. Dura 2 a 3 dias.",
  "pate-ovo": "Pique os ovos cozidos e misture com a maionese e o sal. Guarde no pote da praça, na geladeira. Dura 2 dias.",
  "salpicao": "Misture o frango desfiado, a cenoura ralada, a maçã picada e a maionese. Guarde no pote da praça, na geladeira. Dura 2 dias.",
  "bolonhesa": "Esquente o molho de tomate, junte a carne moída e cozinhe junto por 5 a 10 minutos. Esfrie e divida nos potes."
};
// UNIDADES: o singular e o plural das medidas, para escrever "1 xícara" e "2 xícaras".
const UNIDADES = [["colher de sopa", "colheres de sopa"], ["colher de chá", "colheres de chá"], ["xícara", "xícaras"],
  ["cubo", "cubos"], ["pote", "potes"], ["unidade", "unidades"], ["lata", "latas"], ["cabeça", "cabeças"], ["fatia", "fatias"], ["folha", "folhas"]];
// medidaTexto(): número + medida, no singular ou no plural. Tira o peso entre parênteses ("pote (200 g)").
function medidaTexto(n, u){
  u = u.replace(/\s*\(\d+ g\)/, "");
  const par = UNIDADES.find(([s, pl]) => u.startsWith(pl) || u.startsWith(s));
  if (par){
    const resto = u.startsWith(par[1]) ? u.slice(par[1].length) : u.slice(par[0].length);
    u = (n > 1 ? par[1] : par[0]) + resto;
  }
  return fmtNum(n) + " " + u;
}
// ingTexto(): a linha "Ingredientes" de um preparo, com as quantidades multiplicadas pelas receitas.
function ingTexto(p, receitas){
  const linha = (nome, x) => {
    if (x.qtd == null) return nome + ": " + (x.texto || "a gosto");
    if (/acima/.test(x.unidade)) return nome + ": " + x.texto;                 // "até 2 cm acima dos grãos"
    const n = x.qtd * receitas;
    if (/^g\b/.test(x.unidade) || x.unidade === "kg") return nome + ": " + fmtPeso(n * (x.unidade === "kg" ? 1000 : 1), "g");
    if (x.unidade === "ml") return nome + ": " + fmtPeso(n, "ml");
    if (x.unidade === "" || x.unidade === "por porção" || /^cubo/.test(x.unidade)) return nome + ": " + Math.ceil(n - 1e-9) + (/^cubo/.test(x.unidade) ? (Math.ceil(n - 1e-9) > 1 ? " cubos" : " cubo") : "");
    return nome + ": " + medidaTexto(n, x.unidade);
  };
  // Um preparo dentro de outro (exemplo: o molho de tomate na bolonhesa) aparece em gramas,
  // porque o "pote" da ficha é o de 1 pessoa, e a casa pode ter mais gente.
  const l = partes(p).map(x => {
    const it = BANCO_ID[x.id] || {nome: x.id};
    if (it.tipo === "preparo" && gramasPorcao(it) && x.qtd != null) return it.nome + ": " + fmtPeso(porcoesDe(x) * receitas * gramasPorcao(it), "g");
    return linha(it.nome, x);
  });
  (p.receita || []).filter(r => r.id === "agua" && (r.qtd != null || r.texto)).forEach(r => l.push(linha("Água", r)));
  return l.join(". ") + ".";
}
// blocoDe(): em qual bloco da cozinha o preparo é feito (campo "cozinha" da ficha).
// "bloco 1 (cura) e bloco 3" → o passo do bloco 1 é a cura, e o preparo é feito no bloco 3.
function blocoDe(p){
  const c = p.cozinha || "";
  if (/armazenamento/.test(c)) return "arm";
  const b = (c.match(/bloco (\d)/g) || []).map(x => +x.slice(-1));
  return b.length ? b[b.length - 1] : 2;
}
const minutosDe = p => primeiroNum((p.cozinha || "").split("·")[1]) || 0;
// nomePrep(): o nome do preparo na cozinha e no estoque. Deixa claro o que é kit e o que é branqueado
// (no cardápio, a cenoura branqueada aparece só como "Cenoura").
function nomePrep(p){
  if (/^kit/.test(p.modulo || "") && !/^kit/i.test(p.nome)) return "Kit de " + minus(p.nome);
  if (p.processo === "branqueado" && !/branquead/.test(p.nome)) return p.nome + " branqueada";
  return p.nome;
}
// nomeProducao(): o título do cartão: "Arroz: 5 potes de 370 ml, com 170 g cada".
function nomeProducao(x){
  const p = x.p;
  // Preparo que só serve para outro preparo (exemplo: o molho de tomate da bolonhesa): não vai para pote.
  if (ehPotePorcao(p) && !x.potes) return `${nomePrep(p)}: para ${frase(usadoEm(p).map(minus))}`;
  if (ehPotePorcao(p) || (p.local === "freezer" && p.embalagem === "saquinho")){
    const pp = potesPara(pesoRefeicao(p) || 180 * porcoesCasa());
    const cada = gramasPorcao(p) ? ` (${fmtPeso(pesoRefeicao(p), "g")} cada)` : "";
    if (p.embalagem === "saquinho") return `${nomePrep(p)}: ${x.potes} ${plural(x.potes, "saquinho")}${cada}`;
    return `${nomePrep(p)}: ${textoPotes(x.potes, pp)}${cada}`;
  }
  if (p.embalagem === "pote da praça") return `${nomePrep(p)}: 1 pote da praça`;
  if (p.embalagem === "cubo") return `${nomePrep(p)}: ${Math.ceil(x.receitas - 1e-9) * 3} ${plural(3, "forminha")} de gelo`;
  if (p.id === "ovos-cozidos") return `${nomePrep(p)}: ${Math.ceil(x.porcoes * 2 - 1e-9)} ovos`;
  return `${nomePrep(p)}: ${fmtNum(x.receitas)} ${plural(x.receitas, "receita")}`;
}

// ehFrio(): queijos e frios, que vão fatiados (ou no pacote) para o pote da praça.
const ehFrio = it => it.secao === "resfriados" && /^(fatiad|inteiro · pote da praça)/.test(it.guardar || "");
// guardarDaSemana(): os 6 passos de guardar a compra (manual, seção 7), só com o que foi comprado.
function guardarDaSemana(prod){
  const tem = id => !!prod.ing[id];
  const comprados = Object.keys(prod.ing).map(id => BANCO_ID[id]).filter(Boolean);
  const nomes = l => frase(l.map(it => minus(it.nome)));
  const arm = [];
  // destinos(): para onde vai um ingrediente (os preparos que o usam, com o peso).
  const destinos = id => Object.values(prod.prep).map(({p, receitas}) => {
    const x = partes(p).find(y => y.id === id);
    return x && /^g\b/.test(x.unidade) ? [nomePrep(p), x.qtd * receitas] : null;
  }).filter(Boolean);
  // Passo 1: o que vai direto para a geladeira até a cozinha (carnes e calabresa).
  const rapida = comprados.filter(it => it.secao === "açougue" || it.id === "calabresa");
  if (rapida.length) arm.push({icon: "⚡", t: "Guarda rápida", items: rapida.map(it => ({id: "g-" + it.id, name: it.nome,
    text: "Guarde na geladeira até a etapa de cozinha.",
    d: destinos(it.id).length ? [["Vai para", frase(destinos(it.id).map(([n, q]) => minus(n) + ", " + fmtPeso(q, "g")))]] : undefined}))});
  // Passo 2: queijos e frios no pote da praça.
  const frios = comprados.filter(ehFrio);
  if (frios.length) arm.push({icon: "🫙", t: "Passar para potes", items: [{id: "g-frios", name: cap(nomes(frios)),
    text: "Passe cada um para o seu pote da praça e guarde na geladeira.", d: [["Potes", frios.length + " " + plural(frios.length, "pote") + " da praça."]]}]});
  // Passo 3: o resto da compra (secos, refrigerados e a polpa no freezer).
  const resto = comprados.filter(it => !rapida.includes(it) && !frios.includes(it) && it.secao !== "hortifrúti");
  if (resto.length) arm.push({icon: "🗄️", t: "Guardar o resto da compra", items: [{id: "g-resto", name: "Secos, refrigerados e congelados",
    text: "Guarde conforme a sua organização." + (tem("polpa-fruta") ? " A polpa de fruta vai para o freezer." : ""),
    d: [["Itens", cap(nomes(resto)) + "."]], adds: tem("polpa-fruta") ? {"polpa-fruta": primeiroNum(compraDe(BANCO_ID["polpa-fruta"], prod.ing["polpa-fruta"]))} : undefined}]});
  // Passo 4: limpar a praça.
  arm.push({icon: "🧽", t: "Limpar a praça", items: [{id: "g-praca", name: "Bancada, pia e utensílios",
    text: "Limpe tudo antes de começar a higienização. É isso que o método chama de limpar a praça: deixar o espaço de trabalho pronto antes de mexer nos alimentos."}]});
  // Passo 5: higienização de frutas e vegetais.
  const horti = comprados.filter(it => it.secao === "hortifrúti" && !["cebola", "alho"].includes(it.id));
  if (horti.length) arm.push({icon: "💧", t: "Higienização", items: [{id: "g-hig", name: "Frutas e vegetais",
    text: "Higienize tudo de uma vez, antes de cortar e guardar.", d: [
      ["Itens", cap(nomes(horti)) + "."],
      ["Lavagem", "Solte as folhas. Lave tudo em água corrente. Deixe 15 minutos em água com vinagre, meio copo por litro, na pia limpa ou numa bacia. Enxágue."],
      ["Secagem", "Seque bem cada item. A umidade faz apodrecer mais rápido."]]}]});
  // Passo 6: corte e armazenamento: as frutas e os vegetais, e os preparos feitos ao guardar
  // (kits, cenoura branqueada e ralada, mamão picado, pasta de alho e cebola).
  const corte = [];
  horti.forEach(it => {
    const d = destinos(it.id).map(([n, q]) => [n + ", " + fmtPeso(q, "g"), "Separe para o preparo."]);
    const direto = PROD_ATUAL && PROD_ATUAL.direto.includes(it.id);
    corte.push({id: "g-" + it.id, name: it.nome, text: d.length && !direto ? "Separe para os preparos abaixo." : guardaTexto(it) + (d.length ? " Antes, separe o que vai para os preparos." : ""), d: d.length ? d : undefined});
  });
  Object.values(prod.prep).filter(x => blocoDe(x.p) === "arm").forEach(x => {
    const adds = noFreezer(x.p.id) && x.potes ? {[x.p.id]: x.potes} : undefined;
    corte.push({id: "g-" + x.p.id, name: nomeProducao(x), text: MODO[x.p.id] || "", ing: ingTexto(x.p, x.receitas), adds});
  });
  if (corte.length) arm.push({icon: "🔪", t: "Corte e armazenamento", items: corte});
  return arm;
}
// guardaTexto(): a frase de como guardar uma fruta ou um vegetal inteiro, pelo campo "guardar" da ficha.
function guardaTexto(it){
  const g = it.guardar || "";
  if (/gaveta/.test(g)) return "Guarde inteiro na gaveta da geladeira e corte na hora.";
  if (/folhas soltas/.test(g)) return "Guarde as folhas inteiras num pote da praça, forrado com papel-toalha, na geladeira.";
  if (/fatiado fino/.test(g)) return "Fatie fino, seque e congele cru, num saquinho.";
  if (/pasta de alho/.test(g)) return "Vai para a pasta de alho e cebola.";
  if (/fruteira/.test(g)) return "Guarde inteiro na fruteira até usar.";
  if (/geladeira/.test(g)) return "Guarde inteiro na geladeira até usar.";
  return "Guarde conforme a ficha.";
}
// cozinhaDaSemana(): os 3 blocos da cozinha, com os preparos da semana (padrão, seção 7.7).
function cozinhaDaSemana(prod){
  const blocos = {1: [], 2: [], 3: []};
  const tempo = {1: 0, 2: 0, 3: 0};
  // Bloco 1: o que precisa começar antes (demolho do feijão e cura do frango).
  Object.values(prod.prep).forEach(x => {
    const c = x.p.cozinha || "";
    if (/bloco 1 \(demolho\)/.test(c)) {
      const f = partes(x.p).find(y => BANCO_ID[y.id] && BANCO_ID[y.id].tipo === "ingrediente" && /^g/.test(y.unidade));
      blocos[1].push({id: "c1-" + x.p.id, name: `${BANCO_ID[f.id].nome}: ${fmtPeso(f.qtd * x.receitas, "g")}`, text: "Deixe de molho para cozinhar no bloco 3.",
        d: [["Demolho", "Cubra com água na própria panela de pressão. Deixe de 8 a 12 horas e troque a água uma vez."]]});
      tempo[1] += 5;
    }
    if (/bloco 1 \(cura\)/.test(c)) {
      const f = partes(x.p).find(y => BANCO_ID[y.id] && BANCO_ID[y.id].tipo === "ingrediente" && /^g/.test(y.unidade));
      blocos[1].push({id: "c1-" + x.p.id, name: `${BANCO_ID[f.id].nome}: ${fmtPeso(f.qtd * x.receitas, "g")} para a cura`,
        text: "Cura é deixar a carne na água com sal: ela fica temperada e mais macia.",
        d: [["Cura", "Corte em filés de 2 cm. Numa vasilha com tampa, dissolva 1 colher de sopa generosa de sal por litro de água. Cubra todos os filés juntos, tampe e deixe na geladeira de 6 a 24 horas."]]});
      tempo[1] += 10;
    }
  });
  // Blocos 2 e 3: cada preparo no seu bloco, com o que entra no freezer quando ele é feito.
  // A ordem segue o banco de dados, com um cuidado: o que é usado por outro preparo vem antes.
  const lista = Object.values(prod.prep).filter(x => blocoDe(x.p) !== "arm")
    .sort((a, b) => (blocoDe(a.p) - blocoDe(b.p)) || (nivelUso(a.p, prod) - nivelUso(b.p, prod)) || (ORDEM_BANCO[a.p.id] - ORDEM_BANCO[b.p.id]));
  lista.forEach(x => {
    const b = blocoDe(x.p);
    const adds = noFreezer(x.p.id) && x.potes ? {[x.p.id]: x.potes} : undefined;
    blocos[b].push({id: "c-" + x.p.id, name: nomeProducao(x), text: x.usoCasa ? "" : "Este preparo é usado em outro preparo da cozinha.",
      ing: ingTexto(x.p, x.receitas), prep: MODO[x.p.id] || "", adds});
    tempo[b] += minutosDe(x.p);
  });
  const fim = {id: "c-guardar", name: "Guardar o que foi cozido", text: "Esfrie com o pote destampado, por no máximo 2 horas fora da geladeira. Espalhe o arroz numa assadeira para esfriar mais rápido. No feijão, divida os grãos e complete com o caldo. Etiquete cada pote com o nome e a data, e leve ao freezer."};
  const ult = blocos[3].length ? 3 : 2;
  if (blocos[ult].length) blocos[ult].push(fim);
  const min = t => t >= 60 ? `cerca de ${Math.floor(t / 60)}h${t % 60 ? String(Math.round(t % 60 / 5) * 5).padStart(2, "0") : ""}` : `cerca de ${Math.max(5, Math.round(t / 5) * 5)} minutos`;
  const cab = [
    {icon: "🕘", t: "Bloco 1 · Início", when: "No dia da compra, logo depois de guardar tudo."},
    {icon: "🥩", t: "Bloco 2 · Durante a cura e o molho do feijão", when: "Na manhã seguinte."},
    {icon: "🔥", t: "Bloco 3 · Depois do molho do feijão e da cura", when: "Na tarde do mesmo dia."}];
  const coz = [1, 2, 3].filter(b => blocos[b].length).map(b => Object.assign({}, cab[b - 1], {t: cab[b - 1].t + " · " + min(tempo[b]), items: blocos[b]}));
  return {coz, total: min(tempo[1] + tempo[2] + tempo[3])};
}
// usadoEm(): os preparos da semana que usam este preparo na receita.
let PROD_ATUAL = null;
const usadoEm = p => PROD_ATUAL ? Object.values(PROD_ATUAL.prep).filter(x => partes(x.p).some(y => y.id === p.id)).map(x => nomePrep(x.p)) : [];
// nivelUso(): 0 para o preparo que outro preparo usa (vem antes), 1 para o resto.
const nivelUso = (p, prod) => Object.values(prod.prep).some(x => partes(x.p).some(y => y.id === p.id)) ? 0 : 1;

/* ============ 5. CONFERÊNCIA E APLICAÇÃO ============ */
// esperadoDaSemana(): o que a pessoa deve ter em casa depois de guardar e cozinhar.
function esperadoDaSemana(prod, arm){
  const fz = [], gel = [], gav = [], fru = [], desp = [];
  const tot = {potes: {}, praca: 0, saq: 0, cubos: 0};
  Object.values(prod.prep).forEach(x => {
    const p = x.p;
    if (ehPotePorcao(p) && x.potes){
      const pp = potesPara(pesoRefeicao(p));
      fz.push(`${x.potes * pp.n}x pote de ${minus(nomePrep(p))}`);
      tot.potes[pp.ml] = (tot.potes[pp.ml] || 0) + x.potes * pp.n;
    } else if (p.local === "freezer" && p.embalagem === "saquinho" && x.potes){
      fz.push(`${x.potes}x saquinho de ${minus(nomePrep(p))}`); tot.saq += x.potes;
    } else if (p.embalagem === "cubo"){
      fz.push(`${Math.ceil(x.receitas - 1e-9) * 3}x forminha de ${minus(p.nome)}`); tot.cubos += Math.ceil(x.receitas - 1e-9) * 3;
    } else if (p.embalagem === "pote da praça" && (x.usoCasa > 0 || !usadoEm(p).length)){ gel.push(`1x pote da praça de ${minus(p.nome)}`); tot.praca++; }
    else if (p.id === "ovos-cozidos") gel.push(`${Math.ceil(x.porcoes * 2 - 1e-9)} ovos cozidos`);
  });
  Object.keys(prod.ing).map(id => BANCO_ID[id]).filter(Boolean).sort((a, b) => ORDEM_BANCO[a.id] - ORDEM_BANCO[b.id]).forEach(it => {
    if (it.id === "polpa-fruta") fz.push(`${compraDe(it, prod.ing[it.id])} de polpa de fruta`);
    else if (ehFrio(it)) { gel.push(`1x pote da praça de ${minus(it.nome)}`); tot.praca++; }
    else if (/folhas soltas/.test(it.guardar)) { gel.push(`1x pote da praça de ${minus(it.nome)}`); tot.praca++; }
    else if (/gaveta/.test(it.guardar)) gav.push(it.nome);
    // Frutas e vegetais: só os que vão inteiros para o prato (o resto já virou preparo).
    else if (it.secao === "hortifrúti" && !PROD_ATUAL.direto.includes(it.id)) return;
    else if (it.secao === "hortifrúti" && /fruteira/.test(it.guardar)) fru.push(it.nome);
    else if (it.secao === "hortifrúti" && /geladeira/.test(it.guardar)) gel.push(it.nome);
    else if (it.secao === "mercearia" || (it.secao === "resfriados" && it.id !== "calabresa")) desp.push(minus(it.nome));
  });
  const esp = [
    {icon: "❄️", local: "Freezer", itens: fz}, {icon: "🧊", local: "Geladeira", itens: gel},
    {icon: "🍋", local: "Gaveta da geladeira", itens: gav}, {icon: "🍌", local: "Fruteira", itens: fru},
    {icon: "🗄️", local: "Despensa e geladeira", itens: desp.length ? [cap(frase(desp))] : []}].filter(l => l.itens.length);
  const partesTot = [
    ...Object.keys(tot.potes).map(ml => `${tot.potes[ml]} ${plural(tot.potes[ml], "pote")} de ${ml} ml`),
    tot.praca ? `${tot.praca} ${plural(tot.praca, "pote")} da praça` : "",
    tot.saq ? `${tot.saq} ${plural(tot.saq, "saquinho")}` : "",
    tot.cubos ? `${tot.cubos} ${plural(tot.cubos, "forminha")} de gelo` : ""].filter(Boolean);
  return {esp, total: frase(partesTot) + ".", praca: tot.praca, potes: tot.potes};
}

// assinatura(): um resumo das respostas. Se ele mudar, a semana é montada de novo.
const assinatura = () => JSON.stringify([adultos(), criancas(), G.potes || {}, nRef(), G.escolha || {}]);
// MONTADA: a última semana montada (para não montar de novo a cada toque na tela).
let MONTADA = null;
// FREEZER_SEMANA: os itens do estoque do freezer desta semana (o script.js usa no lugar da lista fixa).
const FREEZER_SEMANA = {};

// montaSemana(): monta tudo e coloca nas listas que o script.js desenha.
// Só funciona na Semana 1 e depois que a pessoa respondeu as perguntas (G._visto).
// Devolve true quando trocou a semana (o script.js zera as marcações antigas).
function montaSemana(){
  if (SEMANA.num !== 1 || !G._visto) return false;
  const a = assinatura();
  if (MONTADA && MONTADA.a === a) return false;
  const c = montaCardapio();
  MONTADA = {a, erro: c.erro};
  if (c.erro) return true;
  const g = gastos(c.dias);
  const prod = producao(g, c.potesUsados, c.orc);
  MONTADA.dias = c.dias;
  MONTADA.potes = Object.values(prod.prep).reduce((t, x) => t + (ehPotePorcao(x.p) ? x.potes : 0), 0);
  MONTADA.orc = c.orc;
  prod.direto = Object.keys(g.ing);          // ingredientes que vão direto para o prato (sem virar preparo)
  PROD_ATUAL = prod;
  // Cardápio (WEEK) e tabela (CURTO). As listas são trocadas por dentro (splice),
  // porque foram criadas com const no dados-semana1.js.
  const NOMES = [["Seg", "Segunda"], ["Ter", "Terça"], ["Qua", "Quarta"], ["Qui", "Quinta"], ["Sex", "Sexta"], ["Sáb", "Sábado"], ["Dom", "Domingo"]];
  WEEK.splice(0, WEEK.length, ...c.dias.map((dia, d) => ({d: NOMES[d][0], n: NOMES[d][1],
    m: dia.map(m => m ? [m.texto, usoRefeicao(m)] : ["—", {}])})));
  CURTO.splice(0, CURTO.length, ...c.dias.map(dia => dia.map(m => m ? m.curto : "—")));
  // Estoque do freezer: os itens que esta semana usa.
  Object.keys(FREEZER_SEMANA).forEach(k => delete FREEZER_SEMANA[k]);
  Object.values(prod.prep).forEach(x => { if (noFreezer(x.p.id) && x.potes) FREEZER_SEMANA[x.p.id] = {n: nomePrep(x.p), u: x.p.embalagem === "saquinho" ? "saquinhos" : "potes"}; });
  if (prod.ing["polpa-fruta"]) FREEZER_SEMANA["polpa-fruta"] = {n: "Polpa de fruta", u: "pacotes"};
  // Compra, guardar e cozinha.
  SHOP.splice(0, SHOP.length, ...compraDaSemana(prod));
  const arm = guardarDaSemana(prod);
  ARM.splice(0, ARM.length, ...arm);
  const cz = cozinhaDaSemana(prod);
  COZ.splice(0, COZ.length, ...cz.coz);
  const e = esperadoDaSemana(prod, arm);
  ESPERADO.splice(0, ESPERADO.length, ...e.esp);
  SEMANA.esperadoTotal = e.total;
  SEMANA.tempoCozinha = cz.total;
  SEMANA.potesGuardar = e.total;
  // Potes (de porção e da praça): a página não limita a semana, só avisa quando faltam
  // (padrão 1.8, seções 7.1.2 e 7.8). O script.js mostra este aviso na tela de aprovar e no guardar.
  SEMANA.avisoPraca = avisoDePotes(e);
  // Itens de validade curta usados nos primeiros dias.
  const curtos = Object.values(prod.prep).filter(x => limiteDia(x.p) < 6).map(x => minus(x.p.nome));
  SEMANA.usePrimeiro = curtos.length ? `${frase(curtos)} ${curtos.length > 1 ? "duram" : "dura"} poucos dias na geladeira. Por isso ${curtos.length > 1 ? "eles aparecem" : "aparece"} nos primeiros dias do cardápio.` : "nada nesta semana estraga rápido.";
  // Geladeira e despensa do estoque: os itens de mercearia e resfriados comprados.
  BASE.splice(0, BASE.length, ...Object.keys(prod.ing).map(id => BANCO_ID[id]).filter(it => it && (it.secao === "mercearia" || it.secao === "resfriados") && it.id !== "polpa-fruta").map(it => it.nome));
  SEMANA.notaCompra = `Lista calculada para ${fmtPorcao(porcoesCasa())}, só com o que o seu cardápio usa. Os itens de tempero e de base (sal, óleo, farinha...) entram na quantidade de 1 pacote.`;
  return true;
}
/* ============ AVISOS (padrão 1.8, seção 7.8) ============ */
// avisoDePotes(): o texto do aviso de potes, ou "" quando os potes da pessoa bastam.
// e = o resultado de esperadoDaSemana(): potes de porção por tamanho (e.potes) e potes da praça (e.praca).
// O pote da praça é de 640 ml: quando a casa também usa o de 640 ml para as porções,
// os dois usos dividem os mesmos potes.
function avisoDePotes(e){
  const usa = Object.assign({}, e.potes || {});
  const falta = [];
  [370, 1040].forEach(ml => {
    if ((usa[ml] || 0) > potes(ml)) falta.push(`${usa[ml]} potes de ${ml} ml (você tem ${potes(ml)})`);
  });
  const usa640 = (usa[640] || 0) + (e.praca || 0);
  if (usa640 > potes(640)){
    const deQue = usa[640] ? "de 640 ml, contando os da praça" : "da praça, de 640 ml,";
    falta.push(`${usa640} potes ${deQue} (você tem ${potes(640)})`);
  }
  return falta.length
    ? `Esta semana usa ${frase(falta)}. Para os que faltam, use outros potes com tampa que tiver em casa, como pote de sorvete, de margarina ou vidro.`
    : "";
}
// avisosRepeticao(): as refeições em que a comida vai repetir mais do que as regras sugerem
// (mais de 3 vezes na semana, ou no dia seguinte). Devolve uma lista de {tela, msg}.
function avisosRepeticao(dias){
  const lista = [];
  // conta(): quantas vezes cada prato (ou legume) aparece e se repete em dias seguidos.
  const analisa = (r, pega, max3) => {
    const vezes = {};
    let seguido = false, antes = null;
    for (let d = 0; d < 7; d++){
      const m = dias[d][r.i];
      const x = m && !m.so ? pega(m) : null;
      if (!x) { antes = null; continue; }
      const f = familia(x);
      vezes[f] = (vezes[f] || 0) + 1;
      if (antes === f) seguido = true;
      antes = f;
    }
    const n = Object.keys(vezes).length;
    const cont = Object.values(vezes);
    const quebrou = seguido || (max3 && cont.some(v => v > 3));
    return n && quebrou ? {n, min: Math.min(...cont), max: Math.max(...cont)} : null;
  };
  // texto(): "só 2 pratos diferentes. Cada um vai aparecer de 3 a 4 vezes na semana."
  const texto = (a, pal) => a.n === 1
    ? `só 1 ${pal}. Vai se repetir todos os dias.`
    : `só ${a.n} ${pal}s diferentes. Cada um vai aparecer ${a.min === a.max ? a.max : `de ${a.min} a ${a.max}`} vezes na semana.`;
  refsAtivas().forEach(r => {
    const a = analisa(r, m => m.principal, r.i >= 2);
    if (a) lista.push({tela: r.tela, msg: texto(a, r.soBase ? "base" : "prato")});
    if (r.acomp){
      const b = analisa(r, m => (m.extras || []).find(x => tipoPrato(x) === "acomp"), true);
      if (b) lista.push({tela: r.tela + " (legumes e saladas)", msg: texto(b, "opção").replace("opçãos", "opções")});
    }
  });
  return lista;
}
// testaSemana(): testa a semana com as respostas de agora, sem trocar nada na página.
// A tela de escolha (escolha.js) usa para mostrar os avisos antes de montar.
// Devolve {erro, repete, potes}: erro só quando não deu para montar; repete = lista de avisos
// de comida repetida; potes = texto do aviso de potes. Guarda o resultado para não testar de novo sem mudança.
let TESTE = null;
function testaSemana(){
  const a = assinatura();
  if (!TESTE || TESTE.a !== a){
    const c = montaCardapio();
    TESTE = {a, erro: c.erro, repete: [], potes: ""};
    if (!c.erro){
      TESTE.repete = avisosRepeticao(c.dias);
      // Para saber os potes, a página calcula a produção (sem mexer na semana que está na tela).
      const g = gastos(c.dias);
      const prod = producao(g, c.potesUsados, c.orc);
      prod.direto = Object.keys(g.ing);
      const antes = PROD_ATUAL;
      PROD_ATUAL = prod;
      TESTE.potes = avisoDePotes(esperadoDaSemana(prod));
      PROD_ATUAL = antes;
    }
  }
  return TESTE;
}
// usoRefeicao(): o que a refeição tira do freezer (para o estoque se atualizar quando a pessoa marca "Comi").
function usoRefeicao(m){
  const u = {};
  m.itens.forEach(it => { const x = usoFreezer(it); for (const k in x) u[k] = (u[k] || 0) + x[k]; });
  return u;
}
