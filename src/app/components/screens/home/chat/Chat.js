import { Box } from "@mui/material";
import React from "react";
import useStylesChat from "../../../../../styles/ChatStyle";

function Chat() {
  const classes = useStylesChat();
  return (
    <Box className={classes.mainCont}>
      <Box className={classes.Cont1}>
        
      </Box>
      <Box className={classes.Cont2}>dsadas</Box>
    </Box>
  );
}

export default Chat;
