"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const navLinks = [
 
  { href: "#categories", label: "Categories" },
  { href: "#new-arrivals", label: "New Arrivals" },
  { href: "#popular", label: "Popular" },
  { href: "#choose-us", label: "Why Choose Us" },
  { href: "#about", label: "About" },
  { href: "#faqs", label: "FAQs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop for the mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"></div>
      )}

      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div>
          <Image 
            src="/logo.webp" 
            alt="Logo" 
            width={50} 
            height={50} 
          />
        </div>

        {/* Hamburger icon for mobile */}
        <button 
          className="lg:hidden text-black" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile dropdown menu */}
        <ul
          className={`
            lg:flex gap-4 text-lg font-semibold absolute top-16 left-0 w-full bg-white shadow-lg
            transition-all duration-300 ease-in-out transform origin-top 
            ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
            lg:relative lg:top-auto lg:left-auto lg:w-auto lg:shadow-none lg:scale-y-100 lg:opacity-100
            flex flex-col lg:flex-row items-center
          `}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block px-3 py-2 text-black hover:text-red-600 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setIsOpen(false)} // closes menu on mobile
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

     
    </>
  );
}
