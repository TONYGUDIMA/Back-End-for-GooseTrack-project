const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users/usersRouter");

const app = express();
dotenv.config({ path: "./.env" });
const formatsLogger =
  app.get("env") === "development"
    ? "dev"
    : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then((con) => {
    console.log("Mongo DB succesfully connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
// ROUTERS ===================================================================
app.use("/users", usersRouter);
// ===========================================================================
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.static("public"));
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
