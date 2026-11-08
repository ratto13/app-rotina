# Fichas do banco de dados · Método Modular
## Itens no formato do padrão do banco de dados

**Versão 1.0** · Criado em 08/11/2026 · Segue o padrão 1.1 · Usado com o manual 3.16 e o Anexo A 1.13

---

## 0. Para a IA (leia primeiro)
- **O que é:** as fichas dos itens do Anexo A no formato do padrão do banco de dados, prontas para virar os dados da página.
- **O Anexo A continua sendo a fonte.** Se uma ficha e o Anexo A disserem coisas diferentes, vale o Anexo A, e a ficha é corrigida.
- **Nesta versão:** só os itens novos do Anexo A 1.12 (marcados com \* no anexo). Os itens antigos do Anexo A ainda não têm ficha.
- **Todos os itens ainda estão em revisão,** como no Anexo A (seção A.7). O nível de cada um é uma sugestão até o admin aprovar.
- **Os `id` citados que ainda não têm ficha** (exemplo: `arroz`, `molho-branco`) são de itens antigos do Anexo A e ganham ficha nas próximas versões, com o mesmo `id`.
- **Módulo sem palavra na lista fechada:** fica "—", com a sugestão na seção 5.

---

## 1. Ingredientes

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
nao_gosto: Bases
substitutos: pao-de-forma, torrada
composicao: contém glúten
obs: esquentar no forno ou na airfryer, a 180 °C, por 5 a 8 minutos
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
refeicoes: almoço, janta
entra_em: galinhada
nao_gosto: Temperos e condimentos
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
nao_gosto: Carnes
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
nao_gosto: Frios e queijos
substitutos: queijo-minas-frescal, mucarela
composicao: contém leite · origem animal
obs: —
```

---

## 2. Preparos

### 2.1 Kits

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
entra_em: vitamina
nao_gosto: Frutas
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
entra_em: vitamina
nao_gosto: Frutas
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
entra_em: suco
nao_gosto: Frutas
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
entra_em: suco
nao_gosto: Frutas
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
entra_em: suco
nao_gosto: Frutas
substitutos: kit-suco-manga-laranja, kit-suco-goiaba-laranja
composicao: —
obs: —
```

### 2.2 Porções simples

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
entra_em: strogonoff-carne, escondidinho
nao_gosto: Carnes
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
entra_em: sopa-legumes-frango
nao_gosto: Carnes
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
entra_em: pasta-frango, salpicao, fricasse, arroz-de-forno, sopa-legumes-frango, wrap, tapioca
nao_gosto: Carnes
substitutos: atum, frios
composicao: origem animal · frango
obs: do freezer, não é recheio de recheado
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
entra_em: —
nao_gosto: Bases
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
entra_em: —
nao_gosto: Bases
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
entra_em: macarrao-molho-tomate, panelada
nao_gosto: Molhos
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
entra_em: sopa-lentilha-calabresa
nao_gosto: Leguminosas
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
entra_em: salada
nao_gosto: Leguminosas
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
entra_em: —
nao_gosto: Bases
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
entra_em: escondidinho
nao_gosto: Bases
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
entra_em: fricasse, arroz-de-forno, salpicao, arroz-com-legumes
nao_gosto: Legumes
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
entra_em: —
nao_gosto: Legumes
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
entra_em: —
nao_gosto: Carnes
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
entra_em: —
nao_gosto: Carnes
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
entra_em: panelada
nao_gosto: Carnes
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
entra_em: —
nao_gosto: Carnes
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
entra_em: frango-desfiado
nao_gosto: Carnes
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
entra_em: panelada, sopa, pate-ovo, pate-ricota, galinhada
nao_gosto: Temperos e condimentos
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
entra_em: kit-suco-maracuja-manga
nao_gosto: Frutas
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
entra_em: —
nao_gosto: Legumes
substitutos: sopa-legumes-frango, caldo-verde
composicao: —
obs: servir com frango desfiado ou ovo cozido; a mandioquinha pode ser usada no lugar da abóbora
```

### 2.3 Recheios prontos

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
entra_em: lanche-natural, wrap, tapioca, torrada
nao_gosto: Carnes
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
entra_em: lanche-natural, wrap, tapioca, torrada
nao_gosto: Carnes
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
receita: ovos-cozidos 3 · maionese 1 colher de sopa · sal a gosto · cheiro-verde a gosto
rende: 4 porções
cozinha: bloco 3 · 5 min
validade: geladeira 2 dias
nivel: 1
entra_em: lanche-natural, wrap, tapioca, torrada
nao_gosto: Frios e queijos
substitutos: pate-ricota, pasta-frango
composicao: origem animal · contém ovo
obs: serve na ceia
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
entra_em: lanche-natural, wrap, tapioca, torrada
nao_gosto: Frios e queijos
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
receita: frango-desfiado 150 g · cenoura-ralada 50 g · maca-gala ½ unidade · milho-debulhado 2 colheres de sopa · maionese 2 colheres de sopa
rende: 2 porções
cozinha: bloco 3 · 10 min
validade: geladeira 2 dias
nivel: 1
entra_em: wrap
nao_gosto: Carnes
substitutos: pasta-frango, pate-atum
composicao: origem animal · frango · contém ovo
obs: janta fria com torrada
```

### 2.4 Assados de forma e salgados

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
entra_em: —
nao_gosto: Carnes
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
entra_em: —
nao_gosto: Carnes
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
entra_em: —
nao_gosto: Carnes
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
entra_em: fritada-forminha
nao_gosto: Legumes
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
entra_em: —
nao_gosto: Frutas
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
entra_em: —
nao_gosto: Bases
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
entra_em: —
nao_gosto: Bases
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
entra_em: —
nao_gosto: Bases
substitutos: enroladinho, pao-de-queijo
composicao: contém glúten · contém ovo · origem animal · carne vermelha
obs: recheio também de frango desfiado ou frios com queijo (a composição muda); pode congelar cru
```

### 2.5 Paneladas e moldados

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
entra_em: macarrao-bolonhesa, lasanha, nhoque
nao_gosto: Molhos
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
entra_em: —
nao_gosto: Carnes
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
entra_em: —
nao_gosto: Carnes
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
entra_em: wrap
nao_gosto: Carnes
substitutos: hamburguer, hamburguer-frango
composicao: origem animal · peixe ou frutos do mar · contém ovo · contém glúten
obs: do freezer para a frigideira untada, 3 a 4 minutos de cada lado
```

### 2.6 Doces

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
entra_em: —
nao_gosto: Frutas
substitutos: bolo-banana, crepioca-banana
composicao: origem animal · contém ovo · contém glúten
obs: esquentar na frigideira ou no micro-ondas por cerca de 40 segundos
```

---

## 3. Pratos na hora

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

## 4. Ligações que faltam
Pela regra do padrão (seção 7, passo 5), os itens antigos ligados a estes precisam ganhar o novo `id` no seu `entra_em` quando ganharem ficha. Exemplos: `peito-de-frango` → `frango-desfiado`, `galinhada`, `frango-xadrez`; `atum` → `pate-atum`, `hamburguer-atum`; `fuba` → `mingau-fuba`, `polenta-mole`; `arroz` → `arroz-de-forno`, `baiao-de-dois`; `feijao` → `baiao-de-dois`, `feijao-tropeiro`.

---

## 5. Sugestões para a próxima versão do padrão
Itens que não cabem nas palavras da lista fechada de módulos (5.10). Ficaram com "—" até o admin decidir:
- **recheio pronto** (preparo): patês e salpicão, guardados no pote da praça para o recheado.
- **arroz e feijão na hora** (prato na hora): baião de dois e feijão tropeiro.
- **acompanhamento na hora** (prato na hora): polenta mole e polenta frita.
- **doce de frigideira** (preparo): panqueca de banana.

---

## 6. Histórico

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 08/11/2026 | Criação: fichas dos itens novos do Anexo A 1.12 (4 ingredientes, 43 preparos e 9 pratos na hora), ligações que faltam e sugestões de módulo para o padrão |
