---
id: core.combat-core
title: "Núcleo de Combate"
version: 1
layer: core
type: core-layer
status: final
source-file: Nucleo_de_Combate_v1.md
---

# Núcleo de Combate

**Camada Fundamental, fechada para modificação.**

## 1. Abertura e escopo

Um combate neste sistema é uma sequência de rodadas de seis segundos, e cada rodada resolve pela mesma ordem de decisões. Um soco, uma investida de arma e a obra mais elaborada do repertório de um personagem passam pelos mesmos doze passos, e é essa uniformidade que garante que duas mesas cheguem ao mesmo número a partir da mesma ficha. O corpo entra em combate com um pool de fôlego que se gasta a cada ação e recarrega entre uma rodada e outra, uma estrutura de guarda que absorve o primeiro golpe e cede ao segundo, e uma capacidade de resistência que nunca falha por completo enquanto houver corpo para resistir.

Este documento publica a economia de ação e de tempo, o espaço do combate e o deslocamento dentro dele, o início e o fim de um confronto, a sequência que resolve todo ataque, o motor de dano com as três camadas de defesa, a economia inteira de fôlego, o que o cansaço faz ao corpo, o motor de manobras, a vantagem de cercar um alvo, a resolução de área e campo, e o dano de uma queda ou de qualquer fonte sem ficha própria. Ele consome sem redefinir a régua de atributos, a resolução de testes e a iniciativa do Núcleo do Sistema, os pools de PV, PS e PM, o catálogo de condições do Sistema de Efeitos de Status, e os dois pontos de extensão do Manual de Criação de Poderes que todo golpe ofensivo lê, o eixo de evitabilidade que mede quão evitável uma obra é por construção e a forma de dois termos que separa o que se converteu do que a maestria entrega por si. Cada cenário publica a instância concreta desses dois pontos, e este documento lê o que a instância entregar sem conhecer o nome dela.

Um leitor procurando o dano de uma arma nomeada, o catálogo de manobras de uma escola de combate específica ou o custo em recurso de uma obra batizada está no documento errado. O primeiro caminho certo é o compêndio que publicou a obra; o segundo é o manual tradutor do cenário que instanciou o eixo de evitabilidade e os coeficientes da forma de dois termos para aquele mundo.

## 2. Tempo e economia de ação

A rodada dura seis segundos e é a menor fatia de tempo que o sistema resolve em separado. Dentro dela, cada combatente dispõe de uma Ação Completa, de uma Ação de Movimento e de uma Reação, e a Reação é a peça que muda o cálculo de qualquer cerco. Um corpo responde a uma ameaça de cada vez, e a segunda ameaça na mesma janela de seis segundos encontra alguém que já comprometeu o próprio equilíbrio respondendo à primeira. É essa limitação fisiológica que dá valor a atacar em conjunto, e a Seção 10 fecha a régua que ela produz.

A Reação se gasta numa lista fechada de três respostas. Esquivar de um golpe, disputar a distância contra quem tenta fechar ou abrir espaço, ou cortar o trajeto de um efeito que passa perto o bastante para ser interceptado. Nenhuma outra fonte concede Reação adicional na mesma rodada; uma obra que declare conceder uma soma-se a esta lista sem multiplicá-la.

| Recurso da rodada | Quantidade |
|---|---|
| Ação Completa | 1 |
| Ação de Movimento | 1 |
| Reação | 1, entre esquiva, Disputa de Distância e Corte de Trajeto, ou a que a obra conceder |

A iniciativa segue a regra já publicada pelo Núcleo do Sistema, o par VEL somado a SAB mais 1d6, com o maior valor agindo primeiro. A capacidade de encaixar mais de um ataque na mesma rodada, a Cadência, também é regra do Núcleo do Sistema, na razão de VEL dividida por quinze com piso de um: é o teto de ataques que um corpo consegue comprimir fisicamente em seis segundos. Este documento não redefine nenhuma das duas regras. O que ele acrescenta é o preço de usar a Cadência além do primeiro ataque, numa escada de custo que a Seção 7 fecha.

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

Disputa de Distância e Corte de Trajeto são as duas Reações que fecham a lista da Seção 2. A primeira decide se um combatente consegue fechar ou abrir espaço contra a vontade de outro; a segunda toma um efeito alheio em trânsito e o desvia de rota sem alterar o destino de quem o desviou. O custo em Esforço das duas está na escada da Seção 7, e a competência para vencer o teste oposto que cada uma exige mora na perícia ou na vantagem que a ficha do combatente declarar.

## 4. Início e fim do combate

A surpresa resolve antes da iniciativa, numa rodada própria que só o lado emboscador usa. Um sistema que trata a emboscada como modificador de iniciativa produz a cena em que quem armou a cilada age depois de quem caiu nela, porque um dado ruim apaga horas de planejamento. O que uma mesa quer de uma emboscada bem executada é alcançar o alvo antes que ele consiga reagir, e conceder ao emboscador uma rodada inteira antes de a iniciativa normal começar a contar garante exatamente isso. O preço dessa rodada inteira é pago em três travas que impedem que a emboscada vire execução automática de um golpe que ninguém consegue evitar.

O direito à rodada de Surpresa se ganha em teste oposto, a furtividade do emboscador contra a percepção do alvo, resistida pelo par SAB e PRE. O teste é individual, então percepção parcial é o caso comum: um grupo emboscado raramente percebe por inteiro, e só quem falhou o próprio teste perde a rodada.

Na rodada de Surpresa apenas o lado emboscador age. Cada emboscador dispõe da Ação Completa e da Ação de Movimento, e de nada mais, sem Cadência e sem Reação, porque a rodada existe para alcançar o alvo despreparado e não para multiplicar ataques sobre ele.

Quem foi surpreendido conta como alvo indefeso, pela régua da Seção 10, apenas durante essa rodada e apenas se não tinha nenhuma forma de perceber a ameaça chegando. Um guarda que sabia que havia perigo na floresta mas não viu de onde o golpe veio esquiva com o Limiar cheio, porque o corpo dele já estava alerta ainda que os olhos não tivessem encontrado a origem a tempo. É a diferença entre não ver o ataque chegar e não saber que havia ataque algum para esperar, e é a distinção que a mesa aplica toda semana.

A Surpresa vale uma vez por combate. Um segundo grupo que se aproxime durante a mesma luta já encontra todos alertas, e a régua não se repete.

O combate termina por incapacitação de um dos lados, por rendição aceita, ou por fuga. Fuga é alcançar a banda Extrema em relação a todo perseguidor e sustentá-la por uma rodada inteira sem que ninguém vença a Disputa de Distância contra quem foge. É uma aposta de recurso e não uma saída garantida, porque a perseguição consome o fôlego dos dois lados na mesma proporção que qualquer outro deslocamento em combate.

## 5. A sequência de resolução do ataque

Todo golpe deste sistema, do soco mais simples à obra mais elaborada do repertório de um personagem, resolve pela mesma sequência de doze passos. É essa uniformidade que garante que duas mesas cheguem ao mesmo número a partir da mesma ficha, e nenhuma obra pula passo algum, mesmo quando um deles não muda nada no resultado.

| Passo | Resolução |
|---|---|
| 1 | Declaração da ação, do alvo ou do centro, e da arma ou obra empregada |
| 2 | Alcance pela Banda Mínima e Máxima da obra. Acima da máxima o golpe não alcança. Abaixo da mínima o coeficiente de entrega cai um degrau |
| 3 | O eixo de evitabilidade que a obra declarar, na escala que o cenário publica, ajusta o Limiar de Esquiva do alvo |
| 4 | O defensor gasta a Reação escolhendo a resposta. O Bloqueio não custa Reação e permanece disponível enquanto houver Guarda |
| 5 | Esquiva: o defensor rola d100 contra o próprio Limiar de Esquiva. Sucesso anula o golpe e a resolução termina aqui |
| 6 | Crítico: o atacante rola d100 contra o próprio Limiar de Crítico |
| 7 | Energia: Potência × coeficiente de entrega × multiplicador de Tipo, mais o Fator de Técnica que a obra declarar, tudo multiplicado por 1,5 se houve crítico |
| 8 | Guarda: o Impacto é a Energia multiplicada pelo coeficiente de impacto da arma. Impacto acima da Guarda restante causa Quebra e o golpe passa inteiro. Caso contrário a redução é Guarda dividida pela soma de Guarda e Impacto, com teto de 90%, consumindo a Guarda na proporção do que reduziu |
| 9 | Absorção: subtrai RES × 3 da Energia que passou, com o piso de 10% da Energia original sempre alcançando o alvo |
| 10 | O saldo entra no PV do alvo |
| 11 | Riders declarados pela obra, com o crítico elevando um grau |
| 12 | Custos e aftermath: Esforço da rodada, PM quando aplicável, o teto de saída da reserva relevante e condições sobre o próprio usuário |

O crítico multiplica a Energia antes das defesas, porque a energia extra do golpe bem colocado encontra a mesma guarda e o mesmo osso que a energia comum, e as camadas de defesa nunca sabem se o que chega até elas veio de um crítico ou não. O multiplicador de Tipo é propriedade do defensor, ainda que entre na conta do atacante no passo 7. É a relação entre a natureza do dano e o corpo que a recebe, e por isso mora do lado de quem sofre o golpe mesmo aparecendo do lado de quem o desfere.

Dois combatentes da faixa Especial, perfil Equilibrado, se enfrentam com lâmina curva. Cada um tem FOR 32, VEL 32, DES 32, DEF 32, RES 32 e PRE 32, PV 1920 e PS 768. A ficha de cada um resolve em Potência 1600, Guarda 160, Absorção 96, Golpe 21,33, Esquiva 5,33, Bloqueio 5,33, Fôlego 16, Limiar 64, Limiar de Esquiva 50 e Limiar de Crítico 16.

No passo 1 o atacante declara o golpe contra o defensor, com a lâmina curva empunhada. No passo 2 o alcance está dentro da Banda mínima e máxima da arma, sem ajuste no coeficiente. No passo 3 nenhum dos dois declarou eixo de evitabilidade fora do padrão, e o Limiar de Esquiva permanece 50. No passo 4 o defensor escolhe esquivar, gastando a Reação da rodada. No passo 5 ele rola 63 contra o Limiar de 50 e falha. No passo 6 o atacante rola 41 contra o próprio Limiar de Crítico de 16 e não obtém o golpe bem colocado. No passo 7 a Energia resolve em 1600 × 0,20 × 1,00, sem Fator de Técnica porque é um golpe comum, fechando em 320. No passo 8 o Impacto é 320 × 1,0, a leitura da lâmina curva, e os 320 pontos superam a Guarda de 160: o golpe quebra a Guarda e passa inteiro. No passo 9 a Absorção subtrai 96, e o piso de 32, dez por cento dos 320 originais, não incide porque o saldo já está acima dele, fechando em 224. No passo 10 o PV do defensor cai de 1920 para 1696. No passo 11 o rider de corte declara Sangramento Leve, com DoT de 22 por turno pela regra de dano dividido por dez. No passo 12 o atacante paga Esforço igual ao Golpe multiplicado pelo Esforço da lâmina curva, 21,33, e o defensor paga o Esforço da Esquiva gasta, 5,33; os dois seguem abaixo do próprio Limiar de recuperação e fecham a rodada com o Fôlego cheio.

## 6. Dano e as três camadas de defesa

O dano deste sistema é energia entregue. Um golpe carrega uma quantidade que o corpo do alvo processa em três camadas sucessivas antes que o saldo alcance o PV, e a ordem das três camadas importa. A energia atravessa primeiro a estrutura montada, depois a matéria do corpo, e a relação entre a natureza do dano e o corpo que o recebe permeia as duas.

A Potência de um golpe comum é (FOR + VEL) × 25, o mesmo par que produz o PS. Quem entrega mais energia queima mais energia produzindo-a, e por isso o golpe pesado é também o golpe caro. A arma declara dois coeficientes próprios, o de entrega, que converte Potência em Energia, e o de impacto, que converte Energia em pressão contra a Guarda. Nenhuma arma nomeada entra neste documento; o que ele publica é a tipologia de três classes que qualquer arma do cenário se encaixa antes de ganhar nome próprio.

| Classe | Esforço | Coeficiente de impacto |
|---|---|---|
| Arma de precisão | 0,8 | 0,8 |
| Lâmina curva | 1,0 | 1,0 |
| Arma pesada | 1,3 | 1,3 |

O coeficiente de entrega do ataque comum é 0,20, e é o mesmo em todas as classes: ele descreve a forma de entrega, o ponto concentrado de contato único, e não a arma que carrega o golpe até lá. O coeficiente de impacto varia pela classe porque é a massa por trás do golpe que decide quanta pressão a Guarda precisa deter, e a mesma escala que mede o Esforço de empunhar a arma mede o quanto ela pesa na guarda alheia.

**Guarda.** A Guarda mede a estrutura montada sobre o corpo. Ombro, cotovelo e quadril alinhados conduzem o momento do golpe até o chão em vez de deixá-lo alcançar o tronco, e é a capacidade de sustentar esse alinhamento sob impacto repetido que a Guarda representa. Uma guarda desfeita se remonta, e remontá-la custa tempo dentro da rodada. É por isso que ela recarrega em vez de ser um número fixo.

```
Guarda = DEF × 5
```

A taxa de recarga por rodada está na tabela de Exaustão da Seção 8, porque o cansaço é o que rouba o tempo de remontar a guarda.

**Absorção.** A Absorção é matéria. Osso, músculo e tecido detendo joules por existir, e essa capacidade não depende de postura, de consciência ou de disposição para lutar.

```
Absorção = RES × 3, piso de 10% da Energia original sempre passando
```

Ela nunca degrada com o cansaço e nunca é ignorada mesmo contra um alvo indefeso, porque o corpo continua sendo o mesmo corpo esteja ele alerta ou não. O piso de 10% garante que nenhuma quantidade de matéria detenha a totalidade de um impacto que a supera.

**Tipo.** O multiplicador de Tipo é a relação entre a natureza do dano e o que o corpo do alvo faz com ela, publicado pelo cenário que declara os tipos e as reações entre eles. Ele entra na Energia do passo 7 porque é ali que a conversão acontece, mas a grandeza pertence ao defensor: é o corpo dele reagindo à natureza do golpe, não uma propriedade do golpe em si.

**Quebra de Guarda.** Uma quebra que apenas atordoa e devolve o combatente ao bloqueio no instante seguinte é ruído: ninguém muda de decisão por causa dela. Uma quebra com janela larga produz o oposto, a troca de quebras encadeadas até alguém cair, e nenhuma das duas serve à mesa. O desenho correto é uma janela curta com uma consequência real, e a consequência precisa recair sobre a opção defensiva principal do combatente, e não sobre um atributo dele.

Quando o Impacto de um golpe supera a Guarda restante, além de o golpe passar inteiro e a Guarda ir a zero, o alvo entra no estado Quebra de Guarda, que dura até o fim do turno seguinte de quem quebrou. Durante esse estado a Guarda não recarrega, o Bloqueio deixa de estar disponível, e o Limiar de Esquiva do quebrado é multiplicado por 0,8. Gastar a Ação Completa e o Esforço de um Bloqueio encerra o estado no ato e devolve a recarga normal.

A quebra fica mais provável conforme a luta avança, porque a Guarda recarrega apenas em parte por rodada e essa parte cai com o cansaço. O combatente que chega cansado primeiro é o que perde a Guarda primeiro.

## 7. A economia de PS

O corpo sustenta esforço intenso com dois sistemas de energia que não se confundem. O primeiro é o estoque que o músculo libera sem esperar oxigênio chegar, a explosão que resolve um golpe, uma esquiva, um salto. O segundo é o motor que não sustenta a explosão e sim repõe o estoque entre um esforço e o seguinte, numa janela que corre na mesma escala de segundos que separa dois golpes em combate. É por isso que o tamanho da reserva depende da velocidade e da resistência juntas, enquanto a velocidade com que ela volta depende da resistência sozinha. Dois corpos com a mesma reserva e capacidade de recuperação diferente são a mesma criatura na primeira rodada e criaturas diferentes na décima quinta.

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

O Golpe lê o mesmo par que produz a Potência, porque quem entrega mais energia no ataque queima mais energia produzindo-a. O golpe caro é o golpe pesado.

| Ação | Esforço |
|---|---|
| Golpe | o Golpe da ficha, multiplicado pelo Esforço da arma |
| Cadência, primeiro degrau | Golpe × 1,5 |
| Cadência, segundo degrau | Golpe × 2 |
| Cadência, terceiro degrau | Golpe × 3 |
| Esquiva | a Esquiva da ficha, por Reação gasta |
| Bloqueio | o Bloqueio da ficha, dobrado quando resulta em Quebra |
| Disputa de Distância | a Esquiva |
| Corte de Trajeto | a Esquiva mais os metros atravessados |
| Manobra | o Golpe |
| Deslocamento | metros efetivos ÷ 5 |

Comprimir dois esforços máximos na mesma janela de seis segundos não custa o mesmo que espaçá-los ao longo de duas rodadas, porque o segundo esforço parte de um músculo que ainda não repôs nada da primeira explosão. É por isso que cada degrau de Cadência custa proporcionalmente mais que o anterior, e não o mesmo Golpe repetido.

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

O cansaço num corpo treinado é cinco penalidades pequenas em cinco lugares diferentes, e não um corte único. Um corte só em atributo chegaria ao mesmo tempo na potência do golpe, na esquiva, no deslocamento e na cadência, e o resultado pareceria uma punição quádrupla porque seria uma punição quádrupla. Nomear cada consequência no lugar dela permite que cada uma seja pequena e que o conjunto continue significando alguma coisa.

| Grau | PS restante | Recarga da Guarda | Potência | Limiar de Esquiva | Cadência | Deslocamento |
|---|---|---|---|---|---|---|
| Inteiro | 75% ou mais | 50% | cheia | cheio | cheia | cheio |
| Leve | 50 a 74% | 40% | cheia | cheio | cheia | cheio |
| Moderado | 25 a 49% | 30% | −10% | ×0,9 | cheia | −10% |
| Grave | 1 a 24% | 20% | −20% | ×0,8 | um degrau a menos | −25% |
| Crítico | 0% | 10% | −30% | ×0,7 | nenhum degrau | −50% |

O Grau Inteiro é a ausência da condição, e não um quinto grau dela: a Exaustão Física entra em campo a partir de 74% de PS, com os quatro graus de sempre, Leve, Moderado, Grave e Crítico.

No Grau Crítico valem ainda as duas regras já publicadas pelo Sistema de Efeitos de Status. O Esforço devido sai do PV, e qualquer ação física complexa exige teste de RES contra 50 ou falha.

A penalidade de Potência incide igualmente sobre o Esforço do Golpe. O cansado entrega menos energia e gasta menos Esforço na mesma proporção, porque é o mesmo golpe mais fraco pesando dos dois lados da conta.

A Absorção não degrada em grau nenhum. Osso e músculo detêm energia cansados ou descansados, porque a capacidade de deter dano não é a mesma coisa que a capacidade de continuar lutando.

O Fôlego e o Limiar leem RES, que nenhum grau de Exaustão reduz. A capacidade de se recuperar é a última coisa que o cansaço tira de um corpo, e é por isso que sempre existe um caminho de volta.

Como a Guarda recarrega menos e o Limiar de Esquiva encolhe ao mesmo tempo, o combatente cansado perde as duas defesas ativas juntas enquanto mantém a passiva intacta. A luta longa se resolve no corpo de quem sobrou, e essa é a razão de existir desta seção.

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

| Atacantes engajados com o mesmo alvo | Limiar de Esquiva |
|---|---|
| 1 | cheio |
| 2 | ×0,85 |
| 3 | ×0,70 |
| 4 ou mais | ×0,60 |

Alvo indefeso é quem está inconsciente, imobilizado em Grau Grave ou acima, ou surpreendido sem nenhuma chance de perceber a ameaça. Ele não esquiva, não bloqueia, e o golpe ignora a Guarda por completo, porque não existe postura nenhuma para sustentar. A Absorção continua valendo, porque a matéria do corpo não sabe se o dono está consciente. O crítico contra um alvo indefeso é automático.

Todo multiplicador de esquiva deste sistema vive na mesma faixa e na mesma forma, venha ele do cansaço da Seção 8, da Guarda quebrada da Seção 6 ou do cerco desta seção. Eles se multiplicam entre si sem exceção, e o piso de 5 e o teto de 95 do Limiar de Esquiva continuam valendo depois de toda a conta fechada.

## 11. Área e campo

Se a distância é relação entre dois combatentes, uma área não pode ocupar uma banda, porque uma banda só existe entre um par. A solução é que toda obra de área ou campo declara um centro próprio, escolhido dentro da Banda Máxima da obra exatamente como se escolheria um alvo único, e a partir desse centro a mesma escada de bandas se lê de novo.

| Categoria | Alcança |
|---|---|
| Alvo | um combatente |
| Área | tudo que está Engajado com o centro |
| Campo | tudo até a banda Curta do centro, ocupando o terreno enquanto durar |

Área e campo não distinguem aliados de inimigos, e é essa falta de distinção que precifica a categoria por si só: quem escolhe atingir área aceita atingir os próprios. Como referência de leitura em mesa sem mapa, Engajado com o centro comporta até três combatentes e a banda Curta do centro comporta até oito; os dois números orientam a narração e não travam contagem alguma.

## 12. Dano de fonte sem ficha

Uma fonte sem ficha, uma queda, um desabamento, o impacto contra uma parede, precisa machucar sem ter atributos próprios. Dano ambiental de valor fixo quebra nos dois extremos da régua de faixas, virando letal para quem começa e irrelevante para quem já domina o corpo, e produz tanto o herói que morre de um tropeço quanto o que salta de um penhasco sem sentir nada. Ligar toda fonte sem ficha ao mesmo motor de Energia que já resolve um golpe comum resolve os dois problemas de uma vez. A Absorção continua respondendo, e a fonte escala junto com o corpo que a sofre.

Toda fonte sem ficha declara apenas uma Potência, e a partir dali corre pelo motor comum da Seção 6. A Guarda não responde, porque não existe postura contra o chão que sobe ao encontro do corpo. Não há crítico, porque não há quem posicione o golpe.

```
altura efetiva = altura em metros − VEL, com teto de 150 metros
Potência da queda = altura efetiva × 60
```

Um teste de VEL somado a DES autoriza a subtração cheia da altura, a falha concede metade, e quem cai inconsciente ou preso não subtrai altura alguma, porque não há reação de queda possível. Um corpo treinado dissipa parte do impacto pela flexão das pernas no instante do choque, e a capacidade de dissipar cresce com a mesma velocidade de membro que produz o salto: quem salta de mais alto também aterrissa de mais alto sem se machucar mais por isso. O teto de 150 metros marca a altura em que a queda alcança velocidade terminal e para de piorar.

O catálogo de fogo, esmagamento, afogamento, frio e qualquer outra fonte nomeada pertence ao Sistema de Efeitos de Status e ao cenário que a publica, que só precisam declarar a Potência de cada uma para consumir este motor.

## 13. Exemplo de rodada completa

O Tanque tem FOR 43, VEL 22, DES 22, DEF 42, RES 45 e PRE 26, com PV 2640 e PS 804. O Veloz tem FOR 26, VEL 45, DES 45, DEF 24, RES 23 e PRE 35, com PV 1470 e PS 816. A ficha do Tanque resolve em Potência 1625, Guarda 210, Absorção 135, Golpe 21,67, Fôlego 22,5, Limiar 90. A do Veloz resolve em Potência 1775, Guarda 120, Absorção 69, Golpe 23,67, Fôlego 11,5, Limiar 46.

A iniciativa opõe 72 mais 1d6 do Veloz contra 47 mais 1d6 do Tanque, e o Veloz age sempre primeiro nesse par. Ele abre a rodada com a Ação Completa e um degrau de Cadência, comprando um segundo ataque na mesma janela. O primeiro golpe, com lâmina curva, resolve em Energia 355, Potência 1775 vezes 0,20, e o Impacto de 355 supera a Guarda de 210 do Tanque: a Guarda quebra e o golpe passa inteiro. A Absorção de 135 reduz o saldo para 220, e o PV do Tanque cai de 2640 para 2420. O Tanque entra em Quebra de Guarda, e o próprio Limiar de Esquiva dele, 27,5 contra o par ofensivo do Veloz, cai para 22 pelo multiplicador de 0,8 do estado.

No segundo golpe, com a Guarda já em zero e o Bloqueio indisponível pelo estado de Quebra, o Tanque gasta a Reação da rodada esquivando. Ele rola 58 contra o Limiar de 22 e falha: o golpe passa inteiro de novo, a Absorção reduz os mesmos 220, e o PV do Tanque cai de 2420 para 2200.

O Tanque revida com uma arma pesada. O Limiar de Esquiva do Veloz contra o par ofensivo do Tanque fecha em 93,75, e ele rola 22, um sucesso folgado que anula o golpe no passo 5.

No fim da rodada, o Tanque gastou 45,83 de Esforço, a soma do Bloqueio dobrado pela Quebra, da Esquiva gasta e do próprio ataque com a arma pesada, e fica abaixo do próprio Limiar de 90: recupera o Fôlego cheio de 22,5, fechando com 780,67 PS, 97% do máximo. O Veloz gastou 66,67, a soma dos dois ataques mais a Esquiva bem-sucedida contra o Tanque, e ultrapassa o próprio Limiar de 46: recupera metade do Fôlego, 5,75, fechando com 755,08 PS, 92% do máximo. Os dois seguem em Exaustão Inteiro ao fim da rodada, mas o Veloz gastou cerca de 45% mais Esforço que o Tanque nesta troca, o preço de multiplicar ataques numa única janela. A rodada seguinte decide se esse ritmo continua sustentável para o Veloz ou se o corpo dele começa a pagar o preço da pressa.
