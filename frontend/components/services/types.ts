export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  timeline: string;
  category: "security" | "ai" | "development" | "cloud" | "analytics";
}

export interface Solution {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
}

export interface DecisionNode {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    nextNode?: string;
    solution?: Solution;
  }[];
}

export interface SimulatorData {
  [serviceId: string]: {
    title: string;
    description: string;
    startNode: string;
    nodes: {
      [nodeId: string]: DecisionNode;
    };
  };
}

export const categoryColors = {
  security: "from-red-500 to-pink-600",
  ai: "from-purple-500 to-indigo-600",
  development: "from-blue-500 to-cyan-600",
  cloud: "from-green-500 to-teal-600",
  analytics: "from-orange-500 to-yellow-600",
};
