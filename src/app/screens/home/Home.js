import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import useStylesHome from "../../../styles/HomeStyle";
import Detail from "../../components/screens/home/detail/Detail";
import EnternewTrade from "../../components/screens/home/enternewtrade/EnternewTrade";
import PositionOrder from "../../components/screens/home/positionorder/PositionOrder";
import TransactionHistory from "../../components/screens/home/transaction/TransactionHistory";
import AccountDetails from "../../components/screens/home/Account-Details/AccountDetails";
const Home = () => {
  const classes = useStylesHome();

  return (
    <Box className={classes.main}>
      <Box className={classes.Comp1}>
        <Box className={classes.section1}>
          <Typography className={classes.section1Title}>
            Transaction Logs
          </Typography>
          <Box className={classes.section1a}>
            <TransactionHistory />
          </Box>
        </Box>
        <Box className={classes.section2}>
          <Typography className={classes.section2Title}>
            Account Details
          </Typography>
          <AccountDetails />
        </Box>
      </Box>
      <Box className={classes.Comp2}>
        <Box className={classes.section3}>
          <Typography className={classes.section3Title}>
            Position Order & Account Detail
          </Typography>
          <Box className={classes.section3a}>
            <PositionOrder />
          </Box>
        </Box>
        <Box className={classes.section4}>
          <Detail />
        </Box>
      </Box>
      <Box className={classes.Comp3}>
        <Box className={classes.section5}>
          <Typography className={classes.section5Title}>Quick Trade</Typography>
          <Box className={classes.section5a}>
            <EnternewTrade />
          </Box>
        </Box>
        <Box className={classes.section6}>
          <Typography className={classes.section1Title}>Chat</Typography>
          {/* <Chat /> */}
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
