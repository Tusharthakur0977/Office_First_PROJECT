import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStylesPositionOrder = makeStyles((theme) => ({
  lefttabPane: {
    marginRight: "10px",
    minHeight: "30px",
    fontSize: "9px",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
  tabLeft: {
    background: theme.palette.mode === "dark" ? "#353648" : "#fff",
    height: "auto",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minHeight: "30px",
      marginRight: "0px",
    },
  },
  positionTabContainer: {
    border: "2px",
    borderWidth: "10px",
    display: "flex",
  },
  postionordertablle: {
    minWidth: "100%",
    height: "100%",
  },

  detailContainer: {
    minWidth: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "scroll",
  },
  tabSectionContainer: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
  },
  tableContainer: {
    width: "100%",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
    },
  },
  appBar: {
    width: "100%",
    height: "40px",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {},
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}));

export const tableInputBox = styled("input")(
  ({ theme }) => `
  height: 15px;
    width: 40px;
    font-size: 10px;
    
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    text-align: center;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: transparent;
    border: 1px solid ${theme.palette.mode === "dark" ? "#59586B" : grey[500]};
    border-radius: 2px;
    transition: all 150ms ease;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:focus {
      outline:none;
      outline-offset: 2px;
    }
  `
);

export default useStylesPositionOrder;
