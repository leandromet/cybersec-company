import React from "react";

export const About: React.FC = () => (
  <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
            About Vernon CyberSec
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Protecting small and medium businesses in Vernon, BC with enterprise-grade cybersecurity solutions
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Your Local Cybersecurity Experts
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Okanagan GeoTechSolutions is dedicated to protecting businesses in Vernon and the surrounding area. 
                Our team of certified cybersecurity experts brings years of experience in threat detection, 
                compliance management, and incident response.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We understand that every business is unique, which is why we offer tailored security solutions 
                that grow with your company while staying within your budget.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: '🛡️', title: 'Expert Protection', desc: 'Certified security professionals' },
                { icon: '🌍', title: 'Local Support', desc: '24/7 support in Vernon, BC' },
                { icon: '⚡', title: 'Rapid Response', desc: 'Immediate incident response' },
                { icon: '💼', title: 'Business Focus', desc: 'SMB-tailored solutions' }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{feature.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats/Visual */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white">
            <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Our Track Record</h4>
            <div className="space-y-6 md:space-y-8">
              {[
                { number: '50+', label: 'Businesses Protected', icon: '🏢' },
                { number: '99.9%', label: 'Uptime Guaranteed', icon: '⚡' },
                { number: '24/7', label: 'Monitoring & Support', icon: '👁️' },
                { number: '5yr', label: 'Average Partnership', icon: '🤝' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-2xl md:text-3xl">{stat.icon}</div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                    <div className="text-indigo-100 text-sm md:text-base">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
