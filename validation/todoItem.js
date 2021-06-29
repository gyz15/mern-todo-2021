const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateTodoInput(data) {
  const errors = {};

  data.description = isEmpty(data.description) ? "" : data.description;
  data.haveDue = isEmpty(data.haveDue) ? false : data.haveDue;
  data.dueDate = isEmpty(data.dueDate) ? "" : data.dueDate;
  data.isDaily = isEmpty(data.isDaily) ? false : data.isDaily;

  if (!Validator.isLength(data.description, { min: 2, max: 100 })) {
    errors.description = "Description should between 2 to 100 characters";
  }
  // Required Fields
  if (Validator.isEmpty(data.description)) {
    errors.description = "Please enter a title or description for this todo";
  }
  // haveDue and isDaily cannot be true at the same time
  if (data.haveDue === "true" || data.haveDue === true) {
    // dueDate should be specified if and only if haveDue is true
    if (Validator.isEmpty(data.dueDate)) {
      errors.dueDate = "Please add a due date";
    }
    if (data.isDaily === "true") {
      errors.isDaily = "Daily tasks cannot have due date";
    }
  } else if (data.haveDue === "false" || data.haveDue === false) {
    if (!Validator.isEmpty(data.dueDate)) {
      errors.dueDate =
        "Due date shouldn't be specified if task does not have due.";
    }
  }

  return { errors, isValid: isEmpty(errors) };
};
