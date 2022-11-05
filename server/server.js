const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT;

app.get("/api", (req, res) => {
  res.json({ users: ["one", "next", "lastUser"] });
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
