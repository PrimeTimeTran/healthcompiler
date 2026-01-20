import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  CheckCircle,
  Eye,
  TrendingUp,
  Users,
  Building2,
  BarChart3,
  Shield,
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

// MSO Network Visualization
const MSOVisualization = () => {
  const [activePractice, setActivePractice] = useState(0)

  const practices = [
    { label: 'Practice A', color: 'hsl(217, 91%, 60%)' },
    { label: 'Practice B', color: 'hsl(142, 76%, 36%)' },
    { label: 'Practice C', color: 'hsl(280, 65%, 60%)' },
    { label: 'Practice D', color: 'hsl(45, 93%, 47%)' },
    { label: 'Practice E', color: 'hsl(0, 84%, 60%)' },
    { label: 'Practice F', color: 'hsl(180, 70%, 45%)' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePractice((prev) => (prev + 1) % practices.length)
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
            id='msoCoreGradient'
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
          <filter id='msoGlow'>
            <feGaussianBlur
              stdDeviation='3'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='msoSoftGlow'>
            <feGaussianBlur
              stdDeviation='6'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        {/* Outer organizational ring */}
        <circle
          cx='200'
          cy='200'
          r='160'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='8 4'
          opacity='0.2'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 200 200'
            to='360 200 200'
            dur='120s'
            repeatCount='indefinite'
          />
        </circle>

        {/* Practice nodes in a circle */}
        {practices.map((practice, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180)
          const nodeX = 200 + Math.cos(angle) * 130
          const nodeY = 200 + Math.sin(angle) * 130
          const isActive = i === activePractice

          return (
            <g key={practice.label}>
              <line
                x1={nodeX}
                y1={nodeY}
                x2='200'
                y2='200'
                stroke={isActive ? practice.color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray={isActive ? '0' : '4 4'}
                opacity={isActive ? 0.7 : 0.3}
                className='transition-all duration-500'
              />

              <circle
                r={isActive ? '4' : '2'}
                fill={practice.color}
                filter={isActive ? 'url(#msoGlow)' : ''}
                opacity={isActive ? 1 : 0.4}
              >
                <animateMotion
                  dur={`${1.5 + i * 0.2}s`}
                  repeatCount='indefinite'
                  path={`M${nodeX - 200},${nodeY - 200} L0,0`}
                />
              </circle>

              <g>
                <circle
                  cx={nodeX}
                  cy={nodeY}
                  r='28'
                  fill='hsl(var(--card))'
                  stroke={isActive ? practice.color : 'hsl(var(--border))'}
                  strokeWidth={isActive ? '2' : '1'}
                  className='transition-all duration-300'
                />
                <text
                  x={nodeX}
                  y={nodeY + 4}
                  textAnchor='middle'
                  className='fill-foreground text-[9px] font-medium'
                >
                  {practice.label}
                </text>
              </g>
            </g>
          )
        })}

        {/* Central MSO hub */}
        <g>
          <circle
            cx='200'
            cy='200'
            r='60'
            fill='url(#msoCoreGradient)'
            opacity='0.15'
            filter='url(#msoSoftGlow)'
          >
            <animate
              attributeName='r'
              values='60;65;60'
              dur='4s'
              repeatCount='indefinite'
            />
          </circle>

          <circle
            cx='200'
            cy='200'
            r='48'
            fill='url(#msoCoreGradient)'
            filter='url(#msoGlow)'
          >
            <animate
              attributeName='r'
              values='48;51;48'
              dur='3s'
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
            MSO
          </text>
          <text
            x='200'
            y='210'
            textAnchor='middle'
            className='fill-white/80 text-[9px]'
          >
            Insight Hub
          </text>
        </g>

        {/* Pulse rings */}
        <circle
          cx='200'
          cy='200'
          r='50'
          fill='none'
          stroke='hsl(var(--primary))'
          strokeWidth='1'
          opacity='0'
        >
          <animate
            attributeName='r'
            values='50;100'
            dur='2.5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.5;0'
            dur='2.5s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
}

const ManagedServiceOrgs = () => {
  const msoBenefits = [
    { icon: Eye, text: 'Understanding engagement and utilization patterns across practices' },
    { icon: TrendingUp, text: 'Identifying trends that point to operational or care-related issues' },
    { icon: Users, text: 'Supporting practices with insight instead of assumptions' },
    { icon: BarChart3, text: 'Sharing clear, high-level views with leadership and partners' },
    { icon: Building2, text: 'Scaling support without scaling manual work' },
  ]

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Multi-Practice Analytics',
      description:
        'Unified visibility across all practices in your organization. See engagement, utilization, and outcomes without piecing together updates.',
    },
    {
      icon: Bot,
      title: 'Centralized Support Tools',
      description:
        'AI-powered tools that work across your organization, helping practices handle inquiries and triage while you maintain oversight.',
    },
    {
      icon: Megaphone,
      title: 'Organization-Wide Insights',
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
                Supporting Practices with{' '}
                <span className='text-primary'>Data</span>
              </h1>

              <p className='text-xl text-muted-foreground mb-8'>
                Helping Managed Service Organizations bring clarity, consistency, and confidence with AI powered data solutions.
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
                  Multi-practice ready
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  AI-powered
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Non-disruptive
                </span>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className='lg:pl-8'>
              <MSOVisualization />
            </div>
          </div>
        </div>
      </GridSection>

      {/* Seeing the Bigger Picture */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Seeing the Bigger Picture
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              MSOs need visibility without micromanagement. Health Compiler brings together the data that helps you:
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {msoBenefits.map((benefit, index) => (
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

      {/* How We Support MSOs */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-center'>
            How We Support Managed Service Organizations
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
              Built to Support, Not Disrupt
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              Practices continue using the tools and workflows they are comfortable with.
            </p>
            <p className='text-xl font-semibold text-foreground mb-12'>
              Health Compiler works quietly in the background, creating a shared layer of insight.
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

      {/* Why This Matters */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
                <Shield className='h-4 w-4' />
                MSO Ready
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Why This Matters for MSOs
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                Strong MSOs are measured by how well they support consistency, quality, and growth across practices. Health Compiler helps MSOs stay ahead.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Drive consistent quality across all practices</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Maintain high standards through visibility</span>
                </div>
                <div className='flex items-center gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Scale operations confidently</span>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/20'>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    { icon: Building2, label: 'Consistency' },
                    { icon: Shield, label: 'Quality' },
                    { icon: TrendingUp, label: 'Growth' },
                    { icon: Eye, label: 'Visibility' },
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
              Ready for Clearer Insight Across Your Organization?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              If you support multiple practices and want better visibility without added operational burden, let's talk.
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

export default ManagedServiceOrgs
