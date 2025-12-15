import { useEffect, useState } from 'react';

const nodes = [
  { id: 'data1', label: 'EHR', x: 10, y: 20 },
  { id: 'data2', label: 'Claims', x: 5, y: 50 },
  { id: 'data3', label: 'Labs', x: 12, y: 80 },
  { id: 'ai', label: 'AI Engine', x: 50, y: 50, isCenter: true },
  { id: 'out1', label: 'Analytics', x: 88, y: 20 },
  { id: 'out2', label: 'Automation', x: 92, y: 50 },
  { id: 'out3', label: 'Insights', x: 85, y: 80 },
];

const connections = [
  { from: 'data1', to: 'ai' },
  { from: 'data2', to: 'ai' },
  { from: 'data3', to: 'ai' },
  { from: 'ai', to: 'out1' },
  { from: 'ai', to: 'out2' },
  { from: 'ai', to: 'out3' },
];

export const HeroVisualization = () => {
  const [activeConnections, setActiveConnections] = useState<number[]>([]);
  const [pulsingNodes, setPulsingNodes] = useState<string[]>([]);

  useEffect(() => {
    // Animate connections sequentially
    const animateFlow = () => {
      connections.forEach((_, index) => {
        setTimeout(() => {
          setActiveConnections(prev => [...prev, index]);
          setTimeout(() => {
            setActiveConnections(prev => prev.filter(i => i !== index));
          }, 1500);
        }, index * 400);
      });
    };

    // Pulse nodes
    const pulseNodes = () => {
      nodes.forEach((node, index) => {
        setTimeout(() => {
          setPulsingNodes(prev => [...prev, node.id]);
          setTimeout(() => {
            setPulsingNodes(prev => prev.filter(id => id !== node.id));
          }, 1000);
        }, index * 300);
      });
    };

    animateFlow();
    pulseNodes();

    const interval = setInterval(() => {
      animateFlow();
      pulseNodes();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getNodePosition = (id: string) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-48 md:h-64 relative mb-8">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          const isActive = activeConnections.includes(index);
          
          return (
            <g key={index}>
              {/* Base line */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="hsl(var(--border))"
                strokeWidth="0.3"
                strokeDasharray="2,2"
              />
              {/* Animated line */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#lineGradient)"
                strokeWidth={isActive ? "0.8" : "0.3"}
                filter={isActive ? "url(#glow)" : "none"}
                className="transition-all duration-500"
                style={{
                  opacity: isActive ? 1 : 0.2,
                }}
              />
              {/* Data particle */}
              {isActive && (
                <circle
                  r="1"
                  fill="hsl(var(--accent))"
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur="1s"
                    repeatCount="1"
                    path={`M${from.x},${from.y} L${to.x},${to.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            pulsingNodes.includes(node.id) ? 'scale-110' : 'scale-100'
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          {node.isCenter ? (
            // Central AI node
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg animate-pulse-slow">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping-slow" />
                <span className="text-primary-foreground font-bold text-xs md:text-sm z-10">{node.label}</span>
              </div>
              {/* Orbiting particles */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-2 left-1/2 w-2 h-2 bg-accent rounded-full" />
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-primary rounded-full" />
              </div>
            </div>
          ) : (
            // Input/Output nodes
            <div
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full border transition-all duration-300 ${
                pulsingNodes.includes(node.id)
                  ? 'bg-accent/20 border-accent shadow-glow'
                  : 'bg-card/80 border-border/50'
              }`}
            >
              <span className={`text-xs md:text-sm font-medium transition-colors ${
                pulsingNodes.includes(node.id) ? 'text-accent' : 'text-muted-foreground'
              }`}>
                {node.label}
              </span>
            </div>
          )}
        </div>
      ))}

      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};