"use client";
import React, { useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
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
    solution?: {
      title: string;
      description: string;
      features: string[];
      price: string;
      timeline: string;
    };
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

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [currentNode, setCurrentNode] = useState<string>('');
  const [selections, setSelections] = useState<{ [nodeId: string]: string }>({});
  const [finalSolution, setFinalSolution] = useState<any>(null);

  const services: Service[] = [
    {
      id: 'it-security',
      title: 'IT Security & Management',
      description: 'Complete IT infrastructure management from basic firewalls to enterprise security planning and monitoring.',
      icon: '🛡️',
      features: ['Network Security', 'Data Protection', 'Compliance Management', 'Threat Monitoring'],
      price: 'From $199/month',
      timeline: '1-2 weeks setup'
    },
    {
      id: 'ai-integration',
      title: 'AI API Integration',
      description: 'Custom AI solutions and API integrations to automate processes and enhance business intelligence.',
      icon: '🤖',
      features: ['ChatGPT Integration', 'Custom AI Models', 'Process Automation', 'Data Analysis'],
      price: 'From $299/month',
      timeline: '2-4 weeks'
    },
    {
      id: 'gis-mapping',
      title: 'GIS & Interactive Maps',
      description: 'Geospatial solutions, custom mapping applications, and location-based services for data visualization.',
      icon: '🗺️',
      features: ['Custom Map Applications', 'Location Analytics', 'Spatial Data Visualization', 'Mobile GIS'],
      price: 'From $399/month',
      timeline: '3-6 weeks'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Full-stack development services for web applications, mobile apps, and business automation tools.',
      icon: '💻',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      price: 'From $2,499/project',
      timeline: '4-12 weeks'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Cloud migration, management, and optimization services for scalable and secure business operations.',
      icon: '☁️',
      features: ['Cloud Migration', 'AWS/Azure Setup', 'Server Management', 'Backup Solutions'],
      price: 'From $149/month',
      timeline: '1-3 weeks'
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      description: 'Data analysis, reporting dashboards, and business intelligence solutions to drive informed decisions.',
      icon: '📊',
      features: ['Data Dashboards', 'Report Automation', 'KPI Tracking', 'Predictive Analytics'],
      price: 'From $599/month',
      timeline: '2-6 weeks'
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
    if (simulatorData[serviceId]) {
      setExpandedService(serviceId);
      setCurrentNode(simulatorData[serviceId].startNode);
      setSelections({});
      setFinalSolution(null);
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

  const renderSimulator = () => {
    if (!expandedService || !simulatorData[expandedService]) return null;

    const simulator = simulatorData[expandedService];
    const currentNodeData = currentNode ? simulator.nodes[currentNode] : null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold text-black mb-2">{simulator.title}</h3>
                <p className="text-neutral-600">{simulator.description}</p>
              </div>
              <button
                onClick={resetSimulator}
                className="text-neutral-400 hover:text-neutral-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-neutral-500">Progress</span>
                <div className="flex-1 bg-neutral-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: finalSolution ? '100%' : 
                             Object.keys(selections).length > 0 ? '60%' : '20%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Current Question */}
            {currentNodeData && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-black mb-6">
                  {currentNodeData.question}
                </h4>
                <div className="grid gap-4">
                  {currentNodeData.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(currentNodeData.id, option)}
                      className="text-left p-4 border-2 border-neutral-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-black group-hover:text-indigo-700">
                          {option.label}
                        </span>
                        <div className="w-6 h-6 border border-neutral-300 rounded-full flex items-center justify-center group-hover:border-indigo-500">
                          <span className="text-xs group-hover:text-indigo-500">→</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Final Solution */}
            {finalSolution && (
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">✓</span>
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-2">
                    Recommended Solution
                  </h4>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <h5 className="text-xl font-bold text-black mb-3">
                    {finalSolution.title}
                  </h5>
                  <p className="text-neutral-600 mb-4">
                    {finalSolution.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h6 className="font-semibold text-black mb-3">Features Included:</h6>
                      <ul className="space-y-2">
                        {finalSolution.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-sm text-neutral-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <h6 className="font-semibold text-black mb-1">Investment:</h6>
                        <p className="text-2xl font-bold text-indigo-600">{finalSolution.price}</p>
                      </div>
                      <div>
                        <h6 className="font-semibold text-black mb-1">Timeline:</h6>
                        <p className="text-neutral-600">{finalSolution.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      resetSimulator();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Get Quote
                  </button>
                  <button
                    onClick={() => {
                      setCurrentNode(simulator.startNode);
                      setSelections({});
                      setFinalSolution(null);
                    }}
                    className="flex-1 border-2 border-neutral-300 text-neutral-700 font-bold py-3 px-6 rounded-xl hover:bg-neutral-50 transition-colors duration-200"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}

            {/* Selection Summary */}
            {Object.keys(selections).length > 0 && !finalSolution && (
              <div className="mt-6 p-4 bg-neutral-50 rounded-xl">
                <h6 className="font-semibold text-black mb-2">Your Selections:</h6>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selections).map(([key, value]) => (
                    <span
                      key={key}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Technology Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From cybersecurity to AI integration, we provide comprehensive technology solutions 
            tailored for businesses of all sizes - from home offices to medium enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group hover:-translate-y-2 cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{service.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center mb-6">
                <span className="text-2xl font-bold text-indigo-600 block mb-2">
                  {service.price}
                </span>
                <span className="text-neutral-500 text-sm">{service.timeline}</span>
              </div>

              <div className="text-center">
                <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl text-sm font-medium">
                  Click to find your perfect solution →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Render Simulator Modal */}
        {renderSimulator()}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white border border-neutral-200 rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-black">
              Ready to Transform Your Technology?
            </h3>
            <p className="text-xl text-neutral-600 mb-8">
              Connect with our technology specialists for a comprehensive consultation
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-indigo-600 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-indigo-700"
            >
              <div className="relative flex items-center space-x-3">
                <span>Start Your Transformation</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">🚀</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
