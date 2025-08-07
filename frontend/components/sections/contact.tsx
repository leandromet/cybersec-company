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
    alert("🛡️ Security Protocol Initiated! Our cyber specialists will contact you within 24 hours.");
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
    <section id="contact" className="relative py-24 bg-white text-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
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
              <span className="text-cyan-300 font-medium text-sm tracking-wider uppercase">Secure Communication</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Initialize Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Protocol
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Deploy secure channels to connect with our cybersecurity specialists for advanced protection solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm tracking-wider uppercase">Secure Form Active</span>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Agent Identification" 
                      required
                      className={`w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-neutral-50 focus:border-indigo-400 placeholder-neutral-500 text-black ${
                        focusedField === 'name' ? 'border-indigo-400 shadow-lg shadow-indigo-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-indigo-400 opacity-60">👤</div>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Secure Communication Channel" 
                      required
                      className={`w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-neutral-50 focus:border-indigo-400 placeholder-neutral-500 text-black ${
                        focusedField === 'email' ? 'border-indigo-400 shadow-lg shadow-indigo-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-indigo-400 opacity-60">📧</div>
                  </div>

                  {/* Company Field */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Organization Code" 
                      className={`w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-neutral-50 focus:border-indigo-400 placeholder-neutral-500 text-black ${
                        focusedField === 'company' ? 'border-indigo-400 shadow-lg shadow-indigo-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-indigo-400 opacity-60">🏢</div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Emergency Contact Frequency" 
                      className={`w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-neutral-50 focus:border-indigo-400 placeholder-neutral-500 text-black ${
                        focusedField === 'phone' ? 'border-indigo-400 shadow-lg shadow-indigo-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-indigo-400 opacity-60">📱</div>
                  </div>

                  {/* Service Selection */}
                  <div className="relative group">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-neutral-50 focus:border-indigo-400 text-black ${
                        focusedField === 'service' ? 'border-indigo-400 shadow-lg shadow-indigo-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" className="bg-white">Select Protection Protocol</option>
                      <option value="ai-threat" className="bg-white">AI Threat Detection</option>
                      <option value="quantum-assessment" className="bg-white">Quantum Vulnerability Assessment</option>
                      <option value="neural-monitoring" className="bg-white">Neural Network Monitoring</option>
                      <option value="compliance-matrix" className="bg-white">Regulatory Compliance Matrix</option>
                      <option value="incident-response" className="bg-white">Incident Response Protocol</option>
                      <option value="cyber-training" className="bg-white">Cyber Warfare Training</option>
                    </select>
                    <div className="absolute right-4 top-4 text-indigo-400 opacity-60">⚙️</div>
                  </div>

                  {/* Message Field */}
                  <div className="relative group">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Threat Assessment Details & Security Requirements..."
                      rows={4}
                      className={`w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 transition-all duration-300 focus:outline-none focus:bg-neutral-50 focus:border-indigo-400 placeholder-neutral-500 text-black resize-none ${
                        focusedField === 'message' ? 'border-indigo-400 shadow-lg shadow-indigo-400/25' : ''
                      }`}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className="absolute right-4 top-4 text-indigo-400 opacity-60">💬</div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden bg-indigo-600 text-white font-bold py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <span>DEPLOY SECURE TRANSMISSION</span>
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm">🚀</span>
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
                    <span className="text-cyan-300 font-medium text-sm tracking-wider uppercase">Command Center</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <div className="text-black font-semibold">Vernon Operations Base</div>
                        <div className="text-gray-400">British Columbia, Canada</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                        <span className="text-xl">📱</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Emergency Hotline</div>
                        <div className="text-gray-400">+1 (250) CYBER-SEC</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                        <span className="text-xl">📧</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Secure Communications</div>
                        <div className="text-gray-400">contact@okanagantechgeo.ca</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 font-medium text-sm tracking-wider uppercase">Response Matrix</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Emergency Response</span>
                      <span className="text-green-400 font-bold">&lt; 15 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">General Inquiries</span>
                      <span className="text-cyan-400 font-bold">&lt; 4 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Assessment Reports</span>
                      <span className="text-purple-400 font-bold">&lt; 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <div className="text-xl font-bold text-white mb-2">Quantum-Secured Communications</div>
                  <div className="text-gray-300 text-sm">All transmissions encrypted with military-grade protocols</div>
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
