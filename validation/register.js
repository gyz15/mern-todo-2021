const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  const errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Username Validation
  // Username must contain alphanumeric or - only, between 6 to 20 characters
  if (!Validator.isLength(data.username, { min: 6, max: 20 })) {
    errors.username = "Username must between 6 to 20 characters";
  }
  if (!Validator.isAlphanumeric(data.username, "en-US", { ignore: "_" })) {
    errors.username = "Username should only contains alphabets, numbers and _";
  }

  // Password Validation
  // Password must between 6 to 18 character
  // Password and confirmation password should match
  if (!Validator.isLength(data.password, { min: 6, max: 18 })) {
    errors.password = "Password must between 6 to 18 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Confirm password must match password";
  }

  // Required Fields
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password is required";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  return { errors, isValid: isEmpty(errors) };
};
