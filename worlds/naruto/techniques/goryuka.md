---
id: naruto.technique.goryuka
title: "Gōryūka no Jutsu (豪龍火の術)"
version: 1.1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Goryuka_v1.md
---

# Grande Dragão de Fogo — Katon: Gōryūka no Jutsu (火遁・豪龍火の術)
Ninjutsu · Katon · Rank B

---

## Sobre a Técnica

O Gōryūka no Jutsu é a compressão de um grande volume de chakra no interior do corpo, convertido em fogo e expelido na forma de uma cabeça de dragão colossal. O calor gerado é alto o suficiente para deslocar volumes de ar em larga escala, e um praticante avançado dispara várias sequências em rápida sucessão, reduzindo a cinzas qualquer alvo que permaneça no trajeto.

A escala da técnica a separa das demais entregas em linha reta desta leva. O Gōryūka não é apenas um jato maior que o Endan ou o Gōkakyū, é um volume de chama alto o suficiente para alterar a atmosfera ao redor do disparo quando lançado contra o céu, um efeito que nenhuma outra técnica deste arsenal produz na mesma escala.

---

## Requisitos de Acesso

- **Katon LV4:** portão de rank B, que resolve em 58 pela soma da Base 40 com INT 18
- **Moldagem Plena:** 44 pela soma da Base Total com SAB, degrau lido do coeficiente técnico 1,0, sem elevação

---

## Custo de XP

**Custo de XP:** 5.300

---

## Efeitos Globais

O calor da cabeça de dragão é perceptível a longa distância, e a coluna de ar deslocado é visível mesmo antes do impacto. Terreno combustível dentro do trajeto incendeia por inteiro.

---

## Formação de Tempestade

Quando disparado verticalmente contra o céu, o Gōryūka aquece a atmosfera o suficiente para originar correntes ascendentes que formam nuvens de tempestade e raio. É a leitura canônica de aquecimento atmosférico que o Kirin, no Compêndio de Raiton, já publica como via de construção da condição de campo dele quando nuvens naturais não existem: "aquecendo a atmosfera com fogo de grande escala." O Gōryūka é a resposta nomeada desta leva para essa via.

A densidade da formação acompanha o volume de calor lançado ao alto, conforme a própria ficha do Kirin declara, e disparos repetidos em sucessão contra o céu aceleram a formação. Esta entrada não republica o requisito de acesso do Kirin nem a mecânica de descarga dele, apenas declara a interface: um praticante que dispare o Gōryūka reiteradamente contra o céu constrói, ao longo de turnos suficientes a critério do Mestre, a condição de campo que aquela técnica exige.

---

## Mecânica de Ativação

- **RC nominal:** 490
- **Vetor:** Energia térmica · Celeridade 100
- **Custo mínimo:** 163
- **Selos de referência:** 3
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** três selos, seguidos de disparo. Um praticante avançado encadeia disparos sucessivos sem retomar a sequência completa de selos, pela Régua de Interface de Selos da Perícia de Controle de Chakra
- **Restrições:** alvo único, distância média, ou disparo vertical contra o céu para a Formação de Tempestade

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator de Moldagem
dano = 490 × 0,16 × 1,60 + LV_CC² × 2,5 × 1,0
dano = 125,44 + LV_CC² × 2,5
```

O coeficiente de entrega 0,16 corresponde à categoria de projétil único direcionado, mesma leitura do Gōkakyū: a cabeça de dragão é uma entrega única e concentrada contra um alvo, apenas em volume muito maior. O coeficiente técnico 1,0 corresponde à dependência média, e o catálogo confirma o piso Plena sem elevação, porque a escala da técnica está na RC nominal investida e não numa exigência extra de refinamento sobre a moldagem.

---

## Tabela de Descarga

Par de referência Elite, PV 1.440, pela leitura de par por rank fechada na ficha do Endan.

| LV_CC | Fator de Moldagem | Dano | % PV do par |
|---|---|---|---|
| 3, entrada | 22 | 147 | 10,2% |
| 4 | 40 | 165 | 11,5% |
| 5 | 62 | 187 | 13,0% |
| 6 | 90 | 215 | 14,9% |
| 6 com 1 caminho | 122 | 247 | 17,2% |
| 6 com 2 caminhos | 160 | 285 | 19,8% |

O Gōryūka não alcança o tier Forte em nenhum patamar de maestria. A RC nominal de 490 já é alta para o rank B, e o coeficiente técnico de 1,0 mantém a técnica na faixa de dependência média, consistente com a leitura de que a escala do Gōryūka vem do volume investido e não do refinamento de moldagem, ao contrário do que ocorreria numa técnica de coeficiente técnico mais alto na mesma faixa de RC.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Moderado |
| Grau máximo possível | Grave |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

O grau mínimo garantido sobe de Leve para Moderado em relação às entradas de rank C e D desta leva, pela escala superior do volume de chama entregue.

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV4, Moldagem Plena | acesso à técnica pela camada Livre |
| Controle de Chakra LV6 | Fator de Moldagem 90, e 122 ou 160 com caminhos adicionais |
| Caminho Concisão, ou interface 169 | disparos sucessivos sem retomar a contagem completa de selos |
| Disparo vertical sustentado | constrói a condição de campo que o Kirin exige, pela interface declarada acima |

---

## Sinergias

- **Kirin:** consome o disparo vertical do Gōryūka como via de construção da condição de campo, quando nuvens de tempestade naturais não estiverem presentes
- **Doton, projéteis lançados ao alvo:** o jato do Gōryūka inflama projéteis de lama já em trajetória, criando um ataque composto de alcance longo, leitura publicada no próprio catálogo
- **Caminho Refino:** zera o desperdício, derrubando o custo pago ao mínimo de 163 e sustentando mais disparos sucessivos por combate

---

## Notas para o Mestre

- **A divergência de rank foi resolvida pelo catálogo.** A lista de curadoria original posicionava o Gōryūka em rank A. O Compêndio de Katon v5.3 publica rank B, e esta ficha segue o catálogo. Se pesquisa canônica futura sustentar rank A com fonte primária nova, a correção é errata contra o compêndio e não reclassificação silenciosa desta ficha
- **A Formação de Tempestade é oportunidade e não garantia.** Trate a construção da condição de campo do Kirin como um investimento de vários turnos e de exposição alta, que um oponente competente vai tentar interromper
- **NPCs.** Um Uchiha que já domina o Kirin abre o combate testando a necessidade de nuvens naturais, e recorre ao Gōryūka repetido apenas quando o céu já não oferece o que a técnica maior exige
