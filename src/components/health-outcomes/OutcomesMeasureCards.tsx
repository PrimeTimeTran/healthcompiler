import { Activity, Heart, TrendingUp } from 'lucide-react'

const measureCards = [
  {
    title: 'Behavioral Outcomes',
    icon: Activity,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    items: [
      'Steps & activity minutes',
      'Sleep duration + quality trends',
      'Recovery & readiness signals',
    ],
  },
  {
    title: 'Clinical Outcomes',
    icon: Heart,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    items: [
      'BP control & variability',
      'Glucose trends (CGM / RPM)',
      'Weight + body composition change',
    ],
  },
  {
    title: 'Program Outcomes',
    icon: TrendingUp,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    items: [
      'Engagement + adherence',
      'Risk movement over time',
      'Avoidable events & utilization shifts',
    ],
  },
]

export function OutcomesMeasureCards() {
  return (
    <div className='mt-16'>
      <h3 className='text-2xl font-bold text-center mb-8'>
        What You Can Measure
      </h3>
      
      <div className='grid md:grid-cols-3 gap-6'>
        {measureCards.map((card, index) => (
          <div 
            key={card.title}
            className='bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1'
          >
            <div className='flex items-center gap-3 mb-4'>
              <div className={`w-10 h-10 rounded-xl ${card.bgColor} flex items-center justify-center`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <h4 className='font-semibold text-lg'>{card.title}</h4>
            </div>
            
            <ul className='space-y-2'>
              {card.items.map((item, idx) => (
                <li key={idx} className='flex items-start gap-2 text-muted-foreground'>
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full ${card.color.replace('text-', 'bg-')} flex-shrink-0`} />
                  <span className='text-sm'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <p className='text-center text-sm text-muted-foreground mt-8'>
        Outcomes can be viewed by member, clinic, cohort, employer group, plan design, and time window.
      </p>
    </div>
  )
}
