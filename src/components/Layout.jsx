import React from "react";
import Home from "../pages/Home";
import Header from "./Header";
import LocationSection from "../pages/LocationSection";
import Gallery from "../pages/Gallery";
import Testimonials from "../pages/Testimonials";
import FAQSection from "../pages/FAQSection";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import ScrollProgress from "../pages/ScrollProgress"; // Optional for scroll indicator

const Layout = () => {
  return (
    <div>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <Header />

      {/* Home Section */}
      <div id="home">
        <Home />
      </div>

      {/* Location Section */}
      <div id="location">
        <LocationSection />
      </div>

      {/* Image Gallery Section */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Booking Section */}
      <div id="booking">
        <Booking />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
