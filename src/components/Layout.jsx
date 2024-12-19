import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import BookingForm from "../components/BookingForm";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="booking">
        <BookingForm />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
