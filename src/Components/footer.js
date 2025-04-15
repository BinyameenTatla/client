"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram,FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const whatsappLink = "https://wa.me/03091007549?text=Hi%20I%20am%20interested%20in%20your%20products.I want to talk with you.You are availaible at this time";

  return (
    <footer className="bg-white text-black py-12 px-6 md:px-16 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div className="flex flex-col items-start">
          <Image 
            src="/logo.webp" 
            alt="KE Leather Logo" 
            width={70} 
            height={30} 
          />
          <p className="text-1xl font-normal text-black mt-4 leading-relaxed">
            Experience the luxury of handcrafted leather. Our premium shoes, 
            wallets, belts, and accessories are made from 100% genuine leather.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#5a2d0c]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#new-arrivals" className="text-black hover:text-[#5a2d0c]">New Arrivals</a></li>
            <li><a href="#popular" className="text-black hover:text-[#5a2d0c]">Popular</a></li>
            <li><a href="#categories" className="text-black hover:text-[#5a2d0c]">Categories</a></li>
            <li><a href="#faqs" className="text-black hover:text-[#5a2d0c]">FAQs</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#5a2d0c]">Contact Us</h3>
          <p className="mt-4 text-gray-700">Have a question? Chat with us on WhatsApp.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-full w-fit mt-3 hover:bg-black transition"
          >
            <FaWhatsapp size={20} /> Chat on WhatsApp
          </a>

          {/* Social Media */}
          <div className="flex gap-4 mt-5">
          <a href="https://www.facebook.com/profile.php?id=100069482276411" className="text-gray-700 hover:text-[#5a2d0c] transition">
              <FaFacebookF size={30} />
                 </a>

            <a href="https://www.instagram.com/saith3918" className="text-gray-700 hover:text-[#5a2d0c] transition">
              <FaInstagram size={30} />
                </a>

            
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-[#5a2d0c] border-t border-gray-300 mt-10 pt-5">
        © {new Date().getFullYear()} KE Leather. All rights reserved.
      </div>
    </footer>
  );
}
