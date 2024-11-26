const express = require("express");

const router = express.Router();

router.get("/food", () => {
  res.send("FOOD!");
});

router.post("/food", () => {
  res.send("food added!");
});

module.exports = router;
