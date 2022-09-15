import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import useStylesPositionOrder from "../../../../../styles/PositionOrderStyle";
import { readData, USER } from "../../../../utils/storage";
import CurrentPosition from "./CurrentPosition";
import OpenOrder from "./OpenOrder";

function Detail() {
  const classes = useStylesPositionOrder();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    readData(USER, (data) => {
      setLoggedInUser(JSON.parse(data));
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  if (!loggedInUser) {
    return <Box></Box>;
  }

  function TabPanel(value, index, componentToShow) {

    return (
      <Box
        className={classes.tabSectionContainer}
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
      >
        {value === index && componentToShow}
      </Box>
    );
  }

  return (
    <Box className={classes.detailContainer}>
    <AppBar
      className={classes.appBar}
      sx={{ height: "40px", marginBottom: "10px" }}
      position="static"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        sx={{
          minHeight: "40px",
          padding: "0",
        }}
      >
        <Tab
          label="Positions"
          sx={{
            fontSize: "11px",
            minHeight: "40px",
            padding: "0 ",
          }}
        />
        <Tab
          sx={{
            fontSize: "11px",
            minHeight: "40px",
            padding: "0",
          }}
          label="Orders"
        />
      </Tabs>
    </AppBar>
    {TabPanel(value, 0, <CurrentPosition loggedInUser={loggedInUser} />)}
    {TabPanel(value, 1, <OpenOrder loggedInUser={loggedInUser} />)}
  </Box>
  );
}

export default Detail;
