"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/hand.jpeg", "/hero22.jpeg", "/hero1.jpeg"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const whatsappLink = "https://wa.me/03091007549?text=Hi%20I%20am%20interested%20in%20your%20products";

  return (
    <section className="relative w-full h-[80vh] bg-[#5a2d0c] text-white">
      <Image
        src={images[currentIndex]}
        alt="Leather Product"
        fill
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-12">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">KE Leather</h1>
          <p className="text-lg md:text-xl mb-6">
            Premium handcrafted leather goods – shoes, belts, wallets & more.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 transition-all px-6 py-3 mt-[100px] rounded-full text-lg shadow-md"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
