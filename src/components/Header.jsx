import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo1.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu on selection
  };

  return (
    <header className="fixed top-0 md:top-5 left-0 w-full z-50 bg-opacity-70">
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
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            spy={true}
            className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            to="booking"
            smooth={true}
            duration={500}
            spy={true}
            className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
          >
            Booking
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
          >
            Contact
          </Link>
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
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="gallery"
          smooth={true}
          duration={500}
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
        >
          Gallery
        </Link>
        <Link
          to="booking"
          smooth={true}
          duration={500}
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
        >
          Booking
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase cursor-pointer"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
