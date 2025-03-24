const bcrypt = require("bcrypt");
const { readUsers, writeUsers } = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    console.log("Received body:", req.body);
    const { name, lastname, email, username, password } = req.body;
    const users = await readUsers();

    if (users.find((u) => u.username === username)) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: Date.now(),
      name,
      lastname,
      email,
      username,
      password: hashedPassword,
    };

    users.push(newUser);
    await writeUsers(users);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await readUsers();
    const user = users.find((u) => u.username === username);

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful!" });
  } catch (err) {
    res.status(500).json({ message: "Error during login", error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await readUsers();
  res.json(users);
};
exports.getUserById = async (req, res) => {
  const users = await readUsers();
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const users = await readUsers();
  const idx = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: "User not found" });

  users[idx] = { ...users[idx], ...req.body };
  await writeUsers(users);
  res.json({ message: "User updated", user: users[idx] });
};
