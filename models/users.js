const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  tweets: {
    type: Array,
    required: false,
  },
  followers: {
    type: Array,
    required: false,
  },
  following: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("users", userSchema);
