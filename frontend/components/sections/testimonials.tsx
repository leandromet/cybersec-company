import React from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Okanagan Consulting",
    role: "Operations Manager",
    quote: "Okanagan GeoTech's GIS mapping solution transformed how we visualize our project data. The interactive maps they created help us communicate complex spatial information to our clients effectively.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Michael Chen",
    company: "Vernon Farms Co-op",
    role: "IT Director", 
    quote: "Their IT security implementation was seamless. The team secured our entire network infrastructure and provided excellent training to our staff. We feel much more confident about our data security now.",
    rating: 5,
    avatar: "👨‍🌾"
  },
  {
    name: "David Rodriguez",
    company: "Mountain View Properties",
    role: "Business Manager",
    quote: "The custom development work they did for our property management system exceeded expectations. The AI integration helps us automate routine tasks and the system is incredibly user-friendly.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Lisa Thompson",
    company: "Northern BC Analytics",
    role: "Data Scientist",
    quote: "Their expertise in spatial analysis and business intelligence helped us deliver insights we never thought possible. The team really understands both the technical and business sides of our challenges.",
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
          <div style={{
            width: '96px',
            height: '4px',
            background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
            margin: '0 auto 24px auto',
            borderRadius: '2px'
          }}></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Hear from the businesses we've helped grow with our technology solutions across Vernon and the Okanagan Valley
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name} 
              style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                padding: '32px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                target.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                target.style.transform = 'translateY(0)';
              }}
            >
              {/* Rating Stars */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginBottom: '24px'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{
                    color: '#fbbf24',
                    fontSize: '20px'
                  }}>⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote style={{
                color: '#374151',
                lineHeight: '1.6',
                marginBottom: '32px',
                fontSize: '16px',
                fontStyle: 'italic',
                fontWeight: '400'
              }}>
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px'
                }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div style={{
                    fontWeight: 'bold',
                    color: '#111827',
                    fontSize: '16px',
                    marginBottom: '2px'
                  }}>{testimonial.name}</div>
                  <div style={{
                    color: '#6366f1',
                    fontWeight: '500',
                    fontSize: '14px',
                    marginBottom: '2px'
                  }}>{testimonial.role}</div>
                  <div style={{
                    color: '#6b7280',
                    fontSize: '14px'
                  }}>{testimonial.company}</div>
                </div>
              </div>

              {/* Verified Badge */}
              <div style={{
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '50px',
                  padding: '4px 12px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#4ade80',
                    borderRadius: '50%'
                  }}></div>
                  <span style={{
                    color: '#15803d',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div style={{
          marginTop: '64px',
          background: 'linear-gradient(to right, rgb(4, 120, 87), rgb(15, 118, 110)',
          borderRadius: '24px',
          padding: '48px 32px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '32px',
            color: 'white'
          }}>Trusted by 20+ Businesses</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px'
          }} className="md:grid-cols-4">
            {[
              { number: '50+', label: 'Happy Clients' },
              { number: '99.9%', label: 'Project Success' },
              { number: '24/7', label: 'Support Available' },
              { number: '5yr', label: 'Average Partnership' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '8px'
                }}>{stat.number}</div>
                <div style={{
                  color: '#c7d2fe',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
