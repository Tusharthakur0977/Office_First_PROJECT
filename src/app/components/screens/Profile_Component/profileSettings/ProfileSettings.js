import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import useStylesProfileSetting from "../../../../../styles/ProfileSettingStyle";
const ProfileSettings = () => {
  const classes = useStylesProfileSetting();
  return (
    <Box className={classes.main}>
      <Box className={classes.Cont1}>
        <Typography className={classes.Cont1Head}>
          Trading Default Settings
        </Typography>
        <Box className={classes.textbox}>
          <TextField
            size="small"
            id="outlined-basic"
            label="Current Password"
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: 12,
                transformOrigin: "center",
                lineHeight: 1,
              },
            }}
            inputProps={{
              style: {
                height: "30px",
                padding: "0 14px",
              },
            }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Current Password"
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: 12,
                transformOrigin: "center",
                lineHeight: 1,
              },
            }}
            inputProps={{
              style: {
                height: "30px",
                padding: "0 14px",
              },
            }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Current Password"
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: 12,
                transformOrigin: "center",
                lineHeight: 1,
              },
            }}
            inputProps={{
              style: {
                height: "30px",
                padding: "0 14px",
              },
            }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Current Password"
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: 12,
                transformOrigin: "center",
                lineHeight: 1,
              },
            }}
            inputProps={{
              style: {
                height: "30px",
                padding: "0 14px",
              },
            }}
          />
        </Box>
      </Box>
      <Box className={classes.Cont2}>
        <Typography className={classes.Cont2Head}>
          Discord Subscriptiions
        </Typography>
        <Box className={classes.btncont}>
          <Button variant="contained" className={classes.connectButton}>
            ServerA
          </Button>
          <Button variant="contained" className={classes.connectButton}>
            Wall Alert
          </Button>
          <Button variant="contained" className={classes.connectButton}>
            MSK-Signals
          </Button>
          <Button variant="contained" className={classes.connectButton}>
            ServerC
          </Button>
        </Box>
        <Box>
          <Typography className={classes.Cont2c}>
            UPDATE SUBSCRITION IN CANDECLICK MARKET-PLACE
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ProfileSettings;
