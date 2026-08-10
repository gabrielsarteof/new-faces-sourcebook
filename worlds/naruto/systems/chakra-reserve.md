---
id: naruto.system.chakra-reserve
title: "Reserva de Chakra"
version: 3
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
de Ficha é derivado do Protagonismo, da Idade e da História do personagem. Ele mede o
quanto aquele shinobi viveu, treinou e se desenvolveu. A Maturidade está embutida na
fórmula de cálculo do XP: personagens mais velhos têm mais XP pelo tempo vivido. A
História contribui pelos eventos formativos. O Protagonismo reflete a centralidade do
personagem nos acontecimentos que o moldaram. Juntos, esses eixos espelham a stamina
canônica. A raiz quadrada do XP entra na fórmula para refletir retornos decrescentes:
dobrar o treino não dobra a reserva.

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

## Limite de Saída por Turno

O corpo não consegue canalizar o volume total da RC de uma vez. Esse cap de output
simultâneo é o Limite de Saída (LS).

Em condições normais o LS equivale a 20% da RC por turno. Os 361 tenketsu e as Oito
Portas regulam esse fluxo, impedindo que o sistema circulatório de chakra colapse.

As Oito Portas elevam progressivamente o LS quando abertas, com custo físico
correspondente. Regras detalhadas em documento separado.

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

---

## Sinergias

- **PV alto:** eleva a RC diretamente. Clãs com força vital excepcional acumulam
  vantagem dupla: PV maior e multiplicador de linhagem alto.
- **XP de Ficha elevado:** aumenta a RC com retorno decrescente ao longo da campanha.
- **Oito Portas:** elevam o LS sem alterar a RC total.
- **Modo Sábio:** desacelera o consumo ao adicionar energia natural ao mix. Detalhes
  nas regras de Senjutsu.

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
