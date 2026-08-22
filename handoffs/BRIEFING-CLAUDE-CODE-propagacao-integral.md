---
id: briefing.claude-code.propagacao-integral
title: "BRIEFING CLAUDE CODE — Propagação Integral do Motor de Jutsus e Conexão"
version: 1.0
layer: briefing
status: pronto-para-execucao
---

# BRIEFING CLAUDE CODE — Propagação Integral

Fonte única de verdade: `CONSOLIDADO-FINAL-motor-de-jutsus-e-conexao.md`, mais os handoffs fechados do Lote 1 e do Lote de Vetores. Manual primeiro, código depois. Nenhum valor inventado para lacuna: lacuna volta como lista de exceções. Toda decisão já está pré-resolvida; ambiguidade real vira RFC de uma pergunta, nunca escolha silenciosa.

---

## Tarefa 1. Núcleo de Combate v3 (reescrita cirúrgica)

O arquivo vigente no repositório está obsoleto (Potência, d100, Absorção subtrativa). Recorte cirúrgico, não reescrita total.

**Morre:** toda ocorrência de Potência e de coeficientes de arma sobre ela; a rolagem de d100 de Esquiva e de Crítico da sequência de resolução; a Absorção subtrativa com piso de 10%; o Limiar de Esquiva como grandeza de ficha; a Guarda seca sem perícia.

**Entra:** o motor físico do Lote 1 (três golpes, Guarda com perícia, recarga metade de DEF × 5, PS do defensor por ponto absorvido); a Absorção proporcional; os quatro vetores e chassis do Lote de Vetores por referência; a Esquiva como teste oposto base cinquenta, lado ofensivo pela cadeia de Velocidade efetiva do Consolidado (Seção 3), lado defensivo VEL + DES + bônus de esquiva, com as isenções de corpo e de área; a Cadência documentada (razão de VEL, ≥1,5 uma ação extra, ≥2,5 duas, teto duas, Esforço próprio por ação); a regra de que o PS drenado pela Guarda conta como Esforço contra o Limiar; **o crítico permanece como está, com a rolagem de d100 intacta** (decisão fechada por Gabriel; deixa de ser pendência). A proibição de rolagem do MCJ aplica-se ao **acerto**, não à qualidade do golpe: o crítico pressupõe conexão já resolvida pelo teste oposto e pergunta apenas se o golpe pegou especialmente bem. O documento deve declarar essa distinção em uma frase, para que a remoção do d100 da Esquiva não seja lida como remoção do d100 do crítico. Nenhum número do crítico é alterado.

**Sobrevive intacto:** a economia de PS da Seção 7, a tabela de Exaustão Física (documentando o acoplamento com a recarga da Guarda), o motor de manobras, vantagem numérica, dano de fonte sem ficha (trocando Potência da fonte por Energia da fonte, mesma grandeza renomeada), área e campo.

**Correções herdadas da fila do Lote de Vetores:** teste do defensor pesado corrigido de 31 para 39; pendência de regeneração de PS retirada; redação da tabela de rider natural do Sistema Elemental corrigida para tendência.

## Tarefa 2. Manual de Criação de Jutsus v3

Seções do motor de dano substituídas pela fórmula do Consolidado (Seção 2), com pisos no lugar de bandas, executor de referência, teto anti-inflação com executor uma faixa acima, cláusula de área por valor de campo e célula de quatro. Seção nova de Velocidade da obra com a cadeia de quatro fatores, a escada de meios, as isenções e os três canais de maestria. Seção 6.5 do Perfil de Evasão recortada: sai o eixo de velocidade, ficam as propriedades de construção; sobretaxa Veloz por velocidade revogada (a de construção permanece por degrau). Seção 4.1.3 de XP: posição por entrega na dupla leitura para ofensivas, Régua de Resposta para úteis, convivência com a apuração mantida. Regra da RC limpa e da nominal limpa declarada. Errata do mult_Tipo para CM × Assinatura absorvida conforme o briefing de abertura. Validação: as três âncoras de calibração antigas (Chidori, Kirin, Goukakyuu) recalculadas pela régua nova e republicadas.

## Tarefa 3. Erratas de ficha (uma linha cada onde possível)

1. Nominais limpas: Raikiri 1.500; Eisō, Senbon, Nagashi e Shiden 783; Kieru 913; Chidori intocado em 750. Escada de proporção da família do Chidori recalculada sobre a raiz limpa (Raikiri 2,00), com XP recalculado pela régua nova.
2. Família de Dano de todo documento de técnica: a linha da fórmula troca para o motor do Consolidado; RC, coeficientes e w (lido do coeficiente técnico ÷ 2) permanecem declarados como estão.
3. Todo documento de técnica passa a declarar: vetor, grau quando aplicável, riders, Velocidade (celeridade do meio com desvio quando houver) e Perfil de Evasão recortado. Herda a exigência da fila do Lote de Vetores.
4. Rasengan: coeficiente técnico 3,0 permanece (w 1,5); a errata antiga de descer para 2,4 fica revogada, superada pelo motor multiplicativo que a tornou desnecessária.
5. Grau V de Penetração: exemplo publicado, agulha de Fūton comprimida.
6. Riders físicos: escada de penalidade 15/30/50/70 sobre os pares de atributos, espelhando a Queimadura, publicada no Sistema de Efeitos de Status.

## Tarefa 4. Repasse integral do corpus (o lote grande)

Cerca de 300 entradas ofensivas em 14 compêndios mais 52 fichas avulsas. Duas fases, herdando o desenho da decisão 6 do Lote de Vetores e somando as grandezas novas:

**Fase 1, classificação mecânica automática.** Para cada entrada com dados inequívocos: vetor; celeridade resolvida (meio × seção pelo coeficiente publicado × Ímpeto pela RC); dano recalculado pelo motor novo com executor de referência; posição de XP pela entrega (dupla leitura) ou pela Régua de Resposta quando útil; validação contra o piso do rank. Publicar por compêndio, com a coluna de preço estimado regenerada.

**Fase 2, lista de exceções para Gabriel.** Entradas ambíguas (técnica mista de fronteira, desvio de celeridade candidato, útil de degrau 4 ou 5, técnica abaixo do piso ou acima do teto do rank) voltam como lista ordenada por tamanho da divergência, uma decisão por linha, sem nada resolvido por conta.

**Regras do repasse:** valores pagos não retroagem; apuração de ficha substitui estimativa dali em diante; nenhuma RC alterada sem ser caso de nominal limpa; toda divergência entre documento e régua nova é da entrada, nunca da régua, salvo padrão repetido, que sobe como RFC.

## Tarefa 5. Aplicação (New Faces Character Creator)

Após publicação dos manuais: propagação autônoma para rulesets, lógica de cálculo e testes, manual-first. Grandezas novas no modelo de dados: celeridade, Fator de Seção, Ímpeto, M_vel, w, P por perícia governante, RC limpa contra nominal. Testes de regressão: as três âncoras recalculadas, a régua de pares, o espelho do playtest (conexão 55–67% por faixa) e a Saki como regressão viva.

## Ordem de execução

1 → 2 → 3 em sequência, porque o Núcleo é fonte do MCJ e o MCJ é fonte das fichas. 4 depois do 3 publicado. 5 por último. Cada tarefa fecha com o check de links do repositório e INDEX atualizado.
