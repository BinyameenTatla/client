"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Trigger initial fade-in animation on mount
    const timer = setTimeout(() => setShowBanner(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="text-black flex flex-col md:flex-row overflow-hidden py-10 md:py-0">
      {/* Text side */}
      <div className="flex-1 flex items-center justify-center px-6 md:pl-1 text-center md:text-start">
        <div className="space-y-8 max-w-md">
          
          {/* Animated Promo Banner with fade-in and continuous pulse */}
          <div
            className={`
              relative max-w-max mx-auto md:mx-0
              bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500
              bg-opacity-80 backdrop-blur-md border border-white rounded-3xl
              shadow-lg text-white font-extrabold
              px-10 py-5 flex flex-col items-center
              transition-transform duration-700 ease-out
              ${showBanner ? "opacity-100 translate-y-0 scale-100 animate-pulseSlow" : "opacity-0 translate-y-8 scale-95"}
              hover:scale-105 cursor-pointer
            `}
            title="Limited time 14 August 60% OFF offer"
          >
            {/* Glow circles */}
            <span className="absolute -top-5 -left-5 w-8 h-8 rounded-full bg-yellow-300 opacity-60 animate-pulse blur-xl"></span>
            <span className="absolute -bottom-5 -right-5 w-10 h-10 rounded-full bg-red-400 opacity-60 animate-pulse blur-2xl"></span>

            <div className="flex items-center gap-3 text-3xl md:text-4xl leading-none select-none">
              <span role="img" aria-label="gift" className="drop-shadow-lg">
                🎁
              </span>
              <span>60% OFF</span>
            </div>
            <div className="uppercase tracking-wider text-sm md:text-base mt-2 drop-shadow-md select-none">
              14 August Special Offer
            </div>
            <div className="text-sm md:text-base mt-1 font-normal tracking-wide drop-shadow-sm select-none">
              Limited Time Only — Don’t Miss Out!
            </div>
          </div>

          <img
            src="/logo.webp"
            alt="KE Leather"
            className="flex flex-start h-[190px] object-contain mx-auto md:mx-0"
          />

          <p className="text-lg md:text-2xl max-w-md text-black">
            Discover the timeless elegance of handcrafted leather, from meticulously designed shoes, wallets, belts, to premium bags—crafted to perfection.
          </p>

          <a
            href="#categories"
            className="inline-flex items-center gap-3 bg-[#6a3b1c] hover:bg-white hover:text-[#6a3b1c] text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Explore Categories
          </a>
        </div>
      </div>

      {/* Image side */}
      <div className="flex-1 flex items-center justify-center px-1 sm:px-6 md:px-0 md:mt-0">
        <div className="relative mt-14 lg:mt-16 rounded-3xl">
          <Image
            src="/hero.png"
            alt="Leather Product"
            width={350}
            height={350}
            className="object-cover w-[355px] h-[355px] sm:h-[380px] sm:w-[380px] md:h-[380px] md:w-[380px] lg:h-[450px] lg:w-[450px] rounded-3xl"
          />
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
        }
        .animate-pulseSlow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
