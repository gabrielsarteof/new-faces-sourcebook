---
id: naruto.system.chakra-reserve
title: "Reserva de Chakra"
version: 3.5
layer: scenario
scenario: naruto
type: system
status: final
source-file: reserva_chakra_v3.md
---

# Reserva de Chakra
Substância sobrenatural presente em todo ser vivo. Energia que percorre o corpo.

---

## Sobre a Reserva de Chakra

Chakra é a substância sobrenatural que flui pelo corpo de todo ser vivo. É produzido
pela fusão de duas energias: a energia física, extraída de cada célula do corpo, e a
energia espiritual, derivada da consciência. Diz-se que existe em todas as coisas e
que conecta a consciência de todos desde o nascimento. Para um shinobi, o chakra é
o fundamento de todo jutsu. Sem ele, nenhuma técnica é executável.

A Reserva de Chakra (RC) é a quantidade máxima de chakra que um shinobi consegue
produzir e sustentar. Com prática esse teto pode ser expandido, mas até certo limite:
cada shinobi é limitado pelo que sua genética concede. Kakashi Hatake tem reservas
medianas e nenhum treino lhe concederia o chakra de Naruto Uzumaki.

O chakra presente em combate parte da RC e decresce com o uso de jutsu. Quando se
esgota, o shinobi entra em colapso físico progressivo e não pode mais executar
técnicas. A distância entre a RC de um genin comum e a de um Uzumaki treinado não é
gradual: são escalas inteiramente diferentes.

---

## Os Fatores que Determinam a RC

### Energia Física

Extraída das células do corpo. Representa vigor, endurance e condicionamento. Aumenta
com treino físico, exercício e resistência. Um shinobi que fortalece o corpo produz
mais energia física e, portanto, mais chakra.

### Energia Espiritual

Derivada da consciência. Aumenta com experiência acumulada, prática repetida de
técnicas e vivência. Praticar um jutsu repetidamente constrói experiência, aumenta a
energia espiritual e permite criar mais chakra com mais potência.

### Stamina

O cânone chama de stamina a soma das duas energias. É o motor da reserva. Quanto
maior a stamina de um shinobi, maior sua capacidade de produzir chakra.

### Força Vital

Fator separado da stamina. Determina vitalidade, resistência a esforços extremos e
recuperação. Shinobis com força vital excepcional suportam o que mataria outros.
Kushina Uzumaki sobreviveu à extração do Kyuubi. Tsunade sobreviveu a ser cortada ao
meio. A força vital está presente em todos, mas é amplificada geneticamente em
linhagens específicas.

### Linhagem

O fator dominante e fixo. Existe um teto genético que nenhum treino ultrapassa.
Os Uzumaki e Senju, descendentes de Ashura, têm reservas colossais e força vital
lendária. Os Uchiha, descendentes de Indra, têm reservas grandes por natureza,
potencializadas pela energia mental que sustenta o Sharingan. A linhagem não adiciona:
multiplica tudo que o shinobi constrói.

### Maturidade

A reserva cresce conforme o shinobi amadurece. Crianças têm reservas menores que suas
versões adultas. Esse crescimento não é automático: é consequência de treino, vivência
e desenvolvimento acumulados com o tempo.

### Potencial Latente Individual

Dentro de uma mesma linhagem há variação individual. Duas Uzumaki com a mesma idade
e o mesmo histórico de treino podem ter reservas diferentes. Kushina foi enviada a
Konoha como candidata a hospedeira do Kyuubi por ter chakra anormalmente alto mesmo
para uma Uzumaki. Esse componente não pode ser treinado: é fixo desde o nascimento.

---

## Como o Sistema Representa Esses Fatores

**Stamina, maturidade e energia espiritual são representadas pelo XP de Ficha.** O XP
de Ficha é derivado do Cânone, a leitura de quanto aquele shinobi viveu, treinou e se
desenvolveu, publicada em `core/canon-factor.md`. A Maturidade está embutida nessa
leitura: uma vida mais longa teve mais chance de acumular os eixos que compõem o
Cânone. Juntos, esses eixos espelham a stamina canônica. A raiz quadrada do XP entra
na fórmula abaixo para refletir retornos decrescentes: dobrar o treino não dobra a
reserva.

**A força vital é representada pelo PV.** Os clãs modificam o PV diretamente. O tipo
de ser também influencia. O PV entra na fórmula com peso dois.

**A linhagem é representada pelo Multiplicador de Clã.** Carrega a variância
gigantesca da escala. Multiplica a base inteira porque o sangue amplifica tudo que o
shinobi constrói.

**O potencial latente é representado pelo Dado de Potencial.** Rolado uma única vez na
criação. Determina o bônus percentual sobre a RC base.

---

## Fórmula da RC

```
RC_base  = ( √(XP_Ficha)  +  √(PV) x 2 )  x  Mult_Cla

RC_final = RC_base x (1 + Bonus_Dado)
```

Resultado arredondado para o inteiro mais próximo.

---

## Determinação Inicial

Calculada uma única vez na criação do personagem, com os valores de XP de Ficha, PV
e clã já definidos. Após o cálculo da RC_base, o jogador rola 1d100.

### Bônus do Dado de Potencial

| Roll (d100) | Bônus sobre RC_base |
|------------:|:-------------------:|
| 1 a 20      | +0%                 |
| 21 a 50     | +10%                |
| 51 a 75     | +25%                |
| 76 a 90     | +50%                |
| 91 a 99     | +75%                |
| 100         | +100%               |

O bônus é somado sobre a RC_base. Um roll de 100 dobra a RC_base.

---

## Multiplicadores de Clã

| Clã      | Mult. | Fundamento                                                                              |
|----------|:-----:|-----------------------------------------------------------------------------------------|
| Uzumaki  | x5,5  | Reservas colossais e força vital lendária. Bônus de stamina explícito nos databooks. Topo de volume. |
| Senju    | x5,0  | Linhagem de Ashura. Stamina e vitalidade extremas. Hashirama representa o teto da escala humana. |
| Uchiha   | x4,0  | Reservas grandes ligadas à energia mental de Indra. Sarada supera Boruto nos databooks pela linhagem. Volume alto; densidade detalhada em documento separado. |
| Akimichi | x3,5  | Chakra alto por necessidade. Técnicas drenam rápido; o corpo precisa repor constantemente. |
| Aburame  | x2,0  | Sustentam os kikaichū com o próprio chakra de forma contínua. Reserva acima da média por demanda constante. |
| Sarutobi | x1,8  | Versáteis e sólidos. Sem linhagem de volume extremo. |
| Inuzuka  | x1,5  | Foco físico com ninken. Reserva ligeiramente acima da média. |
| Hyuga    | x1,5  | Controle e precisão como foco central. Reserva mediana. |
| Hatake   | x1,5  | Sem traço de volume de clã. Kakashi é o exemplo canônico de reserva média em elite. |
| Nara     | x1,3  | Técnicas de baixo custo. Foco em estratégia e eficiência. |
| Yamanaka | x1,3  | Técnicas mentais de baixo custo bruto. Reserva mediana. |

Shinobis sem clã consolidado usam x1.

---

## Índice de Volume

A RC é um número absoluto, e sozinha ela informa pouco. A escala inteira do mundo cabe
dentro da mesma grandeza, do civil que nunca moldou nada à besta que uma vila inteira
sente acordar, e o valor bruto não responde à pergunta que o resto do sistema faz sobre
uma reserva: quão fora do comum ela é para aquele corpo.

O Índice de Volume é essa leitura. Ele compara a reserva que o shinobi tem com a reserva
que o mesmo shinobi teria sem clã e sem potencial latente, e o resultado mede o quanto o
sangue e a sorte de nascimento o afastaram do que ele seria sem nenhum dos dois.

```
Índice de Volume = RC final ÷ RC do mesmo shinobi com Mult_Cla 1 e sem Bonus_Dado
                 = Mult_Cla x (1 + Bonus_Dado)
```

As duas grandezas da razão são RC de verdade, calculadas pela fórmula desta página, e a
simplificação à direita existe porque os dois termos que a razão não cancela são
exatamente os dois que a linhagem e o Dado introduzem. O XP de Ficha e o PV desaparecem
da conta, e é isso que faz o índice medir sangue em vez de idade.

Um índice de 1 descreve quem não tem clã de volume. Um índice de 4 descreve quem carrega
quatro vezes a reserva que teria sem o próprio sangue, e é onde os grandes clãs
depositam seus portadores.

**O índice é fixo na vida do personagem.** Ele não sobe com o XP acumulado, porque o XP
eleva os dois lados da razão na mesma proporção. Só muda se o clã, o Dado de Potencial
ou uma reencarnação mudarem, e nenhum dos três muda por progressão comum. Isso é o que
permite que réguas caras de aprendizado leiam o índice sem reprecificar a ficha toda a
cada sessão.

### Como o índice se lê no cânone

| Quem | Índice | Leitura |
|---|---:|---|
| Sakura Haruno, sem clã de volume | 1,00 | o zero da régua, e o melhor controle da geração dela |
| Kakashi Hatake, x1,5 | 1,50 | reserva média em elite, o exemplo que esta página já nomeia |
| Aburame, x2,0 | 2,00 | acima da média por demanda constante |
| Sasuke Uchiha, x4,0 | 4,00 | volume alto de clã, sem Dado excepcional |
| Naruto Uzumaki, x5,5 | 5,50 | o topo do volume de clã, antes de qualquer pool externo |
| Senju de Ashura com Dado 100 | 15,00 | a combinação humana máxima, o patamar de Hashirama |

A escala não termina em quinze. Ela segue subindo enquanto houver reserva para medir, e
é assim que precisa ser: a RC não tem teto, e uma régua que a lê não inventa um.

### O que entra e o que fica de fora

Entra tudo que multiplica a própria RC, porque o índice lê a RC final. O Multiplicador
de Clã, o Dado de Potencial e o traço de reencarnação que eleva o multiplicador entram
sem cláusula própria, e é a soma dos três que produz os índices mais altos que a mesa
alcança.

Os pools que correm por fora da reserva ficam de fora enquanto os documentos que os
governam não publicarem a conversão. A chakra da bijū selada e a camada do ancestral são
reservatórios separados, com regra própria de acesso e de esgotamento, e somá-los ao
índice sem essa regra faria o jinchūriki emitir presença de besta com o selo fechado e
intocado. A Reserva de Energia Natural nunca entra, por não pertencer a este cálculo em
leitura nenhuma.

O depósito de acúmulo do Controle de Chakra também fica de fora, tanto na Carga Espiral
quanto na Reserva Diferida, e aquele documento já declara essa fronteira do outro lado.

### Quem consome o índice

O raio de assinatura de chakra, que o Controle de Chakra publica e o Sensoriamento
consome, é cinquenta metros multiplicados pelo índice. A aferição de nível de força do
Sensoriamento devolve o índice de um alvo lido, em faixa de meia unidade no degrau cinco
e em unidade fechada nas versões de LV6. E a Sobretaxa de Volume, publicada no Controle
de Chakra, indexa a ele o preço em XP daquela perícia.

---

## Limite de Saída por Turno

O corpo não consegue canalizar o volume total da RC de uma vez. Esse cap de output
simultâneo é o Limite de Saída (LS). Ele é o cano único de saída de chakra por turno,
compartilhado por jutsu, dōjutsu e efeito sustentado, e se lê sempre da RC máxima e
nunca da RC restante. Os 361 tenketsu e os Oito Portões regulam esse fluxo, impedindo
que o sistema circulatório de chakra colapse.

A largura do cano se lê da posição do praticante na natureza empregada, conforme a
Escada de Afinidade do Sistema Elemental.

| Posição na natureza empregada | Limite de Saída |
|---|---|
| Afinidade | 25% da RC por turno |
| Compatibilidade | 20% da RC por turno |
| Natureza aprendida | 15% da RC por turno |
| Gasto sem natureza elemental declarada | 20% da RC por turno |

Moldagem pura, dōjutsu, Fūinjutsu e efeito sustentado sem natureza declarada correm na
faixa de vinte por cento. Quando o praticante emprega mais de uma natureza no mesmo
turno, a largura é a menor entre as posições empregadas: o cano permanece único e não
se soma por natureza, e a diversidade elemental não amplia o orçamento de chakra da
rodada.

**Todo modificador do cano é relativo.** Fonte que amplie o Limite de Saída o faz por
fator sobre a largura da posição empregada, e nunca substituindo o número por um valor
absoluto. Uma fonte que antes elevava o cano de vinte para trinta por cento passa a
multiplicá-lo por um e meio, entregando trinta por cento a quem opera em
Compatibilidade, trinta e sete e meio a quem opera na Afinidade e vinte e dois e meio
a quem opera em natureza aprendida. É essa forma que impede a ampliação comprada de
apagar a vantagem de vocação de quem já escoa mais.

Os Oito Portões elevam progressivamente o LS quando abertos, com custo físico
correspondente, e o oitavo o revoga por inteiro enquanto durar. A tabela de teto por
portão e o preço de cada degrau pertencem ao Sistema dos Oito Portões.

A Vontade pode autorizar ultrapassar o LS em momentos de desespero extremo.

---

## Recuperação de Chakra

Descanso físico repõe a energia física. Descanso mental repõe a energia espiritual.
Os dois precisam ocorrer para recuperação completa.

**Descanso curto:** recupera 20% da RC. Mínimo 30 minutos sem combate ou jutsu.
Possível uma vez entre encontros.

**Descanso longo:** recupera 100% da RC. Exige sono completo ou repouso de ao menos
8 horas.

Forçar chakra além do esgotamento causa dano direto ao corpo proporcional ao excesso.

---

## Pools Externos

**Bijuu:** a chakra da Bijuu selada funciona como segundo reservatório
interno. O pool da Bijuu não some quando a RC do hospedeiro se esgota. Regras
detalhadas no documento de Bijuu.

**Reencarnação:** o transmigrado carrega sua RC mais uma camada do chakra do ancestral.
Condição única: no máximo dois personagens no mundo a possuem simultaneamente. Não é
hereditária nem comprável. Regras detalhadas no documento de Reencarnação.

**Reserva de Energia Natural:** o praticante de Senjutsu colhe do mundo um recurso que
corre por fora desta reserva, com teto próprio lido do teste daquela perícia. A REN
nasce vazia em toda cena, não se recupera com descanso e não entra em nenhum cálculo
desta página. Regras detalhadas na perícia de Senjutsu.

---

## Sinergias

- **PV alto:** eleva a RC diretamente. Clãs com força vital excepcional acumulam
  vantagem dupla: PV maior e multiplicador de linhagem alto.
- **XP de Ficha elevado:** aumenta a RC com retorno decrescente ao longo da campanha.
- **Oito Portões:** elevam o LS sem alterar a RC total, e no oitavo o revogam.
- **Modo Sábio:** desacelera o consumo ao adicionar energia natural ao mix, pagando em
  REN o que sairia daqui. A perícia de Senjutsu publica o teto, a taxa de colheita e o
  dreno de sustentação, e não lê a reserva em requisito algum: o acesso corre por
  compatibilidade do corpo e por aceitação da espécie, e aquele documento declara que
  nenhum limiar de reserva governa a prática.
- **Volume alto:** encarece o Controle de Chakra pela Sobretaxa de Volume, que lê o
  Índice de Volume. O preço do volume é cobrado na aquisição da precisão, e não há teto
  de refinamento em lugar nenhum do sistema.

---

## Notas para o Mestre

- **A hierarquia de reservas é intencional.** Um jovem Uzumaki com pouco XP tem RC
  maior que um veterano sem clã com XP extremo. Não corrija essa assimetria.
- **Peça verificação de RC** em sequências pesadas de jutsu, combates prolongados ou
  tentativas de uso além do esgotamento.
- **RC alta emite presença sensorial.** Descreva via sensor ou testemunha antes do
  primeiro jutsu. Não deixe para revelar em combate.
- **Esgotamento é gatilho narrativo.** Permita forçar além do limite com consequências
  físicas reais. A Vontade entra como autorização para esse gasto.
- **Segundo eixo de densidade pendente.** Trate o Uchiha como reserva alta sem
  diferencial mecânico de potência até o documento de Densidade ser escrito.
- **Volume cobra na aprendizagem, nunca no resultado.** O portador de reserva colossal
  demora mais e paga mais para refinar o controle, e chega exatamente onde qualquer
  outro chega. Nenhuma régua do sistema rebaixa o teste dele por ele ter muito chakra, e
  nenhuma o barra de uma técnica por esse motivo.
