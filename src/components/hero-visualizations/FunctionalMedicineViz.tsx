import { useState, useEffect } from 'react'
import { Activity, Heart, TestTube, Pill, TrendingUp, User } from 'lucide-react'

const FunctionalMedicineViz = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  
  const metrics = [
    { icon: TestTube, label: 'Labs', value: '12 tracked', color: '#8B5CF6' },
    { icon: Pill, label: 'Supplements', value: '8 active', color: '#06B6D4' },
    { icon: Activity, label: 'Biomarkers', value: '24 monitored', color: '#E94E87' },
    { icon: Heart, label: 'Outcomes', value: 'Improving', color: '#10B981' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Patient Journey Center */}
      <div className='relative'>
        <div className='absolute inset-0 -m-6 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 blur-2xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[180px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
          
          <div className='relative space-y-4 text-center'>
            <div className='w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
              <User className='w-7 h-7 text-white' />
            </div>
            <div>
              <div className='text-sm font-semibold text-foreground'>Patient Journey</div>
              <div className='text-xs text-muted-foreground mt-1'>Holistic tracking</div>
            </div>
            
            <div className='pt-3 border-t border-border/50'>
              <div className='flex items-center justify-center gap-2'>
                <TrendingUp className='w-4 h-4 text-green-500' />
                <span className='text-xs text-green-600 font-medium'>Progress visible</span>
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
                isActive ? 'bg-white shadow-lg border-primary/30' : 'bg-white/80 border-border/50'
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
          <linearGradient id='fmGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#8B5CF6' stopOpacity='0.3' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.5' />
            <stop offset='100%' stopColor='#06B6D4' stopOpacity='0.3' />
          </linearGradient>
        </defs>
        <circle
          cx='50%'
          cy='50%'
          r='150'
          fill='none'
          stroke='url(#fmGrad)'
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

export default FunctionalMedicineViz
