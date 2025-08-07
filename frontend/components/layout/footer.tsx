"use client";
import React from "react";

export const Footer: React.FC = () => (
  <footer className="w-full bg-blue-950 dark:bg-gray-950 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold mb-4">Okanagan GeoTechSolutions</h3>
          <p className="text-blue-200 mb-4">
            Protecting small and medium businesses in Vernon, BC with expert cybersecurity services and local expertise.
          </p>
          <div className="space-y-2 text-blue-200">
            <p>📍 3200 32nd Ave, Vernon, BC V1T 2M8</p>
            <p>📞 +1-250-555-0123</p>
            <p>✉️ info@okanagantechgeo.ca</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-blue-200">
            <li>Security Assessments</li>
            <li>Compliance Consulting</li>
            <li>Incident Response</li>
            <li>Security Training</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-blue-200">
            <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">About Us</button></li>
            <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Our Services</button></li>
            <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Contact</button></li>
            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
        <p>&copy; {new Date().getFullYear()} Okanagan GeoTechSolutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
