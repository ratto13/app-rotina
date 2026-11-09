// =====================================================================
// banco.js · Banco de dados do Método Modular
// ---------------------------------------------------------------------
// O que é: todas as fichas do arquivo "D - fichas-banco-de-dados" (versão 1.4),
// no formato do padrão do banco de dados (versão 1.8, seção 10).
// Para que serve: a página lê este arquivo para montar a tela de escolha,
// o cardápio, a compra, o guardar e a cozinha, sem IA.
// Importante: este arquivo é gerado a partir das fichas. Para mudar um
// alimento, mude primeiro a ficha (e o Anexo A) e depois gere o arquivo de novo.
// Quem usa: a tela de escolha (escolha.js) e a montagem da Semana 1 (monta.js).
// =====================================================================

// ---------------------------------------------------------------------
// Como ler cada item:
// - tipo: "ingrediente" (comprado no mercado), "preparo" (feito antes e
//   guardado) ou "prato" (montado na hora da refeição).
// - Listas ficam entre colchetes [ ], mesmo com um item só.
// - aproveitavel: número decimal (0.65 = 65%); quando a ficha traz um
//   texto (exemplo: "rende cerca de 2,8 vezes o peso cru"), fica o texto.
// - receita, componentes e usa_freezer: cada item tem o id, a quantidade
//   (qtd), a unidade e o texto original da ficha. "opcional: true" quer
//   dizer que o item não trava o prato (padrão, seção 3).
// - escolha: o grupo da tela "O que você quer comer?". Vazio ("") quer dizer
//   que o item não aparece na tela e entra na compra sozinho.
// - recomendado: true quando o item já vem marcado na tela de escolha.
// ---------------------------------------------------------------------

const BANCO = {
  // ---------------------------------------------------------------
  // INGREDIENTES: o que é comprado no mercado
  // ---------------------------------------------------------------
  ingredientes: [

    // ===== 1.1 Nível 1 · Hortifrúti =====
    // Banana nanica
    {
      "id": "banana-nanica",
      "tipo": "ingrediente",
      "nome": "Banana nanica",
      "secao": "hortifrúti",
      "subsecao": "frutas",
      "grupo": "frutas",
      "papel": [
        "fruta"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 2,
        "texto": "2 kg"
      },
      "aproveitavel": 0.65,
      "guardar": "inteira · fruteira; madura vira kit",
      "validade": {
        "fruteira": "4 a 7 dias",
        "freezer": "em kit"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "entra_em": [
        "kit-vitamina-base",
        "mingau",
        "crepioca-banana",
        "banana-farinha-lactea",
        "bolo-banana",
        "panqueca-banana",
        "kit-vitamina-banana-abacate",
        "kit-vitamina-banana-uva"
      ],
      "escolha": "Frutas",
      "recomendado": false,
      "substitutos": [
        "maca-gala",
        "mamao-formosa"
      ],
      "composicao": [],
      "obs": ""
    },
    // Mamão formosa
    {
      "id": "mamao-formosa",
      "tipo": "ingrediente",
      "nome": "Mamão formosa",
      "secao": "hortifrúti",
      "subsecao": "frutas",
      "grupo": "frutas",
      "papel": [
        "fruta"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": 0.65,
      "guardar": "picado · pote da praça · geladeira; parte vai para o kit",
      "validade": {
        "geladeira": "3 a 4 dias",
        "freezer": "em kit"
      },
      "nivel": 1,
      "refeicoes": [
        "café"
      ],
      "entra_em": [
        "mamao-picado",
        "kit-vitamina-base"
      ],
      "escolha": "Frutas",
      "recomendado": false,
      "substitutos": [
        "maca-gala",
        "banana-nanica"
      ],
      "composicao": [],
      "obs": ""
    },
    // Maçã gala
    {
      "id": "maca-gala",
      "tipo": "ingrediente",
      "nome": "Maçã gala",
      "secao": "hortifrúti",
      "subsecao": "frutas",
      "grupo": "frutas",
      "papel": [
        "fruta"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": 0.9,
      "guardar": "inteira · pote da praça · geladeira; parte vai para o kit",
      "validade": {
        "geladeira": "3 a 4 semanas",
        "freezer": "em kit"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da tarde",
        "janta",
        "ceia"
      ],
      "entra_em": [
        "kit-vitamina-base",
        "salada-repolho-maca-atum",
        "lanche-natural-repolho-maca",
        "crepioca-maca",
        "salpicao"
      ],
      "escolha": "Frutas",
      "recomendado": false,
      "substitutos": [
        "banana-nanica",
        "mamao-formosa"
      ],
      "composicao": [],
      "obs": "cortar na hora e passar limão, para não escurecer"
    },
    // Laranja-pera
    {
      "id": "laranja-pera",
      "tipo": "ingrediente",
      "nome": "Laranja-pera",
      "secao": "hortifrúti",
      "subsecao": "frutas",
      "grupo": "frutas",
      "papel": [
        "fruta"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": "60% (suco: 45%)",
      "guardar": "inteira · gaveta da geladeira",
      "validade": {
        "gaveta da geladeira": "2 a 3 semanas",
        "freezer": "em gomos, em kit"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço"
      ],
      "entra_em": [
        "suco-laranja",
        "kit-suco-goiaba-laranja"
      ],
      "escolha": "Frutas",
      "recomendado": false,
      "substitutos": [
        "polpa-fruta",
        "limao-tahiti"
      ],
      "composicao": [],
      "obs": ""
    },
    // Limão tahiti
    {
      "id": "limao-tahiti",
      "tipo": "ingrediente",
      "nome": "Limão tahiti",
      "secao": "hortifrúti",
      "subsecao": "frutas",
      "grupo": "frutas",
      "papel": [
        "fruta"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 500,
        "texto": "500 g"
      },
      "aproveitavel": "40% (suco)",
      "guardar": "inteiro · gaveta da geladeira",
      "validade": {
        "gaveta da geladeira": "2 a 3 semanas"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço"
      ],
      "entra_em": [
        "suco-limao",
        "salada-alface-tomate"
      ],
      "escolha": "Frutas",
      "recomendado": false,
      "substitutos": [
        "laranja-pera",
        "polpa-fruta"
      ],
      "composicao": [],
      "obs": "comprado a cada 2 semanas (Anexo A, seção A.5.3)"
    },
    // Tomate italiano
    {
      "id": "tomate-italiano",
      "tipo": "ingrediente",
      "nome": "Tomate italiano",
      "secao": "hortifrúti",
      "subsecao": "legumes",
      "grupo": "legumes",
      "papel": [
        "vegetal"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": 0.95,
      "guardar": "inteiro · fruteira, até o molho",
      "validade": {
        "fruteira": "5 a 7 dias",
        "freezer": "só em molho"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "molho-tomate",
        "molho-tomate-legumes"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": "entra na compra quando um prato escolhido usa molho de tomate; 1 kg para 3 potes de molho"
    },
    // Tomate para salada
    {
      "id": "tomate-salada",
      "tipo": "ingrediente",
      "nome": "Tomate para salada",
      "secao": "hortifrúti",
      "subsecao": "legumes",
      "grupo": "legumes",
      "papel": [
        "vegetal"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": 0.95,
      "guardar": "inteiro · fruteira; cortado na hora",
      "validade": {
        "fruteira": "5 a 7 dias",
        "outro": "não congela cru"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "salada-alface-tomate",
        "lanche-natural-presunto",
        "torta-frango",
        "empadao-frango"
      ],
      "escolha": "Legumes e folhas",
      "recomendado": false,
      "substitutos": [
        "cenoura",
        "repolho"
      ],
      "composicao": [],
      "obs": ""
    },
    // Cenoura
    {
      "id": "cenoura",
      "tipo": "ingrediente",
      "nome": "Cenoura",
      "secao": "hortifrúti",
      "subsecao": "legumes",
      "grupo": "legumes",
      "papel": [
        "vegetal"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1.2,
        "texto": "1,2 kg"
      },
      "aproveitavel": 0.85,
      "guardar": "branqueada · pote de porção · freezer; ralada · pote da praça · geladeira; picada em kit",
      "validade": {
        "pote da praça": "3 a 4 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "cenoura-branqueada",
        "cenoura-ralada",
        "kit-vitamina-base",
        "bolo-cenoura",
        "molho-tomate-legumes",
        "sopa-lentilha-calabresa",
        "kit-vitamina-banana-abacate"
      ],
      "escolha": "Legumes e folhas",
      "recomendado": false,
      "substitutos": [
        "tomate-salada",
        "repolho"
      ],
      "composicao": [],
      "obs": ""
    },
    // Cebola
    {
      "id": "cebola",
      "tipo": "ingrediente",
      "nome": "Cebola",
      "secao": "hortifrúti",
      "subsecao": "legumes",
      "grupo": "legumes",
      "papel": [
        "tempero"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": 0.9,
      "guardar": "triturado · cubo · freezer, na pasta de alho e cebola",
      "validade": {
        "fruteira": "1 mês",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "pasta-alho-cebola",
        "frango-xadrez"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": ""
    },
    // Alho
    {
      "id": "alho",
      "tipo": "ingrediente",
      "nome": "Alho",
      "secao": "hortifrúti",
      "subsecao": "legumes",
      "grupo": "legumes",
      "papel": [
        "tempero"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 cabeça"
      },
      "aproveitavel": 0.85,
      "guardar": "triturado · cubo · freezer, na pasta de alho e cebola",
      "validade": {
        "fruteira": "1 a 2 meses",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "pasta-alho-cebola"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": ""
    },
    // Repolho
    {
      "id": "repolho",
      "tipo": "ingrediente",
      "nome": "Repolho",
      "secao": "hortifrúti",
      "subsecao": "folhas",
      "grupo": "folhas",
      "papel": [
        "vegetal"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 unidade"
      },
      "aproveitavel": 0.85,
      "guardar": "lavado · folhas soltas e inteiras · pote da praça · geladeira; fatiado na hora",
      "validade": {
        "pote da praça": "7 a 10 dias",
        "outro": "fatiado 2 a 3 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "salada-repolho-cenoura",
        "salada-repolho-maca-atum",
        "lanche-natural-repolho-maca"
      ],
      "escolha": "Legumes e folhas",
      "recomendado": false,
      "substitutos": [
        "alface",
        "cenoura"
      ],
      "composicao": [],
      "obs": ""
    },
    // Alface
    {
      "id": "alface",
      "tipo": "ingrediente",
      "nome": "Alface",
      "secao": "hortifrúti",
      "subsecao": "folhas",
      "grupo": "folhas",
      "papel": [
        "vegetal"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 unidade"
      },
      "aproveitavel": 0.8,
      "guardar": "lavado · folhas soltas e inteiras · pote da praça com papel-toalha · geladeira",
      "validade": {
        "pote da praça": "7 a 10 dias",
        "outro": "não congela"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "salada-alface-tomate",
        "lanche-natural-presunto"
      ],
      "escolha": "Legumes e folhas",
      "recomendado": false,
      "substitutos": [
        "repolho",
        "tomate-salada"
      ],
      "composicao": [],
      "obs": "1 alface rende cerca de 6 saladas; acima disso, 2"
    },
    // Couve
    {
      "id": "couve",
      "tipo": "ingrediente",
      "nome": "Couve",
      "secao": "hortifrúti",
      "subsecao": "folhas",
      "grupo": "folhas",
      "papel": [
        "vegetal"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 maço"
      },
      "aproveitavel": 0.85,
      "guardar": "fatiado fino · cru · saquinho · freezer",
      "validade": {
        "geladeira": "3 a 5 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "janta"
      ],
      "entra_em": [
        "caldo-verde",
        "feijao-tropeiro"
      ],
      "escolha": "Legumes e folhas",
      "recomendado": false,
      "substitutos": [
        "repolho",
        "alface"
      ],
      "composicao": [],
      "obs": "1 maço rende cerca de 200 g"
    },

    // ===== 1.2 Nível 1 · Mercearia =====
    // Arroz
    {
      "id": "arroz-cru",
      "tipo": "ingrediente",
      "nome": "Arroz",
      "secao": "mercearia",
      "subsecao": "grãos e massas",
      "grupo": "cereais",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": "rende cerca de 2,8 vezes o peso cru",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "despensa": "meses"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço"
      ],
      "entra_em": [
        "arroz",
        "galinhada",
        "arroz-com-legumes"
      ],
      "escolha": "Bases do almoço e da janta",
      "recomendado": false,
      "substitutos": [
        "espaguete",
        "fuba"
      ],
      "composicao": [],
      "obs": ""
    },
    // Feijão carioca
    {
      "id": "feijao-carioca",
      "tipo": "ingrediente",
      "nome": "Feijão carioca",
      "secao": "mercearia",
      "subsecao": "grãos e massas",
      "grupo": "leguminosas",
      "papel": [
        "leguminosa"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": "rende cerca de 2,8 vezes o peso cru",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "despensa": "meses"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço"
      ],
      "entra_em": [
        "feijao"
      ],
      "escolha": "Bases do almoço e da janta",
      "recomendado": false,
      "substitutos": [
        "lentilha",
        "grao-de-bico"
      ],
      "composicao": [],
      "obs": ""
    },
    // Espaguete
    {
      "id": "espaguete",
      "tipo": "ingrediente",
      "nome": "Espaguete",
      "secao": "mercearia",
      "subsecao": "grãos e massas",
      "grupo": "massas",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 500,
        "texto": "500 g"
      },
      "aproveitavel": "80 g cru por porção",
      "guardar": "inteiro · original · despensa; cozido só na hora",
      "validade": {
        "despensa": "meses",
        "outro": "não congela cozido"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "macarrao-molho-tomate-carne",
        "macarrao-molho-branco-frango",
        "macarrao-bolonhesa"
      ],
      "escolha": "Bases do almoço e da janta",
      "recomendado": false,
      "substitutos": [
        "arroz-cru",
        "fuba"
      ],
      "composicao": [
        "contém glúten"
      ],
      "obs": ""
    },
    // Pré-purê de batata
    {
      "id": "pre-pure-batata",
      "tipo": "ingrediente",
      "nome": "Pré-purê de batata",
      "secao": "mercearia",
      "subsecao": "grãos e massas",
      "grupo": "farináceos",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": "30 g por porção de caldo verde",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "despensa": "meses"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "caldo-verde"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": "entra na compra quando o caldo verde entra no cardápio"
    },
    // Farinha de trigo
    {
      "id": "farinha-de-trigo",
      "tipo": "ingrediente",
      "nome": "Farinha de trigo",
      "secao": "mercearia",
      "subsecao": "farinhas",
      "grupo": "farináceos",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "despensa": "meses"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "torta-frango",
        "molho-branco",
        "bolo-cenoura",
        "empadao-frango",
        "frango-xadrez"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [
        "contém glúten"
      ],
      "obs": ""
    },
    // Fubá
    {
      "id": "fuba",
      "tipo": "ingrediente",
      "nome": "Fubá",
      "secao": "mercearia",
      "subsecao": "farinhas",
      "grupo": "farináceos",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": "75 g por 2 porções de polenta",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "despensa": "meses"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta",
        "café",
        "ceia"
      ],
      "entra_em": [
        "polenta",
        "polenta-mole",
        "mingau-fuba"
      ],
      "escolha": "Bases do almoço e da janta",
      "recomendado": false,
      "substitutos": [
        "arroz-cru",
        "espaguete"
      ],
      "composicao": [],
      "obs": "aparece na tela como \"Fubá (polenta)\""
    },
    // Tapioca (goma)
    {
      "id": "tapioca-goma",
      "tipo": "ingrediente",
      "nome": "Tapioca (goma)",
      "secao": "mercearia",
      "subsecao": "farinhas",
      "grupo": "farináceos",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": "50 g por tapioca · 30 g por crepioca",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "conforme o rótulo"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "entra_em": [
        "tapioca-mucarela",
        "tapioca-presunto-mucarela",
        "tapioca-ovo",
        "tapioca-manteiga",
        "crepioca-banana",
        "crepioca-maca"
      ],
      "escolha": "Bases do café e dos lanches",
      "recomendado": true,
      "substitutos": [
        "flocao-de-milho",
        "pao-de-forma"
      ],
      "composicao": [],
      "obs": ""
    },
    // Flocão de milho
    {
      "id": "flocao-de-milho",
      "tipo": "ingrediente",
      "nome": "Flocão de milho",
      "secao": "mercearia",
      "subsecao": "farinhas",
      "grupo": "farináceos",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 500,
        "texto": "500 g"
      },
      "aproveitavel": "70 g por cuscuz",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "despensa": "meses"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "entra_em": [
        "cuscuz-ovo",
        "cuscuz-ovo-mucarela"
      ],
      "escolha": "Bases do café e dos lanches",
      "recomendado": true,
      "substitutos": [
        "tapioca-goma",
        "pao-de-forma"
      ],
      "composicao": [],
      "obs": "aparece na tela como \"Flocão de milho (cuscuz)\""
    },
    // Farelo de aveia
    {
      "id": "farelo-de-aveia",
      "tipo": "ingrediente",
      "nome": "Farelo de aveia",
      "secao": "mercearia",
      "subsecao": "farinhas",
      "grupo": "farináceos",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa, bem fechado",
      "validade": {
        "despensa": "3 meses depois de aberto"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "ceia"
      ],
      "entra_em": [
        "vitamina-frutas",
        "mingau",
        "hamburguer",
        "bolo-banana",
        "hamburguer-atum",
        "panqueca-banana"
      ],
      "escolha": "Bases do café e dos lanches",
      "recomendado": true,
      "substitutos": [
        "aveia-em-flocos",
        "farinha-de-trigo"
      ],
      "composicao": [
        "contém glúten"
      ],
      "obs": "aparece na tela como \"Farelo de aveia (mingau e vitamina)\"; pode ter traços de glúten; sem ele, não há mingau de farelo, a vitamina sai sem farelo e o hambúrguer leva farinha de trigo"
    },
    // Aveia em flocos
    {
      "id": "aveia-em-flocos",
      "tipo": "ingrediente",
      "nome": "Aveia em flocos",
      "secao": "mercearia",
      "subsecao": "farinhas",
      "grupo": "cereais",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": "30 g por porção",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "despensa": "3 meses depois de aberta"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "ceia"
      ],
      "entra_em": [
        "mingau-aveia-flocos",
        "aveia-dormida"
      ],
      "escolha": "Bases do café e dos lanches",
      "recomendado": false,
      "substitutos": [
        "farelo-de-aveia"
      ],
      "composicao": [
        "contém glúten"
      ],
      "obs": ""
    },
    // Fermento químico
    {
      "id": "fermento-quimico",
      "tipo": "ingrediente",
      "nome": "Fermento químico",
      "secao": "mercearia",
      "subsecao": "farinhas",
      "grupo": "farináceos",
      "papel": [],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pote"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "conforme o rótulo"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "torta-frango",
        "bolo-banana",
        "bolo-cenoura",
        "empadao-frango"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": ""
    },
    // Café solúvel
    {
      "id": "cafe-soluvel",
      "tipo": "ingrediente",
      "nome": "Café solúvel",
      "secao": "mercearia",
      "subsecao": "matinais",
      "grupo": "bebidas",
      "papel": [
        "bebida"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pote"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa, bem fechado",
      "validade": {
        "outro": "conforme o rótulo"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde"
      ],
      "entra_em": [
        "cafe-com-leite"
      ],
      "escolha": "Bebidas",
      "recomendado": false,
      "substitutos": [
        "achocolatado"
      ],
      "composicao": [],
      "obs": "sem cafeína na ceia"
    },
    // Achocolatado
    {
      "id": "achocolatado",
      "tipo": "ingrediente",
      "nome": "Achocolatado",
      "secao": "mercearia",
      "subsecao": "matinais",
      "grupo": "açúcares",
      "papel": [
        "doce"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 lata"
      },
      "aproveitavel": "2 colheres por porção",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "conforme o rótulo"
      },
      "nivel": 1,
      "refeicoes": [
        "café"
      ],
      "entra_em": [
        "leite-achocolatado"
      ],
      "escolha": "Bebidas",
      "recomendado": false,
      "substitutos": [
        "cafe-soluvel"
      ],
      "composicao": [],
      "obs": ""
    },
    // Farinha láctea
    {
      "id": "farinha-lactea",
      "tipo": "ingrediente",
      "nome": "Farinha láctea",
      "secao": "mercearia",
      "subsecao": "matinais",
      "grupo": "farináceos",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 lata"
      },
      "aproveitavel": "2 colheres por porção",
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "conforme o rótulo"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "ceia"
      ],
      "entra_em": [
        "banana-farinha-lactea"
      ],
      "escolha": "Bases do café e dos lanches",
      "recomendado": false,
      "substitutos": [
        "torrada",
        "aveia-em-flocos"
      ],
      "composicao": [
        "contém leite",
        "contém glúten",
        "origem animal"
      ],
      "obs": ""
    },
    // Torrada
    {
      "id": "torrada",
      "tipo": "ingrediente",
      "nome": "Torrada",
      "secao": "mercearia",
      "subsecao": "matinais",
      "grupo": "pães",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": "2 a 3 por porção",
      "guardar": "inteiro · original · despensa, bem fechada",
      "validade": {
        "outro": "conforme o rótulo"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "janta",
        "ceia"
      ],
      "entra_em": [
        "torrada-manteiga",
        "torrada-mucarela",
        "salada-repolho-maca-atum"
      ],
      "escolha": "Bases do café e dos lanches",
      "recomendado": false,
      "substitutos": [
        "pao-de-forma",
        "tapioca-goma"
      ],
      "composicao": [
        "contém glúten"
      ],
      "obs": "reposta toda semana (Anexo A, seção A.5.3)"
    },
    // Pão de forma
    {
      "id": "pao-de-forma",
      "tipo": "ingrediente",
      "nome": "Pão de forma",
      "secao": "mercearia",
      "subsecao": "matinais",
      "grupo": "pães",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": "2 fatias por porção",
      "guardar": "inteiro · original · despensa; o que não for usado em 5 dias vai fatiado para o freezer",
      "validade": {
        "despensa": "5 a 7 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "pao-manteiga",
        "lanche-natural-presunto",
        "lanche-natural-repolho-maca"
      ],
      "escolha": "Bases do café e dos lanches",
      "recomendado": false,
      "substitutos": [
        "torrada",
        "pao-frances"
      ],
      "composicao": [
        "contém glúten"
      ],
      "obs": "reposto toda semana (Anexo A, seção A.5.3)"
    },
    // Açúcar
    {
      "id": "acucar",
      "tipo": "ingrediente",
      "nome": "Açúcar",
      "secao": "mercearia",
      "subsecao": "matinais",
      "grupo": "açúcares",
      "papel": [
        "doce"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "meses"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "cafe-com-leite",
        "suco-polpa",
        "suco-laranja",
        "suco-limao",
        "bolo-cenoura",
        "mingau-fuba"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "mel"
      ],
      "composicao": [],
      "obs": ""
    },
    // Mel
    {
      "id": "mel",
      "tipo": "ingrediente",
      "nome": "Mel",
      "secao": "mercearia",
      "subsecao": "matinais",
      "grupo": "açúcares",
      "papel": [
        "doce"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pote"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "meses"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "aveia-dormida"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "acucar"
      ],
      "composicao": [],
      "obs": ""
    },
    // Leite integral
    {
      "id": "leite-integral",
      "tipo": "ingrediente",
      "nome": "Leite integral",
      "secao": "mercearia",
      "subsecao": "leite e ovos",
      "grupo": "básicos refrigerados",
      "papel": [
        "proteína leve"
      ],
      "compra": {
        "unidade": "litro",
        "qtd": 7,
        "texto": "7 litros"
      },
      "aproveitavel": "150 a 250 ml por porção",
      "guardar": "fechado · original · despensa; aberto · geladeira",
      "validade": {
        "geladeira": "3 dias depois de aberto"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "entra_em": [
        "cafe-com-leite",
        "leite-achocolatado",
        "vitamina-frutas",
        "mingau",
        "molho-branco",
        "torta-frango",
        "mingau-aveia-flocos",
        "mingau-fuba",
        "aveia-dormida",
        "empadao-frango"
      ],
      "escolha": "Bebidas",
      "recomendado": false,
      "substitutos": [],
      "composicao": [
        "contém leite",
        "origem animal"
      ],
      "obs": "reposto toda semana (Anexo A, seção A.5.3)"
    },
    // Ovos
    {
      "id": "ovos",
      "tipo": "ingrediente",
      "nome": "Ovos",
      "secao": "mercearia",
      "subsecao": "leite e ovos",
      "grupo": "básicos refrigerados",
      "papel": [
        "proteína leve"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 30,
        "texto": "30 unidades"
      },
      "aproveitavel": "2 por porção",
      "guardar": "inteiro · original · geladeira, na prateleira",
      "validade": {
        "geladeira": "conforme o rótulo",
        "outro": "não congela cozido"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "janta",
        "ceia"
      ],
      "entra_em": [
        "ovos-cozidos",
        "ovos-mexidos",
        "omelete-mucarela",
        "tapioca-ovo",
        "cuscuz-ovo",
        "cuscuz-ovo-mucarela",
        "crepioca-banana",
        "crepioca-maca",
        "torta-frango",
        "hamburguer",
        "empadao-frango",
        "fritada",
        "bolo-banana",
        "bolo-cenoura",
        "hamburguer-atum",
        "panqueca-banana",
        "feijao-tropeiro",
        "pastel-forno"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "mucarela",
        "presunto"
      ],
      "composicao": [
        "contém ovo",
        "origem animal"
      ],
      "obs": "24 a 30 por semana; até 36 nas semanas com torta (Anexo A, seção A.5.3)"
    },
    // Óleo
    {
      "id": "oleo",
      "tipo": "ingrediente",
      "nome": "Óleo",
      "secao": "mercearia",
      "subsecao": "óleos e temperos",
      "grupo": "óleos",
      "papel": [
        "gordura"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 garrafa"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "meses"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "frango-grelhado",
        "torta-frango",
        "bolo-cenoura",
        "empadao-frango",
        "patinho-pressao",
        "musculo-pressao",
        "galinhada"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": ""
    },
    // Azeite
    {
      "id": "azeite",
      "tipo": "ingrediente",
      "nome": "Azeite",
      "secao": "mercearia",
      "subsecao": "óleos e temperos",
      "grupo": "óleos",
      "papel": [
        "gordura"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 garrafa"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa, longe da luz",
      "validade": {
        "outro": "meses"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "molho-tomate",
        "salada-alface-tomate",
        "salada-repolho-cenoura",
        "caldo-verde",
        "molho-tomate-legumes",
        "berinjela-assada",
        "cheiro-verde-cubo",
        "pate-ricota"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "oleo"
      ],
      "composicao": [],
      "obs": ""
    },
    // Sal
    {
      "id": "sal",
      "tipo": "ingrediente",
      "nome": "Sal",
      "secao": "mercearia",
      "subsecao": "óleos e temperos",
      "grupo": "temperos secos",
      "papel": [
        "tempero"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "indeterminado"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": ""
    },
    // Pimenta-do-reino
    {
      "id": "pimenta-do-reino",
      "tipo": "ingrediente",
      "nome": "Pimenta-do-reino",
      "secao": "mercearia",
      "subsecao": "óleos e temperos",
      "grupo": "temperos secos",
      "papel": [
        "tempero"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pote"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "meses"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "hamburguer",
        "caldo-verde"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": ""
    },
    // Orégano
    {
      "id": "oregano",
      "tipo": "ingrediente",
      "nome": "Orégano",
      "secao": "mercearia",
      "subsecao": "óleos e temperos",
      "grupo": "temperos secos",
      "papel": [
        "tempero"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "outro": "meses"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "molho-tomate",
        "molho-tomate-legumes"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [],
      "composicao": [],
      "obs": ""
    },
    // Molho de salada pronto
    {
      "id": "molho-salada-pronto",
      "tipo": "ingrediente",
      "nome": "Molho de salada pronto",
      "secao": "mercearia",
      "subsecao": "óleos e temperos",
      "grupo": "condimentos",
      "papel": [
        "condimento"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 2,
        "texto": "2 frascos de sabores diferentes"
      },
      "aproveitavel": "1 colher por salada",
      "guardar": "aberto · original · geladeira",
      "validade": {
        "outro": "conforme o rótulo"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "salada-alface-tomate",
        "salada-repolho-maca-atum"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "azeite"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ],
      "obs": "os de parmesão e de iogurte levam leite; conferir o rótulo"
    },
    // Maionese
    {
      "id": "maionese",
      "tipo": "ingrediente",
      "nome": "Maionese",
      "secao": "mercearia",
      "subsecao": "óleos e temperos",
      "grupo": "condimentos",
      "papel": [
        "condimento"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pote"
      },
      "aproveitavel": "1 colher por porção",
      "guardar": "aberta · original · geladeira",
      "validade": {
        "outro": "conforme o rótulo; não congela"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "lanche-natural-presunto",
        "lanche-natural-repolho-maca",
        "pate-atum",
        "pate-ovo",
        "salpicao"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "molho-salada-pronto"
      ],
      "composicao": [
        "contém ovo",
        "origem animal"
      ],
      "obs": ""
    },
    // Atum
    {
      "id": "atum",
      "tipo": "ingrediente",
      "nome": "Atum",
      "secao": "mercearia",
      "subsecao": "enlatados",
      "grupo": "carnes",
      "papel": [
        "proteína"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 2,
        "texto": "2 latas"
      },
      "aproveitavel": "1 lata por porção",
      "guardar": "fechado · original · despensa; aberto · pote da praça · geladeira",
      "validade": {
        "geladeira": "2 dias depois de aberto"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "salada-repolho-maca-atum",
        "pate-atum",
        "hamburguer-atum"
      ],
      "escolha": "Proteínas",
      "recomendado": false,
      "substitutos": [
        "frango-desfiado",
        "ovos"
      ],
      "composicao": [
        "origem animal",
        "peixe ou frutos do mar"
      ],
      "obs": ""
    },

    // ===== 1.3 Nível 1 · Açougue =====
    // Peito de frango
    {
      "id": "peito-de-frango",
      "tipo": "ingrediente",
      "nome": "Peito de frango",
      "secao": "açougue",
      "subsecao": "",
      "grupo": "carnes",
      "papel": [
        "proteína"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": "70% cozido",
      "guardar": "filés · curado e grelhado · pote de porção · freezer; tiras · desfiado · pote da praça ou recheio",
      "validade": {
        "geladeira": "cru 1 dia",
        "pote da praça": "desfiado 2 a 3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "frango-grelhado",
        "frango-desfiado",
        "torta-frango",
        "galinhada",
        "frango-xadrez",
        "empadao-frango"
      ],
      "escolha": "Proteínas",
      "recomendado": false,
      "substitutos": [
        "acem-moido",
        "atum"
      ],
      "composicao": [
        "origem animal",
        "frango"
      ],
      "obs": "peso de compra cru"
    },
    // Acém moído
    {
      "id": "acem-moido",
      "tipo": "ingrediente",
      "nome": "Acém moído",
      "secao": "açougue",
      "subsecao": "",
      "grupo": "carnes",
      "papel": [
        "proteína"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": "70% cozido",
      "guardar": "refogado · pote de porção · freezer; ou moldado · cru · saquinho · freezer",
      "validade": {
        "geladeira": "cru 1 dia",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "carne-moida",
        "hamburguer",
        "escondidinho"
      ],
      "escolha": "Proteínas",
      "recomendado": false,
      "substitutos": [
        "peito-de-frango",
        "atum"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha"
      ],
      "obs": "peso de compra cru"
    },

    // ===== 1.4 Nível 1 · Resfriados =====
    // Calabresa
    {
      "id": "calabresa",
      "tipo": "ingrediente",
      "nome": "Calabresa",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "carnes",
      "papel": [
        "proteína"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 250,
        "texto": "250 g"
      },
      "aproveitavel": "60% como crisps",
      "guardar": "fechada · original · geladeira, até a cozinha; crisps · frito · pote da praça · geladeira",
      "validade": {
        "outro": "crisps 5 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "crisps-calabresa",
        "caldo-verde",
        "sopa-lentilha-calabresa"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "presunto"
      ],
      "composicao": [
        "origem animal",
        "porco"
      ],
      "obs": "aparece na tela como \"Calabresa (crisps)\"; fica fora da ceia"
    },
    // Muçarela
    {
      "id": "mucarela",
      "tipo": "ingrediente",
      "nome": "Muçarela",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "laticínios",
      "papel": [
        "proteína leve"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 200,
        "texto": "200 g"
      },
      "aproveitavel": "30 g por porção",
      "guardar": "fatiada ou ralada · pote da praça · geladeira",
      "validade": {
        "pote da praça": "5 a 7 dias",
        "freezer": "ralada 90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "janta",
        "ceia"
      ],
      "entra_em": [
        "tapioca-mucarela",
        "tapioca-presunto-mucarela",
        "torrada-mucarela",
        "cuscuz-ovo-mucarela",
        "omelete-mucarela",
        "fricasse",
        "fritada",
        "arroz-de-forno",
        "baiao-de-dois"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "queijo-prato",
        "ricota"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ],
      "obs": "entra no rodízio de frios e queijos (manual, seção 0.12)"
    },
    // Queijo prato
    {
      "id": "queijo-prato",
      "tipo": "ingrediente",
      "nome": "Queijo prato",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "laticínios",
      "papel": [
        "proteína leve"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 200,
        "texto": "200 g"
      },
      "aproveitavel": "30 g por porção",
      "guardar": "fatiado · pote da praça · geladeira",
      "validade": {
        "pote da praça": "5 a 7 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "janta",
        "ceia"
      ],
      "entra_em": [
        "tapioca-mucarela",
        "torrada-mucarela",
        "cuscuz-ovo-mucarela",
        "omelete-mucarela"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "mucarela",
        "ricota"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ],
      "obs": "substituto da muçarela no rodízio; os pratos com muçarela aceitam queijo prato"
    },
    // Presunto
    {
      "id": "presunto",
      "tipo": "ingrediente",
      "nome": "Presunto",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "frios",
      "papel": [
        "proteína"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 200,
        "texto": "200 g"
      },
      "aproveitavel": "40 g por porção",
      "guardar": "fatiado · pote da praça · geladeira",
      "validade": {
        "pote da praça": "3 a 5 dias",
        "freezer": "fatiado 30 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "tapioca-presunto-mucarela",
        "lanche-natural-presunto",
        "lanche-natural-repolho-maca"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "peito-de-peru",
        "mucarela"
      ],
      "composicao": [
        "origem animal",
        "porco"
      ],
      "obs": "entra no rodízio de frios e queijos (manual, seção 0.12)"
    },
    // Peito de peru
    {
      "id": "peito-de-peru",
      "tipo": "ingrediente",
      "nome": "Peito de peru",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "frios",
      "papel": [
        "proteína"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 200,
        "texto": "200 g"
      },
      "aproveitavel": "40 g por porção",
      "guardar": "fatiado · pote da praça · geladeira",
      "validade": {
        "pote da praça": "3 a 5 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "tapioca-presunto-mucarela",
        "lanche-natural-presunto",
        "lanche-natural-repolho-maca"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "presunto",
        "mucarela"
      ],
      "composicao": [
        "origem animal"
      ],
      "obs": "substituto do presunto no rodízio; os pratos com presunto aceitam peito de peru"
    },
    // Parmesão ralado
    {
      "id": "parmesao-ralado",
      "tipo": "ingrediente",
      "nome": "Parmesão ralado",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "laticínios",
      "papel": [
        "proteína leve"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": "1 colher por prato",
      "guardar": "inteiro · pote da praça · geladeira",
      "validade": {
        "pote da praça": "30 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "escondidinho",
        "arroz-de-forno"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "mucarela"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ],
      "obs": "finalização de massas e assados"
    },
    // Manteiga
    {
      "id": "manteiga",
      "tipo": "ingrediente",
      "nome": "Manteiga",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "básicos refrigerados",
      "papel": [
        "gordura"
      ],
      "compra": {
        "unidade": "g",
        "qtd": 200,
        "texto": "200 g"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · geladeira",
      "validade": {
        "geladeira": "conforme o rótulo",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã"
      ],
      "entra_em": [
        "molho-branco",
        "pao-manteiga",
        "torrada-manteiga",
        "tapioca-manteiga"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "requeijao"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ],
      "obs": ""
    },
    // Requeijão
    {
      "id": "requeijao",
      "tipo": "ingrediente",
      "nome": "Requeijão",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "laticínios",
      "papel": [
        "gordura"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pote"
      },
      "aproveitavel": null,
      "guardar": "inteiro · original · geladeira",
      "validade": {
        "geladeira": "7 dias depois de aberto",
        "outro": "não congela"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "pasta-frango"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "maionese"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ],
      "obs": ""
    },
    // Polpa de fruta congelada
    {
      "id": "polpa-fruta",
      "tipo": "ingrediente",
      "nome": "Polpa de fruta congelada",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "frutas",
      "papel": [
        "fruta"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 4,
        "texto": "4 pacotes de 100 g"
      },
      "aproveitavel": "1 por suco",
      "guardar": "inteiro · original · freezer",
      "validade": {
        "freezer": "conforme o rótulo"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço"
      ],
      "entra_em": [
        "suco-polpa"
      ],
      "escolha": "Frutas",
      "recomendado": false,
      "substitutos": [
        "laranja-pera",
        "limao-tahiti"
      ],
      "composicao": [],
      "obs": "no nível 2, o kit de suco ocupa o lugar dela"
    },

    // ===== 1.5 Itens novos do Anexo A 1.12 (fichas da versão 1.0) =====
    // Pão francês
    {
      "id": "pao-frances",
      "tipo": "ingrediente",
      "nome": "Pão francês",
      "secao": "mercearia",
      "subsecao": "matinais",
      "grupo": "pães",
      "papel": [
        "carboidrato"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 6,
        "texto": "6 unidades"
      },
      "aproveitavel": 1,
      "guardar": "inteiro · despensa no dia; o restante inteiro · saquinho · freezer",
      "validade": {
        "despensa": "1 dia",
        "freezer": "30 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "entra_em": [],
      "escolha": "Bases do café e dos lanches",
      "recomendado": false,
      "substitutos": [
        "pao-de-forma",
        "torrada"
      ],
      "composicao": [
        "contém glúten"
      ],
      "obs": "esquentar no forno ou na airfryer, a 180 °C, por 5 a 8 minutos; ainda sem prato na hora ligado"
    },
    // Açafrão-da-terra (cúrcuma)
    {
      "id": "acafrao-da-terra",
      "tipo": "ingrediente",
      "nome": "Açafrão-da-terra (cúrcuma)",
      "secao": "mercearia",
      "subsecao": "óleos e temperos",
      "grupo": "temperos secos",
      "papel": [
        "tempero"
      ],
      "compra": {
        "unidade": "pacote",
        "qtd": 1,
        "texto": "1 pacote"
      },
      "aproveitavel": 1,
      "guardar": "inteiro · original · despensa",
      "validade": {
        "despensa": "meses"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "galinhada"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "curry",
        "pimenta-do-reino"
      ],
      "composicao": [],
      "obs": "1 colher de chá por receita"
    },
    // Músculo em cubos
    {
      "id": "musculo-cubos",
      "tipo": "ingrediente",
      "nome": "Músculo em cubos",
      "secao": "açougue",
      "subsecao": "",
      "grupo": "carnes",
      "papel": [
        "proteína"
      ],
      "compra": {
        "unidade": "kg",
        "qtd": 1,
        "texto": "1 kg"
      },
      "aproveitavel": "65% cozido",
      "guardar": "cozido · pote de porção · freezer",
      "validade": {
        "geladeira": "cru 1 dia",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "musculo-pressao"
      ],
      "escolha": "Proteínas",
      "recomendado": false,
      "substitutos": [
        "patinho-cubos",
        "acem-pedaco"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha"
      ],
      "obs": "na pressão, com o caldo"
    },
    // Ricota
    {
      "id": "ricota",
      "tipo": "ingrediente",
      "nome": "Ricota",
      "secao": "resfriados",
      "subsecao": "",
      "grupo": "laticínios",
      "papel": [
        "proteína leve"
      ],
      "compra": {
        "unidade": "unidade",
        "qtd": 1,
        "texto": "1 pote de 250 g"
      },
      "aproveitavel": 1,
      "guardar": "inteiro · original · geladeira; ou patê · pote da praça · geladeira",
      "validade": {
        "geladeira": "3 a 5 dias depois de aberta",
        "outro": "não congela"
      },
      "nivel": 2,
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "entra_em": [
        "pate-ricota"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "queijo-minas-frescal",
        "mucarela"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ],
      "obs": ""
    },
  ],

  // ---------------------------------------------------------------
  // PREPAROS: feitos na cozinha ou no armazenamento e guardados
  // ---------------------------------------------------------------
  preparos: [

    // ===== 2.1 Nível 1 · Porções simples, molhos e bases de preparo =====
    // Arroz
    {
      "id": "arroz",
      "tipo": "preparo",
      "nome": "Arroz",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "carboidrato"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "170 g",
      "receita": [
        {
          "id": "arroz-cru",
          "qtd": 300,
          "unidade": "g",
          "texto": "300 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "cubo",
          "texto": "1 cubo"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 3,
          "unidade": "xícaras (quente)",
          "texto": "3 xícaras (quente)"
        }
      ],
      "rende": "5 potes",
      "cozinha": "bloco 2 · 25 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "arroz-feijao-frango",
        "arroz-feijao-hamburguer",
        "arroz-feijao-carne-moida",
        "arroz-frango-molho-branco",
        "arroz-de-forno",
        "baiao-de-dois"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "polenta",
        "arroz-com-legumes"
      ],
      "composicao": [],
      "obs": "espalhar numa assadeira para esfriar mais rápido"
    },
    // Feijão
    {
      "id": "feijao",
      "tipo": "preparo",
      "nome": "Feijão",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "leguminosa"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g, com o caldo",
      "receita": [
        {
          "id": "feijao-carioca",
          "qtd": 250,
          "unidade": "g",
          "texto": "250 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 2,
          "unidade": "cm acima dos grãos",
          "texto": "até 2 cm acima dos grãos"
        }
      ],
      "rende": "5 potes",
      "cozinha": "bloco 1 (demolho) e bloco 3 · 40 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "6 meses"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço"
      ],
      "entra_em": [
        "arroz-feijao-frango",
        "arroz-feijao-hamburguer",
        "arroz-feijao-carne-moida",
        "baiao-de-dois",
        "feijao-tropeiro"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "lentilha-cozida",
        "grao-de-bico-cozido"
      ],
      "composicao": [],
      "obs": "cozido na panela da calabresa, com o óleo dela, quando houver crisps na semana"
    },
    // Frango grelhado
    {
      "id": "frango-grelhado",
      "tipo": "preparo",
      "nome": "Frango grelhado",
      "modulo": "porção simples",
      "processo": "grelhado",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "105 g (150 g cru)",
      "receita": [
        {
          "id": "peito-de-frango",
          "qtd": 750,
          "unidade": "g",
          "texto": "750 g"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "(cura úmida)",
          "texto": "(cura úmida)"
        },
        {
          "id": "oleo",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        }
      ],
      "rende": "5 potes",
      "cozinha": "bloco 1 (cura) e bloco 3 · 30 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "arroz-feijao-frango",
        "macarrao-molho-branco-frango",
        "frango-molho-branco"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "carne-moida",
        "hamburguer"
      ],
      "composicao": [
        "origem animal",
        "frango"
      ],
      "obs": "grelhar sem sal (a cura já salgou); a frigideira serve para o molho branco"
    },
    // Carne moída
    {
      "id": "carne-moida",
      "tipo": "preparo",
      "nome": "Carne moída",
      "modulo": "porção simples",
      "processo": "refogado",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "115 g",
      "receita": [
        {
          "id": "acem-moido",
          "qtd": 500,
          "unidade": "g",
          "texto": "500 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "3 potes",
      "cozinha": "bloco 2 · 20 min",
      "validade": {
        "geladeira": "2 a 3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "arroz-feijao-carne-moida",
        "macarrao-molho-tomate-carne",
        "bolonhesa",
        "pastel-forno"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "frango-grelhado",
        "hamburguer"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha"
      ],
      "obs": "a panela serve para o molho de tomate"
    },
    // Polenta
    {
      "id": "polenta",
      "tipo": "preparo",
      "nome": "Polenta",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "carboidrato"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "275 g",
      "receita": [
        {
          "id": "fuba",
          "qtd": 75,
          "unidade": "g",
          "texto": "75 g"
        },
        {
          "id": "agua",
          "qtd": 2,
          "unidade": "xícaras",
          "texto": "2 xícaras"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "2 potes",
      "cozinha": "bloco 2 · 20 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "polenta-hamburguer",
        "omelete-polenta",
        "polenta-frita"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "arroz",
        "pure"
      ],
      "composicao": [],
      "obs": "no almoço com polenta, o feijão é dispensado (manual, seção 5.1)"
    },
    // Cenoura
    {
      "id": "cenoura-branqueada",
      "tipo": "preparo",
      "nome": "Cenoura",
      "modulo": "porção simples",
      "processo": "branqueado",
      "preenche": [
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "125 g",
      "receita": [
        {
          "id": "cenoura",
          "qtd": 500,
          "unidade": "g",
          "texto": "500 g"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "4 potes",
      "cozinha": "armazenamento · 15 min",
      "validade": {
        "geladeira": "5 a 7 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "arroz-com-legumes",
        "fritada"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "salada-alface-tomate",
        "salada-repolho-cenoura"
      ],
      "composicao": [],
      "obs": "em barras; 3 minutos na água fervendo e água com gelo; vai do freezer direto para a panela"
    },
    // Cenoura ralada
    {
      "id": "cenoura-ralada",
      "tipo": "preparo",
      "nome": "Cenoura ralada",
      "modulo": "porção simples",
      "processo": "ralado",
      "preenche": [
        "vegetal"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "40 g",
      "receita": [
        {
          "id": "cenoura",
          "qtd": 340,
          "unidade": "g",
          "texto": "340 g"
        }
      ],
      "rende": "1 pote da praça",
      "cozinha": "armazenamento · 10 min",
      "validade": {
        "geladeira": "3 a 4 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "lanche-natural-presunto",
        "salada-repolho-cenoura",
        "salada-repolho-maca-atum",
        "torta-frango",
        "pate-atum",
        "salpicao",
        "empadao-frango"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "tomate-salada",
        "repolho"
      ],
      "composicao": [],
      "obs": "validade curta: entra nos primeiros dias do cardápio"
    },
    // Mamão picado
    {
      "id": "mamao-picado",
      "tipo": "preparo",
      "nome": "Mamão picado",
      "modulo": "porção simples",
      "processo": "picado",
      "preenche": [
        "fruta"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "100 g",
      "receita": [
        {
          "id": "mamao-formosa",
          "qtd": 440,
          "unidade": "g aproveitáveis",
          "texto": "cerca de 440 g aproveitáveis"
        }
      ],
      "rende": "1 pote da praça",
      "cozinha": "armazenamento · 10 min",
      "validade": {
        "geladeira": "3 a 4 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "café"
      ],
      "entra_em": [
        "aveia-dormida"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "banana-nanica",
        "maca-gala"
      ],
      "composicao": [],
      "obs": "validade curta: entra nos primeiros dias do cardápio; a fruta do café vem dele, da banana ou da maçã"
    },
    // Ovos cozidos
    {
      "id": "ovos-cozidos",
      "tipo": "preparo",
      "nome": "Ovos cozidos",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "proteína leve"
      ],
      "local": "geladeira",
      "embalagem": "original",
      "porcao": "2 ovos",
      "receita": [
        {
          "id": "ovos",
          "qtd": 2,
          "unidade": "por porção",
          "texto": "2 por porção"
        },
        {
          "id": "agua",
          "qtd": null,
          "unidade": "",
          "texto": ""
        }
      ],
      "rende": "1 porção a cada 2 ovos",
      "cozinha": "bloco 2 · 15 min",
      "validade": {
        "geladeira": "7 dias, com casca",
        "outro": "não congela"
      },
      "nivel": 1,
      "refeicoes": [
        "café",
        "ceia"
      ],
      "entra_em": [
        "prato-ovos-cozidos",
        "mingau",
        "pate-ovo"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "ovos-mexidos"
      ],
      "composicao": [
        "origem animal",
        "contém ovo"
      ],
      "obs": "9 minutos depois de ferver"
    },
    // Molho de tomate
    {
      "id": "molho-tomate",
      "tipo": "preparo",
      "nome": "Molho de tomate",
      "modulo": "molho pronto",
      "processo": "cozido",
      "preenche": [],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "200 g",
      "receita": [
        {
          "id": "tomate-italiano",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        },
        {
          "id": "azeite",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "oregano",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "3 potes",
      "cozinha": "bloco 2 · 45 min (na panela da carne moída)",
      "validade": {
        "geladeira": "3 a 5 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "macarrao-molho-tomate-carne",
        "bolonhesa",
        "escondidinho",
        "arroz-de-forno",
        "strogonoff-carne"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "molho-tomate-legumes",
        "molho-branco"
      ],
      "composicao": [],
      "obs": "meio pote por porção de macarrão"
    },
    // Molho branco
    {
      "id": "molho-branco",
      "tipo": "preparo",
      "nome": "Molho branco",
      "modulo": "molho pronto",
      "processo": "cozido",
      "preenche": [],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "265 g",
      "receita": [
        {
          "id": "leite-integral",
          "qtd": 750,
          "unidade": "ml",
          "texto": "750 ml"
        },
        {
          "id": "manteiga",
          "qtd": 38,
          "unidade": "g",
          "texto": "38 g"
        },
        {
          "id": "farinha-de-trigo",
          "qtd": 38,
          "unidade": "g",
          "texto": "38 g"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "3 potes",
      "cozinha": "bloco 3 · 15 min (na frigideira do frango)",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "frango-molho-branco",
        "macarrao-molho-branco-frango",
        "fricasse",
        "strogonoff-carne"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "molho-tomate",
        "molho-curry"
      ],
      "composicao": [
        "contém leite",
        "contém glúten",
        "origem animal"
      ],
      "obs": "ao esquentar, juntar um pouco de leite"
    },
    // Pasta de alho e cebola
    {
      "id": "pasta-alho-cebola",
      "tipo": "preparo",
      "nome": "Pasta de alho e cebola",
      "modulo": "pasta de tempero",
      "processo": "triturado",
      "preenche": [],
      "local": "freezer",
      "embalagem": "cubo",
      "porcao": "1 cubo",
      "receita": [
        {
          "id": "cebola",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "alho",
          "qtd": 1,
          "unidade": "cabeça",
          "texto": "1 cabeça"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "3 forminhas (cerca de 45 cubos)",
      "cozinha": "armazenamento · 20 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "cheiro-verde-cubo"
      ],
      "composicao": [],
      "obs": "entra sempre que algum prato da semana usar; 1 forminha a cada 15 cubos usados"
    },
    // Crisps de calabresa
    {
      "id": "crisps-calabresa",
      "tipo": "preparo",
      "nome": "Crisps de calabresa",
      "modulo": "finalização",
      "processo": "frito",
      "preenche": [
        "proteína"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "1 colher de sopa",
      "receita": [
        {
          "id": "calabresa",
          "qtd": 250,
          "unidade": "g",
          "texto": "250 g"
        }
      ],
      "rende": "cerca de 150 g",
      "cozinha": "bloco 3 · 15 min (na panela do feijão)",
      "validade": {
        "geladeira": "5 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "salada-repolho-cenoura",
        "baiao-de-dois",
        "feijao-tropeiro"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "parmesao-ralado"
      ],
      "composicao": [
        "origem animal",
        "porco"
      ],
      "obs": "fica fora da ceia"
    },
    // Vitamina de frutas
    {
      "id": "kit-vitamina-base",
      "tipo": "preparo",
      "nome": "Vitamina de frutas",
      "modulo": "kit vitamina",
      "processo": "picado",
      "preenche": [
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "180 g",
      "receita": [
        {
          "id": "banana-nanica",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "mamao-formosa",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "maca-gala",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "cenoura",
          "qtd": 20,
          "unidade": "g",
          "texto": "20 g"
        }
      ],
      "rende": "1 kit",
      "cozinha": "armazenamento · 5 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "vitamina-frutas"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "kit-vitamina-banana-abacate",
        "kit-vitamina-banana-uva"
      ],
      "composicao": [],
      "obs": "7 kits por semana; com só 1 ou 2 das frutas escolhidas, a banana completa o peso"
    },

    // ===== 2.2 Nível 1 · Assado de forma, moldado e panelada =====
    // Torta de frango
    {
      "id": "torta-frango",
      "tipo": "preparo",
      "nome": "Torta de frango",
      "modulo": "assado de forma",
      "processo": "assado",
      "preenche": [
        "carboidrato",
        "proteína",
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g",
      "receita": [
        {
          "id": "ovos",
          "qtd": 3,
          "unidade": "",
          "texto": "3"
        },
        {
          "id": "leite-integral",
          "qtd": 1,
          "unidade": "xícara",
          "texto": "1 xícara"
        },
        {
          "id": "oleo",
          "qtd": 0.5,
          "unidade": "xícara",
          "texto": "½ xícara"
        },
        {
          "id": "farinha-de-trigo",
          "qtd": 2,
          "unidade": "xícaras",
          "texto": "2 xícaras"
        },
        {
          "id": "fermento-quimico",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "peito-de-frango",
          "qtd": 250,
          "unidade": "g",
          "texto": "250 g"
        },
        {
          "id": "cenoura-ralada",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "tomate-salada",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        }
      ],
      "rende": "7 pedaços",
      "cozinha": "bloco 2 · 55 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "lanche da tarde"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": true,
      "substitutos": [
        "empadao-frango",
        "fricasse"
      ],
      "composicao": [
        "contém ovo",
        "contém leite",
        "contém glúten",
        "origem animal",
        "frango"
      ],
      "obs": "fazer só quando restarem 3 pedaços ou menos; até 3 vezes por semana no lanche da tarde; o resto fica no freezer"
    },
    // Hambúrguer
    {
      "id": "hamburguer",
      "tipo": "preparo",
      "nome": "Hambúrguer",
      "modulo": "moldado",
      "processo": "cru",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "165 g",
      "receita": [
        {
          "id": "acem-moido",
          "qtd": 500,
          "unidade": "g",
          "texto": "500 g"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "farelo-de-aveia",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "cubo",
          "texto": "1 cubo"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "pimenta-do-reino",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "3 discos",
      "cozinha": "bloco 2 · 15 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "arroz-feijao-hamburguer",
        "polenta-hamburguer"
      ],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "hamburguer-atum",
        "frango-grelhado"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha",
        "contém ovo",
        "contém glúten"
      ],
      "obs": "cada disco em plástico-filme, no seu saquinho; do freezer direto para a frigideira, cerca de 5 minutos de cada lado; sem farelo de aveia, usar 2 colheres de sopa de farinha de trigo (Anexo A, seção A.4.1)"
    },
    // Frango ao molho branco
    {
      "id": "frango-molho-branco",
      "tipo": "preparo",
      "nome": "Frango ao molho branco",
      "modulo": "panelada",
      "processo": "cozido",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "200 g",
      "receita": [
        {
          "id": "frango-grelhado",
          "qtd": 2,
          "unidade": "potes",
          "texto": "2 potes"
        },
        {
          "id": "molho-branco",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "rende": "2 potes",
      "cozinha": "bloco 3 · 10 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "arroz-frango-molho-branco"
      ],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "strogonoff-frango",
        "bolonhesa"
      ],
      "composicao": [
        "origem animal",
        "frango",
        "contém leite",
        "contém glúten"
      ],
      "obs": "o frango em cubos cozinha junto com o molho, na mesma panela"
    },

    // ===== 2.3 Itens novos do Anexo A 1.12 · Kits =====
    // Vitamina de banana e abacate
    {
      "id": "kit-vitamina-banana-abacate",
      "tipo": "preparo",
      "nome": "Vitamina de banana e abacate",
      "modulo": "kit vitamina",
      "processo": "picado",
      "preenche": [
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "180 g",
      "receita": [
        {
          "id": "banana-nanica",
          "qtd": 90,
          "unidade": "g",
          "texto": "90 g"
        },
        {
          "id": "abacate",
          "qtd": 70,
          "unidade": "g",
          "texto": "70 g"
        },
        {
          "id": "cenoura",
          "qtd": 20,
          "unidade": "g",
          "texto": "20 g"
        }
      ],
      "rende": "1 kit",
      "cozinha": "armazenamento · 5 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "vitamina-frutas"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "kit-vitamina-base",
        "kit-vitamina-banana-manga"
      ],
      "composicao": [],
      "obs": "entra no rodízio de variações do kit de vitamina"
    },
    // Vitamina de banana e uva
    {
      "id": "kit-vitamina-banana-uva",
      "tipo": "preparo",
      "nome": "Vitamina de banana e uva",
      "modulo": "kit vitamina",
      "processo": "picado",
      "preenche": [
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "180 g",
      "receita": [
        {
          "id": "banana-nanica",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "uva",
          "qtd": 60,
          "unidade": "g",
          "texto": "60 g"
        },
        {
          "id": "beterraba",
          "qtd": 20,
          "unidade": "g",
          "texto": "20 g"
        }
      ],
      "rende": "1 kit",
      "cozinha": "armazenamento · 5 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "vitamina-frutas"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "kit-vitamina-base",
        "kit-vitamina-banana-morango"
      ],
      "composicao": [],
      "obs": ""
    },
    // Suco de goiaba e laranja
    {
      "id": "kit-suco-goiaba-laranja",
      "tipo": "preparo",
      "nome": "Suco de goiaba e laranja",
      "modulo": "kit suco",
      "processo": "picado",
      "preenche": [
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "180 g",
      "receita": [
        {
          "id": "goiaba",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "laranja-pera",
          "qtd": 80,
          "unidade": "g",
          "texto": "80 g"
        }
      ],
      "rende": "1 kit",
      "cozinha": "armazenamento · 5 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "suco"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "kit-suco-laranja-cenoura",
        "kit-suco-manga-laranja"
      ],
      "composicao": [],
      "obs": "laranja em gomos"
    },
    // Suco de abacaxi e hortelã
    {
      "id": "kit-suco-abacaxi-hortela",
      "tipo": "preparo",
      "nome": "Suco de abacaxi e hortelã",
      "modulo": "kit suco",
      "processo": "picado",
      "preenche": [
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "180 g",
      "receita": [
        {
          "id": "abacaxi-perola",
          "qtd": 170,
          "unidade": "g",
          "texto": "170 g"
        },
        {
          "id": "hortela",
          "qtd": 10,
          "unidade": "g",
          "texto": "10 g"
        }
      ],
      "rende": "1 kit",
      "cozinha": "armazenamento · 5 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "suco"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "kit-suco-abacaxi-couve",
        "kit-suco-maca-cenoura-beterraba"
      ],
      "composicao": [],
      "obs": ""
    },
    // Suco de maracujá e manga
    {
      "id": "kit-suco-maracuja-manga",
      "tipo": "preparo",
      "nome": "Suco de maracujá e manga",
      "modulo": "kit suco",
      "processo": "picado",
      "preenche": [
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "180 g",
      "receita": [
        {
          "id": "polpa-maracuja",
          "qtd": 2,
          "unidade": "cubos (40 g)",
          "texto": "2 cubos (40 g)"
        },
        {
          "id": "manga-tommy",
          "qtd": 140,
          "unidade": "g",
          "texto": "140 g"
        }
      ],
      "rende": "1 kit",
      "cozinha": "armazenamento · 5 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "suco"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "kit-suco-manga-laranja",
        "kit-suco-goiaba-laranja"
      ],
      "composicao": [],
      "obs": ""
    },

    // ===== 2.4 Itens novos do Anexo A 1.12 · Porções simples =====
    // Patinho em cubos
    {
      "id": "patinho-pressao",
      "tipo": "preparo",
      "nome": "Patinho em cubos",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "105 g",
      "receita": [
        {
          "id": "patinho-cubos",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        },
        {
          "id": "oleo",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 500,
          "unidade": "ml",
          "texto": "500 ml"
        }
      ],
      "rende": "6 potes",
      "cozinha": "bloco 2 · 40 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "strogonoff-carne",
        "escondidinho"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "musculo-pressao",
        "carne-de-panela"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha"
      ],
      "obs": "com um pouco do caldo"
    },
    // Músculo em cubos
    {
      "id": "musculo-pressao",
      "tipo": "preparo",
      "nome": "Músculo em cubos",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "105 g",
      "receita": [
        {
          "id": "musculo-cubos",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        },
        {
          "id": "oleo",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 500,
          "unidade": "ml",
          "texto": "500 ml"
        }
      ],
      "rende": "6 potes",
      "cozinha": "bloco 2 · 50 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "sopa-legumes-frango"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "patinho-pressao",
        "carne-de-panela"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha"
      ],
      "obs": "35 a 40 minutos de pressão"
    },
    // Frango desfiado
    {
      "id": "frango-desfiado",
      "tipo": "preparo",
      "nome": "Frango desfiado",
      "modulo": "porção simples",
      "processo": "desfiado",
      "preenche": [
        "proteína"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "40 g (recheio)",
      "receita": [
        {
          "id": "peito-de-frango",
          "qtd": 500,
          "unidade": "g",
          "texto": "500 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "cubo",
          "texto": "1 cubo"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "350 g",
      "cozinha": "bloco 2 · 30 min",
      "validade": {
        "geladeira": "2 a 3 dias",
        "freezer": "90 dias (só para assados e sopas)"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "pasta-frango",
        "salpicao",
        "fricasse",
        "arroz-de-forno",
        "sopa-legumes-frango",
        "wrap",
        "tapioca"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "atum",
        "presunto"
      ],
      "composicao": [
        "origem animal",
        "frango"
      ],
      "obs": "do freezer, não é recheio de recheado; validade curta: entra nos primeiros dias do cardápio"
    },
    // Galinhada
    {
      "id": "galinhada",
      "tipo": "preparo",
      "nome": "Galinhada",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "280 g",
      "receita": [
        {
          "id": "peito-de-frango",
          "qtd": 750,
          "unidade": "g",
          "texto": "750 g"
        },
        {
          "id": "arroz-cru",
          "qtd": 300,
          "unidade": "g",
          "texto": "300 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        },
        {
          "id": "acafrao-da-terra",
          "qtd": 1,
          "unidade": "colher de chá",
          "texto": "1 colher de chá"
        },
        {
          "id": "oleo",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 3,
          "unidade": "xícaras",
          "texto": "3 xícaras"
        }
      ],
      "rende": "5 potes",
      "cozinha": "bloco 2 · 35 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "arroz-com-legumes",
        "arroz"
      ],
      "composicao": [
        "origem animal",
        "frango"
      ],
      "obs": "pode usar sobrecoxa no lugar do peito; preenche o almoço sem feijão"
    },
    // Arroz com legumes
    {
      "id": "arroz-com-legumes",
      "tipo": "preparo",
      "nome": "Arroz com legumes",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "carboidrato",
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "195 g",
      "receita": [
        {
          "id": "arroz-cru",
          "qtd": 300,
          "unidade": "g",
          "texto": "300 g"
        },
        {
          "id": "cenoura-branqueada",
          "qtd": 125,
          "unidade": "g",
          "texto": "125 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "cubo",
          "texto": "1 cubo"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 3,
          "unidade": "xícaras",
          "texto": "3 xícaras"
        }
      ],
      "rende": "5 potes",
      "cozinha": "bloco 2 · 25 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "arroz",
        "galinhada"
      ],
      "composicao": [],
      "obs": "com cenoura, nível 1; com brócolis, couve ou milho e ervilha, nível 2"
    },
    // Molho de tomate com legumes
    {
      "id": "molho-tomate-legumes",
      "tipo": "preparo",
      "nome": "Molho de tomate com legumes",
      "modulo": "molho pronto",
      "processo": "cozido",
      "preenche": [],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "200 g",
      "receita": [
        {
          "id": "tomate-italiano",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "cenoura",
          "qtd": 150,
          "unidade": "g",
          "texto": "150 g"
        },
        {
          "id": "abobrinha",
          "qtd": 150,
          "unidade": "g",
          "texto": "150 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        },
        {
          "id": "azeite",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "oregano",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "4 a 5 potes",
      "cozinha": "bloco 2 · 45 min",
      "validade": {
        "geladeira": "3 a 5 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "macarrao-molho-tomate",
        "panelada"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "molho-tomate",
        "molho-branco"
      ],
      "composicao": [],
      "obs": "na panela da carne moída"
    },
    // Lentilha
    {
      "id": "lentilha-cozida",
      "tipo": "preparo",
      "nome": "Lentilha",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "leguminosa"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g",
      "receita": [
        {
          "id": "lentilha",
          "qtd": 250,
          "unidade": "g",
          "texto": "250 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "cubo",
          "texto": "1 cubo"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 3,
          "unidade": "xícaras",
          "texto": "3 xícaras"
        }
      ],
      "rende": "4 potes",
      "cozinha": "bloco 2 · 25 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço"
      ],
      "entra_em": [
        "sopa-lentilha-calabresa"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "feijao",
        "grao-de-bico-cozido"
      ],
      "composicao": [],
      "obs": "sem demolho"
    },
    // Grão-de-bico
    {
      "id": "grao-de-bico-cozido",
      "tipo": "preparo",
      "nome": "Grão-de-bico",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "leguminosa"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g",
      "receita": [
        {
          "id": "grao-de-bico",
          "qtd": 250,
          "unidade": "g",
          "texto": "250 g"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 2,
          "unidade": "dedos acima",
          "texto": "até 2 dedos acima"
        }
      ],
      "rende": "4 potes",
      "cozinha": "bloco 1 (demolho) e bloco 3 · 30 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "salada"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "feijao",
        "lentilha-cozida"
      ],
      "composicao": [],
      "obs": "para salada, guardar sem o caldo"
    },
    // Batata-doce em rodelas
    {
      "id": "batata-doce-rodelas",
      "tipo": "preparo",
      "nome": "Batata-doce em rodelas",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "carboidrato"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "170 g",
      "receita": [
        {
          "id": "batata-doce",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "5 potes",
      "cozinha": "bloco 2 · 20 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "mandioca-cozida",
        "arroz"
      ],
      "composicao": [],
      "obs": ""
    },
    // Mandioca cozida
    {
      "id": "mandioca-cozida",
      "tipo": "preparo",
      "nome": "Mandioca cozida",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "carboidrato"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "170 g",
      "receita": [
        {
          "id": "mandioca",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "4 potes",
      "cozinha": "bloco 2 · 25 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "escondidinho"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "batata-doce-rodelas",
        "pure"
      ],
      "composicao": [],
      "obs": "tirar o fio do meio"
    },
    // Milho verde
    {
      "id": "milho-debulhado",
      "tipo": "preparo",
      "nome": "Milho verde",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "100 g",
      "receita": [
        {
          "id": "milho-verde",
          "qtd": 1,
          "unidade": "espiga",
          "texto": "1 espiga"
        }
      ],
      "rende": "100 g por espiga",
      "cozinha": "bloco 2 · 30 min",
      "validade": {
        "geladeira": "2 a 3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "fricasse",
        "arroz-de-forno",
        "salpicao",
        "arroz-com-legumes"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "ervilha-congelada",
        "milho-lata"
      ],
      "composicao": [],
      "obs": ""
    },
    // Berinjela assada
    {
      "id": "berinjela-assada",
      "tipo": "preparo",
      "nome": "Berinjela assada",
      "modulo": "porção simples",
      "processo": "assado",
      "preenche": [
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "100 g",
      "receita": [
        {
          "id": "berinjela",
          "qtd": 1,
          "unidade": "unidade",
          "texto": "1 unidade"
        },
        {
          "id": "azeite",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "3 potes",
      "cozinha": "bloco 2 · 25 min",
      "validade": {
        "geladeira": "5 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "abobrinha-branqueada",
        "cenoura-branqueada"
      ],
      "composicao": [],
      "obs": ""
    },
    // Bife fino
    {
      "id": "bife-fino-cru",
      "tipo": "preparo",
      "nome": "Bife fino",
      "modulo": "porção simples",
      "processo": "cru",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "150 g cru",
      "receita": [
        {
          "id": "bife-fino",
          "qtd": 150,
          "unidade": "g",
          "texto": "150 g"
        }
      ],
      "rende": "1 porção",
      "cozinha": "bloco 2 · 5 min (porcionar)",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "hamburguer",
        "file-tilapia-cru"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha"
      ],
      "obs": "sem tempero; descongelar na geladeira, grelhar de 1 a 2 minutos de cada lado e salgar na hora"
    },
    // Filé de tilápia
    {
      "id": "file-tilapia-cru",
      "tipo": "preparo",
      "nome": "Filé de tilápia",
      "modulo": "porção simples",
      "processo": "cru",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "150 g cru",
      "receita": [
        {
          "id": "file-tilapia",
          "qtd": 150,
          "unidade": "g",
          "texto": "150 g"
        }
      ],
      "rende": "1 porção",
      "cozinha": "bloco 2 · 5 min (porcionar)",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "peixe-posta-assado",
        "bife-fino-cru"
      ],
      "composicao": [
        "origem animal",
        "peixe ou frutos do mar"
      ],
      "obs": "sem tempero; descongelar, secar e grelhar de 3 a 4 minutos de cada lado"
    },
    // Linguiça toscana
    {
      "id": "linguica-toscana-crua",
      "tipo": "preparo",
      "nome": "Linguiça toscana",
      "modulo": "porção simples",
      "processo": "cru",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "2 gomos",
      "receita": [
        {
          "id": "linguica-toscana",
          "qtd": 2,
          "unidade": "gomos",
          "texto": "2 gomos"
        }
      ],
      "rende": "1 porção",
      "cozinha": "bloco 2 · 5 min (porcionar)",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "panelada"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "hamburguer",
        "bife-fino-cru"
      ],
      "composicao": [
        "origem animal",
        "porco"
      ],
      "obs": "direto do freezer, tampada, em fogo médio, por cerca de 15 minutos"
    },
    // Peixe em posta assado
    {
      "id": "peixe-posta-assado",
      "tipo": "preparo",
      "nome": "Peixe em posta assado",
      "modulo": "porção simples",
      "processo": "assado",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "105 g",
      "receita": [
        {
          "id": "peixe-posta",
          "qtd": 150,
          "unidade": "g por porção",
          "texto": "150 g por porção"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "(cura úmida)",
          "texto": "(cura úmida)"
        }
      ],
      "rende": "1 pote a cada 150 g crus",
      "cozinha": "bloco 1 (cura) e bloco 3 · 25 min",
      "validade": {
        "geladeira": "2 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "file-tilapia-cru",
        "frango-grelhado"
      ],
      "composicao": [
        "origem animal",
        "peixe ou frutos do mar"
      ],
      "obs": "merluza ou cação"
    },
    // Coxa e sobrecoxa assadas
    {
      "id": "coxa-sobrecoxa-assada",
      "tipo": "preparo",
      "nome": "Coxa e sobrecoxa assadas",
      "modulo": "porção simples",
      "processo": "assado",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "105 g sem osso",
      "receita": [
        {
          "id": "coxa-sobrecoxa-osso",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "sal",
          "qtd": 15,
          "unidade": "g (cura seca)",
          "texto": "15 g (cura seca)"
        }
      ],
      "rende": "4 potes",
      "cozinha": "bloco 1 (cura) e bloco 3 · 50 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "frango-desfiado"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "sobrecoxa-assada",
        "frango-grelhado"
      ],
      "composicao": [
        "origem animal",
        "frango"
      ],
      "obs": "desossar depois de esfriar"
    },
    // Cheiro-verde em cubo
    {
      "id": "cheiro-verde-cubo",
      "tipo": "preparo",
      "nome": "Cheiro-verde em cubo",
      "modulo": "pasta de tempero",
      "processo": "picado",
      "preenche": [],
      "local": "freezer",
      "embalagem": "cubo",
      "porcao": "1 cubo",
      "receita": [
        {
          "id": "cheiro-verde",
          "qtd": 1,
          "unidade": "maço",
          "texto": "1 maço"
        },
        {
          "id": "azeite",
          "qtd": 1,
          "unidade": "colher de chá por cubo",
          "texto": "1 colher de chá por cubo"
        }
      ],
      "rende": "1 forminha",
      "cozinha": "armazenamento · 10 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "panelada",
        "sopa",
        "pate-ovo",
        "pate-ricota",
        "galinhada"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "pasta-alho-cebola",
        "oregano"
      ],
      "composicao": [],
      "obs": ""
    },
    // Polpa de maracujá
    {
      "id": "polpa-maracuja",
      "tipo": "preparo",
      "nome": "Polpa de maracujá",
      "modulo": "porção simples",
      "processo": "triturado",
      "preenche": [
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "cubo",
      "porcao": "1 cubo (cerca de 20 g)",
      "receita": [
        {
          "id": "maracuja",
          "qtd": 1,
          "unidade": "unidade",
          "texto": "1 unidade"
        }
      ],
      "rende": "2 cubos",
      "cozinha": "armazenamento · 5 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "kit-suco-maracuja-manga"
      ],
      "escolha": "",
      "recomendado": false,
      "substitutos": [
        "polpa-fruta",
        "laranja-pera"
      ],
      "composicao": [],
      "obs": "bater só 3 segundos, para soltar as sementes, e coar"
    },
    // Creme de abóbora
    {
      "id": "creme-abobora",
      "tipo": "preparo",
      "nome": "Creme de abóbora",
      "modulo": "porção simples",
      "processo": "cozido",
      "preenche": [
        "vegetal",
        "carboidrato"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "300 g",
      "receita": [
        {
          "id": "abobora-cabotia",
          "qtd": 1,
          "unidade": "kg",
          "texto": "1 kg"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 2,
          "unidade": "cubos",
          "texto": "2 cubos"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "agua",
          "qtd": 600,
          "unidade": "ml",
          "texto": "600 ml"
        }
      ],
      "rende": "4 potes",
      "cozinha": "bloco 2 · 30 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "janta"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "sopa-legumes-frango",
        "caldo-verde"
      ],
      "composicao": [],
      "obs": "servir com frango desfiado ou ovo cozido; a mandioquinha pode ser usada no lugar da abóbora"
    },

    // ===== 2.5 Itens novos do Anexo A 1.12 · Recheios prontos =====
    // Patê de atum
    {
      "id": "pate-atum",
      "tipo": "preparo",
      "nome": "Patê de atum",
      "modulo": "",
      "processo": "amassado",
      "preenche": [
        "proteína"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "40 g",
      "receita": [
        {
          "id": "atum",
          "qtd": 1,
          "unidade": "lata",
          "texto": "1 lata"
        },
        {
          "id": "maionese",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        },
        {
          "id": "cenoura-ralada",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        }
      ],
      "rende": "4 porções",
      "cozinha": "bloco 3 · 5 min",
      "validade": {
        "geladeira": "2 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "lanche-natural",
        "wrap",
        "tapioca",
        "torrada"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "pasta-frango",
        "pate-ovo"
      ],
      "composicao": [
        "origem animal",
        "peixe ou frutos do mar",
        "contém ovo"
      ],
      "obs": "pode usar requeijão no lugar da maionese (aí contém leite)"
    },
    // Pasta de frango
    {
      "id": "pasta-frango",
      "tipo": "preparo",
      "nome": "Pasta de frango",
      "modulo": "",
      "processo": "desfiado",
      "preenche": [
        "proteína"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "40 g",
      "receita": [
        {
          "id": "frango-desfiado",
          "qtd": 150,
          "unidade": "g",
          "texto": "150 g"
        },
        {
          "id": "requeijao",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "4 porções",
      "cozinha": "bloco 3 · 5 min",
      "validade": {
        "geladeira": "2 a 3 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "lanche-natural",
        "wrap",
        "tapioca",
        "torrada"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "pate-atum",
        "pate-ovo"
      ],
      "composicao": [
        "origem animal",
        "frango",
        "contém leite"
      ],
      "obs": ""
    },
    // Patê de ovo
    {
      "id": "pate-ovo",
      "tipo": "preparo",
      "nome": "Patê de ovo",
      "modulo": "",
      "processo": "picado",
      "preenche": [
        "proteína leve"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "40 g",
      "receita": [
        {
          "id": "ovos-cozidos",
          "qtd": 3,
          "unidade": "",
          "texto": "3"
        },
        {
          "id": "maionese",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "cheiro-verde",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto",
          "opcional": true
        }
      ],
      "rende": "4 porções",
      "cozinha": "bloco 3 · 5 min",
      "validade": {
        "geladeira": "2 dias"
      },
      "nivel": 1,
      "refeicoes": [],
      "entra_em": [
        "lanche-natural",
        "wrap",
        "tapioca",
        "torrada"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "pate-ricota",
        "pasta-frango"
      ],
      "composicao": [
        "origem animal",
        "contém ovo"
      ],
      "obs": "serve na ceia; o cheiro-verde é do nível 2 e entra quando houver"
    },
    // Patê de ricota
    {
      "id": "pate-ricota",
      "tipo": "preparo",
      "nome": "Patê de ricota",
      "modulo": "",
      "processo": "amassado",
      "preenche": [
        "proteína leve"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "40 g",
      "receita": [
        {
          "id": "ricota",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "azeite",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        },
        {
          "id": "cheiro-verde",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "3 porções",
      "cozinha": "bloco 3 · 5 min",
      "validade": {
        "geladeira": "3 dias"
      },
      "nivel": 2,
      "refeicoes": [],
      "entra_em": [
        "lanche-natural",
        "wrap",
        "tapioca",
        "torrada"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "pate-ovo",
        "queijo-minas-frescal"
      ],
      "composicao": [
        "origem animal",
        "contém leite"
      ],
      "obs": "serve na ceia"
    },
    // Salpicão
    {
      "id": "salpicao",
      "tipo": "preparo",
      "nome": "Salpicão",
      "modulo": "",
      "processo": "desfiado",
      "preenche": [
        "proteína",
        "vegetal"
      ],
      "local": "geladeira",
      "embalagem": "pote da praça",
      "porcao": "150 g",
      "receita": [
        {
          "id": "frango-desfiado",
          "qtd": 150,
          "unidade": "g",
          "texto": "150 g"
        },
        {
          "id": "cenoura-ralada",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "maca-gala",
          "qtd": 0.5,
          "unidade": "unidade",
          "texto": "½ unidade"
        },
        {
          "id": "maionese",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        }
      ],
      "rende": "2 porções",
      "cozinha": "bloco 3 · 10 min",
      "validade": {
        "geladeira": "2 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "janta"
      ],
      "entra_em": [
        "wrap"
      ],
      "escolha": "Alimentos versáteis",
      "recomendado": false,
      "substitutos": [
        "pasta-frango",
        "pate-atum"
      ],
      "composicao": [
        "origem animal",
        "frango",
        "contém ovo"
      ],
      "obs": "janta fria com torrada; a partir do nível 2, pode levar 2 colheres de sopa de milho (Anexo A 1.14)"
    },

    // ===== 2.6 Itens novos do Anexo A 1.12 · Assados de forma e salgados =====
    // Escondidinho de carne moída
    {
      "id": "escondidinho",
      "tipo": "preparo",
      "nome": "Escondidinho de carne moída",
      "modulo": "assado de forma",
      "processo": "gratinado",
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g",
      "receita": [
        {
          "id": "pure",
          "qtd": 550,
          "unidade": "g",
          "texto": "550 g"
        },
        {
          "id": "acem-moido",
          "qtd": 500,
          "unidade": "g",
          "texto": "500 g"
        },
        {
          "id": "molho-tomate",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "parmesao-ralado",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        }
      ],
      "rende": "7 pedaços",
      "cozinha": "bloco 2 · 45 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "almoço",
        "lanche da tarde"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "torta-frango",
        "quibe-de-forno"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha",
        "contém leite"
      ],
      "obs": "purê de mandioca, batata ou abóbora; a carne pode ser carne de panela desfiada"
    },
    // Empadão de frango
    {
      "id": "empadao-frango",
      "tipo": "preparo",
      "nome": "Empadão de frango",
      "modulo": "assado de forma",
      "processo": "assado",
      "preenche": [
        "carboidrato",
        "proteína",
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g",
      "receita": [
        {
          "id": "ovos",
          "qtd": 3,
          "unidade": "",
          "texto": "3"
        },
        {
          "id": "leite-integral",
          "qtd": 0.5,
          "unidade": "xícara",
          "texto": "½ xícara"
        },
        {
          "id": "oleo",
          "qtd": 0.5,
          "unidade": "xícara",
          "texto": "½ xícara"
        },
        {
          "id": "farinha-de-trigo",
          "qtd": 2,
          "unidade": "xícaras",
          "texto": "2 xícaras"
        },
        {
          "id": "fermento-quimico",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "peito-de-frango",
          "qtd": 250,
          "unidade": "g",
          "texto": "250 g"
        },
        {
          "id": "cenoura-ralada",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "tomate-salada",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "6 a 7 pedaços",
      "cozinha": "bloco 2 · 55 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "lanche da tarde"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "torta-frango",
        "fricasse"
      ],
      "composicao": [
        "contém ovo",
        "contém leite",
        "contém glúten",
        "origem animal",
        "frango"
      ],
      "obs": "massa da torta com ½ xícara a menos de leite"
    },
    // Fricassê de frango
    {
      "id": "fricasse",
      "tipo": "preparo",
      "nome": "Fricassê de frango",
      "modulo": "assado de forma",
      "processo": "gratinado",
      "preenche": [
        "proteína",
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g",
      "receita": [
        {
          "id": "frango-desfiado",
          "qtd": 350,
          "unidade": "g",
          "texto": "350 g"
        },
        {
          "id": "molho-branco",
          "qtd": 1,
          "unidade": "pote (265 g)",
          "texto": "1 pote (265 g)"
        },
        {
          "id": "milho-debulhado",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "mucarela",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        }
      ],
      "rende": "6 pedaços",
      "cozinha": "bloco 3 · 30 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "almoço",
        "lanche da tarde"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "escondidinho",
        "torta-frango"
      ],
      "composicao": [
        "origem animal",
        "frango",
        "contém leite",
        "contém glúten"
      ],
      "obs": "350 g de frango desfiado saem de 500 g de peito cru"
    },
    // Fritada de legumes
    {
      "id": "fritada",
      "tipo": "preparo",
      "nome": "Fritada de legumes",
      "modulo": "assado de forma",
      "processo": "assado",
      "preenche": [
        "proteína leve",
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g",
      "receita": [
        {
          "id": "ovos",
          "qtd": 8,
          "unidade": "",
          "texto": "8"
        },
        {
          "id": "cenoura-branqueada",
          "qtd": 2,
          "unidade": "potes",
          "texto": "2 potes"
        },
        {
          "id": "mucarela",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "4 a 5 pedaços",
      "cozinha": "bloco 2 · 40 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "café",
        "lanche da tarde",
        "janta"
      ],
      "entra_em": [
        "fritada-forminha"
      ],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "torta-frango",
        "pate-ovo"
      ],
      "composicao": [
        "origem animal",
        "contém ovo",
        "contém leite"
      ],
      "obs": "qualquer legume branqueado serve"
    },
    // Bolo de banana
    {
      "id": "bolo-banana",
      "tipo": "preparo",
      "nome": "Bolo de banana",
      "modulo": "assado de forma",
      "processo": "assado",
      "preenche": [
        "carboidrato",
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "60 g (1 fatia)",
      "receita": [
        {
          "id": "banana-nanica",
          "qtd": 3,
          "unidade": "unidades",
          "texto": "3 unidades"
        },
        {
          "id": "ovos",
          "qtd": 3,
          "unidade": "",
          "texto": "3"
        },
        {
          "id": "farelo-de-aveia",
          "qtd": 1,
          "unidade": "xícara",
          "texto": "1 xícara"
        },
        {
          "id": "fermento-quimico",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        }
      ],
      "rende": "8 fatias",
      "cozinha": "bloco 2 · 40 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "lanche da tarde",
        "ceia"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "bolo-cenoura",
        "panqueca-banana"
      ],
      "composicao": [
        "origem animal",
        "contém ovo",
        "contém glúten"
      ],
      "obs": "1 fatia na ceia, 2 no lanche; o farelo de aveia pode ter traços de glúten"
    },
    // Bolo de cenoura
    {
      "id": "bolo-cenoura",
      "tipo": "preparo",
      "nome": "Bolo de cenoura",
      "modulo": "assado de forma",
      "processo": "assado",
      "preenche": [
        "carboidrato"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "60 g (1 fatia)",
      "receita": [
        {
          "id": "cenoura",
          "qtd": 300,
          "unidade": "g",
          "texto": "300 g"
        },
        {
          "id": "ovos",
          "qtd": 3,
          "unidade": "",
          "texto": "3"
        },
        {
          "id": "oleo",
          "qtd": 0.5,
          "unidade": "xícara",
          "texto": "½ xícara"
        },
        {
          "id": "acucar",
          "qtd": 1,
          "unidade": "xícara",
          "texto": "1 xícara"
        },
        {
          "id": "farinha-de-trigo",
          "qtd": 2,
          "unidade": "xícaras",
          "texto": "2 xícaras"
        },
        {
          "id": "fermento-quimico",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        }
      ],
      "rende": "15 fatias",
      "cozinha": "bloco 2 · 50 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "lanche da tarde",
        "ceia"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "bolo-banana",
        "panqueca-banana"
      ],
      "composicao": [
        "origem animal",
        "contém ovo",
        "contém glúten"
      ],
      "obs": "1 fatia na ceia, 2 no lanche"
    },
    // Arroz de forno
    {
      "id": "arroz-de-forno",
      "tipo": "preparo",
      "nome": "Arroz de forno",
      "modulo": "assado de forma",
      "processo": "gratinado",
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "140 g",
      "receita": [
        {
          "id": "arroz",
          "qtd": 3,
          "unidade": "potes (510 g)",
          "texto": "3 potes (510 g)"
        },
        {
          "id": "frango-desfiado",
          "qtd": 250,
          "unidade": "g",
          "texto": "250 g"
        },
        {
          "id": "molho-tomate",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "milho-debulhado",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "mucarela",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "parmesao-ralado",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        }
      ],
      "rende": "8 pedaços",
      "cozinha": "bloco 3 · 30 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "escondidinho",
        "fricasse"
      ],
      "composicao": [
        "origem animal",
        "frango",
        "contém leite"
      ],
      "obs": "pode usar molho branco (aí contém glúten); aproveita o arroz que sobrou"
    },
    // Pastel de forno
    {
      "id": "pastel-forno",
      "tipo": "preparo",
      "nome": "Pastel de forno",
      "modulo": "salgado assado",
      "processo": "assado",
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "3 unidades",
      "receita": [
        {
          "id": "massa-pastel",
          "qtd": 1,
          "unidade": "pacote",
          "texto": "1 pacote"
        },
        {
          "id": "carne-moida",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "(pincelar)",
          "texto": "1 (pincelar)"
        }
      ],
      "rende": "cerca de 12 unidades",
      "cozinha": "bloco 3 · 30 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 3,
      "refeicoes": [
        "lanche da tarde"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "enroladinho",
        "pao-de-queijo"
      ],
      "composicao": [
        "contém glúten",
        "contém ovo",
        "origem animal",
        "carne vermelha"
      ],
      "obs": "recheio também de frango desfiado ou frios com queijo (a composição muda); pode congelar cru"
    },

    // ===== 2.7 Itens novos do Anexo A 1.12 · Paneladas e moldados =====
    // Molho bolonhesa
    {
      "id": "bolonhesa",
      "tipo": "preparo",
      "nome": "Molho bolonhesa",
      "modulo": "panelada",
      "processo": "cozido",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "215 g",
      "receita": [
        {
          "id": "molho-tomate",
          "qtd": 1,
          "unidade": "pote (200 g)",
          "texto": "1 pote (200 g)"
        },
        {
          "id": "carne-moida",
          "qtd": 2,
          "unidade": "potes (230 g)",
          "texto": "2 potes (230 g)"
        }
      ],
      "rende": "2 potes",
      "cozinha": "bloco 2 · 10 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 1,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "macarrao-bolonhesa",
        "lasanha",
        "nhoque"
      ],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "carne-moida-molho",
        "almondegas-molho"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha"
      ],
      "obs": ""
    },
    // Strogonoff de carne
    {
      "id": "strogonoff-carne",
      "tipo": "preparo",
      "nome": "Strogonoff de carne",
      "modulo": "panelada",
      "processo": "cozido",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "200 g",
      "receita": [
        {
          "id": "patinho-pressao",
          "qtd": 3,
          "unidade": "potes",
          "texto": "3 potes"
        },
        {
          "id": "molho-branco",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "molho-tomate",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        }
      ],
      "rende": "3 potes",
      "cozinha": "bloco 2 · 10 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "strogonoff-frango",
        "frango-molho-branco"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha",
        "contém leite",
        "contém glúten"
      ],
      "obs": ""
    },
    // Frango xadrez
    {
      "id": "frango-xadrez",
      "tipo": "preparo",
      "nome": "Frango xadrez",
      "modulo": "panelada",
      "processo": "refogado",
      "preenche": [
        "proteína",
        "vegetal"
      ],
      "local": "freezer",
      "embalagem": "pote de porção",
      "porcao": "200 g",
      "receita": [
        {
          "id": "peito-de-frango",
          "qtd": 500,
          "unidade": "g",
          "texto": "500 g"
        },
        {
          "id": "pimentao",
          "qtd": 1,
          "unidade": "unidade",
          "texto": "1 unidade"
        },
        {
          "id": "cebola",
          "qtd": 0.5,
          "unidade": "unidade",
          "texto": "½ unidade"
        },
        {
          "id": "shoyu",
          "qtd": 3,
          "unidade": "colheres de sopa",
          "texto": "3 colheres de sopa"
        },
        {
          "id": "farinha-de-trigo",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "agua",
          "qtd": 200,
          "unidade": "ml",
          "texto": "200 ml"
        },
        {
          "id": "amendoim-torrado",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "3 potes",
      "cozinha": "bloco 2 · 25 min",
      "validade": {
        "geladeira": "3 dias",
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "frango-curry",
        "strogonoff-frango"
      ],
      "composicao": [
        "origem animal",
        "frango",
        "contém glúten",
        "contém amendoim ou castanhas"
      ],
      "obs": "frango sem cura; o shoyu também leva trigo"
    },
    // Hambúrguer de atum
    {
      "id": "hamburguer-atum",
      "tipo": "preparo",
      "nome": "Hambúrguer de atum",
      "modulo": "moldado",
      "processo": "cru",
      "preenche": [
        "proteína"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "140 g",
      "receita": [
        {
          "id": "atum",
          "qtd": 2,
          "unidade": "latas",
          "texto": "2 latas"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "farelo-de-aveia",
          "qtd": 3,
          "unidade": "colheres de sopa",
          "texto": "3 colheres de sopa"
        },
        {
          "id": "cheiro-verde",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "rende": "2 discos",
      "cozinha": "bloco 2 · 10 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "entra_em": [
        "wrap"
      ],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "hamburguer",
        "hamburguer-frango"
      ],
      "composicao": [
        "origem animal",
        "peixe ou frutos do mar",
        "contém ovo",
        "contém glúten"
      ],
      "obs": "do freezer para a frigideira untada, 3 a 4 minutos de cada lado"
    },

    // ===== 2.8 Itens novos do Anexo A 1.12 · Doces =====
    // Panqueca de banana
    {
      "id": "panqueca-banana",
      "tipo": "preparo",
      "nome": "Panqueca de banana",
      "modulo": "",
      "processo": "grelhado",
      "preenche": [
        "carboidrato",
        "proteína leve",
        "fruta"
      ],
      "local": "freezer",
      "embalagem": "saquinho",
      "porcao": "3 a 4 panquecas",
      "receita": [
        {
          "id": "banana-nanica",
          "qtd": 1,
          "unidade": "unidade",
          "texto": "1 unidade"
        },
        {
          "id": "ovos",
          "qtd": 2,
          "unidade": "",
          "texto": "2"
        },
        {
          "id": "farelo-de-aveia",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        }
      ],
      "rende": "1 porção",
      "cozinha": "bloco 2 · 10 min",
      "validade": {
        "freezer": "90 dias"
      },
      "nivel": 2,
      "refeicoes": [
        "café",
        "ceia"
      ],
      "entra_em": [],
      "escolha": "Pratos prontos do freezer",
      "recomendado": false,
      "substitutos": [
        "bolo-banana",
        "crepioca-banana"
      ],
      "composicao": [
        "origem animal",
        "contém ovo",
        "contém glúten"
      ],
      "obs": "esquentar na frigideira ou no micro-ondas por cerca de 40 segundos"
    },
  ],

  // ---------------------------------------------------------------
  // PRATOS NA HORA: montados na hora da refeição
  // ---------------------------------------------------------------
  pratos: [

    // ===== 3.1 Nível 1 · Bebidas =====
    // Café com leite
    {
      "id": "cafe-com-leite",
      "tipo": "prato",
      "nome": "Café com leite",
      "curto": "Café com leite",
      "modulo": "",
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde"
      ],
      "preenche": [
        "bebida",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "leite-integral",
          "qtd": 150,
          "unidade": "ml",
          "texto": "150 ml"
        },
        {
          "id": "cafe-soluvel",
          "qtd": 1,
          "unidade": "colher de chá",
          "texto": "1 colher de chá"
        },
        {
          "id": "acucar",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "2 min",
      "nivel": 1,
      "variacoes": [
        "leite-achocolatado"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ]
    },
    // Leite com achocolatado
    {
      "id": "leite-achocolatado",
      "tipo": "prato",
      "nome": "Leite com achocolatado",
      "curto": "Achocolatado",
      "modulo": "",
      "refeicoes": [
        "café"
      ],
      "preenche": [
        "bebida",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "leite-integral",
          "qtd": 200,
          "unidade": "ml",
          "texto": "200 ml"
        },
        {
          "id": "achocolatado",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        }
      ],
      "usa_freezer": [],
      "tempo": "2 min",
      "nivel": 1,
      "variacoes": [
        "cafe-com-leite"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ]
    },
    // Vitamina de frutas
    {
      "id": "vitamina-frutas",
      "tipo": "prato",
      "nome": "Vitamina de frutas",
      "curto": "Vitamina",
      "modulo": "vitamina",
      "refeicoes": [
        "lanche da manhã",
        "lanche da tarde"
      ],
      "preenche": [
        "bebida",
        "fruta",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "leite-integral",
          "qtd": 250,
          "unidade": "ml",
          "texto": "250 ml"
        },
        {
          "id": "kit-vitamina-base",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "farelo-de-aveia",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa",
          "opcional": true
        }
      ],
      "usa_freezer": [
        {
          "id": "kit-vitamina-base",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "3 min",
      "nivel": 1,
      "variacoes": [],
      "composicao": [
        "contém leite",
        "contém glúten",
        "origem animal"
      ]
    },
    // Suco de polpa
    {
      "id": "suco-polpa",
      "tipo": "prato",
      "nome": "Suco de polpa",
      "curto": "Suco de polpa",
      "modulo": "suco",
      "refeicoes": [
        "almoço"
      ],
      "preenche": [
        "bebida",
        "fruta"
      ],
      "componentes": [
        {
          "id": "polpa-fruta",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "agua",
          "qtd": 300,
          "unidade": "ml",
          "texto": "300 ml"
        },
        {
          "id": "acucar",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [
        {
          "id": "polpa-fruta",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "3 min",
      "nivel": 1,
      "variacoes": [
        "suco-laranja",
        "suco-limao"
      ],
      "composicao": []
    },
    // Suco de laranja
    {
      "id": "suco-laranja",
      "tipo": "prato",
      "nome": "Suco de laranja",
      "curto": "Suco de laranja",
      "modulo": "suco",
      "refeicoes": [
        "almoço"
      ],
      "preenche": [
        "bebida",
        "fruta"
      ],
      "componentes": [
        {
          "id": "laranja-pera",
          "qtd": 2,
          "unidade": "unidades",
          "texto": "2 unidades"
        },
        {
          "id": "acucar",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "suco-polpa",
        "suco-limao"
      ],
      "composicao": []
    },
    // Suco de limão
    {
      "id": "suco-limao",
      "tipo": "prato",
      "nome": "Suco de limão",
      "curto": "Suco de limão",
      "modulo": "suco",
      "refeicoes": [
        "almoço"
      ],
      "preenche": [
        "bebida",
        "fruta"
      ],
      "componentes": [
        {
          "id": "limao-tahiti",
          "qtd": 1,
          "unidade": "unidade",
          "texto": "1 unidade"
        },
        {
          "id": "agua",
          "qtd": 300,
          "unidade": "ml",
          "texto": "300 ml"
        },
        {
          "id": "acucar",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "suco-polpa",
        "suco-laranja"
      ],
      "composicao": []
    },

    // ===== 3.2 Nível 1 · Café, lanches e ceia =====
    // 2 ovos mexidos
    {
      "id": "ovos-mexidos",
      "tipo": "prato",
      "nome": "2 ovos mexidos",
      "curto": "Ovos mexidos",
      "modulo": "prato de ovos",
      "refeicoes": [
        "café",
        "janta",
        "ceia"
      ],
      "preenche": [
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "ovos",
          "qtd": 2,
          "unidade": "",
          "texto": "2"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "prato-ovos-cozidos",
        "omelete-mucarela"
      ],
      "composicao": [
        "contém ovo",
        "origem animal"
      ]
    },
    // 2 ovos cozidos
    {
      "id": "prato-ovos-cozidos",
      "tipo": "prato",
      "nome": "2 ovos cozidos",
      "curto": "Ovos cozidos",
      "modulo": "prato de ovos",
      "refeicoes": [
        "café",
        "ceia"
      ],
      "preenche": [
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "ovos-cozidos",
          "qtd": 1,
          "unidade": "porção",
          "texto": "1 porção"
        }
      ],
      "usa_freezer": [],
      "tempo": "1 min",
      "nivel": 1,
      "variacoes": [
        "ovos-mexidos",
        "omelete-mucarela"
      ],
      "composicao": [
        "contém ovo",
        "origem animal"
      ]
    },
    // Omelete de 2 ovos com muçarela
    {
      "id": "omelete-mucarela",
      "tipo": "prato",
      "nome": "Omelete de 2 ovos com muçarela",
      "curto": "Omelete",
      "modulo": "prato de ovos",
      "refeicoes": [
        "café",
        "janta"
      ],
      "preenche": [
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "ovos",
          "qtd": 2,
          "unidade": "",
          "texto": "2"
        },
        {
          "id": "mucarela",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "ovos-mexidos",
        "prato-ovos-cozidos"
      ],
      "composicao": [
        "contém ovo",
        "contém leite",
        "origem animal"
      ]
    },
    // Pão de forma com manteiga
    {
      "id": "pao-manteiga",
      "tipo": "prato",
      "nome": "Pão de forma com manteiga",
      "curto": "Pão com manteiga",
      "modulo": "recheado",
      "refeicoes": [
        "café"
      ],
      "preenche": [
        "carboidrato"
      ],
      "componentes": [
        {
          "id": "pao-de-forma",
          "qtd": 2,
          "unidade": "fatias",
          "texto": "2 fatias"
        },
        {
          "id": "manteiga",
          "qtd": 1,
          "unidade": "colher de chá",
          "texto": "1 colher de chá"
        }
      ],
      "usa_freezer": [],
      "tempo": "2 min",
      "nivel": 1,
      "variacoes": [
        "torrada-manteiga",
        "tapioca-manteiga"
      ],
      "composicao": [
        "contém glúten",
        "contém leite",
        "origem animal"
      ]
    },
    // Torrada com manteiga
    {
      "id": "torrada-manteiga",
      "tipo": "prato",
      "nome": "Torrada com manteiga",
      "curto": "Torrada",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "lanche da manhã"
      ],
      "preenche": [
        "carboidrato"
      ],
      "componentes": [
        {
          "id": "torrada",
          "qtd": 3,
          "unidade": "unidades",
          "texto": "3 unidades"
        },
        {
          "id": "manteiga",
          "qtd": 1,
          "unidade": "colher de chá",
          "texto": "1 colher de chá"
        }
      ],
      "usa_freezer": [],
      "tempo": "2 min",
      "nivel": 1,
      "variacoes": [
        "torrada-mucarela",
        "pao-manteiga"
      ],
      "composicao": [
        "contém glúten",
        "contém leite",
        "origem animal"
      ]
    },
    // Torrada com muçarela
    {
      "id": "torrada-mucarela",
      "tipo": "prato",
      "nome": "Torrada com muçarela",
      "curto": "Torrada com queijo",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "lanche da manhã",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "torrada",
          "qtd": 3,
          "unidade": "unidades",
          "texto": "3 unidades"
        },
        {
          "id": "mucarela",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        }
      ],
      "usa_freezer": [],
      "tempo": "2 min",
      "nivel": 1,
      "variacoes": [
        "torrada-manteiga",
        "pao-manteiga"
      ],
      "composicao": [
        "contém glúten",
        "contém leite",
        "origem animal"
      ]
    },
    // Tapioca com manteiga
    {
      "id": "tapioca-manteiga",
      "tipo": "prato",
      "nome": "Tapioca com manteiga",
      "curto": "Tapioca",
      "modulo": "recheado",
      "refeicoes": [
        "café"
      ],
      "preenche": [
        "carboidrato"
      ],
      "componentes": [
        {
          "id": "tapioca-goma",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "manteiga",
          "qtd": 1,
          "unidade": "colher de chá",
          "texto": "1 colher de chá"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "tapioca-mucarela",
        "tapioca-ovo"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ]
    },
    // Tapioca com muçarela
    {
      "id": "tapioca-mucarela",
      "tipo": "prato",
      "nome": "Tapioca com muçarela",
      "curto": "Tapioca com queijo",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "tapioca-goma",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "mucarela",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "tapioca-presunto-mucarela",
        "tapioca-ovo",
        "crepioca-banana"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ]
    },
    // Tapioca com presunto e muçarela
    {
      "id": "tapioca-presunto-mucarela",
      "tipo": "prato",
      "nome": "Tapioca com presunto e muçarela",
      "curto": "Tapioca de presunto",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde"
      ],
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "componentes": [
        {
          "id": "tapioca-goma",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "presunto",
          "qtd": 40,
          "unidade": "g",
          "texto": "40 g"
        },
        {
          "id": "mucarela",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "tapioca-mucarela",
        "tapioca-ovo"
      ],
      "composicao": [
        "contém leite",
        "origem animal",
        "porco"
      ]
    },
    // Tapioca com ovo mexido
    {
      "id": "tapioca-ovo",
      "tipo": "prato",
      "nome": "Tapioca com ovo mexido",
      "curto": "Tapioca com ovo",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "tapioca-goma",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "usa_freezer": [],
      "tempo": "7 min",
      "nivel": 1,
      "variacoes": [
        "tapioca-mucarela",
        "crepioca-banana"
      ],
      "composicao": [
        "contém ovo",
        "origem animal"
      ]
    },
    // Crepioca com banana
    {
      "id": "crepioca-banana",
      "tipo": "prato",
      "nome": "Crepioca com banana",
      "curto": "Crepioca",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "proteína leve",
        "fruta"
      ],
      "componentes": [
        {
          "id": "tapioca-goma",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "banana-nanica",
          "qtd": 1,
          "unidade": "unidade",
          "texto": "1 unidade"
        }
      ],
      "usa_freezer": [],
      "tempo": "7 min",
      "nivel": 1,
      "variacoes": [
        "crepioca-maca",
        "tapioca-mucarela"
      ],
      "composicao": [
        "contém ovo",
        "origem animal"
      ]
    },
    // Crepioca com maçã
    {
      "id": "crepioca-maca",
      "tipo": "prato",
      "nome": "Crepioca com maçã",
      "curto": "Crepioca",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "proteína leve",
        "fruta"
      ],
      "componentes": [
        {
          "id": "tapioca-goma",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "maca-gala",
          "qtd": 0.5,
          "unidade": "unidade",
          "texto": "½ unidade"
        }
      ],
      "usa_freezer": [],
      "tempo": "7 min",
      "nivel": 1,
      "variacoes": [
        "crepioca-banana",
        "tapioca-mucarela"
      ],
      "composicao": [
        "contém ovo",
        "origem animal"
      ]
    },
    // Cuscuz com ovo
    {
      "id": "cuscuz-ovo",
      "tipo": "prato",
      "nome": "Cuscuz com ovo",
      "curto": "Cuscuz",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde"
      ],
      "preenche": [
        "carboidrato",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "flocao-de-milho",
          "qtd": 70,
          "unidade": "g",
          "texto": "70 g"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "15 min",
      "nivel": 1,
      "variacoes": [
        "cuscuz-ovo-mucarela"
      ],
      "composicao": [
        "contém ovo",
        "origem animal"
      ]
    },
    // Cuscuz com ovo e muçarela
    {
      "id": "cuscuz-ovo-mucarela",
      "tipo": "prato",
      "nome": "Cuscuz com ovo e muçarela",
      "curto": "Cuscuz com queijo",
      "modulo": "recheado",
      "refeicoes": [
        "café",
        "lanche da manhã",
        "lanche da tarde",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "flocao-de-milho",
          "qtd": 70,
          "unidade": "g",
          "texto": "70 g"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "mucarela",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "15 min",
      "nivel": 1,
      "variacoes": [
        "cuscuz-ovo"
      ],
      "composicao": [
        "contém ovo",
        "contém leite",
        "origem animal"
      ]
    },
    // Lanche natural de presunto, cenoura ralada, alface e tomate com maionese
    {
      "id": "lanche-natural-presunto",
      "tipo": "prato",
      "nome": "Lanche natural de presunto, cenoura ralada, alface e tomate com maionese",
      "curto": "Lanche natural",
      "modulo": "recheado",
      "refeicoes": [
        "lanche da tarde",
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "proteína",
        "vegetal"
      ],
      "componentes": [
        {
          "id": "pao-de-forma",
          "qtd": 2,
          "unidade": "fatias",
          "texto": "2 fatias"
        },
        {
          "id": "presunto",
          "qtd": 40,
          "unidade": "g",
          "texto": "40 g"
        },
        {
          "id": "cenoura-ralada",
          "qtd": 20,
          "unidade": "g",
          "texto": "20 g"
        },
        {
          "id": "alface",
          "qtd": 2,
          "unidade": "folhas",
          "texto": "2 folhas"
        },
        {
          "id": "tomate-salada",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "maionese",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "lanche-natural-repolho-maca"
      ],
      "composicao": [
        "contém glúten",
        "contém ovo",
        "origem animal",
        "porco"
      ]
    },
    // Lanche natural de presunto, repolho e maçã com maionese
    {
      "id": "lanche-natural-repolho-maca",
      "tipo": "prato",
      "nome": "Lanche natural de presunto, repolho e maçã com maionese",
      "curto": "Lanche natural",
      "modulo": "recheado",
      "refeicoes": [
        "lanche da tarde",
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "proteína",
        "vegetal"
      ],
      "componentes": [
        {
          "id": "pao-de-forma",
          "qtd": 2,
          "unidade": "fatias",
          "texto": "2 fatias"
        },
        {
          "id": "presunto",
          "qtd": 40,
          "unidade": "g",
          "texto": "40 g"
        },
        {
          "id": "repolho",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "maca-gala",
          "qtd": 0.25,
          "unidade": "unidade",
          "texto": "¼ unidade"
        },
        {
          "id": "maionese",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "lanche-natural-presunto"
      ],
      "composicao": [
        "contém glúten",
        "contém ovo",
        "origem animal",
        "porco"
      ]
    },
    // Banana com farinha láctea
    {
      "id": "banana-farinha-lactea",
      "tipo": "prato",
      "nome": "Banana com farinha láctea",
      "curto": "Banana com farinha láctea",
      "modulo": "",
      "refeicoes": [
        "café"
      ],
      "preenche": [
        "carboidrato",
        "fruta"
      ],
      "componentes": [
        {
          "id": "banana-nanica",
          "qtd": 1,
          "unidade": "unidade",
          "texto": "1 unidade"
        },
        {
          "id": "farinha-lactea",
          "qtd": 2,
          "unidade": "colheres de sopa",
          "texto": "2 colheres de sopa"
        }
      ],
      "usa_freezer": [],
      "tempo": "2 min",
      "nivel": 1,
      "variacoes": [],
      "composicao": [
        "contém leite",
        "contém glúten",
        "origem animal"
      ]
    },
    // Mingau de aveia com banana e 2 ovos cozidos
    {
      "id": "mingau",
      "tipo": "prato",
      "nome": "Mingau de aveia com banana e 2 ovos cozidos",
      "curto": "Mingau",
      "modulo": "mingau",
      "refeicoes": [
        "café",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "doce",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "leite-integral",
          "qtd": 200,
          "unidade": "ml",
          "texto": "200 ml"
        },
        {
          "id": "farelo-de-aveia",
          "qtd": 3,
          "unidade": "colheres de sopa",
          "texto": "3 colheres de sopa"
        },
        {
          "id": "banana-nanica",
          "qtd": 0.5,
          "unidade": "unidade",
          "texto": "½ unidade"
        },
        {
          "id": "ovos-cozidos",
          "qtd": 1,
          "unidade": "porção",
          "texto": "1 porção"
        },
        {
          "id": "sal",
          "qtd": 1,
          "unidade": "pitada",
          "texto": "1 pitada"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "mingau-aveia-flocos",
        "mingau-fuba"
      ],
      "composicao": [
        "contém leite",
        "contém glúten",
        "contém ovo",
        "origem animal"
      ]
    },

    // ===== 3.3 Nível 1 · Almoço e janta =====
    // Arroz, feijão e frango grelhado
    {
      "id": "arroz-feijao-frango",
      "tipo": "prato",
      "nome": "Arroz, feijão e frango grelhado",
      "curto": "Arroz, feijão e frango",
      "modulo": "",
      "refeicoes": [
        "almoço"
      ],
      "preenche": [
        "carboidrato",
        "leguminosa",
        "proteína"
      ],
      "componentes": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "feijao",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "frango-grelhado",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "usa_freezer": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "feijao",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "frango-grelhado",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "arroz-feijao-hamburguer",
        "arroz-feijao-carne-moida"
      ],
      "composicao": [
        "origem animal",
        "frango"
      ]
    },
    // Arroz, feijão e hambúrguer
    {
      "id": "arroz-feijao-hamburguer",
      "tipo": "prato",
      "nome": "Arroz, feijão e hambúrguer",
      "curto": "Arroz, feijão e hambúrguer",
      "modulo": "",
      "refeicoes": [
        "almoço"
      ],
      "preenche": [
        "carboidrato",
        "leguminosa",
        "proteína"
      ],
      "componentes": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "feijao",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "hamburguer",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "usa_freezer": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "feijao",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "hamburguer",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "12 min",
      "nivel": 1,
      "variacoes": [
        "arroz-feijao-frango",
        "arroz-feijao-carne-moida"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha",
        "contém ovo",
        "contém glúten"
      ]
    },
    // Arroz, feijão e carne moída
    {
      "id": "arroz-feijao-carne-moida",
      "tipo": "prato",
      "nome": "Arroz, feijão e carne moída",
      "curto": "Arroz, feijão e carne moída",
      "modulo": "",
      "refeicoes": [
        "almoço"
      ],
      "preenche": [
        "carboidrato",
        "leguminosa",
        "proteína"
      ],
      "componentes": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "feijao",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "carne-moida",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "usa_freezer": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "feijao",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "carne-moida",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "arroz-feijao-frango",
        "arroz-feijao-hamburguer"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha"
      ]
    },
    // Arroz e frango ao molho branco
    {
      "id": "arroz-frango-molho-branco",
      "tipo": "prato",
      "nome": "Arroz e frango ao molho branco",
      "curto": "Frango ao molho branco",
      "modulo": "",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "componentes": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "frango-molho-branco",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "usa_freezer": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "frango-molho-branco",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "arroz-feijao-frango"
      ],
      "composicao": [
        "origem animal",
        "frango",
        "contém leite",
        "contém glúten"
      ]
    },
    // Macarrão ao molho de tomate com carne moída
    {
      "id": "macarrao-molho-tomate-carne",
      "tipo": "prato",
      "nome": "Macarrão ao molho de tomate com carne moída",
      "curto": "Macarrão com carne",
      "modulo": "massa na hora",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "componentes": [
        {
          "id": "espaguete",
          "qtd": 80,
          "unidade": "g",
          "texto": "80 g"
        },
        {
          "id": "molho-tomate",
          "qtd": 0.5,
          "unidade": "pote",
          "texto": "½ pote"
        },
        {
          "id": "carne-moida",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "usa_freezer": [
        {
          "id": "molho-tomate",
          "qtd": 0.5,
          "unidade": "",
          "texto": "½"
        },
        {
          "id": "carne-moida",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "15 min",
      "nivel": 1,
      "variacoes": [
        "macarrao-molho-branco-frango",
        "macarrao-bolonhesa"
      ],
      "composicao": [
        "contém glúten",
        "origem animal",
        "carne vermelha"
      ]
    },
    // Macarrão ao molho branco com frango
    {
      "id": "macarrao-molho-branco-frango",
      "tipo": "prato",
      "nome": "Macarrão ao molho branco com frango",
      "curto": "Macarrão com frango",
      "modulo": "massa na hora",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "componentes": [
        {
          "id": "espaguete",
          "qtd": 80,
          "unidade": "g",
          "texto": "80 g"
        },
        {
          "id": "molho-branco",
          "qtd": 0.5,
          "unidade": "pote",
          "texto": "½ pote"
        },
        {
          "id": "frango-grelhado",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "usa_freezer": [
        {
          "id": "molho-branco",
          "qtd": 0.5,
          "unidade": "",
          "texto": "½"
        },
        {
          "id": "frango-grelhado",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "15 min",
      "nivel": 1,
      "variacoes": [
        "macarrao-molho-tomate-carne",
        "macarrao-bolonhesa"
      ],
      "composicao": [
        "contém glúten",
        "contém leite",
        "origem animal",
        "frango"
      ]
    },
    // Macarrão à bolonhesa
    {
      "id": "macarrao-bolonhesa",
      "tipo": "prato",
      "nome": "Macarrão à bolonhesa",
      "curto": "Macarrão à bolonhesa",
      "modulo": "massa na hora",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "componentes": [
        {
          "id": "espaguete",
          "qtd": 80,
          "unidade": "g",
          "texto": "80 g"
        },
        {
          "id": "bolonhesa",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "usa_freezer": [
        {
          "id": "bolonhesa",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "15 min",
      "nivel": 1,
      "variacoes": [
        "macarrao-molho-tomate-carne",
        "macarrao-molho-branco-frango"
      ],
      "composicao": [
        "contém glúten",
        "origem animal",
        "carne vermelha"
      ]
    },
    // Hambúrguer e polenta
    {
      "id": "polenta-hamburguer",
      "tipo": "prato",
      "nome": "Hambúrguer e polenta",
      "curto": "Hambúrguer e polenta",
      "modulo": "",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "proteína"
      ],
      "componentes": [
        {
          "id": "polenta",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "hamburguer",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "usa_freezer": [
        {
          "id": "polenta",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "hamburguer",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "12 min",
      "nivel": 1,
      "variacoes": [
        "omelete-polenta"
      ],
      "composicao": [
        "origem animal",
        "carne vermelha",
        "contém ovo",
        "contém glúten"
      ]
    },
    // Omelete de 2 ovos com muçarela e polenta
    {
      "id": "omelete-polenta",
      "tipo": "prato",
      "nome": "Omelete de 2 ovos com muçarela e polenta",
      "curto": "Omelete e polenta",
      "modulo": "prato de ovos",
      "refeicoes": [
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "proteína leve"
      ],
      "componentes": [
        {
          "id": "ovos",
          "qtd": 2,
          "unidade": "",
          "texto": "2"
        },
        {
          "id": "mucarela",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "polenta",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "usa_freezer": [
        {
          "id": "polenta",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "10 min",
      "nivel": 1,
      "variacoes": [
        "polenta-hamburguer",
        "omelete-mucarela"
      ],
      "composicao": [
        "contém ovo",
        "contém leite",
        "origem animal"
      ]
    },
    // Salada de repolho, cenoura ralada e maçã com atum, e torrada
    {
      "id": "salada-repolho-maca-atum",
      "tipo": "prato",
      "nome": "Salada de repolho, cenoura ralada e maçã com atum, e torrada",
      "curto": "Salada com atum",
      "modulo": "salada",
      "refeicoes": [
        "janta"
      ],
      "preenche": [
        "vegetal",
        "proteína",
        "carboidrato"
      ],
      "componentes": [
        {
          "id": "repolho",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "cenoura-ralada",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "maca-gala",
          "qtd": 0.5,
          "unidade": "unidade",
          "texto": "½ unidade"
        },
        {
          "id": "atum",
          "qtd": 1,
          "unidade": "lata",
          "texto": "1 lata"
        },
        {
          "id": "molho-salada-pronto",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "torrada",
          "qtd": 3,
          "unidade": "unidades",
          "texto": "3 unidades"
        }
      ],
      "usa_freezer": [],
      "tempo": "10 min",
      "nivel": 1,
      "variacoes": [],
      "composicao": [
        "origem animal",
        "peixe ou frutos do mar",
        "contém glúten"
      ]
    },
    // Caldo verde
    {
      "id": "caldo-verde",
      "tipo": "prato",
      "nome": "Caldo verde",
      "curto": "Caldo verde",
      "modulo": "sopa",
      "refeicoes": [
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "vegetal",
        "proteína"
      ],
      "componentes": [
        {
          "id": "pre-pure-batata",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "couve",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "cubo",
          "texto": "1 cubo"
        },
        {
          "id": "calabresa",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "ovos-cozidos",
          "qtd": 0.5,
          "unidade": "porção",
          "texto": "½ porção"
        },
        {
          "id": "agua",
          "qtd": 300,
          "unidade": "ml",
          "texto": "300 ml"
        },
        {
          "id": "azeite",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [
        {
          "id": "couve",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "10 min",
      "nivel": 1,
      "variacoes": [],
      "composicao": [
        "origem animal",
        "porco",
        "contém ovo"
      ]
    },

    // ===== 3.4 Nível 1 · Acompanhamentos de vegetal (almoço e janta) =====
    // Cenoura
    {
      "id": "acomp-cenoura",
      "tipo": "prato",
      "nome": "Cenoura",
      "curto": "Cenoura",
      "modulo": "",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "vegetal"
      ],
      "componentes": [
        {
          "id": "cenoura-branqueada",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        }
      ],
      "usa_freezer": [
        {
          "id": "cenoura-branqueada",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "salada-alface-tomate",
        "salada-repolho-cenoura"
      ],
      "composicao": []
    },
    // Salada de alface e tomate
    {
      "id": "salada-alface-tomate",
      "tipo": "prato",
      "nome": "Salada de alface e tomate",
      "curto": "Salada de alface e tomate",
      "modulo": "salada",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "vegetal"
      ],
      "componentes": [
        {
          "id": "alface",
          "qtd": 3,
          "unidade": "folhas",
          "texto": "3 folhas"
        },
        {
          "id": "tomate-salada",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "azeite",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "limao-tahiti",
          "qtd": 0.5,
          "unidade": "unidade",
          "texto": "½ unidade",
          "opcional": true
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "salada-repolho-cenoura",
        "acomp-cenoura"
      ],
      "composicao": []
    },
    // Salada de repolho e cenoura ralada com crisps de calabresa
    {
      "id": "salada-repolho-cenoura",
      "tipo": "prato",
      "nome": "Salada de repolho e cenoura ralada com crisps de calabresa",
      "curto": "Salada de repolho",
      "modulo": "salada",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "vegetal"
      ],
      "componentes": [
        {
          "id": "repolho",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "cenoura-ralada",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "crisps-calabresa",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa",
          "opcional": true
        },
        {
          "id": "azeite",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "salada-alface-tomate",
        "acomp-cenoura"
      ],
      "composicao": [
        "origem animal",
        "porco"
      ]
    },

    // ===== 3.5 Itens novos do Anexo A 1.12 =====
    // Mingau de aveia em flocos
    {
      "id": "mingau-aveia-flocos",
      "tipo": "prato",
      "nome": "Mingau de aveia em flocos",
      "curto": "Mingau de aveia",
      "modulo": "mingau",
      "refeicoes": [
        "café",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "doce"
      ],
      "componentes": [
        {
          "id": "leite-integral",
          "qtd": 200,
          "unidade": "ml",
          "texto": "200 ml"
        },
        {
          "id": "aveia-em-flocos",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "sal",
          "qtd": 1,
          "unidade": "pitada",
          "texto": "1 pitada"
        }
      ],
      "usa_freezer": [],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "mingau",
        "mingau-fuba"
      ],
      "composicao": [
        "contém leite",
        "contém glúten",
        "origem animal"
      ]
    },
    // Mingau de fubá
    {
      "id": "mingau-fuba",
      "tipo": "prato",
      "nome": "Mingau de fubá",
      "curto": "Mingau de fubá",
      "modulo": "mingau",
      "refeicoes": [
        "café",
        "ceia"
      ],
      "preenche": [
        "carboidrato",
        "doce"
      ],
      "componentes": [
        {
          "id": "leite-integral",
          "qtd": 200,
          "unidade": "ml",
          "texto": "200 ml"
        },
        {
          "id": "fuba",
          "qtd": 20,
          "unidade": "g",
          "texto": "20 g"
        },
        {
          "id": "acucar",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "10 min",
      "nivel": 1,
      "variacoes": [
        "mingau",
        "mingau-aveia-flocos"
      ],
      "composicao": [
        "contém leite",
        "origem animal"
      ]
    },
    // Aveia dormida com fruta
    {
      "id": "aveia-dormida",
      "tipo": "prato",
      "nome": "Aveia dormida com fruta",
      "curto": "Aveia dormida",
      "modulo": "mingau",
      "refeicoes": [
        "café",
        "lanche da manhã"
      ],
      "preenche": [
        "carboidrato",
        "fruta"
      ],
      "componentes": [
        {
          "id": "leite-integral",
          "qtd": 150,
          "unidade": "ml",
          "texto": "150 ml"
        },
        {
          "id": "aveia-em-flocos",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "mel",
          "qtd": 1,
          "unidade": "colher de chá",
          "texto": "1 colher de chá"
        },
        {
          "id": "mamao-picado",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        }
      ],
      "usa_freezer": [],
      "tempo": "3 min (na véspera)",
      "nivel": 1,
      "variacoes": [
        "mingau-aveia-flocos",
        "mingau"
      ],
      "composicao": [
        "contém leite",
        "contém glúten",
        "origem animal"
      ]
    },
    // Baião de dois
    {
      "id": "baiao-de-dois",
      "tipo": "prato",
      "nome": "Baião de dois",
      "curto": "Baião de dois",
      "modulo": "",
      "refeicoes": [
        "almoço"
      ],
      "preenche": [
        "carboidrato",
        "leguminosa"
      ],
      "componentes": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "feijao",
          "qtd": 0.5,
          "unidade": "pote",
          "texto": "½ pote"
        },
        {
          "id": "crisps-calabresa",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "mucarela",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        }
      ],
      "usa_freezer": [
        {
          "id": "arroz",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "feijao",
          "qtd": 0.5,
          "unidade": "",
          "texto": "½"
        }
      ],
      "tempo": "5 min",
      "nivel": 1,
      "variacoes": [
        "feijao-tropeiro"
      ],
      "composicao": [
        "origem animal",
        "porco",
        "contém leite"
      ]
    },
    // Feijão tropeiro
    {
      "id": "feijao-tropeiro",
      "tipo": "prato",
      "nome": "Feijão tropeiro",
      "curto": "Feijão tropeiro",
      "modulo": "",
      "refeicoes": [
        "almoço"
      ],
      "preenche": [
        "leguminosa",
        "carboidrato",
        "vegetal"
      ],
      "componentes": [
        {
          "id": "feijao",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "farofa",
          "qtd": 3,
          "unidade": "colheres de sopa",
          "texto": "3 colheres de sopa"
        },
        {
          "id": "crisps-calabresa",
          "qtd": 1,
          "unidade": "colher de sopa",
          "texto": "1 colher de sopa"
        },
        {
          "id": "ovos",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "couve",
          "qtd": 20,
          "unidade": "g",
          "texto": "20 g"
        }
      ],
      "usa_freezer": [
        {
          "id": "feijao",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "couve",
          "qtd": 20,
          "unidade": "g",
          "texto": "20 g"
        }
      ],
      "tempo": "5 min",
      "nivel": 2,
      "variacoes": [
        "baiao-de-dois"
      ],
      "composicao": [
        "origem animal",
        "porco",
        "contém ovo",
        "contém leite"
      ]
    },
    // Sopa de legumes com frango
    {
      "id": "sopa-legumes-frango",
      "tipo": "prato",
      "nome": "Sopa de legumes com frango",
      "curto": "Sopa de legumes",
      "modulo": "sopa",
      "refeicoes": [
        "janta"
      ],
      "preenche": [
        "carboidrato",
        "vegetal",
        "proteína"
      ],
      "componentes": [
        {
          "id": "kit-sopa",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        },
        {
          "id": "frango-desfiado",
          "qtd": 100,
          "unidade": "g",
          "texto": "100 g"
        },
        {
          "id": "padre-nosso",
          "qtd": 30,
          "unidade": "g",
          "texto": "30 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "cubo",
          "texto": "1 cubo"
        },
        {
          "id": "agua",
          "qtd": 400,
          "unidade": "ml",
          "texto": "400 ml"
        }
      ],
      "usa_freezer": [
        {
          "id": "kit-sopa",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "15 min",
      "nivel": 3,
      "variacoes": [
        "caldo-verde",
        "sopa-lentilha-calabresa"
      ],
      "composicao": [
        "origem animal",
        "frango",
        "contém glúten"
      ]
    },
    // Sopa de lentilha com calabresa
    {
      "id": "sopa-lentilha-calabresa",
      "tipo": "prato",
      "nome": "Sopa de lentilha com calabresa",
      "curto": "Sopa de lentilha",
      "modulo": "sopa",
      "refeicoes": [
        "janta"
      ],
      "preenche": [
        "leguminosa",
        "vegetal",
        "proteína"
      ],
      "componentes": [
        {
          "id": "lentilha-cozida",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "calabresa",
          "qtd": 50,
          "unidade": "g",
          "texto": "50 g"
        },
        {
          "id": "cenoura",
          "qtd": 60,
          "unidade": "g",
          "texto": "60 g"
        },
        {
          "id": "pasta-alho-cebola",
          "qtd": 1,
          "unidade": "cubo",
          "texto": "1 cubo"
        },
        {
          "id": "agua",
          "qtd": 200,
          "unidade": "ml",
          "texto": "200 ml"
        }
      ],
      "usa_freezer": [
        {
          "id": "lentilha-cozida",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "10 min",
      "nivel": 3,
      "variacoes": [
        "caldo-verde",
        "sopa-legumes-frango"
      ],
      "composicao": [
        "origem animal",
        "porco"
      ]
    },
    // Polenta mole
    {
      "id": "polenta-mole",
      "tipo": "prato",
      "nome": "Polenta mole",
      "curto": "Polenta mole",
      "modulo": "",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "carboidrato"
      ],
      "componentes": [
        {
          "id": "fuba",
          "qtd": 40,
          "unidade": "g",
          "texto": "40 g"
        },
        {
          "id": "agua",
          "qtd": 300,
          "unidade": "ml",
          "texto": "300 ml"
        },
        {
          "id": "sal",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [],
      "tempo": "10 min",
      "nivel": 1,
      "variacoes": [
        "polenta-frita"
      ],
      "composicao": []
    },
    // Polenta frita na airfryer
    {
      "id": "polenta-frita",
      "tipo": "prato",
      "nome": "Polenta frita na airfryer",
      "curto": "Polenta frita",
      "modulo": "",
      "refeicoes": [
        "almoço",
        "janta"
      ],
      "preenche": [
        "carboidrato"
      ],
      "componentes": [
        {
          "id": "polenta",
          "qtd": 1,
          "unidade": "pote",
          "texto": "1 pote"
        },
        {
          "id": "oleo",
          "qtd": null,
          "unidade": "a gosto",
          "texto": "a gosto"
        }
      ],
      "usa_freezer": [
        {
          "id": "polenta",
          "qtd": 1,
          "unidade": "",
          "texto": "1"
        }
      ],
      "tempo": "20 min",
      "nivel": 1,
      "variacoes": [
        "polenta-mole"
      ],
      "composicao": []
    },
  ],
};

// ---------------------------------------------------------------------
// Índice por id: junta os três tipos num só lugar, para achar qualquer
// item rápido. Exemplo: BANCO_ID["arroz"] devolve a ficha do arroz cozido.
// ---------------------------------------------------------------------
const BANCO_ID = {};
[...BANCO.ingredientes, ...BANCO.preparos, ...BANCO.pratos].forEach(item => {
  BANCO_ID[item.id] = item;
});

// ---------------------------------------------------------------------
// Ingredientes que não têm ficha e não são comprados (exemplo: água).
// A página ignora esses ids na compra.
// ---------------------------------------------------------------------
const BANCO_SEM_FICHA = ["agua"];
