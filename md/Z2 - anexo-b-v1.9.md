# Anexo B
## Registro das conversas do projeto

**Versão 1.9** · Criado em 08/11/2026 · Última atualização: 09/11/2026

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

### 09/11/2026 · Escolha de alimentos, pessoas, potes e fichas do nível 1

**Feito**
- **Manual 3.18:** primeira compra pelo que a pessoa escolheu (6.2); até 4 pessoas, criança com menos de 10 anos conta meia porção (0.4 e 0.11); potes de 370, 640 e 1040 ml (4.6); plano de potes pela casa, sem dividir por pessoa (0.6); pergunta da porção na conferência (0.9).
- **Padrão 1.2, 1.3 e 1.4:**
    - campo `nao_gosto` trocado por `escolha`, campo novo `recomendado` e `refeicoes` também no preparo;
    - grupos da tela "O que você quer comer?" (lista 5.8);
    - regras de montagem da semana (seção 7): tela de escolha, pratos possíveis, mínimo por refeição, medidor de variedade, distribuição na semana, compra, guardar e cozinha;
    - pessoas e porções (7.1.1), potes (7.1.2) e ajuste da porção no fim da semana (7.7.1);
    - ingrediente `(opcional)` e substituto que não aparece na tela;
    - arquivo único `banco.js` para a página.
- **Anexo A 1.14:** a lista completa do nível 1 vira também a lista de opções da escolha; entram couve, pré-purê de batata, pão francês, queijo prato e peito de peru, marcados com †; salpicão sem milho no nível 1.
- **Arquivo do projeto 1.4:** visão do produto com a escolha de alimentos, a montagem sem IA, pessoas, potes e a página de teste em andamento; cópia das instruções com o arquivo de fichas.
- **Fichas 1.3:** cheiro-verde opcional no patê de ovo, limão e crisps opcionais nas saladas, e contagem de ingredientes corrigida.
- **Padrão 1.5:** regras da troca, da contagem de pratos e do medidor; quantidade sugerida de potes; torta fora da semana com até 10 potes.
- **Arquivo do projeto 1.5:** cópia das instruções com `banco.js` e `escolha.js`.
- **`escolha.js` (depois da entrega 2):** quantidade sugerida de potes e aviso da torta.
- **Site, entrega 4 (parte 1):** pergunta da porção no relatório (pouca, certa ou muita), em separado para adultos e crianças; a resposta vai para o texto do relatório e fica guardada como ajuste do carboidrato (1,25, 1 ou 0,75) para a semana seguinte (padrão, 7.7.1). Só o `script.js` mudou.
- **Arquivo do projeto 1.6:** cópia das instruções com o `monta.js`.
- **Site, entrega 3:** arquivo novo `monta.js`, que monta a Semana 1 a partir das respostas, sem IA: cardápio (com as regras do padrão, seção 7.5, e o limite de potes do manual, seção 0.6), lista de compras pelas porções da casa, guardar, cozinha (ingredientes já na quantidade da casa e modo de fazer) e conferência. Quando os potes acabam, o almoço e a janta são completados com pratos feitos na hora (manual, 0.6). A tela de escolha só libera o botão quando a semana fecha. `script.js`, `escolha.js`, `banco.js` (só o comentário do topo) e `semana1.html` ajustados. Testado com 400 combinações: nenhuma quebrou as regras, e o estoque fechou em todas.
- **Site, entrega 1:** arquivo `banco.js`, gerado das fichas, com 163 fichas (56 ingredientes, 60 preparos e 47 pratos na hora).
- **Site, entrega 2:** arquivo novo `escolha.js` com as 4 perguntas (quem come em casa, potes, refeições por dia e "O que você quer comer?", que substitui totalmente o "Do que você não gosta?"), o medidor de variedade, os níveis 2 a 4 trancados e o botão que só libera com o mínimo. `script.js`, `style.css`, `semana1.html` e `semana2.html` ajustados. O cardápio ainda é o fixo, com o aviso "Em construção"; o relatório já traz pessoas, potes e o que foi escolhido.
- **Fichas 1.1 e 1.2:** fichas de todos os itens do nível 1 (52 ingredientes, 17 preparos e 38 pratos na hora); as fichas da versão 1.0 passaram para os campos novos; contagem do que dá para montar no nível 1 (seção 4).

**Decidido**
- **A tela "Do que você não gosta?" sai.** Entra "O que você quer comer?", com escolha por grupos. O cardápio e a compra saem do que a pessoa escolheu, para ela saber o que vai comer. *Motivo: feedback de um testador, que foi clicando sem ler e não entendeu de onde veio o cardápio. Aplicado no padrão 1.2 e no manual 3.18 (6.2).*
- **Recomendados na tela:** tapioca, flocão de milho (cuscuz), farelo de aveia e torta de frango, já marcados, com a frase "O método foi pensado para estes lanches rápidos". A pessoa pode desmarcar. *Padrão 1.2 e fichas 1.2.*
- **Mínimo por refeição:** 3 pratos diferentes no almoço, no lanche da tarde, na janta e na ceia (e 3 acompanhamentos de vegetal no almoço e na janta); 2 bases no café; 1 vitamina e 2 bases no lanche da manhã. Sem o mínimo, a página não monta e diz o que marcar. *Padrão 1.2 (7.4), a partir da regra das 3 vezes do manual (0.12).*
- **Medidor de variedade** em cada grupo (falta pouco, mínimo, boa, ótima) e a frase "Quanto mais alimentos você marcar, mais variado fica o seu cardápio". *Padrão 1.2.*
- **Pão sem regra nova:** a regra das 3 vezes já impede o pão em todos os lanches. *Padrão 1.2.*
- **Níveis:** a primeira semana é sempre nível 1. Os níveis 2 a 4 aparecem na tela, fechados, só para ver, com o aviso "Libera quando você avançar de nível". *Padrão 1.2 (7.2), para seguir o manual (5.3).*
- **Pessoas:** até 4 por casa, todos com o mesmo objetivo no teste (comer melhor e praticidade, porção base). Criança com menos de 10 anos conta meia porção. *Manual 3.18 (0.11) e padrão 1.3.*
- **Potes:** o método foi pensado em potes de 370 ml. Um pote por refeição da casa: 370 ml para 1 pessoa, 640 ml para 2, 1040 ml para 3 ou 4. Quando não cabe, potes iguais (exemplo: 2 de 640 ml no lugar do de 1040 ml). Pote da praça de 640 ml. *Manual 3.18 (4.6) e padrão 1.3 (7.1.2).*
- **Tela de potes (opção C):** a página pergunta quantos potes de cada tipo a pessoa tem, monta a semana pela faixa do manual e mostra quantos faltariam para a semana completa. *Padrão 1.3.*
- **Ajuste da porção:** no fim da semana, "A porção foi pouca, certa ou muita?", em separado para adultos e crianças. Muda só o carboidrato, em ¼. A proteína não muda. *Manual 3.18 (0.9) e padrão 1.3 (7.7.1).*
- **Farelo de aveia na tela,** como recomendado. Sem ele, não há mingau de farelo, a vitamina sai sem farelo e o hambúrguer leva farinha de trigo. *Padrão 1.4 e fichas 1.2.*
- **Salpicão no nível 1, sem milho.** *Anexo A 1.14 e fichas 1.2.*
- **O banco cresce por partes:** primeiro só o nível 1, para achar uma base e um jeito de aplicar o método; depois entram os outros alimentos, aos poucos.
- **Site em 4 entregas:** (1) `banco.js`; (2) telas novas de perguntas, com a tela "O que você quer comer?" substituindo totalmente a "Do que você não gosta?"; (3) montagem automática do cardápio, da compra, do guardar e da cozinha; (4) pergunta da porção no relatório.
- **A Semana 2 fica para depois.** Primeiro, elaborar melhor o início (Semana 1).
- **Quantidade sugerida de potes** na tela de potes: 10 de porção e 4 da praça, com botão para preencher e exemplo do que vai em cada pote. *Padrão 1.5 (7.1.2) e `escolha.js`.*
- **Torta com até 10 potes de porção:** fica fora da semana, como manda o manual (0.6). A página avisa na tela de potes e na tela de escolha. *Padrão 1.5 (7.1.2) e `escolha.js`.*

**Pendente**
- **Site:** arquivo `banco.js` com as fichas; tela de pessoas e potes; tela "O que você quer comer?"; lógica que monta o cardápio, a compra, o guardar e a cozinha; pergunta da porção no relatório. ✅ 09/11/2026 em parte: entregas 1 (`banco.js`), 2 (telas de perguntas) e 3 (`monta.js`) feitas; falta a entrega 4 (pergunta da porção no relatório e decisão sobre o botão da Semana 2).
- **Padrão 1.5:** registrar as regras que a tela de escolha precisou e que o padrão ainda não diz: (1) o primeiro item de uma receita ou prato (o principal) não é trocado; (2) preparos não são trocados, e o substituto precisa ser um ingrediente; (3) um preparo que já é componente de um prato na hora não conta sozinho como prato; (4) no almoço e na janta, só conta como prato o que tem proteína; (5) os acompanhamentos de vegetal contam por prato, e não por módulo; (6) o medidor de Legumes e folhas olha os acompanhamentos, e os outros grupos olham os pratos. Confirmar com o admin. ✅ 09/11/2026 (padrão 1.5)
- **Instruções do Projeto:** acrescentar `banco.js` e `escolha.js` na lista de arquivos do site. ✅ 09/11/2026 (texto completo entregue e copiado nas instruções; cópia no arquivo do projeto 1.5)
- **Semana 2:** pensar depois, quando o início estiver bem resolvido. Hoje ela depende da Semana 1 fixa; decidir na entrega 4 se o botão "Começar a Semana 2" fica escondido durante o teste.
- **Instruções do Projeto:** incluir o arquivo de fichas na lista dos arquivos do método e, quando o site mudar, trocar `dados-semanaN.js` por `banco.js`. ✅ 09/11/2026 em parte: o texto com o arquivo de fichas está no arquivo do projeto 1.4, para o admin copiar nas instruções; a troca para `banco.js` fica para quando o site mudar.
- **Arquivo do projeto:** conferir se a visão do produto precisa citar a escolha de alimentos, as pessoas e os potes. ✅ 09/11/2026 (arquivo do projeto 1.4)
- **Fichas dos níveis 2 a 4:** ficam para depois. O admin quer pensar melhor o método antes.
- **Módulos novos** (recheio pronto, doce de frigideira, arroz e feijão na hora, acompanhamento na hora): ficam pendentes até o banco ter uma base sólida.
- **Limites de "boa" e "ótima" variedade:** ajustar com o resultado dos testes.
- **Meia porção da criança e ajuste de ¼ do carboidrato:** revisar com uma nutricionista.
- Subir para o Projeto o **padrão 1.4**, as **fichas 1.2**, o **Anexo A 1.14** e este **Anexo B 1.4**. ✅ 09/11/2026
- Subir para o Projeto o **arquivo do projeto 1.4** e este **Anexo B 1.5**, e copiar nas instruções do Projeto a linha "Arquivos do método (manual, Anexo A, padrão e fichas do banco de dados)". ✅ 09/11/2026
- Subir para o Projeto as **fichas 1.3** e este **Anexo B 1.6**. ✅ 09/11/2026
- Subir para o Projeto o **padrão 1.5**, o **arquivo do projeto 1.5** e este **Anexo B 1.7**. Trocar o `escolha.js` da pasta `scripts` pela versão nova e apagar as cópias que ficaram na raiz do Projeto. ✅ 09/11/2026
- Subir para o Projeto os arquivos da entrega 3 (`monta.js`, `script.js`, `escolha.js`, `banco.js` e `semana1.html`). ✅ 09/11/2026 (conferidos no Projeto)
- **Padrão 1.6:** registrar as decisões que a montagem precisou e que o padrão ainda não diz. Confirmar com o admin:
    1. o que dura 2 dias na geladeira entra só na segunda-feira (mesma conta da regra dos 3 e 4 dias);
    2. peso médio por unidade, para calcular a compra: banana 150 g, maçã 150 g, laranja 200 g e limão 100 g;
    3. itens de pacote (sal, óleo, torrada, pão de forma) entram 1 vez na compra; ovos, atum, polpa e alho são contados um a um;
    4. quando o pote de porção da casa é o de 640 ml, a página separa 4 deles para a praça;
    5. na ceia, a página prefere os pratos com carboidrato;
    6. o modo de fazer de cada preparo está no `monta.js`, tirado do Anexo A, porque as fichas não têm esse campo (decidir se entra um campo novo nas fichas).
- **Potes da praça:** a semana pode usar mais potes da praça do que a pessoa tem; a página ainda não limita. Decidir se limita ou só avisa.
- **Arquivo do projeto e instruções do Projeto:** acrescentar o `monta.js` na lista de arquivos do site. ✅ 09/11/2026 (arquivo do projeto 1.6; falta o admin colar a linha nas instruções)
- **Entrega 4 (parte 2):** decidir se o botão "Começar a Semana 2" fica escondido durante o teste. O ajuste da porção só entra na conta quando a semana seguinte for montada sozinha.
- Subir para o Projeto o **arquivo do projeto 1.6**, este **Anexo B 1.9** e o `scripts/script.js` novo; colar nas instruções do Projeto a linha nova de "Arquivos" do site.

**Para lembrar**
- **Como a página monta a semana (entrega 3):** refeição por refeição, de segunda a domingo; se um dia não fecha, ela volta e tenta a opção seguinte, e, se uma refeição inteira não fecha, tenta de novo começando por ela. Quando a pessoa muda as respostas, a semana é montada de novo e as marcações antigas são zeradas.
- **O que conta como prato diferente:** o módulo, não a combinação (manual, 0.12). Tapiocas e crepiocas contam como um prato só. No almoço e na janta, conta a proteína.
- **A página monta a semana sem IA, sempre do mesmo jeito:** as mesmas escolhas dão o mesmo cardápio, o que facilita o teste (padrão, 7.5).
- **Item que não aparece na tela** (sal, óleo, temperos, farinha de trigo) entra na compra sozinho quando um prato escolhido precisa dele.
- **Escolher um prato pronto traz a receita dele:** marcar a torta de frango coloca o frango na compra, mesmo sem marcar frango.

### 08/11/2026 · Aviso de restrição alimentar no manual 3.17

**Feito**
- **Manual 3.17:** aviso de restrição alimentar nas seções 0.1 e 0.4 (rodada 1).

**Decidido**
- **Alergias e restrições ficam para uma etapa avançada do projeto.** Nesta fase, o método não atende quem tem restrição alimentar: a IA dá um aviso, recomenda um nutricionista e não monta cardápio adaptado. Não gostar não é restrição. *Aplicado no manual 3.17.*

**Pendente**
- **Restrições alimentares no método:** voltar ao assunto numa etapa avançada do projeto.

### 08/11/2026 · Banco de dados ampliado, fichas e tempero do que é guardado cru

**Feito**
- **Revisão do Anexo A:** relatório de lacunas e de receitas novas (usado na conversa, fora do Projeto).
- **Anexo A 1.11:** tabelas soltas removidas; purê com 6 porções de 170 g; panelada com cerca de 200 g; almôndegas por porção; "Polvilho doce"; lista sugerida com orégano, açúcar em Matinais e 36 ovos.
- **Anexo A 1.12:** banco ampliado, tudo marcado com \* para revisão. 4 itens novos (pão francês, açafrão-da-terra, músculo, ricota), 5 kits novos, cerca de 30 receitas novas ou completadas, validade depois de descongelar e tabela de proteína por porção (A.5.6).
- **Anexo A 1.13 e manual 3.16:** regra do tempero do que é guardado cru (ver "Decidido"). A lacuna do hambúrguer saiu da seção A.7.
- **Manual 3.15:** porção da panelada (cerca de 200 g) e do salgado assado (cerca de 3 unidades) iguais ao Anexo A.
- **Padrão 1.1:** versões do manual e do Anexo A atualizadas, "forminha" trocada por "cubo", e as fichas passam a ficar no arquivo de fichas.
- **Arquivo novo `D - fichas-banco-de-dados-v1.0`:** 56 fichas no formato do padrão (4 ingredientes, 43 preparos e 9 pratos na hora), com os itens novos do Anexo A 1.12.
- **Arquivo do projeto 1.3:** lista de arquivos com A, B, C, D, Z1 e Z2, leitura do Anexo B no começo de cada conversa e pasta `md`.

**Decidido**
- **Guardado cru:** o que tem receita (hambúrguer, almôndega, nhoque, hambúrguer de atum) vai com o tempero da receita; a carne só porcionada, sem receita (bife fino, filé de peixe, linguiça), vai sem tempero. *Aplicado no manual 3.16 (seções 4.4 e 8.2) e no Anexo A 1.13 (A.4.1).*
- **Purê:** 170 g, como no manual. *Anexo A 1.11.*
- **Panelada:** cerca de 200 g (105 g de proteína e 100 g de molho). *Manual 3.15 e Anexo A 1.11.*
- **Ovos na primeira compra:** 36, o máximo da compra base. *Anexo A 1.11.*
- **Embalagem no padrão:** "cubo", como no manual. *Padrão 1.1.*
- **Fichas em arquivo separado** (D), para a página ler sem mexer no Anexo A. O Anexo A continua sendo a fonte. *Padrão 1.1 e arquivo de fichas 1.0.*

**Pendente**
- **Revisar os itens marcados com \* no Anexo A 1.12** e aprovar os níveis sugeridos nas fichas.
- **Padrão 1.2:** decidir os módulos sugeridos no fim do arquivo de fichas (recheio pronto, arroz e feijão na hora, acompanhamento na hora, doce de frigideira). (09/11/2026: o admin decidiu deixar pendente até o banco ter uma base sólida; ver o registro mais novo.)
- **Fichas dos itens antigos do Anexo A** e as ligações que faltam (seção 4 do arquivo de fichas). ✅ 09/11/2026 em parte: os itens do nível 1 ganharam ficha nas fichas 1.1; os dos níveis 2 a 4 continuam pendentes (ver o registro mais novo).
- **Tempo de preparo de cada receita** e **tabela de frutas da estação** no Anexo A.
- **Tabela de proteína por porção:** revisar com uma nutricionista.
- **Instruções do Projeto:** incluir o arquivo de fichas na lista dos "arquivos do método". ✅ 09/11/2026 (texto no arquivo do projeto 1.4)
- **Restrição alimentar no manual:** o registro anterior diz que o manual 3.16 manda explicar e recomendar uma nutricionista, mas o manual 3.16 que está no Projeto não tem essa regra. Decidir se ela entra numa versão 3.17. ✅ 08/11/2026 (manual 3.17)
- Subir para o Projeto o **arquivo do projeto 1.3**, o **padrão 1.1**, o **arquivo de fichas 1.0** e este **Anexo B 1.2**. ✅ 09/11/2026

**Para lembrar**
- **As quantidades, os tempos e a proteína das receitas novas são estimativas,** feitas a partir de receitas comuns, e não foram testadas na cozinha.
- **Se uma ficha e o Anexo A disserem coisas diferentes,** vale o Anexo A, e a ficha é corrigida.

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
- **Pasta `md` no GitHub:** os arquivos do método (manual, anexos, padrão e projeto) ficam na pasta `md`, junto com o site, e vão para o GitHub. O admin sabe que o repositório é público e que qualquer pessoa pode ver esses arquivos. Para esconder no futuro: arquivo `.gitignore` com a linha `md/` e o comando `git rm -r --cached md`.
- **Nomes no Projeto:** letra maiúscula no começo para ordenar (A projeto, B manual, C padrão, Z1 Anexo A, Z2 Anexo B).

**Não mudar**
- **Guarda rápida com tomates, laranja e limão:** pedido avaliado e mantido como está no manual. Esses itens passam pela higienização (passo 5) antes de guardar, e os tomates vão para a fruteira.

**Pendente**
- Subir para o Projeto o **arquivo do projeto v1.2** e o **padrão v1.1**, se ainda não tiverem sido trocados. ✅ 09/11/2026
- **Arquivo do projeto v1.3:** incluir o Anexo B na lista de arquivos (seção 1), com os nomes Z1 e Z2, e citar a pasta `md` do repositório. ✅ 08/11/2026 (arquivo do projeto 1.3)
- **Conferir a pasta do site:** `script.js`, `style.css` e `index.html` precisam ser as últimas versões entregues (a tela de perguntas tem o botão "Próxima pergunta"). ✅ 09/11/2026 (o `script.js` do Projeto tem o botão)
- **Próximo Anexo A:** converter os itens antigos para o padrão; fechar a lacuna do hambúrguer na seção A.7; ajustar a regra "guardadas cruas, sem tempero" da matriz (A.4.1), citando a exceção do moldado. ✅ 08/11/2026 em parte: a lacuna e a regra da matriz foram feitas no Anexo A 1.13; a conversão dos itens antigos continua pendente (ver o registro mais novo).
- **Ampliar o "Do que você não gosta?"** quando o banco de dados estiver pronto: bebidas, frios, frutas e verduras, e por último os pratos do freezer. ✅ 09/11/2026 (substituído: a tela sai e entra "O que você quer comer?")
- **Trocar os `dados-semanaN.js`** para o formato do padrão quando o banco estiver pronto. (09/11/2026: passa a ser o arquivo único `banco.js`; ver o registro mais novo.)
- **Semana 3** e as seguintes.
- **Definir as pessoas do teste,** o nome do produto e o primeiro formato de venda (ficam por último).

**Para lembrar**
- **Trocas sem IA:** dá para fazer só com o banco de dados, se cada item tiver papel no prato, refeições, substitutos e, nos pratos do freezer, receita e rendimento. A IA só é necessária para montar um cardápio do zero ou para pedidos fora do padrão.
- **O que a pessoa marca no site fica salvo só no celular e no navegador dela.** O admin só recebe o que vier pelo relatório.
- **Para atualizar o site:** salvar os arquivos na pasta do projeto e rodar `git add .`, `git commit -m "o que mudou"` e `git push`. O GitHub Pages se atualiza sozinho em 1 ou 2 minutos.
- **Na pasta do site, todos os arquivos ficam no mesmo nível**, sem subpastas, e sem espaços nem acentos nos nomes.
- **Ao começar uma conversa nova,** ler o Anexo B primeiro para saber onde o projeto parou.
- **Antes da página no GitHub,** existiu uma versão publicada como artefato no Claude. O endereço oficial para os testadores é o do GitHub Pages.

---

## B.2 Histórico

| Versão | Data | Alteração |
| --- | --- | --- |
| 1.0 | 08/11/2026 | Criação: regras do registro e o primeiro registro (site de teste, Semana 2, padrão do banco de dados e manual 3.16) |
| 1.1 | 08/11/2026 | Fim da conversa de 08/11: pasta `md` no GitHub, nomes Z1 e Z2 no Projeto, pendências do arquivo do projeto v1.3 e da conferência da pasta do site, lembrete de ler o Anexo B no começo de cada conversa |
| 1.2 | 08/11/2026 | Registro da conversa do banco de dados ampliado (Anexo A 1.11 a 1.13, manual 3.15 e 3.16, padrão 1.1, fichas 1.0, projeto 1.3); duas pendências do registro anterior marcadas com ✅ |
| 1.3 | 08/11/2026 | Registro do aviso de restrição alimentar (manual 3.17); pendência da restrição no manual marcada com ✅ |
| 1.4 | 09/11/2026 | Registro da conversa de 09/11: tela "O que você quer comer?", regras de montagem da semana, pessoas, potes e ajuste da porção (manual 3.18, padrão 1.2 a 1.4, Anexo A 1.14, fichas 1.1 e 1.2); pendências antigas atualizadas, com ✅ nas resolvidas |
| 1.5 | 09/11/2026 | Conferência dos arquivos antes do site: arquivo do projeto 1.4; pendências do arquivo do projeto, das instruções, da subida dos arquivos e da pasta do site marcadas com ✅ |
| 1.6 | 09/11/2026 | Entregas 1 e 2 do site (`banco.js` e `escolha.js`); fichas 1.3; banco por partes, começando pelo nível 1; site em 4 entregas; Semana 2 fica para depois; contagem de ingredientes corrigida |
| 1.7 | 09/11/2026 | Padrão 1.5 (regras da tela de escolha, potes sugeridos e torta com até 10 potes); arquivo do projeto 1.5; instruções do Projeto atualizadas |
| 1.8 | 09/11/2026 | Entrega 3 do site (`monta.js`: montagem automática da Semana 1); subidas da 1.7 e da entrega 3 marcadas com ✅; pendências do padrão 1.6, dos potes da praça e do `monta.js` nas instruções; histórico em ordem |
| 1.9 | 09/11/2026 | Pergunta da porção no relatório (entrega 4, parte 1); arquivo do projeto 1.6 com o `monta.js`; pendência da Semana 2 |
