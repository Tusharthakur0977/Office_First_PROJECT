import { makeStyles } from "@mui/styles";
const useBrokerConnSettings = makeStyles((theme) => ({
  main: {
    display: "flex",
    padding: "20px",
    height: "35%",
    justifyContent: "space-between",
    background: theme.palette.mode === "dark" ? "#2A2C3C" : " ",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
  },
  cont1: {
    borderRight: "1px solid white",
    paddingRight: "10px",
  },
  cont2: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  },
  thead: {
    color: "#FFFDFD",
    fontSize: "12px",
  },

  connect: {
    alignSelf: "flex-end",
    color: "white",
  },
}));
export default useBrokerConnSettings;
