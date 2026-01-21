import { Mail, BarChart3, DollarSign, Zap, Users, RefreshCcw, Target, Clock, TrendingUp, ArrowRight } from 'lucide-react'

const MarketingCapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Mail,
      title: 'Marketing Automation',
      features: [
        'Multi-step campaigns (email, SMS, reminders)',
        'Lead nurturing & re-engagement',
        'Referral & partner outreach',
        'Zero manual follow-up',
      ],
      caption: 'Designed for lean practice teams.',
    },
    {
      icon: BarChart3,
      title: 'Funnel & Conversion Analytics',
      features: [
        'Inquiry → appointment conversion',
        'Drop-off analysis by channel',
        'Time-to-response & booking velocity',
        'Campaign-level performance',
      ],
      caption: 'Know what converts—not just what sends.',
    },
    {
      icon: DollarSign,
      title: 'Revenue Attribution',
      features: [
        'Revenue by marketing channel',
        'Revenue by referral source',
        'Revenue by campaign',
        'Revenue by service line / visit type',
      ],
      caption: 'Tie growth directly to dollars collected.',
    },
  ]

  return (
    <section className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Marketing That Runs Itself — Analytics That Prove ROI
          </h2>
          <p className='text-lg text-muted-foreground'>
            Automate outreach across email, SMS, and campaigns—while tracking conversions, appointments, and revenue attribution in one system.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {capabilities.map((cap, index) => {
            const Icon = cap.icon
            return (
              <div
                key={index}
                className='bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4'>
                  <Icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold text-foreground mb-4'>{cap.title}</h3>
                <ul className='space-y-2 mb-4'>
                  {cap.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                      <ArrowRight className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-xs text-primary font-medium italic'>{cap.caption}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MarketingCapabilitiesSection
