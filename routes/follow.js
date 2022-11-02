const express = require("express");
const userSchema = require("../models/users");

const router = express.Router();

//Follow a user and add it to user followers
router.post("/follow", (req, res) => {
  userSchema
    .findByIdAndUpdate(req.body.user, {
      $push: { following: req.body.following },
    })
    .then((data) => {
      userSchema
        .findByIdAndUpdate(req.body.following, {
          $push: { followers: req.body.user },
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

//Get all followers from a user
router.get("/followers/:userId", (req, res) => {
  userSchema
    .findById(req.params.userId)
    .then((data) => {
      userSchema
        .find({ _id: { $in: data.followers } })
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

//Unfollow a user and remove it from user followers
router.delete("/unfollow", (req, res) => {
  userSchema
    .findByIdAndUpdate(req.body.user, {
      $pull: { following: req.body.following },
    })
    .then((data) => {
      userSchema
        .findByIdAndUpdate(req.body.following, {
          $pull: { followers: req.body.user },
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

module.exports = router;
