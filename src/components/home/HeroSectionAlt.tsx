import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

// Healthcare metric cards with mini graphs
const metricCards = [
  { 
    label: 'Cost Savings', 
    color: '#10B981',
    chartType: 'area',
    data: [60, 55, 70, 65, 85, 90],
    metric: '-18% PMPM'
  },
  { 
    label: 'Utilization', 
    color: '#06B6D4',
    chartType: 'bar',
    data: [45, 60, 50, 75, 65, 80],
    metric: '+24% efficiency'
  },
  { 
    label: 'Health Outcomes', 
    color: '#8B5CF6',
    chartType: 'line',
    data: [30, 45, 55, 60, 75, 88],
    metric: '+32% improvement'
  },
  { 
    label: 'Risk Attribution', 
    color: '#F97316',
    chartType: 'area',
    data: [40, 55, 50, 70, 80, 75],
    metric: '94% accuracy'
  },
];

// Mini 3D chart component
const MiniChart = ({ data, color, type }: { data: number[]; color: string; type: string }) => {
  const maxVal = Math.max(...data);
  const width = 80;
  const height = 40;
  const padding = 4;
  
  if (type === 'bar') {
    const barWidth = (width - padding * 2) / data.length - 2;
    return (
      <svg width={width} height={height} className="transform perspective-[100px] rotateX-[10deg]">
        <defs>
          <linearGradient id={`barGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {data.map((val, i) => {
          const barHeight = ((val / maxVal) * (height - padding * 2));
          const x = padding + i * (barWidth + 2);
          const y = height - padding - barHeight;
          return (
            <g key={i}>
              {/* 3D side effect */}
              <rect
                x={x + 2}
                y={y + 2}
                width={barWidth}
                height={barHeight}
                fill={color}
                opacity="0.2"
                rx="1"
              />
              {/* Main bar */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={`url(#barGrad-${color})`}
                rx="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s`, animationDuration: '2s' }}
              />
            </g>
          );
        })}
      </svg>
    );
  }
  
  if (type === 'line' || type === 'area') {
    const points = data.map((val, i) => {
      const x = padding + (i / (data.length - 1)) * (width - padding * 2);
      const y = height - padding - ((val / maxVal) * (height - padding * 2));
      return `${x},${y}`;
    }).join(' ');
    
    const areaPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;
    
    return (
      <svg width={width} height={height} className="transform perspective-[100px] rotateX-[10deg]">
        <defs>
          <linearGradient id={`areaGrad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {type === 'area' && (
          <polygon
            points={areaPoints}
            fill={`url(#areaGrad-${color})`}
          />
        )}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[dash_3s_ease-in-out_infinite]"
          style={{ 
            strokeDasharray: '200',
            strokeDashoffset: '200',
            animation: 'dash 3s ease-in-out forwards'
          }}
        />
        {data.map((val, i) => {
          const x = padding + (i / (data.length - 1)) * (width - padding * 2);
          const y = height - padding - ((val / maxVal) * (height - padding * 2));
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2"
              fill={color}
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          );
        })}
      </svg>
    );
  }
  
  return null;
};

// Floating data particles
const FloatingParticle = ({ index, total }: { index: number; total: number }) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 220 + Math.random() * 80;
  const duration = 25 + Math.random() * 15;
  const delay = index * 0.5;
  const size = 3 + Math.random() * 3;

  return (
    <div
      className="absolute rounded-full bg-gradient-to-r from-accent to-primary opacity-30"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `-${delay}s`,
        transformOrigin: '0 0',
        '--orbit-radius': `${radius}px`,
        '--start-angle': `${angle}rad`,
      } as React.CSSProperties}
    />
  );
};

export const HeroSectionAlt = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeWord, setActiveWord] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const words = ['Activate', 'Unify', 'Transform'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / 50,
        y: (e.clientY - rect.top - rect.height / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-80"
          style={{
            transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        {/* Radial glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(233,78,135,0.08) 0%, rgba(249,115,22,0.05) 40%, transparent 70%)',
            transform: `translate(${mousePos.x * -3}px, ${mousePos.y * -3}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                           linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* CSS for animations */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(var(--start-angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--start-angle)));
          }
          to {
            transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--start-angle) - 360deg));
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes glow-light {
          0%, 100% { box-shadow: 0 0 30px rgba(233,78,135,0.2), 0 0 60px rgba(249,115,22,0.1); }
          50% { box-shadow: 0 0 50px rgba(233,78,135,0.3), 0 0 80px rgba(249,115,22,0.2); }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .metric-card {
          animation: card-float 4s ease-in-out infinite;
        }
        
        .metric-card:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-20">
          {/* Left - Content */}
          <div className="space-y-8">

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.05]">
                <span className="block opacity-90">
                  {words.map((word, idx) => (
                    <span
                      key={word}
                      className={`inline-block transition-all duration-700 ${
                        idx === activeWord
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent scale-105'
                          : 'text-muted-foreground/20 scale-100 hidden'
                      }`}
                    >
                      {idx === activeWord && word}
                    </span>
                  ))}
                </span>
                <span className="block mt-2">Healthcare Data.</span>
                <span className="block text-muted-foreground mt-1">Drive Outcomes.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Unifying healthcare data and AI-driven workflows to lower costs and improve care across 
              <span className="text-foreground font-medium"> self-funded</span>,
              <span className="text-foreground font-medium"> direct care</span>, and
              <span className="text-foreground font-medium"> value-based</span> organizations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-6 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted px-8 py-6 text-base group"
                asChild
              >
                <Link to="/capabilities">
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10M+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Lives Managed</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">$2B+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Claims Processed</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right - Visualization */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            {/* Floating particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <FloatingParticle key={i} index={i} total={15} />
            ))}

            {/* Main orb - centered */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(-50% + ${mousePos.x * -3}px), calc(-50% + ${mousePos.y * -3}px))`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Outer glow rings */}
              <div className="absolute -inset-12">
                <div 
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  style={{ animation: 'pulse-ring 3s ease-out infinite' }}
                />
                <div 
                  className="absolute inset-0 rounded-full border-2 border-accent/20"
                  style={{ animation: 'pulse-ring 3s ease-out infinite 1s' }}
                />
                <div 
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  style={{ animation: 'pulse-ring 3s ease-out infinite 2s' }}
                />
              </div>

              {/* Central orb */}
              <div 
                className="relative w-40 h-40 rounded-full"
                style={{ animation: 'glow-light 4s ease-in-out infinite' }}
              >
                {/* Glass sphere effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-white to-accent/20 border border-primary/20" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white via-white to-white/80" />
                <div className="absolute inset-3 rounded-full bg-white border border-border shadow-inner flex items-center justify-center overflow-hidden">
                  {/* Inner content */}
                  <div className="text-center">
                    <div className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1">Powered by</div>
                    <div className="text-lg font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      Infera AI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric cards - positioned independently around the center */}
            {metricCards.map((card, idx) => {
              // Position cards at corners and edges
              const positions = [
                { x: -180, y: -140 }, // Top left
                { x: 180, y: -140 },  // Top right
                { x: -200, y: 120 },  // Bottom left
                { x: 200, y: 120 },   // Bottom right
              ];
              const pos = positions[idx];

              return (
                <div
                  key={card.label}
                  className="metric-card absolute left-1/2 top-1/2 cursor-pointer"
                  style={{
                    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                    animationDelay: `${idx * 1}s`,
                    zIndex: hoveredCard === idx ? 50 : 10,
                  }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className="relative px-4 py-3 rounded-xl bg-white border-2 transition-all duration-300 shadow-lg"
                    style={{
                      borderColor: hoveredCard === idx ? card.color : `${card.color}40`,
                      boxShadow: hoveredCard === idx 
                        ? `0 8px 30px ${card.color}30, 0 4px 15px rgba(0,0,0,0.1)` 
                        : `0 4px 20px ${card.color}15, 0 2px 10px rgba(0,0,0,0.05)`,
                      transform: hoveredCard === idx ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    {/* Card content */}
                    <div className="relative z-10">
                      <div 
                        className="text-[12px] font-bold tracking-wide mb-2 whitespace-nowrap"
                        style={{ color: card.color }}
                      >
                        {card.label}
                      </div>
                      
                      {/* Mini 3D Chart */}
                      <div className="transform perspective-[200px]">
                        <MiniChart 
                          data={card.data} 
                          color={card.color} 
                          type={card.chartType} 
                        />
                      </div>
                      
                      {/* Metric indicator */}
                      <div className="flex items-center gap-1.5 mt-2">
                        <div 
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: card.color }}
                        />
                        <span className="text-[10px] font-semibold text-slate-600">
                          {card.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Animated connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                {metricCards.map((card, idx) => (
                  <linearGradient key={`grad-${idx}`} id={`flowGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={card.color} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={card.color} stopOpacity="0.1" />
                  </linearGradient>
                ))}
              </defs>
              
              {/* Animated flowing lines from cards to center */}
              {[
                { x1: '28%', y1: '28%', x2: '50%', y2: '50%', color: metricCards[0].color },
                { x1: '72%', y1: '28%', x2: '50%', y2: '50%', color: metricCards[1].color },
                { x1: '25%', y1: '70%', x2: '50%', y2: '50%', color: metricCards[2].color },
                { x1: '75%', y1: '70%', x2: '50%', y2: '50%', color: metricCards[3].color },
              ].map((line, idx) => (
                <g key={idx}>
                  {/* Base line */}
                  <line
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke={line.color}
                    strokeWidth="2"
                    strokeOpacity="0.15"
                    strokeDasharray="8 6"
                  />
                  {/* Animated flowing line overlay */}
                  <line
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke={line.color}
                    strokeWidth="2"
                    strokeDasharray="12 20"
                    strokeLinecap="round"
                    style={{
                      animation: `flowLine 2s linear infinite`,
                      animationDelay: `${idx * 0.5}s`,
                    }}
                  />
                  {/* Flowing particle */}
                  <circle r="4" fill={line.color} opacity="0.8">
                    <animate
                      attributeName="opacity"
                      values="0.8;1;0.8"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animateMotion
                      dur={`${2 + idx * 0.3}s`}
                      repeatCount="indefinite"
                      path={`M ${parseFloat(line.x1) * 6} ${parseFloat(line.y1) * 6} L ${parseFloat(line.x2) * 6} ${parseFloat(line.y2) * 6}`}
                    />
                  </circle>
                  {/* Second particle with offset */}
                  <circle r="3" fill={line.color} opacity="0.5">
                    <animateMotion
                      dur={`${2.5 + idx * 0.2}s`}
                      repeatCount="indefinite"
                      begin={`${1 + idx * 0.2}s`}
                      path={`M ${parseFloat(line.x1) * 6} ${parseFloat(line.y1) * 6} L ${parseFloat(line.x2) * 6} ${parseFloat(line.y2) * 6}`}
                    />
                  </circle>
                </g>
              ))}
            </svg>
            
            <style>{`
              @keyframes flowLine {
                0% { stroke-dashoffset: 32; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>
  );
};
