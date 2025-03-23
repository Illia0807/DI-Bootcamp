const express = require("express");
const app = express();
const tasksRouter = require("./routes/taskRoutes.js");
const config = require("./configuration/configuration.js");

app.use(express.json());
app.use("/api/tasks", tasksRouter);



const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} Home work 23.03.25`);
});


// const PORT = process.env.PORT || 4000;


// app.get("/", (req, res) => {
//   res.send("Hello, world! Home work 23.03.25");
// });
