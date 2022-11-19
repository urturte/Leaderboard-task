const express = require("express");
const bodyParser = require("body-parser");
const scoreboardRoutes = require("./api/routes/scoreboard");
const resultsRoutes = require("./api/routes/scoreboardResults");

// Using Node.js `require()`
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

console.log(process.env.MONGO_CONNECTION);

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => {
    console.log("xxxxxxxxxxxxxxxxxx");
    console.log(err);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(scoreboardRoutes);
app.use(resultsRoutes);

app.listen(3000);
