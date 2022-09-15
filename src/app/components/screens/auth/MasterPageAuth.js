import { Button } from "@mui/material";
import Box from "../../appcomp/BoxComponent";
// import { Box,  Button } from "@mui/material";
import React, { Suspense } from "react";
import useStylesLogin from "../../../../styles/LoginStyle";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../../navigation/RoutePath";
import { CognitoAuthenticator } from "../../auth/CognitoAuthenticator";

const LoginForm = React.lazy(() => import("./LoginForm"));

function MasterPageAuth(props) {
  let navigate = useNavigate();
  let { from } = props;
  const classes = useStylesLogin();
  return (
    <Box className={classes.main}>
      <Box className={classes.leftSection}>
        <Box
          className={classes.buttonContainer}
          sx={{ bgcolor: "transparent" }}
        >
          <Button
            onClick={() => {
              navigate(RoutePath.login.path);
              window.location.reload();
            }}
            className={
              from === "login"
                ? classes.buttonsRightSectionDeSelected
                : classes.buttonsRightSectionSelected
            }
          >
            Login
          </Button>
          <Button
            onClick={() => {
              navigate(RoutePath.register.path);
              window.location.reload();
            }}
            className={
              from === "register"
                ? classes.buttonsRightSectionDeSelected
                : classes.buttonsRightSectionSelected
            }
          >
            Register
          </Button>
        </Box>
        {/* <Box sx={{ height: 100 }}>
        </Box> */}
      </Box>
      <Box disabled={true} className={classes.rightSection}>
        <Box className={classes.formContiner}>
          <CognitoAuthenticator
            initialScreen={from === "login" ? "signIn" : "signUp"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MasterPageAuth;
