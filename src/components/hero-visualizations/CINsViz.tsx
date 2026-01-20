import { useState, useEffect } from 'react'
import { Building2, Users, Activity, Network, CheckCircle, LineChart } from 'lucide-react'

const CINsViz = () => {
  const [activeNode, setActiveNode] = useState(0)
  
  const practices = [
    { icon: Building2, label: 'Practice A', color: '#8B5CF6' },
    { icon: Building2, label: 'Practice B', color: '#E94E87' },
    { icon: Building2, label: 'Practice C', color: '#06B6D4' },
    { icon: Building2, label: 'Practice D', color: '#10B981' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % practices.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Central Network Hub */}
      <div className='relative'>
        <div className='absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[180px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
          
          <div className='relative space-y-3'>
            <div className='w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
              <Network className='w-6 h-6 text-white' />
            </div>
            <div className='text-center'>
              <div className='text-sm font-semibold text-foreground'>CIN Hub</div>
              <div className='text-xs text-muted-foreground'>Unified Performance</div>
            </div>
            
            {/* Metrics */}
            <div className='pt-3 border-t border-border/50 space-y-2'>
              {[
                { label: 'Quality Score', value: '94%' },
                { label: 'Network Sync', value: 'Active' },
              ].map((metric, i) => (
                <div key={i} className='flex items-center justify-between text-xs'>
                  <span className='text-muted-foreground'>{metric.label}</span>
                  <span className='font-medium text-foreground'>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Practice Nodes */}
      {practices.map((practice, idx) => {
        const Icon = practice.icon
        const angle = (idx * 90 - 45) * (Math.PI / 180)
        const radius = 160
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const isActive = idx === activeNode

        return (
          <div
            key={practice.label}
            className={`absolute transition-all duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100'}`}
            style={{
              left: `calc(50% + ${x}px - 50px)`,
              top: `calc(50% + ${y}px - 35px)`,
            }}
          >
            <div
              className={`w-[100px] px-3 py-3 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg border-primary/30' : 'bg-white/80 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? `0 0 25px ${practice.color}40` : 'none',
              }}
            >
              <div className='flex flex-col items-center gap-2'>
                <div
                  className='w-10 h-10 rounded-lg flex items-center justify-center'
                  style={{ backgroundColor: `${practice.color}15` }}
                >
                  <Icon className='w-5 h-5' style={{ color: practice.color }} />
                </div>
                <span className='text-xs font-medium text-foreground'>{practice.label}</span>
                {isActive && (
                  <div className='flex items-center gap-1'>
                    <CheckCircle className='w-3 h-3 text-green-500' />
                    <span className='text-[10px] text-green-600'>Synced</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='cinGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#E94E87' stopOpacity='0.2' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.6' />
            <stop offset='100%' stopColor='#E94E87' stopOpacity='0.2' />
          </linearGradient>
        </defs>
        {practices.map((_, idx) => {
          const angle = (idx * 90 - 45) * (Math.PI / 180)
          const radius = 100
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const isActive = idx === activeNode
          
          return (
            <g key={idx}>
              <line
                x1='50%'
                y1='50%'
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke='url(#cinGrad)'
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray='6 4'
                className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}
              />
              {isActive && (
                <circle r='4' fill='#E94E87'>
                  <animateMotion
                    dur='1.2s'
                    repeatCount='indefinite'
                    path={`M ${225} ${225} L ${225 + x} ${225 + y}`}
                  />
                </circle>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default CINsViz
