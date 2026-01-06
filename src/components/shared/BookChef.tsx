"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser'; // EmailJS ইমপোর্ট করুন
import bgImg from "../../assets/13.png";

const BookChef: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null); // ফরম রেফারেন্সের জন্য
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email required";
    }
    if (!formData.service) newErrors.service = "Please select a service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // EmailJS logic
    // আপনার EmailJS ড্যাশবোর্ড থেকে এই ID গুলো সংগ্রহ করুন
    emailjs.sendForm(
      'mohammad.salim.tech', 
      'template_2ag99h4', 
      formRef.current!, 
      '0LzVpWyAD60o71Lo-'
    )
    .then(() => {
      setLoading(false);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', phone: '', service: '', description: '' });
    })
    .catch((error) => {
      setLoading(false);
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <section id="book-chef" className="relative min-h-screen w-full flex items-center justify-center py-12 md:py-20 px-4 md:px-6 mb-24">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed">
        <Image src={bgImg} alt="Background" fill className="object-cover object-center fixed" priority />
        <div className="absolute inset-0 bg-black/40 md:bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left Side Info */}
        <div className="text-white space-y-8 md:space-y-10 text-center lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Alata', sans-serif" }}>Book Your Private Chef</h2>
            <p className="text-gray-200 md:text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Share your vision, dietary needs, and preferred date, and we'll curate a menu just for you.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 md:gap-12 pt-4">
             <div className="flex flex-col items-center gap-2">
                <Phone size={32} className="text-white" />
                <span className="text-[10px] md:text-xs">+44 7833-620181</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Mail size={32} className="text-white" />
                <span className="text-[10px] md:text-xs">chefbuddyscot@gmail.com</span>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white/80 backdrop-blur-md border border-white/20 p-6 md:p-12 rounded-2xl shadow-2xl">
          <h3 className="text-black text-xl md:text-2xl font-medium mb-8 text-center lg:text-left" style={{ fontFamily: "'Alata', sans-serif" }}>Send Us a Message</h3>
          
          <form ref={formRef} className="space-y-6 md:space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="relative">
                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-gray-500'} py-2 text-black outline-none focus:border-[#e67e22] transition-all placeholder:text-black font-light text-sm md:text-base`} />
                {errors.name && <span className="absolute left-0 -bottom-5 text-red-600 text-[10px] font-medium">{errors.name}</span>}
              </div>
              <div className="relative">
                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="E-mail Address" className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gray-500'} py-2 text-black outline-none focus:border-[#e67e22] transition-all placeholder:text-black font-light text-sm md:text-base`} />
                {errors.email && <span className="absolute left-0 -bottom-5 text-red-600 text-[10px] font-medium">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="relative">
                <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone" className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-gray-500'} py-2 text-black outline-none focus:border-[#e67e22] transition-all placeholder:text-black font-light text-sm md:text-base`} />
              </div>
              <div className="relative">
                <select name="service" value={formData.service} onChange={handleChange} className={`w-full bg-transparent border-b ${errors.service ? 'border-red-500' : 'border-gray-500'} py-2 text-black outline-none focus:border-[#e67e22] transition-all appearance-none font-light text-sm md:text-base`}>
                  <option value="" className="bg-white text-black">Select Service</option>
                  <option value="private" className="bg-white text-black">Private Chef</option>
                  <option value="event" className="bg-white text-black">Event Catering</option>
                </select>
                {errors.service && <span className="absolute left-0 -bottom-5 text-red-600 text-[10px] font-medium">{errors.service}</span>}
              </div>
            </div>

            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="A brief description about your needs" rows={4} className="w-full bg-transparent border-b border-gray-500 py-2 text-black outline-none focus:border-[#e67e22] transition-all resize-none placeholder:text-black font-light text-sm md:text-base"></textarea>

            <div className="flex justify-center pt-4">
              <button 
                disabled={loading}
                type="submit" 
                className="w-full md:max-w-xs bg-[#e67e22] hover:bg-[#d35400] text-white font-medium py-3 rounded-xl transition-all shadow-lg uppercase tracking-widest text-sm active:scale-95 disabled:bg-gray-400 cursor-pointer"
                style={{ fontFamily: "'Alata', sans-serif" }}
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookChef;