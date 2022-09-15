import { Box, Button, Typography, Avatar, Tab, Tabs } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import useBrokerConnSettings from "../../../../../styles/BrokerConnStyle";
const BrokerConn = () => {
  const classes = useBrokerConnSettings();

  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.main}>
      <Box className={classes.cont1}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          orientation="vertical"
          aria-label="Vertical tabs example"
          indicatorColor="secondary"
          sx={{
            flex: 1,
          }}
        >
          <Tab
            sx={{
              margin: "14px",
              padding: "0",
              minHeight: "25px",
              minWidth: "25px",
            }}
            value="one"
            icon={
              <Avatar
                variant="square"
                sx={{ width: 25, height: 25 }}
                style={{ cursor: "pointer" }}
                alt="test avatar"
                src={"../assets/images/webull770x770 1.png"}
              />
            }
          />
          <Tab
            sx={{
              margin: "14px",
              padding: "0",
              minHeight: "25px",
              minWidth: "25px",
            }}
            value="two"
            icon={
              <Avatar
                variant="square"
                sx={{ width: 25, height: 25 }}
                style={{ cursor: "pointer" }}
                alt="test avatar"
                src={"../assets/images/brokerConn2.png"}
              />
            }
          />
        </Tabs>
      </Box>
      {value === "one" ? (
        <Box className={classes.cont2}>
          <Box>
            <Typography className={classes.thead}>Webull Email</Typography>
            <Typography variant="body2">sarah.webull@example.com</Typography>
          </Box>
          <Box>
            <Typography className={classes.thead}> Webull Password</Typography>
            <Typography variant="body2">****** </Typography>
          </Box>
          <Box>
            <Typography className={classes.thead}>
              Webull 6-digits trading passcord
            </Typography>
            <Typography variant="body2">****** </Typography>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography>No Data To Show</Typography>
        </Box>
      )}

      <Typography className={classes.connect}>Connect</Typography>
    </Box>
  );
};
export default BrokerConn;
