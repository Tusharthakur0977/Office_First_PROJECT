import {
  useTheme,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Avatar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ImageListItem from "@mui/material/ImageListItem";
import { forwardRef } from "react";
import useHeaderStyle from "../../../styles/HeaderStyle";
// import { Auth } from "aws-amplify";
import Darkmodebtn from "../appcomp/Darkmodebtn/DarkModeBtn";

export default forwardRef(function Header({ userDetail }, ref) {
  const classes = useHeaderStyle();
  const theme = useTheme();

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar
          variant="dense"
          sx={{
            padding: "5px 0",
            gap: "0",
            background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ImageListItem sx={{ mr: 1, display: { xs: "none", md: "flex" } }}>
              <img
                style={{ height: "25px" }}
                src={"../assets/images/headerlogo.png"}
                alt="weBull"
              />
            </ImageListItem>
            <Typography mt={"2px"}>Connected</Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              flex: 1,
              display: "flex",
            }}
          >
            <Typography className={classes.HeaderMainHeading}>
              CandeClick Trading Platform
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 4,
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
              [theme.breakpoints.down("sm")]: {
                gap: "10px",
                mx: 1,
                textAlign: "left",
              },
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Darkmodebtn sx={{ display: "none" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  padding: "5px 10px",
                  borderRight: "1px solid #59586B",
                  [theme.breakpoints.down("sm")]: {
                    padding: "5px 5px",
                  },
                }}
              >
                <NotificationsIcon
                  className={classes.notificationBell}
                  sx={{ fontSize: { xs: "16px", md: "medium", lg: "23px" } }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  padding: "5px 10px ",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.mode === "dark" ? "#AEAEAE" : "",
                      typography: { xs: "caption", lg: "caption" },
                    }}
                  >
                    {userDetail.first_name + " " + userDetail.last_name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      textAlign: "left",
                      color: theme.palette.mode === "dark" ? "#59586B" : "",
                    }}
                  >
                    Admin
                  </Typography>
                </Box>
                <Avatar
                  src={userDetail.image_path}
                  alt={userDetail.first_name}
                  sx={{
                    height: "40px",
                    [theme.breakpoints.down("sm")]: {
                      height: "10px",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    // <Box>
    //   <AppBar position="sticky ">
    //     <Toolbar
    //       sx={{
    //         padding: "0",
    //         gap: "0",
    //         background: theme.palette.mode === "dark" ? "#2A2C3C" : "",
    //       }}
    //     >
    //       <Box sx={{ display: { xs: "none", md: "flex" } }}>
    //         <ImageListItem sx={{ mr: 1, display: { xs: "none", md: "flex" } }}>
    //           <img
    //             style={{ height: "25px" }}
    //             src={"../assets/images/headerlogo.png"}
    //           />
    //         </ImageListItem>
    //         <Typography mt={"2px"}>Connected</Typography>
    //       </Box>
    //       <Box
    //         sx={{
    //           textAlign: "center",
    //           justifyContent: "center",
    //           flex: 1,
    //           display: "flex",
    //         }}
    //       >
    //         <Typography className={classes.HeaderMainHeading}>
    //           CandeClick Trading Platform
    //         </Typography>
    //       </Box>
    //       <Box
    //         sx={{
    //           mx: 4,
    //           display: "flex",
    //           gap: "30px",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           [theme.breakpoints.down("sm")]: {
    //             gap: "10px",
    //             mx: 1,
    //             textAlign: "left",
    //           },
    //         }}
    //       >
    //         <Box sx={{ display: { xs: "none", md: "flex" } }}>
    //           <Darkmodebtn sx={{ display: "none" }} />
    //         </Box>
    //         <Box sx={{ display: "flex", alignItems: "center" }}>
    //           <Box
    //             sx={{
    //               padding: "5px 10px",
    //               borderRight: "1px solid #59586B",
    //               [theme.breakpoints.down("sm")]: {
    //                 padding: "5px 5px",
    //               },
    //             }}
    //           >
    //             <NotificationsIcon
    //               className={classes.notificationBell}
    //               sx={{ fontSize: { xs: "16px", md: "medium", lg: "23px" } }}
    //             />
    //           </Box>
    //           <Box sx={{ display: "flex", padding: "5px 10px", gap: "10px" }}>
    //             <Box>
    //               <Typography
    //                 sx={{
    //                   typography: { xs: "caption", lg: "body1" },
    //                 }}
    //               >
    //                 User Name
    //               </Typography>
    //               <Typography
    //                 variant="caption"
    //                 sx={{
    //                   textAlign: "left",
    //                   color: theme.palette.mode === "dark" ? "#59586B" : "",
    //                 }}
    //               >
    //                 Admin
    //               </Typography>
    //             </Box>
    //             <img
    //               src={"../assets/images/profileLogo.png"}
    //               style={{
    //                 height: "40px",
    //                 [theme.breakpoints.down("sm")]: {
    //                   height: "10px",
    //                 },
    //               }}
    //             />
    //           </Box>
    //         </Box>
    //       </Box>
    //       {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    //         <IconButton
    //           className={classes.iconContainer}
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon className={classes.icon} />
    //         </IconButton> */}
    //       {/* <MenuIcon onClick={handleOpenNavMenu} /> */}
    //       {/* <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "left",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "left",
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{ display: { xs: "block", md: "none" } }}
    //         >
    //           <Box sx={{ display: "flex", flexDirection: "column" }}>
    //             <Button
    //               onClick={() => {
    //                 navigate("/wiz/home");
    //                 setAnchorElNav(null);
    //               }}
    //             >
    //               Home
    //             </Button>
    //             <Button
    //               onClick={() => {
    //                 navigate("/wiz/servers");
    //                 setAnchorElNav(null);
    //               }}
    //             >
    //               Servers
    //             </Button>
    //             <Button>Trading</Button>
    //             <Button>About us</Button>
    //           </Box> */}
    //       {/* </MenuItem> */}
    //       {/* </Menu>
    //       </Box>
    //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //         <Button
    //           onClick={() => navigate("/wiz/home")}
    //           sx={{ my: 2, color: "white", display: "block" }}
    //         >
    //           Home
    //         </Button>
    //         <Button
    //           onClick={() => navigate("/wiz/servers")}
    //           sx={{ my: 2, color: "white", display: "block" }}
    //         >
    //           Servers
    //         </Button>
    //         <Button sx={{ my: 2, color: "white", display: "block" }}>
    //           Trading
    //         </Button>
    //         <Button sx={{ my: 2, color: "white", display: "block" }}>
    //           About us
    //         </Button>
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" />
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: "45px" }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //           keepMounted
    //           transformOrigin={{ vertical: "top", horizontal: "right" }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           <MenuItem
    //             onClick={handleCloseUserMenu}
    //             component={RouterLink}
    //             to="/wiz/profile"
    //           >
    //             <ListItemIcon>
    //               <Person fontSize="small" />
    //             </ListItemIcon>
    //             Profile
    //           </MenuItem>
    //           <MenuItem onClick={logout}>
    //             <ListItemIcon>
    //               <Logout fontSize="small" />
    //             </ListItemIcon>
    //             Logout
    //           </MenuItem>
    //         </Menu>
    //       </Box> */}
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
});
