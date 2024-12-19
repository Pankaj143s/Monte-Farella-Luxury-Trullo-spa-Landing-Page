import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo1.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu on selection
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50  bg-opacity-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="home" smooth={true} duration={500}>
            <img
              src={Logo}
              alt="Monte Farella Logo"
              className="h-10 md:h-16"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex space-x-8 items-center"
        >
          {[
            { to: "home", label: "Home" },
            { to: "location", label: "Location" },
            { to: "gallery", label: "Gallery" },
            { to: "testimonials", label: "Testimonials" },
            { to: "faq", label: "FAQs" },
            { to: "booking", label: "Booking" },
            { to: "contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-headingColor font-bold"
              className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden bg-gray-900 text-white px-4 py-4 transition-all duration-300 transform ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
        aria-label="Mobile Navigation"
      >
        {[
          { to: "home", label: "Home" },
          { to: "location", label: "Location" },
          { to: "gallery", label: "Gallery" },
          { to: "testimonials", label: "Testimonials" },
          { to: "faq", label: "FAQs" },
          { to: "booking", label: "Booking" },
          { to: "contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-headingColor font-bold"
            onClick={handleMenuClick}
            className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
