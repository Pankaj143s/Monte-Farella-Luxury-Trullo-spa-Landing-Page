import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import BookingForm from "../components/BookingForm";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import LocationSection from "../pages/LocationSection";
import SocialMediaSection from "../pages/SocialMediaSection";

const Layout = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="location">
        <LocationSection />
      </div>
      <div id="social-media">
        <SocialMediaSection />
      </div>
      <div id="booking">
        <BookingForm />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
