import express from "express";
import pkg from "pg";
import dotenv from "dotenv"
import postsRoutes from './routes/postRoutes.js';
dotenv.config();

//{ Pool } — это деструктуризация. Это значит, что из объекта pkg берётся свойство с именем Pool и сохраняется в константу Pool.
const { Pool } = pkg;
const app = express();

const PORT = 4321;
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: Number(process.env.DB_PORT),
// });

// pool
//   .connect()
//   .then(() => {
//     console.log("Подключено к PostgreSQL!");
//   })
//   .catch((err) => {
//     console.error("Ошибка подключения к PostgreSQL:", err);
//   });

//? Raquel its for me
app.use(express.json());

app.use('/', postsRoutes);
app.use((err, req, res, next) => {
        res.status(500).json({ error: 'Server error' });
      });

app.get("/", (req, res) => {
  res.send("Hello World!ex1 19.3");
});

app.listen(PORT, () => {
  console.log(`server run in ${PORT}`);
});
