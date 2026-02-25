import { PlugZap, Cpu, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: PlugZap,
    number: '01',
    title: 'Connect',
    description: 'Plug in your existing data sources. Claims, Rx, benefits, clinical, HR — we ingest it all. Most employers are fully onboarded in under two weeks.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Compile',
    description: 'Our Infera engine normalizes, deduplicates, and enriches your data in real time. Every data point is mapped to a unified member record, so you\'re never comparing apples to oranges.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Command',
    description: 'Your leadership team gets a live intelligence dashboard — not a static PDF. Drill into PMPM trends, flag high-cost claimants early, model plan design changes, and build the evidence base for every benefits decision.',
  },
]

export function HowItWorksSection() {
  return (
    <section className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
            How It Works
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            From Fragmented Data to Unified Employer Intelligence
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            HealthCompiler connects to the systems you already use — your TPA, PBM, stop-loss carrier, HRIS, direct primary care partners, and even wearable platforms — and normalizes everything into a single, structured analytics layer. No more waiting for quarterly reports. No more reconciling conflicting numbers.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {steps.map((step, i) => (
            <div key={i} className='relative group'>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className='hidden md:block absolute top-16 left-[calc(100%)] w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 z-0' style={{ width: 'calc(100% - 4rem)', left: 'calc(50% + 2rem)' }} />
              )}

              <div className='relative bg-card border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all h-full'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                    <step.icon className='w-7 h-7 text-primary' />
                  </div>
                  <span className='text-4xl font-bold text-muted-foreground/20'>{step.number}</span>
                </div>
                <h3 className='text-xl font-bold mb-3'>{step.title}</h3>
                <p className='text-muted-foreground leading-relaxed'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
