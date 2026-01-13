import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout/Layout'
import { CheckCircle } from 'lucide-react'

const TPAHealthPlans = () => {
  const performanceBenefits = [
    'Evaluate utilization, engagement, avoidance, and outcomes over time',
    'Compare performance across populations, contracts, and care approaches',
    'Identify emerging risk and gaps before they escalate',
    'Support employer and sponsor conversations with defensible evidence',
    'Review performance continuously, not just at renewal',
  ]

  const integrationBenefits = [
    'Native integrations with clinical, eligibility, and operational platforms',
    'No duplicate reporting workflows',
    'No manual data stitching',
  ]

  return (
    <Layout>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
              <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
              Employers & Sponsors
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight'>
              Measure How <span className='text-primary'>Care Strategies</span>{' '}
              Perform — Across Models
            </h1>

            <p className='text-xl text-muted-foreground mb-8'>
              Understand what’s working, where risk is emerging, and how
              different care approaches perform over time.
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
      </section>

      {/* Performance Measurement */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Continuous Performance Insight
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Health Compiler gives employers and sponsors a consistent,
              comparable view of performance across populations, contracts, and
              care models — not just at renewal time.
            </p>

            <div className='space-y-4'>
              {performanceBenefits.map((benefit, index) => (
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

      {/* Systems Integration */}
      <section className='py-20 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Designed to Work With Existing Systems
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Built to integrate cleanly into existing environments without
              adding operational overhead.
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
            Make Performance Visible — All Year Long
          </h2>

          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Move from episodic reporting to continuous insight that supports
            confident decisions and sponsor trust.
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

export default TPAHealthPlans
