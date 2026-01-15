import { Eye, Activity, TrendingUp, ArrowRight } from 'lucide-react'

const flowSteps = [
  { icon: Eye, label: 'Early Visibility', color: '#f97316' },
  { icon: Activity, label: 'Proactive Care', color: '#8b5cf6' },
  { icon: TrendingUp, label: 'Better Outcomes', color: '#22c55e' },
]

export function WhyProactiveCare() {
  return (
    <section className='py-20 md:py-28 bg-muted/40'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Why Proactive Care Matters
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Improved population health outcomes start with early visibility.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          {/* Flow diagram */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-16'>
            {flowSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className='flex items-center'
                >
                  <div className='flex flex-col items-center'>
                    <div
                      className='w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-110'
                      style={{
                        backgroundColor: `${step.color}15`,
                        border: `2px solid ${step.color}30`,
                      }}
                    >
                      <Icon
                        className='w-10 h-10'
                        style={{ color: step.color }}
                      />
                    </div>
                    <span className='mt-4 font-semibold text-sm'>
                      {step.label}
                    </span>
                  </div>
                  {index < flowSteps.length - 1 && (
                    <ArrowRight className='hidden md:block w-8 h-8 text-muted-foreground mx-6' />
                  )}
                </div>
              )
            })}
          </div>

          {/* Description */}
          <div className='text-center space-y-4 max-w-2xl mx-auto'>
            <p className='text-lg text-foreground'>
              <span className='font-semibold text-primary'>
                Early visibility
              </span>{' '}
              enables{' '}
              <span className='font-semibold text-primary'>proactive care</span>
              .
            </p>
            <p className='text-lg text-foreground'>
              <span className='font-semibold text-primary'>Proactive care</span>{' '}
              leads to better outcomes, lower utilization, and stronger
              continuity of care.
            </p>
          </div>

          {/* Stats or visual */}
          <div className='grid grid-cols-3 gap-6 mt-16'>
            {[
              { label: 'Lower Utilization', value: '↓' },
              { label: 'Better Outcomes', value: '↑' },
              { label: 'Stronger Continuity', value: '✓' },
            ].map((stat, index) => (
              <div
                key={index}
                className='text-center p-6 rounded-2xl bg-card border hover:shadow-lg transition-all'
              >
                <div className='text-3xl mb-2'>{stat.value}</div>
                <div className='text-sm text-muted-foreground font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
