const express = require("express");
const router = express.Router();
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// @route   POST api/user/register
// @desc    Register a user
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  return res.json(req.body);
});

// @route   POST api/user/login
// @desc    Login a user
// @access  Public

// @route   GET api/user/todo/all
// @desc    Get all user todo's
// @access  Private

module.exports = router;
