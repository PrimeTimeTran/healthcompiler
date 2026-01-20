import { Database, FileText, Activity, MessageSquare, Pill, FlaskConical } from 'lucide-react'

const dataSourceCards = [
  { icon: FileText, label: 'Clinical Notes', color: 'bg-primary/20 text-primary-foreground' },
  { icon: FlaskConical, label: 'Labs', color: 'bg-accent/20 text-accent-foreground' },
  { icon: Pill, label: 'Pharmacy', color: 'bg-secondary text-secondary-foreground' },
  { icon: Activity, label: 'Devices', color: 'bg-muted text-muted-foreground' },
  { icon: MessageSquare, label: 'Engagement', color: 'bg-primary/30 text-primary-foreground' },
]

export const UnifiedRecordSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Unified Record
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              One longitudinal, normalized source of truth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              One longitudinal, normalized record for every member—spanning clinical notes, labs, pharmacy, devices, claims, and engagement. Built to support analytics, reporting, automation, and real-world decision-making.
            </p>
          </div>

          {/* Right - Visual */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Stacked cards on left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-3">
              {dataSourceCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.label}
                    className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 shadow-card border border-border animate-fade-in"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: `translateX(${index * 8}px)`
                    }}
                  >
                    <div className={`w-8 h-8 rounded-lg ${card.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{card.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Connection lines (SVG) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 400"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Animated connection paths */}
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M 180 ${80 + i * 60} Q 280 ${120 + i * 40} 350 200`}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  opacity={0.4}
                  className="animate-pulse-slow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
              
              {/* Flowing dots */}
              {[0, 1, 2, 3, 4].map((i) => (
                <circle
                  key={`dot-${i}`}
                  r="4"
                  fill="hsl(var(--accent))"
                  opacity={0.8}
                >
                  <animateMotion
                    dur={`${2 + i * 0.3}s`}
                    repeatCount="indefinite"
                    path={`M 180 ${80 + i * 60} Q 280 ${120 + i * 40} 350 200`}
                  />
                </circle>
              ))}
            </svg>

            {/* Central unified record card */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] lg:w-[240px]">
              <div className="bg-card rounded-2xl p-6 shadow-elevated border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide">Unified</p>
                    <p className="text-sm font-bold text-foreground">Member Record</p>
                  </div>
                </div>
                
                {/* Mock record preview */}
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded w-full" />
                  <div className="h-2 bg-muted rounded w-4/5" />
                  <div className="h-2 bg-muted rounded w-3/5" />
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-muted-foreground">Live sync active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
