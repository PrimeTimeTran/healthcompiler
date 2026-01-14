import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, ChevronRight } from 'lucide-react'

const timelinePhases = [
  {
    week: 'Week 1',
    title: 'Discovery & Design',
    tasks: ['Data audit', 'Workflow mapping', 'Success metrics'],
  },
  {
    week: 'Week 2–3',
    title: 'Build & Integrate',
    tasks: ['Pipeline setup', 'API connections', 'Testing'],
  },
  {
    week: 'Week 4+',
    title: 'Deploy & Optimize',
    tasks: ['Go live', 'Training', 'Iteration'],
  },
]

export const FDEHero = () => {
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='pt-32 pb-20 bg-background overflow-hidden'>
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] tracking-tight'>
                Forward Deployed
                <br />
                <span className='text-primary'>Engineering</span>
              </h1>
              <p className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg'>
                We embed with your team to ship healthcare data + workflow
                outcomes in weeks—not quarters.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-[hsl(340,75%,60%)] to-[hsl(28,90%,60%)] hover:from-[hsl(340,75%,55%)] hover:to-[hsl(28,90%,55%)] text-white font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300'
              >
                <Calendar className='w-4 h-4 mr-2' />
                Book a 20-min FDE scoping call
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='group border-border hover:border-accent hover:bg-accent/5 transition-all duration-300'
              >
                See example deployments
                <ChevronRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' />
              </Button>
            </div>
          </div>

          {/* Right Column - Timeline Visualization */}
          <div className='relative'>
            {/* Glassy container */}
            <div className='relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-elevated'>
              {/* Subtle background pattern */}
              <div className='absolute inset-0 rounded-3xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5' />
                <svg
                  className='absolute inset-0 w-full h-full opacity-[0.03]'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <pattern
                      id='grid'
                      width='32'
                      height='32'
                      patternUnits='userSpaceOnUse'
                    >
                      <path
                        d='M 32 0 L 0 0 0 32'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='100%'
                    height='100%'
                    fill='url(#grid)'
                  />
                </svg>
              </div>

              {/* Timeline header */}
              <div className='relative mb-8'>
                <p className='text-xs font-medium text-muted-foreground uppercase tracking-widest'>
                  Deployment Timeline
                </p>
              </div>

              {/* Timeline phases */}
              <div className='relative space-y-6'>
                {/* Connection line */}
                <div className='absolute left-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-border' />

                {timelinePhases.map((phase, index) => (
                  <div
                    key={phase.week}
                    className={`relative flex gap-5 transition-all duration-500 ${
                      activePhase === index ? 'scale-[1.02]' : 'opacity-60'
                    }`}
                  >
                    {/* Node */}
                    <div className='relative z-10 flex-shrink-0'>
                      <div
                        className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                          activePhase === index
                            ? 'bg-accent border-accent shadow-lg shadow-accent/30'
                            : 'bg-card border-border'
                        }`}
                      >
                        <span
                          className={`text-sm font-semibold transition-colors duration-300 ${
                            activePhase === index
                              ? 'text-white'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </div>
                      {/* Pulse effect */}
                      {activePhase === index && (
                        <div className='absolute inset-0 rounded-full bg-accent/30 animate-ping-slow' />
                      )}
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 p-4 rounded-xl border transition-all duration-500 ${
                        activePhase === index
                          ? 'bg-card border-accent/30 shadow-lg'
                          : 'bg-card/50 border-border/50'
                      }`}
                    >
                      <div className='flex items-center gap-3 mb-2'>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
                            activePhase === index
                              ? 'bg-accent/20 text-accent'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {phase.week}
                        </span>
                        <h3 className='text-sm font-semibold text-foreground'>
                          {phase.title}
                        </h3>
                      </div>
                      <div className='flex flex-wrap gap-2'>
                        {phase.tasks.map((task) => (
                          <span
                            key={task}
                            className='text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md'
                          >
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl' />
              <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
