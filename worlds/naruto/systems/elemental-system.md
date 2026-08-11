---
id: naruto.system.elemental
title: "Transformação de Natureza — Sistema Elemental"
version: 6
layer: scenario
scenario: naruto
type: system
status: final
source-file: Sistema_Elemental_v6.md
---

# Transformação de Natureza (Seishitsu Henka) · Sistema Elemental v6
Conversão do chakra nas sete naturezas, suas afinidades, aquisição e relações de superação em confronto.

---

## Sobre a Transformação de Natureza

A Transformação de Natureza é a conversão do chakra em uma das cinco naturezas elementais, Fogo, Vento, Raio, Terra e Água, ou em uma das duas naturezas do eixo do Onmyōton, Yin e Yang. O shinobi molda o próprio chakra para que ele assuma as propriedades da natureza. A transformação de natureza define as propriedades do chakra, e a transformação de forma define o formato e o movimento. As duas são componentes independentes da criação de qualquer técnica.

Cada natureza tem um comportamento próprio no mundo. O Fogo projeta calor intenso, em geral expelido pela boca, e incendeia o que toca. O Vento afia o chakra até torná-lo cortante, alcança distâncias médias e longas, e amplifica o corte de qualquer arma que o conduza. O Raio converte o chakra em eletricidade, perfura e difunde pelo sistema nervoso do alvo, e aumenta a letalidade de armas metálicas. A Terra molda solo, pedra e lama, cria estruturas defensivas e altera o terreno sob os pés. A Água serve à ofensa, à defesa e ao suporte, e em alto domínio não depende de fonte de água próxima. Yin e Yang têm domínios próprios, governados pelo Eixo do Onmyōton.

Todo shinobi nasce com afinidade natural por uma ou mais naturezas. A afinidade é a que melhor serve ao chakra do indivíduo, tende a ser compartilhada com ao menos um dos pais, e é revelada pelo Papel de Indução de Chakra. O papel queima para o Fogo, parte ao meio para o Vento, amassa para o Raio, esfarela em terra para a Terra e umedece para a Água. Em quem possui mais de uma afinidade, o papel reage com intensidade plena à primária e com reações mais fracas às adicionais.

A natureza de afinidade é a primeira que o shinobi aprende e aquela que concentra mais técnicas ao longo da vida. Outras naturezas se adquirem por treino. Jōnin comumente dominam duas. Dominar as cinco elementais por meios normais é façanha de um punhado de lendas em toda a história, com Hashirama Senju, Tobirama Senju, Hiruzen Sarutobi, Orochimaru, Mū e Kakashi Hatake entre elas.

---

## Requisitos de Acesso

- **Pré-requisito:** Controle de Chakra, porque a perícia da natureza é dependente e se ancora nele.
- **Atributo regente:** INT.
- **Categoria:** Ninja (×1,5).
- **Portão de Reserva:** o custo efetivo da técnica cabe no Limite de Saída do shinobi, universal em 20% da RC por turno.
- **Portão de Controle:** a perícia da natureza empregada atinge o nível mínimo do rank da técnica.

| Rank da técnica | E | D | C | B | A | S |
|---|---|---|---|---|---|---|
| Nível mínimo na perícia da natureza | LV1 | LV2 | LV3 | LV4 | LV5 | LV6 |

Os dois portões são independentes e valem por natureza. Um shinobi alcança rank S em Fogo e rank C em Água simultaneamente, conforme o desenvolvimento de cada perícia.

O portão de moldagem, que mede o refinamento que a técnica exige do Controle de Chakra, corre em paralelo a estes dois e pertence à Régua de Exigência de Moldagem daquela perícia.

---

## Despertar / Aquisição

### Afinidade natal (criação de personagem)

A afinidade é determinada por rolagem na criação, em três passos.

**Passo 1, quantidade de afinidades.**

O primeiro elemento é sempre garantido. Cada afinidade adicional exige um novo teste de d100, separado e independente, rolado apenas se o teste anterior foi bem-sucedido. A primeira falha encerra a cadeia, e o personagem fica com as afinidades já conquistadas até ali.

A chance de cada degrau sai de uma fórmula de escalada única, em que cada degrau é 20% maior que o anterior, começando em 10% no segundo elemento. O resultado é arredondado para o inteiro mais próximo em cada degrau, porque é isso que o d100 rola de verdade, em faixa fechada e sem casa decimal:

```
chance(degrau) = arredondar( 10% × 1,2^(degrau − 2) )
```

| Passo | Cálculo bruto | Chance do teste | Faixa no d100 | Chance composta | Frequência |
|---|---|---|---|---|---|
| 1º elemento | | 100% | | 100% | todo mundo |
| 2º elemento | 10,0 | 10% | 01 a 10 | 10% | 1 em 10 |
| 3º elemento | 12,0 | 12% | 01 a 12 | 1,2% | 1 em 83 |
| 4º elemento | 14,4 | 14% | 01 a 14 | 0,168% | 1 em 595 |
| 5º elemento | 17,3 | 17% | 01 a 17 | 0,0286% | 1 em 3.501 |
| 6º elemento | 20,7 | 21% | 01 a 21 | 0,006% | 1 em 16.674 |
| 7º elemento | 24,9 | 25% | 01 a 25 | 0,0015% | 1 em 66.693 |

O cálculo bruto existe para mostrar de onde vem o número. Na mesa, o Mestre e o jogador usam a coluna de faixa, rolam 1d100, e o resultado entra na cadeia se cair dentro dela. A chance composta encadeia os valores já arredondados de cada degrau.

Não existe teto fixo em cinco naturezas. A cadeia continua enquanto o personagem for passando nos testes, um de cada vez, parando na primeira falha, o que permite até sete afinidades natas: as cinco elementais mais Yin e Yang. Chegar às sete é resultado extremo, algo em torno de 1 em 66.700 numa população grande de shinobi. Quatro afinidades ou mais exigem origem especial e aval do Mestre.

A quantidade final de afinidades natas é o número de testes bem-sucedidos em sequência, incluindo o primeiro garantido.

**Passo 1.5, natureza comum ou eixo do Onmyōton.**

Toda vez que a cadeia do Passo 1 é testada com sucesso, antes de determinar qual natureza a afinidade representa, rola-se o que essa natureza é: uma das cinco elementais, ou Yin, ou Yang. A rolagem usa 1d20, e Yin e Yang ocupam os extremos do dado.

| Resultado (1d20) | Sem viés | Viés a Yin | Viés a Yang |
|---|---|---|---|
| Yin | 1 | 1 a 3 | 1 |
| Elemental | 2 a 19 | 4 a 19 | 2 a 17 |
| Yang | 20 | 20 | 18 a 20 |

O viés de clã eleva a chance da natureza favorecida para 15%, três faces, mordendo a faixa elemental. O lado oposto permanece em uma face. Os clãs que publicam viés são o Uchiha a Yin, o Uzumaki a Yang e o Senju a Yang.

Yin e Yang são a sexta e a sétima natureza do sistema, e se adquirem e desenvolvem pelo mesmo procedimento das cinco elementais. Não existe etapa de manifestação, centelha ou natureza nomeada no eixo do Onmyōton, e a perícia da natureza é a natureza desenvolvida. A Etapa de manifestação e a Centelha permanecem em vigor para as Kekkei Genkai e Kekkei Tōta, que pertencem a Naturezas Avançadas.

O restante da rolagem segue para a tabela de raridade dos cinco elementos.

**Passo 2, elemento de cada afinidade.**

A afinidade primária usa a tabela de raridade ajustada pelo clã e pela vila de origem. As afinidades adicionais rolam na tabela base, ignorando elementos já obtidos e rerrolando duplicatas.

Tabela de raridade base:

| d100 | Elemento |
|---|---|
| 01 a 26 | Fogo |
| 27 a 50 | Água |
| 51 a 72 | Terra |
| 73 a 90 | Raio |
| 91 a 100 | Vento |

Viés de clã característico, no exemplo do Uchiha para Fogo:

| d100 | Primária |
|---|---|
| 01 a 80 | Fogo |
| 81 a 86 | Água |
| 87 a 92 | Terra |
| 93 a 98 | Raio |
| 99 a 100 | Vento |

O viés é forte e nunca absoluto. Membros que rolam fora do elemento do clã recebem o elemento do clã pelo rito de passagem, e a afinidade rolada torna-se a primária.

Viés regional, no exemplo de Suna para Vento:

| d100 | Primária |
|---|---|
| 01 a 35 | Vento |
| 36 a 52 | Fogo |
| 53 a 69 | Água |
| 70 a 86 | Terra |
| 87 a 100 | Raio |

O viés regional é moderado e aplica apenas à primária. Quando clã e região coincidem, o clã prevalece.

### Escada de afinidade

A posição de cada natureza na escada determina desempenho, e não preço. O preço vive inteiramente na tabela de dispersão.

| Grau | Bônus de teste | Custo efetivo em RC | Em falha de teste |
|---|---|---|---|
| Afinidade nata primária | +15 | custo declarado × 1,0 | entrega versão reduzida |
| Afinidade nata adicional | +8 | custo declarado × 1,0 | entrega versão reduzida |
| Natureza aprendida | −15 | custo declarado × 1,3 | falha total |

O Limite de Saída é universal em 20% da RC por turno, com o mesmo cano servindo jutsus, dōjutsu e efeitos sustentados. A assimetria entre a afinidade e as demais naturezas mora no custo. O chakra convertido para uma natureza alheia consome parte de si na própria conversão, e o executor paga trinta por cento a mais pela mesma técnica. Os custos declarados nos registros de técnica são sempre o valor de afinidade, e a penalidade pertence ao executor. A Janela de Canalização do Manual de Criação de Jutsus é calculada sobre o custo pago, de modo que a natureza aprendida também dispara mais devagar, e a mesma regra cobra na economia e no tempo.

O bônus de teste entra na resolução da técnica. A coluna de falha refere-se ao modelo de Efeito Parcial em Falha: a natureza nata entrega resultado reduzido mesmo quando o teste vai mal, e a aprendida não entrega nada.

### Aquisição de naturezas fora da afinidade

O shinobi adquire naturezas fora da afinidade por treino, em dois passos.

**Desbloqueio até o LV1.** Exige instrução ativa e tempo de campanha. É o exercício temático da natureza: para o Vento, cortar a folha e depois a cachoeira; para o Raio, gerar descarga no próprio corpo; para o Fogo, projetar chama controlada. Sem o desbloqueio, a natureza não existe na ficha.

**Desenvolvimento do LV1 ao LV6.** Sobe pelo módulo de treino, respeitando os limiares de tempo por nível e o multiplicador de Método do instrutor. A qualidade do mestre acelera o treino. As vilas concentram mestres do próprio elemento, tornando o aprendizado local mais rápido sem alterar a afinidade natal.

### Sem teto de naturezas

Não existe limite rígido de quantas naturezas um shinobi domina. Com Yin e Yang na cadeia, o limite teórico de afinidades natas é sete. O portão real é econômico e temporal.

---

## Fator Protagonismo

O Nível de Protagonismo, definido pelo jogador na criação numa escala de 0 a 10, influencia as rolagens raras do sistema: cada degrau da cadeia de naturezas e o branch do eixo do Onmyōton. As Etapas de manifestação das Kekkei Genkai também o leem, pelo documento de Naturezas Avançadas.

O efeito é multiplicativo. Cada ponto de Protagonismo aumenta a chance base em vinte por cento:

```
chance_final = arredondar( chance_base × (1 + 0,2 × Protagonismo) )
```

O teto é 100%. O arredondamento é obrigatório, porque a chance final também precisa virar faixa fechada de d100. Protagonismo 10 triplica qualquer uma dessas chances.

| Rolagem | Chance base | Protagonismo 0 | Protagonismo 5 | Protagonismo 10 |
|---|---|---|---|---|
| 2ª afinidade | 10% | 10% | 20% | 30% |
| 5ª afinidade | 17% | 17% | 34% | 51% |
| 7ª afinidade | 25% | 25% | 50% | 75% |
| Branch sem viés de clã | 5% | 5% | 10% | 15% |
| Branch com viés de clã | 15% | 15% | 30% | 45% |

O modelo multiplicativo aproxima do teto uma chance já alta e mantém rara uma chance muito rara, com uma virada de ordem de grandeza real. Mesmo triplicada, a chance de alcançar a sétima afinidade falha em uma de cada quatro tentativas.

O viés de clã em 15% impede que o Protagonismo alto leve o branch acima da metade e inverta a identidade elemental do clã.

---

## Efeitos Globais

O Papel de Indução define o rito de descoberta de qualquer aspirante. A reação do papel revela a vocação elemental diante de mestres e da família. As Cinco Grandes Nações carregam o nome das naturezas, e a tradição local concentra o ensino no elemento da terra.

O domínio de uma natureza se lê em combate antes das palavras. A consistência do chakra, o padrão das técnicas e a forma como o shinobi adapta o terreno revelam sua natureza a qualquer observador experiente.

O Ciclo de Superação é público e estratégico. Formações militares e duelos entre clãs levam em conta a vantagem elemental, e um guerreiro de Vento sabe que enfrenta desvantagem contra o Fogo do clã adversário.

---

## Mecânica de Ativação

- **Custo:** definido por técnica, em RC, no valor de afinidade. Executores fora da afinidade pagam o custo efetivo ×1,3. O Limite de Saída universal de 20% da RC governa a canalização por turno.
- **Ação:** definida por técnica.
- **Restrições:** exige a natureza desbloqueada e a perícia da natureza no nível mínimo do rank.
- **Aftermath:** definido por técnica, conforme o rank no Manual de Criação de Jutsus.

---

## Efeitos Mecânicos

### Tipo Elemental e dano

Cada natureza elemental corresponde a um Tipo Elemental, que define o multiplicador de dano, a camada de mitigação e o rider natural.

| Natureza | Tipo | Mult. dano | Rider natural | Status |
|---|---|---|---|---|
| Raio | Elétrico | ×1,75 | Paralisia | Paralisia Parcial |
| Fogo | Fogo | ×1,60 | Queimadura | Queimadura |
| Terra | Terra | ×1,50 | Imobilização | Imobilização |
| Vento | Vento e Corte | ×1,30 | Sangramento | Sangramento |
| Água | Água e Pressão | ×1,00 | Lentidão | Lentidão |

O rider é propriedade passiva do Tipo. Cada técnica declara o grau mínimo garantido e o grau máximo possível do rider, e a resolução pertence ao Sistema de Efeitos de Status. Técnicas que não declaram o rider não o aplicam. A Água em contato sustentado ou em ambiente frio pode declarar Congelamento no lugar de Lentidão.

O multiplicador entra no motor de dano do Manual de Criação de Jutsus como mult_Tipo, incidindo sobre a RC nominal da técnica.

### Custo da perícia da natureza

A régua abaixo é a da trilha Ninja do MANUAL_ECONOMIA_XP, com o multiplicador de categoria já aplicado.

| LV | XP do nível | XP acumulado |
|---|---|---|
| LV1, Alicerce | 1.125 | 1.125 |
| LV2, Inclinação | 1.687 | 2.812 |
| LV3, Competência | 3.375 | 6.187 |
| LV4, Especialização | 6.187 | 12.374 |
| LV5, Maestria | 10.125 | 22.499 |
| LV6, Transcendência | 15.187 | 37.686 |

A afinidade é o estado padrão de qualquer shinobi e não conquista que mereça desconto. A afinidade nata primária paga o preço de tabela, e cada posição mais distante aplica sobretaxa.

| Posição | Multiplicador | XP acumulado a LV6 |
|---|---|---|
| Afinidade nata primária | ×1,0 | 37.686 |
| Afinidade nata adicional | ×1,125 | 42.396 |
| 1ª natureza aprendida | ×1,25 | 47.107 |
| 2ª natureza aprendida | ×1,6 | 60.297 |
| 3ª natureza aprendida | ×2,0 | 75.372 |
| 4ª natureza aprendida | ×2,5 | 94.215 |

O custo de dominar as cinco naturezas depende de como foram obtidas.

| Cenário | Custo total |
|---|---|
| Cinco afinidades natas | 207.270 |
| Uma nata e quatro aprendidas | 314.677 |

O caminho das cinco pertence a shinobi de nível lendário com décadas de dedicação.

### Ciclo de Superação e Força de Choque

O ciclo opera exclusivamente em confrontos diretos entre técnicas elementais, seja choque frontal entre duas técnicas, seja técnica elemental contra defesa elemental ativa. Em acertos contra alvos desprotegidos e em confrontos entre naturezas neutras, o ciclo não atua.

| Natureza | Supera | Cede para | Neutra contra |
|---|---|---|---|
| Fogo | Vento | Água | Raio, Terra |
| Vento | Raio | Fogo | Terra, Água |
| Raio | Terra | Vento | Água, Fogo |
| Terra | Água | Raio | Fogo, Vento |
| Água | Fogo | Terra | Vento, Raio |

```
Força de Choque = RC nominal investida × Mult_Ciclo

Mult_Ciclo:
  Natureza superior no confronto: ×2,0
  Natureza neutra ou inferior:    ×1,0
```

A natureza superior aplica o dobro porque seu chakra é duplamente efetivo em suprimir a inferior naquela interação. A natureza inferior usa a RC integral, e a desvantagem está na efetividade da interação e não no chakra gasto. O desperdício do executor não entra em nenhum dos lados, porque ele nunca chega ao ponto de choque.

A natureza com maior Força de Choque prevalece. A inferior precisa de mais que o dobro da RC nominal para superar o ciclo:

```
Override: RC_inferior > RC_superior × 2,0
```

Abaixo desse limiar o ciclo decide, e acima dele a potência bruta prevalece.

### Sōsai, choque entre a mesma natureza

Duas técnicas da mesma natureza comparam RC nominal diretamente, sem Mult_Ciclo.

```
RC_A > RC_B:

A prevalece.
RC_excesso = RC_A − RC_B
dano de rompimento = RC_excesso × mult_Tipo × potência
```

RC nominal igual produz anulação completa, sem dano para nenhum dos lados.

### Realimentação no choque favorável

O usuário da técnica perdedora em qualquer choque recebe mais dano do que o excesso bruto indica, porque o próprio chakra alimenta a técnica vencedora.

```
α = 0,25

dano de rompimento = (RC_excesso + RC_perdedor × α) × mult_Tipo_vencedor × potência
```

No choque de ciclo, o excesso é convertido da diferença de Força de Choque:

```
RC_excesso_equiv = (Força_vencedor − Força_perdedor) ÷ Mult_Ciclo_vencedor
```

Uma Água de 300 de RC nominal contra um Fogo de 300 resolve assim: a Força da Água é 600 e a do Fogo é 300, e a Água vence. O excesso equivalente é 150, a realimentação é 75, e o dano de rompimento resulta em 225 multiplicado pela potência. O usuário de Fogo recebeu três quartos do que receberia de um acerto direto e ainda perdeu a própria técnica.

Lançar a natureza errada em choque direto tem custo triplo: a técnica perde, o chakra alimenta o adversário, e o dano recebido excede o excesso bruto. Esta realimentação é mecanismo de choque e não se confunde com a Absorção, que é camada de mitigação defensiva do alvo.

---

## Progressão por Maestria

| Nível | Rank acessível | O que o shinobi alcança |
|---|---|---|
| LV1, Alicerce | E | Primeiros sinais da natureza, instáveis em condições adversas |
| LV2, Inclinação | D | Execução funcional em situações padrão |
| LV3, Competência | C | Execução estável, com variações e técnicas de pressão |
| LV4, Especialização | B | Domínio tático, alto impacto e controle de terreno |
| LV5, Maestria | A | Técnicas de magnitude larga |
| LV6, Transcendência | S | Técnicas que definem batalhas |

A natureza de afinidade percorre a régua com o preço de tabela e confiabilidade maior em cada nível. A natureza aprendida percorre a mesma régua com sobretaxa de posição, e a penalidade de confiabilidade persiste em todos os níveis.

---

## Sinergias

- **Controle de Chakra, caminho Refino:** zera o desperdício e derruba o custo pago ao mínimo declarado, o que sustenta técnicas de rank superior com a mesma reserva
- **Controle de Chakra, inclinação Moldagem:** a transformação de forma combina com a transformação de natureza para produzir a técnica completa, com a forma definindo alcance e padrão de entrega e a natureza definindo o efeito
- **Reserva de Chakra:** a RC determina o teto absoluto e, com o Limite de Saída universal de 20%, a escala de técnicas acessíveis por turno. Reservas maiores permitem superar o ciclo por potência bruta, e o custo efetivo ×1,3 torna a afinidade o caminho econômico para sustentar confrontos prolongados
- **Riders e status:** a Vulnerabilidade aplicada por técnicas e o efeito de ciclo atuam em camadas sequenciais, com a Vulnerabilidade aumentando o dano de rompimento e o ciclo decidindo quem vence o choque
- **Módulo de treino:** o multiplicador de Método do instrutor e os limiares de tempo governam a velocidade de progressão em cada natureza

---

## Notas para o Mestre

- **Raridade das afinidades:** uma afinidade é o comum, e todo mundo sai da cadeia com pelo menos essa. Duas marcam um shinobi promissor, na proporção de 1 em 10. Três ou mais pertencem ao território dos prodígios, e quatro ou mais exigem origem justificada antes de serem aceitas. Sete é resultado extremo, perto de 1 em 66.700, e deve ser tratado como tal
- **O Protagonismo multiplica sem maquiar:** Protagonismo alto reduz a distância até o teto sem eliminar a raridade relativa. O que muda é a ordem de grandeza da chance, nunca a garantia do resultado
- **Vento é naturalmente raro:** a tabela base dá dez por cento à afinidade de Vento, e um shinobi de Vento já é notável. Preserve essa raridade ao gerar personagens do Mestre
- **O Papel de Indução é um momento:** a primeira vez que o personagem toca o papel é evento, e o Mestre descreve a reação antes de revelar a natureza
- **Yin e Yang não são prêmio de manifestação:** quem tira o branch adquire a natureza e desenvolve a perícia dela como faria com qualquer elemento. A herança de Yin no Uchiha e de Yang no Uzumaki e no Senju é traço de linhagem, e a afinidade presente na ficha sem uso desenvolvido é o estado esperado
- **O caminho das cinco é um arco:** dominar todas as naturezas exige décadas de campanha e XP quase exclusivamente dedicado a isso. Trate o objetivo como narrativa de longo prazo
- **Sementes de Kekkei Genkai:** quando um personagem reúne duas afinidades natas que formam par canônico, registre o par. Água com Vento aponta o Gelo, Terra com Água aponta a Madeira, e Fogo com Terra aponta a Lava, com o portão de linhagem permanecendo em vigor onde ele existir
- **Choques elementais custam:** narre o choque desfavorável com peso, porque o chakra do perdedor literalmente alimentou o oponente, e o dano extra é consequência disso
- **Exceções de linhagem:** o membro de clã que rola fora do elemento característico ainda aprende o rito de passagem. A exceção é material de história e não erro de ficha
