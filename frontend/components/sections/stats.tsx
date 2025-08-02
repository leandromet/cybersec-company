import React from "react";

const stats = [
  { label: "Clients Protected", value: "120+", icon: "🛡️" },
  { label: "Incidents Resolved", value: "350+", icon: "🚨" },
  { label: "Years Experience", value: "15+", icon: "⭐" },
  { label: "Compliance Audits", value: "80+", icon: "📋" },
];

export const Stats: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-2">{stat.value}</div>
            <div className="text-blue-700 dark:text-blue-300 text-sm md:text-base font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
