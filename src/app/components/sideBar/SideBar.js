import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { Avatar, Tab, Tabs, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import { Context } from "../../context/Context";
import { useEffect } from "react";

function SideBar() {
  const theme = useTheme();
  const { settoggleDark } = React.useContext(Context);
  const tabsData = [
    { path: "/wiz/home", alt: "Dashboard", src: "sidebaricon1.png" },
    { path: "/wiz/servers", alt: "servers", src: "sidebaricon2.png" },
    { path: "/wiz/*", alt: "tab3", src: "sidebaricon3.png" },
    { path: "/wiz/*", alt: "tab4", src: "sidebaricon4.png" },
    { path: "/wiz/contactus", alt: "Contact us", src: "sidebaricon5.png" },
    { path: "/wiz/profilepage", alt: "profile", src: "sidebaricon6.png" },
  ];
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  const logout = async () => {
    await Auth.signOut();
    settoggleDark(false);
  };
  useEffect(() => {
    if (value === 1) {
      navigate("/wiz/home");
    }
  }, [value]);
 
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        hideBackdrop={true}
        variant="permanent"
        sx={{
          width: "55px",
          [theme.breakpoints.down("sm")]: {
            width: "45px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            padding: "10px 0",
            height: "100%",
            width: "55px",
            [theme.breakpoints.down("sm")]: {
              padding: "5px 0",
              width: "45px",
              minHeight: "100%",
            },
          }}
        >
          <Box sx={{ mb: ".3rem" }}>
            <img
              style={{
                cursor: "pointer",
                height: "35px",
              }}
              alt="candeClick"
              onClick={() => navigate("/wiz/home")}
              src={"../assets/images/sideBaricons/sidebarlogo.png"}
            />
          </Box>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            orientation="vertical"
            aria-label="Vertical tabs example"
            sx={{
              flex: 1,
            }}
          >
            {tabsData.map((data, index) => {
              return (
                <Tab
                  key={index}
                  value={index + 1}
                  sx={{
                    margin: "14px ",
                    padding: "0",
                    minHeight: "25px",
                    minWidth: "25px",
                  }}
                  icon={
                    <Avatar
                      variant="square"
                      sx={{ width: 25, height: 25 }}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(data.path);
                      }}
                      alt={data.alt}
                      src={`../assets/images/sideBaricons/${data.src}`}
                    />
                  }
                />
              );
            })}
          </Tabs>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ cursor: "pointer", height: "30px" }}
              onClick={logout}
              src={"../assets/images/logout.png"}
              alt="logout"
            />
            <Typography variant="caption" color={"#6C75F8"}>
              Logout
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideBar;
