import { useState, useEffect } from 'react'
import { Baby, Calendar, Syringe, TrendingUp, Heart, Bell } from 'lucide-react'

const PediatricsViz = () => {
  const [activeItem, setActiveItem] = useState(0)
  
  const careItems = [
    { icon: Syringe, label: 'Immunizations', status: 'Up to date', color: '#10B981' },
    { icon: Calendar, label: 'Well Visits', status: '2 scheduled', color: '#8B5CF6' },
    { icon: TrendingUp, label: 'Growth', status: 'On track', color: '#06B6D4' },
    { icon: Bell, label: 'Reminders', status: '3 pending', color: '#F97316' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % careItems.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Central Patient Hub */}
      <div className='relative'>
        <div className='absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-violet-400/20 blur-3xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[180px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-50 to-violet-50' />
          
          <div className='relative space-y-4 text-center'>
            <div className='w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center'>
              <Baby className='w-7 h-7 text-white' />
            </div>
            <div>
              <div className='text-sm font-semibold text-foreground'>Family Dashboard</div>
              <div className='text-xs text-muted-foreground mt-1'>Pediatric care tracking</div>
            </div>
            
            <div className='pt-3 border-t border-border/50'>
              <div className='flex items-center justify-center gap-2'>
                <Heart className='w-4 h-4 text-primary' />
                <span className='text-xs text-muted-foreground'>Proactive care</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Items */}
      {careItems.map((item, idx) => {
        const Icon = item.icon
        const angle = (idx * 90) * (Math.PI / 180)
        const radius = 145
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const isActive = idx === activeItem

        return (
          <div
            key={item.label}
            className={`absolute transition-all duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100'}`}
            style={{
              left: `calc(50% + ${x}px - 55px)`,
              top: `calc(50% + ${y}px - 35px)`,
            }}
          >
            <div
              className={`w-[110px] px-3 py-3 rounded-xl flex flex-col items-center gap-2 border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg border-primary/30' : 'bg-white/80 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? `0 0 25px ${item.color}40` : 'none',
              }}
            >
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center'
                style={{ backgroundColor: `${item.color}15` }}
              >
                <Icon className='w-5 h-5' style={{ color: item.color }} />
              </div>
              <div className='text-center'>
                <div className='text-xs font-medium text-foreground'>{item.label}</div>
                <div className='text-[10px] text-muted-foreground'>{item.status}</div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='pedGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#06B6D4' stopOpacity='0.4' />
            <stop offset='100%' stopColor='#8B5CF6' stopOpacity='0.4' />
          </linearGradient>
        </defs>
        {careItems.map((_, idx) => {
          const angle = (idx * 90) * (Math.PI / 180)
          const radius = 145
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const isActive = idx === activeItem
          
          return (
            <line
              key={idx}
              x1='50%'
              y1='50%'
              x2={`calc(50% + ${x}px)`}
              y2={`calc(50% + ${y}px)`}
              stroke='url(#pedGrad)'
              strokeWidth={isActive ? '2' : '1'}
              strokeDasharray='4 4'
              className={`transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-30'}`}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default PediatricsViz
