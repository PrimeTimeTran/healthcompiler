import { 
  Building2, 
  TrendingUp, 
  Network, 
  Activity, 
  Brain, 
  Plug,
  Users,
  MessageSquare,
  Bot
} from 'lucide-react'

const capabilityCards = [
  {
    icon: Building2,
    title: 'Employer Intelligence',
    bullets: [
      'Total cost & PMPM visibility',
      'Utilization & leakage analysis',
      'Engagement & outcome tracking',
      'Stop-loss & risk insights'
    ],
    footer: 'Built for employers, advisors, and captives seeking clarity.'
  },
  {
    icon: TrendingUp,
    title: 'Measurable Outcomes',
    bullets: [
      'Gap-in-care visibility',
      'Preventive & chronic tracking',
      'Quality measures over time',
      'Outcome-based reporting'
    ],
    footer: 'Turn care delivery into measurable progress.'
  },
  {
    icon: Network,
    title: 'Network Intelligence',
    bullets: [
      'Multi-EHR data unification',
      'Attribution & population views',
      'Practice-level performance',
      'CIN & ACO readiness'
    ],
    footer: 'Designed for fragmented networks operating as one.'
  },
  {
    icon: Activity,
    title: 'Care Operations',
    bullets: [
      'Utilization patterns',
      'Referral & access signals',
      'Care coordination insights',
      'Real-time operational awareness'
    ],
    footer: 'See issues early — not after the quarter closes.'
  },
  {
    icon: Brain,
    title: 'AI-Driven Intelligence',
    bullets: [
      'Pattern detection across datasets',
      'Automated insights & alerts',
      'Cohort analysis at scale',
      'Decision support workflows'
    ],
    footer: 'AI that augments judgment — not replaces it.'
  },
  {
    icon: Plug,
    title: 'Built to Integrate',
    bullets: [
      'Custom data pipelines',
      'EHR, claims, labs, wearables, HRIS',
      'CRM & workflow integrations',
      'Purpose-built analytics'
    ],
    footer: 'We adapt to your ecosystem.'
  }
]

const workflowCards = [
  {
    icon: Users,
    title: 'Patient Engagement',
    bullets: [
      'Digital check-ins & surveys',
      'Engagement & adherence tracking',
      'Education & nudges',
      'Outcomes-linked engagement signals'
    ],
    note: 'Engagement tied to real outcomes, not vanity metrics.'
  },
  {
    icon: MessageSquare,
    title: 'CRM & Relationship Intelligence',
    bullets: [
      'Member & employer lifecycle views',
      'Attribution-aware CRM signals',
      'Referral & network intelligence',
      'Revenue & growth analytics'
    ],
    note: 'Understand relationships, not just records.'
  },
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    bullets: [
      'Insight-triggered workflows',
      'AI agents for outreach & follow-up',
      'Cohort monitoring & alerts',
      'Intelligent orchestration'
    ],
    note: 'AI that works quietly in the background — until it\'s needed.'
  }
]

export const InferaPlatformCapabilities = () => {
  return (
    <div className="relative">
      {/* Section 1 — Platform Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Infera™ — The Intelligence Layer for Modern Healthcare
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A unified data and analytics platform that connects care delivery, employer outcomes, 
              and value-based performance — without forcing stakeholders into rigid workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Infera Core Visual */}
      <section className="relative py-16 md:py-24 bg-slate-50/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Central Orb */}
            <div className="relative mb-16">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 blur-2xl animate-pulse" />
              
              {/* Gradient ring */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 p-1">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center shadow-lg">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Powered by</span>
                  <span className="text-2xl md:text-3xl font-display font-bold text-primary">Infera</span>
                </div>
              </div>

              {/* Animated pulse rings */}
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full border border-accent/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            </div>

            <p className="text-sm text-muted-foreground text-center max-w-md">
              Unified data, analytics, and automation across healthcare ecosystems
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Core Analytics Capabilities */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                           linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-14">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Core Analytics Capabilities
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to transform healthcare data into actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityCards.map((card, index) => (
              <div
                key={index}
                className="group p-6 bg-white border border-border/50 rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-3">
                  {card.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/80 italic border-t border-border/30 pt-3">
                  {card.footer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Activation & Workflows */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              From Insight to Action — Automatically
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Infera doesn't just surface insights. It activates them across patient, provider, and employer workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowCards.map((card, index) => (
              <div
                key={index}
                className="group p-6 bg-white border border-border/50 rounded-2xl hover:shadow-xl hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-3">
                  {card.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent/50 mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-accent/80 italic border-t border-border/30 pt-3">
                  {card.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Connector Strip */}
      <section className="relative py-8 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
            <div className="h-px w-8 md:w-16 bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="h-px w-8 md:w-16 bg-primary/30" />
            <div className="w-3 h-3 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            All workflows are powered by Infera's unified data foundation.
          </p>
        </div>
      </section>

      {/* Section 6 — Value Statement */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            One platform. Many use cases.
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Infera adapts to how healthcare actually operates — across employers, care teams, and value-based programs.
          </p>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/platform"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors"
            >
              Explore Platform Capabilities
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              See Infera in Action →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
