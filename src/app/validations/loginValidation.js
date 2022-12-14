export const loginValidation = (email, password) => {
  console.log(email, password);
  let emreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailError = "";
  let passwordError = "";
  if (!email.length) {
    emailError = "Email Required";
  } else if (!emreg.test(email)) {
    emailError = "Please Enter Valid Email";
  } else {
    emailError = [];
  }
  if (!password.length) {
    passwordError = "Password Required";
  } else if (password.length < 6) {
    passwordError = "Password invalid";
  } else {
    passwordError = [];
  }
  if (emailError.length || passwordError.length) {
    // setError({...error, email: emailError, password: passwordError});
    // console.log(error);
    return { status: false, email: emailError, password: passwordError };
  }
  return true;
};
