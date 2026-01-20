import { useState, useEffect } from 'react'
import { Phone, MessageSquare, Calendar, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

const AICallTriagingViz = () => {
  const [activeCall, setActiveCall] = useState(0)
  
  const callTypes = [
    { icon: Calendar, label: 'Scheduling', color: '#8B5CF6', route: 'Front Desk' },
    { icon: AlertCircle, label: 'Urgent', color: '#EF4444', route: 'Clinical Triage' },
    { icon: MessageSquare, label: 'Refill', color: '#06B6D4', route: 'Pharmacy' },
    { icon: Phone, label: 'Follow-up', color: '#E94E87', route: 'Care Team' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCall((prev) => (prev + 1) % callTypes.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Incoming Calls */}
      <div className='absolute left-0 top-1/2 -translate-y-1/2 space-y-4'>
        {callTypes.map((call, idx) => {
          const Icon = call.icon
          const isActive = idx === activeCall
          return (
            <div
              key={call.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                isActive
                  ? 'bg-white shadow-lg scale-105 border-primary/30'
                  : 'bg-white/60 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? `0 0 30px ${call.color}30` : 'none',
              }}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'scale-110' : ''
                }`}
                style={{ backgroundColor: `${call.color}15` }}
              >
                <Icon className='w-5 h-5' style={{ color: call.color }} />
              </div>
              <span className={`font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                {call.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Flow lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='callFlowGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#E94E87' stopOpacity='0.3' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.8' />
            <stop offset='100%' stopColor='#E94E87' stopOpacity='0' />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path
              d={`M 160 ${120 + i * 55} Q 250 ${120 + i * 55} 280 225`}
              fill='none'
              stroke='url(#callFlowGrad)'
              strokeWidth='2'
              strokeDasharray='8 4'
              className={`transition-opacity duration-500 ${i === activeCall ? 'opacity-100' : 'opacity-20'}`}
            />
            {i === activeCall && (
              <circle r='4' fill='#E94E87'>
                <animateMotion
                  dur='1s'
                  repeatCount='indefinite'
                  path={`M 160 ${120 + i * 55} Q 250 ${120 + i * 55} 280 225`}
                />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* AI Triage Engine */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2'>
        <div className='relative'>
          <div className='absolute inset-0 -m-4 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl animate-pulse' />
          <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[200px]'>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
            <div className='relative space-y-4'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                <Phone className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-sm font-semibold text-foreground'>AI Triage</div>
                <div className='text-xs text-muted-foreground mt-1'>Routing calls</div>
              </div>
              <div className='space-y-2 pt-2 border-t border-border/50'>
                {callTypes.map((call, i) => (
                  <div
                    key={call.label}
                    className={`flex items-center gap-2 text-xs transition-all duration-300 ${
                      i === activeCall ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    <ArrowRight className='w-3 h-3 text-primary' />
                    <span className='text-muted-foreground'>{call.route}</span>
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

export default AICallTriagingViz
