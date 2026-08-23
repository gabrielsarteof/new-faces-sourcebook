---
id: naruto.technique.ryuka
title: "Ryūka no Jutsu (龍火の術)"
version: 1.2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Ryuka_v1.md
---

# Técnica da Chama do Dragão — Katon: Ryūka no Jutsu (火遁・龍火の術)
Ninjutsu · Katon · Rank C

---

## Sobre a Técnica

O Ryūka no Jutsu é a canalização de fogo ao longo de um material condutor presente em campo, fio, arame ou cabo, que transporta a chama em linha reta até o alvo em vez de deixá-la percorrer o ar aberto. O praticante expele o chakra pela boca ou pelo ponto de contato com o condutor, e a chama segue o trajeto físico do material até alcançar a extremidade oposta.

A dependência do condutor é o que separa o Ryūka de um disparo comum. Sem um fio, uma corrente ou uma lâmina em contato prévio com o alvo, a técnica não tem por onde correr, e o praticante precisa posicionar o material antes ou durante o combate para que o disparo funcione. Uma fileira de corpos em contato físico ininterrupto serve de condutor alternativo, propagando o fogo de um a outro em sequência.

O alvo atingido recebe a chama preferencialmente na parte superior do corpo, porque o fogo sobe pelo condutor até a extremidade mais alta do contato. A precisão da entrega é a compensação pela restrição de material: o que a técnica perde em liberdade de disparo, ganha em previsibilidade de ponto de impacto.

---

## Requisitos de Acesso

- **Katon LV3:** portão de rank C, que resolve em 44 pela soma da Base 32 com INT 12
- **Moldagem Alta:** 58 pela soma da Base Total com SAB, degrau elevado um passo acima do piso Plena que o coeficiente técnico 1,0 fixaria, pela propriedade de sustentação prolongada, com a chama mantida coesa ao longo de todo o percurso do condutor em vez de liberada num só instante
- **Material condutor em campo:** fio, arame, cabo, lâmina empunhada ou cadeia de corpos em contato físico ininterrupto, presente antes do disparo

---

## Custo de XP

**Custo de XP:** 1.430

---

## Efeitos Globais

O condutor incandesce visivelmente durante a passagem da chama, e qualquer observador vê o trajeto do fogo antes de vê-lo alcançar o alvo, o que concede aviso a quem estiver posicionado para acompanhar o material. Superfície combustível em contato com o condutor acende junto com a passagem da chama.

---

## Mecânica de Ativação

- **RC nominal:** 152
- **Vetor:** Energia térmica · Celeridade 100
- **Custo mínimo:** 50
- **Selos de referência:** 1, o Selo do Tigre
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** um selo, seguido de disparo pelo condutor já posicionado
- **Restrições:** alvo único ou fileira de corpos em contato físico, distância limitada pelo comprimento do condutor disponível em campo, sem material condutor a técnica é inexecutável

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M
dano bruto = 5 × 152 × 0,16 × 1,61 × M
dano bruto = 195,78 × M

M = 1 + 0,5 × (P − 64) ÷ 64          piso de M: 0,5
```

O coeficiente de entrega 0,16 corresponde à categoria de projétil único direcionado: a chama viaja até um único ponto de contato, e o condutor guia sem dividir a entrega em múltiplas trajetórias, o mesmo perfil do Gōkakyū apesar do meio de transporte diferente. O coeficiente técnico 1,0 corresponde à dependência média, com o degrau de exigência elevado de Plena para Alta pela sustentação prolongada que manter a chama coesa por todo o comprimento do condutor exige.

O `mult_Tipo` de 1,61 é a Constante de Moldagem de 1,40 multiplicada pela Assinatura do vetor declarado, que para Energia térmica vale 1,15. A Assinatura se lê do vetor que a obra entrega e nunca do elemento que a produz. O coeficiente técnico de 1,0 resolve o `w` em 0,5, que é a metade dele.

A perícia governante é o Katon, e o `P` é o atributo regente dela somado à Base Total, à Inclinação Total e à Especialização. O `P_ref` de 64 é o do rank C, e nele o `M` resolve em 1,000 por construção.

---

## Tabela de Descarga

Par de referência Veterano, PV 960, pela tabela de pares por rank da Seção 5.2 do Manual de Jutsus.

A tabela é indexada ao `P` do Katon, porque é o `P` que o motor lê. Nenhum perfil nomeado de personagem entra aqui.

| P do Katon | M | Dano | % PV do par |
|---|---|---|---|
| 42 | 0,828 | 162 | 16,9% |
| 64, referência do rank | 1,000 | 196 | 20,4% |
| 122 | 1,453 | 284 | 29,6% |

O Ryūka não alcança o tier Forte, consistente com o rank C na escala Moderado do Manual de Criação de Poderes. A vantagem tática da técnica está na certeza de trajetória que o condutor garante e não no dano bruto, que se mantém na mesma faixa do Gōkakyū pelo compartilhamento do mesmo coeficiente de entrega.

---

## Interação com Defesas

Nenhuma perfuração declarada além do padrão. A leitura de "ignorar cobertura total ao longo do trajeto" que a Perícia de Katon publica no efeito Estrada Viva do caminho Veia pertence àquele caminho e não é reproduzida aqui: esta ficha consome o requisito de material condutor e não republica o efeito de perícia que o satisfaz.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Leve |
| Grau máximo possível | Grave |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV3, Moldagem Alta, material condutor em campo | acesso à técnica pela camada Livre |
| Caminho Veia, efeito Borda Acesa | a arma empunhada pelo praticante vira condutor por conta própria, dispensando fio ou cabo já posicionado em campo |
| Caminho Veia, efeito Estrada Viva LV5 | a chama salta vãos sem continuidade do condutor, ampliando o alcance efetivo em terreno fragmentado |

---

## Sinergias

- **Caminho Veia, efeito Borda Acesa:** transforma a arma empunhada em condutor próprio, eliminando a dependência de material posicionado previamente em campo, exatamente a restrição que esta ficha declara
- **Habilidade Borda Acesa do Clã Uchiha, quando publicada:** liga o arsenal elemental à lâmina empunhada pelo praticante, pela mesma leitura do caminho Veia
- **Cadeia de corpos em contato:** uma fileira de inimigos conectados fisicamente serve de condutor alternativo, propagando o fogo entre eles de forma encadeada

---

## Notas para o Mestre

- **A restrição é real e não decorativa.** Sem condutor presente, negue a execução em vez de permitir o disparo sem custo tático. É essa restrição que distingue o Ryūka do Endan e do Gōkakyū no mesmo rank
- **Narração pelo trajeto.** Descreva o condutor incandescendo antes de a chama alcançar o alvo, dando ao oponente uma janela de leitura que os disparos diretos não oferecem
- **NPCs.** Um Uchiha com lâmina empunhada e o caminho Veia usa o Ryūka como abertura de combate corpo a corpo, unindo taijutsu armado a dano elemental sem gasto adicional de posicionamento
