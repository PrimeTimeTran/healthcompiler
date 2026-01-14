import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { CTAButton } from '../ui'

export function EmployerAnalyticsCTA() {
  return (
    <section className='relative py-24 md:py-32 overflow-hidden'>
      {/* Animated background */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background'>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 rounded-full bg-primary/30'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow' />
        <div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow'
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
            Ready to see your{' '}
            <span className='text-primary'>Employer Intelligence Layer</span>?
          </h2>
          <p className='text-lg text-muted-foreground mb-10 max-w-2xl mx-auto'>
            Transform fragmented health data into unified employer intelligence.
            See how Health Compiler can help you make smarter benefits
            decisions.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <CTAButton
              link='/contact'
              text='See Your Employer Intelligence Layer'
              iconSuffix={
                <ArrowRight className='ml-2 transition-transform group-hover:translate-x-1' />
              }
            />
            <Button
              asChild
              variant='outline'
              size='lg'
              className='px-8'
            >
              <Link to='/contact'>
                <MessageCircle className='mr-2 w-5 h-5' />
                Talk to an Expert
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
