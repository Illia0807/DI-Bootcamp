const express = require("express");
const app = express();
const config = require("./configuration/config.js");
const weatherRoutes= require('./routes/weatherRoutes.js');
const cors = require('cors');

//подключение к маршрутам
app.use(cors());
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use('/api/weather',weatherRoutes);

const PORT = config.server.PORT;




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});

