const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();

app.get("/api", (req, res) => {
  res.json({ users: ["one", "next", "lastUser"] });
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
