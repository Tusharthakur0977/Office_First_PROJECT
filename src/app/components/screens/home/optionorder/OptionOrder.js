import { AppBar, Box, Container, Tab, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStylesOptionOrder from '../../../../../styles/OptionOrder';
import { actionCurrentPosition } from '../../../../redux/PositionOrderAction';
import { readData, USER } from '../../../../utils/storage';
import OptionOrderTable from './OptionOrderTable';

export default function OptionOrder() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        readData(USER, (data) => {
            setLoggedInUser(JSON.parse(data));
        });
    }, []);

    useEffect(() => {
        if (loggedInUser) {
            getOptionOrderList()
        }
    }, [loggedInUser])

    const getOptionOrderList = () => {
        actionCurrentPosition(loggedInUser.access_token, (response, error) => {
            if (response) {
                // alert(JSON.stringify(response))
                setData(response)
            }
        });
    }

    const classes = useStylesOptionOrder();
    return (
        <Box boxShadow={10} className={classes.rootContainer}>
            <AppBar className={classes.appBar} sx={{ display: "inline-grid", }} position="static">
                <Typography className={classes.sectionTitle}>
                    Option Order
                </Typography>
            </AppBar>
            <OptionOrderTable response={data} />
        </Box>
    )
}
