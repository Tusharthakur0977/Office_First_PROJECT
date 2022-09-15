import { makeStyles } from "@mui/styles";
const useStylesSecurityQuestions = makeStyles((theme) => ({
  container: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    padding: "3% !important",
    display: "flex",
    flexDirection: "column ",
  },
  logo: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  title: {
    fontSize: "22px !important",
    fontWeight: "normal !important",
    textAlign: "center",
    marginTop: "30px !important",
  },
  subTitle: {
    fontSize: "14px !important",
    fontWeight: "normal !important",
    textAlign: "center",
    color: "#656464",
    marginTop: "10px !important",
  },
  questionTitle: {
    fontSize: "16px !important",
    fontWeight: "normal !important",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px !important",
  },
  answer: {
    width: "100%",
    marginTop: "20px !important",
  },
  button: {
    marginTop: "20px !important",
    width: "100%",
    backgroundColor: "#0D80D8 !important",
    color: "white !important",
  },
  goBack: {
    marginTop: "20px !important",
  },
  changeQuestion: {
    marginTop: "10px !important",
    display: "flex",
    alignSelf: "flex-end",
  },
}));

export default useStylesSecurityQuestions;
