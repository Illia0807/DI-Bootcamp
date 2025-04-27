const { console } = require("inspector");
const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  registerUser: async (req, res) => {
    const { password, email } = req.body;

    try {
      const user = await userModel.createUser(password, email);

      res.status(201).json({
        message: "User registered successfuly",
        user,
      });
    } catch (error) {
      console.log(error);
      if (error.code === "23505") {
        res.status(404).json({ message: "User already exist" });
        return;
      }
      res.status(500).json({ message: "internal servel error" });
    }
  },
  logingUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userModel.getUserByEmail(email);

      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const match = await bcrypt.compare(password + "", user.password);

      if (!match) {
        res.status(404).json({ message: "Wrong password" });
        return;
      }

      const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

      /** generete token */
      const accessToken = jwt.sign(
        { userid: user.id, email: user.email },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "60s" }
      );

      /** set token on httpOnly cookie */
      res.cookie("token", accessToken, {
        maxAge: 60 * 1000,
        httpOnly: true,
      });

      /** response with token */
      res.status(200).json({
        message: "Login successfuly",
        user: { userid: user.id, email: user.email, active: !!user },
        token: accessToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal servel error" });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal servel error" });
    }
  },
  logoutUser: (req, res) => {
    res.clearCookie("token");
    req.cookies["token"] = null;
    delete req.cookies["token"];
    req.user = null;

    /** set null in db */
    res.sendStatus(200);
  },
  verifyAuth: (req, res) => {
    const { userid, email } = req.user;
    const { ACCESS_TOKEN_SECRET } = process.env;

    const newToken = jwt.sign({ userid, email }, ACCESS_TOKEN_SECRET, {
      expiresIn: "60s",
    });

    res.cookie("token", newToken, {
      maxAge: 60 * 1000,
      httpOnly: true,
    });

    res.status(200).json({
      message: "new token",
      user: { userid, email },
      token: newToken,
    });
  },
};
