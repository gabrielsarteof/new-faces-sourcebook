---
id: naruto.technique.meisaigakure
title: "Técnica da Camuflagem Óptica"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: null
supersedes: null
---

# Meisaigakure no Jutsu
**明再隠れの術 · Técnica da Camuflagem Óptica**
Ninjutsu · Sem natureza elemental · Rank C [Atribuído]

A evolução do princípio do Kakuremino além do manto físico, dobrando a luz diretamente sobre o corpo do usuário em movimento.

---

## Sobre a Técnica

O Meisaigakure no Jutsu dispensa qualquer manto ou objeto físico. O usuário molda uma camada de chakra sobre a própria superfície do corpo que refrata a luz ao redor dele, produzindo camuflagem óptica real contra qualquer fundo, não apenas contra a superfície específica que um pano imitaria. A técnica sustenta durante o movimento, ao contrário do Kakuremino, que se rompe com qualquer deslocamento além do lento.

A diferença entre as duas técnicas é a mesma diferença que separa o Henge do Bunshin dentro desta leva. Cobrir um objeto com uma superfície emprestada é truque simples. Dobrar a luz diretamente sobre o próprio corpo, mantendo a curvatura estável enquanto o corpo se move, exige uma disciplina de moldagem que a maioria dos praticantes do Kakuremino nunca alcança.

O uso canônico mais citado é o de um missing-nin de nível avançado que emprega a técnica para se tornar efetivamente invisível a olho nu durante toda uma sequência de combate, incluindo deslocamento e ataque, evidência de que a curvatura sustenta sob esforço físico real e não apenas em repouso.

---

## Requisitos de Acesso

- **Controle de Chakra:** LV3, o portão de rank C.
- **Técnica prévia:** Kakuremino no Jutsu.
- **Grau de Exigência de Moldagem:** Alta, elevada de Plena por sustentação prolongada. Manter a curvatura óptica estável durante o movimento, sem a âncora de um objeto físico, ultrapassa o que a moldagem instantânea de cobrir um manto exige.

---

## Custo de XP

A técnica não possui natureza elemental. O custo é único para qualquer shinobi.

| RC nominal | Custo mínimo | Custo de XP |
|---|---|---|
| 150 | 50 | 1.409 |

```
posição = (150 − 130) ÷ (350 − 130) = 0,091
XP_base = 1.200 + 0,091 × (3.500 − 1.200) = 1.409
```

---

## Efeitos Globais

A camuflagem cobre o corpo inteiro do usuário contra qualquer fundo, sem depender de padrão ou objeto específico. Como o Kakuremino, o efeito é puramente óptico. Som, cheiro e a assinatura de chakra do usuário permanecem detectáveis normalmente para quem tem os meios de percebê-los, e sensores e dōjutsu de leitura de fluxo enxergam através da camuflagem sem esforço adicional.

---

## Mecânica de Ativação

- **RC nominal:** 150. **Custo mínimo:** 50, pago pelo executor de Moldagem plena. **Custo de manutenção:** nenhum enquanto a técnica permanece ativa, sustentando mesmo durante deslocamento e combate.
- **Selos de referência:** 1.
- **Janela de Canalização:** instantânea para executores no grau Alta com folga; reservas próximas do piso de acesso podem exigir preparação, pela régua padrão de Janela sobre o custo pago real.
- **Ação:** ação do turno para ativar. A manutenção não consome ação.
- **Restrições:** nenhuma restrição de movimento além das já aplicáveis pelo próprio combate. Ataques declarados pelo usuário camuflado expõem posição pela mesma leitura de percepção da Resolução abaixo, resolvida no instante do golpe.

**Quebra da camuflagem.** Encerra a técnica: dano físico direto igual ou superior a 15% do PV máximo, dissipação voluntária, inconsciência do usuário.

---

## Resolução

Idêntica ao motor já publicado no Kakuremino, consumido aqui por referência, com a mesma Régua de Leitura do Kawarimi no Jutsu.

```
teste de percepção do observador = PRE + SAB
teste de Moldagem do executor     = Base Total + SAB + Inclinação Total de Moldagem
                                     + especialização de Refino
limiar do observador               = (teste de percepção ÷ teste de Moldagem) × 50
```

**Falha do observador:** não localiza o usuário, mesmo em movimento ou durante um ataque declarado por ele.

**Sucesso do observador:** localiza a posição real e pode agir contra ela normalmente.

O portão de acesso mais alto desta ficha em relação ao Kakuremino já produz, por si só, teste de Moldagem tipicamente superior no lado do executor, sem exigir bônus numérico adicional além do que a Régua de Leitura já calcula.

---

## Progressão por Maestria

A técnica não escala por nível próprio. A maestria se expressa pela leitura do Índice de Desperdício de Controle de Chakra sobre o custo mínimo de 50.

```
desperdício = (185 − teste de Moldagem) × 1,3      piso 0%, teto 250%
custo pago  = 50 × (1 + desperdício)
```

| Patamar de Moldagem | Teste de Moldagem | Custo pago |
|---|---|---|
| LV4, com Refino | 116 | 95 |
| LV5, com Refino aprofundado | 142 | 78 |
| LV6, pleno | 185 | 50 |

---

## Sinergias

- **Kakuremino no Jutsu:** requisito mecânico direto e origem conceitual da técnica.
- **Kawarimi no Jutsu:** compartilha o mesmo motor de leitura, e a familiaridade cumulativa contra o mesmo usuário se aplica normalmente em confrontos repetidos.
- **Infiltração e emboscada:** a capacidade de sustentar a camuflagem durante deslocamento e ataque a torna recurso canônico de abertura garantida em combates de infiltração, muito além do uso passivo do Kakuremino.

---

## Notas para o Mestre

- **A mobilidade é o diferencial real:** não trate esta técnica como um Kakuremino mais caro. A capacidade de atacar sem quebrar a camuflagem automaticamente é o que a torna ameaça tática séria, e o teste de percepção no instante do golpe é onde a cena se decide.
- **Sensores continuam sendo o contrajogo correto:** nunca permita que a camuflagem óptica engane sensoriamento de chakra ou dōjutsu. O ponto fraco da técnica é estrutural e deve permanecer assim.
- **PdMs:** reserve a técnica a antagonistas de nível chuunin avançado em diante. O custo de XP e o portão de rank C já filtram a maior parte do elenco genin.
