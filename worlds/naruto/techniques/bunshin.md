---
id: naruto.technique.bunshin
title: "Técnica do Clone"
version: 2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Bunshin_no_Jutsu.md
supersedes: legacy.bunshin-no-jutsu
---

# Técnica do Clone — 分身の術 (Bunshin no Jutsu)
Ninjutsu · Sem natureza elemental · Rank E

A técnica de finta fundamental do repertório shinobi, exigida no exame de graduação da Academia.

---

## Sobre a Técnica

O Bunshin no Jutsu projeta cópias visuais do usuário sem qualquer substância física. O clone não toca, não ataca, não projeta sombra consistente, não deixa pegadas e não desloca o ar por onde passa, e ao contato com qualquer matéria sólida a imagem se desfaz. A função da técnica é multiplicar os corpos visíveis no campo para que o ataque inimigo escolha errado, e essa função inteira se sustenta na incapacidade do observador de distinguir o corpo real entre as imagens.

Na execução, o usuário molda uma quantidade mínima de chakra e a projeta em uma a quatro cópias, que se movem de forma independente sob direção mental. A dificuldade real da técnica é inversa à potência que o usuário carrega. O requisito é calibrar o chakra para quase nada, uma proporção interna fina que a régua de acesso do sistema trata como propriedade de elevação de degrau. Um shinobi de reserva colossal enfrenta essa calibração como um exercício de controle excepcional, porque a mesma precisão que um praticante mediano alcança sem esforço exige dele uma disciplina de moldagem que a reserva bruta nunca supre sozinha. O portão da técnica pertence à perícia de Controle de Chakra, nunca ao custo de RC.

O custo real da técnica mora na fragilidade do véu. Qualquer ataque de área varre todas as cópias sem teste, qualquer contato estoura a imagem tocada, e cada cópia perdida educa o adversário sobre o truque. Contra observação deliberada e calma, as falhas de verossimilhança denunciam o clone sem esforço. A técnica compra confusão em movimento e sob pressão. Parada e examinada, ela não engana ninguém treinado.

---

## Requisitos de Acesso

- **Controle de Chakra:** LV1, o portão de rank E.
- **Grau de Exigência de Moldagem:** Plena, elevada de Básica por tolerância zero a excesso de volume. A calibração exigida para projetar uma cópia quase sem chakra não tolera o excesso que uma reserva grande empurra para dentro da moldagem, e o Manual de Requisitos de Técnica cita esta entrada como o caso publicado dessa propriedade.
- **Linha de visão:** exigida para manter direção sobre as cópias, declarada na Mecânica de Ativação.

Abaixo do patamar que satisfaz o grau Plena, Base Total somada a SAB igual ou maior que 44, a técnica é inexecutável, independente do volume de RC disponível. É a trava mecânica exata por trás da dificuldade canônica de um shinobi de reserva colossal e controle ainda verde diante desta técnica de rank E.

---

## Custo de XP

A técnica não possui natureza elemental. O custo é único para qualquer shinobi.

| RC nominal (4 cópias) | Custo mínimo (4 cópias) | Custo de XP |
|---|---|---|
| 20 | 6 | 228 |

O custo de RC é variável por número de cópias, e a interpolação da Seção 4.1.1 corre pelo teto da faixa declarada, o RC nominal de quatro cópias.

```
posição = (20 − 5) ÷ (40 − 5) = 0,429
XP_base = 100 + 0,429 × (400 − 100) = 228
```

---

## Efeitos Globais

As cópias reproduzem a aparência, a vestimenta e o equipamento visível do usuário no instante da conjuração, incluindo qualquer transformação de Henge que ele esteja vestindo. A nuvem breve de fumaça da projeção cobre o ponto de origem e dificulta rastrear qual silhueta saiu de onde.

A imagem não interage com o mundo. Em terrenos que registram passagem, como neve, poeira fina ou lâmina d'água, a ausência de marcas denuncia as cópias para qualquer observador atento ao chão. O rastro de chakra da projeção permanece legível para sensores e para dōjutsu de leitura de fluxo.

---

## Mecânica de Ativação

- **RC nominal por número de cópias:** 5 por cópia, de uma a quatro cópias por conjuração.
- **Custo mínimo por número de cópias:** a terça parte do RC nominal, arredondado por piso.

| Cópias | RC nominal | Custo mínimo |
|---|---|---|
| 1 | 5 | 1 |
| 2 | 10 | 3 |
| 3 | 15 | 5 |
| 4 | 20 | 6 |

- **Custo pago:** o custo mínimo da linha escolhida multiplicado pelo fator do Índice de Desperdício do executor, pela mesma régua de Controle de Chakra que rege qualquer técnica.
- **Selos de referência:** 1. **Janela de Canalização:** instantânea em qualquer patamar de Moldagem elegível.
- **Ação:** ação do turno para a conjuração. A direção das cópias depois de conjuradas não consome ação.
- **Restrições:** as cópias exigem linha de visão do usuário, e a cópia que sai do campo visual se dissolve. A manutenção não tem custo. A dispensa voluntária é livre.

---

## Resolução — O Imposto de Pontaria

Enquanto o usuário e as cópias se misturam no campo, todo ataque de alvo único dirigido ao usuário resolve pela Régua de Leitura publicada na ficha do Kawarimi no Jutsu, com o atacante testando a própria percepção em oposição ao teste de Moldagem do usuário.

- **Sucesso do atacante:** ele distingue o corpo real entre as imagens, e o ataque resolve normalmente.
- **Falha do atacante:** o golpe resolve contra uma cópia à escolha do defensor. A cópia estoura, e a ação do atacante foi gasta contra fumaça. A escolha pertence ao defensor porque a finta é dele.

**Educação do oponente.** A mesma régua de familiaridade cumulativa que o Kawarimi publica se aplica aqui: cada cópia estourada contra o mesmo observador soma 10% ao teste de percepção dele. Recriar cópias no meio da cena reinicia o custo de conjuração, nunca o aprendizado do adversário.

**Encerramento do véu.** As cópias persistem pela cena. Encerram a técnica o contato de uma cópia com matéria sólida ou técnica, que estoura apenas a cópia tocada; o golpe sólido no usuário com dano igual ou superior a 15% do PV máximo, que quebra a concentração e estoura todas as cópias, no mesmo limiar da interrupção de canalização; a dispensa voluntária; e a inconsciência do usuário.

---

## Interação com Defesas

- **Ataques de área:** varrem todas as cópias dentro da zona sem teste de percepção. A resposta canônica ao véu é a rajada, e a mecânica a preserva.
- **Falhas de verossimilhança:** terrenos que denunciam a ausência de interação concedem ao observador vantagem no teste, declarada pelo Mestre antes da rolagem.
- **Percepção sobrenatural:** contra Sharingan desperto e sensores, o teste de percepção do observador segue os documentos de Sharingan e de sensoriamento, que leem a Régua de Leitura publicada no Kawarimi. O efeito esperado é a leitura consistente das cópias, no mesmo padrão do cânone do teste dos sinos.

O Bunshin não é técnica ofensiva de alvo e não declara Perfil de Evasão.

---

## Uso Fora de Combate

O clone engana o olhar de passagem e falha sob escrutínio. Em observação deliberada de alguns segundos em condições limpas, um shinobi treinado identifica as falhas automaticamente, sem teste. Condições que degradam a observação, como distância, multidão, movimento ou penumbra, preservam o engano e devolvem a resolução ao teste padrão da Régua de Leitura, a critério do Mestre.

A régua cobre os empregos canônicos da técnica: inflar o número aparente de um grupo observado à distância, despistar uma perseguição dobrando a esquina, cobrir a retirada real atrás de silhuetas que correm em direções diferentes.

---

## Progressão por Maestria

A técnica não escala por nível próprio. A maestria se expressa pela leitura do Índice de Desperdício de Controle de Chakra sobre o custo mínimo de cada linha de cópias, e pelo fato de que nenhum patamar abaixo do grau Plena executa a técnica de forma alguma.

```
desperdício = (185 − teste de Moldagem) × 1,3      piso 0%, teto 250%
custo pago  = custo mínimo × (1 + desperdício)
```

Tabela resolvida para a linha de quatro cópias, custo mínimo 6, a partir do primeiro patamar que satisfaz o grau Plena:

| Patamar de Moldagem | Teste de Moldagem | Custo pago |
|---|---|---|
| LV3 aprofundado, piso de acesso | 60 | 16 |
| LV4, com Refino | 116 | 11 |
| LV5, com Refino aprofundado | 142 | 9 |
| LV6, pleno | 185 | 6 |

---

## Referência de Usos por Perfil

Véus completos de quatro cópias por reserva cheia, pareados com o patamar de Moldagem mínimo plausível para cada perfil.

| Usuário | RC | LS | Moldagem de referência | Custo pago | Véus completos por reserva |
|---|---|---|---|---|---|
| Genin baixo sem clã | 400–800 | 80–160 | LV3 aprofundado | 16 | 25–50 |
| Genin alto / Chuunin | 700–1.400 | 140–280 | LV4, com Refino | 11 | 64–127 |
| Sasuke genin (Uchiha) | 1.325 | 265 | LV4, com Refino | 11 | 120 |

---

## Sinergias

- **Kawarimi no Jutsu:** a substituição executada atrás do véu de cópias esconde o ponto de chegada da troca, e as duas leituras da mesma Régua se acumulam contra o mesmo atacante em momentos distintos da rodada.
- **Henge no Jutsu:** a cópia carrega a aparência transformada que o usuário vestir na conjuração, e a combinação alimenta os despistamentos do cânone. O detalhamento do disfarce pertence ao registro do Henge.
- **Terreno de penumbra e fumaça:** condições que degradam a observação protegem o véu das falhas de verossimilhança e empurram o adversário para o teste em desvantagem prática.
- **Aliados em formação:** o véu conjurado no meio de um esquadrão em movimento multiplica os alvos aparentes do grupo inteiro, não apenas do usuário.

---

## Notas para o Mestre

- **A fragilidade é o design:** não proteja o véu de ataques de área nem de escrutínio parado. A técnica vale pelo que compra em movimento e sob pressão, e as respostas que a desmontam são o contrajogo canônico.
- **Narração da falha do atacante:** descreva o golpe atravessando a imagem e a fumaça se desfazendo no lugar do sangue. O desperdício da ação é o produto da técnica.
- **Vantagem de verossimilhança:** declare a condição do terreno antes da rolagem, nunca depois. A neve que denuncia pegadas é informação de campo, não emboscada de regra.
- **O portão de moldagem é a régua real de dificuldade:** um jogador com reserva enorme e Base Total mais SAB abaixo de 44 simplesmente não executa a técnica. Não converta essa trava em penalidade narrativa solta, ela já é a regra.
- **Frequência:** a educação cumulativa do oponente pune a repetição sozinha. Se o véu cai rápido demais contra veteranos, a matemática está funcionando como o cânone manda.
- **PdMs:** genin adversários conjuram o véu na abertura do combate. Veteranos o usam como cortina pontual para reposicionamento, uma ou duas cópias, e raramente investem no véu completo.
