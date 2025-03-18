const express = require("express");

const projRouter = require("./routes/books.js");

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3003;
app.use("/", projRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

