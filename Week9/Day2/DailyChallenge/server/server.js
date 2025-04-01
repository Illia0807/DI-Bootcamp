const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello From Express 01,04");
});

app.post("/api/world", (req, res) => {
  const { input } = req.body; 
  console.log("Received POST request:", req.body);
  res.json({
    message: `I received your POST request. This is what you sent me: ${input}`,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
