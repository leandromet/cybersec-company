"use client";
import React, { useState, useEffect } from 'react';
import Services from '../components/sections/services';

interface TabType {
  id: string;
  label: string;
  component: React.ReactNode;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
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

  const tabs = [
    {
      id: 'home',
      label: 'Home',
      component: (
        <div style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'white' }}>
          {/* Hero Section */}
          <div style={{ padding: '120px 32px 80px', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h1 style={{ 
                fontSize: '64px', 
                fontWeight: '300', 
                color: 'white', 
                marginBottom: '24px', 
                letterSpacing: '-0.02em',
                textShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                Okanagan GeoTechSolutions
              </h1>
              <p style={{ 
                fontSize: '24px', 
                color: 'rgba(255,255,255,0.9)', 
                maxWidth: '800px', 
                margin: '0 auto 48px', 
                lineHeight: '1.5'
              }}>
                Complete technology solutions for home offices to medium businesses. Security, AI APIs, Interactive Maps, and custom development tailored to your needs.
              </p>
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  style={{
                    padding: '16px 32px',
                    backgroundColor: 'white',
                    color: '#4f46e5',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                >
                  Get Technology Assessment
                </button>
                <button
                  style={{
                    padding: '16px 32px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'white';
                    target.style.color = '#4f46e5';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = 'white';
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div style={{ padding: '80px 32px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'black', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                  Why Choose Okanagan GeoTechSolutions?
                </h2>
                <div style={{ width: '80px', height: '2px', backgroundColor: '#4f46e5', margin: '0 auto 32px' }}></div>
                <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                  We combine cutting-edge technology expertise with local knowledge to deliver comprehensive IT solutions that grow with your business.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
                {[
                  {
                    icon: '🛡️',
                    title: 'Security & IT Management',
                    description: 'From basic firewalls to enterprise security planning. Complete IT infrastructure management and cybersecurity solutions.'
                  },
                  {
                    icon: '🤖',
                    title: 'AI API Integration',
                    description: 'Custom AI solutions and API integrations to automate processes and enhance business intelligence capabilities.'
                  },
                  {
                    icon: '🗺️',
                    title: 'GIS & Interactive Maps',
                    description: 'Geospatial solutions, custom mapping applications, and location-based services for data visualization and analysis.'
                  }
                ].map((feature, index) => (
                  <div key={index} style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{ fontSize: '64px', marginBottom: '24px' }}>{feature.icon}</div>
                    <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>{feature.title}</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '16px' }}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{ padding: '80px 32px', backgroundColor: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', textAlign: 'center' }}>
                {[
                  { number: '200+', label: 'Projects Completed' },
                  { number: '50+', label: 'Business Clients' },
                  { number: '24/7', label: 'Technical Support' },
                  { number: '15+', label: 'Years Experience' }
                ].map((stat, index) => (
                  <div key={index}>
                    <div style={{ fontSize: '48px', fontWeight: '300', color: '#4f46e5', marginBottom: '8px' }}>{stat.number}</div>
                    <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '500' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ padding: '80px 32px', backgroundColor: '#1f2937', textAlign: 'center' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '600', color: 'white', marginBottom: '24px' }}>
                Ready to Transform Your Business Technology?
              </h2>
              <p style={{ fontSize: '20px', color: '#9ca3af', marginBottom: '40px', lineHeight: '1.6' }}>
                Get a comprehensive technology assessment and personalized solution plan for your organization.
              </p>
              <button
                style={{
                  padding: '20px 48px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = '#4338ca';
                  target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = '#4f46e5';
                  target.style.transform = 'translateY(0)';
                }}
              >
                Schedule Free Consultation
              </button>
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
                About Okanagan GeoTechSolutions
              </h2>
              <div style={{ width: '80px', height: '2px', backgroundColor: '#4f46e5', margin: '0 auto 32px' }}></div>
              <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Your complete technology partner, offering security, AI integration, GIS mapping, and custom development solutions for businesses from home offices to medium enterprises across British Columbia.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', marginBottom: '80px' }}>
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>🛡️</div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>IT & Security Experts</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Certified professionals in IT management, cybersecurity, network administration, and infrastructure planning with decades of combined experience.
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>💻</div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>Custom Development</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  Full-stack developers specializing in AI integration, GIS applications, web platforms, and custom business automation solutions.
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>🎯</div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>Scalable Solutions</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                  From simple backup solutions to enterprise planning, we provide technology that grows with your business needs and budget.
                </p>
              </div>
            </div>
            
            {/* Location & Coverage Area */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '80px', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: '600', color: 'black', marginBottom: '24px' }}>Our Location & Coverage</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '24px', fontSize: '18px' }}>
                  Proudly based in <strong style={{ color: 'black' }}>Vernon, British Columbia</strong>, we serve businesses throughout the Interior and across Canada with on-site and remote cybersecurity services.
                </p>
                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>Service Areas</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {[
                      'Vernon', 'Kelowna', 'Kamloops', 'Penticton',
                      'Prince George', 'Vancouver', 'Victoria', 'Calgary'
                    ].map((city, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        color: city === 'Vernon' ? '#4f46e5' : '#6b7280',
                        fontWeight: city === 'Vernon' ? '600' : '400',
                        fontSize: '14px'
                      }}>
                        <div style={{ 
                          width: '6px', 
                          height: '6px', 
                          backgroundColor: city === 'Vernon' ? '#4f46e5' : '#d1d5db', 
                          borderRadius: '50%', 
                          marginRight: '12px' 
                        }}></div>
                        {city}
                        {city === 'Vernon' && <span style={{ marginLeft: '8px', fontSize: '12px' }}>🏠 HQ</span>}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ backgroundColor: '#f9fafb', padding: '24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
                  <p style={{ color: '#374151', margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
                    <strong>📍 Address:</strong> Vernon, BC, Canada<br />
                    <strong>🌐 Coverage:</strong> Western Canada + Remote Services<br />
                    <strong>⏰ Timezone:</strong> Pacific Time (PST/PDT)
                  </p>
                </div>
              </div>
              
              <div style={{ position: 'relative' }}>
                <h4 style={{ fontSize: '20px', fontWeight: '600', color: 'black', marginBottom: '24px', textAlign: 'center' }}>
                  British Columbia Coverage Map
                </h4>
                <div style={{ 
                  backgroundColor: '#f8fafc', 
                  border: '2px solid #e5e5e5', 
                  borderRadius: '16px', 
                  padding: '32px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <svg width="100%" height="300" viewBox="0 0 400 300" style={{ maxWidth: '400px' }}>
                    {/* BC Outline (simplified) */}
                    <path
                      d="M50 50 L350 50 L350 80 L380 100 L380 130 L360 150 L340 180 L320 200 L280 220 L240 240 L200 250 L160 245 L120 235 L80 220 L60 200 L45 180 L35 160 L30 140 L35 120 L40 100 L45 80 L50 50 Z"
                      fill="#e0e7ff"
                      stroke="#4f46e5"
                      strokeWidth="2"
                    />
                    
                    {/* Major Cities */}
                    <circle cx="120" cy="180" r="4" fill="#6b7280" />
                    <text x="120" y="200" textAnchor="middle" fontSize="10" fill="#6b7280">Vancouver</text>
                    
                    <circle cx="140" cy="220" r="4" fill="#6b7280" />
                    <text x="140" y="240" textAnchor="middle" fontSize="10" fill="#6b7280">Victoria</text>
                    
                    <circle cx="220" cy="140" r="4" fill="#6b7280" />
                    <text x="220" y="130" textAnchor="middle" fontSize="10" fill="#6b7280">Kamloops</text>
                    
                    <circle cx="280" cy="160" r="4" fill="#6b7280" />
                    <text x="280" y="150" textAnchor="middle" fontSize="10" fill="#6b7280">Kelowna</text>
                    
                    <circle cx="200" cy="90" r="4" fill="#6b7280" />
                    <text x="200" y="80" textAnchor="middle" fontSize="10" fill="#6b7280">Prince George</text>
                    
                    <circle cx="300" cy="190" r="4" fill="#6b7280" />
                    <text x="300" y="210" textAnchor="middle" fontSize="10" fill="#6b7280">Penticton</text>
                    
                    {/* Vernon - Highlighted */}
                    <circle cx="260" cy="140" r="8" fill="#4f46e5" stroke="white" strokeWidth="2" />
                    <circle cx="260" cy="140" r="12" fill="none" stroke="#4f46e5" strokeWidth="2" opacity="0.5">
                      <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="260" y="125" textAnchor="middle" fontSize="12" fontWeight="600" fill="#4f46e5">Vernon</text>
                    <text x="260" y="160" textAnchor="middle" fontSize="8" fill="#4f46e5">🏠 HQ</text>
                    
                    {/* Coverage radius indicator */}
                    <circle cx="260" cy="140" r="60" fill="none" stroke="#4f46e5" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
                  </svg>
                  
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '16px', 
                    right: '16px', 
                    backgroundColor: 'white', 
                    padding: '8px 12px', 
                    borderRadius: '8px', 
                    border: '1px solid #e5e5e5',
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#4f46e5', borderRadius: '50%', marginRight: '8px' }}></div>
                      Headquarters
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#6b7280', borderRadius: '50%', marginRight: '8px' }}></div>
                      Service Areas
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: '12px', height: '1px', backgroundColor: '#4f46e5', marginRight: '6px', opacity: 0.3 }}></div>
                      Coverage Zone
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  marginTop: '24px', 
                  textAlign: 'center', 
                  backgroundColor: '#fef3c7', 
                  padding: '16px', 
                  borderRadius: '12px',
                  border: '1px solid #fbbf24'
                }}>
                  <p style={{ margin: 0, color: '#92400e', fontSize: '14px', fontWeight: '500' }}>
                    🚀 <strong>On-site services available</strong> within 2-hour drive radius<br />
                    🌐 Remote support available across Canada
                  </p>
                </div>
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
      component: <Services />
    },
    {
      id: 'insights',
      label: 'Insights',
      component: (
        <div style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'white', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'black', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Technology Insights & Analytics
              </h2>
              <div style={{ width: '80px', height: '2px', backgroundColor: '#4f46e5', margin: '0 auto 32px' }}></div>
              <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Real-time project metrics and technology insights that showcase our expertise across IT, development, and innovation.
              </p>
            </div>
            
            {/* Key Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '80px' }}>
              {[
                { label: "Projects Delivered", value: "200+", icon: "�", trend: "+35%" },
                { label: "AI Integrations", value: "50+", icon: "🤖", trend: "+120%" },
                { label: "GIS Applications", value: "75+", icon: "🗺️", trend: "+85%" },
                { label: "Uptime Achieved", value: "99.8%", icon: "⚡", trend: "+0.3%" },
                { label: "Security Incidents", value: "0", icon: "�️", trend: "0%" },
                { label: "Client Satisfaction", value: "98%", icon: "⭐", trend: "+5%" }
              ].map((stat, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e5e5', 
                  borderRadius: '16px', 
                  padding: '32px', 
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
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
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '32px', fontWeight: '600', color: 'black', marginBottom: '8px' }}>{stat.value}</div>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>{stat.label}</div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: stat.trend.startsWith('+') ? '#10b981' : '#6b7280',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}>
                    <span>{stat.trend.startsWith('+') ? '↗' : stat.trend.startsWith('-') && stat.trend !== '-5min' ? '↘' : '→'}</span>
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Security Insights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '80px' }}>
              <div style={{ backgroundColor: '#f9fafb', padding: '40px', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '24px' }}>Technology Stack</h3>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#374151', fontWeight: '500' }}>Cloud & Infrastructure</span>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>95%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '95%', height: '100%', backgroundColor: '#10b981' }}></div>
                  </div>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#374151', fontWeight: '500' }}>AI & Machine Learning</span>
                    <span style={{ color: '#4f46e5', fontWeight: '600' }}>88%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '88%', height: '100%', backgroundColor: '#4f46e5' }}></div>
                  </div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#374151', fontWeight: '500' }}>GIS & Mapping</span>
                    <span style={{ color: '#f59e0b', fontWeight: '600' }}>92%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '92%', height: '100%', backgroundColor: '#f59e0b' }}></div>
                  </div>
                </div>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5' }}>
                  Technology expertise across modern development stacks and emerging technologies.
                </p>
              </div>
              
              <div style={{ backgroundColor: '#f9fafb', padding: '40px', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'black', marginBottom: '24px' }}>Service Quality</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { metric: 'Project Delivery', score: 98, color: '#10b981' },
                    { metric: 'Code Quality', score: 96, color: '#10b981' },
                    { metric: 'Client Satisfaction', score: 99, color: '#10b981' },
                    { metric: 'Support Response', score: 94, color: '#10b981' },
                    { metric: 'Innovation Index', score: 97, color: '#10b981' }
                  ].map((item, index) => (
                    <div key={index}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ color: '#374151', fontWeight: '500', fontSize: '14px' }}>{item.metric}</span>
                        <span style={{ color: item.color, fontWeight: '600', fontSize: '14px' }}>{item.score}%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', backgroundColor: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${item.score}%`, height: '100%', backgroundColor: item.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5', marginTop: '20px' }}>
                  Quality metrics across all Okanagan TechSolutions client projects and services.
                </p>
              </div>
            </div>

            {/* Recent Security News */}
            <div style={{ backgroundColor: '#4f46e5', borderRadius: '24px', padding: '64px', textAlign: 'center', color: 'white' }}>
              <h3 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', color: 'white' }}>Stay Updated</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 32px', color: '#e0e7ff' }}>
                Subscribe to our technology newsletter for the latest innovations, project showcases, and industry insights affecting BC businesses.
              </p>
              <div style={{ display: 'flex', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '16px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
                <button
                  style={{
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    color: '#4f46e5',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#f3f4f6'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'white'}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      component: (
        <div style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'white', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'black', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                What Our Clients Say
              </h2>
              <div style={{ width: '80px', height: '2px', backgroundColor: '#4f46e5', margin: '0 auto 32px' }}></div>
              <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Don't just take our word for it. Here's what business leaders across BC say about our cybersecurity services.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
              {[
                {
                  quote: "Okanagan GeoTechSolutions transformed our entire business with their AI integration. Our customer service efficiency improved by 300% with their custom chatbot solution.",
                  author: "Sarah Mitchell",
                  title: "CEO, Interior Marketing Agency",
                  company: "Kamloops, BC"
                },
                {
                  quote: "Their GIS mapping solution revolutionized our field operations. We can now track assets in real-time and optimize our routes automatically.",
                  author: "Dr. Michael Chen",
                  title: "Operations Director",
                  company: "BC Environmental Services"
                },
                {
                  quote: "From basic IT support to cloud migration, they handled everything seamlessly. Their security setup gives us peace of mind while their backup solutions saved us twice.",
                  author: "Jennifer Walsh",
                  title: "Office Manager",
                  company: "Okanagan Legal Group"
                },
                {
                  quote: "The custom dashboard they built gives us real-time insights into our manufacturing process. Data that used to take hours to compile is now available instantly.",
                  author: "Robert Taylor",
                  title: "Production Manager",
                  company: "Vernon Manufacturing Inc."
                },
                {
                  quote: "Their development team built us a mobile app that integrates with our inventory system. Game-changer for our field staff and customer satisfaction.",
                  author: "Lisa Park",
                  title: "IT Coordinator",
                  company: "BC Retail Solutions"
                },
                {
                  quote: "Professional, knowledgeable, and always available. They scaled our technology from a 2-person startup to a 20-employee company without any growing pains.",
                  author: "David Rodriguez",
                  title: "Founder",
                  company: "Interior Tech Startup"
                }
              ].map((testimonial, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e5e5', 
                  borderRadius: '16px', 
                  padding: '40px',
                  position: 'relative',
                  transition: 'all 0.3s ease'
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
                  <div style={{ fontSize: '48px', color: '#e5e5e5', position: 'absolute', top: '16px', left: '24px' }}>"</div>
                  <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '24px', paddingTop: '20px', fontSize: '16px', fontStyle: 'italic' }}>
                    {testimonial.quote}
                  </p>
                  <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '24px' }}>
                    <div style={{ fontWeight: '600', color: 'black', marginBottom: '4px' }}>{testimonial.author}</div>
                    <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '2px' }}>{testimonial.title}</div>
                    <div style={{ fontSize: '14px', color: '#9ca3af' }}>{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <div style={{ backgroundColor: '#f9fafb', padding: '48px', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                <h3 style={{ fontSize: '28px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>Join 50+ Satisfied Clients</h3>
                <p style={{ color: '#6b7280', marginBottom: '32px', fontSize: '18px' }}>
                  Ready to transform your business with technology? Let's discuss your needs and create a custom solution.
                </p>
                <button
                  style={{
                    padding: '16px 32px',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#4338ca'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#4f46e5'}
                >
                  Get Your Free Technology Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      component: (
        <div style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'white', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'black', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Get In Touch
              </h2>
              <div style={{ width: '80px', height: '2px', backgroundColor: '#4f46e5', margin: '0 auto 32px' }}></div>
              <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Ready to transform your business with technology? Contact our experts for a comprehensive consultation.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: '600', color: 'black', marginBottom: '32px' }}>Contact Information</h3>
                
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ fontSize: '24px', marginRight: '16px' }}>📍</div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'black', margin: 0 }}>Address</h4>
                      <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>Vernon, British Columbia, Canada</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ fontSize: '24px', marginRight: '16px' }}>📞</div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'black', margin: 0 }}>Phone</h4>
                      <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>+1 (250) 555-TECH</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ fontSize: '24px', marginRight: '16px' }}>📧</div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'black', margin: 0 }}>Email</h4>
                      <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>info@vernontech.ca</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: '24px', marginRight: '16px' }}>🕒</div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'black', margin: 0 }}>Hours</h4>
                      <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>24/7 Technical Support Available</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ backgroundColor: '#f9fafb', padding: '32px', borderRadius: '16px', border: '1px solid #e5e5e5' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: '600', color: 'black', marginBottom: '16px' }}>Technical Support</h4>
                  <p style={{ color: '#6b7280', marginBottom: '16px', lineHeight: '1.6' }}>
                    For technical issues, system emergencies, or urgent support needs, call our 24/7 helpline:
                  </p>
                  <p style={{ fontSize: '24px', fontWeight: '600', color: '#dc2626' }}>+1 (250) 555-HELP</p>
                </div>
              </div>
              
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: '600', color: 'black', marginBottom: '32px' }}>Send Message</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <input
                      type="text"
                      placeholder="First Name"
                      style={{
                        padding: '16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        backgroundColor: 'white',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#4f46e5'}
                      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#d1d5db'}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      style={{
                        padding: '16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        backgroundColor: 'white',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#4f46e5'}
                      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#d1d5db'}
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    style={{
                      padding: '16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      backgroundColor: 'white',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#4f46e5'}
                    onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#d1d5db'}
                  />
                  
                  <input
                    type="text"
                    placeholder="Company Name"
                    style={{
                      padding: '16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      backgroundColor: 'white',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#4f46e5'}
                    onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#d1d5db'}
                  />
                  
                  <select
                    style={{
                      padding: '16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      backgroundColor: 'white',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => (e.target as HTMLSelectElement).style.borderColor = '#4f46e5'}
                    onBlur={(e) => (e.target as HTMLSelectElement).style.borderColor = '#d1d5db'}
                  >
                    <option value="">Select Service Interest</option>
                    <option value="it-security">IT Security & Management</option>
                    <option value="ai-integration">AI API Integration</option>
                    <option value="gis-mapping">GIS & Interactive Maps</option>
                    <option value="development">Custom Development</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="business-intelligence">Business Intelligence</option>
                  </select>
                  
                  <textarea
                    placeholder="Message"
                    rows={6}
                    style={{
                      padding: '16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      backgroundColor: 'white',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = '#4f46e5'}
                    onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = '#d1d5db'}
                  />
                  
                  <button
                    type="submit"
                    style={{
                      padding: '16px 32px',
                      backgroundColor: '#4f46e5',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#4338ca'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#4f46e5'}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans" style={{fontFamily: 'DM Sans, Inter, sans-serif'}}>
      {/* Main Header with Tab Navigation */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'white', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', height: '80px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 32px', backgroundColor: '#f9fafb', borderRight: '1px solid #e5e5e5' }}>
            <span style={{ fontWeight: '900', fontSize: '24px', color: 'black' }}>Okanagan</span>
            <span style={{ fontWeight: '900', fontSize: '24px', color: '#4f46e5', marginLeft: '4px' }}>Tech</span>
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
