import { makeStyles } from "@mui/styles";

const useStylesProfileSetting = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    height:"50%",
    background: theme.palette.mode === "dark" ? "#2a2c3c" : "",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
  },
  Cont1: {
    display: "flex",
    width: "40%",
    flexDirection: "column",
    gap: "10px",
  },

  Cont1Head: {
    fontSize: "13px",
    textAlign: "center",
    borderBottom: "1px solid #59586B",
    marginBottom: "20px",
  },

  textbox: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  Cont2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    gap: "10px",
  },

  Cont2Head: {
    borderBottom: "1px solid #59586B",
    fontSize: "13px",
    textAlign: "center",
    marginBottom: "20px",
  },

  btncont: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  connectButton: {
    fontSize: "11px",
    padding: "3px 5px",
    width: "90px",
  },

  Cont2c: {
    fontSize: "14px",
    padding: "10px",
  },
}));

export default useStylesProfileSetting;
