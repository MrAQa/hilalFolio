import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import CheckoutForm1 from './CheckoutForm1';
import { url, STRIPE_KEY } from '../../environment';

const CheckoutForm = ({ total, openModal, cartItem }) => {
    const [loading, setLoading] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    useEffect(() => {
        const createPaymentIntent = async () => {
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            const token = localStorage.getItem('user_token');
            let symbols = cartItems?.map((item) => item?.cmc_id || '');

            try {
                const response = await fetch(`${url}/payment/intent`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        "cmcIds": symbols,
                        "subscription": false,
                    }),
                });
                const result = await response.json();

                if (result.success) {
                    const { clientSecret } = result.body;
                    setClientSecret(clientSecret);
                } else {
                    setErrorMessage("Failed to create payment intent. Please try again.");
                }
            } catch (error) {
                setErrorMessage("An error occurred. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        createPaymentIntent();
    }, []);

    const handlePaymentSuccess = () => {
        setPaymentSucceeded(true);
        openModal();
    };

    const handlePaymentFailure = (error) => {
        setErrorMessage(error.message);
    };

    if (loading) {
        return (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (errorMessage) {
        return <div className="error-message">{errorMessage}</div>;
    }

    if (paymentSucceeded) {
        return <div className="success-message">Payment Successful!</div>;
    }

    return (
        <div className="form-container">
            {clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm1
                        handlepayFailed={handlePaymentFailure}
                        handleClose={handlePaymentSuccess}
                    />
                </Elements>
            ) : (
                <div>Unable to load payment form. Please refresh the page and try again.</div>
            )}
        </div>
    );
};

export default CheckoutForm;