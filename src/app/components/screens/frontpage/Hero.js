import React from "react";

import mobile from "../frontpage/images/Group.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import back from "../frontpage/images/back.png";
import useStylesHero from "../../../../styles/HeroStyle";

const Hero = () => {
  const classes = useStylesHero();

  return (
    <Box className={classes.sectionStyle} id="hero">
      <Box className={classes.container}>
        <Box className={classes.col}>
          <Typography
            sx={{ color: "white", fontSize: "3rem", textAlign: "center " }}
          >
            The art of Social Trading on the comprehensive CandeClick Platform.
          </Typography>
          <Typography sx={{ fontSize: "1.3rem", color: "white" }}>
            Connect to global markets through our Webull powered Social Trading
            Platform
          </Typography>
          <button href="/" className={classes.button}>
            Now More
          </button>
        </Box>
        <Box>
          <img className={classes.img} src={mobile} alt="john" />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
