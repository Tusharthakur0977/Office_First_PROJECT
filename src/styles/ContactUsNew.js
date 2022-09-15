import { makeStyles } from "@mui/styles";
const useStyleContactUsNew = makeStyles((theme) => ({
  main: {
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    minHeight: "100vh",
    color: theme.palette.mode === "dark" ? "#7c7d83" : " ",
    background: theme.palette.mode === "dark" ? "#393848" : " ",
  },
  Cont1: {
    padding: "20px ",
    display: "flex",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    background: theme.palette.mode === "dark" ? "#2a2c3c" : " ",
  },
  Cont2: {
    display: "flex",
    justifyContent: "center",
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
      gap: "20px",
    },
    background: theme.palette.mode === "dark" ? "#2a2c3c" : " ",
  },
  Cont2a: {
    display: "flex",
    marginRight: "1.2rem",
    marginBottom: "2rem",
    justifyContent: "flex-end",
    flexDirection: "column",
    borderRadius: "10px",
    alignItems: "center",
    padding: "40px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    background: theme.palette.mode === "dark" ? "#353648" : " ",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0rem",
      marginBottom: "0rem",
      borderRadius: "0px",
    },
  },
  Cont2b: {
    display: "flex",
    borderRadius: "10px",
    flex: 0.7,
    marginRight: "1rem",
    marginBottom: "2rem",
    flexDirection: "row",
    alignItems: "center",
    padding: "30px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    background: theme.palette.mode === "dark" ? "#353648" : " ",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0rem",
      padding: "0px",
      flex: 1,
      marginBottom: "0rem",
      borderRadius: "0px",
    },
  },
  Cont2b1: {
    padding: "20px",
    display: "flex",
    flex: "30%",
    flexDirection: "column",
    gap: "15px",
  },
  Cont2b2: {
    flex: "40%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  Cont2cbtn: {
    fontSize: "14px",
  },
  SocialIcons: {},
}));
export default useStyleContactUsNew;
