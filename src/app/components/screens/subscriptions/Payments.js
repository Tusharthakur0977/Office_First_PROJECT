import React, { useMemo } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import '../../../../styles/Stripe.css'
import Box from '@mui/material/Box';


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
            }
        }),
        []
    );
    return options;
};

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
        <div >
            <label>
                Card details
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
                Pay
            </button>
        </div>
    );
};

const stripePromise = loadStripe('pk_test_51KVrVGSDY9WaknBaiiFWsA8f1ABY7ttrhueqzT2HmISLcCcGMDUn8fSDvuSQ18oyqdlhv62CBCLAwFWqggPJsfA6004D6HvOM1');

function Payments() {
    return (
        <Box p={5}>
            <Elements stripe={stripePromise}>
                <CardForm />
            </Elements>
        </Box>
    )
}

export default Payments;