"use client";
import React, { useState, useEffect } from "react";

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert("✅ Message sent successfully! We'll contact you within 24 hours to discuss your project.");
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(56,189,248,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 font-medium text-sm tracking-wider uppercase">Professional Contact</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Get in Touch
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with our technology specialists for GIS solutions, IT security, AI integration, and custom development services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm tracking-wider uppercase">Contact Form</span>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name" 
                      required
                      className={`w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-white/10 focus:border-cyan-400 placeholder-gray-400 text-white ${
                        focusedField === 'name' ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-cyan-400 opacity-60">👤</div>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address" 
                      required
                      className={`w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-white/10 focus:border-purple-400 placeholder-gray-400 text-white ${
                        focusedField === 'email' ? 'border-purple-400 shadow-lg shadow-purple-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-purple-400 opacity-60">📧</div>
                  </div>

                  {/* Company Field */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name" 
                      className={`w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-white/10 focus:border-blue-400 placeholder-gray-400 text-white ${
                        focusedField === 'company' ? 'border-blue-400 shadow-lg shadow-blue-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-blue-400 opacity-60">🏢</div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number" 
                      className={`w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-white/10 focus:border-green-400 placeholder-gray-400 text-white ${
                        focusedField === 'phone' ? 'border-green-400 shadow-lg shadow-green-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-green-400 opacity-60">📱</div>
                  </div>

                  {/* Service Selection */}
                  <div className="relative group">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-white/10 focus:border-orange-400 text-white ${
                        focusedField === 'service' ? 'border-orange-400 shadow-lg shadow-orange-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" className="bg-slate-800">Select Service of Interest</option>
                      <option value="gis-mapping" className="bg-slate-800">GIS & Interactive Maps</option>
                      <option value="geoprocessing" className="bg-slate-800">Geoprocessing & Spatial Analysis</option>
                      <option value="it-security" className="bg-slate-800">IT Security & Management</option>
                      <option value="ai-integration" className="bg-slate-800">AI API Integration</option>
                      <option value="custom-development" className="bg-slate-800">Custom Development</option>
                      <option value="cloud-solutions" className="bg-slate-800">Cloud Solutions</option>
                      <option value="business-intelligence" className="bg-slate-800">Business Intelligence</option>
                      <option value="consultation" className="bg-slate-800">General Consultation</option>
                    </select>
                    <div className="absolute right-4 top-4 text-orange-400 opacity-60">⚙️</div>
                  </div>

                  {/* Message Field */}
                  <div className="relative group">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project requirements, technical needs, or questions..."
                      rows={4}
                      className={`w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-white/10 focus:border-pink-400 placeholder-gray-400 text-white resize-none ${
                        focusedField === 'message' ? 'border-pink-400 shadow-lg shadow-pink-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-pink-400 opacity-60">💬</div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      position: 'relative',
                      width: '100%',
                      overflow: 'hidden',
                      background: 'linear-gradient(to right, #06b6d4, #8b5cf6)',
                      color: 'white',
                      fontWeight: 'bold',
                      padding: '16px',
                      borderRadius: '16px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.5 : 1,
                      outline: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = 'scale(1.05)';
                        target.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.25)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = 'scale(1)';
                        target.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, #8b5cf6, #06b6d4)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }} className="hover:opacity-100"></div>
                    <div style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px'
                    }}>
                      {isSubmitting ? (
                        <>
                          <div style={{
                            width: '24px',
                            height: '24px',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            borderTop: '2px solid white',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                          }}></div>
                          <span>SENDING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <div style={{
                            width: '24px',
                            height: '24px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <span style={{ fontSize: '14px' }}>�</span>
                          </div>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-8">
                
                {/* Main Contact Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-300 font-medium text-sm tracking-wider uppercase">Contact Information</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Vernon Office</div>
                        <div className="text-gray-400">British Columbia, Canada</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                        <span className="text-xl">📱</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Phone</div>
                        <div className="text-gray-400">+1 (250) 555-TECH</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                        <span className="text-xl">📧</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Email</div>
                        <div className="text-gray-400">contact@okanagantechgeo.ca</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 font-medium text-sm tracking-wider uppercase">Response Times</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Project Consultation</span>
                      <span className="text-green-400 font-bold">&lt; 4 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Quote Requests</span>
                      <span className="text-cyan-400 font-bold">&lt; 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Technical Support</span>
                      <span className="text-purple-400 font-bold">&lt; 2 hours</span>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 text-center">
                  <div className="text-4xl mb-4">�</div>
                  <div className="text-xl font-bold text-white mb-2">Business Hours</div>
                  <div className="text-gray-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                  <div className="text-gray-300 text-sm">Emergency support available 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
