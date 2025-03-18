const { Router } = require("express");
const router = Router();

const todos = [{ id: 1, text: "1 target" }];

//Delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos.splice(index, 1);  
  // res.status(204).end();  
  res.json(todos)
});

//Update
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todo.text = text;
  res.json(todo);
});

//post new todos
router.post("/", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }
  const newTodo = {
    id: todos.length + 1, // Простой 
    text,
  };
  todos.push(newTodo);
  res.json(todos);
});
router.get("/", (req, res) => {
  res.json(todos);
});

router.get("/", (req, res) => {
  res.send("Hello World!EX2");
});

router.get("/about", (req, res) => {
  res.send("This is page names about? creating for test connention");
});

module.exports = router;
