import { Box, IconButton } from "@mui/material";
import React from "react";
import useStylesFooter from "../../../../styles/FooterStyle";
import { Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  const classes = useStylesFooter();
  return (
    <Box className={classes.footer}>
      <Box sx={{ mt: "4rem" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "3rem",
            textAlign: "center ",
            mb: "2rem",
          }}
        >
          24/7 Online Support
        </Typography>

        <Box>
          <Box
            sx={{ color: "white", textAlign: "center", mr: "2rem", mb: "3rem" }}
          >
            <IconButton
              sx={{ mr: "2rem" }}
              classes={{ hover: classes.hover }}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <TelegramIcon sx={{ fontSize: "50px" }} />
            </IconButton>
            <IconButton
              sx={{ mr: "2rem" }}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <InstagramIcon sx={{ fontSize: "47px", color: "#FCAF45" }} />
            </IconButton>
            <IconButton
              sx={{ mr: "2rem" }}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <TwitterIcon sx={{ fontSize: "50px" }} />
            </IconButton>
            <IconButton
              sx={{ mr: "2rem" }}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <YouTubeIcon sx={{ fontSize: "50px", color: "red" }} />
            </IconButton>
            {/* <Box sx={{ fontSize: "1.3rem", color: "white", mr: "7rem" }}>
            All rights reserved. © 2022{" "}
          </Box>
          <Box sx={{ fontSize: "1.3rem", color: "white", mr: "2rem" }}>
            Privacy Policy
          </Box>
          <Box sx={{ fontSize: "1.3rem", color: "white", mr: "1.7rem" }}>|</Box>
          <Box sx={{ fontSize: "1.3rem", color: "white", mb: "4rem" }}>
            Terms & Conditions
          </Box> */}
          </Box>
        </Box>
       
      </Box>
    </Box>
  );
};

export default Footer;
