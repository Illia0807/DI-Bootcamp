require("dotenv").config();
const path = require('path');
module.exports = {
  server: {
    PORT: process.env.PORT || 4000,
  },

  api: {
    USERS_FILE: path.join(__dirname, "../users.json"),
  },
};
