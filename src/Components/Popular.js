"use client";

import Image from "next/image";

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
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Most Popular
      </h2>
      
      <div className="flex flex-wrap  justify-center gap-3 md:gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white border border-gray-200 shadow-lg rounded-lg p-2 
            w-[130px] sm:w-[200px] md:w-[200px] lg:w-[220px] flex flex-col items-center transition-all hover:scale-103"
          >
            <Image 
              src={product.image} 
              alt={product.name} 
              width={100} 
              height={100} 
              className="rounded-lg w-[150px] h-[130px] md:h-[170px] md:w-[170px] object-cover"
            />
            
            <h3 className="mt-0 text-sm font-semibold text-center">{product.name}</h3>
            <p className="text-gray-500 line-through text-sm">{product.oldPrice}</p>
            <p className="text-lg font-bold text-orange-600">{product.price}</p>
            
            <button 
              onClick={() => handleOrderClick(product.name, product.price,product.image)} 
              className="mt-[2px] bg-[#5a2d0c] text-white py-1 px-4 text-[12px] rounded-md shadow-md hover:bg-gray-800 transition"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
