---
id: core.canon-factor
title: "Fator de Cânone — Cálculo do XP de Ficha"
version: 1
layer: core
type: system
status: final
source-file: Fator_de_Canone_Documento_Final.md
---

# Fator de Cânone — Cálculo do XP de Ficha

Regra de cálculo do orçamento estrutural de personagem.

---

## Posição no Sistema

Este documento é a autoridade sobre o cálculo do XP de Ficha. Ele substitui a Seção 3 do Manual de Economia de XP e a Seção 3 do Núcleo do Sistema v3 no que toca à composição desse orçamento. As demais seções dos dois documentos permanecem em vigor.

Duas estruturas saem do sistema com a entrada desta regra. O Índice de Idade deixa de existir como fator independente, e a idade passa a operar dentro do Fator de Cânone pela curva de Plasticidade. Os Pontos de História e o teto HMax deixam de existir, e a marcação por Registro do ano ocupa a função que eles exerciam.

O XP Sorte permanece regido pelo Manual de Economia de XP, com a ressalva registrada na Seção 10.

---

## 1. A Fórmula

```txt
XP de Ficha = XP Base × Protagonismo × Fator de Cânone

XP Base = 3000
```

O XP Base é constante universal e vale para todos os sistemas que usam este núcleo.

---

## 2. Protagonismo

O Protagonismo mede a centralidade narrativa do personagem, ou seja, o quanto a história é sobre ele. A escala vai de 1 a 10 e entra na fórmula como multiplicador linear.

```txt
1   Anônimo        não é acompanhado por ninguém
2   Figurante      aparece na margem de histórias alheias
3   Coadjuvante    presença recorrente em histórias alheias
4   Aliado         participa das decisões e influencia o rumo
5   Protagonista   a história acontece por causa dele
6   Referência     outros personagens orientam as próprias histórias pela dele
7   Épico          a história dele atravessa histórias que não são dele
8   Lendário       a história dele organiza a de uma geração inteira
9   Mítico         a história dele é o eixo do próprio mundo
10  Eterno         não existe história do mundo sem ele
```

O valor 0 não existe na escala. Com Protagonismo 0 o XP de Ficha resulta em zero independentemente da vida vivida.

A escala mede centralidade em toda a sua extensão. Conquista realizada e legado acumulado são medidos pelo Cânone, não pelo Protagonismo. Um personagem de 17 anos pode ocupar o degrau 10 sem ter feito nada de escala mundial, desde que a campanha seja inteiramente sobre ele.

O Protagonismo funciona também como calibre do palco. Dois personagens podem ter atravessado anos de igual exigência contra adversários de porte muito diferente, e a diferença de porte aparece aqui.

O Protagonismo avança durante a campanha. O Mestre eleva o degrau quando a posição do personagem na história muda de fato, e o XP de Ficha é recalculado com o novo valor. O degrau nunca é elevado por pedido do jogador.

---

## 3. Fator de Cânone

```txt
Fator de Cânone = 1 + (C / C₀)^1,35

C₀ = 3,286
```

O `C₀` é a unidade da fórmula. Corresponde ao Cânone de um personagem que completou a formação e não viveu mais nada, com seis anos Fora de Quadro seguidos de seis anos de Origem. Esse personagem tem Fator de Cânone 2,0 exatos, e todo valor acima disso é medido em formações completas.

O expoente 1,35 estabelece que experiência compõe. Cada faixa de vida já atravessada acelera o aproveitamento da faixa seguinte.

---

## 4. Registro do Ano

O Cânone é montado a partir da vida do personagem dividida em faixas de idade. Cada faixa recebe um Registro, que declara o que aquele período exigiu dele.

| Registro | Definição | Peso | Expoente |
|---|---|---|---|
| Fora de Quadro | o ano não foi mostrado | 0,2 | 0,40 |
| Origem | alguém já sabia a resposta e ensinou | 1 | 0,60 |
| Capítulo | uma história fechada, sustentada por ele | 3 | 0,70 |
| Arco | uma história em partes, sustentada por ele | 5 | 0,85 |
| Evento | uma história maior que ele, na qual ele está dentro | 12 | 1,00 |

**Fora de Quadro** cobre o ano que não pediu adaptação alguma. A vida pode ter sido dura, triste ou instável, e ainda assim não ter exigido que o personagem se tornasse outra coisa.

**Origem** cobre o ano em que o problema enfrentado já tinha resposta conhecida, e alguém a transmitiu. Academia, aprendizado formal e tutela didática entram aqui. O peso é baixo porque a origem é a parte compartilhada de qualquer trajetória.

**Capítulo** cobre o ano de ofício exercido com consequência real, dentro da competência já adquirida. Falhar custa caro e o personagem sabe o que fazer.

**Arco** cobre o ano inteiro passado no limite da própria capacidade, enfrentando problemas sem resposta prévia. Existe tutela, moldura ou condição de parada.

**Evento** cobre o ano passado acima da própria capacidade, sem ninguém administrando o desfecho.

O expoente governa quanto um ano rende em relação ao anterior do mesmo Registro. O valor 0,40 de Fora de Quadro estabelece que rotina repete quase inteira e o décimo ano quase nada acrescenta. O valor 1,00 de Evento estabelece que nenhum ano repete outro, porque cada problema acima do próprio teto é um problema que o anterior não continha. A distância entre os dois extremos é o que permite a uma adolescência breve e brutal superar uma carreira longa e estável.

---

## 5. Plasticidade

O mesmo ano rende de forma diferente conforme a idade em que foi vivido.

```txt
Plasticidade(a) = 0,35 + 0,65 / (1 + e^(0,20 × (a − 24)))
```

| Idade | Plasticidade | Idade | Plasticidade |
|---|---|---|---|
| 6 | 0,983 | 26 | 0,611 |
| 8 | 0,975 | 28 | 0,551 |
| 10 | 0,963 | 31 | 0,479 |
| 12 | 0,946 | 35 | 0,415 |
| 15 | 0,908 | 40 | 0,375 |
| 18 | 0,850 | 50 | 0,354 |
| 20 | 0,799 | 60 | 0,350 |
| 24 | 0,675 | 70+ | 0,350 |

A curva tem platô na infância, transição de aproximadamente dez anos centrada nos 24 e piso em 0,35. O piso estabelece que um adulto nunca deixa de aprender, e passa a render cerca de um terço do que rendia na juventude. O ponto médio em 24 marca a idade em que a plasticidade formativa cai pela metade.

Um ano de Evento vivido aos 15 vale 0,908. O mesmo Evento vivido aos 40 vale 0,375.

---

## 6. Cálculo do Cânone

```txt
anos efetivos do Registro = Σ Plasticidade(idade de cada ano marcado nele)

C = Σ (peso × anos efetivos ^ expoente)     somando sobre os cinco Registros
```

Todos os anos de um mesmo Registro somam antes da aplicação do expoente, independentemente de estarem separados na linha do tempo. Uma faixa de Arco aos 13 anos e outra aos 26 formam um único total de Arco.

---

## 7. Ordem de Cálculo

```txt
1. Dividir a vida em faixas de idade e atribuir um Registro a cada faixa
2. Somar a Plasticidade de cada ano, agrupada por Registro
3. Aplicar peso e expoente de cada Registro e somar os cinco resultados = C
4. Fator de Cânone = 1 + (C / 3,286)^1,35
5. XP de Ficha = 3000 × Protagonismo × Fator de Cânone
```

Arredondamento por `round` apenas no resultado final. Nenhuma etapa intermediária é arredondada.

---

## 8. O Cânone

O documento chamado O Cânone registra, período a período, o que o mundo estava produzindo, e nomeia e data os Eventos existentes. Ele pertence ao Mestre e é anterior a qualquer ficha.

Cada período do mundo declara um teto de Registro disponível para quem viveu ali sem participação em Evento nomeado. Um período de paz institucional oferece teto de Origem ou Capítulo. Um período de guerra aberta oferece teto de Arco. Nenhum período oferece Evento como condição ambiental.

**Todo ano marcado como Evento tem que corresponder a um Evento nomeado n'O Cânone, e o personagem tem que ter estado dentro dele.** O jogador não declara um Evento, ele reivindica presença em um que já existe. A verificação na mesa consiste em localizar o Evento no documento e confirmar a presença.

Eventos têm extensão geográfica. Um Evento localizado só é reivindicável por quem estava na região atingida no período correspondente.

O Cânone precisa existir antes da primeira ficha ser criada. Sem ele não há marcação de Evento possível.

---

## 9. Arbitragem da Marcação

Esta seção governa a atribuição de Registro e vale tanto para o jogador quanto para o Mestre.

### 9.1 O teste de separação

A confusão relevante ocorre entre Arco e Evento, e uma pergunta a resolve.

> **Alguém estava garantindo que o personagem sobrevivesse?**

Resposta afirmativa fixa o teto em Arco, independentemente da brutalidade do período. Tutela predatória continua sendo tutela: um mestre que mantém o aprendiz vivo por interesse próprio administra o desfecho. Missão atribuída por instituição também administra, porque o risco foi calibrado ao operador antes da atribuição.

Evento é o ano em que ninguém administrou o desfecho.

O mesmo tipo de acontecimento troca de Registro quando a moldura falha. Um torneio supervisionado é Arco. O mesmo torneio no ano em que a supervisão foi rompida por ataque externo é Evento.

### 9.2 O erro previsível

O erro de marcação tem direção única e é sempre de inflação. Ele ocorre porque a memória guarda o que foi marcante, e a regra mede o que foi exigente. Um período dramático, sombrio e narrativamente importante pode ter sido inteiramente administrado por terceiros, e nesse caso não é Evento.

Saliência narrativa e exigência de adaptação são grandezas distintas. A regra mede a segunda.

### 9.3 Custo de um erro

Um único ano adolescente marcado como Evento quando era Arco eleva o XP de Ficha em aproximadamente 35%. O mesmo erro cometido em faixa adulta eleva em cerca de 15%, porque a Plasticidade já caiu.

A conferência se concentra na faixa dos 8 aos 20 anos. Marcação de faixa adulta admite blocos largos sem risco relevante de distorção.

### 9.4 Regras de conferência

**Na dúvida, descer um Registro.** O modo de falha do sistema é inflação e nunca deflação.

**Conferência de proporção.** Após a marcação, calcular a razão entre anos de Evento e anos posteriores ao fim da Origem. Uma trajetória de altíssima intensidade fica em torno de 30%. Uma carreira longa e perigosa fica em torno de 12%. Acima de 25% a ficha exige verificação item por item contra O Cânone.

**Conferência de escassez.** O número de Eventos disponíveis é propriedade do mundo e não do personagem. Um cenário em paz prolongada oferece uma ou duas janelas em uma geração inteira, e nenhuma ficha daquela geração pode exceder o que o mundo produziu.

**Conferência de continuidade.** Faixas de Registro alto não se sustentam indefinidamente. Uma sequência longa de Evento sem interrupção indica marcação incorreta ou personagem que deveria ter morrido.

### 9.5 Balanceamento entre fichas da mesma mesa

Personagens da mesma geração compartilham O Cânone e portanto compartilham o conjunto de Eventos disponíveis. A diferença de XP de Ficha entre eles vem de três fontes: presença ou ausência nos mesmos Eventos, qualidade da formação recebida, e Protagonismo.

Uma diferença grande de XP de Ficha entre personagens da mesma idade e mesma mesa é legítima quando corresponde a presença diferente nos mesmos Eventos. A mesma diferença sem correspondência n'O Cânone indica erro de marcação.

O XP de Ficha mede competência construída e não poder de combate. Linhagem, dōjutsu e herança são pagos em XP Sorte e nos documentos de clã e reincarnação, e não entram nesta conta. Uma ficha com XP de Ficha menor pode ser mais forte em mesa por essa via, e isso é comportamento esperado do sistema.

---

## 10. Progressão em Campanha

O XP de Ficha deixa de crescer por concessão manual. Cada período jogado entra como faixa nova na linha de vida do personagem, com o Registro que a campanha efetivamente teve, e o XP de Ficha é recalculado.

O Registro de um período jogado é atribuído pelo Mestre ao final dele, pelos mesmos critérios da Seção 9. Um arco de campanha que culminou em Evento nomeado n'O Cânone entra como Evento para os personagens presentes.

O Protagonismo é reavaliado nos mesmos marcos, conforme a Seção 2.

**Pendência declarada.** O termo aleatório do XP Sorte, conforme escrito no Manual de Economia de XP, possui amplitude superior à do termo de Protagonismo, e a combinação permite que um personagem não consiga pagar o núcleo do próprio clã. A correção desse termo e a reconciliação com a fórmula divergente do Guia de Criação de Clãs não são resolvidas por este documento.

---

## 11. Exemplos Fechados

### 11.1 Saki Uchiha, 17 anos, Protagonismo 10

| Faixa | Registro | Anos | Plasticidade somada | Contribuição |
|---|---|---|---|---|
| 0 a 6 | Fora de Quadro | 6 | 5,945 | 0,408 |
| 6 a 12 | Origem | 6 | 5,823 | 2,878 |
| 12 a 15 | Capítulo | 3 | 2,804 | 6,173 |
| 15 a 16 | Evento | 1 | 0,908 | 10,894 |
| 16 a 17 | Arco | 1 | 0,891 | 4,532 |

```txt
C               = 24,885
Fator de Cânone = 1 + (24,885 / 3,286)^1,35 = 16,381
XP de Ficha     = 3000 × 10 × 16,381 = 491.430
```

O único ano de Evento corresponde ao Incidente da Muralha Leste e responde por 44% do Cânone dela.

### 11.2 Perfil de referência: carreira longa, 31 anos, Protagonismo 7

| Registro | Anos totais | Plasticidade somada | Contribuição |
|---|---|---|---|
| Fora de Quadro | 3 | 2,980 | 0,310 |
| Origem | 2 | 1,979 | 1,506 |
| Capítulo | 19 | 16,358 | 21,223 |
| Arco | 4 | 2,728 | 11,736 |
| Evento | 3 | 1,971 | 23,654 |

```txt
C               = 58,429
Fator de Cânone = 49,684
XP de Ficha     = 3000 × 7 × 49,684 = 1.043.364
```

### 11.3 Perfil de referência: adolescência de guerra, 17 anos, Protagonismo 10

| Registro | Anos totais | Plasticidade somada | Contribuição |
|---|---|---|---|
| Fora de Quadro | 5 | 4,959 | 0,379 |
| Origem | 6 | 5,830 | 2,880 |
| Arco | 3 | 2,766 | 11,872 |
| Evento | 3 | 2,816 | 33,788 |

```txt
C               = 48,919
Fator de Cânone = 39,312
XP de Ficha     = 3000 × 10 × 39,312 = 1.179.360
```

Os dois perfis de referência ficam a 1,13 de distância um do outro. O perfil de 31 anos possui Cânone maior, com 58,429 contra 48,919, e a inversão vem inteiramente do Protagonismo.

### 11.4 Referência de faixas

| Perfil | Idade | Protagonismo | C | XP de Ficha |
|---|---|---|---|---|
| Civil sem ofício de risco | 40 | 1 | 5,7 | 8.700 |
| Formação recém-concluída | 12 | 4 | 3,29 | 24.000 |
| Operador de campo inicial | 15 | 5 | 9,7 | 64.500 |
| Protagonista de campanha | 17 | 10 | 24,9 | 491.430 |
| Veterano institucional | 31 | 7 | 58,4 | 1.043.364 |

---

## 12. Notas para o Mestre

- **O Cânone é pré-requisito.** Escreva os períodos e os Eventos nomeados antes da primeira sessão de criação. Sem esse documento a marcação de Evento fica aberta e a regra perde a única trava que possui.

- **A conversa de mesa é sobre presença.** Substitua qualquer discussão sobre o quanto um período foi intenso pela verificação de presença no Evento nomeado. A escala não depende de julgamento comparativo entre jogadores.

- **Escassez de Evento é ferramenta narrativa.** O número de janelas que o mundo ofereceu à geração dos personagens define o teto de poder daquela geração. Ampliar o teto exige que a campanha produza Eventos novos, o que é a forma pretendida de crescimento.

- **Verifique a faixa dos 8 aos 20.** É onde os erros de marcação custam caro. Faixa adulta admite blocos largos.

- **Não confunda a moeda.** O XP de Ficha mede competência construída. Um personagem com XP de Ficha modesto e linhagem forte é comportamento normal do sistema, e a diferença de poder em mesa vem das moedas pagas em outros documentos.

- **NPCs seguem a mesma regra.** Marque a linha de vida de qualquer NPC relevante pelo mesmo procedimento. Técnicas não custam XP de Ficha para NPCs, conforme o Manual de Economia de XP.
