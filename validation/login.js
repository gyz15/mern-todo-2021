const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateLoginInput(data) {
  const errors = {};

  data.username = isEmpty(data.username) ? "" : data.username;
  data.password = isEmpty(data.password) ? "" : data.password;

  // Required Fields
  if (Validator.isEmpty(data.username)) {
    errors.username = "Please enter your username";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter your password";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
