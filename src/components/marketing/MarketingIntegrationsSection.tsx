import { useState, useEffect } from 'react'
import { Shield } from 'lucide-react'

const MarketingIntegrationsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const integrations = [
    // CRM & Marketing
    { name: 'Salesforce', category: 'CRM & Marketing' },
    { name: 'HubSpot', category: 'CRM & Marketing' },
    { name: 'GoHighLevel', category: 'CRM & Marketing' },
    // Scheduling & Practice Ops
    { name: 'Elation', category: 'Scheduling & Practice Ops' },
    { name: 'Hint', category: 'Scheduling & Practice Ops' },
    { name: 'Cerbo', category: 'Scheduling & Practice Ops' },
    // Communication
    { name: 'Twilio', category: 'Communication' },
    { name: 'SendGrid', category: 'Communication' },
    // Analytics / Data
    { name: 'Stripe', category: 'Analytics / Data' },
    { name: 'Google Analytics', category: 'Analytics / Data' },
  ]

  const categories = [...new Set(integrations.map((i) => i.category))]

  return (
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Designed to Fit Your Existing Stack
          </h2>
          <p className='text-lg text-muted-foreground'>
            Health Compiler works alongside the tools practices already use—no forced rip-and-replace.
          </p>
        </div>

        <div className='space-y-8 mb-12'>
          {categories.map((category) => (
            <div key={category}>
              <h3 className='text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide'>
                {category}
              </h3>
              <div className='flex flex-wrap gap-4'>
                {integrations
                  .filter((i) => i.category === category)
                  .map((integration, index) => {
                    const globalIndex = integrations.findIndex((i) => i.name === integration.name)
                    return (
                      <div
                        key={integration.name}
                        className={`
                          px-6 py-3 rounded-xl border bg-card 
                          transition-all duration-300 cursor-default
                          ${
                            hoveredIndex === globalIndex
                              ? 'border-primary/50 shadow-md -translate-y-0.5'
                              : 'border-border hover:border-primary/30'
                          }
                        `}
                        onMouseEnter={() => setHoveredIndex(globalIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <span className='font-medium text-foreground'>{integration.name}</span>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <div className='flex items-center justify-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50'>
          <Shield className='w-5 h-5 text-primary' />
          <p className='text-sm text-muted-foreground'>
            HIPAA-aware workflows with role-based access and audit-ready reporting.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MarketingIntegrationsSection
