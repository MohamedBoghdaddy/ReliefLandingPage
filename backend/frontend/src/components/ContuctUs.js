import React from "react";
import "./styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! If you have any questions or would
          like to get involved, please reach out to us.
        </p>
        <div className="contact-details">
          <p>Email: info@reliefeg.org</p>
          <p>Phone: +20 123 456 789</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
