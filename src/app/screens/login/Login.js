import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useStylesLogin from "../../../styles/LoginStyle";
import MasterPageAuth from "../../components/screens/auth/MasterPageAuth";
import ErrorHandler from "../../utils/ErrorHandler";
import Fallback from "../../utils/Fallback";
import { removeData, USER } from "../../utils/storage";

function Login(props) {
  const classes = useStylesLogin();
  return (
    <Box className={classes.main}>
      {/* <ErrorBoundary FallbackComponent={Fallback} onError={ErrorHandler}> */}
      <MasterPageAuth from="login" />
      {/* </ErrorBoundary> */}
    </Box>
  );
}

export default Login;
