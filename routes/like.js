const express = require("express");
const userSchema = require("../models/users");
const tweetSchema = require("../models/tweets");

const router = express.Router();

//Like a tweet by tweet id and user id
router.post("/like", async (req, res) => {
  const { userId, tweetId } = req.body;
  try {
    const user = await userSchema.findById(userId);
    const tweet = await tweetSchema.findById(tweetId);
    if (!user || !tweet) {
      return res.status(400).json({ message: "Tweet o usuario no encontrado" });
    }
    if (user.likes.includes(tweetId)) {
      return res.status(400).json({ message: "Tweet ya likeado" });
    }
    user.likes.push(tweetId);
    tweet.likes.push(userId);
    tweet.likesCount = tweet.likes.length;
    await user.save();
    await tweet.save();
    res.status(200).json({ message: "Tweet likeado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read all likes by user id
router.get("/like/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userSchema.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const likes = await tweetSchema.find({ _id: { $in: user.likes } });
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Unlike a tweet by tweet id and user id
router.delete("/unlike", async (req, res) => {
  const { userId, tweetId } = req.body;
  try {
    const user = await userSchema.findById(userId);
    const tweet = await tweetSchema.findById(tweetId);
    if (!user || !tweet) {
      return res.status(400).json({ message: "Usuario o tweet no encontrado" });
    }
    if (!user.likes.includes(tweetId)) {
      return res.status(400).json({ message: "Tweet no likeado" });
    }
    user.likes = user.likes.filter((id) => id !== tweetId);
    tweet.likes = tweet.likes.filter((id) => id !== userId);
    tweet.likesCount = tweet.likes.length;
    await user.save();
    await tweet.save();
    res.status(200).json({ message: "Tweet unlikeado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
