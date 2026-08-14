---
id: core.quick-calculations
title: "Cálculos Rápidos de Testes"
version: 1
layer: core
type: reference-table
status: final
---

# Cálculos Rápidos de Testes

Este documento reúne, numa única leitura, os números que o Núcleo de Perícias e o Núcleo de Combate produzem separadamente. Ele não declara regra nova em ponto nenhum. Cada fórmula publicada aqui é a mesma fórmula do documento dono, citada com a seção de origem, para que a mesa monte o número da ficha sem percorrer os dois núcleos inteiros a cada teste.

## 1. As três saídas terminais

Toda perícia produz até três números distintos, e cada um responde a uma pergunta diferente.

**Portão.** Mede acesso.

```
portão = Base Total + atributo regente
```

Inclinação e especialização ficam de fora, porque capacidade destravada é permanente e não pode depender da situação em que o praticante estava quando a comprou. Bônus permanente de vantagem ou desvantagem entra, pela mesma soma real que já traz o atributo regente; bônus condicional fica de fora, pela mesma razão que exclui inclinação e especialização. O portão é o que o Manual de Requisitos de Técnica lê para destravar rank e moldagem, na régua que [Cálculos Rápidos de Naruto](../worlds/naruto/quick-calculations.md) publica por cenário.

**Teste.** Resolve ação em mesa.

```
teste = Base Total
      + atributo regente
      + Inclinação Total, se a situação pertence à inclinação
      + Especialização, se o verbo do caminho resolve o problema
```

No máximo uma inclinação e uma especialização entram no mesmo teste. Possuir várias amplia a cobertura do praticante e nunca empilha bônus sobre o mesmo teste.

**Resistência de campo própria.** Algumas perícias declaram um terminal adicional, com composição própria. Barreira publica `resistência = Base Total + SAB + Inclinação Total`, sem especialização, porque a firmeza pertence ao ofício e não à rota. Cada terminal desses é declarado pela perícia dona, e este documento não os repete.

Portão e teste coincidem numericamente fora de inclinação e caminho, e é por isso que recebem rótulo separado. Servem a perguntas diferentes mesmo quando o número é igual.

## 2. As cinco grandezas e os quatro movimentos do LV6

Toda fração do sistema lê a Base de Nível, e nenhuma camada lê o valor total de outra camada. Cada bônus entra na soma final uma única vez.

| Termo | Definição | Natureza |
|---|---|---|
| Base de Nível | função exclusiva do nível | fonte única das frações |
| Base Total | Base de Nível mais bônus gerais de largura | terminal |
| Inclinação Nominal | fração da Base de Nível pelo estado da inclinação | insumo do bônus de largura dela |
| Inclinação Total | Inclinação Nominal mais bônus de largura dela | terminal |
| Especialização | fração da Base de Nível por grau e estado do caminho | terminal |

**Base de Nível**, por nível de perícia:

| LV1 | LV2 | LV3 | LV4 | LV5 | LV6 |
|---|---|---|---|---|---|
| 12 | 24 | 32 | 40 | 45 | 50 |

**Inclinação Nominal**, fração da Base de Nível pelo estado:

| Estado | Fração | LV2 | LV3 | LV4 | LV5 | LV6 |
|---|---|---|---|---|---|---|
| Aberta | 0,35 | 8 | 11 | 14 | 15 | 17 |
| Aprofundada | 0,50 | 12 | 16 | 20 | 22 | 25 |

**Especialização**, fração da Base de Nível por grau e estado do caminho:

| Grau | Aberto | Aprofundado | Transcendido |
|---|---|---|---|
| 1 Ampla | 0,75 | 0,90 | 1,00 |
| 2 Larga | 0,85 | 1,00 | 1,10 |
| 3 Definida | 0,95 | 1,10 | 1,20 |
| 4 Estreita | 1,05 | 1,20 | 1,30 |
| 5 Pontual | 1,15 | 1,30 | 1,40 |

Valores resolvidos, por nível:

| Grau | LV4 Aberto | LV4 Aprof. | LV5 Aberto | LV5 Aprof. | LV6 Aberto | LV6 Aprof. | LV6 Transc. |
|---|---|---|---|---|---|---|---|
| 1 Ampla | 30 | 36 | 33 | 40 | 37 | 45 | 50 |
| 2 Larga | 34 | 40 | 38 | 45 | 42 | 50 | 55 |
| 3 Definida | 38 | 44 | 42 | 49 | 47 | 55 | 60 |
| 4 Estreita | 42 | 48 | 47 | 54 | 52 | 60 | 65 |
| 5 Pontual | 46 | 52 | 51 | 58 | 57 | 65 | 70 |

Nenhum caminho existe abaixo do LV4 na progressão padrão, porque o primeiro caminho chega ligado à inclinação já aprofundada no LV3. A única exceção é a inclinação de extensão manifestada, tratada na Seção 2.4.

**Bônus de largura.** Caminho adicional soma bônus geral, que alimenta só a Base Total, e bônus de inclinação, que alimenta só a Inclinação Total da inclinação a que pertence.

| Nível | Bônus geral por caminho adicional |
|---|---|
| LV4 | 4 |
| LV5 | 4 |
| LV6 | 5 |

| Estado da inclinação | Bônus de inclinação por caminho adicional dela |
|---|---|
| Aberta | 2 |
| Aprofundada | 3 |

A contagem começa no segundo caminho, porque o primeiro vem embutido no custo do nível em que nasce.

### 2.1 O que cada aquisição faz

| Aquisição | Move o teste geral | Move a inclinação dela | Move o caminho |
|---|---|---|---|
| Caminho adicional | sim, pelo bônus geral | sim, pelo bônus de inclinação | não |
| Inclinação adicional | não | cria uma Inclinação Total nova, condicionada | não |
| Transcendência | não soma valor plano | eleva todos os caminhos possuídos | eleva especialização de todos, efeito categórico de um |

Caminho compra largura. Inclinação compra território. Transcendência compra permissão.

### 2.2 A subida de LV5 para LV6, em quatro movimentos

A subida ao LV6 não é um nível que soma pontos. São quatro eventos separados, e apenas um deles não produz número.

**Primeiro, a Base de Nível sobe de 45 para 50.** Toda fração lê a Base de Nível, e a subida se propaga em cascata sobre Inclinação Nominal, Especialização e bônus geral, sem que isso seja efeito de transcendência.

**Segundo, a transcendência eleva ao estado Transcendido todos os caminhos que o praticante possui**, de uma vez. A exigência para adquiri-la é que todos os caminhos possuídos estejam Aprofundados. Domínio parcial não transcende, e a exigência existe para impedir a construção de largura infinita sem custo de aprofundamento.

**Terceiro, a transcendência entrega um efeito categórico dirigido a uma vertente nomeada.** Apenas o caminho que a transcendência tocar recebe a versão elevada dos próprios efeitos. Os demais caminhos possuídos mudaram de estado no movimento anterior, sem ganhar efeito novo.

**Quarto, caminho adicional continua somando bônus geral**, cinco por caminho a partir do LV6.

Um praticante com três caminhos possuídos e uma transcendência dirigida ao segundo lê Especialização transcendida nos três e efeito elevado apenas no segundo.

### 2.3 Largura presumida na publicação

A largura presumida é a menor largura em que o efeito publicado pode existir. Efeito de caminho lê largura mínima, sem bônus de largura algum. Efeito de transcendência lê largura de ápice, com os bônus de todos os caminhos da própria inclinação aplicados. O número publicado é piso e nunca teto, e o praticante de largura maior lê valor maior pela mesma fórmula.

### 2.4 Inclinação de extensão manifestada

Inclinação destravada por manifestação corre por fora da progressão padrão. Compra-se e aprofunda-se por aquisição adicional, inclusive em nível baixo da perícia hospedeira, e recebe capstone próprio, chamado Ápice, distinto da transcendência de LV6. O Ápice exige apenas que os caminhos daquela inclinação estejam Aprofundados, não toca o estado dos caminhos das demais inclinações, e não conta como a transcendência de LV6 para nenhum efeito.

As duas extensões publicadas no cenário Naruto pisam no LV4 da perícia hospedeira, e nenhuma delas tem preço ou tabela de Especialização abaixo dele.

## 3. Pares de atributo fora de perícia adquirida

Nenhum documento de núcleo publica uma lista fechada de pares de atributo para ação resolvida sem perícia adquirida. O que existe em textos de vantagem e desvantagem é linguagem solta de efeito, nunca uma categoria de teste do sistema. Até que um documento de núcleo publique essa lista, a mesa resolve ação fora de perícia pela soma de dois atributos que o Mestre declara caso a caso.

## 4. Cálculos de combate do Núcleo

As grandezas abaixo pertencem ao Núcleo de Combate e valem para qualquer cenário que o consome sem redefinição.

| Grandeza | Fórmula |
|---|---|
| Potência | (FOR + VEL) × 25 |
| Guarda | DEF × 5 |
| Absorção | RES × 3, piso de 10% da Energia original sempre passando |
| Golpe | (FOR + VEL) ÷ 3 |
| Esquiva | VEL ÷ 6 |
| Bloqueio | DEF ÷ 6 |
| Fôlego | RES ÷ 2 |
| Limiar | RES × 2 |
| Limiar de Crítico | PRE ÷ 2 |
| Limiar de Esquiva | base 50, ajustado pelo eixo de evitabilidade da obra |

Golpe não é dano. É o custo em Esforço de desferir o ataque, multiplicado pelo Esforço da arma empunhada. Potência é a energia bruta antes de qualquer desconto de entrega, e não o dano que chega ao corpo do alvo.

**A sequência de resolução do ataque**, doze passos, sempre na mesma ordem: declaração, alcance, ajuste do Limiar de Esquiva pelo eixo de evitabilidade, escolha de resposta defensiva, teste de Esquiva, teste de Crítico, Energia, Impacto contra a Guarda, Absorção, saldo no PV, riders, custos e aftermath.

```
Energia  = Potência × coeficiente de entrega × multiplicador de Tipo + Fator de Técnica, ×1,5 se crítico
Impacto  = Energia × coeficiente de impacto
```

O Fator de Técnica só existe quando o caminho da perícia o declara explicitamente, lendo a Especialização daquele caminho. Um golpe comum não carrega Fator de Técnica nenhum.

**Coeficientes por classe de arma:**

| Classe | Esforço | Coeficiente de impacto |
|---|---|---|
| Arma de precisão | 0,8 | 0,8 |
| Lâmina curva | 1,0 | 1,0 |
| Arma pesada | 1,3 | 1,3 |

O coeficiente de entrega do golpe comum é 0,20 em toda classe. Ele descreve a forma de entrega, e não a arma que carrega o golpe até o alvo.

**Esforço por ação:** o Golpe da ficha multiplicado pelo Esforço da arma. Cadência sobe o custo em ×1,5, ×2 e ×3 por degrau, porque comprimir esforços máximos na mesma janela custa mais que espaçá-los. Esquiva paga pela Reação gasta. Bloqueio dobra quando resulta em Quebra de Guarda. Deslocamento paga por fração do percurso máximo: um quarto custa VEL ÷ 2, metade custa VEL, o percurso inteiro custa VEL × 2, a Carga custa VEL × 4.

**Quebra de Guarda.** Impacto que supera a Guarda restante passa inteiro, zera a Guarda e impõe o estado até o fim do turno seguinte de quem quebrou. Durante ele a Guarda não recarrega, o Bloqueio fica indisponível, e o Limiar de Esquiva do quebrado cai por 0,8. Uma Ação Completa gastando o Esforço de um Bloqueio encerra o estado no ato.

**Exaustão Física**, cinco graus por PS restante, com cinco penalidades nomeadas em vez de um corte único em atributo:

| Grau | PS restante | Recarga da Guarda | Potência | Limiar de Esquiva | Cadência | Deslocamento |
|---|---|---|---|---|---|---|
| Inteiro | 75% ou mais | 50% | cheia | cheio | cheia | cheio |
| Leve | 50 a 74% | 40% | cheia | cheio | cheia | cheio |
| Moderado | 25 a 49% | 30% | −10% | ×0,9 | cheia | −10% |
| Grave | 1 a 24% | 20% | −20% | ×0,8 | um degrau a menos | −25% |
| Crítico | 0% | 10% | −30% | ×0,7 | nenhum degrau | −50% |

Absorção nunca degrada com o cansaço. Fôlego e Limiar leem RES, que nenhum grau de Exaustão reduz.

**Motor de manobras**, quatro entradas, cada uma teste oposto por par nomeado:

| Manobra | Teste ativo | Teste oposto | Resultado |
|---|---|---|---|
| Agarrar | FOR + DES | FOR + VEL | Imobilização |
| Derrubar | FOR + VEL | DEF + VEL | Queda e Prostração |
| Empurrar | FOR + VEL | DEF + FOR | deslocamento forçado, metros pela margem |
| Desarmar | DES + VEL | DES + FOR | arma no chão |

**Cerco**, multiplicador do Limiar de Esquiva por atacantes engajados com o mesmo alvo:

| Atacantes | Limiar de Esquiva |
|---|---|
| 1 | cheio |
| 2 | ×0,85 |
| 3 | ×0,70 |
| 4 ou mais | ×0,60 |

Todo multiplicador de Limiar de Esquiva do sistema, venha de Exaustão, de Guarda quebrada ou de cerco, se multiplica com os demais sem exceção, respeitando piso de 5 e teto de 95.

**Área e campo.** Área alcança tudo Engajado com o centro escolhido. Campo alcança tudo até a banda Curta do centro, ocupando o terreno enquanto durar. Nenhuma das duas distingue aliado de inimigo.

**Dano de fonte sem ficha**, motor de queda:

```
altura efetiva = altura em metros − VEL, teto de 150 metros
Potência da queda = altura efetiva × 60
```

Sem Guarda e sem crítico. Um teste de VEL somado a DES autoriza a subtração cheia da altura, e a falha concede metade.

## 5. Bônus externos ao teste

A penalidade percentual de status incide sobre o atributo bruto, nunca sobre Base Total, Inclinação Total ou Especialização, porque nenhuma das três lê atributo. A redução resolve antes de o atributo entrar em qualquer soma.

| Fonte | Forma | Onde incide |
|---|---|---|
| Vantagem, bônus nomeado de teste | soma fixa | após as quatro parcelas do teste |
| Escada de Afinidade | soma fixa, publicada por cenário | após as quatro parcelas do teste |
| Penalidade de status | redução percentual sobre o atributo | antes do atributo entrar na soma |

Fontes distintas se somam entre si. O corpus não publica caso de duas fontes competindo pelo mesmo alvo.

## 6. As quatro perícias comuns

| Perícia | Regente | Categoria | Portão de rank |
|---|---|---|---|
| Kenpo | DES | Físico ×1,0 | Base Total + DES, sem consumidor publicado |
| Taekwondo | VEL | Físico ×1,0 | Base Total + VEL, sem consumidor publicado |
| Taichi | DES | Físico ×1,0 | Base Total + DES, camada superclasse |
| Tantō | DES | Físico ×1,0 | não controla portão de rank, porque não existe compêndio de obras dela para escalonar acesso |

As quatro leem a fórmula de teste padrão da Seção 1 e os terminais do Núcleo de Combate da Seção 4, sem terminal próprio adicional.

## Pendências

O ×25 de Potência não tem derivação publicada. `core/system-core.md` §6 declara a meta de ritmo de combate, doze a dezessete turnos para um ataque básico derrubar um par, e afirma que o número foi derivado por simulação de fichas reais sem publicar essa simulação. A pendência é aberta contra `core/combat-core.md` v1.

`core/system-core.md` não publica lista fechada de pares de atributo para ação fora de perícia adquirida, conforme a Seção 3 acima.

## Dependências

`core/skills-core.md` v2.2, dono da Base de Nível, das frações de inclinação e especialização, e da leitura de teste e portão. `core/system-core.md` v3.2, dono da resolução de testes e do Ritmo de Combate. `core/combat-core.md` v1, dono de toda a Seção 4. `core/skill-authoring.md` v7.3 §13.1, dono da inclinação de extensão manifestada. `core/status-effects.md` v2.5, dono da penalidade percentual de status. `core/xp-economy.md` v2.5, dono do preço de caminho e transcendência.
