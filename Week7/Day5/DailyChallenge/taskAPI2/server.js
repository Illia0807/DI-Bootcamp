const express = require("express");
const app = express();

const configuration= require('./configuration/configuration.js')
const userRoutes=require('./routes/userRoutes.js');

app.use(express.json());
app.use('/api', userRoutes);

app.use("/", express.static(__dirname + "/public"));




const PORT = configuration.server.PORT


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} Home work 23.03.25`);
});

// app.get("/", (req, res) => {
//         res.send("Hello, world! daly chell 23.03.25");
//       });
// const PORT =process.env.PORT || 3222