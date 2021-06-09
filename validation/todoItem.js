const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateTodoInput(data) {
  const errors = {};

  data.description = isEmpty(data.description) ? "" : data.description;
  data.have_due = isEmpty(data.have_due) ? false : data.have_due;
  data.due_date = isEmpty(data.due_date) ? "" : data.due_date;
  data.is_daily = isEmpty(data.is_daily) ? false : data.is_daily;

  if (!Validator.isLength(data.description, { min: 2, max: 100 })) {
    errors.description = "Description should between 2 to 100 characters";
  }
  // Required Fields
  if (Validator.isEmpty(data.description)) {
    errors.description = "Please enter a title or description for this todo";
  }
  // have_due and is_daily cannot be true at the same time
  if (data.have_due === "true" || data.have_due === true) {
    // due_date should be specified if and only if have_due is true
    if (Validator.isEmpty(data.due_date)) {
      errors.due_date = "Please add a due date";
    } else if (Date.parse(data.due_date) <= Date.now()) {
      // due_date must be greater than date.now
      errors.due_date = "Due date cannot earlier than now";
    }
    if (data.is_daily === "true") {
      errors.is_daily = "Daily tasks cannot have due date";
    }
  } else if (data.have_due === "false" || data.have_due === false) {
    if (!Validator.isEmpty(data.due_date)) {
      errors.due_date =
        "Due date shouldn't be specified if task does not have due.";
    }
  }

  return { errors, isValid: isEmpty(errors) };
};
