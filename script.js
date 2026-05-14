const questions = [
  {
    text: "Qual é a razão da PG 2, 6, 18, ...?",
    options: ["2", "3", "6", "12"],
    correct: 1,
    formula: "q = a<sub>2</sub> / a<sub>1</sub>",
    explanation: "A razão q é o multiplicador fixo da sequência. Como 6 / 2 = 3 e 18 / 6 = 3, q = 3."
  },
  {
    text: "Qual é o 5º termo da PG 3, 6, 12, ...?",
    options: ["24", "48", "96", "108"],
    correct: 1,
    formula: "a<sub>n</sub> = a<sub>1</sub> · q<sup>n-1</sup>",
    explanation: "A PG dobra a cada termo, então q = 2. Pelo termo geral, a<sub>5</sub> = 3 · 2<sup>5-1</sup> = 3 · 16 = 48."
  },
  {
    text: "Qual é o próximo termo da PG 5, 15, 45, ...?",
    options: ["60", "90", "135", "150"],
    correct: 2,
    formula: "próximo termo = termo atual · q",
    explanation: "Em PG, o próximo termo vem por multiplicação, não por soma fixa. Como q = 15 / 5 = 3, o próximo termo é 45 · 3 = 135."
  },
  {
    text: "Qual é a razão da PG 10, 5, 2,5, ...?",
    options: ["0,5", "2", "5", "10"],
    correct: 0,
    formula: "q = a<sub>2</sub> / a<sub>1</sub>",
    explanation: "A razão é 5 / 10 = 0,5. Isso significa que cada termo vale metade do anterior, formando uma PG decrescente."
  },
  {
    text: "Qual é o 4º termo da PG 2, 4, 8, ...?",
    options: ["12", "16", "24", "32"],
    correct: 1,
    formula: "a<sub>n</sub> = a<sub>1</sub> · q<sup>n-1</sup>",
    explanation: "A razão é q = 4 / 2 = 2. Pelo termo geral, a<sub>4</sub> = 2 · 2<sup>4-1</sup> = 16."
  },
  {
    text: "Qual é o 6º termo da PG 1, 2, 4, ...?",
    options: ["16", "32", "64", "128"],
    correct: 1,
    formula: "a<sub>n</sub> = a<sub>1</sub> · q<sup>n-1</sup>",
    explanation: "Aqui, a<sub>1</sub> = 1 e q = 2. Logo, a<sub>6</sub> = 1 · 2<sup>6-1</sup> = 32."
  },
  {
    text: "Qual é a razão da PG 81, 27, 9, ...?",
    options: ["1/3", "3", "9", "27"],
    correct: 0,
    formula: "q = a<sub>2</sub> / a<sub>1</sub>",
    explanation: "Dividindo um termo pelo anterior: 27 / 81 = 1/3 e 9 / 27 = 1/3. Como 0 &lt; q &lt; 1, a sequência diminui."
  },
  {
    text: "Qual é o próximo termo da PG 7, 14, 28, ...?",
    options: ["42", "56", "70", "84"],
    correct: 1,
    formula: "próximo termo = termo atual · q",
    explanation: "A sequência cresce multiplicando por 2: 7, 14, 28. Então o próximo termo é 28 · 2 = 56."
  },
  {
    text: "Na PG 4, 12, ..., qual é o 3º termo?",
    options: ["24", "36", "48", "60"],
    correct: 1,
    formula: "a<sub>3</sub> = a<sub>2</sub> · q",
    explanation: "A razão é q = 12 / 4 = 3. Para chegar ao terceiro termo, multiplicamos o segundo por q: 12 · 3 = 36."
  },
  {
    text: "Qual é o 5º termo da PG 1, 3, 9, ...?",
    options: ["27", "81", "243", "729"],
    correct: 1,
    formula: "a<sub>n</sub> = a<sub>1</sub> · q<sup>n-1</sup>",
    explanation: "Com a<sub>1</sub> = 1 e q = 3, o termo geral dá a<sub>5</sub> = 1 · 3<sup>5-1</sup> = 81."
  },
  {
    text: "Uma PG tem a<sub>1</sub> = 5 e q = 4. Quanto vale a<sub>3</sub>?",
    options: ["20", "40", "80", "100"],
    correct: 2,
    formula: "a<sub>n</sub> = a<sub>1</sub> · q<sup>n-1</sup>",
    explanation: "Aplicando a<sub>n</sub> = a<sub>1</sub> · q<sup>n-1</sup>: a<sub>3</sub> = 5 · 4<sup>3-1</sup> = 5 · 16 = 80."
  },
  {
    text: "No arquivo do Código Q, a<sub>3</sub> = 12 e a<sub>6</sub> = 96. Qual é a razão q da PG?",
    options: ["2", "3", "4", "8"],
    correct: 0,
    formula: "a<sub>6</sub> / a<sub>3</sub> = q<sup>3</sup>",
    explanation: "Entre a<sub>3</sub> e a<sub>6</sub> existem 3 passos de razão. Então 96 / 12 = 8, logo q<sup>3</sup> = 8 e q = 2.",
    hint: "Dica: termos não consecutivos exigem contar quantos passos de razão existem entre eles."
  },
  {
    text: "Qual é a soma dos 4 primeiros termos da PG 2, 6, 18, 54, ...?",
    options: ["60", "72", "80", "90"],
    correct: 2,
    formula: "S<sub>n</sub> = a<sub>1</sub> · (q<sup>n</sup> - 1) / (q - 1)",
    explanation: "A razão é q = 3. Somando diretamente, 2 + 6 + 18 + 54 = 80. Pela fórmula, S<sub>4</sub> = 2 · (3<sup>4</sup> - 1) / (3 - 1) = 80."
  },
  {
    text: "Um arquivo do Código Q começa com 5 sinais e triplica a cada etapa. Quantos sinais haverá na 5ª etapa?",
    options: ["135", "405", "625", "1215"],
    correct: 1,
    formula: "a<sub>n</sub> = a<sub>1</sub> · q<sup>n-1</sup>",
    explanation: "Aqui, a<sub>1</sub> = 5, q = 3 e n = 5. Então a<sub>5</sub> = 5 · 3<sup>4</sup> = 5 · 81 = 405.",
    hint: "Dica: a primeira etapa já é a<sub>1</sub>. Para chegar à 5ª etapa, use q<sup>4</sup>."
  },
  {
    text: "O sistema libera pontos na sequência 3, 6, 12, 24, ... Qual é a soma dos 8 primeiros valores?",
    options: ["384", "510", "765", "768"],
    correct: 2,
    formula: "S<sub>n</sub> = a<sub>1</sub> · (q<sup>n</sup> - 1) / (q - 1)",
    explanation: "A sequência tem a<sub>1</sub> = 3 e q = 2. Assim, S<sub>8</sub> = 3 · (2<sup>8</sup> - 1) / (2 - 1) = 3 · 255 = 765.",
    hint: "Dica: identifique a razão e use n = 8 na fórmula da soma finita da PG."
  },
  {
    text: "Para completar o Código Q, forme uma PG com 5 termos começando em 4 e terminando em 324. Quais são os três termos intermediários?",
    options: ["8, 16 e 64", "12, 36 e 108", "16, 64 e 256", "18, 54 e 162"],
    correct: 1,
    formula: "324 / 4 = q<sup>4</sup>",
    explanation: "Como há 5 termos, existem 4 multiplicações da razão. Temos 324 / 4 = 81, então q<sup>4</sup> = 81 e q = 3. A PG fica 4, 12, 36, 108, 324.",
    hint: "Dica: entre o 1º e o 5º termo há quatro passos de razão."
  }
];

const stages = [
  {
    name: "Chave da Razão",
    story: "A primeira trava do Código Q pede o multiplicador que liga um termo ao próximo.",
    transition: "A Chave da Razão foi ativada. Agora siga a trilha dos termos sem perder o padrão."
  },
  {
    name: "Trilha dos Termos",
    story: "A trilha mostra termos incompletos. Para avançar, continue o padrão multiplicativo.",
    transition: "A trilha revelou novos sinais. A próxima área exige a fórmula do Código Q."
  },
  {
    name: "Fórmula do Código Q",
    story: "O núcleo da sequência exige usar a fórmula da PG para chegar direto ao termo pedido.",
    transition: "A fórmula abriu o núcleo da sequência. Falta destravar o Cofre da Soma."
  },
  {
    name: "Cofre da Soma",
    story: "A trava final reúne vários termos da PG antes de liberar o relatório do Código Q.",
    transition: "Último arquivo. Some os termos da PG para fechar a análise do Código Q."
  }
];

const maxAttempts = 3;
const successMessages = [
  "Código decifrado",
  "Razão q identificada",
  "Sequência liberada",
  "Padrão multiplicativo confirmado"
];
const errorMessages = [
  "Quase",
  "Código Q bloqueado",
  "Atenção ao padrão",
  "Razão ainda oculta"
];

const screens = document.querySelectorAll(".screen");
const startButtons = [
  document.getElementById("start-game"),
  document.getElementById("start-from-instructions")
];
const screenButtons = document.querySelectorAll("[data-screen]");
const missionLabel = document.getElementById("mission-label");
const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score-text");
const attemptsText = document.getElementById("attempts-text");
const progressBar = document.getElementById("progress-bar");
const transitionBanner = document.getElementById("transition-banner");
const stageName = document.getElementById("stage-name");
const storyText = document.getElementById("story-text");
const formulaNote = document.getElementById("formula-note");
const hintButton = document.getElementById("hint-button");
const hintText = document.getElementById("hint-text");
const questionText = document.getElementById("question-text");
const questionPanel = document.querySelector(".question-panel");
const optionsContainer = document.getElementById("options");
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const nextQuestionButton = document.getElementById("next-question");
const soundToggle = document.getElementById("sound-toggle");
const finalScore = document.getElementById("final-score");
const finalPercent = document.getElementById("final-percent");
const finalMedal = document.getElementById("final-medal");
const finalAttempts = document.getElementById("final-attempts");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const mistakesSummary = document.getElementById("mistakes-summary");
const mistakesList = document.getElementById("mistakes-list");
const playAgainButton = document.getElementById("play-again");

let currentQuestion = 0;
let score = 0;
let attemptsLeft = maxAttempts;
let answered = false;
let soundEnabled = true;
let audioContext;
let missedQuestions = [];

function showScreen(screenId) {
  screens.forEach((screen) => {
    const isTarget = screen.id === screenId;
    screen.hidden = !isTarget;
    screen.classList.toggle("is-active", isTarget);
  });

  const activeScreen = document.getElementById(screenId);
  const focusTarget = activeScreen.querySelector("button, h1, h2");

  if (focusTarget) {
    focusTarget.focus({ preventScroll: true });
  }
}

function startGame() {
  currentQuestion = 0;
  score = 0;
  attemptsLeft = maxAttempts;
  missedQuestions = [];
  showScreen("quiz-screen");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const stage = getStage(currentQuestion);

  answered = false;
  missionLabel.textContent = `Fase ${getStageIndex(currentQuestion) + 1}/4 - Desafio ${currentQuestion + 1}`;
  stageName.textContent = stage.name;
  storyText.textContent = stage.story;
  updateStatus();
  renderTransition(stage);
  formulaNote.innerHTML = `Fórmula do Código Q: ${question.formula}`;
  hintText.textContent = getHint(question);
  hintText.hidden = true;
  hintButton.disabled = false;
  hintButton.textContent = "Revelar dica";
  questionText.innerHTML = question.text;
  questionPanel.classList.remove("is-correct-answer", "is-wrong-answer");
  feedbackPanel.hidden = true;
  feedbackPanel.className = "feedback-panel";
  feedbackTitle.textContent = "";
  feedbackText.textContent = "";
  nextQuestionButton.disabled = true;
  nextQuestionButton.hidden = true;
  nextQuestionButton.textContent =
    currentQuestion === questions.length - 1 ? "Analisar resultado" : "Avançar no Código Q";

  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.setAttribute("aria-label", `Alternativa ${index + 1}: ${option}`);
    button.innerHTML = `<span>${index + 1}</span>${option}`;
    button.addEventListener("click", () => answerQuestion(index));
    optionsContainer.appendChild(button);
  });
}

function answerQuestion(selectedIndex) {
  if (answered) {
    return;
  }

  const question = questions[currentQuestion];
  const stage = getStage(currentQuestion);
  const optionButtons = optionsContainer.querySelectorAll(".option-button");
  const isCorrect = selectedIndex === question.correct;

  answered = true;

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    button.classList.toggle("is-correct", index === question.correct);
    button.classList.toggle("is-wrong", index === selectedIndex && !isCorrect);
    button.setAttribute(
      "aria-label",
      `Alternativa ${index + 1}: ${question.options[index]}${
        index === question.correct ? ". Resposta correta." : ""
      }${index === selectedIndex && !isCorrect ? " Sua resposta." : ""}`
    );
  });

  if (isCorrect) {
    score += 1;
    questionPanel.classList.add("is-correct-answer");
    feedbackPanel.classList.add("success");
    feedbackTitle.textContent = getMotivationMessage(successMessages);
    playFeedbackSound("success");
  } else {
    attemptsLeft = Math.max(0, attemptsLeft - 1);
    questionPanel.classList.add("is-wrong-answer");
    feedbackPanel.classList.add("error");
    feedbackTitle.textContent = getMotivationMessage(errorMessages);
    missedQuestions.push({
      number: currentQuestion + 1,
      stage: stage.name,
      question: question.text,
      correctAnswer: question.options[question.correct],
      explanation: question.explanation
    });
    playFeedbackSound("error");
  }

  updateStatus();
  const correctOption = question.options[question.correct];
  feedbackText.innerHTML = buildFeedbackText(isCorrect, stage, correctOption, question.explanation);
  feedbackPanel.hidden = false;
  nextQuestionButton.disabled = false;
  nextQuestionButton.hidden = false;
  nextQuestionButton.focus({ preventScroll: true });
}

function goToNextQuestion() {
  if (!answered || nextQuestionButton.disabled) {
    return;
  }

  nextQuestionButton.disabled = true;
  currentQuestion += 1;

  if (currentQuestion < questions.length) {
    renderQuestion();
    return;
  }

  showResult();
}

function showResult() {
  const percent = Math.round((score / questions.length) * 100);
  const result = getPerformance(score);

  finalScore.textContent = `${score}/${questions.length}`;
  finalPercent.textContent = `${percent}%`;
  finalMedal.textContent = result.medal;
  finalAttempts.textContent = `${attemptsLeft}/${maxAttempts}`;
  resultTitle.textContent = result.title;
  resultMessage.textContent = `${result.message} ${getAttemptsConclusion()}`;
  renderMistakesSummary();
  showScreen("result-screen");
}

function getStage(questionIndex) {
  return stages[getStageIndex(questionIndex)];
}

function renderMistakesSummary() {
  mistakesList.innerHTML = "";

  if (missedQuestions.length === 0) {
    mistakesSummary.hidden = true;
    return;
  }

  mistakesSummary.hidden = false;

  missedQuestions.forEach((item) => {
    const article = document.createElement("article");
    article.className = "mistake-item";
    article.innerHTML = `
      <h4>Desafio ${item.number}: ${item.stage}</h4>
      <p>${item.question}</p>
      <p><strong>Correta:</strong> ${item.correctAnswer}. ${item.explanation}</p>
    `;
    mistakesList.appendChild(article);
  });
}

function getPerformance(points) {
  if (points === questions.length) {
    return {
      title: "Mestre Absoluto do Código Q",
      medal: "Precisão máxima",
      message: "O Código Q foi decifrado por completo. Você resolveu todos os 16 desafios e reconheceu os padrões multiplicativos da PG."
    };
  }

  if (points >= 13) {
    return {
      title: "Especialista em Progressão Geométrica",
      medal: "Código quase completo",
      message: "Excelente análise. A maior parte do Código Q foi liberada com segurança."
    };
  }

  if (points >= 10) {
    return {
      title: "Decifrador de Sequências",
      medal: "Padrão reconhecido",
      message: "Bom avanço. Você reconheceu várias relações multiplicativas e já domina parte da lógica da PG."
    };
  }

  if (points >= 7) {
    return {
      title: "Explorador da Razão",
      medal: "Chave da razão ativa",
      message: "Você já identifica padrões importantes. Reforce termo geral e soma para avançar mais no Código Q."
    };
  }

  if (points >= 4) {
    return {
      title: "Aprendiz do Código Q",
      medal: "Chave em treinamento",
      message: "A análise começou a ganhar forma. Revisar razão, próximos termos e termo geral vai melhorar sua precisão."
    };
  }

  return {
    title: "Iniciante em Treinamento",
    medal: "Primeiro acesso",
    message: "O Código Q ainda está bloqueado. Volte às instruções e observe como cada termo se relaciona com o anterior."
  };
}

function updateStatus() {
  const progressValue = ((currentQuestion + 1) / questions.length) * 100;

  progressText.textContent = `${currentQuestion + 1} de ${questions.length}`;
  scoreText.textContent = `${score}/${questions.length}`;
  attemptsText.textContent = `${attemptsLeft}/${maxAttempts}`;
  attemptsText.dataset.level = String(attemptsLeft);
  progressBar.style.width = `${progressValue}%`;
}

function renderTransition(stage) {
  const shouldShowTransition = currentQuestion > 0 && isStageStart(currentQuestion);

  transitionBanner.hidden = !shouldShowTransition;
  transitionBanner.textContent = shouldShowTransition ? stage.transition : "";
}

function isStageStart(questionIndex) {
  return questionIndex === 4 || questionIndex === 8 || questionIndex === 12;
}

function getStageIndex(questionIndex) {
  if (questionIndex <= 3) {
    return 0;
  }

  if (questionIndex <= 7) {
    return 1;
  }

  if (questionIndex <= 11) {
    return 2;
  }

  return 3;
}

function getHint(question) {
  if (question.hint) {
    return question.hint;
  }

  if (question.formula.includes("S<sub>n</sub>")) {
    return "Dica: para poucos termos, você pode somar diretamente; para muitos, use a fórmula da soma da PG.";
  }

  if (question.formula.includes("próximo termo")) {
    return "Dica: primeiro descubra a razão q. Depois multiplique o último termo por essa razão.";
  }

  if (question.formula.includes("q =")) {
    return "Dica: divida um termo pelo termo anterior. A razão precisa funcionar em toda a sequência.";
  }

  return "Dica: identifique a razão q e substitua os valores na fórmula do termo geral.";
}

function showHint() {
  hintText.hidden = false;
  hintButton.disabled = true;
  hintButton.textContent = "Dica revelada";
}

function getMotivationMessage(messages) {
  return messages[currentQuestion % messages.length];
}

function buildFeedbackText(isCorrect, stage, correctOption, explanation) {
  const narrative = isCorrect
    ? `Você liberou uma parte do Código Q em ${stage.name}.`
    : `O Código Q ainda não abriu em ${stage.name}; observe a multiplicação entre os termos.`;

  return `${narrative} Resposta correta: <strong>${correctOption}</strong>. ${explanation}`;
}

function getAttemptsConclusion() {
  if (attemptsLeft === maxAttempts) {
    return "Sua precisão ficou intacta do início ao fim.";
  }

  if (attemptsLeft > 0) {
    return "Mesmo com algumas tentativas perdidas, a análise chegou ao relatório final.";
  }

  return "As tentativas chegaram ao limite, mas você concluiu a análise e ganhou um mapa claro do que revisar.";
}

function playFeedbackSound(type) {
  if (!soundEnabled) {
    return;
  }

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      soundEnabled = false;
      soundToggle.setAttribute("aria-pressed", "false");
      soundToggle.textContent = "Som indisponível";
      return;
    }

    if (!audioContext) {
      audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended" && audioContext.resume) {
      audioContext.resume().catch(() => {});
    }

    const now = audioContext.currentTime;
    const frequencies = type === "success" ? [660, 880] : [220, 160];

    frequencies.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = now + index * 0.11;
      const end = start + 0.09;

      oscillator.type = type === "success" ? "sine" : "triangle";
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.18, start + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, end);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(end);
    });
  } catch (error) {
    soundEnabled = false;
    soundToggle.setAttribute("aria-pressed", "false");
    soundToggle.textContent = "Som indisponível";
  }
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundToggle.textContent = soundEnabled ? "Som ligado" : "Som desligado";
}

screenButtons.forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.screen));
});

startButtons.forEach((button) => {
  button.addEventListener("click", startGame);
});

nextQuestionButton.addEventListener("click", goToNextQuestion);
playAgainButton.addEventListener("click", startGame);
soundToggle.addEventListener("click", toggleSound);
hintButton.addEventListener("click", showHint);

document.addEventListener("keydown", (event) => {
  if (document.getElementById("quiz-screen").hidden) {
    return;
  }

  const numericChoice = Number(event.key);

  if (!answered && numericChoice >= 1 && numericChoice <= 4) {
    const option = optionsContainer.querySelectorAll(".option-button")[numericChoice - 1];

    if (option) {
      event.preventDefault();
      option.click();
    }
  }

  if (answered && event.key === "Enter" && !nextQuestionButton.disabled && !nextQuestionButton.hidden) {
    event.preventDefault();
    goToNextQuestion();
  }
});
