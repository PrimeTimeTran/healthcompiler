import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  CheckCircle,
  Eye,
  Target,
  MessageSquare,
  TrendingUp,
  Users,
  Activity,
  ShieldCheck,
  Heart,
  BarChart3,
  Network,
  ArrowRight,
  Bot,
  Brain,
  Megaphone,
  Workflow,
} from 'lucide-react'
import { CTAButton, GridSection } from '@/components/ui'

import elationLogo from '@/assets/elation-logo.png'
import hintLogo from '@/assets/hint-logo.png'
import akuteLogo from '@/assets/akute-health-logo.png'
import DPCNetworksViz from '@/components/hero-visualizations/DPCNetworksViz'

const DPCNetworks = () => {
  const networkBenefits = [
    { icon: Eye, text: 'Spend less time chasing updates from individual practices' },
    { icon: Target, text: 'Spot problems early instead of reacting after issues grow' },
    { icon: Users, text: 'Support clinics using data, not guesswork' },
    { icon: MessageSquare, text: 'Show employers and partners clear proof of impact' },
    { icon: Network, text: 'Scale the network without adding operational overhead' },
  ]

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Network Analytics',
      description:
        'Unified visibility across all practices in your network. See engagement, utilization, and outcomes without chasing individual updates.',
    },
    {
      icon: Bot,
      title: 'Centralized Support Tools',
      description:
        'AI-powered tools that work across your network, helping practices handle inquiries and triage while you maintain oversight.',
    },
    {
      icon: Megaphone,
      title: 'Network-Wide Insights',
      description:
        'Aggregate data that helps you identify trends, spot outliers, and support practices where they need it most.',
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
                Clear, Actionable{' '}
                <span className='text-primary'>Data Insights</span>
              </h1>

              <p className='text-xl text-muted-foreground mb-8'>
                Helping DPC networks save time, reduce guesswork, and prove value across all their practices.
              </p>

              <div className='flex flex-wrap gap-4 mb-6'>
                <CTAButton
                  link='/contact'
                  text='Request a Demo'
                  suffixIconDefault
                />
              </div>

              <div className='flex items-center gap-6 text-sm text-muted-foreground'>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Multi-practice visibility
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Unified insights
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Scalable
                </span>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className='lg:pl-8'>
              <DPCNetworksViz />
            </div>
          </div>
        </div>
      </GridSection>

      {/* Managing Multiple Practices */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Managing Multiple Practices Made Easier
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Network leaders need visibility without micromanagement. Health Compiler brings together the data that helps you:
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {networkBenefits.map((benefit, index) => (
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

      {/* How We Support DPC Networks */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-center'>
            How We Support DPC Networks
          </h2>
          <p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Comprehensive tools designed to help your network thrive
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
              Health Compiler integrates with the tools your practices already use.
            </p>
            <p className='text-xl font-semibold text-foreground mb-12'>
              Practices keep their independence. Your network gains clarity.
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

      {/* Designed for Networks */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
                <Network className='h-4 w-4' />
                Network Ready
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Designed for Networks That Want to Grow
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                Health Compiler supports growth without forcing standardization or creating extra work for clinics.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Practices keep their independence</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Your network gains clarity</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Employers see consistent value</span>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/20'>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    { icon: Activity, label: 'Visibility' },
                    { icon: TrendingUp, label: 'Growth' },
                    { icon: ShieldCheck, label: 'Quality' },
                    { icon: Heart, label: 'Consistency' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className='bg-background rounded-xl p-4 text-center shadow-sm'
                    >
                      <item.icon className='h-8 w-8 text-primary mx-auto mb-2' />
                      <span className='text-sm font-medium text-foreground'>
                        {item.label}
                      </span>
                    </div>
                  ))}
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
              Ready to Run Your Network With More Confidence?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              If you want fewer blind spots and clearer insight across your DPC network, let's talk.
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

export default DPCNetworks
