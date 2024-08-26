import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleDonateNow = () => {
    navigate("/donate");
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Together, We Bring Hope and Relief to Those in Need</h1>
        <p>
          Support our mission to provide humanitarian aid and rebuild
          communities.
        </p>
        <button onClick={handleDonateNow}>Donate Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
