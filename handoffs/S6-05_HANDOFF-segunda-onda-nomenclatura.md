---
id: handoff.segunda-onda-nomenclatura
title: "HANDOFF — Segunda onda da nomenclatura"
sessao-de-origem: 6
status: aguardando-abertura
version: 3
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

**A coluna Romaji nunca foi conferida contra o cânone.** O Registro declara essa pendência no próprio cabeçalho, e a onda propagaria romanização não verificada para 52 fichas e para toda citação cruzada, multiplicando o alcance de qualquer erro que exista ali.

**Decidido: a conferência vem antes, e ela é do subconjunto que a onda toca.** Ver a seção 5.1.

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

## 5. Decisões

### 5.1 A conferência das romanizações — decidido

**Vem antes da onda, e é passada de Gabriel, não desta onda.** Conferência contra a Narutopedia é pesquisa canônica com etiquetagem: roda em chat de design e não em propagação.

**E não é a passada de 491 que a v1 deste documento supunha.** Só precisam estar conferidas as obras que a onda toca.

| | |
|---|---:|
| obras no Registro | 491 |
| com ficha publicada | 47 |
| citadas em `chidori-family.md` e `rasengan-family.md` | 15 |
| união das duas | 51 |
| Pantera Negra, acrescentada por decisão | 1 |
| **o subconjunto a conferir** | **52** |
| restante, pendência aberta no Registro | 439 |

Três das 51 não publicam romanização alguma: Chidori, Takemikazuchi e Amaterasu, as entradas de kanji puro cujo cabeçalho se lê como romanização sem que o documento afirme que é uma. Para essas três a conferência não é verificar e sim **descobrir se a fonte publica uma**, e o resultado entra no Registro vindo da fonte, nunca do cabeçalho. Se a fonte não publicar, o campo continua vazio.

**A Pantera Negra entra por decisão, e não pelo recorte.** `黒豹` publicado como `Kuropansa` é a única romanização sob suspeita identificada, e ela não tem ficha nem é citada nos dois documentos de linhagem: pela regra que define as outras 51, ficaria de fora. Conferir tudo menos o caso conhecido, justamente porque o caso conhecido não cumpre o critério, é o tipo de recorte que passa por completo sem cobrir o que importa. Ela é a linha 52.

O critério fica registrado com a exceção à vista, e não reescrito para acomodá-la: o subconjunto é o que a onda toca **mais** o que já se sabe suspeito. Se outra suspeita aparecer antes da onda abrir, entra pela mesma porta.

**A onda abre com as 52 conferidas**, e o Registro segue carregando a pendência aberta para as 439 restantes, que se conferem depois sem bloquear nada.

### 5.2 A forma do cabeçalho da ficha

**A forma do cabeçalho da ficha.** As três atuais não convergem, e a Norma governa o formato de entrada de compêndio, não o de ficha. Se a ficha adota `# Romaji — 漢字 · Português` por simetria com o compêndio, o Template de Documento de Técnica muda primeiro, como a Norma mudou.

**O `title` do front matter.** Uma forma para as 52, e a decisão de se ele repete o cabeçalho ou se carrega só o nome primário.

**O que fazer com as citações em documento de sistema.** `chidori-family.md` e `rasengan-family.md` concentram 232 das ocorrências e são prosa de linhagem, não catálogo. Trocar nome em prosa corrida é diferente de trocar em lista, e pode ser passada própria. São também os dois documentos que definem metade do subconjunto da 5.1, o que os torna o primeiro alvo natural da onda.

---

## 6. Estado na abertura

Corpus e aplicação com a primeira onda mesclada. 491 entradas, 491 registros, 47 fichas promovidas, 0 problemas, 0 bloqueadas. Os catorze `.json` byte-idênticos ao que a primeira onda encontrou, porque a migração de identificador correu antes da transcrição.

A migração de `characters.data` está escrita, verificada contra cópia sintética e **não aplicada**. Ela não pertence a esta onda e não é pré-requisito dela.
