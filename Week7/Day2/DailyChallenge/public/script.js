let correctAnswer = "";

function loadEmoji() {
  fetch("/emoji")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("emoji").innerText = data.emoji;
      correctAnswer = data.correct;
      const buttons = data.options
        .map((option) => {
          return `<button onclick="checkAnswer('${option}')">${option}</button>`;
        })
        .join("");
      document.getElementById("options").innerHTML = buttons;
      document.getElementById("result").innerText = "";
    });
}
function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === correctAnswer) {
    result.innerText = "Correct!";
  } else {
    result.innerText = "Wrong!";
  }
  setTimeout(loadEmoji, 1000);
}

loadEmoji()