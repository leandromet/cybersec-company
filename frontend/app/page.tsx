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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff, #f9fafb)'
    }}>
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)'
      }}>
        {/* Professional Background Effects */}
        <div style={{
          position: 'absolute',
          inset: '0',
          opacity: '0.6'
        }}>
          <div style={{
            position: 'absolute',
            inset: '0',
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(5, 150, 105, 0.08) 0%, transparent 50%)`
          }}></div>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(5, 150, 105, 0.05) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '30%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
        </div>
        
        {/* Hero Content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: '10',
          padding: '0 32px'
        }}>
          <div style={{
            transition: 'all 1s ease',
            opacity: isVisible ? '1' : '0',
            transform: isVisible ? 'translateY(0)' : 'translateY(32px)'
          }}>
            
            {/* Professional Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              border: '1px solid #d1d5db',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '12px 24px',
              marginBottom: '64px',
              fontSize: '14px',
              letterSpacing: '0.1em',
              color: '#4b5563',
              borderRadius: '9999px',
              fontWeight: '500'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#059669',
                borderRadius: '50%'
              }}></div>
              <span>GIS & TECHNOLOGY SOLUTIONS</span>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#059669',
                borderRadius: '50%'
              }}></div>
            </div>

            {/* Professional Typography */}
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '300',
              marginBottom: '32px',
              letterSpacing: '-0.02em',
              lineHeight: '0.9'
            }}>
              <span style={{
                display: 'block',
                color: '#111827',
                marginBottom: '16px'
              }}>Okanagan</span>
              <span style={{
                display: 'block',
                color: '#059669',
                fontWeight: '600'
              }}>GeoTech</span>
            </h1>
            
            <div style={{
              width: '96px',
              height: '2px',
              background: '#d1d5db',
              margin: '0 auto 48px'
            }}></div>
            
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: '#4b5563',
              maxWidth: '768px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '300',
              marginBottom: '64px'
            }}>
              Digital security, Advanced GIS mapping and spatial analysis solutions for the Okanagan Valley, providing
              <span style={{ color: '#111827', fontWeight: '500' }}> precise geospatial intelligence</span> and
              <span style={{ color: '#111827', fontWeight: '500' }}> comprehensive technology services</span>
            </p>

            {/* Professional Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '48px',
              maxWidth: '1024px',
              margin: '0 auto'
            }}>
              {[
                { value: '20+', label: 'Projects Completed' },
                { value: '<24h', label: 'Response Time' },
                { value: '99.9%', label: 'Accuracy Rate' },
                { value: '15+', label: 'Experienced Professionals' }
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: '300',
                    color: '#111827',
                    marginBottom: '8px'
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: '500'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Professional CTA Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              justifyContent: 'center',
              marginTop: '64px',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(to right, #059669, #0d9488)',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  minWidth: '180px',
                  boxShadow: '0 8px 16px rgba(5, 150, 105, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = 'linear-gradient(to right, #047857, #0f766e)';
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 12px 20px rgba(5, 150, 105, 0.4)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = 'linear-gradient(to right, #059669, #0d9488)';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 8px 16px rgba(5, 150, 105, 0.3)';
                }}
              >
                <span>🗺️</span>
                <span>Start Your Project</span>
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '16px 32px',
                  background: 'transparent',
                  color: '#059669',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: '2px solid #059669',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  minWidth: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = 'rgba(5, 150, 105, 0.1)';
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 8px 16px rgba(5, 150, 105, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = 'transparent';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}
              >
                <span>🛠️</span>
                <span>View Services</span>
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

      {/* Professional Footer */}
      <footer style={{
        borderTop: '1px solid #e5e7eb',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '64px 32px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px'
          }}>
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    background: 'white',
                    borderRadius: '2px'
                  }}></div>
                </div>
                <span style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#111827'
                }}>Okanagan GeoTech</span>
              </div>
              <p style={{
                color: '#4b5563',
                lineHeight: '1.7',
                maxWidth: '400px'
              }}>
                Professional GIS mapping, spatial analysis, and technology solutions 
                for the Okanagan Valley and beyond. Empowering businesses with precise 
                geospatial intelligence.
              </p>
            </div>
            
            <div>
              <h4 style={{
                fontWeight: '600',
                color: '#111827',
                marginBottom: '16px'
              }}>Services</h4>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '14px',
                color: '#4b5563'
              }}>
                <li>GIS Mapping & Analysis</li>
                <li>Spatial Data Processing</li>
                <li>IT Security & Management</li>
                <li>Custom Development</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{
                fontWeight: '600',
                color: '#111827',
                marginBottom: '16px'
              }}>Contact</h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '14px',
                color: '#4b5563'
              }}>
                <p>Vernon, BC, Canada</p>
                <p>+1 (250) 555-TECH</p>
                <p>contact@okanagantechgeo.ca</p>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #e5e7eb',
            marginTop: '48px',
            paddingTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '14px',
            color: '#6b7280',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <p>© 2025 Okanagan GeoTech. All rights reserved.</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px'
            }}>
              <a href="#" style={{
                color: '#6b7280',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#374151'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#6b7280'}
              >Privacy</a>
              <a href="#" style={{
                color: '#6b7280',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#374151'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#6b7280'}
              >Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
