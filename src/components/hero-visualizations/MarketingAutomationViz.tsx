import { useState, useEffect } from 'react'
import { Mail, MessageSquare, Send, Users, TrendingUp, Bell } from 'lucide-react'

const MarketingAutomationViz = () => {
  const [activeStep, setActiveStep] = useState(0)
  
  const channels = [
    { icon: Mail, label: 'Email', color: '#8B5CF6' },
    { icon: MessageSquare, label: 'SMS', color: '#06B6D4' },
    { icon: Bell, label: 'Push', color: '#F97316' },
  ]

  const automations = [
    { label: 'Welcome Series', status: 'active' },
    { label: 'Follow-up Reminder', status: 'active' },
    { label: 'Re-engagement', status: 'pending' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % channels.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Central Hub */}
      <div className='relative'>
        <div className='absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[220px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
          
          <div className='relative space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                <Send className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-sm font-semibold text-foreground'>Campaign Engine</div>
                <div className='text-xs text-muted-foreground'>Automated outreach</div>
              </div>
            </div>

            <div className='space-y-2 pt-3 border-t border-border/50'>
              {automations.map((auto, i) => (
                <div
                  key={auto.label}
                  className='flex items-center justify-between text-xs'
                >
                  <span className='text-foreground'>{auto.label}</span>
                  <div className={`w-2 h-2 rounded-full ${auto.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting Channels */}
      {channels.map((channel, idx) => {
        const Icon = channel.icon
        const angle = (idx * 120 - 90) * (Math.PI / 180)
        const radius = 140
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const isActive = idx === activeStep

        return (
          <div
            key={channel.label}
            className={`absolute transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
            style={{
              left: `calc(50% + ${x}px - 28px)`,
              top: `calc(50% + ${y}px - 28px)`,
            }}
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg border-primary/30' : 'bg-white/80 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? `0 0 25px ${channel.color}40` : 'none',
              }}
            >
              <Icon className='w-6 h-6' style={{ color: channel.color }} />
            </div>
            <div className={`text-xs text-center mt-2 font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
              {channel.label}
            </div>
          </div>
        )
      })}

      {/* Connection Lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='marketingGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#E94E87' stopOpacity='0.2' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.6' />
            <stop offset='100%' stopColor='#E94E87' stopOpacity='0.2' />
          </linearGradient>
        </defs>
        <circle
          cx='50%'
          cy='50%'
          r='140'
          fill='none'
          stroke='url(#marketingGrad)'
          strokeWidth='1'
          strokeDasharray='6 4'
          className='opacity-40'
        />
      </svg>

      {/* Results Indicator */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 border border-border/50 shadow-sm'>
        <Users className='w-4 h-4 text-muted-foreground' />
        <span className='text-xs text-muted-foreground'>Leads captured automatically</span>
        <TrendingUp className='w-4 h-4 text-green-500' />
      </div>
    </div>
  )
}

export default MarketingAutomationViz
