import { useState, useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Rocket,
  Users,
  Target,
  Zap,
  Code,
  LineChart,
  CheckCircle,
  Calendar,
  RefreshCw,
  FileText,
  Database,
  Activity,
  Shield,
  Clock
} from 'lucide-react';

// ========== HERO SECTION WITH TIMELINE ANIMATION ==========
const HeroSection = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  
  const timeline = [
    { week: 'Week 1', title: 'Discovery', tasks: ['Data audit', 'Gap analysis', 'Architecture review'] },
    { week: 'Week 2', title: 'Integration', tasks: ['Connect systems', 'Map data flows', 'Build pipelines'] },
    { week: 'Week 3', title: 'Activation', tasks: ['Deploy workflows', 'Configure alerts', 'Train teams'] },
    { week: 'Week 4', title: 'Optimization', tasks: ['Monitor metrics', 'Refine logic', 'Handoff docs'] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWeek(prev => (prev + 1) % timeline.length);
    }, 2500);
    return () => clearInterval(interval);
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
              <span className="text-sm font-medium text-primary">Forward Deployed Engineering</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Your Team,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Extended
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Dedicated engineers embedded with your team to build, integrate, and activate healthcare data solutions—from discovery to production in weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Book a scoping call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#deployments">See example deployments</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" /> 4-week sprints
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" /> Embedded team
              </span>
              <span className="flex items-center gap-1.5">
                <Target className="w-4 h-4 text-primary" /> Production-ready
              </span>
            </p>
          </div>

          {/* Right - Animation #1: Sprint Timeline */}
          <div className="relative h-[450px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Timeline track */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-border/30">
                <div 
                  className="w-full bg-gradient-to-b from-primary to-accent transition-all duration-700"
                  style={{ height: `${((activeWeek + 1) / timeline.length) * 100}%` }}
                />
              </div>

              {/* Timeline items */}
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`relative pl-16 transition-all duration-500 ${
                      idx <= activeWeek ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    {/* Node */}
                    <div 
                      className={`absolute left-4 w-5 h-5 rounded-full border-2 transition-all duration-500 ${
                        idx <= activeWeek 
                          ? 'bg-primary border-primary shadow-lg shadow-primary/30' 
                          : 'bg-white border-border'
                      }`}
                      style={{
                        transform: idx === activeWeek ? 'scale(1.3)' : 'scale(1)',
                      }}
                    />

                    {/* Content card */}
                    <div 
                      className={`p-5 rounded-xl border transition-all duration-500 ${
                        idx === activeWeek 
                          ? 'bg-white border-primary/30 shadow-xl' 
                          : 'bg-slate-50/50 border-border/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          idx <= activeWeek ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.week}
                        </span>
                        <span className="font-semibold text-foreground">{item.title}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.tasks.map((task, taskIdx) => (
                          <span 
                            key={taskIdx}
                            className={`text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                              idx <= activeWeek 
                                ? 'bg-accent/10 text-accent' 
                                : 'bg-muted text-muted-foreground'
                            }`}
                            style={{
                              transitionDelay: `${taskIdx * 100}ms`,
                            }}
                          >
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== WHY FDE MATTERS SECTION ==========
const WhyFDESection = () => {
  const outcomes = [
    { icon: Rocket, title: 'Ship Faster', desc: 'Production-ready in weeks, not quarters' },
    { icon: Users, title: 'Extend Capacity', desc: 'Expert engineers, embedded with your team' },
    { icon: Target, title: 'Hit Targets', desc: 'Scoped outcomes, delivered on time' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Why Forward Deployed Engineering
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
    { title: 'Discover', desc: 'Audit systems, identify gaps, define scope', icon: Target },
    { title: 'Integrate', desc: 'Connect data sources, build pipelines', icon: Database },
    { title: 'Activate', desc: 'Deploy workflows, configure automation', icon: Zap },
    { title: 'Operationalize', desc: 'Train teams, document, hand off', icon: CheckCircle },
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
            The FDE Loop
          </h2>
          <p className="text-muted-foreground">Discover → Integrate → Activate → Operationalize</p>
        </div>

        {/* Animation #2: Flow diagram */}
        <div className="relative max-w-4xl mx-auto">
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

// ========== WHAT GETS DEPLOYED SECTION ==========
const WhatGetsDeployedSection = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  
  const tiles = [
    { icon: Database, title: 'Data Pipelines', detail: 'Automated ingestion from EHRs, claims, and operational systems' },
    { icon: Activity, title: 'Care Gap Workflows', detail: 'Real-time alerts and task routing for quality measures' },
    { icon: LineChart, title: 'Performance Dashboards', detail: 'Executive-ready scorecards and provider-level views' },
    { icon: Code, title: 'Custom Integrations', detail: 'API connections to your existing tech stack' },
    { icon: Shield, title: 'Compliance Automation', detail: 'HEDIS, MIPS, and payer requirement tracking' },
    { icon: FileText, title: 'Documentation', detail: 'Full technical docs and runbooks for your team' },
  ];

  return (
    <section id="deployments" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Gets Deployed
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

// ========== FDE IN PRACTICE SECTION ==========
const FDEInPracticeSection = () => {
  const results = [
    { before: 'Months of planning', after: 'Live in 4 weeks', icon: Clock },
    { before: 'Siloed data systems', after: 'Unified workflows', icon: Database },
    { before: 'Manual processes', after: 'Automated activation', icon: Zap },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            FDE in Practice
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
    'Supports ACOs, health systems, and value-based organizations',
    'Integrates with any EHR, claims system, or operational tool',
    'Scales from pilot projects to enterprise rollouts',
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Built for Healthcare Delivery
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
          Turn Roadmap Items into Shipped Features
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Expert engineers. Embedded with your team. Production-ready in weeks.
        </p>
        <Button size="lg" className="group" asChild>
          <Link to="/contact">
            Book a 20-min FDE scoping call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

// ========== MAIN PAGE COMPONENT ==========
const FDE = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyFDESection />
      <HowItWorksSection />
      <WhatGetsDeployedSection />
      <FDEInPracticeSection />
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

export default FDE;
