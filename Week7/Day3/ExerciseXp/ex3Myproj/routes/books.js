const { Router } = require("express");
const router = Router();

const books = [{ id: 1, title: "The Hobbit",author: "J.R.R. Tolkien",year: 1937 }];

//Delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  books.splice(index, 1);  
  // res.status(204).end();  
  res.json(books)
});

//Update
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;
   
  const todo = books.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todo.title = title;
  todo.author=author;
  todo.year=year;
  res.json(todo);
});

//post new books
router.post("/", (req, res) => {
  const { title, author, year } = req.body;
  if (!title) {
    return res.status(400).json({ message: "title is required" });
  }
  const newBook = {
    id: books.length + 1, // Простой 
    title,
    author,
    year
  };
  books.push(newBook);
  res.json(books);
});
router.get("/", (req, res) => {
  res.json(books);
});

router.get("/", (req, res) => {
  res.send("Hello World!EX3");
});

router.get("/about", (req, res) => {
  res.send("This is page names about? creating for test connention");
});

module.exports = router;
