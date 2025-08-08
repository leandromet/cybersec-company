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
    <div style={{ position: "relative" }}>
      {isVisible && (
        <div
          style={{
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "16px",
              paddingTop: "8px",
            }}
          >
            {features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#374151",
                }}
              >
                <span style={{ color: "rgb(4, 140, 87)", fontSize: "12px" }}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "12px",
              color: "#6b7280",
              paddingTop: "12px",
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>⏱️</span>
              <span>{timeline}</span>
            </span>
            <span
              style={{
                padding: "4px 8px",
                borderRadius: "9999px",
                backgroundColor: "#f3f4f6",
                color: "#4b5563",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
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
  const [selections, setSelections] = useState<{ [nodeId: string]: string }>(
    {}
  );
  const [finalSolution, setFinalSolution] = useState<Solution | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    setExpandedService(serviceId);
    setSelections({});
    setFinalSolution(null);

    if (typeof window !== "undefined") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
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
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)",
          padding: "clamp(48px, 8vw, 80px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(16px, 3vw, 24px)",
          }}
        >
          {/* Simulator Modal */}
          {expandedService && (
            <Modal
              isOpen={true}
              simulator={
                simulatorData[expandedService] || {
                  title: `${
                    services.find((s) => s.id === expandedService)?.title
                  } Solution Finder`,
                  description:
                    "We're preparing a custom solution finder for this service. Contact us for a personalized consultation.",
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
                            description:
                              "Our experts will work with you to understand your specific requirements and create a tailored solution.",
                            features: [
                              "Free Consultation",
                              "Custom Solution Design",
                              "Competitive Pricing",
                              "Expert Guidance",
                            ],
                            price: "Contact for Quote",
                            timeline: "Same day response",
                          },
                        },
                      ],
                    },
                  },
                }
              }
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
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "24px",
                letterSpacing: "-0.025em",
                lineHeight: "1.1",
                padding: "0 16px",
              }}
            >
              Our GIS & Technology Solutions
            </h2>
            <div
              style={{
                width: "96px",
                height: "4px",
                background: "linear-gradient(to right, rgb(4, 140, 87), rgb(15, 118, 110))",
                margin: "0 auto 24px",
                borderRadius: "2px",
              }}
            ></div>
            <p
              style={{
                fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)",
                color: "#4b5563",
                maxWidth: "768px",
                margin: "0 auto",
                lineHeight: "1.7",
                padding: "0 16px",
              }}
            >
              From advanced GIS mapping to comprehensive IT solutions, we
              provide specialized technology services for the Okanagan Valley
              and beyond - empowering businesses with spatial intelligence and
              secure infrastructure.
            </p>
            <div
              style={{
                marginTop: "32px",
                padding: "16px",
                background:
                  "linear-gradient(to right, rgba(4, 140, 87, 0.1), rgba(15, 118, 110, 0.1))",
                borderRadius: "16px",
                border: "1px solid rgba(4, 140, 87, 0.2)",
                maxWidth: "512px",
                margin: "32px auto 0",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  color: "rgb(4, 100, 60)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                💡 Hover over any service for details • Click "Run Solution
                Finder" to explore options
              </p>
            </div>
          </div>

          {/* Services Grid - Simple Layout */}
          <div className="mb-20">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "clamp(1.5rem, 3vw, 2rem)",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 16px",
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  style={{
                    position: "relative",
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "20px",
                    border:
                      hoveredCard === service.id
                        ? "2px solid rgb(4, 140, 87)"
                        : "2px solid #e5e7eb",
                    transition: "all 0.4s ease",
                    overflow: "hidden",
                    boxShadow:
                      hoveredCard === service.id
                        ? "0 20px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(4, 140, 87, 0.1)"
                        : "0 10px 15px rgba(0, 0, 0, 0.1)",
                    transform:
                      hoveredCard === service.id ? "scale(1.02)" : "scale(1)",
                    padding: "24px",
                    minHeight: "280px",
                    cursor: "default",
                  }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Service Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flex: "1",
                        minWidth: "0",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          background:
                            "linear-gradient(to right, rgb(4, 140, 87), rgb(15, 118, 110))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "20px",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          flexShrink: "0",
                        }}
                      >
                        {service.icon}
                      </div>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#111827",
                            lineHeight: "1.3",
                            marginBottom: "4px",
                            wordWrap: "break-word",
                          }}
                        >
                          {service.title}
                        </h3>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "rgb(4, 140, 87)",
                            fontWeight: "600",
                          }}
                        >
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
                        background:
                          expandedService === service.id
                            ? "linear-gradient(to right, rgb(4, 140, 87), rgb(15, 118, 110))"
                            : "linear-gradient(to right, #374151, #1f2937)",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        flexShrink: "0",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => {
                        if (expandedService !== service.id) {
                          e.currentTarget.style.background =
                            "linear-gradient(to right, rgb(4, 140, 87), rgb(15, 118, 110))";
                          e.currentTarget.style.boxShadow =
                            "0 6px 12px rgba(0, 0, 0, 0.15)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (expandedService !== service.id) {
                          e.currentTarget.style.background =
                            "linear-gradient(to right, #374151, #1f2937)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 6px rgba(0, 0, 0, 0.1)";
                        }
                      }}
                      tabIndex={-1}
                      type="button"
                    >
                      {expandedService === service.id
                        ? "Active"
                        : "Find Solution"}{" "}
                      →
                    </button>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#4b5563",
                      marginBottom: "16px",
                      lineHeight: "1.6",
                    }}
                  >
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
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(4, 140, 87, 0.1)",
                borderRadius: "24px",
                padding: "clamp(24px, 5vw, 48px)",
                maxWidth: "1024px",
                margin: "0 auto",
                boxShadow:
                  "0 25px 50px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  fontWeight: "bold",
                  marginBottom: "clamp(16px, 3vw, 24px)",
                  color: "#111827",
                  letterSpacing: "-0.025em",
                  lineHeight: "1.2",
                }}
              >
                Ready to Enhance Your Operations?
              </h3>
              <p
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  color: "#4b5563",
                  marginBottom: "clamp(24px, 4vw, 32px)",
                  lineHeight: "1.6",
                  padding: "0 16px",
                  maxWidth: "600px",
                  margin: "0 auto 32px",
                }}
              >
                Connect with our GIS and technology specialists for a
                comprehensive consultation
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "linear-gradient(to right, rgb(4, 140, 87), rgb(15, 118, 110))",
                  color: "white",
                  padding: "16px 32px",
                  borderRadius: "16px",
                  fontSize: "18px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 16px rgba(4, 140, 87, 0.3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right, rgb(3, 120, 75), rgb(12, 100, 95))";
                  e.currentTarget.style.boxShadow =
                    "0 12px 20px rgba(4, 140, 87, 0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right, rgb(4, 140, 87), rgb(15, 118, 110))";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(4, 140, 87, 0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                type="button"
              >
                <span>🗺️ Start Your Project </span>
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
