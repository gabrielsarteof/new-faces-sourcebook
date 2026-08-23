---
id: naruto.system.technique-requirements
title: "Manual de Requisitos de Técnica"
version: 2.3
layer: scenario
scenario: naruto
type: system
status: final
source-file: Manual_de_Requisitos_de_Tecnica_v2.md
---

Manual de Requisitos de Técnica · v2.3

Governa os portões de acesso a técnicas do RPG Canônico 1:1 de Naruto. Define o que um shinobi precisa ter na ficha para executar uma técnica, e nada além disso.

Este documento não trata de dano, custo de chakra, canalização ou efeito, que pertencem ao Manual de Criação de Jutsus. Não trata de camada de acesso, autoria ou etiquetagem editorial, que pertencem à Norma de Produção de Compêndios.

Esta versão substitui o portão de Base da v1 pela Régua de Exigência de Moldagem, publicada em Controle de Chakra v2. O portão anterior pedia de 80 a 112 pontos de Base isolada no rank A, valores inalcançáveis no Núcleo de Perícias v2, onde a Base de Nível tem teto de 50 e cada caminho adicional soma de quatro a cinco. Nenhum praticante do sistema podia cumpri-lo.

**O que mudou na v2.2.** A Régua de Exigência de Moldagem de seis degraus nomeados, publicada na seção 3.2 desde a v1, está revogada. Exigência de Moldagem é maestria acumulada, grandeza contínua por definição, e nunca deveria ter sido tabela de nomes fixos: a doutrina do Manual de Criação de Poderes seção 1.4 já declarava que saída contínua lê o teste e nunca a categoria fixa. A Exigência passa a ser declarada por cada entrada de compêndio como número contínuo, ancorada contra as Tabelas de Referência de Personagens e contra quem executa a técnica no cânone, no mesmo tratamento que o coeficiente técnico já recebia. A elevação por propriedade da antiga seção 4 deixa de subir uma casa nomeada e passa a somar um valor declarado entre 6 e 14, incorporada à seção 3.3. A regra de que efeito ligável nunca entra em portão, já praticada pelo documento do Sharingan, sobe a regra geral na nova seção 3.4.

1. Os dois eixos

Uma técnica cobra duas coisas diferentes, e o sistema precisa de uma porta para cada.

Profundidade. Até onde o shinobi levou aquela linha de estudo. É medida pelo nível de perícia e governada pelo portão de rank.

Domínio. Quanta maestria acumulada o refinamento daquela técnica exige. É medida pela soma da Base Total com o atributo regente do Controle de Chakra e governada pela Régua de Exigência de Moldagem.

Rank mede volume, custo e alcance do efeito. Nenhuma dessas três coisas diz quanto refinamento a técnica cobra, e é por isso que o portão de rank sozinho trata como iguais duas técnicas de mesmo rank com exigências de controle opostas.

2. Portão de rank

O nível da perícia relevante define o rank máximo acessível.

Nível	Rank destravado
LV1	E
LV2	D
LV3	C
LV4	B
LV5	A
LV6	S

Regra universal, sem exceção por domínio. Vale para as sete naturezas, para o Ninjutsu Médico e para todo domínio que venha a existir.

O portão de rank de cada domínio é publicado pela perícia daquele domínio, que soma a Base Total ao próprio atributo regente. No Raiton, o LV5 resolve em 71, com Base 45 e INT 26.

3. Portão de moldagem
3.1 Dois eixos que não coincidem

O coeficiente técnico mede quanto a técnica recompensa quem tem controle: é o termo que alimenta o `w` da maestria, declarado por toda técnica do sistema e publicado na Seção 5.3 do Manual de Criação de Jutsus, com o `w` lendo metade dele e o `M` escalando a base inteira do dano. Nenhum valor de coeficiente é alterado por esta versão.

Dependência de moldagem	coef_técnica	Exemplo
A técnica existe pela moldagem	3,0	Rasengan
Alta, a moldagem é o mecanismo central	2,0	Chidori, Raikiri
Média, a moldagem intensifica o efeito	1,0	Katon genérico, Chidori Nagashi
Baixa, a moldagem é auxiliar	0,5	Taijutsu infundido simples
Nenhuma, força bruta	0,0	Projétil sem forma

A Exigência de Moldagem, seção 3.2, mede outra coisa: quanto controle a técnica cobra para existir, e não quanto ela recompensa quem o tem. A correlação entre as duas é fraca. O Rasengan carrega coef_técnica 3,0, o valor máximo, porque o dano dele é inteiramente maestria, e foi aprendido por um genin de doze anos com o pior controle de chakra da geração, em três etapas, com um clone segurando a moldagem: recompensa alta, entrada baixa. O Raikiri é o inverso, coeficiente 2,0 e uma exigência de compressão que quase custou o braço de quem a criou. Os dois eixos correm independentes: o coeficiente técnico continua governando o peso da maestria no dano, pelo `w`, e a Exigência deixa de ler dele.

3.2 A Exigência é declarada, não derivada

A moeda é a Base Total somada a SAB, sem camadas condicionais, porque capacidade destravada é permanente.

A Exigência de Moldagem é um número contínuo declarado por cada entrada de compêndio, e não uma fórmula sobre o coeficiente técnico nem um degrau de nome fixo. A régua de seis degraus nomeados que esta seção publicava — Trivial, Básica 30, Plena 44, Alta 58, Refinada 71, Absoluta 84 — está revogada: saída contínua lê o teste e nunca a categoria fixa, pela doutrina do Manual de Criação de Poderes seção 1.4, e Exigência de Moldagem é maestria acumulada, grandeza contínua por definição.

A entrada ancora o valor contra as Tabelas de Referência de Personagens e contra quem executa a técnica no cânone, com que idade e sob que condição, no mesmo tratamento que esta seção já concede ao coeficiente técnico: contínuo, com a tabela de calibragem como âncora de referência e não como lista fechada. Rank e Exigência se descolam por construção — o primeiro mede o que a técnica faz em combate, o segundo mede o controle que ela cobra para existir — e volume não é fineza: técnica que vence pela massa expelida cobra pouco, ainda que seja a mais destrutiva do domínio.

Nenhuma entrada desce em relação ao valor já publicado, salvo exceção aprovada nominalmente pela entrada.

3.3 Elevação por propriedade

Fora do motor de dano, a Exigência soma um valor declarado entre 6 e 14 pontos por propriedade presente na técnica, entre as quatro abaixo. A entrada nomeia qual propriedade produziu a elevação.

Proporção interna fina. Sustentação prolongada. Escala mínima de moldagem. Tolerância zero a excesso de volume.

A última resolve o Bunshin no Jutsu executado por praticante de reserva colossal: rank E somando 12 por tolerância zero a excesso de volume, resolvendo 38 contra o piso do domínio.

3.4 Efeito ligável nunca entra em portão

Dōjutsu, estado sustentado e qualquer efeito que possa ser ligado e desligado incidem sobre o teste, aplicados por último e em percentual sobre o valor já resolvido, e nunca sobre portão de espécie alguma, de rank ou de moldagem. Capacidade destravada é permanente e não pode depender de um olho aceso agora e apagado no turno seguinte. O documento do Sharingan já publicava a regra para o próprio caso, ao declarar que o bônus de Controle de Chakra do olho não altera o piso exigido como pré-requisito de jutsu; esta seção promove a linha a regra geral do sistema. Vantagem de clã permanente e equipamento permanecem sem dono declarado, em aberto no registro de silêncios da Auditoria de Cálculos Rápidos.

3.5 Por que a régua não lê o teste

O portão lê a Base Total somada ao atributo, e não o teste final. O teste varia com o tipo de situação, com a inclinação empregada, com a especialização do caminho e com modificadores de clã e de vantagem, o que o tornaria inconferível e diferente a cada rolagem. A Base Total é um número único por perícia na ficha, e o atributo é um número único na ficha do personagem.

O portão de rank e o portão de moldagem correm em paralelo e não se encadeiam. O primeiro lê a perícia do domínio com o atributo dela, o segundo lê o Controle de Chakra com SAB. Uma técnica cobra os dois, e o praticante compra os dois na ordem que quiser.

4. Requisito de caminho

Técnica executada por verbo de especialização exige o caminho declarado na ficha, além do portão numérico. O caminho é requisito próprio e não substitui a Exigência de Moldagem: os dois se declaram juntos na entrada, quando ambos se aplicam.

O Chidori exige o caminho Ponta da inclinação Relâmpago, e a perfuração de Absorção que a técnica exibe é lida do efeito Fio Concentrado daquele caminho, e não declarada pela técnica.

5. Requisitos que já existiam

Este documento reúne, sem alterar, os portões que o sistema já operava.

Natureza. Técnica de natureza exige a perícia daquela natureza. Sem ela, a técnica é inexecutável, e não apenas mais cara. Naturezas do eixo do Onmyōton seguem a mesma regra das elementais.

Posição na escada. Praticante que executa em natureza aprendida multiplica por 1,3 a RC nominal e o custo mínimo da técnica, com a penalidade de teste da Escada de Afinidade em vigor conforme o Sistema Elemental v7, que fixa mais quinze na Afinidade, mais oito na Compatibilidade e menos quinze na natureza aprendida. Isso encarece a execução e não bloqueia o acesso.

Controle de Chakra. Toda técnica declara sua Exigência de Moldagem, número contínuo definido pela entrada conforme a seção 3.2, e não mais um degrau de nome fixo.

Requisitos não mecânicos. Contrato de invocação, condição de campo, fisiologia específica e demais exigências declaradas pela entrada.

6. Declaração na entrada

Toda técnica declara seus requisitos em bloco próprio, na ordem:

Rank: A
Requisitos: Raiton LV5 · Moldagem 71 · Caminho Ponta

Quando houver elevação por propriedade, ela aparece com a propriedade que a produziu e o valor já somado:

Requisitos: Katon LV6 · Moldagem 84 (elevada +12 por sustentação prolongada de três
focos simultâneos) · Caminho declarado pela entrada

O coeficiente técnico, quando a técnica tiver efeito de dano, é declarado à parte na ficha individual, junto do coeficiente de entrega, conforme o Manual de Criação de Jutsus seção 5.3, e não entra no bloco de requisitos do compêndio.

7. Fronteira com a camada de acesso

O portão de rank e o portão de moldagem são objetivos e verificáveis na ficha, o que os situa integralmente dentro da camada Requisito Mecânico da Norma de Produção de Compêndios.

Eles convivem com qualquer camada de acesso e não a substituem. Uma técnica de Patrimônio de Vila continua exigindo justificativa na ficção, e uma técnica de Autoria Aberta continua indisponível na criação, independentemente de quanto o personagem possua nos dois portões.

8. Pendências

[pendente] A escala de dificuldade não existe em documento algum. O Núcleo declara limiar igual ao teste dividido pela dificuldade fixada e multiplicado por cinquenta, e nenhuma tabela de dificuldade foi publicada. Os portões deste manual não dependem dela, porque comparam valores diretos, mas toda técnica que resolve por teste depende.

Resolvidas em v2.1: a ambiguidade do termo bônus_CC, substituído pelo Fator de Moldagem na seção 5.3 do Manual de Criação de Jutsus, que lê nível de perícia e não Base; e o recálculo das âncoras canônicas de validação, que passaram a ser publicadas por nível de Controle de Chakra.

Resolvida em v2.3: as duas citações da seção 3.1 ao Fator de Moldagem somado, termo que a Seção 5.3 do Manual de Criação de Jutsus revogou. O coeficiente técnico permanece exatamente onde estava e com os mesmos valores, e passa a ser descrito como o termo que alimenta o `w`. Nenhum portão, nenhuma tabela de coeficiente e nenhuma Exigência publicada mudou.

Resolvida em v2.2: a régua de seis degraus nomeados da Exigência de Moldagem, revogada pela seção 3.2, com a Exigência de cada técnica publicada passando a número contínuo declarado por entrada de compêndio. O termo bônus_CC segue sobrevivendo em `Template_Documento_Tecnica_v3.md`, que continua instruindo o autor a usá-lo e a publicar coluna de descarga com ele: a errata está aberta contra o template e não contra este documento.

9. Documentos relacionados

Manual de Criação de Jutsus, para rank, custo, canalização, coeficientes e dano. Controle de Chakra v2, para a Régua de Exigência de Moldagem, o Índice de Desperdício e a Interface de Selos. Núcleo de Perícias v2, para a composição da Base. Núcleo do Sistema, para a resolução de testes. MANUAL_ECONOMIA_XP, para custos. Sistema Elemental, para a Escada de Afinidade e o multiplicador de dispersão. Norma de Produção de Compêndios, para camadas de acesso e formato de entrada.
