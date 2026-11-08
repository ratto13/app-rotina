/* ============ DADOS DA SEMANA 1 ============ */
// Este arquivo tem só os dados da Semana 1. A lógica fica no script.js, que é o mesmo para todas as semanas.
// A página semana1.html carrega este arquivo primeiro e depois o script.js.

// SEMANA: as informações gerais da semana, usadas nos textos das telas.
// num = número da semana; proxima = página da semana seguinte (null quando não tem);
// INICIAL = o que já está no freezer antes de começar (na Semana 1, nada).
const SEMANA = {
  num: 1,
  titulo: "Sua primeira semana",
  intro: "Em vez de cozinhar todo dia, você organiza a semana: compra, guarda e cozinha de uma vez, divide tudo em porções e congela. Durante a semana, é só montar o prato e esquentar.",
  notaCompra: "",
  tempoCozinha: "cerca de 3h30",
  potesGuardar: "8 potes da praça, 4 potes de porção, 7 saquinhos e 3 forminhas de gelo.",
  usePrimeiro: "a cenoura ralada e o mamão picado duram 3 a 4 dias na geladeira. Por isso eles aparecem nos primeiros dias do cardápio.",
  proxima: "semana2.html",
  INICIAL: {}
};

// SHOP: a lista de compras.
// É um array de seções do mercado (sec). Cada seção tem grupos (g),
// e cada grupo tem um subtítulo (s) e os itens (i). A tela de Compra é desenhada a partir daqui.
const SHOP = [
 {sec:"🥬 Hortifrúti", g:[
  {s:"Frutas", i:["Banana nanica: 2 kg","Mamão formosa: 1 kg","Maçã gala: 1 kg","Laranja-pera: 1 kg","Limão tahiti: 500 g"]},
  {s:"Legumes", i:["Tomate italiano: 1 kg","Tomate para salada: 1 kg","Cenoura: 1,2 kg","Cebola: 1 kg","Alho: 1 cabeça"]},
  {s:"Folhas", i:["Repolho: 1 unidade","Alface: 1 unidade"]}]},
 {sec:"🥫 Mercearia", g:[
  {s:"Grãos e massas", i:["Arroz: 1 kg","Feijão carioca: 1 kg","Espaguete: 500 g"]},
  {s:"Farinhas", i:["Farinha de trigo: 1 kg","Fubá: 1 kg","Tapioca (goma): 1 kg","Farelo de aveia: 1 pacote","Fermento químico: 1 pote","Flocão de milho: 500 g"]},
  {s:"Matinais", i:["Café solúvel: 1 pote","Achocolatado: 1 lata","Farinha láctea: 1 lata","Torrada: 1 pacote","Pão de forma: 1 pacote","Açúcar: 1 kg"]},
  {s:"Leite e ovos", i:["Leite integral: 7 litros","Ovos: 36 unidades"]},
  {s:"Óleos e temperos", i:["Óleo: 1 garrafa","Azeite: 1 garrafa","Sal: 1 pacote","Pimenta-do-reino: 1 pote","Orégano: 1 pacote","Molho de salada pronto: 2 frascos, de sabores diferentes","Maionese: 1 pote"]},
  {s:"Enlatados", i:["Atum: 2 latas"]}]},
 {sec:"🥩 Açougue", g:[{s:"", i:["Peito de frango: 1 kg","Acém moído: 1 kg"]}]},
 {sec:"🧊 Resfriados", g:[{s:"", i:["Calabresa: 250 g","Muçarela: 200 g","Parmesão ralado: 1 pacote","Manteiga: 200 g","Presunto: 200 g","Polpa de fruta congelada: 4 pacotes de 100 g"]}]}
];

// ARM: os 6 passos para guardar a compra.
// Cada passo tem um ícone, um título (t) e os itens. Cada item tem:
// id (nome único, usado para lembrar se foi feito), name (título), text (frase curta),
// d (destinos: pares [título, explicação]) e, às vezes, adds (o que entra no freezer quando é marcado).
const ARM = [
 {icon:"⚡", t:"Guarda rápida", items:[
  {id:"acem", name:"Acém moído: 1 kg", text:"Guarde na geladeira até a etapa de cozinha.", d:[["Carne moída, 500 g, e hambúrguer, 500 g","Será dividido em carne moída e hambúrguer."]]},
  {id:"calab", name:"Calabresa: 250 g", text:"Guarde na geladeira até a etapa de cozinha.", d:[["Crisps de calabresa, 250 g","Será cortada em rodelas finas e frita junto com o feijão."]]},
  {id:"frango", name:"Peito de frango: 1 kg", text:"Guarde na geladeira até a etapa de cozinha.", d:[["Grelhado, 750 g, e desfiado, 250 g","Será dividido em filés para grelhar e tiras para desfiar."]]}
 ]},
 {icon:"🫙", t:"Passar para potes", items:[
  {id:"frios", name:"Muçarela, presunto e parmesão ralado", text:"Passe para o pote.", d:[["Queijos e frios","Guarde na geladeira."],["Potes","3 potes da praça."]]}
 ]},
 {icon:"🗄️", t:"Guardar o resto da compra", items:[
  {id:"base", name:"Secos, refrigerados e congelados", text:"Guarde conforme a sua organização.", d:[["Itens","Ovos, manteiga, polpa de fruta (no freezer), arroz, feijão, espaguete, farinha de trigo, fubá, tapioca, flocão de milho, farelo de aveia, fermento, café solúvel, achocolatado, farinha láctea, torrada, pão de forma, açúcar, leite, atum, óleo, azeite, sal, pimenta-do-reino, orégano, molho de salada pronto e maionese."]], adds:{polpa:4}}
 ]},
 {icon:"🧽", t:"Limpar a praça", items:[
  {id:"praca", name:"Bancada, pia e utensílios", text:"Limpe tudo antes de começar a higienização. É isso que o método chama de limpar a praça: deixar o espaço de trabalho pronto antes de mexer nos alimentos."}
 ]},
 {icon:"💧", t:"Higienização", items:[
  {id:"hig", name:"Frutas e vegetais", text:"Higienize tudo de uma vez, antes de cortar e guardar.", d:[
   ["Itens","Laranja, limão, tomate italiano, tomate para salada, alface, repolho, cenoura, banana, maçã e mamão."],
   ["Lavagem","Solte as folhas da alface e do repolho. Lave tudo em água corrente. Deixe 15 minutos em água com vinagre, meio copo por litro, na pia limpa ou numa bacia. Enxágue."],
   ["Secagem","Seque bem cada item. A umidade faz apodrecer mais rápido."]]}
 ]},
 {icon:"🔪", t:"Corte e armazenamento", items:[
  {id:"laranja", name:"Laranja-pera: 1 kg e limão tahiti: 500 g", text:"Guarde inteiros e corte na hora.", d:[["Inteiros","Guarde na gaveta da geladeira."]]},
  {id:"tomit", name:"Tomate italiano: 1 kg", text:"Guarde inteiro até fazer o molho.", d:[["Molho, 1 kg","Guarde na fruteira até a etapa de cozinha."]]},
  {id:"tomsal", name:"Tomate para salada: 1 kg", text:"Separe parte para a torta e guarde o restante inteiro.", d:[["Torta, 100 g, e salada, o restante","Guarde na fruteira e corte na hora."]]},
  {id:"folhas", name:"Alface e repolho: 1 unidade de cada", text:"Guarde as folhas inteiras.", d:[["Folhas","Forre o pote com papel-toalha e guarde na geladeira."],["Potes","2 potes da praça."]]},
  {id:"cenoura", name:"Cenoura: 1,2 kg", text:"Divida em três cortes: em barras, ralada e picada. Os pesos já são sem casca.", d:[
   ["Branqueada, 500 g","Descasque e corte em barras. Ferva por 3 minutos. Passe na água com gelo e seque. Divida em 4 porções de 125 g e congele."],
   ["Ralada, 340 g","Descasque e rale. Guarde na geladeira."],
   ["Vitamina, 140 g","Descasque e pique."],
   ["Potes","4 potes de porção, 1 pote da praça."]], adds:{cenoura:4}},
  {id:"banana", name:"Banana nanica: 2 kg", text:"Separe parte para a vitamina e guarde o restante inteiro.", d:[["Inteira, o restante","Guarde na fruteira."],["Vitamina, 700 g sem casca (cerca de 1,1 kg com casca)","Descasque e pique."]]},
  {id:"maca", name:"Maçã gala: 1 kg", text:"Separe parte para a vitamina e guarde o restante inteiro.", d:[["Inteira, o restante","Guarde na geladeira."],["Vitamina, 210 g","Pique."],["Potes","1 pote da praça."]]},
  {id:"mamao", name:"Mamão formosa: 1 kg", text:"Separe parte para a vitamina e pique o restante.", d:[["Picado, cerca de 440 g, e vitamina, 210 g","Descasque, tire as sementes e pique. Guarde o picado na geladeira."],["Potes","1 pote da praça."]]},
  {id:"kits", name:"Vitamina de frutas: 7 kits", text:"Monte os kits com as frutas e a cenoura picadas.", d:[["Kit, 180 g","Pese em cada saquinho 100 g de banana, 30 g de mamão, 30 g de maçã e 20 g de cenoura. Tire o ar, feche e congele."],["Potes","7 saquinhos."]], adds:{vit:7}},
  {id:"pasta", name:"Cebola e alho: 1 kg e 1 cabeça", text:"Triture juntos para fazer a pasta de tempero.", d:[["Pasta de alho e cebola, em forminhas de gelo","Descasque. Triture com sal. Encha as forminhas e congele."],["Potes","3 forminhas de gelo."]]}
 ]}
];

// COZ: os 3 blocos da cozinha. Mesma ideia do ARM,
// mas os itens também têm ing (ingredientes) e prep (preparo).
const COZ = [
 {icon:"🕘", t:"Bloco 1 · Início · cerca de 15 minutos", when:"No dia da compra, logo depois de guardar tudo.", items:[
  {id:"c-feijao1", name:"Feijão: 250 g", text:"Deixe de molho para cozinhar no bloco 3.", d:[["Demolho","Cubra com água na própria panela de pressão. Deixe de 8 a 12 horas e troque a água uma vez."]]},
  {id:"c-cura", name:"Peito de frango: 1 kg", text:"Separe os filés para a cura e as tiras para desfiar. Cura é deixar a carne na água com sal: ela fica temperada e mais macia.", d:[
   ["Grelhado, 750 g","Corte em filés de 2 cm. Na vasilha com tampa de 2 litros, dissolva 1 colher de sopa generosa de sal por litro de água. Cubra todos os filés juntos, tampe e deixe na geladeira de 6 a 24 horas."],
   ["Desfiado, 250 g","Corte em tiras. Guarde na geladeira até fazer a torta."]]}
 ]},
 {icon:"🥩", t:"Bloco 2 · Durante a cura e o molho do feijão · cerca de 2 horas", when:"Na manhã seguinte.", items:[
  {id:"c-hamb", name:"Hambúrguer: 3 discos de 165 g", text:"Divida o acém e molde os hambúrgueres primeiro.", ing:"Acém moído: 500 g. Ovo: 1. Farelo de aveia: 2 colheres de sopa. Pasta de alho e cebola: 1 cubo. Sal e pimenta-do-reino.", prep:"Separe 500 g do acém. Misture tudo. Molde 3 discos. Enrole cada um em plástico-filme, coloque no saquinho e congele.", adds:{hamb:3}},
  {id:"c-carne", name:"Carne moída: 3 potes de 115 g", text:"Refogue e use a panela para o molho de tomate.", ing:"Acém moído: 500 g. Pasta de alho e cebola: 2 cubos. Sal.", prep:"Refogue a pasta. Junte a carne e solte bem. Cozinhe até secar. Acerte o sal. Divida em 3 porções.", adds:{carne:3}},
  {id:"c-mtomate", name:"Molho de tomate: 3 potes de 200 g", text:"Faça na panela da carne moída.", ing:"Tomate italiano: 1 kg. Pasta de alho e cebola: 2 cubos. Azeite: 2 colheres de sopa. Sal e orégano.", prep:"Corte o tomate em 3 e tire a parte branca e as sementes. Refogue a pasta no azeite. Junte o tomate e uma pitada de sal e tampe até desmanchar. Bata no liquidificador e volte à panela. Retire a espuma ao ferver. Cozinhe tampado, em fogo baixo, por 30 minutos. Acerte o sal e o orégano.", adds:{mtomate:3}},
  {id:"c-torta", name:"Torta de frango: 7 pedaços de 140 g", text:"Grelhe e desfie as tiras, e asse a torta.", ing:"Tiras de frango: 250 g. Ovos: 3. Leite: 1 xícara. Óleo: ½ xícara. Farinha de trigo: 2 xícaras. Fermento: 1 colher de sopa. Sal. Cenoura ralada: 100 g. Tomate para salada: 100 g.", prep:"Grelhe as tiras com sal. Desfie no processador ou com dois garfos. Tire as sementes do tomate e pique. Bata a massa no liquidificador. Em forma untada, coloque metade da massa, o recheio e o restante da massa. Asse a 180 °C por cerca de 40 minutos. Esfrie, pese a torta inteira e corte em 7 pedaços de 140 g. Guarde 1 pedaço por pote.", adds:{torta:7}},
  {id:"c-arroz", name:"Arroz: 5 potes de 170 g", text:"Cozinhe enquanto a torta assa.", ing:"Arroz: 300 g. Pasta de alho e cebola: 1 cubo. Água quente: 3 xícaras. Sal.", prep:"Refogue a pasta e o arroz. Junte a água e o sal. Cozinhe em fogo baixo por 15 a 20 minutos. Destampe no final.", adds:{arroz:5}},
  {id:"c-polenta", name:"Polenta: 2 potes de 275 g", text:"Cozinhe ao lado do arroz.", ing:"Fubá: 75 g. Água: 2 xícaras. Sal.", prep:"Misture o fubá na água fria com sal. Mexa em fogo baixo por 15 a 20 minutos. Espalhe numa forma, esfrie e corte.", adds:{polenta:2}}
 ]},
 {icon:"🔥", t:"Bloco 3 · Depois do molho do feijão e da cura · cerca de 1h15", when:"Na tarde do mesmo dia.", items:[
  {id:"c-crisps", name:"Crisps de calabresa: 150 g", text:"Frite primeiro e use o óleo no feijão.", ing:"Calabresa: 250 g.", prep:"Corte em rodelas finas. Frite na panela de pressão até dourar. Retire e deixe o óleo na panela. Guarde num pote da praça, na geladeira. Duram 5 dias: use primeiro."},
  {id:"c-feijao", name:"Feijão: 5 potes de 140 g", text:"Cozinhe na mesma panela, com o óleo da calabresa.", ing:"Feijão que ficou de molho: 250 g. Pasta de alho e cebola: 2 cubos. Água: até 2 cm acima dos grãos. Sal.", prep:"Escorra o feijão. Refogue a pasta no óleo. Junte o feijão e a água. Cozinhe por 30 minutos na pressão. Acerte o sal.", adds:{feijao:5}},
  {id:"c-frango", name:"Frango: 5 potes de 105 g", text:"Grelhe sem sal e use a frigideira para o molho branco.", ing:"Filés da cura: 750 g. Óleo. Pasta de alho e cebola: 2 cubos.", prep:"Seque os filés e pese 5 porções de 150 g. Grelhe sem sal (a cura já salgou). Junte a pasta no final.", adds:{frango:5}},
  {id:"c-mbranco", name:"Molho branco: 3 potes de 265 g", text:"Faça na frigideira do frango.", ing:"Manteiga: 38 g. Farinha de trigo: 4 colheres de sopa. Leite frio: 750 ml. Sal.", prep:"Derreta a manteiga e raspe o douradinho do frango. Junte a farinha e mexa por 1 a 2 minutos. Junte o leite aos poucos, mexendo sempre. Cozinhe até não escorrer nas costas da colher. Cubra com plástico-filme encostado no molho enquanto esfria.", adds:{mbranco:3}},
  {id:"c-guardar", name:"Guardar o que foi cozido", text:"Esfrie com o pote destampado, por no máximo 2 horas fora da geladeira. Espalhe o arroz numa assadeira para esfriar mais rápido. No feijão, divida os grãos e complete com o caldo. Etiquete cada pote com o nome e a data, e leve ao freezer."}
 ]}
];

// ESPERADO: o que a pessoa deve ter em casa depois de guardar a compra e cozinhar.
// Aparece no fim da sub-aba Cozinha, para conferir antes de começar o cardápio.
// Cada local tem um ícone, um nome e a lista do que deve estar lá.
const ESPERADO = [
 {icon:"❄️", local:"Freezer", itens:[
  "5x pote de arroz","5x pote de feijão","5x pote de frango grelhado",
  "3x pote de carne moída","3x pote de molho de tomate","3x pote de molho branco",
  "2x pote de polenta","7x pote de torta de frango","4x pote de cenoura branqueada",
  "3x saquinho de hambúrguer","7x saquinho de vitamina de frutas","2x forminha de pasta de alho e cebola (cerca de)",
  "4x polpa de fruta de 100 g"]},
 {icon:"🧊", local:"Geladeira", itens:[
  "1x pote da praça de alface","1x pote da praça de repolho","1x pote da praça de cenoura ralada, com cerca de 240 g",
  "1x pote da praça de maçã, com cerca de 790 g","1x pote da praça de mamão picado, com cerca de 440 g",
  "1x pote da praça de muçarela","1x pote da praça de presunto","1x pote da praça de parmesão ralado",
  "1x pote da praça de crisps de calabresa","32 ovos","Manteiga"]},
 {icon:"🍋", local:"Gaveta da geladeira", itens:["1 kg de laranja","500 g de limão"]},
 {icon:"🍌", local:"Fruteira", itens:["Cerca de 900 g de tomate para salada","Cerca de 1,3 kg de banana"]},
 {icon:"🗄️", local:"Despensa", itens:["Arroz, feijão, espaguete, farinha de trigo, fubá, tapioca, flocão de milho, farelo de aveia, fermento, café solúvel, achocolatado, farinha láctea, torrada, pão de forma, açúcar, leite, atum, óleo, azeite, sal, pimenta-do-reino, orégano, molho de salada pronto e maionese"]}
];
const ESPERADO_TOTAL = "37 potes de porção, 9 potes da praça, 10 saquinhos, cerca de 2 forminhas de gelo e 4 polpas.";

// WEEK: o cardápio da semana, um objeto por dia.
// Cada refeição é [texto do prato, {o que ela usa do freezer}].
// Ex.: {arroz:1, feijao:1} tira 1 pote de arroz e 1 de feijão quando a pessoa marca "Comi".
const WEEK = [
 {d:"Seg", n:"Segunda", m:[
  ["Café com leite, 2 ovos mexidos, pão de forma com manteiga e mamão picado",{}],
  ["Vitamina de frutas e tapioca com muçarela",{vit:1}],
  ["Suco de laranja, arroz, feijão, frango grelhado e cenoura",{arroz:1,feijao:1,frango:1,cenoura:1}],
  ["Torta de frango e café com leite",{torta:1}],
  ["Salada de repolho, cenoura ralada e maçã com atum, com molho de mostarda e mel, e torrada",{}],
  ["Mingau de aveia com banana e 2 ovos cozidos",{}]]},
 {d:"Ter", n:"Terça", m:[
  ["Leite com achocolatado, 2 ovos cozidos, torrada e mamão picado",{}],
  ["Vitamina de frutas e torrada com manteiga",{vit:1}],
  ["Suco de polpa, macarrão ao molho de tomate com carne moída e salada de alface e tomate com azeite, limão e sal",{polpa:1,mtomate:.5,carne:1}],
  ["Lanche natural de presunto, cenoura ralada, alface e tomate com maionese, e café com leite",{}],
  ["Hambúrguer, polenta e salada de alface e tomate com molho de salada",{hamb:1,polenta:1}],
  ["Crepioca com banana",{}]]},
 {d:"Qua", n:"Quarta", m:[
  ["Café com leite, 2 ovos mexidos, tapioca com manteiga e mamão picado",{}],
  ["Vitamina de frutas e cuscuz com ovo",{vit:1}],
  ["Suco de polpa, arroz, feijão, hambúrguer e salada de repolho e cenoura ralada com crisps de calabresa, azeite, suco de laranja e sal",{polpa:1,arroz:1,feijao:1,hamb:1}],
  ["Torta de frango e café com leite",{torta:1}],
  ["Lanche natural de presunto, cenoura ralada, alface e tomate com maionese",{}],
  ["Mingau de aveia com maçã picada e 2 ovos cozidos",{}]]},
 {d:"Qui", n:"Quinta", m:[
  ["Leite com achocolatado, 2 ovos cozidos e banana com farinha láctea",{}],
  ["Vitamina de frutas e torrada com muçarela",{vit:1}],
  ["Suco de limão, macarrão ao molho branco com frango e cenoura",{mbranco:.5,frango:1,cenoura:1}],
  ["Tapioca com presunto e muçarela, e café com leite",{}],
  ["Salada de repolho e maçã com atum, com molho de mostarda e mel, e torrada",{}],
  ["Cuscuz com ovo e muçarela",{}]]},
 {d:"Sex", n:"Sexta", m:[
  ["Café com leite, omelete de 2 ovos, pão de forma e maçã",{}],
  ["Vitamina de frutas e tapioca com ovo",{vit:1}],
  ["Suco de polpa, arroz, feijão, frango grelhado e salada de alface e tomate com crisps de calabresa, azeite, limão e sal",{polpa:1,arroz:1,feijao:1,frango:1}],
  ["Torta de frango e café com leite",{torta:1}],
  ["Macarrão ao molho de tomate com carne moída",{mtomate:.5,carne:1}],
  ["Mingau de aveia com farinha láctea e banana, e 2 ovos cozidos",{}]]},
 {d:"Sáb", n:"Sábado", m:[
  ["Leite com achocolatado, 2 ovos mexidos, cuscuz e banana",{}],
  ["Vitamina de frutas e tapioca com muçarela",{vit:1}],
  ["Suco de laranja, arroz, feijão, hambúrguer e cenoura",{arroz:1,feijao:1,hamb:1,cenoura:1}],
  ["Lanche natural de presunto, repolho e maçã com maionese, e café com leite",{}],
  ["Macarrão ao molho branco com frango",{mbranco:.5,frango:1}],
  ["Crepioca com maçã",{}]]},
 {d:"Dom", n:"Domingo", m:[
  ["Café com leite, 2 ovos cozidos, torrada com manteiga e maçã",{}],
  ["Vitamina de frutas e torrada com manteiga",{vit:1}],
  ["Suco de polpa, arroz, feijão, frango grelhado e salada de alface e tomate com molho de salada",{polpa:1,arroz:1,feijao:1,frango:1}],
  ["Cuscuz com ovo e muçarela, e café com leite",{}],
  ["Omelete de 2 ovos com muçarela, polenta e salada de alface e tomate com azeite, limão e sal",{polenta:1}],
  ["Tapioca com ovo mexido",{}]]}
];


// CURTO: o cardápio em versão enxuta, para a tabela da semana.
// Um array por dia (segunda a domingo), com as 6 refeições na ordem de MEALS.
// As bebidas ficam de fora para caber na tabela; o texto completo continua no dia a dia.
const CURTO = [
 ["Ovos mexidos, pão e mamão","Vitamina e tapioca com queijo","Arroz, feijão, frango e cenoura","Torta de frango","Salada com atum e torrada","Mingau de banana e ovos"],
 ["Ovos cozidos, torrada e mamão","Vitamina e torrada","Macarrão com carne moída e salada","Lanche natural","Hambúrguer, polenta e salada","Crepioca de banana"],
 ["Ovos mexidos, tapioca e mamão","Vitamina e cuscuz com ovo","Arroz, feijão, hambúrguer e salada","Torta de frango","Lanche natural","Mingau de maçã e ovos"],
 ["Ovos cozidos e banana com farinha láctea","Vitamina e torrada com queijo","Macarrão ao molho branco com frango","Tapioca de presunto e queijo","Salada com atum e torrada","Cuscuz com ovo e queijo"],
 ["Omelete, pão e maçã","Vitamina e tapioca com ovo","Arroz, feijão, frango e salada","Torta de frango","Macarrão com carne moída","Mingau e ovos"],
 ["Ovos mexidos, cuscuz e banana","Vitamina e tapioca com queijo","Arroz, feijão, hambúrguer e cenoura","Lanche natural","Macarrão ao molho branco com frango","Crepioca de maçã"],
 ["Ovos cozidos, torrada e maçã","Vitamina e torrada","Arroz, feijão, frango e salada","Cuscuz com ovo e queijo","Omelete, polenta e salada","Tapioca com ovo"]
];

// BASE: itens da geladeira e da despensa que a pessoa marca como tem, pouco ou acabou.
const BASE = ["Arroz","Feijão","Espaguete","Farinha de trigo","Fubá","Tapioca","Flocão de milho","Farelo de aveia","Fermento","Açúcar","Café solúvel","Achocolatado","Farinha láctea","Torrada","Pão de forma","Leite","Ovos","Manteiga","Muçarela","Presunto","Parmesão ralado","Atum","Óleo","Azeite","Sal","Pimenta-do-reino","Orégano","Molho de salada pronto","Maionese"];
