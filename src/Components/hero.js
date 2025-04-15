"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/03091007549?text=Hi%20I%20am%20interested%20in%20your%20products";

  return (
    <section className=" text-black flex flex-col md:flex-row overflow-hidden py-10 md:py-0">
      {/* Text: Left side on desktop, top on mobile */}
      <div className="flex-1 flex items-center justify-center px-6 md:pl-1 text-center md:text-left">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl text-[#6a3b1c] font-extrabold tracking-tight leading-tight">
            KE Leather
          </h1>
          <p className="text-lg md:text-2xl max-w-md text-black">
          Discover the timeless elegance of handcrafted leather,
          from meticulously designed shoes, wallets, belts, to premium bags—crafted to perfection
          </p>
          <a
            href="#categories"
            
            
            className="inline-flex items-center gap-3 bg-[#6a3b1c] hover:bg-white hover:text-[#6a3b1c] text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            
            Explore Categories

          </a>
        </div>
      </div>

      {/* Image: Right side on desktop, bottom on mobile */}
      <div className="flex-1 flex items-center  justify-center px-1 sm:px-6 md:px-0  md:mt-0">
        <div className="relative mt-14 lg:mt-16  rounded-3xl  ">
          <Image
            src="/hero.png"
            alt="Leather Product"
            width={350}
            height={350}
            className="object-cover w-[355px] h-[355px] sm:h-[380px] sm:w-[380px] md:h-[380px] md:w-[380px] lg:h-[450px] lg:w-[450px] rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
