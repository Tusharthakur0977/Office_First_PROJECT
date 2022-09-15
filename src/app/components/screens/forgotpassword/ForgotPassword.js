import React, { useEffect, useState } from "react";
import { actionForgot } from "../../../redux/LoginAction";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import {
  forgetPass,
  confirmOtp,
  resetPassword,
} from "../../../services/AuthApis";
import {
  TextField,
  IconButton,
  Button,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function ForgotPassword(props) {
  const [open, setOpen] = useState(props.open);
  const [verified, setVerified] = useState(false);
  const [show, setShow] = useState("email");
  const [states, setStates] = useState({
    email: "",
    otp: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({
    email: false,
    emailError: "",
  });
  useEffect(() => {
    setOpen(props.open);
    setShow("email");
    setVerified(false);
  }, [props.open]);

  const regularEmailExp = /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/;
  let { email, otp, password, showPassword } = states;
  const handleClose = () => {
    props.toggleOpen();
  };

  const handleSendEmail = async () => {
    if (!regularEmailExp.test(email)) {
      setErrors({
        email: true,
        emailError: "Please enter a valid email address",
      });
      setTimeout(() => {
        setErrors({
          email: false,
          emailError: "",
        });
      }, 3000);
      return;
    }
    try {
      let { data } = await forgetPass(email);
      console.log(data);
      setShow("otp");
      toast.success(data.detail);
    } catch (error) {
      console.log(error.response.data.detail);
      toast.error(error?.response?.data?.detail);
    }
  };

  const handleOtpSend = async () => {
    try {
      let { data } = await confirmOtp({ email, otp });
      setShow("pass");
      setVerified(true);
      toast.success(data.detail);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePasswordChange = async () => {
    try {
      let { data } = await resetPassword({ email, password });
      console.log(data);
      toast.success(data.detail);
      props.toggleOpen();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleChange = (e) => {
    setStates({ ...states, [e.target.name]: e.target.value });
  };
  const togglePassword = () => {
    setStates({ ...states, showPassword: !showPassword });
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>Update your password</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {show === "email" &&
            "Enter your username or email address and select Send Email."}
          {show === "otp" && `OTP email is sent to ${email}. Please enter OTP`}
          {show === "pass" && "Please Update Password"}
        </DialogContentText>
        <TextField
          autoFocus
          name="email"
          margin="dense"
          label="Username or Email"
          type="email"
          fullWidth
          variant="standard"
          error={errors.email}
          helperText={errors.email && errors.emailError}
          onChange={handleChange}
        />
        {show === "otp" && (
          <TextField
            autoFocus
            margin="dense"
            name="otp"
            label="OTP"
            type="otp"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        )}
        {show === "pass" && (
          <TextField
            autoFocus
            margin="dense"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="standard"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                // handleLogin();
              }
            }}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {show === "email" && (
          <Button onClick={handleSendEmail}>Send Email</Button>
        )}
        {show === "otp" && <Button onClick={handleOtpSend}>Confirm</Button>}
        {show === "pass" && (
          <Button onClick={handlePasswordChange}>Submit</Button>
        )}
      </DialogActions>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Dialog>
  );
}
