import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";

import useStylesServer from "../../../styles/ServerStyle";
import ServerTiles from "./ServerTiles";
import ServerSidebar from "./ServerSidebar";
function Servers(props) {
  const classes = useStylesServer();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headingCont}>
        <Typography>Social-Trade Market Place</Typography>
      </Box>
      <Box className={classes.SubContainer}>
        <Box className={classes.sidebarContainer}>
          <ServerSidebar />
        </Box>
        <Box className={classes.ServerTileCont}>
          <ServerTiles />
        </Box>
      </Box>
    </Box>
  );
}
export default Servers;
