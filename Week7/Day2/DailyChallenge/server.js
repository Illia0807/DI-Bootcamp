const express = require("express");
const app = express();

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🏖️", name: "Beach" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🔥", name: "Fire" },
  { emoji: "⚽", name: "Soccer Ball" },
  { emoji: "🎲", name: "Dice" },
];

app.get('/emoji', (req, res) => {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = emojis.map(e => e.name).sort(() => 0.5 - Math.random());
  res.json({ emoji: correct.emoji, correct: correct.name, options });
});
