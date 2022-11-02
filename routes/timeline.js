const express = require("express");
const userSchema = require("../models/users");
const tweetSchema = require("../models/tweets");

const router = express.Router();

// Timeline of tweets from users followed by user id, sorted by date
router.get("/timeline/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userSchema.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }
    const posts = await tweetSchema
      .find({ userId: { $in: user.following } })
      .sort({ date: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
