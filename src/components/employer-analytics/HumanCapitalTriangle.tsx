import { useState } from 'react';
import { Heart, TrendingUp, Users, Clock, Brain, AlertCircle, Zap, BarChart3 } from 'lucide-react';

const trianglePoints = [
  { id: 'health', label: 'Health', icon: Heart, position: 'top', color: '#ef4444' },
  { id: 'productivity', label: 'Productivity', icon: TrendingUp, position: 'bottom-left', color: '#22c55e' },
  { id: 'retention', label: 'Retention', icon: Users, position: 'bottom-right', color: '#3b82f6' },
];

const signals = [
  { icon: Clock, label: 'Absenteeism', description: 'Track unplanned absences and their root causes' },
  { icon: Brain, label: 'Presenteeism', description: 'Measure productivity loss from working while unwell' },
  { icon: AlertCircle, label: 'Attrition risk', description: 'Identify employees at risk of leaving' },
  { icon: Zap, label: 'Burnout indicators', description: 'Monitor stress and burnout signals early' },
  { icon: BarChart3, label: 'Engagement trends', description: 'Track engagement over time' },
];

export function HumanCapitalTriangle() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Human Capital Intelligence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Health, productivity, and retention — connected.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Triangle Visualization */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* SVG Triangle Framework */}
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Main triangle */}
              <polygon 
                points="200,50 50,350 350,350" 
                fill="url(#triangleGradient)" 
                stroke="hsl(var(--border))"
                strokeWidth="2"
                className="transition-all duration-500"
              />
              
              {/* Connection lines to center */}
              <line x1="200" y1="50" x2="200" y2="200" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4" />
              <line x1="50" y1="350" x2="200" y2="200" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4" />
              <line x1="350" y1="350" x2="200" y2="200" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4" />
              
              {/* Center hub */}
              <circle cx="200" cy="200" r="30" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" filter="url(#glow)" />
              <text x="200" y="205" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="600">HCI</text>
              
              {/* Animated data flow lines */}
              {[0, 1, 2].map((i) => (
                <circle key={i} r="4" fill="hsl(var(--primary))" opacity="0.6">
                  <animateMotion
                    dur={`${3 + i}s`}
                    repeatCount="indefinite"
                    path={i === 0 ? "M200,50 L200,200" : i === 1 ? "M50,350 L200,200" : "M350,350 L200,200"}
                  />
                </circle>
              ))}
            </svg>
            
            {/* Triangle point labels */}
            {trianglePoints.map((point) => {
              const positions = {
                'top': 'top-4 left-1/2 -translate-x-1/2',
                'bottom-left': 'bottom-4 left-4',
                'bottom-right': 'bottom-4 right-4',
              };
              
              return (
                <div
                  key={point.id}
                  className={`absolute ${positions[point.position as keyof typeof positions]} cursor-pointer group`}
                  onMouseEnter={() => setActivePoint(point.id)}
                  onMouseLeave={() => setActivePoint(null)}
                >
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all ${
                    activePoint === point.id ? 'scale-110 shadow-lg' : ''
                  }`}
                    style={{ 
                      backgroundColor: `${point.color}15`,
                      borderColor: `${point.color}40`,
                    }}
                  >
                    <point.icon className="w-5 h-5" style={{ color: point.color }} />
                    <span className="font-semibold text-sm">{point.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Signals */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Signals Visualized</h3>
            <p className="text-muted-foreground mb-6">
              HR data elevated to board-level intelligence.
            </p>
            <div className="space-y-3">
              {signals.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <signal.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium">{signal.label}</span>
                    <p className="text-xs text-muted-foreground">{signal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}