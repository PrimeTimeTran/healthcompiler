import { useState, useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Activity,
  Phone,
  MessageSquare,
  Target,
  Users,
  Heart,
  FileText,
  RefreshCw,
  Clock,
  CheckCircle,
  Sparkles
} from 'lucide-react';

// ========== HERO SECTION WITH AI BRAIN ANIMATION ==========
const HeroSection = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [pulseIntensity, setPulseIntensity] = useState(0);
  
  const capabilities = [
    { name: 'Risk Scoring', icon: Target },
    { name: 'Call Triage', icon: Phone },
    { name: 'Care Gaps', icon: Heart },
    { name: 'Predictions', icon: TrendingUp },
    { name: 'NLP Analysis', icon: MessageSquare },
    { name: 'Automation', icon: Zap },
  ];

  useEffect(() => {
    const nodeInterval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % capabilities.length);
    }, 1500);

    const pulseInterval = setInterval(() => {
      setPulseIntensity(prev => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(nodeInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
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
              <span className="text-sm font-medium text-primary">Healthcare AI Engine</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Meet{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Infera
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              The AI engine purpose-built for healthcare—powering intelligent automation, predictive analytics, and personalized member experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/capabilities">Explore capabilities</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-primary" /> Healthcare-native
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" /> HIPAA compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" /> Real-time
              </span>
            </p>
          </div>

          {/* Right - Animation #1: AI Brain Network */}
          <div className="relative h-[450px] flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Outer glow rings */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                style={{ 
                  boxShadow: `0 0 ${30 + pulseIntensity * 0.3}px hsl(var(--primary) / 0.2)`,
                  transition: 'box-shadow 0.1s ease'
                }}
              />
              <div className="absolute inset-4 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-8 rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

              {/* Central brain core */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary shadow-2xl shadow-primary/40 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-12 h-12 text-white mx-auto mb-2" />
                  <div className="text-white font-display font-bold text-xl">Infera</div>
                  <div className="text-white/70 text-xs">AI Engine</div>
                </div>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
              </div>

              {/* Capability nodes */}
              {capabilities.map((cap, idx) => {
                const angle = (idx / capabilities.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 155;
                const x = Math.cos(angle) * radius + 160;
                const y = Math.sin(angle) * radius + 160;
                const Icon = cap.icon;
                const isActive = idx === activeNode;

                return (
                  <div
                    key={cap.name}
                    className="absolute transition-all duration-500"
                    style={{
                      left: x - 32,
                      top: y - 32,
                    }}
                  >
                    {/* Connection line */}
                    <svg className="absolute w-32 h-32" style={{ left: -32, top: -32, zIndex: -1 }}>
                      <line
                        x1="64"
                        y1="64"
                        x2={160 - (x - 32)}
                        y2={160 - (y - 32)}
                        stroke={isActive ? 'url(#activeGradient)' : '#e5e7eb'}
                        strokeWidth={isActive ? "3" : "1"}
                        className="transition-all duration-500"
                      />
                      {isActive && (
                        <circle r="5" fill="hsl(var(--primary))">
                          <animateMotion
                            dur="1s"
                            repeatCount="indefinite"
                            path={`M 64 64 L ${160 - (x - 32)} ${160 - (y - 32)}`}
                          />
                        </circle>
                      )}
                      <defs>
                        <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div 
                      className={`w-16 p-2 rounded-xl border-2 bg-white shadow-lg transition-all duration-500 ${
                        isActive ? 'scale-125 border-primary' : 'scale-100 border-border opacity-70'
                      }`}
                      style={{
                        boxShadow: isActive ? '0 0 25px hsl(var(--primary) / 0.4)' : 'none',
                      }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Icon 
                          className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                        />
                        <span className="text-[8px] font-medium text-center leading-tight text-muted-foreground">
                          {cap.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== WHY INFERA MATTERS SECTION ==========
const WhyInferaSection = () => {
  const outcomes = [
    { icon: Brain, title: 'Healthcare-Native', desc: 'Models trained on claims, clinical, and outcomes data' },
    { icon: Zap, title: 'Real-Time Intelligence', desc: 'Process and act on data as it arrives' },
    { icon: TrendingUp, title: 'Continuous Learning', desc: 'Models improve based on actual outcomes' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Why Infera
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group text-center p-8 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ========== HOW IT WORKS SECTION ==========
const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    { title: 'Ingest', desc: 'Connect EHR, claims, and operational data', icon: Activity },
    { title: 'Analyze', desc: 'Apply healthcare-native AI models', icon: Brain },
    { title: 'Predict', desc: 'Surface risks, gaps, and opportunities', icon: Target },
    { title: 'Activate', desc: 'Trigger workflows and automate actions', icon: Zap },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + 200)));
      const step = Math.min(3, Math.floor(progress * 4));
      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Data → Analysis → Prediction → Action
          </h2>
          <p className="text-muted-foreground">Intelligence that drives outcomes</p>
        </div>

        {/* Animation #2: Flow diagram */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-border/30 -translate-y-1/2 hidden md:block">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
              style={{ width: `${(activeStep + 1) * 25}%` }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className={`relative text-center transition-all duration-500 ${
                    idx <= activeStep ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                  }`}
                >
                  <div 
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      idx <= activeStep 
                        ? 'bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30' 
                        : 'bg-slate-100 border border-border'
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${idx <= activeStep ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  
                  <h3 className={`font-semibold mb-2 transition-colors ${idx <= activeStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== WHAT INFERA POWERS SECTION ==========
const WhatInferaPowersSection = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  
  const tiles = [
    { icon: Phone, title: 'AI Call Triage', detail: 'Intelligent call routing and automated receptionist for patient inquiries' },
    { icon: Target, title: 'HCC Risk Scoring', detail: 'Identify and prioritize high-risk members for intervention' },
    { icon: Heart, title: 'Care Gap Detection', detail: 'Surface quality measure gaps in real-time for proactive outreach' },
    { icon: MessageSquare, title: 'NLP Document Analysis', detail: 'Extract insights from clinical notes, charts, and unstructured data' },
    { icon: TrendingUp, title: 'Predictive Analytics', detail: 'Forecast utilization, costs, and outcomes before they happen' },
    { icon: Sparkles, title: 'Workflow Automation', detail: 'Trigger actions, alerts, and tasks based on AI-driven insights' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Infera Powers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiles.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredTile(idx)}
                onMouseLeave={() => setHoveredTile(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{tile.title}</h3>
                    <p className={`text-sm text-muted-foreground transition-all duration-300 ${
                      hoveredTile === idx ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    } overflow-hidden`}>
                      {tile.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ========== AI IN PRACTICE SECTION ==========
const AIInPracticeSection = () => {
  const results = [
    { before: 'Reactive care', after: 'Predictive intervention', icon: Target },
    { before: 'Manual analysis', after: 'AI-powered insights', icon: Brain },
    { before: 'Delayed action', after: 'Real-time automation', icon: Zap },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            AI in Practice
          </h2>
        </div>

        {/* Animation #3: Before/After flip cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {results.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group perspective-1000">
                <div className="relative h-48 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Before - Front */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="h-full p-6 rounded-2xl bg-slate-100 border border-border flex flex-col items-center justify-center text-center">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Before</div>
                      <Icon className="w-8 h-8 text-muted-foreground mb-3" />
                      <p className="text-foreground font-medium">{item.before}</p>
                    </div>
                  </div>
                  
                  {/* After - Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex flex-col items-center justify-center text-center">
                      <div className="text-xs uppercase tracking-wider text-white/70 mb-3">After</div>
                      <Icon className="w-8 h-8 text-white mb-3" />
                      <p className="text-white font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ========== BUILT FOR SECTION ==========
const BuiltForSection = () => {
  const points = [
    'Supports self-funded employers, DPC, ACOs, and health systems',
    'Integrates with any EHR, claims system, or data source',
    'HIPAA compliant with SOC 2 Type II certification',
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Built for Healthcare
          </h2>
          <div className="space-y-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 justify-center text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== FINAL CTA SECTION ==========
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Turn Healthcare Data into Intelligent Action
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          See how Infera can power your organization's AI strategy.
        </p>
        <Button size="lg" className="group" asChild>
          <Link to="/contact">
            Schedule an Infera demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

// ========== MAIN PAGE COMPONENT ==========
const Infera = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyInferaSection />
      <HowItWorksSection />
      <WhatInferaPowersSection />
      <AIInPracticeSection />
      <BuiltForSection />
      <CTASection />

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .group:hover .group-hover\\:rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </Layout>
  );
};

export default Infera;
