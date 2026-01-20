import { Layout } from '@/components/layout/Layout'
import { CheckCircle } from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'
import { GridSection } from '@/components/ui/GridSection'
import MarketingAutomationViz from '@/components/hero-visualizations/MarketingAutomationViz'

const MarketingAutomation = () => {
  const crmBenefits = [
    'Track leads from every source in one place',
    'Manage referrals and follow-through without losing context',
    'See the full history of every interaction',
    'Ensure no inquiry or lead is missed',
    'Run follow-ups, reminders, and outreach automatically',
    'Keep communication consistent even when teams are busy',
  ]

  const growthSupport = [
    'Website management',
    'SEO for search visibility',
    'Answer Engine Optimization so practices appear where patients ask questions',
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                  Turn Inquiries Into{' '}
                  <span className='text-primary'>Conversations</span>
                </h1>

                <p className='text-lg text-muted-foreground mb-8'>
                  Health Compiler provides a unified system that captures every
                  inquiry, organizes it, and keeps communication moving forward
                  without manual effort.
                </p>
                <CTAButton
                  link='/contact'
                  text='Book a Demo'
                  suffixIconDefault
                />
              </div>
            </div>
            <MarketingAutomationViz />
          </div>
        </div>
      </GridSection>
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Manage Inquiries, Follow-Up, and Outreach in One Place
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Inquiries are centralized automatically, making it easy to stay
              organized and responsive without extra manual work.
            </p>

            <div className='grid sm:grid-cols-2 gap-6 mb-8'>
              {crmBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
                  <p className='text-foreground'>{benefit}</p>
                </div>
              ))}
            </div>

            <p className='text-lg text-muted-foreground'>
              All of this is supported by a built-in CRM that keeps leads,
              conversations, next steps, and reminders organized—without adding
              another system to manage.
            </p>
          </div>
        </div>
      </section>

      {/* Visibility & Discovery */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Support for Visibility and Discovery
              </h2>

              <p className='text-lg text-muted-foreground mb-6'>
                Growth also depends on being easy to find.
              </p>

              <div className='space-y-4'>
                {growthSupport.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-3'
                  >
                    <Search className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
                    <p className='text-foreground'>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-muted/30 rounded-xl p-8 border border-border'>
              <p className='text-sm text-muted-foreground'>
                Designed to help practices show up consistently in search
                results and modern answer-driven platforms—without ongoing
                manual effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Fit */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Designed to Fit Your Workflow
            </h2>

            <p className='text-lg text-muted-foreground mb-4'>
              This system works alongside the tools practices already use.
            </p>

            <p className='text-lg text-muted-foreground'>
              No disruption. No forced changes.
            </p>

            {/* Integration logos placeholder */}
            <div className='mt-10 flex flex-wrap gap-8'>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-20 bg-primary/5'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Ready to See How This Works for Your Practice?
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

export default MarketingAutomation
