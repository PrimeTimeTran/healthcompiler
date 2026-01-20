import { useState, useEffect } from 'react'
import { Users, Building2, TrendingUp, FileText, PieChart, Shield } from 'lucide-react'

const BrokersAdvisorsViz = () => {
  const [activeClient, setActiveClient] = useState(0)
  
  const clients = [
    { label: 'Employer A', employees: '250+', savings: '18%' },
    { label: 'Employer B', employees: '150+', savings: '22%' },
    { label: 'Employer C', employees: '500+', savings: '15%' },
  ]

  const insights = [
    { icon: TrendingUp, label: 'Cost Trends' },
    { icon: PieChart, label: 'Utilization' },
    { icon: Shield, label: 'Risk Profile' },
    { icon: FileText, label: 'Reports' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Advisor Hub */}
      <div className='relative'>
        <div className='absolute inset-0 -m-6 rounded-2xl bg-gradient-to-r from-primary/15 to-accent/15 blur-2xl animate-pulse' />
        
        <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[200px]'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
          
          <div className='relative space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                <Users className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-sm font-semibold text-foreground'>Advisor Portal</div>
                <div className='text-xs text-muted-foreground'>Client insights</div>
              </div>
            </div>
            
            <div className='pt-3 border-t border-border/50 space-y-2'>
              {insights.map((insight, i) => {
                const Icon = insight.icon
                return (
                  <div key={insight.label} className='flex items-center gap-2 text-xs text-muted-foreground'>
                    <Icon className='w-3 h-3 text-primary' />
                    <span>{insight.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Client Cards */}
      {clients.map((client, idx) => {
        const angle = (idx * 120 - 90) * (Math.PI / 180)
        const radius = 160
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const isActive = idx === activeClient

        return (
          <div
            key={client.label}
            className={`absolute transition-all duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100'}`}
            style={{
              left: `calc(50% + ${x}px - 60px)`,
              top: `calc(50% + ${y}px - 40px)`,
            }}
          >
            <div
              className={`w-[120px] px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                isActive ? 'bg-white shadow-lg border-primary/30' : 'bg-white/80 border-border/50'
              }`}
              style={{
                boxShadow: isActive ? '0 0 30px rgba(233, 78, 135, 0.3)' : 'none',
              }}
            >
              <div className='flex items-center gap-2 mb-2'>
                <Building2 className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className='text-xs font-medium text-foreground'>{client.label}</span>
              </div>
              <div className='space-y-1'>
                <div className='text-[10px] text-muted-foreground'>{client.employees} employees</div>
                <div className='flex items-center gap-1'>
                  <TrendingUp className='w-3 h-3 text-green-500' />
                  <span className='text-xs font-semibold text-green-600'>{client.savings} savings</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='brokerGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#E94E87' stopOpacity='0.2' />
            <stop offset='50%' stopColor='#E94E87' stopOpacity='0.6' />
            <stop offset='100%' stopColor='#E94E87' stopOpacity='0.2' />
          </linearGradient>
        </defs>
        <circle
          cx='50%'
          cy='50%'
          r='160'
          fill='none'
          stroke='url(#brokerGrad)'
          strokeWidth='1'
          strokeDasharray='8 6'
          className='opacity-40'
        />
      </svg>
    </div>
  )
}

export default BrokersAdvisorsViz
