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
    User.findOne({ _id: req.user.id }, "-password")
      .populate("todoList")
      .then((user) => {
        if (!user) {
          res.status(404).json({ usernotfound: "User not found" });
        } else {
          res.json(user);
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
      return res.status(400).json(errors);
    }
    // Create Todo Obj
    const newTodo = new Todo({
      description: req.body.description,
      have_due: req.body.have_due,
      due_date: req.body.have_due ? req.body.due_date : "",
      is_daily: req.body.is_daily,
      created_at: Date.now(),
      done: false,
    });
    newTodo.owner = req.user.id;
    newTodo
      .save()
      .then((todoObj) => {
        req.user.todoList.push(newTodo);
        req.user.save().then(() => res.json(newTodo));
      })
      .catch((err) => console.log(err));
  }
);
// @route   PUT api/todo/:id
// @desc    Update a todo's attribute
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTodoInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const updateTodo = {
      description: req.body.description,
      have_due: req.body.have_due,
      due_date: req.body.have_due ? req.body.due_date : "",
      is_daily: req.body.is_daily,
      done: req.body.done === "true" || req.body.done === true,
    };

    User.findOne({ _id: req.user.id }).then((user) => {
      if (!user) {
        // User not found
        errors.usernotfound = "User not found";
        return res.status(404).json(errors);
      } else {
        // User found, check todo belongs to user or not
        Todo.findOne({ _id: req.params.id })
          .then((todo) => {
            if (todo) {
              if (todo.owner.toString() === user.id) {
                // The todo obj belongs to user, perform update
                Todo.findOneAndUpdate(
                  { _id: req.params.id },
                  { $set: updateTodo },
                  { new: true }
                )
                  .then((newTodo) => {
                    return res.json(newTodo);
                  })
                  .catch((err) => console.log(err));
              } else {
                errors.notbelongstouser = "Todo not belongs to existing user";
                return res.status(404).json(errors);
              }
            } else {
              errors.todonotfound = "Todo not found";
              return res.status(404).json(errors);
            }
          })
          .catch((err) => {
            console.log(err);
            return res.status(404).json({ error: "Not found" });
          });
      }
    });
  }
);

// @route   DELETE api/todo/:id
// @desc    Delete a todo
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ _id: req.user.id })
      .populate("todoList")
      .then((user) => {
        if (!user) {
          // User not found
          errors.usernotfound = "User not found";
          return res.status(404).json(errors);
        } else {
          // Perform delete on todo obj
          Todo.findOneAndDelete({ _id: req.params.id, owner: user.id })
            .then((deleted) => {
              // Perform delete on user todoList array
              const removeIndex = user.todoList
                .map((item) => item._id.toString())
                .indexOf(req.params.id.toString());
              // If todo id not in user todoList array, ignore
              if (removeIndex === 1) {
                return res.json({ success: "Todo delete" });
              }
              user.todoList.splice(removeIndex, 1);
              user
                .save()
                .then((user) => res.json({ success: "Todo deleted" }))
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }
);
// delete todo db, delete user todoList
module.exports = router;
