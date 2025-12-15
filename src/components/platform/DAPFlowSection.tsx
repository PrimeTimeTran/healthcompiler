import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const dataInputs = [
  'Labs',
  'Pharmacy',
  'Claims',
  'EMRs',
  'SDoH',
  'Consumer & Digital Health',
  'Third-party Data',
];

const steps = [
  {
    title: 'Integrate',
    kicker: '',
    description: 'Raw data is ingested from source systems & stored in a data lake.',
  },
  {
    title: 'Harmonize',
    kicker: '',
    description: 'Data is parsed & codified, then stored in a simple data structure.',
  },
  {
    title: 'Unify',
    kicker: 'Patient & provider record',
    description: 'Information is aggregated into a single record.',
  },
  {
    title: 'Process',
    kicker: '',
    description: 'Algorithms enrich data with quality measures, gaps in care, & more.',
  },
  {
    title: 'Analyze',
    kicker: '',
    description: 'Data is denormalized into a structure for analytics & AI.',
  },
];

const outcomes = [
  'Drive VBC performance',
  'Deliver intelligent experiences',
  'Reduce provider burden',
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
  title = 'DAP turns healthcare data into actionable intelligence',
  subtitle = '',
  poweredBy = 'powered by Infera AI',
  highlightStepIndex = 2,
}: DAPFlowSectionProps) => {
  return (
    <section className="dap-section py-16 md:py-24 bg-[#050b1a] text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_600px_at_50%_0%,rgba(30,91,255,0.25),transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="text-center mb-10 md:mb-14">
          {eyebrow && (
            <div className="inline-block px-4 py-2 border border-white/20 rounded-full text-white/70 text-xs tracking-wider uppercase mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h2>
          {(subtitle || poweredBy) && (
            <div className="mt-4 text-white/70 text-sm flex items-center justify-center gap-3 flex-wrap">
              {subtitle && <span>{subtitle}</span>}
              {poweredBy && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full text-white/70">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1e5bff] shadow-[0_0_0_4px_rgba(30,91,255,0.25)]" />
                  {poweredBy}
                </span>
              )}
            </div>
          )}
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_240px] gap-4 items-stretch">
          {/* Left Rail - Data Inputs */}
          <aside className="bg-white/5 border border-white/15 rounded-2xl p-5">
            <div className="text-xs tracking-wider uppercase text-white/60 mb-3">
              Data Inputs
            </div>
            <ul>
              {dataInputs.map((item, idx) => (
                <li
                  key={idx}
                  className="py-2.5 border-b border-white/10 last:border-b-0 text-white/85 text-sm"
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
                  className={`relative rounded-2xl p-5 min-h-[180px] shadow-xl ${
                    isHighlight
                      ? 'bg-[#1e5bff] text-white'
                      : 'bg-white/95 text-[#0b1220]'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${
                      isHighlight ? 'bg-white/20' : 'bg-[#0f192d]/10'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full border-2 border-dashed ${
                        isHighlight ? 'border-white/70' : 'border-black/35'
                      }`}
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  {step.kicker && (
                    <div className="text-xs font-semibold opacity-85 mb-2">
                      {step.kicker}
                    </div>
                  )}
                  <p className="text-sm leading-relaxed opacity-90">
                    {step.description}
                  </p>

                  {/* Connector line (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-white/20" />
                  )}
                </article>
              );
            })}
          </div>

          {/* Right Rail - Outcomes */}
          <aside className="bg-white/5 border border-white/15 rounded-2xl p-5">
            <div className="text-xs tracking-wider uppercase text-white/60 mb-3">
              Outcomes
            </div>
            <ul>
              {outcomes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 py-2.5 border-b border-white/10 last:border-b-0 text-white/85 text-sm"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1e5bff]/25 border border-[#1e5bff]/35 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-white/20 bg-white/5 text-white/90 hover:bg-white/10 transition-colors text-sm"
            >
              <span className="w-4 h-4 rounded bg-white/20" />
              Ask for a demo
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};
