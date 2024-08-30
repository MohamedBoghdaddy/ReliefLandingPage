import React, { useState } from "react";
import axios from "axios";
import "./styles/subscribe.css";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await axios.post("/api/subscribers", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      setMessage("Subscription failed, please try again.");
    }
  };

  return (
    <section className="subscribe">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for the latest updates and stories.</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="subscribe-input"
      />
      <button onClick={handleSubscribe} className="subscribe-button">
        Subscribe
      </button>
      {message && <p>{message}</p>}
    </section>
  );
};

export default SubscribeSection;
