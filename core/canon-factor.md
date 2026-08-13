---
id: core.canon-factor
title: "Cânone — Cálculo do XP de Ficha"
version: 2
layer: core
type: system
status: final
---

# Cânone — Cálculo do XP de Ficha

O Cânone mede quanto um personagem viveu. Ele é lido pelo narrador sobre a vida inteira do personagem, como um julgamento único, e converte essa leitura no orçamento estrutural inicial da ficha.

Este documento é a autoridade sobre o cálculo do XP de Ficha e substitui por inteiro a versão anterior do Fator de Cânone, incluindo o Registro do Ano, a curva de Plasticidade e o documento externo de Eventos nomeados que a sustentava.

## Posição no Sistema

O XP de Ficha permanece o orçamento estrutural da ficha, definido no Manual de Economia de XP: compra atributos, perícias e técnicas, e mede competência mecânica. O Cânone é a única entrada dessa conta.

O Protagonismo sai do cálculo do XP de Ficha. Ele continua existindo como alavanca do XP Sorte e da fórmula de resolução do sistema, ambos regidos pelo Manual de Economia de XP, e não participa mais da competência estrutural do personagem. Centralidade narrativa compra destino. Vida vivida compra competência, e as duas moedas não se misturam.

A idade opera como portão de alcançabilidade, descrito na Seção 4, um limite sobre o que é declarável em cada ponto da vida do personagem.

Nenhum dado é rolado. O XP de Ficha é o número mais estrutural de uma ficha, e vantagem estrutural não nasce de fonte não determinística.

## 1. A Fórmula

```txt
XP de Ficha = 5.000 × 2^Cânone
```

A base de 5.000 corresponde ao Cânone zero, o patamar de um personagem sem eixo de leitura relevante ainda vivido. Cada ponto inteiro de Cânone dobra o resultado, e a escala vai de 0 a 10.

## 2. Os Cinco Eixos

O Cânone é a soma direta de cinco eixos. Cada um vale de 0 a 2 e aceita meio ponto, para o julgamento que fica entre dois degraus. Hesitação entre dois degraus se resolve com esse meio ponto.

**Pressão** mede a demanda que o mundo impôs sobre o personagem.

```txt
0  Rotina sem desafio estrutural
1  Desafio real, no nível esperado do próprio ofício
2  Demanda constante acima do que a posição deveria aguentar
```

**Tração** mede a presença de algo ou alguém puxando o personagem para cima.

```txt
0  Crescimento sozinho, sem orientação relevante
1  Orientação real em algum momento da vida, mestre, clã ou instituição
2  Tutela contínua e deliberada de algo muito acima do próprio nível
```

**Agência** mede o controle do personagem sobre o que foi vivido.

```txt
0  Vítima dos eventos, sem poder de decisão
1  Agência parcial, escolhas reais em meio à pressão
2  Resistência e ação deliberada através da pressão
```

**Custo** mede o que a vida cobrou de fato.

```txt
0  Nada sacrificado
1  Perda real, com marca permanente
2  O preço mais alto que a história podia cobrar sem encerrar o personagem
```

**Amplitude** mede o quanto a vida do personagem importou além dele mesmo, pela consequência que já aconteceu.

```txt
0  História pessoal, sem reflexo além do próprio personagem
1  Afeta o grupo, o clã ou a vila
2  Muda o destino da nação ou do mundo
```

## 3. Disciplina de Leitura

Pressão se mede contra a posição do personagem, o padrão esperado de quem ocupa aquele papel. Um jinchūriki que carrega uma fera selada enfrenta o que a própria posição exige, e essa carga sozinha fixa Pressão em 1. O grau 2 pertence à exigência que ultrapassa o que até aquela posição deveria aguentar, como perseguição internacional sustentada ou responsabilidade muito acima do próprio degrau.

Tração conta tutela mesmo quando o tutor age por interesse próprio. Um mestre que mantém o aprendiz vivo para usá-lo depois ainda administra o desfecho, e essa tutela vale o mesmo grau que uma orientação benevolente.

Amplitude mede a consequência que já se consumou no mundo. Um segredo capaz de mudar o destino de uma nação vale o grau intermediário enquanto permanece guardado, e sobe ao grau máximo quando a consequência se realiza de fato.

## 4. Portão de Alcançabilidade por Idade

Cada faixa de idade declara um teto de Cânone. O teto é checagem de plausibilidade: a disciplina da Seção 3 já contém a maior parte do trabalho contra leitura inflada, e o teto cobre o caso em que uma soma alta aparece antes que a vida tenha tido tempo de produzi-la.

| Idade | Cânone máximo declarável |
|---|---|
| Até 6 anos | 1 |
| 7 a 11 anos | 3 |
| 12 a 14 anos | 6 |
| 15 a 17 anos | 8,5 |
| 18 a 25 anos | 9,5 |
| 26 anos ou mais | sem teto adicional |

Idade avançada não abre um teto novo. Ela apenas permite que uma vida mais longa tenha tido mais chance de acumular eixos altos, sem forçar isso.

## 5. Progressão em Campanha

O XP de Ficha deixa de crescer por concessão manual do narrador. Cada período jogado entra na leitura do Cânone como parte da vida do personagem, e a soma dos cinco eixos é reavaliada de forma holística, não período a período.

O portão de alcançabilidade da Seção 4 acompanha a idade do personagem durante a campanha, e libera Cânone mais alto conforme ele envelhece.

## 6. Exemplos Fechados

### 6.1 Saki Uchiha, 17 anos

| Eixo | Grau | Leitura |
|---|---|---|
| Pressão | 1,5 | A guerra fria do período pós-timeskip exige dela acima do esperado para a idade, sem chegar a décadas de sobrecarga sustentada |
| Tração | 1,5 | O vínculo com Kaname é orientação real, sem ser tutela contínua em tempo integral |
| Agência | 1,5 | Ela guarda o segredo e resiste por decisão própria, mas parte da pressão do período ainda é administrada por Kaname e pela estrutura ao redor dela |
| Custo | 1,5 | O Mangekyō cobrou um preço real e permanente, sem ser o mais alto que a história poderia cobrar |
| Amplitude | 1 | A Maldição do Ódio é o evento que organiza o mundo da campanha, mas a consequência que Saki carrega permanece guardada, ainda não realizada em escala de nação |

```txt
Cânone       = 7
XP de Ficha  = 5.000 × 2^7 = 640.000
```

### 6.2 Perfis de referência

| Perfil | Cânone | XP de Ficha |
|---|---|---|
| Civil idoso | 1,5 | 14.142 |
| Genin comum | 2,5 | 28.284 |
| Chunin comum | 4 | 80.000 |
| Jonin de rotina | 5 | 160.000 |

## 7. Notas para o Narrador

A leitura dos cinco eixos é feita uma vez sobre a vida inteira do personagem, nunca período a período. Dividir a vida em faixas e somar leituras parciais reintroduz a granulação que este sistema existe para evitar.

Compare o personagem contra os perfis de referência da Seção 6.2 antes de fechar uma leitura. Um resultado muito acima do Cânone de um jonin de rotina, para alguém que ainda não atravessou nada equivalente a uma carreira de risco sustentada, é sinal de leitura inflada por eixo.

Vantagem estrutural sem fundamento canônico não sobe eixo. Cada grau precisa de um evento nomeável na vida do personagem que o sustente.

## 8. Etiquetagem e Pendências

O Protagonismo deixa de multiplicar o XP de Ficha. O Manual de Economia de XP, Seção 2, ainda descreve o Protagonismo como alavanca que "multiplica o XP Ficha, alimenta o XP Sorte e participa da fórmula de resolução do sistema", e essa frase precisa de errata: a participação no XP de Ficha foi revogada por este documento.

A fórmula antiga, XP de Ficha igual a 3.000 vezes Protagonismo vezes Idade vezes História, ainda aparece em `core/xp-economy.md` Seção 3, em `worlds/naruto/systems/system-core.md` e em `worlds/naruto/systems/chakra-reserve.md`. Os três precisam de errata própria.

O Manual de Criação de Jutsus cita âncoras de orçamento derivadas da fórmula antiga: um jonin típico em torno de 175.000 XP e Saki em torno de 500.000 XP. Sob este documento, Saki fecha em 640.000 e um jonin de rotina em 160.000. A revisão dessas âncoras pertence ao Manual de Criação de Jutsus.

Uma escada de custo real com nove degraus, dois deles acima dos publicados aqui, não corresponde a nenhuma tabela existente no corpus. `core/reference-tables.md` publica sete faixas de investimento em atributos, sem nenhuma delas nomeada como degrau 8 ou 9. A pendência permanece sem documento que a sustente.

## Dependências

Este documento consome `core/xp-economy.md` v2.2 para a definição de XP de Ficha e XP Sorte como orçamentos separados, e para a definição de Protagonismo que permanece vigente fora do escopo revogado aqui.
