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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-b border-white/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Modern Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-110">
                <div className="absolute inset-1 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-300"></div>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Vernon CyberSec
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 tracking-wider">
                NEXT-GEN SECURITY
              </div>
            </div>
          </div>

          {/* Futuristic Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            {[
              { name: 'About', id: 'about', icon: '🛡️' },
              { name: 'Services', id: 'services', icon: '⚡' },
              { name: 'Reviews', id: 'testimonials', icon: '⭐' },
              { name: 'Contact', id: 'contact', icon: '💬' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="relative flex items-center space-x-2 z-10">
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Modern Controls */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative w-12 h-12 rounded-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
              <span className="text-xl filter drop-shadow-lg">
                {theme === 'dark' ? '☀️' : '🌙'}
              </span>
            </button>
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>Get Secured</span>
              <span className="text-lg">🚀</span>
            </button>
            
            {/* Futuristic Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 rounded-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}></span>
                <span className={`h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-300 my-1 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Futuristic Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-md rounded-2xl m-4 border border-white/20 shadow-2xl">
            <div className="p-4 space-y-2">
              {[
                { name: 'About Us', id: 'about', icon: '🛡️' },
                { name: 'Our Services', id: 'services', icon: '⚡' },
                { name: 'Testimonials', id: 'testimonials', icon: '⭐' },
                { name: 'Contact', id: 'contact', icon: '💬' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group w-full text-left p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 border border-transparent hover:border-white/20`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-white">
                      {item.name}
                    </span>
                  </div>
                </button>
              ))}
              
              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <span>Get Secured Now</span>
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
