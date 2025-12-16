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
  'Communication',
  'Membership',
  'Billing',
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
  const [activeStep, setActiveStep] = useState(0);
  const [activeOutcome, setActiveOutcome] = useState(-1);
  const [flowPhase, setFlowPhase] = useState<'source' | 'processing' | 'outcome'>('source');

  // Main flow animation cycle
  useEffect(() => {
    const phases = ['source', 'processing', 'outcome'] as const;
    let phaseIndex = 0;
    let stepIndex = 0;
    
    const interval = setInterval(() => {
      if (flowPhase === 'source') {
        setActiveSource((prev) => {
          if (prev >= dataInputs.length - 1) {
            setFlowPhase('processing');
            return 0;
          }
          return prev + 1;
        });
      } else if (flowPhase === 'processing') {
        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            setFlowPhase('outcome');
            return 0;
          }
          return prev + 1;
        });
      } else {
        setActiveOutcome((prev) => {
          if (prev >= outcomes.length - 1) {
            setFlowPhase('source');
            setActiveOutcome(-1);
            return -1;
          }
          return prev + 1;
        });
      }
    }, 600);
    
    return () => clearInterval(interval);
  }, [flowPhase]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes flowRight {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes dataGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(233, 78, 135, 0.3); }
          50% { box-shadow: 0 0 20px rgba(233, 78, 135, 0.6), 0 0 30px rgba(249, 115, 22, 0.4); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        
        @keyframes particleStream {
          0% { left: 0; opacity: 0; transform: translateY(-50%) scale(0.5); }
          5% { opacity: 1; transform: translateY(-50%) scale(1); }
          95% { opacity: 1; transform: translateY(-50%) scale(1); }
          100% { left: 100%; opacity: 0; transform: translateY(-50%) scale(0.5); }
        }
        
        @keyframes streamLine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        @keyframes slideInFromLeft {
          0% { transform: translateX(-20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          0% { transform: translateX(20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        .stream-line {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(233, 78, 135, 0.1) 20%,
            rgba(233, 78, 135, 0.5) 50%,
            rgba(249, 115, 22, 0.5) 60%,
            rgba(249, 115, 22, 0.1) 80%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: streamLine 2s linear infinite;
        }
        
        .data-active {
          animation: slideInFromLeft 0.3s ease-out forwards, dataGlow 1s ease-in-out infinite;
        }
        
        .outcome-active {
          animation: slideInFromRight 0.3s ease-out forwards, dataGlow 1s ease-in-out infinite;
        }
        
        .step-processing {
          animation: pulseGlow 0.8s ease-in-out infinite;
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
              {dataInputs.map((item, idx) => {
                const isActive = flowPhase === 'source' && activeSource === idx;
                const isPast = flowPhase !== 'source' || activeSource > idx;
                return (
                  <li
                    key={idx}
                    className={`py-2.5 border-b border-border/50 last:border-b-0 text-sm flex items-center gap-2 transition-all duration-300 ${
                      isActive ? 'text-[#E94E87] font-medium data-active' : isPast ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    <span className="relative">
                      <span 
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 block ${
                          isActive 
                            ? 'bg-[#E94E87] scale-125' 
                            : isPast 
                              ? 'bg-[#E94E87]/70'
                              : 'bg-muted-foreground/30'
                        }`} 
                      />
                      {isActive && (
                        <>
                          <span className="absolute inset-0 rounded-full bg-[#E94E87] animate-ping" />
                          <span className="absolute inset-0 rounded-full bg-[#E94E87]/50" style={{ animation: 'ripple 1s ease-out infinite' }} />
                        </>
                      )}
                    </span>
                    {item}
                    {/* Shooting particle when active */}
                    {isActive && (
                      <span className="ml-auto flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#E94E87] animate-ping" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-ping" style={{ animationDelay: '0.2s' }} />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            
            {/* Flow connector to steps */}
            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
              <div className="relative w-8 h-8">
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${flowPhase === 'source' ? 'scale-125' : 'scale-100'}`}>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316] ${flowPhase === 'source' ? 'animate-pulse' : ''}`} />
                </div>
                {flowPhase === 'source' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-[#E94E87]" style={{ animation: 'ripple 1s ease-out infinite' }} />
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {/* Main flowing stream line (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 z-0 rounded-full overflow-hidden bg-border/30">
              <div className="h-full stream-line rounded-full" />
            </div>
            
            {/* Traveling particles */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0 pointer-events-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316] shadow-lg shadow-[#E94E87]/50"
                  style={{
                    animation: `particleStream 4s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
              ))}
            </div>

            {steps.map((step, idx) => {
              const isHighlight = idx === highlightStepIndex;
              const isProcessing = flowPhase === 'processing' && activeStep === idx;
              const isPast = flowPhase === 'outcome' || (flowPhase === 'processing' && activeStep > idx);
              
              return (
                <article
                  key={idx}
                  className={`relative rounded-2xl p-5 min-h-[180px] shadow-lg transition-all duration-500 z-10 ${
                    isHighlight
                      ? 'bg-gradient-to-br from-[#E94E87] to-[#F97316] text-white scale-[1.02]'
                      : 'bg-card text-card-foreground border border-border'
                  } ${isProcessing ? 'ring-2 ring-[#E94E87] ring-offset-2' : ''}`}
                >
                  {/* Processing indicator */}
                  <div className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isHighlight ? 'bg-white' : isProcessing ? 'bg-[#E94E87] step-processing' : isPast ? 'bg-green-500' : 'bg-muted-foreground/30'
                  }`}>
                    {isProcessing && (
                      <>
                        <span className="absolute inset-0 rounded-full bg-[#E94E87] animate-ping" />
                        <span className="absolute -inset-1 rounded-full border border-[#E94E87]" style={{ animation: 'ripple 1s ease-out infinite' }} />
                      </>
                    )}
                  </div>

                  {/* Step number */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-sm font-bold transition-all duration-300 ${
                      isHighlight ? 'bg-white/20 text-white' : isProcessing ? 'bg-[#E94E87]/20 text-[#E94E87] scale-110' : 'bg-accent/10 text-accent'
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

                  {/* Connector between steps */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-1.5 top-1/2 -translate-y-1/2 items-center z-20">
                      <div className={`w-3 h-1 rounded-full transition-all duration-300 ${
                        isProcessing || isPast ? 'bg-gradient-to-r from-[#E94E87] to-[#F97316]' : 'bg-border'
                      }`} />
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
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${flowPhase === 'outcome' ? 'scale-125' : 'scale-100'}`}>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316] ${flowPhase === 'outcome' ? 'animate-pulse' : ''}`} />
                </div>
                {flowPhase === 'outcome' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-[#F97316]" style={{ animation: 'ripple 1s ease-out infinite' }} />
                  </div>
                )}
              </div>
            </div>

            <div className="text-xs tracking-wider uppercase text-muted-foreground mb-3">
              Outcomes by Persona
            </div>
            <ul>
              {outcomes.map((item, idx) => {
                const isActive = flowPhase === 'outcome' && activeOutcome === idx;
                const isPast = flowPhase === 'outcome' && activeOutcome > idx;
                
                return (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 py-2.5 border-b border-border/50 last:border-b-0 text-sm transition-all duration-300 ${
                      isActive ? 'outcome-active' : ''
                    }`}
                  >
                    <span 
                      className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-[#E94E87] to-[#F97316] scale-110 shadow-lg shadow-[#E94E87]/30' 
                          : isPast
                            ? 'bg-gradient-to-br from-[#E94E87]/30 to-[#F97316]/30 border border-[#E94E87]/50'
                            : 'bg-gradient-to-br from-[#E94E87]/10 to-[#F97316]/10 border border-[#E94E87]/20'
                      }`}
                    >
                      <Check className={`w-3.5 h-3.5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#E94E87]'}`} />
                    </span>
                    <div>
                      <span className={`block transition-colors duration-300 ${isActive ? 'text-[#E94E87] font-medium' : isPast ? 'text-foreground' : 'text-foreground'}`}>
                        {item.label}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.persona}</span>
                    </div>
                  </li>
                );
              })}
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
          {['Self-Funded Employers', 'Level-Funded Plans', 'Direct Care', 'Value-Based / ACOs'].map((persona) => (
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
