import { useState, useEffect } from 'react';

const nodes = [
  { id: 'analytics', label: 'Employer Analytics', angle: 0 },
  { id: 'outcomes', label: 'Health Outcomes', angle: 45 },
  { id: 'receptionist', label: 'AI Receptionist', angle: 90 },
  { id: 'triaging', label: 'AI Call Triaging', angle: 135 },
  { id: 'marketing', label: 'Marketing Automation', angle: 180 },
  { id: 'engagement', label: 'Patient Engagement', angle: 225 },
  { id: 'hcc', label: 'HCC Suspecting', angle: 270 },
  { id: 'hedis', label: 'HEDIS & MIPS', angle: 315 },
];

export const HeroVisualization = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const centerX = 300;
  const centerY = 180;
  const radius = 120;
  const nodeRadius = 7;

  const getNodePosition = (angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: centerX + Math.cos(rad) * radius,
      y: centerY + Math.sin(rad) * radius,
    };
  };

  return (
    <div className="w-full max-w-xl mx-auto h-[280px] relative mb-4">
      <svg
        viewBox="0 0 600 340"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle glow for active elements */}
          <filter id="activeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connecting lines from each node to center */}
        {nodes.map((node, index) => {
          const pos = getNodePosition(node.angle);
          const isActive = index === activeNode;
          
          return (
            <g key={`connection-${node.id}`}>
              {/* Dotted line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="1"
                strokeDasharray="3 6"
                opacity={isActive ? 0.5 : 0.2}
                className="transition-opacity duration-500"
              />

              {/* Animated particle traveling to center */}
              {isActive && (
                <>
                  <circle r="4" fill="hsl(var(--accent))" filter="url(#glow)">
                    <animateMotion
                      dur="1.8s"
                      repeatCount="indefinite"
                      path={`M${pos.x},${pos.y} L${centerX},${centerY}`}
                    />
                  </circle>
                  <circle r="2" fill="hsl(var(--primary))">
                    <animateMotion
                      dur="1.8s"
                      repeatCount="indefinite"
                      begin="0.3s"
                      path={`M${pos.x},${pos.y} L${centerX},${centerY}`}
                    />
                  </circle>
                </>
              )}
            </g>
          );
        })}

        {/* Central hub */}
        <g>
          {/* Outer ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r="55"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          
          {/* Main circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r="45"
            fill="hsl(var(--card))"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          
          {/* Inner highlight */}
          <circle
            cx={centerX}
            cy={centerY}
            r="35"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Center text */}
          <text
            x={centerX}
            y={centerY - 6}
            textAnchor="middle"
            className="fill-foreground text-sm font-semibold"
            style={{ fontSize: '13px' }}
          >
            Activation
          </text>
          <text
            x={centerX}
            y={centerY + 12}
            textAnchor="middle"
            className="fill-muted-foreground"
            style={{ fontSize: '11px' }}
          >
            Layer
          </text>
        </g>

        {/* Outer nodes */}
        {nodes.map((node, index) => {
          const pos = getNodePosition(node.angle);
          const isActive = index === activeNode;
          
          // Calculate label position - outside the node
          const labelRad = ((node.angle - 90) * Math.PI) / 180;
          const labelDistance = radius + 38;
          const labelX = centerX + Math.cos(labelRad) * labelDistance;
          const labelY = centerY + Math.sin(labelRad) * labelDistance;
          
          // Determine text anchor based on position
          let textAnchor = 'middle';
          if (node.angle > 45 && node.angle < 135) textAnchor = 'start';
          if (node.angle > 225 && node.angle < 315) textAnchor = 'end';

          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode(index)}
            >
              {/* Node outer ring when active */}
              {isActive && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeRadius + 8}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1"
                  opacity="0.4"
                  className="animate-ping-slow"
                />
              )}
              
              {/* Node circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={nodeRadius}
                fill={isActive ? "hsl(var(--accent))" : "hsl(var(--muted))"}
                stroke={isActive ? "hsl(var(--accent))" : "hsl(var(--border))"}
                strokeWidth="2"
                filter={isActive ? "url(#activeGlow)" : "none"}
                className="transition-all duration-300"
              />
              
              {/* Inner dot */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r="3"
                fill={isActive ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))"}
                className="transition-all duration-300"
              />

              {/* Label */}
              <text
                x={labelX}
                y={labelY}
                textAnchor={textAnchor}
                className={`transition-all duration-300 ${
                  isActive ? 'fill-foreground font-medium' : 'fill-muted-foreground'
                }`}
                style={{ fontSize: '12px' }}
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
