---
id: naruto.technique.hosenka-tsumabeni
title: "Hōsenka Tsumabeni (鳳仙花爪紅)"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: HosenkaTsumabeni_v1.md
---

# Incêndio de Fagulhas de Fênix — Katon: Hōsenka Tsumabeni (火遁・鳳仙花爪紅)
Ninjutsu · Katon · Rank B

---

## Sobre a Técnica

O Hōsenka Tsumabeni é o arremesso de shurikens com uma mão, seguido da expulsão simultânea de chakra de fogo sobre elas, envolvendo cada projétil em chamas próprias no instante do lançamento. As lâminas inflamadas continuam queimando depois do impacto, porque o fogo é sustentado pelo chakra do praticante e não pela inflamabilidade da superfície atingida.

A chama funciona sobre cada shuriken como o caminho Veia da Perícia de Katon já descreve para lâmina empunhada: o metal em movimento vira a estrada por onde o fogo corre, em vez de o fogo se propagar livremente pelo ar. O praticante guia os projéteis já em voo através dessa aderência, produzindo trajetórias que se afastam da linha reta esperada de um arremesso comum.

As chamas cumprem uma segunda função além do dano. O brilho e o movimento das lâminas queimando distraem a leitura visual do alvo, e a técnica é o primeiro estágio de um engano que se completa em outra entrada do arsenal: o alvo que aprende a calibrar a defesa contra o Hōsenka Tsumabeni como ataque de fogo com lâminas visíveis se torna vulnerável ao que vem depois dele, quando o mesmo formato de ataque troca o que está escondido dentro da chama.

---

## Requisitos de Acesso

- **Katon LV4:** portão de rank B, que resolve em 58 pela soma da Base 40 com INT 18
- **Moldagem Alta:** 58 pela soma da Base Total com SAB, degrau elevado um passo acima do piso Plena que o coeficiente técnico 1,0 fixaria, pela propriedade de proporção interna fina, com o praticante envolvendo em chama vários projéteis lançados ao mesmo tempo, cada um com trajetória própria
- **Caminho Veia:** inclinação Labareda da Perícia de Katon. A leitura de "lâmina vira estrada" do efeito Estrada Viva se estende ao shuriken em voo, que serve de condutor à própria chama que o envolve, no mesmo mecanismo que Borda Acesa aplica à arma empunhada
- **Múltiplas Bolas de Fogo da Fênix:** requisito mecânico consumível, publicado pelo próprio catálogo

---

## Custo de XP

**Custo de XP:** 4.625

---

## Efeitos Globais

As lâminas continuam visivelmente acesas depois do impacto, mesmo cravadas em superfície não combustível, até a duração da Queimadura correr pelo Sistema de Efeitos de Status. O brilho móvel das chamas em voo é reconhecível a distância por quem já enfrentou a técnica antes.

---

## Mecânica de Ativação

- **RC nominal:** 438
- **Custo mínimo:** 146
- **Selos de referência:** 0, execução por movimento de arremesso e expulsão simultânea de chakra, sem selo de mão
- **Assinatura selada:** dispensada, pela mesma razão do Endan: selos de referência já em zero, sem contagem a dispensar
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** arremesso com uma mão, com a expulsão de chakra ocorrendo no mesmo movimento
- **Restrições:** exige shurikens em quantidade suficiente para o arremesso, alvo único ou até dois alvos próximos, distância curta

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator de Moldagem
dano = 438 × 0,13 × 1,60 + LV_CC² × 2,5 × 1,0
dano = 91,104 + LV_CC² × 2,5
```

O coeficiente de entrega 0,13 corresponde à categoria de múltiplos projéteis simultâneos, mesma categoria do Hōsenka do qual a técnica deriva. O coeficiente técnico 1,0 corresponde à dependência média, com o degrau de exigência elevado de Plena para Alta pela proporção interna fina de envolver vários projéteis lançados em chama ao mesmo tempo, a mesma leitura aplicada ao Hōsenka base.

A quantidade de projéteis declarada nesta ficha é **5**, número consumível por qualquer caminho de perícia que leia contagem de projéteis embutidos, entre eles o efeito Segunda Linha do caminho Agulha, publicado pela Perícia de Katon, quando o praticante o possuir além do Caminho Veia exigido por esta entrada.

---

## Tabela de Descarga

Par de referência Elite, PV 1.440, pela leitura de par por rank fechada na ficha do Endan.

| LV_CC | Fator de Moldagem | Dano | % PV do par |
|---|---|---|---|
| 4, entrada | 40 | 131 | 9,1% |
| 5 | 62 | 153 | 10,6% |
| 6 | 90 | 181 | 12,6% |
| 6 com 1 caminho | 122 | 213 | 14,8% |
| 6 com 2 caminhos | 160 | 251 | 17,4% |

O Hōsenka Tsumabeni se aproxima do piso do tier Forte sem alcançá-lo, mesmo no teto de maestria. A leitura é consistente com o perfil da entrada: o valor tático da técnica está no engano que ela monta para o Jigoku no Hane, e não em ser, isolada, a maior fonte de dano do rank B desta leva.

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
| Katon LV4, Moldagem Alta, Caminho Veia, Hōsenka dominado | acesso à técnica pela camada Requisito Mecânico |
| Controle de Chakra LV6 | Fator de Moldagem 90, e 122 ou 160 com caminhos adicionais |
| Caminho Agulha adicional | os cinco projéteis exigem esquiva separada, pelo efeito Segunda Linha |
| Hōsenka Tsumabeni dominado | abre o Jigoku no Hane, segundo estágio do mesmo engano |

---

## Sinergias

- **Caminho Veia, efeito Estrada Viva:** é o mecanismo que permite ao shuriken em voo servir de condutor à própria chama, requisito desta entrada
- **Caminho Agulha:** os cinco projéteis embutidos exigem esquiva separada quando o praticante também possui este caminho
- **Jigoku no Hane:** consome o Hōsenka Tsumabeni como fundamento conceitual do próprio engano

---

## Notas para o Mestre

- **É a primeira metade de um blefe.** O valor real da técnica cresce quando o mesmo alvo já viu o Hōsenka Tsumabeni antes e aprendeu a temer as lâminas visíveis, preparando o terreno para a surpresa do Jigoku no Hane
- **A distração é narrativa e não mecânica isolada.** Descreva o brilho móvel das chamas como o que rouba a atenção do alvo, sem conceder bônus numérico além do que o Perfil de Evasão e o rider já publicam
- **NPCs.** Um Uchiha da Polícia Militar usa o Hōsenka Tsumabeni como abertura visível e reserva o Jigoku no Hane, quando disponível, para quando o alvo já relaxou contra o padrão de ataque
