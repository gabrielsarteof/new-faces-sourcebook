---
id: naruto.technique.bunshin-daibakuha
title: "Técnica da Grande Explosão do Clone"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: null
supersedes: null
---

# Técnica da Grande Explosão do Clone — 分身大爆破の術 (Bunshin Daibakuha no Jutsu)
Ninjutsu · Sem natureza elemental · Rank B

A técnica que converte um clone das sombras já existente em uma carga de chakra detonada por comando, transformando o próprio corpo de reposição em armadilha.

---

## Sobre a Técnica

O Bunshin Daibakuha no Jutsu não cria nada por si só. A técnica é o gatilho que faz um Kage Bunshin já ativo liberar toda a reserva que carrega em uma única explosão de chakra bruto, no ponto onde o clone se encontra. O corpo que segundos antes lutava, falava ou simplesmente esperava se converte em detonação, e o inimigo que investiu contra o que julgava ser o usuário original recebe o estouro de uma reserva inteira em vez de um golpe físico.

O valor tático da técnica nasce da mesma ambiguidade que sustenta o Kage Bunshin. Um clone das sombras é indistinguível do original até o momento em que se desfaz, e transformar essa indistinção em arma ofensiva é o próximo passo natural depois de dominar a clonagem sólida. A técnica não substitui o Kage Bunshin, depende dele. Sem um clone ativo carregando reserva, não existe carga para detonar.

A explosão consome inteiramente a fração de RC que aquele clone específico carregava no instante do gatilho, herdada da Divisão da Reserva publicada na ficha do Kage Bunshin no Jutsu. Um clone recém-criado, quase intocado, detona com força cheia. Um clone que já gastou boa parte da própria fração em técnicas ou em combate detona fraco, e a leitura tática de quando sacrificar qual clone é a habilidade real que a técnica exige do usuário.

---

## Requisitos de Acesso

- **Controle de Chakra:** LV4, o mesmo portão de rank B do Kage Bunshin no Jutsu.
- **Técnica prévia:** Kage Bunshin no Jutsu, com pelo menos um clone ativo em campo no momento da declaração.
- **Grau de Exigência de Moldagem:** Alta. O gatilho em si é simples, mas o mesmo grau do clone detonado governa o quanto da reserva armazenada se converte em dano efetivo, pela mesma leitura de Fator de Moldagem que qualquer técnica de dano direto usa.

---

## Custo de XP

A técnica não possui RC nominal própria. O combustível da explosão é herdado do clone detonado, e nenhuma tabela de RC nominal e custo mínimo pertence a este documento. O custo de XP corre no piso da faixa do rank B declarado, porque não existe posição de RC própria para interpolar.

| RC nominal | Custo de XP |
|---|---|
| Herdado do clone | 3.500 |

```
XP = piso da faixa de XP do rank B = 3.500
```

---

## Efeitos Globais

A detonação consome o clone por completo. Não há corpo, fumaça residual nem chance de recuperação da reserva envolvida, ao contrário da dispersão comum do Kage Bunshin. A transferência de memória do clone ao usuário original, publicada na ficha do Kage Bunshin, ocorre normalmente no instante anterior à explosão, e o usuário retém qualquer experiência que o clone tenha vivido antes do gatilho.

O estouro não carrega assinatura elemental. É calor e pressão de chakra bruto, visível como uma esfera curta de distorção seguida da explosão, sem cor ou padrão específico de nenhuma natureza.

---

## Mecânica de Ativação

- **Custo de RC do gatilho:** 0. A técnica não cobra RC adicional do usuário além do que o clone já carrega. A explosão é a liberação de uma reserva que já foi paga na criação do clone.
- **Selos de referência:** 0, estrutural. O gatilho é comando mental instantâneo sobre o próprio clone, sem sequência física de selos.
- **Janela de Canalização:** instantânea.
- **Ação:** declarável como ação do turno para detonação deliberada, ou como reação no instante em que um ataque conecta contra o clone, convertendo o golpe recebido em explosão de retorno contra quem o desferiu.
- **Restrições:** exige um Kage Bunshin ativo do próprio usuário. Não é aplicável a clones de outra técnica nem a clones de outro usuário.

---

## Família de Dano

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator_Moldagem
Fator_Moldagem = LV_CC² × 2,5 × coef_técnica

coef_entrega  = 0,15    entrega em área ao redor do ponto de detonação
mult_Tipo     = 1,00    sem natureza elemental
coef_técnica  = 2,0     moldagem relevante, mas não dominante, porque o combustível já chega pronto do clone
```

**RC nominal** é a fração de RC que o clone detonado ainda carregava no instante do gatilho, lida diretamente da Divisão da Reserva do Kage Bunshin. **LV_CC** é o nível de Controle de Chakra do usuário no momento da detonação, não do clone.

**Raio de Detonação:** banda Curta do Núcleo de Combate, até 15 metros, medida a partir do ponto onde o clone se encontrava. Todo alvo dentro do raio sofre o dano cheio, sem redução por distância dentro da própria banda.

---

## Progressão por Maestria

A técnica não escala por nível próprio além do que o Fator de Moldagem já aplica pela fórmula acima. A maestria real do usuário se expressa em duas decisões táticas, e não em uma tabela de custo pago: qual clone detonar, e em que instante da cena a reserva armazenada nele vale mais como explosão do que como corpo em combate.

---

## Sinergias

- **Kage Bunshin no Jutsu:** dependência direta e obrigatória. A ficha do Kage Bunshin é quem define quanta RC cada clone carrega, e esta técnica apenas libera esse valor.
- **Henge no Jutsu:** um clone disfarçado que detona ao ser tocado ou atacado combina o engano de forma com a armadilha de conteúdo, no padrão canônico de armadilhas de substituição.
- **Kawarimi no Jutsu:** o usuário que troca de lugar com o próprio clone momentos antes da detonação combina as duas técnicas em uma isca completa, corpo de troca e corpo de explosão no mesmo movimento.
- **Reação de emboscada:** a leitura por reação transforma qualquer clone parado em armadilha ativa, e equipes que posicionam clones como sentinelas convertem terreno neutro em campo minado.

---

## Notas para o Mestre

- **A força da explosão é dinâmica, não fixa:** pergunte sempre quanto o clone que detona ainda carrega antes de rolar dano. Um clone recém-criado é uma bomba cheia. Um clone que já lutou é um estouro fraco.
- **A memória sempre retorna primeiro:** aplique a transferência de conhecimento do Kage Bunshin antes de resolver a explosão. O usuário sabe o que o clone viu, mesmo que o clone não sobreviva ao próprio gatilho.
- **A reação recompensa a paciência:** um jogador que planta um clone como isca e espera o inimigo se comprometer antes de detonar está jogando a técnica como o cânone a usa. Recompense a leitura tática, não apenas o gatilho reflexo.
- **PdMs:** shinobi experientes atacam clones suspeitos com técnicas de área ou a distância antes de se aproximar, precisamente para negar esta técnica. A contramedida canônica já existe na postura de combate correta.
