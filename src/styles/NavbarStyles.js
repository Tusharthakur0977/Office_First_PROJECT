import { makeStyles } from "@mui/styles";

const useNavbarStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  icon: {},
  button: {
    color: "red",
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

export default useNavbarStyles;
