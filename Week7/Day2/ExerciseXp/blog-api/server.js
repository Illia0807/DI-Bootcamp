const express = require("express");
const app = express();

// Обязательное добавление для обработки JSON в теле запроса
app.use(express.json());

//каноничная настройка
const PORT = process.env.PORT || 3000;

//приветствие
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//начало простлушки
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

//база  данных
const data = [
  { id: 1, name: "john", content: "Lorem" },
  { id: 2, name: "Peter", content: "Ipsum" },
  { id: 3, name: "Bender", content: "Dolor" },
];

//DELETE-delete
// Время: O(n) для find() + O(n) для filter() = O(n).
// Память: O(n), так как создается новый массив в filter().
// const post = data.find((p) => p.id === parseInt(id));
// data = data.filter((p) => p.id !== parseInt(id));
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  //const post = data.find((p) => p.id === parseInt(id));
  const index = data.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" }); // Если не нашли, возвращаем 404
  }

  data.splice(index, 1);
  res.json(data);
});
//PUT-Update post
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  // Ищем пост по id
  const post = data.find((p) => p.id === parseInt(id));
  if (!post) {
    // Если пост не найден, возвращаем 404
    res.status(404).json({ message: "Post to update not found" });
    return;
  }
  post.content = content || post.content;
  res.json(post);
});

//POST-create new blog post
app.post("/api/users", (req, res) => {
  const { name, content } = req.body;
  const newUser = { id: data.length + 1, name, content };
  data.push(newUser);
  res.json(data);
});

app.get("/post", (req, res) => {
  res.json(data);
});
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const post = data.find((p) => p.id === parseInt(id));
  if (!post) {
    res.status(404).send("post not found");
    return;
  }
  res.json(post.content);
});
