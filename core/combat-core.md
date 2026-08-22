---
id: core.combat-core
title: "Núcleo de Combate"
version: 3
layer: core
type: core-layer
status: final
source-file: Nucleo_de_Combate_v2.md
---

# Núcleo de Combate

**Camada Fundamental, fechada para modificação.**

## 1. Abertura e escopo

Um combate neste sistema é uma sequência de rodadas de seis segundos, e cada rodada resolve pela mesma ordem de decisões. Um soco, uma investida de arma e a obra mais elaborada do repertório de um personagem passam pelos mesmos doze passos, e é essa uniformidade que garante que duas mesas cheguem ao mesmo número a partir da mesma ficha. O corpo entra em combate com um pool de fôlego que se gasta a cada ação e recarrega entre uma rodada e outra, uma barra de guarda que detém energia enquanto tiver pontos e cobra fôlego por cada ponto que detém, e uma capacidade de absorção que nunca falha por completo enquanto houver corpo para resistir.

Este documento publica a economia de ação e de tempo, o espaço do combate e o deslocamento dentro dele, o início e o fim de um confronto, a sequência que resolve todo ataque, o motor de dano com as camadas de defesa, os quatro vetores pelos quais a energia alcança o tecido, a economia inteira de fôlego, o que o cansaço faz ao corpo, o motor de manobras, a vantagem de cercar um alvo, a resolução de área e campo, o dano de uma queda ou de qualquer fonte sem ficha própria, e o Estado Elemental que reescreve o que o corpo é diante de um vetor declarado. Ele consome sem redefinir a régua de atributos, a resolução de testes e a iniciativa do Núcleo do Sistema, os pools de PV, PS e PM, o catálogo de condições do Sistema de Efeitos de Status, e os dois pontos de extensão do Manual de Criação de Poderes que todo golpe ofensivo lê, o eixo de evitabilidade que mede quão evitável uma obra é por construção e a forma de dois termos que separa o que se converteu do que a maestria entrega por si. Cada cenário publica a instância concreta desses dois pontos, e este documento lê o que a instância entregar sem conhecer o nome dela.

Um leitor procurando o dano de uma arma nomeada, o catálogo de manobras de uma escola de combate específica ou o custo em recurso de uma obra batizada está no documento errado. O primeiro caminho certo é o compêndio que publicou a obra; o segundo é o manual tradutor do cenário que instanciou o eixo de evitabilidade, a tabela de Assinatura e os coeficientes da forma de dois termos para aquele mundo.

## 2. Tempo e economia de ação

A rodada dura seis segundos e é a menor fatia de tempo que o sistema resolve em separado. Dentro dela, cada combatente dispõe de uma Ação Completa, de uma Ação de Movimento e de uma Reação, e a Reação é a peça que muda o cálculo de qualquer cerco. Um corpo responde a uma ameaça de cada vez, e a segunda ameaça na mesma janela de seis segundos encontra alguém que já comprometeu o próprio equilíbrio respondendo à primeira. É essa limitação fisiológica que dá valor a atacar em conjunto, e a Seção 10 fecha a régua que ela produz.

A Reação se gasta numa lista fechada de quatro respostas. Esquivar de um golpe, disputar a distância contra quem tenta fechar ou abrir espaço, cortar o trajeto de um efeito que passa perto o bastante para ser interceptado, ou interromper o contato de uma entrega de energia pela régua da Seção 6.9. Nenhuma outra fonte concede Reação adicional na mesma rodada; uma obra que declare conceder uma soma-se a esta lista sem multiplicá-la.

| Recurso da rodada | Quantidade |
|---|---|
| Ação Completa | 1 |
| Ação de Movimento | 1 |
| Reação | 1, entre esquiva, Disputa de Distância, Corte de Trajeto e Interrupção de Contato, ou a que a obra conceder |

A iniciativa segue a regra já publicada pelo Núcleo do Sistema, o par VEL somado a SAB mais 1d6, com o maior valor agindo primeiro.

A Cadência é a capacidade de encaixar mais de uma ação na mesma rodada, e ela se lê da razão entre a VEL do combatente e a VEL do oponente mais rápido com quem ele está engajado. Razão de 1,5 ou mais concede uma ação extra, razão de 2,5 ou mais concede duas, e duas é o teto qualquer que seja a diferença de velocidade. Cada ação extra paga o próprio Esforço pela escada da Seção 7. A Cadência mede vantagem relativa dentro do par que está trocando golpes, e por isso o mesmo combatente pode ter uma ação extra contra um oponente e nenhuma contra outro na mesma cena.

O Golpe Rápido da Seção 6.1 custa meia ação, de modo que uma única ação comporta dois deles. A Ação Completa e cada ação extra da Cadência se gastam inteiras ou em duas metades, e nenhuma fração menor que a metade existe.

## 3. Espaço e deslocamento

A distância neste sistema é a relação entre dois combatentes. Cada par mede a própria régua, e é por isso que dois personagens podem estar em bandas diferentes em relação a um terceiro sem que isso seja contradição alguma. O combate se sustenta sobre uma rede de distâncias entre pares, e cada ataque, cada deslocamento e cada disputa de espaço lê apenas o par que importa naquele instante.

| Banda | Alcance |
|---|---|
| Engajado | contato |
| Curta | até 30 metros |
| Média | até 120 metros |
| Longa | até 500 metros |
| Extrema | até 2.000 metros |

Cada combatente se move até VEL × 10 metros por rodada, gastando a Ação de Movimento. Terreno difícil conta cada metro percorrido como dois, e terreno impraticável conta como quatro, de modo que o mesmo deslocamento físico cobra o dobro ou o quádruplo do orçamento de metros. Carregar peso além do que o corpo sustenta sem esforço gasta a Ação Completa no lugar da Ação de Movimento e dobra os metros necessários para cobrir a mesma distância.

Disputa de Distância e Corte de Trajeto são duas das quatro Reações que fecham a lista da Seção 2. A primeira decide se um combatente consegue fechar ou abrir espaço contra a vontade de outro; a segunda toma um efeito alheio em trânsito e o desvia de rota sem alterar o destino de quem o desviou. O custo em Esforço das duas está na escada da Seção 7, e a competência para vencer o teste oposto que cada uma exige mora na perícia ou na vantagem que a ficha do combatente declarar.

## 4. Início e fim do combate

A surpresa resolve antes da iniciativa, numa rodada própria que só o lado emboscador usa. Um sistema que trata a emboscada como modificador de iniciativa produz a cena em que quem armou a cilada age depois de quem caiu nela, porque um dado ruim apaga horas de planejamento. O que uma mesa quer de uma emboscada bem executada é alcançar o alvo antes que ele consiga reagir, e conceder ao emboscador uma rodada inteira antes de a iniciativa normal começar a contar garante exatamente isso. O preço dessa rodada inteira é pago em três travas que impedem que a emboscada vire execução automática de um golpe que ninguém consegue evitar.

O direito à rodada de Surpresa se ganha em teste oposto, a furtividade do emboscador contra a percepção do alvo, resistida pelo par SAB e PRE. O teste é individual, então percepção parcial é o caso comum: um grupo emboscado raramente percebe por inteiro, e só quem falhou o próprio teste perde a rodada.

Na rodada de Surpresa apenas o lado emboscador age. Cada emboscador dispõe da Ação Completa e da Ação de Movimento, e de nada mais, sem Cadência e sem Reação, porque a rodada existe para alcançar o alvo despreparado e não para multiplicar ataques sobre ele.

Quem foi surpreendido conta como alvo indefeso, pela régua da Seção 10, apenas durante essa rodada e apenas se não tinha nenhuma forma de perceber a ameaça chegando. Um guarda que sabia que havia perigo na floresta mas não viu de onde o golpe veio contesta o ataque com o lado defensivo inteiro, porque o corpo dele já estava alerta ainda que os olhos não tivessem encontrado a origem a tempo. É a diferença entre não ver o ataque chegar e não saber que havia ataque algum para esperar, e é a distinção que a mesa aplica toda semana.

A Surpresa vale uma vez por combate. Um segundo grupo que se aproxime durante a mesma luta já encontra todos alertas, e a régua não se repete.

O combate termina por incapacitação de um dos lados, por rendição aceita, ou por fuga. Fuga é alcançar a banda Extrema em relação a todo perseguidor e sustentá-la por uma rodada inteira sem que ninguém vença a Disputa de Distância contra quem foge. É uma aposta de recurso e não uma saída garantida, porque a perseguição consome o fôlego dos dois lados na mesma proporção que qualquer outro deslocamento em combate.

## 5. A sequência de resolução do ataque

Todo golpe deste sistema, do soco mais simples à obra mais elaborada do repertório de um personagem, resolve pela mesma sequência de doze passos. É essa uniformidade que garante que duas mesas cheguem ao mesmo número a partir da mesma ficha, e nenhuma obra pula passo algum, mesmo quando um deles não muda nada no resultado.

| Passo | Resolução |
|---|---|
| 1 | Declaração da ação, do alvo ou do centro, da arma ou obra empregada, e do vetor pelo qual ela entrega a energia |
| 2 | Alcance pela Banda Mínima e Máxima da obra. Acima da máxima o golpe não alcança. Abaixo da mínima o coeficiente de entrega cai um degrau |
| 3 | O eixo de evitabilidade que a obra declarar, na escala que o cenário publica, incide sobre o teste de conexão do passo 5 como camada própria |
| 4 | O defensor gasta a Reação escolhendo a resposta. Quem não gasta Reação alguma não contesta a conexão, e o golpe alcança o corpo sem teste |
| 5 | Conexão: teste oposto de base cinquenta, a Velocidade efetiva da obra contra a VEL somada à DES e ao bônus de esquiva do alvo. Falha do atacante encerra a resolução |
| 6 | Crítico: o atacante rola d100 contra o próprio Limiar de Crítico |
| 7 | Energia: o corpo resolve pela forma da Seção 6.1, a obra resolve pelo motor que o manual tradutor do cenário publica, e os dois somam o Fator de Técnica que a obra declarar. O crítico multiplica o total por 1,5 |
| 8 | Estado Elemental do alvo, quando declarado, pela Seção 13 |
| 9 | Guarda: a fração da barra que o vetor engaja detém energia até onde os pontos alcançam, consumindo barra e drenando PS do defensor na mesma proporção. Energia acima da fração engajada zera a barra e segue adiante |
| 10 | Absorção: da energia que passou, alcança o corpo a fração E dividida por E somado à Absorção |
| 11 | O saldo entra no PV do alvo, somado à Guarda Ferida quando o vetor é Corte |
| 12 | Riders declarados pela obra, com o crítico elevando um grau, e os custos da rodada: Esforço, PM quando aplicável, o teto de saída da reserva relevante e condições sobre o próprio usuário |

O lado ofensivo do teste de conexão lê a Velocidade efetiva da obra, grandeza que o manual tradutor do cenário publica a partir da celeridade do meio empregado, da compressão que o coeficiente de entrega declara, do volume convertido que a propele e da maestria da mão que dispara. Tudo que o atacante traz para o teste já vive dentro dessa grandeza, e nada dele soma por fora dela.

A obra portada pelo corpo, que o executor leva até o alvo em vez de projetar, não lê celeridade alguma. Ela resolve como golpe corporal, o corpo do executor contra a esquiva do alvo, e o lado ofensivo fecha em VEL somada à DES e ao bônus geral da perícia ofensiva. O golpe comum de punho ou de arma resolve pela mesma leitura, porque é o corpo que o entrega em ambos os casos, e é isso que faz o teste ficar simétrico quando os dois lados são corpos. Obra de área e obra de campo não resolvem este teste, pela régua da Seção 11.

O crítico multiplica a Energia antes das defesas, porque a energia extra do golpe bem colocado encontra a mesma guarda e o mesmo osso que a energia comum, e as camadas de defesa nunca sabem se o que chega até elas veio de um crítico ou não.

A rolagem do passo 6 convive com a ausência de rolagem de acerto porque as duas perguntam coisas diferentes. O passo 5 já decidiu que o golpe conectou, e o d100 do crítico pergunta apenas se ele pegou especialmente bem. A proibição de rolagem que o manual tradutor do cenário publica governa o acerto e nunca a qualidade do golpe, e a saída do d100 da conexão não retira o d100 do crítico.

A Assinatura entra na Energia do passo 7 e pertence ao tipo de energia entregue. Ela mede a letalidade intrínseca daquele tipo contra carne, quanto aquela forma de energia machuca um corpo quando conecta, e a mesma Assinatura vale contra qualquer defensor. O que o corpo do alvo traz para essa relação é o Estado Elemental do passo 8, que só existe quando a ficha o declara.

**Exemplo de resolução.** Dois combatentes da faixa Especial, perfil Equilibrado, se enfrentam com arma pesada. Cada um tem FOR 32, VEL 32, DES 32, DEF 32, RES 32 e PRE 32, PV 1920 e PS 768, com bônus geral de 116 na perícia que governa o golpe. A ficha de cada um resolve em Energia de Golpe Firme 180, Guarda 276 com recarga de 80, Absorção 96, Golpe 21,33, Esquiva 5,33, Bloqueio 5,33, Fôlego 16, Limiar 64 e Limiar de Crítico 16. Os dois lados do teste de conexão fecham em 180.

No passo 1 o atacante declara o Golpe Firme com a arma pesada, entregue pelo vetor Impacto. No passo 2 o alcance está dentro das bandas da arma, sem ajuste. No passo 3 nenhum dos dois declarou eixo de evitabilidade fora do padrão. No passo 4 o defensor gasta a Reação esquivando. No passo 5 o limiar de conexão fecha em 180 dividido por 180, multiplicado por cinquenta, resultando em 50; o atacante rola 38 e conecta. No passo 6 ele rola 41 contra o próprio Limiar de Crítico de 16 e não obtém o golpe bem colocado. No passo 7 a Energia resolve em 32 somado a 32 e a 116, multiplicado pelo Golpe Firme de coeficiente 1, fechando em 180, sem Fator de Técnica porque é um golpe comum. No passo 8 nenhum Estado Elemental está declarado. No passo 9 o Impacto engaja a barra inteira de 276, que detém os 180 por completo: a Guarda cai para 96 e drena 180 de PS do defensor. No passo 10 nada alcança a Absorção. No passo 11 o PV do defensor permanece em 1920. No passo 12 o atacante paga 27,73 de Esforço, o Golpe de 21,33 multiplicado pelo 1,3 da arma pesada, e o defensor paga 190,66, a soma do Bloqueio de 5,33, da Esquiva de 5,33 e dos 180 pontos que a Guarda drenou. O atacante fica abaixo do próprio Limiar de 64 e recupera o Fôlego cheio; o defensor o ultrapassa e recupera metade, fechando a rodada com 585,34 de PS contra os 756,27 do atacante. A primeira troca não tirou um ponto de PV de ninguém e já custou ao defensor um quarto do fôlego dele.

## 6. Dano e as camadas de defesa

O dano deste sistema é energia entregue. Um golpe carrega uma quantidade que o corpo do alvo processa em camadas sucessivas antes que o saldo alcance o PV, e a ordem das camadas importa. A energia atravessa primeiro a estrutura montada, depois a matéria do corpo, e o vetor declarado decide quanto de cada camada existe para engajá-la.

### 6.1 A Energia do golpe

A Energia de um golpe do corpo lê os dois atributos que produzem força e velocidade de membro, somados ao que a competência treinada acrescenta, e multiplica o total pelo compromisso do golpe declarado.

```
Energia = (FOR + VEL + bônus geral da perícia ofensiva) × multiplicador do golpe
          + Fator de Técnica que a obra declarar
```

O bônus geral é o número resolvido pelo Núcleo de Perícias, Base Total somada à Inclinação Total e à Especialização, sem o atributo regente, e ele entra inteiro. O atributo regente fica de fora porque FOR e VEL já respondem pelo corpo dentro da mesma conta, e somá-lo pagaria a mesma grandeza duas vezes.

| Golpe | Multiplicador | Custo em ação | Contrapartida |
|---|---|---|---|
| Rápido | ×0,5 | meia ação | nenhuma |
| Firme | ×1 | uma ação | nenhuma |
| Pesado | ×1,5 | uma ação | guarda aberta até o próximo turno; exige perícia |

O Golpe Firme é o ataque básico, e quem ataca sem declarar nada está desferindo um Firme. A guarda aberta do Golpe Pesado suspende a barra de quem o desferiu até o fim do turno seguinte dele: enquanto durar, a Guarda não engaja golpe algum e não recarrega.

A arma declara um Esforço próprio, que multiplica o custo do golpe na escada da Seção 7. Nenhuma arma nomeada entra neste documento; o que ele publica é a tipologia de três classes em que qualquer arma do cenário se encaixa antes de ganhar nome próprio.

| Classe | Esforço |
|---|---|
| Arma de precisão | 0,8 |
| Lâmina curva | 1,0 |
| Arma pesada | 1,3 |

A Energia de uma obra resolve pelo motor que o manual tradutor do cenário publica, lendo a reserva convertida, o coeficiente de entrega, a Assinatura do vetor declarado e a maestria do executor. Este documento consome o número que aquele motor entregar e o faz correr pelas mesmas camadas de defesa, sem conhecer a forma dele.

### 6.2 A Guarda

A Guarda mede a estrutura montada sobre o corpo. Ombro, cotovelo e quadril alinhados conduzem o momento do golpe até o chão em vez de deixá-lo alcançar o tronco, e é a capacidade de sustentar esse alinhamento sob impacto repetido que a Guarda representa. Ela é uma barra consumível que detém energia enquanto tiver pontos, e cada ponto detido sai da barra e vira PS gasto no defensor.

```
Guarda máxima = (DEF × 5) + bônus geral da perícia defensiva
Recarga por turno = metade de DEF × 5
```

A perícia defensiva compra capacidade e nunca recuperação. A recarga lê o atributo sozinho, de modo que o treino aumenta a barra com que o combatente entra na luta e não a velocidade com que ele a remonta. A vantagem de abertura que ele compra se dissolve ao longo de uma troca longa, e é isso que impede a perícia defensiva de virar imunidade.

A taxa de recarga publicada acima é a linha Inteiro da tabela de Exaustão da Seção 8, que a degrada conforme o PS cai. Os percentuais daquela tabela leem DEF × 5 e nunca a barra máxima, e por isso o bônus da perícia defensiva permanece fora da recarga em todos os graus.

Receber o golpe na Guarda é o Bloqueio, e ele não custa Reação. A barra responde enquanto tiver pontos, sem que o combatente precise declará-la, porque competência treinada é permanente e uma defesa que dependesse de declaração por turno falharia justamente contra vários atacantes. O Esforço do Bloqueio está na escada da Seção 7, e se soma aos pontos que a barra drenou.

Nem toda a barra participa de todo golpe. O vetor declarado decide, pelo próprio Grau, que fração da Guarda restante existe para engajar aquela entrega, e a Seção 6.5 publica as escadas. A energia acima da fração engajada zera a barra inteira, porque a estrutura que não deteve o golpe também não está mais montada, e o excedente segue para a Absorção. Só os pontos efetivamente consumidos drenam PS.

### 6.3 A Absorção

A Absorção é matéria. Osso, músculo e tecido detendo joules por existir, e essa capacidade não depende de postura, de consciência ou de disposição para lutar.

```
Absorção = RES × 3
fração que alcança o corpo = E ÷ (E + Absorção)
dano ao PV = E × fração
```

Nenhuma perícia alimenta a Absorção, e nenhum grau de Exaustão a degrada. O valor de RES × 3 é o ponto de virada da proporção: contra um golpe de energia igual à Absorção, metade atravessa; abaixo dela o corpo detém a maior parte; acima dela o corpo começa a ceder. A proporção nunca chega a zero e nunca chega a um, de modo que nenhuma quantidade de matéria detém a totalidade de um impacto que a supera e nenhum impacto ignora o corpo por completo.

### 6.4 A Assinatura

A Assinatura é a letalidade intrínseca de um tipo de energia contra carne, quanto aquele tipo machuca um corpo no instante em que conecta. Todo golpe declara o vetor pelo qual entrega a energia, e o vetor é propriedade da obra, nunca herdado da natureza que a produziu. A Assinatura se lê desse vetor, na tabela que o cenário publica junto com os próprios vetores, e ela vale o mesmo contra qualquer defensor.

Um corpo detém trauma mecânico com a estrutura que possui para isso, e enfrenta as formas de energia que alteram o estado do tecido sem estrutura alguma dedicada a detê-las. É essa diferença que a Assinatura mede, e é por isso que ela vale 1,00 para toda entrega que o corpo saiba ler como força.

O que o corpo do alvo traz para a relação entre a forma do golpe e a carne é o Estado Elemental da Seção 13, que existe apenas quando a ficha o declara e cobra chakra para ser sustentado.

### 6.5 Os quatro vetores

O vetor é propriedade da obra, declarado por técnica, e todo golpe declara exatamente um. Ele responde a uma pergunta só, como o tecido falha, e é dessa pergunta que sai o quanto da Guarda existe para engajar a entrega.

| Vetor | Como o tecido falha | Contra a Guarda |
|---|---|---|
| Impacto | esmagamento por força distribuída | engaja a barra inteira |
| Corte | separação transversal ao longo de uma linha | engaja a fração que o Grau do Fio deixa, e fere a barra |
| Penetração | pressão concentrada em ponto, trajeto em profundidade | engaja a fração que o Grau deixa, numa escada de seis |
| Energia | alteração do estado do tecido | não engaja a barra |

Cada vetor carrega um rider estrutural, que nenhuma obra remove, e um rider padrão, que a obra pode substituir declarando outro. Nenhum rider é automático por natureza elemental, e a obra que não declarar rider algum entrega apenas o estrutural. O ciclo de vida, os graus, as taxas de dano por turno e os pares de atributos que cada rider pune pertencem ao Sistema de Efeitos de Status, que este documento consome sem redefinir.

Obra que entrega o dano sobre extensão ampla do corpo agrava o grau do rider em um degrau no teste de entrada, porque o corpo inteiro virou meio de condução. Em Corte o gatilho é a elevação para linha ou área; em Energia é a obra que engolfa em vez do projétil pontual; a Penetração nunca agrava, porque a entrega em ponto é a definição do vetor.

### 6.6 Impacto e a Quebra de Guarda

O Impacto engaja a barra inteira, e é o único vetor que a encontra sem desconto. Ele é também o vetor que mais cansa o defensor, porque cada ponto que a Guarda detém sai do fôlego dele.

Uma quebra que apenas atordoa e devolve o combatente ao bloqueio no instante seguinte é ruído, porque ninguém muda de decisão por causa dela. Uma quebra que impede a estrutura de voltar produz o oposto, a trava que se realimenta até alguém cair. O desenho correto é uma janela curta com uma consequência real, e a consequência recai sobre a opção defensiva principal do combatente.

Quando a Energia de um golpe supera a fração da Guarda que o vetor engajou, a barra vai a zero, o excedente segue para a Absorção, e o alvo entra no estado de Quebra de Guarda, que o Sistema de Efeitos de Status publica. A janela dura até o fim do turno seguinte de quem quebrou, e dentro dela o Bloqueio fica indisponível e o lado defensivo do teste de conexão do quebrado multiplica por 0,8, pela mesma família de multiplicadores da Seção 10. A Guarda recarrega pela tabela de Exaustão desde o primeiro turno depois da quebra, porque a estrutura desfeita se remonta, e a janela existe para cobrar o instante em que ela não estava lá.

A quebra fica mais provável conforme a luta avança, porque a recarga cai com o cansaço e a barra restante que o golpe precisa superar encolhe junto. O combatente que chega cansado primeiro é o que perde a Guarda primeiro, e é essa degradação que faz o duelo de Impacto terminar por cascata de exaustão em vez de por PV.

A Penetração nunca causa Quebra, porque ela contorna a barra em vez de superá-la.

### 6.7 Corte

O Corte separa o tecido ao longo de uma linha, e a qualidade do fio decide quanto da estrutura montada ainda tem algo a oferecer contra ele.

| Grau do Fio | Engaja da Guarda | O que caracteriza |
|---|---|---|
| I | três quartos | fio rombudo, borda improvisada |
| II | três quintos | fio comum de aço |
| III | metade | fio de qualidade, lâmina bem mantida |
| IV | dois quintos | fio sem espessura, chakra moldado em lâmina |

O topo do Corte fica no meio da escada da Penetração, porque a perfuração é a ameaça mais difícil de deter.

**Guarda Ferida.** Um quinto do que a Guarda detém de um golpe de Corte alcança o PV mesmo assim. A barra se consome e drena PS como sempre, e além disso sangra, o que é a tradução mecânica do ferimento de defesa em palma e antebraço. A consequência direta é que o Corte nunca entrega zero de PV, ainda que aparado por completo.

**Elevação.** O Corte é o único vetor físico que sobe a escada categórica, porque a entrega é uma linha e uma linha atravessa mais de um alvo por natureza.

| Elevação | Entrega |
|---|---|
| Alvo | golpe único |
| Linha | tudo que o traço atravessar |
| Área | corte varrido |

O Corte elevado para linha ou área abre a própria guarda de quem o desferiu até o fim do turno seguinte dele, pela mesma leitura do Golpe Pesado. O golpe único não paga nada, e é por isso que o duelo de lâmina contra lâmina corre livre enquanto o varrimento cobra postura.

**Matéria dura.** Cortar pedra e aço é possível, e é privilégio de quem chegou lá.

| Matéria | Grau mínimo do Fio |
|---|---|
| Carne, madeira, pano | I |
| Couro tratado, bambu | II |
| Aço, armadura, osso denso | III |
| Pedra, muro, estrutura, corpo endurecido | IV |

Abaixo do grau mínimo o fio não morde. O Grau IV exige chakra moldado em lâmina, e é isso que faz o corte de pedra ser marco de avanço.

O rider estrutural do Corte é a Secção, que pune DES e DEF e chega ao decepamento no grau Crítico. O rider padrão é o Sangramento, que acumula num número único a cada corte novo e se estanca com uma Ação Completa, cortando o número pela metade. Alvo sem sangue não sangra, e a Secção continua valendo sobre ele.

### 6.8 Penetração

A Penetração concentra a entrega num ponto e corre em profundidade. O Grau responde a uma pergunta só, o que a Guarda ainda tem para engajar, e ela decide sozinha.

| Grau | Engaja da Guarda | O que caracteriza |
|---|---|---|
| I | três quartos | ponta grossa, muito corpo atrás dela |
| II | metade | fio com ombro largo, entregue de ponta |
| III | dois quintos | lâmina curta e rígida |
| IV | um quarto | haste fina, corpo mínimo |
| V | um décimo | haste sem corpo, moldada em chakra |
| VI | nada | ponto de energia pura, sem nada a engajar |

O grau mora na ficha da arma ou da obra, e nenhuma decisão nova se toma por turno. O cenário nomeia as instâncias concretas de cada degrau nos compêndios e nas fichas que publica.

**Contrapeso.** A Penetração quase não drena PS do defensor, porque a fração de Guarda que ela deixa engajar é pequena e só os pontos consumidos custam fôlego. O adversário atravessa a luta com o fôlego quase intacto, e o preço reaparece do lado de quem perfura, num Esforço somado por grau.

| Grau | Esforço |
|---|---|
| I | Golpe × 1,125 |
| II | Golpe × 1,25 |
| III | Golpe × 1,3 |
| IV | Golpe × 1,375 |
| V | Golpe × 1,45 |
| VI | Golpe × 1,5 |

A Penetração nunca eleva para área ou campo. O alvo é sempre único, porque pressão é força dividida por área, e espalhar a entrega destrói a propriedade que define o vetor.

O rider estrutural da Penetração é a Perfuração, que pune FOR e VEL e sempre dispara em golpe que alcance o PV. O rider padrão é a Hemorragia de Trajeto, sangramento interno pelo canal aberto, que não estanca por pressão e exige ninjutsu médico em qualquer grau. A obra que sela o canal ao atravessá-lo substitui a hemorragia pelo rider que a cauterização produzir.

### 6.9 Energia e a Interrupção de Contato

O vetor Energia altera o estado do tecido em vez de rompê-lo por força, e a postura não tem nada a oferecer contra ele. O braço levantado contra o fogo não distribui calor, ele é o primeiro a queimar, e por isso a Guarda não engaja o vetor Energia em grau nenhum. A Absorção continua respondendo inteira, porque a matéria do corpo detém joules qualquer que seja a forma deles.

A defesa elemental ativa que o cenário publica, a que opõe um elemento a outro pelo ciclo de superação, resolve antes da Interrupção e cobra chakra. Este documento não a redefine.

**Interrupção de Contato.** A lesão por energia cresce com a temperatura e com o tempo de contato juntos, e cortar a duração corta a lesão. A Interrupção é a defesa barata e universal contra o vetor Energia, disponível a quem não tem reserva de chakra para opor elemento a elemento.

```
Limiar = (VEL + RES) ÷ Velocidade da obra × 65

um quarto  →  dado até Limiar − 50
um terço   →  dado até Limiar − 25
metade     →  dado até o Limiar
falha      →  energia inteira
```

O resultado nomeia a fração da Energia que ainda alcança o corpo. A faixa que resulta em zero ou em número negativo não existe para aquela ficha, de modo que o repertório de saída é desbloqueado pela ficha e o dado escolhe dentro do que ela liberou. Um Limiar até 25 só tem a saída sofrida, e a saída de um quarto começa a existir acima de 51.

A constante 65 é maior que a base cinquenta da conexão porque quem reduz a entrega a um quarto precisa ser mais difícil de alcançar que quem apenas desvia. A esquiva é uma aposta, e a Interrupção é um seguro.

A Interrupção custa a Reação da rodada e Esforço igual à Esquiva da ficha. Contra a obra cuja entrega não admite janela de contato, e que a ficha declara como tal, a escada colapsa em duas saídas: passou, metade; falhou, a energia inteira. Não há duração a encurtar contra o que atravessa o corpo no instante em que toca.

A Velocidade da obra é a mesma grandeza que o teste de conexão consome, e o cenário publica a escada de celeridade dos meios que a produz.

O vetor Energia não paga contrapeso adicional. Os vetores físicos são gratuitos e repetíveis enquanto houver fôlego, e a Energia gasta uma reserva de chakra limitada pelo teto de saída que o cenário publica. Somar Esforço ou abertura de guarda por cima cobraria o mesmo preço duas vezes.

O rider estrutural e o rider padrão do vetor Energia dependem do tipo de energia entregue, e o cenário os publica junto com a tabela de Assinatura.

## 7. A economia de PS

O corpo sustenta esforço intenso com dois sistemas de energia que não se confundem. O primeiro é o estoque que o músculo libera sem esperar oxigênio chegar, a explosão que resolve um golpe, uma esquiva, um salto. O segundo é o motor que repõe o estoque entre um esforço e o seguinte, sem sustentar a explosão, numa janela que corre na mesma escala de segundos que separa dois golpes em combate. É por isso que o tamanho da reserva depende da velocidade e da resistência juntas, enquanto a velocidade com que ela volta depende da resistência sozinha. Dois corpos com a mesma reserva e capacidade de recuperação diferente são a mesma criatura na primeira rodada e criaturas diferentes na décima quinta.

O segundo conceito que governa esta seção é o limiar de sustentabilidade. Abaixo de certa intensidade o esforço se sustenta quase indefinidamente porque a reposição acompanha o gasto rodada a rodada. Acima dela o acúmulo passa a vencer a reposição, e o corpo entra numa dívida que só se paga parando de gastar.

```
PS = (RES + VEL) × mult_PS × (1 + VON / 100)
```

O pool é consumido do Núcleo do Sistema sem alteração.

| Número da ficha | Fórmula |
|---|---|
| Golpe | (FOR + VEL) ÷ 3 |
| Esquiva | VEL ÷ 6 |
| Bloqueio | DEF ÷ 6 |
| Fôlego | RES ÷ 2 |
| Limiar | RES × 2 |
| Limiar de Crítico | PRE ÷ 2 |

O Golpe lê o mesmo par que produz a Energia do ataque, porque quem entrega mais energia queima mais energia produzindo-a. O golpe caro é o golpe pesado.

| Ação | Esforço |
|---|---|
| Golpe | o Golpe da ficha, multiplicado pelo Esforço da arma |
| Golpe de Penetração | o Golpe da arma, multiplicado ainda pelo fator do Grau na Seção 6.8 |
| Cadência, primeira ação extra | Golpe × 1,5 |
| Cadência, segunda ação extra | Golpe × 2 |
| Esquiva | a Esquiva da ficha, por Reação gasta |
| Interrupção de Contato | a Esquiva da ficha |
| Bloqueio | o Bloqueio da ficha, dobrado quando resulta em Quebra |
| Disputa de Distância | a Esquiva |
| Corte de Trajeto | a Esquiva mais os metros atravessados |
| Manobra | o Golpe |
| Deslocamento | metros efetivos ÷ 5 |

Comprimir dois esforços máximos na mesma janela de seis segundos não custa o mesmo que espaçá-los ao longo de duas rodadas, porque o segundo esforço parte de um músculo que ainda não repôs nada da primeira explosão. É por isso que a segunda ação extra custa proporcionalmente mais que a primeira, e não o mesmo Golpe repetido.

Além do que a ação custa, cada ponto que a Guarda detém sai da barra e vira PS gasto no defensor, e esse gasto conta como Esforço na comparação com o Limiar do fim da rodada. O corpo que sustenta a estrutura sob impacto repetido trabalha tanto quanto o que desfere o golpe, e numa troca física longa a Guarda é a maior fonte isolada de drenagem de fôlego da luta.

O custo de deslocamento lê os metros efetivamente percorridos, não a capacidade do personagem. Como o máximo por rodada é VEL × 10, um quarto do percurso custa VEL ÷ 2, metade custa VEL, o percurso inteiro custa VEL × 2, e a Carga custa VEL × 4.

| Fração do percurso máximo | Esforço |
|---|---|
| Um quarto | VEL ÷ 2 |
| Metade | VEL |
| Inteiro | VEL × 2 |
| Carga | VEL × 4 |

O terreno multiplica os metros e não o custo diretamente, o que já faz terreno difícil cobrar o dobro pelo mesmo trajeto sem regra adicional. Fora da rodada de combate não se cobra Esforço de deslocamento algum, porque o ritmo de viagem corre abaixo do limiar de sustentabilidade.

Obra que resolve pela reserva de PM cobra PM. Só paga Esforço o que a própria obra declarar em PS. Um combatente que luta pela obra atravessa a luta com o fôlego quase intacto e a reserva de PM vazia, e um que luta pelo corpo atravessa com o oposto, sem que nenhuma regra precise separar os dois planos.

No fim de cada rodada, o Esforço total gasto se compara ao Limiar. Até o Limiar, o combatente recupera o Fôlego cheio; acima dele, recupera metade. Essa comparação é a decisão tática que esta seção existe para produzir: apertar o ritmo e arriscar a reposição, ou respirar e ceder a iniciativa.

Abrir mão da Ação Completa da rodada para respirar recupera Fôlego × 3, no lugar da recuperação normal de fim de rodada.

| Regra | Valor |
|---|---|
| Teto de Esforço por turno | 40% do PS |
| Gasto acima do teto | permitido, cobra PV direto sem mitigação, um por um |
| Esforço devido com PS em zero | pago em PV, um por um |

O combatente exausto que ainda assim bloqueia paga o Esforço daquele bloqueio em PV, na mesma proporção de um para um. O corpo sem fôlego para pagar a defesa paga com a própria carne, e o golpe segurado alcança o corpo de qualquer jeito.

Um respiro curto sem ameaça devolve o PS até o Grau Leve de Exaustão, e um descanso longo zera a Exaustão por completo. Fadiga em nível 2 impede o retorno do PS entre cenas, e em nível 3 o PS deixa de retornar.

## 8. Exaustão Física

O cansaço num corpo treinado é cinco penalidades pequenas em cinco lugares diferentes, e não um corte único. Um corte só em atributo chegaria ao mesmo tempo na energia do golpe, na esquiva, no deslocamento e na cadência, e o resultado pareceria uma punição quádrupla porque seria uma punição quádrupla. Nomear cada consequência no lugar dela permite que cada uma seja pequena e que o conjunto continue significando alguma coisa.

| Grau | PS restante | Recarga da Guarda | Energia | Lado defensivo da conexão | Cadência | Deslocamento |
|---|---|---|---|---|---|---|
| Inteiro | 75% ou mais | 50% | cheia | cheio | cheia | cheio |
| Leve | 50 a 74% | 40% | cheia | cheio | cheia | cheio |
| Moderado | 25 a 49% | 30% | −10% | ×0,9 | cheia | −10% |
| Grave | 1 a 24% | 20% | −20% | ×0,8 | uma ação extra a menos | −25% |
| Crítico | 0% | 10% | −30% | ×0,7 | nenhuma ação extra | −50% |

O Grau Inteiro é a ausência da condição, e não um quinto grau dela: a Exaustão Física entra em campo a partir de 74% de PS, com os quatro graus de sempre, Leve, Moderado, Grave e Crítico.

Os percentuais da coluna de recarga leem DEF × 5 e nunca a barra máxima. A linha Inteiro devolve metade de DEF × 5, que é a recarga plena publicada na Seção 6.2, e as linhas seguintes a degradam. O bônus da perícia defensiva permanece fora da recarga em todos os graus, o que mantém a promessa de que o treino compra capacidade e nunca recuperação.

No Grau Crítico valem ainda as duas regras já publicadas pelo Sistema de Efeitos de Status. O Esforço devido sai do PV, e qualquer ação física complexa exige teste de RES contra 50 ou falha.

A penalidade de Energia incide igualmente sobre o Esforço do Golpe. O cansado entrega menos energia e gasta menos Esforço na mesma proporção, porque é o mesmo golpe mais fraco pesando dos dois lados da conta.

A Absorção não degrada em grau nenhum. Osso e músculo detêm energia cansados ou descansados, porque a capacidade de deter dano não é a mesma coisa que a capacidade de continuar lutando.

O Fôlego e o Limiar leem RES, que nenhum grau de Exaustão reduz. A capacidade de se recuperar é a última coisa que o cansaço tira de um corpo, e é por isso que sempre existe um caminho de volta.

Como a Guarda recarrega menos e o lado defensivo da conexão encolhe ao mesmo tempo, o combatente cansado perde as duas defesas ativas juntas enquanto mantém a passiva intacta. A luta longa se resolve no corpo de quem sobrou, e essa é a razão de existir desta seção.

## 9. O motor de manobras

Uma manobra é a Ação Completa investida em desequilibrar, prender, empurrar ou desarmar o oponente em vez de feri-lo. Ela não causa dano, custa o Esforço de um Golpe, e resolve em teste oposto: a margem de vitória posiciona o grau do estado produzido pela escala de resultado já publicada, e o crítico eleva um grau.

| Manobra | Teste | Resultado |
|---|---|---|
| Agarrar | FOR + DES contra FOR + VEL | Imobilização |
| Derrubar | FOR + VEL contra DEF + VEL | Queda e Prostração |
| Empurrar | FOR + VEL contra DEF + FOR | deslocamento forçado, metros pela margem |
| Desarmar | DES + VEL contra DES + FOR | arma no chão, na banda Engajado |

A DEF responde por Derrubar e por Empurrar porque a base de apoio que resiste ao desequilíbrio é a mesma estrutura que sustenta a Guarda. Quem monta guarda firme é quem custa mais a sair do lugar.

Manobras compostas, submissões, arremessos e o repertório físico especializado de uma escola de combate pertencem a documento próprio que consome este motor sem redefini-lo.

## 10. Vantagem numérica e alvo indefeso

A Reação única da Seção 2 é a raiz desta seção. Um corpo responde a uma ameaça de cada vez, então cercar um alvo não muda a chance de cada golpe individual acertar, muda a chance de o alvo conseguir responder a todos eles.

| Atacantes engajados com o mesmo alvo | Lado defensivo da conexão |
|---|---|
| 1 | cheio |
| 2 | ×0,85 |
| 3 | ×0,70 |
| 4 ou mais | ×0,60 |

Alvo indefeso é quem está inconsciente, imobilizado em Grau Grave ou acima, ou surpreendido sem nenhuma chance de perceber a ameaça. Ele não contesta a conexão e não opõe Guarda alguma, porque não existe postura nenhuma para sustentar, e o golpe alcança a Absorção direto. A Absorção continua valendo, porque a matéria do corpo não sabe se o dono está consciente. O crítico contra um alvo indefeso é automático.

Todo multiplicador que reduz o lado defensivo da conexão vive na mesma faixa e na mesma forma, venha ele do cansaço da Seção 8, da Guarda quebrada da Seção 6.6 ou do cerco desta seção. Eles se multiplicam entre si sem exceção, e o limiar de conexão que sai do teste do passo 5 respeita o piso de 5 e o teto de 95 depois de toda a conta fechada. Nenhum golpe conecta com certeza absoluta, e nenhum é impossível de conectar.

## 11. Área e campo

Se a distância é relação entre dois combatentes, uma área não pode ocupar uma banda, porque uma banda só existe entre um par. A solução é que toda obra de área ou campo declara um centro próprio, escolhido dentro da Banda Máxima da obra exatamente como se escolheria um alvo único, e a partir desse centro a mesma escada de bandas se lê de novo.

| Categoria | Alcança |
|---|---|
| Alvo | um combatente |
| Área | tudo que está Engajado com o centro |
| Campo | tudo até a banda Curta do centro, ocupando o terreno enquanto durar |

Área e campo não distinguem aliados de inimigos, e é essa falta de distinção que precifica a categoria por si só: quem escolhe atingir área aceita atingir os próprios. Como referência de leitura em mesa sem mapa, Engajado com o centro comporta até três combatentes e a banda Curta do centro comporta até oito; os dois números orientam a narração e não travam contagem alguma.

Obra de área e obra de campo não resolvem o teste de conexão do passo 5 contra cada alvo. Elas resolvem pela forma publicada da área, alcançando tudo que o centro apanha, e entregam o efeito parcial em falha onde a ficha da obra o declarar. O teste individual mede se um corpo saiu do caminho de uma entrega dirigida a ele, e a área não é dirigida a corpo nenhum.

## 12. Dano de fonte sem ficha

Uma fonte sem ficha, uma queda, um desabamento, o impacto contra uma parede, precisa machucar sem ter atributos próprios. Dano ambiental de valor fixo quebra nos dois extremos da régua de faixas, virando letal para quem começa e irrelevante para quem já domina o corpo, e produz tanto o herói que morre de um tropeço quanto o que salta de um penhasco sem sentir nada. Ligar toda fonte sem ficha ao mesmo motor que já resolve um golpe comum resolve os dois problemas de uma vez. A Absorção continua respondendo, e a fonte escala junto com o corpo que a sofre.

Toda fonte sem ficha declara apenas uma Energia, e a partir dali corre pelo motor comum da Seção 6. A Guarda não responde, porque não existe postura contra o chão que sobe ao encontro do corpo. Não há crítico, porque não há quem posicione o golpe.

```
altura efetiva = altura em metros − VEL, com teto de 150 metros
Energia da queda = altura efetiva × 60
```

Um teste de VEL somado a DES autoriza a subtração cheia da altura, a falha concede metade, e quem cai inconsciente ou preso não subtrai altura alguma, porque não há reação de queda possível. Um corpo treinado dissipa parte do impacto pela flexão das pernas no instante do choque, e a capacidade de dissipar cresce com a mesma velocidade de membro que produz o salto: quem salta de mais alto também aterrissa de mais alto sem se machucar mais por isso. O teto de 150 metros marca a altura em que a queda alcança velocidade terminal e para de piorar.

O catálogo de fogo, esmagamento, afogamento, frio e qualquer outra fonte nomeada pertence ao Sistema de Efeitos de Status e ao cenário que a publica, que só precisam declarar a Energia de cada uma para consumir este motor.

## 13. Estado Elemental

Um corpo pode ser reescrito para enfrentar uma categoria inteira de entrega, e a reescrita cobra chakra enquanto durar. O Estado Elemental é essa reescrita, declarado na ficha da obra que o produz, e ele existe apenas enquanto for sustentado. Nenhum corpo carrega resistência elemental por constituição, sem estado declarado, e a régua desta seção é a única porta pela qual uma categoria de entrega deixa de ameaçar um corpo.

Todo Estado declara cinco campos.

| Campo | O que declara |
|---|---|
| Modo | Travessia, Couraça ou Isolamento, sempre um só |
| Vetor ou elemento afetado | o que o Estado enfrenta |
| Elemento acoplado | o que o Estado torna fatal contra o próprio portador |
| Reserva do Estado | o volume investido, que a mesma ficha declara |
| Manutenção | o custo por rodada, em número fixo absoluto |

### 13.1 Os três Modos

| Modo | O que faz |
|---|---|
| Travessia | o vetor declarado atravessa o corpo sem conectar, e deixa de existir como ameaça enquanto o Estado durar |
| Couraça | uma barra de matéria engaja os vetores declarados antes de a Guarda e a Absorção responderem |
| Isolamento | o elemento declarado não converte energia naquele corpo, e a Interrupção de Contato resolve automaticamente na melhor saída da escada |

A Couraça é o único Modo com barra própria.

```
Barra de matéria = reserva do Estado × 1,0
```

Ela não regenera. Cada ponto de chakra investido no Estado é um ponto de energia que não alcança o corpo, e a barra se esgota na proporção do que deteve. Nas faixas em que o sistema resolve uma luta, uma reserva média sustenta a Couraça por três a quatro rodadas do ataque físico do par, e uma reserva grande sustenta o dobro disso, que é a janela em que a luta se decide.

### 13.2 A vulnerabilidade acoplada

Todo Estado declara um elemento acoplado, e contra ele os três efeitos incidem juntos, sem menu e sem exceção.

1. A Absorção não se aplica, porque a matéria que o Estado montou conduz em vez de resistir.
2. O rider daquele elemento entra sem teste de entrada, com o grau agravado em um degrau pelo gatilho de envolvimento da Seção 6.5, porque o corpo inteiro virou meio de condução.
3. O Estado colapsa no impacto, e o chakra investido nele se perde.

Os três são necessários juntos. Retirar apenas a Absorção move o resultado de um golpe do elemento acoplado em menos de dez por cento contra o par da faixa, o que nenhuma mesa percebe. A soma dos três é o que faz o golpe certo desfazer a defesa inteira num gesto.

### 13.3 Cedência

Nenhum Estado Elemental é absoluto, e três caminhos o encerram.

O esgotamento vem da barra que zera, no caso da Couraça, ou da manutenção que deixa de ser paga, em qualquer Modo. A ruptura vem da obra cuja reserva nominal supera a reserva do Estado, que o rompe de uma vez pelo confronto elemental que o cenário publica, independente do que restava. O elemento acoplado é o terceiro caminho e o mais barato de todos, porque não toca a barra e derruba o Estado por vulnerabilidade.

O preço em XP de um Estado se lê pela mesma régua de resposta com que o manual tradutor do cenário precifica toda obra útil, e a reserva declarada serve simultaneamente à barra, ao confronto da ruptura e ao preço.

## 14. Exemplo de rodada completa

O Tanque tem FOR 43, VEL 22, DES 22, DEF 42, RES 45 e PRE 26, com PV 2640 e PS 804. O Veloz tem FOR 26, VEL 45, DES 45, DEF 24, RES 23 e PRE 35, com PV 1470 e PS 816. Os dois estão na faixa Especial e carregam bônus geral de 116 nas perícias que governam o golpe e a defesa. A ficha do Tanque resolve em Energia de Golpe Firme 181, Guarda 326 com recarga de 105, Absorção 135, Golpe 21,67, Esquiva 3,67, Bloqueio 7, Fôlego 22,5, Limiar 90 e Limiar de Crítico 13, com os dois lados do teste de conexão em 160. A do Veloz resolve em Energia 187, Guarda 236 com recarga de 60, Absorção 69, Golpe 23,67, Esquiva 7,5, Bloqueio 4, Fôlego 11,5, Limiar 46 e Limiar de Crítico 17,5, com os dois lados da conexão em 206.

A iniciativa opõe 72 mais 1d6 do Veloz contra 47 mais 1d6 do Tanque, e o Veloz age sempre primeiro nesse par. A razão de VEL entre os dois fecha em 2,05, o que concede ao Veloz uma ação extra e nenhuma ao Tanque.

O Veloz abre com a lâmina curva, Golpe Firme entregue por Corte de Grau III. O Tanque guarda a Reação para o segundo golpe e não contesta a conexão, então o golpe alcança o corpo sem teste. O Veloz rola 62 contra o próprio Limiar de Crítico de 17 e desfere um golpe comum, de Energia 187. O Grau III do Fio deixa metade da barra do Tanque para engajar, 163 dos 326 pontos, e os 187 superam essa fração: a Guarda detém 163, drena 163 de PS do Tanque, vai a zero, e o Tanque entra em Quebra de Guarda. A Guarda Ferida entrega ao PV um quinto do que a barra deteve, 32,6, e os 24 pontos que sobraram atravessam a Absorção de 135 entregando 3,6. O PV do Tanque cai de 2640 para 2603,8.

Na ação extra o Veloz repete o golpe, e agora o Tanque gasta a Reação esquivando. O lado defensivo dele, 160, multiplica por 0,8 pela Quebra de Guarda e fecha em 128, de modo que o limiar de conexão do Veloz sobe para 206 dividido por 128, multiplicado por cinquenta, resultando em 80. O Veloz rola 71 e conecta. Com a barra em zero, e sem turno intervalar em que ela pudesse recarregar, nada engaja o golpe: os 187 inteiros atravessam a Absorção e entregam 108,6. O PV do Tanque cai de 2603,8 para 2495,2.

O Tanque revida com a arma pesada, Golpe Firme entregue por Impacto, de Energia 181. O lado ofensivo dele fecha em 160 contra os 206 do Veloz, o limiar de conexão sai em 38, e ele rola 55: o golpe não alcança. O Veloz gastou a Reação da rodada esquivando e pagou por ela.

No fim da rodada, o Tanque gastou 208,84 de Esforço, a soma do próprio golpe com arma pesada em 28,17, da Esquiva de 3,67, do Bloqueio dobrado pela Quebra em 14, e dos 163 pontos que a Guarda drenou. O total fica abaixo do teto de 321,6 e acima do Limiar de 90, de modo que ele recupera metade do Fôlego, 11,25, e fecha com 606,41 de PS, 75% do máximo. O Veloz gastou 66,67, a soma do primeiro golpe em 23,67, da ação extra em 35,5 e da Esquiva de 7,5, ultrapassa o próprio Limiar de 46, recupera metade do Fôlego em 5,75, e fecha com 755,08 de PS, 93% do máximo.

A troca custou ao Tanque 145 pontos de PV e um quarto do fôlego, e ao Veloz nada de PV e sete por cento do fôlego. A diferença inteira mora na Guarda: o Tanque pagou 163 dos 208 pontos de Esforço dele apenas por deter o primeiro golpe, e é essa drenagem, e não o dano ao PV, que decide quanto tempo um corpo aguenta sustentar a estrutura contra alguém mais rápido.

## 15. Pendências e fila de errata

**Pendências deste documento.**

O termo oposto do teste de entrada dos riders não está publicado em documento nenhum. O Sistema de Efeitos de Status declara o par de atributos que cada rider testa, e a régua contra a qual esse par se compara continua sem dono.

O bônus de esquiva que o lado defensivo da conexão soma não tem régua própria publicada. Ele se lê da perícia ou da vantagem que a ficha do combatente declarar, e a régua que o produz pertence ao Núcleo de Perícias.

O vetor Impacto não tem rider estrutural nomeado. Os outros três têm, e o Sistema de Efeitos de Status é o dono da lacuna.

A obra do vetor Energia declara se é sustentada ou instantânea, e a instantânea não admite Interrupção de Contato. A régua que separa as duas pertence ao manual tradutor do cenário e ainda não foi publicada.

O veneno não tem vetor. Ele saiu do vetor Energia por não alterar o estado do tecido pela mesma física, e o vetor próprio dele continua sem estudo.

**Fila de errata para outros documentos.**

O inventário completo, com o que sai e o que entra em cada alvo e o bloco que o executa, vive em [Errata do Núcleo de Combate v3](errata-combat-core-v3.md). Dezoito documentos do corpus citam ao menos uma das grandezas que este documento aposentou. O resumo abaixo nomeia os quatro alvos maiores.

O Sistema de Efeitos de Status publica a Quebra de Guarda com efeitos escritos contra a Guarda de valor fixo que este documento substituiu. A condição perde a frase de que a Guarda vai a zero e não recarrega, e passa a publicar que a Guarda vai a zero, que o Bloqueio fica indisponível e o Limiar de Esquiva multiplica por 0,8 durante a janela, e que a Guarda recarrega pela tabela de Exaustão desde o primeiro turno depois da quebra. A referência ao Limiar de Esquiva naquela condição passa a ler o lado defensivo da conexão. A Seção 6.6 deste documento já publica a redação nova.

Os Cálculos Rápidos de Testes republicam a Potência como grandeza viva, a Absorção subtrativa, o Limiar de Esquiva como número de ficha e a escada de Cadência de três degraus. As quatro leituras morrem com este documento.

O Poder Celeridade multiplica o Limiar de Esquiva do portador por 1,30 e lê a Potência de ataque corporal. As duas grandezas mudaram de nome e de forma, e o multiplicador passa a incidir sobre o lado defensivo da conexão.

Toda perícia e todo poder que citem a Potência, o coeficiente de impacto de arma ou o Limiar de Esquiva como número de ficha leem grandezas que este documento aposentou.

## 16. Registro de Alterações

**v3.** O motor de resolução se reconstrói inteiro sobre o motor físico e o oleoduto defensivo que o sistema fixou, e sobre os quatro vetores de entrega. A Potência morre como grandeza, e a Energia de um golpe do corpo passa a ler FOR somada a VEL e ao bônus geral da perícia ofensiva, multiplicada pelo compromisso do golpe declarado entre Rápido, Firme e Pesado. A Guarda passa a somar o bônus geral da perícia defensiva à capacidade e a recarregar por metade de DEF × 5, com cada ponto detido virando PS gasto no defensor, e esse gasto conta como Esforço contra o Limiar. A Absorção deixa de subtrair e passa a dividir, entregando ao corpo a fração da energia sobre a energia somada à Absorção, sem piso e sem teto. O coeficiente de impacto de arma sai, e a tipologia de três classes permanece com o Esforço. A Quebra de Guarda mantém o gatilho contra a Guarda restante, que é o que a torna mais provável conforme o cansaço encolhe a recarga, e perde a cláusula de que a barra não recarrega durante a janela, que se realimentava sob a barra consumível; o Bloqueio indisponível e o multiplicador de 0,8 continuam sendo os dois dentes da condição.

A rolagem de d100 da Esquiva sai da sequência, substituída pelo teste oposto de base cinquenta que opõe a Velocidade efetiva da obra à VEL somada à DES e ao bônus de esquiva do alvo, com as isenções de técnica portada pelo corpo, de área e de campo. O Limiar de Esquiva deixa de existir como número de ficha, e toda a família de multiplicadores que incidia sobre ele passa a incidir sobre o lado defensivo da conexão, preservando o piso de 5 e o teto de 95 sobre o limiar resultante. O d100 do crítico permanece intacto, e o documento declara que a proibição de rolagem governa o acerto e nunca a qualidade do golpe.

A Cadência abandona a razão de VEL dividida por quinze e passa a ler a razão entre a VEL do combatente e a do oponente mais rápido engajado, concedendo uma ação extra a partir de 1,5 e duas a partir de 2,5, com teto de duas. O terceiro degrau da escada de Esforço sai por deixar de ser alcançável.

Os quatro vetores entram com as escadas de Grau, os contrapesos e os riders estruturais e padrão de cada um, e a Reação ganha a Interrupção de Contato como quarta resposta da lista fechada. A Assinatura deixa de ser descrita como propriedade do defensor e passa a ser a letalidade intrínseca do tipo de energia contra carne, sem que número algum mude. O Estado Elemental entra como seção nova, com os três Modos, a barra de matéria da Couraça, o pacote de vulnerabilidade acoplada e as três formas de cedência, e é ele que ocupa o lugar que a Assinatura deixou do lado do defensor.

A tabela de Exaustão Física permanece com os cinco graus e passa a documentar que os percentuais de recarga leem DEF × 5 e nunca a barra máxima, o que mantém o bônus da perícia defensiva fora da recuperação. O dano de fonte sem ficha troca a Potência declarada pela Energia declarada, com a mesma constante de 60 por metro de altura efetiva. A economia de PS, o motor de manobras, a vantagem numérica, a resolução de área e campo e a régua de deslocamento seguem sem alteração de valor.

**v2.** O vocabulário de Assinatura entra no documento, com a leitura por vetor declarado.

**v1.** Publicação do Núcleo de Combate.
