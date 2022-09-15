import { makeStyles } from "@mui/styles";

const useStylesHome = makeStyles((theme) => ({
  main: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
    gap: "15px",
    color: theme.palette.mode === "dark" ? "#7c7d83" : "",
    background: theme.palette.mode === "dark" ? "#393848" : "",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
      flexDirection: "column",
      alignItems: "center",
      gap: "25px",
    },
  },
  Comp1: {
    display: "flex",
    width: "20vw",
    gap: "15px",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      gap: "15px",
      width: "90%",
      height: "auto",
      alignItems: "center",
    },
  },

  section1: {
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    padding: "10px 0",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
    },
  },
  section1Title: {
    borderBottom: "1px solid #59586B",
    margin: "0 10px",
  },
  section1a: {
    minHeight: "55vh",
    maxHeight: "55vh",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
    },
  },
  section2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "auto",
    gap: "10px",
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    flex: 1,
    padding: "5px 10px 10px 10px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",

    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
      width: "100%",
    },
  },
  section2Title: {
    borderBottom: "1px solid #59586B",
    textAlign: "center",
    paddingBottom: "5px",
    fontSize: "15px",
  },

  Comp2: {
    display: "flex",
    width: "50vw",
    gap: "15px",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      gap: "15px",

      width: "90%",
      height: "auto",
      alignItems: "center",
    },
  },
  section3: {
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    padding: "10px 15px",
    flex: 1,
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      overflow: "scroll",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 5px 10px 10px",
    },
  },
  section3Title: {
    borderBottom: "1px solid #59586B",
    marginBottom: "15px",
  },
  section3a: {
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
      minHeight: "45vh",
    },
  },
  section4: {
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    padding: "10px 15px",
    flex: 1,
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",

    [theme.breakpoints.down("md")]: {
      flex: 0,
      overflow: "scroll",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {},
  },

  Comp3: {
    display: "flex",
    width: "20vw",
    gap: "15px",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      gap: "20px",
      width: "95%",
      height: "auto",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      gap: "15px",

      alignItems: "center",
    },
  },

  section5: {
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    flexDirection: "column",
    padding: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
    },
  },
  section5Title: {
    borderBottom: "1px solid #59586B",
    marginBottom: "10px",
  },
  section5a: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
      height: "auto",
    },
  },
  section6: {
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    flexDirection: "column",
    padding: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
    },
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 5,
  },
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  spinner: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  toggleBtnContainer: {
    display: "flex",
    margin: "10px 0 ",
    padding: "0 5px",
    justifyContent: "space-between",
    alignItems: "center",
  },

  callBtnActive: {
    color: theme.palette.mode === "dark" ? "white" : "",
    background: theme.palette.mode === "dark" ? "#393848" : "",
    border: "1px solid  #707070",
    width: "3rem",
    height: "1.4rem",
    textAlign: "center",
    borderRadius: "3px",
  },
  callBtn: {
    width: "3rem",
    height: "1.4rem",
    textAlign: "center",
  },
  putBtnActive: {
    color: theme.palette.mode === "dark" ? "white" : "",
    background: theme.palette.mode === "dark" ? "#393848" : "",
    border: "1px solid  #707070",
    width: "3rem",
    height: "1.4rem",
    textAlign: "center",
    borderRadius: "3px",
  },
  putBtn: {
    width: "3rem",
    height: "1.4rem",
    textAlign: "center",
  },
  quickTradebtn: {
    background: theme.palette.mode === "dark" ? "#6C75F8" : "#1976d2",
    color: "white",
    width: "100%",
  },
}));

export default useStylesHome;
