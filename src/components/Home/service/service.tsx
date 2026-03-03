"use client";

import React from "react";
import Image from "next/image";

// Images Import
import privateHome from "../../../assets/images/privateHome.png";
import eventCatering from "../../../assets/images/eventCatering.png";
import smallBuffet from "../../../assets/images/smallBuffet.png";
import specialBBQ from "../../../assets/images/specialBBQ.png";
import cookingClasses from "../../../assets/images/cookingClass.png";

const services = [
  {
    title: "Private Home Dining",
    description:
      "A bespoke, multi-course Indian dining experience prepared fresh in your kitchen.",
    icon: privateHome,
  },
  {
    title: "Event Catering",
    description:
      "Perfect for birthdays, anniversaries, engagements, parties, and special occasions.",
    icon: eventCatering,
  },
  {
    title: "Small Buffet Dine-In",
    description:
      "Ideal for small gatherings where you want a variety of fresh Indian dishes.",
    icon: smallBuffet,
  },
  {
    title: "Special BBQ Service",
    description:
      "Delicious grilled meats, seafood, sides, and a memorable outdoor experience.",
    icon: specialBBQ,
  },
  {
    title: "Cooking Classes",
    description:
      "Interactive, fun, and flavorful cooking experiences for all skill levels.",
    icon: cookingClasses,
  },
];

const Services = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("book-chef")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="w-full bg-[#FFFAF6] py-14 md:py-20 px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D]"
          style={{ fontFamily: "'Alata', sans-serif" }}
        >
          Our Services
        </h2>
        <p
          className="mt-3 text-sm sm:text-base md:text-lg text-gray-600"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          A personalized fine-dining experience, crafted fresh in your kitchen.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-[1440px] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6
                       flex flex-col items-center text-center
                       shadow-sm hover:shadow-md transition-all duration-300
                       min-h-[360px]"
          >
            {/* Icon */}
            <div className="mb-4 flex items-center justify-center h-[64px] sm:h-[72px]">
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="object-contain"
                style={{
                  filter:
                    "invert(58%) sepia(93%) saturate(1352%) hue-rotate(359deg) brightness(102%) contrast(107%)",
                }}
              />
            </div>

            {/* Title */}
            <h3
              className="text-[14px] sm:text-[16px] lg:text-[18px]
                         font-semibold text-black mb-2
                         leading-snug min-h-[40px]
                         flex items-center justify-center"
              style={{ fontFamily: "'Alata', sans-serif" }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="text-gray-500 text-[12px] sm:text-[14px]
                         leading-relaxed mb-4 flex-grow"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              {service.description}
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="mt-auto w-full max-w-[160px]
                         bg-[#DF7800] text-white
                         py-2 text-[13px] sm:text-[14px]
                         font-semibold rounded-full
                         transition-all duration-200
                         hover:bg-[#c96a00] hover:scale-105
                         active:scale-95"
            >
              Contact Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
