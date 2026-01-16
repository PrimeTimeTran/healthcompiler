import { Layout } from '@/components/layout/Layout'
import CTAButton from '@/components/ui/CTAButton'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { GridSection } from '@/components/ui'

export const llms = {
  title: 'AI Call Triaging',
  description: 'Automated call triage for healthcare providers',
}

const AICallTriaging = () => {
  const benefits = [
    'Identifies the intent of incoming patient calls',
    'Reduces front-desk overload',
    'Helps avoid missed or delayed responses',
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 my-auto lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='max-w-3xl'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Route Patient Calls With{' '}
                <span className='text-primary'>Clarity</span>
              </h1>

              <p className='text-lg text-muted-foreground mb-8'>
                AI Call Triaging helps practices handle calls from existing
                patients by understanding the reason for the call and routing it
                appropriately.
              </p>
              <CTAButton
                link='/contact'
                text='Request a Demo'
                iconSuffix={
                  <ArrowRight className='ml-2 transition-transform group-hover:translate-x-1' />
                }
              />
            </div>
          </div>
        </div>
      </GridSection>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
              How It Helps
            </h2>

            <div className='space-y-4 mb-8'>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{benefit}</p>
                </div>
              ))}
            </div>

            <p className='text-lg text-muted-foreground'>
              The result is faster routing, clearer priorities, and a better
              experience for patients and staff.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Fit */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Designed for Real Practice Workflows
            </h2>

            <p className='text-lg text-muted-foreground mb-4'>
              AI Call Triaging works alongside your existing systems.
            </p>

            <p className='text-lg text-muted-foreground'>
              No workflow changes. No disruption to how care is delivered.
            </p>
          </div>

          {/* Integration logos placeholder */}
          <div className='mt-12 flex flex-wrap gap-8 items-center opacity-70'>
            <div className='h-10 w-32 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground'>
              Integration Logo
            </div>
            <div className='h-10 w-32 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground'>
              Integration Logo
            </div>
            <div className='h-10 w-32 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground'>
              Integration Logo
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-primary/5'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            See How AI Call Triaging Fits Your Practice
          </h2>
          <CTAButton
            link='/contact'
            text='Request a Demo'
            suffixIconDefault
          />
        </div>
      </section>
    </Layout>
  )
}

export default AICallTriaging
