import validator from "validator";
import isEmpty from "is-empty";

function validateLoginInput(data) {
  let errors = "";

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.email)) {
    errors += "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors += "Invalid Email";
  }

  if (validator.isEmpty(data.password)) {
    errors += "\nPassword field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateLoginInput;
