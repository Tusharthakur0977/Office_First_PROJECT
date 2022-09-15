import { makeStyles } from "@mui/styles";
const useStylesTranscationHistory = makeStyles((theme) => ({
  rootContainer: {
    width: "fit-content",
    display: "flex",
    minWidth: "100%",
    minHeight: "50vh",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
}));

export default useStylesTranscationHistory;
