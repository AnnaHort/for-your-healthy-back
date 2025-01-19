const express = require("express");
const cors = require("cors");
const app = express();
const { Client } = require("pg");
require("dotenv").config();

// Параметри підключення з .env
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Підключення до бази даних
client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => {
    console.error("Connection error", err.stack);
  });
