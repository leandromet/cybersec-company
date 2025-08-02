import React from "react";

export const CTA: React.FC = () => (
  <section className="py-12 bg-blue-900 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
      <p className="mb-6">Contact us today for a free consultation and security assessment.</p>
      <a href="#contact" className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded shadow hover:bg-blue-100 transition">Get Started</a>
    </div>
  </section>
);

export default CTA;
