const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./routes/user");
const tweetRoutes = require("./routes/tweet");
const followRoutes = require("./routes/follow");
const likeRoutes = require("./routes/like");

const app = express();
const port = 9000;

//Using /api as a prefix for all routes
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", tweetRoutes);
app.use("/api", followRoutes);
app.use("/api", likeRoutes);
//Routes
app.get("/", (req, res) => {
  res.send("Twitter Backend App");
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
