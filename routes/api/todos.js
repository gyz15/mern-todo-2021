const express = require("express");
const router = express.Router();

// @route   POST api/todo
// @desc    Create a todo
// @access  Private
router.get("/", (req, res) => {
  res.json({ success: "todo" });
});

// @route   PUT api/todo/:id
// @desc    Update a todo's attribute
// @access  Private

// @route   DELETE api/todo/:id
// @desc    Delete a todo
// @access  Private

module.exports = router;
