const express = require("express");

const router = express.Router();

router.get("/", () => {
  res.send("Welcome User!");
});

router.post("/", () => {
  res.send("User created!");
});

module.exports = router;
