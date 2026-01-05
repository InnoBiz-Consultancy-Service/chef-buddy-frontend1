import Image from "next/image";
import chickenPakora from "../../assets/images/chicken pakora.jpg"
import haggisPakora from "../../assets/images/haggis pakora.jpg";
import vegPakora from "../../assets/images/veg pakora.jpg";
import tandoori from "../../assets/images/tandoori starters.jpg";
import murugChat from "../../assets/images/chicken chaat.jpg";
import shikhKebab from "../../assets/images/shikh.jpg";
export default function Starters() {
  return (
    <div className="bg-white pb-20">
      <h1 className="text-center text-3xl font-bold p-12 mt-8"
      style={{ fontFamily: "'Alata', sans-serif" }}>Starters & Kebabs</h1>

      <div className="grid gap-3 md:gap-8 grid-cols-2 lg:grid-cols-3 max-w-[1416px] mx-auto auto-rows-auto">
        
        {/* Dish 1 - Chicken Pakora */}
        <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[456px] lg:row-span-2 w-full lg:w-[464px]">
          <Image src={chickenPakora} alt="Chicken Pakora" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
          <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                        bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                        md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                        bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2"
            style={{ fontFamily: "'Alata', sans-serif" }}
            >Chicken Pakora</h3>
            <p className="font-['Nunito_Sans'] text-xs md:text-sm text-gray-200 leading-relaxed line-clamp-3"
            style={{fontFamily: "'Nunito Sans', sans-serif"}}
            >
              Tender pieces of chicken coated in a spiced gram flour batter and deep-fried until golden and crispy.
            </p>
          </div>
        </div>

        {/* Dish 2 - Haggis Pakora */}
        <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[270px] w-full lg:w-[464px]">
          <Image src={haggisPakora} alt="Haggis Pakora" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                        bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                        md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                        bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center text-center text-white">
            <h3 className="text-xl md:text-[24px] font-bold mb-1"
            style={{ fontFamily: "'Alata', sans-serif" }}
            >Haggis Pakora</h3>
            <p className="font-['Nunito_Sans'] text-xs md:text-[14px] text-gray-200 leading-tight line-clamp-3"
            style={{fontFamily: "'Nunito Sans', sans-serif"}}>
              A unique fusion snack featuring traditional Scottish haggis fried in a savory, spiced Indian batter.
            </p>
          </div>
        </div>

        {/* Dish 3 - Veg Pakora */}
        <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[456px] lg:row-span-2 w-full lg:w-[464px]">
          <Image src={vegPakora} alt="Veg Pakora" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                        bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                        md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                        bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2"
           style={{ fontFamily: "'Alata', sans-serif" }}
            >Veg Pakora</h3>
            <p className="font-['Nunito_Sans'] text-sm md:text-base text-gray-200 leading-relaxed line-clamp-3"
            style={{fontFamily: "'Nunito Sans', sans-serif"}}>
              Crispy fritters made from a variety of fresh vegetables mixed with seasoned lentil flour.
            </p>
          </div>
        </div>

        {/* Dish 4 - Tandoori Starters */}
        <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[506px] lg:row-span-2 order-last lg:order-none w-full lg:w-[464px]">
          <Image src={tandoori} alt="Tandoori Starters" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                        bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                        md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                        bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center text-center text-white shadow-xl">
            <h3 className="text-[22px] md:text-[24px] font-bold leading-tight mb-2"
            style={{ fontFamily: "'Alata', sans-serif" }}
            >Tandoori Starters</h3>
            <p className="font-['Nunito_Sans'] text-[13px] md:text-[14px] text-gray-200 leading-snug line-clamp-3"
            style={{fontFamily: "'Nunito Sans', sans-serif"}}>
              A selection of succulent meats and vegetables marinated in yogurt and spices, charred to perfection in a clay oven.
            </p>
          </div>
        </div>

        {/* Dish 5 - Murug Chat */}
        <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[322px] w-full lg:w-[464px]">
          <Image src={murugChat} alt="Murug Chat" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                        bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                        md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                        bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center text-center text-white">
            <h3 className="text-[24px] font-bold leading-tight mb-2 tracking-wide"
            style={{ fontFamily: "'Alata', sans-serif" }}
            >Murug Chat</h3>
            <p className="font-['Nunito_Sans'] text-[14px] font-medium text-gray-100 leading-[1.4] opacity-90 line-clamp-3"
            style={{fontFamily: "'Nunito Sans', sans-serif"}}>
              A tangy and refreshing salad-style starter made with shredded chicken, chopped onions, and zesty spices.
            </p>
          </div>
        </div>
 <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[322px] w-full lg:w-[464px] ">
    <Image src={shikhKebab} alt="Butter Chicken" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                  bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                  md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                  bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center text-center text-white">
      <h2 className="text-[24px] font-semibold leading-tight mb-1 tracking-tight"
      style={{ fontFamily: "'Alata', sans-serif" }}
      >Sheekh Kebab</h2>
      <p className="font-['Nunito_Sans'] font-normal text-white leading-[17px] text-[12px] line-clamp-2 w-[272px]"
      style={{fontFamily: "'Nunito Sans', sans-serif"}}
      >Spiced minced meat (lamb or chicken) molded onto skewers and grilled.</p>
    </div>
  </div>
      </div>
    </div>
  );
}