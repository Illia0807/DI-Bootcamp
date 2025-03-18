const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/about", (req, res) => {
  res.send("This is page names about? creating for test connention");
});

module.exports = router;
