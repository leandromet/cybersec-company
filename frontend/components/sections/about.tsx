import React from "react";

export const About: React.FC = () => (
  <section
    id="about"
    className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white"
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "24px",
              letterSpacing: "-0.025em",
              lineHeight: "1.1",
            }}
          >
            About Okanagan GeoTech
          </h2>
          <div
            style={{
              width: "96px",
              height: "4px",
              background: "linear-gradient(to left, rgb(4, 130, 87), rgb(15, 118, 110))",
              margin: "0 auto 24px auto",
              borderRadius: "2px",
            }}
          ></div>
          <p
            style={{
              fontSize: "20px",
              color: "#6b7280",
              maxWidth: "768px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: "0 16px",
            }}
          >
            Comprehensive technology solutions for businesses in Vernon, BC and
            the Okanagan Valley
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Your Local Technology Partners
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Okanagan GeoTech Solutions specializes in GIS mapping, spatial
                analysis, IT security, AI integration, and custom development
                services. Our team combines technical expertise with local
                knowledge to deliver solutions that drive business growth.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                From interactive mapping applications to comprehensive IT
                infrastructure, we provide scalable technology solutions
                tailored to your specific needs and budget.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: "🗺️",
                  title: "GIS Expertise",
                  desc: "Advanced mapping & spatial analysis",
                },
                {
                  icon: "🛡️",
                  title: "IT Security",
                  desc: "Comprehensive security solutions",
                },
                {
                  icon: "🤖",
                  title: "AI Integration",
                  desc: "Custom AI & automation tools",
                },
                {
                  icon: "💻",
                  title: "Custom Development",
                  desc: "Tailored software solutions",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    padding: "24px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                    target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
                    target.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "12px",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4
                    style={{
                      fontWeight: "bold",
                      color: "#111827",
                      marginBottom: "8px",
                      fontSize: "16px",
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats/Visual */}
          <div
            style={{
              background: "linear-gradient(135deg, rgb(4, 120, 87), rgb(15, 118, 110))",
              borderRadius: "24px",
              padding: "48px 32px",
              color: "white",
            }}
          >
            <h4
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "32px",
                color: "white",
              }}
            >
              Our Track Record
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              {[
                { number: "20+", label: "Projects Completed", icon: "🏢" },
                { number: "99%", label: "Client Satisfaction", icon: "⭐" },
                { number: "24/7", label: "Support Available", icon: "🛠️" },
                { number: "5yr", label: "Average Partnership", icon: "🤝" },
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "36px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        color: "rgb(4, 120, 87)",
                        fontSize: "16px",
                      }}
                    >
                      {stat.label}
                    </div>
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
