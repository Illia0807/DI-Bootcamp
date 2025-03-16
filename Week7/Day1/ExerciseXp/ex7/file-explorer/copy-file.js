const fs = require("fs");
fs.readFile("source.txt", "utf8", (err, data) => {
  if (err) {
    console.error("errors reading:", err);
    return;
  }
  fs.writeFile("destination.txt", data, (err) => {
    if (err) {
      console.error("Errors writing:", err);
    } else {
      console.log("Done.txt");
    }
  });
});
