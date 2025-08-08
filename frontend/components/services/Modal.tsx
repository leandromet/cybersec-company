import React from 'react';
import { SimulatorData, Solution } from './types';
import SimulatorPanel from './SimulatorPanel';

interface ModalProps {
  isOpen: boolean;
  simulator: SimulatorData[string];
  currentNode: string;
  selections: { [nodeId: string]: string };
  finalSolution: Solution | null;
  onOptionSelect: (nodeId: string, option: any) => void;
  onReset: () => void;
  onRestart: () => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  simulator,
  currentNode,
  selections,
  finalSolution,
  onOptionSelect,
  onReset,
  onRestart,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-4 md:p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                {simulator.title}
              </h3>
              <p className="text-indigo-100 mt-1">
                {simulator.description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-200 text-2xl md:text-3xl font-bold transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 md:p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          <SimulatorPanel
            simulator={simulator}
            currentNode={currentNode}
            selections={selections}
            finalSolution={finalSolution}
            onOptionSelect={onOptionSelect}
            onReset={onReset}
            onRestart={onRestart}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
