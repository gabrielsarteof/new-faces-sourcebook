---
id: naruto.system.elemental
title: "Transformação de Natureza — Sistema Elemental"
version: 5
layer: scenario
scenario: naruto
type: system
status: final
source-file: Sistema_Elemental_v5.md
---

# Transformação de Natureza (Seishitsu Henka) — Sistema Elemental
Conversão do chakra nas cinco naturezas elementais, suas afinidades, aquisição e relações de superação em confronto.

---

## Sobre a Transformação de Natureza

A Transformação de Natureza é a conversão do chakra em uma das cinco naturezas elementais: Fogo, Vento, Raio, Terra e Água. O shinobi molda o próprio chakra para que ele assuma as propriedades do elemento. A transformação de natureza define as propriedades do chakra; a transformação de forma define o formato e o movimento. As duas são componentes independentes da criação de qualquer técnica elemental.

Cada natureza tem um comportamento próprio no mundo. O Fogo projeta calor intenso, em geral expelido pela boca, e incendeia o que toca. O Vento afia o chakra até torná-lo cortante, alcança distâncias médias e longas, e amplifica o corte de qualquer arma que o conduza. O Raio converte o chakra em eletricidade, perfura e difunde pelo sistema nervoso do alvo, e aumenta a letalidade de armas metálicas. A Terra molda solo, pedra e lama, cria estruturas defensivas e altera o terreno sob os pés. A Água serve à ofensa, à defesa e ao suporte, e em alto domínio não depende de fonte de água próxima.

Todo shinobi nasce com afinidade natural por uma ou mais dessas naturezas. A afinidade é a que melhor serve ao chakra do indivíduo, tende a ser compartilhada com ao menos um dos pais, e é revelada pelo Papel de Indução de Chakra. O papel queima para o Fogo, parte ao meio para o Vento, amassa para o Raio, esfarela em terra para a Terra e umedece para a Água. Em quem possui mais de uma afinidade, o papel reage com intensidade plena à primária e com reações mais fracas às adicionais.

A natureza de afinidade é a primeira que o shinobi aprende e aquela que concentra mais técnicas ao longo da vida. Outras naturezas se adquirem por treino. Jōnin comumente dominam duas naturezas. Dominar as cinco por meios normais é façanha de um punhado de lendas em toda a história: Hashirama Senju, Tobirama Senju, Hiruzen Sarutobi, Orochimaru, Mū e Kakashi Hatake.

---

## Requisitos de Acesso

- **Pré-requisito:** Controle de Chakra (o Tipo Elemental é uma perícia dependente, ancorada no Controle de Chakra).
- **Atributo regente:** INT.
- **Categoria:** Ninja (×1,5).
- **Portão de Reserva:** o custo efetivo da técnica elemental cabe no Limite de Saída do shinobi, universal em 20% da RC por turno (ver Escada de Afinidade).
- **Portão de Controle:** o Tipo Elemental do elemento usado atinge o nível mínimo do rank da técnica.

| Rank da técnica | E | D | C | B | A | S |
|---|---|---|---|---|---|---|
| Nível mínimo no Tipo Elemental | LV1 | LV2 | LV3 | LV4 | LV5 | LV6 |

Os dois portões são independentes e por elemento. Um shinobi alcança rank S em Fogo e rank C em Água simultaneamente, conforme o desenvolvimento de cada Tipo Elemental.

---

## Despertar / Aquisição

### Afinidade natal (criação de personagem)

A afinidade é determinada por rolagem na criação, em dois passos.

**Passo 1 — Quantidade de afinidades (cadeia sequencial condicional):**

O primeiro elemento é sempre garantido. Cada afinidade adicional exige um novo teste de d100, separado e independente, rolado apenas se o teste anterior foi bem-sucedido. A primeira falha encerra a cadeia — o personagem fica com as afinidades já conquistadas até ali.

A partir desta revisão, a chance de cada degrau não vem mais de uma tabela com percentuais soltos: ela usa uma **fórmula de escalada única**, em que cada degrau é 20% maior que o anterior, começando em 10% no 2º elemento. O resultado é arredondado para o inteiro mais próximo em cada degrau — porque é isso que o d100 rola de verdade, faixa fechada, sem casa decimal:

```
chance(degrau) = arredondar( 10% × 1,2^(degrau − 2) )
```

| Passo | Cálculo (bruto) | Chance do teste | Faixa no d100 | Chance composta (população) | Frequência |
|---|---|---|---|---|---|
| 1º elemento | — | 100% (sempre) | — | 100% | todo mundo |
| 2º elemento | 10,0 | 10% | 01–10 | 10% | 1 em 10 |
| 3º elemento | 12,0 | 12% | 01–12 | 1,2% | 1 em 83 |
| 4º elemento | 14,4 | 14% | 01–14 | 0,168% | 1 em 595 |
| 5º elemento | 17,3 | 17% | 01–17 | 0,0286% | 1 em 3.501 |
| 6º elemento | 20,7 | 21% | 01–21 | 0,006% | 1 em 16.674 |
| 7º elemento | 24,9 | 25% | 01–25 | 0,0015% | 1 em 66.693 |

O "cálculo bruto" existe só para mostrar de onde vem o número — na mesa, o Mestre e o jogador usam a coluna "Faixa no d100" e pronto: rola-se 1d100, e o resultado entra na cadeia se cair dentro da faixa. A chance composta (população) usa os valores já arredondados de cada degrau, encadeados, porque é isso que efetivamente acontece dado após dado.

Não existe mais teto fixo em cinco naturezas. A cadeia continua enquanto o personagem for passando nos testes, um de cada vez, parando na primeira falha — permitindo, em tese, até sete afinidades natas: as cinco naturezas elementais mais Yin e Yang (ver Passo 1.5, abaixo). Chegar às sete é um resultado extremo, algo em torno de 1 em 66.700 numa população grande de shinobi — raro mesmo entre lendas, mas não matematicamente impossível.

A quantidade final de afinidades natas é o número de testes bem-sucedidos em sequência, incluindo o primeiro garantido. Quatro afinidades ou mais continuam exigindo origem especial e aval do Mestre, mas agora chegam até ali por sucessivos testes na cadeia, não por um único resultado de d100.

**Passo 1.5 — Natureza comum ou Yin/Yang:**

Toda vez que a cadeia do Passo 1 é testada com sucesso, antes de determinar qual elemento a afinidade representa, rola-se **o que essa natureza é**: um dos cinco elementos comuns, ou uma afinidade crua de Onmyōton (Yin ou Yang). Essa rolagem usa **1d20**, não d100 — cada face vale exatamente 5%, e Yin/Yang ocupam os dois extremos do dado, como um símbolo visual da própria dualidade:

| Resultado (1d20) | Natureza |
|---|---|
| 1 | Yin |
| 2–19 | Natureza Elemental |
| 20 | Yang |

```
Yin       → 5%  (1 face)
Yang      → 5%  (1 face)
Elemental → 90% (18 faces)
```

**Viés de clã:** quando o personagem pertence a um clã com afinidade de Onmyōton, a faixa do lado favorecido sobe para 20% (4 faces), mordendo a faixa Elemental — o outro lado (Yin ou Yang) permanece intocado em 1 face:

*Clã com viés a Yang:*

| Resultado (1d20) | Natureza |
|---|---|
| 1 | Yin (5%) |
| 2–16 | Elemental (75%) |
| 17–20 | Yang (20%) |

*Clã com viés a Yin:*

| Resultado (1d20) | Natureza |
|---|---|
| 1–4 | Yin (20%) |
| 5–19 | Elemental (75%) |
| 20 | Yang (5%) |

O restante da rolagem (faixa "Natureza Elemental") segue para a tabela de raridade dos cinco elementos (Passo 2), exatamente como já funcionava.

Se o resultado cair em Yin ou Yang, o personagem adquire a **afinidade crua** daquela natureza — não a manifestação nomeada ainda. A manifestação nomeada (como Liberação de Velocidade, para Yang) continua sendo testada separadamente como uma Etapa 2 própria, no sistema dela mesma (documento do Onmyōton), no mesmo padrão já usado para Kekkei Genkai e Kyōka.

**Passo 2 — Elemento de cada afinidade (1d100 por afinidade):**

A afinidade primária usa a tabela de raridade ajustada pelo clã e pela vila de origem. As afinidades adicionais rolam na tabela base, ignorando elementos já obtidos e re-rolando duplicatas.

**Tabela de raridade base:**

| d100 | Elemento |
|---|---|
| 01–26 | Fogo |
| 27–50 | Água |
| 51–72 | Terra |
| 73–90 | Raio |
| 91–100 | Vento |

**Viés de clã característico (exemplo: Uchiha → Fogo):**

| d100 (membro do clã) | Primária |
|---|---|
| 01–80 | Fogo |
| 81–86 | Água |
| 87–92 | Terra |
| 93–98 | Raio |
| 99–100 | Vento |

O viés é forte, nunca absoluto. Membros que rolam fora do elemento do clã recebem o elemento do clã pelo rito de passagem (ver A5), e a afinidade rolada torna-se a primária.

**Viés regional (exemplo: nascido em Suna → Vento):**

| d100 (nascido em Suna) | Primária |
|---|---|
| 01–35 | Vento |
| 36–52 | Fogo |
| 53–69 | Água |
| 70–86 | Terra |
| 87–100 | Raio |

O viés regional é moderado e aplica apenas à primária. Quando clã e região coincidem, o clã prevalece.

### Escada de afinidade

A posição de cada natureza na escada de afinidade do shinobi determina seus benefícios e penalidades.

| Grau | Desconto de XP no Tipo Elemental | Bônus de teste | Custo efetivo em RC | Em falha de teste |
|---|---|---|---|---|
| Afinidade nata (primária ou adicional) | primária −20%; adicional −10% | primária +15; adicional +8 | custo declarado × 1,0 | entrega versão reduzida |
| Não-afim aprendido | sem desconto | −15 | custo declarado × 1,3 | falha total |

O Limite de Saída é universal: 20% da RC por turno, o mesmo cano para jutsus, dōjutsu e efeitos sustentados. A assimetria entre a afinidade e as demais naturezas mora no custo. O chakra convertido para uma natureza alheia à afinidade consome parte de si na própria conversão, e o executor paga 30% a mais de RC pela mesma técnica. Os custos declarados nos registros de técnica são sempre o valor de afinidade; a penalidade pertence ao executor. Como a Janela de Canalização do Manual de Criação de Jutsus é calculada sobre o custo efetivo, a natureza não-afim também dispara mais devagar: a mesma regra cobra na economia e no tempo.

O bônus de teste entra na resolução da técnica (Ataque vs Evitar ou Teste Resistido). A coluna de falha refere-se ao modelo de Efeito Parcial em Falha: a natureza nata entrega um resultado reduzido mesmo quando o teste vai mal; a não-afim não entrega nada.

### Aquisição de naturezas fora da afinidade (em jogo)

O shinobi adquire naturezas fora da afinidade por treino, em dois passos:

**Desbloqueio (chegar ao LV1):** exige instrução ativa (um Método) e tempo de campanha. É o exercício temático do elemento — para o Vento, cortar a folha e depois cortar a cachoeira; para o Raio, gerar descarga no próprio corpo; para o Fogo, projetar chama controlada. Sem o desbloqueio, a natureza não existe na ficha.

**Desenvolvimento (LV1 → LV6):** sobe pelo módulo de treino, respeitando os limiares de tempo por nível e o multiplicador de Método do instrutor. A qualidade do mestre acelera o treino. As vilas concentram mestres do seu elemento, tornando o aprendizado local mais rápido sem alterar a afinidade natal.

### Sem teto de naturezas

Não existe limite rígido de quantas naturezas um shinobi pode dominar — nem mesmo o antigo teto informal de cinco. Com Yin e Yang entrando na cadeia do Passo 1.5, o limite teórico de afinidades natas sobe para sete. O gate real continua sendo econômico e temporal.

Cada natureza não-afim adicional aplica um **multiplicador de dispersão** sobre o custo base do Tipo Elemental:

| Natureza não-afim | 1ª | 2ª | 3ª | 4ª |
|---|---|---|---|---|
| Multiplicador de dispersão | ×1,0 | ×1,3 | ×1,6 | ×2,0 |

Dominar as cinco naturezas a LV6 custa aproximadamente 168.000 XP só em Tipo Elemental, sem contar atributos, outras perícias e técnicas. O caminho das cinco pertence a shinobi de nível lendário com décadas de dedicação.

---

## Fator Protagonismo

O Nível de Protagonismo, definido pelo jogador na criação numa escala de 0 a 10, influencia todas as rolagens raras do sistema: cada degrau da cadeia de naturezas (Passo 1), o branch Yin/Yang (Passo 1.5), e qualquer Etapa 2 de manifestação — combinações elementais, Kyōka, ou Liberação especial de Onmyōton.

O efeito é **multiplicativo**, não somado. Cada ponto de Protagonismo aumenta a chance base em 20%:

```
chance_final = arredondar( chance_base × (1 + 0,2 × Protagonismo) )
```

com teto em 100%. O arredondamento é obrigatório: a chance final também precisa virar uma faixa fechada de d100 (ex: 01–30, não "01 a 30,4"). Protagonismo 10, portanto, **triplica** qualquer uma dessas chances (1 + 0,2×10 = 3,0), sempre fechando em número inteiro.

**Exemplos (usando as chances-base já arredondadas da tabela do Passo 1; linhas de Yin/Yang expressas também em faces de d20, já que o Passo 1.5 usa 1d20):**

| Rolagem | Chance base | Protagonismo 0 | Protagonismo 5 | Protagonismo 10 |
|---|---|---|---|---|
| 2ª afinidade (Passo 1, d100) | 10% | 10% | 20% | 30% |
| 5ª afinidade (Passo 1, d100) | 17% | 17% | 34% | 51% |
| 7ª afinidade (Passo 1, d100) | 25% | 25% | 50% | 75% |
| Yin/Yang sem viés de clã (Passo 1.5, d20) | 5% (1 face) | 5% (1 face) | 10% (2 faces) | 15% (3 faces) |
| Yin/Yang com viés de clã (Passo 1.5, d20) | 20% (4 faces) | 20% (4 faces) | 40% (8 faces) | 60% (12 faces) |

O modelo multiplicativo garante que uma chance já alta se aproxime do teto rapidamente, enquanto uma chance muito rara continue parecendo rara mesmo no Protagonismo máximo — só que com uma virada de ordem de grandeza real, não um empurrãozinho cosmético. Isso preserva a sensação de "excepcional mesmo entre excepcionais" para personagens de protagonismo alto que tiram resultados raros: mesmo triplicada, a chance de alcançar a 7ª afinidade (25% → 75%) continua sendo uma faixa que falha em 1 a cada 4 tentativas, não uma garantia.

---

## Efeitos Globais

O Papel de Indução define o rito de descoberta de qualquer aspirante. A reação do papel revela a vocação elemental diante de mestres e da família. As Cinco Grandes Nações carregam o nome das naturezas, e a tradição local concentra o ensino no elemento da terra.

O domínio de uma natureza se lê em combate antes das palavras: a consistência do chakra, o padrão das técnicas e a forma como o shinobi adapta o terreno revelam sua natureza a qualquer observador experiente.

O Ciclo de Superação é público e estratégico. Formações militares e duelos entre clãs levam em conta a vantagem elemental. Um guerreiro de Vento sabe que enfrenta desvantagem contra o Fogo do clã adversário.

---

## Mecânica de Ativação

- **Custo:** definido por técnica, em RC, no valor de afinidade. Executores fora da afinidade pagam o custo efetivo ×1,3 (ver Escada de Afinidade). O Limite de Saída universal de 20% da RC governa a canalização por turno.
- **Ação:** definida por técnica.
- **Restrições:** exige a natureza desbloqueada e o Tipo Elemental no nível mínimo do rank.
- **Aftermath:** definido por técnica, conforme o rank no Manual de Criação de Jutsus.

---

## Efeitos Mecânicos

### Tipo Elemental e dano

Cada natureza corresponde a um Tipo Elemental. O Tipo define o multiplicador de dano, a camada de mitigação e os riders de status naturais.

| Natureza | Tipo | Mult. dano | Rider natural | Status |
|---|---|---|---|---|
| Raio | Elétrico | ×1,75 | Paralisia | Paralisia Parcial |
| Fogo | Fogo | ×1,60 | Queimadura | Queimadura |
| Terra | Terra | ×1,50 | Imobilização | Imobilização |
| Vento | Vento/Corte | ×1,30 | Sangramento | Sangramento |
| Água | Água/Pressão | ×1,00 | Lentidão | Lentidão |

O rider é uma propriedade passiva do Tipo. Cada técnica declara o grau mínimo e máximo do rider que pode aplicar. Técnicas que não declaram o rider não o aplicam. A Água em contato sustentado ou em ambiente frio pode declarar Congelamento em vez de Lentidão.

### Custo do Tipo Elemental (XP por nível)

Categoria Ninja (×1,5 sobre a régua base):

| LV | XP do nível | XP acumulado |
|---|---|---|
| LV1 — Alicerce | 750 | 750 |
| LV2 — Inclinação | 1.125 | 1.875 |
| LV3 — Competência | 2.250 | 4.125 |
| LV4 — Especialização | 4.125 | 8.250 |
| LV5 — Maestria | 6.750 | 15.000 |
| LV6 — Transcendência | 10.125 | 25.125 |

Após a aplicação do desconto de afinidade e do multiplicador de dispersão:

| Grau | XP acumulado a LV6 |
|---|---|
| Afinidade primária (−20%) | 20.100 |
| Afinidade secundária (−10%) | 22.612 |
| 1ª natureza não-afim (×1,0) | 25.125 |
| 2ª natureza não-afim (×1,3) | 32.662 |
| 3ª natureza não-afim (×1,6) | 40.200 |
| 4ª natureza não-afim (×2,0) | 50.250 |

### Ciclo de Superação — Força de Choque

O ciclo opera exclusivamente em confrontos diretos entre técnicas elementais: choque frontal entre duas técnicas, ou técnica elemental contra defesa elemental ativa. Em acertos contra alvos desprotegidos e em confrontos entre naturezas neutras, o ciclo não atua.

**Cadeia de superação (em sentido horário):**

| Natureza | Supera | Cede para | Neutra contra |
|---|---|---|---|
| Fogo | Vento | Água | Raio, Terra |
| Vento | Raio | Fogo | Terra, Água |
| Raio | Terra | Vento | Água, Fogo |
| Terra | Água | Raio | Fogo, Vento |
| Água | Fogo | Terra | Vento, Raio |

**Fórmula da Força de Choque:**

```
Força de Choque = PM investido × Mult_Ciclo

Mult_Ciclo:
  Natureza superior no confronto: ×2,0
  Natureza neutra ou inferior:    ×1,0
```

A natureza superior aplica ×2,0 porque seu chakra é duplamente efetivo em suprimir a inferior naquela interação. A natureza inferior usa o PM integral — a desvantagem está na efetividade da interação, não no chakra gasto.

A natureza com maior Força de Choque prevalece. A inferior precisa de **mais que o dobro do PM** para superar o ciclo:

```
Override: PM_inferior > PM_superior × 2,0
```

Abaixo desse limiar, o ciclo decide. Acima, a potência bruta prevalece.

### Sōsai (choque entre mesma natureza)

Duas técnicas da mesma natureza comparam PM investido diretamente, sem Mult_Ciclo.

```
Mesma natureza, PM_A > PM_B:

A prevalece.
PM_excesso = PM_A − PM_B
Breakthrough damage = PM_excesso × mult_Tipo × potência
```

PM igual → anulação completa, sem dano para nenhum dos lados.

### Absorção no choque favorável

O usuário da técnica perdedora em qualquer choque recebe mais dano do que o excesso bruto indica, porque o próprio chakra alimenta a técnica vencedora.

```
α = 0,25 (fração de absorção)

Breakthrough damage = (PM_excesso + PM_perdedor × α) × mult_Tipo_vencedor × potência
```

Para o choque de ciclo, o PM_excesso é convertido da diferença de Força de Choque:

```
PM_excesso_equiv = (Força_vencedor − Força_perdedor) / Mult_Ciclo_vencedor
```

**Exemplo — Água (300 PM) vs Fogo (300 PM), PM iguais:**
- Força Água: 600 · Força Fogo: 300 → Água vence
- PM_excesso_equiv: (600 − 300) / 2,0 = 150 PM
- Absorção: 300 × 0,25 = 75 PM
- Breakthrough damage: (150 + 75) × 1,0 × potência = 225 × potência

O Fogo user tomou 75% do que tomaria num acerto direto de 300 PM de Água — e a própria técnica de Fogo foi neutralizada. Lançar a natureza errada num choque direto tem custo triplo: a técnica perde, o PM alimenta o adversário, e o dano recebido excede o excesso bruto.

---

## Progressão por Maestria

| Nível | Rank acessível | O que o shinobi alcança |
|---|---|---|
| LV1 — Alicerce | E | Primeiros sinais do elemento. Técnicas simples, instáveis em condições adversas. |
| LV2 — Inclinação | D | Execução funcional. O elemento obedece em situações padrão. |
| LV3 — Competência | C | Execução estável. Variações e técnicas de pressão disponíveis. |
| LV4 — Especialização | B | Domínio tático. Técnicas de alto impacto e controle de terreno. |
| LV5 — Maestria | A | O elemento é uma extensão do shinobi. Técnicas de magnitude larga. |
| LV6 — Transcendência | S | Limite do possível. Técnicas que definem batalhas. |

A natureza de afinidade percorre a régua com custo reduzido e confiabilidade maior em cada nível. A natureza aprendida percorre a mesma régua com custo cheio, e a penalidade de confiabilidade persiste em todos os níveis.

---

## Sinergias

- **Controle de Chakra (ramo Refino/Economista):** reduz o custo de chakra de todas as técnicas, incluindo as elementais. Shinobi com alto refino sustentam técnicas de rank superior com a mesma reserva.
- **Controle de Chakra (ramo Moldagem):** a transformação de forma combina com a transformação de natureza para criar técnicas completas. A forma define o alcance e o padrão de entrega; a natureza define o efeito.
- **Reserva de Chakra (RC):** a RC determina o PM máximo disponível e, em conjunto com o Limite de Saída universal de 20%, a escala de técnicas que o shinobi acessa por turno. Reservas maiores permitem investir mais PM por uso e superar o ciclo elemental por potência bruta. O custo efetivo ×1,3 da natureza não-afim torna a afinidade o caminho mais econômico para sustentar o ciclo em confrontos prolongados.
- **Riders e status:** a Vulnerabilidade aplicada por técnicas e o efeito de ciclo atuam em camadas sequenciais. Vulnerabilidade ao elemento aumenta o dano recebido do breakthrough; o ciclo determina quem vence o choque. Os dois compõem sem se duplicar.
- **Módulo de treino:** o multiplicador de Método do instrutor e os limiares de tempo governam a velocidade de progressão em cada Tipo Elemental. Mestres de rank superior aceleram o desenvolvimento, e vilas com tradição elemental oferecem acesso mais fácil a esses mestres.

---

## Notas para o Mestre

- **Raridade das afinidades:** uma afinidade é o comum — todo mundo sai da cadeia com pelo menos essa. Duas já marcam um shinobi promissor (1 em 10). Três ou mais pertencem ao território dos prodígios raros (1 em 83 em diante), e quatro afinidades ou mais — resultado de sucessivos testes na cadeia, não de um único d100 — exigem origem especial justificada narrativamente antes de serem aceitas. A cadeia agora chega, em tese, até sete afinidades (as cinco elementais mais Yin e Yang), mas sete é um resultado extremo — perto de 1 em 66.700 numa população grande — e deve ser tratado como tal.
- **Fator Protagonismo multiplica, não maquia:** lembre-se de que Protagonismo alto não torna resultados raros comuns — ele reduz a distância até o teto sem eliminar a raridade relativa. Um jogador de Protagonismo 10 ainda precisa de sorte real para fechar a cadeia até Yin/Yang; o que muda é a ordem de grandeza da chance, não a garantia do resultado.
- **Vento é naturalmente raro:** a tabela base dá 10% de chance à afinidade de Vento. Preserve essa raridade ao gerar PdMs — um shinobi de Vento já é notável.
- **O Papel de Indução é um momento:** a primeira vez que o personagem toca o papel é um evento, não uma formalidade. O Mestre pode descrever a reação antes de revelar o elemento, criando antecipação.
- **O caminho das cinco (ou das sete) é um arco:** personagens que buscam dominar todas as cinco naturezas elementais — ou, mais raro ainda, chegar a Yin e Yang na cadeia nata — precisam de décadas de campanha e de XP quase exclusivamente dedicado a isso. Trate esse objetivo como narrativa de longo prazo, não como uma lista de compras.
- **Sementes de Kekkei Genkai:** quando um personagem reúne duas afinidades natas que formam um par canônico (Água + Vento → Gelo, Terra + Água → Madeira, Fogo + Terra → Lava), registre o par. Esse material alimenta o desbloqueio de naturezas avançadas em arcos futuros.
- **Choques elementais custam:** o Mestre narra o choque desfavorável com peso — o chakra do perdedor literalmente alimentou o oponente, e o dano extra que o perdedor recebe é consequência disso. Usar a natureza errada em choque direto tem custo narrativo e mecânico.
- **Exceções de linhagem:** o membro de clã que rola fora do elemento característico ainda aprende o rito de passagem. A exceção é material de história, não erro de ficha.
