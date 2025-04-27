const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.cookies["token"];

  if (!token) {
    res.status(401).json({ message: "Unauthorized user" });
    return;
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: "Forbidden user" });
      return;
    }

    // console.log(decoded);
    req.user = decoded
    // console.log(req);

    next();
  });
};

module.exports = {
  verifyToken,
};
