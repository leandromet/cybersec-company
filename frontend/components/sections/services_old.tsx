"use client";
import React, { useEffect, useState, useRef } from 'react';

interface    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Full-stack development services for web applications, mobile apps, and business automation tools.',
      icon: '💻',
      features: ['Web Applications', 'Mobile Development', 'Database Design', 'System Integration'],
      color: 'from-orange-500 to-red-600',
      delay: 800,
      price: 'From $2,499/project',
      timeline: '4-12 weeks'
    },{
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  delay: number;
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
  [key: string]: {
    title: string;
    description: string;
    startNode: string;
    nodes: { [key: string]: DecisionNode };
  };
}

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [currentNode, setCurrentNode] = useState<string>('');
  const [selections, setSelections] = useState<{ [key: string]: string }>({});
  const [finalSolution, setFinalSolution] = useState<any>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services: Service[] = [
    {
      id: 'it-security',
      title: 'IT Security & Management',
      description: 'Complete IT infrastructure management from basic firewalls to enterprise security planning and monitoring.',
      icon: '🛡️',
      features: ['Network Security', 'Backup Solutions', 'Firewall Management', 'Security Audits'],
      color: 'from-cyan-500 to-blue-600',
      delay: 200,
      price: 'From $199/month',
      timeline: '1-2 weeks setup'
    },
    {
      id: 'ai-integration',
      title: 'AI API Integration',
      description: 'Custom AI solutions and API integrations to automate processes and enhance business intelligence.',
      icon: '🤖',
      features: ['ChatGPT Integration', 'Custom AI Models', 'Process Automation', 'Data Analytics'],
      color: 'from-purple-500 to-pink-600',
      delay: 400,
      price: 'From $299/month',
      timeline: '2-4 weeks'
    },
    {
      id: 'gis-mapping',
      title: 'GIS & Interactive Maps',
      description: 'Geospatial solutions, custom mapping applications, and location-based services for data visualization.',
      icon: '🗺️',
      features: ['Custom Map Applications', 'Spatial Analysis', 'Data Visualization', 'Location Services'],
      color: 'from-green-500 to-teal-600',
      delay: 600,
      price: 'From $399/month',
      timeline: '3-6 weeks'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Full-stack development services for web applications, mobile apps, and business automation tools.',
      icon: '�',
      features: ['Web Applications', 'Mobile Development', 'Database Design', 'System Integration'],
      color: 'from-orange-500 to-red-600',
      delay: 800
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Cloud migration, management, and optimization services for scalable and secure business operations.',
      icon: '☁️',
      features: ['Cloud Migration', 'AWS/Azure Setup', 'Data Backup', 'Performance Optimization'],
      color: 'from-indigo-500 to-purple-600',
      delay: 1000,
      price: 'From $149/month',
      timeline: '1-3 weeks'
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      description: 'Data analysis, reporting dashboards, and business intelligence solutions to drive informed decisions.',
      icon: '📊',
      features: ['Data Analytics', 'Custom Dashboards', 'Report Automation', 'KPI Monitoring'],
      color: 'from-rose-500 to-pink-600',
      delay: 1200,
      price: 'From $599/month',
      timeline: '2-6 weeks'
    }
  ];

  const simulatorData: SimulatorData = {
    'it-security': {
      title: 'IT Security Solution Finder',
      description: 'Find the perfect security solution for your business',
      startNode: 'business-type',
      nodes: {
        'business-type': {
          id: 'business-type',
          question: 'What type of business do you have?',
          options: [
            { label: 'Home Office', value: 'home', nextNode: 'home-size' },
            { label: 'Retail Store', value: 'store', nextNode: 'store-size' },
            { label: 'Office Building', value: 'office', nextNode: 'office-size' },
            { label: 'Manufacturing', value: 'manufacturing', nextNode: 'manufacturing-size' }
          ]
        },
        'home-size': {
          id: 'home-size',
          question: 'How many devices need protection?',
          options: [
            { 
              label: '1-3 devices', 
              value: 'small',
              solution: {
                title: 'Basic Home Security Package',
                description: 'Essential protection for small home offices',
                features: ['Personal Firewall', 'Antivirus Protection', 'Basic Backup', 'VPN Access'],
                price: '$99/month',
                timeline: '1-2 days setup'
              }
            },
            { 
              label: '4-10 devices', 
              value: 'medium',
              solution: {
                title: 'Advanced Home Office Security',
                description: 'Comprehensive protection for growing home businesses',
                features: ['Network Security', 'Advanced Backup', 'Multi-device Management', 'Remote Monitoring'],
                price: '$199/month',
                timeline: '3-5 days setup'
              }
            }
          ]
        },
        'store-size': {
          id: 'store-size',
          question: 'What is your store size?',
          options: [
            {
              label: 'Single Location',
              value: 'single',
              solution: {
                title: 'Retail Security Suite',
                description: 'Complete security for retail operations',
                features: ['POS Security', 'Customer Data Protection', 'Inventory System Security', 'Payment Processing Security'],
                price: '$299/month',
                timeline: '1 week setup'
              }
            },
            {
              label: 'Multiple Locations',
              value: 'multiple',
              solution: {
                title: 'Multi-Location Retail Security',
                description: 'Centralized security management for retail chains',
                features: ['Centralized Management', 'Inter-store VPN', 'Unified Threat Detection', 'Compliance Reporting'],
                price: '$599/month',
                timeline: '2-3 weeks setup'
              }
            }
          ]
        },
        'office-size': {
          id: 'office-size',
          question: 'How many employees do you have?',
          options: [
            {
              label: '5-20 employees',
              value: 'small-office',
              solution: {
                title: 'Small Business Security',
                description: 'Professional security for growing teams',
                features: ['Email Security', 'File Server Protection', 'Employee Access Control', 'Regular Security Training'],
                price: '$499/month',
                timeline: '1-2 weeks setup'
              }
            },
            {
              label: '21-100 employees',
              value: 'medium-office',
              solution: {
                title: 'Enterprise Security Platform',
                description: 'Comprehensive security for medium businesses',
                features: ['Advanced Threat Detection', 'Identity Management', 'Compliance Monitoring', '24/7 SOC Support'],
                price: '$1,299/month',
                timeline: '3-4 weeks setup'
              }
            }
          ]
        },
        'manufacturing-size': {
          id: 'manufacturing-size',
          question: 'What is your production environment?',
          options: [
            {
              label: 'Light Manufacturing',
              value: 'light',
              solution: {
                title: 'Industrial Security Basic',
                description: 'Security for light manufacturing operations',
                features: ['OT/IT Network Separation', 'Equipment Monitoring', 'Production Data Security', 'Remote Access Control'],
                price: '$899/month',
                timeline: '2-3 weeks setup'
              }
            },
            {
              label: 'Heavy Manufacturing',
              value: 'heavy',
              solution: {
                title: 'Industrial Security Advanced',
                description: 'Comprehensive security for heavy manufacturing',
                features: ['SCADA Security', 'ICS Protection', 'Safety System Integration', 'Advanced Threat Intelligence'],
                price: '$2,499/month',
                timeline: '4-6 weeks setup'
              }
            }
          ]
        }
      }
    },
    'ai-integration': {
      title: 'AI Integration Solution Finder',
      description: 'Discover the right AI solution for your business needs',
      startNode: 'ai-goal',
      nodes: {
        'ai-goal': {
          id: 'ai-goal',
          question: 'What is your primary goal with AI?',
          options: [
            { label: 'Customer Service', value: 'customer-service', nextNode: 'customer-volume' },
            { label: 'Process Automation', value: 'automation', nextNode: 'automation-type' },
            { label: 'Data Analysis', value: 'analytics', nextNode: 'data-volume' },
            { label: 'Content Generation', value: 'content', nextNode: 'content-type' }
          ]
        },
        'customer-volume': {
          id: 'customer-volume',
          question: 'How many customer interactions do you handle daily?',
          options: [
            {
              label: '10-50 interactions',
              value: 'low',
              solution: {
                title: 'Basic AI Chatbot',
                description: 'Simple chatbot for small businesses',
                features: ['FAQ Automation', 'Basic Query Handling', 'Email Integration', 'Simple Analytics'],
                price: '$149/month',
                timeline: '1-2 weeks'
              }
            },
            {
              label: '50-500 interactions',
              value: 'medium',
              solution: {
                title: 'Advanced Customer AI',
                description: 'Intelligent customer service automation',
                features: ['Complex Query Processing', 'Multi-channel Support', 'CRM Integration', 'Sentiment Analysis'],
                price: '$399/month',
                timeline: '3-4 weeks'
              }
            },
            {
              label: '500+ interactions',
              value: 'high',
              solution: {
                title: 'Enterprise Customer AI',
                description: 'Full-scale AI customer service platform',
                features: ['Advanced NLP', 'Voice Integration', 'Predictive Support', 'Custom Training'],
                price: '$899/month',
                timeline: '6-8 weeks'
              }
            }
          ]
        },
        'automation-type': {
          id: 'automation-type',
          question: 'What processes do you want to automate?',
          options: [
            {
              label: 'Document Processing',
              value: 'documents',
              solution: {
                title: 'Document AI Automation',
                description: 'Intelligent document processing and extraction',
                features: ['OCR Processing', 'Data Extraction', 'Form Automation', 'Document Classification'],
                price: '$299/month',
                timeline: '2-3 weeks'
              }
            },
            {
              label: 'Workflow Management',
              value: 'workflow',
              solution: {
                title: 'Workflow AI Engine',
                description: 'Smart workflow automation and optimization',
                features: ['Process Optimization', 'Task Routing', 'Decision Automation', 'Performance Analytics'],
                price: '$599/month',
                timeline: '4-6 weeks'
              }
            }
          ]
        },
        'data-volume': {
          id: 'data-volume',
          question: 'How much data do you need to analyze?',
          options: [
            {
              label: 'Small datasets (< 1GB)',
              value: 'small',
              solution: {
                title: 'Basic Analytics AI',
                description: 'Simple data analysis and insights',
                features: ['Trend Analysis', 'Basic Predictions', 'Visual Reports', 'Excel Integration'],
                price: '$199/month',
                timeline: '1-2 weeks'
              }
            },
            {
              label: 'Large datasets (> 1GB)',
              value: 'large',
              solution: {
                title: 'Advanced Analytics Platform',
                description: 'Comprehensive data analysis and machine learning',
                features: ['Big Data Processing', 'Predictive Models', 'Real-time Analytics', 'Custom Dashboards'],
                price: '$799/month',
                timeline: '4-8 weeks'
              }
            }
          ]
        },
        'content-type': {
          id: 'content-type',
          question: 'What type of content do you need?',
          options: [
            {
              label: 'Text Content',
              value: 'text',
              solution: {
                title: 'AI Content Writer',
                description: 'Automated content generation for marketing',
                features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'SEO Optimization'],
                price: '$249/month',
                timeline: '1-2 weeks'
              }
            },
            {
              label: 'Visual Content',
              value: 'visual',
              solution: {
                title: 'AI Visual Generator',
                description: 'Automated visual content creation',
                features: ['Image Generation', 'Logo Design', 'Marketing Graphics', 'Brand Consistency'],
                price: '$399/month',
                timeline: '2-3 weeks'
              }
            }
          ]
        }
      }
    },
    'gis-mapping': {
      title: 'GIS Mapping Solution Finder',
      description: 'Find the perfect mapping solution for your location needs',
      startNode: 'mapping-purpose',
      nodes: {
        'mapping-purpose': {
          id: 'mapping-purpose',
          question: 'What is your primary mapping need?',
          options: [
            { label: 'Asset Tracking', value: 'assets', nextNode: 'asset-type' },
            { label: 'Route Optimization', value: 'routes', nextNode: 'fleet-size' },
            { label: 'Market Analysis', value: 'market', nextNode: 'market-scope' },
            { label: 'Property Management', value: 'property', nextNode: 'property-type' }
          ]
        },
        'asset-type': {
          id: 'asset-type',
          question: 'What type of assets do you need to track?',
          options: [
            {
              label: 'Equipment & Machinery',
              value: 'equipment',
              solution: {
                title: 'Asset Tracking System',
                description: 'Real-time equipment location and status monitoring',
                features: ['GPS Tracking', 'Maintenance Scheduling', 'Usage Analytics', 'Mobile App'],
                price: '$199/month',
                timeline: '2-3 weeks'
              }
            },
            {
              label: 'Inventory & Stock',
              value: 'inventory',
              solution: {
                title: 'Inventory Mapping Platform',
                description: 'Warehouse and inventory location management',
                features: ['Indoor Mapping', 'Stock Localization', 'Picking Optimization', 'Barcode Integration'],
                price: '$299/month',
                timeline: '3-4 weeks'
              }
            }
          ]
        },
        'fleet-size': {
          id: 'fleet-size',
          question: 'How many vehicles do you manage?',
          options: [
            {
              label: '1-10 vehicles',
              value: 'small-fleet',
              solution: {
                title: 'Small Fleet Optimizer',
                description: 'Route optimization for small delivery operations',
                features: ['Route Planning', 'Traffic Integration', 'Delivery Tracking', 'Customer Notifications'],
                price: '$149/month',
                timeline: '1-2 weeks'
              }
            },
            {
              label: '10+ vehicles',
              value: 'large-fleet',
              solution: {
                title: 'Enterprise Fleet Management',
                description: 'Comprehensive fleet management and optimization',
                features: ['Multi-route Optimization', 'Driver Management', 'Fuel Tracking', 'Advanced Analytics'],
                price: '$499/month',
                timeline: '4-6 weeks'
              }
            }
          ]
        },
        'market-scope': {
          id: 'market-scope',
          question: 'What is your market analysis scope?',
          options: [
            {
              label: 'Local Market',
              value: 'local',
              solution: {
                title: 'Local Market Intelligence',
                description: 'Demographic and competitor analysis for local markets',
                features: ['Demographics Mapping', 'Competitor Analysis', 'Site Selection', 'Customer Insights'],
                price: '$399/month',
                timeline: '2-3 weeks'
              }
            },
            {
              label: 'Regional/National',
              value: 'regional',
              solution: {
                title: 'Regional Market Platform',
                description: 'Comprehensive market analysis for expansion planning',
                features: ['Multi-region Analysis', 'Expansion Planning', 'Risk Assessment', 'Performance Tracking'],
                price: '$899/month',
                timeline: '4-8 weeks'
              }
            }
          ]
        },
        'property-type': {
          id: 'property-type',
          question: 'What type of properties do you manage?',
          options: [
            {
              label: 'Residential Properties',
              value: 'residential',
              solution: {
                title: 'Residential Property Manager',
                description: 'Property management with location intelligence',
                features: ['Property Mapping', 'Maintenance Tracking', 'Tenant Management', 'Market Valuations'],
                price: '$249/month',
                timeline: '2-3 weeks'
              }
            },
            {
              label: 'Commercial Properties',
              value: 'commercial',
              solution: {
                title: 'Commercial Property Platform',
                description: 'Advanced commercial property management system',
                features: ['Portfolio Mapping', 'Lease Management', 'Space Optimization', 'Investment Analysis'],
                price: '$699/month',
                timeline: '4-6 weeks'
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = entry.target.getAttribute('data-service-id');
            if (serviceId && !visibleCards.includes(serviceId)) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, serviceId]);
              }, services.find(s => s.id === serviceId)?.delay || 0);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const serviceCards = document.querySelectorAll('[data-service-id]');
    serviceCards.forEach(card => observer.observe(card));

    return () => {
      serviceCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 bg-white text-black overflow-hidden"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white border border-indigo-200 rounded-full px-6 py-3 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-indigo-700 font-medium text-sm tracking-wider uppercase">Security Arsenal</span>
            <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">
            <span className="block mb-2">Advanced Protection</span>
            <span className="text-indigo-600">Systems</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge cybersecurity solutions powered by artificial intelligence and quantum-resistant technologies
          </p>
        </div>

        {/* Services Grid */}
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
                  <span className="text-sm">�</span>
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
