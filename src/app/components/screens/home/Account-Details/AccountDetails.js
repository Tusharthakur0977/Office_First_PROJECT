import { Box, Typography } from "@mui/material";
import React from "react";
import useStylesAccountdetails from "../../../../../styles/AccountDetailsStyle";

function AccountDetails() {
  const classes = useStylesAccountdetails();
  return (
    <Box className={classes.mainCont}>
      <Box className={classes.subCont}>
        <Typography className={classes.subContheading}>ACCOUNT INFO</Typography>
        <Box className={classes.TextCont}>
          <Box >
            <Typography className={classes.Textheading}>
              Account Type
            </Typography>
            <Typography className={classes.Textheading}>Account id</Typography>
          </Box>
          <Box>
            <Typography className={classes.Textbody} sx={{ color: "#27AE60" }}>
              CASH
            </Typography>
            <Typography className={classes.Textbody} sx={{ color: "#27AE60" }}>
              232542
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.subCont}>
        <Typography className={classes.subContheading}>
          FUNDS FOR TRADING
        </Typography>
        <Box className={classes.TextCont}>
          <Box>
            <Typography className={classes.Textheading}>
              Account value
            </Typography>
            <Typography className={classes.Textheading}>
              Cash Balance
            </Typography>
            <Typography className={classes.Textheading}>Profit/Loss</Typography>
            <Typography className={classes.Textheading}>
              Market Value
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.Textbody} sx={{ color: "#6C75F8" }}>
              $182.99
            </Typography>
            <Typography className={classes.Textbody} sx={{ color: "#EB5757" }}>
              $19.43
            </Typography>
            <Typography className={classes.Textbody} sx={{ color: "#6C75F8" }}>
              $-102.00
            </Typography>
            <Typography className={classes.Textbody} sx={{ color: "#6C75F8" }}>
              $245.83
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.subCont}>
        <Typography className={classes.subContheading}>ACCOUNT RISK</Typography>
        <Box className={classes.TextCont}>
          <Box>
            <Typography className={classes.Textheading}>Warning</Typography>
            <Typography className={classes.Textheading}>
              Margin Warning
            </Typography>
            <Typography className={classes.Textheading}>
              Remaining TradeTimes
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.Textbody} sx={{ color: "#6C75F8" }}>
              FALSE
            </Typography>
            <Typography className={classes.Textbody} sx={{ color: "#F2C94C" }}>
              FALSE
            </Typography>
            <Typography className={classes.Textbody} sx={{ color: "#27AE60" }}>
              Unlimited
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AccountDetails;
