"use client";
import React, { useEffect, useState, useRef } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  delay: number;
}

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services: Service[] = [
    {
      id: 'threat-detection',
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms for real-time threat identification and automated response protocols.',
      icon: '🤖',
      features: ['Neural Pattern Recognition', 'Behavioral Analytics', 'Zero-Day Protection', 'Quantum Encryption'],
      color: 'from-cyan-500 to-blue-600',
      delay: 200
    },
    {
      id: 'vulnerability',
      title: 'Quantum Vulnerability Assessment',
      description: 'Comprehensive security audits using quantum-computing resistant testing methodologies.',
      icon: '�',
      features: ['Quantum-Safe Algorithms', 'Deep Code Analysis', 'Infrastructure Mapping', 'Risk Prioritization'],
      color: 'from-purple-500 to-pink-600',
      delay: 400
    },
    {
      id: 'monitoring',
      title: 'Neural Network Monitoring',
      description: '24/7 AI-powered monitoring with predictive analytics and autonomous threat neutralization.',
      icon: '🧠',
      features: ['Predictive Modeling', 'Autonomous Response', 'Global Threat Intel', 'Real-time Dashboards'],
      color: 'from-green-500 to-teal-600',
      delay: 600
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance Matrix',
      description: 'Automated compliance framework ensuring adherence to evolving cybersecurity regulations.',
      icon: '📋',
      features: ['Auto-Compliance', 'Audit Trails', 'Policy Automation', 'Regulatory Updates'],
      color: 'from-orange-500 to-red-600',
      delay: 800
    },
    {
      id: 'incident',
      title: 'Incident Response Protocol',
      description: 'Military-grade incident response with AI-assisted forensics and rapid containment systems.',
      icon: '⚡',
      features: ['Instant Containment', 'Digital Forensics', 'Recovery Protocols', 'Post-Incident Analysis'],
      color: 'from-indigo-500 to-purple-600',
      delay: 1000
    },
    {
      id: 'training',
      title: 'Cyber Warfare Training',
      description: 'Immersive VR-based security training programs with simulated attack scenarios.',
      icon: '🎯',
      features: ['VR Simulations', 'Phishing Defense', 'Social Engineering', 'Awareness Programs'],
      color: 'from-rose-500 to-pink-600',
      delay: 1200
    }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = entry.target.getAttribute('data-service-id');
            if (serviceId && !visibleCards.includes(serviceId)) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, serviceId]);
              }, services.find(s => s.id === serviceId)?.delay || 0);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const serviceCards = document.querySelectorAll('[data-service-id]');
    serviceCards.forEach(card => observer.observe(card));

    return () => {
      serviceCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 bg-white text-black overflow-hidden"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white border border-indigo-200 rounded-full px-6 py-3 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-indigo-700 font-medium text-sm tracking-wider uppercase">Security Arsenal</span>
            <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">
            <span className="block mb-2">Advanced Protection</span>
            <span className="text-indigo-600">Systems</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge cybersecurity solutions powered by artificial intelligence and quantum-resistant technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              data-service-id={service.id}
              className={`group relative transition-all duration-700 ${
                visibleCards.includes(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Service Card */}
              <div className="relative h-full bg-white border border-neutral-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-indigo-200 overflow-hidden shadow-sm">
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-indigo-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 transition-all duration-300 ${
                          hoveredCard === service.id
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-70 translate-x-2'
                        }`}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"></div>
                        <span className="text-sm text-neutral-500 group-hover:text-neutral-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Action */}
                  <div className={`mt-8 transition-all duration-300 ${
                    hoveredCard === service.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  }`}>
                    <div className="flex items-center space-x-2 text-indigo-600 font-medium cursor-pointer">
                      <span className="text-sm">Deploy System</span>
                      <div className="w-4 h-4 border border-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white border border-neutral-200 rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-black">
              Ready to Deploy Advanced Protection?
            </h3>
            <p className="text-xl text-neutral-600 mb-8">
              Connect with our cybersecurity specialists for a comprehensive security assessment
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-indigo-600 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-indigo-700"
            >
              <div className="relative flex items-center space-x-3">
                <span>Initialize Security Protocol</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🛡️</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
