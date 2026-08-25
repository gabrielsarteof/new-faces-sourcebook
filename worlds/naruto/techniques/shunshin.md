---
id: naruto.technique.shunshin
title: "Técnica do Deslocamento Corporal"
version: 2.1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Shunshin_no_Jutsu.md
supersedes: legacy.shunshin-no-jutsu
---

# Shunshin no Jutsu
**瞬身の術 · Técnica do Deslocamento Corporal**
Ninjutsu · Sem natureza elemental · Rank D

A técnica de movimento em alta velocidade do repertório shinobi, do reposicionamento tático à chegada que parece teletransporte.

---

## Sobre a Técnica

O Shunshin no Jutsu vitaliza o corpo com chakra e o desloca em velocidade que o observador comum não rastreia. Aos olhos de quem assiste, o usuário some de um ponto e surge em outro, e a impressão de teletransporte é ilusão de velocidade. O corpo percorre o trajeto real, precisa de caminho transponível, e paredes ou abismos o limitam como limitam qualquer corrida. O databook classifica a técnica no rank D e vincula o custo à distância percorrida e à elevação do trajeto.

Na execução em combate, o usuário cruza a distância paga em uma explosão única de movimento dentro da própria vez. Durante o trânsito, o borrão é rápido demais para pontaria comum, e a chegada testa a percepção de cada observador pela mesma Régua de Leitura publicada na ficha do Kawarimi no Jutsu. Quem não acompanha o deslocamento perde a posição do usuário até ele agir, e é nesse lapso que a técnica decide combates. Fora de combate, o mesmo princípio sustenta saltos encadeados que multiplicam a velocidade de viagem, ao preço de chegar gasto.

O custo real da técnica é o fôlego. O chakra paga a distância, e o corpo paga o ritmo. O Modo Viagem drena o vigor na mesma proporção que qualquer deslocamento físico do sistema, e o shinobi que atravessa a região em ritmo de Shunshin chega ao destino à beira da exaustão. Em combate, o limite é a economia de ação, porque a técnica age e nunca reage. O deslocamento responde ao plano do usuário, jamais ao golpe do inimigo, fronteira que separa o Shunshin do Kawarimi.

Shisui Uchiha construiu sobre a técnica uma reputação de guerra, e o epíteto Shisui do Shunshin registra o teto do que o domínio dela representa. As vilas mantêm assinaturas visuais próprias, do redemoinho de folhas de Konoha à espiral de areia de Suna, sem qualquer diferença mecânica entre elas.

---

## Requisitos de Acesso

- **Controle de Chakra:** LV2, o portão de rank D.
- **Grau de Exigência de Moldagem:** Básica. O deslocamento é garantido pela banda paga, sem calibração adicional que justifique elevação de degrau.

---

## Custo de XP

A técnica não possui natureza elemental. O custo é único para qualquer shinobi e cobre as três bandas de distância.

| RC nominal (Banda Longa) | Custo mínimo (Banda Longa) | Custo de XP |
|---|---|---|
| 110 | 36 | 1.022 |

A interpolação corre pelo teto da faixa de custo variável, a Banda Longa sem elevação de trajeto, dentro do rank D.

```
posição = (110 − 40) ÷ (130 − 40) = 0,778
XP_base = 400 + 0,778 × (1.200 − 400) = 1.022
```

---

## Efeitos Globais

O deslocamento levanta o rastro da assinatura de vila do usuário no ponto de saída, folhas, areia, névoa ou o simples redemoinho de poeira, e o estalo do ar deslocado marca os dois pontos. A assinatura é escolhida na aquisição da técnica e não tem efeito mecânico.

O trajeto permanece legível para sensores e para dōjutsu de leitura de fluxo, que acompanham a linha de chakra entre saída e chegada. Para o observador comum, existe apenas o desaparecimento e o surgimento.

---

## Mecânica de Ativação

| Banda | Distância | RC nominal | Custo mínimo |
|---|---|---|---|
| Curta | até 15 m | 40 | 13 |
| Média | até 30 m | 70 | 23 |
| Longa | até 60 m | 110 | 36 |
| Longa, em elevação de trajeto | até 60 m, com elevação | 130 | 43 |

- **Custo pago:** o custo mínimo da banda escolhida multiplicado pelo fator do Índice de Desperdício do executor, pela mesma régua de Controle de Chakra que rege qualquer técnica.
- **Selos de referência:** 0, estrutural. O Shunshin é explosão de movimento vitalizado por chakra e não construto moldado, e a assinatura selada não depende de Concisão nem de teste de interface.
- **Janela de Canalização:** instantânea nas bandas Curta e Média para qualquer shinobi de rank chuunin em diante. A Banda Longa respeita a Janela sobre o custo pago real do usuário, e pode exigir um turno de preparação para reservas baixas em patamar inicial de Moldagem.
- **Ação:** ação de movimento na própria vez do usuário.
- **Restrições:** exige trajeto transponível. A técnica age e nunca reage, sem qualquer uso como resposta a ataque declarado. A elevação significativa no trajeto sobe a banda em um degrau de custo, conforme a âncora do databook, e a Banda Longa em elevação usa o teto de 130 RC do rank.

---

## Resolução — As Três Propriedades

**Deslocamento em explosão.** O usuário cruza instantaneamente a distância da banda paga, por trajeto real e transponível. O movimento resolve inteiro dentro da ação, sem pontos intermediários alvejáveis pelo fluxo normal do turno.

**Imunidade de trânsito a ataques de perfil inferior a Teleguiado.** Durante o deslocamento, a dimensão testada pertence à técnica atacante, não a este documento. Qualquer ataque cujo Perfil de Evasão fique abaixo de Teleguiado não tem alvo válido contra o usuário em trânsito, e o movimento não pode ser interceptado por reações. A proteção cobre apenas o trânsito. Parado no ponto de chegada, o usuário é alvo normal, e o Shunshin em si não declara Perfil de Evasão próprio por não ser técnica ofensiva de alvo.

**Chegada não lida.** No instante do deslocamento, cada observador testa a própria percepção em oposição ao teste de Moldagem do usuário, pela Régua de Leitura do cenário, `naruto.system.reading-scale`, consumida aqui por referência. A classe é Ilegibilidade: o borrão não oferece ameaça alguma de ler, e a familiaridade não corrói o efeito.

- **Falha do observador:** perde a posição do usuário até ele agir. Se o primeiro ataque do usuário na mesma vez alcança um observador que falhou no teste, ele resolve contra um alvo que não contesta a conexão, e o degrau que a técnica atacante publica não se move.
- **Sucesso do observador:** ele acompanha o borrão inteiro, e o combate segue sem lapso.

A banda mais cara comprime mais o teste de Moldagem do lado do usuário, e é assim que a velocidade superior se expressa contra a percepção do observador.

---

## Modo Viagem

Fora de combate, os saltos encadeados multiplicam a velocidade de viagem terrestre do usuário por 3.

```
Custo de RC por quilômetro = 30
Custo de PS por quilômetro = 200
```

O custo de PS segue a régua de deslocamento do Núcleo de Combate, que cobra metros efetivos divididos por cinco, resolvendo 200 PS por quilômetro. O corpo continua pagando o esforço físico de cobrir a distância por baixo da velocidade que o chakra empresta, e o chakra do Shunshin não reduz esse preço, apenas soma a taxa própria de 30 RC por quilômetro sobre ele. O dreno de vigor é o freio estrutural do modo. O shinobi que esgota o PS na estrada entra nas regras de Exaustão Física do Sistema de Efeitos de Status, e a viagem longa continua pertencendo à marcha comum além do ponto de ruptura. O Shunshin compra a chegada rápida de quem aceita chegar gasto, e a régua corrigida torna esse preço real em vez de simbólico.

---

## Interação com Defesas

- **Perfis abaixo de Teleguiado:** sem alvo válido durante o trânsito.
- **Teleguiado e acima:** alvejam o usuário em trânsito normalmente. A técnica construída para perseguir alcança o borrão.
- **Técnicas de área:** a zona que cobre o trajeto ou o ponto de chegada atinge o usuário pelas regras da técnica. A imunidade de trânsito protege da pontaria, nunca da saturação.

---

## Progressão por Maestria

A técnica não escala por nível próprio. A maestria se expressa pela leitura do Índice de Desperdício sobre o custo mínimo de cada banda, e pela leitura tática de quando a banda cara vale a compressão que compra.

```
desperdício = (185 − teste de Moldagem) × 1,3      piso 0%, teto 250%
custo pago  = custo mínimo da banda × (1 + desperdício)
```

| Patamar de Moldagem | Teste | Curta (13) | Média (23) | Longa (36) | Longa elevada (43) |
|---|---|---|---|---|---|
| LV3, aprofundado | 60 | 34 | 60 | 95 | 113 |
| LV4, com Refino | 116 | 25 | 44 | 68 | 82 |
| LV5, com Refino aprofundado | 142 | 20 | 36 | 56 | 67 |
| LV6, pleno | 185 | 13 | 23 | 36 | 43 |

---

## Referência de Usos por Perfil

Deslocamentos por reserva cheia, pareados com o patamar LV4 com Refino como moldagem de referência.

| Usuário | RC | LS | Banda Curta (25) | Banda Longa (68) |
|---|---|---|---|---|
| Genin alto / Chuunin | 700–1.400 | 140–280 | 28–56 | 10–21 |
| Jounin | 1.200–2.500 | 240–500 | 48–100 | 18–37 |
| Elite / ANBU | 2.000–4.000 | 400–800 | 80–160 | 29–59 |

---

## Sinergias

- **Kawarimi no Jutsu:** a substituição nega o golpe na vez do inimigo, e o Shunshin abre distância real na vez seguinte. A dupla cobre a lacuna entre o alcance curto de uma técnica e a fuga efetiva da outra, e as duas leem a mesma Régua de Leitura em momentos distintos da rodada.
- **Bunshin no Jutsu:** o véu de cópias conjurado antes do deslocamento multiplica os pontos de chegada possíveis na leitura do observador, empilhando as duas aplicações da mesma régua.
- **Variantes elementais:** os compêndios elementais registram deslocamentos com assinatura funcional, como o Passo de Chamas do Katon, que usam este documento como âncora de referência.
- **Iniciativa alta:** o usuário que age antes converte a chegada não lida em abertura de combate, fechando distância dentro do tempo de reação da cena inteira.

---

## Notas para o Mestre

- **A fronteira com o Kawarimi é inegociável:** nenhuma leitura de mesa autoriza o Shunshin como resposta a golpe declarado. Se o jogador quer reagir, a técnica é outra e o slot é outro.
- **Narração da chegada não lida:** descreva o ponto vazio antes do som, o redemoinho de folhas assentando onde o usuário estava, e a voz que já fala atrás do alvo. O lapso do observador é o produto da técnica.
- **Narração contra percepção superior:** o observador que passa no teste vê o borrão inteiro, e o combate segue sem lapso. A diferença entre as duas narrações ensina a mesa a respeitar sensores e dōjutsu.
- **Modo Viagem como decisão de custo real:** a correção do custo de PS por quilômetro torna a viagem longa uma escolha estrutural, não cosmética. Cobre com rigor e deixe a Exaustão Física do Sistema de Efeitos de Status assumir quando o jogador estoura o fôlego.
- **PdMs:** jounin usam a banda Curta como pontuação de combate, uma ou duas vezes por cena nos momentos de virada. Corpos de elite abrem emboscadas pela banda Média com iniciativa alta. A banda Longa em combate é assinatura de especialistas em velocidade.
