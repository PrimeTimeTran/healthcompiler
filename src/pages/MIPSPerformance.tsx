import { useState, useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target,
  TrendingUp,
  Heart,
  DollarSign,
  Activity,
  CheckCircle,
  FileText,
  Users,
  BarChart3,
  Zap,
  RefreshCw,
  Eye,
  ClipboardCheck,
  LineChart,
  Shield
} from 'lucide-react';

// ========== HERO SECTION WITH MIPS DIAL ==========
const HeroSection = () => {
  const [score, setScore] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    { name: 'Quality', icon: Heart, color: '#10B981', weight: 30 },
    { name: 'Cost', icon: DollarSign, color: '#06B6D4', weight: 30 },
    { name: 'Promoting Interoperability', icon: Activity, color: '#8B5CF6', weight: 25 },
    { name: 'Improvement Activities', icon: TrendingUp, color: '#F97316', weight: 15 },
  ];

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      setScore(prev => {
        if (prev >= 92) return 92;
        return prev + 1;
      });
    }, 50);

    const categoryInterval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % categories.length);
    }, 2000);

    return () => {
      clearInterval(scoreInterval);
      clearInterval(categoryInterval);
    };
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
              <span className="text-sm font-medium text-primary">MIPS Performance Management</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              MIPS Performance,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Activated
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Track, manage, and improve MIPS performance with real-time insights and automated workflows—without manual reporting chaos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Explore MIPS Performance
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">See a live demo</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" /> Real-time
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-primary" /> Measure-Act-Improve
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" /> Audit-ready
              </span>
            </p>
          </div>

          {/* Right - Animation #1: MIPS Score Dial */}
          <div className="relative h-[450px] flex items-center justify-center">
            {/* Main dial container */}
            <div className="relative w-80 h-80">
              {/* Outer ring progress */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${(score / 100) * 879} 879`}
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E94E87" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner content */}
              <div className="absolute inset-8 rounded-full bg-white border border-border shadow-xl flex flex-col items-center justify-center">
                <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">MIPS Score</div>
                <div className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {score}
                </div>
                <div className="text-sm text-muted-foreground mt-1">/ 100 points</div>
                
                {/* Performance indicator */}
                <div className={`mt-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  score >= 75 ? 'bg-green-100 text-green-700' : 
                  score >= 50 ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-red-100 text-red-700'
                }`}>
                  {score >= 75 ? 'Exceptional' : score >= 50 ? 'On Track' : 'Needs Attention'}
                </div>
              </div>

              {/* Category indicators around the dial */}
              {categories.map((cat, idx) => {
                const angle = (idx / categories.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 180;
                const x = Math.cos(angle) * radius + 160;
                const y = Math.sin(angle) * radius + 160;
                const Icon = cat.icon;
                const isActive = idx === activeCategory;

                return (
                  <div
                    key={cat.name}
                    className="absolute transition-all duration-500"
                    style={{
                      left: x - 40,
                      top: y - 40,
                    }}
                  >
                    <div 
                      className={`w-20 px-2 py-2 rounded-xl border-2 bg-white shadow-lg transition-all duration-500 ${
                        isActive ? 'scale-110' : 'scale-100 opacity-70'
                      }`}
                      style={{
                        borderColor: isActive ? cat.color : '#e5e7eb',
                        boxShadow: isActive ? `0 0 20px ${cat.color}30` : 'none',
                      }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Icon 
                          className="w-5 h-5 transition-colors" 
                          style={{ color: isActive ? cat.color : '#9ca3af' }} 
                        />
                        <span className="text-[9px] font-medium text-center leading-tight text-muted-foreground">
                          {cat.name}
                        </span>
                        <span 
                          className="text-[10px] font-bold"
                          style={{ color: cat.color }}
                        >
                          {cat.weight}%
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

// ========== WHY IT MATTERS SECTION ==========
const WhyItMattersSection = () => {
  const outcomes = [
    { icon: DollarSign, title: 'Maximize Reimbursement', desc: 'Avoid penalties, earn incentives' },
    { icon: FileText, title: 'Reduce Admin Burden', desc: 'Fewer spreadsheets, less chasing' },
    { icon: Heart, title: 'Improve Care Quality', desc: 'Performance tied to real workflows' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Why MIPS Performance Matters
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
    { title: 'Measure', desc: 'Ingest EHR, claims, quality, and operational data', icon: BarChart3 },
    { title: 'Identify', desc: 'Surface gaps and low-scoring measures', icon: Eye },
    { title: 'Activate', desc: 'Trigger workflows, alerts, and task routing', icon: Zap },
    { title: 'Improve', desc: 'Track score impact in real time', icon: TrendingUp },
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
            From Measurement to Performance
          </h2>
          <p className="text-muted-foreground">Continuous improvement, not year-end scrambles</p>
        </div>

        {/* Animation #2: Flow diagram with scroll-triggered highlights */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-border/30 -translate-y-1/2 hidden md:block">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
              style={{ width: `${(activeStep + 1) * 25}%` }}
            />
          </div>

          {/* Loop indicator */}
          <svg className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-16 hidden lg:block opacity-30">
            <path
              d="M 40 8 A 32 32 0 1 1 8 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="text-primary"
            />
            <polygon points="8,36 8,44 16,40" fill="currentColor" className="text-primary" />
          </svg>

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
                    style={{
                      animation: idx === activeStep ? 'pulse 2s ease-in-out infinite' : 'none',
                    }}
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

// ========== WHAT IMPROVES SECTION ==========
const WhatImprovesSection = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  
  const tiles = [
    { icon: Target, title: 'Quality Measure Gaps', detail: 'Automatically detect missing documentation and care gaps across all quality measures' },
    { icon: Activity, title: 'PI Measure Tracking', detail: 'Monitor data completeness and interoperability requirements in real-time' },
    { icon: ClipboardCheck, title: 'Improvement Activities', detail: 'Track attestation evidence and activity completion automatically' },
    { icon: DollarSign, title: 'Cost Measure Visibility', detail: 'Surface cost benchmarks and spending patterns versus peers' },
    { icon: Users, title: 'Clinician Performance', detail: 'Individual provider views showing contribution to overall score' },
    { icon: LineChart, title: 'Executive Scorecards', detail: 'Audit-ready dashboards for leadership and compliance review' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Improves Automatically
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

// ========== PERFORMANCE IN PRACTICE SECTION ==========
const PerformanceSection = () => {
  const results = [
    { before: 'Year-end scramble', after: 'Always-on MIPS readiness', icon: RefreshCw },
    { before: 'Static reports', after: 'Live performance tracking', icon: LineChart },
    { before: 'Manual outreach', after: 'Automated measure-driven workflows', icon: Zap },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Performance in Practice
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
                  <div className="absolute inset-0 backface-hidden rounded-2xl border border-border bg-slate-50 p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Before</div>
                    <p className="text-sm text-muted-foreground">{item.before}</p>
                  </div>
                  
                  {/* After - Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-primary mb-2">After</div>
                    <p className="text-sm font-medium text-foreground">{item.after}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">Hover to see the transformation</p>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .group-hover\\:rotate-y-180:hover { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

// ========== BUILT FOR VALUE-BASED CARE SECTION ==========
const BuiltForSection = () => {
  const features = [
    { icon: Users, text: 'Supports ACOs, independent practices, and value-based networks' },
    { icon: Activity, text: 'Integrates with EHR, claims, quality, and workflow systems' },
    { icon: RefreshCw, text: 'Designed to evolve as MIPS rules change' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Built for Value-Based Care
          </h2>

          <div className="space-y-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== FINAL CTA SECTION ==========
const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Turn MIPS from a Reporting Burden into a Performance Advantage
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Measure less. Improve more. Stay ahead—automatically.
          </p>
          <Button size="lg" className="group bg-white text-slate-900 hover:bg-white/90" asChild>
            <Link to="/contact">
              Book a MIPS performance walkthrough
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

// ========== MAIN PAGE ==========
const MIPSPerformance = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyItMattersSection />
      <HowItWorksSection />
      <WhatImprovesSection />
      <PerformanceSection />
      <BuiltForSection />
      <FinalCTASection />
    </Layout>
  );
};

export default MIPSPerformance;
