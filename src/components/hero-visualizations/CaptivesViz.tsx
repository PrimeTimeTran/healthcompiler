import { useState, useEffect } from 'react'
import { TrendingUp, DollarSign, Users, AlertTriangle, BarChart3, PieChart } from 'lucide-react'

const CaptivesViz = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  
  const orbitingMetrics = [
    { icon: DollarSign, label: 'Cost Trends', value: '-8.2%', color: 'text-green-500' },
    { icon: AlertTriangle, label: 'Large Claims', value: '12', color: 'text-amber-500' },
    { icon: Users, label: 'Pool Members', value: '2,847', color: 'text-primary' },
    { icon: TrendingUp, label: 'Risk Score', value: '0.94', color: 'text-blue-500' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % orbitingMetrics.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Central Dashboard */}
      <div className='relative'>
        <div className='absolute inset-0 -m-12 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 blur-3xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[200px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
          
          <div className='relative space-y-4'>
            {/* Header */}
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                <PieChart className='w-5 h-5 text-white' />
              </div>
              <div>
                <div className='text-xs font-semibold text-foreground'>Pool Analytics</div>
                <div className='text-[10px] text-muted-foreground'>Real-time view</div>
              </div>
            </div>
            
            {/* Mini Chart */}
            <div className='h-16 flex items-end gap-1'>
              {[65, 78, 52, 88, 70, 95, 82].map((height, idx) => (
                <div
                  key={idx}
                  className='flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary/20 transition-all duration-500'
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            
            {/* Stats Row */}
            <div className='grid grid-cols-2 gap-2 pt-2 border-t border-border/50'>
              <div className='text-center'>
                <div className='text-lg font-bold text-foreground'>$2.4M</div>
                <div className='text-[9px] text-muted-foreground'>Pool Spend</div>
              </div>
              <div className='text-center'>
                <div className='text-lg font-bold text-emerald-600'>↓12%</div>
                <div className='text-[9px] text-muted-foreground'>vs Benchmark</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting Metric Cards */}
      {orbitingMetrics.map((metric, idx) => {
        const angle = (idx * 90 - 45) * (Math.PI / 180)
        const radius = 155
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
                boxShadow: isActive ? '0 0 25px rgba(233, 78, 135, 0.35)' : 'none',
              }}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isActive ? 'bg-primary/15' : 'bg-muted'}`}>
                <metric.icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              <div className='text-center'>
                <div className={`text-sm font-bold ${metric.color}`}>{metric.value}</div>
                <div className='text-[9px] text-muted-foreground'>{metric.label}</div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Ring */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='captivePoolGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#8B5CF6' stopOpacity='0.3' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.5' />
            <stop offset='100%' stopColor='#06B6D4' stopOpacity='0.3' />
          </linearGradient>
        </defs>
        <circle
          cx='50%'
          cy='50%'
          r='155'
          fill='none'
          stroke='url(#captivePoolGrad)'
          strokeWidth='2'
          strokeDasharray='10 6'
          className='opacity-50'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 225 225'
            to='360 225 225'
            dur='40s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>

      {/* Bottom Label */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-border/50 shadow-sm'>
        <BarChart3 className='w-4 h-4 text-primary' />
        <span className='text-xs text-muted-foreground'>Pool-level intelligence</span>
      </div>
    </div>
  )
}

export default CaptivesViz
