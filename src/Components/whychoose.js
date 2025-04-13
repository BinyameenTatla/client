"use client";

import { ShieldCheck, Handshake, Gem } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: <ShieldCheck size={50} className="text-[#5a2d0c]" />,
    title: "100% Genuine Leather",
    description:
      "We source only premium, full-grain leather for timeless durability and sophistication.",
  },
  {
    id: 2,
    icon: <Handshake size={50} className="text-[#5a2d0c]" />,
    title: "Handcrafted Perfection",
    description:
      "Each piece is meticulously handcrafted by skilled artisans with decades of expertise.",
  },
  {
    id: 3,
    icon: <Gem size={50} className="text-[#5a2d0c]" />,
    title: "Luxury & Elegance",
    description:
      "Our designs balance tradition with modern elegance, ensuring a premium feel in every product.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 px-6 md:px-16 bg-white">
      <h2 className="text-center text-3xl font-extrabold text-[black] mb-10">
        Why Choose <span className="text-[#5a2d0c]">KE Leather</span>? 🏆
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white border border-[#5a2d0c] shadow-lg rounded-lg p-6 w-[300px] sm:w-[320px] md:w-[350px] lg:w-[380px] 
            flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-xl duration-300"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold ">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
