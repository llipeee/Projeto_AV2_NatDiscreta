const perguntas = [
  {
    pergunta: "Qual é a razão da PG: 2, 6, 18, ...?",
    opcoes: ["2", "3", "6"],
    correta: 1
  },
  {
    pergunta: "Qual o 5º termo da PG: 3, 6, 12, ...?",
    opcoes: ["24", "48", "96"],
    correta: 1
  },
  {
    pergunta: "Qual o próximo termo da PG: 5, 15, 45, ...?",
    opcoes: ["60", "90", "135"],
    correta: 2
  },
  {
    pergunta: "Qual é a razão da PG: 10, 5, 2.5, ...?",
    opcoes: ["0.5", "2", "5"],
    correta: 0
  },
  {
    pergunta: "Qual o 4º termo da PG: 2, 4, 8, ...?",
    opcoes: ["12", "16", "32"],
    correta: 1
  },
  {
    pergunta: "Qual o 6º termo da PG: 1, 2, 4, ...?",
    opcoes: ["16", "32", "64"],
    correta: 1
  },
  {
    pergunta: "Qual a razão da PG: 81, 27, 9, ...?",
    opcoes: ["1/3", "3", "9"],
    correta: 0
  },
  {
    pergunta: "Qual o próximo termo da PG: 7, 14, 28, ...?",
    opcoes: ["42", "56", "70"],
    correta: 1
  },
  {
    pergunta: "Qual o 3º termo da PG: 4, 12, ...?",
    opcoes: ["24", "36", "48"],
    correta: 1
  },
  {
    pergunta: "Qual o 5º termo da PG: 1, 3, 9, ...?",
    opcoes: ["27", "81", "243"],
    correta: 1
  }
];

let atual = 0;
let pontos = 0;

function mostrarPergunta() {
  const p = perguntas[atual];

  document.getElementById("pergunta").innerText = p.pergunta;

  document.getElementById("progresso").innerText =
    "Pergunta " + (atual + 1) + " de " + perguntas.length;

  document.getElementById("pontuacao").innerText =
    "Pontuação: " + pontos;

  const botoes = document.querySelectorAll(".opcao");
  botoes.forEach((btn, i) => {
    btn.innerText = p.opcoes[i];
    btn.disabled = false;
    btn.style.opacity = "1";
  });

  document.getElementById("resultado").innerText = "";
}

function responder(opcao) {
  const p = perguntas[atual];

  const botoes = document.querySelectorAll(".opcao");
  botoes.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.6";
  });

  if (opcao === p.correta) {
    document.getElementById("resultado").innerText = "✅ Correto!";
    pontos++;
  } else {
    document.getElementById("resultado").innerText =
      "❌ Errado! Resposta correta: " + p.opcoes[p.correta];
  }

  atual++;

  setTimeout(() => {
    if (atual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultadoFinal();
    }
  }, 1500);
}

function mostrarResultadoFinal() {
  let mensagem = "";

  if (pontos === perguntas.length) {
    mensagem = "🏆 Perfeito! Você domina PG!";
  } else if (pontos >= 7) {
    mensagem = "👏 Muito bom! Quase lá!";
  } else if (pontos >= 5) {
    mensagem = "👍 Bom! Continue praticando!";
  } else {
    mensagem = "📚 Precisa revisar mais!";
  }

  document.getElementById("pergunta").innerText = "🎉 Fim do jogo!";
  document.getElementById("resultado").innerText =
    mensagem + "\nPontuação: " + pontos + " de " + perguntas.length;

  document.querySelector(".botoes").style.display = "none";
}

function reiniciarJogo() {
  atual = 0;
  pontos = 0;
  document.querySelector(".botoes").style.display = "block";
  mostrarPergunta();
}

window.onload = mostrarPergunta;
