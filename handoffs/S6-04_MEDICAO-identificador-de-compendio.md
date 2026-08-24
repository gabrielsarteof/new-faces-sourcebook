---
id: medicao.identificador-de-compendio
title: "MEDIÇÃO — O identificador derivado do heading"
sessao-de-origem: 6
status: aguardando-decisao
version: 1
---

# MEDIÇÃO — O identificador derivado do heading

Responde à seção 2 do `S6-03_PLANEJAMENTO-nomenclatura-compendios-v2`, que manda medir
antes de renomear. Nada foi renomeado. Os catorze compêndios, a Norma e o Índice estão
como estavam.

Estado medido: corpus `main` em `d3c0fb3`, aplicação `master` em `d45d414`. O
planejamento declarava `600bcac` e `dfc35d0`; os dois repositórios andaram desde então,
e `dfc35d0` não existe mais na história rasa da aplicação.

---

## 1. A premissa está certa, e é menor do que o que está em jogo

O identificador deriva do heading. `pipeline.mjs:230` lê `nomePt: linhas[i].slice(4).trim()`,
que é o texto do `### `, e `pipeline.mjs:893` monta `naruto.tecnica.${slug(e.nomePt)}`.
Trocar o heading troca o identificador, exatamente como a seção 2 declara.

O que a seção 2 não sabia é que o heading não governa só o identificador. Governa mais
três coisas, e as três quebram com o formato novo antes de qualquer decisão de `id`.

**O nome em português do registro é o heading.** O registro publica
`nome: { pt: e.nomePt, ja, romaji }`. Com o heading em romaji, `nome.pt` passa a carregar
o romaji, e o nome de leitura que a leva promete conservar deixa de existir no dado.

**A linha japonesa é partida por travessão.** `partirNomeJapones` faz `bruto.split('—')`
e só devolve romaji quando encontra duas partes. O formato novo usa ponto médio, então a
função devolve uma parte só, `romaji` fica indefinido e `ja` recebe a linha inteira.

**O índice de técnica anterior é chaveado pelo heading.** `nomesDeTecnica` resolve as
citações da linha de Requisitos pelo heading, com o romaji como chave secundária. Com o
heading em romaji e o romaji indefinido, toda citação escrita em português deixa de
resolver e vira registro pendente.

---

## 2. As duas catracas não pegam esta renomeação

Simulação executada: os catorze compêndios transcritos para o formato da seção 4 numa
cópia de trabalho, entrada a entrada, com a varredura escopada à fatia de cada entrada.
O conversor rodou sobre o resultado.

| | antes | depois |
|---|---|---|
| entradas lidas | 491 | 491 |
| registros resolvidos | 491 | 491 |
| **entradas bloqueadas** | 0 | **0** |
| **estado por compêndio** | 14 prontos | **14 prontos** |
| **código de saída** | 0 | **0** |
| registros pendentes | 6 | 94 |
| fichas promovidas | 47 | 6 |
| problemas | 0 | 41 |

As três linhas em negrito são as catracas. As três ficam verdes.

O registro do Raikiri depois da transcrição:

```json
{ "pt": "Raikiri", "ja": "雷切 · Cortador de Raio" }
```

O campo `romaji` desapareceu. O `ja` colou kanji e português numa string só. O nome em
português sumiu do dado. Nada disso levantou problema, porque nada disso é erro de
análise: a entrada foi lida inteira, com sucesso, e o que se perdeu se perdeu na
interpretação.

**Por que a catraca de contagem é cega a isto.** Ela compara, em
`compendiosPendencias.test.ts`, `naFonte` montado de `e.nomePt` contra `nomesEmDisco`
montado de `r.nome.pt` — e o pipeline preenche `r.nome.pt` a partir de `e.nomePt`. Os dois
lados da comparação saem da mesma fonte e se movem juntos. A asserção final é de contagem,
e a contagem não muda.

**Por que a catraca de bloqueadas é cega a isto.** `entradasBloqueadas` só recebe entrada
que acrescentou um `problema` ao próprio laço. Renomeação limpa não acrescenta nenhum.

Os 41 problemas que aparecem são todos `ficha-aponta-para-registro-inexistente`, com
`local: 'fichas.mjs'`. Como não pertencem a compêndio nenhum, o recorte por compêndio não
os vê, os catorze são declarados prontos e o CLI sai com 0.

O que pega o defeito hoje são duas asserções de fora das catracas: a contagem de
`registrosPendentes` (6 esperados, 94 obtidos) e a de `problemas` (0 esperados, 41 obtidos).
Nenhuma das duas nomeia o que se perdeu.

---

## 3. Quantos identificadores mudariam

| Compêndio | Entradas | `id` muda | `id` fica | Sem romaji |
|---|---:|---:|---:|---:|
| doton.md | 34 | 34 | 0 | 0 |
| eight-gates.md | 17 | 17 | 0 | 0 |
| forma.md | 19 | 15 | 4 | 0 |
| fuinjutsu.md | 42 | 42 | 0 | 0 |
| futon.md | 34 | 34 | 0 | 0 |
| genjutsu.md | 36 | 34 | 0 | 2 |
| inton.md | 40 | 40 | 0 | 0 |
| katon.md | 44 | 43 | 0 | 1 |
| kyuinjutsu.md | 19 | 17 | 2 | 0 |
| medical-ninjutsu.md | 54 | 54 | 0 | 0 |
| raiton.md | 41 | 37 | 0 | 4 |
| sensory.md | 36 | 36 | 0 | 0 |
| suiton.md | 35 | 35 | 0 | 0 |
| yoton.md | 40 | 40 | 0 | 0 |
| **Total** | **491** | **478** | **6** | **7** |

Os 6 que ficam já publicam o heading em romaji: Rasengan, Ōdama Rasengan, Rasenrengan,
Chō Ōdama Rasengan, Kūfuku Kyūin e Takamimusubinokami.

Os 7 sem romaji publicam só o kanji e mantêm o heading: Amaterasu (天照), Chidori (千鳥),
Takemikazuchi (建御雷神), Kirin (麒麟), Limelight (ライムライト), e os dois do Genjutsu que
escrevem o heading como aposto — Tokoyo no Kuni, o País Perene (常世国) e Ame-no-Sagume, a
Palavra que Torce (天探女). Esses dois são o único ponto da leva em que a reordenação exige
partir um heading, e a partição é decisão, não transcrição.

**Fila de decisão: vazia.** As 491 entradas publicam linha japonesa. Nenhuma entra na
regra de não invenção da seção 5 por falta de nome japonês.

---

## 4. Quantas referências cruzadas apontam para cada um

### No corpus: nenhuma

Zero ocorrências de `naruto.tecnica.*` nos 191 documentos, fora a citação de exemplo
dentro do próprio planejamento. Zero links com âncora para heading de compêndio. O corpus
não nomeia identificador e não linka heading — o risco de âncora declarado na seção 12 do
planejamento é vazio.

O que o corpus cita por nome são as listas temáticas: 453 das 491 entradas aparecem no
Índice Rápido do próprio compêndio, em cerca de 611 ocorrências. Isso é trabalho da leva
e independe da decisão.

### Na aplicação

| Onde | Ids distintos | Ocorrências | Custo |
|---|---:|---:|---|
| `techniques/*.json` gerado | 497 | 645 | nenhum, é regerado |
| Citado à mão em teste, script e doc | 52 que mudam | 175 | edição manual |
| `characters.data` (JSONB) | — | — | migração de dado |

Os 175 pontos manuais, por arquivo:

```
42  src/test/domain/TechniqueView.test.ts
41  scripts/compendios/fichas.mjs
17  src/test/data/fichasDeTecnica.test.ts
17  src/test/domain/techniques/FichaResolver.test.ts
15  src/test/data/tecnicasBaseUniversais.test.ts
12  src/test/data/linhagemChidori.test.ts
10  src/test/presentation/eightGatesNaFicha.test.tsx
 9  src/test/data/linhagemHiraishin.test.ts
 5  src/test/presentation/JutsuRegra.test.tsx
 4  src/test/domain/techniques/TechniqueEligibility.test.ts
 1  src/test/presentation/JutsusSection.test.tsx
 1  src/test/domain/techniques/StrandedTechniques.test.ts
 1  docs/architecture/ROTEIRO_LINHAGEM_DE_TECNICAS.md
```

**Recorte desta varredura, e o que ele deixou de fora.** As contagens acima varreram
`.ts`, `.tsx`, `.mjs` e `.md`, e não `.json` fora do gerado. A execução da fase 2 achou
mais treze ocorrências em dois arquivos de dado escritos à mão que este recorte não
alcançava, `eight-gates-ladder.json` e `provenance.json`. Varredura de referência
cruzada cobre toda extensão que carrega dado, e a lista de extensões entra no relatório
junto com o número.

**A ficha salva guarda identificador.** `characters.data` é JSONB. A primeira leitura
desta medição disse que o campo era `techniques`, e estava errada: `techniques` é vista
derivada, montada para `CharacterContext`, e o que o dado gravado carrega é
`data.expansions[].id`, com técnica, vantagem e expansão de jujutsu no mesmo array. A
migração escrita sobre o campo errado teria casado zero linhas e saído verde. Migração de `id` sem
migração de dado desliga em silêncio toda técnica de toda ficha já gravada. Existe
precedente para o formato da migração em
`20260719000000_rename_ninjas_chronicles_ruleset_to_naruto.sql`, que já reescreve
`characters.data` com `jsonb_set`.

### Um defeito vivo que a medição encontrou

`ContextoFrom.ts:63` fixa `const ID_KAGE_BUNSHIN = 'naruto.tecnica.kage-bunshin-no-jutsu'`.
Esse id não existe em catálogo algum: o registro real hoje é
`naruto.tecnica.tecnica-do-clone-das-sombras`. A regra que faz o Kage Bunshin fornecer
assistência de moldagem está morta em produção neste momento.

O id fixado é exatamente o que o romaji produziria.

---

## 5. O que acontece com o REGISTRO_POR_FICHA

O mapa tem 48 pares, um deles `null` (a via de impregnação do Hiraishin, sem entrada de
compêndio por decisão declarada). Dos 47 restantes:

| | coincidem | divergem |
|---|---:|---:|
| hoje | 6 | 41 |
| com `id` = romaji | 19 | 28 |
| com `id` = romaji e normalização de prefixo e sufixo | **46** | **1** |

O ganho intermediário é modesto: 19 de 47 é minoria, e não a "maioria dos casos" que o
planejamento previu. As 28 que sobram são dois padrões mecânicos e um caso real:

- 14 pares em que a ficha nomeia `X` e o compêndio nomeia `X no Jutsu` — Kawarimi,
  Bunshin, Henge, Nawanuke, Oiroke, Kakuremino, Shunshin, Tōton, Meisaigakure,
  Kage Bunshin, Bunshin Daibakuha, Harem, Tajū Kage Bunshin, Hiraishin;
- 13 pares em que o compêndio prefixa o elemento — `Katon: Gōkakyū no Jutsu` contra
  `gokakyu`;
- 1 divergência real de nome: a ficha chama Chidori Katana e o compêndio publica
  `Kusanagi no Tsurugi: Chidori-tō`.

Descontados os dois padrões, o mapa cai para **uma linha**. É esse o número que sustenta o
argumento da seção 2, e ele só aparece se a derivação normalizar prefixo de elemento e
sufixo `no Jutsu`. Sem a normalização, o mapa continua com 28 linhas escritas à mão e a
promessa de encolhimento não se cumpre.

---

## 6. O custo das duas saídas

Uma coisa é comum às duas e não é escolha: **o pipeline precisa aprender o formato novo
antes de qualquer compêndio ser transcrito.** `partirNomeJapones` passa a ler
`**漢字 · Português**`, `nome` passa a montar `romaji` do heading e `pt` da linha seguinte,
e `nomesDeTecnica` passa a indexar as duas formas para que as citações em português
continuem resolvendo. As catracas também precisam de conserto: a de contagem tem de
comparar o português contra a linha que o publica, e não contra o campo que ela mesma
derivou do heading. Sem isso, as duas saídas produzem os mesmos 41 desligamentos e as
mesmas 88 pendências fantasmas, verdes.

Os sete de kanji puro ficam sem `pt`, e o tipo declara `pt: string`. A regra de fallback
para eles — repetir o romaji ou admitir vazio — é decisão pequena que a Norma precisa
declarar junto da cláusula do substantivo próprio.

### Identificador acompanha o romaji

- 478 identificadores migram. No JSON gerado o custo é zero: o conversor reescreve.
- 52 ids distintos em 175 pontos manuais, em 13 arquivos da aplicação.
- Uma migração SQL sobre `characters.data` reescrevendo 478 ids. Sem ela, toda ficha
  gravada perde as técnicas em silêncio. É o item de maior risco das duas saídas, e o
  único irreversível.
- `REGISTRO_POR_FICHA` cai de 41 linhas divergentes para 1, se a derivação normalizar
  prefixo e sufixo. Para 28, se não normalizar.
- O Kage Bunshin volta a funcionar.
- Puxa a aplicação para dentro desta leva. A seção 3 do planejamento a excluía, com a
  ressalva "salvo o que a decisão da seção 2 obrigar". Esta obriga.

### Identificador congela onde está

- Zero migração de dado gravado. Zero edição nos 175 pontos manuais.
- O `id` deixa de ser derivável, e passa a precisar de fonte. Duas formas, e nenhuma
  barata:
  - declarar o `id` na entrada. É mudança de formato nas 491 entradas e na Norma, contra
    o "o resto da entrada não muda" do escopo, e põe no corpus um campo que nenhum leitor
    de mesa usa;
  - ou congelar um mapa de 484 linhas em `pipeline.mjs`, de heading em romaji para o `id`
    legado. Passa a ser dívida permanente da aplicação, e toda entrada nova de compêndio
    passa a exigir uma linha nova no mapa, escrita à mão, sob pena de nascer com `id`
    derivado enquanto as vizinhas têm `id` congelado.
- `REGISTRO_POR_FICHA` fica com as 41 linhas. Somado ao mapa novo, o projeto passa a
  manter dois mapas de nome à mão, 532 linhas no total, para o mesmo catálogo de 491
  entradas.
- O Kage Bunshin continua morto.
- O corpus passa a carregar identificador que não se lê do documento — que é exatamente o
  que o planejamento chamou de dívida permanente.

---

## 7. Recomendação

**Identificador acompanha o romaji**, com a normalização de prefixo de elemento e sufixo
`no Jutsu` na derivação.

O que decide não é o custo de agora: é que a saída de congelar cobra uma manutenção que
cresce com o catálogo, enquanto a de migrar cobra uma vez. O mapa congelado de 484 linhas
nasce desatualizado no dia em que o Compêndio de Passagem publicar a primeira entrada, e
não tem catraca que o guarde. E congelar não elimina a migração de dado gravado; apenas a
adia para o dia em que alguém quiser que o `id` volte a se ler do documento.

O número que fecha o argumento é o do `REGISTRO_POR_FICHA`: 41 linhas escritas à mão hoje,
1 depois. O mapa existe porque o `id` do compêndio e o da ficha divergem, e a divergência
existe porque um lado nomeia em português e o outro em japonês. Migrar o `id` remove a
causa. Congelar preserva a causa e acrescenta um segundo mapa.

Ordem sugerida, se a saída for essa:

1. O pipeline aprende o formato novo e a catraca de contagem ganha fonte independente para
   o português. Provada reintroduzindo este defeito: transcrever uma entrada e conferir que
   a catraca fica vermelha e nomeia a entrada.
2. A Norma publica o formato, a não invenção, o substantivo próprio, o fallback de `pt` e
   a fronteira contra a nomenclatura de perícia.
3. Os catorze compêndios transcrevem, o Raiton primeiro, com as sete do Chidori provando o
   padrão.
4. `registro-de-nomes.md` nasce e entra no Índice.
5. A aplicação regera, os 175 pontos manuais acompanham, a migração de `characters.data`
   é escrita e conferida contra ficha real antes de ir.

O passo 1 não é preparação: é a condição para que os passos 3 e 5 sejam conferíveis. Sem
ele a leva inteira roda verde e entrega dado errado, que é precisamente o defeito que as
catracas nasceram para impedir.

---

## 8. Achados de lado, medidos e não corrigidos

**Blocos em ordem alfabética pelo português.** Dos 76 blocos de rank com três ou mais
entradas, 3 estão em ordem alfabética: `forma.md` Rank A, `fuinjutsu.md` Rank S e
`futon.md` Rank S. Os três têm exatamente três entradas, o que torna a coincidência
provável. Nenhum compêndio está ordenado alfabeticamente de fato, e a passada de
reordenação da seção 9 do planejamento não tem trabalho a fazer.

**Romanização divergente.** `raiton.md:467` publica `Kuropansa — 黒豹`, já identificado no
planejamento. Nenhuma outra romanização do catálogo mostra sinal de divergir do kanji na
varredura mecânica; a conferência contra a Narutopedia continua sendo passada própria e não
foi feita aqui.

**Branch.** O planejamento pede `errata/nomenclatura-compendios`. Esta sessão foi aberta em
`claude/nomenclatura-compendios-liumpw` e é nela que este documento entra. A conciliação dos
dois nomes é decisão de Gabriel, antes da leva andar.
