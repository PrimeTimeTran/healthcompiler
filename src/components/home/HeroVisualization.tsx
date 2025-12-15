import { useState, useEffect } from 'react';

const orbitingNodes = [
  { id: 'analytics', label: 'Employer Analytics', color: 'from-blue-400 to-blue-600', angle: -60 },
  { id: 'outcomes', label: 'Health Outcomes', color: 'from-emerald-400 to-emerald-600', angle: -20 },
  { id: 'receptionist', label: 'AI Receptionist', color: 'from-violet-400 to-violet-600', angle: 20 },
  { id: 'triaging', label: 'AI Call Triaging', color: 'from-amber-400 to-amber-600', angle: 60 },
  { id: 'marketing', label: 'Marketing Automation', color: 'from-rose-400 to-rose-600', angle: 120 },
  { id: 'engagement', label: 'Patient Engagement', color: 'from-cyan-400 to-cyan-600', angle: 160 },
  { id: 'hcc', label: 'HCC Suspecting', color: 'from-orange-400 to-orange-600', angle: 200 },
  { id: 'hedis', label: 'HEDIS & MIPS', color: 'from-pink-400 to-pink-600', angle: 240 },
];

export const HeroVisualization = () => {
  const [activeNode, setActiveNode] = useState<string>('receptionist');

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      const nodeIds = orbitingNodes.map(n => n.id);
      setActiveNode(prev => {
        const currentIndex = nodeIds.indexOf(prev);
        return nodeIds[(currentIndex + 1) % nodeIds.length];
      });
    }, 3000);
    return () => clearInterval(cycleInterval);
  }, []);

  const radiusX = 280;
  const radiusY = 140;
  const centerX = 400;
  const centerY = 180;

  const getNodePosition = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: centerX + Math.cos(rad) * radiusX,
      y: centerY + Math.sin(rad) * radiusY,
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[360px] md:h-[400px] relative mb-8">
      <svg 
        viewBox="0 0 800 360" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for lines */}
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated dash */}
          <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="12" height="1">
            <circle cx="2" cy="0.5" r="1.5" fill="hsl(var(--accent))" opacity="0.6" />
          </pattern>
        </defs>

        {/* Orbital ellipse - dashed */}
        <ellipse
          cx={centerX}
          cy={centerY}
          rx={radiusX}
          ry={radiusY}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          strokeDasharray="6 6"
          opacity="0.4"
        />

        {/* Connecting lines from nodes to center */}
        {orbitingNodes.map((node) => {
          const pos = getNodePosition(node.angle);
          const isActive = activeNode === node.id;
          
          return (
            <g key={`line-${node.id}`}>
              {/* Dotted connection line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke="hsl(var(--border))"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity={isActive ? 0.6 : 0.2}
                className="transition-opacity duration-500"
              />
              
              {/* Animated dot traveling on line when active */}
              {isActive && (
                <circle r="3" fill="hsl(var(--accent))" filter="url(#glow)">
                  <animateMotion
                    dur="1.5s"
                    repeatCount="indefinite"
                    path={`M${pos.x},${pos.y} L${centerX},${centerY}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Center hub */}
        <g>
          <circle
            cx={centerX}
            cy={centerY}
            r="50"
            fill="hsl(var(--card))"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            filter="url(#glow)"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r="35"
            fill="url(#lineGrad)"
            opacity="0.3"
          />
          <text
            x={centerX}
            y={centerY - 8}
            textAnchor="middle"
            className="fill-foreground text-xs font-semibold"
          >
            Activation
          </text>
          <text
            x={centerX}
            y={centerY + 8}
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            Layer
          </text>
        </g>

        {/* Orbiting nodes */}
        {orbitingNodes.map((node) => {
          const pos = getNodePosition(node.angle);
          const isActive = activeNode === node.id;
          
          return (
            <g
              key={node.id}
              className="cursor-pointer transition-transform duration-300"
              style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)', transformOrigin: `${pos.x}px ${pos.y}px` }}
              onMouseEnter={() => setActiveNode(node.id)}
            >
              {/* Node background pill */}
              <rect
                x={pos.x - 70}
                y={pos.y - 16}
                width="140"
                height="32"
                rx="16"
                fill={isActive ? "hsl(var(--card))" : "hsl(var(--card) / 0.8)"}
                stroke={isActive ? "hsl(var(--accent))" : "hsl(var(--border))"}
                strokeWidth={isActive ? "1.5" : "1"}
                filter={isActive ? "url(#glow)" : "none"}
                className="transition-all duration-300"
              />
              
              {/* Colored orb */}
              <circle
                cx={pos.x - 50}
                cy={pos.y}
                r="10"
                className={`fill-current`}
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                }}
              >
                <animate
                  attributeName="opacity"
                  values="1;0.7;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <defs>
                <linearGradient id={`grad-${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className={`${node.color.split(' ')[0].replace('from-', 'stop-')}`} />
                  <stop offset="100%" className={`${node.color.split(' ')[1].replace('to-', 'stop-')}`} />
                </linearGradient>
              </defs>
              <circle
                cx={pos.x - 50}
                cy={pos.y}
                r="10"
                fill={`url(#grad-${node.id})`}
              />
              <circle
                cx={pos.x - 53}
                cy={pos.y - 3}
                r="3"
                fill="white"
                opacity="0.4"
              />
              
              {/* Label */}
              <text
                x={pos.x + 5}
                y={pos.y + 4}
                className={`text-xs font-medium transition-all duration-300 ${
                  isActive ? 'fill-foreground' : 'fill-muted-foreground'
                }`}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};