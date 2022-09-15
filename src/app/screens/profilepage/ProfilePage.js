import { Box, ImageListItem, Typography, useTheme } from "@mui/material";
import React from "react";
import useStylesProfilePage from "../../../styles/ProfilePageStyles";
import BrokerConn from "../../components/screens/Profile_Component/broker_conn/BrokerConn";
import PaymentBlock from "../../components/screens/Profile_Component/payment/PaymentBlock";
import Profile from "../../components/screens/Profile_Component/profile/Profile";
import ProfileSettings from "../../components/screens/Profile_Component/profileSettings/ProfileSettings";

const ProfilePage = () => {
  const classes = useStylesProfilePage();
  const theme = useTheme();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.topCont}>
        <Box className={classes.topSubCont}>
          <Typography
            sx={{
              typography: { xs: "caption", lg: "body1" },
            }}
          >
            Balance
          </Typography>
          <Typography
            sx={{
              color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
              typography: { xs: "caption", lg: "body1" },
            }}
          >
            $120.34
          </Typography>
        </Box>
        <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
            typography: { xs: "body1", lg: "h5" },
          }}
        >
          Account Page
        </Typography>
        <Box
          sx={{
            display: "flex",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
        >
          <Box sx={{ mr: 1, display: "flex" }}>
            <img
              style={{ height: "25px" }}
              src={"../assets/images/headerlogo.png"}
            />
          </Box>
          <Typography mt={"2px"}>Connected</Typography>
        </Box>
      </Box>
      <Box className={classes.bottomCont}>
        <Box className={classes.bottomLeftCont}>
          <Profile />
          <ProfileSettings />
        </Box>
        <Box className={classes.bottomRghtCont}>
          <BrokerConn />
          <PaymentBlock />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
