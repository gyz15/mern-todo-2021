const express = require("express");
const router = express.Router();
const passport = require("passport");

const Todo = require("../../models/Todo");

// Validator
const validateTodoInput = require("../../validation/todoItem");

// @route   GET api/todo
// @desc    Get all todos of current user
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

// @route   POST api/todo/add
// @desc    Create a todo
// @access  Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTodoInput(req.body);
    res.json({ success: "todo" });
  }
);

// @route   PUT api/todo/:id
// @desc    Update a todo's attribute
// @access  Private

// @route   DELETE api/todo/:id
// @desc    Delete a todo
// @access  Private

module.exports = router;
