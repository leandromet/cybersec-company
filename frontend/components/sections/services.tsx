"use client";
import React, { useState } from "react";
import Modal from "../services/Modal";
import { services, simulatorData } from "../services/data";
import { Solution } from "../services/types";

// FeaturesList component for hover functionality
const FeaturesList: React.FC<{
  features: string[];
  timeline: string;
  category: string;
  isVisible: boolean;
}> = ({ features, timeline, category, isVisible }) => {
  return (
    <div className="relative">
      {isVisible && (
        <div className="animate-fadeIn">
          <div className="space-y-2 mb-4 pt-2">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-green-500 text-xs">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
            <span className="flex items-center gap-1">
              <span>⏱️</span>
              <span>{timeline}</span>
            </span>
            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium capitalize">
              {category}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [currentNode, setCurrentNode] = useState<string>("");
  const [selections, setSelections] = useState<{ [nodeId: string]: string }>({});
  const [finalSolution, setFinalSolution] = useState<Solution | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    setExpandedService(serviceId);
    setSelections({});
    setFinalSolution(null);

    if (typeof window !== 'undefined') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (simulatorData[serviceId]) {
      setCurrentNode(simulatorData[serviceId].startNode);
    } else {
      setCurrentNode("");
    }
  };

  const handleOptionSelect = (nodeId: string, option: any) => {
    const newSelections = { ...selections, [nodeId]: option.value };
    setSelections(newSelections);

    if (option.solution) {
      setFinalSolution(option.solution);
      setCurrentNode("");
    } else if (option.nextNode) {
      setCurrentNode(option.nextNode);
    }
  };

  const resetSimulator = () => {
    setExpandedService(null);
    setCurrentNode("");
    setSelections({});
    setFinalSolution(null);
  };

  const restartSimulator = () => {
    if (expandedService && simulatorData[expandedService]) {
      setCurrentNode(simulatorData[expandedService].startNode);
      setSelections({});
      setFinalSolution(null);
    }
  };

  return (
    <>
      <section
        id="services"
        className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 md:py-20"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
           {/* Simulator Modal */}
      {expandedService && (
        <Modal
          isOpen={true}
          simulator={simulatorData[expandedService] || {
            title: `${services.find(s => s.id === expandedService)?.title} Solution Finder`,
            description: "We're preparing a custom solution finder for this service. Contact us for a personalized consultation.",
            startNode: "contact",
            nodes: {
              contact: {
                id: "contact",
                question: "Ready to discuss your specific needs?",
                options: [
                  {
                    label: "Yes, let's talk!",
                    value: "contact",
                    solution: {
                      title: "Personalized Consultation",
                      description: "Our experts will work with you to understand your specific requirements and create a tailored solution.",
                      features: ["Free Consultation", "Custom Solution Design", "Competitive Pricing", "Expert Guidance"],
                      price: "Contact for Quote",
                      timeline: "Same day response",
                    },
                  },
                ],
              },
            },
          }}
          currentNode={currentNode}
          selections={selections}
          finalSolution={finalSolution}
          onOptionSelect={handleOptionSelect}
          onReset={resetSimulator}
          onRestart={restartSimulator}
          onClose={resetSimulator}
        />
      )}


          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight px-4">
              Our Technology Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              From cybersecurity to AI integration, we provide comprehensive
              technology solutions tailored for businesses of all sizes - from
              home offices to medium enterprises.
            </p>
            <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-purple-800 font-medium text-center">
                💡 Hover over any service to see details • Click "🚀 Find" to explore solutions
              </p>
            </div>
          </div>

          

          {/* Services Grid - Simple Layout */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-400 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02] p-6 min-h-[200px]"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-md">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">
                          {service.title}
                        </h3>
                        <div className="text-sm text-purple-600 font-semibold">
                          {service.price}
                        </div>
                      </div>
                    </div>
                    
                    {/* Solution Finder Button */}
                    <button
                      onClick={() => {
                        if (expandedService === service.id) {
                          resetSimulator();
                        } else {
                          handleServiceClick(service.id);
                        }
                      }}
                      style={{
                        background: expandedService === service.id
                          ? 'linear-gradient(to right, #4f46e5, #7c3aed)'
                          : 'linear-gradient(to right, #374151, #1f2937)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        flexShrink: 0
                      }}
                      onMouseEnter={(e) => {
                        if (expandedService !== service.id) {
                          e.currentTarget.style.background = 'linear-gradient(to right, #4f46e5, #7c3aed)';
                          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (expandedService !== service.id) {
                          e.currentTarget.style.background = 'linear-gradient(to right, #374151, #1f2937)';
                          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                        }
                      }}
                      tabIndex={-1}
                      type="button"
                    >
                      {expandedService === service.id ? "Simulator Active" : "Run Solution Finder"} →
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features - Only show on hover using useState */}
                  <FeaturesList 
                    features={service.features}
                    timeline={service.timeline}
                    category={service.category}
                    isVisible={hoveredCard === service.id}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-20">
            <div 
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 md:p-12 max-w-4xl mx-auto shadow-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)'
              }}
            >
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 tracking-tight">
                Ready to Transform Your Technology?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4">
                Connect with our technology specialists for a comprehensive consultation
              </p>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    background: 'linear-gradient(to right, #111827, #e5e7eb)', // black to light gray
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '16px',
                    fontSize: '18px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #e5e7eb, #111827)'; // reverse on hover
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.18)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #111827, #e5e7eb)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  type="button"
                >
                  <span>🚀 Start Your Transformation</span>
                </button>
            </div>
          </div>
        </div>
      </section>

     

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Services;
