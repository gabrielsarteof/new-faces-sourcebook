---
id: planejamento.nomenclatura-compendios
title: "PLANEJAMENTO — Nomenclatura dos Compêndios"
sessao-de-origem: 6
status: aguardando-execucao
version: 2
---

# PLANEJAMENTO — Nomenclatura dos Compêndios

Inverte a ordem de nomeação das entradas de compêndio, pondo o japonês como nome primário e conservando o português como nome de leitura. Produz o Registro de Nomes, que passa a ser a concordância única do corpus e a fonte da aplicação.

Escopo desta leva: os catorze compêndios e a Norma que declara o formato deles. Nada mais.

**O que mudou na v2.** A v1 foi escrita antes da leva de propagação da Sessão de Calibração e não conhecia o que ela descobriu. Entram a questão do identificador derivado do heading, que é decisão de arquitetura e precede tudo; as duas catracas do pipeline de compêndios, que nunca enfrentaram renomeação em massa; a contagem correta de compêndios, que é catorze e não treze; e as três lições de método que a mesma sessão registrou.

---

## 1. O que motiva

A convenção vigente está declarada no cabeçalho de cada compêndio: cada entrada informa o nome em português, o nome em japonês com romanização, a etiqueta editorial com o rank. As entradas cumprem, com o português no heading e o japonês na linha imediatamente abaixo.

A convenção já se contradiz dentro do próprio catálogo. O Takemikazuchi e o Kirin entram com o heading em japonês puro, porque não existe tradução que valha, de modo que a régua do português primeiro convive com exceções que nunca foram declaradas.

E ela já produziu defeito real. A Linhagem do Chidori publicava `Raikiri` e o Compêndio de Raiton publicava `Cortador de Raio`, com preços diferentes, e a leitura possível era de que fossem duas obras distintas com uma delas sem nome próprio. Eram a mesma, com duas apurações de gerações diferentes, e o nome duplo foi o que escondeu a divergência.

Três razões sustentam a inversão. O projeto é canônico um para um, e a fonte nomeia em japonês, enquanto o nome em português é escolha de localização sobre a qual mangá, dublagem e legendas de fã discordam entre si. A mesa fala japonês, e a tradução no heading cobra um passo de conversão em toda leitura de ficha. O repositório já é japonês na camada de identidade, com todo arquivo de `techniques/` nomeado em romaji e os `id` seguindo o arquivo.

---

## 2. A decisão que precede tudo

**O identificador da entrada deriva do heading.** O pipeline de compêndios monta o `id` a partir do texto do título, e é por isso que uma fatia mal lida chegou a cunhar `naruto.tecnica.barreira-lv4-pericia-pendente`. Trocar o heading troca o identificador de toda entrada renomeada.

O corpus já convive com a consequência disso. O `REGISTRO_POR_FICHA` existe justamente porque o `id` derivado do heading do compêndio diverge do `id` da ficha em quase toda a Linhagem do Chidori, e o Takemikazuchi é o único par em que os dois coincidem fora dos prefixos, precisamente por o heading dele já ser o nome da técnica.

Duas saídas, e a escolha é de arquitetura e não de transcrição.

**Identificador acompanha o heading.** O `id` passa a derivar do romaji, e o efeito colateral é bom: os identificadores de compêndio e de ficha passam a coincidir na maioria dos casos, e o `REGISTRO_POR_FICHA` encolhe para as exceções reais. O custo é uma migração de identificador, com toda referência cruzada a acompanhar.

**Identificador congela onde está.** O heading muda e o `id` permanece, declarado explicitamente em vez de derivado. Custo baixo agora e dívida permanente, porque o corpus passa a carregar identificador que não se lê do documento.

A leva não começa antes de esta decisão estar tomada. A execução reporta o custo medido das duas saídas, com a contagem de identificadores afetados e de referências cruzadas a cada um, e Gabriel decide.

---

## 3. Fronteira do escopo

**Alcança:** o nome das obras nomeadas publicadas nos catorze compêndios, incluindo as listas temáticas de uso que cada compêndio traz no fim.

**Não alcança a nomenclatura do sistema.** As inclinações e os caminhos das perícias permanecem em português, porque a nomeação por imagem é invenção do sistema e não nome que a fonte batizou. Ponta, Lança, Rede, Meridiano, Tempestade e Canto dos Mil Pássaros ficam exatamente como estão. As transcendências conservam a nomeação deity-first já publicada.

**Não alcança as fichas de `techniques/` nesta leva.** As fichas continuam com o heading em português enquanto os compêndios passam ao japonês, e a divergência é temporária e declarada. O Registro de Nomes produzido aqui é o insumo da segunda onda, que alinha fichas, prosa de perícias e citações cruzadas.

**Não alcança a aplicação.** A sincronização com `src/shared/data` roda depois, com relatório de divergência antes de qualquer código, salvo o que a decisão da seção 2 obrigar.

---

## 4. Formato de entrada

O heading passa a publicar o romaji. A linha imediatamente abaixo publica o kanji e o nome em português, separados pelo ponto médio que as demais linhas da entrada já usam.

```
### Raikiri
**雷切 · Cortador de Raio**
**[CANON · Rank S]**
```

Quando o nome é substantivo próprio sem tradução que acrescente sentido, a linha publica apenas o kanji. Nenhum nome em português é inventado para preencher o campo.

```
### Takemikazuchi
**建御雷神**
```

O restante da entrada permanece intacto: etiqueta editorial, camada de acesso, requisitos, vetor, celeridade, bandas, XP e prosa.

---

## 5. Regra de não invenção

A leva reordena o que já está publicado e não cria nome algum.

Entrada que publique os três nomes tem os três reordenados. Entrada que publique apenas o japonês permanece com o japonês. Entrada que publique apenas o português, sem japonês nem romanização, **não recebe nome japonês gerado a partir do português nem do sentido**, e sobe para a fila de decisão.

Romanização que pareça divergir do kanji publicado é reportada e não corrigida. A verificação contra a Narutopedia é passada própria, e pelo menos um caso já está identificado, com `黒豹` publicado como Kuropansa.

---

## 6. As duas catracas do pipeline

Elas nasceram na Sessão de Calibração, guardam metades diferentes, e nunca enfrentaram uma renomeação em massa. Esta leva é o primeiro teste real delas.

A primeira compara, compêndio a compêndio, quantas entradas o documento publica contra quantos registros o dado carrega, e nomeia o que está em um e não no outro. A segunda registra em `entradasBloqueadas` toda entrada que a conversão descartou, com arquivo, linha, nome e os tokens que a bloquearam, e um teste afirma que a lista está vazia.

A ordem de execução respeita as duas. Nenhum compêndio se considera pronto antes de o conversor rodar sobre ele e as duas ficarem verdes, e a leva não avança de compêndio com a lista de bloqueadas suja.

O defeito que originou as duas foi exatamente uma linha de entrada mal escrita fazendo uma obra desaparecer do catálogo em silêncio. Renomear o heading de centenas de entradas é a operação com mais chance de reproduzi-lo.

---

## 7. Registro de Nomes

A leva produz `worlds/naruto/compendiums/registro-de-nomes.md`, com uma linha por obra nomeada do corpus.

| Campo | Conteúdo |
|---|---|
| `romaji` | nome primário, o mesmo do heading |
| `kanji` | grafia japonesa, quando publicada |
| `pt` | nome de leitura, quando existir |
| `dominio` | o compêndio de origem |
| `ficha` | caminho do arquivo em `techniques/`, quando houver |

O registro é documento de corpus e entra no Índice. Ele é a fonte da segunda onda, a fonte da aplicação e a resposta a qualquer busca por nome em qualquer das três formas.

Uma linha no cabeçalho dele registra a razão de existir: contagem ou nome citado em dois lugares é contagem ou nome que só se mantém em um.

---

## 8. Conjunto de verificação já disponível

A Linhagem do Chidori dá sete entradas em que os dois nomes são conhecidos e a correspondência já foi conferida na leva de preço.

| Heading atual | Romaji |
|---|---|
| Chidori | Chidori |
| Sabre de Mil Pássaros | Chidori Katana |
| Corrente de Mil Pássaros | Chidori Nagashi |
| Agulhas de Mil Pássaros | Chidori Senbon |
| Lança Afiada de Mil Pássaros | Chidori Eisō |
| Cortador de Raio | Raikiri |
| Relâmpago Púrpura | Shiden |

O primeiro compêndio a rodar é o de Raiton, porque ele contém as sete e porque o par com preço divergente que motivou o achado mora nele.

---

## 9. Ordenação interna

A ordem das entradas dentro de cada bloco de rank permanece como está. A leva reporta quais blocos estavam em ordem alfabética pelo nome em português, e a reordenação por romaji corre em passada própria, se e quando for aprovada.

Reordenar junto da renomeação produziria um diff em que nenhuma das duas mudanças é conferível separadamente.

---

## 10. Documento dono

A Norma de Produção de Compêndios declara o formato de entrada e muda primeiro, hoje na v2.9. Os catorze compêndios transcrevem a partir dela.

A Norma recebe o formato dos três nomes, a regra de não invenção, a cláusula do substantivo próprio sem tradução e a fronteira contra a nomenclatura de perícia.

A grafia de requisito de perícia pendente, publicada na mesma v2.9, não é tocada por esta leva e não se confunde com ela: aquela governa a linha de requisitos, esta governa o heading.

---

## 11. Lições de método que esta leva consome

As três nasceram na Sessão de Calibração e alcançam o que esta leva vai fazer.

**Consulta larga em espaço que cresce.** Varredura por expressão regular sobre catorze documentos roda escopada à seção que contém o alvo, nunca contra o documento inteiro. O caso publicado é o de uma tabela de três colunas apanhando seis linhas porque a varredura leu o documento todo. A §3 do `GIT_WORKFLOW` publica a regra e os dois casos.

**Terminação de linha.** Comparação de conteúdo normaliza para LF antes de comparar, e escrita respeita a terminação que o arquivo já usa. Teste que só vê o arquivo recém-escrito pela própria ferramenta nunca enxerga a diferença.

**Guarda provada contra o defeito real.** Catraca que ninguém testou reintroduzindo o defeito que ela existe para pegar passa por vacuidade. Toda guarda desta leva é provada assim, com o defeito injetado, a mensagem conferida e o estado restaurado.

---

## 12. Riscos declarados

As citações a obras nomeadas espalhadas pelo corpus continuam em português até a segunda onda. Enquanto isso, o Registro de Nomes é a concordância que resolve qualquer ambiguidade de leitura.

A troca de heading altera as âncoras internas dos compêndios. O `check-links.mjs` acha o que quebrou, e a correção corre dentro da mesma leva.

As listas temáticas de uso no fim de cada compêndio citam as entradas pelo nome em português e estão no escopo. Elas são o ponto onde uma renomeação incompleta fica visível.

O `INVENTARIO.md` publica a contagem de compêndios sob catraca. A leva não altera a contagem, e alteração significa entrada perdida.

---

## 13. Verde

Decisão de identificador tomada por Gabriel, com custo medido reportado antes. Norma publicada com o formato novo. Catorze compêndios transcritos, o de Raiton primeiro. Registro de Nomes criado e inscrito no Índice. Fila de decisão entregue com as entradas que faltam nome. Relatório das romanizações duvidosas. As duas catracas do pipeline verdes em cada compêndio. `check-links.mjs` sem `--write` em zero, `lint-frontmatter.mjs` sem achado novo, `INDEX.md` regenerado, `INVENTARIO.md` conferido.

---

## Estado dos repositórios na abertura

Corpus `main` em `600bcac`. Aplicação `master` em `dfc35d0`. Os dois empurrados, árvore limpa, nenhum branch aberto. Gates em 240 arquivos e 3.355 testes, com 3.340 passando e 15 pulados.
