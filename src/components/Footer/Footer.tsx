import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex flex-col items-center">
             {/* Replace with your actual Logo Image */}
            <img src="/logo.png" alt="ChefBuddy Logo" className="w-12 h-12 mb-2" />
            <h2 className="text-2xl font-bold tracking-tight">
              Chef<span className="text-[#F39C12]">Buddy</span>
            </h2>
          </div>
        </div>

        {/* Links and Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Contact Section - Mobile e niche thakle bhalo, kintu tomara ss onujayi prothomeo rakha jay */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Address</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                45 Kingsway Street, London,<br />
                WC2B 6PF, United Kingdom
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Phone</h3>
              <p className="text-gray-400 text-sm">3119-3455-6677</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Email</h3>
              <p className="text-gray-400 text-sm">info@chefbuddy.com</p>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Burger</a></li>
              <li><a href="#" className="hover:text-white transition">Chicken</a></li>
              <li><a href="#" className="hover:text-white transition">Indian Curry</a></li>
              <li><a href="#" className="hover:text-white transition">Combos</a></li>
              <li><a href="#" className="hover:text-white transition">Drinks</a></li>
              <li><a href="#" className="hover:text-white transition">Full Menu</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Small Buffet</a></li>
              <li><a href="#" className="hover:text-white transition">Party</a></li>
              <li><a href="#" className="hover:text-white transition">Wedding</a></li>
              <li><a href="#" className="hover:text-white transition">Birthday</a></li>
              <li><a href="#" className="hover:text-white transition">Family dine</a></li>
            </ul>
          </div>

          {/* About & Social Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-4">About</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition">Mission & Vision</a></li>
                <li><a href="#" className="hover:text-white transition">Quality Standards</a></li>
                <li><a href="#" className="hover:text-white transition">Locations</a></li>
                <li><a href="#" className="hover:text-white transition">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Social Icons - Mobile e list er niche thakbe */}
            <div className="flex space-x-5 mt-8 md:mt-6">
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaFacebook /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaLinkedin /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaYoutube /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaPinterest /></a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 Chef Buddy ®. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;