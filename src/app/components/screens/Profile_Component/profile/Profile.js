import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import useStylesProfile from "../../../../../styles/ProfileStyle";
// import EndPoints from "../../../../services/EndPoints";
// import { addAuthToken } from "../../../../services/Axios";
import { loginMeApi } from "../../../../services/AuthApis";

function Profile() {
  const classes = useStylesProfile();
  const [userDetail, setUserDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const loggedInUserDetails = async (token) => {
    try {
      let { data } = await loginMeApi(token);
      setUserDetail(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loggedInUserDetails();
  }, []);

  return (
    <>
      <Box className={classes.mainCont}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Box className={classes.Cont1}>
              <Box className={classes.Cont1a}>
                <Box sx={{ width: { xs: "100%", md: "40%", lg: "40%" } }}>
                  <Typography className={classes.phead}>Alias</Typography>
                  <Typography className={classes.pbody}>
                    {userDetail?.alias}
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "40%", lg: "40%" } }}>
                  <Typography className={classes.phead}>
                    Discord UserID
                  </Typography>
                  <Typography className={classes.pbody}>buks#3809</Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "40%", lg: "40%" } }}>
                  <Typography className={classes.phead}>First Name</Typography>
                  <Typography className={classes.pbody}>
                    {userDetail?.first_name}
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "40%", lg: "40%" } }}>
                  <Typography className={classes.phead}>Last Name</Typography>
                  <Typography className={classes.pbody}>
                    {userDetail?.last_name}
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "40%", lg: "40%" } }}>
                  <Typography className={classes.phead}>Email ID</Typography>
                  <Typography className={classes.pbody}>
                    {userDetail?.email}
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "40%", lg: "40%" } }}>
                  <Typography className={classes.phead}>Phone No</Typography>
                  <Typography className={classes.pbody}>
                    {userDetail?.phone}
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.Cont1b}>
                {/* <Box className={classes.Cont1bAvatar}> */}
                <Avatar
                  sx={{ margin: "10px" }}
                  alt={userDetail?.first_name}
                  src={userDetail.image_path}
                />
                {/* <Avatar
                    className={classes.Cont1bAvatarcircle1}
                    src={"../assets/images/Ellipse1.png"}
                    sx={{ height: "60px", width: "60px" }}
                  />
                  <Avatar
                    className={classes.Cont1bAvatarcircle2}
                    src={"../assets/images/Ellipse.png"}
                    sx={{ height: "50px", width: "50px" }}
                  />
                  <Avatar
                    className={classes.Cont1bAvatarimage}
                    src={"../assets/images/avatarmain.png"}
                    sx={{ height: "40px", width: "40px" }}
                  /> */}
                {/* </Box> */}
                <Typography className={classes.avatarhead}>
                  {userDetail?.first_name + " " + userDetail?.last_name}
                </Typography>
                <Typography className={classes.adminText}>Admin</Typography>
                <img
                  src="../assets/images/verifiedprofile.png"
                  height={20}
                  alt="verified"
                />
              </Box>
            </Box>
            <Box className={classes.Cont2}>
              <Typography mb={2} className={classes.Cont2a}>
                Security Settings
              </Typography>
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
                    fontSize: 12,
                    height: 30,
                    padding: "0 10px",
                  },
                }}
              />
              <Box className={classes.Cont2b}>
                <TextField
                  sx={{ width: "50%" }}
                  size="small"
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
                  id="outlined-basic"
                  label="New Password"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "50%" }}
                  size="small"
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
                  id="outlined-basic"
                  label="Repeat New Password"
                  variant="outlined"
                />
              </Box>
              <Box className={classes.Cont2c}>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.Cont2cbtn}
                >
                  Update Password
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default Profile;
