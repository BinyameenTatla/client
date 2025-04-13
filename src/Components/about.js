"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#5a2d0c] text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl  font-bold mb-10">
            About KE Leather
          </h2>
          <p className="text-lg leading-relaxed">
             At KE Leather, we believe in the art of handcrafted excellence. 
            Our premium collection of shoes, wallets, belts, and accessories 
            is made from 100% genuine full-grain leather, ensuring timeless 
            style and durability.
          </p>
          <p className="mt-4 text-lg">
            With a passion for fine leather craftsmanship, we blend tradition 
            with modern aesthetics to create accessories that redefine elegance.
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image 
            src="/about.webp" 
            alt="KE Leather Workshop" 
            width={500} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
