/* ============ LÓGICA DAS PÁGINAS DAS SEMANAS ============ */
// Este arquivo é o mesmo para todas as semanas. Os dados de cada semana (lista de compras,
// passos, cardápio...) ficam em dados-semana1.js, dados-semana2.js e assim por diante.
// Cada página carrega o arquivo de dados dela antes deste.

// FREEZER: a lista de tudo o que pode estar no freezer.
// Cada item tem uma chave curta (ex.: arroz), o nome que aparece na tela (n) e a unidade (u).
// As chaves são usadas no resto do código para somar e subtrair o estoque.
const FREEZER = {
  arroz:   {n:"Arroz", u:"potes"},
  feijao:  {n:"Feijão", u:"potes"},
  frango:  {n:"Frango grelhado", u:"potes"},
  carne:   {n:"Carne moída", u:"potes"},
  hamb:    {n:"Hambúrguer", u:"saquinhos"},
  torta:   {n:"Torta de frango", u:"pedaços"},
  polenta: {n:"Polenta", u:"potes"},
  cenoura: {n:"Cenoura branqueada", u:"potes"},
  mtomate: {n:"Molho de tomate", u:"potes"},
  mbranco: {n:"Molho branco", u:"potes"},
  vit:     {n:"Kit de vitamina de frutas", u:"saquinhos"},
  polpa:   {n:"Polpa de fruta", u:"pacotes"},
  pfb:     {n:"Frango ao molho branco", u:"potes"},
  bolon:   {n:"Bolonhesa", u:"potes"}
};

// MEALS: as 6 refeições do dia, com ícone e nome separados por "|".
const MEALS = ["☕|Café da manhã","🥤|Lanche da manhã","🍽️|Almoço","🥪|Lanche da tarde","🥗|Janta","🌙|Ceia"];

// EMAIL: para onde os relatórios das pessoas do teste são enviados.
const EMAIL = "menumodular@gmail.com";

// DAILY: itens comprados toda semana, mesmo que ainda tenha em casa.
const DAILY = ["Leite","Ovos","Pão de forma","Torrada"];

/* ============ ESTADO ============ */
// KEY: o nome da "gaveta" onde o navegador guarda as marcações (localStorage).
// Cada semana tem a sua gaveta: metodoModular.semana1.v1, metodoModular.semana2.v1...
const KEY = "metodoModular.semana"+SEMANA.num+".v1";
// blank(): cria o estado vazio, ou seja, tudo o que a página precisa lembrar:
// tab (aba aberta), prep (sub-aba de Preparar), day (dia do cardápio), shop (compras marcadas),
// done (passos feitos), meals (refeições marcadas), base (tem/pouco/acabou) e rep (relatório).
const blank = () => ({tab:"inicio", prep:"compra", day:null, shop:{}, done:{}, meals:{}, base:{}, rep:{}});
// S é o estado atual. Começa vazio...
let S = blank();
// ...e, se já existir algo salvo no navegador, carrega o que foi salvo.
// O try/catch evita que a página quebre se o navegador não deixar ler o localStorage.
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch(e){}
// save(): grava o estado S no navegador. É chamada sempre que a pessoa marca algo.
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }

/* ============ GOSTOS E TROCAS ============ */
// GOSTOS: as opções de "não gosto" da tela Cardápio e gostos.
// Nesta versão de teste, só entram os pratos feitos na hora (bases e recheios),
// porque trocar esses não muda a cozinha nem o estoque do freezer.
// compra = o item da lista de compras que sai quando a pessoa marca que não gosta.
const GOSTOS = [
  {id:"tapioca", n:"Tapioca e crepioca", g:"Bases do café, dos lanches e da ceia", compra:"Tapioca (goma)"},
  {id:"cuscuz",  n:"Cuscuz",             g:"Bases do café, dos lanches e da ceia", compra:"Flocão de milho"},
  {id:"torrada", n:"Torrada",            g:"Bases do café, dos lanches e da ceia", compra:"Torrada"},
  {id:"pao",     n:"Pão de forma e lanche natural", g:"Bases do café, dos lanches e da ceia", compra:"Pão de forma"},
  {id:"mingau",  n:"Mingau de aveia",    g:"Ceia"},
  {id:"atum",    n:"Atum",               g:"Recheios e saladas", compra:"Atum"}
];
// Nome de cada base, como aparece no cardápio, e a ordem em que elas entram no lugar de outra.
const BASE_NOME = {torrada:"torrada", pao:"pão de forma", cuscuz:"cuscuz", tapioca:"tapioca"};
const BASE_ORDEM = ["torrada","pao","cuscuz","tapioca"];

// Os gostos ficam numa gaveta própria, que vale para todas as semanas.
const KEY_GOSTOS = "metodoModular.gostos";
let G = {};
try { G = JSON.parse(localStorage.getItem(KEY_GOSTOS) || "{}"); } catch(e){}
function saveGostos(){ try { localStorage.setItem(KEY_GOSTOS, JSON.stringify(G)); } catch(e){} }
const naoGosta = id => !!G[id];

// alt(): escolhe a base que entra no lugar de outra: a primeira da ordem que a pessoa gosta.
// Se a pessoa não gosta de nenhuma, devolve null e nada é trocado.
function alt(tirar){
  const k = BASE_ORDEM.find(b => b !== tirar && !naoGosta(b));
  return k ? BASE_NOME[k] : null;
}
// cap(): deixa a primeira letra maiúscula quando o texto original começava com maiúscula.
const cap = (orig, novo) => /^[A-ZÀ-Ú]/.test(orig) ? novo[0].toUpperCase()+novo.slice(1) : novo;

// ajusta(): recebe o texto de uma refeição e devolve o texto com as trocas dos gostos.
// Cada troca usa uma expressão regular (regex) para achar a palavra, com ou sem maiúscula.
function ajusta(t){
  if (naoGosta("mingau")){
    const b = alt(null);
    t = t.replace(/^Mingau de aveia com (.*)$/, (m, resto) => `Leite morno, ${b}, ${resto}`)
         .replace(/^Mingau e (.*)$/, (m, resto) => `Leite, ${b} e ${resto}`)
         .replace(/^Mingau de (.*)$/, (m, resto) => `Leite, ${b}, ${resto}`);
  }
  if (naoGosta("atum")) t = t.replace(/com atum/g, "com 2 ovos cozidos");
  if (naoGosta("tapioca") && alt("tapioca")){
    t = t.replace(/crepioca (com|de) /gi, m => cap(m, alt("tapioca")+" com ovo e "));
    t = t.replace(/tapioca de /gi, m => cap(m, alt("tapioca")+" com "));
    t = t.replace(/tapioca/gi, m => cap(m, alt("tapioca")));
  }
  if (naoGosta("cuscuz") && alt("cuscuz")) t = t.replace(/cuscuz/gi, m => cap(m, alt("cuscuz")));
  if (naoGosta("torrada") && alt("torrada")) t = t.replace(/torrada/gi, m => cap(m, alt("torrada")));
  if (naoGosta("pao") && alt("pao")){
    t = t.replace(/lanche natural de /gi, m => cap(m, alt("pao")+" com "));
    t = t.replace(/lanche natural/gi, m => cap(m, alt("pao")+" com recheio"));
    t = t.replace(/pão de forma/gi, m => cap(m, alt("pao")));
    t = t.replace(/\b[Pp]ão(?=[\s,]|$)/g, m => cap(m, alt("pao")));
  }
  return t;
}
// REFEIÇÕES POR DIA: o método foi pensado para 6, mas a pessoa pode escolher 5, 4 ou 3.
// ATIVAS diz quais refeições aparecem (pela posição em MEALS: 0 café, 1 lanche da manhã,
// 2 almoço, 3 lanche da tarde, 4 janta, 5 ceia).
// Com 4 ou 3, o lanche da manhã sai, mas a vitamina passa para o café, para não sobrar kit no freezer.
const ATIVAS = {6:[0,1,2,3,4,5], 5:[0,1,2,3,4], 4:[0,2,3,4], 3:[0,2,4]};
const nRef = () => G.refeicoes || 6;
const ativas = () => ATIVAS[nRef()];
const vitNoCafe = () => nRef() <= 4;
// texto(): o texto de uma refeição já com os gostos e, no café, com a vitamina quando ela mudou de lugar.
function texto(t, i, curto){
  t = ajusta(t);
  if (i === 0 && vitNoCafe()) t += curto ? " + vitamina" : ", e vitamina de frutas";
  return t;
}
// usos(): o que uma refeição tira do freezer. O café leva junto o kit de vitamina quando ele mudou de lugar.
function usos(d, i){
  const u = Object.assign({}, WEEK[d].m[i][1]);
  if (i === 0 && vitNoCafe()) for (const k in WEEK[d].m[1][1]) u[k] = (u[k]||0) + WEEK[d].m[1][1][k];
  return u;
}

// trocas(): conta quantas refeições da semana mudaram com os gostos.
function trocas(){
  let n = 0; WEEK.forEach(w => ativas().forEach(i => { if (ajusta(w.m[i][0]) !== w.m[i][0]) n++; })); return n;
}
// shopList(): a lista de compras sem os itens de que a pessoa não gosta.
function shopList(){
  const fora = GOSTOS.filter(o => o.compra && naoGosta(o.id)).map(o => o.compra);
  const sai = i => fora.some(f => i.startsWith(f+":"));
  return SHOP.map(sec => ({sec: sec.sec, g: sec.g.map(g => ({s: g.s, i: g.i.filter(i => !sai(i))})).filter(g => g.i.length)}))
             .filter(sec => sec.g.length);
}

/* ============ CÁLCULOS ============ */
// Listas "achatadas": juntam todos os itens num array só, para contar fácil.
// flatMap percorre cada seção e devolve os itens de dentro dela numa lista única.
const allShop = () => shopList().flatMap(s => s.g.flatMap(g => g.i));
const allArm = ARM.flatMap(s => s.items);
const allCoz = COZ.flatMap(b => b.items);
// pct(): calcula a porcentagem (a de b). Usada nas barras de progresso.
const pct = (a,b) => b ? Math.round(a/b*100) : 0;
// Contadores: quantos itens já foram marcados em cada etapa.
// filter guarda só os marcados, e length conta quantos sobraram.
const shopDone = () => allShop().filter(i => S.shop[i]).length;
const armDone = () => allArm.filter(i => S.done[i.id]).length;
const cozDone = () => allCoz.filter(i => S.done[i.id]).length;
// mealKey(): cria a chave de uma refeição, juntando dia e refeição. Ex.: "1-2" = terça, almoço.
const mealKey = (d,m) => d+"-"+m;
// mealCount(): conta quantas refeições estão com um certo estado (comi, troq ou pulei).
// Só conta as refeições que estão ativas (as que a pessoa escolheu fazer).
function mealCount(st){ let c=0; WEEK.forEach((w,d) => ativas().forEach(i => { if (S.meals[mealKey(d,i)]===st) c++; })); return c; }
// totalRef(): quantas refeições a semana tem, de acordo com a escolha (6 por dia = 42).
const totalRef = () => 7 * ativas().length;

// stock(): calcula o freezer.
// 1) Começa com tudo em zero.
// 2) Soma o adds de cada passo marcado como feito (guardar e cozinha).
// 3) Subtrai o que cada refeição marcada como "comi" usa.
function stock(){
  const s = {}; Object.keys(FREEZER).forEach(k => s[k] = inicial()[k] || 0);
  [...allArm, ...allCoz].forEach(it => { if (S.done[it.id] && it.adds) for (const k in it.adds) s[k]+=it.adds[k]; });
  WEEK.forEach((w,d) => ativas().forEach(i => { if (S.meals[mealKey(d,i)]==="comi") { const u = usos(d,i); for (const k in u) s[k]-=u[k]; } }));
  return s;
}
// inicial(): o que já estava no freezer no começo da semana.
// Se a pessoa veio da semana anterior pelo botão do relatório, usa as sobras reais que ficaram salvas.
// Se não, usa as sobras previstas no arquivo de dados (SEMANA.INICIAL).
function inicial(){
  try { const raw = localStorage.getItem("metodoModular.sobras"+(SEMANA.num-1)); if (raw) return JSON.parse(raw); } catch(e){}
  return SEMANA.INICIAL;
}

// fmt(): formata o número para a tela. 0,5 vira "½" e 1,5 vira "1½". Negativo vira 0.
function fmt(n){
  if (n <= 0) return "0";
  const w = Math.floor(n), h = n - w;
  return h >= .5 ? (w ? w+"½" : "½") : String(w);
}

/* ============ TELAS ============ */
// $app é a <div id="app"> do HTML: todas as telas são desenhadas dentro dela.
const $app = document.getElementById("app");
// esc(): troca caracteres especiais (< > & ") por códigos seguros,
// para um texto não ser lido como HTML por engano.
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// render(): desenha a aba atual.
// Primeiro acende o botão certo na barra de baixo; depois chama a função da aba (inicio, preparar...).
function render(){
  document.querySelectorAll("nav.bot button").forEach(b => b.classList.toggle("on", b.dataset.tab===S.tab));
  ({inicio, gostos, aprovar, preparar, cardapio, estoque, relatorio})[S.tab]();
}

// TELA INÍCIO: o texto de boas-vindas, as etapas com barra de progresso e as palavras do método.
function inicio(){
  const tot = totalRef(), comi = mealCount("comi");
  // Cada etapa é [ícone, título, texto, porcentagem, aba de destino, sub-aba].
  const steps = [
    ["🧭","Entender o cardápio e seus gostos",G._visto ? "Feito · "+nRef()+" refeições por dia"+(trocas() ? " · "+trocas()+" ajustes" : "") : "Comece por aqui",G._visto?100:0,"gostos",null],
    ["👍","Aprovar o cardápio",S.aprovado ? "Aprovado" : "Veja a semana antes da compra",S.aprovado?100:0,"aprovar",null],
    ["🛒","Fazer a compra",`${shopDone()} de ${allShop().length} itens`,pct(shopDone(),allShop().length),"preparar","compra"],
    ["🧊","Guardar a compra",`${armDone()} de ${allArm.length} etapas`,pct(armDone(),allArm.length),"preparar","guardar"],
    ["🍳","Cozinhar a semana",`${cozDone()} de ${allCoz.length} preparos · ${SEMANA.tempoCozinha}`,pct(cozDone(),allCoz.length),"preparar","cozinha"],
    ["🍽️","Seguir o cardápio",`${comi} de ${tot} refeições`,pct(comi,tot),"cardapio",null],
    ["📝","Mandar o relatório","No fim da semana",S.rep.sent?100:0,"relatorio",null]
  ];
  // Monta o HTML da tela com uma template string (texto entre crases),
  // onde ${...} encaixa valores do JavaScript. map transforma cada etapa num cartão.
  $app.innerHTML = `
    <span class="pill">Semana ${SEMANA.num} · Teste</span>
    <h1>${SEMANA.titulo}</h1>
    <p>${SEMANA.intro}</p>
    <p class="muted">Esta página te leva passo a passo. Toque em cada etapa.</p>
    <h2>Seu caminho</h2>
    ${steps.map(s => `
      <div class="card step" data-go="${s[4]}" data-sub="${s[5]||""}">
        <div class="ico">${s[0]}</div>
        <div class="grow"><h3>${s[1]}</h3><div class="muted">${s[2]}</div><div class="bar"><i style="width:${s[3]}%"></i></div></div>
        <div class="muted">›</div>
      </div>`).join("")}
    <h2>Palavras do método</h2>
    <div class="card"><dl class="glos" style="margin:0">
      <dt>Pote de porção</dt><dd>Pote do freezer com uma refeição só (exemplo: um pote de arroz).</dd>
      <dt>Pote da praça</dt><dd>Pote médio da geladeira, com o que você usa todo dia para montar o prato: folhas, cenoura ralada, queijo, presunto.</dd>
      <dt>Limpar a praça</dt><dd>Limpar a bancada, a pia e os utensílios antes de mexer nos alimentos.</dd>
      <dt>Branquear</dt><dd>Ferver o legume rapidinho e passar na água com gelo. Assim ele congela sem amolecer.</dd>
      <dt>Cura</dt><dd>Deixar a carne de molho em água com sal na geladeira. Ela fica temperada e macia.</dd>
      <dt>Kit de vitamina</dt><dd>Saquinho congelado com frutas já pesadas. É só bater com leite.</dd>
    </dl></div>
    <div style="margin-top:26px;text-align:center"><button class="btn ghost small" id="reset">Recomeçar do zero</button></div>
    <p class="muted" style="text-align:center;margin-top:8px">O que você marca fica salvo neste aparelho, neste navegador.</p>`;
  // Liga os cliques: tocar num cartão muda a aba (e a sub-aba) e redesenha a tela.
  $app.querySelectorAll("[data-go]").forEach(el => el.onclick = () => { S.tab = el.dataset.go; if (el.dataset.sub) S.prep = el.dataset.sub; go(); });
  // Botão Recomeçar: abre a janelinha de confirmação e, se a pessoa aceitar, zera o estado.
  document.getElementById("reset").onclick = () => ask("Apagar tudo?","Todas as marcações, o estoque e o relatório voltam ao começo.", () => { S = blank(); go(); toast("Tudo apagado"); });
}

// TELA CARDÁPIO E GOSTOS: explica como o cardápio é montado e pergunta do que a pessoa não gosta.
// Abre pelo primeiro passo do Início (não tem botão na barra de baixo).
function gostos(){
  const grupos = [...new Set(GOSTOS.map(o => o.g))];
  const nenhumaBase = BASE_ORDEM.every(b => naoGosta(b));
  $app.innerHTML = `<h1>Como o seu cardápio é montado</h1>

    <div class="card" style="background:var(--tomato-l);border-color:#F2CDB9">
      <b>⚠️ Método em teste</b>
      <p>Este método ainda está sendo testado e <b>não serve para pessoas com restrição alimentar</b>: alergia, intolerância (como à lactose ou ao glúten), doença celíaca, diabetes ou dieta vegetariana. Nesses casos, procure uma nutricionista.</p>
    </div>

    <h2>🕒 Seis refeições, de 3 em 3 horas</h2>
    <p>O método foi pensado para <b>6 refeições por dia</b>: café da manhã, lanche da manhã, almoço, lanche da tarde, janta e ceia. Comer de 3 em 3 horas evita chegar com muita fome na refeição seguinte e ajuda a comer a proteína do dia.</p>

    <h2>🧩 Cada prato é montado com peças</h2>
    <p>Todo prato junta uma peça que dá <b>energia</b> (arroz, pão, tapioca, macarrão), uma de <b>proteína</b> (frango, carne, ovo, queijo) e, no almoço e na janta, <b>legumes ou salada</b>. Como as peças têm o mesmo papel, uma pode entrar no lugar da outra sem desequilibrar o prato.</p>

    <h2>❄️ Pratos prontos e pratos na hora</h2>
    <div class="grade2">
      <div class="card"><b>Prontos no freezer</b><p class="muted">Arroz, feijão, frango, carne moída, hambúrguer, polenta e torta. É só esquentar.</p></div>
      <div class="card"><b>Feitos na hora</b><p class="muted">Tapioca, cuscuz, torrada, lanche natural, ovos e mingau, com o recheio dos potes da geladeira. Levam poucos minutos.</p></div>
    </div>

    <h2>🔄 Peças que se trocam</h2>
    <ul class="lista">
      <li><b>Bases:</b> pão de forma, torrada, tapioca e cuscuz.</li>
      <li><b>Recheios:</b> muçarela, presunto ou peito de peru, frango desfiado, ovo e atum.</li>
      <li><b>Base do almoço:</b> arroz e feijão, macarrão ou polenta.</li>
      <li><b>Frutas:</b> banana, mamão, maçã e laranja.</li>
    </ul>

    <h2>🎲 Regras para não enjoar</h2>
    <ul class="lista">
      <li>Nenhum prato aparece mais de 3 vezes na semana na mesma refeição.</li>
      <li>O mesmo prato não se repete na mesma refeição em dias seguidos.</li>
      <li>O que estraga rápido (cenoura ralada, mamão picado) vem nos primeiros dias.</li>
      <li>De uma semana para a outra, os almoços e as jantas mudam.</li>
    </ul>

    <h2>🍽️ Quantas refeições por dia você quer fazer?</h2>
    <p class="muted">Se 6 for demais para a sua rotina, dá para fazer menos. A página junta ou tira refeições para caber no seu dia.</p>
    <div class="card" style="padding:4px 12px">
      ${[[6,"6 refeições (recomendado)","Café, lanche da manhã, almoço, lanche da tarde, janta e ceia."],
         [5,"5 refeições","Sem a ceia."],
         [4,"4 refeições","Sem a ceia e sem o lanche da manhã. A vitamina passa para o café."],
         [3,"3 refeições","Só café, almoço e janta. A vitamina passa para o café, e a torta do lanche fica guardada no freezer para as próximas semanas."]]
        .map(([n,t,dsc]) => `<div class="chk ${nRef()===n?"on":""}" data-ref="${n}"><div class="box" style="border-radius:50%">${nRef()===n?"✓":""}</div><div class="lbl" style="text-decoration:none;color:var(--ink)"><b>${t}</b><div class="muted" style="font-size:.85rem">${dsc}</div></div></div>`).join("")}
    </div>
    ${nRef() < 6 ? `<p class="muted" style="font-size:.88rem">Com menos refeições, fica mais difícil comer toda a proteína do dia. Nesta versão de teste, a lista de compras não muda: o que sobrar fica na despensa ou no freezer para a próxima semana.</p>` : ""}

    <h2>👎 Do que você não gosta?</h2>
    <p class="muted">Marque o que não quer no cardápio. A página troca por outra peça do mesmo papel e tira o item da lista de compras.</p>
    ${grupos.map(gr => `<div class="sub-t">${gr}</div><div class="card" style="padding:4px 12px">
      ${GOSTOS.filter(o => o.g===gr).map(o => `<div class="chk ${naoGosta(o.id)?"on":""}" data-g="${o.id}"><div class="box">${naoGosta(o.id)?"✓":""}</div><div class="lbl">${o.n}</div></div>`).join("")}
    </div>`).join("")}
    ${nenhumaBase ? `<div class="card" style="background:var(--sun-l);border-color:#F3DFA8">Deixe pelo menos uma base sem marcar, para a página ter o que colocar no lugar.</div>` : ""}
    <div class="card" style="background:var(--green-l);border-color:#BFD9C7">${trocas() ? `<b>✓ ${trocas()} refeições ajustadas</b> aos seus gostos.` : "Nenhuma troca: o cardápio fica como foi planejado."}</div>
    <p class="muted" style="font-size:.88rem"><b>O que não muda nesta versão de teste:</b> os pratos do freezer, as frutas e as saladas, porque eles mudam a compra e a cozinha da semana inteira.</p>
    <button class="btn" id="pronto" style="width:100%;margin-top:8px">Pronto, ver meu cardápio ›</button>`;
  // Escolher quantas refeições por dia: salva e redesenha a tela.
  $app.querySelectorAll("[data-ref]").forEach(el => el.onclick = () => {
    G.refeicoes = +el.dataset.ref; saveGostos(); const y = window.scrollY; gostos(); window.scrollTo(0,y);
  });
  // Marcar ou desmarcar um "não gosto": salva, e a tela se redesenha com o novo número de trocas.
  $app.querySelectorAll("[data-g]").forEach(el => el.onclick = () => {
    G[el.dataset.g] = !G[el.dataset.g]; saveGostos(); const y = window.scrollY; gostos(); window.scrollTo(0,y);
  });
  // Botão Pronto: marca esta etapa como vista e abre o cardápio para aprovar.
  document.getElementById("pronto").onclick = () => { G._visto = true; saveGostos(); S.tab = "aprovar"; go(); window.scrollTo(0,0); };
}

// TELA PREPARAR: tem 3 sub-abas (Compra, Guardar, Cozinha).
// O if/else if/else escolhe qual conteúdo montar de acordo com S.prep.
function preparar(){
  const tabs = [["compra","🛒 Compra"],["guardar","🧊 Guardar"],["cozinha","🍳 Cozinha"]];
  let html = `<h1>Preparar a semana</h1>
    <div class="seg">${tabs.map(t => `<button data-p="${t[0]}" class="${S.prep===t[0]?"on":""}">${t[1]}</button>`).join("")}</div>`;
  // Sub-aba COMPRA: percorre SHOP e cria uma linha marcável para cada item.
  if (S.prep==="compra"){
    html += `<p class="muted">Marque cada item quando ele entrar no carrinho. A lista segue o caminho do mercado: os gelados ficam por último.</p>
      <div class="bar" style="margin:10px 0 4px"><i style="width:${pct(shopDone(),allShop().length)}%"></i></div>
      <p class="muted">${shopDone()} de ${allShop().length} itens</p>
      ${!S.aprovado ? `<div class="card" style="background:var(--sun-l);border-color:#F3DFA8">Você ainda não aprovou o cardápio. A lista de compras é feita a partir dele. <a href="#aprovar">Ver e aprovar o cardápio</a></div>` : ""}
      ${SEMANA.notaCompra ? `<div class="card" style="background:var(--blue-l);border-color:#C8DBE8">${SEMANA.notaCompra}</div>` : ""}`;
    shopList().forEach((sec,si) => {
      html += `<div class="sec-t">${sec.sec}</div><div class="card" style="padding:4px 12px">`;
      sec.g.forEach((g,gi) => {
        // Linha do grupo: subtítulo (quando existe) à esquerda e o botão "Marcar todos" à direita.
        const tudo = g.i.every(i => S.shop[i]);
        html += `<div class="grp"><span class="sub-t">${g.s}</span>${allBtn("shop", si+"-"+gi, tudo)}</div>`;
        g.i.forEach(i => html += `<div class="chk ${S.shop[i]?"on":""}" data-shop="${esc(i)}"><div class="box">${S.shop[i]?"✓":""}</div><div class="lbl">${esc(i)}</div></div>`);
      });
      html += `</div>`;
    });
    html += `<div class="card" style="background:var(--sun-l);border-color:#F3DFA8"><b>O dia da compra não acaba no mercado.</b><p>Chegando em casa, é hora de guardar tudo pelo método. É isso que deixa a semana prática.</p>
      <button class="btn small" data-p="guardar">Ir para Guardar ›</button></div>`;
  // Sub-aba GUARDAR: percorre os 6 passos de ARM e cria um cartão para cada item.
  } else if (S.prep==="guardar"){
    html += `<p class="muted">Seis passos, nesta ordem. Toque num item para ver o que fazer e marque o círculo quando terminar.</p>
      <div class="bar" style="margin:10px 0 4px"><i style="width:${pct(armDone(),allArm.length)}%"></i></div>`;
    ARM.forEach((st,ix) => {
      const tudo = st.items.every(it => S.done[it.id]);
      html += `<div class="blk grp"><h3>${ix+1}. ${st.icon} ${st.t}</h3>${allBtn("arm", ix, tudo)}</div>`;
      st.items.forEach(it => html += itemCard(it));
    });
    // Aviso de validade curta: aparece logo depois de guardar, para a pessoa já saber o que usar primeiro.
    html += `<div class="card" style="background:var(--tomato-l);border-color:#F2CDB9"><b>⏰ Use primeiro:</b> ${SEMANA.usePrimeiro}</div>`;
    html += `<div class="card" style="background:var(--blue-l);border-color:#C8DBE8"><b>Total de potes:</b> ${SEMANA.potesGuardar}</div>
      <button class="btn" data-p="cozinha" style="width:100%">Ir para a Cozinha ›</button>`;
  // Sub-aba COZINHA: percorre os 3 blocos de COZ.
  } else {
    html += `<p class="muted">A cozinha é dividida em três blocos, no total ${SEMANA.tempoCozinha}. Os tempos servem para você se organizar, não são uma prova.</p>
      <div class="bar" style="margin:10px 0 4px"><i style="width:${pct(cozDone(),allCoz.length)}%"></i></div>`;
    COZ.forEach((b,ix) => {
      const tudo = b.items.every(it => S.done[it.id]);
      html += `<div class="blk"><div class="grp"><h3>${b.icon} ${b.t}</h3>${allBtn("coz", ix, tudo)}</div><div class="when">${b.when}</div></div>`;
      b.items.forEach(it => html += itemCard(it));
    });
    // Conferência: mostra o que deve existir em casa depois da compra guardada e da cozinha feita.
    // Fica aberta (open) para a pessoa ver antes de ir para o cardápio.
    html += `<details class="it confere" open><summary><span class="t">📦 Confira: o que você deve ter agora</span><span class="arw">›</span></summary>
      <div class="body" style="padding-left:14px">
        <p class="lead muted">Depois de guardar a compra e cozinhar, sua casa deve ficar assim. Os pesos são aproximados.</p>
        ${ESPERADO.map(l => `<div class="loc"><b>${l.icon} ${l.local}</b><ul>${l.itens.map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("")}
        <div class="adds"><b>Total:</b> ${ESPERADO_TOTAL}</div>
      </div></details>`;
    html += `<button class="btn" data-go2="cardapio" style="width:100%;margin-top:10px">Pronto! Ver o cardápio ›</button>`;
  }
  $app.innerHTML = html;
  // Depois de desenhar, liga os cliques:
  // trocar de sub-aba, marcar item da compra e marcar passos feitos.
  $app.querySelectorAll("[data-p]").forEach(b => b.onclick = () => { S.prep = b.dataset.p; go(); window.scrollTo(0,0); });
  $app.querySelectorAll("[data-shop]").forEach(el => el.onclick = () => { const k = el.dataset.shop; S.shop[k] = !S.shop[k]; save(); preparar(); });
  // Botões "Marcar todos": se o grupo já está todo marcado, desmarca tudo; senão, marca tudo.
  $app.querySelectorAll("[data-all]").forEach(b => b.onclick = () => {
    const [tipo, k] = b.dataset.all.split(":");
    const tudo = b.dataset.tudo === "1";
    if (tipo === "shop"){
      const [si, gi] = k.split("-").map(Number);
      shopList()[si].g[gi].i.forEach(i => S.shop[i] = !tudo);
    } else {
      const itens = tipo === "arm" ? ARM[+k].items : COZ[+k].items;
      itens.forEach(it => S.done[it.id] = !tudo);
    }
    save(); const y = window.scrollY; preparar(); window.scrollTo(0,y);
    toast(tudo ? "Grupo desmarcado" : "Grupo marcado ✓");
  });
  bindItems();
  const g2 = $app.querySelector("[data-go2]"); if (g2) g2.onclick = () => { S.tab="cardapio"; go(); window.scrollTo(0,0); };
}

// itemCard(): monta o cartão de um passo (usado em Guardar e em Cozinha).
// Usa <details>, que abre e fecha sozinho ao tocar no título.
// Mostra o texto, os destinos, os ingredientes, o preparo e o aviso do que entra no estoque.
// allBtn(): cria o botão "Marcar todos" de um grupo.
// tipo diz de onde é o grupo (shop = compra, arm = guardar, coz = cozinha) e k diz qual grupo.
// Se o grupo já estiver todo marcado (tudo = true), o botão vira "Desmarcar todos".
function allBtn(tipo, k, tudo){
  return `<button class="all" data-all="${tipo}:${k}" data-tudo="${tudo?1:0}">${tudo ? "Desmarcar todos" : "✓ Marcar todos"}</button>`;
}

function itemCard(it){
  const done = !!S.done[it.id];
  let body = `<p class="lead">${esc(it.text)}</p>`;
  if (it.d) it.d.forEach(x => body += `<div class="dest"><b>${esc(x[0])}</b>${esc(x[1])}</div>`);
  if (it.ing) body += `<div class="dest"><b>Ingredientes</b>${esc(it.ing)}</div>`;
  if (it.prep) body += `<div class="dest"><b>Preparo</b>${esc(it.prep)}</div>`;
  // Números positivos em adds entram no freezer; negativos saem (ex.: o molho que vira bolonhesa).
  if (it.adds){
    const desc = ([k,v]) => Math.abs(v)+" "+FREEZER[k].u+" de "+FREEZER[k].n.toLowerCase();
    const entra = Object.entries(it.adds).filter(([k,v]) => v > 0).map(desc);
    const sai = Object.entries(it.adds).filter(([k,v]) => v < 0).map(desc);
    body += `<div class="adds">Ao marcar como feito, ${entra.length ? "entra no estoque: "+entra.join(", ") : ""}${entra.length && sai.length ? "; " : ""}${sai.length ? "sai do estoque: "+sai.join(", ") : ""}.</div>`;
  }
  body += `<div style="margin-top:12px"><button class="btn small ${done?"ghost":""}" data-done="${it.id}">${done?"Desmarcar":"Marcar como feito"}</button></div>`;
  return `<details class="it ${done?"done":""}" data-id="${it.id}" ${S.open===it.id?"open":""}>
    <summary><button class="circle" data-done="${it.id}" aria-label="Feito">${done?"✓":""}</button><span class="t">${esc(it.name)}</span><span class="arw">›</span></summary>
    <div class="body">${body}</div></details>`;
}
// bindItems(): liga os cliques dos botões "feito" de todos os cartões.
// preventDefault e stopPropagation impedem que o clique no círculo também abra/feche o cartão.
// Guarda a posição da tela (scrollY) para ela não pular para o topo ao redesenhar.
function bindItems(){
  $app.querySelectorAll("button[data-done]").forEach(b => b.onclick = e => {
    e.preventDefault(); e.stopPropagation();
    const id = b.dataset.done; S.done[id] = !S.done[id];
    S.open = S.done[id] ? null : id;
    save(); const y = window.scrollY; render(); window.scrollTo(0,y);
    if (S.done[id]) toast("Feito ✓");
  });
  // Lembra qual cartão está aberto, para ele continuar aberto quando a tela for redesenhada.
  $app.querySelectorAll("details.it").forEach(d => d.addEventListener("toggle", () => { if (d.open) S.open = d.dataset.id; }));
}

// tabela(): monta a tabela enxuta da semana, com os dias nas colunas e as refeições nas linhas.
// É usada em dois lugares: na tela de aprovar o cardápio e no começo da aba Cardápio.
// d = o dia destacado (ou null para nenhum). A primeira coluna (ícones) fica parada ao rolar.
// Cada célula ganha a cor do que foi marcado: verde = comi, amarelo = troquei, cinza = pulei.
function tabela(d){
  return `<div class="tab-wrap"><table class="semana">
    <thead><tr><th></th>${WEEK.map((x,i) => `<th><button data-day="${i}" class="${i===d?"on":""}">${x.d}</button></th>`).join("")}</tr></thead>
    <tbody>${ativas().map(j => {
      const [ic, nm] = MEALS[j].split("|");
      return `<tr><th title="${nm}">${ic}</th>${CURTO.map((dia,i) => `<td class="st-${S.meals[mealKey(i,j)]||""}">${texto(dia[j], j, true)}</td>`).join("")}</tr>`;
    }).join("")}</tbody></table></div>
    <p class="muted" style="font-size:.8rem">${ativas().map(j => { const [ic, nm] = MEALS[j].split("|"); return ic+" "+nm.toLowerCase(); }).join(" · ")}. Arraste a tabela para o lado.</p>`;
}

// TELA APROVAR: mostra o cardápio da semana, já com os gostos, para a pessoa aprovar antes da compra.
// É o mesmo passo do manual: a lista de compras só vem depois que o cardápio é confirmado.
function aprovar(){
  $app.innerHTML = `<span class="pill">Semana ${SEMANA.num}</span>
    <h1>Seu cardápio da semana</h1>
    <p>Este é o cardápio montado para você, com <b>${nRef()} refeições por dia</b>${trocas() ? ` e <b>${trocas()} refeições ajustadas</b> aos seus gostos` : ""}. Dê uma olhada: se estiver do seu gosto, aprove e siga para a lista de compras.</p>
    ${tabela(null)}
    <p class="muted">A lista de compras é feita a partir deste cardápio. Depois, na aba Cardápio, você vê cada dia completo, com as bebidas.</p>
    <button class="btn" id="aprova" style="width:100%;margin-top:10px">👍 Aprovar e ir para a compra</button>
    <button class="btn ghost" id="muda" style="width:100%;margin-top:10px">Quero mudar meus gostos</button>`;
  // Na aprovação, os botões dos dias da tabela não fazem nada (só mostram o nome do dia).
  $app.querySelectorAll("[data-day]").forEach(b => b.disabled = true);
  // Aprovar: guarda que esta semana foi aprovada e abre a lista de compras.
  document.getElementById("aprova").onclick = () => { S.aprovado = true; S.tab = "preparar"; S.prep = "compra"; go(); window.scrollTo(0,0); toast("Cardápio aprovado ✓"); };
  // Mudar: volta para a tela de gostos.
  document.getElementById("muda").onclick = () => { S.tab = "gostos"; go(); window.scrollTo(0,0); };
}

// TELA CARDÁPIO: os botões dos dias, as 6 refeições do dia escolhido e os botões Comi/Troquei/Pulei.
function cardapio(){
  // Se nenhum dia foi escolhido, abre no primeiro dia que ainda tem refeição sem marcar.
  if (S.day===null){
    S.day = WEEK.findIndex((w,d) => ativas().some(i => !S.meals[mealKey(d,i)]));
    if (S.day<0) S.day = 6;
  }
  const d = S.day, w = WEEK[d];
  // Se a cozinha ainda não foi toda marcada, mostra um aviso.
  const notCooked = cozDone() < allCoz.length;
  let html = `<h1>Cardápio da semana</h1>
    ${trocas() ? `<p class="muted">✓ Ajustado aos seus gostos: ${trocas()} refeições trocadas. <a href="#gostos">Mudar</a></p>` : ""}
    ${notCooked ? `<div class="card" style="background:var(--sun-l);border-color:#F3DFA8">A cozinha ainda não foi marcada como feita. Você pode olhar o cardápio, mas o estoque só aparece depois da cozinha.</div>` : ""}`;
  // TABELA DA SEMANA: os dias nas colunas (horizontal) e as refeições nas linhas.
  // A primeira coluna (ícones) fica parada enquanto a tabela rola para o lado (position: sticky).
  // Tocar no nome de um dia abre esse dia logo abaixo, no dia a dia.
  // Cada célula ganha a cor do que foi marcado: verde = comi, amarelo = troquei, cinza = pulei.
  html += tabela(d);
  // DIA A DIA: os botões dos dias e as refeições completas do dia escolhido.
  html += `<h2>Dia a dia</h2>
    <p class="muted">Depois de cada refeição, marque o que aconteceu. O que você comeu sai do estoque sozinho.</p>
    <div class="days">${WEEK.map((x,i) => {
      const n = ativas().filter(j => S.meals[mealKey(i,j)]).length;
      return `<button data-day="${i}" class="${i===d?"on":""}">${x.d}<small>${n}/${ativas().length}</small></button>`;}).join("")}</div>
    <h2 style="margin-top:8px" id="dia">${w.n}</h2>`;
  // Cria um cartão para cada refeição. split("|") separa o ícone do nome.
  ativas().forEach(i => {
    const m = w.m[i];
    const st = S.meals[mealKey(d,i)] || "";
    const [ic, nm] = MEALS[i].split("|");
    html += `<div class="card meal st-${st}">
      <div class="mi">${ic}</div>
      <div class="grow"><div class="nm">${nm}</div><div>${esc(texto(m[0], i))}</div>
        <div class="acts">
          <button class="comi ${st==="comi"?"on":""}" data-m="${i}" data-s="comi">✓ Comi</button>
          <button class="troq ${st==="troq"?"on":""}" data-m="${i}" data-s="troq">↔ Troquei</button>
          <button class="pulei ${st==="pulei"?"on":""}" data-m="${i}" data-s="pulei">– Pulei</button>
        </div></div></div>`;
  });
  html += `<p class="muted" style="margin-top:14px">Esquentar: no micro-ondas, com o pote tampado e uma frestinha, mexendo na metade do tempo. Sem micro-ondas, na panela tampada, em fogo baixo, com 1 colher de água. Para descongelar com calma, passe o pote do freezer para a geladeira na noite anterior.</p>`;
  $app.innerHTML = html;
  // Cliques: trocar de dia e marcar a refeição.
  // Tocar de novo no mesmo botão desmarca (delete apaga a marcação).
  // Tocar num dia (na tabela ou nos botões) abre o dia e rola a tela até ele.
  $app.querySelectorAll("[data-day]").forEach(b => b.onclick = () => {
    const daTabela = !!b.closest("table");
    S.day = +b.dataset.day; save(); const y = window.scrollY; cardapio();
    if (daTabela) document.getElementById("dia").scrollIntoView({behavior:"smooth"}); else window.scrollTo(0,y);
  });
  $app.querySelectorAll("[data-m]").forEach(b => b.onclick = () => {
    const k = mealKey(d, +b.dataset.m), s = b.dataset.s;
    S.meals[k] = S.meals[k]===s ? undefined : s; if (!S.meals[k]) delete S.meals[k];
    save(); const y = window.scrollY; cardapio(); window.scrollTo(0,y);
  });
}

// TELA ESTOQUE: o freezer calculado pela stock(), os botões tem/pouco/acabou
// e a lista do que entra na próxima compra.
function estoque(){
  const s = stock();
  const keys = Object.keys(FREEZER);
  const any = keys.some(k => s[k] > 0);
  let html = `<h1>Estoque</h1>
    <p class="muted">O freezer se atualiza sozinho: entra o que você guardou e cozinhou, sai o que marcou como comido.${SEMANA.num > 1 ? " Já inclui o que sobrou da semana passada." : ""}</p>
    <h2>❄️ Freezer</h2><div class="card" style="padding:4px 14px">
    ${any ? keys.map(k => `<div class="stk"><div class="grow">${FREEZER[k].n}<div class="muted" style="font-size:.8rem">${FREEZER[k].u}</div></div><div class="num ${s[k]<=0?"zero":""}">${fmt(s[k])}</div></div>`).join("")
      : `<p class="muted" style="padding:10px 0">Vazio por enquanto. Ele enche quando você marcar os passos de Guardar e Cozinha.</p>`}
    </div>
    <h2>🗄️ Geladeira e despensa</h2>
    <p class="muted">Não precisa pesar nem contar: só olhe o pacote e marque. O que estiver em "pouco" ou "acabou" vai para a próxima compra.</p>
    <div class="card" style="padding:4px 14px">
    ${BASE.map(b => { const v = S.base[b] || "tem";
      return `<div class="stk"><div class="grow">${b}</div><div class="tri">
        ${["tem","pouco","acabou"].map(o => `<button class="${o} ${v===o?"on":""}" data-b="${esc(b)}" data-o="${o}">${o[0].toUpperCase()+o.slice(1)}</button>`).join("")}
      </div></div>`;}).join("")}
    </div>`;
  // next: os itens marcados como pouco ou acabou. daily: os de toda semana que ainda não estão em next.
  const next = BASE.filter(b => (S.base[b]||"tem")!=="tem");
  const daily = DAILY.filter(b => !next.includes(b));
  html += `<h2>🛒 Para a próxima compra</h2><div class="card">
    ${next.length ? `<p><b>Em pouco ou acabou:</b> ${next.map(b => b+" ("+S.base[b]+")").join(", ")}.</p>` : `<p class="muted">Nada marcado como pouco ou acabou.</p>`}
    <p class="muted">Toda semana também entram: ${daily.join(", ").toLowerCase()}.</p></div>`;
  $app.innerHTML = html;
  $app.querySelectorAll("[data-b]").forEach(b => b.onclick = () => { S.base[b.dataset.b] = b.dataset.o; save(); const y=window.scrollY; estoque(); window.scrollTo(0,y); });
}

// TELA RELATÓRIO: dividida em duas partes.
// 1) Seu relatório: o resumo do que a pessoa fez na semana (calculado sozinho) e os números dela (gasto, tempos, rotina).
// 2) Feedback do método: a opinião sobre como foi seguir o método e usar a página.
// No fim, o texto pronto para copiar, com as duas partes.
function relatorio(){
  const r = S.rep, s = stock();
  // opt(): cria uma fileira de botões de escolha (ex.: Segui quase tudo / Metade / Pouco).
  const opt = (field, list) => `<div class="opts">${list.map(o => `<button data-f="${field}" data-v="${esc(o)}" class="${r[field]===o?"on":""}">${o}</button>`).join("")}</div>`;
  // linha(): uma linha do resumo, com o nome à esquerda e o valor à direita.
  const linha = (nome, valor) => `<div class="stk"><div class="grow">${nome}</div><b>${valor}</b></div>`;
  const sobras = Object.keys(FREEZER).filter(k => s[k] > 0).map(k => fmt(s[k])+"x "+FREEZER[k].n.toLowerCase());
  const pouco = BASE.filter(b => (S.base[b]||"tem")!=="tem").map(b => b+" ("+S.base[b]+")");
  $app.innerHTML = `<h1>Relatório da semana</h1>
    <p class="muted">No fim da semana, confira o seu relatório, responda o feedback e envie para quem te mandou esta página.</p>

    <h2>1. Seu relatório</h2>
    <p class="muted">Este resumo é montado sozinho, com o que você marcou na página.</p>
    <div class="card" style="padding:4px 14px">
      ${linha("🛒 Compra", shopDone()+" de "+allShop().length+" itens")}
      ${linha("🧊 Guardar", armDone()+" de "+allArm.length+" etapas")}
      ${linha("🍳 Cozinha", cozDone()+" de "+allCoz.length+" preparos")}
      ${linha("✓ Refeições comidas", mealCount("comi")+" de "+totalRef())}
      ${linha("↔ Trocadas", mealCount("troq"))}
      ${linha("– Puladas", mealCount("pulei"))}
    </div>
    <div class="card"><b>❄️ Sobrou no freezer</b><p class="muted">${sobras.length ? sobras.join(", ") : "Nada"}</p>
      <b style="display:block;margin-top:10px">🗄️ Pouco ou acabou</b><p class="muted">${pouco.length ? pouco.join(", ") : "Nada marcado"}</p></div>
    <label class="f">Seu nome</label><input class="f" data-t="nome" value="${esc(r.nome||"")}">
    <label class="f">Quanto gastou na compra? (R$)</label><input class="f" data-t="gasto" inputmode="decimal" placeholder="Ex.: 320" value="${esc(r.gasto||"")}">
    <label class="f">Quanto tempo levou para guardar a compra?</label><input class="f" data-t="tguardar" placeholder="Ex.: 1h30" value="${esc(r.tguardar||"")}">
    <label class="f">Quanto tempo levou a cozinha?</label><input class="f" data-t="tcozinha" placeholder="Ex.: 3h" value="${esc(r.tcozinha||"")}">
    <label class="f">Como foi a rotina?</label>${opt("rotina",["Segui quase tudo","Metade","Pouco"])}

    <h2>2. Feedback do método</h2>
    <p class="muted">Conte como foi seguir o método. Não existe resposta errada: é assim que ele melhora.</p>
    <label class="f">O que deu certo?</label><textarea class="f" data-t="certo">${esc(r.certo||"")}</textarea>
    <label class="f">Sobrou, faltou ou estragou alguma coisa?</label><textarea class="f" data-t="sobra">${esc(r.sobra||"")}</textarea>
    <label class="f">Enjoou de algum prato?</label><textarea class="f" data-t="enjoo">${esc(r.enjoo||"")}</textarea>
    <label class="f">Onde você travou ou ficou com dúvida?</label><textarea class="f" data-t="travou">${esc(r.travou||"")}</textarea>
    <label class="f">E a página? Algo confuso ou faltando?</label><textarea class="f" data-t="pagina">${esc(r.pagina||"")}</textarea>

    <h2>Enviar</h2>
    <pre class="rep" id="rep"></pre>
    <a class="btn" id="mail" style="display:block;text-align:center;text-decoration:none">📧 Enviar por e-mail</a>
    <button class="btn ghost" id="copy" style="width:100%;margin-top:10px">📋 Copiar relatório</button>
    <p class="muted" style="text-align:center">O relatório vai para <b>${EMAIL}</b>. Se o botão não abrir o seu e-mail, copie o relatório e cole numa mensagem para esse endereço.</p>
    ${SEMANA.proxima ? `<h2>Próxima semana</h2>
      <div class="card" style="background:var(--green-l);border-color:#BFD9C7">
        <p>Enviou o relatório? Então é hora de começar a <b>Semana ${SEMANA.num+1}</b>. Ela começa com o que sobrou no seu freezer.</p>
        <button class="btn" id="next" style="width:100%;margin-top:10px">Começar a Semana ${SEMANA.num+1} ›</button>
      </div>` : ""}`;
  // upd(): atualiza o texto do relatório na tela.
  // Também atualiza o link do botão de e-mail. mailto: abre o aplicativo de e-mail
  // com o destinatário, o assunto e o texto já preenchidos (encodeURIComponent prepara o texto para o link).
  const upd = () => {
    const t = reportText();
    document.getElementById("rep").textContent = t;
    document.getElementById("mail").href = "mailto:"+EMAIL+"?subject="+encodeURIComponent("Relatório da Semana "+SEMANA.num+(r.nome ? " · "+r.nome : ""))+"&body="+encodeURIComponent(t);
  };
  upd();
  // Cada campo salva o que foi digitado (oninput dispara a cada letra) e atualiza o relatório.
  $app.querySelectorAll("[data-t]").forEach(el => el.oninput = () => { r[el.dataset.t] = el.value; save(); upd(); });
  $app.querySelectorAll("[data-f]").forEach(b => b.onclick = () => { r[b.dataset.f] = r[b.dataset.f]===b.dataset.v ? "" : b.dataset.v; save(); const y=window.scrollY; relatorio(); window.scrollTo(0,y); });
  document.getElementById("copy").onclick = () => copyText(reportText());
  document.getElementById("mail").onclick = () => { S.rep.sent = true; save(); };
  // Botão da próxima semana: guarda as sobras do freezer (para a semana seguinte começar com elas)
  // e abre a página da próxima semana. As marcações desta semana continuam salvas.
  const nx = document.getElementById("next");
  if (nx) nx.onclick = () => ask("Começar a Semana "+(SEMANA.num+1)+"?",
    "O que sobrou no freezer vai junto. Se ainda não enviou o relatório, copie e envie antes.",
    () => { try { localStorage.setItem("metodoModular.sobras"+SEMANA.num, JSON.stringify(stock())); } catch(e){}
            location.href = SEMANA.proxima; }, "Começar");
}

// reportText(): monta o texto para copiar, linha por linha, num array L.
// Tem as mesmas duas partes da tela: primeiro o relatório, depois o feedback.
// No fim, join("\n") junta tudo com quebras de linha.
function reportText(){
  const r = S.rep, s = stock();
  const sobras = Object.keys(FREEZER).filter(k => s[k] > 0).map(k => fmt(s[k])+"x "+FREEZER[k].n.toLowerCase());
  const pouco = BASE.filter(b => (S.base[b]||"tem")!=="tem").map(b => b+" ("+S.base[b]+")");
  const L = [];
  L.push("📝 Método Modular · Semana "+SEMANA.num);
  if (r.nome) L.push("Nome: "+r.nome);
  L.push("");
  // Parte 1: o relatório do usuário.
  L.push("— 1. RELATÓRIO —");
  L.push("Compra: "+shopDone()+" de "+allShop().length+" itens");
  L.push("Guardar: "+armDone()+" de "+allArm.length+" etapas");
  L.push("Cozinha: "+cozDone()+" de "+allCoz.length+" preparos");
  L.push("Refeições: "+mealCount("comi")+" comidas, "+mealCount("troq")+" trocadas, "+mealCount("pulei")+" puladas (de "+totalRef()+")");
  // Uma linha por dia: ✓ comi, ↔ troquei, – pulei, · sem marcar.
  WEEK.forEach((w,d) => {
    const marks = ativas().map(i => ({comi:"✓",troq:"↔",pulei:"–"})[S.meals[mealKey(d,i)]] || "·").join(" ");
    L.push("   "+w.d+": "+marks);
  });
  L.push("Gasto na compra: "+(r.gasto ? "R$ "+r.gasto : "—"));
  L.push("Tempo para guardar: "+(r.tguardar||"—"));
  L.push("Tempo de cozinha: "+(r.tcozinha||"—"));
  L.push("Rotina: "+(r.rotina||"—"));
  L.push("Refeições por dia: "+nRef());
  L.push("Não gosta de: "+(GOSTOS.filter(o => naoGosta(o.id)).map(o => o.n.toLowerCase()).join(", ") || "nada marcado"));
  L.push("Sobrou no freezer: "+(sobras.length ? sobras.join(", ") : "nada"));
  L.push("Pouco ou acabou: "+(pouco.length ? pouco.join(", ") : "nada"));
  L.push("");
  // Parte 2: o feedback do método.
  L.push("— 2. FEEDBACK DO MÉTODO —");
  L.push("Deu certo: "+(r.certo||"—"));
  L.push("Sobrou/faltou/estragou: "+(r.sobra||"—"));
  L.push("Enjoou: "+(r.enjoo||"—"));
  L.push("Travou: "+(r.travou||"—"));
  L.push("Sobre a página: "+(r.pagina||"—"));
  return L.join("\n");
}

/* ============ AJUDANTES ============ */
// copyText(): copia o relatório.
// Tenta o jeito moderno (navigator.clipboard); se o navegador não deixar,
// usa o jeito antigo: cria uma caixa de texto escondida, seleciona e copia.
function copyText(t){
  const done = () => { S.rep.sent = true; save(); toast("Copiado! Agora é só colar"); };
  const fallback = () => {
    const ta = document.createElement("textarea"); ta.value = t; ta.style.position="fixed"; ta.style.opacity="0";
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand("copy"); } catch(e){}
    ta.remove(); ok ? done() : toast("Não deu para copiar: selecione o texto e copie");
  };
  try { navigator.clipboard.writeText(t).then(done, fallback); } catch(e){ fallback(); }
}
// toast(): mostra uma mensagem rápida na parte de baixo, que some sozinha depois de 1,8 segundo.
let tt; function toast(m){ const el = document.getElementById("toast"); el.textContent = m; el.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => el.classList.remove("show"), 1800); }
// ask(): abre a janelinha de confirmação (no lugar do confirm() do navegador)
// e só executa a função yes se a pessoa tocar em "Sim".
function ask(title, text, yes, label){
  const m = document.getElementById("modal");
  document.getElementById("mTitle").textContent = title; document.getElementById("mText").textContent = text;
  // label muda o texto do botão de confirmar; sem label, fica "Sim, apagar".
  document.getElementById("mYes").textContent = label || "Sim, apagar";
  document.getElementById("mYes").className = "btn small " + (label ? "" : "warn");
  m.classList.add("show");
  document.getElementById("mNo").onclick = () => m.classList.remove("show");
  document.getElementById("mYes").onclick = () => { m.classList.remove("show"); yes(); };
}
// TABS: as abas que existem. Usadas para ler o endereço (#inicio, #cardapio...).
const TABS = ["inicio","gostos","aprovar","preparar","cardapio","estoque","relatorio"];
// go(): salva, atualiza o endereço da página com a aba atual (#cardapio, por ex.) e redesenha.
function go(){ save(); if (location.hash !== "#"+S.tab) { try { history.replaceState(null,"","#"+S.tab); } catch(e){} } render(); }
// Liga os botões da barra de baixo: cada um troca de aba.
document.querySelectorAll("nav.bot button").forEach(b => b.onclick = () => { S.tab = b.dataset.tab; if (S.tab==="cardapio") S.day=null; go(); window.scrollTo(0,0); });
// Se o endereço mudar (ex.: botão Voltar do navegador), abre a aba certa.
window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (TABS.includes(h) && h!==S.tab){ S.tab = h; render(); } });
// Ao abrir a página, se o endereço já tiver uma aba (#estoque), começa nela.
{ const h = location.hash.slice(1); if (TABS.includes(h)) S.tab = h; }
// Primeira chamada: desenha a tela assim que a página carrega.
render();
