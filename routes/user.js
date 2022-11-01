const express = require("express");
const userSchema = require("../models/users");

const router = express.Router();

//Create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Get user by id
router.get("/users/:id", (req, res) => {
  userSchema
    .findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Update user by id
router.patch("/users/:id", (req, res) => {
  userSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Delete user by id
router.delete("/users/:id", (req, res) => {
  userSchema
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
