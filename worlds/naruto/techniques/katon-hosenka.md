---
id: naruto.technique.katon-hosenka
title: "Hōsenka no Jutsu (鳳仙花の術)"
version: 1.2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Hosenka_v1.md
---

# Katon: Hōsenka no Jutsu
**火遁・鳳仙花の術 · Múltiplas Bolas de Fogo da Fênix**
Ninjutsu · Katon · Rank D

---

## Sobre a Técnica

O Hōsenka no Jutsu é a expulsão simultânea de várias bolas de fogo de pequeno porte pela boca, cada uma guiada pelo chakra do praticante de forma independente. As esferas se dividem no ar em trajetórias distintas assim que deixam o corpo, e cada uma mantém rota própria até o impacto ou até se dissipar.

A dispersão em múltiplas trajetórias é o que distingue o Hōsenka de um disparo único como o Endan. Um alvo que calcula a esquiva contra uma única linha de ataque encontra várias chegando de ângulos diferentes ao mesmo tempo, e a defesa eficiente contra uma esfera não cobre automaticamente as demais.

O praticante pode ocultar projéteis metálicos no interior de cada esfera antes do disparo. O fogo mascara a presença do metal durante o voo, e o alvo que calibra a defesa contra chamas recebe, no momento em que as esferas se abrem ou se dissipam, um segundo vetor de ameaça que a leitura inicial não previa. Entre as famílias de Konohagakure com afinidade para fogo, o Hōsenka é ensinado cedo, e serve de base para o controle direcional de múltiplos alvos que técnicas posteriores do mesmo arsenal exploram com mais profundidade.

---

## Requisitos de Acesso

- **Katon LV2:** portão de rank D, que resolve em 30 pela soma da Base 24 com INT 6
- **Moldagem Alta:** 58 pela soma da Base Total com SAB, degrau elevado um passo acima do piso Plena que o coeficiente técnico 1,0 fixaria, pela propriedade de proporção interna fina, com o praticante guiando várias esferas pequenas de forma independente e simultânea

---

## Custo de XP

**Custo de XP:** 720

---

## Efeitos Globais

As esferas produzem luminosidade e calor perceptíveis a curta distância antes do impacto, e qualquer superfície combustível dentro das trajetórias individuais acende ao contato, pela regra padrão do Nível 1 da Perícia de Katon. A dispersão simultânea cobre uma faixa curta de terreno diante do praticante, sem alcançar o perfil de uma técnica de área declarada.

---

## Mecânica de Ativação

- **RC nominal:** 76
- **Vetor:** Energia térmica · Celeridade 100
- **Custo mínimo:** 25
- **Selos de referência:** 1, o Selo do Tigre
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus. No custo mínimo de 25, qualquer Limite de Saída acima de 25 dispara no ato
- **Ação:** um selo, seguido de disparo imediato das esferas simultâneas
- **Restrições:** alvo único ou até três alvos próximos entre si, distância curta, origem pela boca do praticante

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M
dano bruto = 5 × 76 × 0,13 × 1,61 × M
dano bruto = 79,53 × M

M = 1 + 0,5 × (P − 42) ÷ 42          piso de M: 0,5
```

O coeficiente de entrega 0,13 corresponde à categoria de múltiplos projéteis simultâneos, com o Hōsenka nomeado como o próprio exemplo canônico da linha na Seção 5.3. O coeficiente técnico 1,0 corresponde à dependência média, com o degrau de exigência elevado de Plena para Alta pela propriedade de proporção interna fina, publicada pela Seção 4 do Manual de Requisitos de Técnica: guiar várias esferas pequenas com rota própria ao mesmo tempo cobra proporção mais fina do que produzir uma única esfera.

Quando o praticante oculta projéteis metálicos no interior das esferas, a quantidade declarada nesta ficha é **3**, valendo como requisito consumível de qualquer caminho de perícia que leia contagem de projéteis embutidos, entre eles o efeito Segunda Linha do caminho Agulha, publicado pela Perícia de Katon. A entrada de catálogo não exige esse caminho para a execução básica da técnica, e o valor de dano acima já cobre a versão sem projéteis embutidos, com o efeito adicional deles regido inteiramente pela perícia.

O `mult_Tipo` de 1,61 é a Constante de Moldagem de 1,40 multiplicada pela Assinatura do vetor declarado, que para Energia térmica vale 1,15. A Assinatura se lê do vetor que a obra entrega e nunca do elemento que a produz. O coeficiente técnico de 1,0 resolve o `w` em 0,5, que é a metade dele.

A perícia governante é o Katon, e o `P` é o atributo regente dela somado à Base Total, à Inclinação Total e à Especialização. O `P_ref` de 42 é o do rank D, e nele o `M` resolve em 1,000 por construção.

---

## Tabela de Descarga

Par de referência Treinado, PV 600, pela tabela de pares por rank da Seção 5.2 do Manual de Jutsus.

A tabela é indexada ao `P` do Katon, porque é o `P` que o motor lê. Nenhum perfil nomeado de personagem entra aqui.

| P do Katon | M | Dano | % PV do par |
|---|---|---|---|
| 42, referência do rank | 1,000 | 80 | 13,3% |
| 64 | 1,262 | 100 | 16,7% |
| 122 | 1,952 | 155 | 25,8% |

O Hōsenka não alcança o tier Forte em nenhum patamar, consistente com o rank D correspondendo à escala Básico do Manual de Criação de Poderes, e com o dano distribuído entre múltiplas esferas em vez de concentrado numa única entrega. O valor de cada linha representa a soma das esferas simultâneas, e o coeficiente de entrega 0,13 já embute a penalidade de dividir o efeito entre elas, conforme a Seção 5.3 declara para a categoria.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição, a cada esfera que atinja o alvo.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Leve |
| Grau máximo possível | Moderado |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV2, Moldagem Alta | acesso à técnica pela camada Livre |
| Caminho Agulha, inclinação Labareda | os três projéteis embutidos exigem esquiva separada, pelo efeito Segunda Linha |
| Múltiplas Bolas de Fogo da Fênix dominada | abre o Hōsenka Tsumabeni, requisito mecânico consumível |

---

## Sinergias

- **Caminho Agulha:** o efeito Segunda Linha converte os três projéteis embutidos em ameaça de esquiva separada, usando a contagem que esta ficha já declara
- **Hōsenka Tsumabeni:** consome esta técnica como requisito mecânico publicado no próprio catálogo
- **Caminho Refino:** zera o desperdício, derrubando o custo pago ao mínimo de 25

---

## Notas para o Mestre

- **A dispersão é a identidade tática.** Trate cada esfera como uma ameaça de esquiva separada quando o jogador declarar o uso de projéteis embutidos, e não apenas como um único disparo maior
- **Frequência esperada é alta em rank D e C.** É a técnica de controle de múltiplos alvos mais barata do arsenal desta leva
- **NPCs.** Genin de clã forte e chuunin de fogo usam o Hōsenka como resposta padrão contra grupos pequenos ou contra um único alvo protegido por barreira frontal, explorando os ângulos que a dispersão abre
