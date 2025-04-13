"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What type of leather does KE Leather use?",
    answer:
      "We use 100% genuine full-grain leather, ensuring premium quality, durability, and elegance in every product.",
  },
  {
    question: "How do I maintain my leather products?",
    answer:
      "Keep leather products dry, condition them regularly, and store them in a cool, dry place away from direct sunlight.",
  },
  {
    question: "Do you offer custom leather products?",
    answer:
      "Yes! We offer customization options for shoes, wallets, and other accessories. Contact us for more details.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on your location, but typically orders are delivered within 5-7 business days.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-14 px-6 md:px-16 bg-white">
      <h2 className="text-center text-3xl font-extrabold text-[#5a2d0c] mb-10">
        Frequently Asked Questions 🤔
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#5a2d0c] rounded-lg p-4 shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-[#5a2d0c] text-lg font-semibold"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp size={24} className="text-[#5a2d0c]" />
              ) : (
                <ChevronDown size={24} className="text-[#5a2d0c]" />
              )}
            </button>

            <motion.div
              initial={false}
              animate={openIndex === index ? "open" : "closed"}
              variants={{
                open: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
                closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
              }}
              className="overflow-hidden text-gray-700"
            >
              <p className="mt-2 p-2">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
