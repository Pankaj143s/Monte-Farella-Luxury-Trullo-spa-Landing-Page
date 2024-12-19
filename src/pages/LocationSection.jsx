import React from "react";

const LocationSection = () => {
  return (
    <section id="location" className="bg-white py-12 px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="flex justify-center mb-4">
          <div className="w-[1px] h-16 opacity-70 bg-headingColor"></div>
        </div>

        {/* Small Heading */}
        <p className="text-headingColor text-lg uppercase tracking-wide font-poppins">
          Discover Our Perfect Getaway
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl lg:text-5xl   mb-6 font-forum">Location</h2>
      </div>

      {/* Content and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-poppins">
            Nestled in the serene Puglian countryside, Trullo Monte Farella
            offers a rare and luxurious experience. Surrounded by olive trees
            and lush greenery, this exclusive retreat provides guests with an
            unparalleled sense of tranquility. The property is housed in a
            traditional Apulian trullo, blending natural beauty with high-end
            comfort. Whether you're relaxing in the hot tub beneath the starry
            cone of the trullo or enjoying the expansive private patio, you’ll
            be immersed in the essence of Puglia’s rich landscape.
          </p>
          <p className="mt-4 text-gray-600 font-poppins">
            Located just a short drive from the UNESCO-listed town of
            Alberobello, famous for its iconic trulli, and within proximity to
            Martina Franca and Locorotondo, Trullo Monte Farella serves as an
            ideal base for cultural exploration. The pristine beaches of the
            Adriatic and Ionian coasts are also within easy reach, offering a
            perfect blend of seaside relaxation and cultural adventures.
          </p>
          <p className="mt-6 text-gray-800 text-lg font-medium font-poppins">
            Address: S. C. Giampietro, 38-46, 70017 Putignano BA, Italy
          </p>
        </div>

        {/* Map Section */}
        <div>
          <iframe
            title="Trullo Monte Farella Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48835.10957215583!2d17.100215821356736!3d40.851607594991315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347b03fd6e816f7%3A0xe4775b66d92df9b8!2sS.%20C.%20Giampietro%2C%2038%2C%2046%2C%2070017%20Putignano%20BA%2C%20Italy!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
