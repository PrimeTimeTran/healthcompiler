import { useState, useRef, useEffect } from 'react';
import { BarChart3, Database, Workflow, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const capabilities = [
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Healthcare Analytics',
    subtitle: 'Insights & Reporting',
    description: 'Real-time dashboards and analytics built for clinical, operational, and financial insights.',
    features: ['Patient outcome tracking', 'Revenue cycle analytics', 'Operational dashboards'],
    position: 'top-left',
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Engineering',
    subtitle: 'ETL & Pipelines',
    description: 'Scalable data pipelines that unify EHR, claims, lab, and operational data into a single source of truth.',
    features: ['Automated ETL workflows', 'Data quality monitoring', 'Real-time ingestion'],
    position: 'top-right',
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Workflow Automation',
    subtitle: 'Process Optimization',
    description: 'Streamline operations with intelligent automation. Connect systems, eliminate manual processes.',
    features: ['API integrations', 'Automated reporting', 'Alert management'],
    position: 'bottom-left',
  },
  {
    id: 'integration',
    icon: Zap,
    title: 'System Integration',
    subtitle: 'EHR & Claims',
    description: 'Seamless integrations across healthcare systems including EHR, practice management, and billing.',
    features: ['EHR connectivity', 'Claims processing', 'Lab integrations'],
    position: 'bottom-right',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Secure Architecture',
    subtitle: 'HIPAA-Aligned',
    description: 'Enterprise-grade security built for healthcare. HIPAA-aligned infrastructure with end-to-end encryption.',
    features: ['Data encryption', 'Access controls', 'Audit logging'],
    position: 'center-bottom',
  },
];

const positionClasses: Record<string, string> = {
  'top-left': 'top-4 left-4 md:top-8 md:left-0',
  'top-right': 'top-4 right-4 md:top-8 md:right-0',
  'bottom-left': 'bottom-24 left-4 md:bottom-32 md:left-0',
  'bottom-right': 'bottom-24 right-4 md:bottom-32 md:right-0',
  'center-bottom': 'bottom-4 left-1/2 -translate-x-1/2 md:bottom-8',
};

export const WhatWeDoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  const activeCapability = capabilities[activeIndex];

  return (
    <section ref={sectionRef} className="section-padding bg-background overflow-hidden">
      <div className="container-tight mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Capabilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end healthcare data solutions designed for scale, security, and operational excellence.
          </p>
        </div>

        {/* Interactive Scroll Section */}
        <div className="relative h-[500px] md:h-[550px]">
          {/* Floating Pills */}
          {capabilities.map((capability, index) => (
            <button
              key={capability.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "absolute z-10 flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-500 cursor-pointer",
                positionClasses[capability.position],
                activeIndex === index
                  ? "bg-accent text-accent-foreground border-accent shadow-elevated scale-105"
                  : "bg-card text-foreground border-border/50 hover:border-primary/50 hover:shadow-card"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                activeIndex === index ? "bg-accent-foreground/10" : "bg-secondary"
              )}>
                <capability.icon className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm whitespace-nowrap">{capability.title}</span>
            </button>
          ))}

          {/* Center Card */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-card rounded-2xl border border-border/50 shadow-elevated p-6 md:p-8 transition-all duration-500">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <activeCapability.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {activeCapability.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {activeCapability.subtitle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {activeCapability.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {activeCapability.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                      <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore {activeCapability.title}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-border/50">
                {capabilities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeIndex === idx 
                        ? "w-6 bg-accent" 
                        : "bg-muted hover:bg-primary/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Decorative connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            <circle cx="50%" cy="50%" r="120" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="50%" cy="50%" r="180" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </section>
  );
};
