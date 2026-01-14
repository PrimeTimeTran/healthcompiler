import { FileSpreadsheet, Database, Eye, LineChart } from 'lucide-react'

const benefits = [
  {
    icon: FileSpreadsheet,
    title: 'Reduce Manual Reporting',
    description: 'Automate repetitive data tasks and reporting workflows.',
  },
  {
    icon: Database,
    title: 'Centralize Healthcare Data',
    description:
      'Unify data from multiple sources into a single source of truth.',
  },
  {
    icon: Eye,
    title: 'Improve Operational Visibility',
    description: 'Gain real-time insights into performance and outcomes.',
  },
  {
    icon: LineChart,
    title: 'Enable Data-Driven Decisions',
    description: 'Empower teams with actionable analytics and reporting.',
  },
]

export const HowWeHelpSection = () => {
  return (
    <section className='section-padding bg-background-secondary'>
      <div className='container-tight mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div>
            <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mb-6'>
              How We Help <span className='text-primary'>Healthcare Teams</span>
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed mb-8'>
              We build data infrastructure that empowers healthcare
              organizations to focus on what matters most—delivering quality
              care.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className='flex items-start gap-4'
                >
                  <div className='w-10 h-10 bg-card rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft'>
                    <benefit.icon className='w-5 h-5 text-accent' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground mb-1'>
                      {benefit.title}
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className='relative'>
            <div className='bg-card rounded-3xl p-8 shadow-card border border-border/50'>
              <div className='aspect-square bg-secondary rounded-2xl flex items-center justify-center relative overflow-hidden'>
                {/* Abstract data visualization */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-full h-full p-8'>
                    <div className='h-full flex items-end justify-around gap-2'>
                      {[40, 65, 45, 80, 55, 70, 50].map((height, i) => (
                        <div
                          key={i}
                          className='w-full bg-primary/60 rounded-t-lg animate-float'
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-soft'>
                  <p className='text-xs text-muted-foreground'>
                    Real-time Analytics
                  </p>
                  <p className='text-lg font-bold text-primary'>
                    +24% Efficiency
                  </p>
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl' />
          </div>
        </div>
      </div>
    </section>
  )
}
