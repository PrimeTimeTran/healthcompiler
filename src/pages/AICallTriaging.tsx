import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, PhoneCall } from 'lucide-react'

const AICallTriaging = () => {
  const benefits = [
    'Identifies the intent of incoming patient calls',
    'Reduces front-desk overload',
    'Helps avoid missed or delayed responses',
  ]

  return (
    <Layout>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 lg:py-28'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
              <PhoneCall className='h-4 w-4' />
              AI Call Triaging
            </div>

            <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight'>
              Route Patient Calls With Clarity
            </h1>

            <p className='text-lg text-muted-foreground mb-8'>
              AI Call Triaging helps practices handle calls from existing
              patients by understanding the reason for the call and routing it
              appropriately.
            </p>

            <Button
              asChild
              size='lg'
              className='bg-primary hover:bg-primary/90'
            >
              <Link to='/contact'>Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Helps */}
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

          <Button
            asChild
            size='lg'
            className='bg-primary hover:bg-primary/90'
          >
            <Link to='/contact'>Request a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default AICallTriaging
