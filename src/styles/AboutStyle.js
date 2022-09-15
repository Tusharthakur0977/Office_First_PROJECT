import { makeStyles } from "@mui/styles";
const useStylesAbout = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    background: "#252634",
  },

  about1: {
    textAlign: "center",
    backgroundSize: "cover",
    justifyContent: "center",
    display: "flex",
  },
  about: {
    backgroundSize: "cover",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      width: "100%",
      flexDirection: "column",
    },
  },
  container: {
    marginTop: "80px",
    justifyContent: "space-between",
    margin: "auto",
    height: "auto",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },

  button: {
    margin: " 1rem 0",
    background: "#FFFFFF",
    color: "#333",
    cursor: "pointer",
    borderRadius: "10px",
    width: "156px",
    height: "40px",
    fontSize: "23px",
  },
  img: {
    padding: "0rem",
    width: "100%",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  col1: {
    display: "flex",
    flexDirection: "column",
    padding: "0 9rem",
    alignItems: "center",
  },
  hover: {
    "&:hover": {
      backgroundColor: "#1c1d24",
    },
  },
}));
export default useStylesAbout;
