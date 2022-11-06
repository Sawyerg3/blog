const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();

app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.json({ users: ["one", "next", "lastUser"] });
});

app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
