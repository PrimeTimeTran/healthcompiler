import { Brain, BarChart3, FileText, Zap } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Population-Level Intelligence',
    description: 'Aggregate insights across your entire patient population with automated risk stratification.',
  },
  {
    icon: BarChart3,
    title: 'Operational & Engagement Analytics',
    description: 'Real-time visibility into practice operations, patient engagement, and resource utilization.',
  },
  {
    icon: FileText,
    title: 'Employer & Plan-Ready Reporting',
    description: 'Defensible, audit-safe reports designed for employer clients and health plan stakeholders.',
  },
  {
    icon: Zap,
    title: 'AI-Driven Automation Hooks',
    description: 'Trigger workflows, alerts, and actions automatically based on clinical and operational signals.',
  },
]

export const PlatformCapabilitiesGrid = () => {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Everything you need to operationalize healthcare data
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div
                key={capability.title}
                className="group bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
