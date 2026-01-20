import { useState, useEffect } from 'react'
import { Crown, Phone, Shield, Clock, UserCheck, Sparkles } from 'lucide-react'

const ConciergeMedicineViz = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  
  const metrics = [
    { icon: Phone, label: '24/7 Access', value: 'Always on', color: '#8B5CF6' },
    { icon: Shield, label: 'Wellness', value: 'Proactive', color: '#06B6D4' },
    { icon: Clock, label: 'Wait Time', value: '< 5 min', color: '#10B981' },
    { icon: UserCheck, label: 'Retention', value: '98%', color: '#E94E87' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* VIP Center Hub */}
      <div className='relative'>
        <div className='absolute inset-0 -m-6 rounded-full bg-gradient-to-r from-violet-500/15 to-amber-500/15 blur-2xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-violet-500/20 shadow-2xl p-6 w-[180px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-amber-500/5' />
          
          <div className='relative space-y-4 text-center'>
            <div className='w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-amber-500 flex items-center justify-center'>
              <Crown className='w-7 h-7 text-white' />
            </div>
            <div>
              <div className='text-sm font-semibold text-foreground'>VIP Experience</div>
              <div className='text-xs text-muted-foreground mt-1'>Premium analytics</div>
            </div>
            
            <div className='pt-3 border-t border-border/50'>
              <div className='flex items-center justify-center gap-2'>
                <Sparkles className='w-4 h-4 text-amber-500' />
                <span className='text-xs text-amber-600 font-medium'>White-glove care</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting Metrics */}
      {metrics.map((metric, idx) => {
        const Icon = metric.icon
        const angle = (idx * 90 - 45) * (Math.PI / 180)
        const radius = 150
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const isActive = idx === activeMetric

        return (
          <div
            key={metric.label}
            className={`absolute transition-all duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100'}`}
            style={{
              left: `calc(50% + ${x}px - 50px)`,
              top: `calc(50% + ${y}px - 35px)`,
            }}
          >
            <div
              className={`w-[100px] px-3 py-3 rounded-xl flex flex-col items-center gap-2 border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg border-violet-500/30' : 'bg-white/80 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? `0 0 25px ${metric.color}40` : 'none',
              }}
            >
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center'
                style={{ backgroundColor: `${metric.color}15` }}
              >
                <Icon className='w-5 h-5' style={{ color: metric.color }} />
              </div>
              <div className='text-center'>
                <div className='text-xs font-medium text-foreground'>{metric.label}</div>
                <div className='text-[10px] text-muted-foreground'>{metric.value}</div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Ring */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='conciergeGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#8B5CF6' stopOpacity='0.3' />
            <stop offset='50%' stopColor='#F59E0B' stopOpacity='0.5' />
            <stop offset='100%' stopColor='#06B6D4' stopOpacity='0.3' />
          </linearGradient>
        </defs>
        <circle
          cx='50%'
          cy='50%'
          r='150'
          fill='none'
          stroke='url(#conciergeGrad)'
          strokeWidth='2'
          strokeDasharray='8 6'
          className='opacity-50'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 225 225'
            to='360 225 225'
            dur='30s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
}

export default ConciergeMedicineViz
