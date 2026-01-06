import Image from "next/image";
import stickyMango from "../../assets/images/mango sticky rice.jpg";
import ricePudding from "../../assets/images/rice puding.jpg";
import halwa from "../../assets/images/gazar halwa.jpg";
import jorda from "../../assets/images/jorda.jpg";

export default function Desserts() {
  const desserts = [
    { id: 1, name: "Sticky Mango Rice", image: stickyMango, desc: "A sweet and creamy treat made with glutinous rice and fresh mango." },
    { id: 2, name: "Rice Pudding", image: ricePudding, desc: "A comforting dessert made with milk and rice, garnished with nuts." },
    { id: 3, name: "Halwa", image: halwa, desc: "A rich sweet confection made from carrots, sautéed in ghee." },
    { id: 4, name: "Jorda", image: jorda, desc: "A traditional festive sweet rice dish colored with saffron." },
  ];

  return (
    <div className="bg-white pb-20">
      <h1 className="text-center text-3xl font-bold p-12 mt-8" style={{ fontFamily: "'Alata', sans-serif" }}>
        Sweet Desserts
      </h1>

      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-[1416px] mx-auto px-4">
        {desserts.map((item) => (
          <div key={item.id} className="flex flex-col lg:block">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[400px] w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 lg:group-hover:scale-110"
              />
              
              {/* Overlay: Only visible on Large Screens (lg) */}
              <div className="hidden lg:flex absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 flex-col items-center justify-center">
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[280px] h-[141px] p-6 rounded-[40px] bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Alata', sans-serif" }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-3" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Text: Only visible below 'lg' screens */}
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