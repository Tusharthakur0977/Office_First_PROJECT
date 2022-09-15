import { makeStyles } from "@mui/styles";

const useStylesProfile = makeStyles((theme) => ({
  mainCont: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    flex: 1,
    justifyContent: "space-between",
    background: theme.palette.mode === "dark" ? "#2a2c3c" : "",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  Cont1: {
    display: "flex",
    justifyContent: "space-between",
  },

  Cont1a: {
    display: "flex",
    flex: "50%",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  phead: {
    fontSize: "11px",
    color: theme.palette.mode === "dark" ? "#FFFDFD" : "",
  },

  pbody: {
    fontSize: "10px",
    color: theme.palette.mode === "dark" ? "#B1B1EE" : "",
  },

  Cont1b: {
    flex: "50%",
    paddingLeft: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  Cont1bAvatar: { height: "65px", width: "65px" },
  Cont1bAvatarcircle1: { position: "relative" },
  Cont1bAvatarcircle2: { position: "relative", top: "-55px", left: "5px" },
  Cont1bAvatarimage: { position: "relative", top: "-105px", left: "15px" },

  avatarhead: {
    fontSize: "12px",
  },

  adminText: {
    fontSize: "10px",
  },

  Cont2: {
    marginTop: "10px",
    borderTop: "1px solid #59586B ",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  },
  Cont2a: {
    margin: "10px 0",
    fontSize: "11px",
  },
  Cont2b: {
    display: "flex",
    margin: "10px 0",
    gap: "10px",
    justifyContent: "space-between",
  },
  Cont2c: {
    display: "flex",
    justifyContent: "center",
  },

  Cont2cbtn: {
    borderRadius: "10px",
    fontSize: "10px",
    padding: "5px 10px",
  },

  bottomCont: {},
}));

export default useStylesProfile;
