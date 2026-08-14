---
id: naruto.technique.endan
title: "Endan (炎弾)"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Endan_v1.md
---

# Bala de Fogo — Endan (火遁・炎弾)
Ninjutsu · Katon · Rank D

---

## Sobre a Técnica

O Endan é a expulsão de um jato concentrado de chamas pela boca, disparado em linha reta contra um alvo único. A técnica dispensa selos de mão inteiramente, e o praticante converte e expele o chakra no mesmo movimento em que decide atacar. A coluna de fogo percorre distância média antes de se dissipar por conta própria, sem exigir correção de rota nem preparação prévia.

O que a técnica entrega em execução é velocidade de resposta e não potência. O volume de chakra investido é pequeno diante das técnicas de Katon de rank superior, e a temperatura da chama reflete essa contenção. É por isso que o Endan funciona menos como arma decisiva e mais como o gatilho mais rápido do repertório de fogo, o primeiro recurso de quem precisa de dano ou de ignição no mesmo turno em que a situação exige.

A ausência de selos é também a ausência de aviso. Nenhuma postura denuncia a técnica antes do disparo, e o praticante a executa em movimento sem perder o próprio ritmo. O custo dessa imediatez é a modéstia do resultado: a coluna de fogo não rivaliza em alcance ou em temperatura com o que o mesmo praticante alcança investindo mais chakra e mais tempo.

Entre praticantes de Katon, o Endan é também a ferramenta de ignição mais barata do arsenal. Qualquer superfície coberta por óleo, gás ou material já preparado por outra técnica encontra no Endan a centelha que a aciona, e essa função de gatilho acompanha a técnica por toda a carreira de quem a aprende, mesmo depois que ela deixa de ser a maior fonte de dano disponível.

---

## Requisitos de Acesso

- **Katon LV2:** portão de rank D, que resolve em 30 pela soma da Base 24 com INT 6
- **Moldagem Básica:** 30 pela soma da Base Total com SAB, degrau lido do coeficiente técnico 0,5

---

## Custo de XP

**Custo de XP:** 480

---

## Efeitos Globais

O disparo não produz som de preparação nem alteração de postura perceptível, porque não há selos e não há pausa entre a decisão e a execução. Testemunhas identificam a técnica apenas no instante em que a chama já está no ar.

A coluna de fogo ilumina o trajeto por menos de um segundo e não deixa marca duradoura no ambiente fora do alcance da chama em si. Superfície combustível atingida arde pela duração padrão que o Nível 1 da Perícia de Katon já publica.

---

## Mecânica de Ativação

- **RC nominal:** 49
- **Custo mínimo:** 16
- **Selos de referência:** 0
- **Assinatura selada:** dispensada. A técnica já executa sem selo algum em qualquer nível de maestria, por definição da própria entrada, e não pela regra de assinatura selada da Régua de Interface, que pressupõe uma contagem de selos a dispensar
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus. No custo mínimo de 16, qualquer Limite de Saída acima de 16 dispara no ato
- **Ação:** ação de ataque única, sem canalização prévia em praticante de moldagem competente
- **Restrições:** alvo único, distância média, corpo do praticante como origem única de disparo

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator de Moldagem
dano = 49 × 0,16 × 1,60 + LV_CC² × 2,5 × 0,5
dano = 12,544 + LV_CC² × 1,25
```

O coeficiente de entrega 0,16 corresponde à categoria de projétil único direcionado: a coluna de fogo viaja em linha reta até um único alvo, sem se dividir e sem irradiar do corpo, o mesmo perfil de entrega do Gōkakyū apesar da forma diferente, jato contínuo em vez de esfera. O coeficiente técnico 0,5 corresponde à dependência baixa, com a moldagem em papel auxiliar: o próprio catálogo publica Moldagem Básica como exigência, o piso da régua, e a leitura da técnica confirma esse piso, com a ausência de preparação e a imediatez descritas como a identidade central da entrada.

### Tabela de Coeficientes da Leva

Esta ficha fecha, para as treze técnicas desta leva, a leitura de `coef_entrega` por forma de entrega e de `coef_técnica` por grau de dependência de moldagem, ancorada na Seção 5.3 do Manual de Criação de Jutsus. As doze fichas seguintes declaram apenas a célula que consomem e apontam para este bloco.

**`coef_entrega`, todas as categorias da Seção 5.3 encontradas nesta leva:**

| Forma de entrega | coef_entrega | Técnicas desta leva |
|---|---|---|
| Ponto concentrado / contato único | 0,20 | Hōō Shō |
| Projétil único direcionado | 0,16 | Endan, Gōkakyū no Jutsu, Ryūka no Jutsu, Gōryūka no Jutsu, Rengoku Ryūsei |
| Múltiplos projéteis simultâneos | 0,13 | Hōsenka no Jutsu, Hōsenka Tsumabeni, Jigoku no Hane, Kaen Ami, Hōō no Wana |
| Área irradiada do corpo | 0,12 | Kaen Senpū |
| Área de terreno ou campo | 0,10 | Kasumi Enbu no Jutsu |

Nenhuma forma de entrega desta leva exigiu categoria nova. As sete linhas publicadas na Seção 5.3 cobrem as treze técnicas sem resto, e a categoria Fonte atmosférica real, própria do Kirin, não se aplica a nenhuma delas, porque nenhuma extrai energia do céu.

O Ryūka canaliza fogo por fio condutor até um ponto de contato, e a leitura em Projétil único direcionado, e não em Ponto concentrado, se justifica pela distância percorrida antes do impacto: o fio guia a chama, mas a chama ainda viaja, e é essa viagem que distingue a categoria de projétil da categoria de contato puro que o Hōō Shō ocupa sozinho.

**`coef_técnica`, grau de dependência de moldagem, com a leitura de elevação de degrau da Seção 3 e da Seção 4 do Manual de Requisitos de Técnica:**

| coef_técnica | Grau | Degrau base da Régua de Exigência | Técnicas desta leva | Elevação declarada |
|---|---|---|---|---|
| 0,5 | Baixa, moldagem auxiliar | Básica | Endan | nenhuma |
| 1,0 | Média, moldagem intensifica o efeito | Plena | Gōkakyū no Jutsu, Gōryūka no Jutsu | nenhuma |
| 1,0 | Média, moldagem intensifica o efeito | Plena, elevada a Alta | Hōsenka no Jutsu, Ryūka no Jutsu, Kasumi Enbu no Jutsu, Hōsenka Tsumabeni, Kaen Senpū, Hōō Shō | uma propriedade cada, declarada na ficha de cada técnica |
| 2,0 | Alta, moldagem como mecanismo central | Refinada | Jigoku no Hane, Kaen Ami, Hōō no Wana | nenhuma |
| 2,0 | Alta, moldagem como mecanismo central | Refinada, elevada a Absoluta | Rengoku Ryūsei | proporção interna fina |

A Régua de Exigência de Moldagem só ancora diretamente em quatro pontos, 0,5 na Básica, 1,0 na Plena, 2,0 na Refinada e 3,0 na Absoluta. O degrau Alta, publicado pelo catálogo em seis das treze entradas, não é ponto de ancoragem direta: ele só existe como elevação de um degrau sobre a ancoragem imediatamente abaixo, pela Seção 4 do Manual de Requisitos de Técnica, entre as quatro propriedades ali publicadas, proporção interna fina, sustentação prolongada, escala mínima de moldagem e tolerância zero a excesso de volume. As seis técnicas desta leva com Moldagem Alta mantêm coef_técnica 1,0 e declaram a propriedade elevadora na própria ficha.

### Par de validação por rank

Decisão tomada por padrão nesta leva, repetida em todas as fichas seguintes: a Régua de Magnitude valida contra o PV do perfil Equilibrado da faixa cuja coluna Quem usa, na Seção 1 do Manual de Criação de Jutsus, melhor corresponde ao rank da técnica.

| Rank | Quem usa | Par de validação |
|---|---|---|
| D e C | Genin treinado; Chuunin | Veterano, PV 960 |
| B | Jounin; chuunin talentoso | Elite, PV 1.440 |
| A | Jounin elite; ANBU | Especial, PV 1.920 |
| S | Kage; nível especial | Ápice, PV 3.000 |

A escolha reaproveita as quatro faixas que o próprio Manual já usa como pares de validação, nas âncoras do Chidori e do Kirin na Seção 5.3, sem introduzir faixa nova.

---

## Tabela de Descarga

Par de referência Veterano, PV 960, conforme a leitura de par por rank fechada acima para D e C.

| LV_CC | Fator de Moldagem | Dano | % PV do par |
|---|---|---|---|
| 2, entrada | 5 | 18 | 1,9% |
| 3 | 11 | 24 | 2,5% |
| 4 | 20 | 33 | 3,4% |
| 5 | 31 | 44 | 4,6% |
| 6 | 45 | 58 | 6,0% |
| 6 com 1 caminho | 61 | 74 | 7,7% |
| 6 com 2 caminhos | 80 | 93 | 9,7% |

### Validação de magnitude

O Endan não alcança o tier Forte em nenhum patamar de maestria, nem no piso de 25% nem no teto de 38% do par. A leitura é esperada e não um defeito de calibração: o próprio catálogo descreve a técnica como modesta diante das técnicas de rank superior, RC nominal de 49 é o piso absoluto da faixa D, e a ausência de selos publica a barganha central da entrada, imediatismo trocado por potência. Uma técnica de rank D que alcançasse Forte tornaria as onze técnicas de rank superior desta leva redundantes no próprio degrau que deveriam superar. O Endan compra velocidade de resposta e função de ignição, não dano decisivo, e a Tabela de Descarga confirma essa leitura sem contradizer a Régua de Magnitude, que reserva o tier Forte para as técnicas cujo catálogo as descreve como opção de combate central.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Leve |
| Grau máximo possível | Moderado |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

O grau máximo possível não passa de Moderado, o mais baixo teto desta leva, coerente com o dano modesto que a Tabela de Descarga acima publica.

---

## Sinergias

- **Kasumi Enbu no Jutsu:** o gás inerte que aquela técnica deposita em campo aceita o Endan como fonte de ignição declarada no próprio catálogo, e a detonação resultante entrega o dano completo daquela ficha
- **Superfície preparada por Leito:** o caminho Leito, da inclinação Braseiro, converte terreno em meio combustível, e o Endan funciona como o gatilho mais barato para aplicar sobre a preparação
- **Caminho Refino:** zera o desperdício, derrubando o custo pago ao mínimo de 16 e eliminando o PS de desperdício, o que multiplica o número de disparos disponíveis por combate
- **Rito da Grande Bola de Fogo:** o Gōkakyū concedido pelo rito não altera o Endan, mas o mesmo praticante Uchiha que já domina o rito tipicamente aprende o Endan antes dele, pela ordem de acesso publicada nesta leva

---

## Notas para o Mestre

- **Frequência esperada é alta.** O Endan é o disparo de menor custo do arsenal de Katon, e um praticante competente o usa várias vezes por combate sem pressionar a própria reserva. Não trate cada disparo como decisão tática relevante
- **Narração por função.** Descreva o Endan como reação rápida, o jato saindo antes que o praticante termine de se posicionar, e reserve a descrição de impacto visual maior para as técnicas de rank superior desta leva
- **Uso como ignição.** Sempre que houver material combustível preparado em campo, ofereça ao jogador a opção de usar o Endan como gatilho em vez de disparar contra o alvo diretamente
- **NPCs.** Genin e chuunin de fogo usam o Endan como abertura de combate ou como resposta imediata a uma abertura, nunca como golpe final
