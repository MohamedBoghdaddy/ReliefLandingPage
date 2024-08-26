import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
// import SubscribeSection from "./components/SubscribeSection";
import ContactUs from "./components/ContuctUs";
import Payment from "./components/Payment";
import SectionWithSlider from "./components/SectionWithSlider";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <AboutUs />
              <ContactUs />
              {/* <SubscribeSection /> */}
              <SectionWithSlider />
              <Footer />
            </>
          }
        />
        <Route
          path="/donate"
          element={
            <>
              <Payment />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
