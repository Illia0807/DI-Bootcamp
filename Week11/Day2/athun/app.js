const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./routes/userRoute.js");

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRouter);
