# Padrão do banco de dados · Método Modular
## Como adicionar alimentos, preparos e pratos com etiquetas

**Versão 1.1** · Criado em 08/11/2026 · Última atualização: 08/11/2026
Vale para as versões mais recentes do manual e do Anexo A (conferido com o manual 3.16 e o Anexo A 1.12).

---

## 0. Para a IA (leia primeiro)
- **Para que serve:** este arquivo define o **formato** de cada item do banco de dados e as **etiquetas** que ele precisa ter. Com elas, a página do método faz trocas sozinha, sem IA (exemplo: a pessoa marca que não gosta de mamão, e a página coloca outra fruta no lugar).
- **Quando usar:** sempre que for adicionar, mudar ou revisar um alimento, ingrediente, preparo ou prato no Anexo A ou no banco de dados da página, siga este arquivo, mesmo que ninguém peça.
- **O Anexo A continua sendo a fonte dos dados.** Este arquivo diz como cada dado deve ser escrito para o app conseguir ler.
- **Arquivos ligados a este:**
    - **manual** (`metodo-modular-alimentacao`): as regras e os módulos. As listas fechadas da seção 5 vêm dele (seções 4.1 a 4.7 e 5.1);
    - **Anexo A** (`anexo-a`): os dados. Hoje está em tabelas. Decisão do admin: na próxima ampliação do banco, os itens que já existem também passam para as fichas deste padrão;
    - **projeto** (`projeto-app-metodo-modular`): a visão do produto e o site de teste, que vai ler o banco no formato da seção 9.
- **Em caso de conflito,** vale o manual. Se uma lista fechada daqui ficar diferente do manual, ajuste este arquivo e registre no histórico.
- **Todo item novo segue este padrão por completo.** Um item com campo vazio ou com etiqueta errada quebra as trocas sem ninguém perceber.
- **Use só as palavras das listas fechadas (seção 5).** Não invente etiquetas novas. Se faltar uma, anote como sugestão para a próxima versão deste arquivo.
- **Confirme com o admin** antes de mudar este padrão. Toda mudança gera uma versão nova (1.1, 1.2…), muda o número no nome do arquivo e entra no histórico (seção 10).

---

## 1. Os três tipos de registro

| Tipo | O que é | Exemplos |
| --- | --- | --- |
| **Ingrediente** | Item comprado no mercado | Banana nanica, fubá, peito de frango, muçarela |
| **Preparo** | Feito com antecedência, na cozinha ou no armazenamento, e guardado em pote, saquinho ou forminha | Arroz cozido, molho branco, torta de frango, cenoura branqueada, kit de vitamina |
| **Prato na hora** | Montado na hora da refeição, com ingredientes e preparos do estoque | Tapioca com muçarela, ovos mexidos, salada, mingau |

A ligação entre eles:
- **Ingrediente → Preparo:** a receita do preparo diz quais ingredientes usa e quanto.
- **Ingrediente ou Preparo → Prato na hora:** o prato diz quais componentes leva.
- **Prato na hora ou Preparo → Cardápio:** o cardápio usa os pratos e os preparos.

---

## 2. Ficha do ingrediente

| Campo | O que preencher | Exemplo |
| --- | --- | --- |
| `id` | Nome curto, sem acento e sem espaço, com hífen. Nunca muda depois de criado | `banana-nanica` |
| `nome` | Nome oficial, como aparece na lista de compras | Banana nanica |
| `secao` | Seção de compra (lista 5.6) | hortifrúti |
| `subsecao` | Subseção de compra (lista 5.6) | frutas |
| `grupo` | Grupo de alimento (lista 5.2) | frutas |
| `papel` | Papel no prato (lista 5.1). O primeiro é o principal; pode ter mais de um | fruta |
| `compra` | Unidade de compra e quantidade típica | kg · 1 kg |
| `aproveitavel` | % que sobra depois de tirar casca, caroço ou osso | 65% |
| `guardar` | Processo + embalagem + local (listas 5.3, 5.4 e 5.5) | inteira · fruteira; madura vira kit |
| `validade` | Por local | fruteira: 4 a 7 dias · freezer: em kit |
| `nivel` | Nível do método a partir do qual o item entra (1 a 4) | 1 |
| `refeicoes` | Em quais refeições pode aparecer (lista 5.7) | café, lanche da manhã, lanche da tarde, ceia |
| `entra_em` | `id` dos preparos e pratos que usam o item | `kit-vitamina-base`, `mingau`, `bolo-banana` |
| `nao_gosto` | Em qual grupo ele aparece na tela "Do que você não gosta?" (lista 5.8) | Frutas |
| `substitutos` | `id` de itens com o **mesmo papel**, em ordem de preferência | `maca-gala`, `mamao-formosa` |
| `composicao` | Etiquetas do que o item contém (lista 5.9). "—" se não tiver nenhuma | — |
| `obs` | Observação curta, se precisar | Madura vai para o kit de vitamina |

---

## 3. Ficha do preparo

| Campo | O que preencher | Exemplo |
| --- | --- | --- |
| `id` | Nome curto, sem acento | `molho-branco` |
| `nome` | Como aparece para a pessoa | Molho branco |
| `modulo` | Grupo de preparo ou tipo (lista 5.10) | molho pronto |
| `processo` | Como é feito (lista 5.3) | cozido |
| `preenche` | Papéis que ocupa no prato (lista 5.1) | — (serve para fazer outro prato) |
| `local` e `embalagem` | Onde fica e em quê (listas 5.4 e 5.5) | freezer · pote de porção |
| `porcao` | Peso de 1 porção | 265 g |
| `receita` | Lista de ingredientes com quantidade, pelo `id` | `leite-integral` 750 ml · `manteiga` 38 g · `farinha-de-trigo` 38 g · `sal` a gosto |
| `rende` | Quantas porções a receita dá | 3 potes |
| `cozinha` | Bloco da cozinha (1, 2 ou 3) e tempo aproximado | bloco 3 · 15 min |
| `validade` | Por local | geladeira: 3 dias · freezer: 90 dias |
| `nivel` | Nível a partir do qual entra | 1 |
| `entra_em` | `id` dos pratos e preparos que usam | `frango-molho-branco`, `macarrao-molho-branco`, `fricasse` |
| `nao_gosto` | Grupo na tela "Do que você não gosta?" | Molhos |
| `substitutos` | Preparos com o mesmo papel | `molho-tomate`, `molho-curry` |
| `composicao` | **Soma** das etiquetas de todos os ingredientes da receita | contém leite · contém glúten |
| `obs` | Observação | Ao esquentar, juntar um pouco de leite |

**Regra da composição:** um preparo herda **todas** as etiquetas dos seus ingredientes. O molho branco leva leite e farinha de trigo, então ele "contém leite" e "contém glúten", mesmo que essas palavras não estejam no nome.

---

## 4. Ficha do prato na hora

| Campo | O que preencher | Exemplo |
| --- | --- | --- |
| `id` | Nome curto, sem acento | `tapioca-mucarela` |
| `nome` | Texto completo, como aparece no cardápio | Tapioca com muçarela |
| `curto` | Texto curto para a tabela da semana | Tapioca com queijo |
| `modulo` | Tipo do prato (lista 5.10) | recheado |
| `refeicoes` | Onde pode aparecer (lista 5.7) | café, lanche da manhã, lanche da tarde, ceia |
| `preenche` | Papéis do molde que ele cumpre (lista 5.1) | carboidrato + proteína leve |
| `componentes` | `id` + quantidade de cada ingrediente ou preparo | `tapioca-goma` 50 g · `mucarela` 30 g |
| `usa_freezer` | Preparos do freezer que ele gasta, em porções | — |
| `tempo` | Tempo para montar | 5 min |
| `nivel` | Nível a partir do qual entra | 1 |
| `variacoes` | `id` de outros pratos do mesmo módulo | `tapioca-presunto-mucarela`, `crepioca-banana` |
| `composicao` | Soma das etiquetas dos componentes | contém leite |

---

## 5. Listas fechadas (use só estas palavras)

### 5.1 Papel no prato
carboidrato · leguminosa · proteína · proteína leve · vegetal · fruta · doce · gordura · tempero · condimento · bebida

### 5.2 Grupo de alimento
carnes · frios · básicos refrigerados · laticínios · leguminosas · cereais · farináceos · massas · pães · legumes · folhas · frutas · oleaginosas · óleos · açúcares · temperos secos · condimentos · bebidas

### 5.3 Processo
Sem fogo: lavado · picado · fatiado · ralado · triturado · desfiado · amassado · cru · curado
Com fogo: cozido · refogado · grelhado · frito · assado · gratinado · branqueado
Sem processo: inteiro

### 5.4 Local
freezer · geladeira · gaveta da geladeira · fruteira · despensa

### 5.5 Embalagem
pote de porção · pote da praça · pote seco · saquinho · forminha · original

### 5.6 Seção e subseção de compra (nesta ordem no mercado)
1. hortifrúti → frutas · legumes · folhas
2. mercearia → grãos e massas · farinhas · matinais · leite e ovos · óleos e temperos · enlatados
3. açougue
4. resfriados

### 5.7 Refeições
café · lanche da manhã · almoço · lanche da tarde · janta · ceia

### 5.8 Grupos da tela "Do que você não gosta?"
Frutas · Legumes · Folhas · Bases · Leguminosas · Carnes · Molhos · Temperos e condimentos · Frios e queijos · Bebidas

**Bases** são os carboidratos que dão forma à refeição: arroz, macarrão, polenta, purê, pão de forma, torrada, tapioca, cuscuz e mingau.

### 5.9 Composição (para uso futuro)
contém leite · contém glúten · contém ovo · contém amendoim ou castanhas · origem animal · carne vermelha · frango · porco · peixe ou frutos do mar

Estas etiquetas **não são usadas na versão de teste**, que não atende pessoas com restrição alimentar. Elas são preenchidas desde já para não ser preciso revisar o banco inteiro depois.

### 5.10 Módulos de preparo e de prato
Preparos: porção simples · assado de forma · panelada · massa com molho · moldado · salgado assado · molho pronto · kit vitamina · kit suco · kit sopa · finalização · pasta de tempero
Pratos na hora: recheado · prato de ovos · mingau · vitamina · suco · salada · sopa · massa na hora

---

## 6. Regras de troca (como a página usa as etiquetas)
Quando a pessoa marca que não gosta de um item, a página procura um substituto nesta ordem:
1. **Lista `substitutos` do item:** o primeiro da lista de que a pessoa gosta.
2. **Se a lista acabar:** qualquer item com o **mesmo papel principal**, que possa aparecer na **mesma refeição**, do **mesmo nível ou menor**.
3. **Se for um preparo do freezer:** a troca só vale se o substituto tiver `receita` e `rende` preenchidos, para a página recalcular a compra, a cozinha e o estoque.
4. **Se não houver substituto:** a página não troca e avisa a pessoa ("não temos outra opção para este prato nesta versão").

Além disso:
- O item que a pessoa não gosta **sai da lista de compras**, a menos que outro prato da semana ainda precise dele.
- Um prato na hora ou um preparo que **leva** o item também é trocado. Exemplo: não gostar de muçarela troca a "tapioca com muçarela" por "tapioca com presunto".
- As regras de variedade do manual continuam valendo depois da troca: nenhum prato mais de 3 vezes na semana na mesma refeição, e o mesmo prato não se repete em dias seguidos.

---

## 7. Passo a passo para adicionar um item
1. **Procure se já existe**, pelo nome e pelos sinônimos (exemplo: "flocão" = "flocão de milho").
2. **Escolha o tipo:** ingrediente, preparo ou prato na hora (seção 1).
3. **Preencha a ficha inteira** (seções 2, 3 ou 4). Campo sem informação leva "—", nunca fica vazio.
4. **Use só palavras das listas fechadas** (seção 5).
5. **Ligue o item:** preencha `entra_em` e atualize o `entra_em` dos itens ligados a ele, nos dois sentidos.
6. **Defina os substitutos:** pelo menos 2, com o mesmo papel principal.
7. **Confira a composição,** inclusive os ingredientes escondidos. Num preparo, some as etiquetas de todos os ingredientes.
8. **Confira o nível:** um item novo nunca entra num nível mais baixo que os itens que ele usa.
9. **Registre no histórico do Anexo A** e, se o item for novo no método, como lacuna na seção A.7.

---

## 8. Exemplos preenchidos

**Ingrediente**
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
entra_em: kit-vitamina-base, mingau, bolo-banana, crepioca-banana
nao_gosto: Frutas
substitutos: maca-gala, mamao-formosa
composicao: —
obs: —
```

**Preparo**
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
entra_em: frango-molho-branco, macarrao-molho-branco, fricasse
nao_gosto: Molhos
substitutos: molho-tomate, molho-curry
composicao: contém leite · contém glúten · origem animal
obs: ao esquentar, juntar um pouco de leite
```

**Prato na hora**
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
variacoes: tapioca-presunto-mucarela, crepioca-banana, cuscuz-mucarela
composicao: contém leite · origem animal
```

---

## 9. Formato para a página (JavaScript)
A página lê os dados como objetos do JavaScript. Cada ficha vira um objeto com os mesmos campos:

```js
{ id: "banana-nanica", tipo: "ingrediente", nome: "Banana nanica",
  secao: "hortifrúti", subsecao: "frutas", grupo: "frutas", papel: ["fruta"],
  compra: { unidade: "kg", qtd: 2 }, aproveitavel: 0.65,
  guardar: "inteira · fruteira; madura vira kit",
  validade: { fruteira: "4 a 7 dias", freezer: "em kit" },
  nivel: 1, refeicoes: ["café","lanche da manhã","lanche da tarde","ceia"],
  entra_em: ["kit-vitamina-base","mingau","bolo-banana","crepioca-banana"],
  nao_gosto: "Frutas", substitutos: ["maca-gala","mamao-formosa"],
  composicao: [], obs: "" }
```

**Situação atual:** os arquivos `dados-semanaN.js` do site ainda usam um formato próprio, mais simples (lista de compras, passos e cardápio de cada semana). A troca para este formato fica para quando o banco de dados estiver pronto.

Regras do formato:
- Campos com mais de um valor (`papel`, `refeicoes`, `entra_em`, `substitutos`, `composicao`) são **listas** entre colchetes, mesmo quando têm um item só.
- Porcentagens viram número decimal: 65% = `0.65`.
- Quantidades levam número e unidade separados: `{ unidade: "g", qtd: 50 }`.

---

## 10. Histórico

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 08/11/2026 | Criação: tipos de registro, fichas, listas fechadas, regras de troca, passo a passo, exemplos e formato para a página |
| 1.1 | 08/11/2026 | Vale para as versões mais recentes do manual e do Anexo A (conferido com o 3.16 e o 1.12); arquivos ligados, regra de conflito e conversão dos itens antigos do Anexo A na seção 0; situação atual dos dados do site na seção 9 |
