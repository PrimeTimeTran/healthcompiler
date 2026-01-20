import { useState, useEffect } from 'react'
import { Shield, Activity, FileText, Users, Eye, TrendingUp, AlertTriangle } from 'lucide-react'

const PayorsViz = () => {
  const [activeLayer, setActiveLayer] = useState(0)
  
  const layers = [
    { icon: FileText, label: 'Claims Data', color: '#E94E87', level: 0 },
    { icon: Activity, label: 'Clinical Context', color: '#8B5CF6', level: 1 },
    { icon: Users, label: 'Provider Network', color: '#06B6D4', level: 2 },
    { icon: Eye, label: 'Risk Visibility', color: '#10B981', level: 3 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % layers.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative h-[450px] flex items-center justify-center'>
      {/* Stacked Layers Visualization */}
      <div className='relative'>
        {layers.map((layer, idx) => {
          const Icon = layer.icon
          const isActive = idx <= activeLayer
          const offset = idx * 20
          
          return (
            <div
              key={layer.label}
              className={`absolute transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-40'}`}
              style={{
                left: `${-100 + offset}px`,
                top: `${-80 + offset}px`,
                zIndex: 4 - idx,
              }}
            >
              <div
                className={`w-[220px] px-4 py-4 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                  idx === activeLayer ? 'bg-white shadow-xl border-primary/30 scale-105' : 'bg-white/90 border-border/50'
                }`}
                style={{
                  boxShadow: idx === activeLayer ? `0 8px 30px ${layer.color}30` : '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                <div className='flex items-center gap-3'>
                  <div
                    className='w-10 h-10 rounded-lg flex items-center justify-center'
                    style={{ backgroundColor: `${layer.color}15` }}
                  >
                    <Icon className='w-5 h-5' style={{ color: layer.color }} />
                  </div>
                  <div>
                    <span className='text-sm font-medium text-foreground block'>{layer.label}</span>
                    {idx === activeLayer && (
                      <span className='text-xs text-muted-foreground'>Active analysis</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Right Side: Insights Panel */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2'>
        <div className='relative'>
          <div className='absolute inset-0 -m-4 rounded-2xl bg-gradient-to-r from-primary/15 to-accent/15 blur-2xl animate-pulse' />
          
          <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-5 w-[180px]'>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
            
            <div className='relative space-y-3'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                  <Shield className='w-5 h-5 text-white' />
                </div>
                <div>
                  <div className='text-xs font-semibold text-foreground'>Payer Insight</div>
                  <div className='text-[10px] text-muted-foreground'>Real-time view</div>
                </div>
              </div>
              
              {/* Insights List */}
              <div className='space-y-2 pt-2 border-t border-border/50'>
                {[
                  { label: 'HCC Accuracy', status: 'improved', icon: TrendingUp },
                  { label: 'Risk Gaps', status: '3 found', icon: AlertTriangle },
                  { label: 'Network Align', status: '94%', icon: Users },
                ].map((insight, i) => (
                  <div
                    key={insight.label}
                    className='flex items-center justify-between text-xs animate-fade-in'
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className='flex items-center gap-1.5'>
                      <insight.icon className='w-3 h-3 text-primary' />
                      <span className='text-muted-foreground'>{insight.label}</span>
                    </div>
                    <span className='font-medium text-foreground'>{insight.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Lines */}
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <defs>
          <linearGradient id='payorGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#8B5CF6' stopOpacity='0.3' />
            <stop offset='100%' stopColor='#E94E87' stopOpacity='0.6' />
          </linearGradient>
        </defs>
        <path
          d='M 180 225 Q 280 225 320 225'
          fill='none'
          stroke='url(#payorGrad)'
          strokeWidth='2'
          strokeDasharray='6 4'
          className='opacity-60'
        />
        <circle r='4' fill='#E94E87'>
          <animateMotion
            dur='2s'
            repeatCount='indefinite'
            path='M 180 225 Q 280 225 320 225'
          />
        </circle>
      </svg>
    </div>
  )
}

export default PayorsViz
