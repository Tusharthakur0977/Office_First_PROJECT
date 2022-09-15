import { makeStyles } from "@mui/styles";

const useStylesProfilePage = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    minHeight: "100%",
    color: theme.palette.mode === "dark" ? "#7c7d83" : "",
    background: theme.palette.mode === "dark" ? "#393848" : "",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
    },
  },
  topCont: {
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: "7px 25px",
    marginBottom: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 10px",
      width: "100%",
      marginBottom: "0px",
    },
  },
  topSubCont: {
    alignItems: "center",
    display: "flex",
    gap: "10px",
    color: "white",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },

  bottomCont: {
    display: "flex",
    gap: "20px",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  bottomLeftCont: {
    display: "flex",
    width: "40%",
    flexDirection: "column",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bottomRghtCont: {
    justifyContent: "space-between",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "20px",
  },
}));

export default useStylesProfilePage;
