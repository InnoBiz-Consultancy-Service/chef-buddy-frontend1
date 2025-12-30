"use client";

import Image from "next/image";
import { useState } from "react";
import curry from "../../../assets/images/si_circle.jpg";
import kebab from "../../../assets/images/si_circle1.jpg";
import rice from "../../../assets/images/si_circle2.jpg";
import dessert from "../../../assets/images/si_circle3.jpg";
import vegan from "../../../assets/images/si_circle4.jpg";

const categories = [
  { name: "Curries & Mains", icon: curry },
  { name: "Starters & Kebabs", icon: kebab },
  { name: "Breads & Rice", icon: rice },
  { name: "Desserts", icon: dessert },
  { name: "Vegan", icon: vegan },
];

export default function Signature() {
  const [active, setActive] = useState(categories[0].name);

  return (
    <section className="py-24 px-4 max-w-[1440px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-[48px] font-bold">Signature Dishes</h2>
        <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto text-[14px] md:text-[17px]">
          Authentic Indian flavors crafted with fresh ingredients and bold spices.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-start gap-10 mb-16 max-w-[1416px] mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex items-center gap-3 transition font-medium
              ${active === cat.name ? "text-black" : "text-gray-400 hover:text-black"}
            `}
          >
            <span className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center border border-gray-100">
              <Image src={cat.icon} alt={cat.name} width={40} height={40} className="object-cover" />
            </span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid - Gap overlap thik korar jonno auto-rows-min bebohar kora hoyeche */}
      <div className="grid gap-6 md:gap-8 grid-cols-2 lg:grid-cols-3 max-w-[1416px] mx-auto auto-rows-auto">
        
        {/* Dish 1 - Left Column: Large */}
       <div className="relative rounded-2xl overflow-hidden group h-[300px] lg:h-[456px] lg:row-span-2 w-full lg:w-[464px]">
  {/* Image */}
  <Image 
    src="/images/dishes/mutton.jpg" 
    alt="Mutton Leg Roast" 
    fill 
    className="object-cover transition-transform duration-700 group-hover:scale-110" 
  />

  {/* Overlay - Optional, if you want a slight dark tint overall */}
  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />

  {/* Bottom Content Box (As per your reference image) */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-black/60 backdrop-blur-md rounded-[32px] p-6 text-center text-white transition-all duration-500 group-hover:bg-black/75">
    
    <h3 className="text-xl md:text-2xl font-semibold mb-2">
      Mutton Leg Roast
    </h3>
    
    <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-2">
      Slow-cooked in yogurt, mango chutney and herbs with bold spices.
    </p>

    
  </div>
</div>

        {/* Dish 2 - Middle Column: Small */}
        <div className="relative rounded-2xl overflow-hidden group  h-[180px] lg:h-[270px] w-[192px] lg:w-[464px]">
          <Image src="/images/dishes/tikka.jpg" alt="Chicken" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
         
       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[327px] h-[141px] bg-black/50 backdrop-blur-lg rounded-[50px] flex flex-col items-center justify-center px-6 text-center text-white transition-all duration-500 group-hover:bg-black/70 shadow-[0_32px_40px_rgba(0,0,0,0.1)]">
  
  {/* Title */}
  <h3 className="text-xl md:text-[24px] font-semibold mb-1">
    Chicken Tikka Masala
  </h3>
  
  {/* Description */}
  <p className="text-xs md:text-[14px] text-gray-200 leading-tight line-clamp-3">
   Marinated chicken cooked in mild flavoured sauce with fresh herbs and spices.
  </p>

</div>  
        </div>

        {/* Dish 3 - Right Column: Large */}
        <div className="relative rounded-2xl overflow-hidden group  h-[250px] lg:h-[456px] lg:row-span-2 w-[192px] lg:w-[464px]">
          <Image src="/images/dishes/paneer.jpg" alt="Paneer" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-black/60 backdrop-blur-md rounded-[32px] p-6 text-center text-white transition-all duration-500 group-hover:bg-black/75">
    
    <h3 className="text-xl md:text-2xl font-semibold mb-2">
     Paneer Tikka Masala
    </h3>
    
    <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-2">
      Marinated paneer cooked in mild flavoured sauce with fresh herbs and spices.

    </p>

    
  </div>
        </div>

        {/* Dish 5 (Spicy Dal) - Middle Column: Large (Upore faka jayga puron korbe) */}
        {/* Important: Eitike code-er serial-e upore anle faka jayga thakbe na */}
        <div className="relative rounded-2xl overflow-hidden group  h-[280px] lg:h-[506px] lg:row-span-2 order-last lg:order-none w-[192px] lg:w-[464px]">
          <Image src="/images/dishes/dal.jpg" alt="Dal" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div 
  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center px-8 text-center text-white transition-all duration-500 group-hover:bg-black/70"
  style={{
    width: '327px',
    height: '141px',
    borderRadius: '50px',
    boxShadow: '0px 32px 40px 0px rgba(0, 0, 0, 0.10)' 
  }}
>
  {/* Title */}
  <h3 className="text-[22px] md:text-[24px] font-semibold leading-tight mb-2">
   Spicy Dal
  </h3>
  
  {/* Description */}
  <p className="text-[13px] md:text-[14px] text-gray-200 leading-snug line-clamp-3">
   Marinated paneer cooked in mild flavoured sauce with fresh herbs and spices.

  </p>
</div>
        </div>

        {/* Dish 4 - Left Column (Bottom): Small */}
        <div className="relative rounded-2xl overflow-hidden group w-full h-[180px] lg:h-[322px] w-[192px] lg:w-[464px]">
          <Image src="/images/dishes/lamb.jpg" alt="Lamb" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div 
  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center px-10 text-center text-white transition-all duration-500 group-hover:bg-black/60"
  style={{
    width: '327px',
    height: '141px',
    borderRadius: '50px',
    boxShadow: '0px 32px 40px 0px rgba(0, 0, 0, 0.10)' 
  }}
>
  {/* Title */}
  <h2 className="text-[24px] font-semibold leading-tight mb-2 tracking-wide">
    Spicy Lamb Curry
  </h2>
  
  {/* Description */}
  <p className="text-[14px] font-medium text-gray-100 leading-[1.4] opacity-90 line-clamp-3">
   Tender pieces of lamb or chicken cooked with fresh green chilli,garlic,peppers and coriander.
Fairly hot.
  </p>
</div>
        </div>

        {/* Dish 6 - Right Column (Bottom): Small */}
        <div className="relative rounded-2xl overflow-hidden group  h-[180px] lg:h-[322px] w-[192px] lg:w-[464px]">
          <Image src="/images/dishes/butter.jpg" alt="Butter Chicken" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div 
  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center text-center text-white transition-all duration-500 group-hover:bg-black/60 shadow-[0_32px_40px_rgba(0,0,0,0.1)]"
  style={{
    width: '327px',
    height: '141px',
    borderRadius: '50px',
  }}
>
  {/* Title - Image matching typography */}
  <h2 className="text-[24px] font-semibold leading-tight mb-1 tracking-tight">
   Butter Chicken
  </h2>
  
  {/* Description - Updated based on your Figma screenshot */}
  <div className="flex items-center justify-center px-6">
    <p 
      className="font-['Nunito_Sans'] font-normal text-white leading-[17px] text-[12px] opacity-100 line-clamp-3"
      style={{
        width: '272px',
        height: '51px',
      }}
    >
     A special preparation of charcoaled chicken marinated with onions, capsicums, tomatoes,
curry paste, cream & coriander
    </p>
  </div>
</div>
        </div>

      </div>
    </section>
  );
}