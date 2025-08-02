"use client";
import React, { useState, useEffect } from 'react';
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import { About } from '@/components/sections/about'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Stats } from '@/components/sections/stats'
import { CTA } from '@/components/sections/cta'

interface TabType {
  id: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  color: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const tabs: TabType[] = [
    {
      id: 'mission',
      label: 'MISSION CONTROL',
      icon: <div className="w-6 h-6 border-2 border-cyan-400 bg-cyan-400/10 flex items-center justify-center"><div className="w-3 h-3 bg-cyan-400"></div></div>,
      component: <About />,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'stats',
      label: 'SYSTEM STATUS',
      icon: <div className="w-6 h-6 border-2 border-purple-400 bg-purple-400/10 flex items-center justify-center"><div className="w-4 h-[2px] bg-purple-400"></div></div>,
      component: <Stats />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'arsenal',
      label: 'SECURITY ARSENAL',
      icon: <div className="w-6 h-6 border-2 border-green-400 bg-green-400/10 flex items-center justify-center"><div className="grid grid-cols-2 gap-0.5"><div className="w-1 h-1 bg-green-400"></div><div className="w-1 h-1 bg-green-400"></div><div className="w-1 h-1 bg-green-400"></div><div className="w-1 h-1 bg-green-400"></div></div></div>,
      component: <Services />,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'testimonials',
      label: 'CLIENT REPORTS',
      icon: <div className="w-6 h-6 border-2 border-orange-400 bg-orange-400/10 flex items-center justify-center"><div className="w-2 h-2 bg-orange-400 rounded-full"></div></div>,
      component: <Testimonials />,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'action',
      label: 'DEPLOYMENT',
      icon: <div className="w-6 h-6 border-2 border-indigo-400 bg-indigo-400/10 flex items-center justify-center"><div className="w-3 h-3 bg-indigo-400 rotate-45"></div></div>,
      component: <CTA />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'contact',
      label: 'SECURE COMMS',
      icon: <div className="w-6 h-6 border-2 border-rose-400 bg-rose-400/10 flex items-center justify-center"><div className="w-1 h-4 bg-rose-400"></div><div className="w-1 h-2 bg-rose-400 ml-1"></div></div>,
      component: <Contact />,
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section - Always Visible */}
      <Hero />
      
      {/* Futuristic Tab Navigation */}
      <div className="relative py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.03)_25%,transparent_25%),linear-gradient(-45deg,rgba(139,92,246,0.03)_25%,transparent_25%)] bg-[size:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Tab Navigation */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Command Interface Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-slate-900/80 backdrop-blur-xl border border-cyan-400/50 rounded-2xl px-8 py-4 mb-12">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm animate-pulse"></div>
                <span className="text-cyan-100 font-bold text-base tracking-[0.2em] uppercase">OPERATIONS COMMAND CENTER</span>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm animate-pulse"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-slate-100 via-white to-slate-100 bg-clip-text text-transparent">
                  TACTICAL
                </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {" "}INTERFACE
                </span>
              </h2>
            </div>

            {/* Tab Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative overflow-hidden p-8 transition-all duration-500 hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-slate-800/80 backdrop-blur-xl border-2 border-cyan-400 shadow-2xl shadow-cyan-400/25'
                      : 'bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600/80'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tab.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Active Tab Glow */}
                  {activeTab === tab.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} opacity-10 animate-pulse`}></div>
                  )}

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className={`mb-4 transform transition-all duration-300 flex justify-center ${
                      activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'
                    }`}>
                      {tab.icon}
                    </div>
                    
                    {/* Label */}
                    <div className={`font-bold text-xs transition-colors duration-300 tracking-[0.1em] ${
                      activeTab === tab.id 
                        ? 'text-cyan-300' 
                        : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {tab.label}
                    </div>

                    {/* Active Indicator */}
                    {activeTab === tab.id && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-[2px] bg-cyan-400 animate-pulse"></div>
                    )}
                  </div>

                  {/* Border Lines */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    activeTab === tab.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                    <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                    <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Content Container with Futuristic Border */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
                {/* Neural Activity Header */}
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">
                        {tabs.find(tab => tab.id === activeTab)?.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {tabs.find(tab => tab.id === activeTab)?.label}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400 uppercase tracking-wider">System Online</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Neural Activity Indicator */}
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-cyan-400 rounded-full animate-pulse"
                            style={{
                              height: `${Math.random() * 20 + 10}px`,
                              animationDelay: `${i * 200}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs text-cyan-400 uppercase tracking-wider">Neural Activity</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Content */}
                <div className="relative">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`transition-all duration-500 ${
                        activeTab === tab.id
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-10 absolute inset-0 pointer-events-none'
                      }`}
                    >
                      {tab.component}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantum Field Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
