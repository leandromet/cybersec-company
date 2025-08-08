import React from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Okanagan Retailers",
    role: "IT Director",
    quote: "Vernon CyberSec transformed our security posture completely. Their AI-driven threat detection caught several attacks that our previous system missed. The team is incredibly knowledgeable and responsive.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Michael Chen",
    company: "Vernon Farms Co-op",
    role: "Operations Manager", 
    quote: "Their incident response was phenomenal. When we had a potential breach, their team was on-site within 15 minutes and had everything contained quickly. Professional service that gives us peace of mind.",
    rating: 5,
    avatar: "👨‍🌾"
  },
  {
    name: "David Rodriguez",
    company: "Mountain View Clinic",
    role: "Practice Administrator",
    quote: "Compliance was a nightmare before we found Vernon CyberSec. They helped us achieve full PIPEDA compliance and our audit went perfectly. Can't recommend them enough!",
    rating: 5,
    avatar: "👨‍⚕️"
  },
  {
    name: "Lisa Thompson",
    company: "Northern BC Law",
    role: "Managing Partner",
    quote: "The security training they provided to our staff was excellent. Everyone now understands cybersecurity best practices, and we've had zero security incidents since implementation.",
    rating: 5,
    avatar: "👩‍💼"
  }
];

export const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-br from-white to-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Don't just take our word for it - hear from the businesses we protect across Vernon and the Okanagan Valley
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="group bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-indigo-600 font-medium text-xs md:text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-xs md:text-sm">{testimonial.company}</div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 md:mt-6 flex items-center justify-end">
                <div className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-700 text-xs font-medium">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Trusted by 50+ Vernon Area Businesses</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: '50+', label: 'Protected Businesses' },
              { number: '99.9%', label: 'Uptime Achieved' },
              { number: '24/7', label: 'Support Available' },
              { number: '5yr', label: 'Average Partnership' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-indigo-200 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
