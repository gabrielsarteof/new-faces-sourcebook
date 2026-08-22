---
id: consolidado.motor-de-jutsus-e-conexao
title: "CONSOLIDADO FINAL — Motor de Jutsus, Velocidade, Conexão e Economia"
version: 1.0
layer: handoff
status: fechado
---

# CONSOLIDADO FINAL — Motor de Jutsus, Velocidade, Conexão e Economia

Registra tudo que esta sessão fechou, na forma final, com as decisões delegadas já tomadas. Substitui integralmente o `HANDOFF-motor-de-jutsus-fase-C.md`, que fica revogado. O que está aqui não se reabre sem decisão explícita de Gabriel. O documento de referência `combat-core.md` que circulou na sessão é cópia obsoleta anterior ao Lote 1 e não serve de fonte para nada.

---

## 1. Herança intocada

Constante de Moldagem 1,40. Assinaturas Elétrica 1,25 e Térmica 1,15. Vetores físicos 1,00. Enton 2,10 nominal. Oleoduto proporcional `dano = E × [E ÷ (E + Absorção)]`. Vetor Energia ignora a Guarda. Interrupção de Contato com constante 65. Motor físico do Lote 1: `Energia = (FOR + VEL + bônus geral da perícia ofensiva) × golpe`, Rápido ×0,5, Firme ×1, Pesado ×1,5; `Guarda = (DEF × 5) + bônus geral da perícia defensiva`, recarga metade de DEF × 5, ponto absorvido vira PS do defensor; `Absorção = RES × 3`, proporcional, sem perícia. Os quatro vetores do Lote de Vetores com escadas, contrapesos e riders.

---

## 2. Motor de dano (Fase C, ratificado)

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M

M = 1 + w × (P − P_ref) ÷ P_ref          piso de M: 0,5
w = coeficiente técnico da ficha ÷ 2
P = atributo regente + Base Total + Inclinação Total + Especialização
    da perícia governante
P_ref por rank (E/D · C · B · A · S) = 42 · 64 · 122 · 148 · 180
```

**Perícia governante:** a que a ficha da técnica declara como origem. Goukakyuu lê Katon, Chidori lê Raiton, Rasengan lê Controle de Chakra. Controle de Chakra permanece portão universal e portão não soma em motor. Uma governante só, nunca duas somadas.

**RC limpa:** o motor lê a RC antes de qualquer sobretaxa de Perfil de Evasão. A nominal publicada passa a ser sempre a limpa; a sobretaxa de evasão vive no custo de RC e no custo mínimo, nunca no dano.

**Pisos por rank contra o par da faixa, executor de referência:** D 8% · C 16% · B 26% · A 40% · S 65%. Teto: a técnica não alcança o piso de dois ranks acima, onde existir; o S não tem teto e é policiado por usos e condição. Teste de teto anti-inflação roda com executor uma faixa acima da típica. Técnica de área valida por valor de campo (Seção 6). Segundo eixo: toda ofensiva de rank D ou superior precisa tornar irracional ser ignorada, custando ao par mais que a resposta defensiva mais barata dele.

**Queimadura mantida em dano entregue ÷ 15.**

---

## 3. Velocidade da obra e conexão (Fase E, ratificada)

### 3.1 A cadeia de quatro fatores

```
Velocidade efetiva = Celeridade do meio × Fator de Seção × Ímpeto × M_vel

Fator de Seção = √(coef_entrega ÷ 0,16)
Ímpeto         = (RC_limpa ÷ 180)^0,25
M_vel          = 1 + 0,25 × (C − C_ref) ÷ C_ref     sem teto, sem piso artificial
C              = PRE + bônus geral da perícia governante
C_ref          = P_ref do rank da técnica (42/64/122/148/180)
```

Quatro donos: o meio dita a banda física, a seção lê a compressão que o coeficiente de entrega já declara, o Ímpeto lê o volume de chakra que propele (dobrar a RC compra 19% de velocidade, oito vezes compra o dobro), e o M_vel lê a mão que dispara com um quarto de peso. A versão de peso 0,5 do M_vel fica arquivada como alternativa nomeada, para retorno por errata se o playtest de mesa mostrar maestria irrelevante na conexão.

### 3.2 Escada de Celeridade dos meios (vigente)

| Meio | Celeridade | Física |
|---|---|---|
| Doton | 70 | sólido denso lançado |
| Shōton | 74 | cristal projetado |
| Suiton | 80 | líquido carregado |
| Yōton | 82 | rocha fundida |
| Hyōton | 86 | sólido leve em agulha |
| Futton | 92 | vapor em expansão |
| Sem natureza | 95 | chakra moldado puro |
| Katon / Enton | 100 | gás incandescente propelido |
| Fūton | 112 | lâmina de ar |
| Bakuton | 120 | frente de detonação |
| Ranton | 140 | feixe guiado |
| Raiton / Kuroi Kaminari | 150 | corrente |

Katon 100 é a âncora neutra (Goukakyuu). Raiton 150 é a razão que a Interrupção de Contato já consome (100/65). Intermediários promovidos a vigentes por decisão delegada, sujeitos a errata se rodada futura de física corrigir algum valor. Celeridade é tendência do meio; a obra declara desvio com motivo. A Interrupção de Contato consome a mesma grandeza: Velocidade da obra = Celeridade × 65 ÷ 100, preservando a fórmula fechada sem errata.

### 3.3 O teste de conexão

Teste oposto, base cinquenta, como qualquer teste do sistema:

```
lado ofensivo  = Velocidade efetiva da obra
lado defensivo = VEL + DES + bônus de esquiva do alvo
```

A PRE do atacante e a perícia governante já vivem dentro do M_vel; nada do atacante soma fora da cadeia. Por cima do resultado incide a escada de Perfil de Evasão (3.5) como camada própria.

### 3.4 Isenções legisladas

**Técnica portada pelo corpo** (Chidori, Raikiri, Rasengan em contato): não lê celeridade nem Ímpeto; resolve como golpe corporal, o corpo do executor contra a esquiva do alvo, com o Perfil de Evasão da ficha por cima. **Área e campo:** resolvem pela forma publicada de área sem teste individual, com efeito parcial em falha onde a ficha declarar. **Relâmpago natural** (Kirin): Inevitável sob condição estrutural, fora da escada porque fora do teste.

### 3.5 Perfil de Evasão recortado

A escada da Seção 6.5 do MCJ perde o eixo de velocidade crua, que migrou inteiro para a grandeza nova, e fica dona exclusiva das propriedades de construção: invisível, errático, teleguiado, inevitável. Fichas que carregavam o degrau Veloz por serem raio deixam de pagar sobretaxa por velocidade; a velocidade delas agora sai da cadeia da 3.1.

### 3.6 Os três canais da maestria na conexão

1. **Conexão contínua:** o C dentro do M_vel, crescendo com a ficha inteira, PRE, regente indireto via P nos outros canais, níveis, caminhos.
2. **Construção comprada:** caminhos e transcendências movem a técnica um degrau na escada de Perfil de Evasão, conforme o MCJ 6.5 já publica.
3. **Compressão comprada:** um caminho nomeado de perícia pode elevar a técnica uma posição de compressão (o Fator de Seção lê o coeficiente do degrau acima), pagando XP como qualquer caminho. Única porta do executor na física, com dono e preço.

A maestria nunca compra física acima da banda do meio por regra geral, e nunca compra o relâmpago natural.

---

## 4. Economia de XP (Fase D, ratificada)

**Técnicas ofensivas:** a posição dentro da faixa de XP do rank é lida pela entrega:

```
posição = (% entregue contra o par − piso do rank) ÷ (piso do rank seguinte − piso do rank)
```

com o teto do S em 100%. A leitura usa a **média entre a entrega do executor de referência e a do mestre da patente** (uma faixa acima), para que w pague no preço. Faixas de XP por rank permanecem as publicadas no MCJ 4.1.

**Técnicas úteis (Régua de Resposta, ratificada):** a posição é lida pela resposta adequada mais barata que o par da faixa possui:

| Degrau | Posição | Resposta adequada mais barata do par |
|---|---|---|
| 1 | 10% | reação que ele já possui, sem gasto além do turno |
| 2 | 25% | PS ou meia ação, ou perda de uma fonte de leitura do campo |
| 3 | 40% | uma ação inteira, ou camada defensiva suprimida enquanto durar |
| 4 | 60% | recurso que o par típico não carrega garantido; sem ele o efeito persiste |
| 5 | 85% | não existe resposta na faixa; a cena se reorganiza ao redor do efeito |

Modificadores de dependência e de campo da 4.1.3 continuam incidindo por cima. Técnica mista precifica pela via ofensiva com o rider dentro; efeito não derivado do dano soma pelo extra de comportamento da 4.1.2. Nenhuma técnica passa pelas duas réguas inteiras.

**Área (célula de quatro, ratificada):** a validação e a precificação de área resolvem a geometria declarada contra um esquadrão de quatro em espaçamento de combate, contando quantos a geometria apanha; valor de campo = entrega × alvos apanhados. Na mesa contam-se os alvos reais.

**Consumo de RC: sem mudança, por decisão declarada.** O ×5 corrigiu déficit de conversão, não inflacionou a moeda; usos por combate seguem validados contra o cânone e contra o playtest. Custo mínimo, Índice de Desperdício e faixas de RC permanecem.

---

## 5. Decisões delegadas, fechadas nesta sessão

1. **Sobretaxa Veloz = 15%**, o MCJ vence a escada da família do Chidori por hierarquia. Nominais limpas: Chidori 750 (raiz, intocado), Raikiri 1.500, Eisō, Senbon, Nagashi e Shiden 783, Kieru 913. A coluna de proporção da família recalcula sobre a raiz limpa: Raikiri = 2,00.
2. **PS drenado pela Guarda conta como Esforço** contra o Limiar de recuperação. O Núcleo já cobra Esforço de Bloqueio e Esquiva; defesa é trabalho do corpo. Posição registrada no Lote de Vetores, agora decidida.
3. **Localização de acerto: narrativa do mestre**, sem grandeza nova. Perfuração e Secção falam em membro atingido pela descrição da cena.
4. **Grau V de Penetração ganha exemplo: a agulha de Fūton comprimida**, chakra de vento em haste sem corpo, acima do senbon de aço (IV) e abaixo do ponto de energia pura (VI).
5. **Penalidades por grau dos riders físicos espelham a escada da Queimadura:** 15% / 30% / 50% / 70% sobre o par de atributos de cada rider (Perfuração em FOR e VEL, Secção em DES e DEF), com os mesmos comportamentos de resíduo, persistência e permanência por grau. Uma escada, três riders, simetria declarada.
6. **Cadência documentada** (decidida em sessão anterior e nunca escrita): ações extras pela razão de VEL contra o oponente mais rápido engajado; razão ≥ 1,5 concede uma ação extra, ≥ 2,5 concede duas, teto de duas; cada ação extra paga o próprio Esforço. Consistente com o exemplo publicado do Núcleo (VEL 45 contra 22, razão 2,05, uma ação extra).
7. **Escada de meios promovida a vigente** (Seção 3.2), com cláusula de errata futura.
8. **Régua de Resposta e célula de quatro ratificadas** (Seção 4).

---

## 6. Fora de escopo, com dono declarado

**Resistência elemental do defensor:** item do Sistema Elemental, briefing próprio já produzido em sessão anterior. **Veneno:** vetor próprio, lote futuro. Nenhum dos dois bloqueia a propagação.

---

## 7. Instrumentos de validação

**Régua de pares** (Equilibrado, de reference-tables v1.1): Treinado 600 PV · Abs 30 · esquiva 52; Veterano 960 · 48 · 80; Elite 1.440 · 72 · 146; Especial 1.920 · 96 · 180; Ápice 3.000 · 150 · 230. **Executores de referência:** perícia governante em LV 2/2/3/4/5/6 de E a S, um caminho, grau Definida; P e C = 42/64/122/148/180. **Mapeamento rank ↔ faixa:** E,D → Treinado; C → Veterano; B → Elite; A → Especial; S → Ápice; Kinjutsu → Ápice/Transcendente.

**Playtest de validação (espelho, piso de velocidade):** conexão par contra par estável em 55–67% em todas as faixas; decisão em 11–18 turnos, Ápice em 22 pelo S de área mais regime físico; coerente com o alvo do básico de 12–17, com Cadência, crítico, riders e Canal 2 acelerando na mesa real.

---

## 8. Descartes com razão registrada

k = 3 sobre o LV² (preservava o defeito da base). Forma aditiva 2×P (jutsu de tempero, split 20/80). Forma aditiva invertida 3×RC + P (executor chapado). Bandas com topo inflado (déficits não uniformes). Proficiência de Controle de Chakra, da elemental, ou das duas somadas no motor (portão sem motor, motor sem forma, dupla contagem). Matar o coef_técnica (apagava identidade; re-ancorado como w). Perícia somada crua no teste de conexão (esmagava a base, repetia o vício da Fase C). Chassi de faixas da Interrupção portado para a Esquiva (a Esquiva é binária na alma; faixa media grandeza que não existe ali). Esquiva como fração contínua de dano (terceira mitigação reciclada). Degraus universais de celeridade em três buckets (empobrecia; substituído por banda de meio × seção contínua × Ímpeto contínuo). Teto no M_vel (assimetria com a esquiva sem teto).

---

## 9. Princípios registrados nesta sessão

1. Auditar a composição, não só o total: o split técnica/executor é achado de primeira ordem.
2. Camadas não vazam: sobretaxa de evasão nunca entra no motor de dano.
3. Base grande da obra, maestria escalando a base, nas duas metades do sistema: dano e velocidade.
4. Constante nova só com origem rastreável e prova contra o corpus real.
5. A mesma grandeza pode alimentar contas diferentes que respondem perguntas diferentes; vício é pagá-la duas vezes na mesma conta.
6. O documento de referência da sessão pode estar obsoleto; verificar contra o histórico do projeto antes de calcular sobre ele.
7. Emprestar um chassi exige levar o conteúdo físico dele junto, não só a forma.
