---
id: naruto.technique.hoo-no-wana
title: "Hōō no Wana (鳳凰の罠)"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: HooNoWana_v1.md
---

# Laço da Fênix — Katon: Hōō no Wana (火遁・鳳凰の罠)
Ninjutsu · Katon · Rank A

---

## Sobre a Técnica

O Hōō no Wana é a execução de marcações latentes de fogo num único gesto, distribuídas entre alvos ou pontos do terreno declarados no momento da expulsão. Cada marcação guarda gatilho próprio e prazo próprio, e o praticante escolhe qual detona e em que momento, sem obrigação de acionar todas ao mesmo tempo.

A técnica converte o campo inteiro em armadilha montada antes do primeiro golpe. A ameaça opera mesmo sem detonação, porque o inimigo que percebe as marcas passa a escolher rota em vez de escolher ataque, negociando espaço com uma ameaça que ainda não disparou.

---

## Requisitos de Acesso

- **Katon LV5:** portão de rank A, que resolve em 71 pela soma da Base 45 com INT 26
- **Moldagem Refinada:** 71 pela soma da Base Total com SAB, degrau lido do coeficiente técnico 2,0, sem elevação
- **Caminho Pavio:** inclinação Fagulha da Perícia de Katon, requisito consumível. O efeito Carga Dormente é o que produz a marcação latente, e a contagem de marcas simultâneas que o praticante sustenta é a que aquele efeito já publica, ⌊teste de Fagulha ÷ 40⌋, resultando em 2 no LV4, 3 no LV5 e 4 no LV6 daquele caminho. Esta ficha não declara uma segunda contagem: as "três marcações" do próprio catálogo são a leitura natural de um praticante no piso de acesso desta técnica, Katon LV5

---

## Custo de XP

**Custo de XP:** 12.800

---

## Efeitos Globais

As marcações são visíveis a quem examina o ponto ou o alvo de perto, como um leve calor residual sem chama aparente. A detonação de qualquer uma delas ilumina e queima no instante do gatilho, sem aviso adicional além do que a marca já oferecia a quem soube procurá-la.

---

## Mecânica de Ativação

- **RC nominal:** 1.020
- **Custo mínimo:** 340
- **Selos de referência:** 2
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão para cada marcação, resolvido no instante da detonação e não no instante da colocação, porque é a detonação que constitui a entrega ofensiva
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus, referente à colocação das marcas. A detonação de cada marca já colocada é ação livre, pelo efeito Palavra de Fogo do caminho Pavio, ou ação menor quando disparada por escolha deliberada fora de reação
- **Ação:** dois selos, seguidos da distribuição simultânea das marcações
- **Restrições:** validade das marcas conforme a contagem de turnos do efeito Carga Dormente do caminho Pavio, sem redeclaração nesta ficha

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator de Moldagem
dano = 1.020 × 0,13 × 1,60 + LV_CC² × 2,5 × 2,0
dano = 212,16 + LV_CC² × 5
```

O coeficiente de entrega 0,13 corresponde à categoria de múltiplos projéteis simultâneos, lendo as marcações distribuídas como a mesma família de entrega dividida que rege o Kaen Ami. O coeficiente técnico 2,0 corresponde à dependência alta, moldagem como mecanismo central, e o catálogo confirma o piso Refinada sem elevação, na mesma leitura do Kaen Ami e do Jigoku no Hane.

O valor publicado na Tabela de Descarga é o total distribuído entre as marcações colocadas na mesma execução. Quando todas detonam sobre o mesmo ponto ou no mesmo instante, o alvo recebe o total. Quando detonadas em momentos ou pontos separados, cada uma entrega a fração proporcional ao número de marcas ainda ativas no instante da colocação, e a soma das frações nunca excede o total publicado.

---

## Tabela de Descarga

Par de referência Especial, PV 1.920, pela leitura de par por rank fechada na ficha do Endan.

| LV_CC | Fator de Moldagem | Dano total | % PV do par |
|---|---|---|---|
| 5, entrada | 125 | 337 | 17,6% |
| 6 | 180 | 392 | 20,4% |
| 6 com 1 caminho | 245 | 457 | 23,8% |
| 6 com 2 caminhos | 320 | 532 | 27,7% |

Com três marcas ativas, cada detonação isolada entrega um terço do total publicado. O Hōō no Wana alcança o piso do tier Forte com dois caminhos adicionais em Controle de Chakra na convergência total, na mesma faixa do Kaen Ami e do Jigoku no Hane pelo compartilhamento do coeficiente técnico 2,0.

---

## Rider — Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição, a cada marcação detonada.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Moderado |
| Grau máximo possível | Grave |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano da detonação ÷ PV máximo da vítima) |

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV5, Moldagem Refinada, Caminho Pavio | acesso à técnica pela camada Livre, com 3 marcas simultâneas |
| Katon LV4, Caminho Pavio | 2 marcas simultâneas, pela régua do próprio caminho |
| Katon LV6, Caminho Pavio | 4 marcas simultâneas |
| Controle de Chakra LV6 | Fator de Moldagem 180, e 245 ou 320 com caminhos adicionais |
| Caminho Pavio, efeito Palavra de Fogo LV5 | gatilho redefinível como ação livre a qualquer momento, com detonação encadeada de todas as marcas ativas no mesmo instante |

---

## Sinergias

- **Caminho Pavio, efeito Carga Dormente:** requisito da técnica, governa a contagem de marcas e a validade delas em turnos
- **Caminho Pavio, efeito Palavra de Fogo:** permite detonar como reação ao movimento do inimigo, sincronizando a explosão com o reposicionamento do alvo
- **Kasumi Enbu no Jutsu:** uma marca detonada dentro da área do gás amplifica a combustão pela regra de Combustível Instável daquela ficha

---

## Notas para o Mestre

- **A ameaça vale antes da detonação.** Trate o campo minado como pressão constante sobre a movimentação do inimigo, e não apenas como dano futuro. O alvo que percebe as marcas já perdeu liberdade de movimento
- **A contagem vem do caminho, não da ficha.** Ao liberar a técnica, confira o nível de Katon do praticante contra a régua de Carga Dormente para saber quantas marcas ele sustenta ao mesmo tempo
- **NPCs.** Um armador Uchiha semeia o campo antes do combate abrir, e revela as marcas apenas quando o inimigo já está posicionado sobre elas
