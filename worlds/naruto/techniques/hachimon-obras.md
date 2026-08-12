---
id: naruto.technique.hachimon-obras
title: "Obras dos Oito Portões"
version: 1.1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Obras_dos_Oito_Portoes_v1.md
---

# Obras dos Oito Portões
Taijutsu Puro · sem natureza · Rank C a Rank S, com o Guy Noturno marcado Kinjutsu

As nove fichas mecânicas das técnicas que dependem de portão aberto para existir.

---

## Sobre o Conjunto

As obras reunidas aqui compartilham uma condição de existência: nenhuma delas é executável com os reguladores no lugar. O que cada uma faz depende de um patamar de saída física que só um portão aberto autoriza, e o portão exigido está declarado na ficha correspondente.

O conjunto se divide em duas linhagens. A primeira reúne as obras de contato, que concentram a saída amplificada em um ponto do corpo do adversário e resolvem por impacto direto. A segunda reúne as obras de sobrepressão, em que a velocidade do membro comprime o ar à frente dele em massa própria que segue adiante depois que o movimento termina, e que a obra registra pelo envoltório de vapor que acompanha o praticante nos portões altos.

O documento publica ficha mecânica completa. O catálogo com etiquetagem editorial, camada de acesso e preço vive no Compêndio dos Oito Portões, e as réguas de escada, Esforço, teto de fluxo e sequela vivem no documento Oito Portões.

---

## Regras Comuns às Nove Fichas

- **Tipo de jutsu:** Taijutsu Puro
- **Custo em RC:** nenhum
- **Selos de referência:** nenhum
- **Assinatura selada:** não aplicável
- **coef_técnica:** 0,0, com degrau de moldagem Trivial em todas as fichas
- **mult_Tipo:** 1,00, porque o impacto físico não possui natureza elemental
- **Janela de Canalização:** nenhuma, a execução é sempre instantânea
- **Execução em movimento:** livre, por definição do tipo
- **Elevação de Perfil de Evasão:** o Perfil publicado em cada ficha é o de base. O sexto portão sobe um degrau e o oitavo sobe um segundo, conforme o documento Oito Portões, e o teto de dois degraus é do domínio
- **Motor de dano:** a forma de dois termos do eixo corporal, seção 6 do documento Oito Portões
- **Sequela do portão:** paga na saída pela escada de sequelas daquele documento, e a sequela própria que uma ficha declare é adicional e paga no ato
- **Excesso de Esforço:** Esforço declarado acima do Teto de Esforço do portão aberto cobra a diferença em PV, sem mitigação, e é comportamento esperado nas obras de portão baixo

```
dano = Esforço nominal × coef_entrega_física + Fator de Portão
Fator de Portão = P² × 10 × coef_obra
```

---

## Redemoinho de Força Bruta da Folha (木ノ葉剛力旋風)
Rank C · Escala Moderado · Portão exigido: primeiro

O praticante gira o corpo inteiro sobre o eixo e entrega o calcanhar na altura do tronco do adversário, convertendo a rotação completa em um único ponto de contato. Com a trava muscular caída, a inércia acumulada no giro atravessa a guarda comum e desloca o alvo do lugar onde ele estava.

**Efeitos Mecânicos**

- **Esforço nominal:** 130 PS
- **coef_entrega_física:** 1,20, ponto concentrado em contato único
- **coef_obra:** 1,0, a obra é execução direta da amplificação e não aproveita a escada além dela
- **Dano no primeiro portão:** 166
- **Ação:** padrão
- **Perfil de Evasão:** Padrão
- **Alcance:** contato, alvo único
- **Rider:** empurra, com deslocamento forçado de um degrau de distância
- **Condição de uso:** nenhuma além do portão
- **Sequela própria:** nenhuma
- **Teste:** nenhum, a entrega resolve pela esquiva efetiva do alvo conforme o modelo de acerto do cenário
- **Interações:** o deslocamento forçado é anulado por efeito que conserve posição, como o Peito Firme da Liberação de Yang
- **Etiqueta:** atribuído no requisito de portão, canon na existência da técnica
- **Âncora de validação:** dezessete por cento do par Equilibrado da faixa Veterano, dentro da banda Moderada

---

## Lótus Frontal (表蓮華)
Rank B · Escala Forte · Portão exigido: primeiro

O praticante lança o adversário ao ar, alcança a posição dele em pleno voo, o prende pelas costas com as faixas dos braços e gira o conjunto em queda até que a cabeça do alvo atinja o solo primeiro. A rotação transfere para o ponto de contato toda a altura ganha e todo o peso dos dois corpos, e o executor recebe parte do impacto por estar preso ao alvo no instante da chegada.

**Efeitos Mecânicos**

- **Esforço nominal:** 180 PS
- **coef_entrega_física:** 1,20, ponto concentrado em contato único
- **coef_obra:** 2,0, a obra existe pela amplificação do portão e a aproveita como mecanismo central
- **Dano no primeiro portão:** 236
- **Ação:** padrão
- **Perfil de Evasão:** Padrão
- **Alcance:** contato, alvo único
- **Rider:** Atordoamento, grau mínimo Leve e grau máximo Grave, com o alvo do teste calculado pela fórmula de golpe físico do Sistema de Efeitos de Status
- **Condição de uso:** o alvo precisa estar em suspensão no ar e sem apoio no instante da execução. Alvo nessa condição não realiza teste de Evitar, pela regra geral do sistema
- **Sequela própria:** o executor recebe dano em PV igual a dez por cento do próprio máximo, sem mitigação, pelo impacto compartilhado na chegada
- **Teste:** nenhum na entrega, e o rider resolve pelo Sistema de Efeitos de Status
- **Interações:** o Esforço de 180 excede o Teto de Esforço do primeiro portão em corpos de faixa Veterano e abaixo, e a diferença é cobrada em PV pela regra de excesso
- **Etiqueta:** canon na técnica, no requisito de primeiro portão e no dano ao próprio executor. Proposta nos valores
- **Âncora de validação:** vinte e cinco por cento do par Equilibrado da faixa Veterano, dentro da banda Forte

---

## Investida Cega (盲進)
Rank B · Escala Forte · Portão exigido: quarto

O praticante entra em uma área ativa de efeito hostil pelo caminho mais curto e a atravessa sem desviar, recebendo o que houver dentro dela e chegando do outro lado na posição que declarou. Com o portão da dor aberto, o corpo não registra o motivo pelo qual deveria parar no meio do trajeto.

**Efeitos Mecânicos**

- **Esforço nominal:** 90 PS
- **Categoria:** Mobilidade, com seis degraus distribuídos entre alcance, carga e restrição atravessada
- **Degraus:** alcance no campo visual, carga apenas do praticante, restrição atravessada em cobertura sólida
- **Dano:** nenhum, a obra não é ofensiva
- **Ação:** padrão
- **Perfil de Evasão:** não aplicável, a obra não é dirigida a alvo
- **Alcance:** qualquer ponto no campo visual, em linha declarada
- **Condição de uso:** existe em cena uma área ativa de efeito hostil entre o praticante e o destino declarado
- **Sequela própria:** nenhuma
- **Teste:** nenhum. O dano e as condições da área atravessada se aplicam integralmente, e o que a obra entrega é a chegada
- **Interações:** as condições recebidas na travessia se instalam normalmente, e as penalidades delas ficam suspensas enquanto o quarto portão permanecer aberto, voltando a incidir no fechamento. Barreira erguida e fronteira selada não são cobertura sólida e não são atravessadas por esta obra
- **Etiqueta:** proposta integral. A obra ocupa o verbo de travessia que o quarto portão autoriza e que nenhuma entrada canônica nomeia
- **Âncora de validação:** um praticante atravessa uma zona de dano contínuo de escala Forte, recebe a descarga inteira sem mitigação adicional e alcança o conjurador no mesmo turno, o que é o único uso que justifica o preço da obra

---

## Lótus Reversa (裏蓮華)
Rank A · Escala Supremo · Portão exigido: terceiro

O praticante encadeia uma sequência de golpes ascendentes que mantém o adversário suspenso, alcança a altura máxima do voo dele e o conduz ao solo em rotação, entregando o conjunto acumulado da sequência em um único ponto de chegada. A circulação forçada do terceiro portão é o que permite ao corpo sustentar a cadência da sequência inteira sem interrupção, e é ela que cobra o preço.

**Efeitos Mecânicos**

- **Esforço nominal:** 300 PS
- **coef_entrega_física:** 1,20, ponto concentrado em contato único
- **coef_obra:** 2,5, a obra existe pela escada e depende dela do início ao fim
- **Dano no terceiro portão:** 585
- **Ação:** padrão
- **Perfil de Evasão:** Padrão
- **Alcance:** contato, alvo único
- **Rider:** Fratura, grau mínimo Moderado e grau máximo Crítico, no ponto de chegada
- **Condição de uso:** o alvo precisa estar ao alcance de contato no início da sequência, e permanece em suspensão sem apoio até a chegada. Alvo em suspensão não realiza teste de Evitar
- **Sequela própria:** o executor recebe Fratura Moderada nos membros empregados e Ferimento Grave Moderado, pagos no ato e somados à sequela do portão na saída
- **Teste:** nenhum na entrega, e o rider resolve pelo Sistema de Efeitos de Status
- **Interações:** o Esforço de 300 excede o Teto de Esforço do terceiro portão em corpos de faixa Veterano e abaixo, e a diferença é cobrada em PV. A obra é executável em portões acima do terceiro e o Fator de Portão acompanha, o que a mantém útil na escada alta
- **Etiqueta:** canon na técnica, no requisito de terceiro portão e no dano estrutural ao executor. Proposta nos valores
- **Âncora de validação:** sessenta e um por cento do par Equilibrado da faixa Veterano, dentro da banda Suprema

---

## Tríplice do Portão da Clausura (杜門三連)
Rank A · Escala Supremo · Portão exigido: quinto

O praticante concentra em um único alvo as três sequências completas que a economia de ação do quinto portão permitiria distribuir pelo campo. Os impactos chegam sem intervalo de recomposição entre eles, e o alvo recebe as três antes de completar a própria reação.

**Efeitos Mecânicos**

- **Esforço nominal:** 350 PS
- **coef_entrega_física:** 0,78, múltiplos impactos simultâneos
- **coef_obra:** 2,5, a obra existe pela economia de ação que o portão abre
- **Dano no quinto portão:** 898
- **Ação:** padrão, consumindo também os ataques adicionais do turno
- **Perfil de Evasão:** Veloz
- **Alcance:** contato, alvo único
- **Rider:** quebra guarda, com o alvo perdendo a reação até o próximo turno dele
- **Condição de uso:** nenhuma além do portão
- **Sequela própria:** nenhuma
- **Teste:** nenhum, a entrega resolve pela esquiva efetiva do alvo
- **Interações:** a obra consome os ataques adicionais do turno e não os soma ao dano, porque a concentração deles já está computada no coeficiente de entrega. Executar a obra e atacar de novo no mesmo turno não é possível
- **Etiqueta:** proposta integral. A obra ocupa o verbo de concentração de economia de ação que o quinto portão autoriza e que nenhuma entrada canônica nomeia
- **Âncora de validação:** quarenta e sete por cento do par Equilibrado da faixa Especial, dentro da banda Suprema

---

## Pavão da Manhã (朝孔雀)
Rank A · Escala Supremo · Portão exigido: sexto

O praticante desfere uma sequência contínua de socos em cadência tal que o atrito de cada punho com o ar aquece o ponto de impacto até a ignição. As chamas se desprendem a cada golpe e permanecem suspensas por instantes no trajeto percorrido, formando o leque luminoso que dá nome à obra. O calor é resultado do movimento e não conversão de chakra.

**Efeitos Mecânicos**

- **Esforço nominal:** 320 PS
- **coef_entrega_física:** 0,78, múltiplos impactos simultâneos
- **coef_obra:** 2,0, a obra aproveita a escada como mecanismo central sem depender dela por inteiro
- **Dano no sexto portão:** 970
- **Ação:** padrão
- **Perfil de Evasão:** Veloz de base, elevado a Teleguiado pelo sexto portão
- **Alcance:** contato, alvo único, com as chamas cobrindo o trajeto entre praticante e alvo
- **Rider:** Queimadura, grau mínimo Leve e grau máximo Moderado
- **Condição de uso:** nenhuma além do portão
- **Sequela própria:** nenhuma
- **Teste:** nenhum na entrega, e o rider resolve pelo Sistema de Efeitos de Status
- **Interações:** a ignição é fenômeno de atrito e não é natureza de Fogo. Ela não participa do ciclo de superação elemental, não lê mult_Tipo, não é absorvida por defesa específica contra Katon e não é extinta por técnica de Suiton dirigida à natureza
- **Etiqueta:** canon na técnica, na ignição por atrito e no requisito de sexto portão. Proposta nos valores
- **Âncora de validação:** cinquenta e um por cento do par Equilibrado da faixa Especial, dentro da banda Suprema

---

## Elefante Vespertino (夕象)
Rank S · Escala Supremo alto · Portão exigido: sétimo

O praticante desfere chutes descendentes cuja passagem comprime uma massa de ar do tamanho do próprio corpo, e a massa se desprende do pé e avança à frente conservando a forma que a compressão lhe deu. Cada chute produz uma massa, e o praticante encadeia várias sobre a mesma área até que o terreno abaixo ceda.

**Efeitos Mecânicos**

- **Esforço nominal:** 400 PS
- **coef_entrega_física:** 0,72, área irradiada do corpo
- **coef_obra:** 2,5, a obra existe pela sobrepressão que o portão libera
- **Dano no sétimo portão:** 1.513
- **Ação:** padrão
- **Perfil de Evasão:** Padrão de base, elevado a Veloz pelo sexto portão
- **Alcance:** área à frente do praticante, alcançando todos os presentes nela
- **Rider:** empurra, com deslocamento forçado de dois degraus de distância e Prostração
- **Condição de uso:** nenhuma além do portão
- **Sequela própria:** nenhuma
- **Teste:** nenhum, a área resolve sem teste conforme o modelo de acerto do cenário
- **Interações:** o terreno atingido cede na área coberta, e o efeito ambiental permanece na cena. A massa de ar é impacto físico e não é dissipada por técnica dirigida a natureza elemental
- **Etiqueta:** canon na técnica, na forma de entrega e no requisito de sétimo portão. Proposta nos valores
- **Âncora de validação:** cinquenta por cento do par Equilibrado da faixa Ápice, dentro da banda Suprema

---

## Tigre Diurno (昼虎)
Rank S · Escala Forbidden · Portão exigido: sétimo

O praticante comprime o ar entre os punhos até que a massa contida alcance densidade própria e a libera em um único disparo dirigido. A massa atravessa a distância conservando a forma da compressão e detona no ponto de chegada, arrasando a área ao redor do alvo. É a obra que converte a sobrepressão do sétimo portão em ataque de alcance real, e o praticante não precisa alcançar o adversário para entregá-la.

**Efeitos Mecânicos**

- **Esforço nominal:** 500 PS
- **coef_entrega_física:** 0,96, massa projetada em direção declarada
- **coef_obra:** 3,0, a obra existe inteiramente pela escada e não tem forma abaixo do sétimo portão
- **Dano no sétimo portão:** 1.950
- **Ação:** padrão
- **Perfil de Evasão:** Veloz de base, elevado a Teleguiado pelo sexto portão
- **Alcance:** linha declarada até o campo visual, com detonação em área no ponto de chegada
- **Rider:** empurra, com deslocamento forçado de dois degraus, e Surdez de grau mínimo Leve e máximo Moderado pela detonação
- **Condição de uso:** nenhuma além do portão
- **Sequela própria:** nenhuma
- **Teste:** nenhum na entrega, e os riders resolvem pelo Sistema de Efeitos de Status
- **Interações:** a detonação alcança todos os presentes na área de chegada, inclusive aliados. A massa é impacto físico sem natureza e não é interceptada pelo ciclo elemental, e apenas negação dirigida a efeito cinético a alcança
- **Etiqueta:** canon na técnica, na compressão entre os punhos, no alcance e no requisito de sétimo portão. Proposta nos valores
- **Âncora de validação:** cento e um por cento do par Equilibrado da faixa Especial e sessenta e cinco por cento do par da faixa Ápice, o que a posiciona no topo do rank S

---

## Guy Noturno (夜ガイ)
Rank S · Kinjutsu · Escala Transcendente · Portão exigido: oitavo

O praticante concentra no chute descendente a totalidade da saída que o coração sem regulador produz. O membro atravessa a distância antes que o ar tenha tempo de se deslocar, e o que chega ao alvo é a coluna inteira de ar comprimida no trajeto, que o olho registra como uma forma alongada de vapor luminoso. O ponto de chegada é atingido antes que qualquer leitura de posição do praticante se conclua.

**Efeitos Mecânicos**

- **Esforço nominal:** 800 PS, pagos em PV quando o pool de PS já estiver esgotado pela abertura do portão
- **coef_entrega_física:** 1,20, ponto concentrado em contato único
- **coef_obra:** 3,0, a obra existe inteiramente pelo oitavo portão
- **Dano no oitavo portão:** 2.880
- **Ação:** padrão
- **Perfil de Evasão:** Veloz de base, elevado a Inevitável pelos dois degraus da escada, com a condição estrutural declarada no estado terminal do oitavo portão
- **Alcance:** qualquer ponto no campo visual, com o praticante percorrendo a distância no ato
- **Rider:** nenhum, o impacto não deixa condição porque não deixa alvo em condição de recebê-la
- **Condição de uso:** o oitavo portão aberto
- **Sequela própria:** nenhuma além da que o portão já cobra, que é a morte ao fim da cena
- **Teste:** nenhum. Sendo Inevitável, apenas Absorção e Resistência mitigam
- **Interações:** o aftermath de Kinjutsu não é cobrado em separado, porque a morte declarada no oitavo portão já é o preço máximo da escada e cobrá-lo duas vezes taxaria o mesmo custo duas vezes. A obra é executável mais de uma vez enquanto o portão durar, limitada pelo PV restante do praticante
- **Etiqueta:** canon na técnica, no requisito de oitavo portão e na escala do efeito. Proposta nos valores. O nome canônico carrega o nome do autor da obra e é preservado como nomenclatura, sem que a pessoa seja fonte de regra alguma
- **Âncora de validação:** noventa e seis por cento do par Equilibrado da faixa Ápice, dentro da banda Forbidden, e o dano bruto excede o PV do perfil Conjurador de qualquer faixa registrada

---

## Tabela de Descarga do Conjunto

Dano resolvido por obra, no portão exigido, contra o par Equilibrado da faixa indicada.

| Obra | P | Esforço | coef_entrega | coef_obra | Fator | Dano | Par | % PV |
|---|---|---|---|---|---|---|---|---|
| Redemoinho de Força Bruta | 1 | 130 | 1,20 | 1,0 | 10 | 166 | Veterano 960 | 17% |
| Lótus Frontal | 1 | 180 | 1,20 | 2,0 | 20 | 236 | Veterano 960 | 25% |
| Lótus Reversa | 3 | 300 | 1,20 | 2,5 | 225 | 585 | Veterano 960 | 61% |
| Tríplice da Clausura | 5 | 350 | 0,78 | 2,5 | 625 | 898 | Especial 1.920 | 47% |
| Pavão da Manhã | 6 | 320 | 0,78 | 2,0 | 720 | 970 | Especial 1.920 | 51% |
| Elefante Vespertino | 7 | 400 | 0,72 | 2,5 | 1.225 | 1.513 | Ápice 3.000 | 50% |
| Tigre Diurno | 7 | 500 | 0,96 | 3,0 | 1.470 | 1.950 | Ápice 3.000 | 65% |
| Guy Noturno | 8 | 800 | 1,20 | 3,0 | 1.920 | 2.880 | Ápice 3.000 | 96% |

A Investida Cega não aparece porque não entrega dano.

Uma obra executada em portão acima do exigido lê o Fator de Portão do portão aberto e não do portão de requisito, o que mantém as obras baixas úteis na escada alta sem que nenhuma delas mude de rank.

---

## Sinergias

- **Segundo portão antes da obra pesada:** o retorno de PS financia o Esforço das obras de portão baixo sem cobrar excesso em PV, e é a diferença entre a Lótus Reversa executada limpa e a executada com o corpo pagando a conta
- **Quarto portão sob obra de sequela própria:** a suspensão de penalidade mantém o praticante operante depois da Lótus Reversa, adiando o efeito da Fratura para o fechamento
- **Elefante Vespertino antes do Tigre Diurno:** a primeira derruba e prostra na área, e a segunda alcança um conjunto de alvos que perdeu a mobilidade
- **Liberação de Yang, caminho Cicatriz:** o Selo de Carne trava o agravamento do ferimento que as obras de contato deixam no próprio executor, sem devolver PV algum
- **Aliado com Ninjutsu Médico em campo:** a Fratura das obras altas é a única condição do conjunto que exige tratamento especializado, e a presença de um médico converte um arco de recuperação em uma cena
- **Terreno fechado:** as obras de sobrepressão cobrem área e não distinguem aliado de adversário, o que faz do corredor e da sala o pior lugar para executá-las e do campo aberto o lugar onde elas decidem

---

## Notas para o Mestre

- **Declare o portão antes do dano.** O Fator de Portão é a parcela dominante em toda obra acima do terceiro, e a mesa precisa saber em que degrau o praticante estava no instante da entrega
- **O excesso de Esforço é o preço visível das obras baixas.** A Lótus Frontal e a Lótus Reversa custam PV a quem as executa em portão baixo, e é assim que o sistema reproduz o combatente que ganha a luta e sai dela em pedaços
- **As obras de sobrepressão mudam o mapa.** O terreno cede, a poeira sobe e a cobertura desaparece. Descreva o campo depois, porque a cena seguinte acontece nele
- **Frequência.** Uma obra acima do rank A por combate é o esperado. O praticante que encadeia duas está no sétimo portão, e a sequela daquele degrau resolve a questão sozinha
- **NPCs.** Adversário com a escada e as obras entrega aos jogadores um relógio: ele fica mais forte a cada turno e se destrói no processo, e a resposta correta é sobreviver ao pico em vez de trocar dano com ele
