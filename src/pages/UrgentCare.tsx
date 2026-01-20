import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Brain,
  Activity,
  Workflow,
  CheckCircle,
} from 'lucide-react'
import { CTAButton, GridSection } from '@/components/ui'
import UrgentCareViz from '@/components/hero-visualizations/UrgentCareViz'
import elationLogo from '@/assets/elation-logo.png'
import hintLogo from '@/assets/hint-logo.png'
import akuteLogo from '@/assets/akute-health-logo.png'

const UrgentCare = () => {
  const journeyBenefits = [
    'Understand visit volumes and throughput patterns',
    'Track site-level performance benchmarks',
    'Identify operational bottlenecks early',
    'Support financial visibility and payer mix analysis',
    'See utilization trends across all locations',
  ]

  const solutions = [
    {
      icon: BarChart3,
      title: 'AI-Powered Analytics',
      description:
        'Unified clinical, operational, and financial data views. Built to surface insights and support real-time decisions.',
    },
    {
      icon: Brain,
      title: 'AI for Operations Support',
      description:
        'Volume forecasting, anomaly detection, and automated performance summaries that help leadership stay ahead.',
    },
    {
      icon: Activity,
      title: 'Multi-Site Visibility',
      description:
        'Clear insight across all locations without replacing existing systems. See what matters at every level.',
    },
  ]

  const integrationLogos = [
    { name: 'Elation', src: elationLogo },
    { name: 'Hint', src: hintLogo },
    { name: 'Akute', src: akuteLogo },
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Turn Urgent Care Data Into{' '}
                <span className='text-primary'>Real-Time Decisions</span>
              </h1>

              <p className='text-xl text-muted-foreground mb-8'>
                A unified data and AI activation layer that gives urgent care
                organizations visibility across operations, utilization, and
                financial performance — without replacing existing systems.
              </p>

              <div className='flex flex-wrap gap-4 mb-6'>
                <CTAButton
                  link='/contact'
                  text='Book a Demo'
                  suffixIconDefault
                />
              </div>

              <div className='flex items-center gap-6 text-sm text-muted-foreground'>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  HIPAA-aligned
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Secure by design
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Built for scale
                </span>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className='lg:pl-8'>
              <UrgentCareViz />
            </div>
          </div>
        </div>
      </GridSection>

      {/* Operational Clarity */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Operational Clarity at Every Level
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Health Compiler helps urgent care organizations:
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {journeyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border/50'
                >
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <CheckCircle className='h-6 w-6 text-primary' />
                  </div>
                  <p className='text-foreground font-medium pt-2'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Urgent Care */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-center'>
            How We Support Urgent Care Organizations
          </h2>
          <p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Comprehensive tools designed to help your organization thrive
          </p>
          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className='bg-background rounded-2xl p-8 shadow-sm border border-border hover:border-primary/30 transition-colors group'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform'>
                  <solution.icon className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-foreground mb-4'>
                  {solution.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-12'>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='gap-2'
            >
              <Link to='/platform'>
                Explore
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fits Into Your Existing Workflow */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
              <Workflow className='h-4 w-4' />
              Seamless Integration
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              One Intelligence Layer. All Your Urgent Care Data.
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              Health Compiler sits above your existing stack to unify clinical,
              operational, and financial data into a single source of truth.
            </p>
            <p className='text-xl font-semibold text-foreground mb-12'>
              No system changes. No workflow disruption.
            </p>

            {/* Integration logos */}
            <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12 p-8 bg-muted/30 rounded-2xl border border-border/50'>
              {integrationLogos.map((logo, index) => (
                <div
                  key={index}
                  className='h-12 w-32 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm'
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className='max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity'
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove(
                        'hidden'
                      )
                    }}
                  />
                  <span className='hidden text-muted-foreground font-medium'>
                    {logo.name}
                  </span>
                </div>
              ))}
              <div className='h-12 w-32 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm'>
                <span className='text-muted-foreground text-sm font-medium'>
                  + More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Ready to See Across All Your Locations?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Health Compiler helps urgent care organizations make faster, more
              confident decisions with unified data visibility.
            </p>
            <CTAButton
              link='/contact'
              text='Book a Demo'
              suffixIconDefault
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UrgentCare
