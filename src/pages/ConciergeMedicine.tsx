import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Bot,
  Brain,
  Heart,
  Users,
  Shield,
  TrendingUp,
  CheckCircle,
} from 'lucide-react'

// Integration logos
import elationLogo from '@/assets/elation-logo.png'
import hintLogo from '@/assets/hint-logo.png'
import akuteLogo from '@/assets/akute-health-logo.png'
import { CTAButton, GridSection } from '@/components/ui'

// Concierge Care Visualization
const ConciergeCareVisualization = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  const dataStreams = [
    { label: 'Engagement', color: 'hsl(217, 91%, 60%)' },
    { label: 'Outcomes', color: 'hsl(142, 76%, 36%)' },
    { label: 'Trends', color: 'hsl(280, 65%, 60%)' },
    { label: 'Growth', color: 'hsl(45, 93%, 47%)' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % dataStreams.length)
    }, 2000)
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
            id='conciergeCoreGradient'
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
              stopColor='hsl(280, 65%, 60%)'
            />
          </linearGradient>
          <filter id='conciergeGlow'>
            <feGaussianBlur
              stdDeviation='3'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='conciergeSoftGlow'>
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

        {/* Outer ring - elegant rotation */}
        <circle
          cx='200'
          cy='200'
          r='150'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='12 6'
          opacity='0.3'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 200 200'
            to='360 200 200'
            dur='80s'
            repeatCount='indefinite'
          />
        </circle>

        {/* Premium service rings */}
        <circle
          cx='200'
          cy='200'
          r='120'
          fill='none'
          stroke='hsl(280, 65%, 60%)'
          strokeWidth='0.5'
          opacity='0.2'
        />
        <circle
          cx='200'
          cy='200'
          r='100'
          fill='none'
          stroke='hsl(var(--primary))'
          strokeWidth='0.5'
          opacity='0.3'
        />

        {/* Data stream paths flowing inward */}
        {dataStreams.map((stream, i) => {
          const angle = (i * 90 - 45) * (Math.PI / 180)
          const startX = 200 + Math.cos(angle) * 160
          const startY = 200 + Math.sin(angle) * 160
          const midX = 200 + Math.cos(angle) * 100
          const midY = 200 + Math.sin(angle) * 100
          const isActive = i === activeMetric

          return (
            <g key={stream.label}>
              {/* Connection path */}
              <path
                d={`M${startX},${startY} Q${midX},${midY} 200,200`}
                fill='none'
                stroke={isActive ? stream.color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray={isActive ? '0' : '4 4'}
                opacity={isActive ? 0.8 : 0.3}
                className='transition-all duration-500'
              />

              {/* Animated particle flowing inward */}
              <circle
                r={isActive ? '5' : '3'}
                fill={stream.color}
                filter={isActive ? 'url(#conciergeGlow)' : ''}
                opacity={isActive ? 1 : 0.5}
              >
                <animateMotion
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount='indefinite'
                  path={`M${startX - 200},${startY - 200} Q${midX - 200},${
                    midY - 200
                  } 0,0`}
                />
              </circle>

              {/* Data label node */}
              <g>
                <rect
                  x={startX - 45}
                  y={startY - 14}
                  width='90'
                  height='28'
                  rx='14'
                  fill='hsl(var(--card))'
                  stroke={isActive ? stream.color : 'hsl(var(--border))'}
                  strokeWidth={isActive ? '2' : '1'}
                  className='transition-all duration-300'
                />
                <text
                  x={startX}
                  y={startY + 5}
                  textAnchor='middle'
                  className='fill-foreground text-[11px] font-medium'
                >
                  {stream.label}
                </text>
              </g>
            </g>
          )
        })}

        {/* Central premium core */}
        <g>
          {/* Outer glow ring */}
          <circle
            cx='200'
            cy='200'
            r='70'
            fill='url(#conciergeCoreGradient)'
            opacity='0.15'
            filter='url(#conciergeSoftGlow)'
          >
            <animate
              attributeName='r'
              values='70;75;70'
              dur='4s'
              repeatCount='indefinite'
            />
          </circle>

          {/* Main core circle */}
          <circle
            cx='200'
            cy='200'
            r='55'
            fill='url(#conciergeCoreGradient)'
            filter='url(#conciergeGlow)'
          >
            <animate
              attributeName='r'
              values='55;58;55'
              dur='3s'
              repeatCount='indefinite'
            />
          </circle>

          {/* Inner highlight */}
          <circle
            cx='200'
            cy='200'
            r='45'
            fill='hsl(var(--card))'
            opacity='0.15'
          />

          {/* Core text */}
          <text
            x='200'
            y='195'
            textAnchor='middle'
            className='fill-white text-[12px] font-semibold'
          >
            Insight
          </text>
          <text
            x='200'
            y='212'
            textAnchor='middle'
            className='fill-white/80 text-[10px]'
          >
            Layer
          </text>
        </g>

        {/* Insight pulses emanating from center */}
        <circle
          cx='200'
          cy='200'
          r='60'
          fill='none'
          stroke='hsl(280, 65%, 60%)'
          strokeWidth='1'
          opacity='0'
        >
          <animate
            attributeName='r'
            values='60;120'
            dur='3s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0'
            dur='3s'
            repeatCount='indefinite'
          />
        </circle>
        <circle
          cx='200'
          cy='200'
          r='60'
          fill='none'
          stroke='hsl(var(--primary))'
          strokeWidth='1'
          opacity='0'
        >
          <animate
            attributeName='r'
            values='60;120'
            dur='3s'
            begin='1.5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0'
            dur='3s'
            begin='1.5s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
}

const ConciergeMedicine = () => {
  const practiceInsights = [
    'Understand patient engagement and utilization',
    'Track outcomes and care trends over time',
    'Identify gaps before they affect continuity',
    'Support thoughtful, sustainable growth',
    'Clearly communicate value to patients and partners',
  ]

  const supportFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description:
        'Clear views into engagement, utilization, outcomes, and trends across your patient panel.',
      subtext:
        'Designed to support confident decisions and thoughtful care planning.',
    },
    {
      icon: Bot,
      title: 'AI Agents for Patient Interaction',
      description: 'Two AI agents built for concierge practice workflows:',
      bullets: [
        'An AI receptionist for new inquiries',
        'A triage agent for existing patients',
      ],
      subtext:
        'Built to support responsiveness without replacing the human touch.',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Automation',
      description:
        'Automation that helps practices stay visible and follow up consistently, without adding extra work.',
    },
  ]

  const valueProps = [
    {
      icon: Heart,
      title: 'Preserves Personal Care',
      description:
        'Technology that supports, never replaces, the high-touch relationship.',
    },
    {
      icon: Shield,
      title: 'Shows Impact Clearly',
      description:
        'Demonstrate value to patients and partners with clear, credible data.',
    },
    {
      icon: Users,
      title: 'Supports Growth',
      description:
        'Scale thoughtfully while maintaining the quality your patients expect.',
    },
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Clear Insight for{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                  Concierge Care
                </span>
              </h1>

              <p className='text-lg text-muted-foreground mb-8'>
                See engagement, outcomes, and trends across your patient panel
                without disrupting high-touch care.
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
                  High-touch friendly
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  AI-powered
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Premium care ready
                </span>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className='lg:pl-8'>
              <ConciergeCareVisualization />
            </div>
          </div>
        </div>
      </GridSection>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              One Place for Meaningful Practice Insight
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Health Compiler helps practices:
            </p>
            <div className='space-y-4 mb-8'>
              {practiceInsights.map((insight, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{insight}</p>
                </div>
              ))}
            </div>
            <p className='text-lg text-muted-foreground'>
              All while preserving the personal nature of concierge care.
            </p>
          </div>
        </div>
      </section>

      {/* How We Support Concierge Practices */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-12 text-center'>
            How We Support Concierge Practices
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className='bg-background rounded-xl p-8 shadow-sm border border-border'
              >
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6'>
                  <feature.icon className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-foreground mb-4'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground mb-4'>
                  {feature.description}
                </p>
                {feature.bullets && (
                  <ul className='space-y-2 mb-4'>
                    {feature.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className='flex items-start gap-2 text-muted-foreground'
                      >
                        <span className='text-primary mt-1'>•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {feature.subtext && (
                  <p className='text-sm text-muted-foreground italic'>
                    {feature.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className='text-center mt-10'>
            <Button
              asChild
              variant='outline'
              size='lg'
            >
              <Link to='/capabilities'>Explore</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fits Your Existing Workflow */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Fits Your Existing Workflow
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              Health Compiler integrates seamlessly with the tools concierge
              practices already use.
            </p>
            <p className='text-lg text-muted-foreground'>
              No workflow disruption. No forced changes.
            </p>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12'>
            <img
              src={elationLogo}
              alt='Elation Health'
              className='h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity'
            />
            <img
              src={hintLogo}
              alt='Hint Health'
              className='h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity'
            />
            <img
              src={akuteLogo}
              alt='Akute Health'
              className='h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity'
            />
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              A Support Layer for Personalized Care
            </h2>
            <p className='text-lg text-muted-foreground'>
              Health Compiler works in the background, helping concierge
              practices operate with clarity, show impact, and maintain the
              level of care patients expect.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className='text-center p-8 bg-background rounded-xl border border-border'
              >
                <div className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <prop.icon className='h-7 w-7 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-foreground mb-3'>
                  {prop.title}
                </h3>
                <p className='text-muted-foreground'>{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Ready to See How This Fits Your Practice?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Discover how Health Compiler can support your concierge practice
              with clear insight and thoughtful automation.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <CTAButton
                link='/contact'
                text='Book a Demo'
                suffixIconDefault
              />
              <Button
                asChild
                variant='outline'
                size='lg'
              >
                <Link to='/contact'>Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ConciergeMedicine
