import { useState, useEffect } from 'react'
import { DollarSign, Users, Activity, FileText, Heart, TrendingUp, Target } from 'lucide-react'

const ACOsViz = () => {
  const [activeFlow, setActiveFlow] = useState(0)
  
  const dataFlows = [
    { icon: FileText, label: 'Claims', color: '#E94E87' },
    { icon: Activity, label: 'Quality', color: '#8B5CF6' },
    { icon: Users, label: 'Population', color: '#06B6D4' },
    { icon: Heart, label: 'Outcomes', color: '#10B981' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % dataFlows.length)
    }, 1600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Left: Data Sources */}
      <div className='absolute left-0 top-1/2 -translate-y-1/2 space-y-4'>
        {dataFlows.map((flow, idx) => {
          const Icon = flow.icon
          const isActive = idx === activeFlow
          return (
            <div
              key={flow.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg scale-105 border-primary/30' : 'bg-white/60 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? `0 0 30px ${flow.color}30` : 'none',
              }}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${isActive ? 'scale-110' : ''}`}
                style={{ backgroundColor: `${flow.color}15` }}
              >
                <Icon className='w-5 h-5' style={{ color: flow.color }} />
              </div>
              <span className={`font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                {flow.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Flow Lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='acoFlowGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#E94E87' stopOpacity='0.3' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.8' />
            <stop offset='100%' stopColor='#E94E87' stopOpacity='0' />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path
              d={`M 155 ${130 + i * 55} Q 250 ${130 + i * 55} 280 225`}
              fill='none'
              stroke='url(#acoFlowGrad)'
              strokeWidth='2'
              strokeDasharray='8 4'
              className={`transition-opacity duration-500 ${i === activeFlow ? 'opacity-100' : 'opacity-20'}`}
            />
            {i === activeFlow && (
              <circle r='4' fill='#E94E87'>
                <animateMotion
                  dur='1s'
                  repeatCount='indefinite'
                  path={`M 155 ${130 + i * 55} Q 250 ${130 + i * 55} 280 225`}
                />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* Right: ACO Intelligence Hub */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2'>
        <div className='relative'>
          <div className='absolute inset-0 -m-4 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl animate-pulse' />
          
          <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[200px]'>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
            
            <div className='relative space-y-4'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                <Target className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-sm font-semibold text-foreground'>ACO Intelligence</div>
                <div className='text-xs text-muted-foreground mt-1'>Performance Analytics</div>
              </div>
              
              {/* Output Metrics */}
              <div className='space-y-2 pt-2 border-t border-border/50'>
                {[
                  { label: 'RAF Score', value: '+8.2%', positive: true },
                  { label: 'Quality', value: '96.4%', positive: true },
                  { label: 'Savings', value: '$2.1M', positive: true },
                ].map((metric, i) => (
                  <div
                    key={metric.label}
                    className='flex items-center justify-between text-xs animate-fade-in'
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <span className='text-muted-foreground'>{metric.label}</span>
                    <div className='flex items-center gap-1'>
                      <TrendingUp className='w-3 h-3 text-green-500' />
                      <span className='font-medium text-green-600'>{metric.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ACOsViz
