import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Bot,
  Brain,
  TrendingUp,
  ArrowRight,
  Users,
  AlertCircle,
  BarChart3,
  Megaphone,
  Workflow,
  CheckCircle,
  Clock,
  Handshake,
} from 'lucide-react'

import elationLogo from '@/assets/elation-logo.png'
import hintLogo from '@/assets/hint-logo.png'
import akuteLogo from '@/assets/akute-health-logo.png'
import { CTAButton, GridSection } from '@/components/ui'
import DirectPrimaryCareViz from '@/components/hero-visualizations/DirectPrimaryCareViz'

const DirectPrimaryCare = () => {
  const dpcBenefits = [
    { icon: Users, text: 'Understand patient engagement and utilization' },
    { icon: TrendingUp, text: 'Track care gaps, outcomes, and trends over time' },
    { icon: Clock, text: 'Reduce manual effort at the front desk' },
    { icon: BarChart3, text: 'Support sustainable growth' },
    { icon: Handshake, text: 'Clearly demonstrate value to employers and partners' },
  ]

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description:
        'Clear views into engagement, utilization, avoidance, and outcomes across your patient panel. Designed to support better decisions inside the practice and provide simple, credible reporting when employers need to understand impact.',
    },
    {
      icon: Bot,
      title: 'AI Agents for Front Desk Support',
      description:
        'Two AI agents built specifically for DPC workflows: An AI receptionist that handles new patient inquiries and a triage agent that supports existing patients and routes requests appropriately.',
    },
    {
      icon: Megaphone,
      title: 'Marketing Automation for Steady Growth',
      description:
        'Quiet systems that help practices follow up consistently, stay visible, and convert interest into long-term relationships—without adding operational noise.',
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
                <span className='text-primary'>Direct Primary Care </span>
                Supported With Clarity
              </h1>

              <p className='text-xl text-muted-foreground mb-8'>
                Health Compiler supports Direct Primary Care practices with AI-powered data and growth solutions that make day-to-day operations simpler and long-term value easier to show.
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
                  Workflow-friendly
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  AI-powered
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Employer-ready
                </span>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className='lg:pl-8'>
              <DirectPrimaryCareViz />
            </div>
          </div>
        </div>
      </GridSection>

      {/* One Place for Data Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              One Place for the Data DPC Practices Need
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Direct Primary Care generates meaningful data every day. The challenge is turning that data into something useful. Health Compiler brings it together so practices can:
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {dpcBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border/50'
                >
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <benefit.icon className='h-6 w-6 text-primary' />
                  </div>
                  <p className='text-foreground font-medium pt-2'>
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Support DPC Practices */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-center'>
            How We Support DPC Practices
          </h2>
          <p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Comprehensive tools designed to help your practice thrive
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
              Fits Into Your Existing Workflow
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              Health Compiler integrates seamlessly with the tools DPC practices already use.
            </p>
            <p className='text-xl font-semibold text-foreground mb-12'>
              No switching systems. No retraining teams.
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

      {/* Designed for DPC */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
                <AlertCircle className='h-4 w-4' />
                DPC Ready
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Designed for DPC
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                Direct Primary Care depends on sustained engagement and clear value demonstration. Health Compiler provides the data foundation for both.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Patient engagement tracking</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Employer-ready reporting</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Growth and retention insights</span>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/20'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Patient Engagement</span>
                    <span className='text-lg font-bold text-primary'>87%</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Care Gap Closure</span>
                    <span className='text-lg font-bold text-green-600'>92%</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Member Retention</span>
                    <span className='text-lg font-bold text-primary'>95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Ready for Clearer Insight?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Get started with clear insights for your DPC practice.
            </p>
            <CTAButton
              link='/contact'
              text='Request a Demo'
              suffixIconDefault
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DirectPrimaryCare
