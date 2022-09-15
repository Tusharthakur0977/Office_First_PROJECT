import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStylesLogin from "../../../styles/LoginStyle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SecurityQuestions from "../../components/screens/security/SecurityQuestions";
import { useLocation } from "react-router-dom";
import { actionVerifyOTP } from "../../redux/LoginAction";
import Box from "../../components/appcomp/BoxComponent";
import { mfaLogin } from "../../services/AuthApis";
import { toast } from "react-toastify";

function MFALogin({ embedded = false, onSuccess = null }) {

  const { state } = useLocation();
  const classes = useStylesLogin();
  const EmailOrPhoneExp = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;

  const [mfaForm, setMFAForm] = useState({
    emailOrphone: "",
    password: "",
    otp: "",
  });
  const [accessToken, setAccess_token] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0NCwiZW1haWwiOiJhaXphejk3OTBAZ21haWwuY29tIiwiZXhwIjoxNjUxMTg1NzUxfQ.7v78cP0d_QOy_V5iziK5RNRg-dvcEL3_dSpZQ2tggOM"
  );
  const [showSection, setShowSection] = useState({
    otp: false,
    securityQA: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (state !== null) {
      setAccess_token(state);
    }
  }, [state]);

  const handleOnChange = (e) => {
    setMFAForm({ ...mfaForm, [e.target.name]: e.target.value });
  };
  const [errors, setErrors] = useState({
    emailOrphone: false,
    emailOrphoneError: "",
    password: false,
    otp: false,
    mfaLoginMessage: "",
    invalidEmail: false,
  });

  const submitOTP = () => {
    let hasError = false;
    let tempErrors = { ...errors };
    if (mfaForm.otp.trim().length === 0) {
      tempErrors = { ...tempErrors, otp: true };
      hasError = true;
    }
    if (hasError) {
      setErrors(tempErrors);
    } else {
      setErrors({ ...errors, otp: false });
      setShowSection({ ...showSection, securityQA: true });
      actionVerifyOTP(
        accessToken,
        { email: mfaForm.emailOrphone, otp: mfaForm.otp },
        (response, error) => {
          if (response) {
            if (response.status === true) {
            }
          } else {
            if (typeof error === "string") {
            }
          }
        }
      );
    }
  };

  const loginMfa = async (token) => {
    console.log(token);
    try {
      let { data } = await mfaLogin(mfaForm.emailOrphone, token);
      toast.success(data.detail, { position: toast.POSITION.TOP_LEFT });
      if (data.status === true) {
        setShowSection({ ...showSection, otp: true });
        setErrors({ ...errors, invalidEmail: false });
      }
    } catch (error) {
      console.log(error?.response?.data?.detail);
      toast.error(error?.response?.data?.detail);
    }
  };

  const handleRequest = async () => {
    let hasError = false;
    let tempErrors = { ...errors };
    if (!EmailOrPhoneExp.test(mfaForm.emailOrphone)) {
      tempErrors = { ...tempErrors, emailOrphone: true };
      hasError = true;
    }
    if (hasError) {
      setErrors(tempErrors);
    } else {
      setErrors({
        ...errors,
        emailOrphone: false,
        password: false,
        mfaLoginMessage: "",
        invalidEmail: false,
      });
      loginMfa(accessToken);
    }
  };
  return (
    <Box className={!embedded ? classes.main : ''}>
      {
        !embedded && <Box className={classes.leftSectionBlured}>
          <Box className={classes.innerText}>
            <img
              src="/assets/images/mfaLogin.svg"
              style={{
                padding: 10,
                width: "100%",
                borderRadius: 10,
              }}
            />
          </Box>
        </Box>
      }
      <Box className={classes.rightSection}>
        {showSection.securityQA ? (
          <SecurityQuestions
            otp={mfaForm.otp}
            access_token={accessToken}
            password={mfaForm.password}
            email={mfaForm.emailOrphone}
            goBack={() =>
              setShowSection({ ...showSection, securityQA: false, otp: false })
            }
          />
        ) : (
          <Box sx={embedded ? { mt: '0 !important' } : {}} className={classes.formContiner}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Typography>Login via </Typography>
              <img
                alt=""
                className={classes.logo}
                src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/5df57d3f01093e5cc5f6a2ba2b50e8d3.svg"
              />
            </Box>
            <Box sx={{ height: 50 }} />
            <Box className={classes.form}>
              <Box className={classes.formInputContainer}>
                <TextField
                  className={classes.formInput}
                  id="outlined-basic"
                  label="Email/Phone"
                  variant="outlined"
                  size="small"
                  name={"emailOrphone"}
                  error={errors.emailOrphone}
                  helperText={
                    errors.emailOrphone && "Please enter email / mobile number"
                  }
                  onChange={handleOnChange}
                />
                {errors.invalidEmail && (
                  <>
                    <Box sx={{ height: 10 }} />
                    <Alert severity="error">Invalid Email</Alert>
                  </>
                )}
                {/* <Box sx={{ height: 30 }} /> */}
              </Box>
              <Box sx={{ 'position': 'relative' }} className={classes.formInputContainer}>
                <Box className={classes.formInputContainerBox}>
                  <TextField
                    className={classes.formInput}
                    variant="outlined"
                    size="small"
                    type={!showPassword ? "password" : "text"}
                    id="outlined-basic"
                    label="Password"
                    name={"password"}
                    error={errors.password}
                    helperText={errors.password && "Please enter password"}
                    onChange={handleOnChange}
                  />
                  {showPassword ? (
                    <VisibilityOffIcon
                      onClick={() => setShowPassword(!showPassword)}
                      className={classes.eyeIcon}
                    />
                  ) : (
                    <RemoveRedEyeIcon
                      onClick={() => setShowPassword(!showPassword)}
                      className={classes.eyeIcon}
                    />
                  )}
                </Box>
                {/* <Box sx={{ height: 10 }} /> */}
              </Box>
              {/* <Box sx={{ height: 10 }} /> */}
              {showSection.otp && (
                <Alert severity="success">
                  An OTP has been sent to your mail. Please enter OTP
                </Alert>
              )}
              {errors?.mfaLoginMessage?.length > 0 && (
                <Alert severity="error">{errors.mfaLoginMessage}</Alert>
              )}
              {/* <Box sx={{ height: 10 }} /> */}
              {showSection.otp && (
                <Box className={classes.formInputContainer}>
                  <Box className={classes.formInputContainerBox}>
                    <TextField
                      className={classes.formInput}
                      variant="outlined"
                      size="small"
                      type="password"
                      id="outlined-basic"
                      label="Enter OTP"
                      name="otp"
                      error={errors.otp}
                      helperText={errors.otp && "Please enter otp"}
                      onChange={handleOnChange}
                    />
                    <RemoveRedEyeIcon className={classes.eyeIcon} />
                  </Box>
                  <Box sx={{ height: 10 }} />
                </Box>
              )}
              <Box sx={{ height: 10 }} />
              {showSection.otp ? (
                <Button onClick={submitOTP} variant="contained">
                  Confirm OTP
                </Button>
              ) : (
                <Button variant="contained" onClick={handleRequest}>
                  Login with Webull
                </Button>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default MFALogin;
