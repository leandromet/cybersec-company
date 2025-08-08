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
                Okanagan GeoTech
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
                style={{
                  position: 'relative',
                  padding: '6px 8px',
                  borderRadius: '8px',
                  color: '#000000',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ fontSize: '12px' }}>{item.icon}</span>
                  <span style={{ fontWeight: '500', fontSize: '12px' }}>{item.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'white',
            borderRadius: '50px',
            padding: '12px 24px',
            border: '1px solid #e5e5e5',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }} className="lg:flex">
            {[
              { name: 'About', id: 'about', icon: '🛡️' },
              { name: 'Services', id: 'services', icon: '⚡' },
              { name: 'Reviews', id: 'testimonials', icon: '⭐' },
              { name: 'Contact', id: 'contact', icon: '💬' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  position: 'relative',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  color: '#000000',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
              >
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 10
                }}>
                  <span style={{ fontSize: '14px' }}>{item.icon}</span>
                  <span style={{ fontWeight: '500', fontSize: '14px' }}>{item.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile-Optimized Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* CTA Button - Hidden on small mobile, visible on larger screens */}
            <button
              onClick={() => scrollToSection('services')}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: '#4f46e5',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                outline: 'none',
                boxShadow: '0 4px 6px rgba(79, 70, 229, 0.3)'
              }}
              className="sm:flex"
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = '#4338ca';
                target.style.boxShadow = '0 6px 12px rgba(79, 70, 229, 0.4)';
                target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = '#4f46e5';
                target.style.boxShadow = '0 4px 6px rgba(79, 70, 229, 0.3)';
                target.style.transform = 'scale(1)';
              }}
            >
              <span style={{ display: 'none' }} className="sm:inline">Get Started</span>
              <span style={{ fontSize: '16px' }}>🚀</span>
            </button>
            
            {/* Mobile Menu Button - Improved touch target */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                position: 'relative',
                width: '44px',
                height: '44px',
                borderRadius: '50px',
                backgroundColor: 'white',
                border: '1px solid #e5e5e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              className="md:hidden"
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#f5f5f5';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = 'white';
              }}
              aria-label="Toggle mobile menu"
            >
              <div style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <span style={{
                  height: '2px',
                  width: '20px',
                  backgroundColor: '#4f46e5',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform: isOpen ? 'rotate(45deg) translateY(4px)' : 'translateY(-4px)'
                }}></span>
                <span style={{
                  height: '2px',
                  width: '20px',
                  backgroundColor: '#4f46e5',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  margin: '2px 0',
                  opacity: isOpen ? 0 : 1
                }}></span>
                <span style={{
                  height: '2px',
                  width: '20px',
                  backgroundColor: '#4f46e5',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform: isOpen ? 'rotate(-45deg) translateY(-4px)' : 'translateY(4px)'
                }}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
              aria-label="Close mobile menu backdrop"
            />
            {/* Dropdown Menu */}
            <div className="fixed top-14 left-0 w-full z-50 flex justify-center animate-fadeInDown">
              <div className="bg-white/95 backdrop-blur-md rounded-xl m-2 sm:m-3 md:m-4 border border-neutral-200 shadow-2xl w-full max-w-sm mx-auto">
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
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '16px',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'transparent',
                        border: '1px solid transparent',
                        color: '#000000',
                        cursor: 'pointer',
                        outline: 'none',
                        minHeight: '70px',
                        animationDelay: `${index * 50}ms`
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#f5f5f5';
                        target.style.borderColor = '#e5e5e5';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'transparent';
                        target.style.borderColor = 'transparent';
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                      }}>
                        <div style={{ flexShrink: 0 }}>
                          <span style={{ fontSize: '24px' }}>{item.icon}</span>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontWeight: '600',
                            color: '#000000',
                            fontSize: '16px'
                          }}>
                            {item.name}
                          </div>
                          <div style={{
                            fontSize: '14px',
                            color: '#6b7280',
                            marginTop: '2px'
                          }}>
                            {item.desc}
                          </div>
                        </div>
                        <div style={{ flexShrink: 0 }}>
                          <span style={{
                            color: '#9ca3af',
                            fontSize: '14px',
                            transition: 'color 0.3s ease'
                          }}>→</span>
                        </div>
                      </div>
                    </button>
                  ))}
                  {/* Mobile CTA - Enhanced */}
                  <div style={{
                    paddingTop: '12px',
                    marginTop: '12px',
                    borderTop: '1px solid #e5e5e5'
                  }}>
                    <button
                      onClick={() => scrollToSection('services')}
                      style={{
                        width: '100%',
                        backgroundColor: '#4f46e5',
                        color: 'white',
                        padding: '16px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        minHeight: '60px',
                        boxShadow: '0 4px 6px rgba(79, 70, 229, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#4338ca';
                        target.style.boxShadow = '0 6px 12px rgba(79, 70, 229, 0.4)';
                        target.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#4f46e5';
                        target.style.boxShadow = '0 4px 6px rgba(79, 70, 229, 0.3)';
                        target.style.transform = 'scale(1)';
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>Get Started Now</span>
                      <span style={{ fontSize: '18px' }}>🚀</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              .animate-fadeInDown {
                animation: fadeInDown 0.3s cubic-bezier(0.4,0,0.2,1);
              }
              @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-24px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;