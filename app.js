const mongoose = require("mongoose");

const url = "mongodb://localhost/twitter-database";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Conectado a MongoDB."))
  .catch((err) => console.log("Error al conectar a MongoDB.", err));
