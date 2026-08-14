---
id: naruto.technique.kakuremino
title: "Técnica do Manto Oculto"
version: 1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: null
supersedes: null
---

# Técnica do Manto Oculto — 隠れ蓑の術 (Kakuremino no Jutsu)
Ninjutsu · Sem natureza elemental · Rank E [Atribuído]

A técnica de camuflagem básica que funde o usuário coberto por um pano ao ambiente ao redor, recurso corriqueiro de vigilância e travessura no repertório shinobi de nível inicial.

---

## Sobre a Técnica

O Kakuremino no Jutsu exige um manto ou pano físico sobre o corpo do usuário, e a moldagem de chakra sobre esse tecido ajusta cor, textura e sombra para imitar a superfície que está por trás dele. O efeito não é invisibilidade real. É camuflagem ativa, dependente do pano como âncora física, e falha se o usuário se move além do que a superfície imitada permitiria sem denunciar a diferença.

O uso canônico mais citado é o de vigilância parada, esconder-se atrás de uma parede, sob uma pilha de objetos ou junto a uma superfície de padrão reconhecível, mantendo a forma imóvel enquanto observa. A técnica é ensinada cedo no repertório shinobi, e seu emprego mais lembrado no cânone é justamente o menos marcial, recurso de espionagem leve e de brincadeira antes de qualquer aplicação tática séria.

A resolução do disfarce segue a mesma lógica de leitura que qualquer outro engano baseado em moldagem já publicado nesta leva. O observador tenta perceber a diferença entre o pano camuflado e o ambiente real, e o que decide é a mesma Régua de Leitura publicada na ficha do Kawarimi no Jutsu, aqui aplicada à permanência em vez de ao instante único de uma substituição.

---

## Requisitos de Acesso

- **Controle de Chakra:** LV1, o portão de rank E.
- **Grau de Exigência de Moldagem:** Básica. O ajuste de cor e textura sobre o pano é calibração simples, sem escala mínima nem tolerância a volume que justifique elevação de degrau.
- **Insumo físico:** um manto, pano ou cobertura equivalente sobre o corpo do usuário. Sem ele, a técnica não tem superfície para moldar e não pode ser declarada.

---

## Custo de XP

A técnica não possui natureza elemental. O custo é único para qualquer shinobi.

| RC nominal | Custo mínimo | Custo de XP |
|---|---|---|
| 8 | 2 | 125 |

```
posição = (8 − 5) ÷ (40 − 5) = 0,086
XP_base = 100 + 0,086 × (400 − 100) = 125
```

---

## Efeitos Globais

O pano camuflado assume aparência visual da superfície imediatamente atrás dele, ajustada de forma contínua enquanto a técnica permanece ativa. A camuflagem é puramente visual. Não mascara som, cheiro nem a assinatura de chakra do usuário para sensores ou dōjutsu de leitura de fluxo, que veem através dela normalmente.

---

## Mecânica de Ativação

- **RC nominal:** 8. **Custo mínimo:** 2, pago pelo executor de Moldagem plena. **Custo de manutenção:** nenhum, a técnica sustenta enquanto o usuário permanece coberto e majoritariamente parado, no mesmo padrão de sustentação sem custo já usado no Henge.
- **Selos de referência:** 1, formados antes de puxar o manto sobre o corpo.
- **Janela de Canalização:** instantânea em qualquer patamar de Moldagem elegível.
- **Ação:** ação do turno para ativar. A manutenção não consome ação enquanto as condições de sustentação se mantêm.
- **Restrições:** exige permanecer coberto pelo manto. Movimento além de um deslocamento lento e contido quebra a camuflagem automaticamente, sem teste.

**Quebra da camuflagem.** Encerram a técnica: sair de baixo do manto, qualquer movimento além do deslocamento lento, dano físico direto, e a dissipação voluntária.

---

## Resolução

Cada observador que passa perto ou examina a área testa a própria percepção contra o mesmo motor de oposição já publicado no Kawarimi no Jutsu, consumido aqui por referência.

```
teste de percepção do observador = PRE + SAB
teste de Moldagem do executor     = Base Total + SAB + Inclinação Total de Moldagem
                                     + especialização de Refino
limiar do observador               = (teste de percepção ÷ teste de Moldagem) × 50
```

**Falha do observador:** não nota a diferença e trata a área como vazia ou como o objeto imitado.

**Sucesso do observador:** percebe a irregularidade e pode investigar normalmente.

Observação deliberada e prolongada da mesma área concede vantagem ao observador a critério do Mestre, no mesmo padrão de leitura já usado no Bunshin para escrutínio parado.

---

## Progressão por Maestria

A técnica não escala por nível próprio. A maestria se expressa pela leitura do Índice de Desperdício de Controle de Chakra sobre o custo mínimo de 2, praticamente cosmética pelo piso já baixo do custo.

```
desperdício = (185 − teste de Moldagem) × 1,3      piso 0%, teto 250%
custo pago  = 2 × (1 + desperdício)
```

---

## Sinergias

- **Kawarimi no Jutsu:** compartilha o mesmo motor de leitura, e um usuário que já investiu em Moldagem para o Kawarimi aproveita o mesmo teste sem custo adicional de aprendizado conceitual.
- **Meisaigakure no Jutsu:** entrada seguinte desta leva, evolução direta do mesmo princípio de camuflagem sem depender de um manto físico.
- **Furtividade:** o silêncio do usuário coberto não é resolvido por esta ficha e pertence à perícia de Furtividade quando aquele documento nascer, `[pendente]` no mesmo padrão já registrado no Nawanuke.

---

## Notas para o Mestre

- **A camuflagem é visual, não total:** nunca deixe a técnica esconder som, cheiro ou assinatura de chakra. O contrajogo canônico contra ela é sempre sensorial, não visual.
- **Movimento é a ruptura automática:** não role percepção contra um usuário que se moveu além do permitido. A camuflagem já caiu, sem teste.
- **Narração:** trate a técnica com o mesmo tom leve que o cânone usa nela, recurso de espionagem cotidiana e de comédia antes de ferramenta de combate sério.
