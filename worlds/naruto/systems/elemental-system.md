---
id: naruto.system.elemental
title: "Transformação de Natureza — Sistema Elemental"
version: 9
layer: scenario
scenario: naruto
type: system
status: final
source-file: Sistema_Elemental_v8.md, mais a Errata E1 v2
---

# Transformação de Natureza (Seishitsu Henka) · Sistema Elemental v9
Conversão do chakra nas sete naturezas, a afinidade que o papel revela, as compatibilidades de nascença, a aquisição por treino e as relações de superação em confronto.

---

## Sobre a Transformação de Natureza

A Transformação de Natureza é a conversão do chakra em uma das cinco naturezas elementais, Fogo, Vento, Raio, Terra e Água, ou em uma das duas naturezas do eixo do Onmyōton, Yin e Yang. O shinobi molda o próprio chakra para que ele assuma as propriedades da natureza. A transformação de natureza define as propriedades do chakra, e a transformação de forma define o formato e o movimento. As duas são componentes independentes da criação de qualquer técnica.

Cada natureza tem um comportamento próprio no mundo. O Fogo projeta calor intenso, em geral expelido pela boca, e incendeia o que toca. O Vento afia o chakra até torná-lo cortante, alcança distâncias médias e longas, e amplifica o corte de qualquer arma que o conduza. O Raio converte o chakra em eletricidade, perfura e difunde pelo sistema nervoso do alvo, e aumenta a letalidade de armas metálicas. A Terra molda solo, pedra e lama, cria estruturas defensivas e altera o terreno sob os pés. A Água serve à ofensa, à defesa e ao suporte, e em alto domínio não depende de fonte de água próxima. Yin e Yang têm domínios próprios, governados pelo Eixo do Onmyōton.

Todo shinobi nasce com uma Afinidade, a natureza que melhor serve ao chakra do indivíduo. Ela tende a ser compartilhada com ao menos um dos pais, é a primeira que o shinobi aprende, e é a que concentra mais técnicas ao longo da vida.

O Papel de Indução de Chakra revela a Afinidade. O papel queima para o Fogo, parte ao meio para o Vento, amassa para o Raio, esfarela em terra para a Terra e umedece para a Água. A reação é uma, porque o papel lê a vocação e a vocação é uma. Quem nasce com outras naturezas as descobre no treino, quando a segunda responde rápido demais para ser aprendizado comum, e essas naturezas de nascença se chamam Compatibilidades.

As naturezas que não vieram de berço se adquirem por treino, e o shinobi que segue esse caminho carrega Naturezas aprendidas. Jōnin comumente operam duas naturezas. Reunir as cinco elementais é façanha de um punhado de lendas em toda a história, com Hashirama Senju, Tobirama Senju, Hiruzen Sarutobi, Orochimaru, Mū e Kakashi Hatake entre elas.

---

## Requisitos de Acesso

- **Pré-requisito:** Controle de Chakra, porque a perícia da natureza é dependente e se ancora nele.
- **Atributo regente:** INT.
- **Categoria:** Ninjutsu (×1,5).
- **Portão de Reserva:** o custo efetivo da técnica cabe no Limite de Saída do shinobi, cuja largura se lê da posição do praticante na natureza empregada.
- **Portão de Controle:** a perícia da natureza empregada atinge o nível mínimo do rank da técnica.

| Rank da técnica | E | D | C | B | A | S |
|---|---|---|---|---|---|---|
| Nível mínimo na perícia da natureza | LV1 | LV2 | LV3 | LV4 | LV5 | LV6 |

Os dois portões são independentes e valem por natureza. Um shinobi alcança rank S em Fogo e rank C em Água simultaneamente, conforme o desenvolvimento de cada perícia.

O portão de moldagem, que mede o refinamento que a técnica exige do Controle de Chakra, corre em paralelo a estes dois e pertence à Régua de Exigência de Moldagem daquela perícia.

---

## Despertar / Aquisição

### Naturezas de nascença (criação de personagem)

As naturezas natas são determinadas por rolagem na criação, em três passos.

**Passo 1, quantidade de naturezas natas.**

A Afinidade é garantida, e sai da cadeia sem teste. Cada Compatibilidade exige um novo teste de d100, separado e independente, rolado apenas se o teste anterior foi bem-sucedido. A primeira falha encerra a cadeia, e o personagem fica com as naturezas já conquistadas até ali.

A chance de cada degrau sai de uma fórmula de escalada única, em que cada degrau é 20% maior que o anterior, começando em 10% na primeira Compatibilidade. O resultado é arredondado para o inteiro mais próximo em cada degrau, porque é isso que o d100 rola de verdade, em faixa fechada e sem casa decimal:

```
chance(degrau) = arredondar( 10% × 1,2^(degrau − 2) )
```

| Passo | Cálculo bruto | Chance do teste | Faixa no d100 | Chance composta | Frequência |
|---|---|---|---|---|---|
| Afinidade | | 100% | | 100% | todo mundo |
| 1ª Compatibilidade | 10,0 | 10% | 01 a 10 | 10% | 1 em 10 |
| 2ª Compatibilidade | 12,0 | 12% | 01 a 12 | 1,2% | 1 em 83 |
| 3ª Compatibilidade | 14,4 | 14% | 01 a 14 | 0,168% | 1 em 595 |
| 4ª Compatibilidade | 17,3 | 17% | 01 a 17 | 0,0286% | 1 em 3.501 |
| 5ª Compatibilidade | 20,7 | 21% | 01 a 21 | 0,006% | 1 em 16.674 |
| 6ª Compatibilidade | 24,9 | 25% | 01 a 25 | 0,0015% | 1 em 66.693 |

O cálculo bruto existe para mostrar de onde vem o número. Na mesa, o Mestre e o jogador usam a coluna de faixa, rolam 1d100, e o resultado entra na cadeia se cair dentro dela. A chance composta encadeia os valores já arredondados de cada degrau.

Não existe teto fixo em cinco naturezas. A cadeia continua enquanto o personagem for passando nos testes, um de cada vez, parando na primeira falha, o que permite até sete naturezas natas: as cinco elementais mais Yin e Yang. Chegar às sete é resultado extremo, algo em torno de 1 em 66.700 numa população grande de shinobi. Três Compatibilidades ou mais exigem origem especial e aval do Mestre.

A quantidade final de naturezas natas é o número de testes bem-sucedidos em sequência, somado à Afinidade garantida.

Clã, linhagem e Protagonismo agem sobre a cadeia como viés, elevando a chance de cada degrau ou o elemento que ele entrega. Nenhum deles é pré-requisito para que a cadeia rode, e nenhum deles precisa ser declarado antes da rolagem.

**Passo 1.5, natureza comum ou eixo do Onmyōton.**

Toda vez que a cadeia do Passo 1 é testada com sucesso, antes de determinar qual natureza o degrau representa, rola-se o que essa natureza é: uma das cinco elementais, ou Yin, ou Yang. A rolagem usa 1d20, e Yin e Yang ocupam os extremos do dado.

| Resultado (1d20) | Sem viés | Viés a Yin | Viés a Yang |
|---|---|---|---|
| Yin | 1 | 1 a 3 | 1 |
| Elemental | 2 a 19 | 4 a 19 | 2 a 17 |
| Yang | 20 | 20 | 18 a 20 |

O viés de clã eleva a chance da natureza favorecida para 15%, três faces, mordendo a faixa elemental. O lado oposto permanece em uma face. Os clãs que publicam viés são o Uchiha a Yin, o Uzumaki a Yang e o Senju a Yang.

Yin e Yang são a sexta e a sétima natureza do sistema, e se adquirem e desenvolvem pelo mesmo procedimento das cinco elementais. Não existe etapa de manifestação, centelha ou natureza nomeada no eixo do Onmyōton, e a perícia da natureza é a natureza desenvolvida. A Etapa de manifestação e a Centelha permanecem em vigor para as Kekkei Genkai e Kekkei Tōta, que pertencem a Naturezas Avançadas.

O restante da rolagem segue para a tabela de raridade dos cinco elementos.

**Passo 2, elemento de cada natureza nata.**

A Afinidade usa a tabela de raridade ajustada pelo clã e pela vila de origem. As Compatibilidades rolam na tabela base, ignorando elementos já obtidos e rerrolando duplicatas.

Tabela de raridade base:

| d100 | Elemento |
|---|---|
| 01 a 26 | Fogo |
| 27 a 50 | Água |
| 51 a 72 | Terra |
| 73 a 90 | Raio |
| 91 a 100 | Vento |

Viés de clã característico, no exemplo do Uchiha para Fogo:

| d100 | Afinidade |
|---|---|
| 01 a 80 | Fogo |
| 81 a 86 | Água |
| 87 a 92 | Terra |
| 93 a 98 | Raio |
| 99 a 100 | Vento |

O viés é forte e nunca absoluto. Membros que rolam fora do elemento do clã recebem o elemento do clã pelo rito de passagem, e o elemento rolado permanece como Afinidade. O rito entrega a natureza como Compatibilidade, porque o papel já leu a vocação e o rito não a reescreve.

Viés regional, no exemplo de Suna para Vento:

| d100 | Afinidade |
|---|---|
| 01 a 35 | Vento |
| 36 a 52 | Fogo |
| 53 a 69 | Água |
| 70 a 86 | Terra |
| 87 a 100 | Raio |

O viés regional é moderado e aplica apenas à Afinidade. Quando clã e região coincidem, o clã prevalece.

### Escada de Afinidade

A posição de cada natureza na escada determina desempenho, e não preço. O preço vive inteiramente na tabela de dispersão.

| Posição | Limite de Saída na natureza | Custo efetivo em RC | Em falha de teste |
|---|---|---|---|
| Afinidade | 25% da RC por turno | custo declarado × 1,0 | entrega versão reduzida |
| Compatibilidade | 20% da RC por turno | custo declarado × 1,0 | entrega versão reduzida |
| Natureza aprendida | 15% da RC por turno | custo declarado × 1,3 | falha total |

A vocação se mede em vazão. O shinobi que nasceu com o elemento escoa um quarto da reserva por turno naquela natureza, sustenta rank mais alto por rodada e recarrega a técnica grande em menos turnos. O que aprendeu a natureza escoa quinze por cento e paga trinta por cento a mais pela mesma técnica, de modo que a obra de porte alto exige acumulação onde o nativo dispara direto. O desempenho no teste é o mesmo para os três, porque o teste responde ao treino e o treino é o que a ficha pagou.

Nenhum modificador de berço entra no teste da perícia. O terminal da maestria lê nível, inclinação, caminho e atributo regente, e o Núcleo de Perícias autoriza efeitos a lerem o valor do teste. Uma soma fixa ali vazaria ao mesmo tempo para o Fator de Moldagem, para as tabelas de custo pago e para a graduação de riders pela margem, cobrando a posição em três lugares que já a cobram por outras vias.

A assimetria de preço entre as naturezas de nascença e as aprendidas mora no custo em chakra. O chakra convertido para uma natureza alheia consome parte de si na própria conversão, e o executor paga trinta por cento a mais pela mesma técnica. Os custos declarados nos registros de técnica são sempre o valor de nascença, e a penalidade pertence ao executor. A Janela de Canalização do Manual de Criação de Jutsus é calculada sobre o custo pago, de modo que a natureza aprendida também dispara mais devagar, e a mesma regra cobra na economia e no tempo.

A coluna de falha refere-se ao modelo de Efeito Parcial em Falha: a natureza de nascença entrega resultado reduzido mesmo quando o teste vai mal, e a aprendida não entrega nada.

### O cano de saída de chakra

O Limite de Saída é o cano único de saída de chakra por turno, compartilhado por jutsu, dōjutsu e efeito sustentado. A largura dele se lê da posição da natureza empregada, em vinte e cinco por cento da RC para a Afinidade, vinte para a Compatibilidade e quinze para a natureza aprendida. Gasto que não emprega natureza elemental, como moldagem pura, dōjutsu, Fūinjutsu e efeito sustentado sem natureza declarada, corre em vinte por cento.

Quando o shinobi emprega mais de uma natureza no mesmo turno, a largura do cano é a menor entre as posições empregadas. O cano permanece único e não se soma por natureza, e a diversidade elemental deixa de ampliar o orçamento de chakra da rodada.

A Reserva de Chakra é a dona do Limite de Saída, e o número se lê sempre da RC máxima. Os três degraus de vazão são leituras limpas sobre o motor percentual que o Limite de Saída já é, e a calibragem fina de vinte e cinco e de quinze pertence ao lote de rebalanceamento de combate que deriva a escala de energia por rank a partir dos alvos de turno.

### Aquisição de naturezas por treino

O shinobi adquire naturezas fora das que trouxe de berço por treino, em dois passos.

**Desbloqueio até o LV1.** Exige instrução ativa e tempo de campanha. É o exercício temático da natureza: para o Vento, cortar a folha e depois a cachoeira; para o Raio, gerar descarga no próprio corpo; para o Fogo, projetar chama controlada. Sem o desbloqueio, a natureza não existe na ficha, e a perícia daquela natureza não está disponível para compra.

**Desenvolvimento do LV1 ao LV6.** Sobe pelo módulo de treino, respeitando os limiares de tempo por nível e o multiplicador de Método do instrutor. A qualidade do mestre acelera o treino. As vilas concentram mestres do próprio elemento, tornando o aprendizado local mais rápido sem alterar as naturezas de nascença.

A posição da natureza modula os limiares de tempo. A Afinidade percorre os limiares reduzidos, a Compatibilidade os limiares padrão e a natureza aprendida os limiares estendidos, e o multiplicador de Método opera sobre o limiar já modulado. `[canon]` A instrução canônica declara que a natureza de afinidade é a mais rápida de aprender, e o cânone mede essa vantagem em tempo de treino. A régua de três colunas nasce no Manual de Treino, que é o dono dos limiares, e este documento declara a modulação sem publicar os fatores.

A ordem de aquisição é registrada na ficha e permanece fixa, porque é ela que define a posição de cada natureza aprendida na tabela de dispersão. Uma natureza aprendida nunca se converte em Afinidade, porque o Papel de Indução já leu o que leu.

### Sem teto de naturezas

Não existe limite rígido de quantas naturezas um shinobi domina. Com Yin e Yang na cadeia, o limite teórico é sete no total, somando as de nascença e as aprendidas. O portão real é econômico e temporal.

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
| 1ª Compatibilidade | 10% | 10% | 20% | 30% |
| 4ª Compatibilidade | 17% | 17% | 34% | 51% |
| 6ª Compatibilidade | 25% | 25% | 50% | 75% |
| Branch sem viés de clã | 5% | 5% | 10% | 15% |
| Branch com viés de clã | 15% | 15% | 30% | 45% |

O modelo multiplicativo aproxima do teto uma chance já alta e mantém rara uma chance muito rara, com uma virada de ordem de grandeza real. Mesmo triplicada, a chance de alcançar a sétima natureza nata falha em uma de cada quatro tentativas.

O viés de clã em 15% impede que o Protagonismo alto leve o branch acima da metade e inverta a identidade elemental do clã.

---

## Efeitos Globais

O Papel de Indução define o rito de descoberta de qualquer aspirante. A reação do papel revela a vocação elemental diante de mestres e da família. As Cinco Grandes Nações carregam o nome das naturezas, e a tradição local concentra o ensino no elemento da terra.

O domínio de uma natureza se lê em combate antes das palavras. A consistência do chakra, o padrão das técnicas e a forma como o shinobi adapta o terreno revelam sua natureza a qualquer observador experiente.

O Ciclo de Superação é público e estratégico. Formações militares e duelos entre clãs levam em conta a vantagem elemental, e um guerreiro de Vento sabe que enfrenta desvantagem contra o Fogo do clã adversário.

---

## Mecânica de Ativação

- **Custo:** definido por técnica, em RC, no valor de nascença. Executores em natureza aprendida pagam o custo efetivo ×1,3. O Limite de Saída governa a canalização por turno, com a largura lida da posição do praticante na natureza empregada.
- **Ação:** definida por técnica.
- **Restrições:** exige a natureza desbloqueada e a perícia da natureza no nível mínimo do rank.
- **Aftermath:** definido por técnica, conforme o rank no Manual de Criação de Jutsus.

---

## Efeitos Mecânicos

### Rendimento da natureza

Toda técnica de transformação de natureza converte chakra em matéria elemental, e a matéria assim produzida rende acima do que músculo, aço e madeira entregam pela mesma quantidade de energia. A Constante de Moldagem mede esse rendimento e governa as sete naturezas por igual, porque a vantagem nasce da moldagem e vale para tudo o que a moldagem produz.

```
Constante de Moldagem = 1,40
```

O que distingue uma natureza da outra aparece na forma da entrega que cada técnica declara, no rider que ela carrega, na Velocidade que ela publica e na posição da natureza no Ciclo de Superação. A Constante permanece a mesma em todas, e técnicas sem transformação de natureza resolvem em 1,00.

A Constante entra no motor de dano do Manual de Criação de Jutsus incidindo sobre a RC nominal da técnica, no lugar que o multiplicador do elemento ocupava.

O rendimento mede a matéria da técnica, e a posição da natureza na escada mede a relação do executor com ela. As duas grandezas são independentes. Uma natureza aprendida rende o mesmo que a Afinidade rende, porque a potência vem do domínio treinado e do nível da perícia, e a distância cobra em preço, em teste e em confiabilidade.

### Assinatura e a leitura do corpo

Osso, músculo e tecido detêm trauma mecânico com a estrutura que possuem para isso, e enfrentam a transferência térmica e a corrente sem estrutura alguma dedicada a detê-las. A Assinatura mede essa diferença. Ela é a letalidade intrínseca daquele tipo de energia contra carne, quanto ele machuca um corpo no instante em que conecta, e se lê do vetor que a obra declara. O mesmo valor vale contra qualquer defensor.

| Vetor declarado | Assinatura |
|---|---|
| Impacto | ×1,00 |
| Corte | ×1,00 |
| Penetração | ×1,00 |
| Energia, térmica | ×1,15 |
| Energia, elétrica | ×1,25 |

A Assinatura térmica cobre tanto a adição quanto a remoção de calor, porque o tecido falha pela transferência em si e não pela direção dela, e o congelamento entra por essa porta como a queimadura entra.

A Assinatura acompanha a obra e não a natureza que a produziu. Um jato cortante de Água resolve em ×1,00 e o vapor escaldante de Água resolve em ×1,15, porque o corpo processa o primeiro como trauma e o segundo como transferência térmica.

Resistência a um tipo de energia não vive em constante de natureza, e não existe como grandeza reduzível por percentual. Ela existe apenas como Estado Elemental declarado na ficha da obra que o produz, com Modo, vetor ou elemento afetado, elemento acoplado, reserva investida e manutenção por rodada, e cobra chakra enquanto durar. O chassi dos três Modos pertence ao Núcleo de Combate. Nenhum corpo carrega resistência elemental por constituição passiva, e a vulnerabilidade relacional do Ciclo de Superação segue governando elemento contra elemento sem tocar essa camada.

As duas camadas compõem o motor de dano na ordem em que a energia percorre o caminho, primeiro o que a técnica entrega e depois o que o corpo faz com ela.

```
dano = RC × coef_entrega × 1,40 × assinatura + bônus_CC × coef_técnica
```

O produto das duas camadas, para as naturezas cujas obras declaram vetor de Energia:

| Natureza | Produto |
|---|---|
| Raio | ×1,75 |
| Fogo | ×1,61 |

### Vetor e rider por natureza

Cada natureza tende a uma forma de entrega e a um efeito persistente, e a tendência orienta a leitura de mesa sem obrigar a técnica.

| Natureza | Vetor de tendência | Rider de tendência | Status |
|---|---|---|---|
| Raio | Energia elétrica | Paralisia | Paralisia Parcial |
| Fogo | Energia térmica | Queimadura | Queimadura |
| Terra | Impacto | Imobilização | Imobilização |
| Vento | Corte | Sangramento | Sangramento |
| Água | Impacto | Lentidão | Lentidão |

Cada técnica declara na própria ficha o vetor que emprega e os riders que aplica, com o grau mínimo garantido e o grau máximo possível, e a resolução dos riders pertence ao Sistema de Efeitos de Status. A técnica que declara vetor diverso da tendência resolve pelo vetor declarado, e o Chidori é o caso conhecido, com Raio entregue em Penetração. A técnica que não declara rider não o aplica. A Água em contato sustentado ou em ambiente frio pode declarar Congelamento no lugar de Lentidão.

### Custo da perícia da natureza

A régua abaixo é a da trilha Ninjutsu do Manual de Economia de XP, com o multiplicador de categoria já aplicado.

| LV | XP do nível | XP acumulado |
|---|---|---|
| LV1, Alicerce | 1.350 | 1.350 |
| LV2, Inclinação | 2.025 | 3.375 |
| LV3, Competência | 4.050 | 7.425 |
| LV4, Especialização | 7.425 | 14.850 |
| LV5, Maestria | 12.150 | 27.000 |
| LV6, Transcendência | 18.225 | 45.225 |

A Afinidade é o estado padrão de qualquer shinobi e não conquista que mereça desconto. A Afinidade paga o preço de tabela, e cada posição mais distante aplica sobretaxa.

| Posição | Multiplicador | XP acumulado a LV6 |
|---|---|---|
| Afinidade | ×1,0 | 45.225 |
| Compatibilidade | ×1,125 | 50.876 |
| 1ª natureza aprendida | ×1,25 | 56.529 |
| 2ª natureza aprendida | ×1,6 | 72.360 |
| 3ª natureza aprendida | ×2,0 | 90.450 |
| 4ª natureza aprendida | ×2,5 | 113.061 |
| 5ª natureza aprendida | ×3,2 | 144.720 |
| 6ª natureza aprendida | ×4,0 | 180.900 |

A escada das aprendidas cresce cerca de um quarto a cada degrau, e os dois últimos degraus continuam esse passo. Eles existem porque a cadeia admite até sete naturezas no total, e um shinobi com uma única natureza nata pode perseguir as outras seis por treino.

**Convenção de arredondamento.** O multiplicador de dispersão incide sobre o custo de cada nível, e o piso é aplicado nível a nível, na mesma convenção do multiplicador de categoria. O jogador compra um nível de cada vez, e o preço que ele paga é a soma dos níveis já arredondados. Uma Compatibilidade levada ao LV1 custa 1.518, que é o piso de 1.350 multiplicado por 1,125, e a coluna de acumulado é a soma desses valores. O piso aplicado sobre o total acumulado devolveria 50.878 no lugar de 50.876, e essa leitura fica revogada.

O custo de dominar as cinco naturezas depende de como foram obtidas.

| Cenário | Custo total |
|---|---|
| Cinco naturezas natas | 248.729 |
| Uma nata e quatro aprendidas | 377.625 |

O caminho das cinco pertence a shinobi de nível lendário com décadas de dedicação.

### Por que algumas lendas reúnem muitas naturezas

Hashirama Senju, Tobirama Senju, Hiruzen Sarutobi, Orochimaru, Mū e Kakashi Hatake operam as cinco naturezas elementais, e nenhum deles nasceu com as cinco. A cadeia de nascença entrega uma Afinidade a todos e raramente entrega uma Compatibilidade, e o que separa essas figuras do shinobi comum é a década de treino que percorre a tabela de dispersão até o fim.

A leitura vale também para quem opera duas. Sasuke Uchiha traz o Raio da vocação e o Fogo da tradição do clã, e Kakashi Hatake construiu a técnica que o nomeia dentro do Raio, sua Afinidade, apesar de moldar as outras quatro. A natureza que produz obra própria é quase sempre a que o papel revelou, porque é nela que o shinobi acumula o tempo.

O Mestre que quiser um personagem de muitas naturezas tem dois caminhos, e a diferença entre eles aparece na ficha e no orçamento. A cadeia de nascença é sorte e sai barata. O treino é escolha, custa a sobretaxa de cada degrau, e cobra tempo de campanha.

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
dano de rompimento = RC_excesso × 1,40 × assinatura × potência
```

RC nominal igual produz anulação completa, sem dano para nenhum dos lados.

### Realimentação no choque favorável

O usuário da técnica perdedora em qualquer choque recebe mais dano do que o excesso bruto indica, porque o próprio chakra alimenta a técnica vencedora.

```
α = 0,25

dano de rompimento = (RC_excesso + RC_perdedor × α) × 1,40 × assinatura_vencedor × potência
```

No choque de ciclo, o excesso é convertido da diferença de Força de Choque:

```
RC_excesso_equiv = (Força_vencedor − Força_perdedor) ÷ Mult_Ciclo_vencedor
```

Uma Água de 300 de RC nominal contra um Fogo de 300 resolve assim: a Força da Água é 600 e a do Fogo é 300, e a Água vence. O excesso equivalente é 150, a realimentação é 75, e a soma de 225 percorre a Constante de Moldagem e a Assinatura da obra vencedora, resultando em 315 multiplicado pela potência quando a Água entrega em Impacto. O usuário de Fogo recebeu três quartos do que receberia de um acerto direto e ainda perdeu a própria técnica.

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

A Afinidade percorre a régua com o preço de tabela e confiabilidade maior em cada nível. A Compatibilidade percorre a mesma régua com sobretaxa leve e a mesma confiabilidade de nascença. A natureza aprendida percorre a régua com a sobretaxa da posição, e a penalidade de confiabilidade persiste em todos os níveis.

---

## Sinergias

- **Controle de Chakra, caminho Refino:** zera o desperdício e derruba o custo pago ao mínimo declarado, o que sustenta técnicas de rank superior com a mesma reserva
- **Controle de Chakra, inclinação Moldagem:** a transformação de forma combina com a transformação de natureza para produzir a técnica completa, com a forma definindo alcance e padrão de entrega e a natureza definindo o efeito
- **Reserva de Chakra:** a RC determina o teto absoluto e, com o Limite de Saída lido da posição da natureza empregada, a escala de técnicas acessíveis por turno. Reservas maiores permitem superar o ciclo por potência bruta, e o custo efetivo ×1,3 torna as naturezas de nascença o caminho econômico para sustentar confrontos prolongados
- **Riders e status:** a Vulnerabilidade aplicada por técnicas e o efeito de ciclo atuam em camadas sequenciais, com a Vulnerabilidade aumentando o dano de rompimento e o ciclo decidindo quem vence o choque
- **Módulo de treino:** o multiplicador de Método do instrutor e os limiares de tempo governam a velocidade de progressão em cada natureza, com os limiares modulados pela posição, e o desbloqueio até o LV1 de uma natureza aprendida corre por ele

---

## Notas para o Mestre

- **Raridade das naturezas natas:** uma Afinidade é o comum, e todo mundo sai da cadeia com ela. Uma Compatibilidade marca um shinobi promissor, na proporção de 1 em 10. Duas ou mais pertencem ao território dos prodígios, e três ou mais exigem origem justificada antes de serem aceitas. Sete naturezas natas é resultado extremo, perto de 1 em 66.700, e deve ser tratado como tal
- **Muitas naturezas costumam ser história, e não sorte:** o personagem que opera quatro ou cinco naturezas quase sempre as reuniu por treino, ao longo de décadas de campanha. Peça a década antes de conceder o elemento
- **O Protagonismo multiplica sem maquiar:** Protagonismo alto reduz a distância até o teto sem eliminar a raridade relativa. O que muda é a ordem de grandeza da chance, nunca a garantia do resultado
- **Vento é naturalmente raro:** a tabela base dá dez por cento à Afinidade de Vento, e um shinobi de Vento já é notável. Preserve essa raridade ao gerar personagens do Mestre
- **O Papel de Indução é um momento:** a primeira vez que o personagem toca o papel é evento, e o Mestre descreve a reação antes de revelar a natureza. A reação é única, e as Compatibilidades continuam invisíveis até o treino as expor
- **Yin e Yang não são prêmio de manifestação:** quem tira o branch adquire a natureza e desenvolve a perícia dela como faria com qualquer elemento. A herança de Yin no Uchiha e de Yang no Uzumaki e no Senju é traço de linhagem, e a natureza presente na ficha sem uso desenvolvido é o estado esperado
- **O caminho das cinco é um arco:** dominar todas as naturezas exige décadas de campanha e XP quase exclusivamente dedicado a isso. Trate o objetivo como narrativa de longo prazo
- **Sementes de Kekkei Genkai:** quando um personagem reúne duas naturezas natas que formam par canônico, registre o par. Água com Vento aponta o Gelo, Terra com Água aponta a Madeira, e Fogo com Terra aponta a Lava, com o portão de linhagem permanecendo em vigor onde ele existir
- **A identidade da natureza vive na forma, não no número:** duas técnicas de mesmo rank e mesma RC entregam a mesma ordem de grandeza, venham elas do Fogo ou da Água. O que separa uma da outra na mesa é o vetor que cada uma declara, o rider que carrega, a velocidade com que chega e a posição no ciclo. Descreva a diferença por esses quatro eixos, porque é neles que ela existe
- **Uma natureza produz vetores diversos:** a mesma Água entrega volume em Impacto, jato afiado em Corte e vapor em Energia térmica, e a ficha de cada técnica é quem responde. Ao improvisar uma técnica em mesa, escolha o vetor antes de calcular, porque ele decide a Assinatura e a camada de defesa que o alvo opõe
- **Choques elementais custam:** narre o choque desfavorável com peso, porque o chakra do perdedor literalmente alimentou o oponente, e o dano extra é consequência disso
- **Exceções de linhagem:** o membro de clã que rola fora do elemento característico ainda aprende o rito de passagem, e recebe aquele elemento como Compatibilidade. A exceção é material de história e não erro de ficha

---

## Etiquetagem

- `[canon]` A Afinidade única revelada pelo Papel de Indução, com as cinco reações do papel
- `[canon]` A Afinidade concede facilidade de aprender e controlar, e a potência da técnica vem do domínio treinado
- `[canon]` O shinobi não fica preso à Afinidade, e adquire outras naturezas por treino de anos
- `[canon]` O Ciclo de Superação resolve confronto entre técnicas, com a de nível superior podendo vencer a de natureza superior
- `[canon]` A Kekkei Genkai concede duas naturezas de nascença para combiná-las, e pertence a Naturezas Avançadas
- `[atribuído]` A concentração regional de naturezas e a raridade do Vento
- `[atribuído]` A natureza transmitida por rito de clã fora da vocação, no molde do Uchiha e do Fogo
- `[canon]` O Raio perfura e difunde pelo sistema nervoso, o Fogo incendeia o que toca, o Vento corta, a Terra molda estrutura e a Água serve à ofensa, à defesa e ao suporte, que são as tendências de vetor e de rider publicadas aqui
- `[canon fraco declarado]` A obra trata técnicas de mesmo rank e naturezas diversas como equivalentes em escala, sem afirmar em nenhum momento que uma natureza fere mais que outra por unidade de chakra. O rendimento único deriva dessa ausência, e não de declaração da fonte
- `[proposta]` A cadeia de d100, as faixas de raridade, o Fator Protagonismo, a Escada de Afinidade, a tabela de dispersão, a Força de Choque e a realimentação. A obra dá direção e nunca magnitude, e toda grandeza numérica deste documento é do sistema
- `[proposta]` A Constante de Moldagem e as duas Assinaturas. A hierarquia entre elas se apoia em medicina de trauma, com a lesão elétrica operando por aquecimento resistivo, eletroporação e desnaturação simultâneos, sem limiar protetor, e a lesão térmica operando por uma relação de tempo e temperatura com limiar declarado e com a circulação sanguínea removendo calor do ponto de contato

---

## Fila de errata emitida

| Alvo | Pedido |
|---|---|
| Manual de Criação de Jutsus v2.5, seção 4.2 | Ceder as duas primeiras linhas da tabela de Modificadores de Custo de XP, que precificam a afinidade natal em −20% e a natureza não-afim em +30%. A relação entre o executor e a natureza tem dono único neste documento, e a tabela de dispersão passa a governar os dois eixos. A cláusula de bloqueio vira o portão de desbloqueio |
| Manual de Economia de XP v2.1, seção 12 | A afirmação de que as naturezas de transformação de chakra não possuem custo de XP próprio contradiz a régua e a tabela de dispersão publicadas aqui |
| Naturezas Avançadas v5 | Citações de Liberação de Yin e Liberação de Yang em v3, quando o Índice publica v4.1 |
| Perícia de Controle de Chakra v3.2 | Citação de Sistema Elemental v5 |
| Compêndios de Katon, Fūton, Suiton e Doton | Citação de Sistema Elemental v5 |
| `worlds/naruto/natures/overview.md` v1 | A legenda do ciclo inverte a relação publicada aqui, afirmando que cada natureza é fraca contra a seguinte quando a tabela declara superação |
| Manual de Criação de Jutsus v2.5, seção 5.3 | O termo `mult_Tipo` da fórmula universal de dano passa a ser a Constante de Moldagem multiplicada pela Assinatura do vetor declarado. A seção 5.4 acrescenta a coluna de vetor de tendência com a mesma redação de tendência que já rege o rider |
| Reserva de Chakra | **Aplicado na v3.5.** O documento publica a largura por posição, a regra de turno misto, a faixa de vinte por cento para gasto sem natureza declarada, a leitura sobre a RC máxima, e a regra de que todo modificador do cano é relativo à largura da posição |
| Perícias de natureza, sete documentos | Katon, Raiton, Doton, Fūton, Suiton, Liberação de Yin e Liberação de Yang republicam o Limite de Saída como universal em vinte por cento. Cada uma passa a apontar para o dono e a não republicar o número, porque repetir o valor foi o que produziu esta linha. A Perícia de Enton já cita apenas "o Limite de Saída do executor", sem número, e é a forma que as sete adotam |
| Controle de Chakra, caminho Vazão Ampliada | **Aplicado na v3.7.** O caminho amplia por fator sobre a largura da posição empregada, com teto de 1,25 vez essa largura. Sobre a Compatibilidade o teste cheio entrega os mesmos vinte e cinco por cento que a régua publicava antes |
| Reencarnação de Indra e vantagem de vazão ampliada | Os dois elevam o Limite de Saída "de vinte para trinta por cento", ancorados na base universal revogada. Pela regra de modificador relativo da Reserva de Chakra, os dois passam a multiplicar a largura da posição por um e meio, o que preserva os trinta por cento para quem opera em Compatibilidade |
| Vantagem de afinidade, seção de vantagens do cenário | O efeito concede "+8 em todos os testes da natureza, somado ao bônus de posição da escada de afinidade". O bônus de posição foi revogado, e a soma perdeu a segunda parcela |
| Requisitos de Técnica | O documento republica a penalidade de teste da Escada citando o Sistema Elemental v7, com mais quinze, mais oito e menos quinze. As três leituras estão revogadas |
| `worlds/naruto/quick-calculations.md` | Republica a tabela inteira da Escada com a coluna de bônus de teste. É o segundo arquivo de cálculos rápidos do corpus, e a errata que trata do primeiro não o alcança |
| Sharingan do Uchiha, Documento de Invocação, Hachimon Tonkō e Manual de Criação de Jutsus | Citam o Limite de Saída em vinte por cento como número fixo. A citação passa a ler a largura da posição empregada |
| Naturezas Avançadas, seção do Shiden | O caminho Gume da inclinação Agudo aplica Sangramento no lugar da Paralisia Parcial, e a regra vigente daquele documento declara que o rider continua o do elemento base. A substituição de rider por Kyōka segue pendente nos dois documentos, sem travar a publicação da inclinação |
| Naturezas Avançadas v5 | A regra de tipo dominante deixa de reger dano e passa a reger apenas a posição no Ciclo de Superação. As naturezas avançadas resolvem pela Constante de Moldagem e pela Assinatura do vetor que cada obra declara, e os multiplicadores dos Kyōka são republicados sobre a base nova |
| Compêndios de todas as naturezas e documentos de técnica | Cada entrada que entrega dano passa a declarar vetor, grau quando aplicável, riders e Velocidade, e a Assinatura deriva do vetor sem decisão adicional |
| Sistema de Efeitos de Status v2.1 | A Vulnerabilidade Elemental reduz uma Resistência ao elemento em três dos quatro graus, e o corpus não publica essa grandeza |

---

## Registro de Alterações

**v9.** A Errata E1 é absorvida. O bônus fixo de teste é revogado nas três posições da Escada de Afinidade, e a coluna dá lugar ao Limite de Saída na natureza, em vinte e cinco por cento para a Afinidade, vinte para a Compatibilidade e quinze para a natureza aprendida. O teste da perícia passa a ler exclusivamente nível, inclinação, caminho e atributo regente, porque o Núcleo de Perícias autoriza efeitos a lerem o valor do teste e uma soma de berço ali vazaria para o Fator de Moldagem, para as tabelas de custo pago e para a graduação de riders ao mesmo tempo. O Limite de Saída deixa de ser universal e ganha seção própria, com a regra de turno misto lendo a menor das posições empregadas e a faixa de vinte por cento para gasto sem natureza declarada. A modulação dos limiares de treino pela posição entra no documento, com os fatores permanecendo no Manual de Treino. A Assinatura deixa de ser descrita como propriedade do defensor e passa a ser a letalidade intrínseca do tipo de energia contra carne, sem que número algum mude, e o lugar que ela ocupava do lado do defensor passa a pertencer ao Estado Elemental declarado, cujo chassi o Núcleo de Combate publica. Nenhum custo de perícia, tabela de dispersão, cadeia de d100, Constante de Moldagem ou valor de Assinatura mudou.

**v8.** O multiplicador por natureza dá lugar a duas camadas com donos distintos. A Assinatura térmica cobre adição e remoção de calor. A Constante de Moldagem, fixada em 1,40, mede o rendimento de toda técnica de transformação de natureza e vale para as sete por igual. A Assinatura mede o que o corpo do alvo faz com a energia recebida, pertence ao defensor, e se lê do vetor que a obra declara, em 1,25 para a Energia elétrica, 1,15 para a Energia térmica e 1,00 para Impacto, Corte e Penetração. O produto para o Raio permanece em 1,75 e o do Fogo resolve em 1,61. Terra, Vento e Água passam a resolver pelo vetor que cada técnica declara. A tabela de rider passa a publicar também o vetor de tendência, com a mesma redação de tendência que já regia o rider. As fórmulas do Sōsai e da realimentação passam a ler a cadeia nova.

**v7.1.** O Manual de Economia de XP sobe para v2.9 e reajusta a tabela base de custo de perícia em 20%. A régua da seção "Custo da perícia da natureza" sobe de acordo, LV1 a LV6 e acumulado, e a tabela de dispersão inteira é recalculada sobre a nova base: Afinidade fecha em 45.225, Compatibilidade em 50.876, e a escada de aprendidas segue até 180.900 na sexta. Os dois cenários de custo total passam a 248.729 (cinco natas, uma Afinidade e quatro Compatibilidades) e 377.625 (uma nata e quatro aprendidas). As proporções entre posições não mudam, só a base sobre a qual elas incidem.

**v7.** A Afinidade passa a ser sempre uma, revelada por uma única reação do Papel de Indução, e as naturezas natas adicionais passam a se chamar Compatibilidades. A cadeia do Passo 1, as faixas de d100, o Fator Protagonismo e todos os multiplicadores permanecem como estavam, e clã, linhagem e Protagonismo ficam declarados como viés da cadeia. A convenção de arredondamento da tabela de dispersão é declarada em nível, e os acumulados são corrigidos para 42.393, 47.104 e 94.212, com os cenários em 207.258 e 314.671. A escada das aprendidas ganha o quinto e o sexto degraus, em ×3,2 e ×4,0, porque a cadeia admite sete naturezas e o texto parava na quarta. A ordem de aquisição das aprendidas passa a ser registrada na ficha, e a conversão de uma aprendida em Afinidade fica proibida. A seção sobre as lendas de muitas naturezas entra, e a independência entre o Tipo Elemental e a posição na escada fica declarada.

**v6.** A Errata D2 é absorvida. A coluna de desconto de XP sai da Escada, que passa a tratar exclusivamente de desempenho, e a âncora econômica se desloca para a afinidade como preço de tabela com sobretaxa por distância. O viés de clã no branch do Onmyōton cai de 20% para 15%, o Protagonismo passa a incidir sobre o branch, e o Senju entra com viés a Yang.

---

## Dependências

| Documento | Versão consumida | O que este documento lê |
|---|---|---|
| Manual de Economia de XP | 2.9 | A régua de custo por nível e a convenção de arredondamento da categoria |
| Núcleo de Perícias | 2.2 | A estrutura de níveis LV1 a LV6 |
| Manual de Criação de Jutsus | 2.11 | A Janela de Canalização e o motor de dano |
| Núcleo de Combate | 3 | Os vetores de dano, as camadas de defesa, o passo que consome a Assinatura e o chassi do Estado Elemental |
| Reserva de Chakra | 3.4 | A RC nominal e o Limite de Saída, lido da RC máxima |
| Manual de Treino | 1 | Os limiares de tempo e o multiplicador de Método |
| Sistema de Efeitos de Status | 2.5 | A resolução dos riders |
| Naturezas Avançadas | 7 | A Centelha, as Kekkei Genkai, as Kekkei Tōta e as Kyōka |
| Manual de Treino | 1 | Os limiares de tempo por nível e o multiplicador de Método |