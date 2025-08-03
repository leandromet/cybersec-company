"use client";
import React, { useState, useEffect } from 'react';
import { About } from '@/components/sections/about'
import Services from '@/components/sections/services'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Stats } from '@/components/sections/stats'
import { CTA } from '@/components/sections/cta'

interface TabType {
  id: string;
  label: string;
  component: React.ReactNode;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Ensure visibility is set immediately
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const tabs: TabType[] = [
    {
      id: 'overview',
      label: 'Overview',
      component: (
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-white px-8 py-16">
          {/* Hero Content */}
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Minimal Badge */}
              <div className="inline-flex items-center space-x-3 border border-neutral-300 bg-white px-8 py-3 rounded-lg mb-16 text-sm tracking-wider text-neutral-600 shadow-sm">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="font-medium uppercase">ENTERPRISE SECURITY</span>
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              </div>

              {/* Clean Typography */}
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-[-0.02em] leading-[0.85] text-black">
                <span className="block mb-4">VERNON</span>
                <span className="block text-indigo-600 font-medium">CYBERSEC</span>
              </h1>
              
              <div className="w-24 h-px bg-neutral-300 mx-auto mb-12"></div>
              
              <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-light mb-16">
                Advanced cybersecurity solutions designed for modern enterprises requiring
                <span className="text-black font-medium"> military-grade protection</span> and 
                <span className="text-black font-medium"> zero-compromise security</span>
              </p>

              {/* Minimal Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
                {[
                  { value: '99.99%', label: 'Uptime' },
                  { value: '<50ms', label: 'Response' },
                  { value: '24/7', label: 'Monitoring' },
                  { value: 'AES-256', label: 'Encryption' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="text-3xl font-light text-black mb-2">{stat.value}</div>
                    <div className="text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      label: 'About',
      component: <About />
    },
    {
      id: 'services',
      label: 'Services',
      component: <Services />
    },
    {
      id: 'insights',
      label: 'Insights',
      component: <Stats />
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      component: <Testimonials />
    },
    {
      id: 'contact',
      label: 'Contact',
      component: <Contact />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans" style={{fontFamily: 'DM Sans, Inter, sans-serif'}}>
      {/* Main Header with Full-Width Tab Navigation */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
        <div className="w-full">
          <div className="flex items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3 px-8 py-4 bg-neutral-50 border-r border-neutral-200 min-w-fit">
              <span className="font-black text-2xl tracking-tight text-black">Vernon</span>
              <span className="font-black text-2xl tracking-tight text-indigo-600">CyberSec</span>
            </div>
            
            {/* Full-Width Tab Navigation Bar */}
            <nav className="flex-1 flex h-full bg-white">
              <div className="flex flex-1 h-full w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center cursor-pointer select-none relative
                  font-semibold text-sm transition-all duration-200 h-full
                  min-w-0 px-8 py-0 border-r border-neutral-200 last:border-r-0 rounded-lg
                  ${activeTab === tab.id 
                    ? 'bg-indigo-600 text-white shadow hover:bg-indigo-700'
                    : 'text-neutral-600 bg-white hover:bg-indigo-600 hover:text-white shadow-sm'
                  }`}
                  style={{ fontFamily: 'inherit' }}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  <span className="truncate relative z-10 py-4 flex items-center gap-2">
                  {tab.label}
                  {activeTab === tab.id && (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/>
                    </svg>
                  )}
                  </span>
                </button>
              ))}
              </div>
            </nav>
            
            {/* CTA Button Section */}
            <div className="px-8 py-4 bg-neutral-50 border-l border-neutral-200 min-w-fit">
              <button 
                onClick={() => setActiveTab('contact')}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow hover:bg-indigo-700 transition-colors duration-200"
              >
                <span>Get Started</span>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Width Tab Content */}
      <main className="min-h-[calc(100vh-5rem)] bg-white">
        <div className="w-full">
          {tabs.map(tab => (
            <section
              key={tab.id}
              style={{ display: activeTab === tab.id ? 'block' : 'none' }}
              className="w-full min-h-[calc(100vh-5rem)]"
            >
              {tab.component}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
