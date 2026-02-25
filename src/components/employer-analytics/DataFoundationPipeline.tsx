import { Database, FileText, Pill, Heart, Users, Watch } from 'lucide-react'

const dataSources = [
  { icon: Database, label: 'Claims', color: '#f97316' },
  { icon: Heart, label: 'Clinical', color: '#ef4444' },
  { icon: Pill, label: 'Rx', color: '#8b5cf6' },
  { icon: FileText, label: 'Benefits', color: '#22c55e' },
  { icon: Users, label: 'HRIS', color: '#3b82f6' },
  { icon: Watch, label: 'Wearables', color: '#06b6d4' },
]

export function DataFoundationPipeline() {
  return (
    <section className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
            Platform Architecture
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Powered by a Unified Data Layer
          </h2>
          <h3 className='text-xl text-muted-foreground mb-6'>
            Structured, Normalized, and Activated in Real Time
          </h3>
          <div className='space-y-4 text-muted-foreground leading-relaxed'>
            <p>
              The reason most employer analytics platforms fall short isn't the dashboards — it's the data underneath. When you're pulling from six different sources that each define a "member" differently, use different coding standards, and update on different timelines, the analytics built on top are unreliable from the start.
            </p>
            <p>
              HealthCompiler's data layer solves this at the foundation. Every data source — claims, clinical, Rx, benefits, HRIS, wearables — is ingested, deduplicated, normalized, and mapped to a unified member record. When you see a number in HealthCompiler, you can trust it. And when you share it with your CFO, your broker, or your board, they can trust it too.
            </p>
          </div>
        </div>

        <div className='relative max-w-5xl mx-auto'>
          <div className='relative'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12'>
              {dataSources.map((source, index) => (
                <div key={index} className='relative group' style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className='flex flex-col items-center p-4 rounded-xl bg-card border hover:border-primary/30 transition-all hover:shadow-lg'>
                    <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-3' style={{ backgroundColor: `${source.color}20` }}>
                      <source.icon className='w-6 h-6' style={{ color: source.color }} />
                    </div>
                    <span className='text-sm font-medium'>{source.label}</span>
                  </div>
                  <div className='hidden lg:block absolute left-1/2 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-border to-primary/30' />
                </div>
              ))}
            </div>

            <div className='hidden lg:flex items-center justify-center gap-2 mb-12'>
              <div className='flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-primary/50' />
              <div className='w-4 h-4 rounded-full bg-primary/30 animate-pulse' />
              <div className='flex-1 h-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent' />
            </div>

            <div className='relative flex justify-center'>
              <div className='relative'>
                <div className='absolute inset-0 bg-primary/20 rounded-3xl blur-2xl scale-110 animate-pulse-slow' />
                <div className='relative px-8 py-6 rounded-2xl bg-card border-2 border-primary/30 shadow-xl'>
                  <div className='text-center'>
                    <div className='text-xs uppercase tracking-wider text-primary mb-2'>Employer Core</div>
                    <h3 className='text-lg font-bold'>Health Compiler</h3>
                    <p className='text-sm text-muted-foreground'>Employer Analytics Layer</p>
                  </div>
                  <div className='absolute inset-0 rounded-2xl border border-primary/20 animate-ping-slow opacity-50' />
                </div>
                <svg className='absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-8' viewBox='0 0 64 32'>
                  <path d='M32,32 L32,8 M24,16 L32,8 L40,16' fill='none' stroke='hsl(var(--primary))' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' opacity='0.6'>
                    <animate attributeName='opacity' values='0.3;0.8;0.3' dur='2s' repeatCount='indefinite' />
                  </path>
                </svg>
              </div>
            </div>

            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
              {[...Array(8)].map((_, i) => (
                <div key={i} className='absolute w-2 h-2 rounded-full bg-primary/40' style={{ left: `${10 + i * 12}%`, animation: `float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
