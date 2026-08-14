# Briefing consolidado para o Claude Code · Fichas do Arsenal Katon

Documento de trabalho, não corpus. Autossuficiente: quem ler isto não precisa reabrir a produção das treze fichas para entender o que mudou e o que a aplicação precisa fazer.

---

## 1. O que foi produzido

Treze fichas individuais de técnica, em `sourcebook/worlds/naruto/techniques/`, cobrindo o arsenal curado de Katon de controle à distância. O Compêndio de Katon subiu de v5.3 para v5.4 em `sourcebook/worlds/naruto/compendiums/katon.md`, um bump de conferência: nenhuma das treze entradas exigiu correção de texto, rank, XP, camada de acesso ou linha de requisitos, então o corpo do compêndio permanece byte-idêntico ao publicado, e apenas o número de versão sobe, registrando que as fichas conferiram e confirmaram o catálogo.

Arquivos novos:

```
sourcebook/worlds/naruto/techniques/endan.md
sourcebook/worlds/naruto/techniques/gokakyu.md
sourcebook/worlds/naruto/techniques/hosenka.md
sourcebook/worlds/naruto/techniques/ryuka.md
sourcebook/worlds/naruto/techniques/kasumi-enbu.md
sourcebook/worlds/naruto/techniques/hosenka-tsumabeni.md
sourcebook/worlds/naruto/techniques/goryuka.md
sourcebook/worlds/naruto/techniques/kaen-senpu.md
sourcebook/worlds/naruto/techniques/hoo-sho.md
sourcebook/worlds/naruto/techniques/jigoku-no-hane.md
sourcebook/worlds/naruto/techniques/kaen-ami.md
sourcebook/worlds/naruto/techniques/hoo-no-wana.md
sourcebook/worlds/naruto/techniques/rengoku-ryusei.md
```

Arquivo modificado: `sourcebook/worlds/naruto/compendiums/katon.md`, campo `version` no frontmatter, `5.3` → `5.4`. Nenhum outro caractere do arquivo mudou.

---

## 2. Decisão de arquitetura

**Não nasceu documento de família.** As linhagens do Rasengan, do Hiraishin, dos Oito Portões e do Chidori têm `systems/*-family.md` próprio porque compartilham um motor que não mora em lugar nenhum além delas. Aqui o motor compartilhado já existe e é a Perícia de Katon v4, com as inclinações Labareda, Braseiro e Fagulha, os caminhos delas e as transcendências. As treze técnicas desta leva também não formam cadeia na definição estreita da Norma de Produção de Compêndios: a maioria publica acesso Livre e não exige a técnica imediatamente anterior como requisito mecânico, ao contrário do Chidori e das derivações dele. A única peça compartilhada que nasceu nesta leva é a Tabela de Coeficientes da Leva, publicada por inteiro na ficha do Endan e consumida por referência pelas doze fichas seguintes.

**O catálogo é fato consumado.** Nenhuma das treze fichas recalibrou rank, etiqueta, camada de acesso, linha de requisitos ou XP publicados no Compêndio de Katon v5.3. Onde a ficha apurou RC nominal por inversão da interpolação de XP, o valor resolvido é derivação sobre um número já fixado, nunca substituição dele.

---

## 3. A escada publicada das treze

RC nominal e custo mínimo são derivados invertendo a interpolação da Seção 4.1.1 do Manual de Criação de Jutsus sobre o XP já publicado no catálogo, exceto o Gōkakyū, cujo RC nominal o próprio Manual publica como âncora de calibração e que vence a inversão.

| # | Técnica | Rank | Acesso | XP | RC nominal | Custo mínimo |
|---|---|---|---|---|---|---|
| 1 | Endan | D | Livre | 480 | 49 | 16 |
| 2 | Gōkakyū no Jutsu | C | Livre | 1.775 | 180 (âncora do Manual) | 60 |
| 3 | Hōsenka no Jutsu | D | Livre | 720 | 76 | 25 |
| 4 | Ryūka no Jutsu | C | Livre | 1.430 | 152 | 50 |
| 5 | Kasumi Enbu no Jutsu | C | Livre | 2.580 | 262 | 87 |
| 6 | Hōsenka Tsumabeni | B | Requisito Mecânico | 4.625 | 438 | 146 |
| 7 | Gōryūka no Jutsu | B | Livre | 5.300 | 490 | 163 |
| 8 | Kaen Senpū | B | Livre | 5.300 | 490 | 163 |
| 9 | Hōō Shō | A | Livre | 9.200 | 780 | 260 |
| 10 | Jigoku no Hane | A | Livre | 11.000 | 900 | 300 |
| 11 | Kaen Ami | A | Livre | 12.800 | 1.020 | 340 |
| 12 | Hōō no Wana | A | Livre | 12.800 | 1.020 | 340 |
| 13 | Rengoku Ryūsei | S | Assinatura Pessoal · Autoria Aberta | 32.000 | 2.500 | 833 |

**Correção contra a tabela de ordenação original do prompt de produção:** o Hōsenka no Jutsu é Rank D no catálogo publicado, XP 720, não Rank C como a tabela de planejamento havia suposto antes da leitura do arquivo. Não é divergência do corpus, é correção de uma estimativa prévia contra o texto real, e a posição na ordem de produção não mudou porque a ordem é de dependência.

---

## 4. Tabela de coeficientes de dano fechada

Publicada por inteiro na ficha do Endan (`endan.md`, seção "Tabela de Coeficientes da Leva"), reproduzida aqui para referência de implementação.

**`coef_entrega`:**

| Forma de entrega | coef_entrega | Técnicas |
|---|---|---|
| Ponto concentrado / contato único | 0,20 | Hōō Shō |
| Projétil único direcionado | 0,16 | Endan, Gōkakyū, Ryūka, Gōryūka, Rengoku Ryūsei |
| Múltiplos projéteis simultâneos | 0,13 | Hōsenka, Hōsenka Tsumabeni, Jigoku no Hane, Kaen Ami, Hōō no Wana |
| Área irradiada do corpo | 0,12 | Kaen Senpū |
| Área de terreno ou campo | 0,10 | Kasumi Enbu |

**`coef_técnica`:**

| coef_técnica | Grau | Degrau base | Elevação (quando houver) | Técnicas |
|---|---|---|---|---|
| 0,5 | Baixa | Básica | nenhuma | Endan |
| 1,0 | Média | Plena | nenhuma | Gōkakyū, Gōryūka |
| 1,0 | Média | Plena → Alta | proporção interna fina, sustentação prolongada ou escala mínima de moldagem, conforme a técnica | Hōsenka, Ryūka, Kasumi Enbu, Hōsenka Tsumabeni, Kaen Senpū, Hōō Shō |
| 2,0 | Alta | Refinada | nenhuma | Jigoku no Hane, Kaen Ami, Hōō no Wana |
| 2,0 | Alta | Refinada → Absoluta | proporção interna fina | Rengoku Ryūsei |

`mult_Tipo` do Katon é **1,60**, lido em `worlds/naruto/systems/elemental-system.md`.

**Par de validação por rank**, mesma leitura em todas as fichas: D e C usam Veterano (PV 960), B usa Elite (PV 1.440), A usa Especial (PV 1.920), S usa Ápice (PV 3.000). A escolha reaproveita as quatro faixas que o próprio Manual de Criação de Jutsus já usa nas âncoras do Chidori e do Kirin.

**Leitura de validação de magnitude.** Nenhuma das cinco técnicas de rank D e C desta leva alcança o tier Forte (25% a 38% do par), o que é esperado: a correspondência de escala da Seção 1.1 do Manual de Criação de Jutsus lê o rank C como Moderado e o rank D como Básico, um e dois degraus abaixo de Forte, que corresponde a rank B. As três técnicas de rank B se aproximam de Forte sem alcançá-lo. As quatro de rank A se aproximam do piso de Forte, com o Jigoku no Hane e o Kaen Ami alcançando-o com dois caminhos adicionais de Controle de Chakra. O Rengoku Ryūsei, capstone de rank S, é a única técnica desta leva que alcança Forte em todos os patamares de maestria sem depender de caminho adicional, papel correto para o topo do arsenal.

---

## 5. Tabela de requisitos completos

| Técnica | Katon | Moldagem | Caminho | Outro requisito |
|---|---|---|---|---|
| Endan | LV2 | Básica | nenhum | nenhum |
| Gōkakyū no Jutsu | LV3 (LV2 via Rito do clã Uchiha, exceção exclusiva desta técnica) | Plena | nenhum | nenhum |
| Hōsenka no Jutsu | LV2 | Alta | nenhum publicado | opcional: projéteis embutidos, sem caminho obrigatório |
| Ryūka no Jutsu | LV3 | Alta | nenhum publicado no catálogo | material condutor em campo |
| Kasumi Enbu no Jutsu | LV3 | Alta | nenhum | banda Engajado a Média |
| Hōsenka Tsumabeni | LV4 | Alta | Veia | requisito mecânico: Hōsenka dominado |
| Gōryūka no Jutsu | LV4 | Plena | nenhum | interface com o Kirin em disparo vertical |
| Kaen Senpū | LV4 | Alta | Muro Vivo | manutenção ativa por turno |
| Hōō Shō | LV5 | Alta | Emissão (Controle de Chakra) | único requisito de caminho de outra perícia da leva |
| Jigoku no Hane | LV5 | Refinada | Agulha | dependência conceitual do Hōsenka Tsumabeni, sem gate mecânico |
| Kaen Ami | LV5 | Refinada | Veia | nenhum |
| Hōō no Wana | LV5 | Refinada | Pavio | contagem de marcas lida do próprio caminho |
| Rengoku Ryūsei | LV6 | Absoluta | nenhum | Assinatura Pessoal, Autoria Aberta |

**Justificativa dos portões de moldagem elevados.** A Régua de Exigência de Moldagem só ancora diretamente em quatro pontos, Básica (coef_técnica 0,5), Plena (1,0), Refinada (2,0) e Absoluta (3,0, não usada nesta leva). O degrau Alta, publicado pelo catálogo em seis das treze entradas, é sempre elevação de um passo sobre a ancoragem de Plena, pela Seção 4 do Manual de Requisitos de Técnica, entre proporção interna fina, sustentação prolongada, escala mínima de moldagem e tolerância zero a excesso de volume. Cada ficha declara qual das quatro propriedades produziu a elevação dela. O Rengoku Ryūsei eleva Refinada a Absoluta pela mesma via, com coef_técnica permanecendo 2,0.

---

## 6. Lista de erratas

Nenhuma errata contra o corpus nasceu desta leva. As três divergências identificadas durante a produção são registradas abaixo, sem exigir ação:

1. **`worlds/naruto/systems/jutsu-authoring.md` está em v2.11** no repositório publicado, não v2.7 como `CLAUDE.md` da aplicação registra na Seção 3 do mapa documentação-código. Citação desatualizada do lado da aplicação, não do corpus. Não é bloqueante para esta leva, mas o Claude Code deve atualizar a citação na próxima passada de manutenção daquele mapa.
2. **Hōsenka no Jutsu é Rank D, XP 720**, conforme o próprio Compêndio de Katon v5.3 publicado. A tabela de ordenação de produção deste prompt havia estimado Rank C antes da leitura do arquivo. Não é divergência do corpus: o catálogo sempre esteve correto, e a estimativa prévia da produção é que errava. Nenhuma correção pendente.
3. **Gōryūka no Jutsu, Rank B publicado contra a curadoria original de Rank A** (Achado 2 do prompt de produção). Resolvido a favor do catálogo nesta leva. Nenhuma fonte primária nova foi apurada durante a produção que sustente Rank A com evidência canônica concreta o bastante para abrir errata. Se pesquisa futura encontrar databook ou capítulo que sustente Rank A, a correção é errata nomeada contra o Compêndio de Katon, e a decisão de abri-la é de Gabriel.

---

## 7. Dependências abertas não bloqueantes

- **Amaterasu e o Compêndio de Enton.** Fora de escopo desta leva por instrução explícita, e já registrado como dependência aberta com dono nomeado em `worlds/naruto/skills/enton.md`.
- **A ficha da Kirin já existe** (`worlds/naruto/techniques/kirin.md`) e a interface declarada na ficha do Gōryūka aponta para ela sem republicar nenhum campo. Nenhuma ação pendente.
- **`worlds/naruto/skills/katon.md` permanece v4**, sem alteração. As treze fichas consomem os caminhos publicados lá sem propor mudança à perícia.
- **A curadoria da Saki Uchiha**, que explica por que este conjunto de treze técnicas e não outro, está registrada abaixo, na Seção 9 deste briefing, e nunca entrou na prosa de nenhuma ficha, conforme a Decisão C do prompt de produção.

---

## 8. Instrução de implementação

O ciclo de código desta transcrição segue `PERICIA_TRANSCRIPTION.md` e a Seção 3 do `CLAUDE.md` da aplicação no que for aplicável a técnica, e a skill `sincronizacao-doc-codigo` no que for procedimento. Como o mapa documentação-código da aplicação não publica hoje um procedimento passo a passo dedicado a bloco `ficha` de técnica elemental fora das linhagens já existentes, o Claude Code deve primeiro procurar por esse documento e, não o encontrando com o detalhe necessário, proceder mesmo assim: a regra de cada uma das treze técnicas já está fechada nesta leva, e a implementação é tradução direta do que as fichas publicam, não desenho de sistema novo.

**O que a aplicação precisa fazer:**

1. Mover o ponteiro do submódulo `sourcebook` no repositório da aplicação para o commit que contém as treze fichas novas e o Compêndio de Katon v5.4, no mesmo branch em que a transcrição ocorrer, conforme a Seção 3 do `CLAUDE.md`.
2. Em `rulesets/naruto/techniques/katon.json` (ou onde o catálogo de técnicas de Katon da aplicação já viver), adicionar o bloco `ficha` para as treze técnicas, seguindo o contrato de `src/shared/types/tecnica.ts` e o padrão que `LineageProgressionResolver` e `src/domain/techniques/resolucao/` já estabelecem para o Rasengan, o Hiraishin e o Chidori. Nenhuma ficha desta leva introduz campo novo no contrato: RC nominal, custo mínimo, selos de referência, Perfil de Evasão, coef_entrega, coef_técnica, rider com grau mínimo e máximo, e tabela de descarga por LV_CC já são campos existentes.
3. Atualizar `src/shared/data/provenance.json` com uma entrada por arquivo de dado tocado, citando `naruto.compendium.katon` na versão 5.4 e, quando a aplicação granularizar proveniência por técnica individual, os ids `naruto.technique.<slug>` de cada uma das treze fichas na versão 1.
4. Não recalibrar nenhum valor de XP, RC nominal, custo mínimo ou dano durante a transcrição. Onde a aplicação hoje estimar Katon genericamente sem ficha própria, os treze blocos desta leva substituem a estimativa.
5. Rodar `tsc --noEmit`, `vite build` e `vitest run` antes de considerar a transcrição commitável, conforme a Seção 1 do `CLAUDE.md`.
6. Conferir se algum teste existente assume que o Katon não tem ficha rica (no padrão dos testes que assumiam schema v5 único antes do Taichi), e ajustar apenas os testes que precisarem, sem relaxamento genérico.

---

## 9. Por que este arsenal, e não outro

Seção informativa, sem correspondência mecânica. Não entra em nenhuma ficha, conforme a Decisão C do prompt de produção: as fichas são documentos universais de Katon, disponíveis a qualquer praticante que cumpra os requisitos, e nenhuma delas é técnica pessoal de personagem algum.

A curadoria das treze técnicas serve à doutrina de combate da Saki Uchiha, cujo padrão emocional central é controlar à distância, governar a situação sem tocá-la. A progressão do arsenal reflete essa doutrina em três movimentos.

O primeiro movimento é a distância pura: Endan, Gōkakyū, Hōsenka e Ryūka entregam dano sem exigir proximidade, e o Ryūka em particular estende o alcance por condutor em vez de encurtar a distância física. O segundo movimento é o controle de espaço sem contato direto: Kasumi Enbu, Kaen Senpū, Kaen Ami e Hōō no Wana negam terreno, mantêm zona ou armam o campo antes do primeiro golpe, deixando o oponente reagir à geometria montada em vez de a um ataque único. O terceiro movimento é o engano que dispensa confronto direto: Hōsenka Tsumabeni e Jigoku no Hane constroem um blefe de dois estágios em que o alvo nunca sabe se está enfrentando fogo comum ou aço escondido, o oposto do combate corpo a corpo declarado.

O Hōō Shō é a única exceção deliberada, a resposta da doutrina para o momento em que ela falha e o oponente já está ao alcance do braço. O Gōryūka amplia a doutrina para o eixo vertical, construindo condição de campo para o Kirin sem depender de contato algum. O Rengoku Ryūsei fecha o arco como a expressão máxima de dano à distância que o domínio produz sem jamais tocar o alvo antes do impacto.

Nenhuma das treze fichas nomeia a Saki. A doutrina explica a curadoria, e a curadoria não vira propriedade da técnica.
