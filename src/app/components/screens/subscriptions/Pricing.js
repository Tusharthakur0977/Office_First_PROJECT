import {
    Alert,
    Box,
    Button, Card, CardActions, CardContent, CardHeader, Container, Grid, TextField, Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/StarBorder';
import useStylesPricing from "../../../../styles/PricingStyle";

function Pricing() {
    const { state } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (state !== "from:register") {
            navigate('/')
        }
    }, [])

    const tiers = [
        {
            title: 'Month-to-month',
            price: '49',
            description: [],
            buttonText: 'Continue with Montlhy Plan',
            buttonVariant: 'contained',
        },
        {
            title: '3 Months',
            price: '135',
            description: [],
            buttonText: 'Continue with Quarterly Plan',
            buttonVariant: 'contained',
        },
        {
            title: '6 Months',
            price: '250',
            description: [],
            buttonText: 'Continue with 6 Months Plan',
            buttonVariant: 'contained',
        }, {
            title: '12 Months',
            price: '450',
            description: [],
            buttonText: 'Continue with Anually Plan',
            buttonVariant: 'contained',
        },
    ];
    const classes = useStylesPricing();
    return (
        <Box className={classes.container}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Pricing
            </Typography>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Select subscriptions type
            </Typography>
            <Container component="main">
                <Grid sx={{ justifyContent: 'center', alignItems: 'center' }} container spacing={5} >
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item
                            key={tier.title}
                            // xs={10}
                            sm={tier.title === 'Enterprise' ? 12 : 5}
                        // md={4}
                        >
                            <Card sx={{ boxShadow: 3 }} className={classes.card}>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],

                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /mo
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth onClick={() => navigate('/checkout', {
                                        state: {
                                            package: tier.buttonText,
                                            price: tier.price,
                                            from: 'pricing'
                                        }
                                    })} variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box >
    )
}

export default Pricing;