import React from "react";

export const CTA: React.FC = () => (
  <section style={{
    padding: '80px 0',
    background: 'linear-gradient(135deg, #1e40af, #7c3aed)',
    color: 'white',
    textAlign: 'center'
  }}>
    <div className="container mx-auto px-4">
      <h2 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: 'white'
      }}>Ready to Transform Your Business?</h2>
      <p style={{
        marginBottom: '32px',
        fontSize: '20px',
        color: '#e0e7ff',
        maxWidth: '600px',
        margin: '0 auto 32px auto'
      }}>Contact us today for a free consultation on GIS solutions, IT security, or custom development services.</p>
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          display: 'inline-block',
          backgroundColor: 'white',
          color: '#1e40af',
          fontWeight: '600',
          padding: '16px 32px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '18px',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = '#f1f5f9';
          target.style.transform = 'scale(1.05)';
          target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = 'white';
          target.style.transform = 'scale(1)';
          target.style.boxShadow = 'none';
        }}
      >
        Get Started Today
      </button>
    </div>
  </section>
);

export default CTA;
