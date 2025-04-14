"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const images = ["/bag6.jpeg", "/hero22.jpeg", "/hero1.jpeg"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const whatsappLink = "https://wa.me/03091007549?text=Hi%20I%20am%20interested%20in%20your%20products";

  return (
    <section className="relative w-full h-[80vh] bg-[#56361f] text-black overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt="Leather Product"
        fill
        priority
        className="object-cover opacity-30" 
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg tracking-wide">
          KE Leather
        </h1>
        <p className="text-lg md:text-2xl  mb-6 max-w-xl drop-shadow-md">
          Premium handcrafted leather goods — shoes, belts, wallets & more.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#5a2d0c] hover:bg-white hover:text-[#5a2d0c] text-white font-semibold px-6 py-3 rounded-full text-lg shadow-md transition-all duration-300"
        >
          <FaWhatsapp className="text-xl" />
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}
