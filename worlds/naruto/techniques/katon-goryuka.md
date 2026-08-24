---
id: naruto.technique.katon-goryuka
title: "Gōryūka no Jutsu (豪龍火の術)"
version: 1.2
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
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M
dano bruto = 5 × 490 × 0,16 × 1,61 × M
dano bruto = 631,12 × M

M = 1 + 0,5 × (P − 122) ÷ 122          piso de M: 0,5
```

O coeficiente de entrega 0,16 corresponde à categoria de projétil único direcionado, mesma leitura do Gōkakyū: a cabeça de dragão é uma entrega única e concentrada contra um alvo, apenas em volume muito maior. O coeficiente técnico 1,0 corresponde à dependência média, e o catálogo confirma o piso Plena sem elevação, porque a escala da técnica está na RC nominal investida e não numa exigência extra de refinamento sobre a moldagem.

O `mult_Tipo` de 1,61 é a Constante de Moldagem de 1,40 multiplicada pela Assinatura do vetor declarado, que para Energia térmica vale 1,15. A Assinatura se lê do vetor que a obra entrega e nunca do elemento que a produz. O coeficiente técnico de 1,0 resolve o `w` em 0,5, que é a metade dele.

A perícia governante é o Katon, e o `P` é o atributo regente dela somado à Base Total, à Inclinação Total e à Especialização. O `P_ref` de 122 é o do rank B, e nele o `M` resolve em 1,000 por construção.

---

## Tabela de Descarga

Par de referência Elite, PV 1.440, pela tabela de pares por rank da Seção 5.2 do Manual de Jutsus.

A tabela é indexada ao `P` do Katon, porque é o `P` que o motor lê. Nenhum perfil nomeado de personagem entra aqui.

| P do Katon | M | Dano | % PV do par |
|---|---|---|---|
| 64 | 0,762 | 481 | 33,4% |
| 122, referência do rank | 1,000 | 631 | 43,8% |
| 148 | 1,107 | 698 | 48,5% |

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
