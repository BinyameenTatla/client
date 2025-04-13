"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: " Maximum Pashwari",
    image: "/A1.jpeg",
    price: "5850",
    oldPrice: "6500",
  },
  {
    id: 5,
    name: " Mahogany Brown Sandle",
    image: "/A5.jpeg",
    price: "5400",
    oldPrice: "6000",
  },
  {
    id: 2,
    name: " Dark Black Sandle",
    image: "/A2.jpeg",
    price: "5400",
    oldPrice: "6000",
  },
  {
    id: 3,
    name: "  Sepia Brown Sandle",
    image: "/A3.jpeg",
    price: "4500",
    oldPrice: "5000",
  },
  {
    id: 4,
    name: " Light Brown Sandle",
    image: "/A4.jpeg",
    price: "4500",
    oldPrice: "5000",
  },
 
];

export default function Popular() {
  const handleOrderClick = (productName, productPrice) => {
    const whatsappNumber = "03091007549"; // Replace with your WhatsApp number
    const message = `Hi, I am interested in the "${productName}" priced at ${productPrice}.`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="py-10 px-2 md:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        New Arrivals
      </h2>
      
      <div className="flex flex-wrap  justify-center gap-3 md:gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white border border-gray-200 shadow-lg rounded-lg p-2 
            w-[130px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex flex-col items-center transition-all hover:scale-105"
          >
            <Image 
              src={product.image} 
              alt={product.name} 
              width={100} 
              height={100} 
              className="rounded-lg w-[150px] h-[130px] md:h-[170px] md:w-[170px] object-cover"
            />
            
            <h3 className="mt-[2px] text-sm font-semibold text-center">{product.name}</h3>
            <p className="text-gray-500 line-through text-sm">{product.oldPrice}</p>
            <p className="text-lg font-bold text-orange-600">{product.price}</p>
            
            <button 
              onClick={() => handleOrderClick(product.name, product.price)} 
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
