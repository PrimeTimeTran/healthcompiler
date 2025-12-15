import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const dataInputs = [
  'Claims Data',
  'Clinical / EHR',
  'Pharmacy',
  'Labs & Diagnostics',
  'Wearables & RPM',
  'SDoH Factors',
  'Third-party Data',
];

const steps = [
  {
    title: 'Integrate',
    kicker: '',
    description: 'Raw data ingested from TPAs, carriers, EHRs & stored securely.',
  },
  {
    title: 'Harmonize',
    kicker: '',
    description: 'Data is parsed, codified & mapped to standardized structures.',
  },
  {
    title: 'Unify',
    kicker: 'Member & Provider 360°',
    description: 'Create a unified view across all data sources per member.',
  },
  {
    title: 'Enrich',
    kicker: '',
    description: 'AI layers on risk scores, care gaps, HCC codes & quality measures.',
  },
  {
    title: 'Activate',
    kicker: '',
    description: 'Deliver insights to workflows, dashboards & automated outreach.',
  },
];

const outcomes = [
  { label: 'Cost Transparency & Savings', persona: 'Employers' },
  { label: 'Quality & HEDIS Performance', persona: 'VBC / ACOs' },
  { label: 'Patient Engagement & Retention', persona: 'Direct Care' },
  { label: 'HCC Capture & Risk Adjustment', persona: 'Value-Based' },
];

// Animated data particle component
const DataParticle = ({ delay, duration }: { delay: number; duration: number }) => (
  <div
    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316] shadow-lg shadow-[#E94E87]/50"
    style={{
      animation: `flowRight ${duration}s linear infinite`,
      animationDelay: `${delay}s`,
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    }}
  />
);

// Vertical flowing particle for data inputs
const VerticalParticle = ({ delay, index }: { delay: number; index: number }) => (
  <div
    className="absolute w-1.5 h-1.5 rounded-full bg-[#E94E87]"
    style={{
      animation: `pulse 2s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      opacity: 0.8,
    }}
  />
);

interface DAPFlowSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  poweredBy?: string;
  highlightStepIndex?: number;
}

export const DAPFlowSection = ({
  eyebrow = 'Data Activation Platform',
  title = 'Turn fragmented healthcare data into actionable intelligence',
  subtitle = 'For Self-Funded Plans, Direct Care, and Value-Based Organizations',
  poweredBy = 'powered by Infera AI',
  highlightStepIndex = 2,
}: DAPFlowSectionProps) => {
  const [activeSource, setActiveSource] = useState(0);

  // Cycle through data sources to show activity
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSource((prev) => (prev + 1) % dataInputs.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* CSS Animations */}
      <style>{`
        @keyframes flowRight {
          0% {
            left: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        
        @keyframes flowVertical {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        
        @keyframes dataGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(233, 78, 135, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(233, 78, 135, 0.6), 0 0 30px rgba(249, 115, 22, 0.4);
          }
        }
        
        @keyframes stepPulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes connectorFlow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        @keyframes particleTravel {
          0% {
            transform: translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateX(10%) scale(1);
            opacity: 1;
          }
          90% {
            transform: translateX(90%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) scale(0);
            opacity: 0;
          }
        }
        
        .data-source-active {
          animation: dataGlow 1.5s ease-in-out infinite;
        }
        
        .connector-animated {
          background: linear-gradient(90deg, 
            transparent 0%, 
            hsl(var(--border)) 20%, 
            #E94E87 50%, 
            hsl(var(--border)) 80%, 
            transparent 100%
          );
          background-size: 200% 100%;
          animation: connectorFlow 2s linear infinite;
        }
      `}</style>

      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_500px_at_50%_0%,hsl(var(--accent)/0.12),transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-10 md:mb-14">
          {eyebrow && (
            <div className="inline-block px-4 py-2 border border-accent/30 rounded-full text-accent text-xs tracking-wider uppercase mb-4 bg-accent/5">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-display text-foreground">
            {title}
          </h2>
          {(subtitle || poweredBy) && (
            <div className="mt-4 text-muted-foreground text-sm flex items-center justify-center gap-3 flex-wrap">
              {subtitle && <span>{subtitle}</span>}
              {poweredBy && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent/30 rounded-full text-accent bg-accent/5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E94E87] shadow-[0_0_0_4px_rgba(233,78,135,0.2)] animate-pulse" />
                  {poweredBy}
                </span>
              )}
            </div>
          )}
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_220px] gap-4 items-stretch">
          {/* Left Rail - Data Inputs */}
          <aside className="bg-card border border-border rounded-2xl p-5 shadow-sm relative">
            <div className="text-xs tracking-wider uppercase text-muted-foreground mb-3">
              Data Sources
            </div>
            <ul>
              {dataInputs.map((item, idx) => (
                <li
                  key={idx}
                  className={`py-2.5 border-b border-border/50 last:border-b-0 text-foreground text-sm flex items-center gap-2 transition-all duration-500 ${
                    activeSource === idx ? 'text-[#E94E87] font-medium' : ''
                  }`}
                >
                  <span 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSource === idx 
                        ? 'bg-[#E94E87] data-source-active scale-125' 
                        : 'bg-[#E94E87]/50'
                    }`} 
                  />
                  {item}
                  {/* Animated particle shooting out */}
                  {activeSource === idx && (
                    <span className="ml-auto">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E94E87] animate-ping" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Flow indicator to steps */}
            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#E94E87] animate-ping" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316]" />
                </div>
              </div>
            </div>
          </aside>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {/* Flowing data line underneath (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
              <div className="h-full connector-animated rounded-full" />
              {/* Traveling particles */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316] shadow-lg shadow-[#E94E87]/50"
                  style={{
                    animation: `particleTravel 3s ease-in-out infinite`,
                    animationDelay: `${i * 1}s`,
                  }}
                />
              ))}
            </div>

            {steps.map((step, idx) => {
              const isHighlight = idx === highlightStepIndex;
              return (
                <article
                  key={idx}
                  className={`relative rounded-2xl p-5 min-h-[180px] shadow-lg transition-all duration-300 z-10 ${
                    isHighlight
                      ? 'bg-gradient-to-br from-[#E94E87] to-[#F97316] text-white scale-[1.02]'
                      : 'bg-card text-card-foreground border border-border'
                  }`}
                >
                  {/* Processing indicator */}
                  <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${
                    isHighlight ? 'bg-white' : 'bg-[#E94E87]'
                  }`}>
                    <span className={`absolute inset-0 rounded-full animate-ping ${
                      isHighlight ? 'bg-white/50' : 'bg-[#E94E87]/50'
                    }`} style={{ animationDelay: `${idx * 0.3}s` }} />
                  </div>

                  {/* Step number */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-sm font-bold ${
                      isHighlight ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  {step.kicker && (
                    <div className={`text-xs font-semibold mb-2 ${isHighlight ? 'text-white/85' : 'text-[#E94E87]'}`}>
                      {step.kicker}
                    </div>
                  )}
                  <p className={`text-sm leading-relaxed ${isHighlight ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {step.description}
                  </p>

                  {/* Connector with flowing animation (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-1.5 top-1/2 -translate-y-1/2 items-center z-20">
                      <div className="relative">
                        <div className="w-3 h-0.5 bg-border" />
                        <div 
                          className="absolute inset-0 w-3 h-0.5 bg-gradient-to-r from-[#E94E87] to-transparent"
                          style={{
                            animation: `stepPulse 1.5s ease-in-out infinite`,
                            animationDelay: `${idx * 0.3}s`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Right Rail - Outcomes */}
          <aside className="bg-card border border-border rounded-2xl p-5 shadow-sm relative">
            {/* Flow indicator from steps */}
            <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 z-20">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#F97316] animate-ping" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316]" />
                </div>
              </div>
            </div>

            <div className="text-xs tracking-wider uppercase text-muted-foreground mb-3">
              Outcomes by Persona
            </div>
            <ul>
              {outcomes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 py-2.5 border-b border-border/50 last:border-b-0 text-foreground text-sm group"
                >
                  <span 
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E94E87]/20 to-[#F97316]/20 border border-[#E94E87]/30 flex-shrink-0 flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#E94E87]/20"
                    style={{
                      animation: 'dataGlow 3s ease-in-out infinite',
                      animationDelay: `${idx * 0.5}s`,
                    }}
                  >
                    <Check className="w-3.5 h-3.5 text-[#E94E87]" />
                  </span>
                  <div>
                    <span className="block">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.persona}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316] text-white hover:opacity-90 transition-opacity text-sm font-medium shadow-md hover:shadow-lg hover:shadow-[#E94E87]/30"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>

        {/* Persona Tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="text-muted-foreground text-sm">Built for:</span>
          {['Self-Funded Employers', 'Level-Funded Plans', 'Direct Primary Care', 'Value-Based / ACOs'].map((persona) => (
            <span
              key={persona}
              className="px-3 py-1.5 bg-card border border-border rounded-full text-foreground text-xs shadow-sm hover:border-accent/30 transition-colors"
            >
              {persona}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
