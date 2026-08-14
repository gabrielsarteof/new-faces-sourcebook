---
id: naruto.technique.kai
title: "Liberação"
version: 2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Kai_Liberacao_de_Genjutsu.md
supersedes: legacy.kai-liberacao-de-genjutsu
---

# Liberação — 解 (Kai)
Ninjutsu · Sem natureza elemental · Rank E [Atribuído]

A técnica universal de rompimento de genjutsu, ensinada como fundamento a qualquer shinobi formado.

---

## Sobre a Técnica

O Kai rompe um genjutsu ativo pela interrupção do fluxo de chakra que o sustenta. A técnica opera em duas modalidades. A auto-liberação, em que o usuário interrompe o próprio fluxo e desmonta a ilusão sobre si mesmo, e a liberação em aliado, em que um pulso de chakra externo aplicado por toque rompe a ilusão sobre outra pessoa, no registro canônico de Sakura libertando os companheiros de equipe. O databook não atribui rank formal à Liberação, e a etiqueta fica Atribuída em E pela acessibilidade universal da técnica.

A dificuldade real do Kai não está na execução, e sim em perceber que existe algo a romper. O cânone é consistente em mostrar shinobi presos em ilusões sem suspeitar delas até que um sinal externo ou um choque físico quebre o encanto. Por isso a técnica exige consciência prévia como portão. O usuário precisa saber ou suspeitar que está sob genjutsu antes de tentar o Kai, e essa detecção pertence à Escada de Quebra da Perícia Genjutsu, no degrau Percepção, resolvido por Sensoriamento, por leitura de Trama ou por âncora externa sem teste. Sem essa trava, o Kai preventivo a cada rodada anularia a categoria inteira de genjutsu na mesa.

O rompimento em si testa o mesmo motor que impôs a ilusão. Nenhum investimento de RC do usuário do Kai melhora a própria chance de escapar. O que decide é a soma de VONTADE e SAB da vítima contra o limiar que o impositor já travou no ato da imposição, o que faz do Kai um teste de resistência acumulada e não de esforço adicional.

---

## Requisitos de Acesso

- **Controle de Chakra:** LV1, o portão de rank E.
- **Grau de Exigência de Moldagem:** Trivial. A interrupção do próprio fluxo é ato bruto, sem calibração fina.
- **Consciência do genjutsu:** o usuário precisa saber ou suspeitar que está sob um genjutsu ativo, próprio ou de um aliado ao alcance, antes de declarar a ação. Este portão pertence ao degrau Percepção da Escada de Quebra, publicada na Perícia Genjutsu, e não a este documento.

---

## Custo de XP

A técnica não possui natureza elemental. O custo é único para qualquer shinobi.

| RC nominal | Custo mínimo | Custo de XP |
|---|---|---|
| 10 | 3 | 142 |

```
posição = (10 − 5) ÷ (40 − 5) = 0,143
XP_base = 100 + 0,143 × (400 − 100) = 142
```

**Acesso automático para praticantes de Genjutsu.** A Perícia Genjutsu concede a execução do Kai nas duas modalidades desde o próprio LV1 dela, como parte do que a perícia já cobra. Um personagem que já investiu em Genjutsu não paga o XP desta técnica de novo. A compra desta ficha serve exclusivamente a quem quer o Kai sem investir na perícia inteira.

---

## Mecânica de Ativação

- **Custo de RC:** custo mínimo de 3, multiplicado pelo fator do Índice de Desperdício do executor, pela régua padrão de Controle de Chakra.
- **Selos de referência:** 1, o gesto de dedos cruzados que acompanha o grito de "Kai" no cânone.
- **Janela de Canalização:** instantânea. **Ação:** ação do turno. A liberação em aliado exige toque no alvo.
- **Restrições:** exige consciência prévia do genjutsu. Sem suspeita ou percepção da ilusão, a ação não pode ser declarada.

---

## Resolução

A ruptura consome, sem redefinir, o Motor de Imposição publicado na Perícia Genjutsu.

```
eficiência        = 1 + √(teste de Genjutsu do impositor ÷ 205)
limiar registrado = (VONTADE + SAB da vítima) × (1 − RC investido do impositor × eficiência
                     ÷ RC máxima do impositor)
piso do limiar     = 10
```

O limiar registrado é fixado no instante da imposição e não muda depois, porque o investimento do impositor já aconteceu. Cada tentativa de Kai contra a mesma obra rola 1d100 contra esse mesmo limiar, salvo quando o caminho Amarra da Perícia Genjutsu declarar reincidência ou escalada de classe sobre aquela obra específica, hipótese em que a régua daquele caminho governa.

| Modalidade | Alcance | Efeito |
|---|---|---|
| Auto-liberação | O próprio usuário | Rola contra o limiar registrado do próprio genjutsu |
| Liberação em aliado | Toque | Rola contra o limiar registrado do genjutsu que aflige o alvo tocado, contando como rompimento externo onde a Classe de Quebra da obra distinguir as duas vias |

**Classe de Quebra.** Toda entrada de genjutsu no Compêndio de Genjutsu declara uma das três classes da Régua de Quebra: aceita auto-liberação, exige rompimento externo, resiste aos dois. O Kai só produz efeito dentro do que a classe declarada permite. Contra a classe que resiste aos dois, nem a auto-liberação nem a liberação em aliado bastam sozinhas, e a saída pertence à condição de quebra específica que a ficha daquele genjutsu publica, como dor física intensa ou assistência de Ninjutsu Médico.

---

## Progressão por Maestria

A técnica não escala por nível próprio. A maestria do executor do Kai não altera a própria chance de sucesso, porque a Ruptura testa a vítima contra o investimento do impositor. A leitura do Índice de Desperdício de Controle de Chakra incide apenas sobre o custo de RC pago pela ação.

```
desperdício = (185 − teste de Moldagem) × 1,3      piso 0%, teto 250%
custo pago  = 3 × (1 + desperdício)
```

Um personagem com Genjutsu ou com Defesa do Circuito de Controle de Chakra investidos entra em vantagem real contra genjutsu, mas essa vantagem se paga no degrau Entrada da Escada de Quebra, resistindo melhor à imposição original, e não neste documento.

---

## Sinergias

- **Perícia Genjutsu:** a Escada de Quebra inteira, os quatro degraus e seus donos, vive naquele documento. O Kai é apenas o degrau Ruptura.
- **Compêndio de Genjutsu:** cada entrada declara a própria Classe de Quebra, o canal de entrega e o requisito de caminho, e o Kai lê essas três declarações sem reescrevê-las.
- **Sensoriamento:** a percepção de intrusão de chakra alheio é a rota mais confiável para satisfazer o portão de consciência do Kai sem depender de um choque físico ou de um erro do executor da ilusão.
- **Trabalho em equipe:** a liberação em aliado por toque é o recurso canônico de resgate em cena, e equipes que priorizam essa cobertura reduzem o tempo de exposição de um companheiro capturado. Contra genjutsu que bloqueia um sentido específico, como uma obra que apaga a audição, a liberação em aliado por pulso alcança onde uma instrução falada não alcançaria.

---

## Notas para o Mestre

- **O portão é a consciência, não a execução:** nunca permita o Kai como verificação automática por rodada. O jogador precisa de um motivo narrativo ou mecânico para suspeitar da ilusão antes de declarar a ação.
- **O limiar já está travado:** não recalcule a fórmula a cada tentativa de Kai. O valor nasce no instante da imposição e serve a todas as tentativas seguintes contra aquela obra, salvo escalada declarada pela própria ficha do genjutsu.
- **Narração:** a auto-liberação é um esforço interno visível, o piscar forçado, a mordida no lábio, o corte superficial que muitos shinobi usam como gatilho de dor. A liberação em aliado é gesto físico de toque, muitas vezes sob pressão de tempo.
- **Interface com o Genjutsu:** este registro nunca resolve sozinho se uma ilusão específica cai. Consulte sempre a Classe de Quebra declarada no compêndio da técnica ilusória em uso.
