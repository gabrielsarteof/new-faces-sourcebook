---
id: naruto.technique.taju-kage-bunshin
title: "Técnica dos Múltiplos Clones das Sombras"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: null
supersedes: null
---

# Tajū Kage Bunshin no Jutsu
**多重影分身の術 · Técnica dos Múltiplos Clones das Sombras**
Ninjutsu · Sem natureza elemental · Rank A a Kinjutsu, conforme a quantidade de clones

A escalada do Kage Bunshin no Jutsu além da banda tática, até o ponto em que multiplicar o próprio corpo deixa de ser truque de combate e passa a ser evento capaz de decidir uma guerra sozinho.

---

## Sobre a Técnica

O Tajū Kage Bunshin no Jutsu é o mesmo princípio do Kage Bunshin levado ao extremo de escala. A fórmula de partição de reserva não muda. O que muda é o número de corpos que ela divide, de cinco clones simultâneos até contagens que a série mostra na casa das centenas nas mãos de Naruto Uzumaki, o único praticante canônico a normalizar o uso maciço da técnica.

A razão de a técnica carregar o peso de kinjutsu não é a força de um clone individual, que segue exatamente tão frágil quanto qualquer Kage Bunshin comum, e sim o que a multiplicação irrestrita representa. Um exército pessoal que qualquer shinobi poderia gerar sozinho, sem hierarquia, treino de tropa ou logística, rompe o equilíbrio de poder que sustenta o sistema de vilas. É essa leitura geopolítica, e não a mecânica de um clone isolado, que o databook registra ao classificar a escala máxima da técnica como proibida.

Esta ficha assume tudo o que a ficha do Kage Bunshin já publicou, o custo mínimo como terça parte do RC nominal, a Divisão da Reserva por partição, a dispersão por qualquer dano sólido, a devolução de RC restante e a transferência de memória ao usuário original. Nenhuma dessas regras é reescrita aqui. O que esta ficha acrescenta é a extensão da curva de RC além de quatro clones e o preço crescente, em rank, em XP e em consequência sobre o próprio corpo, que essa extensão cobra.

---

## Requisitos de Acesso

- **Camada de acesso:** Requisito de Segurança para as faixas Rank A e Rank S. A ausência de reserva suficiente para a escala escolhida não impede o aprendizado, e a penalidade cai sobre a execução, na forma do Aftermath declarado abaixo. A faixa Kinjutsu acrescenta a trava narrativa da Seção 4.3 do Manual de Criação de Jutsus, descrita adiante.
- **Controle de Chakra:** LV5, o portão de rank A e o piso de entrada nesta ficha.
- **Técnica prévia:** Kage Bunshin no Jutsu.
- **Grau de Exigência de Moldagem:** Alta, idêntico ao Kage Bunshin. A partição em si não fica mais difícil com mais corpos, apenas mais cara em RC.

---

## Custo de XP

A curva de RC estende a fórmula do Kage Bunshin, `RC_total(N) = 200 + (N − 1) × 150`, além de quatro clones. A técnica atravessa três faixas de rank pela mesma quantidade, e cada faixa publica o próprio custo de XP, interpolado pelo teto da faixa que a quantidade de clones alcança.

| Faixa | Clones | RC nominal (teto) | Custo mínimo (teto) | Custo de XP |
|---|---|---|---|---|
| Rank A | 5 a 9 | 1.400 | 466 | 18.500 |
| Rank S | 10 a 26 | 3.950 | 1.316 | 49.400 |
| Kinjutsu | 27 ou mais | 4.100+ | 1.366+ | 50.000 |

```
Rank A:  posição = (1.400 − 700) ÷ (1.500 − 700) = 0,875
         XP_base = 8.000 + 0,875 × (20.000 − 8.000) = 18.500

Rank S:  posição = (3.950 − 1.500) ÷ (4.000 − 1.500) = 0,980
         XP_base = 20.000 + 0,980 × (50.000 − 20.000) = 49.400

Kinjutsu: XP = piso absoluto de 50.000, pela Seção 4.3 do Manual de Criação de Jutsus,
          que não admite modificador abaixo desse valor. Nenhuma interpolação corre
          acima do piso, porque a faixa de Kinjutsu não declara teto de RC.
```

Um personagem compra a faixa mais alta que pretende alcançar. A compra do rank S inclui o uso completo do rank A dentro dela, porque a curva de RC é contínua e a técnica é uma só. A compra do Kinjutsu inclui as duas faixas anteriores pela mesma razão.

---

## Mecânica de Ativação

| Clones | RC nominal | Custo mínimo |
|---|---|---|
| 5 | 800 | 266 |
| 9 | 1.400 | 466 |
| 10 | 1.550 | 516 |
| 15 | 2.300 | 766 |
| 20 | 3.050 | 1.016 |
| 26 | 3.950 | 1.316 |
| 27 | 4.100 | 1.366 |

- **Custo pago:** custo mínimo da linha escolhida multiplicado pelo fator do Índice de Desperdício do executor, pela mesma régua de Controle de Chakra de qualquer técnica.
- **Selos de referência:** 1, herdado do Kage Bunshin, independente do número de clones da mesma leva.
- **Janela de Canalização:** a partir do rank S, a canalização deixa de ser instantânea para a maioria dos executores, pela régua padrão de Janela sobre o custo pago real. Reservas de escala Ápice sustentam a faixa S em canalização curta; a faixa Kinjutsu quase sempre exige preparação.
- **Ação:** ação do turno para a conjuração de toda a leva de clones.
- **Restrições:** herda todas as restrições do Kage Bunshin, mais o teto declarado de cada faixa desta ficha.

---

## Divisão da Reserva

Idêntica à fórmula publicada no Kage Bunshin, sem alteração, aplicada ao N declarado desta ficha.

```
RC perdida na partição = custo pago(N) − custo mínimo(N)
RC redistribuída        = RC_total(N) − RC perdida na partição
RC de cada entidade      = RC redistribuída ÷ (N + 1)         piso, resto para o usuário
```

Em contagens altas, a perda de partição de um executor fora do LV6 pleno se torna proporcionalmente pesada, e é comum que cada clone individual de uma leva de vinte ou mais carregue uma fração pequena de RC, insuficiente para qualquer técnica de rank alto. A ficha não impõe piso de RC por clone. A mesa resolve naturalmente: um clone sem RC suficiente para nenhuma técnica própria ainda serve como corpo de combate físico e como unidade de reconhecimento, funções que não consomem a fração carregada.

---

## Combate e Destruição do Clone

Idêntico ao Kage Bunshin, consumido por referência. Cada clone dispersa ao primeiro dano físico sólido, devolve a própria fração de RC restante ao usuário e transfere memória automaticamente. Nenhuma regra nova nasce aqui.

---

## Aftermath

A tabela de Aftermath por Rank do Manual de Criação de Jutsus passa a incidir a partir da faixa Rank A desta ficha, ausente por completo do Kage Bunshin comum.

| Faixa | Aftermath |
|---|---|
| Rank A (5 a 9 clones) | Leve. O usuário sofre dano de PS igual a 20% do custo de RC pago na conjuração, esforço físico do próprio corpo sustentando a partição em escala maior. |
| Rank S (10 a 26 clones) | Saída reduzida. O Limite de Saída do usuário cai à metade pelo resto da cena, refletindo a reserva parcialmente comprometida na sustentação simultânea de tantos corpos. |
| Kinjutsu (27 ou mais clones) | `[proposta]` Burnout. O usuário sofre dano direto de 15% do próprio PV máximo ao final da cena em que a técnica foi usada nessa escala, no mesmo patamar percentual já usado em outros limiares estruturais do corpus. O Narrador pode elevar o grau em cenas de uso repetido na mesma sessão. |

---

## Acesso Narrativo à Faixa Kinjutsu

A faixa de 27 clones ou mais satura a marcação Kinjutsu e sai dos compêndios abertos, pela Seção 4.3 do Manual de Criação de Jutsus. O personagem precisa de fonte narrativa específica de acesso, herança, pergaminho recuperado ou captura de conhecimento, validada pelo Narrador antes de qualquer gasto de XP. As faixas Rank A e Rank S desta ficha não exigem essa validação e permanecem dentro da camada Requisito de Segurança declarada abaixo.

---

## Progressão por Maestria

A técnica não escala por nível próprio além da escolha de quantos clones criar dentro da faixa comprada. A maestria se expressa pela leitura do Índice de Desperdício sobre o custo mínimo de cada linha, exatamente como no Kage Bunshin, e pela decisão tática de quando o número de corpos compensa o Aftermath crescente.

```
desperdício = (185 − teste de Moldagem) × 1,3      piso 0%, teto 250%
custo pago  = custo mínimo × (1 + desperdício)
```

---

## Sinergias

- **Kage Bunshin no Jutsu:** base mecânica inteira desta ficha. Nenhuma regra de partição, dispersão ou memória é republicada aqui.
- **Bunshin Daibakuha no Jutsu:** qualquer clone desta escala maior ainda pode ser detonado pela mesma técnica de explosão, e uma leva de vinte clones representa vinte cargas potenciais em campo.
- **Treino paralelo:** a aplicação mais citada do cânone. Uma centena de clones estudando ou treinando em paralelo comprime meses de prática solitária em uma única sessão, e o Mestre que aplicar essa leitura deve ancorar o ganho em Blocos de maturação do Manual Global de Treinamento, nunca em XP direto.
- **Reconhecimento de terreno em escala de vila:** a busca simultânea por uma área inteira, cada clone cobrindo um setor, é o outro emprego canônico recorrente fora de combate.

---

## Notas para o Mestre

- **A faixa Kinjutsu é evento de mesa, não compra de rotina:** trate a validação narrativa da Seção 4.3 como checkpoint de campanha. Um personagem que chega à casa das centenas de clones está tocando o mesmo tipo de poder que definiu o clímax de guerra do cânone.
- **O Aftermath é o freio real acima do rank A:** não deixe o custo de RC ser o único limite. A saída reduzida do rank S e o burnout do Kinjutsu existem para que o jogador sinta o preço de escalar, mesmo quando a reserva permite pagar.
- **Clones fracos ainda valem como corpos:** um clone com fração mínima de RC não lança técnicas relevantes, mas ainda ocupa espaço, absorve um golpe e enxerga o próprio setor do campo. Não descarte a utilidade tática de levas grandes só porque a RC individual é baixa.
- **PdMs:** a técnica em escala de rank A ou S aparece em antagonistas de elite com reserva excepcional. A faixa Kinjutsu é reservada a eventos de campanha específicos, nunca a um combate de rotina.
