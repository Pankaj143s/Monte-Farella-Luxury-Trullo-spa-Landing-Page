import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false); // Close menu on selection
  };

  return (
    <header className="fixed top-0 md:top-5 left-0 w-full z-50 bg-opacity-70">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <NavLink to="/" onClick={handleMenuClick}>
            <img
              src={Logo}
              alt="Imperial Grand Hotel Logo"
              className="h-10 md:h-12"
              loading="lazy"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex space-x-8 items-center"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-base md:text-lg uppercase relative opacity-70 after:content-[''] after:w-2 after:h-2 after:bg-yellow-400 after:rounded-full after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
                : "text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-base md:text-lg uppercase relative opacity-70 after:content-[''] after:w-2 after:h-2 after:bg-yellow-400 after:rounded-full after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
                : "text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-base md:text-lg uppercase relative opacity-70 after:content-[''] after:w-2 after:h-2 after:bg-yellow-400 after:rounded-full after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
                : "text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase"
            }
          >
            Services
          </NavLink>

          {/* Rooms & Suites Dropdown */}
          <div className="relative group">
            <button className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase">
              Rooms & Suites <span className="ml-1">▼</span>
            </button>
            <div className="absolute left-0 top-full w-40 bg-gray-900 text-sm shadow-md py-2 hidden group-hover:block">
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-yellow-400 relative opacity-70 after:content-[''] after:w-2 after:h-2 after:bg-yellow-400 after:rounded-full after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
                    : "block px-4 py-2 text-white hover:bg-yellow-400 opacity-70"
                }
              >
                Rooms
              </NavLink>
              <NavLink
                to="/suites"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-yellow-400 relative opacity-70 after:content-[''] after:w-2 after:h-2 after:bg-yellow-400 after:rounded-full after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
                    : "block px-4 py-2 text-white hover:bg-yellow-400 opacity-70"
                }
              >
                Suites
              </NavLink>
            </div>
          </div>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button className="text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase">
              Pages <span className="ml-1">▼</span>
            </button>
            <div className="absolute left-0 top-full w-40 bg-gray-900 text-sm shadow-md py-2 hidden group-hover:block">
              <NavLink
                to="/page1"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-yellow-400 relative opacity-70 after:content-[''] after:w-2 after:h-2 after:bg-yellow-400 after:rounded-full after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
                    : "block px-4 py-2 text-white hover:bg-yellow-400 opacity-70"
                }
              >
                Page 1
              </NavLink>
              <NavLink
                to="/page2"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-yellow-400 relative opacity-70 after:content-[''] after:w-2 after:h-2 after:bg-yellow-400 after:rounded-full after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
                    : "block px-4 py-2 text-white hover:bg-yellow-400 opacity-70"
                }
              >
                Page 2
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-base md:text-lg uppercase relative opacity-70 after:content-[''] after:w-2 after:h-2 after:bg-yellow-400 after:rounded-full after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2"
                : "text-white text-base md:text-lg hover:text-yellow-400 opacity-70 uppercase"
            }
          >
            Contact Us
          </NavLink>
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
        <NavLink
          to="/"
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase"
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase"
        >
          Services
        </NavLink>
        <div className="py-2">
          <p className="block text-lg text-white opacity-70 uppercase">
            Rooms & Suites
          </p>
          <div className="pl-4 space-y-2">
            <NavLink
              to="/rooms"
              onClick={handleMenuClick}
              className="block text-lg hover:text-yellow-400 opacity-70 uppercase"
            >
              Rooms
            </NavLink>
            <NavLink
              to="/suites"
              onClick={handleMenuClick}
              className="block text-lg hover:text-yellow-400 opacity-70 uppercase"
            >
              Suites
            </NavLink>
          </div>
        </div>
        <div className="py-2">
          <p className="block text-lg text-white opacity-70 uppercase">Pages</p>
          <div className="pl-4 space-y-2">
            <NavLink
              to="/page1"
              onClick={handleMenuClick}
              className="block text-lg hover:text-yellow-400 opacity-70 uppercase"
            >
              Page 1
            </NavLink>
            <NavLink
              to="/page2"
              onClick={handleMenuClick}
              className="block text-lg hover:text-yellow-400 opacity-70 uppercase"
            >
              Page 2
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/contact"
          onClick={handleMenuClick}
          className="block py-2 text-lg hover:text-yellow-400 opacity-70 uppercase"
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
