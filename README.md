# Código Q: Desafio da Progressão Geométrica

Jogo educativo desenvolvido para a AV2 da disciplina de Resolução de Problemas de Natureza Discreta. O projeto aborda Sequências Numéricas e Progressão Geométrica por meio de um quiz narrativo em que o jogador decifra o Código Q, um sistema baseado na razão `q` e em padrões multiplicativos.

## Link do GitHub Pages

https://llipeee.github.io/Projeto_AV2_NatDiscreta/

## Objetivo educacional

Ajudar alunos do ensino médio a reconhecer padrões de Progressão Geométrica, identificar a razão `q`, calcular termos, interpretar fórmulas e resolver somas finitas de maneira prática.

## Público-alvo

Alunos do ensino médio.

## Conteúdo matemático trabalhado

- Conceito de Progressão Geométrica.
- Razão da PG: `q = a_2 / a_1`.
- Próximo termo por crescimento multiplicativo.
- Termo geral: `a_n = a_1 · q^(n-1)`.
- Razão a partir de termos não consecutivos.
- Soma dos primeiros termos de uma PG.
- Interpolação geométrica simples.

## Como jogar

1. Abra o site pelo GitHub Pages ou diretamente pelo arquivo `index.html`.
2. Leia o enredo inicial e, se necessário, acesse as instruções.
3. Clique em "Decifrar Código Q".
4. Escolha uma alternativa em cada desafio para avançar na análise do código.
5. Use a dica opcional se quiser lembrar a estratégia sem receber a resposta.
6. Após responder, leia o feedback matemático e narrativo.
7. Avance até a tela final para ver pontuação, precisão final, classificação e revisão dos erros, quando houver.
8. Use "Jogar novamente" para reiniciar.

Também é possível responder pelo teclado usando `1`, `2`, `3` e `4`. Depois de responder, `Enter` avança para o próximo desafio.

## Tecnologias usadas

- HTML5.
- CSS3.
- JavaScript puro.
- Web Audio API para feedback sonoro simples.

O projeto é um site estático e não usa frameworks, Node, npm, Vite ou dependências externas.

## Como executar localmente

Abra o arquivo `index.html` diretamente no navegador. Não é necessário instalar pacotes nem iniciar servidor local.

## Critérios do trabalho atendidos

- Link público via GitHub Pages.
- Tema: Sequências Numéricas e Progressão Geométrica.
- Quiz com 16 questões.
- Pelo menos 5 interações: iniciar, abrir instruções, responder, avançar fase, ativar/desativar som, jogar novamente e usar teclado.
- Tela inicial com enredo.
- Enredo presente durante as fases.
- Progresso narrativo pelo Código Q, com 4 fases de 4 desafios: razão, termos, fórmula e soma.
- Sistema simples de 3 tentativas para indicar precisão.
- Dicas opcionais durante as perguntas.
- Instruções com objetivo, regras, pontuação e modo de jogar.
- Feedback visual e sonoro para acerto e erro.
- Explicação matemática curta após cada resposta.
- Uso de fórmulas de PG quando necessário.
- Tela final com pontuação, porcentagem, classificação, precisão final e opção de reinício.
- Resumo das questões erradas ao final.
- Layout responsivo para celular e computador.
- Acessibilidade básica: contraste, botões grandes, foco visível, textos legíveis, `aria-live` no feedback e navegação por teclado.

## Estrutura dos arquivos

- `index.html`: estrutura das telas do jogo.
- `style.css`: visual, responsividade e estados de feedback.
- `script.js`: perguntas, fluxo do quiz, pontuação, tentativas, dicas, classificações, sons e interações.

## Autor

Felipe Antonio de Almeida Pinto
