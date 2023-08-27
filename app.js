const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const dotenv = require("dotenv");
require("dotenv").config();
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const reviewRouter = require("./routes/reviews");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
app.use("/auth", authRouter);
app.use("/user", usersRouter);
app.use("/review", reviewRouter);

// ===========================================================================
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.static("public"));

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const message = error.message;
  res.status(error.status || 500).json({
    message,
  });
});

module.exports = app;
