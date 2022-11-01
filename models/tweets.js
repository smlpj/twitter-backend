const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  tweet: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    required: false,
    default: [],
  },
  likesCount: {
    type: Number,
    required: false,
    default: 0,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("tweets", tweetSchema);
