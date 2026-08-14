---
id: naruto.technique.kaen-senpu
title: "Kaen Senpū (火炎旋風)"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: KaenSenpu_v1.md
---

# Turbilhão de Chamas — Katon: Kaen Senpū (火遁・火炎旋風)
Ninjutsu · Katon · Rank B

---

## Sobre a Técnica

O Kaen Senpū é a manifestação de chakra de fogo em redemoinho giratório sustentado ao redor do corpo do praticante. A massa de chamas gira em velocidade suficiente para funcionar como escudo de calor, desfazendo projéteis leves que se aproximam e obrigando qualquer oponente a manter distância do praticante enquanto o turbilhão estiver aceso.

O praticante mantém o turbilhão como zona de controle próximo, pagando a manutenção ativa por turno enquanto ele permanecer girando. A mesma massa comprimida pode ser destacada do corpo e lançada como projétil rotatório contra um alvo único, trocando a função de zona defensiva pela de ataque dirigido, ao custo de encerrar a proteção que o turbilhão mantido oferecia.

---

## Requisitos de Acesso

- **Katon LV4:** portão de rank B, que resolve em 58 pela soma da Base 40 com INT 18
- **Moldagem Alta:** 58 pela soma da Base Total com SAB, degrau elevado um passo acima do piso Plena que o coeficiente técnico 1,0 fixaria, pela propriedade de sustentação prolongada, com a manutenção ativa cobrando chakra continuamente enquanto o turbilhão permanecer aceso
- **Caminho Muro Vivo:** inclinação Braseiro da Perícia de Katon, requisito consumível. A técnica usa o próprio corpo do praticante como catalisador do redemoinho, na mesma família de competência que sustenta uma linha de chama sobre o terreno

---

## Custo de XP

**Custo de XP:** 5.300

---

## Efeitos Globais

O redemoinho produz uma coluna visível de chama em rotação constante e um deslocamento de ar perceptível a curta distância, com calor suficiente para desconfortar quem se aproxima mesmo sem contato direto.

---

## Mecânica de Ativação

- **RC nominal:** 490
- **Custo mínimo:** 163
- **Selos de referência:** 2
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão, aplicável apenas ao modo comprimido e lançado. No modo mantido, o turbilhão não é entrega de alvo único e resolve pela regra de área e campo do Núcleo de Combate
- **Custo de PS:** somado ao PS que o desperdício do executante já cobra pela régua do Controle de Chakra, conforme a manutenção abaixo
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus, para a ignição inicial do turbilhão
- **Ação:** dois selos para erguer o turbilhão. Comprimir e lançar como projétil custa uma ação menor adicional e encerra a manutenção
- **Banda Mínima:** Engajado
- **Banda Máxima:** Curta
- **Restrições:** modo mantido ao redor do corpo, ou modo comprimido e lançado contra alvo único, nunca os dois ao mesmo tempo

---

## Manutenção do Turbilhão

Enquanto mantido ao redor do corpo, o turbilhão vence manutenção por turno, pela régua já publicada em Controle de Chakra v3.3:

```
manutenção por turno = 20% do custo mínimo × (1 + desperdício)
```

Para um praticante de moldagem plena, a manutenção resolve em 20% de 163, ou 33 de RC por turno, consumindo o Limite de Saída do praticante sem exigir nova ação. Colapso por dano segue a regra padrão de sustentadas: 15% do PV máximo em golpe único encerra o turbilhão, ou o limiar do caminho Firmeza para quem o possuir.

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator de Moldagem
dano = 490 × 0,12 × 1,60 + LV_CC² × 2,5 × 1,0
dano = 94,08 + LV_CC² × 2,5
```

O coeficiente de entrega 0,12 corresponde à categoria de área irradiada do corpo, lendo o modo primário e definidor da técnica, o turbilhão mantido como zona de controle ao redor do praticante. O coeficiente técnico 1,0 corresponde à dependência média, com o degrau de exigência elevado de Plena para Alta pela sustentação prolongada da manutenção ativa.

O modo comprimido e lançado como projétil rotatório reaproveita o mesmo valor de dano contra alvo único, sem recalcular coeficiente de entrega separado: a massa de chama muda de aplicação tática, entre zona e projétil, sem mudar de identidade mecânica, e uma segunda régua de conversão duplicaria o que a Seção 5.3 já resolve para esta entrada.

---

## Tabela de Descarga

Par de referência Elite, PV 1.440, pela leitura de par por rank fechada na ficha do Endan.

| LV_CC | Fator de Moldagem | Dano | % PV do par |
|---|---|---|---|
| 4, entrada | 40 | 134 | 9,3% |
| 5 | 62 | 156 | 10,8% |
| 6 | 90 | 184 | 12,8% |
| 6 com 1 caminho | 122 | 216 | 15,0% |
| 6 com 2 caminhos | 160 | 254 | 17,6% |

O Kaen Senpū não alcança o tier Forte. O valor tático da entrada está na zona de controle sustentada, que nega espaço e desfaz projéteis leves sem custo de dano adicional em cada turno de manutenção, e não em ser a maior fonte de dano de contato do rank B desta leva.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição, contra qualquer alvo que atravesse a área do turbilhão mantido ou que seja atingido pelo modo comprimido.

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
| Katon LV4, Moldagem Alta, Caminho Muro Vivo | acesso à técnica pela camada Livre |
| Controle de Chakra LV6 | Fator de Moldagem 90, e 122 ou 160 com caminhos adicionais |
| Caminho Refino | manutenção do turbilhão paga no mínimo, sem PS de desperdício adicional |
| Caminho Firmeza | eleva o limiar de dano que encerra a manutenção, sustentando o turbilhão sob pressão maior |

---

## Sinergias

- **Caminho Muro Vivo, efeito Raiz de Brasa:** sobre terreno que sirva de catalisador, a manutenção da própria linha de chama daquele efeito deixa de vencer, leitura análoga que reforça a identidade do turbilhão como técnica de sustentação barata para quem já domina o caminho
- **Formações fechadas:** o turbilhão negando avanço direto compõe com aliados de longo alcance, que disparam enquanto o turbilhão nega o corpo a corpo
- **Caminho Refino:** reduz o custo de manutenção ao mínimo declarado, sustentando o turbilhão por mais turnos com a mesma reserva

---

## Notas para o Mestre

- **É uma decisão de turno a turno.** Cobre a manutenção a cada início de turno enquanto o jogador mantiver o turbilhão aceso, e deixe clara a escolha entre sustentar a zona ou comprimir e lançar
- **Narração pela sustentação.** Descreva o desgaste visível de quem mantém o turbilhão por vários turnos seguidos, o suor e a respiração cada vez mais puxada, como sinal de que a manutenção está cobrando
- **NPCs.** Um defensor de posição usa o Kaen Senpū para negar uma passagem estreita, obrigando o grupo atacante a procurar rota alternativa ou a pagar o preço de atravessar o turbilhão
