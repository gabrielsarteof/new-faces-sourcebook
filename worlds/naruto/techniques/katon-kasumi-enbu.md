---
id: naruto.technique.katon-kasumi-enbu
title: "Kasumi Enbu no Jutsu (霞炎舞の術)"
version: 1.2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: KasumiEnbu_v1.md
---

# Dança da Névoa Flamejante — Katon: Kasumi Enbu no Jutsu (火遁・霞炎舞の術)
Ninjutsu · Katon · Rank C

---

## Sobre a Técnica

O Kasumi Enbu no Jutsu é a expulsão de um gás inflamável impregnado de chakra, que paira sobre a área ao redor do alvo sem entrar em combustão sozinho. O gás permanece inerte diante de tudo que não seja fogo, e reage apenas ao contato com centelha, chama ou técnica de fogo, deflagrando em combustão instantânea que atinge tudo dentro do raio coberto no mesmo instante.

O praticante escolhe o momento e o gatilho da detonação, o que converte a técnica numa arma de dois tempos: a cobertura primeiro, a ignição depois, por escolha própria ou pela chegada de qualquer fonte de fogo que alcance a área. Enquanto o gás não detona, ele funciona como amplificador silencioso, tornando qualquer chama que atravesse a cobertura mais perigosa do que seria em terreno limpo.

A técnica rende tanto como armadilha preparada quanto como resposta imediata sobre um alvo já engajado, e o volume do gás e o raio de cobertura acompanham a quantidade de chakra investida.

---

## Requisitos de Acesso

- **Katon LV3:** portão de rank C, que resolve em 44 pela soma da Base 32 com INT 12
- **Moldagem Alta:** 58 pela soma da Base Total com SAB, degrau elevado um passo acima do piso Plena que o coeficiente técnico 1,0 fixaria, pela propriedade de sustentação prolongada, com o gás mantido estável e inerte por vários turnos antes da detonação

---

## Custo de XP

**Custo de XP:** 2.580

---

## Efeitos Globais

O gás é visível como uma névoa translúcida e desloca-se lentamente com o vento na ausência de barreira. Testemunhas competentes reconhecem o cheiro característico do combustível de chakra antes de qualquer chama aproximar, o que concede aviso a quem já enfrentou a técnica.

A detonação ilumina toda a área coberta num único instante e consome o gás por completo, sem deixar resíduo combustível para uma segunda ignição.

---

## Mecânica de Ativação

- **RC nominal:** 262
- **Vetor:** Energia térmica · Celeridade 100
- **Custo mínimo:** 87
- **Selos de referência:** 2
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** dois selos, seguidos da expulsão do gás sobre a área declarada. A detonação, quando decidida pelo próprio praticante em vez de por contato externo, custa uma ação menor
- **Banda Mínima:** Engajado
- **Banda Máxima:** Média
- **Restrições:** o gás permanece ativo por 3 turnos antes de dissipar sem efeito se não for aceso. Uma única detonação por deployment, consumindo o gás por completo

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M
dano bruto = 5 × 262 × 0,10 × 1,61 × M
dano bruto = 210,91 × M

M = 1 + 0,5 × (P − 64) ÷ 64          piso de M: 0,5
```

O coeficiente de entrega 0,10 corresponde à categoria de área de terreno ou campo, porque a técnica cobre uma extensão declarada em vez de mirar um ponto ou dividir-se em projéteis. O coeficiente técnico 1,0 corresponde à dependência média, com o degrau de exigência elevado de Plena para Alta pela sustentação prolongada que manter o gás estável e inerte por vários turnos exige.

O `mult_Tipo` de 1,61 é a Constante de Moldagem de 1,40 multiplicada pela Assinatura do vetor declarado, que para Energia térmica vale 1,15. A Assinatura se lê do vetor que a obra entrega e nunca do elemento que a produz. O coeficiente técnico de 1,0 resolve o `w` em 0,5, que é a metade dele.

A perícia governante é o Katon, e o `P` é o atributo regente dela somado à Base Total, à Inclinação Total e à Especialização. O `P_ref` de 64 é o do rank C, e nele o `M` resolve em 1,000 por construção.

---

## Tabela de Descarga

Par de referência Veterano, PV 960, pela tabela de pares por rank da Seção 5.2 do Manual de Jutsus.

A tabela é indexada ao `P` do Katon, porque é o `P` que o motor lê. Nenhum perfil nomeado de personagem entra aqui.

| P do Katon | M | Dano | % PV do par |
|---|---|---|---|
| 42 | 0,828 | 175 | 18,2% |
| 64, referência do rank | 1,000 | 211 | 22,0% |
| 122 | 1,453 | 306 | 31,9% |

O Kasumi Enbu não alcança o tier Forte, consistente com o rank C na escala Moderado do Manual de Criação de Poderes. O valor publicado é o dano da própria detonação, aplicado a todos dentro da área coberta no instante da ignição.

---

## Interação com Defesas

Nenhuma perfuração declarada além do padrão. A técnica não distingue aliado de inimigo dentro da área coberta, pela regra geral de área e campo do Núcleo de Combate.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição, a todos dentro da área no instante da detonação.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Leve |
| Grau máximo possível | Grave |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

---

## Combustível Instável

Enquanto o gás estiver ativo e ainda não detonado, ele funciona como amplificador de qualquer Katon executado sobre a área coberta, nas duas formas seguintes.

**Ignição por terceiro.** Qualquer técnica de Katon, do próprio praticante ou de outra fonte, que atinja a área coberta detona o Kasumi Enbu automaticamente, ainda que a intenção declarada não fosse a detonação. O Endan é a resposta canônica mais barata para esse gatilho, publicada no próprio catálogo, e qualquer outra fonte de chama serve igualmente.

**Amplificação passiva.** Enquanto o gás não detonar, ele instala sobre qualquer alvo dentro da área uma condição pré-existente de severidade Leve contra o teste de resistência a Queimadura de quem estiver lá dentro, pela regra de Modificadores por Estado Pré-existente do Sistema de Efeitos de Status, multiplicando o alvo calculado do teste por 0,9. A leitura reaproveita o mesmo mecanismo que o efeito Campo Preparado do caminho Leito já emprega contra a mesma régua, numa severidade mais branda porque esta entrada não exige caminho de perícia para operar, ao contrário daquele efeito.

As duas camadas não somam: um Katon que atinge a área e detona o gás resolve pelo dano da detonação somado ao próprio, sem multiplicar o mult_Tipo de nenhum dos dois, pela proibição de empilhamento da Seção 8.3 do Manual de Criação de Jutsus.

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV3, Moldagem Alta | acesso à técnica pela camada Livre |
| Caminho Leito, efeito Campo Preparado | soma-se ao efeito de amplificação desta ficha sem redefini-lo, porque as duas fontes têm dono declarado e severidade própria |

---

## Sinergias

- **Endan:** o Endan é a resposta canônica mais barata para detonar o gás, publicada no próprio catálogo
- **Qualquer Katon executado dentro da área:** aciona a detonação automaticamente e recebe a amplificação passiva se disparado antes dela
- **Caminho Pavio, efeito Palavra de Fogo:** permite detonar a carga como reação ao movimento do inimigo, sincronizando a ignição do gás com o reposicionamento do alvo

---

## Notas para o Mestre

- **É uma armadilha de dois tempos.** Dê ao jogador a decisão explícita entre detonar de imediato ou esperar o alvo se posicionar dentro da cobertura, e ao adversário competente a chance de perceber o gás e evitar a área
- **A amplificação recompensa combinação.** Um praticante que combina o Kasumi Enbu com um segundo Katon executado dentro da própria área extrai mais valor da técnica do que usando-a isolada, e essa é a leitura tática central da entrada
- **NPCs.** Um esquadrão de Katon coordenado usa o Kasumi Enbu para preparar o terreno antes de qualquer disparo ofensivo, forçando o alvo a escolher entre recuar da névoa ou arriscar a detonação
