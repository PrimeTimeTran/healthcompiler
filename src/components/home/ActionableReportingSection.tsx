import { FileBarChart, TrendingUp, Users, Activity } from 'lucide-react'

const reportMetrics = [
  { label: 'Engagement Ratio', value: '62.3%', trend: '+4.2%', positive: true },
  { label: 'Touch Rate', value: '78.9%', trend: '+2.1%', positive: true },
  { label: 'Utilization', value: '21.1%', trend: '-1.8%', positive: true },
  { label: 'After-Hours', value: '94%', trend: '+8.3%', positive: false },
]

export const ActionableReportingSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual (Report cards) */}
          <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1">
            {/* Main report card */}
            <div className="absolute inset-4 bg-card rounded-2xl shadow-elevated border border-border p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <FileBarChart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Employer Report</p>
                    <p className="text-xs text-muted-foreground">Q4 2024 Performance</p>
                  </div>
                </div>
                <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-medium">
                  Audit-Ready
                </span>
              </div>
              
              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {reportMetrics.map((metric) => (
                  <div key={metric.label} className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                    <div className="flex items-end gap-2">
                      <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                      <span className={`text-xs font-medium ${metric.positive ? 'text-accent' : 'text-destructive'}`}>
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chart placeholder */}
              <div className="bg-muted/30 rounded-xl p-4 h-24">
                <div className="flex items-end justify-between h-full gap-2">
                  {[40, 55, 45, 70, 60, 80, 75, 85, 70, 90, 82, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t opacity-80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating status badges */}
            <div className="absolute -top-2 right-8 flex items-center gap-2 bg-card rounded-full px-3 py-1.5 shadow-lg border border-border animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-foreground">Export Ready</span>
            </div>
            
            <div className="absolute bottom-4 left-0 flex items-center gap-2 bg-card rounded-full px-3 py-1.5 shadow-lg border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Users className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium text-foreground">Employer-Approved</span>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Actionable Reporting
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              Built for employers, operators, and care teams
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Clean, defensible reporting that translates complex healthcare activity into clarity. Employer-ready, audit-safe, and outcome-focused—so performance can be measured, explained, and improved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
