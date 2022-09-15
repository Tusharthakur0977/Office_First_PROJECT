import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveData, USER } from "../../../utils/storage";
import { loginValidation } from "../../../validations/loginValidation";
import { login, loginMeApi } from "../../../services/AuthApis";
import { toast } from "react-toastify";
import useStylesLogin from "../../../../styles/LoginStyle";
import RoutePath from "../../../navigation/RoutePath";
import Spinner from "../../appcomp/spinner/Spinner";
import ForgotPassword from "../forgotpassword/ForgotPassword";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Box from "../../appcomp/BoxComponent";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const classes = useStylesLogin();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let { email, password } = formData;
  let navigate = useNavigate();

  const loginMe = async (token) => {
    try {
      let { data } = await loginMeApi(token);
      console.log(data);
      setLoading(false);
      if (data.webull.length === 0) {
        setLoading(false);
        // saveData(USER, JSON.stringify(data));
        navigate("/wiz/mfa-login", { state: token });
      } else {
        // saveData(USER, JSON.stringify(data));
        navigate("/wiz/home");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    let validations = loginValidation(email, password);
    setError(validations);
    if (validations === true) {
      setLoading(true);
      try {
        let { data } = await login(formData);
        loginMe(data.access_token);
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.detail);
        }
        setLoading(false);
      }
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <Box disabled={true} className={classes.rightSection}>
      <Box className={classes.formContiner}>
        <img
          alt="App logo"
          className={classes.logo}
          src="assets/images/logo.png"
        />
        <Box sx={{ height: 100 }} />
        <Box className={classes.form}>
          <Box className={classes.formInputContainer}>
            <TextField
              className={classes.formInput}
              error={error?.email?.length > 0 ? true : false}
              helperText={error?.email}
              label="Email/Phone"
              variant="outlined"
              size="small"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {/* <Box sx={{ height: 10 }} /> */}
          </Box>
          {/* <Box sx={{ height: 20 }} /> */}
          <Box component="form" className={classes.formInputContainer}>
            <Box className={classes.formInputContainerBox}>
              <TextField
                error={
                  !error?.status && error?.password?.length > 0 ? true : false
                }
                helperText={error?.password}
                className={classes.formInput}
                variant="outlined"
                size="small"
                type={showPassword ? "password" : "text"}
                label="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePassword}
                        edge="end"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleLogin();
                  }
                }}
              />
            </Box>
            {/* <Box sx={{ height: 10 }} /> */}
          </Box>
          {/* <Box sx={{ height: 20 }} /> */}
          <Box className={classes.loginButtonContainer}>
            {loading ? (
              <Spinner />
            ) : (
              <Button
                className={classes.loginButton}
                variant="contained"
                onClick={handleLogin}
              >
                Login
              </Button>
            )}
          </Box>
        </Box>

        <Box sx={{ height: 50 }} />
        <Typography
          onClick={() => {
            setShowForgotPassword(true);
          }}
          className={classes.forgotPassword}
        >
          Forgot Password?
        </Typography>
        <Box sx={{ height: 10 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Typography className={classes.registerMessage}>
            Don't have an account?
          </Typography>
          <Typography
            onClick={() => navigate(RoutePath.register.path)}
            className={classes.textRegisterButton}
          >
            Register
          </Typography>
        </Box>
      </Box>
      <ForgotPassword
        toggleOpen={() => {
          setShowForgotPassword(!showForgotPassword);
        }}
        open={showForgotPassword}
      />
    </Box>
  );
}

export default LoginForm;
