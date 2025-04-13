"use client"

// app/category/[name]/page.js

import Image from "next/image";
export default function CategoryPage({ params }) {
  const allProducts = {
    Shoes: [
      { title: "Nike Air Max", price: "$120", oldPrice: "$150", phone: "+923091007549", image: "/products/shoes/shoe1.jpeg" },
      { title: "Adidas Runner", price: "$90", oldPrice: "$110", phone: "+923091007549", image: "/products/shoes/shoe2.jpeg" },
      { title: "Puma Flex", price: "$100", oldPrice: "$130", phone: "+923091007549", image: "/products/shoes/shoe3.jpeg" },
      { title: "Reebok Classic", price: "$85", oldPrice: "$100", phone: "+923091007549", image: "/products/shoes/shoe4.jpeg" },
      { title: "Sketchers GoWalk", price: "$95", oldPrice: "$110", phone: "+923091007549", image: "/products/shoes/shoe5.jpeg" },
      { title: "Converse High Tops", price: "$80", oldPrice: "$95", phone: "+923091007549", image: "/products/shoes/shoe6.jpeg" },
      { title: "Fila Memory", price: "$70", oldPrice: "$85", phone: "+923091007549", image: "/products/shoes/shoe7.jpeg" },
      { title: "Under Armour Charged", price: "$110", oldPrice: "$130", phone: "+923091007549", image: "/products/shoes/shoe8.jpeg" },
      { title: "Asics Gel", price: "$100", oldPrice: "$120", phone: "+923091007549", image: "/products/shoes/shoe9.jpeg" },
      { title: "New Balance Trail", price: "$105", oldPrice: "$125", phone: "+923091007549", image: "/products/shoes/shoe10.jpeg" },
    ],
  
    Jackets: [
      { title: "Leather Jacket", price: "$180", oldPrice: "$220", phone: "+923091007549", image: "/products/jackets/jacket1.jpeg" },
      { title: "Denim Jacket", price: "$130", oldPrice: "$160", phone: "+923091007549", image: "/products/jackets/jacket2.jpeg" },
      { title: "Bomber Jacket", price: "$140", oldPrice: "$170", phone: "+923091007549", image: "/products/jackets/jacket3.jpeg" },
      { title: "Winter Parka", price: "$200", oldPrice: "$240", phone: "+923091007549", image: "/products/jackets/jacket4.jpeg" },
      { title: "Rain Jacket", price: "$120", oldPrice: "$150", phone: "+923091007549", image: "/products/jackets/jacket5.jpeg" },
      { title: "Hooded Jacket", price: "$135", oldPrice: "$160", phone: "+923091007549", image: "/products/jackets/jacket6.jpeg" },
      { title: "Puffer Jacket", price: "$150", oldPrice: "$180", phone: "+923091007549", image: "/products/jackets/jacket7.jpeg" },
      { title: "Windbreaker", price: "$110", oldPrice: "$140", phone: "+923091007549", image: "/products/jackets/jacket8.jpeg" },
      { title: "Blazer Jacket", price: "$160", oldPrice: "$190", phone: "+923091007549", image: "/products/jackets/jacket9.jpeg" },
      { title: "Field Jacket", price: "$145", oldPrice: "$175", phone: "+923091007549", image: "/products/jackets/jacket10.jpeg" },
    ],
    Belts: [
      { title: "Classic Leather Belt", price: "$40", oldPrice: "$55", phone: "+923091007549", image: "/products/belts/belt1.jpeg" },
      { title: "Designer Belt", price: "$60", oldPrice: "$75", phone: "+923091007549", image: "/products/belts/belt2.jpeg" },
      { title: "Canvas Belt", price: "$35", oldPrice: "$45", phone: "+923091007549", image: "/products/belts/belt3.jpeg" },
      { title: "Braided Belt", price: "$50", oldPrice: "$65", phone: "+923091007549", image: "/products/belts/belt4.jpeg" },
      { title: "Double Loop Belt", price: "$55", oldPrice: "$70", phone: "+923091007549", image: "/products/belts/belt5.jpeg" },
      { title: "Formal Belt", price: "$45", oldPrice: "$60", phone: "+923091007549", image: "/products/belts/belt6.jpeg" },
      { title: "Studded Belt", price: "$65", oldPrice: "$80", phone: "+923091007549", image: "/products/belts/belt7.jpeg" },
      { title: "Reversible Belt", price: "$70", oldPrice: "$90", phone: "+923091007549", image: "/products/belts/belt8.jpeg" },
      { title: "Automatic Buckle Belt", price: "$48", oldPrice: "$60", phone: "+923091007549", image: "/products/belts/belt9.jpeg" },
      { title: "Slim Belt", price: "$38", oldPrice: "$50", phone: "+923091007549", image: "/products/belts/belt10.jpeg" },
    ],
    Bags: [
      { title: "Travel Backpack", price: "$95", oldPrice: "$120", phone: "+923091007549", image: "/products/bags/bag1.jpeg" },
      { title: "Messenger Bag", price: "$110", oldPrice: "$140", phone: "+923091007549", image: "/products/bags/bag2.jpeg" },
      { title: "Laptop Bag", price: "$130", oldPrice: "$160", phone: "+923091007549", image: "/products/bags/bag3.jpeg" },
      { title: "Gym Bag", price: "$80", oldPrice: "$100", phone: "+923091007549", image: "/products/bags/bag4.jpeg" },
      { title: "Duffel Bag", price: "$100", oldPrice: "$130", phone: "+923091007549", image: "/products/bags/bag5.jpeg" },
      { title: "Shoulder Bag", price: "$90", oldPrice: "$115", phone: "+923091007549", image: "/products/bags/bag6.jpeg" },
      { title: "Crossbody Bag", price: "$85", oldPrice: "$105", phone: "+923091007549", image: "/products/bags/bag7.jpeg" },
      { title: "Sling Bag", price: "$70", oldPrice: "$90", phone: "+923091007549", image: "/products/bags/bag8.jpeg" },
      { title: "Tote Bag", price: "$60", oldPrice: "$80", phone: "+923091007549", image: "/products/bags/bag9.jpeg" },
      { title: "Office Bag", price: "$120", oldPrice: "$150", phone: "+923091007549", image: "/products/bags/bag10.jpeg" },
    ], 
    Peshawris: [
      { title: "Brown Peshwari", price: "$85", oldPrice: "$100", phone: "+923091007549", image: "/products/peshwari/peshwari1.jpeg" },
      { title: "Black Peshwari", price: "$80", oldPrice: "$95", phone: "+923091007549", image: "/products/peshwari/peshwari2.jpeg" },
      { title: "Tan Peshwari", price: "$90", oldPrice: "$110", phone: "+923091007549", image: "/products/peshwari/peshwari3.jpeg" },
      { title: "White Peshwari", price: "$95", oldPrice: "$115", phone: "+923091007549", image: "/products/peshwari/peshwari4.jpeg" },
      { title: "Handcrafted Peshwari", price: "$110", oldPrice: "$130", phone: "+923091007549", image: "/products/peshwari/peshwari5.jpeg" },
      { title: "Traditional Peshwari", price: "$100", oldPrice: "$120", phone: "+923091007549", image: "/products/peshwari/peshwari6.jpeg" },
      { title: "Modern Peshwari", price: "$105", oldPrice: "$125", phone: "+923091007549", image: "/products/peshwari/peshwari7.jpeg" },
      { title: "Flat Peshwari", price: "$78", oldPrice: "$90", phone: "+923091007549", image: "/products/peshwari/peshwari8.jpeg" },
      { title: "Fancy Peshwari", price: "$115", oldPrice: "$140", phone: "+923091007549", image: "/products/peshwari/peshwari9.jpeg" },
      { title: "Party Peshwari", price: "$120", oldPrice: "$150", phone: "+923091007549", image: "/products/peshwari/peshwari10.jpeg" },
    ],
  
    Sandles: [
      { title: "Casual Sandal", price: "$55", oldPrice: "$70", phone: "+923091007549", image: "/products/sandal/sandal1.jpeg" },
      { title: "Formal Sandal", price: "$60", oldPrice: "$75", phone: "+923091007549", image: "/products/sandal/sandal2.jpeg" },
      { title: "Leather Sandal", price: "$65", oldPrice: "$80", phone: "+923091007549", image: "/products/sandal/sandal3.jpeg" },
      { title: "Strap Sandal", price: "$50", oldPrice: "$65", phone: "+923091007549", image: "/products/sandal/sandal4.jpeg" },
      { title: "Comfy Sandal", price: "$45", oldPrice: "$60", phone: "+923091007549", image: "/products/sandal/sandal5.jpeg" },
      { title: "Walking Sandal", price: "$55", oldPrice: "$70", phone: "+923091007549", image: "/products/sandal/sandal6.jpeg" },
      { title: "Cross Strap Sandal", price: "$58", oldPrice: "$75", phone: "+923091007549", image: "/products/sandal/sandal7.jpeg" },
      { title: "Ethnic Sandal", price: "$62", oldPrice: "$80", phone: "+923091007549", image: "/products/sandal/sandal8.jpeg" },
      { title: "Flat Sandal", price: "$48", oldPrice: "$60", phone: "+923091007549", image: "/products/sandal/sandal9.jpeg" },
      { title: "Fashion Sandal", price: "$68", oldPrice: "$85", phone: "+923091007549", image: "/products/sandal/sandal10.jpeg" },
    ],
  
    Slippers: [
      { title: "Beach Slippers", price: "$15", oldPrice: "$25", phone: "+923091007549", image: "/products/slippers/slipper1.jpeg" },
      { title: "Indoor Slippers", price: "$10", oldPrice: "$18", phone: "+923091007549", image: "/products/slippers/slipper2.jpeg" },
      { title: "Fuzzy Slippers", price: "$18", oldPrice: "$25", phone: "+923091007549", image: "/products/slippers/slipper3.jpeg" },
      { title: "Rubber Slippers", price: "$12", oldPrice: "$20", phone: "+923091007549", image: "/products/slippers/slipper4.jpeg" },
      { title: "Slide Slippers", price: "$20", oldPrice: "$28", phone: "+923091007549", image: "/products/slippers/slipper5.jpeg" },
      { title: "Open Toe Slippers", price: "$14", oldPrice: "$22", phone: "+923091007549", image: "/products/slippers/slipper6.jpeg" },
      { title: "Memory Foam Slippers", price: "$22", oldPrice: "$30", phone: "+923091007549", image: "/products/slippers/slipper7.jpeg" },
      { title: "Waterproof Slippers", price: "$17", oldPrice: "$24", phone: "+923091007549", image: "/products/slippers/slipper8.jpeg" },
      { title: "Travel Slippers", price: "$16", oldPrice: "$23", phone: "+923091007549", image: "/products/slippers/slipper9.jpeg" },
      { title: "Minimalist Slippers", price: "$19", oldPrice: "$27", phone: "+923091007549", image: "/products/slippers/slipper10.jpeg" },
    ],
  
    Wallets: [
      { title: "Leather Wallet", price: "$50", oldPrice: "$65", phone: "+923091007549", image: "/products/wallets/wallet1.jpeg" },
      { title: "Compact Wallet", price: "$40", oldPrice: "$55", phone: "+923091007549", image: "/products/wallets/wallet2.jpeg" },
      { title: "Slim Wallet", price: "$45", oldPrice: "$60", phone: "+923091007549", image: "/products/wallets/wallet3.jpeg" },
      { title: "Card Holder Wallet", price: "$35", oldPrice: "$50", phone: "+923091007549", image: "/products/wallets/wallet4.jpeg" },
      { title: "Zip Wallet", price: "$48", oldPrice: "$65", phone: "+923091007549", image: "/products/wallets/wallet5.jpeg" },
      { title: "Foldable Wallet", price: "$42", oldPrice: "$55", phone: "+923091007549", image: "/products/wallets/wallet6.jpeg" },
      { title: "Minimalist Wallet", price: "$38", oldPrice: "$52", phone: "+923091007549", image: "/products/wallets/wallet7.jpeg" },
      { title: "Classic Wallet", price: "$46", oldPrice: "$60", phone: "+923091007549", image: "/products/wallets/wallet8.jpeg" },
      { title: "Luxury Wallet", price: "$70", oldPrice: "$90", phone: "+923091007549", image: "/products/wallets/wallet9.jpeg" },
      { title: "Travel Wallet", price: "$60", oldPrice: "$75", phone: "+923091007549", image: "/products/wallets/wallet10.jpeg" },
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
    <main className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {params.name.toUpperCase()} Products
      </h1>
  
      {products.length === 0 && (
        <p className="text-center text-gray-500">No products found.</p>
      )}
  
      <div className="flex flex-wrap justify-center gap-[8px] space-y-4 sm:gap-[8px] md:gap-8">
        {products.map((product, index) => (
                    <div 
                      key={index} 
                      className="bg-white border border-gray-200 shadow-lg rounded-lg p-2 
                      w-[130px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex flex-col items-center transition-all hover:scale-105"
                    >
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        width={100} 
                        height={100} 
                        className="rounded-lg w-[150px] h-[130px] md:h-[170px] md:w-[170px] object-cover"
                      />
                      
                      <h3 className="mt-[2px] text-sm font-semibold text-center">{product.name}</h3>
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
    </main>
  );
}  