const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! Ready to work");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    publishedYear: 1851,
  },
];

//POST-new book
app.post("/api/books", (req, res) => {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;
  const newId = books.length ? books[books.length - 1].id + 1 : 1;
  const newBook = { id: newId, title, author, publishedYear };
  books.push(newBook);
  res.json(books);
})
//GET-reed
app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((p) => p.id === parseInt(id));
  if (!book) {
    res.status(404).send("Book not found");
    return;
  }
  res.status(200).json(book);
  
});

app.get("/api/books", (req, res) => {
  res.json(books);
});
