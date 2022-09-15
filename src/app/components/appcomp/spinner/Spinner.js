import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import useStylesHome from '../../../../styles/HomeStyle';
function Spinner(props) {
  const classes = useStylesHome();

  return (
    <Box sx={{ display: 'flex' }} >
      <CircularProgress />
    </Box>
  );
}

export default Spinner;