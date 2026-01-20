import { useState, useEffect } from 'react'
import { Building2, Link2, Shield, BarChart3, Users, Eye } from 'lucide-react'

const CaptivesViz = () => {
  const [activeMember, setActiveMember] = useState(0)
  
  const members = [
    { label: 'Member A', status: 'Connected' },
    { label: 'Member B', status: 'Connected' },
    { label: 'Member C', status: 'Connected' },
    { label: 'Member D', status: 'Connected' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMember((prev) => (prev + 1) % members.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Central Governance Hub */}
      <div className='relative'>
        <div className='absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 blur-3xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[180px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
          
          <div className='relative space-y-4 text-center'>
            <div className='w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
              <Shield className='w-7 h-7 text-white' />
            </div>
            <div>
              <div className='text-sm font-semibold text-foreground'>Captive Governance</div>
              <div className='text-xs text-muted-foreground mt-1'>Unified oversight</div>
            </div>
            
            <div className='pt-3 border-t border-border/50 space-y-1'>
              <div className='flex items-center justify-center gap-2'>
                <Eye className='w-3 h-3 text-primary' />
                <span className='text-[10px] text-muted-foreground'>Visibility across members</span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <BarChart3 className='w-3 h-3 text-primary' />
                <span className='text-[10px] text-muted-foreground'>Comparable performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Nodes */}
      {members.map((member, idx) => {
        const angle = (idx * 90 - 45) * (Math.PI / 180)
        const radius = 155
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const isActive = idx === activeMember

        return (
          <div
            key={member.label}
            className={`absolute transition-all duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100'}`}
            style={{
              left: `calc(50% + ${x}px - 45px)`,
              top: `calc(50% + ${y}px - 35px)`,
            }}
          >
            <div
              className={`w-[90px] px-3 py-3 rounded-xl flex flex-col items-center gap-2 border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg border-primary/30' : 'bg-white/80 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? '0 0 25px rgba(233, 78, 135, 0.35)' : 'none',
              }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-primary/15' : 'bg-muted'}`}>
                <Building2 className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              <div className='text-center'>
                <div className='text-xs font-medium text-foreground'>{member.label}</div>
                <div className='flex items-center gap-1 justify-center'>
                  <Link2 className='w-2 h-2 text-green-500' />
                  <span className='text-[9px] text-green-600'>{member.status}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Ring */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='captiveGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
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
          stroke='url(#captiveGrad)'
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

      {/* Data flow indicator */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-border/50 shadow-sm'>
        <Users className='w-4 h-4 text-muted-foreground' />
        <span className='text-xs text-muted-foreground'>Shared insight without disruption</span>
      </div>
    </div>
  )
}

export default CaptivesViz
