const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateTodoInput(data) {
  const errors = {};

  data.description = isEmpty(data.description) ? "" : data.description;
  data.have_due = isEmpty(data.have_due) ? false : data.have_due;
  //  TODO data.due_date = isEmpty(data.due_date) ? "" : data.due_date;
  data.is_daily = isEmpty(data.is_daily) ? false : data.is_daily;
  //   TODO handle date formatted data
  //   TODO save with user ref
  //

  // Required Fields
  if (Validator.isEmpty(data.username)) {
    errors.username = "Please enter your username";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter your password";
  }
  // due_date should be specified if and only if have_due is true
  // Value of created_at, done will be set automatically
  // have_due and is_daily cannot be true at the same time

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
