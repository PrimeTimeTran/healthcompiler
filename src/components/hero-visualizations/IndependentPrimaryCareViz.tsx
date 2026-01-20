import { useState, useEffect } from 'react'
import { Activity, MessageSquare, Pill, Heart, TrendingUp, Users } from 'lucide-react'

const IndependentPrimaryCareViz = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  const metrics = [
    { icon: Activity, label: 'Encounters', value: '847', trend: '+12%', color: 'text-primary' },
    { icon: MessageSquare, label: 'After-Hours', value: '156', trend: '-8%', color: 'text-accent' },
    { icon: Pill, label: 'Rx Patterns', value: '423', trend: '+5%', color: 'text-green-500' },
    { icon: Heart, label: 'Quality Score', value: '94%', trend: '+3%', color: 'text-rose-500' },
    { icon: TrendingUp, label: 'Performance', value: 'A+', trend: 'stable', color: 'text-blue-500' },
    { icon: Users, label: 'Engagement', value: '78%', trend: '+15%', color: 'text-violet-500' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [metrics.length])

  return (
    <div className="relative h-[450px] flex items-center justify-center">
      {/* Central Dashboard Card */}
      <div className="relative z-10 bg-white rounded-2xl border border-border shadow-xl p-6 w-72">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-foreground text-sm">IPC Intelligence</h3>
            <p className="text-xs text-muted-foreground">Value-Based Analytics</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground">Live</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>

        {/* Main Metric Display */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3">
            {(() => {
              const Icon = metrics[activeMetric].icon
              return <Icon className={`w-8 h-8 ${metrics[activeMetric].color}`} />
            })()}
            <div>
              <p className="text-2xl font-bold text-foreground">{metrics[activeMetric].value}</p>
              <p className="text-xs text-muted-foreground">{metrics[activeMetric].label}</p>
            </div>
            <span className={`ml-auto text-xs font-medium px-2 py-1 rounded-full ${
              metrics[activeMetric].trend.startsWith('+') 
                ? 'bg-green-100 text-green-700' 
                : metrics[activeMetric].trend.startsWith('-')
                ? 'bg-red-100 text-red-700'
                : 'bg-slate-100 text-slate-700'
            }`}>
              {metrics[activeMetric].trend}
            </span>
          </div>
        </div>

        {/* Mini Metrics Grid */}
        <div className="grid grid-cols-3 gap-2">
          {metrics.slice(0, 6).map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div
                key={idx}
                className={`p-2 rounded-lg text-center transition-all duration-300 ${
                  idx === activeMetric 
                    ? 'bg-primary/10 border border-primary/30' 
                    : 'bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 mx-auto mb-1 ${idx === activeMetric ? metric.color : 'text-muted-foreground'}`} />
                <p className="text-[10px] text-muted-foreground truncate">{metric.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Orbiting Metric Cards */}
      {metrics.map((metric, idx) => {
        const Icon = metric.icon
        const angle = (idx / metrics.length) * 360
        const radius = 180
        const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius
        const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius

        return (
          <div
            key={idx}
            className={`absolute transition-all duration-500 ${
              idx === activeMetric ? 'scale-110 z-20' : 'scale-100 opacity-60'
            }`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className={`bg-white rounded-xl border shadow-lg p-3 flex items-center gap-2 ${
              idx === activeMetric ? 'border-primary/50' : 'border-border'
            }`}>
              <Icon className={`w-4 h-4 ${metric.color}`} />
              <div>
                <p className="text-xs font-semibold text-foreground">{metric.value}</p>
                <p className="text-[10px] text-muted-foreground">{metric.label}</p>
              </div>
            </div>
          </div>
        )
      })}

      {/* Connection Ring */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <defs>
          <linearGradient id="ipcRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r="180"
          fill="none"
          stroke="url(#ipcRingGradient)"
          strokeWidth="1"
          strokeDasharray="8 4"
          className="animate-spin"
          style={{ animationDuration: '30s' }}
        />
      </svg>
    </div>
  )
}

export default IndependentPrimaryCareViz
