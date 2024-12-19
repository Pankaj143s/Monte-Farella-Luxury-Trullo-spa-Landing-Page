import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-200">
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">
            Contact Information
          </h4>
          <p className="text-gray-400">
            Phone:{" "}
            <a href="tel:+393295645877" className="hover:text-white">
              +39 3295645877
            </a>
          </p>
          <p className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:bookings.montefarella@gmail.com"
              className="hover:text-white"
            >
              bookings.montefarella@gmail.com
            </a>
          </p>
        </div>

        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">About</h4>
          <p className="text-gray-400 leading-relaxed">
            Trullo Monte Farella offers an exclusive luxury spa experience,
            combining tradition and modern comfort in the heart of Puglia. With
            beautiful landscapes, private spa experiences, and personalized
            service, we ensure every guest has an unforgettable stay.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Trullo Monte Farella. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
