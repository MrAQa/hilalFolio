import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Elements } from '@stripe/react-stripe-js';

import { BrowserRouter } from "react-router-dom";
import "./i18n"; // Import your i18n configuration
import { GoogleOAuthProvider } from "@react-oauth/google";
import { loadStripe } from '@stripe/stripe-js';

import { ThemeProvider, createTheme } from "@mui/material";
const stripePromise = loadStripe('pk_test_51PKiKRIrx9FRzWMDEzpa806Xco9A5D5N2r9zdfyUhQRmZSy9O5bNr4fYNUQmBSq7Rk4UslBtO0JN6C3nRPhScyxu00bIPtjEqR');

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  palette: {
    primary: {
      main: '#6F4F9F', // Change the primary color
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <GoogleOAuthProvider clientId="662749198952-rfvupgjdptea3k7apdjgnsch72m9e153.apps.googleusercontent.com">
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Elements>
    </GoogleOAuthProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();