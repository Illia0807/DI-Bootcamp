const express = require("express");
const projRouter = require("./routes/index.js");


const app = express();
const PORT = process.env.PORT || 3005;


app.use("/", projRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

