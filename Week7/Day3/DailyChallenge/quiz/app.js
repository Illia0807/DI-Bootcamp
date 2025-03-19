const express = require("express");
const quizRouter =require('./routes/index.js')
const session = require('express-session');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


app.use(session({
        secret: 'quiz_secret',
        resave: false,
        saveUninitialized: true
      }));
app.use('/quiz', quizRouter);
app.use("/", express.static(__dirname + "/public"));
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
