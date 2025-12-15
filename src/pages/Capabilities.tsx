import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  BarChart3, 
  Database, 
  Workflow, 
  Plug, 
  Cloud,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Capability {
  number: string;
  tagline: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const capabilities: Capability[] = [
  {
    number: '01',
    tagline: 'Analytics',
    title: 'Healthcare Analytics',
    description: 'Transform raw data into actionable insights with custom dashboards, real-time reporting, and advanced analytics tailored for healthcare operations.',
    icon: BarChart3,
    features: [
      'Custom healthcare dashboards',
      'Real-time operational reporting',
      'Patient outcome analytics',
      'Financial performance tracking',
    ],
  },
  {
    number: '02',
    tagline: 'Data Infrastructure',
    title: 'Data Pipelines & ETL',
    description: 'Build scalable, reliable data pipelines that extract, transform, and load healthcare data from any source into your analytics infrastructure.',
    icon: Database,
    features: [
      'Automated data extraction',
      'Data quality validation',
      'Real-time streaming pipelines',
      'Historical data migration',
    ],
  },
  {
    number: '03',
    tagline: 'Automation',
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and processes with intelligent automation that reduces manual work and improves operational efficiency.',
    icon: Workflow,
    features: [
      'Automated reporting workflows',
      'Alert and notification systems',
      'Task scheduling and orchestration',
      'Process optimization',
    ],
  },
  {
    number: '04',
    tagline: 'Integration',
    title: 'API & System Integrations',
    description: 'Connect disparate healthcare systems with robust API integrations that enable seamless data flow across your organization.',
    icon: Plug,
    features: [
      'EHR system integrations',
      'Claims data connectivity',
      'Lab and diagnostic integrations',
      'Third-party API development',
    ],
  },
  {
    number: '05',
    tagline: 'Infrastructure',
    title: 'Cloud-native Architecture',
    description: 'Deploy on modern cloud infrastructure designed for healthcare compliance, scalability, and high availability.',
    icon: Cloud,
    features: [
      'HIPAA-aligned infrastructure',
      'Auto-scaling capabilities',
      'Disaster recovery solutions',
      'Multi-region deployment',
    ],
  },
];

const Capabilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeCapability = capabilities[activeIndex];

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length);
    }, 5000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      e.preventDefault();
      setIsAutoPlaying(false);
      
      if (e.deltaY > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, capabilities.length - 1));
      } else {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
      
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
      return () => section.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-background to-background-secondary">
        <div className="container-tight mx-auto text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            Our Capabilities
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            A Harmony of Healthcare<br />
            <span className="text-gradient">Data Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end healthcare data solutions from analytics to automation, 
            built with security and scalability at the core.
          </p>
        </div>
      </section>

      {/* Capabilities Tabs Section */}
      <section 
        ref={sectionRef}
        className="section-padding bg-background min-h-[80vh]"
      >
        <div className="container-tight mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Side - Tabs */}
            <div className="lg:col-span-5">
              <div className="space-y-1">
                {capabilities.map((capability, index) => (
                  <button
                    key={capability.number}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "w-full text-left p-6 rounded-xl transition-all duration-300 group relative overflow-hidden",
                      activeIndex === index
                        ? "bg-card shadow-card border border-border/50"
                        : "hover:bg-secondary/50"
                    )}
                  >
                    {/* Progress bar for active item */}
                    {activeIndex === index && isAutoPlaying && (
                      <div className="absolute bottom-0 left-0 h-1 bg-accent animate-progress" />
                    )}
                    
                    <div className="flex items-start gap-4">
                      <span className={cn(
                        "text-2xl font-bold transition-colors duration-300",
                        activeIndex === index ? "text-accent" : "text-muted-foreground/50"
                      )}>
                        {capability.number}
                      </span>
                      <div>
                        <p className={cn(
                          "text-xs uppercase tracking-widest mb-1 transition-colors duration-300",
                          activeIndex === index ? "text-accent" : "text-muted-foreground"
                        )}>
                          {capability.tagline}
                        </p>
                        <h3 className={cn(
                          "font-display text-lg font-semibold transition-colors duration-300",
                          activeIndex === index ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {capability.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-7">
              <div className="sticky top-24">
                <div 
                  key={activeIndex}
                  className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 animate-fade-in"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8">
                    <activeCapability.icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Title & Description */}
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {activeCapability.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {activeCapability.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {activeCapability.features.map((feature, idx) => (
                      <li 
                        key={feature} 
                        className="flex items-center gap-3 text-foreground"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="outline" asChild className="group">
                    <Link to="/contact" className="gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-tight mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how our capabilities can address your specific healthcare data challenges.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Capabilities;
