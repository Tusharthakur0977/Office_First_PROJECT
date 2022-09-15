import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStylesSecurityQuestions from "../../../../styles/SecurityQuestions";
import { toast } from "react-toastify";
import { SecurityQuestion, webullLogin } from "../../../services/AuthApis";

function SecurityQuestions(props) {
  const classes = useStylesSecurityQuestions();
  const navigate = useNavigate();
  const { email, password, access_token, otp } = props;
  const [qa, setQA] = useState({
    id: "",
    name: "",
    answer: "",
  });

  const [error, setError] = useState(false);
  const getSecurityQusetion = async () => {
    try {
      let { data } = await SecurityQuestion(access_token, email);
      data.data.map((item) => {
        setQA({ ...qa, id: item?.questionId, name: item?.questionName });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSecurityQusetion();
  }, [props]);

  const registerUser = async () => {
    let hasError = false;
    if (qa.answer.trim().length === 0) {
      hasError = true;
    }
    if (hasError) {
      setError(true);
    } else {
      setError(false);
      try {
        let { data } = await webullLogin(access_token, {
          email: email,
          password: password,
          mfa_token: otp,
          question_id: qa.id,
          answer: qa.answer,
        });
        if (data.status === false) {
          toast.error(data.detail);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Box sx={{ boxShadow: 5 }} className={classes.container}>
      <img
        alt="logo"
        className={classes.logo}
        src="../assets/images/logo.png"
      />
      <Typography className={classes.title}>
        Answer Security Question
      </Typography>
      <Typography className={classes.subTitle}>
        For the security of your account, Please answer the security questions
        first.
      </Typography>
      <Typography className={classes.questionTitle}>
        {qa?.name ? qa?.name : <CircularProgress />}
      </Typography>
      <TextField
        className={classes.answer}
        onChange={(e) => setQA({ ...qa, answer: e.target.value })}
        id="outlined-basic"
        label="Your Answer"
        error={error}
        helperText={error && "Please enter answer"}
        variant="outlined"
        size="small"
      />
      <Button className={classes.changeQuestion} onClick={getSecurityQusetion}>
        Change Question
      </Button>
      <Button className={classes.button} onClick={registerUser}>
        Login
      </Button>
      <Button className={classes.goBack} onClick={() => props.goBack()}>
        Go Back
      </Button>
    </Box>
  );
}

export default SecurityQuestions;
