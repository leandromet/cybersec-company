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
    <div 
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        border: '1px solid #e5e7eb',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div 
        style={{
          padding: '24px',
          borderBottom: '1px solid #f3f4f6',
          background: 'linear-gradient(to right, #eef2ff, #faf5ff)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <h3 
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '8px'
              }}
            >
              {simulator.title}
            </h3>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>{simulator.description}</p>
          </div>
          <button
            onClick={onReset}
            style={{
              marginLeft: '16px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.color = '#6b7280';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.color = '#9ca3af';
            }}
          >
            ✕
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '500', color: '#6b7280', marginBottom: '8px' }}>
            <span>Progress</span>
            <span>{progressPercentage}%</span>
          </div>
          <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '12px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                borderRadius: '9999px',
                transition: 'all 0.7s ease-out',
                width: `${progressPercentage}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '12px', overflowY: 'auto' }}>
        {/* Current Question */}
        {currentNodeData && !finalSolution && (
          <div style={{ marginBottom: '12px' }}>
            <h4 
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '12px'
              }}
            >
              {currentNodeData.question}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentNodeData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onOptionSelect(currentNodeData.id, option)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#a5b4fc';
                    e.currentTarget.style.background = 'linear-gradient(to right, #eef2ff, #faf5ff)';
                    const arrow = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                    const text = e.currentTarget.querySelector('.option-text') as HTMLElement;
                    if (arrow) {
                      arrow.style.borderColor = '#6366f1';
                      arrow.style.backgroundColor = '#6366f1';
                      arrow.style.color = 'white';
                    }
                    if (text) {
                      text.style.color = '#4338ca';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.background = 'white';
                    const arrow = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                    const text = e.currentTarget.querySelector('.option-text') as HTMLElement;
                    if (arrow) {
                      arrow.style.borderColor = '#d1d5db';
                      arrow.style.backgroundColor = 'transparent';
                      arrow.style.color = '#374151';
                    }
                    if (text) {
                      text.style.color = '#111827';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span 
                      className="option-text"
                      style={{
                        fontWeight: '500',
                        color: '#111827',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {option.label}
                    </span>
                    <div 
                      className="arrow-icon"
                      style={{
                        width: '32px',
                        height: '32px',
                        border: '2px solid #d1d5db',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}
                    >
                      →
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Final Solution */}
        {finalSolution && (
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              {/* Symbol Column */}
              <div 
                style={{
                  width: '56px',
                  minWidth: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '20%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '24px',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                }}
              >
                <span style={{ fontSize: '32px', color: 'white' }}>✓</span>
              </div>
              {/* Text Column */}
              <div style={{ flex: 1 }}>
                <h5 
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '8px'
                  }}
                >
                  Perfect Match Found!
                </h5>
                <div 
                  style={{
                    width: '64px',
                    height: '4px',
                    background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                    margin: '8px 0'
                  }}
                />
              </div>
            </div>

            <div 
              style={{
                background: 'linear-gradient(135deg, #eef2ff, #faf5ff, #eff6ff)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #c7d2fe'
              }}
            >
              <h5 
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '12px'
                }}
              >
                {finalSolution.title}
              </h5>
              <p 
                style={{
                  color: '#6b7280',
                  marginBottom: '24px',
                  lineHeight: '1.6'
                }}
              >
                {finalSolution.description}
              </p>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                  gap: '24px',
                  marginBottom: '24px'
                }}
              >
                <div>
                  <h6 
                    style={{
                      fontWeight: 'bold',
                      color: '#111827',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span 
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#6366f1',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '8px'
                      }}
                    >
                      <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                    </span>
                    Features Included:
                  </h6>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {finalSolution.features.map((feature, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <div 
                          style={{
                            width: '8px',
                            height: '8px',
                            background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                            borderRadius: '50%',
                            marginRight: '8px'
                          }}
                        />
                        <span style={{ color: '#374151', fontSize: '14px' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div 
                    style={{
                      padding: '16px',
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      border: '1px solid #c7d2fe'
                    }}
                  >
                    <h6 
                      style={{
                        fontWeight: 'bold',
                        color: '#111827',
                        marginBottom: '4px',
                        fontSize: '14px'
                      }}
                    >
                      Investment:
                    </h6>
                    <p 
                      style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#6366f1',
                        margin: 0
                      }}
                    >
                      {finalSolution.price}
                    </p>
                  </div>
                  <div 
                    style={{
                      padding: '16px',
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    <h6 
                      style={{
                        fontWeight: 'bold',
                        color: '#111827',
                        marginBottom: '4px',
                        fontSize: '14px'
                      }}
                    >
                      Timeline:
                    </h6>
                    <p 
                      style={{
                        color: '#374151',
                        fontWeight: '600',
                        margin: 0
                      }}
                    >
                      {finalSolution.timeline}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    onReset();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #4338ca, #6d28d9)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #4f46e5, #7c3aed)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Get Quote Now
                </button>
                <button
                  onClick={onRestart}
                  style={{
                    flex: 1,
                    border: '2px solid #d1d5db',
                    color: '#374151',
                    fontWeight: 'bold',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.borderColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Selection Summary */}
        {Object.keys(selections).length > 0 && !finalSolution && (
          <div 
            style={{
              marginTop: '24px',
              padding: '16px',
              background: 'linear-gradient(to right, #f9fafb, #f3f4f6)',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}
          >
            <h6 
              style={{
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px'
              }}
            >
              <span 
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#6366f1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '8px'
                }}
              >
                <span style={{ color: 'white', fontSize: '12px' }}>📝</span>
              </span>
              Your Selections:
            </h6>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {Object.entries(selections).map(([key, value]) => (
                <span
                  key={key}
                  style={{
                    padding: '4px 12px',
                    background: 'linear-gradient(to right, #ddd6fe, #e0e7ff)',
                    color: '#4338ca',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: '500',
                    border: '1px solid #c7d2fe'
                  }}
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

export default SimulatorPanel;
