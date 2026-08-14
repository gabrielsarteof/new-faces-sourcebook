---
id: naruto.technique.jigoku-no-hane
title: "Jigoku no Hane (地獄の羽)"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: JigokuNoHane_v1.md
---

# Penas do Inferno — Katon: Jigoku no Hane (火遁・地獄の羽)
Ninjutsu · Katon · Rank A

---

## Sobre a Técnica

O Jigoku no Hane é uma salva de esferas de fogo com shuriken embalados no interior de cada uma delas. O alvo lê a salva como um ataque de chamas comum e calibra a defesa para fogo, exatamente o padrão que o Hōsenka Tsumabeni já ensinou a esperar de qualquer técnica desta família visual.

O engano está na abertura. Quando as esferas se rompem, o aço emerge em ângulos que não pertencem à trajetória original das chamas, e cada projétil resolve a própria abertura de forma independente, de modo que nenhuma esquiva única cobre a salva inteira. O alvo que se posiciona para absorver ou desviar do calor recebe o aço por uma rota que a leitura de fogo não previa.

A técnica é o segundo estágio de um engano de dois tempos. O primeiro estágio é conceitual e não mecânico: um alvo que já enfrentou o Hōsenka Tsumabeni e aprendeu a temer lâminas visivelmente em chamas encontra no Jigoku no Hane o oposto, lâminas escondidas dentro de uma chama que parece comum. Nenhum requisito de ficha liga as duas entradas, e a dependência vive inteiramente na leitura tática do alvo.

---

## Requisitos de Acesso

- **Katon LV5:** portão de rank A, que resolve em 71 pela soma da Base 45 com INT 26
- **Moldagem Refinada:** 71 pela soma da Base Total com SAB, degrau lido do coeficiente técnico 2,0, sem elevação
- **Caminho Agulha:** inclinação Labareda da Perícia de Katon, requisito consumível. O efeito Segunda Linha governa a abertura independente de cada projétil embutido
- **Shuriken em quantidade:** insumo declarado, consumido a cada execução

---

## Custo de XP

**Custo de XP:** 11.000

---

## Efeitos Globais

A salva ilumina o campo como qualquer disparo de fogo comum até o instante da abertura, quando o brilho metálico dos projéteis se torna visível por uma fração de segundo antes do impacto.

---

## Mecânica de Ativação

- **RC nominal:** 900
- **Custo mínimo:** 300
- **Selos de referência:** 2
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** dois selos, seguidos do disparo simultâneo da salva completa
- **Restrições:** distância curta a média, alvo único ou grupo próximo dentro da dispersão da salva, exige provisão de shuriken suficiente para a quantidade declarada
- **Aftermath:** leve, pela Seção 1.2 do Manual de Criação de Jutsus. PS igual a 20% do custo pago pela execução, cobrado após a resolução

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator de Moldagem
dano = 900 × 0,13 × 1,60 + LV_CC² × 2,5 × 2,0
dano = 187,2 + LV_CC² × 5
```

O coeficiente de entrega 0,13 corresponde à categoria de múltiplos projéteis simultâneos, mesma família do Hōsenka e do Hōsenka Tsumabeni. O coeficiente técnico 2,0 corresponde à dependência alta, moldagem como mecanismo central, e o catálogo confirma o piso Refinada sem elevação: calibrar a abertura independente de cada projétil embutido dentro de uma esfera de fogo já exige o refinamento que a Régua de Exigência associa ao coeficiente 2,0, sem propriedade adicional que eleve o degrau mais uma vez.

A quantidade de projéteis declarada nesta ficha é **6**, o número que o efeito Segunda Linha do caminho Agulha exige para governar a esquiva separada de cada abertura.

---

## Tabela de Descarga

Par de referência Especial, PV 1.920, pela leitura de par por rank fechada na ficha do Endan.

| LV_CC | Fator de Moldagem | Dano | % PV do par |
|---|---|---|---|
| 5, entrada | 125 | 312 | 16,3% |
| 6 | 180 | 367 | 19,1% |
| 6 com 1 caminho | 245 | 432 | 22,5% |
| 6 com 2 caminhos | 320 | 507 | 26,4% |

O Jigoku no Hane alcança o piso do tier Forte com dois caminhos adicionais em Controle de Chakra, e se aproxima dele já no LV6 pleno. O coeficiente técnico 2,0, o mais alto entre as técnicas de rank A e B desta leva, reflete o refinamento que a abertura independente de seis projéteis simultâneos exige, e essa exigência se traduz em dano competitivo mesmo com um coeficiente de entrega que divide o efeito entre vários alvos.

---

## Interação com Defesas

A esquiva contra os projéteis embutidos é regida pelo efeito Segunda Linha do caminho Agulha, que opõe a esquiva do alvo ao teste de Labareda com aquela especialização, valendo 120 no LV4, 147 no LV5 e 174 no LV6. A técnica não republica esse valor além de citá-lo, porque a competência pertence ao caminho que a gateia.

---

## Rider — Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição, sobre o alvo atingido pela chama antes da abertura.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Moderado |
| Grau máximo possível | Grave |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

Os projéteis embutidos aplicam dano físico direto pelo golpe que o efeito Segunda Linha resolve, à parte da Queimadura desta entrada e sem soma entre as duas camadas.

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV5, Moldagem Refinada, Caminho Agulha | acesso à técnica pela camada Livre |
| Controle de Chakra LV6 | Fator de Moldagem 180, e 245 ou 320 com caminhos adicionais |
| Caminho Agulha, LV5 | elevação de alvo para área, ameaçando também quem estiver adjacente ao alvo original |

---

## Sinergias

- **Hōsenka Tsumabeni:** fundamento conceitual do próprio engano, sem gerar requisito mecânico
- **Caminho Agulha:** governa a esquiva separada de cada um dos seis projéteis, requisito desta entrada
- **Alvo que já viu o Hōsenka Tsumabeni:** o valor tático máximo da técnica se realiza contra quem aprendeu a temer lâminas visíveis e relaxou contra chamas aparentemente comuns

---

## Notas para o Mestre

- **A ordem de exposição importa.** A técnica rende mais contra um alvo que já enfrentou o Hōsenka Tsumabeni na mesma campanha ou no mesmo combate, e menos contra quem nunca viu nenhuma das duas
- **Narração pela abertura.** Descreva a salva como fogo comum até o momento exato da ruptura, reservando o brilho do aço para a fração de segundo em que o engano se revela
- **NPCs.** Reserve o Jigoku no Hane para NPCs recorrentes que já estabeleceram o Hōsenka Tsumabeni como assinatura visual antes, maximizando o efeito de surpresa que a própria ficha descreve
