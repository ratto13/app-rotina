# Padrão do banco de dados · Método Modular
## Como adicionar alimentos, preparos e pratos com etiquetas, e como a página monta a semana

**Versão 1.6** · Criado em 08/11/2026 · Última atualização: 09/11/2026 · Usado com o manual 3.18 e o Anexo A 1.14

---

## 0. Para a IA (leia primeiro)
- **Para que serve:** este arquivo define o **formato** de cada item do banco de dados, as **etiquetas** que ele precisa ter e as **regras de montagem da semana**. Com elas, a página monta o cardápio, a compra e a cozinha sozinha, sem IA, a partir do que a pessoa escolheu comer.
- **Quando usar:** sempre que for adicionar, mudar ou revisar um alimento, ingrediente, preparo ou prato no Anexo A ou no banco de dados da página, siga este arquivo, mesmo que ninguém peça.
- **O Anexo A continua sendo a fonte dos dados.** Este arquivo diz como cada dado deve ser escrito para o app conseguir ler.
- **As regras do método continuam no manual.** As regras de montagem (seção 7) só traduzem o manual em passos que a página consegue seguir. Se as duas coisas disserem algo diferente, vale o manual, e este arquivo é corrigido.
- **As fichas preenchidas ficam no arquivo de fichas** (`fichas-banco-de-dados`, a versão mais alta). Todo item novo do Anexo A ganha a sua ficha lá.
- **Todo item novo segue este padrão por completo.** Um item com campo vazio ou com etiqueta errada quebra a montagem sem ninguém perceber.
- **Use só as palavras das listas fechadas (seção 5).** Não invente etiquetas novas. Se faltar uma, anote como sugestão para a próxima versão deste arquivo.
- **Confirme com o admin** antes de mudar este padrão. Toda mudança gera uma versão nova (1.2, 1.3…), muda o número no nome do arquivo e entra no histórico (seção 11).

---

## 1. Os três tipos de registro

| Tipo | O que é | Exemplos |
| --- | --- | --- |
| **Ingrediente** | Item comprado no mercado | Banana nanica, fubá, peito de frango, muçarela |
| **Preparo** | Feito com antecedência, na cozinha ou no armazenamento, e guardado em pote, saquinho ou cubo (forminha de gelo) | Arroz cozido, molho branco, torta de frango, cenoura branqueada, kit de vitamina |
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
| `escolha` | Em qual grupo ele aparece na tela "O que você quer comer?" (lista 5.8). "—" se não aparece | Frutas |
| `recomendado` | "sim" se vem marcado e com o selo "recomendado" na tela de escolha; senão, "não" | não |
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
| `refeicoes` | Em quais refeições pode aparecer, quando vai direto para o prato (lista 5.7). "—" se só serve para fazer outro prato | lanche da tarde |
| `entra_em` | `id` dos pratos e preparos que usam | `frango-molho-branco`, `macarrao-molho-branco`, `fricasse` |
| `escolha` | Grupo na tela "O que você quer comer?" (lista 5.8). "—" se não aparece | — |
| `recomendado` | "sim" ou "não" (seção 2) | não |
| `substitutos` | Preparos com o mesmo papel | `molho-tomate`, `molho-curry` |
| `composicao` | **Soma** das etiquetas de todos os ingredientes da receita | contém leite · contém glúten |
| `obs` | Observação | Ao esquentar, juntar um pouco de leite |

**Ingrediente opcional:** na `receita` do preparo ou nos `componentes` do prato na hora, um item pode levar a marca `(opcional)`. Se a pessoa não escolheu esse item na tela, o prato sai sem ele e continua no cardápio. Exemplo: `farelo-de-aveia 2 colheres de sopa (opcional)` na vitamina.

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

**O prato na hora não aparece na tela de escolha.** Ele entra no cardápio sozinho quando a pessoa escolheu os componentes dele (seção 7.3).

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
pote de porção · pote da praça · pote seco · saquinho · cubo · original

**cubo** é a forminha de gelo com tampa, contada por forminha, como no manual (seção 4.6).

### 5.6 Seção e subseção de compra (nesta ordem no mercado)
1. hortifrúti → frutas · legumes · folhas
2. mercearia → grãos e massas · farinhas · matinais · leite e ovos · óleos e temperos · enlatados
3. açougue
4. resfriados

### 5.7 Refeições
café · lanche da manhã · almoço · lanche da tarde · janta · ceia

### 5.8 Grupos da tela "O que você quer comer?"

| Grupo | O que entra | Exemplos |
| --- | --- | --- |
| Proteínas | Carnes e peixes do almoço e da janta | Peito de frango, acém moído, atum |
| Bases do almoço e da janta | Carboidratos e leguminosas do prato principal | Arroz, feijão, espaguete, fubá (polenta) |
| Bases do café e dos lanches | Carboidratos que dão forma ao café, aos lanches e à ceia | Pão de forma, torrada, tapioca, flocão de milho (cuscuz), aveia (mingau) |
| Pratos prontos do freezer | Preparos escolhidos pelo nome do prato | Torta de frango, hambúrguer, bolo de banana |
| Recheios | O que vai no pote da praça para rechear | Presunto, muçarela, ovos, frango desfiado |
| Frutas | Frutas para comer, para os kits e para o suco | Banana, mamão, maçã, laranja |
| Legumes e folhas | Vegetais do almoço, da janta e dos recheios | Cenoura, tomate, alface, repolho |
| Bebidas | O que vai no café da manhã e nos lanches | Café, achocolatado, leite |

- **Não aparecem na tela** (`escolha: —`): temperos, óleos, condimentos e ingredientes que só servem para uma receita (exemplos: sal, óleo, farinha de trigo, fermento). Eles entram na compra sozinhos quando um prato escolhido precisa deles.
- **Escolher um prato pronto traz a receita dele.** Se a pessoa marcar "Torta de frango", o peito de frango entra na compra para a torta, mesmo que ela não tenha marcado frango em Proteínas.

### 5.9 Composição (para uso futuro)
contém leite · contém glúten · contém ovo · contém amendoim ou castanhas · origem animal · carne vermelha · frango · porco · peixe ou frutos do mar

Estas etiquetas **não são usadas na versão de teste**, que não atende pessoas com restrição alimentar. Elas são preenchidas desde já para não ser preciso revisar o banco inteiro depois.

### 5.10 Módulos de preparo e de prato
Preparos: porção simples · assado de forma · panelada · massa com molho · moldado · salgado assado · molho pronto · kit vitamina · kit suco · kit sopa · finalização · pasta de tempero
Pratos na hora: recheado · prato de ovos · mingau · vitamina · suco · salada · sopa · massa na hora

**Pendente:** os módulos sugeridos no arquivo de fichas (recheio pronto, doce de frigideira, arroz e feijão na hora, acompanhamento na hora) entram quando o banco de dados tiver uma base sólida. Até lá, esses itens ficam com "—" no `modulo`.

---

## 6. Substitutos
Os substitutos servem para a página fechar um prato quando falta uma peça. Exemplo: o lanche natural leva presunto, a pessoa não marcou presunto, mas marcou peito de peru.

A página procura um substituto nesta ordem:
1. **Lista `substitutos` do item:** o primeiro da lista que a pessoa escolheu. Um item que não aparece na tela (`escolha: —`) conta como escolhido, porque entra na compra sozinho. Exemplo: sem farelo de aveia, o hambúrguer leva farinha de trigo.
2. **Se a lista acabar:** qualquer item escolhido com o **mesmo papel principal**, que possa aparecer na **mesma refeição**, do **mesmo nível ou menor**.
3. **Se for um preparo do freezer:** a troca só vale se o substituto tiver `receita` e `rende` preenchidos, para a página recalcular a compra, a cozinha e o estoque.
4. **Se não houver substituto:** o prato não entra no cardápio.

**Cuidados para a troca não criar pratos estranhos ou repetidos:**
- **O item principal não é trocado.** O principal é o primeiro item da `receita` ou dos `componentes` (exemplo: o arroz no "arroz, feijão e frango"; os ovos nos ovos mexidos). Se ele não estiver disponível, o prato não entra.
- **Preparos não são trocados.** O frango grelhado não vira carne moída, porque isso repetiria outro prato da lista.
- **O substituto precisa ser um ingrediente.** Exemplo: presunto troca por peito de peru; atum não troca por frango desfiado.

---

## 7. Regras de montagem da semana
É o passo a passo que a página segue para montar o cardápio, a compra e a cozinha a partir das escolhas da pessoa.

### 7.1 O que a página recebe
- **Quem come em casa:** quantos adultos e quantas crianças com menos de 10 anos, até 4 pessoas no total.
- **Quantos potes a pessoa tem** de cada tipo: 370 ml, 640 ml e 1040 ml.
- **Quantas refeições por dia** (pergunta 1).
- **O que a pessoa quer comer** (pergunta 2, tela "O que você quer comer?").
- **O nível:** sempre 1 na primeira semana.
- **O objetivo:** nesta versão de teste, é o mesmo para todos: comer melhor e praticidade, com a porção base do manual (seção 5.6).

### 7.1.1 Pessoas e porções
- **Adulto conta 1. Criança com menos de 10 anos conta ½** (manual, seção 0.11). A soma é o **número de porções da casa**. Exemplo: 2 adultos e 2 crianças = 3 porções.
- **Toda quantidade é multiplicada pelo número de porções da casa:** porções do cardápio, receitas, ingredientes da compra e kits.
- **A meia porção da criança é uma estimativa,** para revisar com uma nutricionista.

### 7.1.2 Potes
O método foi pensado em potes de 370 ml (manual, seção 4.6). Cada pote de porção guarda **uma refeição da casa**, para todos que comem nela.

| Porções da casa | Pote de porção | Pote da praça |
| --- | --- | --- |
| 1 ou 1½ | 370 ml | 640 ml |
| 2 ou 2½ | 640 ml | 640 ml |
| 3 a 4 | 1040 ml | 640 ml |

- **Conta de cabe ou não cabe:** 1 g de comida ocupa cerca de 1 ml, e o pote precisa de folga no topo (manual, seção 12.3). A página considera que cabe até 90% do pote: 330 g no de 370 ml, 575 g no de 640 ml e 935 g no de 1040 ml.
- **Quando não cabe:** a refeição da casa vai dividida em potes iguais, nunca em potes de tamanhos diferentes.
    - No lugar do pote de 370 ml: o de 640 ml.
    - No lugar do pote de 640 ml: o de 1040 ml.
    - No lugar do pote de 1040 ml: **2 potes de 640 ml** (exemplo: polenta de 275 g para 4 porções = 1,1 kg). Se ainda não couber, 3 potes de 640 ml (exemplo: lasanha de 300 g para 4 porções = 1,2 kg).
- **A tabela do plano de potes** (manual, seção 0.6) conta os potes de porção da casa, sem dividir pelo número de pessoas.
- **Tela de potes:** a pessoa diz quantos tem de cada tipo. A página escolhe a faixa da tabela do manual pelo número de potes de porção do tamanho certo e monta a semana nessa faixa. No fim, mostra **quantos potes faltariam para a semana completa** e quais tipos comprar, se ela quiser.
- **Quantidade sugerida:** para quem não sabe quantos potes precisa, a tela sugere, para começar, **10 potes de porção** (no tamanho da casa) e **4 potes da praça** de 640 ml (manual, seção 0.6: cerca de 10 potes de porção na primeira semana e de 3 a 5 potes da praça). Quando o pote de porção da casa é o de 640 ml, os dois somam no mesmo tamanho (14 potes de 640 ml). Um botão preenche os números com a sugestão. A tela explica, com um exemplo, o que vai em cada pote.
- **Pote de 640 ml para as porções:** quando o pote de porção da casa é o de 640 ml, ele é do mesmo tamanho do pote da praça. A página separa 4 desses potes para a praça (a quantidade sugerida) e usa o resto como pote de porção.
- **Potes da praça:** a página não limita a semana pelos potes da praça. Quando a semana usa mais potes da praça do que a pessoa tem, a página avisa na tela de aprovar o cardápio e no guardar, e sugere usar outros potes com tampa que houver em casa (manual, seção 0.6, "Sem equipamento").
- **Torta com poucos potes:** com **até 10 potes de porção**, a semana não leva assado de forma, como manda a tabela do manual (seção 0.6). A torta continua na tela de escolha, mesmo recomendada, mas com o aviso "Não entra nesta semana: precisa de mais de 10 potes de porção", e não conta para o mínimo do lanche da tarde. A tela de potes também avisa.

### 7.2 A tela de escolha
- **Uma frase no topo:** "Quanto mais alimentos você marcar, mais variado fica o seu cardápio."
- **Os grupos da lista 5.8,** um embaixo do outro.
- **Nível 1 aberto:** só os itens com `nivel: 1` podem ser marcados.
- **Níveis 2 a 4 fechados, só para ver:** aparecem embaixo de cada grupo, separados por nível, com o aviso "Libera quando você avançar de nível". Assim a pessoa vê para onde o método vai, sem quebrar a regra do manual de que só entram os preparos do nível da pessoa (seção 5.3 do manual).
- **Recomendados:** os itens com `recomendado: sim` já vêm marcados, com o selo "recomendado" e a frase: "O método foi pensado para estes lanches rápidos." A pessoa pode desmarcar.
- **Medidor de variedade em cada grupo:** muda conforme a pessoa marca (seção 7.4).
- **Botão "Montar meu cardápio":** só funciona quando o mínimo de todas as refeições foi atingido (seção 7.4). Se faltar, a página diz o que marcar. Exemplo: "Marque mais uma base para o café e os lanches".

### 7.3 Pratos possíveis
Para cada refeição, a página faz a lista dos pratos que dá para montar:
1. **Entram** os preparos (com `refeicoes` preenchido) e os pratos na hora que podem aparecer naquela refeição, com nível igual ou menor que o da pessoa.
2. **Um preparo entra** quando a pessoa o escolheu, ou quando ele não aparece na tela (`escolha: —`) e todos os itens da receita dele que aparecem na tela foram escolhidos.
3. **Um prato na hora entra** quando todos os componentes que aparecem na tela foram escolhidos, direto ou por um substituto (seção 6). Os componentes com `escolha: —` e os marcados `(opcional)` não contam.

No preparo vale o mesmo: os itens da receita marcados `(opcional)` não travam o preparo, e os que têm substituto escolhido são trocados por ele.
4. **O prato precisa fechar o molde da refeição** (seção 5.1 do manual), junto com a bebida da refeição (seção 5.2 do manual) e, quando faltar, um acompanhamento. Exemplo: no almoço, arroz, feijão, frango grelhado e cenoura, com o suco.

**O que conta como prato diferente:** o módulo, não a combinação, como no manual (seção 0.12). Tapioca com queijo e tapioca com presunto são o mesmo prato. No almoço e na janta, conta a proteína do prato: arroz e feijão com frango e arroz e feijão com carne moída são pratos diferentes.

**Regras da contagem:**
- **Recheados contam pela base:** tapioca e crepioca são um prato só; cuscuz, torrada e pão de forma são outros.
- **Mingau, prato de ovos, vitamina e suco contam pelo módulo:** os mingaus são um prato só.
- **Um preparo que já é componente de um prato na hora não conta sozinho como prato.** Exemplo: o arroz e o hambúrguer já entram no "arroz, feijão e hambúrguer". Contam sozinhos só os preparos que vão direto para o prato e que nenhum prato na hora usa, como a torta.
- **No café e no lanche da manhã, só conta o que tem carboidrato** (as bases). Ovos e bebidas acompanham, mas não contam.
- **No almoço e na janta, só conta como prato o que tem proteína.** Polenta mole, polenta frita e arroz com legumes sozinhos são acompanhamento de carboidrato, e não prato.
- **Os acompanhamentos de vegetal contam por prato, e não por módulo:** a salada de alface e tomate e a salada de repolho são acompanhamentos diferentes (manual, seção 0.12, o vegetal também conta).

### 7.4 Mínimo e medidor de variedade
**Mínimo por refeição** (é o que libera o botão):

| Refeição | Mínimo | De onde vem |
| --- | --- | --- |
| Almoço | 3 pratos diferentes e 3 acompanhamentos de vegetal | Nenhum prato e nenhum vegetal mais de 3 vezes na semana na mesma refeição (manual, seção 0.12) |
| Lanche da tarde | 3 pratos diferentes | Mesma regra |
| Janta | 3 pratos diferentes e 3 acompanhamentos de vegetal | Mesma regra |
| Ceia | 3 pratos diferentes | Mesma regra |
| Café da manhã | 2 bases diferentes | Alternar as bases no café (manual, seção 0.12) |
| Lanche da manhã | 1 vitamina e 2 bases diferentes | A vitamina aparece todo dia; a base alterna |

\* Com 3 pratos, a semana fecha assim: 3 + 3 + 1 = 7 dias, sem repetir em dias seguidos.
\* A refeição que a pessoa tirou na pergunta 1 não conta para o mínimo.

**Medidor de cada grupo:**

| O que aparece | Quando |
| --- | --- |
| ⚠️ **Falta pouco** | Alguma refeição que depende do grupo ainda não chegou ao mínimo |
| **Mínimo** | O mínimo foi atingido, sem nenhum prato a mais |
| **Boa variedade** | 1 ou 2 pratos a mais que o mínimo nas refeições do grupo |
| **Ótima variedade** | 3 pratos a mais ou mais |

\* Os limites de "boa" e "ótima" são uma sugestão inicial, para ajustar com o resultado dos testes.
\* **O grupo Legumes e folhas** mede os acompanhamentos de vegetal do almoço e da janta. **Os outros grupos** medem os pratos.

### 7.5 Distribuir os pratos na semana
A página preenche a semana de segunda a domingo, uma refeição por vez, nesta ordem: café, lanche da manhã, almoço, lanche da tarde, janta e ceia. Em cada refeição, escolhe o prato que:
1. **Não passa de 3 vezes na semana** naquela refeição. Vale para o almoço, o lanche da tarde, a janta e a ceia (manual, seção 0.12). No café e no lanche da manhã, as bases só alternam (regra 2).
2. **Não repete o prato do dia anterior** naquela refeição.
3. **Não repete no mesmo dia** um prato de outra refeição. A base (pão, torrada, arroz) pode repetir no mesmo dia em pratos diferentes.
4. **Respeita a validade curta:** item de pote da praça que dura até 4 dias (frango desfiado, cenoura ralada, mamão picado) só entra até a quarta-feira; o que dura até 3 dias, até a terça-feira; o que dura até 2 dias (patês, salpicão), só na segunda-feira (manual, seção 0.12, item 6). O que dura mais de 4 dias pode entrar a semana toda.
5. **Respeita a ceia:** sem cafeína e sem itens gordurosos ou picantes (manual, seção 5.5). Entre os pratos que servem, a página prefere os que têm carboidrato (manual, seção 5.1: proteína leve + carboidrato).
6. **Respeita os potes:** a cozinha nunca faz mais potes de porção do que a pessoa tem (manual, seção 0.6). Quando os potes acabam, o almoço e a janta são completados com pratos feitos na hora: recheado e salada com proteína, e prato de ovos (manual, seção 0.6, "Com poucos potes").

Se mais de um prato servir, a página escolhe, nesta ordem de desempate:
1. o que foi usado menos vezes na semana;
2. o que tem validade mais curta;
3. o recomendado;
4. o que vem primeiro no banco de dados.

Assim, as mesmas escolhas sempre dão o mesmo cardápio, o que facilita o teste.

**Quando um dia não fecha:** a página volta ao dia anterior e tenta a opção seguinte. Se uma refeição inteira não fechar (por exemplo, a janta, porque o almoço já usou os potes), a página monta a semana de novo começando por essa refeição, até 3 vezes.

**Bebidas:** seguem a seção 5.2 do manual. A vitamina e o suco do almoço aparecem todos os dias e alternam de sabor quando houver mais de um kit.

**Menos de 6 refeições:** a página aplica as regras da pergunta 1, como hoje (a vitamina vai para o café com 4 ou 3 refeições).

### 7.6 Calcular a compra
1. **Contar as porções:** quantas vezes cada preparo e cada componente aparece no cardápio da semana (manual, seção 8.1), vezes o número de porções da casa (seção 7.1.1).
2. **Preparos:** número de receitas = porções ÷ `rende`, arredondando para cima. As porções a mais ficam no freezer para a próxima semana (princípio 9 do manual). Exemplo: torta 3 vezes no lanche → 1 receita de 7 pedaços → 4 pedaços ficam no freezer. Se as porções a mais não couberem nos potes da pessoa, a página faz só o que a semana usa (exemplo: ⅗ da receita de arroz).
3. **Ingredientes:** soma do que as receitas e os pratos na hora usam.
4. **Peso de compra:** quantidade ÷ `aproveitavel`, arredondando para cima pela unidade de `compra`. Exemplo: 1,3 kg de banana a 65% → 2 kg.
    - **Peso médio por unidade** (para receitas que pedem a fruta em unidades): banana 150 g, maçã 150 g, laranja 200 g e limão 100 g, com casca. É uma estimativa, para conferir no teste.
    - **Contados um a um:** ovos (de 6 em 6), atum (latas), polpa de fruta (pacotes) e alho (cabeças).
5. **Itens de base** (sal, óleo, temperos, farinhas) e **itens de pacote** (torrada, pão de forma, café, achocolatado, maionese): entram uma vez, na quantidade de `compra`, quando algum prato precisa deles. Quando a receita dá o peso (exemplo: farinha de trigo do molho branco, em gramas), a página faz a conta.
6. **Ordem da lista:** pelas seções de compra (lista 5.6).

### 7.7 Montar o guardar e a cozinha
- **Guardar:** os passos da seção 7 do manual, só com os itens da compra calculada.
- **Cozinha:** os preparos da semana, cada um no seu bloco (campo `cozinha`), com o número de receitas da seção 7.6.
- **Potes:** a página diz, em cada preparo, o tamanho e o número de potes (seção 7.1.2), e mostra no fim da cozinha o total de cada tipo, como hoje.
- **Modo de fazer:** as fichas não têm o modo de fazer. Nesta versão, o texto de cada preparo do nível 1 fica no arquivo `monta.js` do site, tirado do Anexo A (seções A.3 e A.6), sem as quantidades. As quantidades aparecem à parte, já calculadas para a casa.

### 7.7.1 Ajuste da porção no fim da semana
No relatório da semana, a página pergunta, em separado para adultos e para crianças: **"A porção foi pouca, certa ou muita?"** (manual, seção 0.9).

| Resposta | Na semana seguinte |
| --- | --- |
| Pouca | A porção de carboidrato aumenta ¼ (exemplo: arroz de 170 g para cerca de 210 g) |
| Certa | Nada muda |
| Muita | A porção de carboidrato diminui ¼ (exemplo: arroz de 170 g para cerca de 130 g) |

- **A proteína não muda** (manual, seção 5.4).
- **Para a página:** o ajuste é guardado como um número que multiplica o carboidrato (1,25 ou 0,75) e entra no cálculo da semana seguinte, junto com o número de porções da casa.

### 7.8 Quando a página não consegue montar
- **Falta mínimo:** o botão não funciona e a página diz o que marcar (seção 7.2).
- **Um prato não fecha o molde:** ele sai da lista de pratos possíveis daquela refeição.
- **A semana não fecha mesmo com o mínimo** (acontece com poucos potes e poucos pratos feitos na hora): a página avisa "Marque mais alguns alimentos para variar o cardápio" e não mostra o cardápio pela metade. Na tela de escolha, a página testa a montagem antes de liberar o botão "Montar meu cardápio" e sugere marcar mais alimentos ou aumentar os potes.

---

## 8. Passo a passo para adicionar um item
1. **Procure se já existe**, pelo nome e pelos sinônimos (exemplo: "flocão" = "flocão de milho").
2. **Escolha o tipo:** ingrediente, preparo ou prato na hora (seção 1).
3. **Preencha a ficha inteira** (seções 2, 3 ou 4). Campo sem informação leva "—", nunca fica vazio.
4. **Use só palavras das listas fechadas** (seção 5).
5. **Ligue o item:** preencha `entra_em` e atualize o `entra_em` dos itens ligados a ele, nos dois sentidos.
6. **Defina os substitutos:** pelo menos 2, com o mesmo papel principal.
7. **Confira a composição,** inclusive os ingredientes escondidos. Num preparo, some as etiquetas de todos os ingredientes.
8. **Confira o nível:** um item novo nunca entra num nível mais baixo que os itens que ele usa.
9. **Confira a tela de escolha:** o item aparece num grupo (`escolha`) ou entra sozinho (`escolha: —`)? Um prato na hora nunca aparece.
10. **Registre no histórico do Anexo A** e, se o item for novo no método, como lacuna na seção A.7.

---

## 9. Exemplos preenchidos

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
escolha: Frutas
recomendado: não
substitutos: maca-gala, mamao-formosa
composicao: —
obs: —
```

**Ingrediente recomendado**
```
id: tapioca-goma
nome: Tapioca (goma)
secao: mercearia · subsecao: farinhas
grupo: farináceos · papel: carboidrato
compra: kg · 1 kg
aproveitavel: 100%
guardar: inteiro · original · despensa
validade: despensa meses
nivel: 1
refeicoes: café, lanche da manhã, lanche da tarde, ceia
entra_em: tapioca-mucarela, crepioca-banana
escolha: Bases do café e dos lanches
recomendado: sim
substitutos: flocao-de-milho, pao-de-forma
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
refeicoes: —
entra_em: frango-molho-branco, macarrao-molho-branco, fricasse
escolha: —
recomendado: não
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

## 10. Formato para a página (JavaScript)
A página lê os dados como objetos do JavaScript. Cada ficha vira um objeto com os mesmos campos:

```js
{ id: "banana-nanica", tipo: "ingrediente", nome: "Banana nanica",
  secao: "hortifrúti", subsecao: "frutas", grupo: "frutas", papel: ["fruta"],
  compra: { unidade: "kg", qtd: 2 }, aproveitavel: 0.65,
  guardar: "inteira · fruteira; madura vira kit",
  validade: { fruteira: "4 a 7 dias", freezer: "em kit" },
  nivel: 1, refeicoes: ["café","lanche da manhã","lanche da tarde","ceia"],
  entra_em: ["kit-vitamina-base","mingau","bolo-banana","crepioca-banana"],
  escolha: "Frutas", recomendado: false,
  substitutos: ["maca-gala","mamao-formosa"],
  composicao: [], obs: "" }
```

Regras do formato:
- Campos com mais de um valor (`papel`, `refeicoes`, `entra_em`, `substitutos`, `composicao`) são **listas** entre colchetes, mesmo quando têm um item só.
- Porcentagens viram número decimal: 65% = `0.65`.
- Quantidades levam número e unidade separados: `{ unidade: "g", qtd: 50 }`.
- `recomendado` vira `true` (sim) ou `false` (não).
- `escolha: —` vira `escolha: ""`.
- **Todas as fichas ficam num arquivo só,** `banco.js`, lido por todas as semanas. Ele substitui os `dados-semanaN.js` quando a montagem automática estiver pronta.

---

## 11. Histórico

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 08/11/2026 | Criação: tipos de registro, fichas, listas fechadas, regras de troca, passo a passo, exemplos e formato para a página |
| 1.1 | 08/11/2026 | Versões do manual (3.16) e do Anexo A (1.13) atualizadas; embalagem "forminha" trocada por "cubo", como no manual; as fichas preenchidas passam a ficar no arquivo de fichas |
| 1.2 | 09/11/2026 | Decisão do admin: a tela "Do que você não gosta?" sai e entra "O que você quer comer?", com escolha por grupos. Campo `nao_gosto` trocado por `escolha`; campo novo `recomendado` (tapioca, cuscuz e torta); campo `refeicoes` também no preparo; lista 5.8 com os grupos da tela nova; 4 módulos novos na lista 5.10 (recheio pronto, doce de frigideira, arroz e feijão na hora, acompanhamento na hora); seção 6 passa a ser de substitutos; seção 7 nova com as regras de montagem da semana (tela de escolha com níveis 2 a 4 só para ver, pratos possíveis, mínimo por refeição, medidor de variedade, distribuição na semana, cálculo da compra, guardar e cozinha); arquivo único `banco.js` para a página; manual 3.17 |
| 1.3 | 09/11/2026 | Decisões do admin: os 4 módulos novos saem da lista 5.10 e ficam pendentes até o banco ter uma base sólida; a página recebe adultos e crianças (até 4 pessoas, criança com menos de 10 anos conta ½) e os potes que a pessoa tem; objetivo único no teste (comer melhor e praticidade); potes de 370, 640 e 1040 ml por número de porções da casa, com potes iguais quando não cabe; tela de potes com o que falta para a semana completa; ajuste da porção de carboidrato no fim da semana; manual 3.18 |
| 1.4 | 09/11/2026 | Decisão do admin sobre o farelo de aveia na tela de escolha: marca `(opcional)` para ingrediente que não trava o prato (seções 3 e 7.3); substituto pode ser um item que não aparece na tela (seção 6); Anexo A 1.14 |
| 1.5 | 09/11/2026 | Regras que a tela de escolha precisou, aprovadas pelo admin: o item principal e os preparos não são trocados, e o substituto é sempre um ingrediente (seção 6); regras da contagem de pratos (seção 7.3); medidor de Legumes e folhas pelos acompanhamentos (seção 7.4); quantidade sugerida de potes (10 de porção e 4 da praça) e torta fora da semana com até 10 potes de porção, com aviso (seção 7.1.2) |
| 1.6 | 09/11/2026 | Decisões da montagem automática (site, entrega 3), aprovadas pelo admin: pote de 640 ml com 4 separados para a praça e aviso quando faltam potes da praça (7.1.2); regra das 3 vezes no almoço, lanche da tarde, janta e ceia; validade de 2 dias só na segunda; ceia com preferência por carboidrato; limite de potes com pratos feitos na hora e volta atrás quando um dia não fecha (7.5); peso médio por unidade, itens contados um a um e itens de pacote; receita parcial quando a sobra não cabe nos potes (7.6); modo de fazer no `monta.js` (7.7); teste da semana antes de liberar o botão (7.8) |
