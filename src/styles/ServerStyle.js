import { makeStyles } from "@mui/styles";
const useStylesServer = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    minHeight: "100%",
    color: theme.palette.mode === "dark" ? "#7c7d83" : " ",
    background: theme.palette.mode === "dark" ? "#393848" : " ",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",

      gap: "0px",
    },
  },
  headingCont: {
    background: theme.palette.mode === "dark" ? "#2A2C3C" : " ",
    display: "flex",
    padding: "20px 0",
    justifyContent: "center",
    alignItems: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  SubContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  sidebarContainer: {
    height: "70vh",
    color: theme.palette.mode === "dark" ? "#7c7d83" : " ",
    background: theme.palette.mode === "dark" ? "#2A2C3C" : " ",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 1px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px",
  },

  container: {
    display: "flex",
    minHeight: "100%",
    background: theme.palette.mode === "dark" ? "#393848" : "",
    padding: "20px 0 0 20px",
    "&::before": {
      opacity: "0.3",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "10px 0 0 5px",
    },
  },
  subContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    minHeight: "100%",
    minWidth: "100%",
    width: "80vw",
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    opacity: 1,
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  ServerTileCont: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  //Server Tiles

  serverTile: {
    background: theme.palette.mode === "dark" ? "rgba(141, 148, 249, 0.3)" : "",
    flex: "0 23%",
    height: "130px",
    padding: "10px 0 0 0",
    margin: "10px",
    boxShadow: "0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    [theme.breakpoints.down("md")]: {
      flex: "1 0 50%",
    },
    "&:hover": {
      cursor: "pointer",
    },
    marginBottom: "20px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "100px",
      marginBottom: "0px",
      padding: "5px 0 0 0",
    },
  },

  serverName: {
    fontSize: "14px !important",
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "",
    fontWeight: "bold !important",
    width: "100%",
    textAlign: "left",
    marginLeft: "16px !important",
  },

  serverTileInnerSection: {
    flexDirection: "row",
    gap: "15px",
    width: "100%",
    height: "82%",
    display: "flex",
    alignItems: "center",
  },

  tileImg: {
    width: "22%",
    height: "70%",
    marginLeft: "10px",
    objectFit: "contain",
  },

  detail: {
    width: "85%",
    flexDirection: "column",
    display: "flex",
    height: "100%",
    paddingBottom: "5px",
    justifyContent: "right",
  },

  description: {
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "",
    fontSize: "13px !important",
    textAlign: "left",
    marginTop: "5px !important",
    overflowY: "auto",
  },

  connectButton: {
    background: theme.palette.mode === "dark" ? "#8D94F9" : "",
    width: "100%",
    transition: "background-color .6s ease-out",
  },

  //Analytics section
  containerSelectedServer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    padding: "20px",
    background: theme.palette.mode === "dark" ? "#393848" : "",
    gap: "20px",
  },

  analyticsHeading: {
    background: theme.palette.mode === "dark" ? "#2a2c3c" : "",
    width: "100%",
    padding: "10px",
    textAlign: "center",
  },
  headingSelectedServer: {
    fontSize: "22px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  subHeadingSelectedServer: {
    fontSize: "18px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  serverContainer: {
    display: "flex",
    padding: "30px 20px",
    width: "100%",
    maxHeight: "70%",
    gap: "20px",
    flexDirection: "row",
    overflowY: "auto",
    background: theme.palette.mode === "dark" ? "#2a2c3c" : "",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "65%",
      gap: "10px",
      flexWrap: "wrap",
      alignItems: "flex-start",
    },
  },
  selectedserverTile: {
    background: theme.palette.mode === "dark" ? "rgba(141, 148, 249, 0.3)" : "",
    flex: "0 25%",
    height: "200px",
    padding: "10px 0 0 0",
    boxShadow: "0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    marginBottom: "20px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flex: "1 0 50%",
    },
    "&:hover": {
      cursor: "pointer",
    },

    [theme.breakpoints.down("sm")]: {
      height: "100px",
      marginBottom: "0px",
      padding: "5px 0 0 0",
    },
  },
  analyticsTileInnerSection: {
    border: "1px solid red",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  imageSection: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
  },
  selectTag: {
    background: "#eee",
    borderRadius: "3px 0 0 3px",
    color: "#999",
    display: "inline-block",
    height: "26px",
    lineHeight: "26px",
    padding: "0 20px 0 23px",
    position: "relative",
    margin: "0 10px 10px 0",
    textDecoration: "none",
    transition: "color 0.2s",
  },
}));
export default useStylesServer;
