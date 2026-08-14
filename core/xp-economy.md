---
id: core.xp-economy
title: "Manual de Economia de XP e Criação de Ficha"
version: 2.6
layer: core
type: system
status: final
source-file: MANUAL_ECONOMIA_XP-1.md
---

# MANUAL DE ECONOMIA DE XP E CRIAÇÃO DE FICHA

Este manual é a autoridade canônica sobre a economia de XP do sistema. Ele substitui integralmente a Referência de Economia de XP anterior. Em caso de conflito entre este manual e qualquer documento de clã, perícia ou técnica escrito antes dele, este manual prevalece e o documento conflitante entra na fila de revisão.

## 1. Visão geral da economia

Toda ficha nasce com dois orçamentos independentes, calculados na criação e gastos em moedas separadas.

O **XP Ficha** é o orçamento estrutural. Ele compra atributos, perícias e técnicas, e define a competência mecânica do personagem.

O **XP Sorte** é o orçamento de destino. Ele compra vantagens e habilidades raras de clã ou ramo, e cresce com desvantagens aceitas. É a moeda que paga linhagem.

O fluxo de criação segue esta ordem: conceito do personagem, definição do Protagonismo, cálculo dos dois orçamentos, gastos, ficha pronta. Após a criação, o XP Total da ficha evolui por concessões manuais do narrador.

```txt
XP Total = XP Ficha base + concessões manuais de XP
XP Restante = XP Total - gastos
```

Gastos entram por atributos, perícias e técnicas. Técnicas não custam XP para NPCs, e níveis concedidos gratuitamente pelo narrador não entram no gasto.

## 2. Protagonismo

O Protagonismo é a alavanca mestra do destino do personagem. Ele alimenta o XP Sorte e participa da fórmula de resolução do sistema (`chance_final = chance_base × (1 + multiplicador × P)`). Ele não participa do cálculo do XP Ficha: essa conta é regida por `core/canon-factor.md`, pela leitura do que o personagem viveu, e centralidade narrativa fica de fora dela. A escala vai de 0 a 10:

```txt
1  Anônimo      sem nome, sem impacto
2  Figurante    aparece na margem, sem papel real
3  Coadjuvante  suporte pontual, não central
4  Aliado       participa ativamente e influencia outros
5  Protagonista herói da própria história, motor dos eventos
6  Referência   conhecido, impactante, seguido por outros
7  Épico        muda eventos maiores que si mesmo
8  Lendário     lembrado por gerações
9  Mítico       redefine o possível no mundo
10 Eterno       transcende escala humana, força da natureza
```

## 3. XP Ficha

O cálculo do XP Ficha é regido por `core/canon-factor.md`. O narrador declara um Cânone de 0 a 10 sobre a vida inteira do personagem, e a fórmula aplica `XP de Ficha = 5.000 × 2^Cânone`. Protagonismo, idade como fator multiplicativo, e o antigo Registro do Ano por faixa de vida não participam mais desta conta.

## 4. XP Sorte

```txt
XP Sorte base = 500 + (Protagonismo × 150) + (D100 × D20) + (Protagonismo × D100)
```

As rolagens de D100 e D20 são feitas na criação. O orçamento disponível evolui assim:

```txt
XP Sorte disponível = XP Sorte base + XP ganho por desvantagens - XP gasto
```

Desvantagens aceitas aumentam o ganho. Vantagens compradas, habilidades raras de clã ou ramo e ajustes por remoção ou troca aumentam o gasto. Os núcleos de clã (Uchiha 1600, Uzumaki 900, Senju 900, Hyūga teto 700) e a fórmula de Escassez do Sangue são precificados nesta moeda, conforme os documentos de clã.

Contratos de vínculo com espécie invocável também correm nesta moeda quando o personagem os traz da história pregressa, precificados pelo que a espécie alcança, e o catálogo de cada cenário publica a tabela. O contrato obtido durante a campanha é evento do mundo e não passa por aqui, porque esta moeda é orçamento de criação.

**O teto de 1600 vale entre clãs.** Ele impede que um clã futuro iguale ou exceda o Uchiha, e não governa o que não é clã. Ativo do mundo com ficha própria, roster e agência é outra espécie de compra, e o cenário que a precifique acima do teto declara a passagem no documento que a publica.

## 5. Atributos

Custo individual para subir um atributo para o nível L:

```txt
Custo(L) = round((50 + 2.2 × (L² - 1)) / 5) × 5
```

Marcos de custo individual:

```txt
LV1  50    LV10 270   LV26 1535
LV5  105   LV18 760   LV34 2590
```

Custo acumulado nos marcos de requisito de perícia:

```txt
LV2  105    LV12 2010   LV26 14900
LV6  490    LV18 5510   LV34 31750
```

Modificadores que alteram o preço final de atributo: descontos de clã por atributo, e reduções de custo concedidas por vantagem que declare redução de custo no próprio texto. Bônus de XP de treino ficam fora desta lista, porque atuam no slot de Talento do Manual Global de Treinamento, e nenhuma concessão de rendimento se converte em desconto de preço. O arredondamento por floor é aplicado em cada nível pago, individualmente.

## 6. Perícias

Esta economia governa o custo em XP e o requisito de atributo por nível. A estrutura da perícia, o bônus por nível e a largura por caminho adicional leem o Núcleo de Perícias v2.

Custo base por nível, antes do multiplicador de categoria:

```txt
LV1 750    LV3 2250   LV5 6750
LV2 1125   LV4 4125   LV6 10125
```

Multiplicadores por categoria e custos resolvidos (arredondamento por floor em cada nível):

```txt
Físico    ×1.0   750 / 1125 / 2250 / 4125 / 6750 / 10125
Prático   ×1.1   825 / 1237 / 2475 / 4537 / 7425 / 11137
Mental    ×1.2   900 / 1350 / 2700 / 4950 / 8100 / 12150
Social    ×1.3   975 / 1462 / 2925 / 5362 / 8775 / 13162
Chakra    ×1.4  1050 / 1575 / 3150 / 5775 / 9450 / 14175
Ninjutsu  ×1.5  1125 / 1687 / 3375 / 6187 / 10125 / 15187
Erudição  ×1.7  1275 / 1912 / 3825 / 7012 / 11475 / 17212
```

Modificadores que alteram o preço final de perícia: desconto de clã sobre perícia nomeada, redução de custo concedida por vantagem que nomeie uma perícia, e o multiplicador de posição que um cenário publique para a família de perícia cujo preço ele reserva a dono próprio. Vantagem que se compra por categoria, por área de domínio ou por classe de perícia atua no rendimento de treino e nunca no preço, em qualquer cenário. Bônus de XP de treino ficam fora desta lista pela mesma razão que ficam fora da seção 5.

Cada cenário declara, no documento de adaptação de treino dele, quais categorias se abrem à compra de talento por categoria e quais famílias de perícia têm o preço reservado. No mundo de Naruto, as sete perícias de natureza têm o preço governado pela escada de posição do Sistema Elemental, e as três categorias do eixo do chakra ficam fechadas à compra de talento por categoria.

### 6.1 As três categorias do eixo do chakra

Estas três substituem a categoria única **Ninja**, que cobrava o mesmo preço de
doze domínios que não custam a mesma coisa para aprender. O critério de
separação é **o que o praticante faz com a energia**, e ele decide todos os
casos sem julgamento caso a caso.

**Chakra ×1,4 — você opera a energia bruta.** O praticante manipula o chakra
como ele é, sem convertê-lo em outra coisa: molda, conduz, retém, esconde,
percebe. É o degrau mais barato do eixo porque é o mais próximo do que todo
shinobi já faz por formação, e porque é pré-requisito estrutural de quase tudo
que vem depois. Cobra acima de Social porque exige treino dedicado que a
população geral não tem.

**Ninjutsu ×1,5 — você muda o que a energia é.** O praticante converte chakra em
outra natureza e a governa depois de convertida. Cobra acima de Chakra porque a
conversão é competência adicional sobre a operação, e não substituta dela: quem
transforma precisa antes moldar.

**Erudição ×1,7 — arte codificada, com mestre e doutrina.** O praticante opera um
corpo de conhecimento que não se descobre sozinho na prática. Tem literatura,
tem escola, tem termo técnico e tem erro que só um mestre corrige. É o degrau
mais caro porque o custo real de aprendizado não está na energia, está no
acesso: o cânone registra a raridade de praticantes reais nesses três domínios
apesar de a matéria-prima ser comum.

O rateio segue a mesma regra de floor das demais categorias, aplicado nível a
nível.

Requisito de atributo por nível da perícia:

```txt
LV1 atributo 2    LV3 atributo 12   LV5 atributo 26
LV2 atributo 6    LV4 atributo 18   LV6 atributo 34
```

Bônus geral acumulado da perícia: lê o Núcleo de Perícias v2, onde a Base de Nível corre em 12, 24, 32, 40, 45 e 50. Esta economia não redefine esses valores.

## 7. Inclinações, Caminhos e Transcendências

**Inclinação** é a especialização interna da perícia. No LV2 o personagem escolhe uma inclinação; no LV3 ela aprofunda. Bônus: LV2 +5, LV3 +10. A primeira inclinação está embutida no custo normal da perícia. Uma inclinação extra pode ser comprada a partir do LV2 pelo preço de LV2 da perícia; avançar essa inclinação extra para LV3 custa esse mesmo preço novamente.

**Caminho** é a rota técnica dentro de uma inclinação, existente nos níveis LV4 e LV5. No LV4 o personagem escolhe um caminho ligado a uma inclinação em LV3; o primeiro caminho está embutido no custo do LV4. No LV5 o caminho principal sobe junto. Caminhos extras exigem perícia LV4 ou superior, caminho principal já escolhido, a inclinação correspondente em LV3, e não podem repetir caminho já adquirido.

Custo de caminho extra (50% do custo do nível na categoria, floor):

```txt
Físico:    LV4 2062 / LV5 3375
Prático:   LV4 2268 / LV5 3712
Mental:    LV4 2475 / LV5 4050
Social:    LV4 2681 / LV5 4387
Chakra:    LV4 2887 / LV5 4725
Ninjutsu:  LV4 3093 / LV5 5062
Erudição:  LV4 3506 / LV5 5737
```

Cada caminho extra adquirido também eleva o bônus geral da perícia pelo fator de largura declarado no Núcleo de Perícias v2, de 0,10 sobre a Base de Nível.

**Transcendência** é o ápice da perícia no LV6. A primeira transcendência está embutida no custo normal do LV6 e exige ao menos um caminho relacionado em LV5. Transcendências extras custam o preço cheio do LV6 da categoria.

## 8. Naturezas

A Natureza humana define os multiplicadores de recursos da ficha:

```txt
Protagonista  PV 30 / PM 15 / PS 12
Duelista      PV 25 / PM 10 / PS 15
Atirador      PV 10 / PM 10 / PS 25
Vanguarda     PV 30 / PM 5  / PS 10
Controlador   PV 15 / PM 18 / PS 15
Estrategista  PV 15 / PM 20 / PS 10
Suporte       PV 10 / PM 25 / PS 10
```

Bônus de PV e PS provenientes de qualquer outra fonte (clã, vantagem, técnica) são expressos como adições ao multiplicador de Natureza, nunca somados diretamente ao valor final do pool.

As naturezas de transformação de chakra não se compram nesta moeda. A natureza é fato de nascimento, determinado por rolagem na criação, ou aquisição por treino de campanha, e em nenhum dos dois casos existe uma linha de orçamento chamada natureza. O que custa XP é a perícia daquela natureza, que corre na trilha Ninjutsu como qualquer outra, e o Sistema Elemental publica o multiplicador de dispersão que a posição da natureza na ficha aplica sobre esse preço.

## 9. Regras transversais de cálculo

1. Custos de chakra e de XP se publicam como números fixos absolutos, e nunca como percentual de outra grandeza da ficha. Percentuais e multiplicadores existem em bônus de teste, em escalonamento de magnitude, nas frações definidas neste manual (caminho extra a 50%) e nos modificadores de preço que as seções 5 e 6 enumeram. Modificador de preço incide sobre o valor publicado e não reescreve a tabela.
2. Arredondamentos: atributos usam round ao múltiplo de 5 na fórmula de custo e floor em cada nível pago; perícias e frações de caminho usam floor; o XP Ficha usa round no resultado final.
3. A ordem de operações é sempre a da fórmula escrita. Nenhuma etapa intermediária é arredondada além das regras acima.
4. Bônus de pool de atributos de escala alta (RES, SAB) não entram como insumo da fórmula de RC.

## Anexo A. Decisões de auditoria consolidadas

1. A transcendência exige ao menos um caminho relacionado em LV5. A implementação que exigia todos os caminhos relacionados está incorreta e deve ser corrigida no código.
2. Caminhos existem apenas em LV4 e LV5. As tabelas de caminho LV6 presentes no código são dados mortos e devem ser removidas.
3. O XP Base é 3000 para todos os sistemas. Referências antigas a base 2500 estão obsoletas.
4. O comentário de migração sobre a fórmula antiga de sorte é resíduo de código sem efeito de regra e deve ser limpo.
5. O cálculo de XP Ficha por Protagonismo, Índice de Idade e Fator de História, descrito neste manual até a v2.2, foi revogado por `core/canon-factor.md`, hoje em v3. O item 3 acima, sobre o XP Base de 3000, vale apenas para o histórico deste manual e não descreve a base do cálculo vigente.
6. O coeficiente quadrático da fórmula de custo de atributo subiu de 1,1 para 2,2 na v2.6, dobrando o preço de progressão em todos os níveis acima de LV1. `core/system-core.md` publica a mesma fórmula em espelho e sobe junto.
