---
id: naruto.technique.chidori-nagashi
title: "Chidori Nagashi — Fluxo dos Mil Pássaros (千鳥流し)"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Chidori_Nagashi.md
---

# Chidori Nagashi — Fluxo dos Mil Pássaros (千鳥流し)
Ninjutsu · Raiton · B-rank

---

## Sobre a Técnica

O Chidori Nagashi é uma técnica de Ninjutsu de natureza Raiton classificada como B-rank, desenvolvida por Sasuke Uchiha como derivação direta do Chidori. Em vez de comprimir o chakra de Raio em um ponto único para uma estocada direcional, o usuário libera o campo eletromagnético como irradiação difusa ao redor de todo o corpo, atingindo simultaneamente todos os alvos dentro do raio de alcance. A técnica ocupa uma posição distinta em relação ao Chidori original: o que perde em potência concentrada, recupera em cobertura e no efeito paralisante aplicado em múltiplos alvos ao mesmo tempo.

A execução dispensa estocada e deslocamento. O usuário forma os selos de irradiação e libera o campo de Raiton pelo próprio corpo, com as descargas se propagando radialmente a partir do centro. A energia elétrica percorre qualquer condutor em contato direto com o usuário no momento da ativação, incluindo armas empunhadas e superfícies de água ou metal, estendendo o alcance efetivo da técnica além do raio corporal imediato quando esses condutores estão presentes.

O Chidori Nagashi é consideravelmente mais silencioso que o Chidori base. O ruído característico de mil pássaros, gerado pela compressão extrema do campo em um único ponto, não ocorre na difusão: o som produzido é um zumbido eletromagnético audível apenas na proximidade imediata do usuário. Essa característica reduz o aviso antecipado para os alvos próximos, diferenciando o perfil tático da técnica de sua técnica de origem.

---

## Requisitos de Acesso

- **Raiton LV4** — portão de rank B; acesso independente do Chidori base
- **INT mínimo 15** — âncora energética da família Raiton

---

## Custo de XP

| Afim natal Raiton | Sem afinidade definida | Natureza não-afim |
|---|---|---|
| 2.500 XP | 3.000 XP | 3.900 XP |

---

## Efeitos Globais

O campo eletromagnético irradiado pelo Chidori Nagashi é visível como luminosidade azulada ao redor do corpo do usuário e de qualquer condutor em contato. Ao contrário do Chidori base, a técnica não anuncia sua intenção com antecedência: o aviso para os alvos presentes é o próprio brilho no momento da ativação, não um som prévio que permita reação a distância.

Todos os alvos dentro do raio de alcance enfrentam a descarga simultaneamente, sem que o usuário precise se deslocar ou escolher uma direção de entrega. Isso inclui alvos posicionados nas costas ou laterais do usuário, tornando a técnica eficaz como resposta a cercos que o Chidori base não consegue cobrir em um único uso.

---

## Mecânica de Ativação

- **Custo de RC:** 600 RC fixos por ativação. Sem custo variável ou carga adicional.
- **Janela de Canalização:** determinada pelo custo de 600 RC em relação ao Limite de Saída do usuário, conforme a fórmula da Seção 3.2 do Manual de Jutsus. Sasuke jounin com LS de 442 RC executa em 1 turno de selos; Kakashi com LS de 188 RC leva 2 turnos.
- **Ação:** janela de canalização seguida de irradiação imediata. Não requer deslocamento.
- **Restrições:** alcance curto, limitado ao raio corporal do usuário. Condutores físicos em contato direto estendem o alcance até o comprimento do objeto. Alvo múltiplo irrestrito dentro do raio. Não causa dano a aliados que o usuário deliberadamente excluir [proposta: requer teste de Controle de Chakra para exclusão seletiva].

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus:

```
dano = RC × coef_entrega × mult_Tipo + bônus_CC × coef_técnica
dano = 600 × 0,10 × 1,75 + bônus_CC × 1,0
dano = 105 + bônus_CC
```

O coeficiente de entrega 0,10 reflete a forma de irradiação difusa ao redor do corpo, categoria com menor eficiência de conversão chakra em dano por ser distribuída em área. O coeficiente técnico 1,0 reflete dependência média de moldagem: a técnica exige controle para irradiar de forma uniforme, mas não a compressão extrema que define o Chidori base. O `bônus_CC` corresponde ao bônus acumulado da perícia Controle de Chakra do usuário, sem a adição de INT.

---

## Tabela de Descarga

Par de referência B-rank: PV 580.

| Usuário | bônus CC | Dano por alvo | % PV par B-rank | % PV par A-rank |
|---|---|---|---|---|
| Kakashi jounin | 43 | 148 | 26% | 15% |
| Sasuke genin | 28 | 133 | 23% | 14% |
| Sasuke jounin | 50 | 155 | 27% | 16% |
| Sasuke adulto | 65 | 170 | 29% | 17% |
| Saki Especial | 85 | 190 | 33% | 20% |

O dano por alvo posiciona a técnica na faixa Forte baixo a Forte contra o par B-rank adequado ao seu rank. A eficiência total escala com o número de alvos atingidos simultaneamente.

| Alvos atingidos | Dano total (Sasuke jounin) | Equivalente a |
|---|---|---|
| 1 | 155 | Forte baixo vs par B-rank |
| 2 | 310 | Forte vs par B-rank |
| 3 | 465 | 1,4× o Chidori base (336) |
| 4 | 620 | 1,8× o Chidori base |

---

## Interação com Defesas

O Chidori Nagashi não possui perfuração de Absorção. A entrega difusa dispersa a energia eletromagnética por área, impedindo a concentração necessária para penetrar a mitigação passiva do alvo. A técnica utiliza as regras padrão de defesa: a Absorção do alvo aplica-se integralmente ao dano recebido.

---

## Rider — Paralisia Parcial

A descarga elétrica aplica Paralisia Parcial a cada alvo atingido dentro do raio, com resolução independente para cada um. O grau segue o rider natural do Raiton, determinado pela margem do teste de acerto de área:

| Margem | Grau de Paralisia Parcial |
|---|---|
| Sucesso Justo | Leve |
| Sucesso Pleno | Moderado |
| Crítico | Grave |

O teste de acerto de área usa INT do usuário vs. RES mais FOR de cada alvo individualmente. A Paralisia Parcial aplicada em múltiplos alvos no mesmo turno é o principal valor tático da técnica, independente do dano causado.

---

## Progressão por Maestria

| Nível | Capacidade disponível |
|---|---|
| Raiton LV4, qualquer inclinação | Acesso ao Chidori Nagashi; irradiação corporal e por condutores em contato |
| Raiton LV5, caminho Mil Pássaros | Perfuração de 25% da Absorção na variante corporal [proposta: sinergia com o caminho] |
| Raiton LV6, Transcendência Kirin | Campo de irradiação ampliado; Paralisia Parcial garantida Moderada no mínimo |

---

## Referência de Usos por Perfil

| Usuário | RC | LS | Janela base | Usos por combate |
|---|---|---|---|---|
| Kakashi jounin | 942 | 188 | 2 turnos | 1 |
| Sasuke genin | 1.325 | 265 | 2 turnos | 2 |
| Sasuke jounin | 2.211 | 442 | 1 turno | 3 |
| Sasuke adulto | 3.500 | 700 | 0 turnos | 5 |
| Saki Especial | 5.000 | 1.000 | 0 turnos | 8 |

---

## Sinergias

- **Paralisia Parcial prévia:** alvos já paralisados por qualquer fonte não podem realizar o teste de Evitar, tornando o dano automático para todos os atingidos simultaneamente.
- **Condutores físicos:** armas empunhadas, superfícies de água e estruturas metálicas em contato com o usuário estendem o raio efetivo da irradiação, atingindo alvos além do alcance corporal sem custo adicional.
- **Raiton LV alto e bônus CC:** diferentemente do Chidori, cujo componente RC escala com a carga, o Chidori Nagashi tem custo fixo; a variação entre usuários vem inteiramente do bônus CC, tornando o Controle de Chakra o principal diferencial de potência.
- **Cerco:** a técnica atinge todos os alvos no raio simultaneamente, sem escolha de direção; situações em que o usuário está cercado convertem a desvantagem posicional em vantagem tática.

---

## Notas para o Mestre

- **Alvo múltiplo simultâneo:** o Narrador deve declarar quantos alvos estão dentro do raio antes do teste de acerto; não é possível ampliar o alcance retrospectivamente após o resultado. O raio corporal cobre aproximadamente o alcance de corpo a corpo imediato.
- **Condutores:** quando o usuário empunha uma arma ou está em contato com uma superfície condutora, informe isso antes da ativação; a propagação é automaticamente estendida ao condutor, atingindo qualquer um em contato com ele.
- **Narração:** a técnica produz um brilho azulado ao redor do corpo e das superfícies condutoras, acompanhado de zumbido eletromagnético audível apenas na proximidade. A narração não inclui o som característico do Chidori base; isso diferencia os dois na mesa.
- **NPCs:** o Chidori Nagashi é especialmente eficaz em mãos de adversários que começam a cena já cercando os jogadores; o impacto simultâneo em múltiplos personagens jogadores exige que o Narrador resolva os testes individualmente e declare os graus de Paralisia Parcial separadamente para cada um.
