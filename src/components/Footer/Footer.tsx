import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';
import LogoImg from  "../../assets/images/chef_log.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-16">
          <Image 
            src={LogoImg} 
            alt="Chef Buddy Logo" 
            width={150}
            height={60}
            className="object-contain"
            priority
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-4 mb-16">
          
          {/* Services Section */}
          <div className="order-1">
            <h3 className="font-bold text-sm md:text-lg mb-6" style={{ fontFamily: "'Alata', sans-serif" }}>
              Services
            </h3>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "18px", lineHeight: "32px", fontWeight: 400 }}>
              <li><a href="#" className="hover:text-white transition">Small Buffet</a></li>
              <li><a href="#" className="hover:text-white transition">Party</a></li>
              <li><a href="#" className="hover:text-white transition">Wedding</a></li>
              <li><a href="#" className="hover:text-white transition">Combos</a></li>
              <li><a href="#" className="hover:text-white transition">Birthday</a></li>
              <li><a href="#" className="hover:text-white transition">Family dine</a></li>
            </ul>
          </div>

          {/* Menu Section */}
          <div className="order-2">
            <h3 className="font-bold text-sm md:text-lg mb-6" style={{ fontFamily: "'Alata', sans-serif" }}>
              Menu
            </h3>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "18px", lineHeight: "32px", fontWeight: 400 }}>
              <li><a href="#" className="hover:text-white transition">Burger</a></li>
              <li><a href="#" className="hover:text-white transition">Chicken</a></li>
              <li><a href="#" className="hover:text-white transition">Indian Curry</a></li>
              <li><a href="#" className="hover:text-white transition">Combos</a></li>
              <li><a href="#" className="hover:text-white transition">Drinks</a></li>
              <li><a href="#" className="hover:text-white transition">Full Menu</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="order-3">
            <h3 className="font-bold text-sm md:text-lg mb-6" style={{ fontFamily: "'Alata', sans-serif" }}>
              About
            </h3>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "18px", lineHeight: "32px", fontWeight: 400 }}>
              <li><a href="#" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-white transition">Quality Standards</a></li>
              <li><a href="#" className="hover:text-white transition">Locations</a></li>
              <li><a href="#" className="hover:text-white transition">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
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
                <p className="text-gray-400">3119-3455-6677</p>
              </div>
              <div>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Alata', sans-serif" }}>Email</h3>
                <p className="text-gray-400">info@chefbuddy.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col space-y-6 pt-2">
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaFacebook /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaLinkedin /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaYoutube /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaPinterest /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section with Pulsing Effect */}
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