---
id: naruto.technique.kirin
title: "Kirin (麒麟)"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Kirin.md
---

# Kirin — (麒麟)
Ninjutsu · Raiton · S-rank

Fenômeno de raio natural convocado, inevitável pela velocidade do relâmpago.

---

## Sobre a Técnica

O Kirin é uma técnica de Ninjutsu de natureza Raiton classificada como S-rank, criada por Sasuke Uchiha como trunfo destinado a superar um oponente que ele não conseguiria vencer por meios convencionais. A técnica não utiliza o chakra de Raio do usuário como fonte de energia. Ela convoca o raio natural diretamente das nuvens de tempestade, e o chakra do usuário serve apenas como guia de formação e direcionamento. O raio moldado assume brevemente a forma da criatura mitológica que dá nome à técnica antes de descer sobre o alvo.

A propriedade que separa o Kirin de toda outra técnica de Raiton é a origem do seu poder. A potência não depende da capacidade do usuário, e sim da intensidade da tempestade convocada. Uma vez que as nuvens existem, moldar e guiar o raio exige pouquíssimo chakra, o que permite executar a técnica mesmo em estado de exaustão. O raio desce à velocidade natural do relâmpago nuvem-solo, alcançando o alvo em uma fração de segundo que nenhuma percepção consegue acompanhar, o que torna a técnica impossível de esquivar.

A execução depende de nuvens de tempestade ativas sobre o alvo. Sem elas, a técnica não existe. As nuvens formam-se pelo calor lançado ao céu durante o combate: cada técnica de Katon disparada para o alto aquece o ar e alimenta a corrente ascendente que gera a tempestade. Quanto maior o volume de calor acumulado, mais densa a tempestade e mais poderoso o raio resultante. O usuário constrói as condições ao longo da luta, e o disparo final consome a tempestade por inteiro, dispersando as nuvens e exigindo que todo o processo recomece para um segundo uso.

---

## Requisitos de Acesso

- **Raiton LV6** — portão de rank S; acesso pela Transcendência Kirin da inclinação Canto dos Mil Pássaros
- **Katon LV5** — necessário para gerar o volume de calor que forma a tempestade pelo método principal
- **INT mínimo 20** — âncora energética das duas naturezas de alto nível

---

## Despertar / Aquisição

O Kirin é adquirido como a Transcendência da inclinação Canto dos Mil Pássaros no Raiton LV6. O acesso exige domínio simultâneo de duas naturezas, pois a técnica depende do Katon para a formação da tempestade e do Raiton para a convocação e moldagem do raio. Um usuário que possua apenas o Raiton em alto nível pode acessar somente o método alternativo de manipulação direta, descrito na Mecânica de Ativação, que produz uma versão reduzida da técnica.

---

## Custo de XP

| Afim natal Raiton | Sem afinidade definida |
|---|---|
| 28.000 XP | 32.000 XP |

O Katon LV5 é pré-requisito à parte, com custo próprio na progressão da perícia elemental. O valor acima cobre apenas a aquisição do Kirin.

---

## Efeitos Globais

A formação da tempestade é visível a todos no campo de batalha. O céu escurece progressivamente conforme o volume de calor aumenta, e as nuvens de tempestade se adensam sobre a área. Um oponente atento percebe a formação e compreende que uma técnica de grande escala está sendo preparada, ainda que não possa impedir diretamente a convocação do raio uma vez que as condições estejam completas.

O disparo do Kirin ilumina todo o campo com o clarão do relâmpago e produz um estrondo que se propaga por quilômetros. As nuvens se dispersam imediatamente após o uso, e o céu limpa. A tempestade convocada não pode ser reutilizada; um segundo Kirin exige a reconstrução completa das condições de tempestade desde o início.

O raio do Kirin é raio natural moldado, não chakra elétrico. Por essa razão, técnicas de absorção de chakra elemental não conseguem drená-lo, pois não há chakra do usuário na descarga para ser absorvido.

---

## Mecânica de Ativação

- **Custo de RC do disparo:** 100 RC fixos. Este é o único chakra que o usuário gasta na convocação, o que torna a técnica executável mesmo próximo da exaustão.
- **Custo de preparação:** nenhum custo dedicado no método principal. A tempestade acumula pelo volume de chakra de Katon lançado ao céu durante o combate, e esse Katon serve simultaneamente ao seu propósito ofensivo normal.
- **Janela de Canalização:** o disparo de 100 RC resolve em 0 turnos para RC média ou alta, e em 1 turno para RC muito baixa. A canalização representa o tempo de moldar o guia do raio, não de acumular poder; o raio em si é instantâneo.
- **Ação:** o usuário forma o selo de convocação e direciona o raio ao alvo. A tempestade deve estar formada no momento do disparo.
- **Restrições:** exige nuvens de tempestade ativas. Consumo único por tempestade. O disparo dispersa as nuvens.

---

## Intensidade da Tempestade

A potência do Kirin é modulada pela Intensidade da Tempestade, um contador que acumula pelo volume total de chakra de Katon lançado ao céu durante o combate. O rank das técnicas de Katon não importa isoladamente; o que conta é o volume de chakra investido, pois o chakra de Katon corresponde ao volume de fogo e calor que alimenta a corrente ascendente.

```
volume_acumulado = soma do RC de Katon lançado ao alto durante o combate
Intensidade = nível correspondente ao volume acumulado
```

| Nível | Fator de dano | Volume de Katon necessário |
|---|---|---|
| 1 | ×1,00 | 400 |
| 2 | ×1,80 | 1.000 |
| 3 | ×2,80 | 1.900 |
| 4 | ×3,90 | 3.000 |
| 5 | ×4,75 | 4.200 |

O Amaterasu, quando presente, contribui para o volume com peso quádruplo em relação ao seu custo de chakra, pois o fogo negro gera calor muito acima do proporcional. Cada uso do Amaterasu conta como quatro vezes o seu custo no acúmulo de volume.

---

## Família de Dano

O dano do Kirin não segue a fórmula padrão do Manual de Jutsus, pois não deriva da RC investida. A energia vem do raio natural, e o dano é um valor de fenômeno modulado pela Intensidade da Tempestade:

```
dano = dano_base × fator_Intensidade
dano_base = 1.400
```

O `dano_base` representa a energia do raio natural em uma tempestade mínima. O `fator_Intensidade` é determinado pelo nível de tempestade construído durante o combate. O bônus de Controle de Chakra do usuário não entra no cálculo de dano, pois o usuário apenas guia o raio; a potência pertence à tempestade.

| Nível de Tempestade | Dano | vs Armadura de Susanoo¹ | vs Susanoo Perfeito¹ |
|---|---|---|---|
| 1 | 1.400 | 25% | 13% |
| 2 | 2.520 | 45% | 23% |
| 3 | 3.920 | 71% | 35% |
| 4 | 5.460 | 98% | 49% |
| 5 | 6.650 | 120% | 60% |

¹ [proposta] Valores de referência do Susanoo derivados como múltiplo do PV do usuário tier Kage: Armadura ×4,0 (PV 5.544), Perfeito ×8,0 (PV 11.088). A serem confirmados pelo documento de Susanoo.

---

## Interação com Defesas

O Kirin é inevitável. O raio desce à velocidade natural do relâmpago, e nenhum teste de Evitar se aplica. O alvo não pode esquivar por meios convencionais de velocidade ou percepção.

O raio é raio natural moldado, não chakra elétrico. Técnicas de absorção de chakra elemental não conseguem drená-lo, pois não há chakra do usuário na descarga. Esta imunidade é específica à absorção de chakra e não se estende a defesas físicas como o Susanoo, que bloqueia o raio pela estrutura material.

---

## Método Alternativo — Manipulação Direta

Um usuário que não tenha construído a tempestade pelo Katon de combate pode forçar a formação de uma nuvem localizada enviando chakra de Raiton diretamente ao céu. Este método difere do principal em custo, velocidade e potência.

- **Custo:** 2.500 RC de uma vez, pagos para estimular a formação da nuvem.
- **Velocidade:** rápido, resolve em 1 a 2 turnos, sem depender de acúmulo de combate.
- **Limite de Intensidade:** trava no nível 2, fator ×1,80, independente de qualquer investimento adicional.
- **Frequência:** uma vez por dia.

O método alternativo existe para situações em que a preparação prolongada não é viável, ao custo de uma versão consideravelmente mais fraca da técnica e de um gasto elevado de chakra que apenas usuários com Reserva alta conseguem sustentar.

---

## Progressão por Maestria

| Nível | Capacidade disponível |
|---|---|
| Raiton LV6 + Katon LV5 | Acesso ao Kirin pleno pelo método principal, até Intensidade nível 5 |
| Raiton LV6 sem Katon alto | Acesso apenas ao método de manipulação direta, travado no nível 2 |

---

## Referência de Usos por Perfil

| Usuário | RC restante típica após combate | Disparo (100 RC) | Método viável |
|---|---|---|---|
| Sasuke exausto (contra Itachi) | ~120 | 1 turno, dispara | Principal |
| Sasuke jounin | ~600 | 0 turnos, dispara | Principal |
| Saki Especial | ~1.500 | 0 turnos, dispara | Principal e alternativo |

---

## Sinergias

- **Katon de alto volume:** qualquer técnica de Katon lançada ao céu durante o combate acumula Intensidade sem custo dedicado, pois serve simultaneamente ao ataque e à formação da tempestade.
- **Amaterasu:** o fogo negro contribui com peso quádruplo para o volume de tempestade, sendo a via mais eficiente para alcançar os níveis altos de Intensidade rapidamente.
- **Combate prolongado:** a técnica premia o usuário que sobrevive a um combate longo lançando Katon, convertendo o tempo de luta em potência acumulada.
- **Reserva de Chakra alta:** viabiliza o método alternativo de manipulação direta, inacessível a usuários com Reserva baixa.

---

## Notas para o Mestre

- **Raridade estrutural:** o Kirin exige nuvens de tempestade que precisam ser construídas em combate, tornando-o um trunfo de uso único por preparação. O Narrador deve tratar cada uso como um evento raro, não como uma abertura padrão de combate.
- **A tempestade é pública:** o escurecimento do céu e o adensamento das nuvens são perceptíveis a todos. Um oponente inteligente percebe a formação e pode tentar encerrar o combate antes que a Intensidade alcance níveis perigosos, ou forçar o usuário a se defender em vez de lançar Katon.
- **Narração do disparo:** o raio desce instantaneamente, sem tempo de reação. A narração não deve conceder janela de esquiva; a inevitabilidade é a essência da técnica. Descreva o clarão, o estrondo e a dispersão imediata das nuvens.
- **Acúmulo de volume:** o Narrador rastreia o volume de Katon lançado ao céu ao longo do combate. Informe ao jogador o nível de Intensidade atingido a cada técnica de Katon relevante, para que a decisão de disparar ou continuar acumulando seja informada.
- **Consumo único:** após o disparo, as nuvens se dispersam. Um segundo Kirin no mesmo combate exige reconstruir todo o volume de tempestade do zero, o que raramente é viável na mesma luta.
