---
id: core.training
title: "Manual Global de Treinamento"
version: 1
layer: core
type: system
status: final
source-file: Manual_Global_de_Treinamento.md
---

# Manual Global de Treinamento

Este manual define a regra universal de treinamento do sistema. Ele governa como personagens convertem tempo dedicado de prática em progressão comprável, em qualquer cenário rodado sobre este chassi. Tudo que é particular de uma ambientação concreta, incluindo a lista de alvos válidos, os métodos próprios de cada mundo e os exemplos de circunstância, vive nos documentos de adaptação de cenário, que plugam neste manual sem alterar nenhuma regra aqui descrita.

O treinamento complementa a aventura e nunca a substitui. Eventos vividos em campo permanecem a fonte mais forte de desenvolvimento de um personagem; o treino dá forma e direção ao que a aventura ensina. A regra nasce do funcionamento real do aprendizado humano, elevado ao padrão super-humano do gênero: a estrutura do treino verdadeiro permanece intacta, e o que muda é a taxa de conversão entre esforço e resultado.

---

## O Bloco de Treino

O Bloco é a unidade fundamental do treinamento: uma semana de prática dedicada a um único objetivo declarado. Treinar é abrir Blocos, e todo o resto da regra opera sobre eles.

Na abertura de cada Bloco, o jogador faz três declarações, todas confirmadas pela ficção antes de virarem número:

O **alvo** é a capacidade sendo desenvolvida. Qualquer capacidade que a economia do sistema precifica em XP é um alvo válido: um atributo, uma perícia, uma técnica em desenvolvimento, ou o que o cenário definir. Todo o XP gerado pelo Bloco vai integralmente para o alvo declarado. O treino rende para o que foi treinado, sem vazamento para capacidades vizinhas.

O **método** é como e com quem o personagem treina, conforme a escada de Método descrita adiante.

A **intensidade** é o quanto o personagem se cobra, entre o regime Sustentado e o pulso de Sobrecarga, conforme a seção de Intensidade.

### O Bloco Dividido

O personagem pode dividir a semana entre exatamente dois alvos declarados. O Bloco Dividido usa uma única rolagem, porque a semana tem uma qualidade só, e cada alvo recebe metade do XP resultante e acumula meio Bloco de maturação. A soma do rendimento dividido é igual à do Bloco cheio: a divisão compra amplitude e custa profundidade, pois cada marco individual de maturação chega na metade da velocidade. Três ou mais alvos na mesma semana não existem como Bloco; a atenção humana, mesmo elevada ao padrão do gênero, sustenta no máximo duas dedicações genuínas por semana, e o personagem que deseja tocar mais frentes alterna Blocos ao longo do mês. A alternância entre semanas, além de permitida, é prática intercalada: o organismo retém melhor variando o estímulo entre períodos do que diluindo tudo no mesmo dia.

### O Bloco Mensal

Períodos longos de treino podem ser resolvidos em Blocos Mensais de quatro semanas, com as mesmas declarações e uma única rolagem. O rendimento do Bloco Mensal é quatro vezes o de um Bloco Semanal, e o grau da rolagem se aplica ao mês inteiro. A esperança matemática é idêntica à de quatro rolagens semanais; a variância é maior, pois o mês completo cai no mesmo grau. Quem agrega aceita essa variância em troca de agilidade, e a rolagem única do mês se torna um momento de mesa. O jogador escolhe a granularidade a cada período.

---

## A Rolagem do Bloco

Todo Bloco é resolvido com uma rolagem de d100 contra um limiar, com sucesso em resultado igual ou menor, como todo o chassi. A rolagem representa a variância de performance: dado o mesmo personagem, o mesmo método e as mesmas condições, o rendimento real de uma semana de treino ainda flutua, porque prontidão, foco e consolidação variam de formas que ninguém controla por completo. A semana em que tudo encaixa e a semana em que nada sai existem para qualquer praticante, do novato ao mestre.

### O limiar e as circunstâncias

O limiar base é **50**, a semana mediana de um treino conduzido em condições neutras. As circunstâncias do Bloco deslocam o limiar em degraus fixos de **15**, até o máximo de dois degraus para cada lado, mantendo o limiar entre 20 e 80. O Narrador confirma os degraus na abertura do Bloco, pela ficção:

| Circunstância | Deslocamento |
|---|---|
| Estrutura dedicada: instalação, recursos e espaço plenos para o alvo | +15 |
| Desafio real: prática contra oponente ou problema à altura do personagem | +15 |
| Imersão: período livre de obrigações, com dedicação exclusiva ao treino | +15 |
| Recuperação comprometida: sono ruim recorrente, descanso interrompido | −15 |
| Corpo comprometido: personagem ferido ou doente, com PV abaixo da metade | −15 |
| Contexto hostil: improviso, deslocamento ativo, clandestinidade | −15 |

A lista é exemplar. O Narrador julga circunstâncias equivalentes pelo mesmo peso, e os documentos de adaptação trazem exemplos na cor de cada cenário. Os degraus positivos descrevem condições genuinamente privilegiadas; os negativos descrevem a vida comum de quem treina no meio de uma campanha. Essa assimetria é fiel ao fenômeno real: condições ruins destroem rendimento com muito mais força do que condições excelentes o elevam.

### Os graus de resultado

O resultado da rolagem cai em quatro graus, pela convenção de margens do sistema:

| Resultado | Grau | Rendimento |
|---|---|---|
| Sucesso com margem de 30 ou mais | Semana de Destrave | ×1.5 |
| Sucesso | Semana Sólida | ×1.0 |
| Falha com margem até 30 | Semana Arrastada | ×0.5 |
| Falha com margem de 31 ou mais | Semana Perdida | ×0.25 |

A Semana Sólida é o treino que rende o que devia. A Semana de Destrave é o episódio raro de absorção total, o período em que a peça encaixa e o personagem atravessa de uma vez o platô que o segurava; além do rendimento maior, ela conta em dobro para a maturação, conforme a seção correspondente. A Semana Arrastada e a Semana Perdida são as semanas em que o corpo não respondeu, o foco não veio ou a técnica insistiu em não sair, e ainda assim depositam: o aprendizado é acumulação, e a prática genuína contribui mesmo quando o praticante sai frustrado. Rendimento zero não existe na tabela de graus. Ele ocorre por uma única via, a falha de consolidação descrita na seção de Recuperação.

---

## O Rendimento

O XP gerado por um Bloco segue uma fórmula única:

```txt
XP do Bloco = Valor Base × Método × Intensidade × Talento × Grau
```

O **Valor Base é 125 XP**, a semana mediana de treino dedicado, e é o número de calibração de todo o sistema de treinamento. O Método vem da escada da próxima seção. A Intensidade é ×1.0 no regime Sustentado e ×1.5 na Sobrecarga. O Talento vem das vantagens do personagem, conforme a seção correspondente. O Grau vem da tabela de resultados. O Bloco Mensal multiplica o resultado final por quatro; o Bloco Dividido entrega metade do resultado a cada um dos dois alvos.

A separação de responsabilidades da fórmula é rígida. A qualidade do treino, expressa em Método, Intensidade e Talento, multiplica o XP e define a expectativa média. As circunstâncias deslocam o limiar da rolagem. O dado entrega o resíduo. Nenhum fator atua nos dois lados ao mesmo tempo.

A dificuldade crescente de evoluir capacidades já altas não aparece na fórmula porque já vive na economia: os custos de atributos, perícias e técnicas crescem com o nível, e cada ponto de XP de treino compra proporcionalmente menos progressão conforme o personagem sobe. A desaceleração natural do aprendizado é cobrada uma única vez, no preço da compra.

---

## O Método

O método é o eixo de qualidade mais forte do treinamento. A pesquisa educacional demonstra que instrução individual com correção contínua chega a dobrar a velocidade de aprendizado em relação à prática solitária, e a escada abaixo representa essa realidade em cinco degraus de natureza distinta, definidos por ficção verificável na mesa:

| Método | Multiplicador | Definição |
|---|---|---|
| Às cegas | ×0.5 | Sem referência alguma: nem modelo, nem registro, nem alguém para observar |
| Autodidata | ×1.0 | Prática solitária com alguma referência: o personagem observou a execução, possui registros ou conhece a forma |
| Treino em conjunto | ×1.3 | Parceiro ou grupo pequeno em nível próximo, com troca real |
| Instrução | ×2.0 | Alguém que domina o alvo além do aluno e o corrige em tempo real |
| Mestre lendário | ×2.0 e acesso | Instrução plena, somada à transmissão do que não se aprende de outra forma |

O critério de entrada no degrau de Instrução é binário: o instrutor enxerga os erros do aluno e os corrige no momento em que acontecem. O valor de um instrutor está no diagnóstico e no feedback, e é por isso que a escada não cresce com a distância de habilidade entre mestre e aluno; acima do ponto em que o instrutor lê tudo o que o aluno faz, habilidade adicional não acelera mais ninguém. Quem orienta sem esse domínio conta como Treino em conjunto.

O Mestre lendário multiplica o mesmo ×2.0 da Instrução e se distingue pelo **acesso**: caminhos, transcendências, técnicas e patamares que o cenário marca como fechados só se abrem pela mão de quem já os atravessou. O degrau máximo do método não infla número; abre portas. O catálogo do que é fechado em cada mundo pertence ao documento de adaptação.

O degrau Às cegas descreve a fronteira: o personagem que desenvolve algo que ninguém domina, sem modelo e sem registro, paga o preço estrutural do pioneiro. Criar o novo custa o dobro de aprender o existente, e é a rolagem do Bloco que dá textura a essa jornada, com suas semanas perdidas e seus destraves.

O método não é escolha livre do jogador: é estado da ficção confirmado pelo Narrador, exatamente como o próprio período de treino. Instrutores existem, cobram e têm agenda conforme o mundo diz que sim, e a escassez de mestres é matéria narrativa de cada cenário.

Vantagens de supervisor, aquelas que melhoram o treino de outros (como Treinador Nato e Mentor Inspirador no documento de vantagens), atuam como multiplicadores adicionais no Bloco do aliado supervisionado e acumulam com o Método, pois modelam a qualidade de quem ensina, uma ficção distinta do talento de quem aprende.

---

## A Intensidade

A intensidade tem dois regimes, declarados na abertura do Bloco.

O regime **Sustentado** (×1.0) é o padrão: treino sério, exigente e mantível indefinidamente, porque respeita a capacidade de recuperação do organismo.

A **Sobrecarga** (×1.5) é o pulso deliberado além do limite, o organismo empurrado a um patamar que ele não sustenta. A fisiologia real reconhece o fenômeno: períodos curtos de sobrecarga intencional, fechados com recuperação planejada, produzem picos de adaptação que o treino uniforme não alcança. O gênero eleva a magnitude e mantém a lógica, e a regra faz o mesmo em três frases. A Sobrecarga dura no máximo dois Blocos consecutivos. Ela exige fechamento com um Bloco de Recuperação, uma semana sem treino naquele corpo de esforço. Violar qualquer uma das duas condições, seja esticando ao terceiro Bloco, seja pulando a recuperação, causa o **Colapso**: o Bloco em curso rende zero por falha de consolidação, e o personagem recebe Exaustão pelo Sistema de Efeitos de Status, em grau definido pelo Narrador conforme a extensão do abuso, persistindo até recuperação completa.

Não existe portão de atributo para a Sobrecarga. A escolha é livre e as consequências são o preço. O multiplicador atua no XP, e não no limiar, porque intensidade é aposta do jogador, não estado do mundo: ela amplifica o que o dado der, inclusive a semana ruim. O ciclo completo de Sobrecarga bem executada, dois Blocos intensos e um de recuperação, rende em média o mesmo que três semanas sustentadas. O pulso não é vantagem de longo prazo; é ferramenta de prazo, para quem precisa do ganho antes do evento que se aproxima e aceita a semana parada depois.

---

## A Recuperação

O ganho do treino acontece na recuperação, não durante o esforço. É no descanso e no sono que o organismo consolida o que a prática degradou e depositou, e por isso todo Bloco pressupõe o mínimo de consolidação: dormir, comer e descansar entre as sessões da semana.

Quando nem esse mínimo existe, a semana simplesmente não conta como Bloco. Personagem com PV abaixo de um quarto do máximo, sob privação contínua de sono, em marcha forçada permanente ou em cativeiro sem condições básicas não abre Bloco naquela semana. Esta é a única via de rendimento zero do sistema de treinamento, e ela é condição narrativa, nunca resultado de dado.

---

## O Talento

O talento é real e se manifesta como velocidade de aquisição: o talentoso aprende pelo mesmo mecanismo que todos, em taxa maior. No sistema, ele entra como o termo Talento da fórmula, alimentado pelas vantagens de aprendizado do personagem.

A regra do termo é uma: **aplica-se o maior modificador de rendimento de treino aplicável ao alvo do Bloco, nunca a soma**. Qualquer vantagem, presente ou futura, que conceda bônus de XP de treino disputa esse único slot, e duas mecânicas jamais pagam duas vezes pela mesma aptidão. Desvantagens de rendimento são a exceção espelhada: penalidades sempre se aplicam e multiplicam o resultado do slot, porque talento e dificuldade coexistem na mesma pessoa.

As duas vantagens globais de talento do sistema, descritas em detalhe no documento de vantagens, expressam as duas formas reais do fenômeno:

**Prodígio** é o talento agudo: uma afinidade profunda com uma categoria inteira de perícias, que multiplica por **×1.5** o rendimento de Blocos cujo alvo pertence à categoria. É comprável separadamente por categoria, e modela o padrão dominante do talento real, que é específico de domínio.

**Genialidade** é o talento difuso: a mente que aprende rápido sem respeitar fronteira de categoria, multiplicando por **×1.2** o rendimento de qualquer Bloco. Mais rara, mais cara e mais fraca em cada área individual que o talento agudo, exatamente como na realidade.

Quando ambas se aplicam ao mesmo Bloco, vale a regra do maior: ×1.5, nunca ×1.8. O talento acelera visivelmente e compra cada vez menos progressão conforme os custos da economia sobem, o que reproduz sem regra adicional a compressão real da vantagem do gênio em níveis altos: prodígios chegam antes, e o topo continua custando anos de estrada para todos.

Modificadores de custo de XP (descontos e sobretaxas na compra de atributos, perícias e técnicas) pertencem à economia e não tocam a fórmula do Bloco. O manual de treinamento governa exclusivamente o rendimento.

---

## Pressão Real

O que a aventura ensina diretamente não passa pelo Bloco. Combate genuíno, missão com consequência real e o uso de uma capacidade sabendo que o fracasso cobra na hora geram aprendizado de uma qualidade que nenhum treino controlado replica, e a Pressão Real é a forma que esse aprendizado toma: XP direcionado, concedido pelo Narrador após o evento, indo integralmente para a capacidade que esteve sob risco.

| Patamar | Concessão | Gatilho |
|---|---|---|
| Prova | 125 XP | A capacidade foi usada em situação onde falhar tinha custo real e imediato |
| Provação | 500 XP | A capacidade foi o centro de um evento que marca o arco: a luta decisiva, o fracasso transformador, o limite atravessado |

A Provação vale um mês de treino mediano concentrado em um único evento, a proporção correta do gênero: o salto em batalha supera semanas de prática controlada, sem substituir a progressão estrutural, que continua vindo das concessões livres de arco.

A Pressão Real é parte do orçamento de XP do arco, registrada em separado apenas por ser direcionada. O Narrador que planeja 3.000 XP para um arco com duas Provas e uma Provação está concedendo 2.250 livres e 750 direcionados, nunca a soma dos dois valores por cima do orçamento.

### A Janela de Plasticidade

Eventos intensos elevam a plasticidade do organismo, e o treino que se segue a eles rende além do normal. Após uma Provação, o primeiro Bloco cujo alvo se conecta ao evento tem o grau da rolagem elevado em um degrau: a Semana Perdida vira Arrastada, a Arrastada vira Sólida, a Sólida vira Destrave. É o personagem que sai da derrota e destrava no treino seguinte o que não saía antes. A Prova não concede Janela; apenas a Provação, mantendo o efeito raro e dramático.

---

## A Maturação

Dominar uma arte exige, além de recursos, tempo vivido dentro dela. Internalização profunda não se compra e não se comprime, e a maturação é a régua desse tempo, medida no que importa: Blocos dedicados ao alvo, e não calendário parado.

Cada nível de perícia exige, além do XP e do requisito de atributo, um mínimo de Blocos acumulados naquele alvo desde o nível anterior:

| Compra | Blocos dedicados desde o nível anterior |
|---|---|
| LV1 | 2 |
| LV2 | 4 |
| LV3 | 6 |
| LV4 | 8 |
| LV5 | 10 |
| LV6 | 12 |

O caminho completo até o LV6 soma 42 Blocos vividos na perícia, dez meses de prática real distribuídos pela campanha. Caminhos extras exigem 4 Blocos dedicados ao caminho; transcendências extras exigem 8. A progressão fecha em três eixos independentes, XP, atributo e tempo vivido, e nenhuma otimização compra os três de uma vez.

Atributos não têm maturação. O corpo cresce no ritmo que o XP paga, e o gargalo temporal do sistema vive onde a ficção o coloca, na internalização técnica.

Conta para a maturação todo Bloco cujo alvo é a perícia, inclusive a Semana Perdida, porque tempo vivido na prática é tempo vivido mesmo quando rende pouco. A **Semana de Destrave conta como 2 Blocos**: o destrave é exatamente a peça que encaixa antes do previsto. O Bloco Dividido conta meio Bloco para cada alvo. E o campo também matura: cada **Prova conta 1 Bloco** e cada **Provação conta 4**, para a capacidade que esteve sob risco. O personagem forjado em combate avança a maturação sem pisar em sala de treino, e a regra jamais pune quem vive a campanha em vez de treinar.

O registro da maturação é uma linha por capacidade em desenvolvimento na ficha, somando Blocos e eventos de Pressão Real. É o único rastreio persistente do sistema de treinamento, e ele responde uma pergunta com peso real na mesa: há quanto tempo esse personagem vive essa arte.

---

## Calibração e Orientações ao Narrador

A tabela abaixo resume o comportamento esperado da regra, para leitura rápida e auditoria:

| Limiar | Rendimento médio por Bloco |
|---|---|
| 20 (duas circunstâncias contra) | ×0.48 do Valor Base |
| 35 (uma circunstância contra) | ×0.61 |
| 50 (neutro) | ×0.80 |
| 65 (uma circunstância a favor) | ×0.99 |
| 80 (duas circunstâncias a favor) | ×1.15 |

Cenários de referência em um mês de quatro Blocos, no regime Sustentado e sem talento:

| Cenário | XP mensal esperado |
|---|---|
| Autodidata em condições neutras | ~400 |
| Instrução em condições neutras | ~800 |
| Instrução com duas circunstâncias a favor | ~1.150 |

Com talento de área e Sobrecarga pontual, o mês excepcional se aproxima de 1.700 XP. Contra os custos vigentes da economia, essas faixas produzem o ritmo pretendido: o mês dedicado com instrutor compra um nível inicial de perícia, a promessa clássica do arco de treinamento; a maestria de topo exige a maior parte de um ano de treino continuamente otimizado, cenário que a disponibilidade de mestres, a variância do dado e a vida da campanha tornam raro; e o ano inteiro de treino mediano rende cerca de 5.000 XP, o suficiente para aprofundar o que existe sem jamais reconstruir um personagem sozinho.

Três orientações mantêm a hierarquia do sistema auditável:

**As concessões livres de arco devem superar o rendimento de treino do mesmo período de calendário.** A aventura é a fonte maior de desenvolvimento por design, e essa relação é verificável comparando o XP concedido por arco com o que o downtime do mesmo período rendeu.

**A soma de Pressão Real de um arco deve caber dentro do orçamento de XP do arco**, nunca por cima dele, conforme a seção de Pressão Real.

**O Valor Base é o único botão de calibração.** Se o ritmo de progressão da mesa pedir ajuste, para cima ou para baixo, altera-se o Valor Base e nada mais. Toda a estrutura de multiplicadores, limiares e graus permanece intacta em qualquer calibração.

---

## Fronteira com os Documentos de Adaptação

Este manual contém a regra universal completa: o Bloco e suas variantes, a rolagem com circunstâncias e graus, a fórmula de rendimento e o Valor Base, a escada de Método com a regra de disponibilidade, os regimes de Intensidade com o Colapso, a condição de Recuperação, o termo Talento com as vantagens globais, a Pressão Real com a Janela de Plasticidade, e a Maturação. Nada aqui cita cenário algum, e nenhum documento de adaptação altera o que está escrito aqui.

Cada cenário pluga no manual por um documento de adaptação próprio, responsável por: enumerar os alvos válidos de Bloco daquele mundo e suas categorias; traduzir a escada de Método nas instituições do cenário; catalogar as portas que o Mestre lendário abre; definir os métodos de treino especiais do mundo e seu tratamento mecânico; exemplificar a tabela de circunstâncias na cor local; declarar as interfaces com os sistemas de desenvolvimento próprios do cenário; e calibrar a Pressão Real com os eventos arquetípicos daquele mundo. A fronteira é rígida: regra universal aqui, cor e conteúdo lá.
