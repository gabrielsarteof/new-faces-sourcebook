---
id: naruto.technique.chidori
title: "Chidori — Canto dos Mil Pássaros (千鳥)"
version: 3
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Chidori_Final_v3.md
---

# Chidori — Canto dos Mil Pássaros (千鳥)
Ninjutsu · Raiton · A-rank

---

## Sobre a Técnica

O Chidori é uma técnica de Ninjutsu de natureza Raiton classificada como A-rank, desenvolvida originalmente por Kakashi Hatake e posteriormente transmitida ao seu discípulo Sasuke Uchiha. A técnica concentra uma grande quantidade de chakra de Raio na palma da mão do usuário, comprimindo o campo eletromagnético até o ponto em que as descargas espontâneas tornam-se visíveis ao redor do braço e produzem um ruído característico, semelhante ao canto simultâneo de mil pássaros, que dá nome à técnica.

A execução exige que o usuário forme os selos de concentração enquanto acumula o chakra na mão dominante, avançando em seguida contra o alvo em velocidade máxima e entregando o campo comprimido por contato direto. A descarga elétrica penetra pelo caminho de menor resistência dentro do alvo antes de dissipar, o que confere à técnica uma capacidade de atravessamento de defesas superior à da maioria das técnicas de Raiton de mesmo rank. O ruído produzido durante a canalização é inevitável e revela a intenção do usuário antes mesmo do avanço.

A técnica possui um risco estrutural associado à carga adicional de chakra que o usuário pode acumular além do mínimo necessário. Cada turno de acumulação intensifica o campo eletromagnético ao redor do braço e estreita progressivamente o campo de percepção periférica do praticante, que passa a concentrar a atenção de forma cada vez mais exclusiva no alvo à frente. Na carga máxima, essa concentração atinge o ponto em que ameaças laterais deixam de ser registradas com precisão, tornando o instante do avanço simultaneamente o de maior potencial destrutivo e de maior vulnerabilidade a flanqueamentos.

---

## Requisitos de Acesso

- **Raiton LV5**, com o caminho Mil Pássaros ativo na inclinação Canto dos Mil Pássaros
- **VEL mínimo 15**, necessário para a velocidade de entrega da estocada
- **INT mínimo 15**, âncora energética da família Raiton

O Controle de Chakra é pré-requisito implícito do Raiton e não precisa ser redeclarado.

---

## Custo de XP

| Afim natal Raiton | Sem afinidade definida | Natureza não-afim |
|---|---|---|
| 8.000 XP | 10.000 XP | 13.000 XP |

---

## Efeitos Globais

A ativação do Chidori é perceptível a toda a cena antes do impacto. O som produzido durante a canalização não pode ser suprimido, e qualquer shinobi presente tem oportunidade de identificar a técnica e reagir antes da chegada da estocada. Durante a execução, um campo elétrico fraco irradia ao redor do braço do usuário, provocando o arrepiamento de pelos, a vibração de objetos metálicos próximos e uma sensação de formigamento nos alvos dentro do alcance imediato. Esses fenômenos são ambientais e não causam dano por si mesmos.

O Debuff de Reação que acompanha a carga adicional incide sobre o próprio usuário. À medida que o chakra de Raio é comprimido além do mínimo, o campo eletromagnético gerado começa a interferir na percepção periférica do praticante, estreitando o foco de atenção a cada turno de acumulação. Esse fenômeno é a razão pela qual a técnica é considerada de alto risco em confrontos com múltiplos oponentes: o pico de potência é alcançado no exato instante em que a vulnerabilidade lateral é máxima.

---

## Mecânica de Ativação

- **Custo de RC:** 750 RC fixos por ativação, acrescidos de RC variável por turno de carga opcional.
- **Custo de PS:** 60 PS por turno de carga adicional, com limite de 3 turnos e 180 PS no total.
- **Janela de Canalização:** determinada pelo custo de 750 RC em relação ao Limite de Saída do usuário, conforme a fórmula da Seção 3.2 do Manual de Jutsus. Sasuke jounin com LS de 442 RC executa em 1 turno de selos; Kakashi com LS de 188 RC leva 2 turnos.
- **Ação:** janela de canalização seguida de estocada imediata, com opção de 1 a 3 turnos de carga adicional antes da entrega.
- **Restrições:** corpo a corpo, alvo único. Exige linha de deslocamento livre até o alvo.

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus:

```
dano = RC × coef_entrega × mult_Tipo + bônus_CC × coef_técnica
dano = RC × 0,18 × 1,75 + bônus_CC × 2,0
dano = RC × 0,315 + bônus_CC × 2,0
```

O coeficiente de entrega 0,18 reflete a forma de entrega por ponto concentrado em contato direto. O coeficiente técnico 2,0 reflete a alta dependência de moldagem precisa que caracteriza a técnica. O `bônus_CC` corresponde ao bônus acumulado da perícia Controle de Chakra do usuário, sem a adição de INT, evitando dupla contagem com o componente de RC.

O componente de RC escala a cada turno de carga adicional, acrescentando até 1 LS por turno. O componente de bônus_CC é fixo para cada usuário, independente da quantidade de chakra investida, pois reflete o nível de maestria de moldagem e não o volume de chakra disponível.

---

## Tabela de Descarga

Par de referência A-rank: PV 972. Par de referência Kage: PV 1.386.

| Usuário | bônus CC | Sem carga | +1 turno | +2 turnos | +3 turnos |
|---|---|---|---|---|---|
| Kakashi jounin | 43 | 322 | 381 | — | — |
| Sasuke genin | 28 | 292 | 376 | 459 | — |
| Sasuke jounin | 50 | 336 | 475 | 615 | 754 |
| Sasuke adulto | 65 | 366 | 587 | 807 | 1.028 |
| Saki Especial | 85 | 406 | 721 | 1.036 | 1.351 |

| Usuário | % PV par A-rank | +1 turno | +2 turnos | +3 turnos |
|---|---|---|---|---|
| Kakashi | 33% | 39% | — | — |
| Sasuke genin | 30% | 39% | 47% | — |
| Sasuke jounin | 35% | 49% | 63% | 78% |
| Sasuke adulto¹ | 26% | 42% | 58% | 74% |
| Saki¹ | 29% | 52% | 75% | 97% |

¹ Percentuais calculados contra o par Kage com PV 1.386, par adequado ao tier desses usuários.

---

## Interação com Defesas

O Chidori ignora 50% da Absorção do alvo. A capacidade de atravessamento decorre da concentração do campo elétrico em ponto único, que penetra pelo caminho de menor resistência antes de dissipar. A técnica não possui ignora-esquiva intrínseco; a dificuldade em esquivar da estocada é representada pelo atributo VEL do usuário no teste de acerto.

---

## Rider — Paralisia Parcial

A descarga elétrica aplica Paralisia Parcial ao alvo conforme a margem do teste de acerto, seguindo o rider natural do Raiton definido na Seção 5.4 do Manual de Jutsus:

| Margem | Grau de Paralisia Parcial |
|---|---|
| Sucesso Justo | Leve |
| Sucesso Pleno | Moderado |
| Crítico | Grave |

---

## Debuff de Reação — Auto-aplicado

Cada turno de carga adicional aplica uma penalidade acumulativa de 10% sobre os testes de Reação do próprio usuário, incidindo sobre os testes de VEL mais SAB. O debuff é removido automaticamente ao final do turno em que a estocada é entregue e não persiste entre rodadas.

| Turnos de carga adicional | Penalidade acumulada em Reação |
|---|---|
| 0 | — |
| 1 | 10% |
| 2 | 20% |
| 3 | 30% |

---

## Progressão por Maestria

O Chidori nasce do caminho Mil Pássaros, pertencente à inclinação Canto dos Mil Pássaros do Raiton. A progressão na perícia não altera os coeficientes da técnica, mas expande as capacidades disponíveis ao praticante a partir dela.

| Nível | Capacidade desbloqueada |
|---|---|
| Raiton LV5, caminho Mil Pássaros | Acesso ao Chidori; perfuração de 50% da Absorção |
| Raiton LV5, caminho Dedo de Raijin | Modo Um Dedo: acréscimo de 300 RC ao custo, perfuração sobe para 75% |
| Raiton LV6, Transcendência Kirin | Acesso ao Kirin, técnica distinta de rank S |

---

## Referência de Usos por Perfil

| Usuário | RC | LS | Janela base | Usos sem carga |
|---|---|---|---|---|
| Kakashi jounin | 942 | 188 | 2 turnos | 1 |
| Sasuke genin | 1.325 | 265 | 2 turnos | 1 |
| Sasuke jounin | 2.211 | 442 | 1 turno | 2 |
| Sasuke adulto | 3.500 | 700 | 1 turno | 4 |
| Saki Especial | 5.000 | 1.000 | 0 turnos | 6 |

---

## Sinergias

O Chidori beneficia-se de VEL elevado, pois o teste de acerto utiliza VEL mais DES, e velocidade alta reduz a janela efetiva de esquiva do alvo. Um oponente que já carregue Paralisia Parcial de qualquer fonte não pode realizar o teste de Evitar, tornando a estocada automaticamente bem-sucedida. O caminho Concisão do Controle de Chakra reduz a contagem de selos necessários para a canalização, comprimindo a janela de execução padrão. Reserva de Chakra elevada amplia tanto o número de usos disponíveis por combate quanto a carga máxima viável por ativação.

---

## Notas para o Mestre

A ativação do Chidori é um aviso público antes de ser um ataque. O som que precede a estocada é audível por toda a cena, e qualquer shinobi presente tem oportunidade de reagir antes do impacto. A tensão dramaticamente relevante na mesa não é a dúvida sobre o acerto, mas a disputa entre a velocidade de execução do usuário e a capacidade dos oponentes de interromper a canalização. Dano igual ou superior a 15% do PV máximo do usuário recebido em um único golpe durante a janela de canalização cancela a carga e descarta toda a RC investida no turno.

A execução sem carga é a forma profissional da técnica. Não consome PS, não aplica o Debuff de Reação e ainda entrega dano sólido de A-rank dentro da faixa Forte. A carga adicional existe para situações em que o alvo está imobilizado, atordoado ou em clara desvantagem posicional, e tratá-la como padrão é um erro tático que o próprio mecanismo de estreitamento perceptivo representa.

A situação de Kakashi não exige regras especiais. Com RC de 942 e a manutenção do Sharingan consumindo chakra por turno como custo independente, a margem disponível para o Chidori em combate real é estreita. O sistema representa essa limitação pelos números do próprio personagem, sem intervenção adicional do Narrador.

A narração deve variar com a intensidade da carga utilizada. Na execução sem carga, a estocada é limpa e quase silenciosa, com a luminosidade elétrica surgindo apenas no momento do impacto. Com a carga máxima, o braço emite um uivo crescente visível a distância considerável, e o ponto de impacto produz uma detonação sônica audível por todo o campo de batalha. São eventos mecanicamente distintos e narrativamente distintos, e a mesa deve sentir essa diferença.
