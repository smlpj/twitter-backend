const express = require("express");
const userSchema = require("../models/tweets");

const router = express.Router();

//Create tweet
router.post("/tweets", (req, res) => {
  const tweet = userSchema(req.body);
  tweet
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Get all tweets
router.get("/tweets", (req, res) => {
  userSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Get tweet by user id
router.get("/tweets/:id", (req, res) => {
  userSchema
    .findById(req.params.user.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Update tweet text by user id
router.patch("/tweets/:id", (req, res) => {
  userSchema
    .findByIdAndUpdate(req.params.user.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Delete tweet by user id
router.delete("/tweets/:id", (req, res) => {
  userSchema
    .findByIdAndDelete(req.params.user.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
