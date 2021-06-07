const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("dotenv").config();
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");
const router = express.Router();

// @route   POST api/user/register
// @desc    Register a user
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        errors.username = "This username is already exist";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password,
        });
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            console.log(salt, hash);
            newUser.password = hash;
            console.log(newUser);
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          });
        });
      }
    })
    .catch((err) =>
      res.status(500).json({ error: "An unexpected error occured" })
    );
});

// @route   POST api/user/login
// @desc    Login a user
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  const usernameInput = req.body.username;
  const passwordInput = req.body.password;

  User.findOne({ username: usernameInput }).then((user) => {
    if (!user) {
      errors.username = "User not found";
      return res.status(400).json(errors);
    }

    bcrypt.compare(passwordInput, user.password).then((match) => {
      if (match) {
        const payload = {
          id: user._id,
          todo_list: user.todo_list,
          username: user.username,
        };
        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          { expiresIn: "7d" },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          }
        );
      } else {
        errors.password = "Incorrect password";
        res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
