---
id: core.status-effects
title: "Sistema de Efeitos de Status"
version: 2.9
layer: core
type: system
status: final
source-file: Sistema_de_Efeitos_de_Status_v2.md
---

# Sistema de Efeitos de Status · Manual Completo

Documento único e autossuficiente. Reúne os efeitos **nativos** (sempre ativos) e os
**opcionais** (ativados pelo Mestre conforme o cenário), com os números já harmonizados
com o sistema de combate. Para usar, basta este arquivo.

## Nota de Calibração e Integração

- **DoT (dano contínuo)** tem duas bases legítimas, conforme a origem: dano do golpe
  dividido pelo divisor do tipo (efeitos de golpe físico, como Sangramento e Queimadura)
  ou atributo do causador multiplicado por fator (efeitos de fonte, como Veneno e Tóxico).
  Nenhum DoT usa porcentagem de PV máximo, o Congelamento, que antes usava, foi convertido
  para a base de atributo do causador.
- **Testes secundários com dificuldade fixa** (agir contra o efeito, resistir a uma
  compulsão, etc.) usam a fórmula simples do sistema: limiar igual a (atributo dividido
  pela dificuldade) multiplicado por 50. Isso já escala sozinho, atributo maior resiste
  mais fácil, sem precisar de número diferente por faixa.
- **Reduções de atributo** seguem 15, 30, 50 e 70 por cento por grau, sobre o valor atual.
- **Fonte sem teste de resistência** é vetor legítimo, e os efeitos automáticos derivados
  de recurso perdido ou de acúmulo já operavam assim. A Petrificação passou a admitir o
  vetor de processo interno, em que a transformação nasce da operação que o próprio
  personagem executa sobre o próprio corpo e o grau se instala pela régua da fonte.
- **Riders de vetor** entram na v2.7, pelo motor que o Núcleo de Combate publica. Cada
  vetor carrega um rider estrutural, que nenhuma obra remove, e um rider padrão, que a
  obra substitui declarando outro. A Secção é o estrutural do Corte e o Sangramento é o
  padrão dele; a Perfuração é o estrutural da Penetração e a Hemorragia de Trajeto é o
  padrão dela; no vetor Energia os dois dependem do tipo de energia entregue, e o cenário
  os publica junto da tabela de Assinatura. O vetor Impacto não tem rider estrutural, por
  decisão de desenho registrada na própria seção dele.
- **Os pares de atributos punidos não competem entre si.** A Queimadura pune INT e SAB, a
  Perfuração pune FOR e VEL, a Secção pune DES e DEF, e o Sangramento pune RES sozinha.
  Fogo cozinha a cabeça, ponta estraga o motor, fio estraga a estrutura, e perda de sangue
  tira sustentação. Nenhum par se repete, e é essa separação que impede o empilhamento de
  condições sobre o mesmo atributo quando um alvo carrega mais de um rider ao mesmo tempo.
- **Rider substituído por natureza intensificada** é regra geral desde a v2.5, publicada
  logo após as Regras Universais de Aplicação, com registro próprio dos casos vigentes.
  Antes dela a troca corria caso a caso dentro de cada documento de natureza, o que
  deixava escopo, grau e vetor de teste sem forma fixa.

A partir daqui, os efeitos nativos; ao final, os opcionais.

---

# EFEITOS NATIVOS


### Identidade dos Graus

Todo efeito de status neste sistema possui exatamente quatro graus. Essa regra não tem exceção entre os efeitos nativos. Cada grau representa um estado funcional distinto, com identidade própria além do número que o nomeia.

Grau Leve significa que o personagem funciona mas sente. A condição está presente, tem custo real, mas não remove capacidades.

Grau Moderado significa que o personagem ainda age mas com custo real e visível. O desempenho está comprometido de forma que qualquer observador nota.

Grau Grave significa que a função está severamente comprometida. O personagem luta para executar o que antes era automático.

Grau Crítico significa que a função foi removida ou está em colapso iminente. Sem intervenção, a condição ameaça a continuidade do personagem no combate ou na vida.


### Regras Universais de Aplicação

O alvo do teste de resistência é calculado conforme o tipo de fonte.

Para golpes físicos: atributos da vítima multiplicados por (1 menos dano dividido pelo PV máximo da vítima).

Para técnicas ativas com custo de chakra: atributos da vítima multiplicados por (1 menos a RC nominal da técnica dividida pela RC máxima do atacante). A grandeza lida é a RC nominal, e não o custo pago, porque o desperdício do executor não alcança o alvo.

Para presença passiva ou aura: teste oposto. Causador rola o atributo relevante, vítima rola o seu. A margem de vitória do causador determina o grau.

Para imposição de genjutsu: o motor de imposição publicado na perícia Genjutsu, que opõe a soma de VON e SAB da vítima, comprimida pelo investimento de RC do praticante e pela eficiência derivada do teste daquela perícia. Sempre que a fonte for genjutsu, este motor governa o par de atributos testado e a leitura de grau, prevalecendo sobre o par declarado na entrada do efeito, que segue válido para as demais fontes. As entradas alcançadas por esta regra são Confusão, Alucinação, Medo, Terror, Pânico, Paranoia, Sono e Provocação Forçada. Intimidação Gravada e Trauma Psicológico não são impostas no ato por genjutsu, e chegam apenas pela persistência declarada no caminho Verossimilhança daquela perícia.

A vítima rola 1d100 e precisa tirar menos que o alvo calculado para resistir. A margem de falha determina o grau dentro do range permitido pela fonte.

Margem de falha entre 1 e 15 resulta em Grau Leve.
Margem de falha entre 16 e 30 resulta em Grau Moderado.
Margem de falha entre 31 e 50 resulta em Grau Grave.
Margem de falha de 51 ou mais resulta em Grau Crítico.

A fonte declara o grau mínimo garantido e o grau máximo possível. A margem de falha posiciona o efeito dentro desse range.


### Rider Substituído por Natureza Intensificada

O rider natural de cada Tipo Elemental é propriedade passiva publicada pelo Sistema Elemental, e a técnica que o declara aplica aquele efeito e nenhum outro. A camada de intensificação abre a exceção. Uma Kyōka, ou a inclinação e o caminho que nascem dela dentro da perícia hospedeira, troca o rider natural do elemento base por outro efeito deste catálogo quando a manifestação muda o vetor pelo qual a técnica fere.

A troca é substituição e permanece substituição. O rider trocado deixa de se aplicar por completo, uma entrega carrega um rider por vez, e nenhuma leitura soma os dois. Quando duas fontes do mesmo praticante declararem substituições diferentes sobre a mesma entrega, vale a do caminho pelo qual a técnica foi resolvida.

O documento que declara a substituição publica cinco coisas, e a substituição vale apenas quando as cinco estão escritas: qual rider sai, qual entra, o escopo alcançado, seja a técnica declarada, o caminho inteiro ou a natureza toda, o grau mínimo garantido e o grau máximo possível do rider que entra, e os atributos testados por ele. O alvo do teste segue o vetor do rider que entra e não o do que sai, porque quem resiste resiste ao que está sofrendo. O escopo pode nomear a inclinação inteira em vez de um caminho só, quando o documento hospedeiro declarar a troca como propriedade de toda técnica da natureza intensificada e não de uma habilidade paga à parte; nesse caso o grau mínimo garantido e o máximo possível continuam os que a ficha de cada técnica executada já publica, porque a troca muda qual rider se aplica e não a régua de grau dele.

Registro de casos publicados:

| Natureza intensificada | Hospedeira | Rider natural | Rider substituto | Escopo |
|---|---|---|---|---|
| Shiton, Incandescência | Perícia de Katon, inclinação Brasa | Queimadura | Cegueira | caminho Fulgor |
| Shinton, Sísmico | Perícia de Doton, inclinação Sismo | Imobilização | Atordoamento | inclinação Sismo inteira |

A tabela nasce com uma linha e recebe as demais conforme os documentos de natureza intensificada as publiquem. Substituição praticada por documento que não conste dela é erro do documento e entra na fila de errata. Elevação de grau do rider herdado não é substituição e não entra aqui.

### Regras Universais de Remoção

O teste de remoção usa os mesmos atributos do teste de aplicação, sem a fórmula proporcional. O grau determina a dificuldade.

Grau Leve: teste normal dos atributos relevantes por turno.
Grau Moderado: teste com modificador Leve no alvo (multiplicado por 0,9).
Grau Grave: teste com modificador Moderado no alvo (multiplicado por 0,8) mais ação completa dedicada.
Grau Crítico: sem teste automático. Exige intervenção externa ativa, aliado, item, ou técnica de cura.


### Regras de Redução de Atributo

Todo efeito que reduz atributo usa as seguintes porcentagens por grau.

Grau Leve reduz em 15 por cento.
Grau Moderado reduz em 30 por cento.
Grau Grave reduz em 50 por cento.
Grau Crítico reduz em 70 por cento.

A redução aplica sobre o valor atual do atributo, não o original. Efeitos acumulados no mesmo atributo aplicam em cadeia. Nenhum atributo cai abaixo de 1 por efeitos de status.

Efeitos de grau diferente no mesmo atributo: apenas o maior se aplica.


REGRAS DE MODIFICADORES POR ESTADO PRE-EXISTENTE

Condições pré-existentes penalizam o alvo do teste antes do roll.

Severidade Leve: alvo atual multiplicado por 0,9.
Severidade Moderada: alvo atual multiplicado por 0,8.
Severidade Grave: alvo atual multiplicado por 0,7.

Condições múltiplas aplicam em cadeia sobre o valor já reduzido.

Referencias de severidade: mesmo efeito já ativo é Leve. Exaustão de Chakra Leve é Leve para qualquer efeito resistido por técnica, Moderada é Moderada, e Grave ou Crítica é Grave. Exaustão Física nível 1 é Leve para qualquer efeito físico. Exaustão Física nível 2 é Moderada. Exaustão Física nível 3 ou 4 é Grave. Lesão pré-existente na área é Moderada. Fratura no mesmo membro é Grave. Fadiga nível 1 é Leve para qualquer efeito. Fadiga nível 2 é Moderada. Fadiga nível 3 ou 4 é Grave. Trauma Psicológico ativado é Moderada para efeitos mentais e psicológicos.


## FAMÍLIA I · DANO CONTÍNUO

Efeitos que causam perda de recurso ao longo do tempo. O valor da perda por turno é fixo no momento da aplicação e não muda enquanto o efeito estiver ativo. O grau determina os efeitos secundários, a dificuldade de remoção e o ritmo de progressão.

Regra de valor base para efeitos derivados de golpe físico: dano causador dividido pelo divisor do tipo declarado, gerando a perda por turno.

Regra de valor base para efeitos derivados da fonte: atributo relevante do causador multiplicado por fator declarado.


### Sangramento

Um ferimento aberto drena sangue continuamente. O que sofre primeiro é a resistência e a capacidade de sustentar esforço. A força bruta só cede em perdas mais severas, quando a queda de oxigenação alcança diretamente o funcionamento muscular.

É o rider padrão do vetor Corte, e a obra que sela o canal ao atravessá-lo o substitui pelo rider que a selagem produzir.

Fonte: golpe físico cortante ou perfurante.
Atributos testados: RES + FOR
Alvo do teste: (RES + FOR) x (1 - dano / PV máximo da vítima)
Valor base do DoT: dano causador dividido por 10 em PV perdido por turno.

O Sangramento acumula num número único. Cada corte novo soma a própria taxa ao número que já corre, e o alvo perde por turno o total acumulado, sem que a mesa mantenha uma lista de sangramentos separados. Estancar custa Ação Completa e corta o número pela metade, e é a única saída: não existe teste de remoção por turno, porque a ferida aberta não fecha por vontade.

Grau Leve: apenas o DoT base. O corpo ainda compensa a perda mínima sem penalidade de atributo.

Grau Moderado: DoT base mais redução de 15% em RES. A resistência cede porque é ela que sustenta a circulação sob esforço.

Grau Grave: DoT base mais redução de 30% em RES. Movimento amplo custa PS adicional.

Grau Crítico: DoT base mais redução de 50% em RES. O personagem está perdendo sangue em velocidade que compromete o funcionamento físico completo. Risco iminente de Exsanguinação. Exige tratamento ativo externo obrigatório.

Notas: a redução alcança apenas RES. A perda de sangue é perda de sustentação, e a força bruta pertence aos pares dos riders estruturais, que este efeito não disputa. Alvo sem sangue não sangra, e a Secção continua valendo sobre ele. A fonte pode alterar o divisor de 10 para 7 em armas especialmente letais, declarado na descrição da fonte.


### O vetor Impacto e a ausência de rider estrutural

O Impacto não possui rider estrutural, e a ausência é decisão de desenho e não pendência em aberto.

Os outros três vetores compram o rider estrutural pagando alguma coisa. A Penetração contorna a Guarda e por isso não drena o fôlego do defensor, o Corte engaja apenas a fração que o Grau do Fio deixa, e a Energia ignora a barra por irrelevância mas gasta reserva limitada pelo Limite de Saída. O Impacto não paga nenhuma dessas contas: ele engaja a barra inteira sem desconto, é o único vetor que dispara a Quebra de Guarda, e é o que mais converte dano em PS perdido pelo defensor. Somar a isso um rider estrutural daria uma quarta vantagem a quem já carrega três, e o desequilíbrio apareceria exatamente no vetor mais comum da mesa.

A Fratura permanece no catálogo e continua disponível como rider declarado pela obra, junto de qualquer outra condição deste documento. O que a obra de Impacto não recebe é um rider que dispare sozinho por ser Impacto.

Este registro existe para que auditoria futura não leia a ausência como esquecimento. A pergunta já foi feita e respondida, e reabri-la exige decisão de desenho nova e não leitura de lacuna.


### Secção

O fio separa o tecido ao longo de uma linha, e o que se perde primeiro é a estrutura que sustentava o movimento. Articulação aberta, tendão seccionado e músculo dividido tiram do corpo a precisão e a capacidade de firmar a defesa, muito antes de tirarem a força.

É o rider estrutural do vetor Corte. Nenhuma obra o remove, e ele acompanha toda entrega que empregue o vetor, venha ela de aço ou de chakra moldado em lâmina.

Fonte: automática em golpe de vetor Corte que alcance o PV.
Atributos testados: RES + DEF
Alvo do teste: (RES + DEF) x (1 - dano / PV máximo da vítima)

Grau Leve: redução de 15% em DES e DEF. Sem sequela após remoção.

Grau Moderado: redução de 30% em DES e DEF. Após remoção, redução de 15% em DES e DEF persiste até tratamento.

Grau Grave: redução de 50% em DES e DEF. A função do membro atingido fica comprometida até tratamento específico, e ações que dependam dele resolvem com o modificador da severidade.

Grau Crítico: redução de 70% em DES e DEF, e decepamento do membro atingido. Gera Ferimento Grave permanente e exige tratamento especializado obrigatório.

Notas: a localização do membro é narrativa do Mestre, sem grandeza nova, conforme a decisão publicada no motor de vetores. Alvo sem sangue sofre Secção normalmente, porque o que ela mede é estrutura e não circulação.


### Perfuração

A ponta entra por superfície mínima e abre trajeto em profundidade. O que falha é o motor do corpo, porque o canal atravessa fibra, feixe nervoso e inserção muscular sem separá-los ao longo de uma linha, e o membro perde a capacidade de puxar e de acelerar.

É o rider estrutural do vetor Penetração. Nenhuma obra o remove, e ele sempre dispara em golpe que alcance o PV.

Fonte: automática em golpe de vetor Penetração que alcance o PV.
Atributos testados: RES + DEF
Alvo do teste: (RES + DEF) x (1 - dano / PV máximo da vítima), empurrado pelo Grau do vetor conforme a fonte declarar

Grau Leve: redução de 15% em FOR e VEL. Sem sequela após remoção.

Grau Moderado: redução de 30% em FOR e VEL. Após remoção, redução de 15% em FOR e VEL persiste até tratamento.

Grau Grave: redução de 50% em FOR e VEL. A função do membro atingido fica comprometida até tratamento específico.

Grau Crítico: redução de 70% em FOR e VEL, e Ferimento Grave permanente. Trajeto no tronco alcança órgão, e o tratamento especializado passa a ser obrigatório e imediato.

Notas: a localização do membro é narrativa do Mestre. O Grau do vetor que a fonte declara empurra o alvo do teste, porque a mesma ponta entrega pressão diferente conforme o corpo que a acompanha.


### Hemorragia de Trajeto

O canal aberto sangra por dentro, ao longo de toda a profundidade que a ponta alcançou. A perda é menor que a de um corte na superfície e não para sozinha, porque não existe superfície onde aplicar pressão.

É o rider padrão do vetor Penetração, e a obra que cauteriza o canal ao atravessá-lo o substitui declarando outro.

Fonte: golpe de vetor Penetração que alcance o PV.
Atributos testados: RES + DEF
Alvo do teste: (RES + DEF) x (1 - dano / PV máximo da vítima)
Valor base do DoT: dano causador dividido por 20 em PV perdido por turno.

**Exceção declarada ao ciclo de vida de riders.** A Hemorragia de Trajeto nunca sai por ação do próprio afetado, em grau nenhum, porque o sangramento é interno e nenhuma pressão o alcança. Ela exige ninjutsu médico em qualquer grau, e é a única exceção do sistema à regra de que o afetado sempre pode gastar a própria ação para se limpar.

Grau Leve: DoT base.

Grau Moderado: DoT base, e o esforço sustentado o agrava, com o número dobrando enquanto o afetado gastar Esforço acima do Limiar.

Grau Grave: DoT base, e a perda alcança o desempenho, com modificador Moderado no alvo de todo teste físico do afetado.

Grau Crítico: DoT base, risco iminente de Exsanguinação, e o quadro não estabiliza sem intervenção médica dedicada.

Notas: a taxa mais baixa das três de dano contínuo por golpe é deliberada e espelha a forense. A incisão sangra mais por fora, a estocada sangra menos por fora e não para.


### Queimadura

Calor destrói tecido e sobrecarrega o sistema nervoso de dor. O dano físico contínuo é menor que o do Sangramento, mas a dor tem custo cognitivo real e imediato. Queimaduras profundas deixam sequelas mesmo depois do fogo apagado.

Fonte: calor, fogo, ácido, energia cauterizante.
Atributos testados: RES + FOR
Alvo do teste: (RES + FOR) x (1 - dano / PV máximo da vítima)
Valor base do DoT: dano causador dividido por 15 em PV perdido por turno. O divisor maior que o Sangramento reflete que parte do impacto vai para penalidade cognitiva.

Grau Leve: DoT base mais redução de 15% em INT e SAB. A dor atrapalha o pensamento mas o personagem ainda funciona. Sem sequela após remoção.

Grau Moderado: DoT base mais redução de 30% em INT e SAB. Após remoção do DoT, redução de 15% em INT e SAB persiste até descanso longo.

Grau Grave: DoT base mais redução de 50% em INT e SAB. Após remoção, redução de 30% em INT e SAB persiste até tratamento específico.

Grau Crítico: DoT base mais redução de 70% em INT e SAB. Gera Ferimento Grave Moderado permanente no membro afetado mesmo após remoção completa do DoT. Tratamento especializado obrigatório.


### Veneno

Uma substância hostil circula pelo organismo e o degrada de dentro. A intensidade não depende do golpe que entregou o veneno mas da potência da substância. Uma agulha fina pode carregar o veneno mais letal. O Veneno progride em estágios se não for tratado.

Fonte: substância tóxica via contato, ingestão ou golpe veículo. O dano do golpe é irrelevante para o cálculo.
Atributos testados: RES + FOR
Alvo do teste para veneno de criatura: teste oposto. Criatura rola FOR ou RES, vítima rola RES + FOR.
Alvo do teste para veneno mágico: (RES + FOR) x (1 - RC nominal da técnica / RC máxima do atacante)

Valor base do DoT por estágio: estágio 1 é RES do causador multiplicado por 0,5 em PV por turno. Estágio 2 é RES do causador multiplicado por 1,0. Estágio 3 é RES do causador multiplicado por 1,5. Para venenos mágicos, substitui RES por INT do causador.

Grau Leve: começa no estágio 1. Avança para o próximo estágio a cada 4 turnos sem remoção. Apenas DoT, sem penalidade adicional.

Grau Moderado: começa no estágio 1. Avança a cada 3 turnos. Redução de 15% em RES.

Grau Grave: começa no estágio 2. Avança a cada 2 turnos. Redução de 30% em RES e 15% em FOR.

Grau Crítico: começa no estágio 3. Avança a cada turno. Redução de 50% em RES e 30% em FOR.

Notas: Leve e Moderado removem pela regra universal. Grave e Crítico exigem antídoto específico ou purificação ativa. Descanso não remove Grave ou Crítico.


## FAMÍLIA II · CORPO e MOBILIDADE

Efeitos que comprometem a capacidade física. A distinção central desta família é entre comprometimento de atributo, que é proporcional e escalável, e remoção de capacidade, que é absoluta e independente de qualquer valor de atributo.


### Lentidão

O personagem não consegue se mover na velocidade normal. O impacto vai além do deslocamento porque VEL alimenta Esquiva e Reação em cascata. Toda a capacidade de resposta temporal sofre junto.

Fonte: físico ou mágico.
Atributos testados: VEL + RES
Alvo do teste físico: (VEL + RES) x (1 - dano / PV máximo da vítima)
Alvo do teste para técnica: (VEL + RES) x (1 - RC nominal da técnica / RC máxima do atacante)
Atributo afetado: VEL. Afeta Esquiva (VEL + DES) e Reação (VEL + SAB) automaticamente em cascata.

Grau Leve: redução de 15% em VEL. O personagem nota a diferença mas ainda age razoavelmente. Duração de 3 turnos.

Grau Moderado: redução de 30% em VEL. O impacto em combate é claro. Ação de movimento custa PS adicional. Duração de 3 turnos.

Grau Grave: redução de 50% em VEL. Mover-se exige esforço consciente. Qualquer ação de movimento exige teste de VEL vs 40 ou falha. Duração de 4 turnos.

Grau Crítico: redução de 70% em VEL. O personagem mal consegue se deslocar. Máximo de 1 ação de movimento por turno independente de habilidades. Duração de 4 turnos.


### Imobilização

O personagem está fisicamente preso por restrição externa. A causa é mecânica e externa ao corpo: a mente funciona, técnicas sem componente físico funcionam, e o corpo permanece onde está. Quebrar a restrição pela força é o caminho central de saída.

Fonte: restrição física externa, correntes, raízes, técnicas de ancoragem. A manobra Agarrar do Núcleo de Combate é uma via de aplicação declarada.
Atributos testados: FOR + RES
Alvo do teste: (FOR + RES) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: movimento amplo bloqueado. Tudo mais funciona normalmente. Quebra por força com teste FOR + RES normal, custando ação completa.

Grau Moderado: apenas técnicas e ações paradas disponíveis. Quebra por força com modificador Leve no alvo, custando ação completa.

Grau Grave: apenas técnicas sem componente físico disponíveis. Quebra por força com modificador Moderado no alvo, custando ação completa.

Grau Crítico: apenas ações mentais e passivas disponíveis. Quebra por força impossível. Exige condição específica declarada pela fonte.

Notas: sem duração automática. Dura enquanto a fonte mantiver ou até ser quebrada.


### Paralisia Parcial

Um membro específico perde função por razão neurológica ou mágica. A causa é interna. O sinal não chega corretamente ao membro. Difere da Imobilização porque não há nada físico segurando. O personagem age com o resto do corpo normalmente.

Fonte: choque elétrico, impacto severo em nervo, técnica de bloqueio neural.
Atributos testados: RES + FOR
Alvo do teste físico: (RES + FOR) x (1 - dano / PV máximo da vítima)
Alvo do teste para técnica: (RES + FOR) x (1 - RC nominal da técnica / RC máxima do atacante)
Atributos afetados: FOR e DES do membro específico declarado pela fonte.

Grau Leve: redução de 15% em FOR e DES do membro. Tremor visível, imprecisão em tarefas finas. Duração de 2 turnos.

Grau Moderado: redução de 30% em FOR e DES. Ação que exija o membro custa ação adicional. Duração de 3 turnos.

Grau Grave: redução de 50% em FOR e DES. Qualquer ação que exija o membro exige teste de RES vs 40 para ser executada. Duração de 3 turnos.

Grau Crítico: redução de 70% em FOR e DES. Membro sem função prática. Ações que o exijam como componente principal são impossíveis. Duração de 4 turnos.


### Paralisia Total

O corpo inteiro para. A mente continua funcionando completamente. O personagem vê, ouve, pensa, sente, mas não consegue mover um músculo de forma voluntária. Grau mínimo Grave por definição porque Paralisia Total já pressupõe comprometimento severo de todo o sistema motor. Graus menores de comprometimento generalizado são cobertos pela Paralisia Parcial aplicada ao tronco.

Fonte: técnica específica de alto nível, veneno neurológico severo.
Atributos testados: RES + FOR
Alvo do teste: idem à Paralisia Parcial. Range da fonte começa em Grave obrigatoriamente.
Efeito estrutural obrigatório em todos os graus: perde ação de movimento.

Grau Grave: redução de 50% em FOR e DES de todo o corpo. Perde ação de movimento e ação de ataque físico. Apenas ações mentais e técnicas sem componente físico disponíveis.

Grau Crítico: redução de 70% em FOR e DES. Perde o turno inteiro. Apenas reações mentais puramente passivas funcionam.

Notas: remoção pela regra universal com modificador Moderado obrigatório em todos os graus.


### Atordoamento

O impacto foi forte o suficiente para o cérebro precisar de um momento para se reorganizar: o instante em que o sistema reinicia involuntariamente, breve e decisivo. O efeito se resolve por conta própria, sem sequela neurológica.

Fonte: impacto severo na cabeça, explosão próxima, sobrecarga de energia.
Atributos testados: RES + VONTADE
Alvo do teste: (RES + VONTADE) x (1 - dano / PV máximo da vítima)
Efeito instantâneo. Ocorre no turno de aplicação. Sem duração por turno.

Grau Leve: perde ação menor. Esquiva e Reação funcionam normalmente.

Grau Moderado: perde ação completa. Esquiva e Reação com modificador Leve no alvo.

Grau Grave: perde ação completa e ação menor. Apenas Reação disponível com modificador Moderado no alvo.

Grau Crítico: perde o turno inteiro. Sem ação defensiva ativa possível.

Notas: recuperação automática no turno seguinte.


### Queda e Prostração

O personagem está no chão. A posição muda o que está disponível e como os outros interagem com ele. A redução em FOR e DES reflete que agir do chão é mecanicamente desvantajoso. Ataques físicos próximos ficam mais fáceis de acertar. Ataques à distância ficam mais difíceis porque o alvo é menor e mais baixo.

Fonte: derrubada física, explosão, falha de equilíbrio, técnica específica. A manobra Derrubar do Núcleo de Combate é uma via de aplicação declarada.
Atributos testados: VEL + DES
Alvo do teste físico: (VEL + DES) x (1 - dano / PV máximo da vítima)
Alvo do teste para técnica: teste oposto.
Atributos afetados: FOR e DES enquanto na posição.

Grau Leve: no chão mas estável e apoiado. Redução de 15% em FOR e DES. Bônus de 10% no alvo para atacantes próximos. Penalidade de 10% no alvo para atacantes à distância. Levantar não custa ação adicional.

Grau Moderado: desequilibrado, mal apoiado. Redução de 30% em FOR e DES. Bônus de 20% para próximos, penalidade de 20% para distantes. Levantar custa ação menor.

Grau Grave: completamente prostrado. Redução de 50% em FOR e DES. Bônus de 30% para próximos, penalidade de 30% para distantes. Levantar custa ação completa.

Grau Crítico: incapaz de levantar sozinho pela força do efeito. Redução de 70% em FOR e DES. Bônus de 40% para próximos, penalidade de 40% para distantes. Levantar exige auxílio externo ou condição específica.


### Quebra de Guarda

A estrutura montada que sustentava o corpo cedeu de uma vez. O que a Guarda existe para deter chega inteiro enquanto ela não se remonta, e a saída depende de gastar tempo reconstruindo o alinhamento em vez de esperar a recarga sozinha resolver.

Fonte: automática. O Impacto de um golpe supera a Guarda restante do alvo, publicado pelo Núcleo de Combate.

Grau Único: a Guarda vai a zero. Durante a janela, o Bloqueio fica indisponível e o lado defensivo do teste de conexão é multiplicado por 0,8; a Guarda recarrega normalmente pela tabela de Exaustão desde o primeiro turno após a quebra. Dura até o fim do turno seguinte de quem quebrou a Guarda.

Notas: sem escala de margem, porque o gatilho é binário, a Guarda quebra ou não quebra, na mesma leitura que a Paralisia Total restringe a própria faixa de grau por definição. A cláusula de não recarga que esta entrada publicava foi escrita para uma Guarda de valor fixo, em que a quebra era evento raro. Sob a barra consumível do Núcleo de Combate v3 a Guarda zera sempre que um golpe supera a fração que o vetor engajou, o que numa troca física comum acontece toda rodada, e a cláusula se realimentava: a barra em zero garante que o golpe seguinte a supere de novo, e a janela nunca fechava.


### Fratura

O osso está comprometido estruturalmente. O dano persiste, o uso contínuo o agrava, e a saída exige tratamento: o tempo sozinho não resolve. O grau descreve a natureza real da lesão óssea.

Fonte: golpe físico contundente, esmagamento, impacto de alta energia.
Atributos testados: RES + FOR
Alvo do teste: (RES + FOR) x (1 - dano / PV máximo da vítima)
Efeito persistente. Não remove sem tratamento ativo.

Atributos afetados por membro: braço dominante afeta FOR e DES. Braço não dominante afeta FOR e DES com penalidade menor em FOR. Perna afeta VEL e DES. Costelas afetam RES e FOR.

Grau Leve, Fissura: redução de 15% nos atributos do membro. Dor passiva presente. O personagem ainda usa o membro com menor eficiência.

Grau Moderado, Fratura Incompleta: redução de 30%. Osso partido mas alinhado. Ação que exija o membro custa PS adicional.

Grau Grave, Fratura Completa: redução de 50%. Osso deslocado. Ação que exija o membro exige teste de RES vs 40. Falhar na ação causa dano adicional de 10% do PV máximo pela dor aguda do mau uso.

Grau Crítico, Fratura Cominuta: redução de 70%. Osso fragmentado. Membro fora de combate. Tentativa de uso causa dano imediato e pode agravar para condição permanente sem cura especializada.

Notas: Leve e Moderado removem com tratamento simples mais descanso longo. Grave exige tratamento especializado. Crítico exige técnica de cura de rank compatível.


### Exaustão Física

O corpo chegou ao limite do esforço sustentável. A Exaustão corre fora dos motores de Ferimento e de Dano: ela é acúmulo do que foi exigido sem recuperação adequada. A régua de cada grau pertence ao Núcleo de Combate, dono da economia de PS que a deriva, e é publicada aqui porque toda condição de status mora no mesmo catálogo.

Fonte: automática, derivada de PS perdido. Sem teste de aplicação. Cada grau substitui o anterior.

PS entre 50% e 74%: Grau Leve. A Guarda recarrega 40% por rodada, sem redução na Energia, no lado defensivo da conexão, na Cadência ou no deslocamento.

PS entre 25% e 49%: Grau Moderado. A Guarda recarrega 30% por rodada. Redução de 10% na Energia. O lado defensivo da conexão é multiplicado por 0,9. O deslocamento é reduzido em 10%. A Cadência permanece cheia.

PS entre 1% e 24%: Grau Grave. A Guarda recarrega 20% por rodada. Redução de 20% na Energia. O lado defensivo da conexão é multiplicado por 0,8. A Cadência perde uma ação extra. O deslocamento é reduzido em 25%.

PS a 0%: Grau Crítico. A Guarda recarrega 10% por rodada. Redução de 30% na Energia. O lado defensivo da conexão é multiplicado por 0,7. A Cadência não concede ação extra alguma. O deslocamento é reduzido em 50%. O Esforço devido sai do PV, e qualquer ação física complexa exige teste de RES vs 50 ou falha.

Notas: a Absorção não degrada em grau nenhum, e o Fôlego e o Limiar do Núcleo de Combate leem RES, que nenhum grau desta condição reduz. Os percentuais de recarga leem DEF × 5 e nunca a barra máxima, o que mantém o bônus da perícia defensiva fora da recuperação em todos os graus. Descanso curto restaura ao máximo Grau Leve. Descanso longo zera completamente.


## FAMÍLIA III · SENTIDOS

Efeitos que comprometem a percepção. A perda de um sentido remodela como o personagem interage com o combate e o ambiente. Personagens com sentidos alternativos desenvolvidos podem compensar parcialmente porque já treinaram outras formas de percepção.


### Cegueira

O personagem não consegue ver. Tudo que depende de visão para funcionar em combate é afetado. O que muda entre os graus é a extensão da perda visual e o quanto ela compromete as defesas ativas.

Fonte: luz extrema, dano ocular direto, técnica.
Atributos testados: DES + VEL para desviar de fonte luminosa. RES + FOR para dano ocular direto.
Atributo afetado: PRE para fins visuais de combate.

Grau Leve: redução de 15% em PRE visual. Visão periférica e profundidade de campo comprometidas. Sem penalidade em Esquiva.

Grau Moderado: redução de 30% em PRE visual. Esquiva baseada em visão com modificador Leve no alvo.

Grau Grave: redução de 50% em PRE visual. Esquiva baseada em visão com modificador Moderado no alvo.

Grau Crítico: redução de 70% em PRE visual. Visão praticamente nula. Esquiva baseada em visão impossível. O personagem usa PRE + SAB com modificador Grave no alvo para qualquer ação que antes dependia de visão.

Notas: personagens com percepção alternativa desenvolvida reduzem a penalidade de Esquiva em um grau. Leve e Moderado removem pela regra universal. Grave exige tratamento específico. Crítico pode ser permanente dependendo da fonte.


### Surdez

O personagem não ouve. O impacto direto em combate individual é menor que o da Cegueira, mas a perda de coordenação tática com aliados e de percepção auditiva do ambiente cria vulnerabilidades reais.

Fonte: explosão, onda de choque, técnica sonora.
Atributos testados: RES + FOR
Alvo do teste: (RES + FOR) x (1 - dano / PV máximo da vítima)
Atributos afetados: PRE e SAB em contextos de percepção auditiva.

Grau Leve: redução de 15% em PRE e SAB auditivos. Dificuldade em sons distantes e falas sobrepostas.

Grau Moderado: redução de 30%. Coordenação verbal com aliados sofre penalidade de 20% no alvo de testes táticos e sociais dependentes de comunicação.

Grau Grave: redução de 50%. Comunicação verbal completamente impossível. Coordenação de grupo bloqueada.

Grau Crítico: redução de 70%. Surdez completa. Sem percepção auditiva de qualquer natureza.

Notas: Leve e Moderado removem pela regra universal. Grave e Crítico podem ser permanentes dependendo da fonte.


### Mudez

O personagem não consegue vocalizar. Graus mais severos comprometem a própria respiração, tornando o efeito uma ameaça física direta além da comunicação.

Fonte: dano à garganta, técnica de silêncio físico, veneno vocal.
Atributos testados: RES + FOR
Alvo do teste: (RES + FOR) x (1 - dano / PV máximo da vítima)
Efeito estrutural. Remove capacidade vocal. Apenas Grave e Crítico reduzem atributo.

Grau Leve: voz alta bloqueada. Sussurros funcionam. Comunicação discreta ainda possível. Duração de 2 turnos ou até tratamento.

Grau Moderado: toda vocalização bloqueada. Comunicação verbal impossível. Duração de 3 turnos ou até tratamento.

Grau Grave: toda vocalização bloqueada mais respiração prejudicada. Redução de 15% em RES. Duração de 4 turnos ou até tratamento.

Grau Crítico: toda vocalização bloqueada mais asfixia iminente. PS perdido por turno conforme progressão de sufocamento. Sem duração automática. Tratamento urgente obrigatório.


## FAMÍLIA IV · MENTAL e PSICOLÓGICO

Efeitos que comprometem cognição, emoção ou controle voluntário. Esta família tem uma característica única: os efeitos mais severos podem persistir entre sessões como condições narrativas permanentes.

A hierarquia interna é fundamental e deve ser respeitada na aplicação. Medo inibe sem incapacitar. Terror escala para compulsão de fuga. Pânico é o colapso do controle racional. Confusão ataca a cognição diretamente. Sono e Inconsciência removem o personagem por completo. Intimidação Gravada e Trauma Psicológico são as marcas que ficam além do combate.


### Medo

O personagem está com medo de algo específico. Ainda age, ainda luta, ainda decide. Existe uma hesitação real em cada escolha de ir em frente contra a fonte. O Medo não pune ações defensivas ou de fuga. Pune exclusivamente a escolha de agir diretamente contra o que aterroriza.

Fonte: presença aterrorizante passiva ou técnica ativa.
Atributos testados: VONTADE + SAB
Alvo do teste para presença passiva: teste oposto. Causador rola CAR ou FOR, vítima rola VONTADE + SAB.
Alvo do teste para técnica: (VONTADE + SAB) x (1 - RC nominal da técnica / RC máxima do atacante)
Atributos afetados: FOR e PRE apenas em ações diretas contra a fonte.

Grau Leve: redução de 15% em FOR e PRE contra a fonte. Hesitação sutil, ainda superável sem esforço adicional.

Grau Moderado: redução de 30% em FOR e PRE contra a fonte. Hesitação real. Perde iniciativa se a fonte agir no mesmo turno.

Grau Grave: redução de 50% em FOR e PRE contra a fonte. Agir contra a fonte exige teste de VONTADE + SAB vs 40.

Grau Crítico: redução de 70% em FOR e PRE contra a fonte. Agir contra a fonte exige teste e, ao falhar, resulta em Terror Leve imediato.

Notas: o personagem pode encerrar o efeito ao tomar ação direta contra a fonte e superar o alvo original do teste.


### Terror

O medo passou do limiar da hesitação para o da fuga ativa. O personagem está sendo empurrado para longe pela própria biologia. O sistema de fuga foi ativado e está dominando. Afeta todas as ações, não só as dirigidas à fonte. Grau mínimo Leve neste efeito, porém fontes mais fracas raramente chegam a causar Terror. O que diferencia Terror de Medo é o escopo da penalidade: Medo afeta apenas ações contra a fonte, Terror afeta tudo.

Fonte: entidade ou evento de poder extremo.
Atributos testados: VONTADE + SAB
Alvo do teste: idem ao Medo.
Atributos afetados: FOR, PRE e VEL em todas as ações.

Grau Leve: redução de 15% em FOR, PRE e VEL. Fuga é o instinto dominante mas o personagem ainda age conscientemente sem teste adicional.

Grau Moderado: redução de 30% em FOR, PRE e VEL. Agir sem fugir requer teste de VONTADE + SAB vs 35.

Grau Grave: redução de 50% em FOR, PRE e VEL. Se houver caminho de fuga disponível, o personagem tentará usar. Resistir requer teste de VONTADE + SAB vs 50.

Grau Crítico: redução de 70% em FOR, PRE e VEL. Fuga compulsória sem possibilidade de resistência racional. O turno é usado para fugir.

Notas: remoção pela regra universal com modificador Moderado obrigatório em todos os graus.


### Pânico

O controle racional colapsou. O que distingue o Pânico do Terror é que o Terror foge com direção. O Pânico reage de forma errática. O que colapsa primariamente é a cognição e a percepção situacional. A adrenalina está presente mas o sistema que a direciona não está funcionando. FOR e VEL sofrem penalidade menor que INT, SAB e PRE porque o corpo físico ainda está ativo, apenas sem direção. Grau mínimo Leve neste efeito, mas fontes que causam Pânico Leve são raras e representam episódios breves de colapso parcial.

Fonte: colapso psicológico por sobrecarga extrema ou evento traumático.
Atributos testados: VONTADE + SAB
Alvo do teste: idem ao Terror.
Atributos afetados primariamente: INT, SAB e PRE. FOR e VEL sofrem penalidade menor.

Grau Leve: redução de 15% em INT, SAB e PRE. Redução de 5% em FOR e VEL. Ações complexas exigem esforço adicional mas ainda são possíveis.

Grau Moderado: redução de 30% em INT, SAB e PRE. Redução de 15% em FOR e VEL. Técnicas que exijam concentração sofrem penalidade adicional de 20% no alvo.

Grau Grave: redução de 50% em INT, SAB e PRE. Redução de 25% em FOR e VEL. Apenas fuga ou ações puramente instintivas de sobrevivência disponíveis. Técnicas bloqueadas.

Grau Crítico: redução de 70% em INT, SAB e PRE. Redução de 40% em FOR e VEL. Ações completamente erráticas. O Mestre define o que o personagem faz naquele turno.

Notas: remoção pela regra universal com modificador Grave obrigatório. Aliado pode ajudar gastando ação completa, concedendo bônus de 20% no alvo do teste da vítima.


### Intimidação Gravada

O medo ficou registrado no sistema nervoso como resposta condicionada, e passou de reação consciente ao perigo a resposta automática. O personagem pode estar completamente calmo e, ao deparar com o gatilho, a resposta retorna imediata antes de qualquer processamento racional.

Aplicação: narrativa, após evento de terror severo em combate.
Atributos testados: VONTADE + SAB em teste oposto com causador rolando CAR + FOR.

Grau Leve: causa Medo Leve automático no gatilho. Gatilho: apenas presença direta do causador.

Grau Moderado: causa Medo Moderado automático. Gatilho: presença ou menção direta.

Grau Grave: causa Terror Moderado automático. Gatilho: qualquer referência ao causador ou ao evento.

Grau Crítico: causa Pânico Grave automático. Gatilho: situações que lembrem o trauma de forma ampla, definido pelo Mestre.

Notas: remoção apenas por resolução narrativa. Nenhum descanso remove.


### Trauma Psicológico

Mais profundo que a Intimidação Gravada: onde aquela condiciona a resposta a um gatilho específico, esta altera o funcionamento base da psique. Tem efeito passivo permanente além dos gatilhos, presente mesmo nos momentos tranquilos.

Aplicação: narrativa, após violência extrema, perda devastadora ou horror prolongado.
Atributos testados: VONTADE + SAB em teste oposto com a intensidade do evento como referência.

Grau Leve: causa Medo Moderado nos gatilhos. Sem penalidade passiva fora dos gatilhos.

Grau Moderado: causa Terror Leve nos gatilhos. Redução passiva permanente de 10% em VONTADE e SAB até tratamento.

Grau Grave: causa Pânico Leve nos gatilhos. Redução passiva de 20% em VONTADE e SAB. Descanso longo comprometido. PS não recupera completamente.

Grau Crítico: causa Pânico Grave nos gatilhos. Redução passiva de 30% em todos os atributos mentais. Descanso longo não recupera PS completamente. O personagem carrega o peso mesmo fora de combate.

Notas: remoção apenas por resolução narrativa profunda. Grau Crítico pode exigir múltiplas sessões.


### Confusão

A percepção e o raciocínio estão distorcidos. O personagem não está com medo. Está perdido. Não sabe o que é real, não processa a situação com clareza. Nos graus mais severos perde parcialmente o controle sobre suas próprias ações porque o sistema que as dirige está recebendo informações erradas.

Fonte: ilusão, técnica de distorção cognitiva, veneno mental.
Atributos testados: VONTADE + INT
Alvo do teste para técnica: (VONTADE + INT) x (1 - RC nominal da técnica / RC máxima do atacante)
Alvo do teste para veneno mental: teste oposto.
Atributos afetados: INT e SAB.

Grau Leve: redução de 15% em INT e SAB. O personagem nota que algo está errado mas ainda age com relativa clareza. Penalidade em testes de leitura de situação e julgamento.

Grau Moderado: redução de 30% em INT e SAB. Dificuldade real em processar o que acontece. Ações complexas exigem teste de INT vs 40 ou falham.

Grau Grave: redução de 50% em INT e SAB. Percepção severamente distorcida. O Mestre pode sugerir uma ação por turno. A vítima pode recusar testando VONTADE vs 45.

Grau Crítico: redução de 70% em INT e SAB. O personagem não distingue o real do que não é. O Mestre redireciona uma ação por turno sem possibilidade de recusa.

Notas: duração base de 3 turnos. Remoção pela regra universal.


### Sono

Uma pessoa sonolenta não perde metade de todos os atributos. Perde atenção, percepção e reflexos finos. O corpo ainda funciona. Só quando realmente adormece é que a capacidade de agir é removida completamente. Os graus do Sono refletem essa progressão real da consciência para a inconsciência.

Fonte: magia, poção, veneno sedativo, técnica.
Atributos testados: RES + VONTADE
Alvo do teste para técnica: (RES + VONTADE) x (1 - RC nominal da técnica / RC máxima do atacante)
Alvo do teste para substância: teste oposto.

Grau Leve, Sonolento: o personagem luta contra o sono mas está completamente acordado. O que sofre é atenção e percepção, não o corpo. Redução de 20% em PRE e 10% em INT e SAB. Sem penalidade em FOR, VEL ou DES. Qualquer estímulo relevante ou dano encerra o efeito imediatamente. Duração de 2 turnos se não estimulado.

Grau Moderado, Pesado: o personagem está com dificuldade real de manter a consciência. Os reflexos começam a ser afetados porque o processamento sensorial está atrasado. Redução de 30% em PRE, 20% em INT e SAB, 10% em VEL. Qualquer dano ou estímulo externo forte acorda. Duração de 3 turnos.

Grau Grave, Adormecido: o personagem perdeu a consciência. Não pode tomar ações voluntárias. Qualquer dano acorda. Ataques recebidos com 30% de bônus no alvo do atacante. Duração de 3 a 4 turnos conforme a fonte.

Grau Crítico, Sono Profundo: sono de origem poderosa ou profundamente induzido. Não acorda com dano comum. Apenas condição específica declarada pela fonte desperta o personagem. Ataques recebidos com 30% de bônus. Duração definida pela fonte.

Notas: aliado pode gastar ação completa tentando acordar o personagem nos graus em que dano acordaria.


### Inconsciência

O personagem entrou em colapso por dano extremo ou sobrecarga do sistema. Onde o Sono é induzido, este chega como consequência direta, sem teste de aplicação. Acontece quando o corpo não suporta mais.

Fonte: automática. PV cai a 0 ou abaixo de limiar crítico declarado pela fonte.

Grau Leve: PV abaixo de 10% do máximo. Aliado gasta ação menor mais teste de cura vs 30 para estabilizar.

Grau Moderado: PV a 0 sem morte imediata. Aliado gasta ação completa mais teste de cura vs 45.

Grau Grave: colapso por trauma severo além do dano. Aliado gasta ação completa mais teste vs 60 mais item ou técnica de cura.

Grau Crítico: morte iminente. Intervenção imediata obrigatória. Falha resulta em morte.

Notas: sem tratamento em turnos definidos pelo Mestre, Leve avança para Moderado, Moderado para Grave, Grave para Crítico.


## FAMÍLIA V · EXPOSIÇÃO e VULNERABILIDADE

Efeitos que não causam dano diretamente mas tornam o personagem mais fácil de acertar ou mais vulnerável ao dano recebido.


### Marcado

Algo identificou o personagem como alvo prioritário. Uma marca visual, energética ou mágica que facilita ataques externos contra ele. O marcado não perde capacidade própria de combate. Os atacantes ganham vantagem real enquanto a marca durar.

Fonte: técnica de marcação de alvo.
Atributos testados: DES + VEL
Alvo do teste: (DES + VEL) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: atacantes contra o marcado têm 10% de bônus no alvo do teste de acerto. Duração de 2 turnos.

Grau Moderado: bônus de 20% para atacantes. Duração de 3 turnos.

Grau Grave: bônus de 30% para atacantes mais Esquiva do marcado com modificador Leve no alvo. Duração de 3 turnos.

Grau Crítico: bônus de 40% para atacantes mais Esquiva com modificador Moderado no alvo mais ocultação impossível. Duração de 4 turnos.

Notas: remoção por duração ou técnica específica de quebra de marcação.


### Exposição

As defesas do personagem foram comprometidas. Armadura danificada, posição aberta demais, ou técnica que penetra defesas normais. A proteção que deveria estar lá não está mais funcionando como deveria.

Fonte: armadura danificada, posição comprometida, técnica de penetração de defesa.
Atributos testados: DEF + RES
Alvo do teste: conforme tipo de fonte.
Atributo afetado: DEF.

Grau Leve: redução de 15% em DEF. Duração de 2 turnos.

Grau Moderado: redução de 30% em DEF mais Bloqueio com modificador Leve no alvo. Duração de 3 turnos.

Grau Grave: redução de 50% em DEF mais Bloqueio com modificador Moderado no alvo mais Esquiva com modificador Leve no alvo. Duração de 3 turnos.

Grau Crítico: redução de 70% em DEF mais todas as defesas ativas com modificador Moderado no alvo. Duração de 4 turnos.

Notas: remoção por duração, reposicionamento custando ação menor, ou técnica de reforço.


## FAMÍLIA VI · CONDIÇÕES ESTRUTURAIS PERSISTENTES

Efeitos que existem além do combate e afetam a campanha como um todo. Não desaparecem com o fim da cena.


### Exaustão de Chakra

A reserva chegou perto do fim, e o que resta não basta para moldar com a precisão de antes. O efeito corre fora dos motores de ferimento e de cansaço muscular: ele é a degradação da própria capacidade de dar forma ao chakra conforme a fonte se esgota. Os sintomas aparecem antes da falha completa, em tontura, vertigem e escurecimento do campo de visão, e o shinobi que insiste depois do último grau morre.

Fonte: automática, derivada da RC restante. Sem teste de aplicação. Cada grau substitui o anterior.
Atributos afetados: nenhum atributo diretamente. A penalidade incide sobre os testes que governam chakra, deixando o comprometimento físico para a Exaustão Física e a degradação geral para a Fadiga.

RC entre 50% e 74%: Grau Leve. Redução de 15% nos testes de Controle de Chakra e das perícias de natureza.

RC entre 25% e 49%: Grau Moderado. Redução de 30% nesses testes, e o Índice de Desperdício do executor sobe 25 pontos percentuais, de modo que a mesma técnica passa a custar mais para quem já tem menos.

RC entre 1% e 24%: Grau Grave. Redução de 50% nesses testes, Limite de Saída reduzido à metade, e toda técnica de rank A ou superior entrega versão reduzida no lugar do efeito pleno.

RC a 0%: Grau Crítico, o colapso final. Inconsciência aplicada no ato. Cada ponto de chakra exigido do personagem a partir daqui consome PV na razão de um para um, sem mitigação, e a redução do PV a zero por esta via é morte.

Notas: a remoção acompanha a recuperação de reserva. Descanso curto sobe um grau, e descanso longo zera. O caminho Firmeza do Controle de Chakra ignora o Grau Leve, sobe ao Moderado no LV5 e alcança todos os graus abaixo do colapso final na transcendência. Chakra guardado fora da reserva atual, como o depósito da Reserva Diferida, não conta para a apuração do grau, e é o que permite a um praticante operar em Grau Grave com poder disponível.


### Corte de Chakra

As células do sistema circulatório de chakra foram desconectadas umas das outras. A reserva permanece intacta e o problema não é de volume: o que se perdeu é a via que conduz o chakra, e o praticante sente o efeito ao tentar moldar aquilo que antes lhe saía sem esforço. A condição se distingue da Exaustão de Chakra em ponto único e decisivo, que é a origem. A Exaustão mede uma reserva que se esvaziou e se resolve enchendo-a de novo; o Corte mede um circuito rompido, e reserva cheia não o repara.

Fonte: rider declarado pela técnica que o produz, com o grau mínimo garantido e o grau máximo possível pertencendo à ficha dela. O teste é de RES somada a VON, contra o alvo que a fonte publicar.
Atributos afetados: nenhum atributo diretamente. A penalidade incide sobre os testes de Controle de Chakra e das perícias de natureza, deixando o comprometimento físico para a Exaustão Física e a degradação de reserva para a Exaustão de Chakra.

Grau Leve: redução de 15% nesses testes. O praticante nota a hesitação na moldagem e ainda entrega o efeito pleno das técnicas que já domina.

Grau Moderado: redução de 30% nesses testes. O Índice de Desperdício lê o teste de Moldagem e sobe por consequência, de modo que a mesma técnica passa a custar mais a quem foi cortado, sem que este efeito precise declarar régua própria de custo.

Grau Grave: redução de 50% nesses testes. A perda alcança o que o praticante executava com folga, e o desperdício resultante empurra as técnicas dele para janelas de canalização mais longas. A Régua de Exigência de Moldagem não é atingida, porque ela lê a Base Total somada ao atributo regente e não o teste.

Grau Crítico: redução de 70% nesses testes, permanente. A via não se refaz, e a condição registra na ficha um Ferimento Grave de mesmo grau na região atingida.

Notas: a ferida não é fechável por ninjutsu médico de rank algum, e essa recusa é o que separa este efeito dos demais desta família. Ela cede às durações deste sistema e ao tratamento narrativo que o Narrador declarar, e o Grau Crítico não cede a nenhum dos dois. A regra universal de remoção do Grau Crítico, que admite técnica de cura, fica revogada aqui por declaração da entrada. O Ferimento Grave que o Grau Crítico registra corre pelas regras da própria entrada dele, inclusive a que avança o grau quando a mesma região é atingida de novo sem tratamento. Fonte que eleve o grau produzido, como o caminho Minuano da perícia de Fūton, o faz sobre o grau mínimo garantido da ficha e nunca sobre o teto desta escada.

### Fadiga

O descanso não foi suficiente. O corpo está pagando a conta do que foi exigido sem recuperação adequada. Automática e progressiva. Cada nível substitui o anterior.

Fonte: automática, acúmulo entre combates sem descanso adequado. Sem teste.
Atributos afetados: todos simultaneamente.

Nível 1, Cansado: redução de 15% em todos os atributos.

Nível 2, Exausto: redução de 30% em todos os atributos. PS não recupera naturalmente entre cenas.

Nível 3, À beira do colapso: redução de 50% em todos os atributos. PS não recupera mais e cada combate aplica Exaustão Física Leve automaticamente ao início.

Nível 4, Colapso Total: redução de 70% em todos os atributos. O personagem não consegue participar de combate sem risco real. Qualquer ação exige teste de RES vs 50 ou falha. Sem descanso imediato, Inconsciência Leve é aplicada automaticamente ao fim da cena.

Notas: descanso curto reduz 1 nível. Descanso longo zera completamente.


### Doença

Uma infecção tomou o corpo. Opera em sessões, não em turnos. Progride lentamente e, se ignorada por tempo suficiente, pode matar sem que nenhum inimigo precise agir.

Fonte: infecção, contato com patógeno, técnica de contágio.
Atributos testados: RES + FOR para doenças físicas. RES + VONTADE para doenças mentais ou mágicas.
Alvo do teste: teste oposto, potência da doença vs atributos da vítima.

O Mestre declara quais atributos são afetados primariamente conforme a natureza da doença.

Grau Leve: redução de 15% nos atributos primários. Avança para Moderado após 1 sessão sem tratamento.

Grau Moderado: redução de 30% nos atributos primários e 15% nos secundários. Avança para Grave após 2 sessões sem tratamento.

Grau Grave: redução de 50% nos atributos primários e 30% nos secundários. Avança para Crítico após 1 sessão.

Grau Crítico: redução de 70% nos atributos primários e 50% nos secundários. Ameaça de vida. Morte narrativa possível sem intervenção.

Notas: remoção por tratamento narrativo adequado. Grau Crítico exige cuidado intensivo.


### Ferimento Grave

O corpo foi danificado além do que o descanso consegue resolver. O comprometimento é estrutural e real, persiste por conta própria e exige intervenção ativa para ser resolvido.

Fonte: automático. Personagem cai abaixo de 25% do PV máximo e sobrevive, ou como sequela de efeito Crítico.
Atributo afetado: o mais relevante para a natureza do ferimento, declarado pelo Mestre na ocorrência.

Grau Leve: redução de 15% no atributo afetado. Dor presente mas o personagem ainda funciona próximo do normal.

Grau Moderado: redução de 30% no atributo afetado. Comprometimento visível que afeta o desempenho em combate.

Grau Grave: redução de 50% no atributo afetado. A função está severamente limitada. Ações que dependam do atributo exigem esforço adicional.

Grau Crítico: redução de 70% no atributo afetado. A função foi perdida ou está em colapso. Uso continuado sem tratamento pode tornar o dano permanente.

Notas: o grau do Ferimento Grave é determinado pela gravidade do evento que o causou, declarado pelo Mestre. Não tem teste de resistência na aplicação. Remoção apenas por tratamento narrativo adequado. Descanso não remove. Novo Ferimento Grave na mesma região sem tratamento avança o grau atual em 1.


## FAMÍLIA VII · EFEITOS DERIVADOS

Efeitos que surgem do agravamento de outros efeitos não tratados. A fonte deles é interna: chegam pela consequência natural de deixar um efeito progredir sem intervenção.


### Exsanguinação

O Sangramento não foi tratado e atingiu o ponto sem retorno. O corpo não consegue mais compensar a perda. O que era um ferimento grave se torna uma corrida contra o relógio.

Fonte: automática. Acionada quando a perda acumulada de PV pelo Sangramento ativo atinge 25% do PV máximo da vítima. Sem novo teste.

Nota sobre os graus: a Exsanguinação herda e amplifica o grau do Sangramento que a causou. Sangramento Leve pode atingir o limiar de 25% de PV perdido se mantido por muitos turnos sem tratamento, mas nesse caso o grau herdado é Leve. Os graus existem e são todos os quatro. O grau Leve representa um Sangramento Leve que simplesmente não foi tratado por tempo suficiente para se tornar crítico, mas cujo acúmulo já indica perigo real.

Grau Leve herdado: DoT do Sangramento base multiplicado por 1,5. A cada 3 turnos sem tratamento o multiplicador aumenta em 0,1.

Grau Moderado herdado: DoT base multiplicado por 2. A cada 2 turnos sem tratamento multiplica por 1,1 sobre o valor atual.

Grau Grave herdado: DoT base multiplicado por 3. A cada turno sem tratamento multiplica por 1,2.

Grau Crítico herdado: DoT base multiplicado por 4. Progressão imediata. Morte em turnos sem intervenção.

Notas: remoção equivalente a Sangramento Crítico. Tratamento ativo externo obrigatório em todos os graus.


### Coma

A Inconsciência progrediu além do ponto em que tratamento simples resolve. O corpo está presente mas a consciência não está acessível. Diferente do Sono, nada acorda quem está em coma. Nem dano, nem voz, nem estímulo físico externo.

Fonte: automático. Deriva de Inconsciência Grave ou Crítico não tratados, ou de dano extremo ao sistema nervoso.

Grau Leve: Inconsciência prolongada sem tratamento adequado. Tratamento médico por 1 sessão para recuperação.

Grau Moderado: dano severo ao sistema nervoso sem tratamento. Tratamento especializado por 2 sessões.

Grau Grave: colapso profundo por trauma extremo ou origem mágica severa. Tratamento especializado por 3 sessões ou mais.

Grau Crítico: morte iminente. Intervenção imediata na cena obrigatória. Sem isso resulta em morte.

Notas: nenhum dano, estímulo ou ação simples acorda quem está em coma. O corpo não responde.


---

# EFEITOS OPCIONAIS

Ativados pelo Mestre conforme o tom e os elementos do cenário. Seguem exatamente as mesmas regras fundamentais dos nativos.

## FAMÍLIA I · DANO CONTÍNUO OPCIONAL


### Tóxico

O Tóxico é uma variante do Veneno, mais agressiva e de progressão mais rápida, e a diferença entre os dois é qualitativa além de numérica. Onde o Veneno corrói progressivamente, o Tóxico ataca o sistema de forma mais imediata e violenta. Recomendado para campanhas onde criaturas venenosas de alto nível ou alquimia avançada são elementos centrais.

Fonte: substância tóxica de alta potência, técnica ou criatura de nível avançado.
Atributos testados: RES + FOR
Alvo do teste para criatura: teste oposto. Criatura rola FOR ou RES, vítima rola RES + FOR.
Alvo do teste para técnica: (RES + FOR) x (1 - RC nominal da técnica / RC máxima do atacante)

Valor base do DoT por estágio: estágio 1 é RES do causador multiplicado por 1,0 em PV por turno. Estágio 2 é RES do causador multiplicado por 2,0. Estágio 3 é RES do causador multiplicado por 3,0. Para origem mágica, substitui RES por INT do causador. O Tóxico começa onde o Veneno termina em termos de intensidade.

Grau Leve: começa no estágio 1. Avança a cada 3 turnos sem remoção. Redução de 15% em RES.

Grau Moderado: começa no estágio 2. Avança a cada 2 turnos. Redução de 30% em RES e 15% em FOR.

Grau Grave: começa no estágio 2. Avança a cada turno. Redução de 50% em RES e 30% em FOR. Movimento custa PS adicional.

Grau Crítico: começa no estágio 3. Progressão imediata a cada turno. Redução de 70% em RES e 50% em FOR. Risco de Inconsciência se PV cair abaixo de 25% enquanto o efeito estiver ativo.

Notas: Tóxico nunca remove pela regra universal. Todos os graus exigem antídoto específico ou purificação ativa. Descanso não atenua. Se tanto Veneno quanto Tóxico estiverem ativos simultaneamente, apenas o Tóxico opera, ele absorve o Veneno.


### Necrose

O tecido começa a morrer. Diferente do Sangramento e da Queimadura, a Necrose age no longo prazo: ela é lenta e profunda. O perigo real da Necrose é que ela danifica permanentemente o PV máximo se não for tratada a tempo. Recomendado para campanhas com magia de morte, criaturas necromânticas ou horror.

Fonte: magia de morte, veneno necrótico, mordida de criatura necromântica.
Atributos testados: RES + FOR para necrose física. VONTADE + RES para necrose mágica.
Alvo do teste: conforme tipo de fonte.

Valor base do DoT: RES do causador multiplicado por 0,3 em PV por turno para necrose física. INT do causador multiplicado por 0,3 para necrose mágica.

Grau Leve: DoT base. Redução de 15% em RES. Sem dano ao PV máximo ainda. O tecido está comprometido mas recuperável.

Grau Moderado: DoT base. Redução de 30% em RES. Se não tratado em 3 sessões, PV máximo reduz em 10% permanentemente até tratamento especializado.

Grau Grave: DoT base multiplicado por 1,5. Redução de 50% em RES e 15% em FOR. Se não tratado em 1 sessão, PV máximo reduz em 20% permanentemente.

Grau Crítico: DoT base multiplicado por 2. Redução de 70% em RES e 30% em FOR. PV máximo começa a cair imediatamente, perdendo 5% por sessão sem tratamento. A condição pode se tornar irreversível sem intervenção especializada.

Notas: Leve remove pela regra universal. Moderado exige tratamento específico. Grave e Crítico exigem purificação especializada ou técnica de cura de rank compatível. Descanso nunca remove Necrose.


## FAMÍLIA II · CORPO e MOBILIDADE OPCIONAL


### Luxação

Uma articulação saiu do lugar. É menos severa que uma Fratura mas tem seu próprio custo real. O membro funciona, mas com dor aguda e instabilidade que compromete ações precisas. A Luxação pode ser recolocada com tratamento relativamente simples, mas fazer isso durante o combate tem custo. Recomendado para campanhas que valorizam realismo físico e consequências de combate detalhadas.

Fonte: golpe físico de impacto ou torção, queda mal executada, técnica de alavancagem.
Atributos testados: RES + FOR
Alvo do teste: (RES + FOR) x (1 - dano / PV máximo da vítima)
Efeito persistente mas removível com tratamento simples. Não exige cura especializada.

Atributos afetados dependem da articulação: ombro afeta FOR e DES do braço. Cotovelo afeta DES e PRE do braço. Quadril afeta VEL e DES. Joelho afeta VEL. Tornozelo afeta VEL e DES.

Grau Leve: redução de 15% nos atributos da articulação. Dor presente mas o personagem opera com limitação aceitável.

Grau Moderado: redução de 30%. Ação que exija a articulação custa PS adicional.

Grau Grave: redução de 50%. Ação que exija a articulação exige teste de RES vs 35. Falhar causa dor aguda e perde a ação.

Grau Crítico: redução de 70%. A articulação está completamente instável. Qualquer uso provoca dor severa e pode agravar para Fratura Leve sem recolocação imediata.

Notas: tratamento simples durante combate custa ação completa e exige teste de cura vs 30. Fora de combate, remove automaticamente com tratamento adequado. Não exige descanso longo, apenas recolocação.


### Congelamento

O frio extremo compromete o corpo progressivamente. Começa pela mobilidade e termina em hipotermia sistêmica. Diferente da Lentidão, o Congelamento tem componente de dano real ao tecido nos graus mais severos e afeta a capacidade de sustentar técnicas que exijam foco. Recomendado para campanhas com elemento gelo como foco tático ou ambiental.

Fonte: frio extremo, técnica de gelo, ambiente glacial prolongado.
Atributos testados: RES + FOR
Alvo do teste físico: (RES + FOR) x (1 - dano / PV máximo da vítima)
Alvo do teste para técnica: (RES + FOR) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: redução de 15% em VEL e DES. O frio está presente mas o corpo ainda responde. PS drena 10% mais rápido por ação física.

Grau Moderado: redução de 30% em VEL e DES. Redução de 10% em FOR. PS drena 20% mais rápido. Técnicas que exijam concentração prolongada sofrem penalidade de 15% no alvo por interferência do tremor.

Grau Grave: redução de 50% em VEL e DES. Redução de 20% em FOR. DoT de frio de RES do causador multiplicado por 0,5 em PV por turno (origem mágica usa INT). PS drena 30% mais rápido.

Grau Crítico: redução de 70% em VEL e DES. Redução de 30% em FOR e 20% em RES. DoT de frio de RES do causador multiplicado por 1,0 em PV por turno (origem mágica usa INT). Hipotermia iminente. Sem aquecimento, Inconsciência Moderada é aplicada após 3 turnos.

Notas: fogo ou calor remove o efeito em qualquer grau. Grau Leve e Moderado removem pela regra universal com RES + FOR. Grave exige fonte de calor ativo. Crítico exige fonte de calor ativo mais ação completa de tratamento.


### Petrificação

O corpo está sendo transformado em substância inerte. Diferente da Imobilização, cuja saída é a força, a Petrificação exige intervenção específica: é um processo de transformação que avança progressivamente e só se reverte por essa via. Nos graus mais severos, o personagem deixa de ser um alvo de habilidades normais, não pode ser curado, não pode ser afetado por maioria dos efeitos, mas também não pode agir. Recomendado para campanhas com criaturas de transformação, magia de transmutação, ou práticas que transformam quem as executa.

Fonte: olhar de criatura específica, técnica de transmutação, armadilha mágica, processo de transmutação instalado no próprio corpo do personagem.
Atributos testados: RES + VONTADE
Alvo do teste para técnica: (RES + VONTADE) x (1 - RC nominal da técnica / RC máxima do atacante)
Alvo do teste para fonte passiva: teste oposto.
Alvo do teste para processo interno: sem teste. O personagem opera sobre o próprio corpo uma transformação que ele mesmo governa, e a instalação do grau é consequência da operação. A fonte que publica a operação declara a régua que instala o efeito e o grau garantido por instalação.

Grau Leve: rigidez parcial. Redução de 15% em VEL, DES e FOR. O personagem ainda age mas sente o corpo resistindo.

Grau Moderado: rigidez severa. Redução de 30% em VEL, DES e FOR. Ações físicas custam PS adicional. O personagem começa a perder expressão facial e fluidez de movimento.

Grau Grave: transformação quase completa. Redução de 50% em VEL, DES e FOR. Apenas 1 ação por turno disponível. O personagem está parcialmente pedra, cura comum não funciona mais.

Grau Crítico: transformação completa. O personagem está inerte. Não pode agir, não pode ser curado por meios convencionais, não pode receber a maioria dos efeitos de status. Ataques físicos causam dano mínimo mas podem fragmentar o personagem se severos o suficiente. Apenas reversão da transformação resolve.

Notas: Leve e Moderado removem pela regra universal. Grave exige técnica de reversão de transformação. Crítico exige técnica ou item específico declarado pela fonte que causou o efeito. A fonte de processo interno publica a própria via de reversão junto da régua que instala o efeito, e essa via responde pelos dois graus superiores.


### Peso Sobrenatural

Uma força externa pressiona o personagem para baixo, aumentando artificialmente o peso que ele carrega ou a gravidade que sente. O efeito corre fora de dano neurológico e de lesão física: ele é força bruta contra uma pressão constante. Recomendado para campanhas com magia de gravidade ou criaturas com esse tipo de capacidade.

Fonte: técnica de manipulação gravitacional ou de peso.
Atributos testados: FOR + RES
Alvo do teste: (FOR + RES) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: redução de 15% em VEL e DES. O personagem sente a pressão mas ainda age com relativa normalidade.

Grau Moderado: redução de 30% em VEL e DES. Redução de 10% em FOR. Ação de movimento custa PS adicional.

Grau Grave: redução de 50% em VEL e DES. Redução de 20% em FOR. Qualquer ação de movimento exige teste de FOR vs 40 ou falha. O personagem luta contra a própria gravidade em cada passo.

Grau Crítico: redução de 70% em VEL e DES. Redução de 30% em FOR. Movimento é praticamente impossível. Queda e Prostração é aplicada automaticamente se o personagem tentar agir fisicamente e falhar no teste de FOR vs 50.

Notas: remoção pela regra universal. Ou aguardar duração definida pela fonte.


## FAMÍLIA III · SENTIDOS OPCIONAL


### Cegueira Parcial

Um olho está comprometido. Diferente da Cegueira que afeta ambos os olhos, a Cegueira Parcial afeta especificamente profundidade de campo e percepção lateral. O personagem ainda enxerga, mas com uma distorção real que compromete ações que exijam precisão de distância. Recomendado para campanhas que valorizam granularidade em dano aos sentidos.

Fonte: dano em um olho, técnica de ofuscamento parcial.
Atributos testados: DES + VEL para desviar. RES + FOR para dano direto.
Atributo afetado: PRE em contextos que exijam julgamento de distância e percepção lateral.

Grau Leve: redução de 10% em PRE para ataques à distância e esquiva de projéteis. Campo visual lateral comprometido de um lado.

Grau Moderado: redução de 20% em PRE para ataques à distância. Redução de 10% em PRE para ataques físicos. Dificuldade em julgar distâncias com precisão.

Grau Grave: redução de 35% em PRE para ataques à distância e 20% para físicos. Ataques que dependam de precisão fina exigem teste adicional de PRE vs 40.

Grau Crítico: redução de 50% em PRE para ataques à distância e 30% para físicos. O olho afetado está praticamente não funcional. Grau equivalente a Cegueira Moderada de um lado.

Notas: Cegueira Parcial e Cegueira completa não coexistem no mesmo personagem. Se ambos os olhos forem afetados, converte para Cegueira de grau correspondente. Remoção pela regra universal para Leve e Moderado. Grave e Crítico exigem tratamento específico.


### Dormência e Anestesia

O personagem perdeu a sensação tátil em uma área do corpo. Pode parecer vantagem, sem dor, mas remove informação sensorial crítica que o combate depende. Sem sentir o contato de um golpe, o personagem não sabe o quanto foi atingido. Sem sentir o grip da arma, a precisão sofre. Recomendado para campanhas com alquimia, medicina avançada ou criaturas que aplicam anestesia.

Fonte: substância anestésica, veneno paralisante de sensação, técnica específica.
Atributos testados: RES + FOR
Alvo do teste: conforme tipo de fonte.
Efeito ambivalente: remove penalidades de dor mas compromete percepção física.

Grau Leve: área periférica adormecida. Remove penalidades de dor de Sangramento e Queimadura Leve. Redução de 10% em PRE para ações físicas que dependam de tato fino.

Grau Moderado: membro ou região maior adormecida. Remove penalidades de dor de Sangramento e Queimadura até Moderado. Redução de 20% em DES e PRE para ações que dependam do membro. O personagem não percebe dano recebido no membro sem checar ativamente.

Grau Grave: área extensa adormecida. Remove penalidades de dor de qualquer grau na área. Redução de 35% em DES para ações físicas. O personagem pode estar sofrendo Sangramento Grave sem perceber sem alerta externo.

Grau Crítico: dormência sistêmica. Remove todas as penalidades de dor mas redução de 50% em DES e 30% em PRE para todas as ações físicas. O personagem perde completamente o feedback sensorial do próprio corpo. Ferimentos graves podem passar despercebidos até causar Inconsciência.

Notas: remoção pela regra universal ou aguardando duração da substância. Dormência de origem mágica pode ter duração indefinida até remoção ativa.


### Vertigem

O equilíbrio está comprometido. O personagem não consegue confiar no próprio senso de orientação espacial. Ações que dependam de posicionamento preciso, movimento em altura, ou coordenação fina são afetadas desproporcionalmente. Recomendado para combate aéreo, naval, em altura, ou com criaturas que causem desorientação.

Fonte: impacto no ouvido interno, técnica de desorientação, movimento extremo, veneno de equilíbrio.
Atributos testados: RES + VONTADE
Alvo do teste: (RES + VONTADE) x (1 - dano / PV máximo da vítima) para físico. (RES + VONTADE) x (1 - RC nominal da técnica / RC máxima do atacante) para técnica.

Grau Leve: redução de 15% em DES. Leve sensação de instabilidade. Ações em altura ou superfícies instáveis com penalidade adicional de 10%.

Grau Moderado: redução de 30% em DES e 10% em VEL. Movimento em linha reta ainda possível mas movimentos circulares ou mudanças bruscas de direção exigem teste de DES vs 35.

Grau Grave: redução de 50% em DES e 20% em VEL. Qualquer movimento não linear exige teste de DES vs 45. Falhar aplica Queda e Prostração Leve automaticamente.

Grau Crítico: redução de 70% em DES e 30% em VEL. O personagem não consegue manter equilíbrio em superfícies irregulares. Qualquer ação física que exija movimento exige teste de DES vs 50. Falhar aplica Queda e Prostração Moderada.

Notas: remoção pela regra universal. Descanso em posição estável reduz o grau em 1 sem teste.


### Alucinação

O personagem percebe coisas que não existem ou distorce o que existe. Diferente da Confusão, que compromete o processamento cognitivo, a Alucinação afeta especificamente a entrada de informação sensorial. O personagem pode estar raciocínando perfeitamente, sobre dados completamente falsos. Recomendado para campanhas com drogas, venenos mentais, magia ilusória avançada ou entidades que manipulam percepção.

Fonte: substância alucinógena, técnica de ilusão avançada, entidade de manipulação sensorial.
Atributos testados: VONTADE + SAB
Alvo do teste: conforme tipo de fonte.

Grau Leve: distorções periféricas e sensoriais menores. O personagem percebe elementos que não existem na periferia da visão ou ouve sons inexistentes. Redução de 15% em PRE. O personagem sabe que algo está errado.

Grau Moderado: alucinações presentes e perturbadoras. O personagem vê e ouve coisas com clareza que podem interferir na leitura de situação. Redução de 30% em PRE e 15% em SAB. O Mestre pode introduzir uma informação falsa por cena que o personagem percebe como real.

Grau Grave: alucinações dominantes. O personagem tem dificuldade real em distinguir o real do alucinado. Redução de 50% em PRE e 30% em SAB. O Mestre pode introduzir uma informação falsa por turno. Ações baseadas em informação falsa podem resultar em comportamento errático.

Grau Crítico: a realidade está completamente distorcida. O personagem não consegue confiar em nenhuma percepção sensorial. Redução de 70% em PRE e 50% em SAB. O Mestre controla totalmente o que o personagem percebe existir no ambiente. Ações baseadas nessa percepção distorcida seguem essa lógica.

Notas: remoção pela regra universal. Substâncias alucinógenas têm duração própria declarada pela fonte. Grau Crítico de origem mágica exige remoção ativa.


## FAMÍLIA IV · MENTAL e PSICOLÓGICO OPCIONAL


### Fascínio e Encantamento

O personagem está fascinado por algo ou alguém, e conserva autonomia em todas as ações exceto em hostilidades contra a fonte do fascínio. Não consegue atacá-la, não consegue prejudicá-la intencionalmente, não consegue resistir ao impulso de interagir com ela de forma não hostil. Recomendado para campanhas com magia mental, criaturas de encantamento ou dinâmicas políticas complexas.

Fonte: técnica de encantamento, aura de criatura específica, substância.
Atributos testados: VONTADE + SAB
Alvo do teste: (VONTADE + SAB) x (1 - RC nominal da técnica / RC máxima do atacante) para técnica. Teste oposto para aura.

Grau Leve: o personagem sente atração intensa pela fonte. Ações hostis contra ela exigem teste de VONTADE + SAB vs 35. Redução de 15% em PRE e SAB ao avaliar a fonte criticamente.

Grau Moderado: o personagem não consegue iniciar hostilidades contra a fonte voluntariamente. Pode agir em defesa própria se atacado diretamente por ela, mas mesmo assim com redução de 30% em FOR e PRE contra a fonte.

Grau Grave: o personagem ativamente protege a fonte se ameaçada. Redução de 50% em todos os atributos em ações contra a fonte. O personagem pode ser usado como escudo ou distração pela fonte sem teste de resistência.

Grau Crítico: o personagem age completamente em favor da fonte dentro das suas capacidades. Não pode agir contra ela sob nenhuma circunstância voluntária. Aliados que atacarem a fonte podem ser considerados ameaças pelo personagem encantado.

Notas: dano recebido da própria fonte permite novo teste de resistência imediato. Remoção pela regra universal. Grau Crítico exige condição específica ou técnica de quebra de encantamento.


### Domínio e Charme Total

Controle completo. Onde o Fascínio apenas impede a hostilidade, o Domínio substitui a vontade por inteiro. O personagem age como extensão da fonte. Sua identidade ainda existe internamente, mas não tem acesso a nenhuma decisão de ação. Recomendado para campanhas com magia mental de alto nível, entidades de possessão ou antagonistas que usem controle como ferramenta.

Fonte: técnica de controle mental de alto nível, ritual específico.
Atributos testados: VONTADE + SAB
Alvo do teste: (VONTADE + SAB) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: o controlador pode sugerir uma ação por turno. O personagem pode recusar testando VONTADE + SAB vs 45.

Grau Moderado: o controlador define uma ação por turno. O personagem pode tentar resistir testando VONTADE + SAB com modificador Moderado no alvo.

Grau Grave: o controlador define todas as ações. O personagem só pode resistir em momentos de contradição extrema com valores centrais, testando VONTADE + SAB com modificador Grave no alvo.

Grau Crítico: controle absoluto. O personagem age completamente como instrumento do controlador. Resistência interna impossível exceto por condição específica declarada pela fonte.

Notas: aliados podem tentar quebrar o controle por meios narrativos, confronto direto, estímulo emocional intenso, permitindo novo teste de resistência. Remoção exige técnica de quebra de controle ou destruição/incapacitação da fonte.


### Frenesi e Berserk

O personagem entra em estado de fúria incontrolável. Força e agressividade aumentam mas a capacidade de distinguir aliados de inimigos diminui. Em alguns contextos o estado favorece quem o carrega, e uma criatura ou personagem construído para isso pode ser devastador. O perigo está nos efeitos colaterais sobre aliados. Recomendado para campanhas com guerreiros de fúria, criaturas selvagens ou maldições de raiva.

Fonte: maldição de raiva, técnica específica, substância estimulante extrema, trauma emocional severo em combate.
Atributos testados: VONTADE + SAB
Alvo do teste: conforme tipo de fonte.

Grau Leve: instinto agressivo aumentado. Bônus de 15% em FOR em ataques físicos. Redução de 15% em SAB e INT. O personagem pode agir normalmente mas tende a escolhas mais agressivas.

Grau Moderado: fúria presente e crescente. Bônus de 25% em FOR. Redução de 30% em SAB e INT. Ações táticas complexas exigem teste de INT vs 40. O personagem tem dificuldade em recuar ou defender.

Grau Grave: frenesi parcial. Bônus de 35% em FOR. Redução de 50% em SAB e INT. O personagem ataca o alvo mais próximo prioritariamente. Distinguir aliado de inimigo exige teste de SAB vs 45 por turno. Falhar resulta em ataque ao aliado mais próximo.

Grau Crítico: berserk total. Bônus de 50% em FOR. Redução de 70% em SAB e INT. O personagem ataca qualquer coisa ao alcance sem distinção. O Mestre controla quem é o alvo. Técnicas que exijam pensamento estratégico são impossíveis.

Notas: dano recebido de aliado permite novo teste de resistência. Remoção pela regra universal com modificador Moderado obrigatório em todos os graus. Fora de combate, o efeito diminui naturalmente após 3 turnos sem alvo disponível.


### Amnésia

O personagem perdeu acesso a memórias específicas ou ao conhecimento acumulado. INT e SAB permanecem intactos: o que ficou inacessível é o conteúdo que essas capacidades processam. O personagem ainda pensa com clareza, mas pode não saber quem são seus aliados, o que sabe sobre o inimigo, ou como executar técnicas que dependam de memória procedimental. Recomendado para campanhas onde memória e identidade têm peso narrativo.

Fonte: técnica de apagamento de memória, trauma extremo, entidade específica, magia de alteração mental.
Atributos testados: VONTADE + INT
Alvo do teste: conforme tipo de fonte.

Grau Leve: memórias recentes comprometidas. O personagem não se lembra de eventos das últimas horas ou dias. Sem penalidade mecânica direta, mas narrativamente não tem acesso a informações obtidas recentemente.

Grau Moderado: memórias de médio prazo comprometidas. O personagem não reconhece aliados conhecidos há menos tempo que o período afetado. Perícias que dependam de estudo ou treinamento recente sofrem redução de 20% no bônus.

Grau Grave: memórias extensas comprometidas. O personagem pode não reconhecer aliados próximos, não lembrar de objetivos da missão, não saber usar técnicas aprendidas recentemente. Redução de 30% no bônus de perícias afetadas.

Grau Crítico: amnésia severa. O personagem perdeu acesso a grandes blocos de memória incluindo potencialmente sua própria identidade. Redução de 50% no bônus de todas as perícias. O Mestre define o que o personagem ainda sabe.

Notas: a Amnésia é primariamente um efeito narrativo. As penalidades mecânicas existem para representar o impacto prático mas o efeito real é definido em conversa entre Mestre e jogador. Remoção por resolução narrativa ou técnica específica.


### Desespero e Abatimento

O personagem está em estado de derrota psicológica. Onde o Medo responde a uma ameaça específica, este estado é a crença internalizada de que as ações não importam, de que o resultado já está decidido, de que resistir é inútil. Reduz a efetividade em tudo porque a motivação para executar bem simplesmente não está presente. Recomendado para campanhas de horror psicológico ou narrativas de desgaste.

Fonte: derrota severa, perda de aliado próximo, confronto com situação sem saída aparente, técnica específica.
Atributos testados: VONTADE + SAB
Alvo do teste: conforme tipo de fonte.

Grau Leve: motivação reduzida. Redução de 10% em todos os atributos. O personagem ainda age mas sem o mesmo engajamento.

Grau Moderado: abatimento real. Redução de 20% em todos os atributos. Ações que exijam iniciativa ou planejamento sofrem penalidade adicional de 15%.

Grau Grave: derrota internalizada. Redução de 35% em todos os atributos. O personagem precisa superar teste de VONTADE + SAB vs 40 para tomar qualquer ação proativa por conta própria.

Grau Crítico: colapso da vontade. Redução de 50% em todos os atributos. O personagem só age em resposta a estímulos externos ou por instinto de sobrevivência imediata. Sem intervenção de aliados, Inconsciência Leve pode acontecer ao fim da cena.

Notas: aliados ativos têm papel central na remoção. Um aliado que gaste ação completa em apoio direto ao personagem permite novo teste de resistência com bônus de 20% no alvo. Remoção total exige resolução narrativa.


### Euforia

O personagem está em estado de bem-estar excessivo e desinibição. Parece positivo mas tem custo real em julgamento e percepção de risco. Um personagem eufórico age com excesso de confiança, subestima ameaças e tem dificuldade em recuar ou ser cauteloso. Recomendado para campanhas com alquimia, drogas, magia de alteração de estado ou criaturas que induzam esse efeito.

Fonte: substância estimulante, técnica de alteração de humor, aura específica de criatura.
Atributos testados: RES + VONTADE
Alvo do teste: conforme tipo de fonte.

Grau Leve: bem-estar presente. Redução de 10% em SAB. Bônus de 10% em CAR para interações sociais imediatas. O personagem tende a subestimar levemente os riscos.

Grau Moderado: desinibição crescente. Redução de 20% em SAB e 10% em PRE. Bônus de 15% em CAR. O personagem tem dificuldade em recuar tacticamente. Teste de SAB vs 35 para qualquer ação defensiva ou de recuo.

Grau Grave: euforia dominante. Redução de 35% em SAB e 20% em PRE e INT. O personagem não consegue avaliar ameaças com clareza. Ações cautelosas exigem teste de VONTADE + SAB vs 45. O personagem tende a agir de forma excessivamente agressiva ou exposta.

Grau Crítico: estado alterado severo. Redução de 50% em SAB, PRE e INT. O personagem age como se fosse invencível. Ações defensivas ou de retirada são impossíveis sem superar teste de VONTADE + SAB vs 55. Aliados podem ser ignorados como ameaças.

Notas: remoção pela regra universal para origem por substância após duração da substância acabar. Origem mágica exige remoção ativa. O efeito em si é neutro para o personagem afetado, e o peso está nas consequências.


### Paranoia

O personagem não confia em ninguém ao redor. Mesmo aliados próximos são percebidos como ameaças potenciais. Isso compromete diretamente a coordenação de grupo e pode resultar em comportamentos hostis contra aliados se a Paranoia progredir. Recomendado para campanhas de intriga, traição ou com entidades que manipulem percepção social.

Fonte: técnica de manipulação psicológica, veneno mental, entidade específica, trauma de traição severa.
Atributos testados: VONTADE + SAB
Alvo do teste: conforme tipo de fonte.

Grau Leve: desconfiança aumentada. Redução de 15% em SAB para avaliar intenções de aliados. Coordenação tática com aliados com penalidade de 10%.

Grau Moderado: suspeita dominante. Redução de 30% em SAB para interações com aliados. Coordenação com penalidade de 20%. O personagem pode recusar ordens ou sugestões de aliados testando VONTADE + SAB.

Grau Grave: paranoia severa. O personagem trata aliados como suspeitos. Redução de 50% em SAB. Coordenação bloqueada. Qualquer aliado que se aproxime inesperadamente pode ser tratado como ameaça, exigindo teste de VONTADE + SAB vs 45 para não reagir hostilmente.

Grau Crítico: colapso da confiança. O personagem percebe todos ao redor como inimigos. Redução de 70% em SAB para interações sociais. Ações cooperativas impossíveis. O personagem pode atacar aliados. O Mestre pode redirecionar uma ação por turno para ser dirigida a um aliado.

Notas: aliados que demonstrem intenção positiva de forma inequívoca permitem novo teste de resistência. Remoção pela regra universal para graus menores. Grave e Crítico exigem resolução narrativa ou técnica específica.


## FAMÍLIA V · CONTROLE e AUTONOMIA OPCIONAL


### Possessão Parcial

Uma entidade externa habita parcialmente o personagem: uma voz, uma presença, uma influência que compete com a vontade dele. O personagem ainda existe e ainda decide, mas há algo dentro tentando interferir. Recomendado para campanhas com espíritos, demônios, entidades sobrenaturais ou maldições de habitação.

Fonte: entidade espiritual ou sobrenatural tentando habitar o personagem.
Atributos testados: VONTADE + RES
Alvo do teste: teste oposto. Entidade rola INT + CAR, vítima rola VONTADE + RES.

Grau Leve: presença sentida. A entidade pode sugerir uma ação por turno. O personagem pode ignorar sem teste. Redução de 10% em VONTADE pela distração constante.

Grau Moderado: influência crescente. A entidade pode sugerir uma ação por turno. Ignorar exige teste de VONTADE + SAB vs 35. Redução de 20% em VONTADE.

Grau Grave: controle parcial. A entidade define uma ação por turno. O personagem pode resistir testando VONTADE + RES com modificador Moderado no alvo. A voz da entidade pode ser ouvida por outros em graus mais extremos.

Grau Crítico: dominância da entidade. O personagem e a entidade compartilham o corpo em luta constante. O Mestre alterna controle entre o jogador e a entidade turno a turno. O personagem testa VONTADE + RES com modificador Grave para recuperar controle em cada turno.

Notas: ritual de exorcismo ou técnica específica pode remover a entidade. Remoção espontânea pela regra universal apenas para Leve. Moderado em diante exige intervenção externa.


### Possessão Total

A entidade tomou controle completo. O personagem original ainda existe internamente mas não tem acesso a nenhuma decisão. É o grau máximo de Possessão Parcial que foi para além do ponto de retorno. O grau mínimo deste efeito é Grave por definição porque Possessão Total já pressupõe que o personagem original perdeu o controle completamente.

Fonte: entidade poderosa ou ritual de possessão completa.
Atributos testados: VONTADE + RES em teste oposto. Range começa em Grave obrigatoriamente.

Grau Grave: a entidade controla todas as ações. O personagem original pode influenciar em momentos de contradição extrema com valores centrais, testando VONTADE + RES com modificador Grave no alvo.

Grau Crítico: posse absoluta. O personagem original não tem nenhum acesso a ações. A entidade usa o corpo e as capacidades como se fossem os seus. Resistência interna impossível exceto por condição específica de exorcismo.

Notas: exorcismo ou ritual de separação obrigatório para remoção. A identidade do personagem original permanece intacta internamente durante a possessão.


### Controle Mental

Diferente da Possessão, o Controle Mental não envolve uma entidade habitando o corpo. É uma interferência direta na cognição e na volição por técnica ou magia. O personagem ainda é ele mesmo mas suas decisões estão sendo interceptadas e substituídas por um agente externo. Recomendado para campanhas com magia mental avançada ou antagonistas que usem controle cognitivo.

Fonte: técnica de controle mental de alto nível.
Atributos testados: VONTADE + INT
Alvo do teste: (VONTADE + INT) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: interferência cognitiva leve. O controlador pode sugerir uma ação por turno. O personagem pode recusar testando VONTADE + INT vs 40.

Grau Moderado: interferência significativa. O controlador define uma ação por turno. Resistir exige teste de VONTADE + INT com modificador Leve no alvo.

Grau Grave: controle dominante. O controlador define todas as ações. Resistir exige teste com modificador Moderado. O personagem pode tentar em momentos de contradição extrema com valores centrais.

Grau Crítico: controle absoluto. O personagem age como instrumento do controlador sem possibilidade de resistência espontânea.

Notas: diferente da Possessão, o Controle Mental termina imediatamente se o controlador for incapacitado ou morto. Remoção pela quebra da fonte ou técnica específica de liberação mental.


### Provocação Forçada

O personagem está compelido a concentrar toda a atenção em um alvo específico. A compulsão é de engajamento, e corre fora dos motores de Medo e de Fascínio. O personagem não consegue ignorar o alvo nem redirecionar atenção para outros. Recomendado para campanhas com sistemas de controle de ameaça ou criaturas com esse tipo de capacidade.

Fonte: técnica de provocação forçada, aura específica de criatura.
Atributos testados: VONTADE + SAB
Alvo do teste: conforme tipo de fonte.

Grau Leve: atenção prioritária no alvo. Redução de 15% em PRE para perceber outros alvos. Ações contra outros alvos com penalidade de 10%.

Grau Moderado: compulsão crescente. Redução de 30% em PRE para outros alvos. Ações contra outros exigem teste de VONTADE + SAB vs 35.

Grau Grave: compulsão dominante. O personagem só age contra o alvo declarado. Ações contra outros exigem teste de VONTADE + SAB vs 50. Falhar resulta na ação sendo redirecionada ao alvo da provocação.

Grau Crítico: fixação total. O personagem não consegue agir contra nenhum outro alvo. Toda ação ofensiva é automaticamente redirecionada ao alvo da provocação. Técnicas de área que incluam o alvo são permitidas.

Notas: se o alvo da provocação se tornar inalcançável ou inválido, o efeito termina automaticamente. Remoção pela regra universal.


## FAMÍLIA VI · RECURSOS MÁGICOS e ENERGÉTICOS OPCIONAL

Esta família inteira é ativada apenas em campanhas que possuam sistema mágico ou sobrenatural como mecânica central. Em campanhas sem energia sobrenatural como recurso, esses efeitos não existem. O Mestre deve declarar quais efeitos desta família estão disponíveis conforme os elementos do cenário.


### Silêncio Mágico

O personagem não consegue usar técnicas que dependam de componente vocal, concentração verbalizada, ou canal energético que passe pela voz. Diferente da Mudez, que é uma lesão física da garganta, o Silêncio Mágico bloqueia especificamente a via sobrenatural da voz sem impedir a comunicação normal.

Fonte: técnica de silêncio mágico, campo de supressão sonora sobrenatural.
Atributos testados: VONTADE + INT
Alvo do teste: (VONTADE + INT) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: técnicas com componente vocal obrigatório custam 25% a mais de RC.

Grau Moderado: técnicas com componente vocal obrigatório custam 50% a mais de RC. Vocalização mágica exige teste de VONTADE + INT vs 35.

Grau Grave: técnicas com componente vocal obrigatório são inacessíveis. Outros tipos de técnica funcionam normalmente.

Grau Crítico: qualquer técnica que use a voz como canal, mesmo secundariamente, é bloqueada. Técnicas puramente mentais e de reforço físico ainda funcionam.

Notas: remoção pela regra universal. Duração base de 3 turnos.


### Supressão de Energia

O acesso à reserva de energia sobrenatural do personagem está sendo bloqueado ou comprimido. Diferente da Drenagem de Canal, que reduz a RC máxima, a Supressão bloqueia categorias inteiras de técnica independente da RC disponível.

Fonte: técnica de supressão de energia, campo de inibição mágica.
Atributos testados: VONTADE + INT
Alvo do teste: (VONTADE + INT) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: técnicas ofensivas de emissão externa custam 25% a mais de RC.

Grau Moderado: técnicas ofensivas e de emissão externa custam 50% a mais de RC.

Grau Grave: técnicas ofensivas e de emissão externa inacessíveis. Técnicas de reforço pessoal e passivas funcionam normalmente.

Grau Crítico: todas as técnicas ativas inacessíveis. Apenas passivas e reforço físico básico funcionam.

Notas: remoção pela regra universal. Grau Crítico com modificador Moderado obrigatório.


### Selamento

Reserva completamente inacessível. O personagem não pode usar nenhuma técnica sobrenatural. Diferente da Supressão, o Selamento não bloqueia categorias, bloqueia o acesso à fonte inteira. O personagem está essencialmente sem poder sobrenatural durante a duração. Grau mínimo Grave por definição. Selamento não tem versão leve ou moderada porque o conceito pressupõe bloqueio completo.

Fonte: técnica de selamento de alto nível.
Atributos testados: VONTADE + INT
Alvo do teste: (VONTADE + INT) x (1 - RC nominal da técnica / RC máxima do atacante). Range começa em Grave.

Grau Grave: Reserva completamente inacessível. O personagem é um combatente puramente físico durante a duração. Duração definida pela técnica causadora.

Grau Crítico: Reserva inacessível mais redução de 50% em todos os atributos físicos. O ato de selar comprometeu o equilíbrio interno do personagem. Duração definida pela técnica.

Notas: sem teste de quebra antecipada. Duração é fixa pela fonte. Apenas destruição ou incapacitação da fonte pode encerrar antecipadamente.


### Dessincronização

O controle sobre a energia sobrenatural está instável. O personagem ainda acessa a reserva mas o custo de todas as técnicas aumenta porque a energia não flui com eficiência normal. Representa interferência na frequência ou no canal de energia do personagem.

Fonte: técnica de perturbação de frequência energética, campo de interferência.
Atributos testados: VONTADE + INT
Alvo do teste: (VONTADE + INT) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: custo de todas as técnicas aumentado em 15%.

Grau Moderado: custo aumentado em 30%.

Grau Grave: custo aumentado em 50%. Técnicas de alto custo que superem 70% do RC máximo atual ficam inacessíveis.

Grau Crítico: custo aumentado em 70%. Apenas técnicas de custo mínimo são viáveis.

Notas: duração de 3 turnos. Remoção pela regra universal.


### Drenagem de Canal

A RC máxima disponível do personagem está sendo comprimida temporariamente. O que a redução move é o teto, e a reserva já gasta permanece como está. Técnicas que exijam mais RC que o novo teto ficam inacessíveis durante a duração.

Fonte: técnica de compressão energética.
Atributos testados: VONTADE + RES
Alvo do teste: (VONTADE + RES) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: RC máximo reduzido em 15%.

Grau Moderado: RC máximo reduzido em 30%.

Grau Grave: RC máximo reduzido em 50%.

Grau Crítico: RC máximo reduzido em 70%. A maioria das técnicas avançadas fica inacessível.

Notas: duração de 4 turnos fixos. Sem teste de remoção antecipada. Aguarda duração completa.


### Corrosão de Energia

RC sendo drenado ativamente por turno por contaminação mágica. Diferente da Drenagem de Canal, que reduz o teto, a Corrosão remove RC atual progressivamente. É um DoT de recurso mágico.

Fonte: técnica de corrosão de energia, substância de origem mágica.
Atributos testados: VONTADE + INT
Alvo do teste: (VONTADE + INT) x (1 - RC nominal da técnica / RC máxima do atacante)
Valor base do DoT: INT do causador multiplicado por 0,3 em RC drenado por turno.

Grau Leve: DoT base. Sem penalidade adicional.

Grau Moderado: DoT base mais custo de técnicas aumentado em 15%.

Grau Grave: DoT base mais custo de técnicas aumentado em 30% mais redução de 15% em INT.

Grau Crítico: DoT base mais custo de técnicas aumentado em 50% mais redução de 30% em INT. Se RC chegar a 0 enquanto o efeito estiver ativo, redução de 20% em todos os atributos por colapso energético.

Notas: remoção pela regra universal. Grau Crítico com modificador Moderado obrigatório.


### Marca e Maldição

Energia hostil foi cravada no personagem por uma fonte externa. A marca drena energia passivamente e pode ser ativada remotamente pelo emissor para causar dano direto. Diferente de outros efeitos de energia, a Marca persiste entre sessões se não for removida.

Fonte: técnica de gravação de energia hostil.
Atributos testados: VONTADE + RES
Alvo do teste: (VONTADE + RES) x (1 - RC nominal da técnica / RC máxima do atacante)
Valor base de drenagem passiva: INT do emissor multiplicado por fator do grau em RC por turno.

Grau Leve: drenagem de INT do emissor multiplicado por 0,2 em RC por turno. Ativação remota causa dano de INT do emissor.

Grau Moderado: drenagem de INT multiplicado por 0,3. Ativação causa dano de INT multiplicado por 1,5.

Grau Grave: drenagem de INT multiplicado por 0,4. Ativação causa dano de INT multiplicado por 2,0. Redução de 15% em VONTADE.

Grau Crítico: drenagem de INT multiplicado por 0,5. Ativação causa dano de INT multiplicado por 3,0. Redução de 30% em VONTADE. O emissor pode sentir a localização do marcado a qualquer momento.

Notas: persiste entre sessões se não removida. Remoção exige técnica de purificação de rank compatível com o poder do emissor. Descanso não remove.


### Maldição de Morte

Um contador regressivo foi aplicado. Quando chegar a zero, o personagem morre independente do PV atual. A urgência de remover o efeito antes do contador acabar é a mecânica central. Recomendado para campanhas com magia de morte, rituais ou antagonistas que usem execução programada.

Fonte: técnica de maldição de morte, ritual específico.
Atributos testados: VONTADE + RES
Alvo do teste: (VONTADE + RES) x (1 - RC nominal da técnica / RC máxima do atacante)

Grau Leve: contador de 6 turnos. Sem efeito adicional além da contagem.

Grau Moderado: contador de 4 turnos. Redução de 15% em todos os atributos pela pressão psicológica do contador.

Grau Grave: contador de 3 turnos. Redução de 30% em todos os atributos. O personagem sente fisicamente a aproximação da morte.

Grau Crítico: contador de 2 turnos. Redução de 50% em todos os atributos. Sem técnica de remoção específica, morte garantida.

Notas: remoção exige técnica de quebra da maldição, item específico, ou condição declarada pela fonte. A tentativa de remoção custa ação completa e exige teste de cura ou purificação vs CD declarada pela fonte.


## FAMÍLIA VII · VULNERABILIDADE e EXPOSIÇÃO OPCIONAL


### Inflamável

O personagem ou uma área do personagem está coberta de substância combustível. Não causa dano por si só, mas amplifica drasticamente qualquer dano de fogo ou calor recebido enquanto ativo. Recomendado para campanhas onde fogo é elemento tático relevante.

Fonte: substância combustível aplicada, técnica específica, ambiente.
Atributos testados: DES + VEL para evitar a aplicação.
Alvo do teste: conforme tipo de fonte.
Efeito: multiplicador de dano de fogo e calor enquanto ativo.

Grau Leve: dano de fogo e calor recebido aumentado em 25%.

Grau Moderado: dano de fogo e calor aumentado em 50%. Queimadura aplicada automaticamente em qualquer dano de fogo recebido, no mínimo Leve.

Grau Grave: dano de fogo e calor aumentado em 75%. Queimadura de grau igual ao do ataque de fogo recebido aplicada automaticamente.

Grau Crítico: dano de fogo e calor aumentado em 100%. O personagem pode se tornar fonte de dano de fogo para adjacentes se atingido por fogo de dano severo.

Notas: qualquer fonte de água, areia ou abafamento remove o efeito imediatamente em qualquer grau. Duração variável conforme a substância.


### Vulnerabilidade Elemental

O personagem está temporariamente mais suscetível a um tipo específico de dano. Pode ser resultado de exposição ao elemento oposto, de técnica específica, ou de condição mágica. O tipo do elemento afetado é declarado pela fonte. Recomendado para campanhas com sistema elemental definido.

Fonte: técnica de vulnerabilidade, exposição ao elemento oposto, condição mágica.
Atributos testados: RES + FOR
Alvo do teste: conforme tipo de fonte.
O elemento afetado é declarado no momento da aplicação.

Grau Leve: dano do elemento declarado aumentado em 20%.

Grau Moderado: dano do elemento aumentado em 40%.

Grau Grave: dano do elemento aumentado em 60%. Efeitos secundários do elemento têm CD aumentada em 10%.

Grau Crítico: dano do elemento aumentado em 80%. Efeitos secundários do elemento aplicados automaticamente sem teste de resistência.

Notas: remoção pela regra universal. Duração de 3 a 4 turnos conforme a fonte.

Três dos quatro graus publicavam também uma redução de Resistência ao elemento, e a cláusula caiu sem substituta. O sistema não possui, e nunca possuiu, resistência elemental como grandeza reduzível por percentual: o que existe é o Estado Elemental declarado na ficha da obra que o produz, e a vulnerabilidade acoplada dele já é um pacote fechado com dono próprio. Repontar esta condição para lá criaria duas fontes para o mesmo efeito. O que a condição faz, ela faz pelo aumento de dano e pelas cláusulas de efeito secundário, que operam sobre grandezas que existem.


### Frostbite

O frio intenso causou dano imediato e deixou um estado debilitante residual. Diferente do Congelamento, que é progressivo, o Frostbite representa o estado após uma exposição aguda intensa: o dano físico já aconteceu e o que persiste é a degradação do sistema. Recomendado para campanhas onde gelo é elemento tático central com mecânicas específicas.

Fonte: técnica de gelo de alto impacto, ambiente de frio extremo concentrado.
Atributos testados: RES + FOR
Alvo do teste: (RES + FOR) x (1 - dano / PV máximo da vítima)

Nota sobre aplicação: Frostbite é aplicado após um dano inicial de frio. O dano do golpe já foi calculado normalmente. O Frostbite representa o estado residual após o impacto.

Grau Leve: redução de 15% em VEL. PS drena 15% mais rápido por qualquer ação física. Duração de 3 turnos.

Grau Moderado: redução de 30% em VEL e 10% em DES. PS drena 25% mais rápido. Redução de 10% na absorção de dano. Duração de 3 turnos.

Grau Grave: redução de 50% em VEL e 20% em DES. PS drena 40% mais rápido. Redução de 20% na absorção de dano. Qualquer técnica com componente de movimento tem custo de PS adicional. Duração de 4 turnos.

Grau Crítico: redução de 70% em VEL e 30% em DES. PS drena 60% mais rápido. Redução de 30% na absorção de dano. Risco de Congelamento Grau Leve se exposto a qualquer fonte adicional de frio durante a duração. Duração de 4 turnos.

Notas: fogo ou calor remove o efeito imediatamente em qualquer grau. Sem fonte de calor, remoção pela regra universal com modificador Leve obrigatório em todos os graus.


## FAMÍLIA VIII · CONDIÇÕES ESTRUTURAIS OPCIONAIS


### Fome e Desidratação

O personagem está privado de nutrição ou hidratação básica. O efeito é consequência de sobrevivência negligenciada e opera em horas ou dias, fora da escala de turno do combate. Recomendado para campanhas de sobrevivência ou exploração onde gestão de recursos é mecânica central.

Fonte: privação de alimento ou água ao longo do tempo.
Sem teste de aplicação. Progressão automática conforme tempo de privação.

Para fome: atributos afetados primariamente são FOR e RES. Secundariamente INT e SAB.
Para desidratação: progressão mais rápida que a fome. Atributos afetados são RES e FOR primariamente, com impacto em VEL e DES mais cedo.

Grau Leve: entre 8 e 24 horas de privação. Redução de 10% nos atributos primários.

Grau Moderado: entre 24 e 48 horas. Redução de 25% nos atributos primários e 10% nos secundários. PS não recupera completamente em descanso.

Grau Grave: entre 48 e 72 horas. Redução de 45% nos atributos primários e 25% nos secundários. Inconsciência possível após combate extenuante sem alimentação.

Grau Crítico: acima de 72 horas ou menos tempo com privação severa. Redução de 60% nos atributos primários e 40% nos secundários. Morte possível sem intervenção.

Notas: consumo de alimento ou água adequados reverte o grau conforme a quantidade e qualidade do que foi consumido. Desidratação avança mais rápido em ambientes quentes ou após esforço físico intenso.


### Corrupção

Uma influência sombria está degradando o personagem progressivamente. Diferente da Necrose que ataca o tecido, a Corrupção afeta o núcleo do personagem, seus valores, sua identidade, suas capacidades centrais. Opera entre sessões e é difícil de detectar nos estágios iniciais. Recomendado para campanhas com elementos sombrios progressivos, artefatos corrompidos ou entidades de influência gradual.

Fonte: exposição prolongada a artefato corrompido, entidade sombria, técnica de corrupção gradual.
Aplicação narrativa. Progressão entre sessões conforme exposição contínua.

Grau Leve: influência presente mas sutil. Redução de 10% em VONTADE e SAB. O personagem pode ter impulsos estranhos que reconhece como externos.

Grau Moderado: corrupção estabelecida. Redução de 20% em VONTADE, SAB e INT. O personagem pode agir contra seus valores em situações de pressão extrema sem perceber a influência.

Grau Grave: corrupção dominante. Redução de 35% em VONTADE, SAB, INT e CAR. O personagem está sendo alterado em nível de personalidade. Aliados próximos percebem a mudança. Habilidades ou técnicas de origem podem se tornar instáveis.

Grau Crítico: transformação avançada. Redução de 50% em todos os atributos mentais. O personagem pode estar se tornando algo diferente do que era. Sem intervenção, a condição pode ser irreversível.

Notas: remoção exige resolução narrativa profunda e frequentemente ritual, purificação especializada ou confronto direto com a fonte da corrupção. Descanso não atenua. Grau Crítico pode ser permanente.


## FAMÍLIA IX · EFEITOS DERIVADOS OPCIONAIS


### Necrose Avançada

A Necrose não foi tratada e atingiu um ponto onde o dano ao PV máximo está acontecendo ativamente, não apenas como ameaça futura. É a progressão direta de Necrose Grave ou Crítico não tratados.

Fonte: automática. Deriva de Necrose Grave ou Crítico não tratados por tempo suficiente.

Grau Leve: PV máximo perdendo 5% por sessão. DoT de Necrose original continua presente.

Grau Moderado: PV máximo perdendo 10% por sessão. DoT aumentado em 50%.

Grau Grave: PV máximo perdendo 15% por sessão. DoT duplicado. Redução adicional de 20% em RES.

Grau Crítico: PV máximo perdendo 20% por sessão. DoT triplicado. Morte a médio prazo sem intervenção especializada imediata.

Notas: remoção exige purificação especializada de rank compatível com o grau. Quanto mais avançado, mais difícil e custosa a remoção.


### Congelamento Total

O Congelamento progrediu para imobilização completa por formação de gelo no corpo. É a versão extrema de Congelamento Grave ou Crítico não tratados, ou resultado de exposição direta de alto nível.

Fonte: automática por progressão de Congelamento, ou aplicada diretamente por técnica de alto nível.

Grau Leve: movimento extremamente limitado. Redução de 50% em VEL e DES. Apenas 1 ação de movimento por turno.

Grau Moderado: movimento quase impossível. Redução de 70% em VEL e DES. Ação de movimento exige teste de FOR vs 45. Ataques recebidos com 20% de bônus no alvo do atacante.

Grau Grave: imobilização quase completa. Redução de 70% em VEL, DES e FOR. Ataques recebidos com 30% de bônus. Apenas ações que não exijam movimento físico disponíveis.

Grau Crítico: imobilização total. O personagem está congelado completamente. Não pode agir. Ataques físicos contra o personagem têm 40% de bônus no alvo mas dano severo pode fragmentar. Fogo ou calor intenso remove imediatamente.

Notas: fogo ou calor remove em qualquer grau. Sem calor, remoção exige intervenção externa ativa.


### Colapso Mental

O sistema psicológico do personagem entrou em colapso após acúmulo de Trauma, Pânico repetido, ou eventos extremos em sequência muito próxima. Diferente do Trauma Psicológico que é uma condição específica, o Colapso Mental representa a falha do sistema como um todo.

Fonte: automático após Pânico Crítico repetido, Trauma Psicológico não tratado em graus elevados, ou eventos extremos em sequência sem recuperação.

Grau Leve: o personagem não consegue processar novas informações com clareza imediatamente após o colapso. Redução de 20% em INT e SAB por 1 sessão.

Grau Moderado: dissociação parcial. Redução de 35% em INT, SAB e PRE. Descanso longo comprometido. Duração de 2 sessões sem tratamento.

Grau Grave: colapso funcional. Redução de 50% em todos os atributos mentais. O personagem pode ter dificuldade em realizar tarefas complexas. Duração indefinida sem tratamento.

Grau Crítico: colapso completo. Redução de 70% em todos os atributos mentais. O personagem não consegue participar ativamente de decisões complexas. Inconsciência em situações de pressão alta.

Notas: remoção exige tratamento narrativo e tempo. Grau Crítico pode exigir múltiplas sessões de recuperação com apoio de aliados.
