import { useState, useEffect, useCallback } from 'react';
import { Database, FileText, Pill, FlaskConical, Watch, MessageSquare } from 'lucide-react';

// Data inputs (left side)
const dataInputs = [
  { id: 'claims', label: 'Claims', Icon: FileText },
  { id: 'clinical', label: 'Clinical (EHR)', Icon: Database },
  { id: 'pharmacy', label: 'Pharmacy', Icon: Pill },
  { id: 'labs', label: 'Labs', Icon: FlaskConical },
  { id: 'wearables', label: 'Wearables', Icon: Watch },
  { id: 'comms', label: 'Communications', Icon: MessageSquare },
];

// ICP clusters with outcomes (right side)
const icpClusters = [
  {
    id: 'employers',
    title: 'Self-Funded Employers',
    color: 'hsl(var(--accent))',
    outcomes: ['Cost Drivers & Savings', 'Population Health', 'Utilization Insights', 'ROI Dashboards'],
  },
  {
    id: 'directcare',
    title: 'Direct Care / Primary Care',
    color: 'hsl(var(--primary))',
    outcomes: ['AI Call Triage', 'AI Receptionist', 'Patient Engagement', 'Outcomes Reporting'],
  },
  {
    id: 'valuebased',
    title: 'Value-Based / ACOs',
    color: 'hsl(16, 85%, 60%)',
    outcomes: ['HCC Suspecting', 'HEDIS & MIPS', 'Risk Adjustment', 'Quality Performance'],
  },
];

export const HeroVisualization = () => {
  const [activeICP, setActiveICP] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle ICPs every 4 seconds unless hovering
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveICP((prev) => (prev + 1) % icpClusters.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const handleICPHover = useCallback((index: number) => {
    setIsHovering(true);
    setActiveICP(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div className="w-full h-[480px] relative" onMouseLeave={handleMouseLeave}>
      <svg
        viewBox="0 0 600 480"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="activationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
          </linearGradient>
          
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <filter id="subtleGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Data Input Nodes (Left Side) */}
        {dataInputs.map((input, index) => {
          const yPos = 80 + index * 60;
          const xPos = 60;
          
          return (
            <g key={input.id}>
              {/* Connection line to center */}
              <path
                d={`M${xPos + 40},${yPos} Q${180},${yPos} ${260},${240}`}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.5"
                className="transition-opacity duration-500"
              />
              
              {/* Animated particle */}
              <circle r="3" fill="hsl(var(--accent))" filter="url(#subtleGlow)">
                <animateMotion
                  dur={`${2 + index * 0.3}s`}
                  repeatCount="indefinite"
                  path={`M${xPos + 40},${yPos} Q${180},${yPos} ${260},${240}`}
                />
              </circle>

              {/* Input node */}
              <g className="transition-transform duration-300 hover:scale-110" style={{ transformOrigin: `${xPos}px ${yPos}px` }}>
                <circle
                  cx={xPos}
                  cy={yPos}
                  r="22"
                  fill="hsl(var(--card))"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                />
                <circle
                  cx={xPos}
                  cy={yPos}
                  r="18"
                  fill="hsl(var(--muted))"
                  opacity="0.5"
                />
              </g>
              
              {/* Label */}
              <text
                x={xPos + 32}
                y={yPos + 4}
                className="fill-muted-foreground"
                style={{ fontSize: '11px' }}
              >
                {input.label}
              </text>
            </g>
          );
        })}

        {/* Central Activation Layer */}
        <g>
          {/* Outer pulsing ring */}
          <circle
            cx="300"
            cy="240"
            r="55"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="55;62;55"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.1;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Second ring */}
          <circle
            cx="300"
            cy="240"
            r="48"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.4"
          />

          {/* Main activation orb */}
          <circle
            cx="300"
            cy="240"
            r="40"
            fill="url(#activationGradient)"
            filter="url(#softGlow)"
          >
            <animate
              attributeName="r"
              values="40;42;40"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Inner glow */}
          <circle
            cx="300"
            cy="240"
            r="30"
            fill="hsl(var(--card))"
            opacity="0.3"
          />

          {/* Center text */}
          <text
            x="300"
            y="235"
            textAnchor="middle"
            className="fill-primary-foreground font-semibold"
            style={{ fontSize: '12px' }}
          >
            Activation
          </text>
          <text
            x="300"
            y="250"
            textAnchor="middle"
            className="fill-primary-foreground"
            style={{ fontSize: '10px', opacity: 0.9 }}
          >
            Layer
          </text>
        </g>

        {/* ICP Clusters (Right Side) */}
        {icpClusters.map((cluster, clusterIndex) => {
          const isActive = clusterIndex === activeICP;
          const baseY = 80 + clusterIndex * 140;
          const xStart = 380;
          
          return (
            <g
              key={cluster.id}
              className="cursor-pointer transition-all duration-500"
              onMouseEnter={() => handleICPHover(clusterIndex)}
              style={{
                opacity: isActive ? 1 : 0.4,
                transform: isActive ? 'translateX(0)' : 'translateX(-5px)',
              }}
            >
              {/* Connection line from center */}
              <path
                d={`M340,240 Q${360},${baseY + 40} ${xStart - 20},${baseY + 40}`}
                fill="none"
                stroke={cluster.color}
                strokeWidth={isActive ? "2" : "1"}
                strokeDasharray={isActive ? "0" : "4 4"}
                opacity={isActive ? 0.8 : 0.3}
                className="transition-all duration-500"
              />

              {/* Animated particle (only when active) */}
              {isActive && (
                <circle r="4" fill={cluster.color} filter="url(#subtleGlow)">
                  <animateMotion
                    dur="1.5s"
                    repeatCount="indefinite"
                    path={`M340,240 Q${360},${baseY + 40} ${xStart - 20},${baseY + 40}`}
                  />
                </circle>
              )}

              {/* Cluster container */}
              <rect
                x={xStart - 10}
                y={baseY}
                width="200"
                height={95}
                rx="8"
                fill="hsl(var(--card))"
                stroke={isActive ? cluster.color : "hsl(var(--border))"}
                strokeWidth={isActive ? "1.5" : "1"}
                className="transition-all duration-300"
              />

              {/* Cluster title */}
              <text
                x={xStart}
                y={baseY + 20}
                className="fill-foreground font-semibold"
                style={{ fontSize: '11px' }}
              >
                {cluster.title}
              </text>

              {/* Outcomes */}
              {cluster.outcomes.map((outcome, outcomeIndex) => (
                <g key={outcome}>
                  <circle
                    cx={xStart + 6}
                    cy={baseY + 38 + outcomeIndex * 14}
                    r="3"
                    fill={isActive ? cluster.color : "hsl(var(--muted-foreground))"}
                    className="transition-colors duration-300"
                  />
                  <text
                    x={xStart + 16}
                    y={baseY + 41 + outcomeIndex * 14}
                    className={`transition-colors duration-300 ${isActive ? 'fill-foreground' : 'fill-muted-foreground'}`}
                    style={{ fontSize: '10px' }}
                  >
                    {outcome}
                  </text>
                </g>
              ))}

              {/* Active indicator */}
              {isActive && (
                <rect
                  x={xStart - 10}
                  y={baseY}
                  width="3"
                  height={95}
                  rx="1.5"
                  fill={cluster.color}
                />
              )}
            </g>
          );
        })}

        {/* Flow direction indicators */}
        <text x="150" y="450" className="fill-muted-foreground" style={{ fontSize: '10px' }}>
          Data Sources
        </text>
        <text x="440" y="450" className="fill-muted-foreground" style={{ fontSize: '10px' }}>
          ICP Outcomes
        </text>
        
        {/* Arrows */}
        <path d="M200,447 L210,450 L200,453" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.5" />
        <path d="M520,447 L530,450 L520,453" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* ICP indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {icpClusters.map((cluster, index) => (
          <button
            key={cluster.id}
            onClick={() => {
              setIsHovering(true);
              setActiveICP(index);
              setTimeout(() => setIsHovering(false), 5000);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeICP 
                ? 'w-6 bg-accent' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`View ${cluster.title}`}
          />
        ))}
      </div>
    </div>
  );
};
