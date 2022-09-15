import {
  Alert,
  Box,
  Button,
  Divider,
  Image,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStylesLogin from "../../../styles/LoginStyle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MasterPageAuth from "../../components/screens/auth/MasterPageAuth";
function Register(props) {
  const classes = useStylesLogin();
  return (
    <Box className={classes.main}>
      <MasterPageAuth from="register" />
    </Box>
  );
}

export default Register;
