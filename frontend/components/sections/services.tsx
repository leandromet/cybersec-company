"use client";
import React, { useState } from 'react';

// Types
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  timeline: string;
  category: 'security' | 'ai' | 'development' | 'cloud' | 'analytics';
}

interface Solution {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
}

interface DecisionNode {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    nextNode?: string;
    solution?: Solution;
  }[];
}

interface SimulatorData {
  [serviceId: string]: {
    title: string;
    description: string;
    startNode: string;
    nodes: {
      [nodeId: string]: DecisionNode;
    };
  };
}

// Category color mapping
const categoryColors = {
  security: 'from-red-500 to-pink-600',
  ai: 'from-purple-500 to-indigo-600',
  development: 'from-blue-500 to-cyan-600',
  cloud: 'from-green-500 to-teal-600',
  analytics: 'from-orange-500 to-yellow-600'
};

// Service Card Component
const ServiceCard: React.FC<{
  service: Service;
  isActive: boolean;
  onClick: () => void;
}> = ({ service, isActive, onClick }) => {
  const gradientClass = categoryColors[service.category];
  
  return (
    <div
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl p-6 cursor-pointer
        transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl
        ${isActive 
          ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 shadow-xl' 
          : 'bg-white border border-gray-200 hover:border-indigo-200 shadow-lg hover:shadow-xl'
        }
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`
            w-14 h-14 rounded-xl flex items-center justify-center
            bg-gradient-to-br ${gradientClass} shadow-lg
            group-hover:scale-110 transition-transform duration-300
          `}>
            <span className="text-2xl filter drop-shadow-sm">{service.icon}</span>
          </div>
          
          <div className={`
            px-3 py-1 rounded-full text-xs font-semibold
            ${isActive ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'}
          `}>
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className={`
          text-xl font-bold mb-3 transition-colors duration-300
          ${isActive ? 'text-indigo-700' : 'text-gray-900 group-hover:text-indigo-600'}
        `}>
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
              >
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Price & Timeline */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-lg font-bold text-indigo-600">{service.price}</div>
            <div className="text-xs text-gray-500">{service.timeline}</div>
          </div>
          
          <button 
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300
              transform hover:scale-105 shadow-md hover:shadow-lg
              ${isActive 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-indigo-600 hover:to-purple-600'
              }
            `}
          >
            {isActive ? 'Active' : 'Start Simulator'} →
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Services Component
const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [currentNode, setCurrentNode] = useState<string>('');
  const [selections, setSelections] = useState<{ [nodeId: string]: string }>({});
  const [finalSolution, setFinalSolution] = useState<Solution | null>(null);

// Simulator Panel Component
const SimulatorPanel: React.FC<{
  simulator: SimulatorData[string];
  currentNode: string;
  selections: { [nodeId: string]: string };
  finalSolution: Solution | null;
  onOptionSelect: (nodeId: string, option: any) => void;
  onReset: () => void;
  onRestart: () => void;
}> = ({ simulator, currentNode, selections, finalSolution, onOptionSelect, onReset, onRestart }) => {
  const currentNodeData = currentNode ? simulator.nodes[currentNode] : null;
  const progressPercentage = finalSolution ? 100 : Object.keys(selections).length > 0 ? 60 : 20;

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{simulator.title}</h3>
            <p className="text-gray-600 text-sm">{simulator.description}</p>
          </div>
          <button
            onClick={onReset}
            className="ml-4 w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-200"
          >
            ✕
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-gray-600">
            <span>Progress</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Current Question */}
        {currentNodeData && !finalSolution && (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-900">
              {currentNodeData.question}
            </h4>
            
            <div className="space-y-3">
              {currentNodeData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onOptionSelect(currentNodeData.id, option)}
                  className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 group-hover:text-indigo-700">
                      {option.label}
                    </span>
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-all duration-300">
                      <span className="text-sm group-hover:text-white font-bold">→</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Final Solution */}
        {finalSolution && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl text-white">✓</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Perfect Match Found!
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"/>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                {finalSolution.title}
              </h5>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {finalSolution.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h6 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Features Included:
                  </h6>
                  <ul className="space-y-2">
                    {finalSolution.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"/>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-indigo-100">
                    <h6 className="font-bold text-gray-900 mb-1 text-sm">Investment:</h6>
                    <p className="text-2xl font-bold text-indigo-600">{finalSolution.price}</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h6 className="font-bold text-gray-900 mb-1 text-sm">Timeline:</h6>
                    <p className="text-gray-700 font-semibold">{finalSolution.timeline}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    onReset();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Quote Now
                </button>
                <button
                  onClick={onRestart}
                  className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Selection Summary */}
        {Object.keys(selections).length > 0 && !finalSolution && (
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <h6 className="font-bold text-gray-900 mb-3 flex items-center text-sm">
              <span className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs">📝</span>
              </span>
              Your Selections:
            </h6>
            <div className="flex flex-wrap gap-2">
              {Object.entries(selections).map(([key, value]) => (
                <span
                  key={key}
                  className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-xs font-medium border border-indigo-200"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

  const services: Service[] = [
    {
      id: 'it-security',
      title: 'IT Security & Management',
      description: 'Complete IT infrastructure management from basic firewalls to enterprise security planning and monitoring.',
      icon: '🛡️',
      features: ['Network Security', 'Data Protection', 'Compliance Management', 'Threat Monitoring'],
      price: 'From $199/month',
      timeline: '1-2 weeks setup',
      category: 'security'
    },
    {
      id: 'ai-integration',
      title: 'AI API Integration',
      description: 'Custom AI solutions and API integrations to automate processes and enhance business intelligence.',
      icon: '🤖',
      features: ['ChatGPT Integration', 'Custom AI Models', 'Process Automation', 'Data Analysis'],
      price: 'From $299/month',
      timeline: '2-4 weeks',
      category: 'ai'
    },
    {
      id: 'gis-mapping',
      title: 'GIS & Interactive Maps',
      description: 'Geospatial solutions, custom mapping applications, and location-based services for data visualization.',
      icon: '🗺️',
      features: ['Custom Map Applications', 'Location Analytics', 'Spatial Data Visualization', 'Mobile GIS'],
      price: 'From $399/month',
      timeline: '3-6 weeks',
      category: 'analytics'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Full-stack development services for web applications, mobile apps, and business automation tools.',
      icon: '💻',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      price: 'From $2,499/project',
      timeline: '4-12 weeks',
      category: 'development'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Cloud migration, management, and optimization services for scalable and secure business operations.',
      icon: '☁️',
      features: ['Cloud Migration', 'AWS/Azure Setup', 'Server Management', 'Backup Solutions'],
      price: 'From $149/month',
      timeline: '1-3 weeks',
      category: 'cloud'
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      description: 'Data analysis, reporting dashboards, and business intelligence solutions to drive informed decisions.',
      icon: '📊',
      features: ['Data Dashboards', 'Report Automation', 'KPI Tracking', 'Predictive Analytics'],
      price: 'From $599/month',
      timeline: '2-6 weeks',
      category: 'analytics'
    }
  ];

  const simulatorData: SimulatorData = {
    'it-security': {
      title: 'IT Security Solution Finder',
      description: 'Find the perfect security solution for your business type and size.',
      startNode: 'business-type',
      nodes: {
        'business-type': {
          id: 'business-type',
          question: 'What type of business do you operate?',
          options: [
            {
              label: 'Home Office / Freelancer',
              value: 'home-office',
              nextNode: 'home-office-size'
            },
            {
              label: 'Retail Store / Shop',
              value: 'retail-store',
              nextNode: 'retail-size'
            },
            {
              label: 'Office Building / Corporate',
              value: 'office-building',
              nextNode: 'office-size'
            },
            {
              label: 'Manufacturing / Industrial',
              value: 'manufacturing',
              nextNode: 'manufacturing-size'
            }
          ]
        },
        'home-office-size': {
          id: 'home-office-size',
          question: 'How many devices need protection?',
          options: [
            {
              label: '1-3 devices (Basic Setup)',
              value: 'basic',
              solution: {
                title: 'Home Office Basic Security',
                description: 'Essential protection for small home offices with basic firewall, antivirus, and backup.',
                features: ['Basic Firewall', 'Antivirus Protection', 'Cloud Backup', 'Email Support'],
                price: '$99/month',
                timeline: '1 week setup'
              }
            },
            {
              label: '4-10 devices (Professional Setup)',
              value: 'professional',
              solution: {
                title: 'Home Office Professional Security',
                description: 'Comprehensive security suite for professional home offices with advanced monitoring.',
                features: ['Advanced Firewall', 'Endpoint Protection', 'VPN Access', 'Real-time Monitoring', 'Priority Support'],
                price: '$199/month',
                timeline: '1-2 weeks setup'
              }
            }
          ]
        },
        'retail-size': {
          id: 'retail-size',
          question: 'What is your store size?',
          options: [
            {
              label: 'Small Store (1-5 employees)',
              value: 'small',
              solution: {
                title: 'Small Retail Security Package',
                description: 'Complete security solution for small retail operations with POS protection.',
                features: ['POS Security', 'Network Protection', 'Customer Data Encryption', 'Compliance Support'],
                price: '$249/month',
                timeline: '1-2 weeks'
              }
            },
            {
              label: 'Medium Store (6-20 employees)',
              value: 'medium',
              solution: {
                title: 'Medium Retail Security Suite',
                description: 'Advanced security with customer data protection and payment processing security.',
                features: ['Advanced POS Security', 'Multi-location Support', 'Payment Compliance', 'Staff Access Control', '24/7 Monitoring'],
                price: '$499/month',
                timeline: '2-3 weeks'
              }
            }
          ]
        },
        'office-size': {
          id: 'office-size',
          question: 'How many employees do you have?',
          options: [
            {
              label: '10-50 employees',
              value: 'small-office',
              solution: {
                title: 'Small Business Enterprise Security',
                description: 'Enterprise-grade security for growing businesses with comprehensive threat protection.',
                features: ['Enterprise Firewall', 'Email Security', 'Employee Training', 'Incident Response', 'Compliance Management'],
                price: '$799/month',
                timeline: '2-4 weeks'
              }
            },
            {
              label: '50+ employees',
              value: 'large-office',
              solution: {
                title: 'Enterprise Security Platform',
                description: 'Full enterprise security infrastructure with advanced threat detection and response.',
                features: ['Advanced Threat Detection', 'SIEM Integration', 'Zero Trust Architecture', 'Dedicated Security Team', 'Custom Compliance'],
                price: '$1,499/month',
                timeline: '4-8 weeks'
              }
            }
          ]
        },
        'manufacturing-size': {
          id: 'manufacturing-size',
          question: 'What is your facility size?',
          options: [
            {
              label: 'Small Facility (up to 25 employees)',
              value: 'small-manufacturing',
              solution: {
                title: 'Industrial Security Essentials',
                description: 'Specialized security for manufacturing with OT/IT convergence protection.',
                features: ['OT/IT Security', 'Equipment Monitoring', 'Access Control', 'Safety Compliance', 'Remote Monitoring'],
                price: '$899/month',
                timeline: '3-6 weeks'
              }
            },
            {
              label: 'Large Facility (25+ employees)',
              value: 'large-manufacturing',
              solution: {
                title: 'Enterprise Industrial Security',
                description: 'Complete industrial security platform with advanced OT protection and compliance.',
                features: ['Advanced OT Protection', 'Predictive Maintenance', 'Safety Integration', 'Supply Chain Security', 'Dedicated Support'],
                price: '$2,499/month',
                timeline: '6-12 weeks'
              }
            }
          ]
        }
      }
    },
    'ai-integration': {
      title: 'AI Integration Solution Finder',
      description: 'Discover the perfect AI integration based on your business goals.',
      startNode: 'ai-goal',
      nodes: {
        'ai-goal': {
          id: 'ai-goal',
          question: 'What is your primary AI integration goal?',
          options: [
            {
              label: 'Customer Service Automation',
              value: 'customer-service',
              nextNode: 'customer-service-volume'
            },
            {
              label: 'Content Creation & Marketing',
              value: 'content-creation',
              nextNode: 'content-volume'
            },
            {
              label: 'Data Analysis & Insights',
              value: 'data-analysis',
              nextNode: 'data-complexity'
            },
            {
              label: 'Process Automation',
              value: 'process-automation',
              nextNode: 'process-scope'
            }
          ]
        },
        'customer-service-volume': {
          id: 'customer-service-volume',
          question: 'What is your customer interaction volume?',
          options: [
            {
              label: 'Low Volume (up to 100 queries/day)',
              value: 'low-volume',
              solution: {
                title: 'Basic AI Customer Service',
                description: 'Simple chatbot integration for basic customer inquiries and support.',
                features: ['Basic Chatbot', 'FAQ Automation', 'Email Integration', 'Simple Analytics'],
                price: '$149/month',
                timeline: '1-2 weeks'
              }
            },
            {
              label: 'High Volume (100+ queries/day)',
              value: 'high-volume',
              solution: {
                title: 'Advanced AI Customer Platform',
                description: 'Sophisticated AI system with natural language processing and multi-channel support.',
                features: ['Advanced NLP', 'Multi-channel Support', 'Sentiment Analysis', 'Live Agent Handoff', 'Advanced Analytics'],
                price: '$399/month',
                timeline: '3-4 weeks'
              }
            }
          ]
        },
        'content-volume': {
          id: 'content-volume',
          question: 'How much content do you need to create?',
          options: [
            {
              label: 'Basic Content Needs',
              value: 'basic-content',
              solution: {
                title: 'AI Content Assistant',
                description: 'AI-powered content creation tools for social media, blogs, and marketing materials.',
                features: ['Content Generation', 'Social Media Automation', 'Blog Writing', 'Image Creation'],
                price: '$199/month',
                timeline: '1-3 weeks'
              }
            },
            {
              label: 'High-Volume Content Production',
              value: 'high-content',
              solution: {
                title: 'Enterprise Content Platform',
                description: 'Complete AI content ecosystem with brand consistency and workflow automation.',
                features: ['Brand-Consistent Content', 'Workflow Automation', 'Multi-format Creation', 'Content Calendar', 'Team Collaboration'],
                price: '$599/month',
                timeline: '3-5 weeks'
              }
            }
          ]
        },
        'data-complexity': {
          id: 'data-complexity',
          question: 'How complex is your data analysis needs?',
          options: [
            {
              label: 'Basic Reporting & Insights',
              value: 'basic-data',
              solution: {
                title: 'AI Analytics Starter',
                description: 'Automated reporting and basic predictive analytics for business insights.',
                features: ['Automated Reports', 'Trend Analysis', 'Basic Predictions', 'Data Visualization'],
                price: '$299/month',
                timeline: '2-4 weeks'
              }
            },
            {
              label: 'Advanced Analytics & ML',
              value: 'advanced-data',
              solution: {
                title: 'Enterprise AI Analytics',
                description: 'Advanced machine learning models for complex data analysis and predictions.',
                features: ['Custom ML Models', 'Predictive Analytics', 'Real-time Processing', 'Advanced Visualizations', 'API Integration'],
                price: '$899/month',
                timeline: '4-8 weeks'
              }
            }
          ]
        },
        'process-scope': {
          id: 'process-scope',
          question: 'What processes need automation?',
          options: [
            {
              label: 'Single Process/Department',
              value: 'single-process',
              solution: {
                title: 'Focused Process Automation',
                description: 'AI automation for specific business processes with workflow optimization.',
                features: ['Workflow Automation', 'Document Processing', 'Task Scheduling', 'Performance Monitoring'],
                price: '$349/month',
                timeline: '2-5 weeks'
              }
            },
            {
              label: 'Multiple Processes/Enterprise-wide',
              value: 'enterprise-process',
              solution: {
                title: 'Enterprise Automation Platform',
                description: 'Comprehensive AI automation across multiple departments and processes.',
                features: ['Cross-department Automation', 'Advanced AI Models', 'Integration Hub', 'Scalable Architecture', 'Custom Development'],
                price: '$1,299/month',
                timeline: '6-12 weeks'
              }
            }
          ]
        }
      }
    },
    'gis-mapping': {
      title: 'GIS Mapping Solution Finder',
      description: 'Find the ideal mapping solution for your geographic data needs.',
      startNode: 'mapping-purpose',
      nodes: {
        'mapping-purpose': {
          id: 'mapping-purpose',
          question: 'What is your primary mapping purpose?',
          options: [
            {
              label: 'Business Location Analysis',
              value: 'business-analysis',
              nextNode: 'business-scope'
            },
            {
              label: 'Asset & Resource Management',
              value: 'asset-management',
              nextNode: 'asset-scope'
            },
            {
              label: 'Customer/Market Analysis',
              value: 'market-analysis',
              nextNode: 'market-scope'
            },
            {
              label: 'Environmental/Scientific Data',
              value: 'environmental',
              nextNode: 'environmental-scope'
            }
          ]
        },
        'business-scope': {
          id: 'business-scope',
          question: 'What is your geographic scope?',
          options: [
            {
              label: 'Local/Regional (single city/state)',
              value: 'local',
              solution: {
                title: 'Local Business Mapping',
                description: 'Targeted mapping solution for local business analysis and site selection.',
                features: ['Location Intelligence', 'Site Analysis', 'Competitor Mapping', 'Demographics Integration'],
                price: '$249/month',
                timeline: '2-3 weeks'
              }
            },
            {
              label: 'National/International',
              value: 'national',
              solution: {
                title: 'Enterprise Location Platform',
                description: 'Comprehensive mapping platform for multi-location business operations.',
                features: ['Multi-location Management', 'Advanced Analytics', 'Real-time Data', 'Custom Dashboards', 'API Access'],
                price: '$699/month',
                timeline: '4-6 weeks'
              }
            }
          ]
        },
        'asset-scope': {
          id: 'asset-scope',
          question: 'What type of assets need tracking?',
          options: [
            {
              label: 'Infrastructure/Equipment',
              value: 'infrastructure',
              solution: {
                title: 'Asset Tracking & Management',
                description: 'Complete asset management with real-time tracking and maintenance scheduling.',
                features: ['Real-time Tracking', 'Maintenance Scheduling', 'Condition Monitoring', 'Mobile Access'],
                price: '$399/month',
                timeline: '3-5 weeks'
              }
            },
            {
              label: 'Fleet/Vehicle Management',
              value: 'fleet',
              solution: {
                title: 'Fleet Management Platform',
                description: 'Advanced fleet tracking with route optimization and driver management.',
                features: ['GPS Tracking', 'Route Optimization', 'Driver Monitoring', 'Fuel Management', 'Reporting'],
                price: '$599/month',
                timeline: '3-4 weeks'
              }
            }
          ]
        },
        'market-scope': {
          id: 'market-scope',
          question: 'What level of market analysis do you need?',
          options: [
            {
              label: 'Basic Customer Mapping',
              value: 'basic-market',
              solution: {
                title: 'Customer Analytics Mapping',
                description: 'Customer location analysis with demographic and behavioral insights.',
                features: ['Customer Mapping', 'Demographic Analysis', 'Market Segmentation', 'Sales Territory Planning'],
                price: '$349/month',
                timeline: '2-4 weeks'
              }
            },
            {
              label: 'Advanced Market Intelligence',
              value: 'advanced-market',
              solution: {
                title: 'Market Intelligence Platform',
                description: 'Comprehensive market analysis with predictive modeling and competitive intelligence.',
                features: ['Predictive Modeling', 'Competitive Analysis', 'Market Forecasting', 'Risk Assessment', 'Custom Reports'],
                price: '$899/month',
                timeline: '5-8 weeks'
              }
            }
          ]
        },
        'environmental-scope': {
          id: 'environmental-scope',
          question: 'What type of environmental data?',
          options: [
            {
              label: 'Basic Environmental Monitoring',
              value: 'basic-environmental',
              solution: {
                title: 'Environmental Data Platform',
                description: 'Environmental monitoring and analysis with satellite data integration.',
                features: ['Satellite Data', 'Environmental Monitoring', 'Change Detection', 'Data Visualization'],
                price: '$499/month',
                timeline: '4-6 weeks'
              }
            },
            {
              label: 'Advanced Scientific Analysis',
              value: 'advanced-environmental',
              solution: {
                title: 'Scientific GIS Platform',
                description: 'Advanced scientific analysis with custom modeling and research tools.',
                features: ['Custom Modeling', 'Scientific Analysis', 'Research Tools', 'Data Integration', 'Collaboration Features'],
                price: '$1,199/month',
                timeline: '6-10 weeks'
              }
            }
          ]
        }
      }
    }
  };

  const handleServiceClick = (serviceId: string) => {
    console.log('Service clicked:', serviceId);
    console.log('Simulator data exists:', !!simulatorData[serviceId]);
    console.log('Available simulators:', Object.keys(simulatorData));
    
    if (simulatorData[serviceId]) {
      console.log('Setting expanded service to:', serviceId);
      setExpandedService(serviceId);
      setCurrentNode(simulatorData[serviceId].startNode);
      setSelections({});
      setFinalSolution(null);
    } else {
      console.log('No simulator found for:', serviceId);
      // For services without simulators, show a simple message
      alert(`Interactive simulator for ${serviceId} coming soon! Please contact us for more information.`);
    }
  };

  const handleOptionSelect = (nodeId: string, option: any) => {
    const newSelections = { ...selections, [nodeId]: option.value };
    setSelections(newSelections);

    if (option.solution) {
      setFinalSolution(option.solution);
      setCurrentNode('');
    } else if (option.nextNode) {
      setCurrentNode(option.nextNode);
    }
  };

  const resetSimulator = () => {
    setExpandedService(null);
    setCurrentNode('');
    setSelections({});
    setFinalSolution(null);
  };

  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Technology Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From cybersecurity to AI integration, we provide comprehensive technology solutions 
            tailored for businesses of all sizes - from home offices to medium enterprises.
          </p>
        </div>

        {/* Two-column layout: Services on left, Simulator on right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 lg:h-[800px]">
          {/* Services Grid - Left Side */}
          <div className="lg:h-full overflow-y-auto">
            <div className="grid gap-6 pr-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isActive={expandedService === service.id}
                  onClick={() => handleServiceClick(service.id)}
                />
              ))}
            </div>
          </div>

          {/* Simulator Panel - Right Side */}
          <div className="lg:h-full">
            {expandedService && simulatorData[expandedService] ? (
              <SimulatorPanel
                simulator={simulatorData[expandedService]}
                currentNode={currentNode}
                selections={selections}
                finalSolution={finalSolution}
                onOptionSelect={handleOptionSelect}
                onReset={resetSimulator}
                onRestart={() => {
                  setCurrentNode(simulatorData[expandedService].startNode);
                  setSelections({});
                  setFinalSolution(null);
                }}
              />
            ) : (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 text-center min-h-[600px] lg:h-full flex items-center justify-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Interactive Solution Finder
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Click on any service card to start an interactive simulator that will help you find the perfect solution for your business needs.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">
              Ready to Transform Your Technology?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with our technology specialists for a comprehensive consultation
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 transform"
            >
              <div className="relative flex items-center space-x-3">
                <span>Start Your Transformation</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-lg">🚀</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
