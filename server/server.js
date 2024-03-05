const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const AWS = require("aws-sdk");
const connectDB = require("./config/db");
const port = process.env.PORT;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.json({ users: ["one", "next", "lastUser"] });
});

app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
