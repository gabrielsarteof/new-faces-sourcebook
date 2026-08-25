---
id: naruto.technique.katon-gokakyu
title: "Gōkakyū no Jutsu (豪火球の術)"
version: 1.2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Gokakyu_v1.md
---

# Katon: Gōkakyū no Jutsu
**火遁・豪火球の術 · Grande Bola de Fogo**
Ninjutsu · Katon · Rank C

---

## Sobre a Técnica

O Gōkakyū no Jutsu é a conversão de chakra em uma esfera de fogo rugidora, expelida pela boca depois de um único selo de mão. O usuário molda a energia nos próprios pulmões antes da expulsão, e a bola resultante cresce em volume e em alcance na proporção direta do chakra investido, mantendo o formato esférico do início ao fim do trajeto.

A execução exige o Selo do Tigre, formado com uma mão só quando necessário, seguido da inspiração profunda que enche os pulmões antes do disparo. O tempo entre o selo e a liberação é curto o bastante para não expor o usuário a uma janela de contra-ataque significativa, e a técnica é livremente utilizável dentro de um combate sem exigir preparação além disso.

A densidade da chama é o que distingue o Gōkakyū das técnicas de fogo mais simples. A esfera é compacta o suficiente para vencer a evaporação superficial de técnicas de Suiton de usuários medianos, um confronto direto entre naturezas opostas em que a temperatura concentrada compensa a desvantagem elemental do Katon contra a Água declarada pelo Sistema Elemental.

Entre os membros do clã Uchiha, o domínio da técnica é rito de passagem. A tradição do clã ensina o Gōkakyū a crianças no píer do rio Naka, e completar a execução diante de um adulto da casa marca a entrada na vida adulta, com o Rito da Grande Bola de Fogo do próprio documento de clã registrando essa concessão em separado desta ficha.

---

## Requisitos de Acesso

- **Katon LV3:** portão de rank C, que resolve em 44 pela soma da Base 32 com INT 12
- **Moldagem Plena:** 44 pela soma da Base Total com SAB, degrau lido do coeficiente técnico 1,0, sem elevação

---

## Despertar / Aquisição

O Rito da Grande Bola de Fogo, publicado no documento do clã Uchiha, concede esta técnica sem custo de XP a qualquer personagem inicial daquela linhagem. Para o Gōkakyū especificamente, e apenas para ele, o portão de rank cai de Katon LV3 para Katon LV2, exceção exclusiva do jutsu do rito que não se estende a nenhuma técnica derivada dele. A Moldagem Plena continua exigida sem alteração, porque o rito ajusta apenas o portão de rank e não o portão de moldagem, e os dois correm em paralelo pela Seção 1 do Manual de Requisitos de Técnica.

Fora da linhagem Uchiha, a técnica se aprende normalmente pela camada Livre, pagando o custo de XP integral e cumprindo o portão padrão de Katon LV3.

---

## Custo de XP

**Custo de XP:** 1.775

A Seção 4.1.1 do Manual de Criação de Jutsus interpola essa faixa a partir de uma RC nominal de 180, resultando em XP_base de 1.722. A Seção 4.1.3 registra o Gōkakyū como âncora de calibração da matriz de estimativa, no degrau 2, posição 25%, contra a posição apurada de 23% pela RC nominal, uma diferença de dois pontos percentuais que a própria seção declara dentro da tolerância de calibração, sem trocar de degrau. O valor publicado no Compêndio de Katon, 1.775, é o da matriz de estimativa e permanece o número vigente, porque nenhuma ficha anterior a este documento apurava a RC nominal do Gōkakyū para substituí-lo.

---

## Efeitos Globais

O calor da esfera é perceptível a distância antes do impacto, e a luminosidade alaranjada ilumina qualquer ambiente escurecido no raio do disparo. Superfície combustível dentro do trajeto acende ao contato, pela regra padrão do Nível 1 da Perícia de Katon.

---

## Mecânica de Ativação

- **RC nominal:** 180, valor publicado pela própria Seção 4.1.1 do Manual de Criação de Jutsus como âncora de calibração, e não derivado por inversão como as demais técnicas desta leva
- **Vetor:** Energia térmica · Celeridade 100
- **Custo mínimo:** 60
- **Selos de referência:** 1, o Selo do Tigre
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus. A própria Seção 3.2 publica a âncora de Sasuke genin, teste de Moldagem 60, custo pago 157, RC 1.325, Limite de Saída 265, disparando sem janela alguma
- **Ação:** um selo, seguido de disparo imediato
- **Restrições:** alvo único, distância média, origem pela boca do praticante

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M
dano bruto = 5 × 180 × 0,16 × 1,61 × M
dano bruto = 231,84 × M

M = 1 + 0,5 × (P − 64) ÷ 64          piso de M: 0,5
```

O coeficiente de entrega 0,16 é a própria referência canônica da Seção 5.3 para a categoria de projétil único direcionado, com o Gōkakyū nomeado ali como o exemplo da linha. O coeficiente técnico 1,0 corresponde à dependência média, moldagem intensificando o efeito sem ser o mecanismo central, e o catálogo confirma o piso Plena sem elevação, porque a técnica não exibe nenhuma das quatro propriedades que elevariam o degrau.

O `mult_Tipo` de 1,61 é a Constante de Moldagem de 1,40 multiplicada pela Assinatura do vetor declarado, que para Energia térmica vale 1,15. A Assinatura se lê do vetor que a obra entrega e nunca do elemento que a produz. O coeficiente técnico de 1,0 resolve o `w` em 0,5, que é a metade dele.

A perícia governante é o Katon, e o `P` é o atributo regente dela somado à Base Total, à Inclinação Total e à Especialização. O `P_ref` de 64 é o do rank C, e nele o `M` resolve em 1,000 por construção.

---

## Tabela de Descarga

Par de referência Veterano, PV 960, pela tabela de pares por rank da Seção 5.2 do Manual de Jutsus.

A tabela é indexada ao `P` do Katon, porque é o `P` que o motor lê. Nenhum perfil nomeado de personagem entra aqui.

| P do Katon | M | Dano | % PV do par |
|---|---|---|---|
| 42 | 0,828 | 192 | 20,0% |
| 64, referência do rank | 1,000 | 232 | 24,2% |
| 122 | 1,453 | 337 | 35,1% |

O Gōkakyū não alcança o tier Forte em nenhum patamar de maestria, e a leitura é consistente com a correspondência de escala da Seção 1.1 do Manual de Criação de Jutsus, que lê o rank C como Moderado na escala do Manual de Criação de Poderes, um degrau abaixo de Forte, ali correspondente ao rank B. O coeficiente técnico de 1,0 é o próprio piso do que a Seção 5.3 chama de dependência média, a categoria nomeada como Katon genérico, e mede exatamente essa posição intermediária: acima da imediatez sem refinamento do Endan e abaixo das técnicas cuja moldagem é o mecanismo central. A vantagem canônica sobre o Suiton mediano é efeito de composição elemental e de rider, e não de dano bruto.

---

## Interação com Defesas

O confronto direto contra Suiton de rank equivalente ou inferior resolve pelo Ciclo de Superação do Sistema Elemental, e não por perfuração declarada nesta ficha. A vitória canônica contra usuário mediano de Água decorre da comparação de rank e de investimento de RC publicada naquele sistema, sem camada adicional.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Leve |
| Grau máximo possível | Grave |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

O grau Crítico fica fora do alcance desta entrada porque a esfera concentra o impacto num único ponto de contato em vez de sustentar exposição prolongada, e a régua de Leve a Grave acompanha o perfil de dano moderado da técnica sem exigir declaração de teto além dele.

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV3, Moldagem Plena | acesso à técnica pela camada Livre |
| Katon LV2, via Rito da Grande Bola de Fogo | acesso concedido sem XP a personagem Uchiha inicial, exceção de portão exclusiva desta entrada |
| Caminho Refino | custo pago no mínimo de 60, sem PS de desperdício |
| Caminho Concisão, ou interface 169 | execução com zero selos |

---

## Sinergias

- **Rito da Grande Bola de Fogo:** concede a técnica sem custo e derruba o portão de rank em um nível, exclusivamente para esta entrada
- **Kasumi Enbu no Jutsu e Campo Preparado do caminho Leito:** o Gōkakyū serve de ignição para qualquer preparação de terreno ou de gás já depositada em campo
- **Superar a Maré, transcendência Coração do Dragão:** neutraliza a desvantagem elemental contra Suiton por rank igual ou superior, ampliando a leitura canônica de superioridade contra usuários medianos
- **Caminho Refino:** zera o desperdício e derruba o custo pago ao mínimo de 60, o que sustenta múltiplos disparos por combate mesmo em reserva modesta

---

## Notas para o Mestre

- **É a assinatura visual do domínio.** Trate o Gōkakyū como a técnica que qualquer plateia reconhece de imediato, e reserve a narração mais elaborada para o momento em que um Uchiha jovem a executa pela primeira vez diante da própria família
- **Frequência esperada é moderada.** A técnica sustenta uso repetido em combate sem forçar a reserva de um praticante de rank C ou superior, mas não é a maior fonte de dano do arsenal desta leva
- **O confronto contra Suiton é narrativo primeiro.** Descreva a vitória elemental como densidade de calor vencendo a evaporação, e resolva a mecânica pelo Ciclo de Superação, sem inventar perfuração adicional
- **NPCs Uchiha.** Qualquer NPC adulto do clã porta o Gōkakyū como dado de identidade, independente do resto do arsenal que a ficha dele carregue
