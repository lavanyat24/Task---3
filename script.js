// Quiz data
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Hemingway", "Tolstoy", "Tagore"],
    answer: "Shakespeare"
  }
];

let currentQuestionIndex = 0;

// Load question
function loadQuestion() {
  const q = quizData[currentQuestionIndex];
  document.getElementById("questionText").innerText = q.question;
  
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    answersDiv.appendChild(btn);
  });

  document.getElementById("quizResult").innerText = "";
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestionIndex].answer;
  const result = selected === correct ? "Correct!" : `Wrong! Answer: ${correct}`;
  document.getElementById("quizResult").innerText = result;
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % quizData.length;
  loadQuestion();
}

window.onload = loadQuestion;

// Joke API
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("joke").innerText = "Failed to fetch joke!";
    });
}
