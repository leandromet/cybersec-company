import React from "react";

const stats = [
  { label: "Projects Completed", value: "50+", icon: "�️" },
  { label: "Happy Clients", value: "40+", icon: "⭐" },
  { label: "Years Experience", value: "5+", icon: "🛠️" },
  { label: "Services Offered", value: "7+", icon: "�" },
];

export const Stats: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '32px 24px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLDivElement;
              target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
              target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLDivElement;
              target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              target.style.transform = 'scale(1)';
            }}
          >
            <div style={{
              fontSize: '48px',
              marginBottom: '12px'
            }}>{stat.icon}</div>
            <div style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '8px'
            }}>{stat.value}</div>
            <div style={{
              color: '#1d4ed8',
              fontSize: '16px',
              fontWeight: '500'
            }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
