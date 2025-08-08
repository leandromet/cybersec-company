import { Service, SimulatorData } from './types';

export const services: Service[] = [
  {
    id: "it-security",
    title: "IT Security & Management",
    description:
      "Complete IT infrastructure management from basic firewalls to enterprise security planning and monitoring.",
    icon: "🛡️",
    features: [
      "Network Security",
      "Data Protection",
      "Compliance Management",
      "Threat Monitoring",
    ],
    price: "From $199/month",
    timeline: "1-2 weeks setup",
    category: "security",
  },
  {
    id: "ai-integration",
    title: "AI API Integration",
    description:
      "Custom AI solutions and API integrations to automate processes and enhance business intelligence.",
    icon: "🤖",
    features: [
      "ChatGPT Integration",
      "Custom AI Models",
      "Process Automation",
      "Data Analysis",
    ],
    price: "From $299/month",
    timeline: "2-4 weeks",
    category: "ai",
  },
  {
    id: "gis-mapping",
    title: "GIS & Interactive Maps",
    description:
      "Geospatial solutions, custom mapping applications, and location-based services for data visualization.",
    icon: "🗺️",
    features: [
      "Custom Map Applications",
      "Location Analytics",
      "Spatial Data Visualization",
      "Mobile GIS",
    ],
    price: "From $399/month",
    timeline: "3-6 weeks",
    category: "analytics",
  },
  {
    id: "custom-development",
    title: "Custom Development",
    description:
      "Full-stack development services for web applications, mobile apps, and business automation tools.",
    icon: "💻",
    features: [
      "Web Applications",
      "Mobile Apps",
      "API Development",
      "Database Design",
    ],
    price: "From $2,499/project",
    timeline: "4-12 weeks",
    category: "development",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Cloud migration, management, and optimization services for scalable and secure business operations.",
    icon: "☁️",
    features: [
      "Cloud Migration",
      "AWS/Azure Setup",
      "Server Management",
      "Backup Solutions",
    ],
    price: "From $149/month",
    timeline: "1-3 weeks",
    category: "cloud",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description:
      "Data analysis, reporting dashboards, and business intelligence solutions to drive informed decisions.",
    icon: "📊",
    features: [
      "Data Dashboards",
      "Report Automation",
      "KPI Tracking",
      "Predictive Analytics",
    ],
    price: "From $599/month",
    timeline: "2-6 weeks",
    category: "analytics",
  },
];

export const simulatorData: SimulatorData = {
  "it-security": {
    title: "IT Security Solution Finder",
    description: "Find the perfect security solution for your business type and size.",
    startNode: "business-type",
    nodes: {
      "business-type": {
        id: "business-type",
        question: "What type of business do you operate?",
        options: [
          { label: "Home Office / Freelancer", value: "home-office", nextNode: "home-office-size" },
          { label: "Retail Store / Shop", value: "retail-store", nextNode: "retail-size" },
          { label: "Office Building / Corporate", value: "office-building", nextNode: "office-size" },
          { label: "Manufacturing / Industrial", value: "manufacturing", nextNode: "manufacturing-size" },
        ],
      },
      "home-office-size": {
        id: "home-office-size",
        question: "How many devices need protection?",
        options: [
          {
            label: "1-3 devices (Basic Setup)",
            value: "basic",
            solution: {
              title: "Home Office Basic Security",
              description: "Essential protection for small home offices with basic firewall, antivirus, and backup.",
              features: ["Basic Firewall", "Antivirus Protection", "Cloud Backup", "Email Support"],
              price: "$99/month",
              timeline: "1 week setup",
            },
          },
          {
            label: "4-10 devices (Professional Setup)",
            value: "professional",
            solution: {
              title: "Home Office Professional Security",
              description: "Comprehensive security suite for professional home offices with advanced monitoring.",
              features: ["Advanced Firewall", "Endpoint Protection", "VPN Access", "Real-time Monitoring", "Priority Support"],
              price: "$199/month",
              timeline: "1-2 weeks setup",
            },
          },
        ],
      },
    },
  },
  "ai-integration": {
    title: "AI Integration Solution Finder",
    description: "Discover the perfect AI solution to automate and enhance your business processes.",
    startNode: "ai-goal",
    nodes: {
      "ai-goal": {
        id: "ai-goal",
        question: "What's your primary goal with AI integration?",
        options: [
          { label: "Customer Service Automation", value: "customer-service", nextNode: "ai-scale" },
          { label: "Content Creation & Marketing", value: "content-creation", nextNode: "ai-scale" },
          { label: "Data Analysis & Insights", value: "data-analysis", nextNode: "ai-scale" },
          { label: "Process Automation", value: "process-automation", nextNode: "ai-scale" },
        ],
      },
      "ai-scale": {
        id: "ai-scale",
        question: "What's the scale of your operation?",
        options: [
          {
            label: "Small Business (1-10 employees)",
            value: "small",
            solution: {
              title: "AI Starter Package",
              description: "Perfect entry-level AI solutions with ChatGPT integration and basic automation tools.",
              features: ["ChatGPT API Integration", "Basic Chatbot", "Document Processing", "Email Support"],
              price: "$299/month",
              timeline: "2-3 weeks",
            },
          },
          {
            label: "Medium Business (11-50 employees)",
            value: "medium",
            solution: {
              title: "AI Business Suite",
              description: "Comprehensive AI solutions with custom models and advanced automation capabilities.",
              features: ["Custom AI Models", "Advanced Chatbots", "Data Analytics", "API Integrations", "Priority Support"],
              price: "$799/month",
              timeline: "4-6 weeks",
            },
          },
        ],
      },
    },
  },
  "gis-mapping": {
    title: "GIS & Mapping Solution Finder",
    description: "Find the right geospatial solution for your mapping and location analysis needs.",
    startNode: "gis-purpose",
    nodes: {
      "gis-purpose": {
        id: "gis-purpose",
        question: "What's your primary mapping need?",
        options: [
          { label: "Asset Tracking & Management", value: "asset-tracking", nextNode: "gis-complexity" },
          { label: "Location Analytics & Reporting", value: "analytics", nextNode: "gis-complexity" },
          { label: "Custom Web Maps", value: "web-maps", nextNode: "gis-complexity" },
          { label: "Mobile Field Data Collection", value: "field-collection", nextNode: "gis-complexity" },
        ],
      },
      "gis-complexity": {
        id: "gis-complexity",
        question: "How complex are your mapping requirements?",
        options: [
          {
            label: "Basic Interactive Maps",
            value: "basic",
            solution: {
              title: "GIS Starter Solution",
              description: "Simple interactive maps with basic data visualization and location services.",
              features: ["Interactive Web Maps", "Basic Data Layers", "Location Search", "Mobile Responsive"],
              price: "$399/month",
              timeline: "3-4 weeks",
            },
          },
          {
            label: "Advanced Spatial Analysis",
            value: "advanced",
            solution: {
              title: "Professional GIS Platform",
              description: "Full-featured GIS platform with advanced spatial analysis and custom applications.",
              features: ["Custom Map Applications", "Spatial Analysis Tools", "Data Integration", "Advanced Reporting", "API Access"],
              price: "$1,299/month",
              timeline: "6-8 weeks",
            },
          },
        ],
      },
    },
  },
  "custom-development": {
    title: "Custom Development Solution Finder",
    description: "Find the perfect development approach for your custom software needs.",
    startNode: "dev-type",
    nodes: {
      "dev-type": {
        id: "dev-type",
        question: "What type of application do you need?",
        options: [
          { label: "Web Application", value: "web-app", nextNode: "dev-complexity" },
          { label: "Mobile App (iOS/Android)", value: "mobile-app", nextNode: "dev-complexity" },
          { label: "Desktop Software", value: "desktop-app", nextNode: "dev-complexity" },
          { label: "API & Backend Services", value: "api-backend", nextNode: "dev-complexity" },
        ],
      },
      "dev-complexity": {
        id: "dev-complexity",
        question: "How complex is your project?",
        options: [
          {
            label: "Simple Application (MVP)",
            value: "simple",
            solution: {
              title: "MVP Development Package",
              description: "Perfect for startups and simple applications with core functionality.",
              features: ["Core Functionality", "Basic UI/UX", "Database Setup", "Basic Testing", "Deployment"],
              price: "$2,499 - $9,999",
              timeline: "4-8 weeks",
            },
          },
          {
            label: "Complex Enterprise Solution",
            value: "complex",
            solution: {
              title: "Enterprise Development Suite",
              description: "Full-scale enterprise applications with advanced features and integrations.",
              features: ["Advanced Features", "Custom UI/UX", "Third-party Integrations", "Comprehensive Testing", "Ongoing Support"],
              price: "$15,000 - $50,000+",
              timeline: "12-24 weeks",
            },
          },
        ],
      },
    },
  },
  "cloud-solutions": {
    title: "Cloud Solutions Finder",
    description: "Discover the right cloud strategy for your business infrastructure needs.",
    startNode: "cloud-goal",
    nodes: {
      "cloud-goal": {
        id: "cloud-goal",
        question: "What's your primary cloud objective?",
        options: [
          { label: "Migrate Existing Infrastructure", value: "migration", nextNode: "cloud-scale" },
          { label: "Set Up New Cloud Environment", value: "new-setup", nextNode: "cloud-scale" },
          { label: "Optimize Current Cloud Costs", value: "optimization", nextNode: "cloud-scale" },
          { label: "Backup & Disaster Recovery", value: "backup", nextNode: "cloud-scale" },
        ],
      },
      "cloud-scale": {
        id: "cloud-scale",
        question: "What's the size of your infrastructure?",
        options: [
          {
            label: "Small Setup (1-5 servers)",
            value: "small",
            solution: {
              title: "Cloud Essentials Package",
              description: "Perfect for small businesses moving to cloud with basic infrastructure needs.",
              features: ["AWS/Azure Setup", "Basic Monitoring", "Automated Backups", "Security Configuration"],
              price: "$149 - $399/month",
              timeline: "1-2 weeks",
            },
          },
          {
            label: "Enterprise Infrastructure (10+ servers)",
            value: "enterprise",
            solution: {
              title: "Enterprise Cloud Platform",
              description: "Comprehensive cloud solution with advanced monitoring, scaling, and management.",
              features: ["Multi-Cloud Setup", "Advanced Monitoring", "Auto-scaling", "24/7 Support", "Cost Optimization"],
              price: "$899 - $2,999/month",
              timeline: "3-6 weeks",
            },
          },
        ],
      },
    },
  },
  "business-intelligence": {
    title: "Business Intelligence Solution Finder",
    description: "Find the right BI solution to transform your data into actionable insights.",
    startNode: "bi-need",
    nodes: {
      "bi-need": {
        id: "bi-need",
        question: "What's your primary data analysis need?",
        options: [
          { label: "Executive Dashboards & KPIs", value: "dashboards", nextNode: "bi-complexity" },
          { label: "Sales & Marketing Analytics", value: "sales-marketing", nextNode: "bi-complexity" },
          { label: "Financial Reporting & Analysis", value: "financial", nextNode: "bi-complexity" },
          { label: "Operational Analytics", value: "operational", nextNode: "bi-complexity" },
        ],
      },
      "bi-complexity": {
        id: "bi-complexity",
        question: "How many data sources do you need to integrate?",
        options: [
          {
            label: "1-3 Data Sources (Basic)",
            value: "basic",
            solution: {
              title: "BI Starter Dashboard",
              description: "Essential business intelligence with basic dashboards and automated reporting.",
              features: ["Executive Dashboards", "Automated Reports", "Basic Data Integration", "Mobile Access"],
              price: "$599 - $1,299/month",
              timeline: "2-4 weeks",
            },
          },
          {
            label: "5+ Data Sources (Advanced)",
            value: "advanced",
            solution: {
              title: "Enterprise BI Platform",
              description: "Comprehensive business intelligence with advanced analytics and predictive insights.",
              features: ["Advanced Dashboards", "Predictive Analytics", "Multiple Data Sources", "Custom Reports", "Real-time Alerts"],
              price: "$1,999 - $4,999/month",
              timeline: "6-10 weeks",
            },
          },
        ],
      },
    },
  },
};
