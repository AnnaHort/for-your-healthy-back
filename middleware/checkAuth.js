// мідлвари - функції, які виконуються між отриманням запиту від клієнта та відповіддю від сервера. В них прописуються умови віддавання відповіді від сервера. При виконанні цих умов мідлвара пропускає виконання коду далі за допомогою next(). Якщо умова мідлвари не виконується, то ми повертаємо помилку зя статус-кодом 400-499.

function checkAuth(req, res, next) {
  const { apiKey } = req.query;
  if (apiKey !== "1") {
    return res.status(401).send("Invalid API Key provided.");
  }
  next();
}

module.exports = checkAuth;
