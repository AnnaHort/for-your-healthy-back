const express = require("express"); // імпорт пакета express (фреймворк node js.)

const router = express.Router(); // імпорт пакета шляхів

router.get("/", (req, res) => {
  res.send("Books");
});

router.post("/", (req, res) => {
  res.send("Book created");
});

module.exports = router;
