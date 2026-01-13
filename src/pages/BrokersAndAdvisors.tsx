import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout/Layout'
import { CheckCircle } from 'lucide-react'
import { GridSection } from '@/components/ui'

const BrokersAndAdvisors = () => {
  const dataBenefits = [
    'Support recommendations with real performance data',
    'Show how strategies perform after implementation',
    'Strengthen RFPs and renewal conversations with evidence',
    'Applicable to value-based, direct care, self-funded, and hybrid strategies',
  ]

  const integrationBenefits = [
    'Connects natively with employer, plan, and care partner systems',
    'No new tools for clients to adopt',
    'No added reporting or administrative burden',
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <div className='max-w-3xl'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                    Use Data
                  </span>{' '}
                  to Win and Retain Clients
                </h1>

                <p className='text-xl text-muted-foreground mb-8'>
                  Move beyond anecdotes. Prove impact with real performance data
                  that supports strategy decisions and strengthens client trust.
                </p>

                <Button
                  variant='gradient'
                  size='lg'
                  asChild
                >
                  <Link to='/contact'>Book a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </GridSection>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Evidence That Wins RFPs and Renewals
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Health Compiler helps brokers and advisors clearly demonstrate how
              strategies perform after implementation — across all plan designs.
            </p>

            <div className='space-y-4'>
              {dataBenefits.map((benefit, index) => (
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
              Integration Without Workflow Disruption
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Designed to fit into existing ecosystems — not replace them.
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
            Built to Support Durable Client Relationships
          </h2>

          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Deliver consistent insight, credible results, and shared visibility
            — without adding operational burden.
          </p>

          <Button
            variant='gradient'
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

export default BrokersAndAdvisors
