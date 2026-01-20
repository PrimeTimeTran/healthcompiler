import { useState, useEffect } from 'react'
import { Activity, Users, Target, Shield, TrendingUp, BarChart3 } from 'lucide-react'

const HealthPlansPayersViz = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  const metrics = [
    { icon: Users, label: 'Members', value: '142K', trend: '+2%', color: 'text-primary' },
    { icon: Target, label: 'Stars Rating', value: '4.2', trend: '+0.3', color: 'text-accent' },
    { icon: Activity, label: 'Utilization', value: '82%', trend: '-4%', color: 'text-blue-500' },
    { icon: Shield, label: 'Risk Score', value: '1.08', trend: 'stable', color: 'text-amber-500' },
    { icon: TrendingUp, label: 'PMPM', value: '$428', trend: '-3%', color: 'text-green-500' },
    { icon: BarChart3, label: 'Quality', value: '91%', trend: '+5%', color: 'text-violet-500' },
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
      <div className="relative z-10 bg-white rounded-2xl border border-border shadow-xl p-6 w-80">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-foreground text-sm">Plan Intelligence</h3>
            <p className="text-xs text-muted-foreground">Population Performance</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground">Live</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>

        {/* Risk Stratification View */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 mb-4">
          <p className="text-[10px] font-medium text-muted-foreground mb-3">Risk Stratification</p>
          <div className="flex gap-1 h-16 items-end">
            {[65, 48, 35, 28, 22, 15, 12, 8].map((height, idx) => (
              <div
                key={idx}
                className={`flex-1 rounded-t transition-all duration-500 ${
                  idx < 3 ? 'bg-green-400' : idx < 5 ? 'bg-amber-400' : 'bg-rose-400'
                }`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[9px] text-muted-foreground">
            <span>Low Risk</span>
            <span>High Risk</span>
          </div>
        </div>

        {/* Main Metric Display */}
        <div className="bg-slate-50 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-3">
            {(() => {
              const Icon = metrics[activeMetric].icon
              return <Icon className={`w-6 h-6 ${metrics[activeMetric].color}`} />
            })()}
            <div className="flex-1">
              <p className="text-lg font-bold text-foreground">{metrics[activeMetric].value}</p>
              <p className="text-[10px] text-muted-foreground">{metrics[activeMetric].label}</p>
            </div>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
              metrics[activeMetric].trend.startsWith('+') 
                ? 'bg-green-100 text-green-700' 
                : metrics[activeMetric].trend.startsWith('-')
                ? 'bg-amber-100 text-amber-700'
                : 'bg-slate-100 text-slate-700'
            }`}>
              {metrics[activeMetric].trend}
            </span>
          </div>
        </div>

        {/* Mini Metrics Grid */}
        <div className="grid grid-cols-6 gap-1.5">
          {metrics.map((metric, idx) => {
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
                <Icon className={`w-3.5 h-3.5 mx-auto ${idx === activeMetric ? metric.color : 'text-muted-foreground'}`} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Orbiting Metric Cards */}
      {metrics.map((metric, idx) => {
        const Icon = metric.icon
        const angle = (idx / metrics.length) * 360
        const radius = 190
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
          <linearGradient id="payerRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r="190"
          fill="none"
          stroke="url(#payerRingGradient)"
          strokeWidth="1"
          strokeDasharray="8 4"
          className="animate-spin"
          style={{ animationDuration: '30s' }}
        />
      </svg>
    </div>
  )
}

export default HealthPlansPayersViz
