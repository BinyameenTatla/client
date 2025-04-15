"use client";

import Image from "next/image";
import Link from "next/link"; // Correct import for Link

const categories = [
  {
    name: "Shoes",
    image: "/Category/shoes.webp",
    
    
  },
  {
    name: "Jackets",
    image: "/Category/jacket.webp",
    
    
  },
  {
    name: "Belts",
    image: "/Category/belt.webp",
  
    
  },
  {
    name: "Bags",
    image: "/Category/bag.webp",
   
  },
  {
    name: "Peshawris",
    image: "/Category/sandle.webp",
   
  },
  {
    name: "Sandles",
    image: "/sandle.jpeg",
    
  },
  {
    name: "Slippers",
    image: "/S1.jpeg",
 
  },
  {
    name: "Wallets",
    image: "/Category/wallet.webp",
    
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-10 px-1 md:px-10">
      <h1 className="text-center text-3xl md:text-3xl font-bold mb-8">Categories</h1>

      {/* Category List */}
      <ul className="flex flex-wrap justify-center gap-1">
        {categories.map((cat, i) => (
          <li key={i} className="flex flex-col items-center mb-6 space-y-1 w-32 md:w-48 lg:w-64">
            <Link href={`/Category/${cat.name}`} >
              <div className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-center">{cat.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
