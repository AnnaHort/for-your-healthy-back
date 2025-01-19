const fs = require("node:fs/promises");
const path = require("node:path");
const cors = require("cors");
const express = require("express"); // імпорт пакета express (фреймворк node js.)
const checkAuth = require("./middleware/checkAuth"); // імпорт функції авторизації
const app = express(); // екземпляр express для налаштування запуску сервера
const pool = require("./server");
// app.use(cors()); - // глобальна мідлвара для роботи з кросбраузерними запитами

app.use(
  cors({
    origin: "http://localhost:5432",
    optionSuccessStatus: 200,
  })
); // налаштування cors для конкретного сервера

// app.use(checkAuth); - мідлавара - перевірка наявності апішкі - функція яка має виконатися перед виконанням запиту

app.use("/books", checkAuth);
app.use("/user", checkAuth);

app.get("/", (req, res) => {
  res.send("Hello, Anna!");
});

app.get("/food", (req, res) => {
  res.send("FOOD!!!");
});

app.get("/user", (req, res) => {
  res.send("WELCOME!!!");
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

app.use((req, res) => {
  res.status(404).send("404 помилка");
});
// загальна мідлвара що буде повертати відповідь на 404 помилку

const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
