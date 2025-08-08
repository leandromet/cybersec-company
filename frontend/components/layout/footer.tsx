"use client";
import React from "react";

export const Footer: React.FC = () => (
  <footer className="w-full bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-12 md:py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-2 space-y-6">
          

          <p className="text-gray-300 leading-relaxed max-w-md">
            Protecting small and medium businesses in Vernon, BC with
            enterprise-grade cybersecurity solutions and expert local support.
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-sm">📍</span>
              </div>
              <span className="text-gray-300 text-sm md:text-base">
                3200 32nd Ave, Vernon, BC V1T 2M8
              </span>
            </div>
            <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-sm">📞</span>
              </div>
              <span className="text-gray-300 text-sm md:text-base">
                +1 (250) CYBER-SEC
              </span>
            </div>
            <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-sm">✉️</span>
              </div>
              <span className="text-gray-300 text-sm md:text-base">
                contact@okanagantechgeo.ca
              </span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
            Security Services
          </h4>
          <ul className="space-y-3">
            {[
              "AI Threat Detection",
              "Compliance Management",
              "Incident Response",
              "Security Training",
              "Vulnerability Assessment",
              "24/7 Monitoring",
            ].map((service, index) => (
              <li
                key={index}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-sm md:text-base"
              >
                <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
            Quick Access
          </h4>
          <ul className="space-y-3">
            {[
              { name: "About Us", id: "about" },
              { name: "Our Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact Us", id: "contact" },
            ].map((link, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    document
                      .getElementById(link.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base group"
                >
                  <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300"></span>
                  {link.name}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base group"
              >
                <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300"></span>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Security Badge & Copyright */}
      <div className="border-t border-gray-700 mt-8 md:mt-12 pt-8 md:pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-green-900/30 border border-green-600/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-xs md:text-sm font-medium">
                SECURE ENCRYPTED SITE
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-900/30 border border-blue-600/30 rounded-full px-4 py-2">
              <span className="text-blue-300 text-xs md:text-sm font-medium">
                🛡️ SOC 2 COMPLIANT
              </span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm md:text-base">
              &copy; {new Date().getFullYear()} Vernon CyberSec - Okanagan
              GeoTechSolutions
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              All rights reserved. Protecting BC businesses since 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
