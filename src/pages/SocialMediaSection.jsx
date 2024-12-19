import React from "react";
import { FaInstagram, FaAirbnb, FaGoogle } from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <section
      id="social-media"
      className="bg-gray-900 text-white py-12 px-6 lg:px-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-yellow-400 mb-4">
          Stay Connected
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
          Follow us on social media and discover more about the luxury
          experience at Trullo Monte Farella.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 text-4xl">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/montefarella/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition-transform transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* Airbnb */}
          <a
            href="https://www.airbnb.com/rooms/1217293513567519910?guests=1&adults=1&s=67&unique_share_id=ca4f976b-4311-439b-a1ae-1c17da72cf27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition-transform transform hover:scale-110"
            aria-label="Airbnb"
          >
            <FaAirbnb />
          </a>

          {/* Google */}
          <a
            href="https://www.google.com/search?q=trullo+monte+farella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white transition-transform transform hover:scale-110"
            aria-label="Google"
          >
            <FaGoogle />
          </a>
        </div>

        {/* Call-to-Action */}
        <p className="mt-6 text-gray-400 text-lg">
          Follow us for more behind-the-scenes glimpses of Trullo Monte Farella.
        </p>

        {/* Optional: Add Instagram live feed or recent reviews */}
        {/* Replace this with an embedded feed or reviews if available */}
        <div className="mt-8">
          <p className="text-gray-500 italic">
            Stay tuned for live updates from our Instagram feed!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
