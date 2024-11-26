function checkAuth(req, res, next) {
  const { apiKey } = req.query;
  if (apiKey !== "12345") {
    return res.status(401).send("Invalid API Key provided.");
  }
  next();
}

module.exports = checkAuth;
