import React from "react";

const testimonials = [
  {
    name: "Jane Smith",
    company: "Okanagan Retailers",
    quote: "Vernon Cyber Security Solutions helped us pass our compliance audit with ease! Highly recommended.",
  },
  {
    name: "Mike Brown",
    company: "Vernon Farms",
    quote: "Their incident response team was fast and professional. We felt supported every step of the way.",
  },
];

export const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-blue-50 rounded shadow p-6">
            <blockquote className="italic mb-4">“{t.quote}”</blockquote>
            <div className="font-semibold text-blue-900">{t.name}</div>
            <div className="text-blue-700 text-sm">{t.company}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
