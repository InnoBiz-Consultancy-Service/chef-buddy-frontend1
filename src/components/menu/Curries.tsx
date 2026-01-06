import Image from "next/image";
import mutton from "../../assets/images/Mutton_si.jpg";
import tikka from "../../assets/images/Chikken_tikka.jpg";
import poneer from "../../assets/images/Poneer_tikka.jpg";
import dal from "../../assets/images/Spicy_dal.jpg";
import lamb from "../../assets/images/Spicy_lamb.jpg";
import butter from "../../assets/images/Butter_chicken.jpg";

export default function Curries() {
  const dishes = [
    {
      id: 1,
      name: "Mutton Leg Roast",
      image: mutton,
      desc: "Slow-cooked in yogurt, mango chutney and herbs with bold spices.",
      customClass: "lg:h-[456px] lg:row-span-2",
    },
    {
      id: 2,
      name: "Chicken Tikka Masala",
      image: tikka,
      desc: "Marinated chicken cooked in mild flavoured sauce with fresh herbs and spices.",
      customClass: "lg:h-[270px]",
    },
    {
      id: 3,
      name: "Paneer Tikka Masala",
      image: poneer,
      desc: "Marinated paneer cooked in mild flavoured sauce with fresh herbs and spices.",
      customClass: "lg:h-[456px] lg:row-span-2",
    },
    {
      id: 4,
      name: "Spicy Dal",
      image: dal,
      desc: "Lentils cooked in mild flavoured sauce with fresh herbs and spices.",
      customClass: "lg:h-[506px] lg:row-span-2 order-last lg:order-none",
    },
    {
      id: 5,
      name: "Spicy Lamb Curry",
      image: lamb,
      desc: "Tender pieces of lamb cooked with fresh green chilli, garlic, and peppers.",
      customClass: "lg:h-[322px]",
    },
    {
      id: 6,
      name: "Butter Chicken",
      image: butter,
      desc: "Charcoaled chicken marinated with onions, capsicums, and cream.",
      customClass: "lg:h-[322px]",
    },
  ];

  return (
    <div className="bg-white pb-20">
      <h1 className="text-center text-3xl font-bold p-12 mt-8" style={{ fontFamily: "'Alata', sans-serif" }}>
        Curries & Mains
      </h1>

      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 max-w-[1416px] mx-auto px-4 auto-rows-auto">
        {dishes.map((item) => (
          <div key={item.id} className={`flex flex-col lg:block ${item.customClass}`}>
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-full w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 lg:group-hover:scale-110"
              />

              {/* Overlay: Only on Large Screens (lg) */}
              <div className="hidden lg:flex absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 items-center justify-center">
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[327px] h-[141px] p-6 rounded-[50px] bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Alata', sans-serif" }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Text: Only visible below 'lg' */}
            <div className="mt-3 text-center lg:hidden">
              <h3 className="text-sm font-bold text-gray-800" style={{ fontFamily: "'Alata', sans-serif" }}>
                {item.name}
              </h3>
              <p className="text-[10px] text-gray-500 leading-tight mt-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}