import { Box, Button, Typography } from '@mui/material';
import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import '../../../../styles/Stripe.css'


const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {

                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4rew"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            },
            hidePostalCode: true
        }),
        []
    );
    return options;
};



const stripePromise = loadStripe('pk_test_51KVrVGSDY9WaknBaiiFWsA8f1ABY7ttrhueqzT2HmISLcCcGMDUn8fSDvuSQ18oyqdlhv62CBCLAwFWqggPJsfA6004D6HvOM1');


function Checkout() {
    const { state } = useLocation()
    const pricing = state.package
    const navigation = state.from
    const CardForm = () => {
        const stripe = useStripe();
        const elements = useElements();
        const options = useOptions();

        const handleSubmit = async event => {
            event.preventDefault();

            if (!stripe || !elements) {
                // Stripe.js has not loaded yet. Make sure to disable
                // form submission until Stripe.js has loaded.
                return;
            }

            const payload = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement)
            });

            alert(JSON.stringify(payload));
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                <label>
                    <Typography variant={'h6'}>
                        Please Enter Card Details
                    </Typography>
                    <CardElement
                        options={options}
                        onReady={() => {
                            console.log("CardElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardElement [focus]");
                        }}
                    />
                </label>
                <button className='payButton' onClick={handleSubmit} type="submit" disabled={!stripe}>
                    Pay ${state.price}
                </button>
            </div>
        );
    };
    return (
        // <div>Checkout
        //     <div>
        //         {state && JSON.stringify(state)}
        //     </div>
        // </div>
        <Box display={'flex'} flexDirection={'column'}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Checkout
            </Typography>
            <Typography
                component="h2"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                {state.package},  Proceed to Pay ${state.price}
            </Typography>
            <Box m={5} flex={1} display={'block'} justifyContent={'space-around'} >
                <Typography
                    component="h2"
                    variant="h3"
                    color="text.primary"
                    gutterBottom
                >
                    Pay to confirm subscription
                </Typography>
                <Elements stripe={stripePromise}>
                    <CardForm />
                </Elements>
            </Box>
        </Box>
    )
}

export default Checkout;