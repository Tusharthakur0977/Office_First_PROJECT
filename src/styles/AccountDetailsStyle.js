import { makeStyles } from "@mui/styles";
const useStylesAccountdetails = makeStyles((theme) => ({
  mainCont: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flxe: 1,
    justifyContent: "space-evenly",
  },
  subCont: { display: "flex", gap: "3px", flexDirection: "column" },

  subContheading: {
    fontSize: "11px",
    fontWeight: "lighter",
    color: theme.palette.mode === "dark" ? "#8C8C94" : "",
  },
  TextCont: {
    display: "flex",
    padding: "0 0px 0 10px",
    marginTop: "5px",
    justifyContent: "space-between",
  },
  Textheading: {
    fontSize: "11px",
    marginBottom: "5px",
  },
  Textbody: {
    fontSize: "11px",
    textAlign: "right",
    marginBottom: "5px",
  },
}));
export default useStylesAccountdetails;
