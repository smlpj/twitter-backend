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
    default: [{ type: String }],
  },
  followers: {
    type: Array,
    required: false,
    default: [{ type: String }],
  },
  following: {
    type: Array,
    required: false,
    default: [{ type: String }],
  },
  likes: {
    type: Array,
    required: false,
    default: [{ type: String }],
  },
});

module.exports = mongoose.model("users", userSchema);
