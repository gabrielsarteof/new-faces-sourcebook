---
id: core.canon-factor
title: "Cânone — Cálculo do XP de Ficha"
version: 3
layer: core
type: system
status: final
---

# Cânone — Cálculo do XP de Ficha

O Cânone mede quanto um personagem viveu. Ele é um número decimal de 0 a 10, declarado pelo narrador sobre a vida inteira do personagem, como um julgamento único, e converte essa leitura no orçamento estrutural inicial da ficha.

Este documento é a autoridade sobre o cálculo do XP de Ficha e substitui por inteiro a versão anterior do Cânone, que compunha o número somando cinco eixos julgados em separado. A composição por eixos travava a soma em vinte e um valores possíveis entre 0 e 10, e a fórmula exponencial ampliava esse degrau fixo em saltos de XP grandes demais entre uma leitura e a seguinte. O Cânone agora é declarado direto, na precisão decimal que o narrador julgar necessária.

## Posição no Sistema

O XP de Ficha permanece o orçamento estrutural da ficha, definido no Manual de Economia de XP: compra atributos, perícias e técnicas, e mede competência mecânica. O Cânone é a única entrada dessa conta.

O Protagonismo sai do cálculo do XP de Ficha. Ele continua existindo como alavanca do XP Sorte e da fórmula de resolução do sistema, ambos regidos pelo Manual de Economia de XP, e não participa mais da competência estrutural do personagem. Centralidade narrativa compra destino. Vida vivida compra competência, e as duas moedas não se misturam.

A idade opera como portão de alcançabilidade, descrito na Seção 3, um limite sobre o que é declarável em cada ponto da vida do personagem.

Nenhum dado é rolado. O XP de Ficha é o número mais estrutural de uma ficha, e vantagem estrutural não nasce de fonte não determinística.

## 1. A Fórmula

```txt
XP de Ficha = 5.000 × 2^Cânone
```

A base de 5.000 corresponde ao Cânone zero, o patamar de um personagem sem vida vivida de peso ainda. Cada ponto inteiro de Cânone dobra o resultado, e a escala vai de 0 a 10.

## 2. Declaração do Cânone

O narrador lê a vida inteira do personagem e declara um Cânone entre 0 e 10, em qualquer precisão decimal que a leitura pedir. Cânone dez é o teto que o sistema reconhece: nenhuma vida excede essa marca, porque nada resta acima de mudar o destino do mundo inteiro.

A leitura pesa cinco perguntas, sem se prender a categoria fixa nem a grau nomeado para cada uma:

- Quanto o mundo exigiu do personagem acima do esperado da própria posição.
- Quanta tutela ou orientação ele recebeu de algo ou alguém acima do próprio nível.
- Quanto controle ele teve sobre o que viveu, contra quanto foi vítima dos eventos.
- Que preço a vida cobrou de fato, até o mais alto que a história podia cobrar sem encerrar o personagem.
- Quanto essa vida importou além do próprio personagem, pela consequência que já se consumou no mundo.

Nenhuma das cinco perguntas tem peso fixo nem grau próprio. A soma delas é o julgamento do narrador, expresso direto no número, não a soma aritmética de cinco parcelas separadas.

## 3. Portão de Alcançabilidade por Idade

Cada faixa de idade declara um teto de Cânone. O teto é checagem de plausibilidade, não a primeira linha de defesa contra leitura inflada: a Seção 4 já cobre a maior parte desse trabalho, e o teto entra para o caso em que um número alto aparece antes que a vida tenha tido tempo de produzi-lo.

| Idade | Cânone máximo declarável |
|---|---|
| Até 6 anos | 1 |
| 7 a 11 anos | 3 |
| 12 a 14 anos | 6 |
| 15 a 17 anos | 8,5 |
| 18 a 25 anos | 9,5 |
| 26 anos ou mais | sem teto adicional |

Idade avançada não abre um teto novo. Ela apenas permite que uma vida mais longa tenha tido mais chance de produzir um Cânone alto, sem forçar isso.

## 4. Disciplina de Leitura

A demanda que a vida impôs se mede contra a posição do personagem, o padrão esperado de quem ocupa aquele papel, não contra dificuldade absoluta. Um jinchūriki que carrega uma fera selada enfrenta o que a própria posição exige; o que eleva o Cânone é a exigência que ultrapassa até esse padrão, como perseguição internacional sustentada ou responsabilidade muito acima do próprio degrau.

Tutela conta mesmo quando quem tutela age por interesse próprio. Um mestre que mantém o aprendiz vivo para usá-lo depois ainda administra o desfecho, e essa tutela pesa o mesmo que uma orientação benevolente.

A consequência no mundo só conta quando já se consumou. Um segredo capaz de mudar o destino de uma nação pesa menos enquanto permanece guardado, e passa a pesar cheio quando a consequência se realiza de fato.

Compare a leitura contra os perfis de referência da Seção 6.2 antes de fechar um número. Um resultado muito acima do Cânone de um jonin de rotina, para um personagem que ainda não atravessou nada equivalente a uma carreira de risco sustentada, é sinal de leitura inflada.

Vantagem estrutural sem fundamento canônico não sobe o Cânone. Todo ponto de peso precisa de um evento nomeável na vida do personagem que o sustente.

## 5. Progressão em Campanha

O XP de Ficha deixa de crescer por concessão manual do narrador. Cada período jogado entra na leitura do Cânone como parte da vida do personagem, e o número é reavaliado de forma holística, não período a período.

O portão de alcançabilidade da Seção 3 acompanha a idade do personagem durante a campanha, e libera Cânone mais alto conforme ele envelhece.

## 6. Exemplos Fechados

### 6.1 Saki Uchiha, 17 anos

Cânone declarado: 7. A guerra fria do período pós-timeskip já exige dela acima do esperado para a idade, o vínculo com Kaname é orientação real sem ser tutela em tempo integral, ela guarda o segredo do Mangekyō por decisão própria ainda que parte da pressão do período seja administrada por Kaname, o preço que a linhagem cobrou é real e permanente sem ser o mais alto que a história poderia cobrar, e a Maldição do Ódio organiza o mundo da campanha inteira mesmo com a consequência que Saki carrega ainda guardada, não realizada em escala de nação.

```txt
XP de Ficha = 5.000 × 2^7 = 640.000
```

### 6.2 Perfis de referência

| Perfil | Cânone | XP de Ficha |
|---|---|---|
| Civil idoso | 1,5 | 14.142 |
| Genin comum | 2,5 | 28.284 |
| Chunin comum | 4 | 80.000 |
| Jonin de rotina | 5 | 160.000 |

## 7. Etiquetagem e Pendências

O Protagonismo deixa de multiplicar o XP de Ficha. O Manual de Economia de XP, Seção 2, ainda descreve o Protagonismo como alavanca que "multiplica o XP Ficha, alimenta o XP Sorte e participa da fórmula de resolução do sistema", e essa frase precisa de errata: a participação no XP de Ficha foi revogada por este documento.

A fórmula antiga, XP de Ficha igual a 3.000 vezes Protagonismo vezes Idade vezes História, ainda aparece em `core/xp-economy.md` Seção 3, em `worlds/naruto/systems/system-core.md` e em `worlds/naruto/systems/chakra-reserve.md`. Os três precisam de errata própria.

O Manual de Criação de Jutsus cita âncoras de orçamento derivadas da fórmula antiga: um jonin típico em torno de 175.000 XP e Saki em torno de 500.000 XP. Sob este documento, Saki fecha em 640.000 e um jonin de rotina em 160.000. A revisão dessas âncoras pertence ao Manual de Criação de Jutsus.

Uma escada de custo real com nove degraus, dois deles acima dos publicados aqui, não corresponde a nenhuma tabela existente no corpus. `core/reference-tables.md` publica sete faixas de investimento em atributos, sem nenhuma delas nomeada como degrau 8 ou 9. A pendência permanece sem documento que a sustente.

## 8. Arredondamento

O resultado de XP de Ficha se arredonda ao inteiro mais próximo. Nenhuma etapa intermediária arredonda: o Cânone entra na fórmula da Seção 1 com toda a precisão decimal declarada, e só o resultado final sofre arredondamento.

## Dependências

Este documento consome `core/xp-economy.md` v2.2 para a definição de XP de Ficha e XP Sorte como orçamentos separados, e para a definição de Protagonismo que permanece vigente fora do escopo revogado aqui.
