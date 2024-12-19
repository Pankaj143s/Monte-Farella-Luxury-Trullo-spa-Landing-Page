import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Import the images
import site1 from "../assets/gallery/site1.png";
import site2 from "../assets/gallery/site2.png";
import site3 from "../assets/gallery/site3.png";
import site4 from "../assets/gallery/site4.png";
import site5 from "../assets/gallery/site5.png";
import site6 from "../assets/gallery/site6.png";
import site7 from "../assets/gallery/site7.png";
import site8 from "../assets/gallery/site8.png";

const Gallery = () => {
  const images = [
    {
      original: site1,
      thumbnail: site1,
      description:
        "Relax under the stars in the hot tub beneath the trullo's iconic cone.",
    },
    {
      original: site2,
      thumbnail: site2,
      description:
        "Unwind in our peaceful garden, surrounded by olive trees and fragrant flowers.",
    },
    {
      original: site3,
      thumbnail: site3,
      description:
        "Cozy living space with a blend of modern and traditional design.",
    },
    {
      original: site4,
      thumbnail: site4,
      description: "Double bedroom with rustic charm and luxurious comfort.",
    },
    {
      original: site5,
      thumbnail: site5,
      description: "Stone bathroom featuring high-end amenities.",
    },
    {
      original: site6,
      thumbnail: site6,
      description:
        "Landscapes of olive groves and lush gardens surrounding the property.",
    },
    {
      original: site7,
      thumbnail: site7,
      description: "Expansive private patio for relaxation and dining.",
    },
    {
      original: site8,
      thumbnail: site8,
      description:
        "Stunning views of the Puglian countryside from Trullo Monte Farella.",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-gray-900 text-white py-12 px-6 lg:px-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold text-yellow-400 mb-4">
          Image Gallery
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
          Our photo gallery showcases the breathtaking beauty of Trullo Monte
          Farella, from the traditional trullo itself to the luxurious amenities
          that await you.
        </p>
      </div>

      {/* Gallery Carousel */}
      <div className="mt-10 max-w-6xl mx-auto">
        <ImageGallery
          items={images}
          showFullscreenButton={true}
          showPlayButton={false}
          showThumbnails={true}
          autoPlay={true}
          slideInterval={5000}
        />
      </div>
    </section>
  );
};

export default Gallery;
