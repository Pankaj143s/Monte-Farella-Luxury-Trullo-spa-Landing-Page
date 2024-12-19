import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../assets/images/logo1.png";

const Footer = () => {
  return (
    <footer className="white text-gray-300 py-12 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
          {/* Logo */}
          <img src={Logo} alt="Trullo Monte Farella Logo" className="h-16" />
          {/* Text Section */}
          <div>
            <span className="text-2xl md:text-3xl font-bold font-forum text-[#bf9668] tracking-widest block">
              Trullo Monte Farella
            </span>
            <p className="text-gray-400 leading-relaxed mt-2 text-sm md:text-base">
              Trullo Monte Farella offers an exclusive luxury spa experience,
              combining tradition and modern comfort in the heart of Puglia.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-[#bf9668] mb-4">
            Useful Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="hover:text-white transition duration-200"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-[#bf9668] mb-4">
            Subscribe
          </h4>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Don’t miss to subscribe to our news, kindly fill the form below.
          </p>
          <form className="flex flex-col md:flex-row items-center border border-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Here"
              className="bg-gray-200 text-gray-300 placeholder-gray-500 px-4 py-2 flex-1 outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="bg-[#bf9668] hover:bg-yellow-700 text-gray-900 px-4 py-2 w-full md:w-auto text-sm md:text-base"
            >
              &gt;
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="my-8 flex items-center justify-center">
        <hr className="flex-grow border-gray-700 mx-4" />
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaTwitter size={25} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaFacebookF size={25} />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaPinterestP size={25} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <FaInstagram size={25} />
          </a>
        </div>
        <hr className="flex-grow border-gray-700 mx-4" />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-4 space-y-4 md:space-y-0">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Trullo Monte Farella. All Rights
          Reserved.
        </p>
        <div className="space-x-4">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-white">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
