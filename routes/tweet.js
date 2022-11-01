const express = require("express");
const userSchema = require("../models/users");
const tweetSchema = require("../models/tweets");

const router = express.Router();

//Create tweet and add it to user
router.post("/tweets", (req, res) => {
  const tweet = tweetSchema({
    user: req.body.user,
    tweet: req.body.tweet,
  });
  tweet
    .save()
    .then((data) => {
      userSchema
        .findByIdAndUpdate(req.body.user, {
          $push: { tweets: data._id },
        })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json({ message: err });
        });
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Get all tweets from a user
router.get("/tweets/:userId", (req, res) => {
  userSchema
    .findById(req.params.userId)
    .then((data) => {
      tweetSchema
        .find({ _id: { $in: data.tweets } })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json({ message: err });
        });
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Update tweet from a user
router.patch("/tweets/:tweetId", (req, res) => {
  tweetSchema
    .findByIdAndUpdate(req.params.tweetId, {
      tweet: req.body.tweet,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Delete tweet from a user
router.delete("/tweets/:tweetId", (req, res) => {
  tweetSchema
    .findByIdAndDelete(req.params.tweetId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
