# Anexo B
## Registro das conversas do projeto

**Versão 1.0** · Criado em 08/11/2026

---

## B.0 Para a IA (leia primeiro)
- **Para que serve:** guardar, de forma curta, o que foi decidido, criado e deixado pendente em cada conversa do projeto, para nada importante se perder entre uma conversa e outra.
- **Não repete os outros arquivos.** As regras ficam no manual, os dados no Anexo A, o formato do banco no padrão e a visão do produto no arquivo do projeto. Aqui fica só o resumo, com a indicação de onde a decisão foi aplicada.
- **Quando registrar:** no fim de uma conversa, ou quando o admin pedir ("registrar", "anexo B"). A IA entrega o registro novo para o admin atualizar o arquivo; não adiciona nem muda arquivos do Projeto por conta própria.
- **Formato de cada registro:** data e assunto no título e, abaixo, as cinco partes, só as que tiverem conteúdo:
    1. **Feito:** o que foi criado ou mudado.
    2. **Decidido:** escolhas do admin, com o arquivo onde foram aplicadas.
    3. **Não mudar:** pedidos avaliados e mantidos como estão, com o motivo.
    4. **Pendente:** o que ficou para depois.
    5. **Para lembrar:** explicações e cuidados que podem ser úteis de novo.
- **Ordem:** o registro mais novo fica no topo da seção B.1.
- **Pendências:** quando uma pendência for resolvida, marcar com ✅ e a data, sem apagar.
- **Versões:** cada registro novo gera uma versão nova deste arquivo (1.1, 1.2…), com o número no nome e o registro no histórico (seção B.2).

---

## B.1 Registros

### 08/11/2026 · Site de teste, Semana 2, padrão do banco de dados e manual 3.16

**Feito**
- **Site de teste** no GitHub (`ratto13/app-rotina`), publicado pelo GitHub Pages em https://ratto13.github.io/app-rotina/.
- **Arquivos do site:** `index.html` e `home.css` (home); `semana1.html` e `semana2.html`; `dados-semana1.js` e `dados-semana2.js` (dados de cada semana); `script.js` (lógica, igual para todas as semanas); `style.css`. Código comentado bloco por bloco, em português.
- **Home** explicando o método: problema, como funciona em 4 passos, o que torna diferente, vantagens, níveis e dúvidas.
- **Caminho da pessoa:** home → aviso de teste e explicação de como o cardápio é montado → pergunta 1 (quantas refeições por dia) → pergunta 2 (do que não gosta) → cardápio da semana para aprovar → compra → guardar → cozinha → cardápio do dia a dia → estoque → relatório.
- **Compra, Guardar e Cozinha** com botão "Marcar todos" em cada grupo.
- **No fim da Cozinha,** o quadro "Confira: o que você deve ter agora", no formato "5x pote de feijão", com o total de potes.
- **Aviso "Use primeiro"** (cenoura ralada, mamão picado e frango desfiado) no fim do Guardar. O dos crisps fica no item da Cozinha.
- **Cardápio:** primeiro a tabela enxuta da semana, com os dias na horizontal e cores por marcação (comi, troquei, pulei); depois o dia a dia.
- **Estoque do freezer automático:** entra o que foi guardado e cozinhado, sai o que foi marcado como comido.
- **Relatório em duas partes:** "Seu relatório" (o que a pessoa fez, gasto, tempos, rotina, refeições por dia, o que não gosta) e "Feedback do método". Botão de enviar por e-mail para menumodular@gmail.com e botão de copiar.
- **Semana 2** no nível 1: começa com as sobras reais da Semana 1 (ou as previstas), compra menor, sem torta e sem molho novo, os molhos que sobraram viram bolonhesa e frango ao molho branco, peito de peru no lugar do presunto (rodízio de frios), almoços e jantas trocados, 4 jantas sem salada. O botão "Começar a Semana 2" fica no fim do relatório da Semana 1.
- **Arquivo `padrao-banco-de-dados`** (v1.0 e v1.1): fichas, listas fechadas, etiquetas, regras de troca, passo a passo e formato para o site.
- **Arquivo do projeto v1.2** e **manual v3.16** (ver "Decidido").
- **Lista da Semana 1 no site** igual ao Anexo A 1.12: 36 ovos, açúcar em Matinais, orégano na compra.

**Decidido**
- **Refeições por dia:** a pessoa escolhe 6 (recomendado), 5 (sem ceia), 4 (sem ceia e sem lanche da manhã; a vitamina vai para o café) ou 3 (café, almoço e janta; a torta do lanche fica no freezer). A lista de compras não muda nesta versão. *Aplicado no site.*
- **"Do que você não gosta?"** fica, por enquanto, só com o que não muda a compra e a cozinha: tapioca e crepioca, cuscuz, torrada, pão de forma e lanche natural, mingau e atum. A troca é feita por regras, sem IA, e o item sai da lista de compras. *Aplicado no site.*
- **A lista vai crescer pelo banco de dados**, sem IA, seguindo o `padrao-banco-de-dados`. *Aplicado no padrão.*
- **Restrição alimentar:** o método em teste não atende. O site avisa e o manual manda explicar e recomendar uma nutricionista. Não gostar não é restrição. *Aplicado no site e no manual 3.16.*
- **Hambúrguer e almôndega** (moldado) são exceção da regra de guardar cru sem tempero: o tempero vai na massa. *Aplicado no manual 3.16; falta o Anexo A (ver "Pendente").*
- **Itens antigos do Anexo A** passam para o formato do padrão junto com a ampliação do banco de dados.
- **Regras de arquivos:** a versão vai no nome do arquivo; letra maiúscula no começo do nome para ordenar; a IA não adiciona nem apaga arquivos do Projeto e entrega o arquivo para o admin atualizar. *Aplicado nas instruções do Projeto e no arquivo do projeto v1.2.*
- **Hospedagem:** GitHub Pages, sem Vercel por enquanto.

**Não mudar**
- **Guarda rápida com tomates, laranja e limão:** pedido avaliado e mantido como está no manual. Esses itens passam pela higienização (passo 5) antes de guardar, e os tomates vão para a fruteira.

**Pendente**
- Subir para o Projeto o **arquivo do projeto v1.2** e o **padrão v1.1**, se ainda não tiverem sido trocados.
- **Próximo Anexo A:** converter os itens antigos para o padrão; fechar a lacuna do hambúrguer na seção A.7; ajustar a regra "guardadas cruas, sem tempero" da matriz (A.4.1), citando a exceção do moldado. *Conferir se o Anexo A 1.13 já fez isso.*
- **Ampliar o "Do que você não gosta?"** quando o banco de dados estiver pronto: bebidas, frios, frutas e verduras, e por último os pratos do freezer.
- **Trocar os `dados-semanaN.js`** para o formato do padrão quando o banco estiver pronto.
- **Semana 3** e as seguintes.
- **Definir as pessoas do teste,** o nome do produto e o primeiro formato de venda (ficam por último).

**Para lembrar**
- **Trocas sem IA:** dá para fazer só com o banco de dados, se cada item tiver papel no prato, refeições, substitutos e, nos pratos do freezer, receita e rendimento. A IA só é necessária para montar um cardápio do zero ou para pedidos fora do padrão.
- **O que a pessoa marca no site fica salvo só no celular e no navegador dela.** O admin só recebe o que vier pelo relatório.
- **Para atualizar o site:** salvar os arquivos na pasta do projeto e rodar `git add .`, `git commit -m "o que mudou"` e `git push`. O GitHub Pages se atualiza sozinho em 1 ou 2 minutos.
- **Na pasta do site, todos os arquivos ficam no mesmo nível**, sem subpastas, e sem espaços nem acentos nos nomes.
- **Antes da página no GitHub,** existiu uma versão publicada como artefato no Claude. O endereço oficial para os testadores é o do GitHub Pages.

---

## B.2 Histórico

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 08/11/2026 | Criação: regras do registro e o primeiro registro (site de teste, Semana 2, padrão do banco de dados e manual 3.16) |
