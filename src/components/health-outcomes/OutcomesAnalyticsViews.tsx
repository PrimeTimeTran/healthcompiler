import { useEffect, useRef, useState } from 'react'
import { ChartBar, Users, TrendingUp, Building2, FileText } from 'lucide-react'

const viewItems = [
  { icon: ChartBar, text: 'Cohort trends (before/after)' },
  { icon: Users, text: 'At-risk segment drilldowns' },
  { icon: TrendingUp, text: 'Engagement-to-outcome correlation' },
  { icon: Building2, text: 'Provider/program impact comparisons' },
  { icon: FileText, text: 'Employer-ready reporting (monthly/quarterly)' },
]

function AnimatedDashboard() {
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setLoaded(true), 200)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={containerRef}
      className='bg-card rounded-2xl border border-border p-6 shadow-soft overflow-hidden'
    >
      {/* Dashboard header */}
      <div className='flex items-center gap-2 mb-4'>
        <div className='w-2.5 h-2.5 rounded-full bg-red-400' />
        <div className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
        <div className='w-2.5 h-2.5 rounded-full bg-green-400' />
        <span className='text-xs text-muted-foreground ml-2'>Outcomes Dashboard</span>
      </div>

      {/* Chart area */}
      <div className='relative h-40 bg-muted/30 rounded-lg overflow-hidden'>
        {/* Animated bars */}
        <div className='absolute bottom-0 left-0 right-0 flex items-end justify-around gap-2 px-4 h-32'>
          {[65, 45, 80, 55, 70, 40, 85, 60].map((height, idx) => (
            <div
              key={idx}
              className='flex-1 bg-gradient-to-t from-primary/60 to-accent/40 rounded-t transition-all duration-700 ease-out'
              style={{
                height: loaded ? `${height}%` : '0%',
                transitionDelay: `${idx * 100}ms`,
              }}
            />
          ))}
        </div>

        {/* Grid lines */}
        <div className='absolute inset-0 flex flex-col justify-between py-2 pointer-events-none'>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className='border-t border-border/30 w-full' />
          ))}
        </div>

        {/* Trend line */}
        <svg 
          className='absolute inset-0 w-full h-full'
          viewBox='0 0 300 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,100 Q50,80 100,60 T200,40 T300,20'
            fill='none'
            stroke='hsl(var(--accent))'
            strokeWidth='2'
            strokeDasharray={loaded ? '0' : '500'}
            strokeDashoffset={loaded ? '0' : '500'}
            style={{
              transition: 'stroke-dasharray 1.5s ease-out, stroke-dashoffset 1.5s ease-out',
              transitionDelay: '0.8s',
            }}
          />
        </svg>
      </div>

      {/* Stats row */}
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {[
          { label: 'Engagement', value: '+24%', colorClass: 'text-emerald-600' },
          { label: 'Risk Reduction', value: '-18%', colorClass: 'text-sky-600' },
          { label: 'Outcomes', value: '+32%', colorClass: 'text-primary' },
        ].map((stat, idx) => (
          <div 
            key={stat.label}
            className='text-center p-2 rounded-lg bg-muted/30'
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease-out',
              transitionDelay: `${1 + idx * 0.15}s`,
            }}
          >
            <div className={`text-lg font-bold ${stat.colorClass}`}>{stat.value}</div>
            <div className='text-xs text-muted-foreground'>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function OutcomesAnalyticsViews() {
  return (
    <div className='mt-20'>
      <h3 className='text-2xl font-bold text-center mb-4'>
        Outcomes Analytics Views
      </h3>
      <p className='text-muted-foreground text-center mb-10 max-w-2xl mx-auto'>
        Actionable dashboards for population health outcomes dashboards and outcomes reporting for employers.
      </p>
      
      <div className='grid lg:grid-cols-2 gap-8 items-start'>
        {/* Left: Bullet list */}
        <div className='bg-card rounded-2xl border border-border p-6 shadow-soft'>
          <h4 className='font-semibold mb-4 text-lg'>Outcomes views include</h4>
          <ul className='space-y-3'>
            {viewItems.map((item, idx) => (
              <li key={idx} className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0'>
                  <item.icon className='w-4 h-4 text-primary' />
                </div>
                <span className='text-sm text-muted-foreground'>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Animated dashboard */}
        <AnimatedDashboard />
      </div>
    </div>
  )
}
