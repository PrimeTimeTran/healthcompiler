import { useState, useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2,
  Clock,
  Activity,
  BarChart3,
  DollarSign,
  Users,
  Zap,
  Shield,
  AlertTriangle,
  TrendingUp,
  Layers,
  Network,
  Brain,
  Bell,
  FileText,
  Stethoscope,
  Briefcase
} from 'lucide-react';

// ========== HERO SECTION ==========
const HeroSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const locations = [
    { x: 80, y: 120 },
    { x: 200, y: 80 },
    { x: 320, y: 140 },
    { x: 160, y: 200 },
    { x: 280, y: 220 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 1200);
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
              <span className="text-sm font-medium text-primary">Urgent Care Intelligence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Turn Urgent Care Data Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Real-Time Decisions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              A unified data and AI activation layer that gives urgent care organizations visibility across operations, utilization, and financial performance — without replacing existing systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Explore the Platform
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" /> HIPAA-aligned
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" /> Secure by design
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-primary" /> Built for scale
              </span>
            </p>
          </div>

          {/* Right - Animation: Multi-location data flow */}
          <div className="relative h-[450px] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <defs>
                <linearGradient id="dataFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E94E87" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#E94E87" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Flow lines from locations to center */}
              {locations.map((loc, idx) => (
                <g key={idx}>
                  <path
                    d={`M ${loc.x} ${loc.y} Q ${200} ${150} ${200} ${150}`}
                    fill="none"
                    stroke="url(#dataFlowGrad)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    className={`transition-opacity duration-500 ${idx === activeLocation ? 'opacity-100' : 'opacity-20'}`}
                  />
                  {idx === activeLocation && (
                    <circle r="4" fill="#E94E87" filter="url(#glow)">
                      <animateMotion
                        dur="1s"
                        repeatCount="indefinite"
                        path={`M ${loc.x} ${loc.y} Q ${200} ${150} ${200} ${150}`}
                      />
                    </circle>
                  )}
                </g>
              ))}

              {/* Location nodes */}
              {locations.map((loc, idx) => (
                <g key={`loc-${idx}`}>
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r="24"
                    fill="white"
                    stroke={idx === activeLocation ? '#E94E87' : '#e5e7eb'}
                    strokeWidth="2"
                    className="transition-all duration-500"
                    style={{
                      filter: idx === activeLocation ? 'drop-shadow(0 0 10px rgba(233, 78, 135, 0.3))' : 'none'
                    }}
                  />
                  <text
                    x={loc.x}
                    y={loc.y + 5}
                    textAnchor="middle"
                    className="text-xs font-medium fill-muted-foreground"
                  >
                    UC{idx + 1}
                  </text>
                </g>
              ))}

              {/* Central intelligence hub */}
              <g transform="translate(200, 150)">
                <circle r="50" fill="white" stroke="#E94E87" strokeWidth="3" filter="url(#glow)" />
                <circle r="40" fill="url(#hubGradient)" />
                <defs>
                  <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fce4ec" />
                    <stop offset="100%" stopColor="#f8bbd9" />
                  </radialGradient>
                </defs>
              </g>
            </svg>

            {/* Central label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <Layers className="w-8 h-8 mx-auto text-primary mb-1" />
              <span className="text-xs font-semibold text-foreground">Intelligence<br/>Layer</span>
            </div>

            {/* Floating labels */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 rounded-lg border border-border/50 shadow-sm text-xs font-medium text-muted-foreground">
              Multi-site Data
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 rounded-lg border border-border/50 shadow-sm text-xs font-medium text-muted-foreground">
              Unified Insights
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== THE PROBLEM SECTION ==========
const ProblemSection = () => {
  const problems = [
    { icon: DollarSign, text: 'High visit volumes with thin margins' },
    { icon: AlertTriangle, text: 'Fragmented EHR, billing, and reporting systems' },
    { icon: BarChart3, text: 'Limited insight into site-level performance and downstream outcomes' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Urgent Care Moves Fast. Data Does Not.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group text-center p-8 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* Visual: Fragmented data blocks */}
        <div className="mt-16 flex justify-center gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-lg bg-slate-100 border border-slate-200"
              style={{
                transform: `rotate(${(i - 1.5) * 3}deg) translateY(${Math.abs(i - 1.5) * 4}px)`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ========== THE PLATFORM SECTION ==========
const PlatformSection = () => {
  const capabilities = [
    { icon: Activity, label: 'Visit & throughput analytics' },
    { icon: BarChart3, label: 'Site-level benchmarking' },
    { icon: DollarSign, label: 'Payer mix & reimbursement visibility' },
    { icon: TrendingUp, label: 'Referral leakage tracking' },
    { icon: Users, label: 'Employer & network reporting' },
    { icon: Brain, label: 'AI-generated insights & alerts' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            One Intelligence Layer. All Your Urgent Care Data.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Health Compiler sits above your existing stack to unify clinical, operational, and financial data into a single source of truth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{cap.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ========== WHAT YOU SEE SECTION ==========
const MetricsSection = () => {
  const metrics = [
    'Average visit cycle time',
    'Visits per provider per shift',
    'Revenue per visit by site',
    'Repeat utilization patterns',
    'High-value referral capture',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Operational Clarity at Every Level
          </h2>
        </div>

        {/* Glassmorphism cards over data grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                             linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />

          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl backdrop-blur-md bg-white/70 border border-white/50 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-300"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-medium text-foreground">{metric}</span>
                </div>
                <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${60 + idx * 8}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== AI ACTIVATION SECTION ==========
const AISection = () => {
  const [pulsingNode, setPulsingNode] = useState(0);
  const examples = [
    'Volume and demand forecasting',
    'Anomaly detection across sites',
    'Automated performance summaries',
    'Operational alerts for leadership',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsingNode((prev) => (prev + 1) % examples.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              AI That Supports Operations — Not Noise
            </h2>
            <p className="text-muted-foreground">
              Health Compiler applies AI to surface signals and automate insight generation without disrupting frontline workflows.
            </p>

            <div className="space-y-4">
              {examples.map((example, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-500 ${
                    idx === pulsingNode 
                      ? 'border-primary/30 bg-primary/5 shadow-lg' 
                      : 'border-border/50 bg-white'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    idx === pulsingNode ? 'bg-primary animate-pulse scale-125' : 'bg-slate-300'
                  }`} />
                  <span className={`transition-colors ${idx === pulsingNode ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    {example}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pulsing insight nodes animation */}
          <div className="relative h-80 flex items-center justify-center">
            <div className="relative w-64 h-64">
              {[0, 1, 2, 3].map((i) => {
                const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
                const radius = 100;
                const x = Math.cos(angle) * radius + 128;
                const y = Math.sin(angle) * radius + 128;
                return (
                  <div
                    key={i}
                    className={`absolute w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      i === pulsingNode 
                        ? 'bg-primary/20 border-primary scale-125' 
                        : 'bg-white border-border'
                    }`}
                    style={{
                      left: x - 24,
                      top: y - 24,
                      boxShadow: i === pulsingNode ? '0 0 30px rgba(233, 78, 135, 0.4)' : 'none',
                    }}
                  >
                    <Brain className={`w-5 h-5 ${i === pulsingNode ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                );
              })}
              
              {/* Center node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== INTEGRATION SECTION ==========
const IntegrationSection = () => {
  const integrations = [
    { label: 'EHR', icon: FileText },
    { label: 'Billing', icon: DollarSign },
    { label: 'Labs', icon: Activity },
    { label: 'Employers', icon: Briefcase },
    { label: 'Networks', icon: Network },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Built to Work With Your Existing Stack
          </h2>
          <p className="text-muted-foreground">
            No rip-and-replace. Health Compiler integrates with EHRs, billing systems, labs, and employer platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border/50 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ========== WHO IT'S FOR SECTION ==========
const AudienceSection = () => {
  const audiences = [
    { icon: Building2, title: 'Multi-site urgent care operators' },
    { icon: Network, title: 'Urgent care networks & MSOs' },
    { icon: Briefcase, title: 'Employer-aligned urgent care programs' },
    { icon: TrendingUp, title: 'Value-based and risk-bearing organizations' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Designed for Modern Urgent Care Models
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border/50 bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ========== CTA SECTION ==========
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            See Your Urgent Care Data Clearly
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Explore the Platform
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" /> HIPAA-aligned
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary" /> Secure by design
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-primary" /> Built for scale
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

// ========== MAIN PAGE COMPONENT ==========
const UrgentCare = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <PlatformSection />
      <MetricsSection />
      <AISection />
      <IntegrationSection />
      <AudienceSection />
      <CTASection />
    </Layout>
  );
};

export default UrgentCare;
