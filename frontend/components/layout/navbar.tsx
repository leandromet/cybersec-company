"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 bg-white border-b border-neutral-200 shadow ${scrolled ? '' : ''}`}> 
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 text-black">
          {/* Modern Logo */}
          <div 
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-lg md:rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-base md:text-lg">V</span>
              </div>
            </div>
            <div className="block">
              <div className="text-lg md:text-xl font-bold text-black">
                Vernon CyberSec
              </div>
              <div className="text-xs text-neutral-500 tracking-wider hidden sm:block">
                NEXT-GEN SECURITY
              </div>
            </div>
          </div>

          {/* Futuristic Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 bg-white rounded-full px-6 py-3 border border-neutral-200">
            {[
              { name: 'About', id: 'about', icon: '🛡️' },
              { name: 'Services', id: 'services', icon: '⚡' },
              { name: 'Reviews', id: 'testimonials', icon: '⭐' },
              { name: 'Contact', id: 'contact', icon: '💬' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-2 rounded-full text-black hover:bg-neutral-100 transition-all duration-300 overflow-hidden"
              >
                <div className="relative flex items-center space-x-2 z-10">
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Modern Controls */}
          <div className="flex items-center space-x-3">
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center space-x-2 bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
            >
              <span>Get Secured</span>
              <span className="text-lg">🚀</span>
            </button>
            
            {/* Futuristic Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-all duration-300"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 flex flex-col justify-center items-center">
                <span className={`h-0.5 w-5 md:w-6 bg-indigo-600 rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}></span>
                <span className={`h-0.5 w-5 md:w-6 bg-indigo-600 rounded-full transition-all duration-300 my-1 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`h-0.5 w-5 md:w-6 bg-indigo-600 rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Futuristic Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-white rounded-xl md:rounded-2xl m-3 md:m-4 border border-neutral-200 shadow-2xl">
            <div className="p-3 md:p-4 space-y-1 md:space-y-2">
              {[
                { name: 'About Us', id: 'about', icon: '🛡️' },
                { name: 'Our Services', id: 'services', icon: '⚡' },
                { name: 'Testimonials', id: 'testimonials', icon: '⭐' },
                { name: 'Contact', id: 'contact', icon: '💬' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group w-full text-left p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 text-black`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl md:text-2xl">{item.icon}</span>
                    <span className="font-medium text-black text-sm md:text-base">
                      {item.name}
                    </span>
                  </div>
                </button>
              ))}
              
              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-3 md:mt-4 bg-indigo-600 text-white p-3 md:p-4 rounded-lg md:rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:bg-indigo-700 transition-all duration-300"
              >
                <span className="text-sm md:text-base">Get Secured Now</span>
                <span>🚀</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
