import { useState, useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Plug,
  Zap,
  Shield,
  RefreshCw,
  Database,
  Activity,
  FileText,
  Heart,
  DollarSign,
  Users,
  Laptop,
  Check,
  Clock,
  LineChart
} from 'lucide-react';

// ========== HERO SECTION WITH DATA FLOW ANIMATION ==========
const HeroSection = () => {
  const [connectedCount, setConnectedCount] = useState(0);
  const [activeSource, setActiveSource] = useState(0);
  
  const dataSources = [
    { name: 'EHR Systems', icon: FileText, connected: true },
    { name: 'Claims Data', icon: DollarSign, connected: true },
    { name: 'Lab Results', icon: Activity, connected: true },
    { name: 'Wearables', icon: Heart, connected: false },
    { name: 'Billing', icon: Database, connected: false },
    { name: 'HR Systems', icon: Users, connected: false },
  ];

  useEffect(() => {
    const countInterval = setInterval(() => {
      setConnectedCount(prev => {
        if (prev >= 50) return 50;
        return prev + 1;
      });
    }, 60);

    const sourceInterval = setInterval(() => {
      setActiveSource(prev => (prev + 1) % dataSources.length);
    }, 1500);

    return () => {
      clearInterval(countInterval);
      clearInterval(sourceInterval);
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
              <span className="text-sm font-medium text-primary">Healthcare Integration Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Connect Everything,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Instantly
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Seamlessly integrate with 50+ healthcare and business applications—EHRs, claims systems, wearables, and more—without months of custom development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Explore Integrations
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request custom integration</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" /> Pre-built connectors
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" /> HIPAA compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" /> Days, not months
              </span>
            </p>
          </div>

          {/* Right - Animation #1: Data Flow Hub */}
          <div className="relative h-[450px] flex items-center justify-center">
            {/* Central hub */}
            <div className="relative w-80 h-80">
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-4 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '2.5s' }} />
              
              {/* Main hub circle */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30 flex flex-col items-center justify-center">
                <div className="text-5xl font-display font-bold text-white">{connectedCount}+</div>
                <div className="text-white/80 text-sm font-medium">Integrations</div>
              </div>

              {/* Orbiting data sources */}
              {dataSources.map((source, idx) => {
                const angle = (idx / dataSources.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 160;
                const x = Math.cos(angle) * radius + 160;
                const y = Math.sin(angle) * radius + 160;
                const Icon = source.icon;
                const isActive = idx === activeSource;

                return (
                  <div
                    key={source.name}
                    className="absolute transition-all duration-500"
                    style={{
                      left: x - 36,
                      top: y - 36,
                    }}
                  >
                    {/* Connection line */}
                    <svg className="absolute w-40 h-40" style={{ left: -20, top: -20 }}>
                      <line
                        x1="56"
                        y1="56"
                        x2={160 - (x - 36)}
                        y2={160 - (y - 36)}
                        stroke={isActive ? 'hsl(var(--primary))' : '#e5e7eb'}
                        strokeWidth="2"
                        strokeDasharray={isActive ? "none" : "4 4"}
                        className="transition-all duration-500"
                      />
                      {isActive && (
                        <circle r="4" fill="hsl(var(--primary))">
                          <animateMotion
                            dur="1s"
                            repeatCount="indefinite"
                            path={`M 56 56 L ${160 - (x - 36)} ${160 - (y - 36)}`}
                          />
                        </circle>
                      )}
                    </svg>

                    <div 
                      className={`w-[72px] p-3 rounded-xl border-2 bg-white shadow-lg transition-all duration-500 ${
                        isActive ? 'scale-110 border-primary' : 'scale-100 border-border opacity-70'
                      }`}
                      style={{
                        boxShadow: isActive ? '0 0 20px hsl(var(--primary) / 0.3)' : 'none',
                      }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Icon 
                          className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                        />
                        <span className="text-[9px] font-medium text-center leading-tight text-muted-foreground">
                          {source.name}
                        </span>
                        {source.connected && (
                          <Check className="w-3 h-3 text-green-500" />
                        )}
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

// ========== WHY IT MATTERS SECTION ==========
const WhyItMattersSection = () => {
  const outcomes = [
    { icon: Clock, title: 'Deploy in Days', desc: 'Pre-built connectors, not months of custom work' },
    { icon: Database, title: 'Unified Data Layer', desc: 'All your data in one normalized format' },
    { icon: Shield, title: 'Enterprise Security', desc: 'HIPAA compliant, SOC 2 certified' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Why Integration Matters
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
    { title: 'Connect', desc: 'Select from 50+ pre-built connectors', icon: Plug },
    { title: 'Map', desc: 'Auto-map fields to our unified schema', icon: RefreshCw },
    { title: 'Transform', desc: 'Normalize and validate incoming data', icon: Database },
    { title: 'Activate', desc: 'Power workflows with clean, unified data', icon: Zap },
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
            From Connection to Activation
          </h2>
          <p className="text-muted-foreground">Seamless data flow in four simple steps</p>
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

// ========== WHAT CONNECTS SECTION ==========
const WhatConnectsSection = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  
  const tiles = [
    { icon: FileText, title: 'Electronic Health Records', detail: 'Epic, Cerner, Elation, Athena, DrChrono, and 20+ more EHR systems' },
    { icon: DollarSign, title: 'Claims & Billing', detail: 'Clearinghouses, payers, and practice management systems' },
    { icon: Activity, title: 'Wearables & Devices', detail: 'Fitbit, Garmin, Apple Health, Oura, Dexcom CGM data' },
    { icon: Database, title: 'Lab Systems', detail: 'Quest, LabCorp, and regional lab networks' },
    { icon: Users, title: 'HR & Payroll', detail: 'Workday, ADP, TriNet for employee health programs' },
    { icon: Laptop, title: 'Business Tools', detail: 'Stripe, QuickBooks, Google Analytics for operations' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Connects
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

// ========== INTEGRATION IN PRACTICE SECTION ==========
const IntegrationInPracticeSection = () => {
  const results = [
    { before: 'Manual data entry', after: 'Automatic data sync', icon: RefreshCw },
    { before: 'Fragmented systems', after: 'Unified data platform', icon: Database },
    { before: 'Months of development', after: 'Live in days', icon: Zap },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Integration in Practice
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
    'Supports EHRs, claims systems, wearables, and business tools',
    'HIPAA compliant with end-to-end encryption',
    'Scales from startups to enterprise organizations',
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
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
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
          Turn Data Silos into Unified Intelligence
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Connect faster. Integrate smarter. Activate everything.
        </p>
        <Button size="lg" className="group" asChild>
          <Link to="/contact">
            Book an integration walkthrough
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

// ========== MAIN PAGE COMPONENT ==========
const Integration = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyItMattersSection />
      <HowItWorksSection />
      <WhatConnectsSection />
      <IntegrationInPracticeSection />
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

export default Integration;
