import React, { useState } from "react";
import axios from "axios";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/subscribers",
        { email }
      );
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
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      {message && <p>{message}</p>}
    </section>
  );
};

export default SubscribeSection;
