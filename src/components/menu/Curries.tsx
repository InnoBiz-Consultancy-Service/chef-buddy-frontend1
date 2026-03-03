"use client";
import Image from "next/image";

interface MenuItem {
  name: string;
  desc: string;
}

interface MenuSection {
  category: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    category: "STARTERS & SMALL PLATES",
    items: [
      {
        name: "SAMOSA / SAMOSA CHAAT",
        desc: "Meat or Vegetable options available",
      },
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
      {
        name: "CHICKEN TIKKA",
        desc: "Diced boneless chicken marinated in yogurt & medium spices.",
      },
      { name: "TANDOORI GRILL DRUMSTICK", desc: "" },
      {
        name: "TANDOORI KING PRAWNS",
        desc: "Marinated in yogurt with fresh herbs and spices.",
      },
      {
        name: "CHICKEN SASLIK",
        desc: "Ginger & mustard marinated, charcoal roasted.",
      },
      { name: "HARIYALI / MALAI KEBAB", desc: "Chef Buddy Special Selections" },
    ],
  },
  {
    category: "CHEF BUDDY SPECIALITIES",
    items: [
      {
        name: "BUTTER CHICKEN (MURGH MAKHANI)",
        desc: "The classic rich & creamy delicacy.",
      },
      {
        name: "CHEF BUDDY SPECIAL",
        desc: "Chicken & succulent king prawns in a rich mild sauce.",
      },
      { name: "CHICKEN TIKKA MASALA", desc: "" },
      { name: "PANEER TIKKA MASALA / MALAI KOFTA", desc: "" },
      {
        name: "MEHBOOBA CHICKEN",
        desc: "Charcoaled chicken with capsicums, tomatoes & cream.",
      },
      {
        name: "MANGO CHICKEN",
        desc: "Finished with fresh cream and sliced almonds.",
      },
      {
        name: "CHICKEN SILSILAY",
        desc: "Hot spicy dish with coconut, lemon & chilli.",
      },
      {
        name: "JAIPURI CHICKEN",
        desc: "Punjabi masala, mushrooms, and capsicums.",
      },
      {
        name: "LAL MIRCH",
        desc: "Red peppers & master paste - West Bengal style.",
      },
      { name: "RAJA BABU", desc: "Lamb with spiced potatoes. Medium hot." },
      {
        name: "HARRI CHICKEN",
        desc: "Tangy flavor with yogurt and mango chutney.",
      },
      {
        name: "KASHMIRI KORMA",
        desc: "Cooked with fruit, cream and special gravy.",
      },
      {
        name: "CHILLI GARLIC (LAMB/CHICKEN)",
        desc: "Fresh green chilli, garlic & peppers. Fairly hot.",
      },
      { name: "LAMB GARAM FRY / KALO BHUNA", desc: "" },
      { name: "LAMB OR CHICKEN SAG", desc: "Fresh spinach & garlic infusion." },
    ],
  },
  {
    category: "SEAFOOD DISHES",
    items: [
      {
        name: "TANDOORI KING PRAWN MASALA",
        desc: "Yogurt based sauce with medium spices.",
      },
      {
        name: "KING PRAWN JAIPURI",
        desc: "Shell-on prawns with mushrooms & Punjabi masala.",
      },
      { name: "KING PRAWN SAG", desc: "Spinach, garlic, ginger and cumin." },
      {
        name: "FISH CURRY",
        desc: "Bengali speciality in tantalising pickle masala.",
      },
      {
        name: "KING PRAWN BALTI SPECIAL",
        desc: "Traditional balti with garlic & lemon juice.",
      },
    ],
  },
  {
    category: "VEGETARIAN MAINS",
    items: [
      {
        name: "VEGETABLE KARAHI",
        desc: "Tomato puree, vinegar, and green chillies.",
      },
      {
        name: "PALAK PANIR",
        desc: "Fresh spinach with home-made cottage cheese.",
      },
      {
        name: "SABZI JALFREEZIE",
        desc: "Mixed vegetables in a blend of fresh ingredients.",
      },
      {
        name: "CHANA MASALA",
        desc: "Chickpeas with lentils, herbs and spices.",
      },
    ],
  },
];

const heroImages: string[] = [
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
];

const sectionImages: Record<number, string> = {
  0: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
  1: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  2: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
  3: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&q=80",
  4: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80",
};

const bottomSections = [
  {
    title: "Biryani & Classics",
    text: "Handi Biryani (Lamb/Beef), Lamb/Prawn/Veg Biryani. Classics: Bhuna, Pathia, Rogan Josh, Madras.",
  },
  {
    title: "Accompaniments",
    text: "Popadoms & Rainbow Papad. Chutneys: Mango, Garlic, Pineapple, Mint Sauce, Kasundi. Raita & Salads.",
  },
  {
    title: "Vegetarian Sides",
    text: "Sag Aloo, Bombay Aloo, Bhindi, Brinzal, Tarka Dal, Mixed Vegetables.",
  },
];

const quickSections = [
  { title: "Rice", text: "Pilau, Mughali, Special Fried, Coconut" },
  { title: "Breads", text: "Naan, Paratha, Aloo Paratha, Chapati" },
  { title: "Desserts", text: "Sticky Mango Rice, Rice Pudding, Halwa, Jorda" },
  { title: "Kids Menu", text: "Fries, Nuggets, Burgers, Fried Chicken" },
];

export default function CompleteChefMenu() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-display">
      {/* ── Hero Banner ── */}
      <div className="relative h-60 sm:h-[340px] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
          {heroImages.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${i > 0 ? "hidden sm:block" : ""}`}
            >
              <Image
                width={500}
                height={500}
                src={src}
                alt=""
                className="w-full h-full object-cover brightness-[0.3] saturate-[0.8]"
              />
            </div>
          ))}
        </div>

        {/* linear overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(5,5,5,0.5)] via-[rgba(5,5,5,0.15)] to-[rgba(5,5,5,0.9)]" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <div className="tracking-[0.25em] sm:tracking-[0.5em] text-[10px] sm:text-xs text-[#D4AF37] font-body font-medium uppercase mb-2.5">
            Chef Buddy Edinburgh
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-normal tracking-wide m-0 leading-none font-display">
            MENU
          </h1>
          <div className="flex items-center gap-2.5 mt-3.5 text-[#999] italic text-xs sm:text-sm font-display">
            <span className="h-px w-6 sm:w-12 bg-linear-to-r from-transparent to-[#D4AF37]" />
            Authentic Regional Flavours
            <span className="h-px w-6 sm:w-12 bg-linear-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-3.5 sm:px-5 pt-7 pb-9 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-16">
        {menuData.map((section, idx) => {
          const imgSrc = sectionImages[idx];
          const imageOnRight = idx % 2 === 0;

          return (
            <div key={idx} className="mb-9 sm:mb-14">
              {/* Mobile: full-width image banner */}
              {imgSrc && (
                <div className="relative mb-3.5 sm:hidden">
                  <Image
                    width={600}
                    height={600}
                    src={imgSrc}
                    alt={section.category}
                    className="w-full h-[150px] object-cover block brightness-[0.6] saturate-[0.85]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-linear-to-t from-[#050505] to-transparent" />
                </div>
              )}

              {/* Desktop/Tablet layout */}
              <div
                className={`hidden sm:grid items-start ${
                  imgSrc
                    ? "grid-cols-[1fr_200px] lg:grid-cols-[1fr_280px] gap-5 lg:gap-9"
                    : "grid-cols-1"
                }`}
                style={{ direction: imageOnRight ? "ltr" : "rtl" }}
              >
                <div style={{ direction: "ltr" }}>
                  <SectionHeader title={section.category} />
                  <ItemsList items={section.items} />
                </div>
                {imgSrc && (
                  <div className="relative mt-1.5" style={{ direction: "ltr" }}>
                    <div
                      className={`absolute -top-1.5 w-full h-full border border-[rgba(212,175,55,0.2)] pointer-events-none ${
                        imageOnRight ? "-left-1.5" : "-right-1.5"
                      }`}
                    />
                    <Image
                      width={600}
                      height={600}
                      src={imgSrc}
                      alt={section.category}
                      className="w-full h-[190px] lg:h-60 object-cover block brightness-75 saturate-[0.85]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-linear-to-t from-[rgba(5,5,5,0.8)] to-transparent" />
                  </div>
                )}
              </div>

              {/* Mobile layout */}
              <div className="sm:hidden">
                <SectionHeader title={section.category} />
                <ItemsList items={section.items} />
              </div>
            </div>
          );
        })}

        {/* ── Bottom Grid ── */}
        <div className="border-t border-white/[0.06] pt-6 sm:pt-10 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mb-5 sm:mb-8">
            {bottomSections.map((s, i) => (
              <div key={i}>
                <h3 className="font-body text-xs font-semibold tracking-[0.18em] text-[#D4AF37] mb-2 uppercase">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#999] leading-relaxed m-0 font-body font-light">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {quickSections.map((s, i) => (
              <div
                key={i}
                className="py-3 px-2 sm:py-4 sm:px-3 border border-white/5 text-center"
              >
                <h4 className="font-body text-[11px] font-semibold tracking-[0.16em] text-[#D4AF37] m-0 mb-1.5 uppercase">
                  {s.title}
                </h4>
                <p className="text-[11px] text-[#666] m-0 font-body font-light">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BBQ Banner ── */}
        <div className="mt-8 sm:mt-14 relative overflow-hidden">
          <Image
            width={600}
            height={600}
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80"
            alt="BBQ"
            className="w-full h-[200px] sm:h-[180px] object-cover block brightness-[0.2] saturate-[0.6]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center border-y border-[rgba(212,175,55,0.25)] px-4 sm:px-5 text-center">
            <h2 className="font-body text-xs sm:text-[15px] font-semibold tracking-[0.12em] sm:tracking-[0.3em] text-[#D4AF37] m-0 mb-2 uppercase">
              BBQ Special Menus Available
            </h2>
            <p className="text-[10px] sm:text-xs text-[#aaa] tracking-widest uppercase font-body font-light leading-relaxed">
              Whole Chicken &bull; Wings &bull; Lamb &bull; Tandoori King Prawn
              &bull; Fish &bull; Special Grill Sauces
            </p>
            <p className="mt-2.5 text-[13px] sm:text-[15px] italic font-medium text-white font-display">
              &ldquo;Menus can be fully customised to your preference&rdquo;
            </p>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-8 sm:mt-14 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-12 mb-6">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#666] uppercase mb-1.5 font-body">
                Call for Booking
              </p>
              <p className="text-xl sm:text-2xl font-semibold m-0 font-display">
                +44 7833-620181
              </p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/[0.08]" />
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#666] uppercase mb-1.5 font-body">
                Email Enquiry
              </p>
              <p className="text-sm sm:text-base font-medium m-0 font-display break-all">
                chefbuddyscot@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center px-4 pt-5 pb-7 text-[10px] tracking-[0.35em] text-[#333] uppercase font-body">
        Experience Excellence &bull; Edinburgh & Beyond
      </p>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-5">
      <h2 className="font-body text-sm font-semibold tracking-[0.22em] text-[#D4AF37] m-0 pb-2.5 border-b border-[rgba(212,175,55,0.2)]">
        {title}
      </h2>
    </div>
  );
}

function ItemsList({ items }: { items: MenuItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="py-2 sm:py-2.5 border-b border-white/[0.03]">
          <div className="flex items-baseline gap-1.5">
            <h3 className="text-[15px] sm:text-base font-medium m-0 font-display tracking-wide leading-tight shrink sm:shrink-0">
              {item.name}
            </h3>
            <span className="hidden sm:block flex-1 border-b border-dotted border-[rgba(212,175,55,0.15)] min-w-3 self-center mb-0.5" />
            <span className="text-[7px] text-[rgba(212,175,55,0.3)] shrink-0">
              ◆
            </span>
          </div>
          {item.desc && (
            <p className="mt-1 text-[11px] sm:text-xs text-[#777] italic font-body font-light tracking-tight leading-relaxed">
              {item.desc}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
