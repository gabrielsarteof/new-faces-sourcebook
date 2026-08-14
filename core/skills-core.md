---
id: core.skills-core
title: "Núcleo de Perícias"
version: 2.3
layer: core
type: core-layer
status: final
source-file: Nucleo_de_Pericias_v2_1.md
---

# Núcleo de Perícias

**Camada Fundamental, fechada para modificação. v2.3, que soma bônus permanente de vantagem e desvantagem ao portão de capacidade da seção 8, ao lado das três emendas factuais herdadas da v2.2: o fechamento da coluna de precisão, a seção 6.1, que fixa a largura presumida na publicação de valores, e a leitura por eixo da exigência de regentes distintos.**

O Núcleo de Perícias define o que é uma perícia, de que camadas ela é feita, quanto
cada camada vale, como se adquire cada uma e como um teste de perícia se lê. Toda
perícia do sistema pluga nesta estrutura sem alterá-la, seja ela um domínio de
combate, um ofício, um corpo de conhecimento ou uma prática social.

> **Princípio (Open/Closed):** este núcleo é fechado. Criar uma perícia nova nunca
> exige mudar uma regra daqui. Se uma perícia precisa reescrever o núcleo, o
> problema está na perícia.

---

## 1. O que é uma perícia

Perícia é maestria construída em um domínio. Ela se compra com XP, cresce em seis
níveis e responde pelos testes que pertencem ao seu domínio.

Atributo é capacidade bruta. Perícia é o que foi feito com ela ao longo do tempo. Os
dois convivem em toda resolução, com divisão de trabalho fixa: o atributo move pools,
iniciativa e o piso de competência de quem nunca estudou o assunto, e a perícia
responde pelo que a prática construiu dentro do domínio.

Cada perícia declara um **atributo regente**, somado aos seus testes e responsável
pelo requisito mínimo de cada nível. Domínios vizinhos que costumam ser comprados
juntos declaram regentes distintos, o que mantém os portões independentes e impede
que um único atributo alto destrave famílias inteiras de competência.

A exigência vale **entre eixos de domínio e não dentro de um eixo**. Um eixo é o
conjunto de domínios que executam o mesmo ato sobre matéria diferente, e distinguir
seus membros por atributo produziria diferença arbitrária entre competências que o
mundo trata como uma disciplina só. Dentro do eixo, a independência dos portões se
mantém por outros dois instrumentos: o portão duplo, que põe magnitude e precisão em
perícias distintas, e a exigência de nível cruzado, que obriga o praticante a subir a
companheira junto. Dois domínios de eixos diferentes que compartilham regente
permanecem conformes, porque o que a regra protege é a independência de acesso, e
essa independência é o que a leitura por eixo preserva.

Perícia não embute capacidade. O nível autoriza o acesso, e a capacidade em si vive
no compêndio do domínio, com custo próprio.

---

## 2. As quatro camadas

**Base.** Conhecimento geral do domínio. Entra em todo teste sem condição alguma.

**Inclinação.** A região do domínio para a qual o praticante se inclinou. Entra no
teste quando a situação pertence a ela.

**Caminho.** A rota técnica dentro de uma inclinação. Entrega um verbo mecânico
próprio e o bônus de especialização, que entra no teste quando o problema é resolvido
por aquele verbo.

**Transcendência.** O ápice. Não soma valor ao teste. Muda a natureza do que já
existe, operando sobre condição, escopo ou categoria.

As três primeiras camadas são incrementais e se leem do mesmo jeito. Nenhuma delas
substitui outra. A diferença entre elas mora inteiramente no escopo.

**Compensação de escopo.** Camada larga paga pouco e dispara sempre. Camada estreita
paga muito e dispara raramente. O dimensionamento das duas segue a paridade de valor
esperado: multiplicado pela frequência com que cada uma entra em teste, o bônus da
inclinação e o bônus da especialização contribuem praticamente o mesmo por teste, e o
que os distingue é a forma da entrega.

---

## 3. Aquisição

Esta seção governa toda a estrutura, porque o valor de uma camada depende do estado
em que ela se encontra.

### 3.1 Progressão por nível

| Nível | O que o nível concede |
|---|---|
| LV1 | A perícia. Somente Base. |
| LV2 | A primeira inclinação, que nasce **Aberta**. |
| LV3 | Aprofundar uma inclinação, que passa a **Aprofundada**. |
| LV4 | O primeiro caminho, que nasce **Aberto**. |
| LV5 | Aprofundar um caminho, que passa a **Aprofundado**. |
| LV6 | A transcendência. |

### 3.2 Estados

Inclinação existe em dois estados, Aberta e Aprofundada. Caminho existe em três,
Aberto, Aprofundado e Transcendido.

O estado é propriedade de cada inclinação e de cada caminho em separado. Um praticante
pode manter uma inclinação Aprofundada e outra Aberta ao mesmo tempo, e caminhos em
estados diferentes dentro da mesma inclinação.

### 3.3 Aquisições adicionais

**Inclinação adicional** se compra a partir do LV2, a qualquer momento. Ela nasce
Aberta e precisa ser Aprofundada por compra separada.

**Caminho adicional** se compra a partir do LV4, a qualquer momento. Ele nasce Aberto
e precisa ser Aprofundado por compra separada.

**Todo caminho exige que a inclinação à qual pertence esteja Aprofundada.** Abrir
caminho em inclinação nova exige comprar a inclinação e aprofundá-la antes, e é isso
que faz a largura entre inclinações custar mais que a largura dentro de uma.

**Não existe teto de inclinações nem de caminhos.** Quantos uma perícia oferece é
resultado da auditoria do domínio, e quantos um praticante adquire é decisão dele,
limitada por XP e pelo tempo de mesa.

### 3.4 Transcendência

A transcendência exige que **todos os caminhos que o praticante possui estejam
Aprofundados**. Domínio parcial não transcende.

Ao ser adquirida, todos os caminhos possuídos passam ao estado Transcendido de uma
vez. Largura cobra em tempo: cada caminho novo é mais um que precisa alcançar o
Aprofundado antes que o ápice se abra.

---

## 4. Valores

### 4.1 A regra que impede realimentação

**Toda fração lê a Base de Nível. Nenhuma camada lê o valor total de outra camada.**

Cada bônus entra na soma final uma única vez e não alimenta nenhum outro cálculo.

| Termo | Definição | Uso |
|---|---|---|
| **Base de Nível** | Função exclusiva do nível da perícia | Única fonte que as frações leem |
| **Base Total** | Base de Nível somada aos bônus gerais de largura | Terminal: entra no teste e no portão |
| **Inclinação Nominal** | Fração da Base de Nível conforme o estado | Base do bônus de largura daquela inclinação |
| **Inclinação Total** | Inclinação Nominal somada aos bônus de largura dela | Terminal: entra no teste |
| **Especialização** | Fração da Base de Nível conforme grau e estado | Terminal: entra no teste |

A Base de Nível não cresce com caminhos, não cresce com inclinações e não cresce com
nada além de subir de nível.

### 4.2 Base de Nível

| LV1 | LV2 | LV3 | LV4 | LV5 | LV6 |
|---|---|---|---|---|---|
| 12 | 24 | 32 | 40 | 45 | 50 |

O teto de 50 pareia com o nível-base da faixa de ápice da régua de atributos. Maestria
plena encontra talento de ápice no teste geral do domínio, e a dominância da perícia
aparece nas camadas condicionais.

### 4.3 Inclinação Nominal

| Estado | Fração | LV2 | LV3 | LV4 | LV5 | LV6 |
|---|---|---|---|---|---|---|
| Aberta | 0,35 | 8 | 11 | 14 | 15 | 17 |
| Aprofundada | 0,50 | 12 | 16 | 20 | 22 | 25 |

### 4.4 Especialização

A fração depende do grau do caminho e do estado dele.

| Grau | Aberto | Aprofundado | Transcendido |
|---|---|---|---|
| 1 Ampla | 0,75 | 0,90 | 1,00 |
| 2 Larga | 0,85 | 1,00 | 1,10 |
| 3 Definida | 0,95 | 1,10 | 1,20 |
| 4 Estreita | 1,05 | 1,20 | 1,30 |
| 5 Pontual | 1,15 | 1,30 | 1,40 |

Valores resolvidos, por nível da perícia.

**LV4 (Base de Nível 40)**

| Grau | Aberto | Aprofundado | Transcendido |
|---|---|---|---|
| 1 Ampla | 30 | 36 | 40 |
| 2 Larga | 34 | 40 | 44 |
| 3 Definida | 38 | 44 | 48 |
| 4 Estreita | 42 | 48 | 52 |
| 5 Pontual | 46 | 52 | 56 |

**LV5 (Base de Nível 45)**

| Grau | Aberto | Aprofundado | Transcendido |
|---|---|---|---|
| 1 Ampla | 33 | 40 | 45 |
| 2 Larga | 38 | 45 | 49 |
| 3 Definida | 42 | 49 | 54 |
| 4 Estreita | 47 | 54 | 58 |
| 5 Pontual | 51 | 58 | 63 |

**LV6 (Base de Nível 50)**

| Grau | Aberto | Aprofundado | Transcendido |
|---|---|---|---|
| 1 Ampla | 37 | 45 | 50 |
| 2 Larga | 42 | 50 | 55 |
| 3 Definida | 47 | 55 | 60 |
| 4 Estreita | 52 | 60 | 65 |
| 5 Pontual | 57 | 65 | 70 |

O estado Transcendido só é alcançável com a transcendência adquirida, o que exige
todos os caminhos Aprofundados.

### 4.5 Bônus de largura

**Bônus geral.** Vale 0,10 da Base de Nível por caminho adicional e alimenta apenas a
Base Total. Aplica-se a todos os testes da perícia.

| Nível | Por caminho adicional |
|---|---|
| LV4 | 4 |
| LV5 | 4 |
| LV6 | 5 |

**Bônus de inclinação.** Vale 0,15 da Inclinação Nominal por caminho adicional
pertencente àquela inclinação, e alimenta apenas a Inclinação Total daquela
inclinação.

| Estado da inclinação | LV4 | LV5 | LV6 |
|---|---|---|---|
| Aberta | 2 | 2 | 2 |
| Aprofundada | 3 | 3 | 3 |

Largura dentro de uma inclinação aprofunda a região. Largura entre inclinações abre o
leque, ao custo de comprar e aprofundar a inclinação nova antes.

---

## 5. Grau e complexidade

Um caminho é descrito por dois eixos, e eles nunca se cruzam.

**Grau** mede amplitude, que é quanto da superfície de aplicação da perícia o verbo do
caminho cobre. São cinco graus, de Ampla a Pontual. O pagamento corre na direção
inversa da cobertura: o verbo que dispara raramente paga mais alto por disparo. O grau
é propriedade do caminho, declarado quando ele é criado, e não muda com o nível, com o
estado nem com o praticante.

**Complexidade** vai de 1 a 5 e mede profundidade. Ela governa o orçamento de
capacidade do caminho, que é quantos verbos ele concede e de que porte. Complexidade
não entra em teste.

A independência entre os eixos é obrigatória por duas razões. Se a complexidade também
pagasse em número, o caminho profundo seria estritamente superior ao raso, e como o
preço em XP é o mesmo para os dois, o caminho raso deixaria de ser comprado. E a
dificuldade de aprender já é cobrada uma vez na curva de custo de XP, de modo que
cobrá-la de novo aqui taxaria o mesmo obstáculo duas vezes.

As quatro combinações são desenhos legítimos. Um caminho pode ser profundo e amplo,
raso e cirúrgico, ou qualquer arranjo entre os dois eixos.

---

## 6. Como um teste de perícia se lê

```
teste = Base Total
      + atributo regente
      + [Inclinação Total, se a situação pertence a ela]
      + [Especialização do caminho, se o problema é resolvido pelo verbo dele]
```

Uma inclinação e uma especialização por teste, no máximo. Possuir várias amplia a
cobertura do praticante e nunca empilha bônus sobre o mesmo teste.

A mesa reconhece três estados de leitura.

**Fora da inclinação.** O praticante soma Base Total e atributo. É aqui que a régua de
faixas permanece plenamente audível, com o atributo respondendo por parcela grande do
total, e é este o valor de referência do praticante no domínio.

**Dentro da inclinação e fora do caminho.** Entra a camada larga. O praticante opera
na região do domínio para a qual se inclinou, sem a rota específica que resolveria
aquele problema.

**Dentro do caminho.** Entra a camada estreita, e o teste alcança o dobro do primeiro
estado. É a âncora da seção 7 tomando forma na mesa.

Nunca entram no teste a complexidade, que vive no orçamento de capacidade, e o efeito
de transcendência, que opera sobre condições e escopo.

**Efeito que lê o teste.** Uma perícia pode declarar efeitos cuja saída se calcula a
partir do valor do teste, do mesmo modo que o portão da seção 8 lê a Base Total. Ler o
terminal é permitido; o que a seção 4.1 proíbe é camada alimentar camada. Cada grandeza
declarada assim lê a especialização de um único caminho, para que caminhos distintos
permaneçam escolhas distintas.

### 6.1 Largura presumida na publicação de valores

O parágrafo anterior autoriza o efeito a ler o valor do teste, e o teste varia com a
largura do praticante, porque cada caminho adicional soma bônus geral à Base Total e
bônus de inclinação à Inclinação Total. Publicar um número resolvido exige então
declarar quantos caminhos a leitura presume, e essa declaração não pode ser escolhida
documento a documento.

**A regra.** A largura presumida é a menor largura em que o efeito pode existir.

**Efeito de caminho lê largura mínima.** O praticante pode possuir aquele caminho e
nenhum outro, e por isso a publicação lê a Base Total e a Inclinação Total sem bônus de
largura alguma, somadas ao atributo regente e à especialização do próprio caminho no
estado do nível.

**Efeito de transcendência lê largura de ápice.** A seção 3.4 condiciona a
transcendência à posse de todos os caminhos da inclinação, e por isso o praticante que
dispõe do efeito necessariamente carrega os bônus de largura de todos eles. A publicação
lê a Base Total e a Inclinação Total com os bônus de todos os caminhos da inclinação
aplicados, somadas ao atributo regente e à especialização transcendida do caminho
declarado como fonte da leitura.

**Consequência para a leitura em mesa.** O número publicado é piso e não teto. O
praticante de largura maior lê valor maior por aplicação da própria fórmula, e o
documento não republica a tabela para cada configuração possível.

**Consequência para a produção.** Toda grandeza resolvida publicada em documento de
perícia declara o caminho de origem da leitura, e a conferência do valor é reprodutível
a partir da seção 4 e desta seção. Divergência entre o número publicado e a fórmula é
erro do documento e não variante de convenção.

**Exemplo resolvido.** Perícia LV5, três caminhos possuídos, dois deles na mesma
inclinação, inclinação Aprofundada, caminho ativo de grau Definida no estado
Aprofundado.

```
Base de Nível          45
Bônus geral            +8    (dois caminhos adicionais, 4 cada)
Base Total             53

Inclinação Nominal     22
Bônus de inclinação    +3    (um caminho adicional na mesma inclinação)
Inclinação Total       25

Especialização         49    (Definida Aprofundado em LV5)

Teste em contexto pleno = 53 + 25 + 49 + atributo regente
```

---

## 7. Fundamento das proporções

Esta seção registra de onde vêm os números, com a origem de cada afirmação etiquetada.

**Medido.** O efeito de especialização foi quantificado em especialistas de mesma
força geral que diferiam apenas na área de foco. Dentro da própria área, cada um
recordava e resolvia problemas no nível de praticantes um desvio padrão inteiro acima
em habilidade geral. A unidade do achado é relacional: especialização substitui classe
de competência.

**Medido.** Dentro da própria área, a estratégia do especialista muda, com busca mais
profunda e menos larga, e o conhecimento específico do domínio pesa mais que método de
propósito geral. O achado fundamenta a existência do orçamento de capacidade ao lado
do bônus numérico: especialidade paga em modo de operação, não apenas em margem.

**Medido, com ressalva.** Fora do laboratório, a experiência específica em um
procedimento responde por parcela dominante da diferença de desfecho entre
praticantes, e credencial de especialista substitui em parte o volume bruto de
prática. O achado confirma a direção e não oferece unidade convertível para teste.

**Interpretado.** A âncora adotada pelo sistema é a dobra: dentro do próprio padrão, o
especialista rende o dobro do que rende fora dele. A origem é experimento de memória e
recuperação de configurações, e a conversão para teste de ação é interpretação de
design adotada por decisão explícita. O sistema a trata como sinal de direção com
magnitude escolhida, e não como medida transportada.

**Limite.** A parcela da variância de desempenho explicada pela prática deliberada
fica bem abaixo da metade nos domínios competitivos estudados. O limite sustenta a
decisão de manter o atributo presente e audível no teste, em vez de deixar a perícia
responder sozinha pelo resultado.

**Proposta.** A conversão da dobra em pontos foi feita contra o par de nível e
atributo regente que a economia de XP já exige em cada nível, e a especialização de
cada nível é o que falta para o teste em contexto alcançar o dobro do teste fora de
contexto, descontada a inclinação. O split entre inclinação e especialização segue a
paridade de valor esperado da seção 2.

---

## 8. Portão de capacidade

Uma perícia controla o acesso às capacidades escalonadas do seu domínio. O rank de
técnica é a instância dessa regra no domínio shinobi, e a qualificação formal é a
instância dela em domínios civis.

```
portão = Base Total + atributo regente
```

Inclinação e especialização ficam de fora. Capacidade destravada é permanente, e não
pode depender da situação em que o praticante se encontrava quando a comprou.

Bônus permanente de vantagem ou desvantagem entra no portão, pela mesma soma real que
já traz o atributo regente. O bônus não depende de situação alguma, e por isso não se
qualifica para a exclusão que barra inclinação e especialização. Bônus condicional, que
só se aplica quando a situação declarada se cumpre, fica de fora do portão pela mesma
razão que já vale para as duas primeiras.

O atributo regente entra no portão porque a régua de exigências precisa alcançar a
soma real de quem se candidata. Lida só pela Base, ela nasce curta e libera por
existência o que deveria custar formação.

**Portão duplo.** Quando um domínio separa magnitude de precisão, duas perícias
governam a mesma capacidade. A perícia de magnitude escalona pelo porte da capacidade.
A perícia de precisão não é indexada por esse porte, porque volume e refinamento
crescem por eixos distintos, e a exigência de refinamento de uma capacidade modesta
pode superar a de uma capacidade vasta.

A instância shinobi do portão duplo pareia a perícia de elemento com a perícia de
moldagem de chakra. A coluna de precisão está publicada em *Controle de Chakra*, que
declara a régua de exigência em degraus lidos do portão e o critério pelo qual cada
compêndio atribui o degrau de uma capacidade.

---

## 9. Transcendência

O LV6 muda a natureza da perícia em vez de aumentar sua grandeza.

**Requisito.** Todos os caminhos possuídos precisam estar Aprofundados.

**Efeito estrutural.** Todos os caminhos possuídos passam ao estado Transcendido de
uma vez. A elevação acontece uma única vez, e transcendências adicionais compram
efeito novo em vez de repetir elevação.

**Efeito categórico.** A transcendência entrega uma habilidade especial que altera
condição, escopo ou categoria de operação. Remover a condição de uma camada
condicional é um dos efeitos possíveis, desenhado dentro de cada perícia, e não um
direito automático do nível.

A transcendência não soma valor plano ao teste. O que o investimento do último nível
compra é permanência e elevação de categoria.

---

## 10. Economia

A autoridade sobre custos vive no *Manual de Economia de XP*. Esta seção declara
apenas o que a estrutura de perícia exige dela.

Perícia é categoria de custo própria, com valor crescente por nível e o LV6
concentrando a maior parcela do investimento total. A primeira inclinação está
embutida no custo do LV2 e seu aprofundamento no do LV3. O primeiro caminho está
embutido no custo do LV4 e seu aprofundamento no do LV5. A primeira transcendência
está embutida no custo do LV6.

**Aquisição adicional custa metade do valor da aquisição original**, sem tarifa por
proximidade. A razão é o reaproveitamento de conhecimento: quem domina uma região do
domínio já pagou o entendimento comum a todas elas, e o que resta comprar é a
diferença. A regra vale igualmente para inclinações e caminhos, e igualmente entre
caminhos da mesma inclinação e de inclinações distintas, porque medir proximidade
entre rotas é julgamento, e preço formado por julgamento não se audita.

Cada nível de perícia exige um nível mínimo do atributo regente, o que impede maestria
alta em corpo ou mente incompatível com ela.

---

## 11. Dependências e camadas pendentes

**Alimentam este núcleo.** A régua de faixas de atributo, que fixa o pareamento do
teto de Base de Nível. A economia de XP, que fixa custos, requisitos de atributo por
nível e o preço da aquisição adicional.

**Consomem este núcleo.** O manual de criação de perícias, os documentos de perícia
individuais, os compêndios de capacidade que declaram requisitos de portão, e o motor
de dano nos domínios em que o nível de perícia entra na fórmula.

**Pendentes.** A régua de dificuldade usada pelo narrador para calibrar testes simples,
que é camada externa e precisa nascer contra a escala de soma descrita na seção 6.
Enquanto ela não existir, nenhum efeito de perícia resolve por dificuldade arbitrada,
e a resolução se dá por oposição a outro teste, por limiar lido de um teste ou por
categoria, conforme o Manual de Criação de Perícias.

**Tensão registrada.** Sem teto de caminhos, o bônus geral de largura cresce sem
limite superior. Os freios são econômicos e temporais: caminho em inclinação nova
exige comprar e aprofundar a inclinação antes, e a transcendência exige todos os
caminhos Aprofundados. A leitura adotada é que esses freios bastam e que a construção
de largura extrema é escolha legítima de alto custo.
