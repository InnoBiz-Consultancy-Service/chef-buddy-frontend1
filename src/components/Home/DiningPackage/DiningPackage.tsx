"use client";

import Image from "next/image";
import bgImage from "../../../assets/images/DiningPackage_bg.jpg";  

const packages = [
  {
    title: "Private Dining Experience",
    price: "From £69 for 8 guests",
    features: [
      "3-course bespoke Indian menu",
      "On-site cooking",
      "Elegant plating",
      "Full cleanup",
    ],
    buttonText: "Book Now",
    isFeatured: false,
  },
  {
    title: "Small Events & Parties",
    price: "£99 per person (min. 15 guests)",
    features: [
      "2 starters",
      "2 mains",
      "Rice + breads",
      "1 dessert",
      "Dishes made on request",
      "Special Dish for kids",
      "Hot delivery or on-site cooking",
    ],
    buttonText: "Book Now",
    isFeatured: true, 
  },
  {
    title: "Chef Buddy VIP Experience",
    price: "£199 (all-inclusive)",
    features: [
      "5-course premium dining",
      "Live cooking & on-plate presentation",
      "Complimentary welcome drink",
      "Dessert tasting platter",
      "Customized menu based on preferences",
      "High-quality, fresh ingredients included",
      "Full cleanup",
      "Free travel within 50 miles of Edinburgh",
    ],
    buttonText: "Book Now",
    isFeatured: false,
  },
];

export default function DiningPackage() {

  const scrollToContact = (e: React.MouseEvent)=>{
    e.preventDefault();
    const element = document.getElementById('book-chef');
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <section className="relative py-24 px-4 w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-10">
        <Image src={bgImage} alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70" /> 
      </div>

      {/* Header */}
      <div className="text-center mb-16 z-20">
        <h2 className="text-[24px] md:text-[48px] font-semibold text-white mb-4">
          Dining Packages for Every Occasion
        </h2>
        <p className="text-gray-300 text-sm md:text-[16px]">
          Fine dining, meal prep, events, and more — all crafted personally for you.
        </p>
      </div>

      {/* Cards Grid */}
      {/* Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1440px] w-full z-10 items-stretch"> {/* items-stretch ensures equal height rows */}
  {packages.map((pkg, index) => (
    <div
      key={index}
      style={{
        boxShadow: "0px 32px 40px 0px rgba(0, 0, 0, 0.10)",
      }}
      className={`relative rounded-[32px] p-8 md:p-10 flex flex-col transition-all duration-500 border
        ${
          pkg.isFeatured
            ? "bg-white text-black lg:scale-105 border-transparent z-20" 
            : "bg-[#1D1D1D]/50 backdrop-blur-xl text-white border-white/20"
        }
        w-full max-w-[464px] mx-auto min-h-full`} // Fixed: Removed hardcoded heights, used min-h-full
    >
      {/* Package Title */}
      <h3 
        className={`text-2xl md:text-[28px] font-bold mb-2 ${pkg.isFeatured ? 'text-[#1D1D1D]' : 'text-white'}`}
        style={{ fontFamily: "'Alata', sans-serif" }}
      >
        {pkg.title}
    </h3>
      
      {/* Price */}
      <p 
        className={`text-sm md:text-[16px] mb-6 font-medium ${pkg.isFeatured ? 'text-gray-500' : 'text-gray-300'}`}
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {pkg.price}
      </p>

      {/* Features List */}
      <ul className="flex-grow space-y-1 mb-8"> {/* Reduced space-y for better fit */}
        {pkg.features.map((feature, i) => (
          <li 
            key={i} 
            className={`flex items-start gap-3 tracking-[0%] ${pkg.isFeatured ? "text-[#262626]" : "text-white"}`}
            style={{ 
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "17px", // Slightly reduced from 19px to prevent overflow on 3rd card
              lineHeight: "32px", // Adjusted line height from 42px
              fontWeight: 400
            }}
          >
            <span className={`mt-3 w-1.5 h-1.5 rounded-full shrink-0 ${pkg.isFeatured ? 'bg-black' : 'bg-white'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="mt-auto pt-4"> {/* mt-auto pushes button to the bottom, pt-4 adds breathing room */}
        <button
          onClick={scrollToContact}
          style={{
            width: '100%',
            maxWidth: '375px',
            height: '50px',
            borderRadius: '16px',
            fontFamily: "'Alata', sans-serif"
          }}
          className={`mx-auto flex items-center justify-center font-bold transition-all duration-300 cursor-pointer
            ${
              pkg.isFeatured
                ? "bg-[#F59121] text-white hover:bg-[#e07d10]" 
                : "bg-white text-black hover:bg-gray-200"
            }`}
        >
          {pkg.buttonText}
        </button>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}