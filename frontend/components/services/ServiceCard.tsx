import React from 'react';
import { Service } from './types';
import { useWindowSize } from './hooks';

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive, onClick }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  
  return (
    <div
      onClick={onClick}
      className={`
        group relative cursor-pointer rounded-3xl md:rounded-[2rem] border-2 transition-all duration-500
        overflow-hidden w-full transform-gpu
        ${
          isActive
            ? "border-purple-400 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 scale-105 shadow-2xl"
            : "border-gray-200 bg-white hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-50 hover:via-indigo-50 hover:to-pink-50 hover:scale-102 shadow-lg hover:shadow-xl"
        }
      `}
      style={{ 
        minHeight: 320,
        background: isActive 
          ? 'linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)'
          : 'white',
        boxShadow: isActive
          ? '0 25px 50px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(167, 139, 250, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
          : '0 10px 25px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      {/* Top Gradient Bar */}
      <div
        className={`absolute top-0 left-0 w-full h-3 rounded-t-3xl md:rounded-t-[2rem] ${
          isActive
            ? ""
            : ""
        }`}
        style={{
          background: isActive
            ? 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
            : 'linear-gradient(90deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
          boxShadow: isActive
            ? '0 4px 15px rgba(102, 126, 234, 0.4)'
            : '0 2px 10px rgba(240, 147, 251, 0.3)'
        }}
      />

      {/* Icon */}
      <div className="flex justify-center items-center mt-4 md:mt-8 mb-2 md:mb-4">
        <div
          className={`
          w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-4xl shadow-md
          ${
            isActive
              ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
              : "bg-gradient-to-br from-gray-100 to-gray-200 text-indigo-500 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white"
          }
        `}
        >
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-center text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 px-3 leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-center text-sm md:text-base text-gray-600 mb-3 md:mb-6 px-3 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="px-3 mb-3 md:mb-6">
        <div className="grid grid-cols-1 gap-1 md:gap-2">
          {service.features.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-700"
            >
              <span className="text-green-500 text-xs">✓</span>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price & Timeline */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4 mb-3 md:mb-6">
        <div className="text-sm md:text-lg font-bold text-indigo-600">{service.price}</div>
        <div className="text-xs text-gray-500">{service.timeline}</div>
      </div>

      {/* Action Button */}
      <button
        className="w-[90%] mx-auto block mb-4 md:mb-6 px-4 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold border-none cursor-pointer relative overflow-hidden transition-all duration-500"
        style={{
          background: isActive 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          boxShadow: isActive 
            ? '0 20px 40px rgba(102, 126, 234, 0.4), 0 0 0 3px rgba(118, 75, 162, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
            : '0 15px 35px rgba(240, 147, 251, 0.3), 0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          transform: isActive ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.4), 0 0 0 3px rgba(118, 75, 162, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(240, 147, 251, 0.3), 0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
          }
        }}
        tabIndex={-1}
        type="button"
      >
        <span className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
          <span className="font-extrabold tracking-wide">
            {isActive ? "🎯 ACTIVE" : "🚀 SOLUTION FINDER"}
          </span>
          <span 
            className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full text-white transition-all text-sm md:text-base font-bold"
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)'
            }}
          >
            ✨
          </span>
        </span>
        
        {/* Animated background overlay */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
            animation: isActive ? 'shimmer 2s infinite' : 'none'
          }}
        />
      </button>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Category Badge */}
      <div
        className={`
        absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow
        ${
          isActive
            ? "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700"
            : "bg-white text-gray-600 border border-gray-200"
        }
      `}
      >
        {service.category}
      </div>
    </div>
  );
};

export default ServiceCard;
