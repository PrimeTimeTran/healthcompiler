import { useState, useEffect } from 'react'
import { Activity, Clock, TrendingUp, DollarSign, Users, BarChart3 } from 'lucide-react'

const UrgentCareViz = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  const metrics = [
    { icon: Clock, label: 'Throughput', trend: '+15%', color: '#8B5CF6' },
    { icon: Users, label: 'Utilization', trend: '+12%', color: '#E94E87' },
    { icon: BarChart3, label: 'Performance', trend: '+20%', color: '#06B6D4' },
    { icon: DollarSign, label: 'Revenue', trend: '+18%', color: '#10B981' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Central Dashboard */}
      <div className='relative'>
        <div className='absolute inset-0 -m-6 rounded-2xl bg-gradient-to-r from-primary/15 to-accent/15 blur-2xl animate-pulse' />

        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[200px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />

          <div className='relative space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                <Activity className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-sm font-semibold text-foreground'>Multi-Site</div>
                <div className='text-xs text-muted-foreground'>Intelligence</div>
              </div>
            </div>

            {/* Mini chart */}
            <div className='pt-3 border-t border-border/50'>
              <div className='flex items-end justify-between gap-1 h-12'>
                {[50, 75, 60, 85, 70, 90, 95].map((h, i) => (
                  <div
                    key={i}
                    className='flex-1 bg-primary/20 rounded-t transition-all duration-300 hover:bg-primary/40'
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      {metrics.map((metric, idx) => {
        const Icon = metric.icon
        const positions = [
          { x: -180, y: -60 },
          { x: 180, y: -60 },
          { x: -180, y: 60 },
          { x: 180, y: 60 },
        ]
        const pos = positions[idx]
        const isActive = idx === activeMetric

        return (
          <div
            key={metric.label}
            className={`absolute transition-all duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100'}`}
            style={{
              left: `calc(50% + ${pos.x}px - 55px)`,
              top: `calc(50% + ${pos.y}px - 30px)`,
            }}
          >
            <div
              className={`w-[110px] px-3 py-3 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg border-primary/30' : 'bg-white/80 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? `0 0 25px ${metric.color}40` : 'none',
              }}
            >
              <div className='flex items-center gap-2 mb-2'>
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center'
                  style={{ backgroundColor: `${metric.color}15` }}
                >
                  <Icon className='w-4 h-4' style={{ color: metric.color }} />
                </div>
                <span className='text-xs font-medium text-foreground'>{metric.label}</span>
              </div>
              <div className='flex items-center gap-1'>
                <TrendingUp className='w-3 h-3 text-green-500' />
                <span className='text-xs font-semibold text-green-600'>
                  {metric.trend}
                </span>
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='urgentCareGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#E94E87' stopOpacity='0.2' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.5' />
            <stop offset='100%' stopColor='#E94E87' stopOpacity='0.2' />
          </linearGradient>
        </defs>
        {[{ x: -125, y: -60 }, { x: 125, y: -60 }, { x: -125, y: 60 }, { x: 125, y: 60 }].map((pos, idx) => (
          <line
            key={idx}
            x1='50%'
            y1='50%'
            x2={`calc(50% + ${pos.x}px)`}
            y2={`calc(50% + ${pos.y}px)`}
            stroke='url(#urgentCareGrad)'
            strokeWidth={idx === activeMetric ? '2' : '1'}
            strokeDasharray='6 4'
            className={`transition-opacity duration-500 ${idx === activeMetric ? 'opacity-80' : 'opacity-30'}`}
          />
        ))}
      </svg>
    </div>
  )
}

export default UrgentCareViz
