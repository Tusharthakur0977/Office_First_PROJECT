import React from 'react'
import { Alert, Box, Button, Snackbar } from '@mui/material';

function Fallback(error, errorInfo) {
    return (
        <Box>
            <Snackbar
                open={true}
                autoHideDuration={1000}>
                <Alert elevation={6} variant="filled" sx={{ alignSelf: 'center' }} severity="error">
                    Something went wrong <Button sx={{ color: 'white', backgroundColor: 'gray' }}
                        onClick={() => window.location.reload()}>Reload</Button>
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Fallback;