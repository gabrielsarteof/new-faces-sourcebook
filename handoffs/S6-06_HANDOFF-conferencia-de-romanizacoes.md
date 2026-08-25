---
id: handoff.conferencia-de-romanizacoes
title: "HANDOFF — Conferência das romanizações"
sessao-de-origem: 6
status: aberto
version: 1
---

# HANDOFF — Conferência das romanizações

A primeira onda da nomenclatura passou os catorze compêndios ao japonês como nome primário e produziu o Registro de Nomes. O Registro declara no próprio cabeçalho que a coluna Romaji nunca foi conferida contra o cânone, e a segunda onda propagaria essas romanizações para as fichas de `techniques/`, para a prosa das perícias e para cerca de mil citações cruzadas.

A conferência vem antes, e é este documento. A sessão que a abriu decidiu o formato de saída, conferiu dezessete das cinquenta e três obras do recorte e parou. Esta sessão fecha as trinta e seis restantes.

**Esta sessão não reabre formato de saída.** A parte cara da anterior foi decidir o que cada linha devolve, e isso está resolvido. As regras abaixo são insumo, não pauta.

---

## 1. O recorte

Cinquenta e três obras, medidas contra o corpus e não herdadas do planejamento anterior.

Recorte da medição: as 491 linhas de `worlds/naruto/compendiums/registro-de-nomes.md`; coluna Ficha não vazia; casamento por substring de romaji, kanji ou português contra o texto de `systems/chidori-family.md` e `systems/rasengan-family.md`, com o contexto de cada acerto lido à mão para descartar coincidência de prosa; mais a Pantera Negra, por decisão.

| | |
|---|---:|
| com ficha publicada | 47 |
| citadas nos dois documentos de linhagem, sem ficha | 5 |
| união | 52 |
| mais a Pantera Negra | **53** |

O S6-05 publicava união de 51. O número acima tem o método escrito junto e é reproduzível, e por isso substitui o anterior. Não vale caçar qual obra o número antigo deixou de fora.

As 438 linhas restantes do Registro seguem como pendência aberta e se conferem depois, sem bloquear a onda.

---

## 2. Estado na abertura

| | |
|---|---:|
| obras no recorte | 53 |
| conferidas e fechadas | 21 |
| abertas | 32 |
| divergências acumuladas | 2 |

As vinte e uma estão na Seção 6 com a procedência de cada uma. **Nenhuma delas se reconfere.**

As trinta e duas abertas estão na Seção 7, agrupadas pelos blocos que faltam.

---

## 3. A regra de fonte

Fonte é a Narutopedia inglesa e os databooks oficiais. Wiki de fã, wiki de outro idioma e espelho não fecham linha, nem quando concordam entre si.

Quando a Narutopedia inglesa não publica o dado, o veredito é que a fonte não alcança, o campo fica como está e a razão entra na procedência. Isso é resultado válido e não falha da passada.

### O erro mais fácil de repetir

A sessão anterior fechou o Chidori a partir de `narutofanon.fandom.com/wiki/Chidori_(ParaDoxPrimeCadet)`, uma página de wiki de fã que reproduz o verbete da Narutopedia inteiro, inclusive o bloco de dados estruturado, e credita a cópia num rodapé. Ela aparece no mesmo resultado de busca que a página autêntica, com texto idêntico, e a única diferença está no domínio.

O erro não se pega lendo o conteúdo, porque o conteúdo é o mesmo. Pega-se conferindo o domínio antes de aceitar a linha. **Toda linha fechada registra a URL de onde veio.**

O caso valeu duas correções ao mesmo tempo: o Chidori estava mal fundamentado, e a suspeita recaía sobre a linha errada, o Takemikazuchi, que sempre esteve em `naruto.fandom.com`.

### O título do verbete não é a romanização

A Narutopedia mantém convenção editorial declarada em sua própria discussão: apenas Rasengan e Chidori permanecem em japonês nos títulos, e as demais obras recebem título traduzido para o inglês. Por isso o verbete se chama `Big Ball Rasengan`, `Lightning Cutter`, `Chidori Sharp Spear`.

A romanização vive apenas no campo `Romaji name`, no bloco de dados do rodapé. Quem confere lendo o título encontra inglês e conclui que a fonte não publica, quando publica. Esse erro produz o veredito oposto ao do domínio fanon: em vez de fechar linha com fonte errada, deixa aberta linha que a fonte fecha.

### Como consultar

Buscar devolve trechos que quase nunca incluem o bloco de dados. Baixar a página inteira devolve o rodapé `Facts` com `Kanji name` e `Romaji name` explícitos.

Várias linhas ficaram abertas nesta conferência parecendo que a fonte não alcançava, e fecharam em uma consulta quando a página foi baixada em vez de apenas buscada. **O procedimento é buscar a página, depois baixá-la inteira, e ler o campo `Romaji name`.**

---

## 4. A regra de prefixo

**O prefixo elemental fica onde a mesa o fala e não entra onde a mesa não o fala.**

A remoção alcança apenas as linhas que a conferência preenche ou corrige a partir da fonte. Ela nunca retroage sobre linha que já publica o prefixo e já concorda com a fonte.

Ninguém na mesa pede `Gōkakyū no Jutsu`, pede Katon Gōkakyū, então as dezessete linhas do recorte que já carregam prefixo ficam como estão. Ninguém na mesa pede `Raiton: Chidori`, pede Chidori, então o campo vazio recebeu a forma curta. O Registro de hoje já acerta os dois casos porque foi escrito por quem ouve a mesa, e a conferência não existe para reformá-lo e sim para preencher o que falta.

### O caso que impede a reabertura

`Fūton: Rasengan`, despido do prefixo, é `Rasengan`. E `Rasengan` é a linha de 螺旋丸, obra distinta, com ficha própria, catalogada em outro domínio.

A varredura das 491 linhas achou exatamente uma colisão desse tipo, e é esta. Duas obras separadas na fonte e na mesa apenas pelo prefixo, e uma regra que as faz disputar a mesma chave está errada por esse único fato.

### Onde a forma canônica vive

O Registro ganha coluna própria, `nome-canonico-completo`, que carrega a forma integral que a fonte imprime, kanji e romaji, com prefixo quando houver. Ela é procedência e nunca chave. A coluna Romaji continua sendo o nome de exibição, o heading da ficha e a chave de concordância.

Toda linha preenche a coluna nova, prefixada ou não.

---

## 5. O terceiro veredito

Fonte que existe e cala sobre um campo é coisa diferente de obra que nunca teve fonte. Devolver o mesmo veredito nos dois declara conferido o que não tinha contra o que conferir.

O terceiro veredito lê a etiqueta editorial que a entrada de compêndio já publica, pela Seção 5 da Norma de Produção de Compêndios, e não cria classificação nova.

| Etiqueta | Definição da Norma | Tratamento na conferência |
|---|---|---|
| `[CANON]` | rank confirmado por databook ou registro equivalente | confere contra a fonte |
| `[ATRIBUÍDO]` | técnica canônica sem rank oficial | confere contra a fonte |
| `[PROPOSTA]` | técnica criada para o sistema, sem pertencer ao cânone | **obra de etiqueta PROPOSTA, sem fonte** |

Para a entrada de etiqueta `PROPOSTA`, a coluna nova repete a forma integral da linha e a procedência registra o compêndio de origem como fonte. Nenhuma consulta corre.

---

## 6. As dezessete fechadas

Não se reconferem. A procedência de cada uma é a Narutopedia inglesa, salvo onde a coluna diz outra coisa.

### Entradas de kanji puro, campo vazio preenchido pela fonte

| Coluna Romaji | `nome-canonico-completo` | Procedência |
|---|---|---|
| Amaterasu | 天照 · Amaterasu | mangá cap. 148, anime ep. 85 |
| Chidori | 雷遁・千鳥 · Raiton: Chidori | verbete Chidori, forma prefixada no corpo do artigo |
| Kirin | 麒麟 · Kirin | verbete Kirin |
| Takemikazuchi | 建御雷神 · Takemikazuchi | **cânone fraco**, obra de jogo, estreia em Ultimate Ninja Storm 4 |

O Takemikazuchi carrega uma divergência interna da própria fonte: o corpo do verbete lê `Takemikazuchi-no-Kami` e o campo estruturado lê `Takemikazuchi`. Gravou-se o campo estruturado, porque é dele que a coluna sai, e a divergência está registrada aqui em vez de escondida.

### Família do Chidori

| Coluna Romaji | `nome-canonico-completo` | Procedência | Etiqueta |
|---|---|---|---|
| Chidori Eisō | 千鳥鋭槍 · Chidori Eisō | mangá cap. 343, anime ep. 333, rank A | `[CANON]` |
| Chidori Nagashi | 千鳥流し · Chidori Nagashi | mangá cap. 308, anime ep. 272, rank A | `[CANON]` |
| Chidori Senbon | 千鳥千本 · Chidori Senbon | mangá cap. 357, anime ep. 343, rank A | `[CANON]` |
| Raikiri | 雷切 · Raikiri | verbete Lightning Cutter, mangá e anime | `[CANON]` |
| Kusanagi no Tsurugi: Chidorigatana | 草薙の剣・千鳥刀 · Kusanagi no Tsurugi: Chidorigatana | mangá cap. 308, anime ep. 272, rank B | `[CANON]` |
| Shiden | 雷遁・紫電 · Raiton: Shiden | mangá Boruto cap. 21, anime ep. 733, romance Kakashi Hiden | `[CANON]` |

### Família do Rasengan

| Coluna Romaji | `nome-canonico-completo` | Procedência | Etiqueta |
|---|---|---|---|
| Rasengan | 螺旋丸 · Rasengan | `wiki/Rasengan`, campo Romaji name, mangá | `[CANON]` |
| Ōdama Rasengan | 大玉螺旋丸 · Ōdama Rasengan | `wiki/Big_Ball_Rasengan`; terceiro databook, p. 228, rank A | `[CANON]` |
| Fūton: Rasengan | 風遁・螺旋丸 · Fūton: Rasengan | `wiki/Wind_Release:_Rasengan`, campo Romaji name, mangá | `[ATRIBUÍDO]` |
| Fūton: Rasenshuriken | 風遁・螺旋手裏剣 · Fūton: Rasenshuriken | `wiki/Wind_Release:_Rasenshuriken`, campo Romaji name; mangá cap. 339, anime ep. 307, rank S, kinjutsu; terceiro databook p. 298-299, quarto databook p. 290-291 | `[CANON]` |

O `Fūton: Rasengan` é a linha da colisão da Seção 4, e a fonte confirma que o prefixo é dela.

O Ōdama Rasengan fechou por locus declarado e não pelo quadro de dados: a fonte publica o par dentro da forma senjutsu, `仙法・大玉螺旋丸, Senpō: Ōdama Rasengan`, e o `仙法` é modificador de senjutsu, não prefixo elemental, então a regra da Seção 4 não o alcança. O quadro da entrada base não foi recuperado. Se Gabriel julgar que isso é inferência e não publicação, a linha volta para aberta e se recupera o quadro numa consulta dedicada.

### Katon
| Coluna Romaji | `nome-canonico-completo` | Procedência | Veredito |
|---|---|---|---|
| Katon: Gōkakyū no Jutsu | 火遁・豪火球の術 · Katon: Gōkakyū no Jutsu | Narutopedia, campo Romaji name | confere |
| Katon: Hōō no Wana | 火遁・鳳凰の罠 · Katon: Hōō no Wana | Compêndio de Katon, rank A | PROPOSTA, sem fonte |
| Katon: Hōō Shō | 火遁・鳳凰掌 · Katon: Hōō Shō | Compêndio de Katon, rank A | PROPOSTA, sem fonte |
| Katon: Jigoku no Hane | 火遁・地獄の羽 · Katon: Jigoku no Hane | Compêndio de Katon, rank A | PROPOSTA, sem fonte |
| Katon: Kaen Ami | 火遁・火炎網 · Katon: Kaen Ami | Compêndio de Katon, rank A | PROPOSTA, sem fonte |
| Katon: Rengoku Ryūsei | 火遁・煉獄龍勢 · Katon: Rengoku Ryūsei | Compêndio de Katon, rank S | PROPOSTA, sem fonte |

### Pantera Negra

| Coluna Romaji | `nome-canonico-completo` | Procedência |
|---|---|---|
| Kuropansa | 雷遁・黒斑差 · Raiton: Kuropansa | verbete Lightning Release: Black Panther, quarto databook |

---

## 7. As trinta e seis abertas

| Bloco | Obras | Contagem |
|---|---|---:|
| 2, pendentes | Kieru Rasengan, Raiton: Raiden, Raiton: Raijū Tsuiga | 3 |
| 3, família do Rasengan | Chō Ōdama Rasengan, Rasenrengan | 2 |
| 4, Katon | Endan, Gōryūka, Hōsenka, Hōsenka Tsumabeni, Kaen Senpū, Kasumi Enbu, Ryūka | 7 |
| 5, Fūinjutsu | Hiraishin Giri, Hiraishin no Jutsu, Hiraishin: Ni no Dan, Hiraishin: Sōgo Shunkan Kaiten, Ten no Juin e Chi no Juin | 5 |
| 6, Ninjutsu de Forma | Bunshin Daibakuha, Bunshin, Chakura no Ito, Harem, Henge, Kage Bunshin, Kai, Kakuremino, Kawarimi, Meisaigakure, Nawanuke, Oiroke, Shunshin, Tajū Kage Bunshin, Tōton | 15 |
| | | **32** |

Cada linha devolve quatro campos: o romaji sem prefixo, que vai para a coluna Romaji e para o heading; o par completo que a fonte publica, que vai para a coluna nova; a procedência com a URL e o domínio da fonte; e a etiqueta.

### Anotação do Hōsenka

O Registro publica `火遁・鳳仙花の術`. Existe pista, vinda de Narutopedias de outros idiomas e portanto não conclusiva, de que essa seja a grafia da primeira aparição, no capítulo 46, e de que a forma corrente seja `火遁・鳳仙火の術`, com 火 no terceiro caractere.

A consulta procura qual das duas a Narutopedia inglesa publica como Kanji name. Ela não decide pela pista, e a pista está escrita aqui apenas para a consulta saber o que procurar.

---

## 8. As duas divergências acumuladas

| Obra | Divergência | Destino |
|---|---|---|
| Pantera Negra | Registro publica kanji `黒豹` e romaji `Kuropansa`; a fonte publica `雷遁・黒斑差` e `Raiton: Kuropansa`. O kanji do Registro é a escrita literal e se leria `Kurohyō` | a forma da fonte vai inteira para a coluna nova. A coluna Kanji do Registro sai do escopo, porque o campo canônico agora tem casa |
| Chidori Katana | Registro publica `Kusanagi no Tsurugi: Chidori-tō`; a fonte publica `Kusanagi no Tsurugi: Chidorigatana`. O composto 千鳥刀 se lê com rendaku | a coluna Romaji se corrige para a forma da fonte. Não é caso de prefixo, e alcança o nome de exibição |

O `Kuropansa` estava registrado na §5 do `METODO` como a romanização sob suspeita do corpus. Ela está correta. O defeito estava no kanji, ou seja, na coluna que a passada não existia para conferir.

A contagem fecha ao fim do bloco 6.

### Achado adjacente, reportado e não corrigido

A entrada do Chidori Katana publica `[CANON — Rank A]` e a fonte publica rank B. A etiqueta `CANON` afirma rank confirmado por databook. Não é nomenclatura e não é desta passada. Fica para quem tocar no Compêndio de Raiton.

---

## 9. Carga acumulada para o S6-07

O handoff de propagação da segunda onda passa a `S6-07` e se escreve depois que as trinta e seis fecharem. Ele herda o que segue.

### Alvos e exceções nomeadas

**Cinquenta e duas fichas em `techniques/`.** A catraca de nome de ficha que o S6-05 manda construir compara o nome publicado contra o Registro, e cinco fichas não têm contra o quê comparar. O número de alvos e o destino de cada exceção se declaram antes de renomear a primeira.

| Exceção | Destino |
|---|---|
| `kirin.md` | tem linha no Registro sem o link. **Ganha o link na coluna Ficha** |
| `susanoo.md` | 須佐能乎 não tem linha. Fora do alcance do Registro, porque nenhum compêndio a cataloga |
| `hachimon-tonko.md` | 八門遁甲 não tem linha. Mesma razão |
| `hachimon-obras.md` | agregado, não é obra nomeada. Mesma razão |
| `hiraishin-impregnacao.md` | variante que compartilha kanji com o Hiraishin no Jutsu. Mesma razão |

A catraca afirma que as fichas sem linha são exatamente essas, por lista nomeada, e falha se aparecer uma quinta.

### A fase da catraca de versão

Varredura dos 206 arquivos `.md`, comparando o campo `version` do front matter com o número impresso no cabeçalho H1.

| | |
|---|---:|
| publicam versão nos dois lugares | 22 |
| concordam | 6 |
| divergem | 15 |
| falso positivo do recorte | 1 |

**Os quinze incluem os catorze compêndios, todos eles.** O padrão é uniforme: o front matter à frente, na maioria por um incremento, no Fūton e no Sistema Elemental por dois. Os seis que concordam provam por contraste, porque nenhum é compêndio.

A causa é de forma. O cabeçalho é prosa escrita à mão e o front matter é o campo que as ferramentas leem, então quem sobe a versão sobe o campo e esquece a linha.

Nada se corrige à mão. A fase constrói a catraca primeiro, com duas fontes nomeadas: um leitor parseia o front matter, outro parseia o H1 por caminho independente, e a guarda falha nomeando o arquivo e os dois valores. Prova-se com o defeito injetado, subindo o front matter de um compêndio sem tocar no cabeçalho e conferindo que ela acusa aquele arquivo. Só com ela verde a correção dos quinze corre, alinhando cada documento ao maior dos dois valores.

O falso positivo é `core/errata-combat-core-v3.md`, cujo cabeçalho lê "Errata do Núcleo de Combate v3", onde aquele `v3` é a versão do documento corrigido e não a dela. A catraca precisa distinguir versão própria de versão citada. Se não souber distinguir, declara a exceção por lista nomeada com a razão escrita, porque lista nomeada é preferível a recorte que erra em silêncio.

**Este documento não imprime versão no cabeçalho, e a ausência é deliberada.** Ele declara `version: 1` no front matter e o H1 não repete o campo. Documento que manda catracar a divergência entre front matter e H1 não pode nascer com ela, e a saída não é acertar os dois lados e sim o cabeçalho não carregar o campo. Passada futura não deve ler isso como esquecimento nem acrescentar o número por conta.

### Opção a considerar, não decisão

Os seis documentos que passam na varredura são justamente os que publicam versão nos dois lugares e acertam. Os quinze que erram são a classe que mais sobe de versão. A pergunta que isso abre é se a catraca deve afirmar igualdade ou ausência.

Sob a alternativa, o H1 deixa de publicar versão em todo o corpus, a versão vive apenas no front matter, que é o campo que as ferramentas leem, e a catraca passa a afirmar que nenhum H1 carrega número de versão própria. Ausência é mais barata de manter do que concordância, porque concordância exige que dois lugares se movam juntos toda vez e ausência exige que um lugar não nasça.

O falso positivo também muda de natureza: a regra passa a distinguir versão própria de versão citada uma vez, na definição, em vez de a cada varredura.

A alternativa custa tocar em vinte e dois documentos em vez de quinze, e tira da prosa um dado que hoje o leitor encontra sem abrir o front matter. Fica levantada para Gabriel decidir, e a fase corre com o que ele devolver.

### Adição ao MÉTODO, seção 1

A família dos espelhos ganha um sétimo caso, e o texto abaixo entra em `METODO.md` como `1.6`. A frase de abertura da seção 1, que hoje diz que a lição apareceu cinco vezes, passa a dizer sete.

> **1.6 Número agregado sem a enumeração ao lado**
>
> A conferência de romanizações publicou, no fechamento de um bloco, que dezessete linhas estavam fechadas e quarenta abertas. O número correto era dezessete e trinta e seis. O erro foi uma soma que esqueceu duas parcelas, e sobreviveu a duas passadas e a uma aprovação de Gabriel.
>
> Ele morreu no instante em que a contagem virou lista. Escrever as dezessete linhas nominalmente, para que ninguém as reconferisse, obrigou a somá-las de novo, e a soma não bateu.
>
> Contagem sem a enumeração ao lado não é verificável, porque não tem contra o quê ser conferida. Quem lê aceita ou recusa o número inteiro, e recusar número plausível é caro demais para acontecer. É a família da seção 1 pelo avesso: não uma guarda que mente, e sim um dado que nenhuma guarda pode olhar.
>
> **Contagem publicada acompanha a lista que a sustenta**, e as duas ficam no mesmo documento, de modo que uma confira a outra por construção. Vale para todo handoff, todo relatório de varredura e toda medição.

### O que o S6-07 não carrega

A fase de renomeação por prefixo está morta. Nenhum identificador se move, nenhum documento cujo nome deriva da obra se mexe, e `chidori-family.md` e `rasengan-family.md` ficam onde estão. A decisão da Seção 4 é o motivo, e o caso do `Fūton: Rasengan` é o que a mantém fechada.

---

## 10. Entregável desta sessão

A reemissão de `registro-de-nomes.md` com a coluna Romaji conferida nas 53 linhas do recorte, a coluna `nome-canonico-completo` preenchida em todas elas, a procedência de cada conferência registrada, e a pendência mantida para as 438 restantes.

O documento é reemitido inteiro, nunca em patch nem em errata.
