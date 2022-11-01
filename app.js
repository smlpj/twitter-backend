const mongoose = require("mongoose");

const url = "mongodb://localhost/twitter-database";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB."))
  .catch((err) => console.log("Error al conectar a MongoDB.", err));

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  tweets: Array,
  followers: Array,
  following: Array,
});

const UserModel = mongoose.model("users", userSchema);

//Show

const show = async () => {
  const users = await UserModel.find();
  console.log(users);
};

show();
