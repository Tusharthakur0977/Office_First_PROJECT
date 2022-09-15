import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStylesLogin from "../../../../styles/LoginStyle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Box from "../../appcomp/BoxComponent";
import { registerUser } from "../../../services/AuthApis";
import { useTheme } from "@mui/styles";

function RegisterForm() {
  const classes = useStylesLogin();
  const { palette } = useTheme();
  const [signUpForm, setSignUpForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    first_name: false,
    last_name: false,
    email: false,
    emailError: "",
    phone: false,
    password: false,
    confirmPassword: false,
    confirmPassError: "",
    signUpSuccess: false,
    alreadyUser: false,
  });
  const navigate = useNavigate();
  const regularEmailExp = /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/;
  const handleOnChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };
  const handleRegister = async () => {
    let hasError = false;
    let tempErrors = { ...errors };
    if (signUpForm.first_name.trim().length === 0) {
      tempErrors = { ...tempErrors, first_name: true };
      hasError = true;
    }
    if (signUpForm.last_name.trim().length === 0) {
      tempErrors = { ...tempErrors, last_name: true };
      hasError = true;
    }
    if (signUpForm.email.trim().length === 0) {
      tempErrors = {
        ...tempErrors,
        email: true,
        emailError: "Please enter email",
      };
      hasError = true;
    } else if (!regularEmailExp.test(signUpForm.email)) {
      tempErrors = {
        ...tempErrors,
        email: true,
        emailError: "Please enter valid email",
      };
      hasError = true;
    }
    if (signUpForm.phone.trim().length === 0) {
      tempErrors = { ...tempErrors, phone: true };
      hasError = true;
    }
    if (signUpForm.password.trim().length === 0) {
      tempErrors = { ...tempErrors, password: true };
      hasError = true;
    }
    if (confirmPassword.trim().length === 0) {
      tempErrors = { ...tempErrors, confirmPassword: true };
      hasError = true;
    }
    if (signUpForm.password !== confirmPassword) {
      tempErrors = {
        ...tempErrors,
        confirmPassword: true,
        confirmPassError: "Password does not match",
      };
      hasError = true;
    }
    if (hasError) {
      setErrors(tempErrors);
    } else {
      setErrors({
        ...errors,
        first_name: false,
        last_name: false,
        phone: false,
        email: false,
        password: false,
        confirmPassword: false,
        confirmPassError: "",
        emailError: "",
        signUpSuccess: false,
        alreadyUser: false,
      });

      try {
        let { data } = await registerUser(signUpForm);
        console.log(data);
        navigate("/mfa-login");
        setOpen(true);
      } catch (error) {
        console.log(error?.response?.data?.detail);
        toast.error(error?.response?.data?.detail);
      }
    }
    setTimeout(() => {
      setErrors({
        ...errors,
        first_name: false,
        last_name: false,
        phone: false,
        email: false,
        password: false,
        confirmPassword: false,
        confirmPassError: "",
        emailError: "",
        signUpSuccess: false,
        alreadyUser: false,
      });
    }, 3000);
  };

  return (
    <Box className={classes.rightSection}>
      <Box className={classes.formContiner}>
        <img alt="" className={classes.logo} src="assets/images/logo.png" />
        <Box sx={{ height: 50 }} />
        <Box className={classes.form} component="form" autoComplete="off">
          <Box className={classes.formInputContainer}>
            <TextField
              name={"first_name"}
              onChange={handleOnChange}
              className={classes.formInput}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              error={errors.first_name}
              helperText={errors.first_name && "Please enter First Name"}
              size="small"
            />
          </Box>
          <Box className={classes.formInputContainer}>
            <TextField
              className={classes.formInput}
              name={"last_name"}
              onChange={handleOnChange}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              error={errors.last_name}
              helperText={errors.last_name && "Please enter Last Name"}
              size="small"
            />
          </Box>
          <Box className={classes.formInputContainer}>
            <PhoneInput
              country={"us"}
              inputStyle={{
                width: "100%",
                backgroundColor: "transparent",
                border: errors.last_name
                  ? "1px solid red"
                  : !palette.mode === "dark"
                  ? "1px solid rgba(255, 255, 255, 0.23)"
                  : "1px solid rgba(0, 0, 0, 0.23)",
                color: palette.mode === "dark" ? "#fff" : " #000",
              }}
              buttonStyle={{
                backgroundColor: "transparent",
                border: errors.last_name
                  ? "1px solid red"
                  : !palette.mode === "dark"
                  ? "1px solid rgba(0, 0, 0, 0.23)"
                  : "1px solid rgba(255, 255, 255, 0.23)",
              }}
              onChange={(e) => setSignUpForm({ ...signUpForm, phone: e })}
            />
            <Typography
              variant="caption"
              sx={{
                textAlign: "start",
                padding: "0rem 1rem",
                marginTop: "0.3rem",
                color: "red",
                display: !errors.last_name && "none",
              }}
            >
              Phone Number is required
            </Typography>
          </Box>
          <Box className={classes.formInputContainer}>
            <TextField
              className={classes.formInput}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              onChange={handleOnChange}
              size="small"
              name={"email"}
              error={errors.email}
              helperText={errors.email && errors.emailError}
            />
          </Box>
          <Box className={classes.formInputContainer}>
            <Box className={classes.formInputContainerBox}>
              <TextField
                className={classes.formInput}
                variant="outlined"
                size="small"
                type="password"
                id="outlined-basic"
                label="Password"
                onChange={handleOnChange}
                name={"password"}
                error={errors.password}
                helperText={errors.password && "Please enter Password"}
              />
            </Box>
          </Box>
          <Box className={classes.formInputContainer}>
            <Box className={classes.formInputContainerBox}>
              <TextField
                className={classes.formInput}
                variant="outlined"
                size="small"
                type="password"
                id="outlined-basic"
                label="Confirm Password"
                error={errors.confirmPassword}
                helperText={
                  (errors.confirmPassword && "Password does not match") ||
                  errors.confirmPassError
                }
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Box>
          </Box>
          {/* {errors.signUpSuccess && (
            <Alert severity="success">
              Account created successfully, try to login
            </Alert>
          )} */}
          {/* {errors.alreadyUser && (
            <Alert severity="error">
              Account with this Email / Mobile number already exists
            </Alert>
          )} */}
          <Button onClick={handleRegister} variant="contained">
            Register
          </Button>
        </Box>
        <Box sx={{ height: 10 }} />
        <Typography
          onClick={() => navigate("/")}
          className={classes.forgotPassword}
        >
          Already have an account try to login.
        </Typography>
        {/* <Box sx={{ height: 50 }} /> */}
      </Box>
    </Box>
  );
}

export default RegisterForm;
