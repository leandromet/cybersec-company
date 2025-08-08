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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm ${scrolled ? 'shadow-lg' : ''}`}> 
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 text-black">
          {/* Mobile-Optimized Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group flex-shrink-0" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-indigo-600 rounded-lg md:rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">V</span>
              </div>
            </div>
            <div className="block min-w-0">
              <div className="text-sm sm:text-lg md:text-xl font-bold text-black truncate">
                Vernon CyberSec
              </div>
              <div className="text-xs text-neutral-500 tracking-wider hidden sm:block">
                NEXT-GEN SECURITY
              </div>
            </div>
          </div>

          {/* Tablet Navigation - Show on medium screens */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {[
              { name: 'About', id: 'about', icon: '🛡️' },
              { name: 'Services', id: 'services', icon: '⚡' },
              { name: 'Reviews', id: 'testimonials', icon: '⭐' },
              { name: 'Contact', id: 'contact', icon: '💬' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-2 py-1.5 rounded-lg text-black hover:bg-neutral-100 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-1">
                  <span className="text-xs">{item.icon}</span>
                  <span className="font-medium text-xs">{item.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 bg-white rounded-full px-6 py-3 border border-neutral-200 shadow-sm">
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
          </div>

          {/* Mobile-Optimized Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* CTA Button - Hidden on small mobile, visible on larger screens */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center space-x-1 sm:space-x-2 bg-indigo-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold text-xs sm:text-sm hover:shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
            >
              <span className="hidden sm:inline">Get Secured</span>
              <span className="sm:hidden">Secure</span>
              <span className="text-sm sm:text-lg">🚀</span>
            </button>
            
            {/* Mobile Menu Button - Improved touch target */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:lg:hidden relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-all duration-300 touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                <span className={`h-0.5 w-4 sm:w-5 md:w-6 bg-indigo-600 rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}></span>
                <span className={`h-0.5 w-4 sm:w-5 md:w-6 bg-indigo-600 rounded-full transition-all duration-300 my-0.5 sm:my-1 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`h-0.5 w-4 sm:w-5 md:w-6 bg-indigo-600 rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        {/* End flex items-center justify-between */}
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:lg:hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-white/95 backdrop-blur-md rounded-xl m-2 sm:m-3 md:m-4 border border-neutral-200 shadow-2xl">
            <div className="p-2 sm:p-3 md:p-4 space-y-1">
              {[
                { name: 'About Us', id: 'about', icon: '🛡️', desc: 'Learn about our mission' },
                { name: 'Our Services', id: 'services', icon: '⚡', desc: 'Explore our solutions' },
                { name: 'Testimonials', id: 'testimonials', icon: '⭐', desc: 'What clients say' },
                { name: 'Contact', id: 'contact', icon: '💬', desc: 'Get in touch' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group w-full text-left p-3 sm:p-4 rounded-lg md:rounded-xl transition-all duration-300 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 text-black touch-manipulation min-h-[60px] sm:min-h-[70px]`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-xl sm:text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-black text-sm sm:text-base">
                        {item.name}
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-neutral-400 group-hover:text-indigo-600 transition-colors text-sm">→</span>
                    </div>
                  </div>
                </button>
              ))}
              
              {/* Mobile CTA - Enhanced */}
              <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-neutral-200">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-indigo-600 text-white p-3 sm:p-4 rounded-lg md:rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-[1.02] touch-manipulation min-h-[50px] sm:min-h-[60px]"
                >
                  <span className="text-sm sm:text-base">Get Secured Now</span>
                  <span className="text-base sm:text-lg">🚀</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};
export default Navbar;

