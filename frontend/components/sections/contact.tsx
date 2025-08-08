"use client";
import React, { useState, useEffect } from "react";

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert(
      "✅ Message sent successfully! We'll contact you within 24 hours to discuss your project."
    );
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(56,189,248,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 font-medium text-sm tracking-wider uppercase">
                Professional Contact
              </span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Get in Touch
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Today
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with our technology specialists for GIS solutions, IT
              security, AI integration, and custom development services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "24px",
                  padding: "32px",
                  transition: "all 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255, 255, 255, 0.05)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "32px",
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#4ade80",
                      borderRadius: "50%",
                      animation: "pulse 2s infinite",
                    }}
                  ></div>
                  <span
                    style={{
                      color: "#4ade80",
                      fontWeight: "500",
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Contact Form
                  </span>
                </div>

                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  {/* Name Field */}
                  <div style={{ position: "relative" }}>
                    <label
                      style={{
                        position: "absolute",
                        left: "24px",
                        top:
                          formData.name || focusedField === "name"
                            ? "8px"
                            : "16px",
                        color: focusedField === "name" ? "#06b6d4" : "#9ca3af",
                        fontSize:
                          formData.name || focusedField === "name"
                            ? "12px"
                            : "16px",
                        transition: "all 0.3s ease",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        border:
                          focusedField === "name"
                            ? "2px solid #06b6d4"
                            : "2px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 56px 12px 24px",
                        transition: "all 0.3s ease",
                        outline: "none",
                        color: "white",
                        fontSize: "16px",
                        boxShadow:
                          focusedField === "name"
                            ? "0 0 0 4px rgba(6, 182, 212, 0.25)"
                            : "none",
                      }}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "#06b6d4",
                        opacity: 0.6,
                      }}
                    >
                      👤
                    </div>
                  </div>

                  {/* Email Field */}
                  <div style={{ position: "relative" }}>
                    <label
                      style={{
                        position: "absolute",
                        left: "24px",
                        top:
                          formData.email || focusedField === "email"
                            ? "8px"
                            : "16px",
                        color: focusedField === "email" ? "#a855f7" : "#9ca3af",
                        fontSize:
                          formData.email || focusedField === "email"
                            ? "12px"
                            : "16px",
                        transition: "all 0.3s ease",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        border:
                          focusedField === "email"
                            ? "2px solid #a855f7"
                            : "2px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 56px 12px 24px",
                        transition: "all 0.3s ease",
                        outline: "none",
                        color: "white",
                        fontSize: "16px",
                        boxShadow:
                          focusedField === "email"
                            ? "0 0 0 4px rgba(168, 85, 247, 0.25)"
                            : "none",
                      }}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "#a855f7",
                        opacity: 0.6,
                      }}
                    >
                      📧
                    </div>
                  </div>

                  {/* Company Field */}
                  <div style={{ position: "relative" }}>
                    <label
                      style={{
                        position: "absolute",
                        left: "24px",
                        top:
                          formData.company || focusedField === "company"
                            ? "8px"
                            : "16px",
                        color:
                          focusedField === "company" ? "#3b82f6" : "#9ca3af",
                        fontSize:
                          formData.company || focusedField === "company"
                            ? "12px"
                            : "16px",
                        transition: "all 0.3s ease",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        border:
                          focusedField === "company"
                            ? "2px solid #3b82f6"
                            : "2px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 56px 12px 24px",
                        transition: "all 0.3s ease",
                        outline: "none",
                        color: "white",
                        fontSize: "16px",
                        boxShadow:
                          focusedField === "company"
                            ? "0 0 0 4px rgba(59, 130, 246, 0.25)"
                            : "none",
                      }}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "#3b82f6",
                        opacity: 0.6,
                      }}
                    >
                      🏢
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div style={{ position: "relative" }}>
                    <label
                      style={{
                        position: "absolute",
                        left: "24px",
                        top:
                          formData.phone || focusedField === "phone"
                            ? "8px"
                            : "16px",
                        color: focusedField === "phone" ? "#22c55e" : "#9ca3af",
                        fontSize:
                          formData.phone || focusedField === "phone"
                            ? "12px"
                            : "16px",
                        transition: "all 0.3s ease",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        border:
                          focusedField === "phone"
                            ? "2px solid #22c55e"
                            : "2px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 56px 12px 24px",
                        transition: "all 0.3s ease",
                        outline: "none",
                        color: "white",
                        fontSize: "16px",
                        boxShadow:
                          focusedField === "phone"
                            ? "0 0 0 4px rgba(34, 197, 94, 0.25)"
                            : "none",
                      }}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "#22c55e",
                        opacity: 0.6,
                      }}
                    >
                      📱
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div style={{ position: "relative" }}>
                    <label
                      style={{
                        position: "absolute",
                        left: "24px",
                        top:
                          formData.service || focusedField === "service"
                            ? "8px"
                            : "16px",
                        color:
                          focusedField === "service" ? "#f97316" : "#9ca3af",
                        fontSize:
                          formData.service || focusedField === "service"
                            ? "12px"
                            : "16px",
                        transition: "all 0.3s ease",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    >
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        border:
                          focusedField === "service"
                            ? "2px solid #f97316"
                            : "2px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 56px 12px 24px",
                        transition: "all 0.3s ease",
                        outline: "none",
                        color: "white",
                        fontSize: "16px",
                        boxShadow:
                          focusedField === "service"
                            ? "0 0 0 4px rgba(249, 115, 22, 0.25)"
                            : "none",
                      }}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option
                        value=""
                        style={{ background: "#1e293b", color: "white" }}
                      ></option>
                      <option
                        value="gis-mapping"
                        style={{ background: "#1e293b", color: "white" }}
                      >
                        GIS & Interactive Maps
                      </option>
                      <option
                        value="geoprocessing"
                        style={{ background: "#1e293b", color: "white" }}
                      >
                        Geoprocessing & Spatial Analysis
                      </option>
                      <option
                        value="it-security"
                        style={{ background: "#1e293b", color: "white" }}
                      >
                        IT Security & Management
                      </option>
                      <option
                        value="ai-integration"
                        style={{ background: "#1e293b", color: "white" }}
                      >
                        AI API Integration
                      </option>
                      <option
                        value="custom-development"
                        style={{ background: "#1e293b", color: "white" }}
                      >
                        Custom Development
                      </option>
                      <option
                        value="cloud-solutions"
                        style={{ background: "#1e293b", color: "white" }}
                      >
                        Cloud Solutions
                      </option>
                      <option
                        value="business-intelligence"
                        style={{ background: "#1e293b", color: "white" }}
                      >
                        Business Intelligence
                      </option>
                      <option
                        value="consultation"
                        style={{ background: "#1e293b", color: "white" }}
                      >
                        General Consultation
                      </option>
                    </select>
                    <div
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "#f97316",
                        opacity: 0.6,
                      }}
                    >
                      ⚙️
                    </div>
                  </div>

                  {/* Message Field */}
                  <div style={{ position: "relative" }}>
                    <label
                      style={{
                        position: "absolute",
                        left: "24px",
                        top:
                          formData.message || focusedField === "message"
                            ? "8px"
                            : "16px",
                        color:
                          focusedField === "message" ? "#ec4899" : "#9ca3af",
                        fontSize:
                          formData.message || focusedField === "message"
                            ? "12px"
                            : "16px",
                        transition: "all 0.3s ease",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    >
                      Project Description
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        border:
                          focusedField === "message"
                            ? "2px solid #ec4899"
                            : "2px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 56px 12px 24px",
                        transition: "all 0.3s ease",
                        outline: "none",
                        color: "white",
                        fontSize: "16px",
                        resize: "none",
                        boxShadow:
                          focusedField === "message"
                            ? "0 0 0 4px rgba(236, 72, 153, 0.25)"
                            : "none",
                      }}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "#ec4899",
                        opacity: 0.6,
                      }}
                    >
                      💬
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      position: "relative",
                      width: "100%",
                      overflow: "hidden",
                      background: "linear-gradient(to right,rgb(4, 120, 87), rgb(15, 118, 110))",
                      color: "white",
                      fontWeight: "bold",
                      padding: "16px",
                      borderRadius: "16px",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                      border: "none",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.5 : 1,
                      outline: "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = "scale(1.05)";
                        target.style.boxShadow =
                          "0 20px 40px rgba(6, 182, 212, 0.25)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = "scale(1)";
                        target.style.boxShadow = "none";
                      }
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to right,rgb(4, 120, 87), rgb(15, 118, 110)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                      className="hover:opacity-100"
                    ></div>
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              border: "2px solid rgba(255, 255, 255, 0.3)",
                              borderTop: "2px solid white",
                              borderRadius: "50%",
                              animation: "spin 1s linear infinite",
                            }}
                          ></div>
                          <span>SENDING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <span style={{ fontSize: "14px" }}>📤</span>
                          </div>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-8">
                {/* Main Contact Card */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#06b6d4",
                        borderRadius: "50%",
                        animation: "pulse 2s infinite",
                      }}
                    ></div>
                    <span
                      style={{
                        color: "#67e8f9",
                        fontWeight: "500",
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Contact Information
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        transition: "transform 0.3s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform =
                          "translateX(8px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform =
                          "translateX(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          background:
                            "linear-gradient(to right, #06b6d4, #3b82f6)",
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "24px" }}>📍</span>
                      </div>
                      <div>
                        <div
                          style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Vernon Office
                        </div>
                        <div
                          style={{
                            color: "#9ca3af",
                            fontSize: "14px",
                          }}
                        >
                          British Columbia, Canada
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        transition: "transform 0.3s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform =
                          "translateX(8px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform =
                          "translateX(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          background:
                            "linear-gradient(to right, #8b5cf6, #ec4899)",
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "24px" }}>📱</span>
                      </div>
                      <div>
                        <div
                          style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Phone
                        </div>
                        <div
                          style={{
                            color: "#9ca3af",
                            fontSize: "14px",
                          }}
                        >
                          +1 (250) 555-TECH
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        transition: "transform 0.3s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform =
                          "translateX(8px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform =
                          "translateX(0)";
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          background:
                            "linear-gradient(to right, #10b981, #14b8a6)",
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "24px" }}>📧</span>
                      </div>
                      <div>
                        <div
                          style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Email
                        </div>
                        <div
                          style={{
                            color: "#9ca3af",
                            fontSize: "14px",
                          }}
                        >
                          contact@okanagantechgeo.ca
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#4ade80",
                        borderRadius: "50%",
                        animation: "pulse 2s infinite",
                      }}
                    ></div>
                    <span
                      style={{
                        color: "#86efac",
                        fontWeight: "500",
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Response Times
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#9ca3af" }}>
                        Project Consultation
                      </span>
                      <span style={{ color: "#4ade80", fontWeight: "bold" }}>
                        &lt; 4 hours
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#9ca3af" }}>Quote Requests</span>
                      <span style={{ color: "#06b6d4", fontWeight: "bold" }}>
                        &lt; 24 hours
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#9ca3af" }}>
                        Technical Support
                      </span>
                      <span style={{ color: "#8b5cf6", fontWeight: "bold" }}>
                        &lt; 2 hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div
                  style={{
                    background:
                      "linear-gradient(to right, rgb(4, 120, 87), rgb(15, 118, 110))",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(6, 182, 212, 0.3)",
                    borderRadius: "24px",
                    padding: "32px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "48px",
                      marginBottom: "16px",
                    }}
                  >
                    🕒
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "8px",
                    }}
                  >
                    Business Hours
                  </div>
                  <div
                    style={{
                      color: "#d1d5db",
                      fontSize: "14px",
                      marginBottom: "4px",
                    }}
                  >
                    Monday - Friday: 9:00 AM - 6:00 PM PST
                  </div>
                  <div
                    style={{
                      color: "#d1d5db",
                      fontSize: "14px",
                    }}
                  >
                    Emergency support available 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
