const fs = require("node:fs/promises");
const path = require("node:path");
const cors = require("cors");

const express = require("express");

const checkAuth = require("./middleware/checkAuth");

const app = express();

app.use(cors()); // глобальна мідлвара для роботи з кросбраузерними запитами
app.use(
  cors({
    origin: "http://localhost:8080",
    optionSuccessStatus: 200,
  })
); // налаштування cors для конкретного сервера

// app.use(checkAuth); - мідлавара - перевірка наявності апішкі - функція яка має виконатися перед виконанням запиту

app.use("/books", checkAuth);
app.use((req, res, next) => {
  res.status(404).send("Page not found.");
});
// загальна мідлвара що буде повертати відповідь на 404 помилку

app.get("/", (req, res) => {
  res.send("Hello, Anna!");
});

app.get("/books", (req, res) => {
  const filePath = path.join(__dirname, "books/books.json");

  fs.readFile(filePath, { encoding: "UTF-8" })
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err.message);
    });
});

app.post("/books/create", (req, res) => {
  res.send("Book created successfully!");
});

app.listen("8080", () => {
  console.log("Server star");
});
