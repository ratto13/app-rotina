/* ============ DADOS DA SEMANA 2 ============ */
// Este arquivo tem só os dados da Semana 2. A lógica é a mesma da Semana 1 (script.js).
// A Semana 2 segue o mesmo nível (nível 1): nenhum preparo novo, só combinações novas
// com o que a pessoa já aprendeu. O que muda:
// - começa com o que sobrou da Semana 1 no freezer (torta, molhos, carne moída, cenoura);
// - não faz torta (ainda tem 4 pedaços) nem molho (ainda tem 2 de cada);
// - os molhos que sobraram viram bolonhesa e frango ao molho branco (panelada);
// - o presunto dá lugar ao peito de peru (rodízio de frios);
// - troca almoços e jantas em relação à Semana 1, e 4 jantas não têm salada.

// SEMANA: as informações gerais da semana, usadas nos textos das telas.
// INICIAL = o que se espera que tenha sobrado da Semana 1. Se a pessoa veio pelo botão
// "Começar a Semana 2", o script.js usa as sobras reais no lugar destas.
const SEMANA = {
  num: 2,
  titulo: "Sua segunda semana",
  intro: "Agora você já começa com comida no freezer: o que sobrou da Semana 1. Por isso a compra é menor, não precisa fazer torta nem molho, e a cozinha fica mais curta.",
  notaCompra: "<b>A lista é menor</b> porque muita coisa da Semana 1 ainda tem em casa (arroz, feijão, fubá, farinhas, temperos). Antes de sair, abra a aba Estoque: o que estiver em pouco ou acabou também entra na compra.",
  tempoCozinha: "cerca de 3h",
  potesGuardar: "7 potes da praça, 4 potes de porção e 7 saquinhos.",
  usePrimeiro: "a cenoura ralada e o mamão picado duram 3 a 4 dias na geladeira, e o frango desfiado (feito na cozinha), 2 a 3 dias. Por isso eles aparecem nos primeiros dias do cardápio.",
  proxima: null,
  INICIAL: {torta:4, carne:1, cenoura:1, mtomate:2, mbranco:2}
};

// SHOP: a lista de compras da Semana 2. Mesmo formato da Semana 1.
const SHOP = [
 {sec:"🥬 Hortifrúti", g:[
  {s:"Frutas", i:["Banana nanica: 2 kg","Mamão formosa: 1 kg","Maçã gala: 1 kg","Laranja-pera: 1 kg"]},
  {s:"Legumes", i:["Tomate para salada: 1 kg","Cenoura: 1,2 kg"]},
  {s:"Folhas", i:["Repolho: 1 unidade","Alface: 1 unidade"]}]},
 {sec:"🥫 Mercearia", g:[
  {s:"Grãos e massas", i:["Espaguete: 500 g"]},
  {s:"Matinais", i:["Torrada: 1 pacote","Pão de forma: 1 pacote"]},
  {s:"Leite e ovos", i:["Leite integral: 7 litros","Ovos: 30 unidades"]},
  {s:"Enlatados", i:["Atum: 1 lata"]}]},
 {sec:"🥩 Açougue", g:[{s:"", i:["Peito de frango: 1 kg","Acém moído: 1 kg"]}]},
 {sec:"🧊 Resfriados", g:[{s:"", i:["Calabresa: 250 g","Muçarela: 300 g","Peito de peru: 200 g","Polpa de fruta congelada: 4 pacotes de 100 g"]}]}
];

// ARM: os 6 passos para guardar a compra da Semana 2.
const ARM = [
 {icon:"⚡", t:"Guarda rápida", items:[
  {id:"acem", name:"Acém moído: 1 kg", text:"Guarde na geladeira até a etapa de cozinha.", d:[["Carne moída, 500 g, e hambúrguer, 500 g","Será dividido em carne moída e hambúrguer."]]},
  {id:"calab", name:"Calabresa: 250 g", text:"Guarde na geladeira até a etapa de cozinha.", d:[["Crisps de calabresa, 250 g","Será cortada em rodelas finas e frita junto com o feijão."]]},
  {id:"frango", name:"Peito de frango: 1 kg", text:"Guarde na geladeira até a etapa de cozinha.", d:[["Grelhado, 750 g, e desfiado, 250 g","Será dividido em filés para grelhar e tiras para desfiar."]]}
 ]},
 {icon:"🫙", t:"Passar para potes", items:[
  {id:"frios", name:"Muçarela: 300 g e peito de peru: 200 g", text:"Passe para o pote. Nesta semana o peito de peru entra no lugar do presunto, para variar o sabor dos lanches.", d:[["Queijo e frio","Guarde na geladeira."],["Potes","2 potes da praça."]]}
 ]},
 {icon:"🗄️", t:"Guardar o resto da compra", items:[
  {id:"base", name:"Secos, refrigerados e congelados", text:"Guarde conforme a sua organização.", d:[["Itens","Ovos, polpa de fruta (no freezer), espaguete, torrada, pão de forma, leite e atum."]], adds:{polpa:4}}
 ]},
 {icon:"🧽", t:"Limpar a praça", items:[
  {id:"praca", name:"Bancada, pia e utensílios", text:"Limpe tudo antes de começar a higienização."}
 ]},
 {icon:"💧", t:"Higienização", items:[
  {id:"hig", name:"Frutas e vegetais", text:"Higienize tudo de uma vez, antes de cortar e guardar.", d:[
   ["Itens","Laranja, tomate para salada, alface, repolho, cenoura, banana, maçã e mamão."],
   ["Lavagem","Solte as folhas da alface e do repolho. Lave tudo em água corrente. Deixe 15 minutos em água com vinagre, meio copo por litro, na pia limpa ou numa bacia. Enxágue."],
   ["Secagem","Seque bem cada item. A umidade faz apodrecer mais rápido."]]}
 ]},
 {icon:"🔪", t:"Corte e armazenamento", items:[
  {id:"laranja", name:"Laranja-pera: 1 kg", text:"Guarde inteira e corte na hora.", d:[["Inteira","Guarde na gaveta da geladeira, junto com o limão que sobrou."]]},
  {id:"tomsal", name:"Tomate para salada: 1 kg", text:"Guarde inteiro. Nesta semana não tem torta, então vai todo para as saladas.", d:[["Salada, 1 kg","Guarde na fruteira e corte na hora."]]},
  {id:"folhas", name:"Alface e repolho: 1 unidade de cada", text:"Guarde as folhas inteiras.", d:[["Folhas","Forre o pote com papel-toalha e guarde na geladeira."],["Potes","2 potes da praça."]]},
  {id:"cenoura", name:"Cenoura: 1,2 kg", text:"Divida em três cortes: em barras, ralada e picada. Os pesos já são sem casca.", d:[
   ["Branqueada, 500 g","Descasque e corte em barras. Ferva por 3 minutos. Passe na água com gelo e seque. Divida em 4 porções de 125 g e congele."],
   ["Ralada, 340 g","Descasque e rale. Guarde na geladeira."],
   ["Vitamina, 140 g","Descasque e pique."],
   ["Potes","4 potes de porção, 1 pote da praça."]], adds:{cenoura:4}},
  {id:"banana", name:"Banana nanica: 2 kg", text:"Separe parte para a vitamina e guarde o restante inteiro.", d:[["Inteira, o restante","Guarde na fruteira."],["Vitamina, 700 g sem casca (cerca de 1,1 kg com casca)","Descasque e pique."]]},
  {id:"maca", name:"Maçã gala: 1 kg", text:"Separe parte para a vitamina e guarde o restante inteiro.", d:[["Inteira, o restante","Guarde na geladeira."],["Vitamina, 210 g","Pique."],["Potes","1 pote da praça."]]},
  {id:"mamao", name:"Mamão formosa: 1 kg", text:"Separe parte para a vitamina e pique o restante.", d:[["Picado, cerca de 440 g, e vitamina, 210 g","Descasque, tire as sementes e pique. Guarde o picado na geladeira."],["Potes","1 pote da praça."]]},
  {id:"kits", name:"Vitamina de frutas: 7 kits", text:"Monte os kits com as frutas e a cenoura picadas.", d:[["Kit, 180 g","Pese em cada saquinho 100 g de banana, 30 g de mamão, 30 g de maçã e 20 g de cenoura. Tire o ar, feche e congele."],["Potes","7 saquinhos."]], adds:{vit:7}}
 ]}
];

// COZ: os 3 blocos da cozinha da Semana 2.
// Novidade de organização (não de preparo): os molhos que sobraram no freezer
// descongelam na geladeira e viram bolonhesa e frango ao molho branco.
// Em adds, número negativo quer dizer que sai do freezer.
const COZ = [
 {icon:"🕘", t:"Bloco 1 · Início · cerca de 20 minutos", when:"No dia da compra, logo depois de guardar tudo.", items:[
  {id:"c-molhos", name:"Molhos do freezer: 1 pote de cada", text:"Passe do freezer para a geladeira, para descongelar até amanhã.", d:[["Molho de tomate, 1 pote","Vai virar a bolonhesa no bloco 2."],["Molho branco, 1 pote","Vai virar o frango ao molho branco no bloco 3."]]},
  {id:"c-feijao1", name:"Feijão: 250 g", text:"Deixe de molho para cozinhar no bloco 3.", d:[["Demolho","Cubra com água na própria panela de pressão. Deixe de 8 a 12 horas e troque a água uma vez."]]},
  {id:"c-cura", name:"Peito de frango: 1 kg", text:"Separe os filés para a cura e as tiras para desfiar.", d:[
   ["Grelhado, 750 g","Corte em filés de 2 cm. Na vasilha com tampa de 2 litros, dissolva 1 colher de sopa generosa de sal por litro de água. Cubra todos os filés juntos, tampe e deixe na geladeira de 6 a 24 horas."],
   ["Desfiado, 250 g","Corte em tiras. Guarde na geladeira até o bloco 2."]]}
 ]},
 {icon:"🥩", t:"Bloco 2 · Durante a cura e o molho do feijão · cerca de 1h30", when:"Na manhã seguinte.", items:[
  {id:"c-hamb", name:"Hambúrguer: 3 discos de 165 g", text:"Divida o acém e molde os hambúrgueres primeiro.", ing:"Acém moído: 500 g. Ovo: 1. Farelo de aveia: 2 colheres de sopa. Pasta de alho e cebola: 1 cubo. Sal e pimenta-do-reino.", prep:"Separe 500 g do acém. Misture tudo. Molde 3 discos. Enrole cada um em plástico-filme, coloque no saquinho e congele.", adds:{hamb:3}},
  {id:"c-carne", name:"Carne moída: 3 porções de 115 g", text:"Refogue. Depois, 2 porções viram bolonhesa e 1 vai para o pote.", ing:"Acém moído: 500 g. Pasta de alho e cebola: 2 cubos. Sal.", prep:"Refogue a pasta. Junte a carne e solte bem. Cozinhe até secar. Acerte o sal. Separe 1 porção num pote e deixe as outras 2 na panela.", adds:{carne:3}},
  {id:"c-bolon", name:"Bolonhesa: 2 potes", text:"Faça na panela da carne moída, com o molho de tomate que descongelou.", ing:"Carne moída: 2 porções (cerca de 230 g). Molho de tomate: 1 pote.", prep:"Junte o molho à carne na panela. Cozinhe por 5 a 10 minutos, até pegar sabor. Divida em 2 potes, com o molho.", adds:{bolon:2, carne:-2, mtomate:-1}},
  {id:"c-desfiado", name:"Frango desfiado: 1 pote da praça", text:"É o recheio dos lanches dos primeiros dias.", ing:"Tiras de frango: 250 g. Sal.", prep:"Grelhe as tiras com sal. Desfie no processador ou com dois garfos. Guarde num pote da praça, na geladeira. Dura 2 a 3 dias."},
  {id:"c-arroz", name:"Arroz: 5 potes de 170 g", text:"Cozinhe enquanto o frango desfiado grelha.", ing:"Arroz: 300 g. Pasta de alho e cebola: 1 cubo. Água quente: 3 xícaras. Sal.", prep:"Refogue a pasta e o arroz. Junte a água e o sal. Cozinhe em fogo baixo por 15 a 20 minutos. Destampe no final.", adds:{arroz:5}},
  {id:"c-polenta", name:"Polenta: 4 potes de 275 g", text:"Cozinhe ao lado do arroz. Nesta semana é o dobro da Semana 1.", ing:"Fubá: 150 g. Água: 4 xícaras. Sal.", prep:"Misture o fubá na água fria com sal. Mexa em fogo baixo por 15 a 20 minutos. Espalhe numa forma, esfrie e corte.", adds:{polenta:4}}
 ]},
 {icon:"🔥", t:"Bloco 3 · Depois do molho do feijão e da cura · cerca de 1h15", when:"Na tarde do mesmo dia.", items:[
  {id:"c-crisps", name:"Crisps de calabresa: 150 g", text:"Frite primeiro e use o óleo no feijão.", ing:"Calabresa: 250 g.", prep:"Corte em rodelas finas. Frite na panela de pressão até dourar. Retire e deixe o óleo na panela. Guarde num pote da praça, na geladeira. Duram 5 dias: use primeiro."},
  {id:"c-feijao", name:"Feijão: 5 potes de 140 g", text:"Cozinhe na mesma panela, com o óleo da calabresa.", ing:"Feijão que ficou de molho: 250 g. Pasta de alho e cebola: 2 cubos. Água: até 2 cm acima dos grãos. Sal.", prep:"Escorra o feijão. Refogue a pasta no óleo. Junte o feijão e a água. Cozinhe por 30 minutos na pressão. Acerte o sal.", adds:{feijao:5}},
  {id:"c-frango", name:"Frango: 5 porções de 105 g", text:"Grelhe sem sal. Depois, 2 porções viram frango ao molho branco e 3 vão para os potes.", ing:"Filés da cura: 750 g. Óleo. Pasta de alho e cebola: 2 cubos.", prep:"Seque os filés e pese 5 porções de 150 g. Grelhe sem sal (a cura já salgou). Junte a pasta no final. Guarde 3 porções em potes e corte as outras 2 em cubos.", adds:{frango:5}},
  {id:"c-pfb", name:"Frango ao molho branco: 2 potes", text:"Faça na frigideira do frango, com o molho branco que descongelou.", ing:"Frango grelhado: 2 porções, em cubos. Molho branco: 1 pote.", prep:"Esquente o molho na frigideira, raspando o douradinho do frango. Se ficar grosso, junte um pouco de leite. Junte o frango e cozinhe por 5 a 10 minutos. Divida em 2 potes, com o molho.", adds:{pfb:2, frango:-2, mbranco:-1}},
  {id:"c-guardar", name:"Guardar o que foi cozido", text:"Esfrie com o pote destampado, por no máximo 2 horas fora da geladeira. Espalhe o arroz numa assadeira para esfriar mais rápido. No feijão, divida os grãos e complete com o caldo. Etiquete cada pote com o nome e a data, e leve ao freezer."}
 ]}
];

// ESPERADO: o que a pessoa deve ter em casa depois de guardar a compra e cozinhar.
// Já soma o que sobrou da Semana 1 (indicado entre parênteses).
const ESPERADO = [
 {icon:"❄️", local:"Freezer", itens:[
  "5x pote de arroz","5x pote de feijão","3x pote de frango grelhado","2x pote de frango ao molho branco",
  "2x pote de bolonhesa","2x pote de carne moída (1 da semana passada)","4x pote de polenta",
  "4x pote de torta de frango (da semana passada)","5x pote de cenoura branqueada (1 da semana passada)",
  "1x pote de molho de tomate","1x pote de molho branco",
  "3x saquinho de hambúrguer","7x saquinho de vitamina de frutas","1x forminha de pasta de alho e cebola (cerca de 1½)",
  "4x polpa de fruta de 100 g"]},
 {icon:"🧊", local:"Geladeira", itens:[
  "1x pote da praça de alface","1x pote da praça de repolho","1x pote da praça de cenoura ralada, com cerca de 340 g",
  "1x pote da praça de maçã, com cerca de 790 g","1x pote da praça de mamão picado, com cerca de 440 g",
  "1x pote da praça de muçarela","1x pote da praça de peito de peru","1x pote da praça de parmesão ralado",
  "1x pote da praça de crisps de calabresa","1x pote da praça de frango desfiado","Ovos","Manteiga"]},
 {icon:"🍋", local:"Gaveta da geladeira", itens:["1 kg de laranja","O limão que sobrou da Semana 1"]},
 {icon:"🍌", local:"Fruteira", itens:["1 kg de tomate para salada","Cerca de 1,3 kg de banana"]},
 {icon:"🗄️", local:"Despensa", itens:["O que sobrou da Semana 1 e os itens novos: espaguete, torrada, pão de forma, leite e atum"]}
];
const ESPERADO_TOTAL = "34 potes de porção, 10 potes da praça, 10 saquinhos, cerca de 1½ forminha de gelo e 4 polpas.";

// WEEK: o cardápio da Semana 2. Cada refeição é [texto do prato, {o que ela usa do freezer}].
const WEEK = [
 {d:"Seg", n:"Segunda", m:[
  ["Café com leite, 2 ovos cozidos, pão de forma com manteiga e mamão picado",{}],
  ["Vitamina de frutas e torrada com muçarela",{vit:1}],
  ["Suco de laranja, arroz, feijão, frango ao molho branco e cenoura",{arroz:1,feijao:1,pfb:1,cenoura:1}],
  ["Torta de frango e café com leite",{torta:1}],
  ["Lanche natural de frango desfiado, cenoura ralada e alface com maionese",{}],
  ["Crepioca com banana",{}]]},
 {d:"Ter", n:"Terça", m:[
  ["Leite com achocolatado, 2 ovos mexidos, torrada e mamão picado",{}],
  ["Vitamina de frutas e cuscuz com ovo",{vit:1}],
  ["Suco de polpa, macarrão à bolonhesa e salada de alface e tomate com azeite, limão e sal",{polpa:1,bolon:1}],
  ["Tapioca de frango desfiado com muçarela, e café com leite",{}],
  ["Hambúrguer, polenta e salada de repolho e cenoura ralada com molho de salada",{hamb:1,polenta:1}],
  ["Mingau de aveia com maçã picada e 2 ovos cozidos",{}]]},
 {d:"Qua", n:"Quarta", m:[
  ["Café com leite, omelete de 2 ovos, torrada e mamão picado",{}],
  ["Vitamina de frutas e pão de forma com peito de peru e muçarela",{vit:1}],
  ["Suco de polpa, arroz, feijão, frango grelhado e salada de repolho e cenoura ralada com crisps de calabresa",{polpa:1,arroz:1,feijao:1,frango:1}],
  ["Torta de frango e café com leite",{torta:1}],
  ["Salada de alface, tomate e maçã com atum, com molho de mostarda e mel, e torrada",{}],
  ["Torrada com muçarela e leite morno",{}]]},
 {d:"Qui", n:"Quinta", m:[
  ["Leite com achocolatado, 2 ovos cozidos e banana com farinha láctea",{}],
  ["Vitamina de frutas e torrada com manteiga",{vit:1}],
  ["Suco de limão, polenta com bolonhesa e cenoura",{polenta:1,bolon:1,cenoura:1}],
  ["Lanche natural de peito de peru, alface e tomate com maionese, e café com leite",{}],
  ["Omelete de 2 ovos com peito de peru e muçarela, e torrada",{}],
  ["Mingau de aveia com achocolatado e banana, e 2 ovos cozidos",{}]]},
 {d:"Sex", n:"Sexta", m:[
  ["Café com leite, 2 ovos mexidos, pão de forma e maçã",{}],
  ["Vitamina de frutas e cuscuz com muçarela",{vit:1}],
  ["Suco de polpa, arroz, feijão, hambúrguer e salada de alface e tomate com molho de salada",{polpa:1,arroz:1,feijao:1,hamb:1}],
  ["Torta de frango e café com leite",{torta:1}],
  ["Macarrão ao molho branco com frango",{mbranco:.5,frango:1}],
  ["Crepioca com maçã",{}]]},
 {d:"Sáb", n:"Sábado", m:[
  ["Leite com achocolatado, 2 ovos cozidos, torrada com manteiga e banana",{}],
  ["Vitamina de frutas e tapioca com peito de peru",{vit:1}],
  ["Suco de laranja, arroz, feijão, frango ao molho branco e cenoura",{arroz:1,feijao:1,pfb:1,cenoura:1}],
  ["Cuscuz com ovo e muçarela, e café com leite",{}],
  ["Polenta com 2 ovos mexidos e salada de alface e tomate com azeite, limão e sal",{polenta:1}],
  ["Mingau de aveia com farinha láctea e banana, e 2 ovos cozidos",{}]]},
 {d:"Dom", n:"Domingo", m:[
  ["Café com leite, omelete de 2 ovos, cuscuz e maçã",{}],
  ["Vitamina de frutas e torrada com muçarela",{vit:1}],
  ["Suco de polpa, arroz, feijão, hambúrguer e salada de repolho e tomate com molho de salada",{polpa:1,arroz:1,feijao:1,hamb:1}],
  ["Lanche natural de peito de peru, alface e tomate com maionese, e café com leite",{}],
  ["Macarrão ao molho de tomate com carne moída",{carne:1,mtomate:.5}],
  ["Tapioca com ovo mexido",{}]]}
];

// CURTO: o cardápio da Semana 2 em versão enxuta, para a tabela.
const CURTO = [
 ["Ovos cozidos, pão e mamão","Vitamina e torrada com queijo","Arroz, feijão, frango ao molho branco e cenoura","Torta de frango","Lanche natural de frango","Crepioca de banana"],
 ["Ovos mexidos, torrada e mamão","Vitamina e cuscuz com ovo","Macarrão à bolonhesa e salada","Tapioca de frango com queijo","Hambúrguer, polenta e salada","Mingau de maçã e ovos"],
 ["Omelete, torrada e mamão","Vitamina e pão com peito de peru","Arroz, feijão, frango e salada","Torta de frango","Salada com atum e torrada","Torrada com queijo e leite"],
 ["Ovos cozidos e banana com farinha láctea","Vitamina e torrada","Polenta com bolonhesa e cenoura","Lanche natural de peito de peru","Omelete com peito de peru e torrada","Mingau de banana e ovos"],
 ["Ovos mexidos, pão e maçã","Vitamina e cuscuz com queijo","Arroz, feijão, hambúrguer e salada","Torta de frango","Macarrão ao molho branco com frango","Crepioca de maçã"],
 ["Ovos cozidos, torrada e banana","Vitamina e tapioca com peito de peru","Arroz, feijão, frango ao molho branco e cenoura","Cuscuz com ovo e queijo","Polenta com ovos e salada","Mingau e ovos"],
 ["Omelete, cuscuz e maçã","Vitamina e torrada com queijo","Arroz, feijão, hambúrguer e salada","Lanche natural de peito de peru","Macarrão com carne moída","Tapioca com ovo"]
];

// BASE: itens da geladeira e da despensa que a pessoa marca como tem, pouco ou acabou.
// Na Semana 2, o peito de peru entra no lugar do presunto.
const BASE = ["Arroz","Feijão","Espaguete","Farinha de trigo","Fubá","Tapioca","Flocão de milho","Farelo de aveia","Fermento","Açúcar","Café solúvel","Achocolatado","Farinha láctea","Torrada","Pão de forma","Leite","Ovos","Manteiga","Muçarela","Peito de peru","Parmesão ralado","Atum","Óleo","Azeite","Sal","Pimenta-do-reino","Orégano","Molho de salada pronto","Maionese"];
