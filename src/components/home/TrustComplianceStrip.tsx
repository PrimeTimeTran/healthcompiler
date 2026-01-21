import { Shield, Lock, CheckCircle2 } from 'lucide-react'

const trustItems = [
  { icon: Shield, label: 'HIPAA-ready' },
  { icon: Lock, label: 'SOC-aligned' },
  { icon: CheckCircle2, label: 'Secure by design' },
]

const integrations = ['EHRs', 'TPAs', 'DPC systems', 'Employer stacks']

export const TrustComplianceStrip = () => {
  return (
    <section className="py-12 lg:py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              )
            })}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-8 bg-border" />

          {/* Integration statement */}
          <div className="text-center lg:text-right">
            <p className="text-sm text-muted-foreground">
              Built to integrate with existing{' '}
              {integrations.map((item, index) => (
                <span key={item}>
                  <span className="text-foreground font-medium">{item}</span>
                  {index < integrations.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
