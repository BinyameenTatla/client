"use client"

// app/category/[name]/page.js
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';


import Image from "next/image";
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();

  const allProducts = {
    Shoes: [
      { title: "Nike Air Max", price: "Rs 11000", oldPrice: "13500", phone: "+923091007549", image: "/products/shoes/shoe1.jpeg" },
      { title: "Adidas Runner", price: "Rs 12000", oldPrice: "14500", phone: "+923091007549", image: "/products/shoes/shoe2.jpeg" },
      { title: "Puma Flex", price: "Rs 8000", oldPrice: "10000", phone: "+923091007549", image: "/products/shoes/shoe3.jpeg" },
      { title: "Reebok Classic", price: "Rs 8000", oldPrice: "9500", phone: "+923091007549", image: "/products/shoes/shoe4.jpeg" },
      { title: "Sketchers GoWalk", price: "Rs 8000", oldPrice: "9000", phone: "+923091007549", image: "/products/shoes/shoe5.jpeg" },
      { title: "Converse High Tops", price: "Rs 8000", oldPrice: "9000", phone: "+923091007549", image: "/products/shoes/shoe6.jpeg" },
      { title: "Fila Memory", price: "Rs 9000", oldPrice: "11000", phone: "+923091007549", image: "/products/shoes/shoe7.jpeg" },
      { title: "Under Armour Charged", price: "Rs 10600", oldPrice: "12000", phone: "+923091007549", image: "/products/shoes/shoe8.jpeg" },
      { title: "Asics Gel", price: "Rs 12000", oldPrice: "13000", phone: "+923091007549", image: "/products/shoes/shoe9.jpeg" },
      { title: "New Balance Trail", price: "Rs 6300", oldPrice: "7000", phone: "+923091007549", image: "/products/shoes/shoe10.jpeg" },
    ],
  
    Jackets: [
      { title: "Leather Jacket", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket1.jpeg" },
      { title: "Denim Jacket", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket2.jpeg" },
      { title: "Bomber Jacket", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket3.jpeg" },
      { title: "Winter Parka", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket4.jpeg" },
      { title: "Rain Jacket", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket5.jpeg" },
      { title: "Hooded Jacket", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket6.jpeg" },
      { title: "Puffer Jacket", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket7.jpeg" },
      { title: "Windbreaker", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket8.jpeg" },
      { title: "Blazer Jacket", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket9.jpeg" },
      { title: "Field Jacket", price: "Rs 15000", oldPrice: "17000", phone: "+923091007549", image: "/products/jackets/jacket10.jpeg" },
    ],
    Belts: [
      { title: "Classic Leather Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt1.jpeg" },
      { title: "Designer Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt2.jpeg" },
      { title: "Canvas Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt3.jpeg" },
      { title: "Braided Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt4.jpeg" },
      { title: "Double Loop Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt5.jpeg" },
      { title: "Formal Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt6.jpeg" },
      { title: "Studded Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt7.jpeg" },
      { title: "Reversible Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt8.jpeg" },
      { title: "Automatic Buckle Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt9.jpeg" },
      { title: "Slim Belt", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/belts/belt10.jpeg" },
    ],
    Bags: [
      { title: "Travel Backpack", price: "Rs 9000", oldPrice: "10500", phone: "+923091007549", image: "/products/bags/bag1.jpeg" },
      { title: "Messenger Bag", price: "Rs 4300", oldPrice: "5000", phone: "+923091007549", image: "/products/bags/bag2.jpeg" },
      { title: "Laptop Bag", price: "Rs 4000", oldPrice: "5000", phone: "+923091007549", image: "/products/bags/bag3.jpeg" },
      { title: "Gym Bag", price: "Rs 3000", oldPrice: "4000", phone: "+923091007549", image: "/products/bags/bag4.jpeg" },
      { title: "Duffel Bag", price: "Rs 3000", oldPrice: "4000", phone: "+923091007549", image: "/products/bags/bag5.jpeg" },
      { title: "Shoulder Bag", price: "Rs 3000", oldPrice: "4000", phone: "+923091007549", image: "/products/bags/bag6.jpeg" },
      { title: "Crossbody Bag", price: "Rs 4000", oldPrice: "5000", phone: "+923091007549", image: "/products/bags/bag7.jpeg" },
      { title: "Sling Bag", price: "Rs 9000", oldPrice: "11000", phone: "+923091007549", image: "/products/bags/bag8.jpeg" },
      { title: "Tote Bag", price: "Rs 3500", oldPrice: "4000", phone: "+923091007549", image: "/products/bags/bag9.jpeg" },
      { title: "Office Bag", price: "Rs 4000", oldPrice: "5000", phone: "+923091007549", image: "/products/bags/bag10.jpeg" },
    ], 
    Peshawris: [
      { title: "Brown Peshwari", price: "Rs 7000", oldPrice: "8000", phone: "+923091007549", image: "/products/peshwaris/peshwari1.jpeg" },
      { title: "Black Peshwari", price: "Rs 8000", oldPrice: "9000", phone: "+923091007549", image: "/products/peshwaris/peshwari2.jpeg" },
      { title: "Tan Peshwari", price: "Rs 7000", oldPrice: "8000", phone: "+923091007549", image: "/products/peshwaris/peshwari3.jpeg" },
      { title: "White Peshwari", price: "Rs 6500", oldPrice: "7000", phone: "+923091007549", image: "/products/peshwaris/peshwari4.jpeg" },
      { title: "Handcrafted Peshwari", price: "Rs 6000", oldPrice: "7000", phone: "+923091007549", image: "/products/peshwaris/peshwari5.jpeg" },
      { title: "Traditional Peshwari", price: "Rs 8600", oldPrice: "9000", phone: "+923091007549", image: "/products/peshwaris/peshwari6.jpeg" },
      { title: "Modern Peshwari", price: "Rs 5500", oldPrice: "6000", phone: "+923091007549", image: "/products/peshwaris/peshwari7.jpeg" },
      { title: "Flat Peshwari", price: "Rs 5500", oldPrice: "6000", phone: "+923091007549", image: "/products/peshwaris/peshwari8.jpeg" },
      { title: "Fancy Peshwari", price: "Rs 7500", oldPrice: "8000", phone: "+923091007549", image: "/products/peshwaris/peshwari9.jpeg" },
      { title: "Party Peshwari", price: "Rs 6000", oldPrice: "7000", phone: "+923091007549", image: "/products/peshwaris/peshwari10.jpeg" },
    ],
  
    Sandles: [
      { title: "Casual Sandal", price: "Rs 5500", oldPrice: "6000", phone: "+923091007549", image: "/products/sandal/sandal1.jpeg" },
      { title: "Formal Sandal", price: "Rs 5500", oldPrice: "6000", phone: "+923091007549", image: "/products/sandal/sandal2.jpeg" },
      { title: "Leather Sandal", price: "Rs 4000", oldPrice: "5000", phone: "+923091007549", image: "/products/sandal/sandal3.jpeg" },
      { title: "Strap Sandal", price: "Rs 4000", oldPrice: "5000", phone: "+923091007549", image: "/products/sandal/sandal4.jpeg" },
      { title: "Comfy Sandal", price: "Rs 4500", oldPrice: "5000", phone: "+923091007549", image: "/products/sandal/sandal5.jpeg" },
      { title: "Walking Sandal", price: "Rs 5000", oldPrice: "6000", phone: "+923091007549", image: "/products/sandal/sandal6.jpeg" },
      { title: "Cross Strap Sandal", price: "Rs 4500", oldPrice: "5000", phone: "+923091007549", image: "/products/sandal/sandal7.jpeg" },
      { title: "Ethnic Sandal", price: "Rs 3500", oldPrice: "4000", phone: "+923091007549", image: "/products/sandal/sandal8.jpeg" },
      { title: "Flat Sandal", price: "Rs 5500", oldPrice: "6000", phone: "+923091007549", image: "/products/sandal/sandal9.jpeg" },
      { title: "Fashion Sandal", price: "Rs 5000", oldPrice: "6000", phone: "+923091007549", image: "/products/sandal/sandal10.jpeg" },
    ],
  
    Slippers: [
      { title: "Beach Slippers", price: "Rs 4000", oldPrice: "5000", phone: "+923091007549", image: "/products/slippers/slipper1.jpeg" },
      { title: "Indoor Slippers", price: "Rs 4000", oldPrice: "5000", phone: "+923091007549", image: "/products/slippers/slipper2.jpeg" },
      { title: "Fuzzy Slippers", price: "Rs 4500", oldPrice: "5000", phone: "+923091007549", image: "/products/slippers/slipper3.jpeg" },
      { title: "Rubber Slippers", price: "Rs 6500", oldPrice: "7000", phone: "+923091007549", image: "/products/slippers/slipper4.jpeg" },
      { title: "Open Toe Slippers", price: "Rs 6500", oldPrice: "7000", phone: "+923091007549", image: "/products/slippers/slipper6.jpeg" },
      { title: "Memory Foam Slippers", price: "Rs 6500", oldPrice: "7000", phone: "+923091007549", image: "/products/slippers/slipper7.jpeg" },
      { title: "Waterproof Slippers", price: "Rs 5000", oldPrice: "6000", phone: "+923091007549", image: "/products/slippers/slipper8.jpeg" },
      { title: "Travel Slippers", price: "Rs 5000", oldPrice: "6000", phone: "+923091007549", image: "/products/slippers/slipper9.jpeg" },
      { title: "Minimalist Slippers", price: "Rs 6500", oldPrice: "7000", phone: "+923091007549", image: "/products/slippers/slipper10.jpeg" },
    ],
  
    Wallets: [
      { title: "Leather Wallet", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/wallets/wallet1.jpeg" },
      { title: "Compact Wallet", price: "Rs 3000", oldPrice: "4000", phone: "+923091007549", image: "/products/wallets/wallet2.jpeg" },
      { title: "Slim Wallet", price: "Rs 2500", oldPrice: "3000", phone: "+923091007549", image: "/products/wallets/wallet3.jpeg" },
      { title: "Card Holder Wallet", price: "Rs 2000", oldPrice: "3000", phone: "+923091007549", image: "/products/wallets/wallet4.jpeg" },
      { title: "Zip Wallet", price: "Rs 2500", oldPrice: "3000", phone: "+923091007549", image: "/products/wallets/wallet5.jpeg" },
      { title: "Foldable Wallet", price: "Rs 2000", oldPrice: "2500", phone: "+923091007549", image: "/products/wallets/wallet6.jpeg" },
      { title: "Minimalist Wallet", price: "Rs 2500", oldPrice: "3000", phone: "+923091007549", image: "/products/wallets/wallet7.jpeg" },
      { title: "Classic Wallet", price: "Rs 2500", oldPrice: "3000", phone: "+923091007549", image: "/products/wallets/wallet8.jpeg" },
      { title: "Luxury Wallet", price: "Rs 2000", oldPrice: "2800", phone: "+923091007549", image: "/products/wallets/wallet9.jpeg" },
      { title: "Travel Wallet", price: "Rs 2600", oldPrice: "3100", phone: "+923091007549", image: "/products/wallets/wallet10.jpeg" },
    ]

  }

  // ✅ Get the products for the dynamic category
  const products = allProducts[params.name] || [];

  const handleOrderClick = (productName, productPrice, productImage) => {
    const whatsappNumber = "923091007549"; // Your WhatsApp number with Pakistan country code
    const fullImageUrl = `https://clientbinyameen.netlify.app${productImage}`; // Correct URL of the image
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
        {params.name.toUpperCase()} Products
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