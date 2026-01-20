import { useState, useEffect } from 'react'
import { Building2, Users, Heart, DollarSign, Shield, TrendingUp } from 'lucide-react'

const EmployersViz = () => {
  const [activePillar, setActivePillar] = useState(0)
  
  const pillars = [
    { icon: Users, label: 'Engagement', value: '87%', color: '#8B5CF6' },
    { icon: Heart, label: 'Utilization', value: 'Optimized', color: '#E94E87' },
    { icon: DollarSign, label: 'Cost Control', value: '-15%', color: '#10B981' },
    { icon: Shield, label: 'Compliance', value: 'Active', color: '#06B6D4' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Central Employer Hub */}
      <div className='relative'>
        <div className='absolute inset-0 -m-6 rounded-2xl bg-gradient-to-r from-primary/15 to-accent/15 blur-2xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[180px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
          
          <div className='relative space-y-4 text-center'>
            <div className='w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
              <Building2 className='w-7 h-7 text-white' />
            </div>
            <div>
              <div className='text-sm font-semibold text-foreground'>Employer View</div>
              <div className='text-xs text-muted-foreground mt-1'>Fiduciary oversight</div>
            </div>
            
            <div className='pt-3 border-t border-border/50'>
              <div className='flex items-center justify-center gap-2'>
                <TrendingUp className='w-4 h-4 text-green-500' />
                <span className='text-xs text-green-600 font-medium'>All metrics visible</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      {pillars.map((pillar, idx) => {
        const Icon = pillar.icon
        const positions = [
          { x: -160, y: 0 },
          { x: 0, y: -130 },
          { x: 160, y: 0 },
          { x: 0, y: 130 },
        ]
        const pos = positions[idx]
        const isActive = idx === activePillar

        return (
          <div
            key={pillar.label}
            className={`absolute transition-all duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100'}`}
            style={{
              left: `calc(50% + ${pos.x}px - 50px)`,
              top: `calc(50% + ${pos.y}px - 35px)`,
            }}
          >
            <div
              className={`w-[100px] px-3 py-3 rounded-xl flex flex-col items-center gap-2 border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg border-primary/30' : 'bg-white/80 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? `0 0 25px ${pillar.color}40` : 'none',
              }}
            >
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center'
                style={{ backgroundColor: `${pillar.color}15` }}
              >
                <Icon className='w-5 h-5' style={{ color: pillar.color }} />
              </div>
              <div className='text-center'>
                <div className='text-xs font-medium text-foreground'>{pillar.label}</div>
                <div className='text-[10px] font-semibold' style={{ color: pillar.color }}>{pillar.value}</div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='empGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#8B5CF6' stopOpacity='0.3' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.5' />
            <stop offset='100%' stopColor='#06B6D4' stopOpacity='0.3' />
          </linearGradient>
        </defs>
        {[{ x: -110, y: 0 }, { x: 0, y: -80 }, { x: 110, y: 0 }, { x: 0, y: 80 }].map((pos, idx) => (
          <line
            key={idx}
            x1='50%'
            y1='50%'
            x2={`calc(50% + ${pos.x}px)`}
            y2={`calc(50% + ${pos.y}px)`}
            stroke='url(#empGrad)'
            strokeWidth={idx === activePillar ? '2' : '1'}
            strokeDasharray='6 4'
            className={`transition-opacity duration-500 ${idx === activePillar ? 'opacity-80' : 'opacity-30'}`}
          />
        ))}
      </svg>
    </div>
  )
}

export default EmployersViz
