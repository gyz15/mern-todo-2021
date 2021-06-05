const express = require("express");
const router = express.Router();

// @route   POST api/user/register
// @desc    Register a user
// @access  Public
router.get("/", (req, res) => {
  res.json({ success: "hello" });
});

// @route   POST api/user/login
// @desc    Login a user
// @access  Public

// @route   GET api/user/todo/all
// @desc    Get all user todo's
// @access  Private

module.exports = router;
