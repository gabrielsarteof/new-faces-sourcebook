---
id: core.system-core
title: "Núcleo do Sistema"
version: 3
layer: core
type: core-layer
status: final
source-file: Nucleo_do_Sistema_v3.md
---

# Núcleo do Sistema

**Camada Fundamental — Fechada para Modificação**

O Núcleo é o motor invariável do sistema: resolução de testes, atributos, pools,
economia de XP e recuperação de recursos. Tudo o mais (poderes, elementos, status,
naturezas, vantagens) é conteúdo que **pluga** neste núcleo sem alterá-lo.

> **Princípio (Open/Closed):** o Núcleo é fechado. Adicionar conteúdo nunca exige
> mudar uma regra daqui. Se uma extensão precisa reescrever o Núcleo, o problema
> está na extensão, não no Núcleo.

---

## 1. Atributos

Dez atributos. Nove compráveis com XP; **VON** é concedida só pelo narrador.

`FOR · VEL · DES · DEF · INT · SAB · RES · PRE · CAR · VON`

- Todo atributo começa em **1** (basal humano), sem custo.
- **VON** não custa XP. Amplifica todos os pools (ver Pools), reduz penalidades de
  ferimento e fadiga, e entra nas resistências de identidade e persistência.

Custo por nível:

```
custo(n) = round((50 + 1.1 × (n² − 1)) / 5) × 5
```

Tabela completa de custos: ver *Referência de Economia de XP*.

---

## 2. Pools

RES é o atributo comum às três barras — o eixo da resiliência do corpo.

```
PV = (RES + FOR) × mult_PV × (1 + VON / 100)
PS = (RES + VEL) × mult_PS × (1 + VON / 100)
PM = (ver Modelos de PM, abaixo)
```

- Os multiplicadores são **por pool e por Natureza** — cada Natureza define o seu
  `mult_PV` e `mult_PS` (e `mult_PM` no modelo progressivo). Não existe multiplicador
  único do sistema.
- **VON** soma `VON%` a todos os pools (Vontade 10 = todos os pools recebem +10%).
- **Modificadores de clã/linhagem** somam ao multiplicador da Natureza, não ao pool
  final.
- **Extras:** PV/PM/PS Extra somam 1 ponto multiplicado pelo `mult` correspondente,
  por nível; custo igual ao de atributo.

**Exemplo real — Saki** (Natureza com multiplicador de PV 30 e de PS 12; clã soma 5
ao de PS; Vontade 10):

```
PV = (RES 33 + FOR 11) × 30 × 1,10 = 1452
PS = (RES 33 + VEL 32) × (12 + 5) × 1,10 ≈ 1234
```

### Modelos de PM (slot plugável)

O Núcleo não fixa como o PM nasce — só que existe um pool de PM, gasto e recuperado
pelas regras de Recuperação. A origem do pool é um módulo escolhido por cenário:

- **Progressivo** — `PM = (INT + RES) × mult_PM × (1 + VON / 100)`. Comprável e
  treinável como qualquer pool.
- **Inato** — o PM é definido uma vez por uma faixa de energia adquirida com XP
  inicial, sorteado dentro da faixa e **fixo para sempre**. Não cresce por treino;
  só pode ser **refinado por redução de custo** (perícia de controle de energia,
  até 50% de desconto nas habilidades). As faixas concretas vivem no módulo de
  conteúdo do cenário, não no Núcleo genérico.

Os dois modelos plugam no mesmo Núcleo. O dano bate em PV, igual nos dois; o que muda
é só a economia de PM.

---

## 3. Economia de XP

```
XP de Ficha = 3000 × Protagonismo × (I(idade) × Fator_História)

I(idade)       = 1 + 0,111 × ln(1 + 5 × max(0, idade − 18)²)
Fator_História = 1 + (pontos_efetivos ÷ 10)
pontos_efetivos = min(pontos_brutos, H_Max)
H_Max          = max(0, (idade − 6) × 10)   para idade < 20
                 sem teto                    a partir de 20
```

O XP de Ficha é **distribuído pelo jogador entre atributos e perícias** — cada
personagem decide quanto vai para cada lado, e só o que foi para atributos aparece
nos pools.

> **Atenção de design:** idade e história inflam o XP total sem refletir poder de
> combate. Dois personagens com os mesmos atributos têm o mesmo poder em combate,
> mesmo que um (mais velho, com muita história) tenha XP total muito maior. Para
> balanceamento, o que importa é o **investimento em atributos**, não o XP total.

Custos de perícia e multiplicadores por categoria: ver *Referência de Economia de XP*.

---

## 4. Resolução de Testes

Sistema d100. O resultado é comparado a um **limiar**; rolar **≤ limiar** é sucesso.

```
Teste oposto:  limiar = (ativo ÷ oposto) × 50
Teste simples: limiar = (teste ÷ dificuldade fixada) × 50
```

**Potência de técnica.** Quando o efeito vem de uma técnica, o limiar de resistência
do alvo é comprimido pela mana investida:

```
limiar = (atributos defensivos) × (1 − PM gasto ÷ PM máx do atacante)
```

Específicos:

| Item | Regra |
|---|---|
| Iniciativa | `VEL + SAB + 1d6` (comparativo direto; maior age antes) |
| Múltiplos ataques | `VEL ÷ 15` (piso, mínimo 1); cada extra custa PS |
| Percepção passiva | `piso(teste simples ÷ 2)` |

Escala de resultado (a margem define o grau):

| Faixa | Efeito |
|---|---|
| Sucesso Pleno | efeito completo + vantagem extra |
| Sucesso Justo | efeito completo |
| Falha Justa | falha sem complicação |
| Falha Grave | falha com complicação ativa |

Pares de atributo por tipo de teste: ver *Cálculos Rápidos — Testes*.

---

## 5. Recuperação de Recursos

Princípio: fora de combate só há a recuperação descrita aqui; não existe regen
passiva por descanso comum além desta. Dentro de combate, recurso só volta por
habilidade (ativa ou passiva). Isso faz o dano importar e dá valor real a quem
investe em cura.

### 5.1 Papéis temporais das três barras

| Barra | Papel | Velocidade |
|---|---|---|
| **PS** | recurso por luta | rápido — enche num respiro curto |
| **PM** | recurso por dia | médio — volta com horas de descanso |
| **PV** | recurso por arco | lento — nunca enche sozinho |

### 5.2 PS — Vigor

Fora da fórmula. Um respiro curto (sub-hora, sem ameaça) devolve o PS **cheio**.
Em combate, só volta por habilidade.

### 5.3 PV e PM — fórmula de recuperação

Recuperam como **percentual do que falta**, por tempo de descanso. Decaimento
exponencial: muito nas primeiras horas, desacelerando sozinho, sem nunca encher.

```
recuperado(h) = falta × (1 − (1 − r_efetivo)^h)

  falta = pool_máximo − pool_atual
  h     = horas de descanso
```

Taxa-base por barra (constantes do sistema, ajustáveis sem reescrever nada):

```
r_PV = 0,165   (recuperação lenta — recurso por arco)
r_PM = 0,250   (recuperação média — recurso por dia)
```

Os moduladores agem sobre a taxa, nunca sobre tabela:

```
r_efetivo = r_base × mod_abrigo × mod_cura

  mod_abrigo:  ruim 0,5  ·  neutro 1,0  ·  bom 1,5
  mod_cura:    bônus conforme a perícia do curandeiro (conteúdo, fora do Núcleo)
```

Pontos de referência (abrigo neutro), só para leitura — a fórmula é a fonte:

| Horas | PV (do que falta) | PM (do que falta) |
|---:|---:|---:|
| 1 | 17% | 25% |
| 2 | 31% | 44% |
| 4 | 51% | 68% |
| 8 | 76% | 90% |

### 5.4 Piso de fechamento

Elimina a cauda infinita do decaimento (o ferimento "quase curado" que nunca some):

```
se falta ≤ 0,15 × pool_máximo  →  um descanso longo completo zera o que falta
```

Vale para PV e PM.

### 5.5 Lesões persistem além do descanso

A recuperação devolve o **número** de PV/PM. Não remove lesões do catálogo de status
(fratura, necrose, e afins) — essas exigem tratamento próprio e ignoram a fórmula.
Dormir devolve o personagem ao combate; o ferimento estrutural pesa até ser cuidado.

---

## 6. Ritmo de Combate

O número-âncora que calibra a economia de combate (dano e custo de PM das técnicas).
Derivado por simulação de fichas reais, não declarado: a duração de um combate é
consequência da razão entre dano e pool.

| Tipo de troca | Turnos para derrubar um par |
|---|---|
| Ataque básico (FOR + VEL + arma + perícia) | ~12–17 — desgaste, não decide a luta |
| **Golpe especial / técnica** | **~5–6 — é o que resolve, e o que o manual de poderes calibra** |

O dano decisivo mora nas técnicas e caminhos (multiplicadores e bônus de perícia),
não no atributo cru. O ataque básico arrasta de propósito.

O alvo de 5–6 turnos se mantém em qualquer faixa de poder porque o **dano do especial
escala junto com o pool do alvo** — não depende de um multiplicador fixo de pool.
A variância entre Naturezas é o tempero: corpos mais resistentes arrastam mais turnos
por identidade; corpos frágeis caem mais rápido.

> Este é o alvo que a camada de Dano & Mitigação usa para dimensionar quanto um golpe
> especial precisa causar, contra as faixas de pool das tabelas de referência.

---

*Núcleo — fechado. Próxima camada: Tabelas de Referência (a régua de pools contra a
qual todo o dano será calibrado).*
