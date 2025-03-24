const fs = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "../users.json");

exports.readUsers = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
};

exports.writeUsers = async (users) => {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
};
