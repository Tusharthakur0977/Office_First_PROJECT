import React from "react";
import Rectangle from "../frontpage/images/Rectangle .png";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Profile from "../frontpage/images/Vector.png";
import Coin from "../frontpage/images/coin.png";
import Plus from "../frontpage/images/plus.png";
import Incress from "../frontpage/images/incress.png";
import useStylesAbout from "../../../../styles/AboutStyle";
import back from "../frontpage/images/back.png"
const About = () => {
  
  const classes = useStylesAbout();
  return (
      <Box className={classes.main} id="about">
    <Box className={classes.about} >
      <Box className={classes.container}>
        <Box className={classes.col} >
          <Typography variant="h6" sx={{ color: "white" , mb:"2rem",textAlign:"center" ,justifyContent:"center" }}className={classes.col1} >
            Use the power of social trading to get ahead in the market. Copy the
            trades of your favorite social media trade opinions/signal providers
            with the single click of a button.
          </Typography>
          <button className={classes.button}>Trade Now</button>
        </Box>     
        <Box sx={{mb:"4rem",paddingRight:"9rem"}}>
        <img className={classes.img} src={Rectangle} alt="john" />
            </Box>       
            </Box>
            </Box>
      <Box  className={classes.about1}>            
        <Typography
          align="center"
          variant="h3"
          sx={{ mb: "3rem", color: "white" }}
        >
          Trading with CandeClick is easy
        </Typography>
</Box>
        <Box sx={{paddingLeft:"9rem"}} className={classes.container}>
       
          <Box className={classes.hover} sx={{ mr: "14rem", cursor: "pointer" }}>
            <img className={classes.img1} src={Profile} alt="john" />
            <Typography sx={{ color: "white", mb: "2" }}>
              Create a CandeClick Account
            </Typography>
          </Box>
          <Box  className={classes.hover} sx={{ mr: "14rem", cursor: "pointer" }}>
            <img className={classes.img1} src={Coin} alt="john"  />
            <Typography sx={{ color: "white", mb: "1rem" }}>
            Subscribe to the Discord Server of your choice
            </Typography>
          </Box>
          <Box  className={classes.hover} sx={{ mr: "14rem", cursor: "pointer" }}>
            <img className={classes.img1} src={Plus} alt="john" />
            <Typography sx={{ color: "white", mb: "2" }}>
            Link your Webull brokerage account
            </Typography>
          </Box>
          <Box  className={classes.hover} sx={{ mr: "14rem", cursor: "pointer" }}>
            <img className={classes.img1} src={Incress} alt="john" />
            <Typography sx={{ color: "white", mb: "2" }}>
            Start Trading
            </Typography>
          </Box>  
    </Box>
    </Box>
  );
};

export default About;
