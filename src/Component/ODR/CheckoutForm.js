import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import './CheckoutForm.css';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    let elementsStripe;
    useEffect(() => {
        const handlePaymentIntent = async () => {
            const response = await fetch(`http://18.136.204.229:8000/api/payment/intent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: 100,
                    currency: "usd",
                    country: "UK",
                }),
            });
            const result = await response.json();

            if (result.success) {
                const { clientSecret } = result.body;
                setClientSecret(clientSecret);
                const stripe = await loadStripe('pk_test_51PFsNB08ZDzoXpLEzP4uFGQ9hdOrLtTgmdXDOgLvMjWdYCV8Z8EGheRcZjtzXgltIQ51OiMLdozUuc8QCfaL11Vk003pbrL8J9');

                const appearance = {
                  theme: "flat",
                };
          
                elementsStripe = stripe.elements({ appearance, clientSecret });
          
                const paymentElementOptions = {
                  layout: "tabs",
                };
          
                const paymentElement = elementsStripe.create(
                  "payment",
                  paymentElementOptions
                );
                console.log(clientSecret);
            }
        };
        handlePaymentIntent();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPaymentProcessing(true);

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            setErrorMessage(error.message);
            setPaymentProcessing(false);
        } else {
            setPaymentSucceeded(true);
            setPaymentProcessing(false)
            setErrorMessage('');;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="card-element">
                <CardElement />
            </div>

            <button
                type="submit"
                // onClick={handleSubmit}
                disabled={!stripe || paymentProcessing || paymentSucceeded}
                // disabled={isLoading || cartItem.length === 0}
                className="bg-primaryPurple w-full p-3 rounded-xl text-white font-semibold text-base disabled:opacity-50 h-12 flex justify-center items-center hover:opacity-90">
                {paymentProcessing ? 'Processing...' : 'Pay'}
            </button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {paymentSucceeded && <div className="success-message">Payment Successful!</div>}
        </form>
    );
};

export default CheckoutForm;
