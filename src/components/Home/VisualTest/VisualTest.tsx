"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";

// Images
import img1 from "../../../assets/images/Poneer_tikka.jpg";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/images/Butter_chicken.jpg";
import img4 from "../../../assets/9.png";
import img5 from "../../../assets/5.png";
import img6 from "../../../assets/images/Mutton_si.jpg";
import img7 from "../../../assets/images/Chikken_tikka.jpg";
import img8 from "../../../assets/images/Poneer_tikka.jpg";
import img9 from "../../../assets/images/Spicy_dal.jpg";
import img10 from "../../../assets/images/Spicy_lamb.jpg";
import img11 from "../../../assets/11.png";
import img12 from "../../../assets/12.png";

interface GalleryImage {
  id: number;
  src: StaticImageData;
}

const images: GalleryImage[] = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
];

const ChefGallery: React.FC = () => {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Alata', sans-serif" }}
          >
            A visual taste of our craft and cuisine
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            A curated glimpse into the refinement, detail, and ritual behind
            every Harp & Suited experience.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-xl bg-gray-100 shadow-sm group"
            >
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={`Culinary creation ${img.id}`}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  placeholder="blur"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={img.id <= 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefGallery;
