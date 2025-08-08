"use client";
import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/navbar';
import { About } from '@/components/sections/about'
import Services from '@/components/sections/services'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Stats } from '@/components/sections/stats'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10 px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Minimal Badge */}
            <div className="inline-flex items-center space-x-3 border border-slate-300 bg-white/5 backdrop-blur-sm px-6 py-2 mb-16 text-sm tracking-wider text-slate-600">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              <span>ENTERPRISE SECURITY</span>
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Clean Typography */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-[-0.02em] leading-[0.85]">
              <span className="block text-slate-900 mb-4">VERNON</span>
              <span className="block text-blue-600 font-medium">CYBERSEC</span>
            </h1>
            
            <div className="w-24 h-px bg-slate-300 mx-auto mb-12"></div>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-16">
              Advanced cybersecurity solutions designed for modern enterprises requiring
              <span className="text-slate-900"> military-grade protection</span> and 
              <span className="text-slate-900"> zero-compromise security</span>
            </p>

            {/* Minimal Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
              {[
                { value: '99.99%', label: 'Uptime' },
                { value: '<50ms', label: 'Response' },
                { value: '24/7', label: 'Monitoring' },
                { value: 'AES-256', label: 'Encryption' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-blue-400 hover:bg-blue-400/10 text-blue-600 rounded-lg font-semibold text-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Insights Section */}
      <section id="insights">
        <Stats />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-6 bg-blue-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white"></div>
                </div>
                <span className="text-lg font-medium text-slate-900">Vernon CyberSec</span>
              </div>
              <p className="text-slate-600 leading-relaxed max-w-md">
                Advanced cybersecurity solutions for modern enterprises requiring military-grade protection.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Threat Detection</li>
                <li>Vulnerability Assessment</li>
                <li>Incident Response</li>
                <li>Compliance Consulting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-900 mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Vernon, BC, Canada</p>
                <p>+1 (250) 555-0123</p>
                <p>contact@okanagantechgeo.ca</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 mt-12 pt-8 flex items-center justify-between text-sm text-slate-500">
            <p>© 2025 Vernon CyberSec. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-slate-700 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-700 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
