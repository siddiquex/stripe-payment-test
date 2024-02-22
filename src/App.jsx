import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import axios from 'axios'
import './App.css'


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_API_KEY);
const App = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    console.log("stripePromise", stripePromise);
    console.log("clientSecret", clientSecret);
    // Create a Checkout Session as soon as the page loads
    axios.post(import.meta.env.VITE_CREATE_CHECKOUT_SESSION_PATH)
      .then((res) => {
        setClientSecret(res.data.clientSecret)
      });
  }, []);

  const options = { clientSecret };
  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
};

export default App
