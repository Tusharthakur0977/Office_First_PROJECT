import { makeStyles } from "@mui/styles";

const useStylesPricing = makeStyles((theme) => ({
  container: {
    margin: 20,
  },
  card: {
    "&:hover": {
      boxShadow: "0 18px 30px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      border: "0.5px solid gray",
      borderRadius: 10,
    },
    boxShadow: "0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  },
}));

export default useStylesPricing;
