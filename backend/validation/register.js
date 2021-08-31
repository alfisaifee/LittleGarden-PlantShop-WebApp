import validator from "validator";
import isEmpty from "is-empty";

function validateRegisterInput(data) {
  let errors = "";

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordCheck = !isEmpty(data.passwordCheck) ? data.passwordCheck : "";

  if (validator.isEmpty(data.username)) {
    errors += "Username field is required";
  } else if (!validator.isEmail(data.email)) {
    errors += "Invalid Email";
  }

  if (validator.isEmpty(data.password)) {
    errors += "\nPassword field is required";
  }

  if (validator.isEmpty(data.passwordCheck)) {
    errors += "\nConfirm password field is required";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors += "\nPassword must be at least 6 characters";
  }
  if (!validator.equals(data.password, data.passwordCheck)) {
    errors += "\nPasswords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateRegisterInput;
