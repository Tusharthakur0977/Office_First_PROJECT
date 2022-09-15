import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";
import useStylesServer from "../../../styles/ServerStyle";

export default function ServerSidebar() {
  const classes = useStylesServer();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTab = withStyles((theme) => ({
    root: {
      color: theme.palette.mode === "dark" ? "white" : "black",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 5px",
        minHeight: "10px",
        minWidth: "1px",
        fontSize: "9px",
      },
    },
    selected: {
      backgroundColor: theme.palette.mode === "dark" ? "#6C75F8" : "#1976d2",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 5px",
        minHeight: "10px",
        minWidth: "1px",
        fontSize: "9px",
      },
    },
  }))(Tab);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        textColor="inherit"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.serverSidebarTabs}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <CustomTab label="All" />
        <CustomTab label="Options " />
        <CustomTab label="Stocks" />
        <CustomTab label="Crypto" />
        <CustomTab label="FOREX" />
        <CustomTab label=" Binary options" />
      </Tabs>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel> */}
    </Box>
  );
}
