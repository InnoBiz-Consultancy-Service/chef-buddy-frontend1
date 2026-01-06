import React from 'react';
import Link from 'next/link'; // Next.js Link import করা হয়েছে
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';
import LogoImg from  "../../assets/images/chef_log.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-16">
          <Link href="/">
            <Image 
              src={LogoImg} 
              alt="Chef Buddy Logo" 
              width={150}
              height={60}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-4 mb-16">
          
          {/* Services Section */}
          <div className="order-1">
            <h3 className="font-bold text-sm md:text-lg mb-6" style={{ fontFamily: "'Alata', sans-serif" }}>
              Services
            </h3>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "18px", lineHeight: "32px", fontWeight: 400 }}>
              <li><Link href="/services#small-buffet" className="hover:text-white transition">Small Buffet</Link></li>
              <li><Link href="/services#party" className="hover:text-white transition">Party</Link></li>
              <li><Link href="/services#wedding" className="hover:text-white transition">Wedding</Link></li>
              <li><Link href="/services#combos" className="hover:text-white transition">Combos</Link></li>
              <li><Link href="/services#birthday" className="hover:text-white transition">Birthday</Link></li>
              <li><Link href="/services#family-dine" className="hover:text-white transition">Family dine</Link></li>
            </ul>
          </div>

          {/* Menu Section */}
          <div className="order-2">
            <h3 className="font-bold text-sm md:text-lg mb-6" style={{ fontFamily: "'Alata', sans-serif" }}>
              Menu
            </h3>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "18px", lineHeight: "32px", fontWeight: 400 }}>
              <li><Link href="/menu#burger" className="hover:text-white transition">Burger</Link></li>
              <li><Link href="/menu#chicken" className="hover:text-white transition">Chicken</Link></li>
              <li><Link href="/menu#indian-curry" className="hover:text-white transition">Indian Curry</Link></li>
              <li><Link href="/menu#combos" className="hover:text-white transition">Combos</Link></li>
              <li><Link href="/menu#drinks" className="hover:text-white transition">Drinks</Link></li>
              <li><Link href="/menu" className="hover:text-white transition font-semibold">Full Menu</Link></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="order-3">
            <h3 className="font-bold text-sm md:text-lg mb-6" style={{ fontFamily: "'Alata', sans-serif" }}>
              About
            </h3>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "18px", lineHeight: "32px", fontWeight: 400 }}>
              <li><Link href="/about" className="hover:text-white transition">Our Story</Link></li>
              <li><Link href="/about#mission" className="hover:text-white transition">Mission & Vision</Link></li>
              <li><Link href="/about#quality" className="hover:text-white transition">Quality Standards</Link></li>
              <li><Link href="/locations" className="hover:text-white transition">Locations</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-3 md:col-span-1 flex justify-between items-start pt-8 md:pt-0 order-4">
            <div className="space-y-8" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "18px", lineHeight: "32px" }}>
              <div>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Alata', sans-serif" }}>Address</h3>
                <p className="text-gray-400 leading-relaxed max-w-[200px]">45 Kingsway Street, London, WC2B 6PF, United Kingdom</p>
              </div>
              <div>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Alata', sans-serif" }}>Phone</h3>
                <p className="text-gray-400 underline decoration-[#F39C12]/30"><a href="tel:311934556677">+44 7833-620181</a></p>
              </div>
              <div>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Alata', sans-serif" }}>Email</h3>
                <p className="text-gray-400 underline decoration-[#F39C12]/30"><a href="mailto:info@chefbuddy.com">chefbuddyscot@gmail.com</a></p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col space-y-6 pt-2">
              <a href="https://facebook.com" target="_blank" className="text-white hover:text-[#F39C12] transition text-xl"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" className="text-white hover:text-[#F39C12] transition text-xl"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" className="text-white hover:text-[#F39C12] transition text-xl"><FaLinkedin /></a>
              <a href="https://youtube.com" target="_blank" className="text-white hover:text-[#F39C12] transition text-xl"><FaYoutube /></a>
              <a href="https://pinterest.com" target="_blank" className="text-white hover:text-[#F39C12] transition text-xl"><FaPinterest /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "14px" }}>
            © 2026 Chef Buddy ®. All rights reserved.
          </p>
          
          <p className="text-gray-500" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "14px" }}>
            Powered by:{" "}
            <a 
              href="https://protonixit.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#87CEEB] font-semibold animate-pulse hover:brightness-125 transition-all"
            >
              protonixit.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;