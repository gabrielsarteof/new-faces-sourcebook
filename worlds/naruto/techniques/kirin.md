---
id: naruto.technique.kirin
title: "Kirin (麒麟)"
version: 2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Kirin_v2.md
---

# Kirin (麒麟)
Ninjutsu · Raiton · Rank S

---

## Sobre a Técnica

O Kirin é a condução de um relâmpago natural até o alvo. O executante não gera corrente, ele toma o controle da descarga que a atmosfera já produziu e a molda no instante da queda, dando a ela a forma da criatura mitológica que dá nome à técnica. A energia entregue pertence à tempestade, e o chakra do executante serve apenas de guia.

A execução depende de nuvens de tempestade ativas sobre o campo. Quando elas não existem, o executante as constrói aquecendo a atmosfera com fogo de grande escala, porque a diferença térmica gerada alimenta a corrente ascendente que forma a nuvem. Quanto maior o volume de calor lançado ao alto, mais densa a formação e maior a carga disponível para a descarga.

O relâmpago desce à velocidade natural da descarga entre nuvem e solo, e nenhuma percepção acompanha o percurso. A técnica atinge o ponto de queda sem conceder janela de reação, e a energia liberada excede a de qualquer corrente moldada por chakra. O disparo consome a tempestade por inteiro, dispersando as nuvens e exigindo que todo o processo recomece.

A descarga não é chakra elétrico, é eletricidade atmosférica com chakra apenas na direção. Técnicas de absorção de chakra encontram pouco do que drenar, porque a corrente que chega ao alvo não pertence a ninguém.

---

## Requisitos de Acesso

- **Raiton LV6:** portão de rank S, que resolve em 84 pela soma da Base 50 com INT 34
- **Moldagem Refinada:** 71 pela soma da Base Total com SAB, degrau lido do coeficiente técnico 2,0
- **Caminho Tempestade:** inclinação Corrente, dono da eletricidade atmosférica já presente no céu
- **Nuvens de tempestade ativas:** condição de campo, natural ou construída

---

## Despertar / Aquisição

A técnica está na camada Assinatura Pessoal em estado de Autoria Aberta. Conduzir um relâmpago natural em vez de gerar corrente é concepção que ninguém no mundo formulou, e nenhum personagem inicial adquire o Kirin na criação.

A entrada se abre a quem cumprir os requisitos e concluir o processo de criação de técnica. O primeiro personagem que chegar lá torna-se o criador e a entrada passa a Registrada no Compêndio de Raiton.

---

## Custo de XP

**Custo de XP:** 23.600

---

## Efeitos Globais

A formação da tempestade é pública e lenta. O céu escurece conforme o volume de calor sobe, as nuvens se adensam sobre a área, e qualquer observador competente entende que algo de grande escala está sendo preparado. O que ele não consegue é impedir a queda depois que as condições fecham.

O disparo ilumina o campo inteiro e produz um estrondo que se propaga por quilômetros. As nuvens se dispersam no ato e o céu limpa.

O ponto de queda é destruído junto com o alvo. A descarga abre cratera, vitrifica solo e derruba estrutura de pedra dentro do raio de impacto, e esse dano ao terreno é efeito de cena e não valor de ficha.

---

## Mecânica de Ativação

- **RC nominal:** variável de 600 a 1.800, extraída da tempestade e não da reserva do executante, com o nível de Intensidade determinando o valor
- **Custo mínimo:** 100, referentes à condução, pagos da reserva do executante
- **Selos de referência:** 1
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Inevitável, com a existência da tempestade como condição estrutural obrigatória
- **Janela de Canalização:** lida sobre o custo pago, resolvendo em zero turnos para qualquer executante com reserva acima de 500
- **Ação:** o executante forma o selo de condução e declara o ponto de queda
- **Restrições:** consumo único por tempestade, com o disparo dispersando as nuvens

O Kirin é a única entrada do sistema em que a RC nominal provém de fonte externa ao executante. A regra que a governa é a de pools externos da Reserva de Chakra, e o custo mínimo permanece sujeito ao Índice de Desperdício como em qualquer técnica.

---

## Intensidade da Tempestade

A carga disponível na formação determina a RC nominal da descarga. O contador acumula pela RC nominal das técnicas de Katon lançadas ao alto durante o combate, porque é o volume de calor que sobe ao céu que alimenta a corrente ascendente. O rank das técnicas de fogo não importa isoladamente.

```
volume acumulado = soma da RC nominal do Katon lançado ao alto durante o combate
```

| Nível | Volume de Katon | RC nominal disponível |
|---|---|---|
| 1 | 400 | 600 |
| 2 | 1.000 | 900 |
| 3 | 1.900 | 1.200 |
| 4 | 3.000 | 1.500 |
| 5 | 4.200 | 1.800 |

O Amaterasu contribui com peso quádruplo em relação à própria RC nominal, porque o fogo negro gera calor muito acima do proporcional ao chakra investido nele.

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator de Moldagem
dano = RC nominal × 0,35 × 1,75 + LV_CC² × 2,5 × 2,0
dano = RC nominal × 0,6125 + LV_CC² × 5
```

O coeficiente de entrega 0,35 corresponde à categoria de fonte atmosférica real, a mais alta da tabela, e a condição estrutural de tempestade é a contrapartida embutida nessa forma. O coeficiente técnico 2,0 corresponde à dependência alta: a energia pertence ao céu, e o que decide se ela chega inteira ao ponto declarado é a precisão com que o executante a molda no percurso.

---

## Tabela de Descarga

Par de referência Especial, PV 1.920.

| Nível | RC nominal | Dano em LV_CC 6 | Dano com 2 caminhos | % PV do par |
|---|---|---|---|---|
| 1 | 600 | 548 | 688 | 36% |
| 2 | 900 | 731 | 871 | 45% |
| 3 | 1.200 | 915 | 1.055 | 55% |
| 4 | 1.500 | 1.099 | 1.239 | 65% |
| 5 | 1.800 | 1.283 | 1.423 | 74% |

A coluna percentual lê a linha de dois caminhos, que é a configuração do executante que fechou a técnica.

---

## Interação com Defesas

O Perfil Inevitável anula a esquiva. Nenhum teste de Evitar se aplica, e o alvo não escapa por velocidade nem por percepção. Apenas Absorção e Resistência mitigam.

A descarga não é chakra do executante, e por isso técnicas de absorção de chakra não a drenam. A imunidade alcança apenas a absorção, e defesas estruturais interpostas entre o céu e o alvo continuam valendo pela própria massa.

A perfuração de Absorção do caminho Ponta não se aplica, porque o Kirin pertence à inclinação Corrente.

---

## Pontaria e o Sharingan

O relâmpago alcança o solo em fração de segundo, e acompanhar a velocidade e a direção da queda excede a percepção comum.

Com Sharingan ativo, o executante declara um alvo e a descarga o alcança onde ele estiver no instante da queda.

Sem Sharingan ativo, o executante declara um ponto do terreno, e a descarga atinge esse ponto e a área imediata em volta. Alvo que se desloque antes da queda escapa por posição, e o disparo permanece consumido.

---

## Rider de Paralisia Parcial

A descarga atravessa o alvo com carga muito acima da que qualquer técnica moldada entrega.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Grave |
| Grau máximo possível | Crítico |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |
| Membro afetado | o tronco, por difusão sistêmica |

---

## Formação sem Tempestade Natural

Duas vias existem para quem não encontra nuvens no campo.

A transcendência Arco Voltaico produz a carga atmosférica no ar em volta do praticante, sem tempestade e sem preparação. O executante que a possui dispensa a condição estrutural inteira e acessa qualquer nível de Intensidade que o volume de Katon do combate sustente.

O executante que não transcendeu força a formação de uma nuvem localizada enviando chakra de Raiton ao céu, ao custo de 2.500 pagos da própria reserva, com o resultado travado no nível 2 de Intensidade e limitado a uma vez por dia. A via existe para quando a preparação prolongada não é viável, e o preço é uma versão consideravelmente mais fraca por um gasto que poucas reservas sustentam.

---

## Progressão por Maestria

| Condição | Capacidade ou mudança |
|---|---|
| Raiton LV6, caminho Tempestade | acesso à técnica, dependente de tempestade em campo |
| Caminho Tempestade aprofundado | a condição aceita carga atmosférica acumulada por dois turnos de preparação declarados |
| Transcendência Arco Voltaico | a condição de tempestade deixa de existir |
| Controle de Chakra LV6 | Fator de Moldagem 180, e 320 com dois caminhos adicionais |
| Katon em alto volume | eleva a Intensidade disponível, e com ela a RC nominal da descarga |
| Sharingan ativo | a descarga passa a perseguir alvo declarado no lugar de ponto de terreno |

---

## Referência de Usos por Perfil

| Teste de Moldagem | Custo pago | RC | LS | Janela | Observação |
|---|---|---|---|---|---|
| 185 | 100 | 120 | 24 | 1 turno | executante à beira da exaustão ainda dispara |
| 185 | 100 | 2.211 | 442 | 0 turnos | disparo imediato |
| 116 | 190 | 1.325 | 265 | 0 turnos | disparo imediato |

O número de usos não é limitado pela reserva e sim pela tempestade. Cada formação sustenta um disparo.

---

## Sinergias

- **Katon de alto volume:** toda técnica de fogo lançada ao alto acumula Intensidade sem custo dedicado, servindo ao ataque e à formação da tempestade no mesmo ato
- **Amaterasu:** contribui com peso quádruplo e é a via mais rápida para os níveis altos de Intensidade
- **Sharingan:** converte o ponto de terreno em alvo perseguido, e é a diferença entre acertar quem está parado e acertar quem se move
- **Combate prolongado:** a técnica premia quem sobrevive lançando fogo, convertendo tempo de luta em carga acumulada
- **Caminho Refino:** derruba o custo pago ao mínimo de 100, o que permite disparar com a reserva praticamente vazia
- **Transcendência Arco Voltaico:** elimina a condição estrutural e transforma um trunfo de preparação em recurso disponível

---

## Notas para o Mestre

- **Rastreie o volume.** Informe o nível de Intensidade alcançado a cada técnica de Katon relevante, porque a decisão entre disparar agora e acumular mais um pouco é a tensão central da técnica e o jogador precisa dela informada
- **A tempestade é pública.** Um oponente competente lê o céu e responde, encerrando o combate antes do nível alto ou forçando o executante a se defender em vez de lançar fogo
- **Não conceda janela de esquiva.** A inevitabilidade é a essência da técnica. Narre o clarão, o estrondo e a dispersão imediata das nuvens, e resolva o dano sem teste de Evitar
- **Um disparo por formação.** Um segundo Kirin no mesmo combate exige reconstruir o volume do zero, o que raramente cabe na mesma luta
- **Sem Sharingan, o alvo é o chão.** Deixe isso claro antes da declaração, porque muda inteiramente a decisão tática de quando disparar
- **NPCs.** Adversário construindo tempestade é um relógio visível na mesa, e o grupo que ignora o céu escurecendo merece a consequência
