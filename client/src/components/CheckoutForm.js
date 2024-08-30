import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./styles/checkout.css"; // Include your custom CSS here

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name,
        email,
        address: {
          line1: address,
          city,
          state,
          postal_code: zip,
        },
      },
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "/api/payment/create-checkout-session",
          {
            payment_method: id,
            amount: 1000, // Amount in cents (e.g., $10.00)
            name,
            email,
            address: {
              line1: address,
              city,
              state,
              postal_code: zip,
            },
          }
        );

        window.location.href = response.data.url;
      } catch (error) {
        console.error("Payment Error:", error);
      }
    } else {
      console.error("Stripe Error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Complete Your Payment</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="zip">ZIP Code</label>
        <input
          id="zip"
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="card-element">Credit or Debit Card</label>
        <CardElement id="card-element" className="card-element" />
      </div>
      <button type="submit" disabled={!stripe} className="submit-button">
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
