"use client";
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            {/* Clean Badge */}
            <div className={`inline-flex items-center space-x-2 md:space-x-3 bg-white border border-indigo-200 rounded-xl md:rounded-2xl px-4 md:px-8 py-3 md:py-4 mb-8 md:mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} shadow`}> 
              <div className="w-2 h-2 md:w-3 md:h-3 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-indigo-700 font-bold text-xs md:text-base tracking-[0.1em] md:tracking-[0.2em] uppercase">ADVANCED THREAT PROTECTION</span>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-indigo-300 rounded-full animate-pulse"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black mb-8 md:mb-12 leading-[0.9] tracking-tight text-black">
              <span className={`block text-black transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>VERNON</span>
              <span className={`block text-indigo-600 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>CYBERSEC</span>
              <span className={`block text-lg md:text-xl lg:text-3xl xl:text-4xl font-light text-neutral-500 mt-4 md:mt-6 tracking-[0.1em] transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>ENTERPRISE SECURITY OPERATIONS</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-base md:text-xl lg:text-2xl xl:text-3xl mb-12 md:mb-16 text-neutral-700 max-w-5xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-1100 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Military-grade cybersecurity infrastructure protecting critical business operations with 
              <span className="text-indigo-600 font-medium"> quantum-resistant protocols</span>, 
              <span className="text-indigo-500 font-medium"> AI-driven threat detection</span>, and 
              <span className="text-indigo-400 font-medium"> zero-trust architecture</span>
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center transition-all duration-1000 delay-1300 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-indigo-600 text-white font-bold px-8 md:px-12 py-4 md:py-5 rounded-md text-base md:text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl border-2 border-indigo-600 w-full sm:w-auto"
              >
                <span className="relative flex items-center justify-center space-x-2 md:space-x-4">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="tracking-[0.1em] uppercase font-medium">DEPLOY PROTECTION</span>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-white border-2 border-neutral-300 text-black font-bold px-8 md:px-12 py-4 md:py-5 rounded-md text-base md:text-lg transition-all duration-500 hover:bg-neutral-100 hover:border-indigo-400 hover:scale-105 w-full sm:w-auto"
              >
                <span className="relative flex items-center justify-center space-x-2 md:space-x-4">
                  <div className="w-4 md:w-6 h-[2px] bg-gradient-to-r from-neutral-400 to-indigo-400 transition-all duration-500 group-hover:w-6 md:group-hover:w-8"></div>
                  <span className="tracking-[0.1em] uppercase font-medium">ASSESS VULNERABILITIES</span>
                  <div className="w-4 md:w-6 h-[2px] bg-gradient-to-r from-indigo-400 to-neutral-400 transition-all duration-500 group-hover:w-6 md:group-hover:w-8"></div>
                </span>
              </button>
            </div>

            {/* Tech Stats - Modern Card Grid */}
            <div className={`mt-12 md:mt-20 w-full max-w-4xl mx-auto transition-all duration-1000 delay-1500 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="rounded-xl md:rounded-2xl border border-neutral-200 bg-white/80 shadow-lg p-2 md:p-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                {[
                  { number: '99.99%', label: 'SYSTEM UPTIME', icon: <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-indigo-400 bg-indigo-50 flex items-center justify-center rounded-lg md:rounded-xl"><div className="w-3 h-3 md:w-4 md:h-4 bg-indigo-400 rounded-full"></div></div> },
                  { number: '<100μs', label: 'RESPONSE TIME', icon: <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-indigo-300 bg-indigo-50 flex items-center justify-center rounded-lg md:rounded-xl"><div className="w-4 md:w-6 h-1 bg-indigo-300 rounded"></div></div> },
                  { number: '24/7/365', label: 'THREAT MONITORING', icon: <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-indigo-500 bg-indigo-100 flex items-center justify-center rounded-lg md:rounded-xl"><div className="w-2 h-2 md:w-3 md:h-3 bg-indigo-500 rounded-full animate-pulse"></div></div> },
                  { number: 'AES-256', label: 'ENCRYPTION STANDARD', icon: <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-green-400 bg-green-50 flex items-center justify-center rounded-lg md:rounded-xl"><div className="grid grid-cols-2 gap-0.5"><div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded"></div><div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded"></div><div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded"></div><div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded"></div></div></div> }
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg md:rounded-xl border border-neutral-100 shadow-sm p-3 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-md hover:border-indigo-200">
                    <div className="flex justify-center items-center mb-2 md:mb-4">{stat.icon}</div>
                    <div className="text-lg md:text-2xl lg:text-3xl font-bold text-indigo-600 mb-1 tracking-tight text-center">{stat.number}</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-[0.1em] md:tracking-[0.15em] font-medium text-center leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 md:space-y-3">
            <div className="w-6 h-12 md:w-8 md:h-16 border-2 border-indigo-300 bg-white flex justify-center items-end pb-1 md:pb-2 rounded-full">
              <div className="w-1 h-3 md:h-4 bg-gradient-to-b from-indigo-400 to-indigo-600 animate-pulse rounded-full"></div>
            </div>
            <span className="text-xs text-indigo-400 tracking-[0.15em] md:tracking-[0.2em] uppercase font-light">SCROLL FOR OPERATIONS</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
