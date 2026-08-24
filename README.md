# New Faces Sourcebook

Fonte da verdade do sistema de RPG: os manuais que definem as regras, os cenários que
as implementam e o material de campanha. Consumido pelo **New Faces Character Creator**
como submódulo Git — montado lá em `sourcebook/` — onde vira dado estruturado em
`src/shared/data/`.

Este repositório é independente e evolui no próprio ritmo. Um ajuste de prosa aqui não
dispara a esteira da aplicação, e a versão do manual não fica presa à versão do código.

## Arquitetura

```
core/                  camada fundamental — agnóstica de cenário
worlds/<mundo>/        implementação de um cenário concreto
  systems/             subsistemas próprios do mundo
  skills/              perícias: progressão, portões de rank
  compendiums/         catálogos de técnicas por rank
  techniques/          documentos de técnica individual
  clans/               clãs e linhagens
  campaign/            worldbuilding e material de mesa
  extensions/          substituições declaradas de regra do núcleo

handoffs/              camada de processo — não é corpus
tools/                 ferramentas de verificação
site/                  new-faces-docs, o site público de leitura
```

Em vocabulário DDD, `core/` é o *shared kernel* e cada pasta sob `worlds/` é um
*bounded context*. A dependência é unidirecional: **cenário conhece núcleo, núcleo
nunca conhece cenário.** Um documento de núcleo que cite um cenário nominalmente é
um vazamento.

### `handoffs/` é camada de processo

Regra vive apenas em `core/` e em `worlds/`. A pasta `handoffs/` guarda o material
de decisão das levas de propagação, os planos, os briefings e os consolidados que
registram por que uma regra ficou como ficou, e **nada nela é fonte para regra
alguma**.

Disso decorrem quatro consequências, e as quatro são decisão declarada e não item
de lista que uma passada futura possa reverter por engano:

- **Não entra no Índice.** `tools/check-links.mjs` a exclui, e o total de documentos
  do corpus nunca a conta.
- **Não entra em teste de proveniência.** Nenhum `id` publicado ali é alvo válido de
  `fonte` em `provenance.json`, do lado da aplicação.
- **Não entra em backlog.** Um link quebrado dentro de um handoff não vira alvo
  previsto do corpus.
- **Perde todo conflito.** Divergência entre um handoff e um documento de regra
  resolve sempre pelo documento de regra, mesmo quando o handoff é mais recente. O
  handoff registra a decisão; o documento de regra é a decisão.

Os varredores que precisam honrar esta camada mantêm a exclusão em fonte única
dentro do próprio repositório: `tools/check-links.mjs` e `tools/lint-frontmatter.mjs`
aqui, e `src/test/data/sourcebookIgnorados.ts` na aplicação. As duas cópias existem
porque o submódulo pode vir vazio num clone sem `--recurse-submodules`, e importar
de um repositório para o outro quebraria o lado que hoje apenas se pula. O que as
mantém alinhadas é esta declaração, e não a importação.

Profundidade máxima de 3 níveis de pasta, por decisão deliberada: o seletor de
arquivos por pasta fica utilizável, e nomes compostos (`uchiha-sharingan.md`)
substituem subpastas de um documento só.

## Front matter

Todo documento carrega:

```yaml
---
id: naruto.skill.katon        # chave estável, não muda quando o arquivo se move
title: "Katon (火遁)"
version: 3
layer: scenario               # core | scenario
scenario: naruto              # ausente quando layer = core
type: skill
status: final                 # rascunho | em-revisao | final | pending-patch
source-file: KATON_Pericia_v3.md
---
```

O `id` é o que amarra manual e dado. Em `src/shared/data/`, cada arquivo aponta de
volta por `fonte`, de modo que comparar manual e JSON é uma consulta por id — e
reorganizar pastas não quebra a rastreabilidade.

## Índice

[`INDEX.md`](INDEX.md) lista todos os documentos com id, versão, camada e
caminho, mais o backlog de material previsto e ainda não escrito. A contagem vive lá
e no `INVENTARIO.md` da aplicação, sob catraca — este parágrafo dizia 99 e o Índice
dizia outra coisa desde muito antes.

A seção de backlog é gerada, não escrita à mão. Um documento que linka para outro
ainda inexistente não está quebrado — está declarando o que falta. Depois de
escrever um documento novo ou mudar um link:

```bash
node tools/check-links.mjs           # verifica; sai 1 se o INDEX estiver defasado
node tools/check-links.mjs --write   # regrava a seção de backlog
```

## Método

[`METODO.md`](METODO.md) publica como uma leva corre aqui: medir antes de executar,
provar toda guarda reintroduzindo o defeito real, reportar antes de corrigir, e não
inventar dado que a fonte não publica.

A seção 1 dele é a família dos espelhos — cinco formas de verificação que não
verifica, cada uma com o caso que a produziu. É a leitura obrigatória antes de
escrever qualquer catraca nova.

## Uso como submódulo

Repositório: `new-faces-sourcebook`. Ponto de montagem no consumidor: `sourcebook/`.

```bash
# no New Faces, uma única vez
git submodule add git@github.com:gabrielsarteof/new-faces-sourcebook.git sourcebook

# quem clona o New Faces precisa dos submódulos, senão a pasta vem vazia
git clone --recurse-submodules <url-do-new-faces>
git submodule update --init --recursive   # se já clonou sem eles

# atualizar o ponteiro depois de mexer nos manuais
git submodule update --remote sourcebook
git add sourcebook && git commit -m "chore: update sourcebook pointer"
```
