---
id: core.skill-pipeline
title: "Pipeline de Perícia"
version: 1
layer: core
type: methodology
status: final
source-file: Pipeline_de_Pericia_v1.md
---

# PIPELINE DE PERÍCIA

Percurso completo de uma perícia dentro do corpus, da primeira varredura canônica até o
ponto em que ela está publicada, propagada e pronta para a aplicação consumir.

## 0. Fronteira deste documento

Três documentos governam perícia, e cada um responde por uma coisa só.

| Documento | Responde por |
|---|---|
| `core.skills-core` | A estrutura e os valores: tabelas de teste, estados, especialização, largura |
| `core.skill-authoring` | O conteúdo mecânico: o que é um caminho legítimo, como se parte uma inclinação, o que é transcendência |
| `core.skill-pipeline` | O percurso: em que ordem, com que ferramenta, o que muda rio abaixo, e quando está pronto |

Este documento nunca republica número nem regra de mecânica. Quando o percurso exigir uma
decisão de conteúdo, ele aponta a seção do Manual de Criação de Perícias e segue.

A contrapartida deste pipeline do lado da aplicação é `PERICIA_TRANSCRIPTION.md`, na raiz
do repositório da aplicação. A fronteira entre os dois é a publicação: aqui termina quando
o documento está no corpus e propagado, e lá começa no mesmo ponto.

---

## 1. Antes de começar

Estado real se verifica lendo arquivo, nunca por memória de sessão. Três comandos, sempre,
antes de tocar qualquer coisa.

```
git -C sourcebook fetch origin
git -C sourcebook branch --show-current
node tools/check-links.mjs
```

O primeiro traz o que outras linhas de trabalho publicaram. O segundo existe porque commit
em `HEAD` detached não entra em branch nenhum e o push não o leva. O terceiro diz se o
`INDEX.md` está em dia, e o `INDEX.md` é a única fonte confiável de versão vigente.

Leitura obrigatória antes de propor mecânica, nesta ordem: `core/skills-core.md`,
`core/skill-authoring.md`, o Índice de Perícias do cenário, e os documentos das perícias
vizinhas que a nova vai encostar. Perícia vizinha lida por memória produz fronteira falsa.

---

## 2. Fase 1: auditoria canônica

Varredura da fonte primária, com inventário em tabela de três colunas.

| Fundamento | Fonte | Destino |
|---|---|---|
| O que a obra mostra | Onde, com etiqueta de camada | Régua de níveis, inclinação, caminho, ou recusa com dono nomeado |

Três regras fecham a fase.

**Nenhuma célula de destino em branco.** Fundamento sem destino é fundamento não auditado,
e caminho sem linha de inventário é invenção.

**Recusa nomeia dono.** Território que sai da perícia sai para algum lugar. "Não pertence
aqui" sem destino é lacuna disfarçada de decisão.

**Auditoria pedida é auditoria feita.** Reciclar achado de sessão anterior para responder a
pedido de auditoria nova é falha de método, ainda que a citação seja verdadeira.

O erro mais caro desta fase é confundir auditar o repositório com auditar o cânone. A v1 do
Senjutsu saiu com camada de acesso inventada porque a aritmética e as tabelas foram
conferidas e a obra não. Auditoria de tabela não substitui auditoria de fonte.

---

## 3. Fase 2: planejamento com aprovação incremental

Seção por seção, aguardando aprovação a cada etapa. O planejamento cobre fronteira,
partição, lotação de caminhos, réguas e tensões de design, pelo procedimento da seção 15.2
do Manual de Criação de Perícias.

Tensão de design se levanta aqui. Depois do documento escrito é tarde, e a reescrita custa
o documento inteiro, porque entrega parcial não existe neste corpus.

---

## 4. Domicílio: onde o documento mora

Decisão que precede o front matter e que nenhum outro documento governa.

O teste é único e literal: **alguma linha do documento lê fato de cenário?** Fato de
cenário é chakra, natureza elemental, clã, vila, técnica nomeada, ou pré-requisito de
perícia que só existe naquele mundo.

| Resposta | Domicílio | `layer` | `scenario` | Namespace do `id` |
|---|---|---|---|---|
| Nenhuma linha lê | `worlds/common/skills/` | `scenario` | `common` | `common.skill.<nome>` |
| Alguma linha lê | `worlds/<mundo>/skills/` | `scenario` | `<mundo>` | `<mundo>.skill.<nome>` |

`core/` é fechado para conteúdo jogável. Ele hospeda metodologia, núcleo e catálogo comum,
e perícia jogável ali é erro de camada, ainda que a perícia seja agnóstica de cenário.

Precedentes resolvidos, com a razão de cada um:

| Perícia | Domicílio | Razão |
|---|---|---|
| Taichi, Kenpo, Taekwondo, Tantō | `common` | Arte marcial e arma sem nenhum fato de mundo em nenhum efeito |
| Leque | `naruto` | Subclasse do Fūton, com portão de perícia elemental |
| Kyuinjutsu | `naruto` | Opera chakra, que é fato de cenário |

Perícia de domicílio comum registra regente, fronteira e conformidade no Índice de Perícias
do cenário do mesmo jeito que qualquer outra, porque a Regra de Propriedade pergunta se o
fato é sobre a relação entre perícias que um personagem daquele cenário compra, e não onde
o arquivo mora. Um Índice de Perícias Comuns é dono pendente, ainda não escrito.

---

## 5. Fase 3: documento final

Só depois de aprovação integral do planejamento, no registro de prosa vigente.

### 5.1 Front matter

```yaml
---
id: <namespace>.skill.<nome-kebab>
title: "<Nome>"
version: 1
layer: scenario
scenario: <common | naruto | jujutsu>
type: skill
status: final
source-file: Pericia_<Nome>_v1.md
---
```

O `id` é a chave estável que amarra manual e dado, e ele não muda quando o arquivo se move.
Renomear arquivo é barato justamente porque nada rio abaixo depende do caminho.

### 5.2 Seções obrigatórias

Identidade e camadas, fronteira com donos nomeados, régua de níveis LV1 a LV6 com números,
inclinações com condição de entrada, caminhos com grau e complexidade, réguas transversais,
transcendências, arquétipos de ápice, etiquetagem, dependências, fila de errata e registro
de alterações.

Os oito campos do contrato de mecânica valem para todo verbo, sem exceção e com números
resolvidos por nível.

### 5.3 Título de régua transversal

Cada título de régua abre linha própria, em caixa alta, sem prosa na mesma linha.

```
RÉGUA DE RETENÇÃO

O praticante retém o que arrancou por [...]
```

A convenção não é estética. O extrator da aplicação identifica régua por cabeçalho, e
título grudado na prosa faz a régua sumir do inventário sem erro nenhum aparecer. Kenpo e
Taekwondo precisaram do mesmo commit de correção depois de publicados, cada um por conta
própria, e é a única razão pela qual esta regra está escrita aqui.

Documento que use cabeçalho markdown ou primeira frase de parágrafo em vez de caixa alta
continua legível, mas obriga uma linha de configuração do lado da aplicação. Caixa alta é o
padrão e dispensa essa linha.

### 5.4 Lacuna se declara, nunca se preenche

Valor que a auditoria não fecha vira lacuna declarada no próprio documento, com o dono
nomeado, e entra na fila de errata. Ele nunca vira número escolhido para fechar a tabela.

O caminho Voragem do Kyuinjutsu é o precedente: slot reservado e vazio até o rework do
Meiton, publicado sem grau, sem complexidade e sem efeito, com a razão escrita. O custo
disso rio abaixo é uma linha a menos no JSON, que é infinitamente mais barato que um grau
inventado que ninguém sabe mais de onde veio.

---

## 6. Propagação

Publicar sem propagar deixa o corpus inconsistente. O Índice de Perícias do cenário recebe,
em todos os casos:

| Registro | O que entra |
|---|---|
| Regentes | Linha com versão, atributo regente e categoria de custo |
| Carga por atributo | Contagem do regente atualizada |
| Vizinhança | Eixo de compra conjunta, quando houver |
| Fronteira | Bloco `### Cedido pela <Perícia> v1` com território e dono |
| Portão duplo | Linha, quando a perícia declarar portão cruzado |
| Conformidade | Linha contra as versões vigentes do Núcleo e do Manual |
| Erratas abertas | Uma linha por dívida criada em documento alheio |
| Alterações | Parágrafo narrando tudo acima |

Fora do Índice: todo documento que a perícia nova toca sobe de versão e registra a mudança.
Cessão recíproca se fecha dos dois lados, e cessão declarada de um lado só é errata aberta,
não propagação feita.

Referência quebrada some. Quando a perícia nova ocupa território que outro documento
prometia a um arquivo inexistente, aquela promessa vira ponteiro para a perícia, e o alvo
previsto sai da conta do corpus.

---

## 7. Quality gates do corpus

Verde do corpus são duas ferramentas e um checklist, nesta ordem.

```
node tools/lint-frontmatter.mjs
node tools/check-links.mjs --write
node tools/check-links.mjs
```

O `--write` regrava `INDEX.md` sobre o estado real da árvore. A segunda invocação, sem
flag, precisa sair em zero: código 1 significa índice defasado. O `INDEX.md` nunca se edita
à mão.

O checklist de conteúdo é a seção 15.4 do Manual de Criação de Perícias, integral.

A verificação de prosa fecha, na ordem: travessão, a expressão "e sim", abertura repetida
de parágrafo, frase sem verbo, e qualquer menção a fase, aprovação ou alternativa
descartada. Um travessão encontrado obriga releitura do documento inteiro.

---

## 8. Contrato de entrega para a aplicação

O que a aplicação consome do documento, e que portanto precisa estar publicado antes de
qualquer transcrição começar.

| O que a aplicação lê | Onde no documento |
|---|---|
| `id` e `version` | Front matter |
| Atributo regente | Identidade |
| Categoria e multiplicador | Identidade, contra a Economia de XP |
| Portão de perícia, com nível relativo | Identidade |
| Texto de LV1 a LV6 | Régua de níveis |
| Inclinações, com a condição de entrada | Seção de partição |
| Caminhos, com grau, complexidade e efeito por estado | Cabeçalho e corpo de cada caminho |
| Réguas transversais, título e conteúdo | Seção própria, cabeçalho em caixa alta |
| Transcendências, com pré-requisito de caminho quando houver | Seção própria |

Nada aqui é derivado, inferido ou arredondado do outro lado. Campo que a aplicação precisa e
o documento não publica é lacuna do documento, e volta como pedido de errata.

Concluída a propagação, o trabalho passa para `PERICIA_TRANSCRIPTION.md` na aplicação. A
transcrição começa movendo o ponteiro do submódulo, então o commit desta publicação precisa
estar no branch certo e alcançável antes de o outro lado começar.

---

## 9. Trabalho paralelo

Seis perícias nasceram em linhas simultâneas partindo do mesmo commit, e a reconciliação
delas produziu quatro regras que valem sempre que mais de uma perícia estiver em voo.

**Nenhuma perícia se declara a primeira de coisa alguma.** Taichi e Kenpo se
autodeclararam, cada um no próprio documento, a primeira perícia global do catálogo.
Afirmação de primazia depende de enxergar todas as linhas em voo, e nenhuma linha enxerga.
Quem reconcilia decide, e o documento só afirma o que é verificável dentro dele.

**Fronteira contra perícia em voo é fronteira contra o vazio.** A errata do Kenpo afirmava
que o Taichi não existia em lugar nenhum, o que era verdade no commit dele e falso no
corpus. Cessão só se declara contra documento publicado.

**`INDEX.md` conflita sempre, e a resolução é regenerar.** O arquivo é gerado, então
qualquer resolução manual é desperdício. Aceita-se um lado e roda-se `check-links.mjs
--write` sobre a união.

**Colisão de versão é normal e se resolve subindo um degrau a mais.** Duas linhas numerando
o mesmo documento com o mesmo número e mudando coisas diferentes se resolve numa versão
acima das duas, com a colisão nomeada no registro de alterações.

---

## 10. Verde a verde

A perícia está pronta para a aplicação quando todas as linhas abaixo estiverem verdadeiras.

- Inventário de auditoria fechado, sem célula de destino em branco
- Planejamento aprovado seção por seção antes de o documento existir
- Domicílio decidido pelo teste da seção 4, com `layer`, `scenario` e namespace do `id` coerentes
- Checklist da seção 15.4 do Manual de Criação de Perícias, integral
- Verificação de prosa, na ordem da seção 7
- Índice de Perícias com os oito registros atualizados
- Documentos alheios tocados subiram de versão e registraram a mudança
- Erratas criadas em documento alheio nomeiam o dono e estão na fila
- Lacunas declaradas no corpo, nenhum valor inventado
- `lint-frontmatter.mjs` sem achado novo
- `check-links.mjs` sem `--write` saindo em zero
- Commit num branch nomeado, conferido com `git -C sourcebook branch --show-current`

---

*Pipeline de Perícia v1. O Manual de Criação de Perícias governa o conteúdo e o Núcleo de
Perícias governa os valores; aqui vive o percurso. Auditoria de cânone antes de proposta,
aprovação antes de documento, propagação antes de verde, e lacuna declarada antes de
qualquer número escolhido para fechar tabela.*
