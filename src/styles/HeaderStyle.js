import { makeStyles } from "@mui/styles";

const useHeaderStyle = makeStyles((theme) => ({
  headerAppbar: {
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
  },
  headercont: {
    height: "50px",
    padding: "0",
    maxWidth: "100%",
  },
  HeaderMainHeading: {
    color: theme.palette.mode === "dark" ? "#AEAEAE" : "",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "33px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "0px",
      textAlign: "left",
    },
  },
  notificationBell: {
    color: theme.palette.mode === "dark" ? "#6C75F8" : "",
  },
}));

export default useHeaderStyle;
