import { Zap, Users, Shield, Brain } from 'lucide-react'

const valueProps = [
  {
    icon: Zap,
    title: 'Fast Onboarding',
    description: 'Most employers are fully connected and seeing live data within two weeks. No six-month implementations. No consultant-heavy deployments. Your team has enough on their plate.',
  },
  {
    icon: Users,
    title: 'Advisor-Friendly',
    description: 'HealthCompiler works alongside your broker and consultant — not against them. Shared dashboards and role-based access mean everyone is looking at the same data, having the same conversation.',
  },
  {
    icon: Shield,
    title: 'Fiduciary-First Design',
    description: 'Every feature was built with ERISA obligations in mind. Audit trails, vendor scorecards, spend documentation — it\'s not an add-on. It\'s how the platform was designed from day one.',
  },
  {
    icon: Brain,
    title: 'AI-Powered, Human-Centered',
    description: 'Our Infera engine handles the data science — risk stratification, anomaly detection, predictive modeling — so your team can focus on making decisions, not building spreadsheets.',
  },
]

export function WhyHealthCompilerSection() {
  return (
    <section className='py-20 md:py-28 bg-muted/40'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
            Why HealthCompiler
          </div>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Built Different. Built for Employers.
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {valueProps.map((prop, i) => (
            <div key={i} className='bg-card border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all group'>
              <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors'>
                <prop.icon className='w-7 h-7 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-3'>{prop.title}</h3>
              <p className='text-muted-foreground leading-relaxed'>{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
