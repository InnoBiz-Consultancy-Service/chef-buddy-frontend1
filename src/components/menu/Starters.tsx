import Image from "next/image";
import chickenPakora from "../../assets/images/chicken pakora.jpg"
import haggisPakora from "../../assets/images/haggis pakora.jpg";
import vegPakora from "../../assets/images/veg pakora.jpg";
import tandoori from "../../assets/images/tandoori starters.jpg";
import murugChat from "../../assets/images/chicken chaat.jpg";
import shikhKebab from "../../assets/images/shikh.jpg";

export default function Starters() {
  const starters = [
    {
      id: 1,
      name: "Chicken Pakora",
      image: chickenPakora,
      desc: "Tender pieces of chicken coated in a spiced gram flour batter and deep-fried until golden.",
      customClass: "lg:h-[456px] lg:row-span-2",
    },
    {
      id: 2,
      name: "Haggis Pakora",
      image: haggisPakora,
      desc: "A unique fusion snack featuring traditional Scottish haggis fried in a savory Indian batter.",
      customClass: "lg:h-[270px]",
    },
    {
      id: 3,
      name: "Veg Pakora",
      image: vegPakora,
      desc: "Crispy fritters made from a variety of fresh vegetables mixed with seasoned lentil flour.",
      customClass: "lg:h-[456px] lg:row-span-2",
    },
    {
      id: 4,
      name: "Tandoori Starters",
      image: tandoori,
      desc: "Meats and vegetables marinated in yogurt and spices, charred to perfection in a clay oven.",
      customClass: "lg:h-[506px] lg:row-span-2 order-last lg:order-none",
    },
    {
      id: 5,
      name: "Murug Chat",
      image: murugChat,
      desc: "A tangy and refreshing salad-style starter made with shredded chicken and zesty spices.",
      customClass: "lg:h-[322px]",
    },
    {
      id: 6,
      name: "Sheekh Kebab",
      image: shikhKebab,
      desc: "Spiced minced meat (lamb or chicken) molded onto skewers and grilled to perfection.",
      customClass: "lg:h-[322px]",
    },
  ];

  return (
    <div className="bg-white pb-20">
      <h1 className="text-center text-3xl font-bold p-12 mt-8" style={{ fontFamily: "'Alata', sans-serif" }}>
        Starters & Kebabs
      </h1>

      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 max-w-[1416px] mx-auto px-4 auto-rows-auto">
        {starters.map((item) => (
          <div key={item.id} className={`flex flex-col lg:block ${item.customClass}`}>
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-full w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 lg:group-hover:scale-110"
              />

              {/* Desktop Overlay (Large Screen Only) */}
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

            {/* Mobile Text (Visible below 'lg' Screen) */}
            <div className="mt-3 text-center lg:hidden">
              <h3 className="text-sm font-bold text-gray-800" style={{ fontFamily: "'Alata', sans-serif" }}>
                {item.name}
              </h3>
              <p className="text-[10px] text-gray-500 leading-tight mt-1 px-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                {item.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}