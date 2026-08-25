---
id: relatorio.propagacao-segunda-onda
title: "RELATÓRIO — Execução da propagação da segunda onda"
sessao-de-origem: 6
status: fechado
---

# RELATÓRIO — Execução da propagação da segunda onda

Execução do `S6-07`, em sessão sem ninguém acordado para responder. As quatro fases correram, uma commit cada, e a fase 4 parou antes de qualquer correção, como mandado.

O cabeçalho deste documento não imprime versão, pela mesma razão que o `S6-06` e o `S6-07` não imprimem: documento que trata da catraca de versão não nasce com a divergência que ela pega. Passada futura não deve ler isso como esquecimento.

---

## 1. Estado

Corpus atualizado de `main` na abertura, sem SHA fixado. A árvore estava em `aa78158`, dez commits à frente do que a sessão anterior conhecia.

| | |
|---|---|
| commit de abertura | `aa78158` |
| commits desta execução | 4, um por fase |
| árvore ao fim | limpa, `check-links` e `lint-frontmatter` em zero, `INDEX.md` em dia |

---

## 2. Fase 1 — a catraca de nome de ficha

Entrega: `tools/check-nomes-de-ficha.mjs`, e o caminho de `kirin.md` na coluna Ficha da linha de 麒麟.

**As duas fontes**, nomeadas antes da guarda existir: o cabeçalho que a ficha publica, lido do `# ` do arquivo em `techniques/`; e a coluna Romaji do Registro, lida da tabela. Nenhuma deriva da outra.

**O número de alvos**, declarado antes da varredura: 52 fichas, 48 com par e 4 sem.

### As quatro sem par, nomeadas

| Ficha | Razão |
|---|---|
| `susanoo.md` | 須佐能乎 não tem linha no Registro: nenhum compêndio a cataloga |
| `hachimon-tonko.md` | 八門遁甲 não tem linha: mesma razão |
| `hachimon-obras.md` | documento agregado de nove obras, não é obra nomeada |
| `hiraishin-impregnacao.md` | variante que compartilha kanji com o Hiraishin no Jutsu, sem linha própria |

### As provas, com o defeito injetado

**Prova 1, o nome.** Três estados sobre `raikiri.md`. Com o cabeçalho em `Raikiri`, a guarda não menciona o arquivo. Com `Raikiri no Jutsu`, ela devolve:

```
    raikiri.md
      a ficha publica  "Raikiri no Jutsu"
      o Registro publica "Raikiri"  (linha 394)
```

Estado restaurado, diff vazio.

**Prova 2, a contagem.** Removido o link de `shiden.md` da coluna Ficha, a guarda devolve `47 fichas com par no Registro, e a guarda declara 48`, `5 fichas sem par, e a guarda declara 4`, e `shiden.md não tem linha no Registro e não está na lista nomeada`. Estado restaurado.

Ao fim da fase 1 a guarda saía vermelha nas 48, que era o estado pré-renomeação.

---

## 3. Fase 2 — as fichas

52 varridas, 49 reescritas, 3 intactas, e a soma fecha.

| Ação | Fichas |
|---|---:|
| reescritas com kanji e português na linha de nome | 41 |
| reescritas com só o kanji, substantivo próprio | 8 |
| intactas | 3 |

### As oito de substantivo próprio, nomeadas

`chidori.md`, `kirin.md`, `odama-rasengan.md`, `rasengan.md`, `rasenrengan.md`, `takemikazuchi.md`, `susanoo.md` e `cho-odama-rasengan.md`.

As sete primeiras entram porque a coluna Português repete a romanização, e repetir o mesmo nome nos dois campos afirmaria um nome em português que a obra não tem. A oitava entra pela mesma porta e por um motivo a mais, na seção 6.

### As três intactas, nomeadas

| Ficha | Razão |
|---|---|
| `hachimon-obras.md` | agregado, não publica romanização nem kanji: não há o que reordenar |
| `hachimon-tonko.md` | sem linha no Registro, e nenhuma regra desta onda alcança o cabeçalho dela |
| `hiraishin-impregnacao.md` | romanização não publicada em lugar algum: preenchê-la seria inferência |

### O invariante

Nenhum `fm.id` mudou. Conferido por `git diff -U0` sobre `techniques/`, filtrando linhas `id:`: zero adições e zero remoções.

Ao fim da fase 2 a catraca da fase 1 saiu verde.

---

## 4. Fase 3 — as citações órfãs

23 correções em 13 arquivos. O alvo é a citação que aponta para um nome que o Registro não publica em coluna nenhuma, que é o critério de verde do `S6-07` §6. As oito romanizações que a conferência corrigiu deixaram de existir no Registro, e toda citação a elas ficou órfã.

### As 23, uma a uma

| Arquivo | Linha | De | Para |
|---|---:|---|---|
| `skills/kunai.md` | 246 | Hiraishin Sōgo Shunkan Kaiten | Hiraishin Goshun Mawashi no Jutsu |
| `skills/kunai.md` | 246 | Hiraishin Giri | Hiraishingiri |
| `systems/errata-hiraishin.md` | 34 | Hiraishin Giri | Hiraishingiri |
| `systems/rasengan-family.md` | 46, 55, 86, 96, 141, 148, 192 | Chō Ōdama Rasengan | Chōōdama Rasengan |
| `techniques/bunshin-daibakuha.md` | 23 | Bunshin Daibakuha no Jutsu | Bunshin Daibakuha |
| `techniques/chidori-katana.md` | 14 | Kusanagi no Tsurugi: Chidori-tō | Kusanagi no Tsurugi: Chidorigatana |
| `techniques/cho-odama-rasengan.md` | 22, 45 | Chō Ōdama Rasengan | Chōōdama Rasengan |
| `techniques/harem.md` | 23 | Harem no Jutsu | Hāremu no Jutsu |
| `techniques/harem.md` | 39 | Bunshin Daibakuha no Jutsu | Bunshin Daibakuha |
| `techniques/kage-bunshin.md` | 157 | Bunshin Daibakuha no Jutsu | Bunshin Daibakuha |
| `techniques/odama-rasengan.md` | 170 | Chō Ōdama Rasengan | Chōōdama Rasengan |
| `techniques/oiroke.md` | 115 | Harem no Jutsu | Hāremu no Jutsu |
| `techniques/rasengan.md` | 45, 162 | Chō Ōdama Rasengan | Chōōdama Rasengan |
| `techniques/taju-kage-bunshin.md` | 138 | Bunshin Daibakuha no Jutsu | Bunshin Daibakuha |
| `techniques/toton.md` | 23 | Tōton no Jutsu | Tōton Jutsu |

### O recorte que estava curto

A primeira varredura buscou as oito formas exatas e achou 44 ocorrências, 20 delas nos compêndios. Ela não achava `kunai.md:246`, que escreve `Hiraishin Sōgo Shunkan Kaiten` sem os dois-pontos. A varredura passou a casar o nome com o separador escrito de qualquer forma, e achou essa. Residual depois da correção: zero.

O recorte publicado junto do número, para a próxima não repetir o erro: arquivos `.md` sob controle de versão, excluídos `handoffs/`, `claude/`, `INDEX.md` (gerado), os catorze compêndios (isolados, seção 6) e o próprio Registro (publica as formas antigas como dado); front matter fora, corpo dentro; substituição do nome mais longo para o mais curto.

---

## 5. Fase 4 — a catraca de versão

Entrega em duas etapas. A primeira parou antes de corrigir, com a guarda comparando front matter e cabeçalho e saindo vermelha de propósito, porque a escolha era de Gabriel. **A decisão veio: a versão sai do cabeçalho.** A segunda etapa a executou e refez a guarda, que passou a afirmar ausência em vez de igualdade.

Alinhar os catorze consertaria o estado e não a causa. O número escrito em dois lugares é a mesma grandeza mantida à mão nos dois, e ela se separa sozinha na primeira vez que alguém sobe a versão sem lembrar do segundo lugar — que é exatamente o que os catorze eram, todos com o front matter à frente. Ausência exige que um lugar não nasça, e isso não falha por esquecimento.

| | |
|---|---:|
| cabeçalhos com versão antes | 22 |
| retirados | 21 |
| mantidos, por lista nomeada | 1 |

O mantido é `core/errata-combat-core-v3.md`, cujo `v3` nomeia o Núcleo de Combate que a errata corrige. Retirá-lo apagaria informação real.

Conferido antes de cortar que nada lê o número do H1 fora da própria guarda, e que nenhuma norma manda imprimi-lo: as duas ocorrências em documento normativo eram títulos próprios e não prescrições.

Se o número precisar aparecer na prosa, aparece gerado do front matter na renderização, nunca digitado. É item de aplicação e não bloqueia.

### O que a guarda afirmava antes, e o que afirma agora

**As duas fontes:** o campo `version` do front matter, lido do bloco entre os dois `---`; e o número impresso no primeiro `# ` do corpo, lido por outra expressão e sobre outra fatia. As fatias são disjuntas de propósito — se a segunda pudesse reler o front matter, a independência seria só aparente.

**O número de alvos não se fixa**, porque documento novo entra no conjunto sem aviso e um número fixado transformaria crescimento legítimo em falha. O que a guarda afirma é que o conjunto não é vazio, pela quinta forma do `METODO` §1.

### A medição de hoje

| | | S6-07 media |
|---|---:|---:|
| documentos varridos | 216 | 206 |
| publicam versão nos dois lados | 22 | 22 |
| concordam | 7 | 6 |
| divergem | 14 | 15 |
| versão citada, por lista nomeada | 1 | 1 |

A diferença tem causa: o Compêndio de Raiton foi reemitido entre os dois momentos e o cabeçalho dele alcançou o front matter.

### Os sete que concordam

`core/technique-template.md` v4, `compendiums/raiton.md` v3.21, `progression/xp-training.md` v1.2, `systems/anchoring.md` v1.1, `systems/compendium-standard.md` v3.1, `systems/jutsu-authoring.md` v3.6, `systems/onmyoton-axis.md` v1.2.

### Os catorze que divergem

| Documento | front matter | cabeçalho |
|---|---|---|
| `compendiums/doton.md` | 2.11 | 2.10 |
| `compendiums/eight-gates.md` | 1.11 | 1.10 |
| `compendiums/forma.md` | 2.9 | 2.8 |
| `compendiums/fuinjutsu.md` | 1.11 | 1.10 |
| `compendiums/futon.md` | 4.15 | 4.11 |
| `compendiums/genjutsu.md` | 1.6 | 1.5 |
| `compendiums/inton.md` | 2.11 | 2.10 |
| `compendiums/katon.md` | 5.14 | 5.13 |
| `compendiums/kyuinjutsu.md` | 1.7 | 1.6 |
| `compendiums/medical-ninjutsu.md` | 2.11 | 2.10 |
| `compendiums/sensory.md` | 1.7 | 1.6 |
| `compendiums/suiton.md` | 3.11 | 3.10 |
| `compendiums/yoton.md` | 2.9 | 2.8 |
| `systems/elemental-system.md` | 9.5 | 9.3 |

O padrão é uniforme, com o front matter à frente, na maioria por um incremento e no Fūton e no Sistema Elemental por mais.

### A exceção, por lista nomeada

`core/errata-combat-core-v3.md`, cujo cabeçalho lê "Errata do Núcleo de Combate v3", onde o `v3` é a versão do documento corrigido. Lista nomeada com a razão escrita, e não heurística de posição, que erraria nos dois sentidos.

### As provas, com o defeito injetado

Na primeira etapa, com a guarda comparando: subido o front matter de `systems/anchoring.md` de 1.1 para 1.2 sem tocar no cabeçalho, ela devolve `front matter version: 1.2` contra `cabeçalho v1.1` e nomeia o arquivo, onde antes silenciava.

Na segunda, com a guarda afirmando ausência: devolvido o `· v1.1` ao Manual de Ancoragem, ela nomeia o arquivo, o cabeçalho e onde a versão vive. E retirado o `v3` do cabeçalho da errata, ela acusa a própria exceção como obsoleta. Os dois estados restaurados.

**Uma nota de método que custou uma repetição.** Restaurar o estado com `git checkout --` desfez também o corte que ainda não estava commitado, e o `anchoring.md` precisou ser cortado duas vezes. Prova sobre trabalho não commitado restaura por edição inversa, nunca por `checkout`.

---

## 6. Decisões tomadas pela via do princípio

Nenhuma delas estava no `S6-07`. Cada uma nomeia o princípio que a produziu.

### 6.1 A linha de nome das sete de substantivo próprio publica só o kanji

**Princípio:** campo sem valor fica vazio e nada se preenche por inferência.

Chidori, Kirin, Ōdama Rasengan, Rasengan, Rasenrengan, Takemikazuchi e Susanoo têm a coluna Português repetindo a romanização. Publicar `**千鳥 · Chidori**` afirmaria um nome de leitura que a obra não tem. A cláusula do substantivo próprio sem tradução da Norma, Seção 10, já resolve o caso nos compêndios, e a ficha segue a mesma.

### 6.2 O Chōōdama Rasengan entra por essa mesma porta, e por um motivo a mais

**Princípio:** o que está fora do escopo se reporta e não se corrige.

A coluna Português dele carrega `Chō Ōdama Rasengan`, que é a forma espaçada que a coluna Romaji acabou de perder e não um nome em português. O Registro já a reporta como espelho do cabeçalho antigo do compêndio, e a coluna Português é do compêndio e não desta passada. Publicá-la no campo de leitura da ficha espalharia para um lugar novo um valor que o próprio Registro declara defasado. Publicando só o kanji, a ficha não carrega o defeito e não o corrige.

### 6.3 `susanoo.md` foi reordenada sem ter par no Registro

**Princípio:** convenção nunca substitui existência — e o critério de verde do `S6-07` §6 diz que nenhum cabeçalho de ficha carrega travessão.

Ela publicava `Susanoo — (須佐能乎)`. O travessão a alcança pela regra de higiene, que vale para as 52 e não só para as 48 com par. As duas formas já estavam publicadas no próprio cabeçalho, então a operação é a mesma reordenação das outras, sem inventar nada.

`hachimon-tonko.md` publica `Hachimon Tonkō (八門遁甲)`, que nenhuma regra desta onda alcança, e ficou como está. As duas terminam em formas diferentes, e isso está registrado aqui em vez de resolvido por simetria.

### 6.4 A conversão de citação em português para romanização não corre nesta onda

**Princípio:** entre duas saídas defensáveis, escolha a menos destrutiva e a mais fácil de desfazer.

O `S6-07` §4 diz que a citação a uma obra usa a coluna Romaji, e a leitura possível era converter toda citação em português do corpus. A medição desaconselha e o critério de verde não pede.

O critério do §6 é `nenhuma citação de obra na prosa aponta para nome que o Registro não publica`. O Registro publica a coluna Português, então citação em português não viola o critério. O que o violava eram as oito romanizações superadas, e a fase 3 as fechou.

A frase do §4 contrasta a coluna Romaji com a coluna Nome canônico completo, e é isso que a frase seguinte diz: a coluna nova é procedência e nunca chave. Ela fixa qual coluna é a chave, não manda reescrever prosa.

**A medição, para quem decidir depois.** Restringindo às 53 obras conferidas, as 46 cujo nome em português difere da romanização são citadas 311 vezes em 79 arquivos, sem nenhuma ambiguidade entre linhas. Restringindo às 475 linhas com nome em português distinto, incluindo as não conferidas, são 417 ocorrências em 83 arquivos.

**E há um obstáculo concreto**: a coluna Português do Kai é `Liberação`, que aparece 163 vezes no corpus quase sempre em `Liberação de Yang` e `Liberação de Yin`, que são nomes de natureza e não a técnica. Substituição automática ali corromperia o corpus em silêncio. Uma passada de conversão de nome de exibição precisa resolver esse caso antes de existir.

### 6.5 As linhas fora do recorte não entraram

**Princípio:** fonte é a Narutopedia inglesa e o databook oficial.

O `S6-07` §4 é explícito: linha do Registro fora do recorte de 53 tem romanização não conferida e não é base para correção de prosa. As 438 seguem como estão.

---

## 7. Itens isolados

Nenhum interrompeu a onda. Cada um traz a evidência que juntei e as saídas que considerei.

### 7.1 Os cabeçalhos de entrada dos compêndios seguem com as formas antigas

**O que é.** Oito entradas de `forma.md`, `fuinjutsu.md` e `raiton.md` publicam no `### ` as romanizações que a conferência corrigiu, e os Índices Rápidos dos três as citam em doze lugares. Vinte ocorrências no total, que a fase 3 não tocou.

| Compêndio | Linha | Cabeçalho publicado |
|---|---:|---|
| `forma.md` | 151 | `### Tōton no Jutsu` |
| `forma.md` | 221 | `### Bunshin Daibakuha no Jutsu` |
| `forma.md` | 238 | `### Harem no Jutsu` |
| `forma.md` | 304 | `### Chō Ōdama Rasengan` |
| `fuinjutsu.md` | 661 | `### Hiraishin Giri` |
| `fuinjutsu.md` | 677 | `### Hiraishin: Sōgo Shunkan Kaiten` |
| `raiton.md` | 256 | `### Raiton: Raiden` |
| `raiton.md` | 395 | `### Kusanagi no Tsurugi: Chidori-tō` |

**A evidência.** O `id` de registro deriva do cabeçalho da entrada, com o sufixo `no Jutsu` retirado. Sete dos oito se moveriam:

| Cabeçalho | id hoje | id se o cabeçalho mudar |
|---|---|---|
| Tōton no Jutsu | `naruto.tecnica.toton` | `naruto.tecnica.toton-jutsu` |
| Bunshin Daibakuha no Jutsu | `naruto.tecnica.bunshin-daibakuha` | igual |
| Harem no Jutsu | `naruto.tecnica.harem` | `naruto.tecnica.haremu` |
| Chō Ōdama Rasengan | `naruto.tecnica.cho-odama-rasengan` | `naruto.tecnica.choodama-rasengan` |
| Hiraishin Giri | `naruto.tecnica.hiraishin-giri` | `naruto.tecnica.hiraishingiri` |
| Hiraishin: Sōgo Shunkan Kaiten | `naruto.tecnica.hiraishin-sogo-shunkan-kaiten` | `naruto.tecnica.hiraishin-goshun-mawashi` |
| Raiton: Raiden | `naruto.tecnica.raiton-raiden` | `naruto.tecnica.raiden` |
| Kusanagi no Tsurugi: Chidori-tō | `naruto.tecnica.kusanagi-no-tsurugi-chidori-to` | `naruto.tecnica.kusanagi-no-tsurugi-chidorigatana` |

A migração de `characters.data`, construída sobre o mapa de identificadores atual, segue escrita e não aplicada, esperando ambiente com banco. Mover sete ids agora a deixa desatualizada em silêncio, e ela é o passo irreversível da leva anterior.

**As saídas consideradas.**

1. Corrigir cabeçalho e índice. Move sete ids, invalida o mapa da migração pendente e alcança a aplicação, que nenhuma fase do `S6-07` prevê.
2. Corrigir só o índice. Faria cada um dos três compêndios contradizer os próprios cabeçalhos.
3. Não tocar em nenhum dos dois. Cada documento continua internamente coerente, e a divergência fica entre o compêndio e a ficha, que é a mesma forma de divergência declarada que a primeira onda usou enquanto corria.

Segui a terceira, pelo princípio da saída menos destrutiva e mais fácil de desfazer. Nada foi corrigido e nada foi perdido: os oito cabeçalhos estão listados acima e a correção é uma passada curta no dia em que a migração for aplicada ou descartada.

### 7.2 O `title` do front matter das fichas

**O que é.** 49 das 52 fichas têm `title` diferente do `# ` agora publicado. Sete carregam travessão ou romanização superada:

`chidori-eiso.md`, `chidori-katana.md`, `chidori-nagashi.md`, `chidori-senbon.md`, `raikiri.md` e `shiden.md` publicam `Romaji — Português (漢字)`; `cho-odama-rasengan.md` publica `Chō Ōdama Rasengan (超大玉螺旋丸)`, com a romanização que a conferência substituiu.

`chidori-katana.md` merece nota: o `title` diz `Chidori Katana`, que não é nem a forma antiga nem a nova da coluna Romaji.

**Por que ficou fora.** A forma do `title` é decisão aberta desde o `S6-05` §5 e nunca foi tomada. O `title` alimenta o `INDEX`, que é gerado, então a correção é barata em qualquer momento.

### 7.3 O Registro é lido como compêndio pelo conversor da aplicação — **fechado**

**Resolvido depois deste relatório**, pela saída que esta seção já indicava. O pipeline passou a identificar compêndio pelo `type: compendium` do front matter, e a regra entrou na Seção 9 do `COMPENDIUM_GATES` da aplicação em vez de ficar como conserto pontual, porque é a segunda ferramenta a cair no mesmo defeito. O `METODO.md` registra a terceira aparição em `1.4`.

A troca abriu um risco novo e ele foi fechado junto: ler por tipo pode excluir em silêncio, e um `type` com erro de digitação faria um compêndio de verdade sumir do catálogo. O descarte passou a ser nomeado, com o CLI imprimindo o que ficou de fora e o teste fixando a lista. Provado trocando `compendium` por `compendio` em `yoton.md`: a conversão cai para 13 compêndios e 451 entradas, o descarte aparece pelo nome, e o teste falha.

O registro do caso como ele estava fica abaixo.

**O que é.** `registro-de-nomes.md` vive em `compendiums/`, e o conversor da aplicação lê todo `.md` daquela pasta. A versão 2.1 introduziu nove cabeçalhos `### Bloco N` e `### Alcançam a coluna Romaji` nas seções de procedência e de divergências, e o conversor os lê como entradas de compêndio.

```
compêndios lidos: 15
entradas: 500
problemas, bloqueiam: 10
  compendio-sem-dominio  (9)   registro-de-nomes.md:540, :566, :574, :581, :593, :603, :629, :642, :655
  dominio-inexistente    (1)   registro-de-nomes.md  "undefined"
ESTADO POR COMPÊNDIO:
  registro-de-nomes.md   bloqueado por 9
```

**É anterior a esta onda.** Conferido contra `aa78158`, o commit de abertura: o arquivo já publicava nove `### ` ali. A onda não criou nem agravou o caso.

**A catraca funcionou.** Nenhum registro fantasma foi cunhado: os 491 seguem 491, os catorze compêndios reais saem todos `pronto` com as contagens de sempre, e a pseudo-entrada foi bloqueada e nomeada. O conversor recusa em vez de adivinhar, exatamente como escrito.

**Por que não decidi.** As saídas possíveis são todas de arquitetura e nenhuma é minha: mover o Registro para fora de `compendiums/`, ensinar o conversor a filtrar por `type`, ou trocar os `###` de procedência por outro nível de cabeçalho. A primeira mexe em caminho que a Norma e o `S6-07` nomeiam; a segunda é a mesma correção que a contagem do `INVENTARIO` já recebeu, e é a que eu escolheria; a terceira reescreve o documento que a conferência acabou de fechar. Fica registrado com a evidência.

### 7.4 Seis subtítulos de ficha repetem a romanização agora publicada no cabeçalho

`chidori-eiso.md`, `chidori-nagashi.md`, `chidori-senbon.md`, `kieru-rasengan.md`, `chidori-katana.md` e `raikiri.md` abrem o subtítulo com a romanização, que passou a ser o próprio `# ` logo acima. Antes da onda a repetição não existia, porque o cabeçalho era o nome em português.

Nenhuma regra desta onda alcança a linha de subtítulo, e a redundância é cosmética. Reportada e não corrigida.

---

## 8. Um critério de verde que a onda não cumpre à letra

O `S6-07` §4 pede que os gates da aplicação fiquem verdes **sem mudança de dado**, e diz que qualquer `.json` que mude significa que a onda saiu do escopo.

Um mudou. Isolando o efeito da onda — convertendo o corpus em `aa78158` e o corpus de agora, e comparando as duas saídas em vez de comparar contra o dado commitado, que está vários commits atrás:

| | |
|---|---|
| arquivos gerados que mudaram | 1, `forma.json` |
| registros afetados | 3 |
| campo afetado | `ficha`, e dentro dele apenas `sinergias` |
| ids antes e depois | 497 e 497, conjunto idêntico |
| contagens por compêndio | idênticas |

Os três são `naruto.tecnica.oiroke`, `naruto.tecnica.kage-bunshin` e `naruto.tecnica.taju-kage-bunshin`, e a mudança é a prosa de Sinergias que a fase 3 corrigiu dentro das fichas, transcrita pelo pipeline.

**Por que segui assim.** Dois critérios do mesmo documento se contradizem aqui. O de Citações manda fechar citação órfã; o de dado manda não mudar `.json` nenhum. As citações órfãs estavam dentro de seções de Sinergias das fichas, que o pipeline transcreve. Deixá-las quebraria o primeiro critério e manteria no corpus três citações a nomes que o Registro não publica; corrigi-las quebra o segundo por três blocos de prosa num arquivo que o conversor regera de qualquer jeito. Segui o critério substantivo e reporto o outro, em vez de escolher em silêncio.

---

## 9. O que fica aberto

| | |
|---|---|
| ~~a decisão da fase 4~~ | **fechada:** a versão saiu do cabeçalho, 21 retirados e 1 mantido |
| ~~o Registro lido como compêndio~~ | **fechado:** o pipeline identifica pelo tipo, e a regra está na §9 do `COMPENDIUM_GATES` |
| os oito cabeçalhos de entrada dos compêndios | seção 7.1, com os sete ids que se moveriam |
| a forma do `title` das fichas | seção 7.2, aberta desde o `S6-05` §5 |
| a conversão de citação em português | seção 6.4, com a medição e o obstáculo do `Liberação` |
| a conferência das 438 linhas restantes | passada própria, pelo procedimento do Registro |
| a migração de `characters.data` | escrita e não aplicada, esperando ambiente com banco |
| o Template de Documento de Técnica | prescreve `# [Nome em Português] — [Nome em Japonês] (Romanji)`, que a fase 2 substituiu nas 49 fichas. Reportado e não corrigido |
