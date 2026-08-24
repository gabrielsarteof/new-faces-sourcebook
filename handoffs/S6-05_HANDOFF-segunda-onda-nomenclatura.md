---
id: handoff.segunda-onda-nomenclatura
title: "HANDOFF — Segunda onda da nomenclatura"
sessao-de-origem: 6
status: aguardando-abertura
version: 1
---

# HANDOFF — Segunda onda da nomenclatura

A primeira onda passou os catorze compêndios ao japonês como nome primário e produziu o Registro de Nomes. As fichas de `techniques/`, a prosa das perícias e as citações cruzadas ficaram em português, e a divergência é temporária e declarada. Esta onda a fecha.

Escrito com o terreno fresco, ao fim da primeira. Não começou.

---

## 1. O que ela alcança

**As 52 fichas de `techniques/`.** O cabeçalho e a linha de título de cada uma.

**As citações cruzadas.** Cerca de 1.035 ocorrências de nome em português em 94 documentos fora dos compêndios, concentradas em `chidori-family.md` com 132, `rasengan-family.md` com 100, `skills/overview.md` com 53 e `jutsu-authoring.md` com 49. O número é contagem de substring e superestima: parte das ocorrências é prosa que coincide com um nome. **Ele serve para dimensionar e não para planejar** — a onda mede de novo, com o recorte publicado junto, pela §2 do `METODO`.

**Não alcança a nomenclatura do sistema.** Inclinações e caminhos permanecem em português, as transcendências conservam a nomeação deity-first, e a grafia de requisito de perícia continua sendo matéria da linha de requisitos. A fronteira está declarada na Seção 10 da Norma de Produção de Compêndios e não se reabre aqui.

---

## 2. O que ela consome do Registro

`worlds/naruto/compendiums/registro-de-nomes.md` publica as 491 obras com romaji, kanji, português, domínio e ficha. É a concordância, e a onda lê dela em vez de derivar de novo.

As 47 linhas com ficha preenchida são o par exato entre catálogo e documento. As 22 fichas cujo cabeçalho não publica romanização tiram a romanização dali, e é para isso que o Registro existe.

**A coluna Romaji nunca foi conferida contra o cânone.** O Registro declara essa pendência no próprio cabeçalho. A onda propaga romanização não verificada para 52 fichas e para toda citação cruzada, o que multiplica o alcance de qualquer erro que exista ali. É a primeira decisão da seção 5.

---

## 3. O que a primeira onda aprendeu, e que esta vai precisar

### O identificador não se move, e é isso que assusta

O `id` da ficha é `fm.id`, lido do front matter, e não deriva do cabeçalho. Renomear cabeçalho de ficha é neutro para identificador **por construção**, e não há equivalente da fase 2 aqui. Nenhuma migração, nenhum ponto escrito à mão, nenhuma escrita em ficha gravada.

O pipeline de fichas também nunca lê o cabeçalho nem o `title` para nome algum: ele lê as seções numéricas e mecânicas. O nome da ficha vive só na prosa e no Índice.

**Nenhuma catraca guarda o nome da ficha.** Não existe hoje comparação entre o que a ficha publica como nome e o que o compêndio publica para a mesma obra. Uma ficha renomeada errado, ou renomeada para um nome que diverge do catálogo, não quebra teste nenhum, não muda `.json` nenhum e não acusa em lugar nenhum. Verificação ausente é o caso-limite da família da §1 do `METODO`: ela não é um espelho, é a parede sem espelho.

**A onda começa construindo essa catraca**, contra o Registro, e provando-a com o defeito injetado, antes de renomear a primeira ficha. É o equivalente exato da fase 1 da primeira onda, e pela mesma razão: sem ela a onda inteira roda verde.

### As três formas de cabeçalho que as fichas publicam

| Forma | Fichas |
|---|---:|
| `# Português — 漢字 (Romaji)` | 29 |
| `# Português (漢字)` | 22 |
| outra | 1 |

O `title` do front matter diverge das três: 30 fichas escrevem `nome (漢字)`, 6 escrevem `romaji — português (漢字)` e 16 escrevem outra coisa. Cabeçalho e título não concordam entre si hoje, e a onda tem de decidir uma forma para cada um antes de tocar em qualquer arquivo.

O `title` alimenta o `INDEX`, que é gerado. Mudá-lo é barato e regerável.

### A linha de nome se parte pela escrita, nunca pelo separador

Cento e noventa e uma das 491 entradas publicam ponto médio **dentro do próprio lado japonês**, 190 como `・` e uma, o Ten no Juin e Chi no Juin do Fūinjutsu, como `天の呪印 · 地の呪印` — o mesmo sinal que o formato usa para separar. Nenhum lado japonês do corpus carrega caractere latino, e a partição corre pela fronteira entre as duas escritas.

A implementação está em `partirNomeJapones` do pipeline e no leitor independente `nomesDoCompendio.ts`, e a razão está escrita na Norma para ninguém trocar o leitor por um `split` no futuro. As fichas usam parênteses onde os compêndios usavam travessão, então o leitor precisa de um caso a mais — e a regra que o rege é a mesma.

### Não inventar continua valendo

As 7 obras de kanji puro não publicam romanização, e o cabeçalho delas não é tomado por uma nem na ficha nem na citação. `Kuropansa` para `黒豹` segue como está até a conferência correr.

### Varredura escopada, e substituição do mais longo para o mais curto

Citação cruzada mora em prosa, que é onde a varredura larga erra mais. Escopar ao bloco, sempre. E `Chidori` come `Chidori Katana` se a substituição correr na ordem errada.

---

## 4. Verde

Catraca de nome de ficha construída, provada com o defeito injetado, e verde antes da primeira renomeação. As 52 fichas com cabeçalho e título na forma decidida. Citações cruzadas propagadas, com o número medido e o recorte publicado. Registro de Nomes regerado e conferido contra as fichas. `check-links.mjs` sem `--write` em zero, `lint-frontmatter.mjs` sem achado novo, `INDEX.md` regenerado, `INVENTARIO.md` conferido, contagem de compêndios em catorze. Gates da aplicação verdes, sem mudança de dado — se algum `.json` mudar, a onda saiu do escopo.

---

## 5. O que decidir antes de abrir

**A conferência das romanizações vem antes ou depois.** Propagar romanização não conferida para 52 fichas e ~1.000 citações multiplica o alcance de qualquer erro; conferir 491 romanizações contra a fonte antes é uma passada própria e cara. As duas são defensáveis e a escolha é de Gabriel.

**A forma do cabeçalho da ficha.** As três atuais não convergem, e a Norma governa o formato de entrada de compêndio, não o de ficha. Se a ficha adota `# Romaji — 漢字 · Português` por simetria com o compêndio, o Template de Documento de Técnica muda primeiro, como a Norma mudou.

**O `title` do front matter.** Uma forma para as 52, e a decisão de se ele repete o cabeçalho ou se carrega só o nome primário.

**O que fazer com as citações em documento de sistema.** `chidori-family.md` e `rasengan-family.md` concentram 232 das ocorrências e são prosa de linhagem, não catálogo. Trocar nome em prosa corrida é diferente de trocar em lista, e pode ser passada própria.

---

## 6. Estado na abertura

Corpus e aplicação com a primeira onda mesclada. 491 entradas, 491 registros, 47 fichas promovidas, 0 problemas, 0 bloqueadas. Os catorze `.json` byte-idênticos ao que a primeira onda encontrou, porque a migração de identificador correu antes da transcrição.

A migração de `characters.data` está escrita, verificada contra cópia sintética e **não aplicada**. Ela não pertence a esta onda e não é pré-requisito dela.
