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
  }, []);

  // Prevent hydration mismatch by not rendering animations until mounted
  if (!isMounted) {
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                VERNON
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                CYBERSEC
              </span>
              <span className="block text-2xl md:text-4xl font-normal text-gray-300 mt-2">
                Advanced Protection Systems
              </span>
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.3) 0%, transparent 50%)`
        }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Futuristic Badge */}
          <div className={`inline-flex items-center space-x-3 bg-slate-900/80 backdrop-blur-xl border border-cyan-400/50 rounded-2xl px-8 py-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} shadow-2xl shadow-cyan-500/20`}>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm animate-pulse"></div>
            <span className="text-cyan-100 font-bold text-base tracking-[0.2em] uppercase">ADVANCED THREAT PROTECTION</span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm animate-pulse"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.9] tracking-tight">
            <span className={`block bg-gradient-to-r from-slate-100 via-white to-slate-100 bg-clip-text text-transparent transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} drop-shadow-2xl`}>
              VERNON
            </span>
            <span className={`block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} drop-shadow-2xl`}>
              CYBERSEC
            </span>
            <span className={`block text-xl md:text-3xl lg:text-4xl font-light text-slate-300 mt-6 tracking-[0.1em] transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              ENTERPRISE SECURITY OPERATIONS
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl lg:text-3xl mb-16 text-slate-200 max-w-5xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Military-grade cybersecurity infrastructure protecting critical business operations with 
            <span className="text-cyan-400 font-medium"> quantum-resistant protocols</span>, 
            <span className="text-blue-400 font-medium"> AI-driven threat detection</span>, and 
            <span className="text-purple-400 font-medium"> zero-trust architecture</span>
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white font-bold px-12 py-5 rounded-none text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 border-2 border-cyan-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <span className="tracking-[0.1em] uppercase font-medium">DEPLOY PROTECTION</span>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </button>
            
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-transparent border-2 border-slate-400 text-slate-100 font-bold px-12 py-5 rounded-none text-lg transition-all duration-500 hover:bg-slate-800/50 hover:border-slate-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20"
            >
              <div className="relative flex items-center space-x-4">
                <div className="w-6 h-[2px] bg-gradient-to-r from-slate-400 to-cyan-400 transition-all duration-500 group-hover:w-8"></div>
                <span className="tracking-[0.1em] uppercase font-medium">ASSESS VULNERABILITIES</span>
                <div className="w-6 h-[2px] bg-gradient-to-r from-cyan-400 to-slate-400 transition-all duration-500 group-hover:w-8"></div>
              </div>
            </button>
          </div>

          {/* Tech Stats */}
          <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {[
              { number: '99.99%', label: 'SYSTEM UPTIME', icon: <div className="w-8 h-8 border-2 border-cyan-400 bg-cyan-400/10 flex items-center justify-center"><div className="w-3 h-3 bg-cyan-400 rounded-sm"></div></div> },
              { number: '<100μs', label: 'RESPONSE TIME', icon: <div className="w-8 h-8 border-2 border-blue-400 bg-blue-400/10 flex items-center justify-center"><div className="w-4 h-[2px] bg-blue-400"></div></div> },
              { number: '24/7/365', label: 'THREAT MONITORING', icon: <div className="w-8 h-8 border-2 border-purple-400 bg-purple-400/10 flex items-center justify-center"><div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div></div> },
              { number: 'AES-256', label: 'ENCRYPTION STANDARD', icon: <div className="w-8 h-8 border-2 border-green-400 bg-green-400/10 flex items-center justify-center"><div className="grid grid-cols-2 gap-0.5"><div className="w-1 h-1 bg-green-400"></div><div className="w-1 h-1 bg-green-400"></div><div className="w-1 h-1 bg-green-400"></div><div className="w-1 h-1 bg-green-400"></div></div></div> }
            ].map((stat, index) => (
              <div key={index} className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-8 hover:bg-slate-800/60 transition-all duration-500 hover:scale-105 hover:border-slate-600/80 group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2 tracking-tight">{stat.number}</div>
                <div className="text-xs text-slate-400 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-8 h-16 border-2 border-cyan-400/60 bg-slate-900/40 backdrop-blur-sm flex justify-center items-end pb-2">
            <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 animate-pulse"></div>
          </div>
          <span className="text-xs text-cyan-300/70 tracking-[0.2em] uppercase font-light">SCROLL FOR OPERATIONS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
