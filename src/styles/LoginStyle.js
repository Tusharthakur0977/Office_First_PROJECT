import { makeStyles } from "@mui/styles";

const useStylesLogin = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  leftSection: {
    flex: 0.6,
    backgroundImage: "url(assets/images/login_banner2.jpg)",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  leftSectionBlured: {
    flex: 0.6,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  buttonContainer: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    float: "right",
    marginTop: "30px",
    gap: "1rem",
  },
  buttonsRightSectionSelected: {
    color:
      theme.palette.mode === "dark" ? "#fff !important" : "#1976d2 !important",
    width: "100px",
    textAlign: "center",
    borderRadius: "20px 0px 0px 20px !important",
    backgroundColor:
      theme.palette.mode === "dark" ? "#1A2027 !important" : "#fff !important",
  },
  buttonsRightSectionDeSelected: {
    color: "white !important",
    width: "100px",
    textAlign: "center",
    borderRadius: "20px 0px 0px 20px !important",
    backgroundColor: "#1976d2 !important",
  },
  rightSection: {
    flex: 0.4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overFlowX: "auto",
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
  },
  formContiner: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    textAlign: "initial !important",
    [theme.breakpoints.down("md")]: {},
  },
  logo: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "1rem",
    bgcolor: "background.default",
  },
  formInputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  formInputContainerBox: {
    width: "100%",
  },
  formInput: {
    width: "100%",
  },
  loginButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  loginButton: {
    width: "100%",
  },
  eyeIcon: {
    right: 0,
    position: "absolute",
    marginRight: "6.4%",
    cursor: "pointer",
    marginTop: "7px",
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
  forgotPassword: {
    color: "#1976d2 !important",
    fontSize: "1rem !important",
    textTransform: "capitalize !important",
    cursor: "pointer",
  },
  registerMessage: {
    color: "#000000 !important",
    fontSize: "0.8rem !important",
    textTransform: "capitalize !important",
  },
  textRegisterButton: {
    color: "#1976d2 !important",
    fontSize: "1rem !important",
    textTransform: "capitalize !important",
    cursor: "pointer",
  },
  innerText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    flexDirection: "column",
  },
  spinner: {
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
}));

export default useStylesLogin;
