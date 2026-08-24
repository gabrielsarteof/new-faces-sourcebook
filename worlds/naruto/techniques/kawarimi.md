---
id: naruto.technique.kawarimi
title: "Substituição de Corpo"
version: 2.1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Kawarimi_no_Jutsu.md
supersedes: legacy.kawarimi-no-jutsu
---

# Substituição de Corpo — 変わり身の術 (Kawarimi no Jutsu)
Ninjutsu · Sem natureza elemental · Rank E

A técnica defensiva fundamental do repertório shinobi, ensinada na Academia e presente no exame de graduação.

---

## Sobre a Técnica

O Kawarimi no Jutsu troca o corpo do usuário de lugar com um objeto próximo no instante em que um ataque conecta. O golpe atinge o substituto, tipicamente uma seção de tronco, enquanto o corpo real reaparece a poucos metros do ponto original. A troca cria uma ilusão de ótica. O atacante acredita ter acertado, e o usuário explora esse lapso de atenção para contra-atacar ou se retirar. A técnica pertence ao currículo da Academia e integra o exame de graduação ao lado do Bunshin e do Henge, e todo ninja formado a executa.

Na execução, o usuário molda o chakra durante a aproximação do golpe e completa a troca no momento do impacto, sem sequência de selos. O deslocamento em si nunca falha. A substituição é uma certeza mecânica para qualquer shinobi graduado, e nenhum teste do usuário condiciona a saída do corpo. O que a técnica não garante é o engano. Um observador que acompanha a moldagem e a troca em tempo real recebe apenas o deslocamento, sem o lapso que torna o Kawarimi perigoso.

O custo real da técnica mora nessa assimetria. Contra oponentes de percepção comum, a substituição abre a janela de contra-ataque que define os confrontos entre genin. Contra veteranos, sensores e portadores de dōjutsu, ela se reduz a um salto curto e pago, executado diante de alguém que não perdeu o alvo de vista. O padrão explica o comportamento canônico da técnica, onipresente nos arcos iniciais e progressivamente ausente do combate de alto nível, sem que nenhuma regra a proíba. A ferramenta permanece disponível, e o adversário é que deixa de comprar o truque.

---

## Requisitos de Acesso

- **Controle de Chakra:** LV1, o portão de rank E.
- **Grau de Exigência de Moldagem:** Trivial, livre a qualquer praticante com o portão acima aberto.
- **Reação disponível:** a técnica consome a reação do turno, no mesmo slot da Esquiva.

---

## Custo de XP

A técnica não possui natureza elemental. O custo é único para qualquer shinobi.

| RC nominal | Custo mínimo | Custo de XP |
|---|---|---|
| 20 | 6 | 228 |

O RC nominal ocupa a posição 42,9% da faixa do rank E (5 a 40), pela Seção 4.1.1 do Manual de Criação de Jutsus. O custo mínimo é a terça parte do RC nominal, arredondado por piso.

```
posição = (20 − 5) ÷ (40 − 5) = 0,429
XP_base = 100 + 0,429 × (400 − 100) = 228
```

---

## Efeitos Globais

O substituto atingido revela imediatamente a execução da técnica para qualquer testemunha que observe o resultado, ainda que o atacante enganado demore um instante a mais para processá-la. O tronco cortado no lugar de um corpo é a assinatura visual mais reconhecível do repertório shinobi, e civis das nações elementais a identificam mesmo sem formação ninja.

A troca produz um estalo de ar deslocado e, com frequência, uma nuvem breve de fumaça que cobre os dois pontos. O rastro de chakra da moldagem permanece legível por alguns segundos para sensores e para dōjutsu de leitura de fluxo.

---

## Mecânica de Ativação

- **RC nominal:** 20. **Custo mínimo:** 6, pago pelo executor de Moldagem plena.
- **Custo pago:** varia com o Índice de Desperdício do executor, entre 6 e 19 nos benchmarks de referência abaixo.
- **Janela de Canalização:** instantânea em qualquer patamar de Moldagem. O custo pago máximo da técnica fica muito abaixo do Limite de Saída de qualquer shinobi formado.
- **Ação:** reação do turno, declarada quando um ataque contra o usuário é anunciado e antes da resolução. A moldagem substitui a sequência completa de selos.
- **Selos de referência:** 0. A execução como reação anunciada no instante do golpe não abre espaço narrativo para uma sequência de selos, e a assinatura da técnica é selada de forma estrutural, sem depender de Concisão ou do teste de interface de 169 que outras técnicas exigem para o mesmo resultado.
- **Aftermath:** nenhum, pela leitura padrão de rank E do Manual de Criação de Jutsus.
- **Restrições:** exige objeto substituto válido no alcance de 0 a 5 metros. Quem já gastou a reação do turno não substitui.

### Regra do Objeto Substituto

Em qualquer ambiente natural ou construído, presume-se a existência de um objeto substituto válido dentro do alcance, sem auditoria de cenário. O Mestre nega a presunção declarando terreno estéril antes do engajamento, como superfície de água aberta, deserto liso, plataforma nua ou queda livre. A declaração é prévia e pública, nunca retroativa.

- **Consciência do objeto:** a presunção exige que o usuário esteja ciente do entorno. Em cegueira total, escuridão sem leitura sensorial ou desorientação de grau Grave em diante, a presunção cai e o objeto precisa ser declarado concretamente.
- **Natureza do substituto:** matéria sólida solta ou destacável, de volume aproximado ao do corpo do usuário, na régua do tronco canônico. Estruturas fixas como paredes e o próprio solo não servem de substituto.
- **Substituição com pessoa:** um aliado disposto ao alcance pode servir de substituto, e os dois trocam de posição. A troca com alvo hostil ou involuntário fica fora da técnica base e pertence a uma variante futura de rank superior, com teste resistido próprio.
- **Selo explosivo:** o usuário que porta um selo explosivo pode fixá-lo ao substituto como parte da mesma reação, consumindo o item. A detonação resolve pelas regras do equipamento.

---

## Resolução — As Duas Camadas

A técnica resolve em duas camadas independentes, e a distinção governa todo o comportamento em mesa.

**Camada de deslocamento.** A troca sempre ocorre. O ataque que motivou a reação resolve contra o substituto e é negado. Nenhum teste do usuário e nenhuma condição do atacante impedem a saída do corpo.

**Camada de engano.** No instante da troca, o engano resolve pela Régua de Leitura abaixo.

### Régua de Leitura

O engano desta ficha resolve pela Régua de Leitura, `naruto.system.reading-scale`, instrumento de cenário que nasceu neste documento e passou a viver com dono próprio. A ficha declara o que a régua pede e não a republica, e o Bunshin no Jutsu e o Shunshin no Jutsu a consomem pelo mesmo endereço.

- **Classe:** Engano, porque a técnica mostra um corpo no ponto do impacto e entrega outro, e a familiaridade corrói.
- **Teste do executor:** o teste de Controle de Chakra na inclinação Moldagem, somando a especialização de Refino quando possuída.
- **O que o adversário vê no lugar da ameaça real:** o corpo do usuário parado onde o golpe o alcançaria, quando o que está ali é o objeto substituto.

- **Falha do atacante:** ele comprou a ilusão. Perde a leitura do campo até o início do próprio turno seguinte e gastou a Reação da rodada contra o corpo que leu. O primeiro ataque do usuário contra ele nesse intervalo resolve contra um alvo que não contesta a conexão, e o degrau que a técnica atacante publica não se move em ponto nenhum.
- **Sucesso do atacante:** ele acompanhou a moldagem e a troca em tempo real. O golpe ainda atinge o substituto, porque o movimento comprometido não redireciona, mas o embalo converte em perseguição. Movimento gratuito de até a distância da substituição em direção ao corpo real, e o ponto de chegada não concede ocultação alguma ao usuário.

**Familiaridade.** Corre pela régua daquele documento, dez por cento cumulativo à percepção do observador a cada substituição do mesmo usuário testemunhada na cena. O shinobi que repete o truque diante do mesmo adversário o educa a cada troca.

A régua substitui, de forma integral, o termo de compressão por razão de RC gasta sobre RC máxima usado em versões anteriores deste documento. Aquele termo penalizava reservas grandes em vez de premiar controle refinado, e a leitura corrente ancora o engano na perícia que de fato o produz.

---

## Interação com Defesas

A tabela lê a camada de Reação do Núcleo de Combate, seção 6, de que esta técnica é uma resposta declarada.

- **Telegrafado e Padrão:** negados normalmente pela camada de deslocamento. O degrau Veloz saiu da escada e não tem mais linha aqui.
- **Teleguiado:** o impacto imediato é negado, e a perseguição de um turno adicional prevista no próprio perfil continua sobre o corpo real. A propriedade de perseguição pertence à técnica atacante, paga em custo e XP no registro dela, e não à leitura do atacante.
- **Inevitável:** inaplicável. O degrau fecha por inteiro o lugar da esquiva, e nenhuma resposta da camada de Reação se aplica contra ele, o Kawarimi entre elas.
- **Técnicas de área:** a substituição não nega área, ela reposiciona. O usuário escapa apenas se o objeto substituto estiver fora da zona de efeito, o que o alcance de 0 a 5 metros raramente permite contra explosões amplas.

O Kawarimi não é técnica ofensiva de alvo e não declara Perfil de Evasão próprio. O que a falha do atacante na Régua de Leitura entrega é um alvo que não contesta a conexão do golpe seguinte do usuário, e nenhum degrau de nenhuma técnica se move por isso.

---

## Progressão por Maestria

A técnica não escala por nível próprio. A maestria se expressa pela leitura do Índice de Desperdício de Controle de Chakra sobre o custo mínimo de 6.

```
desperdício  = (185 − teste de Moldagem) × 1,3      piso 0%, teto 250%
custo pago   = 6 × (1 + desperdício)
```

| Patamar de Moldagem | Teste de Moldagem | Custo pago |
|---|---|---|
| LV1, entrada | 14 | 19 |
| LV3, aprofundado | 60 | 16 |
| LV4, com Refino | 116 | 11 |
| LV5, com Refino aprofundado | 142 | 9 |
| LV6, pleno | 185 | 6 |

---

## Referência de Usos por Perfil

| Usuário | RC | LS | Moldagem de referência | Custo pago | Usos por reserva cheia |
|---|---|---|---|---|---|
| Genin baixo sem clã | 400–800 | 80–160 | LV1 | 19 | 21–42 |
| Genin alto / Chuunin | 700–1.400 | 140–280 | LV3 aprofundado | 16 | 44–88 |
| Sasuke genin (Uchiha) | 1.325 | 265 | LV3 aprofundado | 16 | 83 |

---

## Sinergias

- **Bunshin no Jutsu:** o clone multiplica os corpos visíveis antes da troca, e a substituição executada atrás da cortina de cópias dificulta a leitura do ponto de chegada.
- **Selo explosivo:** a fixação no substituto converte a reação defensiva em armadilha imediata, no padrão canônico do combate na ponte de Nami.
- **Shunshin no Jutsu:** a substituição nega o golpe e o deslocamento corporal no turno seguinte abre distância real. A dupla cobre a lacuna entre o alcance curto de uma técnica e a fuga efetiva da outra.
- **Percepção sobrenatural do adversário:** contra Sharingan desperto e sensores, o teste de percepção do observador segue os documentos de Sharingan e de sensoriamento, que declaram a própria leitura do teste de Moldagem do executor pela Régua de Leitura do cenário. O efeito esperado é a leitura consistente da troca, reduzindo a técnica a transporte.

---

## Notas para o Mestre

- **Terreno estéril é declaração, não emboscada:** anuncie a ausência de objetos substitutos antes do engajamento, junto da descrição do campo. Negar a presunção depois de o jogador declarar a reação viola a regra.
- **Narração da falha de percepção:** descreva o golpe conectando com convicção antes de revelar o tronco. O lapso do atacante é o produto da técnica, e a mesa deve senti-lo como o mangá o mostra.
- **Narração do sucesso de percepção:** o atacante não hesita. O corte atravessa o substituto e o corpo dele já gira na direção do ponto de chegada. A diferença entre as duas narrações ensina a mesa a temer oponentes perceptivos.
- **Frequência:** o uso repetido se pune sozinho pela familiaridade cumulativa da Régua de Leitura. Se um jogador substitui todo turno, deixe a matemática do bônus trabalhar em vez de intervir por decreto.
- **PdMs:** genin adversários substituem cedo e com frequência. Veteranos guardam a técnica para golpes que não conseguem esquivar e raramente a repetem na mesma cena, porque conhecem a curva de familiaridade do próprio truque.
