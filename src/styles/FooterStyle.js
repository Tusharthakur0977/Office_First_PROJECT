import { makeStyles } from "@mui/styles";
const useStylesFooter = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  continer: {
    backgroundColor: "#1c1d24",
  },
  footer: {
    backgroundColor: "#1c1d24",
    display: "flex",
    justifyContent: "center",
  },
  hover: {
    background: "#f1f1f1",
    "&:hover": {
      background: "red",
    },
  },
  footer2: {
    display: "flex",
    justifyContent: "left",
  },
}));
export default useStylesFooter;
