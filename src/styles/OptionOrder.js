import { makeStyles } from "@mui/styles";

const useStylesOptionOrder = makeStyles((theme) => ({
  rootContainer: {
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100%",
    alignItems: "center",
    overFlow: "scroll",
  },
  appBar: {
    width: "100%",
    [theme.breakpoints.down("md")]: {},
  },
  sectionTitle: {
    fontSize: "17px !important",
    fontWeight: "normal !important",
    padding: "3px",
    marginTop: "5px !important",
    marginBottom: "10px !important",
    marginLeft: "10px !important",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}));

export default useStylesOptionOrder;
