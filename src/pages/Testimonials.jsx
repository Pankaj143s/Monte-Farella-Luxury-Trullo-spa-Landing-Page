import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Customer1 from "../assets/images/c1.png";
import Customer2 from "../assets/images/c2.png";
import Customer3 from "../assets/images/c3.png";

const testimonials = [
  {
    name: "Vito Luisi",
    review:
      "The perfect getaway! We loved relaxing in the hot tub beneath the stars and enjoying the serene countryside.",
    image: Customer1,
  },
  {
    name: "Pia Manghisi",
    review:
      "A unique and peaceful experience. The trullo was stunning, and the outdoor patio was perfect for our evening relaxation.",
    image: Customer2,
  },
  {
    name: "Jackson Dean",
    review:
      "Absolutely breathtaking! Trullo Monte Farella exceeded all our expectations with its charm and luxury.",
    image: Customer3,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="bg-white text-gray-900 py-12 px-6 lg:px-20">
      <div className="text-center max-w-4xl mx-auto mb-10">
        {/* Vertical Line */}
        <div className="mx-auto w-[1px] h-16 bg-[#BF9766] opacity-80 mb-4"></div>
        {/* Our Customer Review */}
        <p className="font-poppins text-lg tracking-extra font-normal opacity-80 text-[#BF9766] uppercase mb-2">
          Our Customer Review
        </p>
        {/* What Our Client Says */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          What Our Client Says
        </h2>
        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
          Hear from our satisfied guests who have experienced the luxury and
          tranquility of Trullo Monte Farella.
        </p>
        {/* Stars */}
        <div className="flex justify-center items-center space-x-1 mb-8">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center px-4">
              <p className="text-xl text-gray-800 italic mb-6">
                "{testimonial.review}"
              </p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-yellow-400"
              />
              <h3 className="text-lg font-medium">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">Guest</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
