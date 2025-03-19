const quizSection = document.getElementById("quiz-section");
const questionSection = document.getElementById("question-section");
const scoreSection = document.getElementById("score-section");
const questionText = document.getElementById("question-text");
const feedback = document.getElementById("feedback");
const answerForm = document.getElementById("answer-form");
const finalScore = document.getElementById("final-score");

let currentQuestion = "";

document.getElementById("start-btn").addEventListener("click", () => {
  fetch("/quiz")
    .then((res) => res.json())
    .then((data) => {
      questionText.textContent = data.question;
      quizSection.style.display = "none";
      questionSection.style.display = "block";
    });
});

answerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const answer = document.getElementById("answer").value;
  fetch("/quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answer }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message && data.message.includes("finished")) {
        fetch("/quiz/score")
          .then((res) => res.json())
          .then((scoreData) => {
            finalScore.textContent = `Your score: ${scoreData.score} / ${scoreData.total}`;
            questionSection.style.display = "none";
            scoreSection.style.display = "block";
          });
      } else {
        feedback.textContent = data.message || "";
        if (data.nextQuestion) {
          questionText.textContent = data.nextQuestion;
          document.getElementById("answer").value = "";
        }
      }
    });
});
