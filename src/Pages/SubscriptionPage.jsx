import React, { useEffect, useState } from 'react';
import SideBar from '../Component/Setting/SideBar';
import {  useStripe, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPopupNew from '../Component/ODR/PaymentPopupNew';

import NavBar from '../Component/Navbar';
import { ActiveBulletPoint, FadeBulletPoint } from '../assets/custom-icon';
import { url } from '../environment';
import Footer from '../Component/Footer,';
import Modal from "@mui/material/Modal";
import CheckoutForm1 from '../Component/ODR/CheckoutForm1'

import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
let elementsStripe;
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 327,
    bgcolor: "background.paper",
    borderRadius: "25px",
    boxShadow: 24,
    pt: 4,
    px: 4,
    pb: 5,
};
// Create a separate component for the subscription plan
const SubscriptionPlan = ({ plan, points,fullDetails,handlePaymentIntent }) => {
  const isFree = plan === 'Free';
  const isPaid = plan === 'Paid';

  return (
    <div className={`rounded-2xl p-4 text-[#0F172A] space-y-6 w-1/2 ${isFree ? 'bg-[#f1edf5]' : 'bg-lightThemebg'}`}>
      <h3 className='text-[28px] font-semibold'>{plan}</h3>
      <div className='text-lg'>
        <strong className='text-[35px] font-bold'>{isFree ? '$00/' : `${fullDetails.amount}/`}</strong>per {fullDetails.interval}
      </div>
      <div className='text-base font-semibold'>What’s included?</div>
      <div className='space-y-6 text-sm font-medium'>
        {points.map((item, index) => (
          <p className='flex items-center gap-2' key={index}>
            <span><ActiveBulletPoint /></span>{item}
          </p>
        ))}
      </div>
      <div className='text-sm font-semibold flex flex-col'>
        <button type='submit' onClick={(e)=>handlePaymentIntent(e,fullDetails.productId)} className={`bg-primaryPurple text-white hover:bg-opacity-90 py-3 px-2 rounded-lg ${isPaid ? '' : 'disabled:opacity-50'}`}>
          {isFree ? 'Get Started' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

function SubscriptionPage() {
    const stripe = useStripe();

    const [Refresh, setRefresh] = useState(0);

 
    // const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    const [clientSecret, setClientSecret] = useState('');
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const [payStripe, setPayStripe] = useState(false); 
     const [loading, setLoading] = useState(false);
  const [allPlans, setAllPlans] = useState([]);

  const points = ['Manage 1,000+ subscribers', '10 landing pages', 'Customizable domain', '15+ integrations', 'Basic support'];
  const pointsFree = ['View Shariah Status of 10 Coins/Tokens', 'View 10 Review Reports', 'ODR Request'];
  const pointsPaid = ['View Shariah Status of 100 Coins/Tokens', 'View 100 Review Reports', 'ODR Request'];

  useEffect(() => {
    getPlan();
  }, []);


  const handleOpenPay = () => setPayStripe(true);
  function closeModal() {
    setIsOpen(false)
   
}
  const handleClosePay = (e) => {
      setPayStripe(false); 
      if (e == 'success') {
        setIsOpen(true)      
    }

  };
  const getPlan = (e) => {
    let token = "Bearer " + sessionStorage.getItem("user_token");

    setLoading(true);
    fetch(`${url}/stripe/products`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          setAllPlans(res.data?.products);
          console.log(res.data.products);
        } else {
          // Handle error response
          // ...
        }
      })
      .catch((error) => {
        // Handle fetch error
        // ...
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePaymentIntent = async (e,productID) => {
    e.preventDefault()
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const token = localStorage.getItem('user_token')
   
    handleOpenPay()
    const response = await fetch(`${url}/payment/intent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify({

            "subscription": true,
            "productId": productID


          
        }),
    });
    const result = await response.json();

    if (result.success) {
        const { clientSecret } = result.body;
        setClientSecret(clientSecret);
        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

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
        // console.log(clientSecret);
    }
};


  return (
    <>
     <div>
        <NavBar />
        <div className="bg-container1">
          <section className=''>
            <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
              <div className='flex flex-col md:flex-row gap-6 text-gray-900'>
                <div className='lg:w-[390px] pt-10 '>
                  <SideBar />
                </div>
                <div className='flex-1 pt-10'>
                  <div className="rounded-3xl px-4 sm:px-8 py-6 bg-white h-full">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-32">
                      My Subscription
                    </h2>
                    <p className='text-base pt-2  text-[#6F7889]'>
                      You wouldn't place a tender without first understanding the full scope of work.
                    </p>
                    <div className='pt-8 flex gap-4'>
                      {allPlans.map((plan, index) => (
                        <SubscriptionPlan
                          key={index}
                          plan={plan.name}
                          fullDetails={plan}
                          handlePaymentIntent={handlePaymentIntent}
                          points={plan.name === 'Free' ? pointsFree : pointsPaid}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Modal
  open={payStripe}
  onClose={() => handleClosePay()}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    {loading ? (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    ) : clientSecret ? (
      // Ensure `Elements` provider wraps the payment form
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm1
        //   handlepayFailed={handlepayFailed}
          handleClose={handleClosePay}
        />
      </Elements>
    ) : null}
  </Box>
</Modal>
<PaymentPopupNew
                isOpen={isOpen}
                closeModal={closeModal}
                setIsOpen={setIsOpen}
            />
        </div>
       <Footer/>
      </div>
    </>
  );
}

export default SubscriptionPage;