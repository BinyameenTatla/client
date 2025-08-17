"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

import Link from 'next/link';






export default function CategoryPageClient({ name, products }) {


const handleOrderClick = (productName, productPrice, productImage) => {
    const whatsappNumber = "923091007549"; // Your WhatsApp number with Pakistan country code
    const fullImageUrl = `https://KEleather.com${productImage}`; // Correct URL of the image
    const message = `Hi, I am interested in the "${productName}" priced at ${productPrice}.\n\nHere is the product image:\n${fullImageUrl}\n\nPlease check out the image above!`;
  
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

  };

  return (
    <main className="p-3 md:p-10">



  <Link href="/" >
  <button className="flex  justify-center items-center gap-2 text-white bg-[#5a2d0c] hover:bg-gray-700 
             px-4 py-2 rounded-md text-sm shadow-md transition">
  ← Back to Home
  </button>
</Link>
      <h1 className="text-3xl font-bold mb-4 mt-11 md:mt-8 text-center">
        {name.toUpperCase()} Products
      </h1>
      <p className="text-center mb-4">Step into style with our premium collection</p>
  
      {products.length === 0 && (
        <p className="text-center text-gray-500">No products found.</p>
      )}
  
      <div className="flex flex-wrap justify-center gap-[8px] space-y-4 sm:gap-[8px] md:gap-8">
        {products.map((product, index) => (
                   <div 
                   key={index} 
                   className="bg-white border border-gray-200 shadow-md rounded-xl p-3 
                              w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] 
                              flex flex-col items-center transition-transform duration-200 hover:scale-105"
                 >
                   {/* Product Image */}
                   <Image 
                     src={product.image} 
                     alt={product.title} 
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
    </main>
  );
 



}