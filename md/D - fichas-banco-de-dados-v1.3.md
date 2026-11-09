# Fichas do banco de dados · Método Modular
## Itens no formato do padrão do banco de dados

**Versão 1.3** · Criado em 08/11/2026 · Última atualização: 09/11/2026 · Segue o padrão 1.4 · Usado com o manual 3.18 e o Anexo A 1.14

---

## 0. Para a IA (leia primeiro)
- **O que é:** as fichas dos itens do Anexo A no formato do padrão do banco de dados, prontas para virar o arquivo `banco.js` da página.
- **O Anexo A continua sendo a fonte.** Se uma ficha e o Anexo A disserem coisas diferentes, vale o Anexo A, e a ficha é corrigida.
- **Nesta versão:**
    - os itens novos do Anexo A 1.12 (fichas da versão 1.0), passados para os campos do padrão 1.3 (`escolha`, `recomendado` e `refeicoes` no preparo);
    - **todos os itens do nível 1** que ainda não tinham ficha: os ingredientes da lista sugerida (Anexo A, seção A.6.1), os preparos do nível 1 e os pratos na hora do exemplo de cardápio (Anexo A, seção A.6.5).
- **Ainda sem ficha:** os itens antigos dos níveis 2 a 4 (seção 5). Os `id` citados que ainda não têm ficha ganham a ficha nas próximas versões, com o mesmo `id`.
- **Itens marcados com \* no Anexo A continuam em revisão.** O nível de cada um é uma sugestão até o admin aprovar.
- **`agua` não tem ficha:** aparece nas receitas, mas não é comprada.
- **Marca `(opcional)`:** o item não trava o prato; se a pessoa não escolheu, o prato sai sem ele (padrão 1.4, seção 3).
- **Módulos pendentes:** patês, salpicão, panqueca de banana, baião de dois, feijão tropeiro e as polentas na hora ficam com `modulo: —` até a decisão sobre os módulos novos (padrão 1.3, seção 5.10).
- **Bebidas do café e dos lanches** (café com leite, leite com achocolatado) também ficam com `modulo: —`, porque a lista 5.10 não tem um módulo para elas.

---

## 1. Ingredientes

### 1.1 Nível 1 · Hortifrúti

```
id: banana-nanica
nome: Banana nanica
secao: hortifrúti · subsecao: frutas
grupo: frutas · papel: fruta
compra: kg · 2 kg
aproveitavel: 65%
guardar: inteira · fruteira; madura vira kit
validade: fruteira 4 a 7 dias · freezer em kit
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, ceia
entra_em: kit-vitamina-base, mingau, crepioca-banana, banana-farinha-lactea, bolo-banana, panqueca-banana, kit-vitamina-banana-abacate, kit-vitamina-banana-uva
escolha: Frutas
recomendado: não
substitutos: maca-gala, mamao-formosa
composicao: —
obs: —
```

```
id: mamao-formosa
nome: Mamão formosa
secao: hortifrúti · subsecao: frutas
grupo: frutas · papel: fruta
compra: kg · 1 kg
aproveitavel: 65%
guardar: picado · pote da praça · geladeira; parte vai para o kit
validade: geladeira 3 a 4 dias · freezer em kit
nivel: 1
refeicoes: café
entra_em: mamao-picado, kit-vitamina-base
escolha: Frutas
recomendado: não
substitutos: maca-gala, banana-nanica
composicao: —
obs: —
```

```
id: maca-gala
nome: Maçã gala
secao: hortifrúti · subsecao: frutas
grupo: frutas · papel: fruta
compra: kg · 1 kg
aproveitavel: 90%
guardar: inteira · pote da praça · geladeira; parte vai para o kit
validade: geladeira 3 a 4 semanas · freezer em kit
nivel: 1
refeicoes: café, lanche da tarde, janta, ceia
entra_em: kit-vitamina-base, salada-repolho-maca-atum, lanche-natural-repolho-maca, crepioca-maca, salpicao
escolha: Frutas
recomendado: não
substitutos: banana-nanica, mamao-formosa
composicao: —
obs: cortar na hora e passar limão, para não escurecer
```

```
id: laranja-pera
nome: Laranja-pera
secao: hortifrúti · subsecao: frutas
grupo: frutas · papel: fruta
compra: kg · 1 kg
aproveitavel: 60% (suco: 45%)
guardar: inteira · gaveta da geladeira
validade: gaveta da geladeira 2 a 3 semanas · freezer em gomos, em kit
nivel: 1
refeicoes: almoço
entra_em: suco-laranja, kit-suco-goiaba-laranja
escolha: Frutas
recomendado: não
substitutos: polpa-fruta, limao-tahiti
composicao: —
obs: —
```

```
id: limao-tahiti
nome: Limão tahiti
secao: hortifrúti · subsecao: frutas
grupo: frutas · papel: fruta
compra: g · 500 g
aproveitavel: 40% (suco)
guardar: inteiro · gaveta da geladeira
validade: gaveta da geladeira 2 a 3 semanas
nivel: 1
refeicoes: almoço
entra_em: suco-limao, salada-alface-tomate
escolha: Frutas
recomendado: não
substitutos: laranja-pera, polpa-fruta
composicao: —
obs: comprado a cada 2 semanas (Anexo A, seção A.5.3)
```

```
id: tomate-italiano
nome: Tomate italiano
secao: hortifrúti · subsecao: legumes
grupo: legumes · papel: vegetal
compra: kg · 1 kg
aproveitavel: 95%
guardar: inteiro · fruteira, até o molho
validade: fruteira 5 a 7 dias · freezer só em molho
nivel: 1
refeicoes: —
entra_em: molho-tomate, molho-tomate-legumes
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: entra na compra quando um prato escolhido usa molho de tomate; 1 kg para 3 potes de molho
```

```
id: tomate-salada
nome: Tomate para salada
secao: hortifrúti · subsecao: legumes
grupo: legumes · papel: vegetal
compra: kg · 1 kg
aproveitavel: 95%
guardar: inteiro · fruteira; cortado na hora
validade: fruteira 5 a 7 dias · não congela cru
nivel: 1
refeicoes: almoço, lanche da tarde, janta
entra_em: salada-alface-tomate, lanche-natural-presunto, torta-frango, empadao-frango
escolha: Legumes e folhas
recomendado: não
substitutos: cenoura, repolho
composicao: —
obs: —
```

```
id: cenoura
nome: Cenoura
secao: hortifrúti · subsecao: legumes
grupo: legumes · papel: vegetal
compra: kg · 1,2 kg
aproveitavel: 85%
guardar: branqueada · pote de porção · freezer; ralada · pote da praça · geladeira; picada em kit
validade: pote da praça 3 a 4 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, lanche da tarde, janta
entra_em: cenoura-branqueada, cenoura-ralada, kit-vitamina-base, bolo-cenoura, molho-tomate-legumes, sopa-lentilha-calabresa, kit-vitamina-banana-abacate
escolha: Legumes e folhas
recomendado: não
substitutos: tomate-salada, repolho
composicao: —
obs: —
```

```
id: cebola
nome: Cebola
secao: hortifrúti · subsecao: legumes
grupo: legumes · papel: tempero
compra: kg · 1 kg
aproveitavel: 90%
guardar: triturado · cubo · freezer, na pasta de alho e cebola
validade: fruteira 1 mês · freezer 90 dias
nivel: 1
refeicoes: —
entra_em: pasta-alho-cebola, frango-xadrez
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: —
```

```
id: alho
nome: Alho
secao: hortifrúti · subsecao: legumes
grupo: legumes · papel: tempero
compra: unidade · 1 cabeça
aproveitavel: 85%
guardar: triturado · cubo · freezer, na pasta de alho e cebola
validade: fruteira 1 a 2 meses · freezer 90 dias
nivel: 1
refeicoes: —
entra_em: pasta-alho-cebola
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: —
```

```
id: repolho
nome: Repolho
secao: hortifrúti · subsecao: folhas
grupo: folhas · papel: vegetal
compra: unidade · 1 unidade
aproveitavel: 85%
guardar: lavado · folhas soltas e inteiras · pote da praça · geladeira; fatiado na hora
validade: pote da praça 7 a 10 dias · fatiado 2 a 3 dias
nivel: 1
refeicoes: almoço, lanche da tarde, janta
entra_em: salada-repolho-cenoura, salada-repolho-maca-atum, lanche-natural-repolho-maca
escolha: Legumes e folhas
recomendado: não
substitutos: alface, cenoura
composicao: —
obs: —
```

```
id: alface
nome: Alface
secao: hortifrúti · subsecao: folhas
grupo: folhas · papel: vegetal
compra: unidade · 1 unidade
aproveitavel: 80%
guardar: lavado · folhas soltas e inteiras · pote da praça com papel-toalha · geladeira
validade: pote da praça 7 a 10 dias · não congela
nivel: 1
refeicoes: almoço, lanche da tarde, janta
entra_em: salada-alface-tomate, lanche-natural-presunto
escolha: Legumes e folhas
recomendado: não
substitutos: repolho, tomate-salada
composicao: —
obs: 1 alface rende cerca de 6 saladas; acima disso, 2
```

```
id: couve
nome: Couve
secao: hortifrúti · subsecao: folhas
grupo: folhas · papel: vegetal
compra: unidade · 1 maço
aproveitavel: 85%
guardar: fatiado fino · cru · saquinho · freezer
validade: geladeira 3 a 5 dias · freezer 90 dias
nivel: 1
refeicoes: janta
entra_em: caldo-verde, feijao-tropeiro
escolha: Legumes e folhas
recomendado: não
substitutos: repolho, alface
composicao: —
obs: 1 maço rende cerca de 200 g
```

### 1.2 Nível 1 · Mercearia

```
id: arroz-cru
nome: Arroz
secao: mercearia · subsecao: grãos e massas
grupo: cereais · papel: carboidrato
compra: kg · 1 kg
aproveitavel: rende cerca de 2,8 vezes o peso cru
guardar: inteiro · original · despensa
validade: despensa meses
nivel: 1
refeicoes: almoço
entra_em: arroz, galinhada, arroz-com-legumes
escolha: Bases do almoço e da janta
recomendado: não
substitutos: espaguete, fuba
composicao: —
obs: —
```

```
id: feijao-carioca
nome: Feijão carioca
secao: mercearia · subsecao: grãos e massas
grupo: leguminosas · papel: leguminosa
compra: kg · 1 kg
aproveitavel: rende cerca de 2,8 vezes o peso cru
guardar: inteiro · original · despensa
validade: despensa meses
nivel: 1
refeicoes: almoço
entra_em: feijao
escolha: Bases do almoço e da janta
recomendado: não
substitutos: lentilha, grao-de-bico
composicao: —
obs: —
```

```
id: espaguete
nome: Espaguete
secao: mercearia · subsecao: grãos e massas
grupo: massas · papel: carboidrato
compra: g · 500 g
aproveitavel: 80 g cru por porção
guardar: inteiro · original · despensa; cozido só na hora
validade: despensa meses · não congela cozido
nivel: 1
refeicoes: almoço, janta
entra_em: macarrao-molho-tomate-carne, macarrao-molho-branco-frango, macarrao-bolonhesa
escolha: Bases do almoço e da janta
recomendado: não
substitutos: arroz-cru, fuba
composicao: contém glúten
obs: —
```

```
id: pre-pure-batata
nome: Pré-purê de batata
secao: mercearia · subsecao: grãos e massas
grupo: farináceos · papel: carboidrato
compra: unidade · 1 pacote
aproveitavel: 30 g por porção de caldo verde
guardar: inteiro · original · despensa
validade: despensa meses
nivel: 1
refeicoes: —
entra_em: caldo-verde
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: entra na compra quando o caldo verde entra no cardápio
```

```
id: farinha-de-trigo
nome: Farinha de trigo
secao: mercearia · subsecao: farinhas
grupo: farináceos · papel: carboidrato
compra: kg · 1 kg
aproveitavel: —
guardar: inteiro · original · despensa
validade: despensa meses
nivel: 1
refeicoes: —
entra_em: torta-frango, molho-branco, bolo-cenoura, empadao-frango, frango-xadrez
escolha: —
recomendado: não
substitutos: —
composicao: contém glúten
obs: —
```

```
id: fuba
nome: Fubá
secao: mercearia · subsecao: farinhas
grupo: farináceos · papel: carboidrato
compra: kg · 1 kg
aproveitavel: 75 g por 2 porções de polenta
guardar: inteiro · original · despensa
validade: despensa meses
nivel: 1
refeicoes: almoço, janta, café, ceia
entra_em: polenta, polenta-mole, mingau-fuba
escolha: Bases do almoço e da janta
recomendado: não
substitutos: arroz-cru, espaguete
composicao: —
obs: aparece na tela como "Fubá (polenta)"
```

```
id: tapioca-goma
nome: Tapioca (goma)
secao: mercearia · subsecao: farinhas
grupo: farináceos · papel: carboidrato
compra: kg · 1 kg
aproveitavel: 50 g por tapioca · 30 g por crepioca
guardar: inteiro · original · despensa
validade: conforme o rótulo
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, ceia
entra_em: tapioca-mucarela, tapioca-presunto-mucarela, tapioca-ovo, tapioca-manteiga, crepioca-banana, crepioca-maca
escolha: Bases do café e dos lanches
recomendado: sim
substitutos: flocao-de-milho, pao-de-forma
composicao: —
obs: —
```

```
id: flocao-de-milho
nome: Flocão de milho
secao: mercearia · subsecao: farinhas
grupo: farináceos · papel: carboidrato
compra: g · 500 g
aproveitavel: 70 g por cuscuz
guardar: inteiro · original · despensa
validade: despensa meses
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, ceia
entra_em: cuscuz-ovo, cuscuz-ovo-mucarela
escolha: Bases do café e dos lanches
recomendado: sim
substitutos: tapioca-goma, pao-de-forma
composicao: —
obs: aparece na tela como "Flocão de milho (cuscuz)"
```

```
id: farelo-de-aveia
nome: Farelo de aveia
secao: mercearia · subsecao: farinhas
grupo: farináceos · papel: carboidrato
compra: unidade · 1 pacote
aproveitavel: —
guardar: inteiro · original · despensa, bem fechado
validade: despensa 3 meses depois de aberto
nivel: 1
refeicoes: café, ceia
entra_em: vitamina-frutas, mingau, hamburguer, bolo-banana, hamburguer-atum, panqueca-banana
escolha: Bases do café e dos lanches
recomendado: sim
substitutos: aveia-em-flocos, farinha-de-trigo
composicao: contém glúten
obs: aparece na tela como "Farelo de aveia (mingau e vitamina)"; pode ter traços de glúten; sem ele, não há mingau de farelo, a vitamina sai sem farelo e o hambúrguer leva farinha de trigo
```

```
id: aveia-em-flocos
nome: Aveia em flocos
secao: mercearia · subsecao: farinhas
grupo: cereais · papel: carboidrato
compra: unidade · 1 pacote
aproveitavel: 30 g por porção
guardar: inteiro · original · despensa
validade: despensa 3 meses depois de aberta
nivel: 1
refeicoes: café, lanche da manhã, ceia
entra_em: mingau-aveia-flocos, aveia-dormida
escolha: Bases do café e dos lanches
recomendado: não
substitutos: farelo-de-aveia
composicao: contém glúten
obs: —
```

```
id: fermento-quimico
nome: Fermento químico
secao: mercearia · subsecao: farinhas
grupo: farináceos · papel: —
compra: unidade · 1 pote
aproveitavel: —
guardar: inteiro · original · despensa
validade: conforme o rótulo
nivel: 1
refeicoes: —
entra_em: torta-frango, bolo-banana, bolo-cenoura, empadao-frango
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: —
```

```
id: cafe-soluvel
nome: Café solúvel
secao: mercearia · subsecao: matinais
grupo: bebidas · papel: bebida
compra: unidade · 1 pote
aproveitavel: —
guardar: inteiro · original · despensa, bem fechado
validade: conforme o rótulo
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde
entra_em: cafe-com-leite
escolha: Bebidas
recomendado: não
substitutos: achocolatado
composicao: —
obs: sem cafeína na ceia
```

```
id: achocolatado
nome: Achocolatado
secao: mercearia · subsecao: matinais
grupo: açúcares · papel: doce
compra: unidade · 1 lata
aproveitavel: 2 colheres por porção
guardar: inteiro · original · despensa
validade: conforme o rótulo
nivel: 1
refeicoes: café
entra_em: leite-achocolatado
escolha: Bebidas
recomendado: não
substitutos: cafe-soluvel
composicao: —
obs: —
```

```
id: farinha-lactea
nome: Farinha láctea
secao: mercearia · subsecao: matinais
grupo: farináceos · papel: carboidrato
compra: unidade · 1 lata
aproveitavel: 2 colheres por porção
guardar: inteiro · original · despensa
validade: conforme o rótulo
nivel: 1
refeicoes: café, ceia
entra_em: banana-farinha-lactea
escolha: Bases do café e dos lanches
recomendado: não
substitutos: torrada, aveia-em-flocos
composicao: contém leite · contém glúten · origem animal
obs: —
```

```
id: torrada
nome: Torrada
secao: mercearia · subsecao: matinais
grupo: pães · papel: carboidrato
compra: unidade · 1 pacote
aproveitavel: 2 a 3 por porção
guardar: inteiro · original · despensa, bem fechada
validade: conforme o rótulo
nivel: 1
refeicoes: café, lanche da manhã, janta, ceia
entra_em: torrada-manteiga, torrada-mucarela, salada-repolho-maca-atum
escolha: Bases do café e dos lanches
recomendado: não
substitutos: pao-de-forma, tapioca-goma
composicao: contém glúten
obs: reposta toda semana (Anexo A, seção A.5.3)
```

```
id: pao-de-forma
nome: Pão de forma
secao: mercearia · subsecao: matinais
grupo: pães · papel: carboidrato
compra: unidade · 1 pacote
aproveitavel: 2 fatias por porção
guardar: inteiro · original · despensa; o que não for usado em 5 dias vai fatiado para o freezer
validade: despensa 5 a 7 dias · freezer 90 dias
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, janta
entra_em: pao-manteiga, lanche-natural-presunto, lanche-natural-repolho-maca
escolha: Bases do café e dos lanches
recomendado: não
substitutos: torrada, pao-frances
composicao: contém glúten
obs: reposto toda semana (Anexo A, seção A.5.3)
```

```
id: acucar
nome: Açúcar
secao: mercearia · subsecao: matinais
grupo: açúcares · papel: doce
compra: kg · 1 kg
aproveitavel: —
guardar: inteiro · original · despensa
validade: meses
nivel: 1
refeicoes: —
entra_em: cafe-com-leite, suco-polpa, suco-laranja, suco-limao, bolo-cenoura, mingau-fuba
escolha: —
recomendado: não
substitutos: mel
composicao: —
obs: —
```

```
id: mel
nome: Mel
secao: mercearia · subsecao: matinais
grupo: açúcares · papel: doce
compra: unidade · 1 pote
aproveitavel: —
guardar: inteiro · original · despensa
validade: meses
nivel: 1
refeicoes: —
entra_em: aveia-dormida
escolha: —
recomendado: não
substitutos: acucar
composicao: —
obs: —
```

```
id: leite-integral
nome: Leite integral
secao: mercearia · subsecao: leite e ovos
grupo: básicos refrigerados · papel: proteína leve
compra: litro · 7 litros
aproveitavel: 150 a 250 ml por porção
guardar: fechado · original · despensa; aberto · geladeira
validade: geladeira 3 dias depois de aberto
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, ceia
entra_em: cafe-com-leite, leite-achocolatado, vitamina-frutas, mingau, molho-branco, torta-frango, mingau-aveia-flocos, mingau-fuba, aveia-dormida, empadao-frango
escolha: Bebidas
recomendado: não
substitutos: —
composicao: contém leite · origem animal
obs: reposto toda semana (Anexo A, seção A.5.3)
```

```
id: ovos
nome: Ovos
secao: mercearia · subsecao: leite e ovos
grupo: básicos refrigerados · papel: proteína leve
compra: unidade · 30 unidades
aproveitavel: 2 por porção
guardar: inteiro · original · geladeira, na prateleira
validade: geladeira conforme o rótulo · não congela cozido
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, janta, ceia
entra_em: ovos-cozidos, ovos-mexidos, omelete-mucarela, tapioca-ovo, cuscuz-ovo, cuscuz-ovo-mucarela, crepioca-banana, crepioca-maca, torta-frango, hamburguer, empadao-frango, fritada, bolo-banana, bolo-cenoura, hamburguer-atum, panqueca-banana, feijao-tropeiro, pastel-forno
escolha: Recheios
recomendado: não
substitutos: mucarela, presunto
composicao: contém ovo · origem animal
obs: 24 a 30 por semana; até 36 nas semanas com torta (Anexo A, seção A.5.3)
```

```
id: oleo
nome: Óleo
secao: mercearia · subsecao: óleos e temperos
grupo: óleos · papel: gordura
compra: unidade · 1 garrafa
aproveitavel: —
guardar: inteiro · original · despensa
validade: meses
nivel: 1
refeicoes: —
entra_em: frango-grelhado, torta-frango, bolo-cenoura, empadao-frango, patinho-pressao, musculo-pressao, galinhada
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: —
```

```
id: azeite
nome: Azeite
secao: mercearia · subsecao: óleos e temperos
grupo: óleos · papel: gordura
compra: unidade · 1 garrafa
aproveitavel: —
guardar: inteiro · original · despensa, longe da luz
validade: meses
nivel: 1
refeicoes: —
entra_em: molho-tomate, salada-alface-tomate, salada-repolho-cenoura, caldo-verde, molho-tomate-legumes, berinjela-assada, cheiro-verde-cubo, pate-ricota
escolha: —
recomendado: não
substitutos: oleo
composicao: —
obs: —
```

```
id: sal
nome: Sal
secao: mercearia · subsecao: óleos e temperos
grupo: temperos secos · papel: tempero
compra: unidade · 1 pacote
aproveitavel: —
guardar: inteiro · original · despensa
validade: indeterminado
nivel: 1
refeicoes: —
entra_em: quase todos os preparos e a cura
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: —
```

```
id: pimenta-do-reino
nome: Pimenta-do-reino
secao: mercearia · subsecao: óleos e temperos
grupo: temperos secos · papel: tempero
compra: unidade · 1 pote
aproveitavel: —
guardar: inteiro · original · despensa
validade: meses
nivel: 1
refeicoes: —
entra_em: hamburguer, caldo-verde
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: —
```

```
id: oregano
nome: Orégano
secao: mercearia · subsecao: óleos e temperos
grupo: temperos secos · papel: tempero
compra: unidade · 1 pacote
aproveitavel: —
guardar: inteiro · original · despensa
validade: meses
nivel: 1
refeicoes: —
entra_em: molho-tomate, molho-tomate-legumes
escolha: —
recomendado: não
substitutos: —
composicao: —
obs: —
```

```
id: molho-salada-pronto
nome: Molho de salada pronto
secao: mercearia · subsecao: óleos e temperos
grupo: condimentos · papel: condimento
compra: unidade · 2 frascos de sabores diferentes
aproveitavel: 1 colher por salada
guardar: aberto · original · geladeira
validade: conforme o rótulo
nivel: 1
refeicoes: —
entra_em: salada-alface-tomate, salada-repolho-maca-atum
escolha: —
recomendado: não
substitutos: azeite
composicao: contém leite · origem animal
obs: os de parmesão e de iogurte levam leite; conferir o rótulo
```

```
id: maionese
nome: Maionese
secao: mercearia · subsecao: óleos e temperos
grupo: condimentos · papel: condimento
compra: unidade · 1 pote
aproveitavel: 1 colher por porção
guardar: aberta · original · geladeira
validade: conforme o rótulo · não congela
nivel: 1
refeicoes: —
entra_em: lanche-natural-presunto, lanche-natural-repolho-maca, pate-atum, pate-ovo, salpicao
escolha: —
recomendado: não
substitutos: molho-salada-pronto
composicao: contém ovo · origem animal
obs: —
```

```
id: atum
nome: Atum
secao: mercearia · subsecao: enlatados
grupo: carnes · papel: proteína
compra: unidade · 2 latas
aproveitavel: 1 lata por porção
guardar: fechado · original · despensa; aberto · pote da praça · geladeira
validade: geladeira 2 dias depois de aberto
nivel: 1
refeicoes: almoço, lanche da tarde, janta
entra_em: salada-repolho-maca-atum, pate-atum, hamburguer-atum
escolha: Proteínas
recomendado: não
substitutos: frango-desfiado, ovos
composicao: origem animal · peixe ou frutos do mar
obs: —
```

### 1.3 Nível 1 · Açougue

```
id: peito-de-frango
nome: Peito de frango
secao: açougue · subsecao: —
grupo: carnes · papel: proteína
compra: kg · 1 kg
aproveitavel: 70% cozido
guardar: filés · curado e grelhado · pote de porção · freezer; tiras · desfiado · pote da praça ou recheio
validade: geladeira cru 1 dia · pote da praça desfiado 2 a 3 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: frango-grelhado, frango-desfiado, torta-frango, galinhada, frango-xadrez, empadao-frango
escolha: Proteínas
recomendado: não
substitutos: acem-moido, atum
composicao: origem animal · frango
obs: peso de compra cru
```

```
id: acem-moido
nome: Acém moído
secao: açougue · subsecao: —
grupo: carnes · papel: proteína
compra: kg · 1 kg
aproveitavel: 70% cozido
guardar: refogado · pote de porção · freezer; ou moldado · cru · saquinho · freezer
validade: geladeira cru 1 dia · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: carne-moida, hamburguer, escondidinho
escolha: Proteínas
recomendado: não
substitutos: peito-de-frango, atum
composicao: origem animal · carne vermelha
obs: peso de compra cru
```

### 1.4 Nível 1 · Resfriados

```
id: calabresa
nome: Calabresa
secao: resfriados · subsecao: —
grupo: carnes · papel: proteína
compra: g · 250 g
aproveitavel: 60% como crisps
guardar: fechada · original · geladeira, até a cozinha; crisps · frito · pote da praça · geladeira
validade: crisps 5 dias
nivel: 1
refeicoes: almoço, janta
entra_em: crisps-calabresa, caldo-verde, sopa-lentilha-calabresa
escolha: Recheios
recomendado: não
substitutos: presunto
composicao: origem animal · porco
obs: aparece na tela como "Calabresa (crisps)"; fica fora da ceia
```

```
id: mucarela
nome: Muçarela
secao: resfriados · subsecao: —
grupo: laticínios · papel: proteína leve
compra: g · 200 g
aproveitavel: 30 g por porção
guardar: fatiada ou ralada · pote da praça · geladeira
validade: pote da praça 5 a 7 dias · freezer ralada 90 dias
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, janta, ceia
entra_em: tapioca-mucarela, tapioca-presunto-mucarela, torrada-mucarela, cuscuz-ovo-mucarela, omelete-mucarela, fricasse, fritada, arroz-de-forno, baiao-de-dois
escolha: Recheios
recomendado: não
substitutos: queijo-prato, ricota
composicao: contém leite · origem animal
obs: entra no rodízio de frios e queijos (manual, seção 0.12)
```

```
id: queijo-prato
nome: Queijo prato
secao: resfriados · subsecao: —
grupo: laticínios · papel: proteína leve
compra: g · 200 g
aproveitavel: 30 g por porção
guardar: fatiado · pote da praça · geladeira
validade: pote da praça 5 a 7 dias
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, janta, ceia
entra_em: tapioca-mucarela, torrada-mucarela, cuscuz-ovo-mucarela, omelete-mucarela
escolha: Recheios
recomendado: não
substitutos: mucarela, ricota
composicao: contém leite · origem animal
obs: substituto da muçarela no rodízio; os pratos com muçarela aceitam queijo prato
```

```
id: presunto
nome: Presunto
secao: resfriados · subsecao: —
grupo: frios · papel: proteína
compra: g · 200 g
aproveitavel: 40 g por porção
guardar: fatiado · pote da praça · geladeira
validade: pote da praça 3 a 5 dias · freezer fatiado 30 dias
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, janta
entra_em: tapioca-presunto-mucarela, lanche-natural-presunto, lanche-natural-repolho-maca
escolha: Recheios
recomendado: não
substitutos: peito-de-peru, mucarela
composicao: origem animal · porco
obs: entra no rodízio de frios e queijos (manual, seção 0.12)
```

```
id: peito-de-peru
nome: Peito de peru
secao: resfriados · subsecao: —
grupo: frios · papel: proteína
compra: g · 200 g
aproveitavel: 40 g por porção
guardar: fatiado · pote da praça · geladeira
validade: pote da praça 3 a 5 dias
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, janta
entra_em: tapioca-presunto-mucarela, lanche-natural-presunto, lanche-natural-repolho-maca
escolha: Recheios
recomendado: não
substitutos: presunto, mucarela
composicao: origem animal
obs: substituto do presunto no rodízio; os pratos com presunto aceitam peito de peru
```

```
id: parmesao-ralado
nome: Parmesão ralado
secao: resfriados · subsecao: —
grupo: laticínios · papel: proteína leve
compra: unidade · 1 pacote
aproveitavel: 1 colher por prato
guardar: inteiro · pote da praça · geladeira
validade: pote da praça 30 dias
nivel: 1
refeicoes: —
entra_em: escondidinho, arroz-de-forno
escolha: —
recomendado: não
substitutos: mucarela
composicao: contém leite · origem animal
obs: finalização de massas e assados
```

```
id: manteiga
nome: Manteiga
secao: resfriados · subsecao: —
grupo: básicos refrigerados · papel: gordura
compra: g · 200 g
aproveitavel: —
guardar: inteiro · original · geladeira
validade: geladeira conforme o rótulo · freezer 90 dias
nivel: 1
refeicoes: café, lanche da manhã
entra_em: molho-branco, pao-manteiga, torrada-manteiga, tapioca-manteiga
escolha: —
recomendado: não
substitutos: requeijao
composicao: contém leite · origem animal
obs: —
```

```
id: requeijao
nome: Requeijão
secao: resfriados · subsecao: —
grupo: laticínios · papel: gordura
compra: unidade · 1 pote
aproveitavel: —
guardar: inteiro · original · geladeira
validade: geladeira 7 dias depois de aberto · não congela
nivel: 1
refeicoes: —
entra_em: pasta-frango
escolha: —
recomendado: não
substitutos: maionese
composicao: contém leite · origem animal
obs: —
```

```
id: polpa-fruta
nome: Polpa de fruta congelada
secao: resfriados · subsecao: —
grupo: frutas · papel: fruta
compra: unidade · 4 pacotes de 100 g
aproveitavel: 1 por suco
guardar: inteiro · original · freezer
validade: freezer conforme o rótulo
nivel: 1
refeicoes: almoço
entra_em: suco-polpa
escolha: Frutas
recomendado: não
substitutos: laranja-pera, limao-tahiti
composicao: —
obs: no nível 2, o kit de suco ocupa o lugar dela
```

### 1.5 Itens novos do Anexo A 1.12 (fichas da versão 1.0)

```
id: pao-frances
nome: Pão francês
secao: mercearia · subsecao: matinais
grupo: pães · papel: carboidrato
compra: unidade · 6 unidades
aproveitavel: 100%
guardar: inteiro · despensa no dia; o restante inteiro · saquinho · freezer
validade: despensa 1 dia · freezer 30 dias
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, ceia
entra_em: —
escolha: Bases do café e dos lanches
recomendado: não
substitutos: pao-de-forma, torrada
composicao: contém glúten
obs: esquentar no forno ou na airfryer, a 180 °C, por 5 a 8 minutos; ainda sem prato na hora ligado
```

```
id: acafrao-da-terra
nome: Açafrão-da-terra (cúrcuma)
secao: mercearia · subsecao: óleos e temperos
grupo: temperos secos · papel: tempero
compra: pacote · 1 pacote
aproveitavel: 100%
guardar: inteiro · original · despensa
validade: despensa meses
nivel: 2
refeicoes: —
entra_em: galinhada
escolha: —
recomendado: não
substitutos: curry, pimenta-do-reino
composicao: —
obs: 1 colher de chá por receita
```

```
id: musculo-cubos
nome: Músculo em cubos
secao: açougue · subsecao: —
grupo: carnes · papel: proteína
compra: kg · 1 kg
aproveitavel: 65% cozido
guardar: cozido · pote de porção · freezer
validade: geladeira cru 1 dia · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: musculo-pressao
escolha: Proteínas
recomendado: não
substitutos: patinho-cubos, acem-pedaco
composicao: origem animal · carne vermelha
obs: na pressão, com o caldo
```

```
id: ricota
nome: Ricota
secao: resfriados · subsecao: —
grupo: laticínios · papel: proteína leve
compra: unidade · 1 pote de 250 g
aproveitavel: 100%
guardar: inteiro · original · geladeira; ou patê · pote da praça · geladeira
validade: geladeira 3 a 5 dias depois de aberta · não congela
nivel: 2
refeicoes: café, lanche da manhã, lanche da tarde, ceia
entra_em: pate-ricota
escolha: Recheios
recomendado: não
substitutos: queijo-minas-frescal, mucarela
composicao: contém leite · origem animal
obs: —
```

---

## 2. Preparos

### 2.1 Nível 1 · Porções simples, molhos e bases de preparo

```
id: arroz
nome: Arroz
modulo: porção simples · processo: cozido
preenche: carboidrato
local: freezer · embalagem: pote de porção
porcao: 170 g
receita: arroz-cru 300 g · pasta-alho-cebola 1 cubo · sal a gosto · agua 3 xícaras (quente)
rende: 5 potes
cozinha: bloco 2 · 25 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: arroz-feijao-frango, arroz-feijao-hamburguer, arroz-feijao-carne-moida, arroz-frango-molho-branco, arroz-de-forno, baiao-de-dois
escolha: —
recomendado: não
substitutos: polenta, arroz-com-legumes
composicao: —
obs: espalhar numa assadeira para esfriar mais rápido
```

```
id: feijao
nome: Feijão
modulo: porção simples · processo: cozido
preenche: leguminosa
local: freezer · embalagem: pote de porção
porcao: 140 g, com o caldo
receita: feijao-carioca 250 g · pasta-alho-cebola 2 cubos · sal a gosto · agua até 2 cm acima dos grãos
rende: 5 potes
cozinha: bloco 1 (demolho) e bloco 3 · 40 min
validade: geladeira 3 dias · freezer 6 meses
nivel: 1
refeicoes: almoço
entra_em: arroz-feijao-frango, arroz-feijao-hamburguer, arroz-feijao-carne-moida, baiao-de-dois, feijao-tropeiro
escolha: —
recomendado: não
substitutos: lentilha-cozida, grao-de-bico-cozido
composicao: —
obs: cozido na panela da calabresa, com o óleo dela, quando houver crisps na semana
```

```
id: frango-grelhado
nome: Frango grelhado
modulo: porção simples · processo: grelhado
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 105 g (150 g cru)
receita: peito-de-frango 750 g · sal (cura úmida) · oleo a gosto · pasta-alho-cebola 2 cubos
rende: 5 potes
cozinha: bloco 1 (cura) e bloco 3 · 30 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: arroz-feijao-frango, macarrao-molho-branco-frango, frango-molho-branco
escolha: —
recomendado: não
substitutos: carne-moida, hamburguer
composicao: origem animal · frango
obs: grelhar sem sal (a cura já salgou); a frigideira serve para o molho branco
```

```
id: carne-moida
nome: Carne moída
modulo: porção simples · processo: refogado
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 115 g
receita: acem-moido 500 g · pasta-alho-cebola 2 cubos · sal a gosto
rende: 3 potes
cozinha: bloco 2 · 20 min
validade: geladeira 2 a 3 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: arroz-feijao-carne-moida, macarrao-molho-tomate-carne, bolonhesa, pastel-forno
escolha: —
recomendado: não
substitutos: frango-grelhado, hamburguer
composicao: origem animal · carne vermelha
obs: a panela serve para o molho de tomate
```

```
id: polenta
nome: Polenta
modulo: porção simples · processo: cozido
preenche: carboidrato
local: freezer · embalagem: pote de porção
porcao: 275 g
receita: fuba 75 g · agua 2 xícaras · sal a gosto
rende: 2 potes
cozinha: bloco 2 · 20 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: polenta-hamburguer, omelete-polenta, polenta-frita
escolha: —
recomendado: não
substitutos: arroz, pure
composicao: —
obs: no almoço com polenta, o feijão é dispensado (manual, seção 5.1)
```

```
id: cenoura-branqueada
nome: Cenoura
modulo: porção simples · processo: branqueado
preenche: vegetal
local: freezer · embalagem: pote de porção
porcao: 125 g
receita: cenoura 500 g · sal a gosto
rende: 4 potes
cozinha: armazenamento · 15 min
validade: geladeira 5 a 7 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: arroz-com-legumes, fritada
escolha: —
recomendado: não
substitutos: salada-alface-tomate, salada-repolho-cenoura
composicao: —
obs: em barras; 3 minutos na água fervendo e água com gelo; vai do freezer direto para a panela
```

```
id: cenoura-ralada
nome: Cenoura ralada
modulo: porção simples · processo: ralado
preenche: vegetal
local: geladeira · embalagem: pote da praça
porcao: 40 g
receita: cenoura 340 g
rende: 1 pote da praça
cozinha: armazenamento · 10 min
validade: geladeira 3 a 4 dias
nivel: 1
refeicoes: —
entra_em: lanche-natural-presunto, salada-repolho-cenoura, salada-repolho-maca-atum, torta-frango, pate-atum, salpicao, empadao-frango
escolha: —
recomendado: não
substitutos: tomate-salada, repolho
composicao: —
obs: validade curta: entra nos primeiros dias do cardápio
```

```
id: mamao-picado
nome: Mamão picado
modulo: porção simples · processo: picado
preenche: fruta
local: geladeira · embalagem: pote da praça
porcao: 100 g
receita: mamao-formosa cerca de 440 g aproveitáveis
rende: 1 pote da praça
cozinha: armazenamento · 10 min
validade: geladeira 3 a 4 dias
nivel: 1
refeicoes: café
entra_em: aveia-dormida
escolha: —
recomendado: não
substitutos: banana-nanica, maca-gala
composicao: —
obs: validade curta: entra nos primeiros dias do cardápio; a fruta do café vem dele, da banana ou da maçã
```

```
id: ovos-cozidos
nome: Ovos cozidos
modulo: porção simples · processo: cozido
preenche: proteína leve
local: geladeira · embalagem: original
porcao: 2 ovos
receita: ovos 2 por porção · agua
rende: 1 porção a cada 2 ovos
cozinha: bloco 2 · 15 min
validade: geladeira 7 dias, com casca · não congela
nivel: 1
refeicoes: café, ceia
entra_em: prato-ovos-cozidos, mingau, pate-ovo
escolha: —
recomendado: não
substitutos: ovos-mexidos
composicao: origem animal · contém ovo
obs: 9 minutos depois de ferver
```

```
id: molho-tomate
nome: Molho de tomate
modulo: molho pronto · processo: cozido
preenche: —
local: freezer · embalagem: pote de porção
porcao: 200 g
receita: tomate-italiano 1 kg · pasta-alho-cebola 2 cubos · azeite 2 colheres de sopa · sal a gosto · oregano a gosto
rende: 3 potes
cozinha: bloco 2 · 45 min (na panela da carne moída)
validade: geladeira 3 a 5 dias · freezer 90 dias
nivel: 1
refeicoes: —
entra_em: macarrao-molho-tomate-carne, bolonhesa, escondidinho, arroz-de-forno, strogonoff-carne
escolha: —
recomendado: não
substitutos: molho-tomate-legumes, molho-branco
composicao: —
obs: meio pote por porção de macarrão
```

```
id: molho-branco
nome: Molho branco
modulo: molho pronto · processo: cozido
preenche: —
local: freezer · embalagem: pote de porção
porcao: 265 g
receita: leite-integral 750 ml · manteiga 38 g · farinha-de-trigo 38 g · sal a gosto
rende: 3 potes
cozinha: bloco 3 · 15 min (na frigideira do frango)
validade: geladeira 3 dias · freezer 90 dias
nivel: 1
refeicoes: —
entra_em: frango-molho-branco, macarrao-molho-branco-frango, fricasse, strogonoff-carne
escolha: —
recomendado: não
substitutos: molho-tomate, molho-curry
composicao: contém leite · contém glúten · origem animal
obs: ao esquentar, juntar um pouco de leite
```

```
id: pasta-alho-cebola
nome: Pasta de alho e cebola
modulo: pasta de tempero · processo: triturado
preenche: —
local: freezer · embalagem: cubo
porcao: 1 cubo
receita: cebola 1 kg · alho 1 cabeça · sal a gosto
rende: 3 forminhas (cerca de 45 cubos)
cozinha: armazenamento · 20 min
validade: freezer 90 dias
nivel: 1
refeicoes: —
entra_em: quase todos os preparos
escolha: —
recomendado: não
substitutos: cheiro-verde-cubo
composicao: —
obs: entra sempre que algum prato da semana usar; 1 forminha a cada 15 cubos usados
```

```
id: crisps-calabresa
nome: Crisps de calabresa
modulo: finalização · processo: frito
preenche: proteína
local: geladeira · embalagem: pote da praça
porcao: 1 colher de sopa
receita: calabresa 250 g
rende: cerca de 150 g
cozinha: bloco 3 · 15 min (na panela do feijão)
validade: geladeira 5 dias
nivel: 1
refeicoes: —
entra_em: salada-repolho-cenoura, baiao-de-dois, feijao-tropeiro
escolha: —
recomendado: não
substitutos: parmesao-ralado
composicao: origem animal · porco
obs: fica fora da ceia
```

```
id: kit-vitamina-base
nome: Vitamina de frutas
modulo: kit vitamina · processo: picado
preenche: fruta
local: freezer · embalagem: saquinho
porcao: 180 g
receita: banana-nanica 100 g · mamao-formosa 30 g · maca-gala 30 g · cenoura 20 g
rende: 1 kit
cozinha: armazenamento · 5 min
validade: freezer 90 dias
nivel: 1
refeicoes: —
entra_em: vitamina-frutas
escolha: —
recomendado: não
substitutos: kit-vitamina-banana-abacate, kit-vitamina-banana-uva
composicao: —
obs: 7 kits por semana; com só 1 ou 2 das frutas escolhidas, a banana completa o peso
```

### 2.2 Nível 1 · Assado de forma, moldado e panelada

```
id: torta-frango
nome: Torta de frango
modulo: assado de forma · processo: assado
preenche: carboidrato + proteína + vegetal
local: freezer · embalagem: pote de porção
porcao: 140 g
receita: ovos 3 · leite-integral 1 xícara · oleo ½ xícara · farinha-de-trigo 2 xícaras · fermento-quimico 1 colher de sopa · sal a gosto · peito-de-frango 250 g · cenoura-ralada 100 g · tomate-salada 100 g
rende: 7 pedaços
cozinha: bloco 2 · 55 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 1
refeicoes: lanche da tarde
entra_em: —
escolha: Pratos prontos do freezer
recomendado: sim
substitutos: empadao-frango, fricasse
composicao: contém ovo · contém leite · contém glúten · origem animal · frango
obs: fazer só quando restarem 3 pedaços ou menos; até 3 vezes por semana no lanche da tarde; o resto fica no freezer
```

```
id: hamburguer
nome: Hambúrguer
modulo: moldado · processo: cru
preenche: proteína
local: freezer · embalagem: saquinho
porcao: 165 g
receita: acem-moido 500 g · ovos 1 · farelo-de-aveia 2 colheres de sopa · pasta-alho-cebola 1 cubo · sal a gosto · pimenta-do-reino a gosto
rende: 3 discos
cozinha: bloco 2 · 15 min
validade: freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: arroz-feijao-hamburguer, polenta-hamburguer
escolha: Pratos prontos do freezer
recomendado: não
substitutos: hamburguer-atum, frango-grelhado
composicao: origem animal · carne vermelha · contém ovo · contém glúten
obs: cada disco em plástico-filme, no seu saquinho; do freezer direto para a frigideira, cerca de 5 minutos de cada lado; sem farelo de aveia, usar 2 colheres de sopa de farinha de trigo (Anexo A, seção A.4.1)
```

```
id: frango-molho-branco
nome: Frango ao molho branco
modulo: panelada · processo: cozido
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 200 g
receita: frango-grelhado 2 potes · molho-branco 1 pote
rende: 2 potes
cozinha: bloco 3 · 10 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: arroz-frango-molho-branco
escolha: Pratos prontos do freezer
recomendado: não
substitutos: strogonoff-frango, bolonhesa
composicao: origem animal · frango · contém leite · contém glúten
obs: o frango em cubos cozinha junto com o molho, na mesma panela
```

### 2.3 Itens novos do Anexo A 1.12 · Kits

```
id: kit-vitamina-banana-abacate
nome: Vitamina de banana e abacate
modulo: kit vitamina · processo: picado
preenche: fruta
local: freezer · embalagem: saquinho
porcao: 180 g
receita: banana-nanica 90 g · abacate 70 g · cenoura 20 g
rende: 1 kit
cozinha: armazenamento · 5 min
validade: freezer 90 dias
nivel: 2
refeicoes: —
entra_em: vitamina-frutas
escolha: —
recomendado: não
substitutos: kit-vitamina-base, kit-vitamina-banana-manga
composicao: —
obs: entra no rodízio de variações do kit de vitamina
```

```
id: kit-vitamina-banana-uva
nome: Vitamina de banana e uva
modulo: kit vitamina · processo: picado
preenche: fruta
local: freezer · embalagem: saquinho
porcao: 180 g
receita: banana-nanica 100 g · uva 60 g · beterraba 20 g
rende: 1 kit
cozinha: armazenamento · 5 min
validade: freezer 90 dias
nivel: 2
refeicoes: —
entra_em: vitamina-frutas
escolha: —
recomendado: não
substitutos: kit-vitamina-base, kit-vitamina-banana-morango
composicao: —
obs: —
```

```
id: kit-suco-goiaba-laranja
nome: Suco de goiaba e laranja
modulo: kit suco · processo: picado
preenche: fruta
local: freezer · embalagem: saquinho
porcao: 180 g
receita: goiaba 100 g · laranja-pera 80 g
rende: 1 kit
cozinha: armazenamento · 5 min
validade: freezer 90 dias
nivel: 2
refeicoes: —
entra_em: suco
escolha: —
recomendado: não
substitutos: kit-suco-laranja-cenoura, kit-suco-manga-laranja
composicao: —
obs: laranja em gomos
```

```
id: kit-suco-abacaxi-hortela
nome: Suco de abacaxi e hortelã
modulo: kit suco · processo: picado
preenche: fruta
local: freezer · embalagem: saquinho
porcao: 180 g
receita: abacaxi-perola 170 g · hortela 10 g
rende: 1 kit
cozinha: armazenamento · 5 min
validade: freezer 90 dias
nivel: 2
refeicoes: —
entra_em: suco
escolha: —
recomendado: não
substitutos: kit-suco-abacaxi-couve, kit-suco-maca-cenoura-beterraba
composicao: —
obs: —
```

```
id: kit-suco-maracuja-manga
nome: Suco de maracujá e manga
modulo: kit suco · processo: picado
preenche: fruta
local: freezer · embalagem: saquinho
porcao: 180 g
receita: polpa-maracuja 2 cubos (40 g) · manga-tommy 140 g
rende: 1 kit
cozinha: armazenamento · 5 min
validade: freezer 90 dias
nivel: 2
refeicoes: —
entra_em: suco
escolha: —
recomendado: não
substitutos: kit-suco-manga-laranja, kit-suco-goiaba-laranja
composicao: —
obs: —
```

### 2.4 Itens novos do Anexo A 1.12 · Porções simples

```
id: patinho-pressao
nome: Patinho em cubos
modulo: porção simples · processo: cozido
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 105 g
receita: patinho-cubos 1 kg · pasta-alho-cebola 2 cubos · oleo a gosto · sal a gosto · agua 500 ml
rende: 6 potes
cozinha: bloco 2 · 40 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: strogonoff-carne, escondidinho
escolha: —
recomendado: não
substitutos: musculo-pressao, carne-de-panela
composicao: origem animal · carne vermelha
obs: com um pouco do caldo
```

```
id: musculo-pressao
nome: Músculo em cubos
modulo: porção simples · processo: cozido
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 105 g
receita: musculo-cubos 1 kg · pasta-alho-cebola 2 cubos · oleo a gosto · sal a gosto · agua 500 ml
rende: 6 potes
cozinha: bloco 2 · 50 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: sopa-legumes-frango
escolha: —
recomendado: não
substitutos: patinho-pressao, carne-de-panela
composicao: origem animal · carne vermelha
obs: 35 a 40 minutos de pressão
```

```
id: frango-desfiado
nome: Frango desfiado
modulo: porção simples · processo: desfiado
preenche: proteína
local: geladeira · embalagem: pote da praça
porcao: 40 g (recheio)
receita: peito-de-frango 500 g · pasta-alho-cebola 1 cubo · sal a gosto
rende: 350 g
cozinha: bloco 2 · 30 min
validade: geladeira 2 a 3 dias · freezer 90 dias (só para assados e sopas)
nivel: 1
refeicoes: —
entra_em: pasta-frango, salpicao, fricasse, arroz-de-forno, sopa-legumes-frango, wrap, tapioca
escolha: Recheios
recomendado: não
substitutos: atum, presunto
composicao: origem animal · frango
obs: do freezer, não é recheio de recheado; validade curta: entra nos primeiros dias do cardápio
```

```
id: galinhada
nome: Galinhada
modulo: porção simples · processo: cozido
preenche: carboidrato + proteína
local: freezer · embalagem: pote de porção
porcao: 280 g
receita: peito-de-frango 750 g · arroz-cru 300 g · pasta-alho-cebola 2 cubos · acafrao-da-terra 1 colher de chá · oleo a gosto · sal a gosto · agua 3 xícaras
rende: 5 potes
cozinha: bloco 2 · 35 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: arroz-com-legumes, arroz
composicao: origem animal · frango
obs: pode usar sobrecoxa no lugar do peito; preenche o almoço sem feijão
```

```
id: arroz-com-legumes
nome: Arroz com legumes
modulo: porção simples · processo: cozido
preenche: carboidrato + vegetal
local: freezer · embalagem: pote de porção
porcao: 195 g
receita: arroz-cru 300 g · cenoura-branqueada 125 g · pasta-alho-cebola 1 cubo · sal a gosto · agua 3 xícaras
rende: 5 potes
cozinha: bloco 2 · 25 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: —
escolha: —
recomendado: não
substitutos: arroz, galinhada
composicao: —
obs: com cenoura, nível 1; com brócolis, couve ou milho e ervilha, nível 2
```

```
id: molho-tomate-legumes
nome: Molho de tomate com legumes
modulo: molho pronto · processo: cozido
preenche: —
local: freezer · embalagem: pote de porção
porcao: 200 g
receita: tomate-italiano 1 kg · cenoura 150 g · abobrinha 150 g · pasta-alho-cebola 2 cubos · azeite 2 colheres de sopa · sal a gosto · oregano a gosto
rende: 4 a 5 potes
cozinha: bloco 2 · 45 min
validade: geladeira 3 a 5 dias · freezer 90 dias
nivel: 2
refeicoes: —
entra_em: macarrao-molho-tomate, panelada
escolha: —
recomendado: não
substitutos: molho-tomate, molho-branco
composicao: —
obs: na panela da carne moída
```

```
id: lentilha-cozida
nome: Lentilha
modulo: porção simples · processo: cozido
preenche: leguminosa
local: freezer · embalagem: pote de porção
porcao: 140 g
receita: lentilha 250 g · pasta-alho-cebola 1 cubo · sal a gosto · agua 3 xícaras
rende: 4 potes
cozinha: bloco 2 · 25 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço
entra_em: sopa-lentilha-calabresa
escolha: —
recomendado: não
substitutos: feijao, grao-de-bico-cozido
composicao: —
obs: sem demolho
```

```
id: grao-de-bico-cozido
nome: Grão-de-bico
modulo: porção simples · processo: cozido
preenche: leguminosa
local: freezer · embalagem: pote de porção
porcao: 140 g
receita: grao-de-bico 250 g · sal a gosto · agua até 2 dedos acima
rende: 4 potes
cozinha: bloco 1 (demolho) e bloco 3 · 30 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: salada
escolha: —
recomendado: não
substitutos: feijao, lentilha-cozida
composicao: —
obs: para salada, guardar sem o caldo
```

```
id: batata-doce-rodelas
nome: Batata-doce em rodelas
modulo: porção simples · processo: cozido
preenche: carboidrato
local: freezer · embalagem: pote de porção
porcao: 170 g
receita: batata-doce 1 kg · sal a gosto
rende: 5 potes
cozinha: bloco 2 · 20 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: —
escolha: —
recomendado: não
substitutos: mandioca-cozida, arroz
composicao: —
obs: —
```

```
id: mandioca-cozida
nome: Mandioca cozida
modulo: porção simples · processo: cozido
preenche: carboidrato
local: freezer · embalagem: pote de porção
porcao: 170 g
receita: mandioca 1 kg · sal a gosto
rende: 4 potes
cozinha: bloco 2 · 25 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: escondidinho
escolha: —
recomendado: não
substitutos: batata-doce-rodelas, pure
composicao: —
obs: tirar o fio do meio
```

```
id: milho-debulhado
nome: Milho verde
modulo: porção simples · processo: cozido
preenche: vegetal
local: freezer · embalagem: saquinho
porcao: 100 g
receita: milho-verde 1 espiga
rende: 100 g por espiga
cozinha: bloco 2 · 30 min
validade: geladeira 2 a 3 dias · freezer 90 dias
nivel: 2
refeicoes: —
entra_em: fricasse, arroz-de-forno, salpicao, arroz-com-legumes
escolha: —
recomendado: não
substitutos: ervilha-congelada, milho-lata
composicao: —
obs: —
```

```
id: berinjela-assada
nome: Berinjela assada
modulo: porção simples · processo: assado
preenche: vegetal
local: freezer · embalagem: pote de porção
porcao: 100 g
receita: berinjela 1 unidade · azeite a gosto · sal a gosto
rende: 3 potes
cozinha: bloco 2 · 25 min
validade: geladeira 5 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: —
escolha: —
recomendado: não
substitutos: abobrinha-branqueada, cenoura-branqueada
composicao: —
obs: —
```

```
id: bife-fino-cru
nome: Bife fino
modulo: porção simples · processo: cru
preenche: proteína
local: freezer · embalagem: saquinho
porcao: 150 g cru
receita: bife-fino 150 g
rende: 1 porção
cozinha: bloco 2 · 5 min (porcionar)
validade: freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: —
escolha: —
recomendado: não
substitutos: hamburguer, file-tilapia-cru
composicao: origem animal · carne vermelha
obs: sem tempero; descongelar na geladeira, grelhar de 1 a 2 minutos de cada lado e salgar na hora
```

```
id: file-tilapia-cru
nome: Filé de tilápia
modulo: porção simples · processo: cru
preenche: proteína
local: freezer · embalagem: saquinho
porcao: 150 g cru
receita: file-tilapia 150 g
rende: 1 porção
cozinha: bloco 2 · 5 min (porcionar)
validade: freezer 90 dias
nivel: 3
refeicoes: almoço, janta
entra_em: —
escolha: —
recomendado: não
substitutos: peixe-posta-assado, bife-fino-cru
composicao: origem animal · peixe ou frutos do mar
obs: sem tempero; descongelar, secar e grelhar de 3 a 4 minutos de cada lado
```

```
id: linguica-toscana-crua
nome: Linguiça toscana
modulo: porção simples · processo: cru
preenche: proteína
local: freezer · embalagem: saquinho
porcao: 2 gomos
receita: linguica-toscana 2 gomos
rende: 1 porção
cozinha: bloco 2 · 5 min (porcionar)
validade: freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: panelada
escolha: —
recomendado: não
substitutos: hamburguer, bife-fino-cru
composicao: origem animal · porco
obs: direto do freezer, tampada, em fogo médio, por cerca de 15 minutos
```

```
id: peixe-posta-assado
nome: Peixe em posta assado
modulo: porção simples · processo: assado
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 105 g
receita: peixe-posta 150 g por porção · sal (cura úmida)
rende: 1 pote a cada 150 g crus
cozinha: bloco 1 (cura) e bloco 3 · 25 min
validade: geladeira 2 dias · freezer 90 dias
nivel: 3
refeicoes: almoço, janta
entra_em: —
escolha: —
recomendado: não
substitutos: file-tilapia-cru, frango-grelhado
composicao: origem animal · peixe ou frutos do mar
obs: merluza ou cação
```

```
id: coxa-sobrecoxa-assada
nome: Coxa e sobrecoxa assadas
modulo: porção simples · processo: assado
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 105 g sem osso
receita: coxa-sobrecoxa-osso 1 kg · sal 15 g (cura seca)
rende: 4 potes
cozinha: bloco 1 (cura) e bloco 3 · 50 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: frango-desfiado
escolha: —
recomendado: não
substitutos: sobrecoxa-assada, frango-grelhado
composicao: origem animal · frango
obs: desossar depois de esfriar
```

```
id: cheiro-verde-cubo
nome: Cheiro-verde em cubo
modulo: pasta de tempero · processo: picado
preenche: —
local: freezer · embalagem: cubo
porcao: 1 cubo
receita: cheiro-verde 1 maço · azeite 1 colher de chá por cubo
rende: 1 forminha
cozinha: armazenamento · 10 min
validade: freezer 90 dias
nivel: 2
refeicoes: —
entra_em: panelada, sopa, pate-ovo, pate-ricota, galinhada
escolha: —
recomendado: não
substitutos: pasta-alho-cebola, oregano
composicao: —
obs: —
```

```
id: polpa-maracuja
nome: Polpa de maracujá
modulo: porção simples · processo: triturado
preenche: fruta
local: freezer · embalagem: cubo
porcao: 1 cubo (cerca de 20 g)
receita: maracuja 1 unidade
rende: 2 cubos
cozinha: armazenamento · 5 min
validade: freezer 90 dias
nivel: 2
refeicoes: —
entra_em: kit-suco-maracuja-manga
escolha: —
recomendado: não
substitutos: polpa-fruta, laranja-pera
composicao: —
obs: bater só 3 segundos, para soltar as sementes, e coar
```

```
id: creme-abobora
nome: Creme de abóbora
modulo: porção simples · processo: cozido
preenche: vegetal + carboidrato
local: freezer · embalagem: pote de porção
porcao: 300 g
receita: abobora-cabotia 1 kg · pasta-alho-cebola 2 cubos · sal a gosto · agua 600 ml
rende: 4 potes
cozinha: bloco 2 · 30 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 3
refeicoes: janta
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: sopa-legumes-frango, caldo-verde
composicao: —
obs: servir com frango desfiado ou ovo cozido; a mandioquinha pode ser usada no lugar da abóbora
```

### 2.5 Itens novos do Anexo A 1.12 · Recheios prontos

```
id: pate-atum
nome: Patê de atum
modulo: — · processo: amassado
preenche: proteína
local: geladeira · embalagem: pote da praça
porcao: 40 g
receita: atum 1 lata · maionese 2 colheres de sopa · cenoura-ralada 2 colheres de sopa
rende: 4 porções
cozinha: bloco 3 · 5 min
validade: geladeira 2 dias
nivel: 1
refeicoes: —
entra_em: lanche-natural, wrap, tapioca, torrada
escolha: Recheios
recomendado: não
substitutos: pasta-frango, pate-ovo
composicao: origem animal · peixe ou frutos do mar · contém ovo
obs: pode usar requeijão no lugar da maionese (aí contém leite)
```

```
id: pasta-frango
nome: Pasta de frango
modulo: — · processo: desfiado
preenche: proteína
local: geladeira · embalagem: pote da praça
porcao: 40 g
receita: frango-desfiado 150 g · requeijao 2 colheres de sopa · sal a gosto
rende: 4 porções
cozinha: bloco 3 · 5 min
validade: geladeira 2 a 3 dias
nivel: 1
refeicoes: —
entra_em: lanche-natural, wrap, tapioca, torrada
escolha: Recheios
recomendado: não
substitutos: pate-atum, pate-ovo
composicao: origem animal · frango · contém leite
obs: —
```

```
id: pate-ovo
nome: Patê de ovo
modulo: — · processo: picado
preenche: proteína leve
local: geladeira · embalagem: pote da praça
porcao: 40 g
receita: ovos-cozidos 3 · maionese 1 colher de sopa · sal a gosto · cheiro-verde a gosto (opcional)
rende: 4 porções
cozinha: bloco 3 · 5 min
validade: geladeira 2 dias
nivel: 1
refeicoes: —
entra_em: lanche-natural, wrap, tapioca, torrada
escolha: Recheios
recomendado: não
substitutos: pate-ricota, pasta-frango
composicao: origem animal · contém ovo
obs: serve na ceia; o cheiro-verde é do nível 2 e entra quando houver
```

```
id: pate-ricota
nome: Patê de ricota
modulo: — · processo: amassado
preenche: proteína leve
local: geladeira · embalagem: pote da praça
porcao: 40 g
receita: ricota 100 g · azeite 1 colher de sopa · sal a gosto · cheiro-verde a gosto
rende: 3 porções
cozinha: bloco 3 · 5 min
validade: geladeira 3 dias
nivel: 2
refeicoes: —
entra_em: lanche-natural, wrap, tapioca, torrada
escolha: Recheios
recomendado: não
substitutos: pate-ovo, queijo-minas-frescal
composicao: origem animal · contém leite
obs: serve na ceia
```

```
id: salpicao
nome: Salpicão
modulo: — · processo: desfiado
preenche: proteína + vegetal
local: geladeira · embalagem: pote da praça
porcao: 150 g
receita: frango-desfiado 150 g · cenoura-ralada 50 g · maca-gala ½ unidade · maionese 2 colheres de sopa
rende: 2 porções
cozinha: bloco 3 · 10 min
validade: geladeira 2 dias
nivel: 1
refeicoes: janta
entra_em: wrap
escolha: Recheios
recomendado: não
substitutos: pasta-frango, pate-atum
composicao: origem animal · frango · contém ovo
obs: janta fria com torrada; a partir do nível 2, pode levar 2 colheres de sopa de milho (Anexo A 1.14)
```

### 2.6 Itens novos do Anexo A 1.12 · Assados de forma e salgados

```
id: escondidinho
nome: Escondidinho de carne moída
modulo: assado de forma · processo: gratinado
preenche: carboidrato + proteína
local: freezer · embalagem: pote de porção
porcao: 140 g
receita: pure 550 g · acem-moido 500 g · molho-tomate 100 g · parmesao-ralado 2 colheres de sopa
rende: 7 pedaços
cozinha: bloco 2 · 45 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 3
refeicoes: almoço, lanche da tarde
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: torta-frango, quibe-de-forno
composicao: origem animal · carne vermelha · contém leite
obs: purê de mandioca, batata ou abóbora; a carne pode ser carne de panela desfiada
```

```
id: empadao-frango
nome: Empadão de frango
modulo: assado de forma · processo: assado
preenche: carboidrato + proteína + vegetal
local: freezer · embalagem: pote de porção
porcao: 140 g
receita: ovos 3 · leite-integral ½ xícara · oleo ½ xícara · farinha-de-trigo 2 xícaras · fermento-quimico 1 colher de sopa · peito-de-frango 250 g · cenoura-ralada 100 g · tomate-salada 100 g · sal a gosto
rende: 6 a 7 pedaços
cozinha: bloco 2 · 55 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 3
refeicoes: lanche da tarde
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: torta-frango, fricasse
composicao: contém ovo · contém leite · contém glúten · origem animal · frango
obs: massa da torta com ½ xícara a menos de leite
```

```
id: fricasse
nome: Fricassê de frango
modulo: assado de forma · processo: gratinado
preenche: proteína + vegetal
local: freezer · embalagem: pote de porção
porcao: 140 g
receita: frango-desfiado 350 g · molho-branco 1 pote (265 g) · milho-debulhado 100 g · mucarela 100 g
rende: 6 pedaços
cozinha: bloco 3 · 30 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 3
refeicoes: almoço, lanche da tarde
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: escondidinho, torta-frango
composicao: origem animal · frango · contém leite · contém glúten
obs: 350 g de frango desfiado saem de 500 g de peito cru
```

```
id: fritada
nome: Fritada de legumes
modulo: assado de forma · processo: assado
preenche: proteína leve + vegetal
local: freezer · embalagem: pote de porção
porcao: 140 g
receita: ovos 8 · cenoura-branqueada 2 potes · mucarela 100 g · sal a gosto
rende: 4 a 5 pedaços
cozinha: bloco 2 · 40 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 3
refeicoes: café, lanche da tarde, janta
entra_em: fritada-forminha
escolha: Pratos prontos do freezer
recomendado: não
substitutos: torta-frango, pate-ovo
composicao: origem animal · contém ovo · contém leite
obs: qualquer legume branqueado serve
```

```
id: bolo-banana
nome: Bolo de banana
modulo: assado de forma · processo: assado
preenche: carboidrato + fruta
local: freezer · embalagem: saquinho
porcao: 60 g (1 fatia)
receita: banana-nanica 3 unidades · ovos 3 · farelo-de-aveia 1 xícara · fermento-quimico 1 colher de sopa
rende: 8 fatias
cozinha: bloco 2 · 40 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 3
refeicoes: lanche da tarde, ceia
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: bolo-cenoura, panqueca-banana
composicao: origem animal · contém ovo · contém glúten
obs: 1 fatia na ceia, 2 no lanche; o farelo de aveia pode ter traços de glúten
```

```
id: bolo-cenoura
nome: Bolo de cenoura
modulo: assado de forma · processo: assado
preenche: carboidrato
local: freezer · embalagem: saquinho
porcao: 60 g (1 fatia)
receita: cenoura 300 g · ovos 3 · oleo ½ xícara · acucar 1 xícara · farinha-de-trigo 2 xícaras · fermento-quimico 1 colher de sopa
rende: 15 fatias
cozinha: bloco 2 · 50 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 3
refeicoes: lanche da tarde, ceia
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: bolo-banana, panqueca-banana
composicao: origem animal · contém ovo · contém glúten
obs: 1 fatia na ceia, 2 no lanche
```

```
id: arroz-de-forno
nome: Arroz de forno
modulo: assado de forma · processo: gratinado
preenche: carboidrato + proteína
local: freezer · embalagem: pote de porção
porcao: 140 g
receita: arroz 3 potes (510 g) · frango-desfiado 250 g · molho-tomate 1 pote · milho-debulhado 100 g · mucarela 100 g · parmesao-ralado 2 colheres de sopa
rende: 8 pedaços
cozinha: bloco 3 · 30 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 3
refeicoes: almoço, janta
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: escondidinho, fricasse
composicao: origem animal · frango · contém leite
obs: pode usar molho branco (aí contém glúten); aproveita o arroz que sobrou
```

```
id: pastel-forno
nome: Pastel de forno
modulo: salgado assado · processo: assado
preenche: carboidrato + proteína
local: freezer · embalagem: saquinho
porcao: 3 unidades
receita: massa-pastel 1 pacote · carne-moida 1 pote · ovos 1 (pincelar)
rende: cerca de 12 unidades
cozinha: bloco 3 · 30 min
validade: freezer 90 dias
nivel: 3
refeicoes: lanche da tarde
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: enroladinho, pao-de-queijo
composicao: contém glúten · contém ovo · origem animal · carne vermelha
obs: recheio também de frango desfiado ou frios com queijo (a composição muda); pode congelar cru
```

### 2.7 Itens novos do Anexo A 1.12 · Paneladas e moldados

```
id: bolonhesa
nome: Molho bolonhesa
modulo: panelada · processo: cozido
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 215 g
receita: molho-tomate 1 pote (200 g) · carne-moida 2 potes (230 g)
rende: 2 potes
cozinha: bloco 2 · 10 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 1
refeicoes: almoço, janta
entra_em: macarrao-bolonhesa, lasanha, nhoque
escolha: Pratos prontos do freezer
recomendado: não
substitutos: carne-moida-molho, almondegas-molho
composicao: origem animal · carne vermelha
obs: —
```

```
id: strogonoff-carne
nome: Strogonoff de carne
modulo: panelada · processo: cozido
preenche: proteína
local: freezer · embalagem: pote de porção
porcao: 200 g
receita: patinho-pressao 3 potes · molho-branco 1 pote · molho-tomate 1 colher de sopa
rende: 3 potes
cozinha: bloco 2 · 10 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: strogonoff-frango, frango-molho-branco
composicao: origem animal · carne vermelha · contém leite · contém glúten
obs: —
```

```
id: frango-xadrez
nome: Frango xadrez
modulo: panelada · processo: refogado
preenche: proteína + vegetal
local: freezer · embalagem: pote de porção
porcao: 200 g
receita: peito-de-frango 500 g · pimentao 1 unidade · cebola ½ unidade · shoyu 3 colheres de sopa · farinha-de-trigo 1 colher de sopa · agua 200 ml · amendoim-torrado 2 colheres de sopa · sal a gosto
rende: 3 potes
cozinha: bloco 2 · 25 min
validade: geladeira 3 dias · freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: frango-curry, strogonoff-frango
composicao: origem animal · frango · contém glúten · contém amendoim ou castanhas
obs: frango sem cura; o shoyu também leva trigo
```

```
id: hamburguer-atum
nome: Hambúrguer de atum
modulo: moldado · processo: cru
preenche: proteína
local: freezer · embalagem: saquinho
porcao: 140 g
receita: atum 2 latas · ovos 1 · farelo-de-aveia 3 colheres de sopa · cheiro-verde a gosto
rende: 2 discos
cozinha: bloco 2 · 10 min
validade: freezer 90 dias
nivel: 2
refeicoes: almoço, janta
entra_em: wrap
escolha: Pratos prontos do freezer
recomendado: não
substitutos: hamburguer, hamburguer-frango
composicao: origem animal · peixe ou frutos do mar · contém ovo · contém glúten
obs: do freezer para a frigideira untada, 3 a 4 minutos de cada lado
```

### 2.8 Itens novos do Anexo A 1.12 · Doces

```
id: panqueca-banana
nome: Panqueca de banana
modulo: — · processo: grelhado
preenche: carboidrato + proteína leve + fruta
local: freezer · embalagem: saquinho
porcao: 3 a 4 panquecas
receita: banana-nanica 1 unidade · ovos 2 · farelo-de-aveia 2 colheres de sopa
rende: 1 porção
cozinha: bloco 2 · 10 min
validade: freezer 90 dias
nivel: 2
refeicoes: café, ceia
entra_em: —
escolha: Pratos prontos do freezer
recomendado: não
substitutos: bolo-banana, crepioca-banana
composicao: origem animal · contém ovo · contém glúten
obs: esquentar na frigideira ou no micro-ondas por cerca de 40 segundos
```

---

## 3. Pratos na hora

### 3.1 Nível 1 · Bebidas

```
id: cafe-com-leite
nome: Café com leite
curto: Café com leite
modulo: —
refeicoes: café, lanche da manhã, lanche da tarde
preenche: bebida + proteína leve
componentes: leite-integral 150 ml · cafe-soluvel 1 colher de chá · acucar a gosto
usa_freezer: —
tempo: 2 min
nivel: 1
variacoes: leite-achocolatado
composicao: contém leite · origem animal
```

```
id: leite-achocolatado
nome: Leite com achocolatado
curto: Achocolatado
modulo: —
refeicoes: café
preenche: bebida + proteína leve
componentes: leite-integral 200 ml · achocolatado 2 colheres de sopa
usa_freezer: —
tempo: 2 min
nivel: 1
variacoes: cafe-com-leite
composicao: contém leite · origem animal
```

```
id: vitamina-frutas
nome: Vitamina de frutas
curto: Vitamina
modulo: vitamina
refeicoes: lanche da manhã, lanche da tarde
preenche: bebida + fruta + proteína leve
componentes: leite-integral 250 ml · kit-vitamina-base 1 · farelo-de-aveia 2 colheres de sopa (opcional)
usa_freezer: kit-vitamina-base 1
tempo: 3 min
nivel: 1
variacoes: —
composicao: contém leite · contém glúten · origem animal
```

```
id: suco-polpa
nome: Suco de polpa
curto: Suco de polpa
modulo: suco
refeicoes: almoço
preenche: bebida + fruta
componentes: polpa-fruta 1 · agua 300 ml · acucar a gosto
usa_freezer: polpa-fruta 1
tempo: 3 min
nivel: 1
variacoes: suco-laranja, suco-limao
composicao: —
```

```
id: suco-laranja
nome: Suco de laranja
curto: Suco de laranja
modulo: suco
refeicoes: almoço
preenche: bebida + fruta
componentes: laranja-pera 2 unidades · acucar a gosto
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: suco-polpa, suco-limao
composicao: —
```

```
id: suco-limao
nome: Suco de limão
curto: Suco de limão
modulo: suco
refeicoes: almoço
preenche: bebida + fruta
componentes: limao-tahiti 1 unidade · agua 300 ml · acucar a gosto
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: suco-polpa, suco-laranja
composicao: —
```

### 3.2 Nível 1 · Café, lanches e ceia

```
id: ovos-mexidos
nome: 2 ovos mexidos
curto: Ovos mexidos
modulo: prato de ovos
refeicoes: café, janta, ceia
preenche: proteína leve
componentes: ovos 2 · sal a gosto
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: prato-ovos-cozidos, omelete-mucarela
composicao: contém ovo · origem animal
```

```
id: prato-ovos-cozidos
nome: 2 ovos cozidos
curto: Ovos cozidos
modulo: prato de ovos
refeicoes: café, ceia
preenche: proteína leve
componentes: ovos-cozidos 1 porção
usa_freezer: —
tempo: 1 min
nivel: 1
variacoes: ovos-mexidos, omelete-mucarela
composicao: contém ovo · origem animal
```

```
id: omelete-mucarela
nome: Omelete de 2 ovos com muçarela
curto: Omelete
modulo: prato de ovos
refeicoes: café, janta
preenche: proteína leve
componentes: ovos 2 · mucarela 30 g · sal a gosto
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: ovos-mexidos, prato-ovos-cozidos
composicao: contém ovo · contém leite · origem animal
```

```
id: pao-manteiga
nome: Pão de forma com manteiga
curto: Pão com manteiga
modulo: recheado
refeicoes: café
preenche: carboidrato
componentes: pao-de-forma 2 fatias · manteiga 1 colher de chá
usa_freezer: —
tempo: 2 min
nivel: 1
variacoes: torrada-manteiga, tapioca-manteiga
composicao: contém glúten · contém leite · origem animal
```

```
id: torrada-manteiga
nome: Torrada com manteiga
curto: Torrada
modulo: recheado
refeicoes: café, lanche da manhã
preenche: carboidrato
componentes: torrada 3 unidades · manteiga 1 colher de chá
usa_freezer: —
tempo: 2 min
nivel: 1
variacoes: torrada-mucarela, pao-manteiga
composicao: contém glúten · contém leite · origem animal
```

```
id: torrada-mucarela
nome: Torrada com muçarela
curto: Torrada com queijo
modulo: recheado
refeicoes: café, lanche da manhã, ceia
preenche: carboidrato + proteína leve
componentes: torrada 3 unidades · mucarela 30 g
usa_freezer: —
tempo: 2 min
nivel: 1
variacoes: torrada-manteiga, pao-manteiga
composicao: contém glúten · contém leite · origem animal
```

```
id: tapioca-manteiga
nome: Tapioca com manteiga
curto: Tapioca
modulo: recheado
refeicoes: café
preenche: carboidrato
componentes: tapioca-goma 50 g · manteiga 1 colher de chá
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: tapioca-mucarela, tapioca-ovo
composicao: contém leite · origem animal
```

```
id: tapioca-mucarela
nome: Tapioca com muçarela
curto: Tapioca com queijo
modulo: recheado
refeicoes: café, lanche da manhã, lanche da tarde, ceia
preenche: carboidrato + proteína leve
componentes: tapioca-goma 50 g · mucarela 30 g
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: tapioca-presunto-mucarela, tapioca-ovo, crepioca-banana
composicao: contém leite · origem animal
```

```
id: tapioca-presunto-mucarela
nome: Tapioca com presunto e muçarela
curto: Tapioca de presunto
modulo: recheado
refeicoes: café, lanche da manhã, lanche da tarde
preenche: carboidrato + proteína
componentes: tapioca-goma 50 g · presunto 40 g · mucarela 30 g
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: tapioca-mucarela, tapioca-ovo
composicao: contém leite · origem animal · porco
```

```
id: tapioca-ovo
nome: Tapioca com ovo mexido
curto: Tapioca com ovo
modulo: recheado
refeicoes: café, lanche da manhã, lanche da tarde, ceia
preenche: carboidrato + proteína leve
componentes: tapioca-goma 50 g · ovos 1
usa_freezer: —
tempo: 7 min
nivel: 1
variacoes: tapioca-mucarela, crepioca-banana
composicao: contém ovo · origem animal
```

```
id: crepioca-banana
nome: Crepioca com banana
curto: Crepioca
modulo: recheado
refeicoes: café, ceia
preenche: carboidrato + proteína leve + fruta
componentes: tapioca-goma 30 g · ovos 1 · banana-nanica 1 unidade
usa_freezer: —
tempo: 7 min
nivel: 1
variacoes: crepioca-maca, tapioca-mucarela
composicao: contém ovo · origem animal
```

```
id: crepioca-maca
nome: Crepioca com maçã
curto: Crepioca
modulo: recheado
refeicoes: café, ceia
preenche: carboidrato + proteína leve + fruta
componentes: tapioca-goma 30 g · ovos 1 · maca-gala ½ unidade
usa_freezer: —
tempo: 7 min
nivel: 1
variacoes: crepioca-banana, tapioca-mucarela
composicao: contém ovo · origem animal
```

```
id: cuscuz-ovo
nome: Cuscuz com ovo
curto: Cuscuz
modulo: recheado
refeicoes: café, lanche da manhã, lanche da tarde
preenche: carboidrato + proteína leve
componentes: flocao-de-milho 70 g · ovos 1 · sal a gosto
usa_freezer: —
tempo: 15 min
nivel: 1
variacoes: cuscuz-ovo-mucarela
composicao: contém ovo · origem animal
```

```
id: cuscuz-ovo-mucarela
nome: Cuscuz com ovo e muçarela
curto: Cuscuz com queijo
modulo: recheado
refeicoes: café, lanche da manhã, lanche da tarde, ceia
preenche: carboidrato + proteína leve
componentes: flocao-de-milho 70 g · ovos 1 · mucarela 30 g · sal a gosto
usa_freezer: —
tempo: 15 min
nivel: 1
variacoes: cuscuz-ovo
composicao: contém ovo · contém leite · origem animal
```

```
id: lanche-natural-presunto
nome: Lanche natural de presunto, cenoura ralada, alface e tomate com maionese
curto: Lanche natural
modulo: recheado
refeicoes: lanche da tarde, janta
preenche: carboidrato + proteína + vegetal
componentes: pao-de-forma 2 fatias · presunto 40 g · cenoura-ralada 20 g · alface 2 folhas · tomate-salada 30 g · maionese 1 colher de sopa
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: lanche-natural-repolho-maca
composicao: contém glúten · contém ovo · origem animal · porco
```

```
id: lanche-natural-repolho-maca
nome: Lanche natural de presunto, repolho e maçã com maionese
curto: Lanche natural
modulo: recheado
refeicoes: lanche da tarde, janta
preenche: carboidrato + proteína + vegetal
componentes: pao-de-forma 2 fatias · presunto 40 g · repolho 30 g · maca-gala ¼ unidade · maionese 1 colher de sopa
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: lanche-natural-presunto
composicao: contém glúten · contém ovo · origem animal · porco
```

```
id: banana-farinha-lactea
nome: Banana com farinha láctea
curto: Banana com farinha láctea
modulo: —
refeicoes: café
preenche: carboidrato + fruta
componentes: banana-nanica 1 unidade · farinha-lactea 2 colheres de sopa
usa_freezer: —
tempo: 2 min
nivel: 1
variacoes: —
composicao: contém leite · contém glúten · origem animal
```

```
id: mingau
nome: Mingau de aveia com banana e 2 ovos cozidos
curto: Mingau
modulo: mingau
refeicoes: café, ceia
preenche: carboidrato + doce + proteína leve
componentes: leite-integral 200 ml · farelo-de-aveia 3 colheres de sopa · banana-nanica ½ unidade · ovos-cozidos 1 porção · sal 1 pitada
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: mingau-aveia-flocos, mingau-fuba
composicao: contém leite · contém glúten · contém ovo · origem animal
```

### 3.3 Nível 1 · Almoço e janta

```
id: arroz-feijao-frango
nome: Arroz, feijão e frango grelhado
curto: Arroz, feijão e frango
modulo: —
refeicoes: almoço
preenche: carboidrato + leguminosa + proteína
componentes: arroz 1 pote · feijao 1 pote · frango-grelhado 1 pote
usa_freezer: arroz 1 · feijao 1 · frango-grelhado 1
tempo: 5 min
nivel: 1
variacoes: arroz-feijao-hamburguer, arroz-feijao-carne-moida
composicao: origem animal · frango
```

```
id: arroz-feijao-hamburguer
nome: Arroz, feijão e hambúrguer
curto: Arroz, feijão e hambúrguer
modulo: —
refeicoes: almoço
preenche: carboidrato + leguminosa + proteína
componentes: arroz 1 pote · feijao 1 pote · hamburguer 1
usa_freezer: arroz 1 · feijao 1 · hamburguer 1
tempo: 12 min
nivel: 1
variacoes: arroz-feijao-frango, arroz-feijao-carne-moida
composicao: origem animal · carne vermelha · contém ovo · contém glúten
```

```
id: arroz-feijao-carne-moida
nome: Arroz, feijão e carne moída
curto: Arroz, feijão e carne moída
modulo: —
refeicoes: almoço
preenche: carboidrato + leguminosa + proteína
componentes: arroz 1 pote · feijao 1 pote · carne-moida 1 pote
usa_freezer: arroz 1 · feijao 1 · carne-moida 1
tempo: 5 min
nivel: 1
variacoes: arroz-feijao-frango, arroz-feijao-hamburguer
composicao: origem animal · carne vermelha
```

```
id: arroz-frango-molho-branco
nome: Arroz e frango ao molho branco
curto: Frango ao molho branco
modulo: —
refeicoes: almoço, janta
preenche: carboidrato + proteína
componentes: arroz 1 pote · frango-molho-branco 1 pote
usa_freezer: arroz 1 · frango-molho-branco 1
tempo: 5 min
nivel: 1
variacoes: arroz-feijao-frango
composicao: origem animal · frango · contém leite · contém glúten
```

```
id: macarrao-molho-tomate-carne
nome: Macarrão ao molho de tomate com carne moída
curto: Macarrão com carne
modulo: massa na hora
refeicoes: almoço, janta
preenche: carboidrato + proteína
componentes: espaguete 80 g · molho-tomate ½ pote · carne-moida 1 pote
usa_freezer: molho-tomate ½ · carne-moida 1
tempo: 15 min
nivel: 1
variacoes: macarrao-molho-branco-frango, macarrao-bolonhesa
composicao: contém glúten · origem animal · carne vermelha
```

```
id: macarrao-molho-branco-frango
nome: Macarrão ao molho branco com frango
curto: Macarrão com frango
modulo: massa na hora
refeicoes: almoço, janta
preenche: carboidrato + proteína
componentes: espaguete 80 g · molho-branco ½ pote · frango-grelhado 1 pote
usa_freezer: molho-branco ½ · frango-grelhado 1
tempo: 15 min
nivel: 1
variacoes: macarrao-molho-tomate-carne, macarrao-bolonhesa
composicao: contém glúten · contém leite · origem animal · frango
```

```
id: macarrao-bolonhesa
nome: Macarrão à bolonhesa
curto: Macarrão à bolonhesa
modulo: massa na hora
refeicoes: almoço, janta
preenche: carboidrato + proteína
componentes: espaguete 80 g · bolonhesa 1 pote
usa_freezer: bolonhesa 1
tempo: 15 min
nivel: 1
variacoes: macarrao-molho-tomate-carne, macarrao-molho-branco-frango
composicao: contém glúten · origem animal · carne vermelha
```

```
id: polenta-hamburguer
nome: Hambúrguer e polenta
curto: Hambúrguer e polenta
modulo: —
refeicoes: almoço, janta
preenche: carboidrato + proteína
componentes: polenta 1 pote · hamburguer 1
usa_freezer: polenta 1 · hamburguer 1
tempo: 12 min
nivel: 1
variacoes: omelete-polenta
composicao: origem animal · carne vermelha · contém ovo · contém glúten
```

```
id: omelete-polenta
nome: Omelete de 2 ovos com muçarela e polenta
curto: Omelete e polenta
modulo: prato de ovos
refeicoes: janta
preenche: carboidrato + proteína leve
componentes: ovos 2 · mucarela 30 g · polenta 1 pote
usa_freezer: polenta 1
tempo: 10 min
nivel: 1
variacoes: polenta-hamburguer, omelete-mucarela
composicao: contém ovo · contém leite · origem animal
```

```
id: salada-repolho-maca-atum
nome: Salada de repolho, cenoura ralada e maçã com atum, e torrada
curto: Salada com atum
modulo: salada
refeicoes: janta
preenche: vegetal + proteína + carboidrato
componentes: repolho 50 g · cenoura-ralada 30 g · maca-gala ½ unidade · atum 1 lata · molho-salada-pronto 1 colher de sopa · torrada 3 unidades
usa_freezer: —
tempo: 10 min
nivel: 1
variacoes: —
composicao: origem animal · peixe ou frutos do mar · contém glúten
```

```
id: caldo-verde
nome: Caldo verde
curto: Caldo verde
modulo: sopa
refeicoes: janta
preenche: carboidrato + vegetal + proteína
componentes: pre-pure-batata 30 g · couve 30 g · pasta-alho-cebola 1 cubo · calabresa 50 g · ovos-cozidos ½ porção · agua 300 ml · azeite a gosto
usa_freezer: couve 30 g · pasta-alho-cebola 1
tempo: 10 min
nivel: 1
variacoes: —
composicao: origem animal · porco · contém ovo
```

### 3.4 Nível 1 · Acompanhamentos de vegetal (almoço e janta)

```
id: acomp-cenoura
nome: Cenoura
curto: Cenoura
modulo: —
refeicoes: almoço, janta
preenche: vegetal
componentes: cenoura-branqueada 1 pote
usa_freezer: cenoura-branqueada 1
tempo: 5 min
nivel: 1
variacoes: salada-alface-tomate, salada-repolho-cenoura
composicao: —
```

```
id: salada-alface-tomate
nome: Salada de alface e tomate
curto: Salada de alface e tomate
modulo: salada
refeicoes: almoço, janta
preenche: vegetal
componentes: alface 3 folhas · tomate-salada 100 g · azeite 1 colher de sopa · limao-tahiti ½ unidade (opcional) · sal a gosto
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: salada-repolho-cenoura, acomp-cenoura
composicao: —
```

```
id: salada-repolho-cenoura
nome: Salada de repolho e cenoura ralada com crisps de calabresa
curto: Salada de repolho
modulo: salada
refeicoes: almoço, janta
preenche: vegetal
componentes: repolho 50 g · cenoura-ralada 30 g · crisps-calabresa 1 colher de sopa (opcional) · azeite 1 colher de sopa · sal a gosto
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: salada-alface-tomate, acomp-cenoura
composicao: origem animal · porco
```

### 3.5 Itens novos do Anexo A 1.12

```
id: mingau-aveia-flocos
nome: Mingau de aveia em flocos
curto: Mingau de aveia
modulo: mingau
refeicoes: café, ceia
preenche: carboidrato + doce
componentes: leite-integral 200 ml · aveia-em-flocos 30 g · sal 1 pitada
usa_freezer: —
tempo: 5 min
nivel: 1
variacoes: mingau, mingau-fuba
composicao: contém leite · contém glúten · origem animal
```

```
id: mingau-fuba
nome: Mingau de fubá
curto: Mingau de fubá
modulo: mingau
refeicoes: café, ceia
preenche: carboidrato + doce
componentes: leite-integral 200 ml · fuba 20 g · acucar a gosto
usa_freezer: —
tempo: 10 min
nivel: 1
variacoes: mingau, mingau-aveia-flocos
composicao: contém leite · origem animal
```

```
id: aveia-dormida
nome: Aveia dormida com fruta
curto: Aveia dormida
modulo: mingau
refeicoes: café, lanche da manhã
preenche: carboidrato + fruta
componentes: leite-integral 150 ml · aveia-em-flocos 30 g · mel 1 colher de chá · mamao-picado 50 g
usa_freezer: —
tempo: 3 min (na véspera)
nivel: 1
variacoes: mingau-aveia-flocos, mingau
composicao: contém leite · contém glúten · origem animal
```

```
id: baiao-de-dois
nome: Baião de dois
curto: Baião de dois
modulo: —
refeicoes: almoço
preenche: carboidrato + leguminosa
componentes: arroz 1 pote · feijao ½ pote · crisps-calabresa 1 colher de sopa · mucarela 30 g
usa_freezer: arroz 1 · feijao ½
tempo: 5 min
nivel: 1
variacoes: feijao-tropeiro
composicao: origem animal · porco · contém leite
```

```
id: feijao-tropeiro
nome: Feijão tropeiro
curto: Feijão tropeiro
modulo: —
refeicoes: almoço
preenche: leguminosa + carboidrato + vegetal
componentes: feijao 1 pote · farofa 3 colheres de sopa · crisps-calabresa 1 colher de sopa · ovos 1 · couve 20 g
usa_freezer: feijao 1 · couve 20 g
tempo: 5 min
nivel: 2
variacoes: baiao-de-dois
composicao: origem animal · porco · contém ovo · contém leite
```

```
id: sopa-legumes-frango
nome: Sopa de legumes com frango
curto: Sopa de legumes
modulo: sopa
refeicoes: janta
preenche: carboidrato + vegetal + proteína
componentes: kit-sopa 1 · frango-desfiado 100 g · padre-nosso 30 g · pasta-alho-cebola 1 cubo · agua 400 ml
usa_freezer: kit-sopa 1
tempo: 15 min
nivel: 3
variacoes: caldo-verde, sopa-lentilha-calabresa
composicao: origem animal · frango · contém glúten
```

```
id: sopa-lentilha-calabresa
nome: Sopa de lentilha com calabresa
curto: Sopa de lentilha
modulo: sopa
refeicoes: janta
preenche: leguminosa + vegetal + proteína
componentes: lentilha-cozida 1 pote · calabresa 50 g · cenoura 60 g · pasta-alho-cebola 1 cubo · agua 200 ml
usa_freezer: lentilha-cozida 1
tempo: 10 min
nivel: 3
variacoes: caldo-verde, sopa-legumes-frango
composicao: origem animal · porco
```

```
id: polenta-mole
nome: Polenta mole
curto: Polenta mole
modulo: —
refeicoes: almoço, janta
preenche: carboidrato
componentes: fuba 40 g · agua 300 ml · sal a gosto
usa_freezer: —
tempo: 10 min
nivel: 1
variacoes: polenta-frita
composicao: —
```

```
id: polenta-frita
nome: Polenta frita na airfryer
curto: Polenta frita
modulo: —
refeicoes: almoço, janta
preenche: carboidrato
componentes: polenta 1 pote · oleo a gosto
usa_freezer: polenta 1
tempo: 20 min
nivel: 1
variacoes: polenta-mole
composicao: —
```

---

## 4. O que a página consegue montar com o nível 1
Contagem com todos os itens do nível 1 marcados, para conferir o mínimo do padrão (seção 7.4).

| Refeição | Pratos diferentes possíveis | Mínimo |
| --- | --- | --- |
| Café da manhã | 7 bases (pão, torrada, tapioca ou crepioca, cuscuz, banana com farinha láctea, mingau, aveia dormida) | 2 bases |
| Lanche da manhã | Vitamina e 4 bases (torrada, tapioca, cuscuz, aveia dormida) | 1 vitamina e 2 bases |
| Almoço | 7 pratos (frango, hambúrguer, carne moída, frango ao molho branco, 2 macarrões, baião de dois) e 3 acompanhamentos (cenoura e 2 saladas) | 3 pratos e 3 acompanhamentos |
| Lanche da tarde | 5 pratos (torta, lanche natural, tapioca, cuscuz, vitamina) | 3 pratos |
| Janta | 8 pratos (salada com atum, lanche natural, caldo verde, omelete com polenta, hambúrguer com polenta, 2 macarrões, frango ao molho branco) e 3 acompanhamentos | 3 pratos e 3 acompanhamentos |
| Ceia | 5 pratos (mingau, tapioca ou crepioca, cuscuz, torrada, ovos) | 3 pratos |

\* Conta o módulo, não a combinação (manual, seção 0.12): as tapiocas e as crepiocas contam como 1 prato, e os 3 mingaus também. No almoço e na janta, conta a proteína (padrão, seção 7.3).

---

## 5. O que ainda falta
- **Fichas dos itens antigos dos níveis 2 a 4** do Anexo A: as outras frutas, legumes, folhas, grãos, farinhas, carnes, frios e queijos, e os preparos ligados a eles (purês, carne de panela, pernil, sobrecoxa, almôndega, lasanha, panqueca, nhoque, quibe, salgados, kits, molho de curry, farofa, entre outros).
- **Ligações nos dois sentidos** com esses itens, quando ganharem ficha (padrão, seção 8, passo 5).
- **Módulos pendentes** (seção 0).
- **Revisão dos níveis** dos itens marcados com \* no Anexo A.

---

## 6. Histórico

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 08/11/2026 | Criação: fichas dos itens novos do Anexo A 1.12 (4 ingredientes, 43 preparos e 9 pratos na hora), ligações que faltam e sugestões de módulo para o padrão |
| 1.1 | 09/11/2026 | Fichas no formato do padrão 1.3: campo `nao_gosto` trocado por `escolha`, campo `recomendado` (tapioca, flocão de milho e torta de frango) e `refeicoes` nos preparos. Fichas novas de todos os itens do nível 1: 53 ingredientes da lista sugerida e da rotação de frios, 17 preparos (arroz, feijão, frango grelhado, carne moída, polenta, cenoura branqueada e ralada, mamão picado, ovos cozidos, molhos de tomate e branco, pasta de alho e cebola, crisps, kit de vitamina base, torta de frango, hambúrguer e frango ao molho branco) e 38 pratos na hora (bebidas, café, lanches, ceia, almoço, janta e acompanhamentos). Contagem do que dá para montar no nível 1. Sugestões de módulo saem do arquivo e ficam pendentes no padrão |
| 1.2 | 09/11/2026 | Decisões do admin: farelo de aveia na tela de escolha, como recomendado, com farinha de trigo como substituto no hambúrguer e marcado como opcional na vitamina (padrão 1.4); salpicão no nível 1 sem milho (Anexo A 1.14) |
| 1.3 | 09/11/2026 | Conferência do `banco.js` e da tela de escolha: limão opcional na salada de alface e tomate e crisps de calabresa opcionais na salada de repolho, porque são só tempero e travavam a salada; cheiro-verde opcional no patê de ovo, porque é do nível 2 e ainda não tem ficha; contagem corrigida: os ingredientes novos do nível 1 são 52, e não 53 como diz a versão 1.1 (total de 163 fichas: 56 ingredientes, 60 preparos e 47 pratos na hora) |
