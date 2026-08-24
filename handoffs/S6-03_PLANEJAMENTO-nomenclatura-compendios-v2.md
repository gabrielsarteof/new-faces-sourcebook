---
id: planejamento.nomenclatura-compendios
title: "PLANEJAMENTO — Nomenclatura dos Compêndios"
sessao-de-origem: 6
status: em-execucao
version: 3
---

# PLANEJAMENTO — Nomenclatura dos Compêndios

Inverte a ordem de nomeação das entradas de compêndio, pondo o japonês como nome primário e conservando o português como nome de leitura. Produz o Registro de Nomes, que passa a ser a concordância única do corpus e a fonte da aplicação.

Escopo desta leva: os catorze compêndios e a Norma que declara o formato deles. Nada mais.

**O que mudou na v3.** A medição que a v2 encomendou foi feita, a decisão foi tomada, e as duas mudaram a leva. O identificador passa a acompanhar o romaji, com normalização de prefixo de elemento e sufixo `no Jutsu`. A medição encontrou o que a v2 não sabia: o heading governa mais três coisas além do identificador, e transcrever os catorze no formato novo derrubava as fichas promovidas de quarenta e sete para seis com as duas catracas verdes. A leva deixa de começar por renomear e passa a começar pelo pipeline, em três fases. A §9 morre, porque não há blocos alfabéticos para reordenar. A §12 troca o risco de âncora, que a medição mostrou vazio, pela ficha gravada, que a medição mostrou exposta.

**O que mudou na v2.** A v1 foi escrita antes da leva de propagação da Sessão de Calibração e não conhecia o que ela descobriu. Entram a questão do identificador derivado do heading, que é decisão de arquitetura e precede tudo; as duas catracas do pipeline de compêndios, que nunca enfrentaram renomeação em massa; a contagem correta de compêndios, que é catorze e não treze; e as três lições de método que a mesma sessão registrou.

---

## 1. O que motiva

A convenção vigente está declarada no cabeçalho de cada compêndio: cada entrada informa o nome em português, o nome em japonês com romanização, a etiqueta editorial com o rank. As entradas cumprem, com o português no heading e o japonês na linha imediatamente abaixo.

A convenção já se contradiz dentro do próprio catálogo. O Takemikazuchi e o Kirin entram com o heading em japonês puro, porque não existe tradução que valha, de modo que a régua do português primeiro convive com exceções que nunca foram declaradas.

E ela já produziu defeito real. A Linhagem do Chidori publicava `Raikiri` e o Compêndio de Raiton publicava `Cortador de Raio`, com preços diferentes, e a leitura possível era de que fossem duas obras distintas com uma delas sem nome próprio. Eram a mesma, com duas apurações de gerações diferentes, e o nome duplo foi o que escondeu a divergência.

Três razões sustentam a inversão. O projeto é canônico um para um, e a fonte nomeia em japonês, enquanto o nome em português é escolha de localização sobre a qual mangá, dublagem e legendas de fã discordam entre si. A mesa fala japonês, e a tradução no heading cobra um passo de conversão em toda leitura de ficha. O repositório já é japonês na camada de identidade, com todo arquivo de `techniques/` nomeado em romaji e os `id` seguindo o arquivo.

---

## 2. A decisão, tomada

**O identificador da entrada deriva do heading**, e a medição confirmou: o pipeline lê `nomePt` do texto do `### ` e monta `naruto.tecnica.${slug(nomePt)}`. Trocar o heading troca o identificador de toda entrada renomeada.

**A decisão é que o identificador acompanha o romaji**, com normalização de prefixo de elemento e sufixo `no Jutsu` na derivação. O que a sustenta é o `REGISTRO_POR_FICHA`, que existe para reconciliar identificador de compêndio com identificador de ficha: são quarenta e sete pares reais, seis coincidindo hoje e quarenta e um escritos à mão. Com o identificador saindo do romaji sem normalização, dezenove coincidem e vinte e oito continuam à mão. Com a normalização, quarenta e seis coincidem e sobra uma linha, a do Sabre de Mil Pássaros contra `Kusanagi no Tsurugi: Chidori-tō`, que é divergência real de nome e não de forma. O mapa existe porque um lado nomeia em português e o outro em japonês, e migrar o identificador remove a causa.

A saída de congelar foi recusada pelo custo que ela não encerra: um mapa de quatrocentas e oitenta e quatro linhas escritas à mão no pipeline, sem catraca que o guarde, crescendo a cada entrada nova, somado às quarenta e uma do `REGISTRO_POR_FICHA` que permaneceriam. E congelar não elimina a migração de dado gravado, apenas a adia.

### O que a medição encontrou além disso

O heading não governa só o identificador. Governa mais três coisas, e as três quebram com o formato novo antes de qualquer decisão de identificador.

O nome em português do registro **é** o heading: o registro publica `nome: { pt: nomePt, ja, romaji }`. A linha japonesa era partida por travessão, e o formato novo usa ponto médio, de modo que a função devolvia uma parte só, largava `romaji` e entregava kanji e português colados em `ja`. E o índice que resolve técnica anterior citada em requisito é chaveado pelo heading, de modo que citação escrita em português deixava de resolver quando o heading virava romaji.

Transcrever os catorze no formato novo com o pipeline como estava: quatrocentas e noventa e uma entradas lidas, quatrocentos e noventa e um registros resolvidos, zero entradas bloqueadas, catorze compêndios declarados prontos, código de saída zero — e quarenta e uma fichas desligadas, oitenta e oito pendências fantasmas criadas, o nome em português apagado de todos os registros e o campo `romaji` largado. As duas catracas verdes. O Raikiri saía como `{ "pt": "Raikiri", "ja": "雷切 · Cortador de Raio" }`.

### Referências cruzadas medidas

No corpus, nenhuma: zero ocorrências de `naruto.tecnica.*` nos cento e noventa e um documentos, e zero links com âncora para heading de compêndio. Na aplicação, seiscentas e quarenta e cinco ocorrências no JSON gerado, que o conversor reescreve, e cento e setenta e cinco pontos escritos à mão em treze arquivos, cinquenta e dois identificadores distintos. E `characters.data`, que é JSONB e guarda `techniques` como lista desses identificadores.

**Quatrocentos e setenta e oito identificadores mudam.** Seis ficam, porque o heading já é o romaji. Sete entradas publicam só o kanji e mantêm o heading. Nenhuma entrada do catálogo deixa de publicar nome japonês, de modo que a fila de decisão da §5 nasce vazia.

### A ordem que a decisão impõe

A leva não começa por renomear. São três fases, e a ordem não é preferência: a fase 1 é a condição para que as duas seguintes sejam conferíveis.

**Fase 1, antes de qualquer compêndio.** O pipeline aprende a ler os três nomes, e a catraca de contagem ganha uma segunda origem para o português. Provada reintroduzindo o defeito real, com um compêndio transcrito no formato novo e a catraca acusando onde antes passava.

**Fase 2, a migração de identificador.** Com a normalização. Ela roda sobre o corpus como está, porque a romanização de toda entrada já é legível da linha de nome atual, e por isso a transcrição da fase 3 chega depois sem mexer em identificador nenhum. Inclui os cento e setenta e cinco pontos escritos à mão e a migração de `characters.data`, que é a parte irreversível: escrita com verificação de que nenhuma ficha perdeu técnica, e rodada contra cópia antes.

**Fase 3, e só então, a transcrição dos catorze**, o de Raiton primeiro.

## 3. Fronteira do escopo

**Alcança:** o nome das obras nomeadas publicadas nos catorze compêndios, incluindo as listas temáticas de uso que cada compêndio traz no fim.

**Não alcança a nomenclatura do sistema.** As inclinações e os caminhos das perícias permanecem em português, porque a nomeação por imagem é invenção do sistema e não nome que a fonte batizou. Ponta, Lança, Rede, Meridiano, Tempestade e Canto dos Mil Pássaros ficam exatamente como estão. As transcendências conservam a nomeação deity-first já publicada.

**Não alcança as fichas de `techniques/` nesta leva.** As fichas continuam com o heading em português enquanto os compêndios passam ao japonês, e a divergência é temporária e declarada. O Registro de Nomes produzido aqui é o insumo da segunda onda, que alinha fichas, prosa de perícias e citações cruzadas.

**Alcança a aplicação, pelo que a decisão da seção 2 obriga.** A ressalva que a v2 deixou aberta foi acionada: migrar o identificador puxa o pipeline, os cento e setenta e cinco pontos escritos à mão e a ficha gravada para dentro desta leva. O que continua fora é toda sincronização que não seja consequência da migração.

---

## 4. Formato de entrada

O heading passa a publicar o romaji. A linha imediatamente abaixo publica o kanji e o nome em português, separados pelo ponto médio que as demais linhas da entrada já usam.

```
### Raikiri
**雷切 · Cortador de Raio**
**[CANON · Rank S]**
```

O ponto médio é tipografia, e o leitor não depende dele. Cento e noventa e uma das quatrocentas e noventa e uma entradas já publicam ponto médio dentro do próprio lado japonês, cento e noventa como `・` e uma — o Ten no Juin e Chi no Juin do Fūinjutsu, `天の呪印 · 地の呪印` — com o mesmo codepoint que este formato usa para separar. Partir a linha pelo delimitador leria o segundo nome como parte do primeiro. Nenhum lado japonês do corpus carrega caractere latino, de modo que a partição corre pela fronteira entre as duas escritas, que é intrínseca ao conteúdo e não pode ser gasta por um nome. Medida sobre as quatrocentas e oitenta e quatro entradas com romanização: quatrocentas e oitenta e quatro corretas, zero falhas.

Pela mesma leitura, o pipeline distingue os dois formatos sem bandeira, pela escrita em que a linha de nome abre: em latim é o formato antigo e o heading é o português, em japonês é o formato novo e o heading é o romaji. Os dois convivem enquanto a fase 3 anda compêndio a compêndio.

Quando o nome é substantivo próprio sem tradução que acrescente sentido, a linha publica apenas o kanji. Nenhum nome em português é inventado para preencher o campo, e nenhuma romanização é inventada para preencher o campo: a entrada de kanji puro não publica romaji, e o heading dela não é tomado por um, mesmo quando se lê como tal.

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

**E as duas não pegavam.** A medição transcreveu os catorze e as duas ficaram verdes, com quarenta e uma fichas desligadas e o nome em português apagado de todos os registros. A causa da primeira é estrutural: ela montava um lado do heading do documento e o outro de `nome.pt` do dado, que o pipeline preenche a partir daquele mesmo heading. Origem que se move dos dois lados não é comparação, é espelho. A causa da segunda é mais simples: `entradasBloqueadas` só recebe entrada que falhou ao ser lida, e renomeação limpa não falha ao ser lida.

A fase 1 conserta as duas. A de contagem passa a ler um segundo leitor, escrito à parte do pipeline, que reparseia o markdown e parte a linha de nome por outro caminho. E entra uma terceira, de nome, que confere os três nomes de cada registro contra os três que o documento publica — porque a de contagem nunca pegaria renomeação, já que renomear não muda contagem. A lição geral está registrada na §3 do `GIT_WORKFLOW`: comparação cujos dois lados derivam da mesma fonte não verifica nada.

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

## 9. Ordenação interna — encerrada

A medição respondeu e não há trabalho. Dos setenta e seis blocos de rank com três ou mais entradas, três estão em ordem alfabética pelo português — `forma.md` Rank A, `fuinjutsu.md` Rank S e `futon.md` Rank S — e os três têm exatamente três entradas, o que torna a coincidência provável. Nenhum compêndio está ordenado alfabeticamente de fato, e a passada de reordenação que esta seção previa não existe.

A ordem das entradas dentro de cada bloco de rank permanece como está, pela razão que continua valendo: reordenar junto da renomeação produziria um diff em que nenhuma das duas mudanças é conferível separadamente.

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

**A ficha gravada guarda identificador.** `characters.data` é JSONB e carrega `techniques` como lista de `naruto.tecnica.*`. Migrar identificador sem migrar dado desliga em silêncio toda técnica de toda ficha já gravada, e é o único passo irreversível da leva. O precedente de forma está em `20260719000000_rename_ninjas_chronicles_ruleset_to_naruto.sql`, que já reescreve `characters.data` com `jsonb_set`. A migração vai com verificação de que nenhuma ficha perdeu técnica, e roda contra cópia antes.

O risco de âncora que esta seção declarava não existe: a medição não achou um único link com âncora para heading de compêndio em todo o corpus, nem uma única citação de `naruto.tecnica.*` fora deste documento.

As listas temáticas de uso no fim de cada compêndio citam as entradas pelo nome em português e estão no escopo. Elas são o ponto onde uma renomeação incompleta fica visível.

O `INVENTARIO.md` publica a contagem de compêndios sob catraca. A leva não altera a contagem, e alteração significa entrada perdida.

---

## 13. Verde

Decisão de identificador tomada por Gabriel, com custo medido reportado antes. **Feito.**

Fase 1: pipeline lendo os três nomes, catraca de contagem com segunda origem, catraca de nome nova, as duas provadas reintroduzindo o defeito real. **Feito.**

Fase 2: identificador migrado com a normalização, cento e setenta e cinco pontos escritos à mão acompanhando, migração de `characters.data` escrita, verificada contra cópia e aplicada, `REGISTRO_POR_FICHA` reduzido ao caso real.

Fase 3: Norma publicada com o formato novo. Catorze compêndios transcritos, o de Raiton primeiro. Registro de Nomes criado e inscrito no Índice. Relatório das romanizações duvidosas. As três catracas do pipeline verdes em cada compêndio. `check-links.mjs` sem `--write` em zero, `lint-frontmatter.mjs` sem achado novo, `INDEX.md` regenerado, `INVENTARIO.md` conferido.

A fila de decisão de entradas sem nome japonês nasceu vazia e não é entregável.

---

## Estado dos repositórios

**Na abertura da v2.** Corpus `main` em `600bcac`. Aplicação `master` em `dfc35d0`. Os dois empurrados, árvore limpa, nenhum branch aberto. Gates em 240 arquivos e 3.355 testes, com 3.340 passando e 15 pulados.

**Na abertura da v3.** Os dois repositórios andaram, e `dfc35d0` não existe mais na história rasa da aplicação. Corpus `main` em `d3c0fb3`, aplicação `master` em `d45d414`. A leva corre em `errata/nomenclatura-compendios` nos dois, e o nome é o mesmo dos dois lados de propósito: uma leva, um nome.

**Ao fim da fase 1.** Gates em 241 arquivos e 3.371 testes, com 3.356 passando e 15 pulados. Corpus com `check-links.mjs` em zero, `lint-frontmatter.mjs` sem achado novo, `INDEX.md` em dia.
