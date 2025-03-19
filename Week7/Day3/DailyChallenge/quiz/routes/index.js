const { Router } = require("express");
const router = Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

router.get("/", (req, res) => {
  req.session.currentQuestion = 0;
  req.session.score = 0;
  const current = triviaQuestions[req.session.currentQuestion];
  res.json({ question: current.question });
});

router.post("/", (req, res) => {
        const { answer } = req.body;
        const qIndex = req.session.currentQuestion;
      
        if (qIndex >= triviaQuestions.length) {
          return res.json({
            message: "Quiz is already finished. Go to /quiz/score to see your score.",
          });
        }
      
        const correctAnswer = triviaQuestions[qIndex].answer;
        let response = {};
      
        if (answer && answer.toLowerCase() === correctAnswer.toLowerCase()) {
          req.session.score += 1;
          response.correct = true;
          response.message = "Correct!";
        } else {
          response.correct = false;
          response.message = `Incorrect! The correct answer was: ${correctAnswer}`;
        }
      
        req.session.currentQuestion += 1;
      
        if (req.session.currentQuestion < triviaQuestions.length) {
          const nextQ = triviaQuestions[req.session.currentQuestion];
          response.nextQuestion = nextQ.question;
        } else {
          response.message += " Quiz finished! Go to /quiz/score to see your final score.";
        }
      
        res.json(response);
      });

router.get("/score", (req, res) => {
  res.json({ score: req.session.score || 0, total: triviaQuestions.length });
});

module.exports = router;
