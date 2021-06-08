const express = require("express");
const router = express.Router();
const passport = require("passport");

const Todo = require("../../models/Todo");
const User = require("../../models/User");

// Validator
const validateTodoInput = require("../../validation/todoItem");

// @route   GET api/todo
// @desc    Get all todos of current user
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ _id: req.user.id })
      .populate("todo_list", ["description", "created_at"])
      .then((user) => {
        if (!user) {
          res.status(404).json({ usernotfound: "User not found" });
        } else {
          res.json(req.user);
        }
      });
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

    if (!isValid) {
      res.status(400).json(errors);
    }
    const newTodo = new Todo({
      description: req.body.description,
      have_due: req.body.have_due,
      due_date: req.body.have_due ? req.body.due_date : "",
      is_daily: req.body.is_daily,
    });
    newTodo.owner = req.user.id;
    newTodo
      .save()
      .then((todoObj) => {
        res.json(todoObj);
      })
      .catch((err) => console.log(err));
  }
);
// TODO Solve populate, link to user and return res

// @route   PUT api/todo/:id
// @desc    Update a todo's attribute
// @access  Private

// @route   DELETE api/todo/:id
// @desc    Delete a todo
// @access  Private

module.exports = router;
