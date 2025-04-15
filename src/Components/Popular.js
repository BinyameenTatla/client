"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Dark Black Peshwari",
    image: "/p1.jpeg",
    price: "8100",
    oldPrice: "9000",
  },
  {
    id: 2,
    name: " Deep Brown Peshwari",
    image: "/p2.jpeg",
    price: "8280",
    oldPrice: "9200",
  },
  {
    id: 3,
    name: " Coffee Brown Sandle",
    image: "/p3.jpeg",
    price: "5400",
    oldPrice: "6000",
  },
  {
    id: 5,
    name: " Pecan Brown Peshwari ",
    image: "/p5.jpeg",
    price: "7740",
    oldPrice: "8600",
  },
  {
    id: 4,
    name: "Dark Black Sandle",
    image: "/p4.jpeg",
    price: "3150",
    oldPrice: "3500",
  },
  
];

export default function Popular() {

  const handleOrderClick = (productName, productPrice, productImage) => {
    const whatsappNumber = "923091007549"; // Your WhatsApp number with Pakistan country code
    const fullImageUrl = `https://clientbinyameen.netlify.app${productImage}`; // Correct URL of the image
    const message = `Hi, I am interested in the "${productName}" priced at ${productPrice}.\n\nHere is the product image:\n${fullImageUrl}\n\nPlease check out the image above!`;
  
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

  };


  return (
    <section id="popular" className="py-10 px-2 md:px-20">
      <h2 className="text-center text-3xl md:text-3xl font-bold mb-8">
        Most Popular
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
