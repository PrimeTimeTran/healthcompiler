import { Bell, Clock, Pill, Activity, AlertCircle, MessageSquare } from 'lucide-react'

const signals = [
  { 
    icon: Clock, 
    label: 'After-hours message spike',
    severity: 'warning',
    value: '+42%',
    time: '2m ago'
  },
  { 
    icon: Activity, 
    label: 'Utilization spike detected',
    severity: 'critical',
    value: '↑ 28',
    time: '5m ago'
  },
  { 
    icon: Pill, 
    label: 'Prescription pattern shift',
    severity: 'info',
    value: '133 refills',
    time: '12m ago'
  },
  { 
    icon: MessageSquare, 
    label: 'Engagement load rising',
    severity: 'warning',
    value: '6,720 msgs',
    time: '18m ago'
  },
]

const getSeverityStyles = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'border-l-destructive bg-destructive/5'
    case 'warning':
      return 'border-l-accent bg-accent/5'
    default:
      return 'border-l-primary bg-primary/5'
  }
}

export const SmartSignalsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Smart Signals
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              Alerts without the noise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Targeted signals and alerts for material changes and priority events—after-hours utilization, rising engagement load, prescription patterns, utilization spikes. No dashboards to babysit. Just what matters.
            </p>
          </div>

          {/* Right - Signal cards */}
          <div className="space-y-4">
            {signals.map((signal, index) => {
              const Icon = signal.icon
              return (
                <div
                  key={signal.label}
                  className={`flex items-center gap-4 bg-card rounded-xl p-4 shadow-card border border-border border-l-4 ${getSeverityStyles(signal.severity)} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground truncate">{signal.label}</p>
                      {signal.severity === 'critical' && (
                        <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{signal.time}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-lg font-bold text-foreground">{signal.value}</p>
                  </div>
                </div>
              )
            })}
            
            {/* Bell indicator */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-accent" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
              </div>
              <span className="text-sm text-muted-foreground">Real-time signal monitoring active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
