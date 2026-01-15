import { Heart, Calendar, Pill, LineChart } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Chronic Condition Monitoring',
    description:
      'Track trends across chronic conditions and identify early deterioration before complications lead to urgent care or hospitalizations.',
    color: '#ef4444',
  },
  {
    icon: Calendar,
    title: 'Preventive Care Gap Closure',
    description:
      'See which patients are overdue or approaching preventive milestones and proactively close care gaps across your population.',
    color: '#06b6d4',
  },
  {
    icon: Pill,
    title: 'Medication Adherence Monitoring',
    description:
      'Identify patients at risk of missed refills or lapses in adherence and intervene before outcomes are affected.',
    color: '#8b5cf6',
  },
  {
    icon: LineChart,
    title: 'Population Health Trends',
    description:
      'Analyze patterns across your patient panel to prioritize outreach, optimize care strategies, and improve overall population health performance.',
    color: '#22c55e',
  },
]

export function PopulationHealthFeatures() {
  return (
    <section className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Health Outcomes in Everyday Population Health Management
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Clear, actionable insights designed to fit seamlessly into daily
            clinical and care management workflows.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className='relative group p-8 rounded-2xl bg-card border hover:border-primary/30 hover:shadow-xl transition-all duration-300'
              >
                {/* Gradient background on hover */}
                <div
                  className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity'
                  style={{ backgroundColor: feature.color }}
                />

                <div className='relative'>
                  <div
                    className='w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110'
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon
                      className='w-7 h-7'
                      style={{ color: feature.color }}
                    />
                  </div>

                  <h3 className='text-xl font-semibold mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div
                  className='absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity'
                  style={{
                    background: `radial-gradient(circle at top right, ${feature.color}, transparent)`,
                    borderTopRightRadius: '1rem',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
