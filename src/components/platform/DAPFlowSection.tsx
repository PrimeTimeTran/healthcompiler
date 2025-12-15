import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  subtitle = 'For Self-Funded Employers, Direct Care, and Value-Based Organizations',
  poweredBy = 'powered by Infera AI',
  highlightStepIndex = 2,
}: DAPFlowSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-foreground to-foreground/95 text-background relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_500px_at_50%_0%,hsl(var(--accent)/0.15),transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-10 md:mb-14">
          {eyebrow && (
            <div className="inline-block px-4 py-2 border border-background/20 rounded-full text-background/70 text-xs tracking-wider uppercase mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-display">
            {title}
          </h2>
          {(subtitle || poweredBy) && (
            <div className="mt-4 text-background/70 text-sm flex items-center justify-center gap-3 flex-wrap">
              {subtitle && <span>{subtitle}</span>}
              {poweredBy && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-background/20 rounded-full text-background/70">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.25)]" />
                  {poweredBy}
                </span>
              )}
            </div>
          )}
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_220px] gap-4 items-stretch">
          {/* Left Rail - Data Inputs */}
          <aside className="bg-background/5 border border-background/15 rounded-2xl p-5">
            <div className="text-xs tracking-wider uppercase text-background/60 mb-3">
              Data Sources
            </div>
            <ul>
              {dataInputs.map((item, idx) => (
                <li
                  key={idx}
                  className="py-2.5 border-b border-background/10 last:border-b-0 text-background/85 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {steps.map((step, idx) => {
              const isHighlight = idx === highlightStepIndex;
              return (
                <article
                  key={idx}
                  className={`relative rounded-2xl p-5 min-h-[180px] shadow-xl transition-all duration-300 ${
                    isHighlight
                      ? 'bg-accent text-accent-foreground scale-[1.02]'
                      : 'bg-card text-card-foreground'
                  }`}
                >
                  {/* Step number */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-sm font-bold ${
                      isHighlight ? 'bg-accent-foreground/20 text-accent-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  {step.kicker && (
                    <div className={`text-xs font-semibold mb-2 ${isHighlight ? 'text-accent-foreground/85' : 'text-accent'}`}>
                      {step.kicker}
                    </div>
                  )}
                  <p className={`text-sm leading-relaxed ${isHighlight ? 'text-accent-foreground/90' : 'text-muted-foreground'}`}>
                    {step.description}
                  </p>

                  {/* Connector line (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-background/30" />
                  )}
                </article>
              );
            })}
          </div>

          {/* Right Rail - Outcomes */}
          <aside className="bg-background/5 border border-background/15 rounded-2xl p-5">
            <div className="text-xs tracking-wider uppercase text-background/60 mb-3">
              Outcomes by Persona
            </div>
            <ul>
              {outcomes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 py-2.5 border-b border-background/10 last:border-b-0 text-background/85 text-sm"
                >
                  <span className="w-7 h-7 rounded-full bg-accent/30 border border-accent/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <div>
                    <span className="block">{item.label}</span>
                    <span className="text-xs text-background/50">{item.persona}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-background/20 bg-background/10 text-background hover:bg-background/20 transition-colors text-sm font-medium"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>

        {/* Persona Tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="text-background/50 text-sm">Built for:</span>
          {['Self-Funded Employers', 'Level-Funded Plans', 'Direct Primary Care', 'Value-Based / ACOs'].map((persona) => (
            <span
              key={persona}
              className="px-3 py-1.5 bg-background/10 border border-background/20 rounded-full text-background/80 text-xs"
            >
              {persona}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
