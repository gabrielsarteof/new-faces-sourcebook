---
id: naruto.technique.kaen-ami
title: "Kaen Ami (火炎網)"
version: 1.2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: KaenAmi_v1.md
---

# Rede de Chamas — Katon: Kaen Ami (火遁・火炎網)
Ninjutsu · Katon · Rank A

---

## Sobre a Técnica

O Kaen Ami é a projeção de três guias de fogo simultâneos, cada um estabelecido no próprio instante da execução e conduzido de forma independente, sem exigir fio, arame ou cabo já posicionado em campo. O praticante envia chama por cada guia, e os três podem convergir sobre um único alvo vindos de ângulos diferentes ou tomar rumos separados contra alvos distintos.

Contra um único alvo cercado pelos três guias, a esquiva deixa de ter direção livre, porque toda rota de saída cruza pelo menos um deles. É a expressão mais avançada do controle territorial que o caminho Veia já demonstra no Ryūka, elevada de um único condutor para três guias autônomos e sem exigir material externo.

---

## Requisitos de Acesso

- **Katon LV5:** portão de rank A, que resolve em 71 pela soma da Base 45 com INT 26
- **Moldagem Refinada:** 71 pela soma da Base Total com SAB, degrau lido do coeficiente técnico 2,0, sem elevação
- **Caminho Veia:** inclinação Labareda da Perícia de Katon, requisito consumível. O efeito Estrada Viva é o que permite os três guias se estabelecerem no próprio turno da execução, sem preparação prévia de condutor em campo, ao contrário do que o Ryūka de rank C exige

---

## Custo de XP

**Custo de XP:** 12.800

---

## Efeitos Globais

Os três guias são visíveis como linhas de calor distorcendo o ar, convergentes ou divergentes conforme a escolha do praticante, e qualquer observador competente lê de imediato quantos alvos a técnica ameaça pela contagem de guias abertos.

---

## Mecânica de Ativação

- **RC nominal:** 1.020
- **Vetor:** Energia térmica · Celeridade 100
- **Custo mínimo:** 340
- **Selos de referência:** 3
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão, sem elevação a Teleguiado. A convergência dos três guias sobre um único alvo estreita as rotas de fuga por geometria de cerco, um efeito tático narrado em mesa, e não eleva o degrau de evasão da Seção 6.5 do Manual de Jutsus, que exige RC adicional e Extra pago em XP para qualquer elevação, sobretaxa que esta ficha não paga
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** três selos, seguidos do envio simultâneo dos três guias
- **Restrições:** até três alvos distintos, distância curta a média, cada guia resolve a própria esquiva quando dirigido a alvos separados
- **Aftermath:** leve, pela Seção 1.2 do Manual de Criação de Jutsus. PS igual a 20% do custo pago pela execução, cobrado após a resolução

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M
dano bruto = 5 × 1.020 × 0,13 × 1,61 × M
dano bruto = 1.067,43 × M

M = 1 + 1,0 × (P − 148) ÷ 148          piso de M: 0,5
```

O coeficiente de entrega 0,13 corresponde à categoria de múltiplos projéteis simultâneos: os três guias dividem a RC nominal entre si independentemente de convergirem ou se separarem, pela mesma leitura que a Seção 5.3 aplica a qualquer entrega dividida em vetores paralelos. O coeficiente técnico 2,0 corresponde à dependência alta, moldagem como mecanismo central, e o catálogo confirma o piso Refinada sem elevação: sustentar três guias autônomos e coerentes ao mesmo tempo já satisfaz a exigência do degrau sem propriedade adicional.

Contra um alvo único cercado pelos três guias convergentes, o dano publicado nesta tabela representa a soma dos três, entregue no mesmo instante.

O `mult_Tipo` de 1,61 é a Constante de Moldagem de 1,40 multiplicada pela Assinatura do vetor declarado, que para Energia térmica vale 1,15. A Assinatura se lê do vetor que a obra entrega e nunca do elemento que a produz. O coeficiente técnico de 2,0 resolve o `w` em 1,0, que é a metade dele.

A perícia governante é o Katon, e o `P` é o atributo regente dela somado à Base Total, à Inclinação Total e à Especialização. O `P_ref` de 148 é o do rank A, e nele o `M` resolve em 1,000 por construção.

---

## Tabela de Descarga

Par de referência Especial, PV 1.920, pela tabela de pares por rank da Seção 5.2 do Manual de Jutsus.

A tabela é indexada ao `P` do Katon, porque é o `P` que o motor lê. Nenhum perfil nomeado de personagem entra aqui.

| P do Katon | M | Dano | % PV do par |
|---|---|---|---|
| 122 | 0,824 | 880 | 45,8% |
| 148, referência do rank | 1,000 | 1.067 | 55,6% |
| 180 | 1,216 | 1.298 | 67,6% |

O Kaen Ami alcança o piso do tier Forte com dois caminhos adicionais em Controle de Chakra, e se aproxima dele já no LV6 pleno, na mesma faixa do Jigoku no Hane pelo compartilhamento do mesmo coeficiente técnico. Contra três alvos separados, cada um recebe uma fração proporcional deste total, e nenhum alvo isolado recebe o dano cheio da convergência.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição, a cada alvo atingido por ao menos um guia.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Moderado |
| Grau máximo possível | Grave |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV5, Moldagem Refinada, Caminho Veia | acesso à técnica pela camada Livre |
| Caminho Veia, efeito Estrada Viva LV5 | os guias saltam vãos de descontinuidade, ampliando a geometria de cerco em terreno fragmentado |

---

## Sinergias

- **Caminho Veia, efeito Estrada Viva:** requisito da técnica, dispensa material condutor pré-posicionado que o Ryūka de rank C ainda exige
- **Formação de cerco:** três guias contra um único alvo eliminam rota de fuga sem exigir aliados posicionando o cerco fisicamente
- **Caminho Sopro Medido, efeito Talhe Limpo:** quando o praticante possui o caminho, exclui aliados presos na mesma geometria de cerco sem alterar o dano contra os demais

---

## Notas para o Mestre

- **A escolha de convergir ou dividir é do jogador.** Peça a decisão antes de resolver a esquiva, porque ela muda tanto o número de alvos ameaçados quanto o dano que cada um recebe
- **Narração pela geometria.** Descreva os três guias como linhas visíveis de calor distorcido, permitindo ao alvo perceber a direção deles antes do impacto, mesmo sem impedir a resolução
- **NPCs.** Um Uchiha isolado contra um grupo pequeno usa o Kaen Ami para dividir a ameaça entre os atacantes, trocando dano concentrado por controle de múltiplas frentes
