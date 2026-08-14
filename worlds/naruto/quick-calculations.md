---
id: naruto.quick-calculations
title: "Cálculos Rápidos de Naruto"
version: 1
layer: scenario
scenario: naruto
type: reference-table
status: final
---

# Cálculos Rápidos de Naruto

Este documento publica os números que o Manual de Requisitos de Técnica e o Sistema Elemental exigem para a compra e a execução de jutsu, ao lado do Registro de Regentes das vinte perícias do cenário. Ele lê `core/quick-calculations.md` para a leitura de teste, e cita a seção de origem de cada régua.

## 1. Portão de rank

Uma técnica exige dois eixos, e os dois precisam estar satisfeitos ao mesmo tempo.

O primeiro é o nível da perícia do domínio, que destrava a faixa de rank pela régua universal.

| Nível | Rank |
|---|---|
| LV1 | E |
| LV2 | D |
| LV3 | C |
| LV4 | B |
| LV5 | A |
| LV6 | S |

O segundo é o número resolvido daquela perícia, Base Total somada ao atributo regente, que precisa alcançar o valor publicado para o rank da técnica.

| Rank | Portão |
|---|---|
| E | 14 |
| D | 30 |
| C | 44 |
| B | 58 |
| A | 71 |
| S | 84 |

Um praticante executa a técnica quando o nível da perícia destrava o rank dela e o portão numérico resolvido alcança o valor da linha. Os dois eixos correm em paralelo e não se substituem. Um praticante com o nível pago e o atributo regente abaixo da escada de referência do próprio nível não executa a técnica até que o número alcance a linha, mesmo já tendo comprado o nível que destravaria o rank sozinho.

A coluna de portão é a mesma em toda perícia, porque presume a escada de referência do atributo regente e não o atributo de um praticante específico. Ela funciona como par de calibração, no mesmo papel que a Régua de Exigência de Moldagem já exerce para o Controle de Chakra.

## 2. Régua de Exigência de Moldagem

Toda técnica lê a soma da Base Total com SAB do Controle de Chakra contra a régua abaixo, no degrau que o coeficiente técnico da obra determina.

| Degrau | Exigência | Par de referência |
|---|---|---|
| Trivial | livre | qualquer praticante |
| Básica | 30 | LV2 com SAB 6 |
| Plena | 44 | LV3 com SAB 12 |
| Alta | 58 | LV4 com SAB 18 |
| Refinada | 71 | LV5 com SAB 26 |
| Absoluta | 84 | LV6 com SAB 34 |

O coeficiente 0,5 pede Básica, 1,0 pede Plena, 2,0 pede Refinada e 3,0 pede Absoluta. Coeficientes intermediários sobem para o degrau imediatamente acima do valor de referência mais próximo por baixo. O degrau sobe uma casa adicional por proporção interna fina, sustentação prolongada, escala mínima de moldagem, ou tolerância zero a excesso de volume, e a entrada da técnica declara qual dessas propriedades produziu a elevação.

Esta régua lê sempre o Controle de Chakra do executor, nunca a perícia do domínio da técnica. Os dois portões correm em paralelo: o de rank lê a perícia do domínio, o de moldagem lê o Controle de Chakra.

## 3. Escada de Afinidade

A posição de uma natureza na ficha do praticante ajusta o teste de execução e o custo em RC.

| Posição | Bônus de teste | Custo em RC | Em falha |
|---|---|---|---|
| Afinidade | +15 | custo declarado × 1,0 | entrega versão reduzida |
| Compatibilidade | +8 | custo declarado × 1,0 | entrega versão reduzida |
| Natureza aprendida | −15 | custo declarado × 1,3 | falha total |

O bônus soma no teste, na posição que a Seção 5 de `core/quick-calculations.md` reserva aos bônus externos.

## 4. Registro de Regentes

| Perícia | Regente | Categoria |
|---|---|---|
| Controle de Chakra | SAB | Chakra ×1,4 |
| Sensoriamento | PRE | Chakra ×1,4 |
| Senjutsu | RES | Chakra ×1,4 |
| Kyūinjutsu | INT | Chakra ×1,4 |
| Katon | INT | Ninjutsu ×1,5 |
| Raiton | INT | Ninjutsu ×1,5 |
| Fūton | INT | Ninjutsu ×1,5 |
| Suiton | INT | Ninjutsu ×1,5 |
| Doton | INT | Ninjutsu ×1,5 |
| Enton | INT | Ninjutsu ×1,5 |
| Liberação de Yin | INT | Ninjutsu ×1,5 |
| Liberação de Yang | RES | Ninjutsu ×1,5 |
| Genjutsu | INT | Erudição ×1,7 |
| Ninjutsu Médico | INT | Erudição ×1,7 |
| Fūinjutsu | INT | Erudição ×1,7 |
| Passagem | INT | Erudição ×1,7 |
| Barreira | SAB | Erudição ×1,7 |
| Leque | FOR | Prático ×1,1 |
| Kunai | DES | Físico ×1,0 |
| Shuriken | DES | Físico ×1,0 |

O portão de rank de toda perícia acima lê o próprio regente contra a tabela da Seção 1. O portão de moldagem de toda técnica de qualquer uma delas lê sempre SAB do Controle de Chakra, nunca o regente da própria perícia.

### 4.1 Como resolver o teste de um caminho

O caminho, a inclinação a que pertence, o grau e a complexidade estão publicados na própria perícia. A Especialização resolvida se lê pela tabela da Seção 2 de `core/quick-calculations.md`, cruzando o grau publicado com o nível e o estado do caminho.

Katon, caminho Rédea, grau 2, inclinação Labareda, adquirido no LV4 e ainda Aberto, resolve pela Especialização de grau 2 Aberto no LV4, 34. A Inclinação Total de Labareda no LV4, aprofundada desde o LV3, resolve em 20. O teste dentro do caminho soma a Base Total de 40, o INT do praticante, os 20 de Inclinação Total e os 34 de Especialização.

Toda inclinação de extensão manifestada segue a mesma leitura, com o Ápice no lugar da transcendência de LV6. Katon publica Brasa e Fūton publica Ciclone, as duas ancoradas no LV4 da perícia hospedeira, sem tabela de Especialização abaixo dele.

## Pendências e fila de errata

O portão de rank conjuntivo desta seção corrige `worlds/naruto/systems/technique-requirements.md` §2, que hoje publica o portão como número isolado, e a frase de abertura das vinte perícias, "o portão soma a Base Total ao atributo regente e destrava a faixa de rank", que precisa passar a declarar os dois eixos como exigência conjunta.

`core/xp-economy.md` §7 e o Anexo A item 1 publicam que a transcendência exige apenas um caminho relacionado em LV5, contra `core/skills-core.md` §3.4 e §9, que exigem todos os caminhos possuídos Aprofundados. O núcleo prevalece, e a linha de `xp-economy.md` entra em errata.

`core/xp-economy.md` Anexo A item 2 manda remover as tabelas de caminho no LV6 como dado morto. `core/skills-core.md` §4.4 publica a tabela inteira e as vinte perícias publicam valores de caminho no LV6, e o item é revogado.

`core/skill-authoring.md` §13.1 autoriza o Ápice de extensão manifestada em nível baixo da perícia hospedeira sem fixar um piso. As duas extensões publicadas pisam no LV4, e a seção entra em errata para declarar esse piso.

`core/xp-economy.md` §7 não publica linha de preço para o Ápice. O preço cheio do LV6 da categoria já é o que Katon e Fūton cobram, e falta inscrever a linha.

`worlds/naruto/skills/overview.md`, Registro de Regentes, não lista Enton. A entrada entra na próxima passada de propagação.

`core/system-core.md` §142 citava um documento de Cálculos Rápidos inexistente, sem link. A citação já foi corrigida para apontar `core.quick-calculations` nesta mesma passada.

O ×25 da fórmula de Potência não tem derivação publicada, conforme a pendência registrada em `core/quick-calculations.md`.

## Dependências

`worlds/naruto/systems/technique-requirements.md` v2.1, dono do portão de rank e da Régua de Exigência de Moldagem. `worlds/naruto/systems/elemental-system.md` v7, dono da Escada de Afinidade. `worlds/naruto/skills/overview.md` v2.22, dono do Registro de Regentes do cenário. `core/quick-calculations.md` v1, dono da leitura de teste, dos quatro movimentos do LV6 e da tabela de Especialização.
