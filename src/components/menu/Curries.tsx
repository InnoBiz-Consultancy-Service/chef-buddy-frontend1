import React from "react";

export default function CompleteChefMenu() {
  const menuData = [
    {
      category: "STARTERS & SMALL PLATES",
      items: [
        { name: "SAMOSA / SAMOSA CHAAT", desc: "Meat or Vegetable options available" },
        { name: "PAKORA", desc: "Chicken, Vegetables or Mixed" },
        { name: "VIRAL DONER KEBAB", desc: "The trending sensation" },
        { name: "DESI WINGS / HOT FLAME WINGS", desc: "" },
        { name: "MURGH CHATT / BUTTERY DRUMSTICKS", desc: "" },
        { name: "POTATO CASHEW-NUT ROLL", desc: "" },
        { name: "LAJAWAB ROAST POTATOES", desc: "" },
      ],
    },
    {
      category: "TANDOORI SPECIALITIES",
      items: [
        { name: "CHICKEN TIKKA", desc: "Diced boneless chicken marinated in yogurt & medium spices." },
        { name: "TANDOORI GRILL DRUMSTICK", desc: "" },
        { name: "TANDOORI KING PRAWNS", desc: "Marinated in yogurt with fresh herbs and spices." },
        { name: "CHICKEN SASLIK", desc: "Ginger & mustard marinated, charcoal roasted." },
        { name: "HARIYALI / MALAI KEBAB", desc: "Chef Buddy Special Selections" },
      ],
    },
    {
      category: "CHEF BUDDY SPECIALITIES",
      items: [
        { name: "BUTTER CHICKEN (MURGH MAKHANI)", desc: "The classic rich & creamy delicacy." },
        { name: "CHEF BUDDY SPECIAL", desc: "Chicken & succulent king prawns in a rich mild sauce." },
        { name: "CHICKEN TIKKA MASALA", desc: "" },
        { name: "PANEER TIKKA MASALA / MALAI KOFTA", desc: "" },
        { name: "MEHBOOBA CHICKEN", desc: "Charcoaled chicken with capsicums, tomatoes & cream." },
        { name: "MANGO CHICKEN", desc: "Finished with fresh cream and sliced almonds." },
        { name: "CHICKEN SILSILAY", desc: "Hot spicy dish with coconut, lemon & chilli." },
        { name: "JAIPURI CHICKEN", desc: "Punjabi masala, mushrooms, and capsicums." },
        { name: "LAL MIRCH", desc: "Red peppers & master paste - West Bengal style." },
        { name: "RAJA BABU", desc: "Lamb with spiced potatoes. Medium hot." },
        { name: "HARRI CHICKEN", desc: "Tangy flavor with yogurt and mango chutney." },
        { name: "KASHMIRI KORMA", desc: "Cooked with fruit, cream and special gravy." },
        { name: "CHILLI GARLIC (LAMB/CHICKEN)", desc: "Fresh green chilli, garlic & peppers. Fairly hot." },
        { name: "LAMB GARAM FRY / KALO BHUNA", desc: "" },
        { name: "LAMB OR CHICKEN SAG", desc: "Fresh spinach & garlic infusion." },
      ],
    },
    {
      category: "SEAFOOD DISHES",
      items: [
        { name: "TANDOORI KING PRAWN MASALA", desc: "Yogurt based sauce with medium spices." },
        { name: "KING PRAWN JAIPURI", desc: "Shell-on prawns with mushrooms & Punjabi masala." },
        { name: "KING PRAWN SAG", desc: "Spinach, garlic, ginger and cumin." },
        { name: "FISH CURRY", desc: "Bengali speciality in tantalising pickle masala." },
        { name: "KING PRAWN BALTI SPECIAL", desc: "Traditional balti with garlic & lemon juice." },
      ],
    },
    {
      category: "VEGETARIAN MAINS",
      items: [
        { name: "VEGETABLE KARAHI", desc: "Tomato puree, vinegar, and green chillies." },
        { name: "PALAK PANIR", desc: "Fresh spinach with home-made cottage cheese." },
        { name: "SABZI JALFREEZIE", desc: "Mixed vegetables in a blend of fresh ingredients." },
        { name: "CHANA MASALA", desc: "Chickpeas with lentils, herbs and spices." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-4 md:px-8 font-serif">
      <div className="max-w-6xl mx-auto border border-[#D4AF37]/30 p-4 md:p-12 bg-[#0A0A0A] relative shadow-2xl">
        
        {/* Decorative Elements */}
        <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]"></div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold playfair tracking-tighter text-white mb-2">MENU</h1>
          <p className="text-[#D4AF37] tracking-[0.6em] uppercase text-xs font-sans">Chef Buddy Edinburgh</p>
          <div className="mt-6 flex items-center justify-center gap-4 text-gray-400 italic text-sm">
            <span className="h-px w-10 bg-[#D4AF37]/40"></span>
            Authentic Regional Flavours
            <span className="h-px w-10 bg-[#D4AF37]/40"></span>
          </div>
        </div>

        {/* Multi-Column Menu Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {menuData.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h2 className="text-[#D4AF37] text-xl font-bold tracking-widest border-b border-[#D4AF37]/20 pb-2 mb-6 uppercase">
                {section.category}
              </h2>
              <div className="space-y-5">
                {section.items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-md font-medium group-hover:text-[#D4AF37] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex-1 mx-2 border-b border-white/5 group-hover:border-[#D4AF37]/20"></div>
                      <span className="text-[10px] text-[#D4AF37]/40">◆</span>
                    </div>
                    {item.desc && <p className="text-[10px] text-gray-500 italic mt-1 font-sans uppercase tracking-tight">{item.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Special Grid for Smaller Sections */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 pt-10 border-t border-white/5">
            <div className="space-y-4">
               <h2 className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase">Biryani & Classics</h2>
               <p className="text-[11px] text-gray-400 leading-relaxed uppercase">
                Handi Biryani (Lamb/Beef), Lamb/Prawn/Veg Biryani. Classics: Bhuna, Pathia, Rogan Josh, Madras.
               </p>
            </div>
            <div className="space-y-4">
               <h2 className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase">Accompaniments</h2>
               <p className="text-[11px] text-gray-400 leading-relaxed uppercase">
                Popadoms & Rainbow Papad. Chutneys: Mango, Garlic, Pineapple, Mint Sauce, Kasundi. Raita & Salads.
               </p>
            </div>
            <div className="space-y-4">
               <h2 className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase">Vegetarian Sides</h2>
               <p className="text-[11px] text-gray-400 leading-relaxed uppercase">
                Sag Aloo, Bombay Aloo, Bhindi, Brinzal, Tarka Dal, Mixed Vegetables.
               </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 text-center">
             <div className="p-3 border border-white/5">
                <h3 className="text-[#D4AF37] text-[10px] font-bold uppercase mb-1">Rice</h3>
                <p className="text-[9px] text-gray-500">Pilau, Mughali, Special Fried, Coconut</p>
             </div>
             <div className="p-3 border border-white/5">
                <h3 className="text-[#D4AF37] text-[10px] font-bold uppercase mb-1">Breads</h3>
                <p className="text-[9px] text-gray-500">Naan, Paratha, Aloo Paratha, Chapati</p>
             </div>
             <div className="p-3 border border-white/5">
                <h3 className="text-[#D4AF37] text-[10px] font-bold uppercase mb-1">Desserts</h3>
                <p className="text-[9px] text-gray-500">Sticky Mango Rice, Rice Pudding, Halwa, Jorda</p>
             </div>
             <div className="p-3 border border-white/5">
                <h3 className="text-[#D4AF37] text-[10px] font-bold uppercase mb-1">Kids Menu</h3>
                <p className="text-[9px] text-gray-500">Fries, Nuggets, Burgers, Fried Chicken</p>
             </div>
          </div>
        </div>

        {/* BBQ & Customization Banner */}
        <div className="mt-16 bg-[#D4AF37]/5 p-6 border-y border-[#D4AF37]/20 text-center">
           <h2 className="text-[#D4AF37] text-lg font-bold tracking-widest mb-2 uppercase">BBQ Special Menus Available</h2>
           <p className="text-[10px] text-gray-400 uppercase tracking-widest">Whole Chicken • Wings • Lamb • Tandoori King Prawn • Fish • Special Grill Sauces</p>
           <p className="text-xs mt-4 text-white italic font-bold">"Menus can be fully customised to your preference"</p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="text-center">
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Call for Booking</p>
                    <p className="text-xl font-bold">+44 7833-620181</p>
                </div>
                <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                <div className="text-center">
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Email Enquiry</p>
                    <p className="text-sm font-medium">chefbuddyscot@gmail.com</p>
                </div>
            </div>
            
           
        </div>
      </div>
      <p className="text-center mt-8 text-gray-800 text-[9px] tracking-widest uppercase">Experience Excellence • Edinburgh & Beyond</p>
    </div>
  );
}