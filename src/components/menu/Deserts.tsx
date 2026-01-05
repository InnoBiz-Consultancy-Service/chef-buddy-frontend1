import Image from "next/image";
// Ensure these paths match your asset folder structure
import stickyMango from "../../assets/images/mango sticky rice.jpg";
import ricePudding from "../../assets/images/rice puding.jpg";
import halwa from "../../assets/images/gazar halwa.jpg";
import jorda from "../../assets/images/jorda.jpg";

export default function Desserts() {
  const desserts = [
    {
      id: 1,
      name: "Sticky Mango Rice",
      image: stickyMango,
      desc: "A sweet and creamy treat made with glutinous rice, coconut milk, and fresh, ripe mango slices.",
    },
    {
      id: 2,
      name: "Rice Pudding",
      image: ricePudding,
      desc: "A comforting, slow-cooked dessert made with milk, sugar, and rice, often garnished with nuts and cardamom.",
    },
    {
      id: 3,
      name: "Halwa",
      image: halwa,
      desc: "A rich and dense sweet confection made from ingredients like semolina or carrots, sautéed in ghee and sugar.",
    },
    {
      id: 4,
      name: "Jorda",
      image: jorda,
      desc: "A traditional festive sweet rice dish colored with saffron and loaded with nuts, raisins, and aromatic spices.",
    },
  ];

  return (
    <div className="bg-white pb-20">
      <h1
        className="text-center text-3xl font-bold p-12 mt-8"
        style={{ fontFamily: "'Alata', sans-serif" }}
      >
        Sweet Desserts
      </h1>

      {/* Grid: 2 columns on mobile, 4 columns on large screens */}
      <div className="grid gap-3 md:gap-8 grid-cols-2 lg:grid-cols-4 max-w-[1416px] mx-auto px-4">
        {desserts.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[400px] w-full"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
            
            {/* Overlay Card */}
            <div
              className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                        bottom-2 w-[160px] h-[100px] p-[10px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                        md:bottom-6 md:w-[280px] md:h-[141px] md:rounded-[40px] md:p-6 md:opacity-100 md:translate-y-0
                        bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center text-white"
            >
              <h3
                className="text-lg md:text-2xl font-bold mb-1 md:mb-2"
                style={{ fontFamily: "'Alata', sans-serif" }}
              >
                {item.name}
              </h3>
              <p
                className="text-[10px] md:text-sm text-gray-200 leading-tight line-clamp-3"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}