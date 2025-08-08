import React from 'react';
import { Solution, SimulatorData } from './types';

interface SimulatorPanelProps {
  simulator: SimulatorData[string];
  currentNode: string;
  selections: { [nodeId: string]: string };
  finalSolution: Solution | null;
  onOptionSelect: (nodeId: string, option: any) => void;
  onReset: () => void;
  onRestart: () => void;
}

const SimulatorPanel: React.FC<SimulatorPanelProps> = ({
  simulator,
  currentNode,
  selections,
  finalSolution,
  onOptionSelect,
  onReset,
  onRestart,
}) => {
  const currentNodeData = currentNode ? simulator.nodes[currentNode] : null;
  const progressPercentage = finalSolution
    ? 100
    : Object.keys(selections).length > 0
    ? 60
    : 20;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium text-gray-600">
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

      {/* Final Solution */}
      {finalSolution && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">✅</span>
            <h4 className="text-xl font-bold text-gray-900">{finalSolution.title}</h4>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">{finalSolution.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">{finalSolution.price}</div>
              <div className="text-sm text-gray-600">Investment</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">{finalSolution.timeline}</div>
              <div className="text-sm text-gray-600">Timeline</div>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-gray-900">Included Features:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {finalSolution.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={onRestart}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
            >
              Start Over
            </button>
            <button
              onClick={() => {
                onReset();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
            >
              Get Started Today
            </button>
          </div>
        </div>
      )}

      {/* Current Question */}
      {currentNodeData && !finalSolution && (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            {currentNodeData.question}
          </h4>
          
          <div className="grid grid-cols-1 gap-3">
            {currentNodeData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onOptionSelect(currentNodeData.id, option)}
                className="text-left p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-medium group-hover:text-indigo-700">
                    {option.label}
                  </span>
                  <span className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selection Summary */}
      {Object.keys(selections).length > 0 && !finalSolution && (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h5 className="font-semibold text-gray-900 mb-2">Your Selections:</h5>
          <div className="space-y-1">
            {Object.entries(selections).map(([nodeId, value]) => (
              <div key={nodeId} className="text-sm text-gray-600">
                • {value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulatorPanel;
