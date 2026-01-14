import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CTAButton, GridSection } from '@/components/ui'
import { MonitorCog, Brain, Gauge, CheckCircle } from 'lucide-react'

const Employers = () => {
  const dataBenefits = [
    'Monitor utilization and engagement trends across care models',
    'Understand avoidable ER and urgent care use',
    'Review outcomes tied to care strategies',
    'Maintain documentation that supports fiduciary oversight',
  ]
  const personas = [
    {
      icon: MonitorCog,
      title: 'AI-Powered Analytics',
      description:
        'Native integrations with benefits, care, and reporting systems',
    },
    {
      icon: Brain,
      title: 'AI Agents for Calls and Triage',
      description: 'No disruption to existing workflows',
    },
    {
      icon: Gauge,
      title: 'Marketing Automation',
      description: 'No manual data collection',
    },
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Support fiduciary responsibility with{' '}
                <span className='text-primary'>ongoing visibility</span>
              </h1>
              <div className='flex flex-wrap gap-4 mb-6'>
                <CTAButton
                  link='/contact'
                  text='Book a Demo'
                  // suffixIconDefault
                />
              </div>
            </div>
            <div className='relative h-[450px] flex items-center justify-center'></div>
          </div>
        </div>
      </GridSection>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
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
      <section className='relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden'>
        <div
          className='absolute inset-0 opacity-[0.02] pointer-events-none'
          style={{
            backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                           linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className='container mx-auto px-6 relative'>
          <div className='text-center mb-14'>
            <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Works with what you already use
            </h2>
          </div>
          <div className='text-center mb-14 flex justify-center'>
            {personas.map((persona, index) => (
              <div
                key={index}
                className='p-6 m-6 bg-white border border-border/50 rounded-xl hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col items-center text-center w-1/2'
              >
                <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4'>
                  <persona.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='font-semibold text-foreground mb-2'>
                  {persona.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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

export default Employers
