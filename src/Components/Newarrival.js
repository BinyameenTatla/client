"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: " Maximum Pashwari",
    image: "/A1.jpeg",
    price: "Rs 6500",
    oldPrice: "7000",
  },
  {
    id: 5,
    name: " Mahogany Brown Sandle",
    image: "/A5.jpeg",
    price: "Rs 6000",
    oldPrice: "7000",
  },
  {
    id: 2,
    name: "Deep Dark Black Sandle",
    image: "/A2.jpeg",
    price: "Rs 6000",
    oldPrice: "7000",
  },
  {
    id: 3,
    name: "  Sepia Brown Sandle",
    image: "/A3.jpeg",
    price: "5000",
    oldPrice: "Rs 6000",
  },
  {
    id: 4,
    name: " Light Brown Sandle",
    image: "/A4.jpeg",
    price: "Rs 5000",
    oldPrice: "6000",
  },
 
];

export default function Popular() {
  const handleOrderClick = (productName, productPrice, productImage) => {
    const whatsappNumber = "923091007549"; // Your WhatsApp number with Pakistan country code
    const fullImageUrl = `https://KEleather.com${productImage}`; // Correct URL of the image
    const message = `Hi, I am interested in the "${productName}" priced at ${productPrice}.\n\nHere is the product image:\n${fullImageUrl}\n\nPlease check out the image above!`;
  
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

  };

  return (
    <section id="new-arrivals" className="py-10 px-2 md:px-20">
      <h2 className="text-center text-3xl md:text-3xl font-bold mb-8">
        New Arrivals
      </h2>
      
      <div className="flex flex-wrap  justify-center gap-3 md:gap-6">
        {products.map((product) => (
          <div 
                             key={product.id} 
                             className="bg-white border border-gray-200 shadow-md rounded-xl p-3 
                                        w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] 
                                        flex flex-col items-center transition-transform duration-200 hover:scale-105"
                           >
                             {/* Product Image */}
                             <Image 
                               src={product.image} 
                               alt={product.name} 
                               width={170} 
                               height={185} 
                               className="rounded-lg w-[150px] h-[150px] md:w-[170px] md:h-[185px] object-cover"
                             />
                           
                             {/* Product Name */}
                             <h3 className="mt-2 text-[13px] md:text-sm font-semibold text-center text-gray-800">
                               {product.name}
                             </h3>
                           
                             {/* Prices */}
                             <div className="mt-1 flex flex-col items-center">
                               <p className="text-gray-400 line-through text-sm md:text-sm">{product.oldPrice}</p>
                               <p className="text-orange-600 font-bold text-lg md:text-lg">{product.price}</p>
                             </div>
                           
                             {/* Order on WhatsApp Button */}
                             <button 
                               onClick={() => handleOrderClick(product.name, product.price, product.image)} 
                               className="mt-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[11px] md:text-[13px] font-medium py-2 px-4 
                                          rounded-md shadow-md flex items-center gap-2 transition-all"
                             >
                               <FaWhatsapp className="text-white text-sm md:text-base" />
                               Order on WhatsApp
                             </button>
                           </div>
        ))}
      </div>
    </section>
  );
}
