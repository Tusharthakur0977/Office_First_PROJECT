import { makeStyles } from "@mui/styles";
const useStylesHero = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  sectionStyle: {
    height: "100vh",
    backgroundImage: "url('https://images4.alphacoders.com/839/83944.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      width: "100%",
      flexDirection: "column",
    },
  },
  hero: {
    margin: "auto",
    padding: "0rem 1rem 0 1rem",
    border: "2px solid red",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  container: {
    marginTop: "80px",
    justifyContent: "space-between",
    margin: "auto",

    height: "82vh",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  button: {
    margin: " 1rem 0",
    background: "#FFFFFF",
    color: "#333",
    cursor: "pointer",
    borderRadius: "10px",
    width: "156px",
    height: "40px",
    fontSize: "23px",
  },
  img: {
    width: "98%",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default useStylesHero;
