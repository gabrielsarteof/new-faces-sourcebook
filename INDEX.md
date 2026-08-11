# Índice do Sourcebook

Todo documento do sistema, com seu `id` estável, versão, camada e caminho.
O `id` é a chave que amarra manual e dado — ele não muda quando o arquivo se move.

**Precedência em caso de conflito:** documento de cenário vence documento de núcleo.
`core/` é fechado para modificação por causa de um mundo específico; substituições
vivem em `worlds/<mundo>/extensions/` e declaram explicitamente o que substituem.

**Total:** 106 documentos · 13 de núcleo · 93 de cenário

Gerado por `tools/check-links.mjs`. Não editar à mão.

---

## Núcleo — regras agnósticas de cenário

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Vantagens Comuns](core/advantages.md) | `core.advantages` | 1 | catalog | final |
| [Fator de Cânone — Cálculo do XP de Ficha](core/canon-factor.md) | `core.canon-factor` | 1 | system | final |
| [Princípios de Design](core/design-principles.md) | `core.design-principles` | 1 | methodology | final |
| [Desvantagens Comuns](core/disadvantages.md) | `core.disadvantages` | 1 | catalog | final |
| [Manual de Criação de Poderes](core/power-creation.md) | `core.power-creation` | 3.3 | core-layer | final |
| [Tabelas de Referência de Personagens](core/reference-tables.md) | `core.reference-tables` | 1 | reference-table | final |
| [Manual de Criação de Perícias](core/skill-authoring.md) | `core.skill-authoring` | 7.1 | methodology | final |
| [Núcleo de Perícias](core/skills-core.md) | `core.skills-core` | 2.1 | core-layer | final |
| [Sistema de Efeitos de Status](core/status-effects.md) | `core.status-effects` | 2.2 | system | final |
| [Núcleo do Sistema](core/system-core.md) | `core.system-core` | 3 | core-layer | final |
| [Template — Documento de Técnica](core/technique-template.md) | `core.technique-template` | 3.3 | template | final |
| [Manual Global de Treinamento](core/training.md) | `core.training` | 1 | system | final |
| [Manual de Economia de XP e Criação de Ficha](core/xp-economy.md) | `core.xp-economy` | 2 | system | final |

## Jujutsu Kaisen

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Jujutsu Kaisen — Setting Overview](worlds/jujutsu/overview.md) | `jujutsu.overview` | 1 | doc | final |

## worlds/jujutsu/character-creation

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Criação de Personagem — Jujutsu Kaisen](worlds/jujutsu/character-creation/overview.md) | `jujutsu.character-creation.overview` | 1 | system | final |

## worlds/jujutsu/clans

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Clã Geto](worlds/jujutsu/clans/geto.md) | `jujutsu.clan.geto` | 1 | clan | final |
| [Seis Olhos — Dojutsu do Clã Gojo](worlds/jujutsu/clans/gojo-six-eyes.md) | `jujutsu.clan.gojo-six-eyes` | 1 | clan | final |
| [Clã Gojo](worlds/jujutsu/clans/gojo.md) | `jujutsu.clan.gojo` | 1 | clan | final |
| [Clã Kamo](worlds/jujutsu/clans/kamo.md) | `jujutsu.clan.kamo` | 1 | clan | final |
| [Clãs — Jujutsu Kaisen](worlds/jujutsu/clans/overview.md) | `jujutsu.clans.overview` | 1 | clan | final |
| [Clã Zenin](worlds/jujutsu/clans/zenin.md) | `jujutsu.clan.zenin` | 1 | clan | final |

## worlds/jujutsu/combat

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Combate — Jujutsu Kaisen](worlds/jujutsu/combat/overview.md) | `jujutsu.combat.overview` | 1 | system | final |

## worlds/jujutsu/heart

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Coração — Jujutsu Kaisen](worlds/jujutsu/heart/overview.md) | `jujutsu.heart.overview` | 1 | lore | final |

## worlds/jujutsu/lineages

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Técnicas Inatas — por Linhagem](worlds/jujutsu/lineages/innate-techniques.md) | `jujutsu.lineage.innate-techniques` | 1 | lineage | final |
| [Linhagens — Jujutsu Kaisen](worlds/jujutsu/lineages/overview.md) | `jujutsu.lineages.overview` | 1 | lineage | final |

## worlds/jujutsu/powers

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Poderes — Jujutsu Kaisen](worlds/jujutsu/powers/overview.md) | `jujutsu.powers.overview` | 1 | system | final |

## worlds/jujutsu/progression

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Progressão — Jujutsu Kaisen](worlds/jujutsu/progression/overview.md) | `jujutsu.progression.overview` | 1 | system | final |

## worlds/jujutsu/techniques

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Técnicas Malditas](worlds/jujutsu/techniques/cursed-techniques.md) | `jujutsu.technique.cursed-techniques` | 1 | technique | final |
| [Extensões de Técnica](worlds/jujutsu/techniques/extensions.md) | `jujutsu.technique.extensions` | 1 | technique | final |
| [Técnicas — Jujutsu Kaisen](worlds/jujutsu/techniques/overview.md) | `jujutsu.techniques.overview` | 1 | technique | final |

## Naruto · Geral

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Naruto — Setting Overview](worlds/naruto/overview.md) | `naruto.overview` | 1 | doc | final |

## worlds/naruto/advantages-disadvantages

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Vantagens Especiais do Mundo Shinobi](worlds/naruto/advantages-disadvantages/overview.md) | `naruto.advantages-disadvantages.overview` | 1 | catalog | final |

## Naruto · Campanha

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Dossiê — Saki Uchiha](worlds/naruto/campaign/saki-dossier.md) | `naruto.campaign.saki-dossier` | 1 | campaign | final |
| [Contexto — Arsenal do Susanoo da Saki](worlds/naruto/campaign/saki-susanoo-arsenal.md) | `naruto.campaign.saki-susanoo-arsenal` | 1 | campaign | final |
| [Universo e Campanha — A Campanha da Saki](worlds/naruto/campaign/universe.md) | `naruto.campaign.universe` | 1 | campaign | final |

## worlds/naruto/character-creation

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Criação de Personagem — Naruto](worlds/naruto/character-creation/overview.md) | `naruto.character-creation.overview` | 1 | system | final |

## Naruto · Clãs e linhagens

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Clã Aburame](worlds/naruto/clans/aburame.md) | `naruto.clan.aburame` | 1 | clan | final |
| [Clã Akimichi](worlds/naruto/clans/akimichi.md) | `naruto.clan.akimichi` | 1 | clan | final |
| [Clã Hatake](worlds/naruto/clans/hatake.md) | `naruto.clan.hatake` | 1 | clan | final |
| [Byakugan — Dojutsu do Clã Hyuga](worlds/naruto/clans/hyuga-byakugan.md) | `naruto.lineage.byakugan` | 1 | lineage | final |
| [Clã Hyūga — O Olho que Tudo Vê](worlds/naruto/clans/hyuga.md) | `naruto.clan.hyuga` | 1 | clan | final |
| [Clã Inuzuka](worlds/naruto/clans/inuzuka.md) | `naruto.clan.inuzuka` | 1 | clan | final |
| [Clã Nara](worlds/naruto/clans/nara.md) | `naruto.clan.nara` | 1 | clan | final |
| [Clãs — Naruto](worlds/naruto/clans/overview.md) | `naruto.clans.overview` | 1 | clan | final |
| [Clã Sarutobi](worlds/naruto/clans/sarutobi.md) | `naruto.clan.sarutobi` | 1 | clan | final |
| [Senju — O Clã de Mil Habilidades](worlds/naruto/clans/senju.md) | `naruto.clan.senju` | 1 | clan | final |
| [Mangekyō Sharingan](worlds/naruto/clans/uchiha-mangekyo-sharingan.md) | `naruto.lineage.mangekyo-sharingan` | 1 | lineage | final |
| [Sharingan](worlds/naruto/clans/uchiha-sharingan.md) | `naruto.lineage.sharingan` | 2 | lineage | final |
| [Uchiha — O Olho que Reflete Sentimentos](worlds/naruto/clans/uchiha.md) | `naruto.clan.uchiha` | 1 | clan | final |
| [Uzumaki — A Estirpe da Longevidade](worlds/naruto/clans/uzumaki.md) | `naruto.clan.uzumaki` | 1.1 | clan | final |
| [Clã Yamanaka](worlds/naruto/clans/yamanaka.md) | `naruto.clan.yamanaka` | 1 | clan | final |

## worlds/naruto/combat

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Combate — Naruto](worlds/naruto/combat/overview.md) | `naruto.combat.overview` | 1 | system | final |

## Naruto · Compêndios de técnicas

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Compêndio de Doton (土遁)](worlds/naruto/compendiums/doton.md) | `naruto.compendium.doton` | 2.1 | compendium | final |
| [Compêndio de Fūinjutsu](worlds/naruto/compendiums/fuinjutsu.md) | `naruto.compendium.fuinjutsu` | 1 | compendium | final |
| [Compêndio de Fūton (風遁)](worlds/naruto/compendiums/futon.md) | `naruto.compendium.futon` | 3 | compendium | final |
| [Compêndio de Genjutsu (幻術)](worlds/naruto/compendiums/genjutsu.md) | `naruto.compendium.genjutsu` | 1 | compendium | final |
| [Compêndio de Inton](worlds/naruto/compendiums/inton.md) | `naruto.compendium.inton` | 2.1 | compendium | final |
| [Compêndio de Katon (火遁)](worlds/naruto/compendiums/katon.md) | `naruto.compendium.katon` | 5 | compendium | final |
| [Compêndio de Ninjutsu Médico](worlds/naruto/compendiums/medical-ninjutsu.md) | `naruto.compendium.medical-ninjutsu` | 2.1 | compendium | final |
| [Compêndio de Raiton (雷遁)](worlds/naruto/compendiums/raiton.md) | `naruto.compendium.raiton` | 3.2 | compendium | final |
| [Compêndio de Sensoriamento](worlds/naruto/compendiums/sensory.md) | `naruto.compendium.sensory` | 1 | compendium | final |
| [Compêndio de Suiton (水遁)](worlds/naruto/compendiums/suiton.md) | `naruto.compendium.suiton` | 3.1 | compendium | final |
| [Compêndio de Yōton](worlds/naruto/compendiums/yoton.md) | `naruto.compendium.yoton` | 2 | compendium | final |

## worlds/naruto/extensions

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Extensões do Core — Naruto](worlds/naruto/extensions/overview.md) | `naruto.extensions.overview` | 1 | extension | final |

## worlds/naruto/heart

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Coração — Fundamentos do Universo Ninja](worlds/naruto/heart/overview.md) | `naruto.heart.overview` | 1 | lore | final |

## worlds/naruto/items

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Ferramentas Selantes](worlds/naruto/items/sealing-tools.md) | `naruto.item.sealing-tools` | 1 | item-catalog | final |

## worlds/naruto/lineages

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Dojutsu — Olhos Especiais](worlds/naruto/lineages/dojutsu.md) | `naruto.lineage.dojutsu` | 1 | lineage | final |
| [Hiden — Técnicas Secretas de Clã](worlds/naruto/lineages/hiden.md) | `naruto.lineage.hiden` | 1 | lineage | final |
| [Kekkei Genkai — Naturezas Herdadas](worlds/naruto/lineages/kekkei-genkai.md) | `naruto.lineage.kekkei-genkai` | 1 | lineage | final |
| [Linhagens — Naruto](worlds/naruto/lineages/overview.md) | `naruto.lineages.overview` | 1 | lineage | final |

## worlds/naruto/natures

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Naturezas Avançadas (Kekkei Genkai de Natureza)](worlds/naruto/natures/advanced.md) | `naruto.system.advanced` | 1 | system | final |
| [Naturezas Básicas](worlds/naruto/natures/basic.md) | `naruto.system.basic` | 1 | system | final |
| [Naturezas de Chakra — Naruto](worlds/naruto/natures/overview.md) | `naruto.natures.overview` | 1 | system | final |

## worlds/naruto/powers

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Poderes — Naruto](worlds/naruto/powers/overview.md) | `naruto.powers.overview` | 1 | system | final |

## worlds/naruto/progression

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Progressão — Naruto](worlds/naruto/progression/overview.md) | `naruto.progression.overview` | 1 | system | final |

## Naruto · Reencarnações

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Asura Ōtsutsuki — O Herdeiro do Corpo do Sábio](worlds/naruto/reincarnations/asura.md) | `naruto.reincarnation.asura` | 1 | reincarnation | final |
| [Indra Ōtsutsuki](worlds/naruto/reincarnations/indra.md) | `naruto.reincarnation.indra` | 1 | reincarnation | final |
| [Reencarnações — Naruto](worlds/naruto/reincarnations/overview.md) | `naruto.reincarnations.overview` | 1 | reincarnation | final |

## Naruto · Perícias

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Controle de Chakra](worlds/naruto/skills/chakra-control.md) | `naruto.skill.chakra-control` | 3.2 | skill | final |
| [Doton (土遁)](worlds/naruto/skills/doton.md) | `naruto.skill.doton` | 2 | skill | final |
| [Fūinjutsu](worlds/naruto/skills/fuinjutsu.md) | `naruto.skill.fuinjutsu` | 1.4 | skill | final |
| [Fūton (風遁)](worlds/naruto/skills/futon.md) | `naruto.skill.futon` | 2.1 | skill | final |
| [Genjutsu](worlds/naruto/skills/genjutsu.md) | `naruto.skill.genjutsu` | 1.2 | skill | final |
| [Katon (火遁)](worlds/naruto/skills/katon.md) | `naruto.skill.katon` | 3 | skill | final |
| [Ninjutsu Médico](worlds/naruto/skills/medical-ninjutsu.md) | `naruto.skill.medical-ninjutsu` | 3 | skill | final |
| [Índice de Perícias do Sistema](worlds/naruto/skills/overview.md) | `naruto.skill.overview` | 2.6 | skill | final |
| [Passagem](worlds/naruto/skills/passagem.md) | `naruto.skill.passagem` | 1.1 | skill | final |
| [Raiton (雷遁)](worlds/naruto/skills/raiton.md) | `naruto.skill.raiton` | 2 | skill | final |
| [Senjutsu](worlds/naruto/skills/senjutsu.md) | `naruto.skill.senjutsu` | 1 | skill | final |
| [Sensoriamento](worlds/naruto/skills/sensory.md) | `naruto.skill.sensory` | 2.1 | skill | final |
| [Suiton (水遁)](worlds/naruto/skills/suiton.md) | `naruto.skill.suiton` | 2.1 | skill | final |
| [Liberação de Yang](worlds/naruto/skills/yang-release.md) | `naruto.skill.yang-release` | 4.1 | skill | final |
| [Liberação de Yin](worlds/naruto/skills/yin-release.md) | `naruto.skill.yin-release` | 4.1 | skill | final |

## Naruto · Sistemas

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Naturezas Avançadas](worlds/naruto/systems/advanced-natures.md) | `naruto.system.advanced-natures` | 5 | system | final |
| [Manual de Ancoragem](worlds/naruto/systems/anchoring.md) | `naruto.system.anchoring` | 1.1 | system | final |
| [Reserva de Chakra](worlds/naruto/systems/chakra-reserve.md) | `naruto.system.chakra-reserve` | 3 | system | final |
| [Norma de Produção de Compêndios](worlds/naruto/systems/compendium-standard.md) | `naruto.system.compendium-standard` | 2.2 | methodology | final |
| [Transformação de Natureza — Sistema Elemental](worlds/naruto/systems/elemental-system.md) | `naruto.system.elemental` | 6 | system | final |
| [Errata D2 — Alinhamento upstream do eixo do Onmyōton](worlds/naruto/systems/errata-d2-onmyoton.md) | `naruto.system.errata-d2` | 1 | pending-patch | pending-patch |
| [Manual de Criação de Jutsus](worlds/naruto/systems/jutsu-authoring.md) | `naruto.system.jutsu-authoring` | 2.5 | methodology | final |
| [Documento de Invocação](worlds/naruto/systems/summoning.md) | `naruto.system.summoning` | 2.1 | system | final |
| [Manual de Requisitos de Técnica](worlds/naruto/systems/technique-requirements.md) | `naruto.system.technique-requirements` | 2 | system | final |

## Naruto · Técnicas

| Documento | id | v | tipo | status |
|---|---|---|---|---|
| [Chidori Nagashi — Corrente de Mil Pássaros (千鳥流し)](worlds/naruto/techniques/chidori-nagashi.md) | `naruto.technique.chidori-nagashi` | 2 | technique | final |
| [Chidori (千鳥)](worlds/naruto/techniques/chidori.md) | `naruto.technique.chidori` | 4 | technique | final |
| [Kirin (麒麟)](worlds/naruto/techniques/kirin.md) | `naruto.technique.kirin` | 2 | technique | final |
| [Susanoo (須佐能乎)](worlds/naruto/techniques/susanoo.md) | `naruto.technique.susanoo` | 1.2 | technique | final |

## Documentos previstos e ainda não escritos

Referências que os documentos existentes fazem a material planejado. Não são links
quebrados por erro — são o backlog de autoria declarado pelo próprio corpus.

**54 alvos distintos, em 60 referências.**

Gerado por `tools/check-links.mjs`. Não editar à mão.

- `worlds/jujutsu/clans/infinity.md` — citado em worlds/jujutsu/clans/gojo-six-eyes.md
- `worlds/jujutsu/clans/ten-shadows.md` — citado em worlds/jujutsu/clans/zenin.md
- `worlds/jujutsu/combat/black-flash.md` — citado em worlds/jujutsu/combat/overview.md
- `worlds/jujutsu/heart/cursed-energy-control.md` — citado em worlds/jujutsu/heart/overview.md
- `worlds/jujutsu/heart/cursed-energy-fundamentals.md` — citado em worlds/jujutsu/heart/overview.md
- `worlds/jujutsu/heart/sorcerer-grades.md` — citado em worlds/jujutsu/heart/overview.md
- `worlds/jujutsu/powers/domain-expansion.md` — citado em worlds/jujutsu/powers/overview.md
- `worlds/naruto/character-creation/chakra-nature-selection.md` — citado em worlds/naruto/character-creation/overview.md
- `worlds/naruto/character-creation/inata-technique.md` — citado em worlds/naruto/character-creation/overview.md
- `worlds/naruto/character-creation/initial-skills.md` — citado em worlds/naruto/character-creation/overview.md
- `worlds/naruto/character-creation/selecting-clan.md` — citado em worlds/naruto/character-creation/overview.md
- `worlds/naruto/character-creation/selecting-lineage.md` — citado em worlds/naruto/character-creation/overview.md
- `worlds/naruto/clans/beast-partnership.md` — citado em worlds/naruto/clans/inuzuka.md
- `worlds/naruto/clans/caloric-control.md` — citado em worlds/naruto/clans/akimichi.md
- `worlds/naruto/clans/destruction-bugs.md` — citado em worlds/naruto/clans/aburame.md
- `worlds/naruto/clans/mind-arts.md` — citado em worlds/naruto/clans/yamanaka.md
- `worlds/naruto/clans/shadow-arts.md` — citado em worlds/naruto/clans/nara.md
- `worlds/naruto/clans/sharingan-copy.md` — citado em worlds/naruto/clans/hatake.md
- `worlds/naruto/combat/bukijutsu.md` — citado em worlds/naruto/combat/overview.md
- `worlds/naruto/combat/collaboration-jutsu.md` — citado em worlds/naruto/combat/overview.md
- `worlds/naruto/combat/genjutsu.md` — citado em worlds/naruto/combat/overview.md
- `worlds/naruto/combat/ninjutsu.md` — citado em worlds/naruto/combat/overview.md
- `worlds/naruto/combat/senjutsu.md` — citado em worlds/naruto/combat/overview.md
- `worlds/naruto/combat/taijutsu.md` — citado em worlds/naruto/combat/overview.md
- `worlds/naruto/heart/chakra-control.md` — citado em worlds/naruto/heart/overview.md
- `worlds/naruto/heart/chakra-fundamentals.md` — citado em worlds/naruto/heart/overview.md
- `worlds/naruto/heart/chakra-natures-overview.md` — citado em worlds/naruto/heart/overview.md
- `worlds/naruto/heart/nature-transformation.md` — citado em worlds/naruto/heart/overview.md
- `worlds/naruto/heart/shinobi-ranks.md` — citado em worlds/naruto/heart/overview.md
- `worlds/naruto/heart/summoning-contracts.md` — citado em worlds/naruto/heart/overview.md
- `worlds/naruto/heart/tailed-beasts.md` — citado em worlds/naruto/heart/overview.md
- `worlds/naruto/heart/villages.md` — citado em worlds/naruto/heart/overview.md
- `worlds/naruto/lineages/beast-communication.md` — citado em worlds/naruto/lineages/hiden.md
- `worlds/naruto/lineages/bug-techniques.md` — citado em worlds/naruto/lineages/hiden.md
- `worlds/naruto/lineages/byakugan.md` — citado em worlds/naruto/lineages/dojutsu.md
- `worlds/naruto/lineages/mind-body-techniques.md` — citado em worlds/naruto/lineages/hiden.md
- `worlds/naruto/lineages/rinne-sharingan.md` — citado em worlds/naruto/lineages/dojutsu.md
- `worlds/naruto/lineages/rinnegan.md` — citado em worlds/naruto/lineages/dojutsu.md
- `worlds/naruto/lineages/shadow-techniques.md` — citado em worlds/naruto/lineages/hiden.md
- `worlds/naruto/lineages/sharingan.md` — citado em worlds/naruto/lineages/dojutsu.md
- `worlds/naruto/lineages/tenseigan.md` — citado em worlds/naruto/lineages/dojutsu.md
- `worlds/naruto/natures/futton.md` — citado em worlds/naruto/lineages/kekkei-genkai.md, worlds/naruto/natures/advanced.md
- `worlds/naruto/natures/hyoton.md` — citado em worlds/naruto/lineages/kekkei-genkai.md, worlds/naruto/natures/advanced.md
- `worlds/naruto/natures/jinton.md` — citado em worlds/naruto/lineages/kekkei-genkai.md, worlds/naruto/natures/advanced.md
- `worlds/naruto/natures/jiton.md` — citado em worlds/naruto/lineages/kekkei-genkai.md, worlds/naruto/natures/advanced.md
- `worlds/naruto/natures/mokuton.md` — citado em worlds/naruto/lineages/kekkei-genkai.md, worlds/naruto/natures/advanced.md
- `worlds/naruto/natures/yoton.md` — citado em worlds/naruto/lineages/kekkei-genkai.md, worlds/naruto/natures/advanced.md
- `worlds/naruto/powers/expansions-overview.md` — citado em worlds/naruto/powers/overview.md
- `worlds/naruto/powers/sage-mode.md` — citado em worlds/naruto/powers/overview.md
- `worlds/naruto/powers/tailed-beast-mode.md` — citado em worlds/naruto/powers/overview.md
- `worlds/naruto/progression/dojutsu-evolution.md` — citado em worlds/naruto/progression/overview.md
- `worlds/naruto/progression/rank-advancement.md` — citado em worlds/naruto/progression/overview.md
- `worlds/naruto/progression/technique-extensions.md` — citado em worlds/naruto/progression/overview.md
- `worlds/naruto/progression/xp-training.md` — citado em worlds/naruto/progression/overview.md

---

## Pendências herdadas da migração

- **5 técnicas** existiam apenas nas versões v1 dos compêndios de Inton e Ninjutsu
  Médico, descartadas em favor do formato catálogo-puro da v2: `Fome Sem Fundo`,
  `Presença Que Não Se Esconde`, `Sanguessuga Espiritual`, `Voz Presa`,
  `Transferência de Chakra`. Nenhuma aparece em qualquer outro documento do corpus.
- **3 técnicas** do Inton v1 migraram para o domínio correto e seguem vivas:
  `Escuta do Vazio` e `Sopro Contido` (Sensoriamento), `Segunda Face` (Liberação de Yin).
- **1 documento** carrega `status: pending-patch` — é edição destinada a outro documento
  e ainda não aplicada: `naruto.system.errata-d2`.
- `naruto.system.jutsu-authoring-addendum` saiu desta lista. O conteúdo dele virou a
  seção 4.1.3 do Manual de Criação de Jutsus na v2.3, e o arquivo foi removido do corpus.
