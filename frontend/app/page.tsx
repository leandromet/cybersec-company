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
      component: (
        <div style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'white', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'black', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                About Vernon CyberSec
              </h2>
              <div style={{ width: '80px', height: '2px', backgroundColor: '#4f46e5', margin: '0 auto 32px' }}></div>
              <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Leading cybersecurity experts protecting businesses across British Columbia with cutting-edge security solutions and unparalleled expertise.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', marginBottom: '80px' }}>
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>🛡️</div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>Expert Team</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Our certified security professionals bring decades of combined experience in enterprise cybersecurity, compliance, and threat management.
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>🎯</div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>Local Focus</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Based in Vernon, BC, we understand the unique challenges facing Canadian businesses and provide tailored security solutions for local enterprises.
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>⚡</div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>24/7 Support</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Round-the-clock monitoring and incident response ensures your business stays protected against evolving cyber threats at all times.
                </p>
              </div>
            </div>
            
            <div style={{ backgroundColor: '#4f46e5', borderRadius: '24px', padding: '64px', textAlign: 'center', color: 'white' }}>
              <h3 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', color: 'white' }}>Our Mission</h3>
              <p style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', color: '#e0e7ff' }}>
                To provide world-class cybersecurity solutions that protect businesses while enabling growth and innovation. We believe security should empower, not hinder, your business objectives.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      label: 'Services',
      component: (
        <div style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'white', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'black', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Comprehensive Security Services
              </h2>
              <div style={{ width: '80px', height: '2px', backgroundColor: '#4f46e5', margin: '0 auto 32px' }}></div>
              <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                From vulnerability assessments to incident response, we offer complete cybersecurity solutions tailored to your business needs.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
              {[
                {
                  icon: '🔍',
                  title: 'Security Assessments',
                  description: 'Comprehensive evaluation of your current security posture with detailed recommendations for improvement.',
                  features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Analysis', 'Compliance Review']
                },
                {
                  icon: '🛡️',
                  title: 'Managed Security',
                  description: '24/7 monitoring and management of your security infrastructure by our expert team.',
                  features: ['SIEM Management', 'Threat Monitoring', 'Incident Response', 'Security Updates']
                },
                {
                  icon: '📋',
                  title: 'Compliance Consulting',
                  description: 'Expert guidance to achieve and maintain compliance with industry standards and regulations.',
                  features: ['PIPEDA Compliance', 'ISO 27001', 'SOC 2', 'Industry Standards']
                },
                {
                  icon: '🎓',
                  title: 'Security Training',
                  description: 'Comprehensive training programs to educate your team on cybersecurity best practices.',
                  features: ['Phishing Awareness', 'Security Policies', 'Incident Response', 'Best Practices']
                },
                {
                  icon: '🚨',
                  title: 'Incident Response',
                  description: 'Rapid response and recovery services to minimize the impact of security incidents.',
                  features: ['24/7 Emergency Response', 'Forensic Analysis', 'Recovery Planning', 'Prevention Strategies']
                },
                {
                  icon: '☁️',
                  title: 'Cloud Security',
                  description: 'Specialized security solutions for cloud environments and hybrid infrastructures.',
                  features: ['Cloud Configuration', 'Access Management', 'Data Protection', 'Migration Security']
                }
              ].map((service, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e5e5', 
                  borderRadius: '16px', 
                  padding: '32px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                  target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.boxShadow = 'none';
                  target.style.transform = 'translateY(0)';
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '24px' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>{service.title}</h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '24px' }}>{service.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginBottom: '8px',
                        color: '#374151',
                        fontSize: '14px'
                      }}>
                        <div style={{ 
                          width: '6px', 
                          height: '6px', 
                          backgroundColor: '#4f46e5', 
                          borderRadius: '50%', 
                          marginRight: '12px' 
                        }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
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
      {/* Main Header with Tab Navigation */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'white', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', height: '80px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 32px', backgroundColor: '#f9fafb', borderRight: '1px solid #e5e5e5' }}>
            <span style={{ fontWeight: '900', fontSize: '24px', color: 'black' }}>Vernon</span>
            <span style={{ fontWeight: '900', fontSize: '24px', color: '#4f46e5', marginLeft: '4px' }}>CyberSec</span>
          </div>
          
          {/* Tab Navigation */}
          <div style={{ flex: 1, display: 'flex' }}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '80px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderRight: '1px solid #e5e5e5',
                  borderBottom: activeTab === tab.id ? '2px solid #4f46e5' : '2px solid transparent',
                  color: activeTab === tab.id ? '#4f46e5' : '#6b7280',
                  backgroundColor: activeTab === tab.id ? 'white' : 'transparent',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#f9fafb';
                    target.style.color = '#374151';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#6b7280';
                  }
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 32px', backgroundColor: '#f9fafb', borderLeft: '1px solid #e5e5e5' }}>
            <button 
              onClick={() => setActiveTab('contact')}
              style={{ 
                backgroundColor: '#4f46e5', 
                color: 'white', 
                padding: '12px 24px', 
                borderRadius: '8px', 
                fontSize: '14px', 
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
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
