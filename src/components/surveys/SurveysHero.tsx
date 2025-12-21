import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  Mail,
  Smartphone,
  Zap,
  Share2
} from 'lucide-react';

const orbitData = [
  { label: 'NPS Surveys', icon: Star, color: '#f97316' },
  { label: 'CSAT Surveys', icon: ThumbsUp, color: '#06b6d4' },
  { label: 'Google Reviews', icon: MessageSquare, color: '#8b5cf6' },
  { label: 'Email Delivery', icon: Mail, color: '#22c55e' },
  { label: 'SMS Delivery', icon: Smartphone, color: '#ec4899' },
];

export function SurveysHero() {
  const [activeOrbit, setActiveOrbit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbit((prev) => (prev + 1) % orbitData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                         linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Automated Surveys Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Surveys That Turn Feedback Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Action
              </span>
            </h1>

            <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Automatically collect NPS, CSAT, and Google reviews—integrated into your workflows and the tools you already use.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" /> Automated triggers
              </span>
              <span className="flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-primary" /> Multi-channel
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-primary" /> Real-time feedback
              </span>
            </p>
          </div>

          {/* Right - Orbiting Visualization */}
          <div className="relative h-[450px] flex items-center justify-center">
            {/* Central Core */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-pulse" />
              
              {/* Core card */}
              <div className="relative bg-white rounded-2xl border-2 border-primary/20 shadow-2xl p-6 w-[180px] z-10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Health Compiler</div>
                    <div className="text-sm font-semibold text-foreground">Surveys</div>
                    <div className="text-[10px] text-muted-foreground mt-1">Platform</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting items */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                {orbitData.map((orbit, idx) => (
                  <linearGradient key={`grad-${idx}`} id={`surveyOrbitGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={orbit.color} stopOpacity="0.1" />
                    <stop offset="50%" stopColor={orbit.color} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={orbit.color} stopOpacity="0.1" />
                  </linearGradient>
                ))}
              </defs>
              
              {/* Orbit rings */}
              {[140, 170, 200].map((r, i) => (
                <circle
                  key={r}
                  cx="50%"
                  cy="50%"
                  r={r}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity={0.5}
                />
              ))}
              
              {/* Flow lines from orbiting items to center */}
              {orbitData.map((orbit, idx) => {
                const angle = (idx / orbitData.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 180;
                const cx = 225;
                const cy = 225;
                const x = Math.cos(angle) * radius + cx;
                const y = Math.sin(angle) * radius + cy;
                const isActive = idx === activeOrbit;
                
                return (
                  <g key={idx}>
                    <path
                      d={`M ${x} ${y} Q ${(x + cx) / 2} ${(y + cy) / 2 - 20} ${cx} ${cy}`}
                      fill="none"
                      stroke={`url(#surveyOrbitGrad${idx})`}
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}
                    />
                    {isActive && (
                      <circle r="4" fill={orbit.color}>
                        <animateMotion
                          dur="1.5s"
                          repeatCount="indefinite"
                          path={`M ${x} ${y} Q ${(x + cx) / 2} ${(y + cy) / 2 - 20} ${cx} ${cy}`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Orbiting cards */}
            {orbitData.map((orbit, idx) => {
              const angle = (idx / orbitData.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const Icon = orbit.icon;
              const isActive = idx === activeOrbit;
              
              return (
                <div
                  key={orbit.label}
                  className="absolute transition-all duration-500"
                  style={{
                    left: `calc(50% + ${x}px - 50px)`,
                    top: `calc(50% + ${y}px - 30px)`,
                  }}
                >
                  <div 
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border bg-white shadow-lg transition-all duration-500 ${
                      isActive ? 'scale-110 border-2' : 'scale-100 opacity-70'
                    }`}
                    style={{
                      borderColor: isActive ? orbit.color : '#e5e7eb',
                      boxShadow: isActive ? `0 0 25px ${orbit.color}30` : 'none',
                    }}
                  >
                    <div 
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500`}
                      style={{ backgroundColor: `${orbit.color}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: orbit.color }} />
                    </div>
                    <span className={`text-xs font-medium whitespace-nowrap transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {orbit.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Animated pulse rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-40 h-40 rounded-full border border-primary/20 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-accent/10 animate-ping opacity-20" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
