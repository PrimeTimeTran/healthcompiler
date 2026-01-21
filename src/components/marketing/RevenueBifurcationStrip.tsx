import { Globe, Target, Briefcase, MapPin } from 'lucide-react'

const RevenueBifurcationStrip = () => {
  const bifurcations = [
    {
      icon: Globe,
      title: 'By Channel',
      items: ['Organic', 'Paid', 'Referrals', 'Campaigns'],
    },
    {
      icon: Target,
      title: 'By Source',
      items: ['Website', 'SEO', 'Ads', 'Partners', 'Outreach'],
    },
    {
      icon: Briefcase,
      title: 'By Service',
      items: ['Primary care', 'specialty', 'programs', 'add-ons'],
    },
    {
      icon: MapPin,
      title: 'By Provider / Location',
      items: ['Individual doctors or clinics (if applicable)'],
    },
  ]

  return (
    <section className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Understand Revenue — Not Just Activity
          </h2>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {bifurcations.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className='bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                    <Icon className='w-5 h-5 text-primary' />
                  </div>
                  <h3 className='font-semibold text-foreground'>{item.title}</h3>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {item.items.map((tag, i) => (
                    <span
                      key={i}
                      className='text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <p className='text-sm text-muted-foreground text-center'>
          All revenue insights are viewable over time and exportable for finance, ops, or advisors.
        </p>
      </div>
    </section>
  )
}

export default RevenueBifurcationStrip
