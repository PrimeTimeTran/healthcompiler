import { useState, useEffect } from 'react'
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

// Network Clarity Visualization
const NetworkVisualization = () => {
  const [activeNode, setActiveNode] = useState(0)

  const practices = [
    { label: 'Practice A', angle: 30 },
    { label: 'Practice B', angle: 90 },
    { label: 'Practice C', angle: 150 },
    { label: 'Practice D', angle: 210 },
    { label: 'Practice E', angle: 270 },
    { label: 'Practice F', angle: 330 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % practices.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative w-full h-[400px] flex items-center justify-center'>
      <svg
        viewBox='0 0 400 400'
        className='w-full h-full max-w-md'
      >
        <defs>
          <linearGradient
            id='networkCoreGradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop
              offset='0%'
              stopColor='hsl(var(--primary))'
            />
            <stop
              offset='100%'
              stopColor='hsl(217, 91%, 60%)'
            />
          </linearGradient>
          <filter id='networkGlow'>
            <feGaussianBlur
              stdDeviation='3'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='networkSoftGlow'>
            <feGaussianBlur
              stdDeviation='8'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        {/* Connection rings */}
        <circle
          cx='200'
          cy='200'
          r='140'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='4 4'
          opacity='0.3'
        />
        <circle
          cx='200'
          cy='200'
          r='100'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='2 2'
          opacity='0.2'
        />

        {/* Practice nodes with data flowing to center */}
        {practices.map((practice, i) => {
          const angle = practice.angle * (Math.PI / 180)
          const x = 200 + Math.cos(angle) * 140
          const y = 200 + Math.sin(angle) * 140
          const isActive = i === activeNode

          return (
            <g key={practice.label}>
              <line
                x1={x}
                y1={y}
                x2='200'
                y2='200'
                stroke={isActive ? 'hsl(var(--primary))' : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray={isActive ? '0' : '4 4'}
                opacity={isActive ? 0.8 : 0.3}
                className='transition-all duration-500'
              />

              <circle
                r={isActive ? '6' : '3'}
                fill='hsl(var(--primary))'
                filter={isActive ? 'url(#networkGlow)' : ''}
                opacity={isActive ? 1 : 0.4}
              >
                <animateMotion
                  dur={`${1.5 + i * 0.2}s`}
                  repeatCount='indefinite'
                  path={`M${x - 200},${y - 200} L0,0`}
                />
              </circle>

              <g>
                <circle
                  cx={x}
                  cy={y}
                  r='24'
                  fill='hsl(var(--card))'
                  stroke={
                    isActive ? 'hsl(var(--primary))' : 'hsl(var(--border))'
                  }
                  strokeWidth={isActive ? '2' : '1'}
                  className='transition-all duration-300'
                />
                <circle
                  cx={x}
                  cy={y}
                  r='8'
                  fill={
                    isActive
                      ? 'hsl(var(--primary))'
                      : 'hsl(var(--muted-foreground))'
                  }
                  opacity={isActive ? 1 : 0.5}
                  className='transition-all duration-300'
                />
              </g>
            </g>
          )
        })}

        {/* Central network hub */}
        <g>
          <circle
            cx='200'
            cy='200'
            r='65'
            fill='url(#networkCoreGradient)'
            opacity='0.15'
            filter='url(#networkSoftGlow)'
          >
            <animate
              attributeName='r'
              values='65;70;65'
              dur='3s'
              repeatCount='indefinite'
            />
          </circle>

          <circle
            cx='200'
            cy='200'
            r='50'
            fill='url(#networkCoreGradient)'
            filter='url(#networkGlow)'
          >
            <animate
              attributeName='r'
              values='50;53;50'
              dur='2s'
              repeatCount='indefinite'
            />
          </circle>

          <circle
            cx='200'
            cy='200'
            r='40'
            fill='hsl(var(--card))'
            opacity='0.15'
          />

          <text
            x='200'
            y='195'
            textAnchor='middle'
            className='fill-white text-[11px] font-semibold'
          >
            Network
          </text>
          <text
            x='200'
            y='210'
            textAnchor='middle'
            className='fill-white/80 text-[9px]'
          >
            View
          </text>
        </g>

        {/* Pulse rings */}
        <circle
          cx='200'
          cy='200'
          r='55'
          fill='none'
          stroke='hsl(var(--primary))'
          strokeWidth='1'
          opacity='0'
        >
          <animate
            attributeName='r'
            values='55;100'
            dur='2s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.6;0'
            dur='2s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
}

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
              <NetworkVisualization />
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
