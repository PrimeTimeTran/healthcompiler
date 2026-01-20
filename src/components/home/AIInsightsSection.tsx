import { Sparkles, TrendingUp, AlertTriangle, Activity } from 'lucide-react'

const annotations = [
  { label: 'Change detected', icon: TrendingUp, position: 'top-8 left-8', color: 'bg-accent text-accent-foreground' },
  { label: 'New risk surfaced', icon: AlertTriangle, position: 'top-24 right-12', color: 'bg-destructive/20 text-destructive' },
  { label: 'Engagement drop', icon: Activity, position: 'bottom-20 left-16', color: 'bg-primary/30 text-primary-foreground' },
]

export const AIInsightsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual (Dashboard with annotations) */}
          <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1">
            {/* Main dashboard card */}
            <div className="absolute inset-8 bg-card rounded-2xl shadow-elevated border border-border p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground">AI Summary</span>
                </div>
                <span className="text-xs text-muted-foreground">Updated 2m ago</span>
              </div>
              
              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Active Patients</p>
                  <p className="text-2xl font-bold text-foreground">359</p>
                  <p className="text-xs text-accent">↑ 12 this week</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Encounters</p>
                  <p className="text-2xl font-bold text-foreground">2,728</p>
                  <p className="text-xs text-accent">↑ 25 last 7 days</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Rx Orders</p>
                  <p className="text-2xl font-bold text-foreground">4,073</p>
                  <p className="text-xs text-muted-foreground">28.1% refills</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Engagement</p>
                  <p className="text-2xl font-bold text-foreground">94%</p>
                  <p className="text-xs text-accent">↑ 3% vs prior</p>
                </div>
              </div>
              
              {/* AI insight highlight */}
              <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Key insight detected</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      After-hours utilization increased 18% — driven by 3 high-engagement cohorts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating annotation callouts */}
            {annotations.map((annotation, index) => {
              const Icon = annotation.icon
              return (
                <div
                  key={annotation.label}
                  className={`absolute ${annotation.position} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex items-center gap-2 ${annotation.color} rounded-full px-3 py-1.5 shadow-lg`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium whitespace-nowrap">{annotation.label}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              AI Insights
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              From raw data to real understanding
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              AI continuously summarizes records, highlights what has changed since the last interaction, and surfaces risks, gaps, and opportunities across care delivery, cost drivers, and engagement patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
