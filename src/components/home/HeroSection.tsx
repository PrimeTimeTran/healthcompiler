import { HeroVisualization } from './HeroVisualization'

export const HeroSection = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-background to-background-secondary min-h-[calc(100vh-80px)]'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl' />
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 py-12 md:py-16 relative z-10 h-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left side - Text content */}
          <div className='text-left'>
            {/* Main headline */}
            <h1 className='font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 animate-fade-in'>
              Intelligent Data & Workflow{' '}
              <span className='text-primary'>Activation Layer</span>
            </h1>

            {/* Sub-headline */}
            <p
              className='text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in'
              style={{ animationDelay: '0.1s' }}
            >
              Unifying healthcare data and AI-driven workflows to lower costs
              and improve care across self-funded, direct care, and value-based
              organizations.
            </p>
          </div>

          {/* Right side - Visualization */}
          <div className='animate-fade-in lg:pl-4'>
            <HeroVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}
