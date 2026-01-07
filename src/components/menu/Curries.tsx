import React from "react";

export default function DetailedMenu() {
  const menuData = [
    {
      category: "STARTERS",
      items: [
        { name: "SAMOSA / SAMOSA CHAAT", desc: "(Meat or Veg)" },
        { name: "PAKORA", desc: "(Chicken, Vegetables or Mixed)" },
        { name: "VIRAL DONER KEBAB", desc: "Chef's special trend" },
        { name: "DESI WINGS / HOT FLAME WINGS", desc: "" },
        { name: "MURGH CHATT", desc: "" },
        { name: "BUTTERY CHICKEN DRUMSTICKS", desc: "" },
        { name: "POTATO CASHEW-NUT ROLL", desc: "" },
        { name: "LAJAWAB ROAST POTATOES", desc: "" },
      ],
    },
    {
      category: "TANDOORI SPECIALITIES",
      items: [
        { name: "CHICKEN TIKKA", desc: "Boneless chicken marinated in yogurt & medium spices." },
        { name: "TANDOORI KING PRAWNS", desc: "Marinated with fresh herbs and spices." },
        { name: "CHICKEN SASLIK", desc: "Marinated in ginger and mustard, charcoal roasted." },
        { name: "HARIYALI / MALAI KEBAB", desc: "Chef Buddy Special" },
      ],
    },
    {
      category: "CHEF BUDDY SPECIALITIES",
      items: [
        { name: "BUTTER CHICKEN (MURGH MAKHANI)", desc: "Rich and creamy mild sauce." },
        { name: "MEHBOOBA CHICKEN", desc: "Charcoaled chicken with capsicums, tomatoes & cream." },
        { name: "MANGO CHICKEN", desc: "Cooked with mango, mild spices and fresh cream." },
        { name: "CHICKEN SILSILAY", desc: "Hot spicy dish with coconut, lemon & chilli." },
        { name: "RAJA BABU", desc: "Lamb cooked with spiced potatoes, medium hot." },
        { name: "LAMB KALO BHUNA", desc: "Traditional slow-cooked dark lamb curry." },
      ],
    },
    {
      category: "BIRIYANI & CLASSICS",
      items: [
        { name: "CHEF BUDDY HANDI BIRIYANI", desc: "Lamb or Beef" },
        { name: "KASHMIRI KORMA", desc: "Cooked with fruit, cream and special gravy." },
        { name: "LAMB/CHICKEN CHILLI GARLIC", desc: "Cooked with fresh green chilli & garlic." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] py-16 px-4 font-serif">
      {/* Container with Gold Border Effect */}
      <div className="max-w-5xl mx-auto border-2 border-[#D4AF37]/30 p-4 md:p-10 relative bg-[#0D0D0D] shadow-2xl">
        
        {/* Top Decorative Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]"></div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="tracking-[0.5em] text-xs uppercase mb-2 text-[#D4AF37]/80">Chef Buddy Presents</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 playfair tracking-tight text-white">MENU</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-20 bg-[#D4AF37]/40"></div>
            <span className="text-xl italic">Authentic Indian Cuisine</span>
            <div className="h-[1px] w-20 bg-[#D4AF37]/40"></div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {menuData.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-bold border-b border-[#D4AF37]/20 pb-2 mb-6 tracking-widest text-white uppercase italic">
                {section.category}
              </h2>
              {section.items.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-1 border-b border-dotted border-[#D4AF37]/30"></div>
                    <span className="text-sm">★</span>
                  </div>
                  {item.desc && (
                    <p className="text-xs text-gray-500 mt-1 italic font-sans uppercase tracking-tighter">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Special Side Section (Veg & Sides) */}
          <div className="md:col-span-2 mt-10 p-8 border border-[#D4AF37]/10 bg-black/40 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-bold mb-3 text-white underline decoration-[#D4AF37]">RICE & BREADS</h4>
                <p className="text-sm text-gray-400">Pilau, Mughali, Special Fried Rice, Garlic Naan, Paratha</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-white underline decoration-[#D4AF37]">DESSERTS</h4>
                <p className="text-sm text-gray-400">Sticky Mango Rice, Rice Pudding, Gajar Halwa, Jorda Rice</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-white underline decoration-[#D4AF37]">ACCOMPANIMENTS</h4>
                <p className="text-sm text-gray-400">Raita, Fruit Salad, Cashew-nut Salad, Mixed Chutneys</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 text-center border-t border-[#D4AF37]/20 pt-10">
          <p className="text-sm tracking-widest mb-4">EDINBURGH & SURROUNDINGS (50 MILES)</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-sans font-bold">
            <span className="bg-[#D4AF37] text-black px-4 py-1 rounded-full">📞 +44 7833-620181</span>
            <span className="border border-[#D4AF37] px-4 py-1 rounded-full italic">Customised Menus Available</span>
          </div>
        </div>

        {/* Bottom Decorative Corners */}
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]"></div>
      </div>
      
      <p className="text-center mt-10 text-gray-600 text-xs">© 2026 CHEF BUDDY • FINE DINING EXPERIENCE</p>
    </div>
  );
}