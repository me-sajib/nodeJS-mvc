const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("error connecting to mongodb");
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

const postRoute = require("./api/routes/post");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/posts", postRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
