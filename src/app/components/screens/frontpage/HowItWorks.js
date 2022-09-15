import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import useStylesHowItWork from '../../../../styles/HowItWorkStyles';
import Object from "../frontpage/images/object.png"
const HowItWorks = () => {
     const classes=useStylesHowItWork()
    return (

    <Box  className={classes.howitworks}  id='testimonials'>
        <Box>
       <Typography   sx={{ color: "white", fontSize: "3rem", textAlign: "center " }}>
       How It Works
       </Typography>
       <Typography  sx={{fontSize: "1.3rem", color: "white",textAlign: "center " }}>
       WALL STREET + SOCIAL MEDIA + ADVANCE TECHNOLOGY = CANDECLICK
       </Typography>
       <Box className={classes.image}>
           <img src={Object} alt='no '  className={classes.image}/>
       </Box>
        </Box>
    </Box>
    
  )
}

export default HowItWorks