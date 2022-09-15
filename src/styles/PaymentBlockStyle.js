import { makeStyles } from "@mui/styles";

const useStylesPayment = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flex: 1,
    height:"65%",
    flexDirection: "column",
    padding: "20px",
    color: theme.palette.mode === "dark" ? "#7c7d83" : "",
    background: theme.palette.mode === "dark" ? "#2a2c3c" : "",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
  },
  Comp1: {
    display: "flex",
    marginBottom: "10px",
    gap: "20px",
    borderBottom: "1px solid #BEBEBE",
  },
  Comp1a: {
    color: theme.palette.mode === "dark" ? "white" : "black",
    fontSize: "15px",
  },

  Comp1b: {
    color: theme.palette.mode === "dark" ? "#B1B1EE" : "black",
    fontSize: "15px",
  },
  Comp2: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #BEBEBE",
  },
  Comp2a: {
    color: theme.palette.mode === "dark" ? "white" : "black",
    flex: "10%",
    fontSize: "15px",
  },
  Comp2b: {
    color: theme.palette.mode === "dark" ? "white" : "black",
    fontSize: "15px",
    flex: "80%",
    textAlign: "center",
  },
  Comp3: {
    flex: 1,
    display: "flex",
    gap: "20px",
  },

  Comp3a: {
    flex: "1",
    display: "flex",
    borderRight: "1px solid #BEBEBE",
    justifyContent: "center",
    padding: "10px",
    alignItems: "center",
  },
  Comp3b: {
    flex: "80%",
    display: "flex",
    padding: "0 40px",
    minHeight:"100%",
    justifyContent:"space-around",
    flexDirection: "column",
  },
  Comp3b1heading: {},
  Comp3b1btn: {
    width: "100%",
    height: "30px",
  },

  Comp3b2: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0 0 0",
    gap: "10px",
  },

  Comp3b4: {
    display: "flex",
    background: "white",
    padding: "3px 10px",
    gap: "20px",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

export default useStylesPayment;
