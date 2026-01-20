import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout/Layout'
import { CheckCircle } from 'lucide-react'
import { GridSection } from '@/components/ui'
import CaptivesViz from '@/components/hero-visualizations/CaptivesViz'

const Captives = () => {
  const governanceBenefits = [
    'Review utilization, engagement, and outcomes across members',
    'Understand collective risk drivers and variation',
    'Support governance with comparable performance views',
    'Support consistent decisions across captive members',
  ]

  const integrationBenefits = [
    'Connects with member systems natively',
    'Preserves autonomy while enabling alignment',
    'Avoids unnecessary data exposure',
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Enable{' '}
                <span className='text-primary'>Fiduciary Governance</span>{' '}
                Across Shared Risk
              </h1>

              <p className='text-xl text-muted-foreground mb-8'>
                Gain a clear, comparable view across members to support sound
                governance, transparency, and consistent decision-making.
              </p>

              <Button
                size='lg'
                asChild
              >
                <Link to='/contact'>Book a Demo</Link>
              </Button>
            </div>
            <CaptivesViz />
          </div>
        </div>
      </GridSection>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Visibility That Supports Fiduciary Responsibility
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Health Compiler provides captives with shared insight into
              utilization, engagement, and outcomes — without forcing
              operational uniformity.
            </p>

            <div className='space-y-4'>
              {governanceBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className='py-20 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Integration Without Forced Standardization
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Designed to respect member independence while enabling alignment
              at the captive level.
            </p>

            <div className='space-y-4'>
              {integrationBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-20 bg-primary/5'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Built for Confident, Consistent Governance
          </h2>

          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Enable transparency, alignment, and fiduciary confidence across
            captive members — without overexposure or disruption.
          </p>

          <Button
            size='lg'
            asChild
          >
            <Link to='/contact'>Request a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default Captives
