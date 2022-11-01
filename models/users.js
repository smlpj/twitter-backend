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
    default: [],
  },
  followers: {
    type: Array,
    required: false,
    default: [],
  },
  following: {
    type: Array,
    required: false,
    default: [],
  },
});

module.exports = mongoose.model("users", userSchema);
