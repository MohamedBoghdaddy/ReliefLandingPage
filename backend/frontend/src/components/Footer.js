import React, { useState } from "react";
import axios from "axios";
import "./styles/Footer.css";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>About ReliefEG</h4>
          <p>
            ReliefEG is a non-profit organization dedicated to providing
            humanitarian aid and rebuilding communities in need.
          </p>
        </div>
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>Email: info@reliefeg.org</p>
          <p>Phone: +20 123 456 789</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/ReliefEG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/ReliefEG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/ReliefEG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-subscribe">
        <h4>Stay Updated</h4>
        <p>Subscribe to our newsletter for the latest updates and stories.</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button onClick={handleSubscribe}>Subscribe</button>
        {message && <p>{message}</p>}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ReliefEG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
