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
  subtitle = 'For Self-Funded Plans, Direct Care, and Value-Based Organizations',
  poweredBy = 'powered by Infera AI',
  highlightStepIndex = 2,
}: DAPFlowSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
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
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E94E87] shadow-[0_0_0_4px_rgba(233,78,135,0.2)]" />
                  {poweredBy}
                </span>
              )}
            </div>
          )}
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_220px] gap-4 items-stretch">
          {/* Left Rail - Data Inputs */}
          <aside className="bg-card border border-border rounded-2xl p-5 shadow-sm">
            <div className="text-xs tracking-wider uppercase text-muted-foreground mb-3">
              Data Sources
            </div>
            <ul>
              {dataInputs.map((item, idx) => (
                <li
                  key={idx}
                  className="py-2.5 border-b border-border/50 last:border-b-0 text-foreground text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E94E87]" />
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
                  className={`relative rounded-2xl p-5 min-h-[180px] shadow-lg transition-all duration-300 ${
                    isHighlight
                      ? 'bg-gradient-to-br from-[#E94E87] to-[#F97316] text-white scale-[1.02]'
                      : 'bg-card text-card-foreground border border-border'
                  }`}
                >
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

                  {/* Connector line (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-border" />
                  )}
                </article>
              );
            })}
          </div>

          {/* Right Rail - Outcomes */}
          <aside className="bg-card border border-border rounded-2xl p-5 shadow-sm">
            <div className="text-xs tracking-wider uppercase text-muted-foreground mb-3">
              Outcomes by Persona
            </div>
            <ul>
              {outcomes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 py-2.5 border-b border-border/50 last:border-b-0 text-foreground text-sm"
                >
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E94E87]/20 to-[#F97316]/20 border border-[#E94E87]/30 flex-shrink-0 flex items-center justify-center mt-0.5">
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
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#E94E87] to-[#F97316] text-white hover:opacity-90 transition-opacity text-sm font-medium shadow-md"
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
              className="px-3 py-1.5 bg-card border border-border rounded-full text-foreground text-xs shadow-sm"
            >
              {persona}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
