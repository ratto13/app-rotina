# Projeto App · Método Modular de Alimentação
## Visão do produto e do negócio

**Versão 1.2** · Criado em 07/11/2026 · Última atualização: 08/11/2026

---

## 0. Para a IA (leia primeiro)
- **Do que trata este projeto:** transformar o Método Modular de Alimentação num produto que as pessoas usem e paguem, como um app, uma página na internet, um produto digital ou uma assinatura.
- **Com quem você está falando:** o criador do método (o admin), não a pessoa que usa o método. Não conduza a Fase 1 do manual.
- **Papel da IA:** ajudar a planejar e construir o produto (telas, funções, site de teste, banco de dados), os testes, os custos, a divulgação e a forma de ganhar dinheiro.
- **Tom:** linguagem simples, sem jargão técnico. Quando um termo técnico for necessário, explique em uma frase. Respostas diretas ao que foi perguntado.
- **Arquivos do método** (manual, Anexo A e padrão do banco de dados): ficam neste Projeto. A IA só altera quando o admin pedir, e avisa antes se o pedido for contra uma regra do manual. Uma ideia que muda o método e não foi pedida vira sugestão, sem mexer nos arquivos.
- **Arquivos do Projeto:** a IA não adiciona nem apaga arquivos do Projeto. Entrega o arquivo novo para o admin baixar e atualizar.
- **Versões:** toda mudança num arquivo gera uma versão nova (1.1, 1.2…), com o número no nome do arquivo e o registro no histórico. Confirme com o admin antes de mudar este arquivo.

---

## 1. Arquivos do projeto
Cada arquivo leva a versão no nome (exemplo: `anexo-a-v1.12.md`). Usar sempre a versão mais alta que estiver no Projeto. As letras no começo do nome (A, B, C, Z) só servem para ordenar a lista.

| Arquivo | Para que serve | Liga com |
| --- | --- | --- |
| Este arquivo (`projeto-app-metodo-modular`) | Visão do produto, decisões, site de teste e próximos passos | Todos |
| Manual (`metodo-modular-alimentacao`) | As regras do método: é o que o site e o app precisam seguir | Anexo A (dados) |
| Anexo A (`anexo-a`) | Os dados: catálogo, receitas e tabelas, que viram o banco de dados do app | Manual (regras) e padrão (formato) |
| Padrão do banco de dados (`padrao-banco-de-dados`) | Como escrever cada alimento, preparo e prato, com as etiquetas que permitem as trocas | Manual (listas fechadas) e Anexo A (dados) |

**Em caso de conflito entre arquivos:** vale o manual.

---

## 2. A ideia em poucas linhas
- **O problema:** quem tem dificuldade de manter uma rotina come mal, gasta com delivery e desperdiça comida.
- **A solução:** organizar a semana. A pessoa compra, guarda e cozinha de uma vez, divide tudo em porções individuais e congela. Durante a semana, só monta o prato e esquenta.
- **O que torna o método diferente:** não é contador de calorias nem livro de receitas. É um sistema que ensina a organizar a semana, com um estoque contado em potes, um cardápio montado a partir do estoque e uma lista de compras que sai do cardápio. A pessoa avança por níveis, aos poucos.
- **Para quem é:** pessoas que têm dificuldade de manter uma rotina e se alimentam mal. O produto precisa ser muito simples e cobrar pouco esforço por dia.
- **Para quem não é (na versão de teste):** pessoas com restrição alimentar (alergia, intolerância, doença celíaca, diabetes, dieta vegetariana).

---

## 3. O que um app resolve melhor que a conversa
- **Estoque salvo:** a conversa esquece o estoque de uma semana para a outra; o app guarda.
- **Lembretes:** a IA só responde quando a pessoa escreve. O app pode avisar ("hora de pôr o feijão de molho", "o frango está na cura há 20 horas", "dia da conferência").
- **Menos digitação:** marcar o que comeu, o que sobrou e o que acabou com um toque.

---

## 4. Decisões tomadas
- **Primeiro provar que funciona, depois construir.** Ideia sozinha não se vende. O que tem valor é a prova: pessoas usando, seguindo a rotina e economizando.
- **Começar pequeno e barato:** a primeira versão deve custar quase só tempo.
- **Primeira versão em página na internet** (abre no navegador do celular), não um app de loja: não paga taxa de loja e usa o que o admin está aprendendo no curso de front-end.
- **O teste é feito pelo site** (seção 5), com semanas prontas. A personalização é feita por trocas simples, sem IA.
- **Renda e nome do produto ficam para depois** do teste.

---

## 5. Site de teste
- **Endereço:** https://ratto13.github.io/app-rotina/ (repositório `ratto13/app-rotina`, publicado pelo GitHub Pages).
- **Caminho da pessoa:** home → aviso e explicação de como o cardápio é montado → pergunta 1 (quantas refeições por dia: 6, 5, 4 ou 3) → pergunta 2 (do que não gosta) → cardápio da semana para aprovar → compra → guardar → cozinha → cardápio do dia a dia → estoque → relatório.
- **Relatório:** dividido em "Seu relatório" (o que a pessoa fez) e "Feedback do método". É enviado por e-mail para menumodular@gmail.com (ou copiado e colado).
- **Semanas:** Semana 1 e Semana 2, no nível 1. A Semana 2 começa com o que sobrou no freezer da Semana 1.
- **Trocas sem IA:** a pessoa pode tirar tapioca, cuscuz, torrada, pão de forma, mingau e atum. A página troca por outra peça do mesmo papel e tira o item da compra. Pratos do freezer, frutas e saladas ainda não mudam.
- **Limite:** o que a pessoa marca fica salvo só no celular e no navegador dela.

**Arquivos do site**

| Arquivo | O que tem |
| --- | --- |
| `index.html` e `home.css` | A home, que explica o método |
| `semana1.html`, `semana2.html`… | A página de cada semana (só a estrutura) |
| `dados-semanaN.js` | Os dados de cada semana: compra, passos de guardar e de cozinhar, cardápio e estoque esperado. Seguem a lista sugerida e os exemplos do Anexo A |
| `script.js` | A lógica, igual para todas as semanas |
| `style.css` | O visual das semanas |

**Regras para mexer no site**
- O site segue o manual. Os dados da Semana 1 seguem os exemplos do Anexo A (seções A.6.1 a A.6.5): quando o anexo mudar, conferir se o `dados-semana1.js` precisa mudar junto.
- O código é comentado bloco por bloco, em português.
- Ao mudar o site, entregar só os arquivos que mudaram, dizer quais substituir e passar os comandos do git.

---

## 6. Próximos passos
1. **Teste com pessoas reais:** 2 ou 3 pessoas usam o site por 2 semanas e mandam o relatório. Anotar o tempo de cozinha, o dinheiro gasto, as refeições seguidas, o que desperdiçou e onde travaram.
2. **Banco de dados:** ampliar alimentos e receitas seguindo o `padrao-banco-de-dados`, para a lista "Do que você não gosta?" crescer. **Decisão do admin:** na mesma ampliação, os itens que já existem no Anexo A também passam para o formato do padrão. Na próxima versão do Anexo A, também:
    - fechar a lacuna do hambúrguer na seção A.7 (decidido no manual 3.16: o [moldado] é exceção e leva o tempero na massa);
    - ajustar a restrição "Receitas guardadas cruas: sem tempero" da matriz (A.4.1), citando a exceção do [moldado].
3. **Depois:** mais semanas, lembretes, níveis, conferência semanal e o resto.

**Formas de ganhar com o método**, da mais simples para a mais complexa:
1. **Produto digital** (guia ou curso), vendido na Hotmart.
2. **Assistente por assinatura,** com acompanhamento semanal.
3. **App próprio.**
4. **Vender ou licenciar** para nutricionistas, academias ou empresas de marmita, depois de ter usuários e resultados.

---

## 7. Custos (valores aproximados)
- **Construir:** de R$ 30 mil a mais de R$ 150 mil, se for contratado. Se for feito pelo admin, o custo é o tempo.
- **Divulgar:** anúncios, conteúdo e parcerias, todo mês. Costuma custar mais que construir.
- **Manter:**
    - correções e atualizações, cerca de 15% a 20% do custo de construção por ano;
    - servidor e banco de dados, de R$ 0 a R$ 100 por mês no começo (o site de teste no GitHub Pages é gratuito);
    - a IA, alguns reais por usuário por mês, que precisam caber no preço.
- **Lojas:**
    - Google Play, cerca de US$ 25 uma vez;
    - Apple, cerca de US$ 99 por ano;
    - 15% a 30% das vendas feitas dentro do app.
- **Outros:** design, termos de uso e política de privacidade (LGPD), registro da marca no INPI e revisão por uma nutricionista.

---

## 8. Cuidados
- **Nutricionista:** no Brasil, montar dieta é trabalho de nutricionista. O método trata de organização e de porções, não de dieta. Ter uma profissional revisando dá credibilidade e protege o projeto.
- **Restrição alimentar:** o site avisa que o método está em teste e não serve para quem tem restrição alimentar.
- **Marca:** registrar o nome quando estiver definido.
- **Dados das pessoas:** o app guarda gostos, peso e rotina, por isso precisa seguir a LGPD.
- **Público:** quem larga rotinas também larga apps. Cada tela precisa ser simples e rápida.

**Pendências**
- Definir quem serão as primeiras pessoas do teste.
- Definir o nome do produto.
- Escolher o primeiro formato de venda.

---

## 9. Histórico

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 07/11/2026 | Criação: visão do produto, decisões, caminho sugerido, custos e cuidados |
| 1.1 | 08/11/2026 | Arquivos com a versão no nome, inclusive este (usar sempre a mais alta); relatório de receitas e lacunas na lista de arquivos; a IA pode alterar os arquivos do método quando o admin pedir |
| 1.2 | 08/11/2026 | Pendências para o próximo Anexo A (conversão dos itens antigos para o padrão; lacuna do hambúrguer resolvida no manual 3.16). Lista de arquivos com o padrão do banco de dados e a ligação entre eles (sai o relatório de receitas e lacunas); regras de arquivos e versões na seção 0, alinhadas com as instruções do Projeto; nova seção 5 com o site de teste (endereço, caminho da pessoa, relatório por e-mail, trocas, arquivos e regras); próximos passos atualizados (teste pelo site, banco de dados); público fora do teste (restrição alimentar); bloco de instruções do Projeto removido, porque elas ficam nas configurações do Projeto |
