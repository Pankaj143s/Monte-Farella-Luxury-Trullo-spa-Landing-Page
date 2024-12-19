import React, { useEffect, useState } from "react";
import BannerDesktop from "../assets/images/banner.png";
import BannerTablet from "../assets/images/banner-tablet.png";
import BannerMobile from "../assets/images/banner-mobile.png";
import Customer1 from "../assets/images/c1.png";
import Customer2 from "../assets/images/c2.png";
import Customer3 from "../assets/images/c3.png";

const Home = () => {
  const [bannerImage, setBannerImage] = useState(BannerDesktop);

  useEffect(() => {
    const updateBanner = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setBannerImage(BannerMobile); // Mobile view
      } else if (width <= 1024) {
        setBannerImage(BannerTablet); // Tablet view
      } else {
        setBannerImage(BannerDesktop); // Desktop view
      }
    };

    // Set the initial banner and add resize event listener
    updateBanner();
    window.addEventListener("resize", updateBanner);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateBanner);
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex items-center h-full px-4 sm:px-8 lg:px-20">
        <div className="text-left max-w-lg sm:max-w-xl lg:max-w-5xl flex flex-col space-y-8 md:space-y-12">
          {/* 1. Vertical Line and Tagline */}
          <div className="flex flex-col items-start space-y-2">
            {/* Vertical Line */}
            <div className="h-16 sm:h-20 lg:h-24 w-[1px] bg-white"></div>

            {/* Tagline */}
            <p className="text-base sm:text-lg lg:text-xl font-normal opacity-70 tracking-extra text-yellow-400 font-poppins">
              BEST PLACE TO RELAX & ENJOY
            </p>
          </div>

          {/* 2. Main Heading */}
          <h1
            className="font-forum font-normal text-white text-4xl sm:text-5xl md:text-6xl lg:text-[112px]"
            style={{
              lineHeight: "124%",
              letterSpacing: "0%",
            }}
          >
            Perfect Place to
            <br />
            Enjoy Your Life
          </h1>

          {/* 3. Rating Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-md">
            {/* Profile Images */}
            <div className="flex -space-x-2 mb-4 sm:mb-0">
              <img
                src={Customer1}
                alt="Profile 1"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
              />
              <img
                src={Customer2}
                alt="Profile 2"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
              />
              <img
                src={Customer3}
                alt="Profile 3"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
              />
            </div>

            {/* Rating Text and Stars */}
            <div className="flex flex-col items-start font-poppins">
              <p className="text-sm sm:text-base md:text-lg font-normal tracking-wide">
                4.8 Rated Around The World
              </p>
              <div className="flex space-x-1 mt-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Left and Right Arrows */}
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
