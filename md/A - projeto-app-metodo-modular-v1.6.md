# Projeto App · Método Modular de Alimentação
## Visão do produto e do negócio

**Versão 1.6** · Criado em 07/11/2026 · Última atualização: 09/11/2026

---

## 0. Para a IA (leia primeiro)
- **Do que trata este projeto:** transformar o Método Modular de Alimentação num produto que as pessoas usem e paguem, como um app, uma página na internet, um produto digital ou uma assinatura.
- **Com quem você está falando:** o criador do método (o admin), não a pessoa que usa o método. Não conduza a Fase 1 do manual.
- **Papel da IA:** ajudar a planejar o produto, as telas, as funções, os testes, os custos, a divulgação e a forma de ganhar dinheiro.
- **Tom:** linguagem simples, sem jargão técnico. Quando um termo técnico for necessário, explique em uma frase. Respostas diretas ao que foi perguntado.
- **O método em si** (manual, Anexo A, padrão e fichas do banco de dados) fica neste projeto. Não altere esses arquivos sem confirmar com o admin. Se um pedido for contra uma regra do manual, avise antes de mudar.
- **Ao adicionar ou mudar alimentos, ingredientes, preparos ou pratos,** siga o padrão do banco de dados (a versão mais alta) e escreva a ficha no arquivo de fichas.
- **Não adicione nem apague arquivos do Projeto.** Entregue o arquivo para o admin baixar e atualizar.
- **No começo de cada conversa,** leia o Anexo B (a versão mais alta) para saber onde o projeto parou. No fim, entregue o registro novo da conversa para o admin atualizar o Anexo B.
- **Confirme antes de mudar** este arquivo. Toda mudança gera versão (1.1, 1.2 e assim por diante) e entra no histórico da seção 8.

---

## 1. Arquivos do projeto
Cada arquivo leva uma letra maiúscula na frente, para ficar em ordem alfabética, e a versão no nome (exemplo: `Z1 - anexo-a-v1.14.md`). Toda mudança gera uma versão nova, com o número no nome e registro no histórico. Usar sempre a versão mais alta que estiver no projeto.

| Letra | Arquivo | Para que serve |
| --- | --- | --- |
| A | Este arquivo (`projeto-app-metodo-modular`) | Visão do produto, decisões e próximos passos |
| B | Manual (`metodo-modular-alimentacao`) | As regras do método: é o que o app precisa seguir |
| C | Padrão do banco de dados (`padrao-banco-de-dados`) | O formato e as etiquetas de cada item, e as regras para a página montar a semana sozinha |
| D | Fichas do banco de dados (`fichas-banco-de-dados`) | Os itens já escritos no formato do padrão, prontos para a página |
| Z1 | Anexo A (`anexo-a`) | Os dados: catálogo, receitas e tabelas. É a fonte do banco de dados do app |
| Z2 | Anexo B (`anexo-b`) | O registro das conversas: o que foi feito, decidido e deixado pendente |

**No GitHub:** os arquivos do método ficam também na pasta `md` do repositório `ratto13/app-rotina`, junto com o site. O repositório é público, então qualquer pessoa pode ver esses arquivos (para esconder: arquivo `.gitignore` com a linha `md/` e o comando `git rm -r --cached md`).

---

## 2. A ideia em poucas linhas
- **O problema:** quem tem dificuldade de manter uma rotina come mal, gasta com delivery e desperdiça comida.
- **A solução:** organizar a semana. A pessoa compra, guarda e cozinha de uma vez, divide tudo em porções e congela. Durante a semana, só monta o prato e esquenta.
- **O que torna o método diferente:** não é contador de calorias nem livro de receitas. É um sistema que ensina a organizar a semana, com um estoque contado em potes, um cardápio montado com o que a pessoa escolheu comer e uma lista de compras que sai do cardápio. A pessoa avança por níveis, aos poucos.
- **Para quem é:** pessoas que têm dificuldade de manter uma rotina e se alimentam mal, sozinhas ou em casas de até 4 pessoas. O produto precisa ser muito simples e cobrar pouco esforço por dia.

---

## 3. O que um app resolve melhor que a conversa
- **Estoque salvo:** a conversa esquece o estoque de uma semana para a outra; o app guarda.
- **Lembretes:** a IA só responde quando a pessoa escreve. O app pode avisar ("hora de pôr o feijão de molho", "o frango está na cura há 20 horas", "dia da conferência").
- **Menos digitação:** marcar o que comeu, o que sobrou e o que acabou com um toque.
- **Escolha clara:** a pessoa marca o que quer comer e vê na hora quanta variedade o cardápio vai ter.

---

## 4. Decisões tomadas
- **Primeiro provar que funciona, depois construir.** Ideia sozinha não se vende. O que tem valor é a prova: pessoas usando, seguindo a rotina e economizando.
- **Começar pequeno e barato:** a primeira versão deve custar quase só tempo.
- **Primeira versão em página na internet** (abre no navegador do celular), não um app de loja: não paga taxa de loja e usa o que o admin está aprendendo no curso de front-end. Ela já existe, no GitHub Pages: https://ratto13.github.io/app-rotina/.
- **A página monta a semana sozinha, sem IA,** seguindo as regras de montagem do padrão do banco de dados (seção 7). As mesmas escolhas dão sempre o mesmo cardápio. A IA fica para montar um cardápio do zero ou para pedidos fora do padrão.
- **A pessoa escolhe o que vai comer** (tela "O que você quer comer?"), em vez de dizer só do que não gosta. Assim o cardápio não é uma surpresa. Tapioca, cuscuz, farelo de aveia e torta vêm marcados como recomendados.
- **A página pergunta quem come em casa e quantos potes a pessoa tem.** Até 4 pessoas; criança com menos de 10 anos conta meia porção. Um pote por refeição da casa: 370 ml para 1 pessoa, 640 ml para 2 e 1040 ml para 3 ou 4.
- **Objetivo único no teste:** comer melhor e praticidade, com a porção base do manual. No fim da semana, a pessoa diz se a porção foi pouca, certa ou muita, e o carboidrato se ajusta.
- **O método em teste não atende quem tem restrição alimentar.** A página avisa e recomenda um nutricionista.

---

## 5. Caminho sugerido
1. **Página de teste (em andamento):** a pessoa diz quem come em casa, quantos potes tem e o que quer comer, e a página monta o cardápio, a compra, o guardar e a cozinha da semana. No fim, a pessoa envia um relatório para menumodular@gmail.com.
2. **Teste com pessoas reais (sem gastar):** 2 ou 3 pessoas usam a página por 4 semanas. Anotar o tempo de cozinha, o dinheiro gasto, as refeições seguidas, o que desperdiçou e onde travaram.
3. **Depois:** lembretes, níveis 2 a 4, conferência semanal, restrições alimentares e o resto.

**Formas de ganhar com o método**, da mais simples para a mais complexa:
1. **Produto digital** (guia ou curso), vendido na Hotmart.
2. **Assistente por assinatura,** com acompanhamento semanal.
3. **App próprio.**
4. **Vender ou licenciar** para nutricionistas, academias ou empresas de marmita, depois de ter usuários e resultados.

---

## 6. Custos (valores aproximados)
- **Construir:** de R$ 30 mil a mais de R$ 150 mil, se for contratado. Se for feito pelo admin, o custo é o tempo.
- **Divulgar:** anúncios, conteúdo e parcerias, todo mês. Costuma custar mais que construir.
- **Manter:**
    - correções e atualizações, cerca de 15% a 20% do custo de construção por ano;
    - servidor e banco de dados, de R$ 0 a R$ 100 por mês no começo;
    - a IA, alguns reais por usuário por mês, que precisam caber no preço.
- **Lojas:**
    - Google Play, cerca de US$ 25 uma vez;
    - Apple, cerca de US$ 99 por ano;
    - 15% a 30% das vendas feitas dentro do app.
- **Outros:** design, termos de uso e política de privacidade (LGPD), registro da marca no INPI e revisão por uma nutricionista.

---

## 7. Cuidados
- **Nutricionista:** no Brasil, montar dieta é trabalho de nutricionista. O método trata de organização e de porções, não de dieta. Ter uma profissional revisando dá credibilidade e protege o projeto. Precisam de revisão a tabela de proteína, a meia porção da criança e o ajuste da porção.
- **Marca:** registrar o nome quando estiver definido.
- **Dados das pessoas:** o app guarda gostos, quem come em casa e a rotina, por isso precisa seguir a LGPD. Na página de teste, tudo fica salvo só no navegador da pessoa.
- **Público:** quem larga rotinas também larga apps. Cada tela precisa ser simples e rápida.

**Pendências**
- Definir quem serão as primeiras pessoas do teste.
- Definir o nome do produto.
- Escolher o primeiro formato de venda.

---

## 8. Histórico

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 07/11/2026 | Criação: visão do produto, decisões, caminho sugerido, custos e cuidados |
| 1.1 | 08/11/2026 | Arquivos com a versão no nome, inclusive este (usar sempre a mais alta); relatório de receitas e lacunas na lista de arquivos; a IA pode alterar os arquivos do método quando o admin pedir |
| 1.2 | 08/11/2026 | Lista de arquivos com as letras, o padrão e as fichas do banco de dados (sai o relatório); o método fica neste projeto, com confirmação do admin antes de mudar; instruções do projeto iguais às que estão no Claude |
| 1.3 | 08/11/2026 | Anexo B na lista de arquivos, com os nomes Z1 e Z2; leitura do Anexo B no começo de cada conversa; pasta `md` do repositório; instruções do projeto atualizadas |
| 1.4 | 09/11/2026 | Decisões de 09/11: a página monta a semana sozinha, sem IA, a partir do que a pessoa escolhe; pessoas, potes e objetivo único no teste; caminho sugerido com a página de teste em andamento; cuidados com a revisão da nutricionista e os dados salvos no navegador; instruções do projeto com o arquivo de fichas |
| 1.5 | 09/11/2026 | Cópia das instruções do projeto com os arquivos novos do site: `banco.js` e `escolha.js` |
| 1.6 | 09/11/2026 | Cópia das instruções do projeto com o arquivo novo do site: `monta.js` |

---

**Instruções para o projeto** (cópia do que está nas instruções do Projeto no Claude)
> Você ajuda o criador do Método Modular de Alimentação (o admin) a transformar o método num produto. Não é uma pessoa usando o método: não conduza a Fase 1 do manual.
>
> Linguagem simples, sem jargão técnico. Respostas diretas ao que foi perguntado, sem misturar outros assuntos.
>
> Arquivos do método (manual, Anexo A, padrão e fichas do banco de dados):
> - Não altere sem confirmar comigo. Se um pedido for contra uma regra do manual, avise antes de mudar.
> - Toda mudança gera nova versão, com o número no nome do arquivo (ex.: anexo-a-v1.12.md) e registro no histórico.
> - Não adicione nem apague arquivos do Projeto. Entregue o arquivo para eu baixar e atualizar.
> - Manter a letra em maiúsculo para propósito de organização de arquivos de forma alfabética
> - Ao adicionar ou mudar alimentos, ingredientes, preparos ou pratos, siga o arquivo padrao-banco-de-dados (a versão mais recente).
> - No começo de cada conversa, leia o anexo-b (a versão mais recente) para saber onde o projeto parou.
>
> Site de teste:
> - Fica no GitHub (ratto13/app-rotina) e é publicado pelo GitHub Pages.
> - Arquivos: index.html e home.css (home); semana1.html, semana2.html…; banco.js (fichas de todos os alimentos e pratos, gerado do arquivo de fichas); escolha.js (perguntas do começo e tela "O que você quer comer?"); monta.js (monta a Semana 1 sozinha, a partir das respostas: cardápio, compra, guardar e cozinha); dados-semanaN.js (dados de cada semana; na Semana 1, só o modelo); script.js (lógica, igual para todas as semanas); style.css.
> - Estou aprendendo front-end: comente o código bloco por bloco, em português.
> - Ao mudar o site, entregue só os arquivos que mudaram, diga quais substituir e passe os comandos do git.
> - O site segue as regras do manual. O método está em teste e não serve para pessoas com restrição alimentar.
> - Os relatórios dos testadores vão para menumodular@gmail.com.
