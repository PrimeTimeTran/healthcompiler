import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout/Layout'
import {
  CheckCircle,
  BarChart3,
  Bot,
  Megaphone,
  Workflow,
  ArrowRight,
  FileText,
} from 'lucide-react'
import { CTAButton, GridSection } from '@/components/ui'
import BrokersAdvisorsViz from '@/components/hero-visualizations/BrokersAdvisorsViz'

import elationLogo from '@/assets/elation-logo.png'
import hintLogo from '@/assets/hint-logo.png'
import akuteLogo from '@/assets/akute-health-logo.png'

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

  const solutions = [
    {
      icon: BarChart3,
      title: 'AI-Powered Analytics',
      description:
        'Clear views into cost trends, utilization patterns, and outcomes across your client portfolio. Designed to support confident recommendations and demonstrate value.',
    },
    {
      icon: Bot,
      title: 'AI Support for Client Communication',
      description:
        'AI support for client inquiries, helping teams respond quickly with data-backed insights and recommendations.',
    },
    {
      icon: Megaphone,
      title: 'Client Engagement Automation',
      description:
        'Consistent follow-ups and reporting without extra manual effort. Designed to keep clients informed and engaged throughout the plan year.',
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
              <div className='max-w-3xl'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                  <span className='text-primary'>Use Data</span> to Win and
                  Retain Clients
                </h1>

                <p className='text-xl text-muted-foreground mt-6 mb-8'>
                  Move beyond anecdotes. Prove impact with real performance data
                  that supports strategy decisions and strengthens client trust.
                </p>

                <CTAButton
                  link='/contact'
                  text='Book a Demo'
                  suffixIconDefault
                />

                <div className='flex items-center gap-6 text-sm text-muted-foreground mt-6'>
                  <span className='flex items-center gap-1.5'>
                    <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                    Client-ready reports
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                    ROI tracking
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                    Benchmarking
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className='lg:pl-8'>
              <BrokersAdvisorsViz />
            </div>
          </div>
        </div>
      </GridSection>

      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Evidence That Wins RFPs and Renewals
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Health Compiler helps brokers and advisors clearly demonstrate how
              strategies perform after implementation — across all plan designs.
            </p>

            <div className='grid md:grid-cols-2 gap-4'>
              {dataBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Brokers & Advisors */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-center'>
            How We Support Brokers & Advisors
          </h2>
          <p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Comprehensive tools designed to help your advisory practice thrive
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
            <Button asChild variant='outline' size='lg' className='gap-2'>
              <Link to='/platform'>
                Explore
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
              <Workflow className='h-4 w-4' />
              Seamless Integration
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Integration Without Workflow Disruption
            </h2>

            <p className='text-lg text-muted-foreground mb-4'>
              Designed to fit into existing ecosystems — not replace them.
            </p>
            <p className='text-xl font-semibold text-foreground mb-12'>
              No system changes. No workflow disruption.
            </p>

            <div className='space-y-4 max-w-lg mx-auto mb-12'>
              {integrationBenefits.map((benefit, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground text-left'>{benefit}</p>
                </div>
              ))}
            </div>

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
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
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

      {/* Designed for Advisor Success */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
                <FileText className='h-4 w-4' />
                Client Success
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Built to Support Durable Client Relationships
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                Deliver consistent insight, credible results, and shared visibility
                — without adding operational burden.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Client-ready reporting and dashboards</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>ROI tracking and benchmarking</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Data-backed plan recommendations</span>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/20'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Client Portfolio Health</span>
                    <span className='text-lg font-bold text-primary'>92%</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Avg. Client Savings</span>
                    <span className='text-lg font-bold text-green-600'>18%</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Client Retention</span>
                    <span className='text-lg font-bold text-primary'>96%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Ready to Strengthen Your Advisory Practice?
          </h2>

          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Get started with clear insights for your client portfolio.
          </p>

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

export default BrokersAndAdvisors
