import { useState, useRef, useEffect } from 'react';
import { BarChart3, Database, Zap, Shield, LineChart, CheckCircle, Clock, FileCheck, Link2, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

const capabilities = [
  {
    number: "01",
    title: "Healthcare Analytics",
    description: "Real-time dashboards and reporting built for clinical, operational, and financial insights. Transform raw data into actionable intelligence.",
    pills: [
      { icon: BarChart3, text: "Dashboard Generated" },
      { icon: LineChart, text: "Metrics Updated" },
      { icon: CheckCircle, text: "Report Delivered" },
    ]
  },
  {
    number: "02",
    title: "Data Pipelines & ETL",
    description: "Automated data pipelines that unify EHR, claims, lab, and operational data into a single source of truth for your organization.",
    pills: [
      { icon: Database, text: "Data Synced" },
      { icon: Zap, text: "Pipeline Complete" },
      { icon: FileCheck, text: "Records Validated" },
    ]
  },
  {
    number: "03",
    title: "Workflow Automation",
    description: "Streamline operations with intelligent automation. Connect systems, eliminate manual processes, and accelerate decision-making.",
    pills: [
      { icon: Zap, text: "Task Automated" },
      { icon: Clock, text: "Workflow Triggered" },
      { icon: Shield, text: "Process Complete" },
    ]
  },
  {
    number: "04",
    title: "System Integration",
    description: "Seamless connectivity across healthcare systems. Connect EHR, practice management, billing, and third-party applications effortlessly.",
    pills: [
      { icon: Link2, text: "EHR Connected" },
      { icon: Server, text: "API Integrated" },
      { icon: CheckCircle, text: "Systems Synced" },
    ]
  },
  {
    number: "05",
    title: "Secure Architecture",
    description: "Enterprise-grade security built for healthcare. HIPAA-aligned infrastructure with end-to-end encryption and comprehensive audit logging.",
    pills: [
      { icon: Shield, text: "HIPAA Compliant" },
      { icon: FileCheck, text: "Audit Complete" },
      { icon: CheckCircle, text: "Data Protected" },
    ]
  },
];

export const WhatWeDoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    triggerRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { 
          threshold: 0.5,
          rootMargin: '-40% 0px -40% 0px'
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const active = capabilities[activeIndex];

  return (
    <section ref={sectionRef} className="bg-background">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="pt-24 pb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Capabilities
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content - Sticky */}
          <div className="lg:sticky lg:top-32 lg:h-fit space-y-8">
            {/* Navigation Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {capabilities.map((cap, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    triggerRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeIndex === index
                      ? "bg-accent text-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                  )}
                >
                  {cap.number}
                </button>
              ))}
            </div>

            {/* Active Content */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl lg:text-5xl font-bold text-primary/40">{active.number}</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {active.title}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                {active.description}
              </p>
            </div>

            {/* Right Visual - Mobile Only */}
            <div className="lg:hidden relative h-[350px] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary via-secondary/80 to-primary/20">
              <CapabilityVisual active={active} activeIndex={activeIndex} />
            </div>
          </div>

          {/* Right - Scroll Triggers + Visual */}
          <div className="relative">
            {/* Desktop Visual - Sticky */}
            <div className="hidden lg:block sticky top-32 h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary via-secondary/80 to-primary/20 mb-8">
              <CapabilityVisual active={active} activeIndex={activeIndex} />
            </div>

            {/* Scroll Trigger Points */}
            <div className="space-y-[50vh] lg:absolute lg:inset-0 lg:pointer-events-none">
              {capabilities.map((cap, index) => (
                <div
                  key={cap.number}
                  ref={(el) => (triggerRefs.current[index] = el)}
                  className="h-[30vh] lg:h-[60vh] flex items-center lg:pointer-events-auto"
                >
                  {/* Mobile scroll indicator */}
                  <div className="lg:hidden w-full text-center text-muted-foreground/50 text-sm">
                    {index < capabilities.length - 1 && "Scroll for more ↓"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-24" />
      </div>
    </section>
  );
};

// Separate component for the visual
const CapabilityVisual = ({ active, activeIndex }: { active: typeof capabilities[0], activeIndex: number }) => {
  return (
    <>
      {/* Skeleton placeholders - left side */}
      <div className="absolute top-12 left-8 w-32 h-10 bg-white/40 rounded-xl" />
      <div className="absolute top-28 left-12 w-40 h-12 bg-white/30 rounded-xl flex items-center gap-2 px-3">
        <div className="w-6 h-6 bg-white/50 rounded-full" />
        <div className="w-16 h-3 bg-white/50 rounded" />
      </div>
      <div className="absolute bottom-32 left-8 w-36 h-10 bg-white/40 rounded-xl" />
      <div className="absolute bottom-16 left-16 w-28 h-10 bg-white/30 rounded-xl" />
      
      {/* Animated Floating Pills - right side */}
      {active.pills.map((pill, index) => {
        const Icon = pill.icon;
        const positions = [
          "top-[20%] right-4 lg:right-6",
          "top-[45%] right-6 lg:right-10",
          "top-[70%] right-2 lg:right-4",
        ];
        const delays = ["0s", "0.15s", "0.3s"];
        
        return (
          <div
            key={`${activeIndex}-${index}`}
            className={cn(
              "absolute animate-fade-in",
              positions[index]
            )}
            style={{ animationDelay: delays[index] }}
          >
            <div className="flex items-center gap-2 lg:gap-3 bg-white rounded-full px-3 lg:px-5 py-2 lg:py-3 shadow-lg">
              <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
              <span className="text-xs lg:text-sm font-medium text-foreground whitespace-nowrap">
                {pill.text}
              </span>
            </div>
          </div>
        );
      })}

      {/* Center Card */}
      <div 
        key={activeIndex}
        className="absolute top-1/2 left-[30%] lg:left-[35%] -translate-x-1/2 -translate-y-1/2 animate-fade-in"
      >
        <div className="bg-white rounded-2xl p-4 lg:p-5 shadow-xl min-w-[160px] lg:min-w-[180px]">
          <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-2 lg:mb-3">
            Processing...
          </div>
          <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              {(() => {
                const Icon = active.pills[0].icon;
                return <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-foreground" />;
              })()}
            </div>
            <span className="font-semibold text-foreground text-xs lg:text-sm">{active.title.split(' ')[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-accent/20 flex items-center justify-center">
              <Zap className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-accent" />
            </div>
            <div className="flex gap-0.5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-accent/60 rounded-full animate-pulse"
                  style={{
                    height: `${8 + Math.random() * 12}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
