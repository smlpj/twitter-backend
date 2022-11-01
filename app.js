const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 9000;

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/twitter-database")
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(port, () => console.log(`App listening on port: ${port}!`));
