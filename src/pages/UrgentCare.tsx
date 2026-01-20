import { useState, useEffect } from 'react'
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
import elationLogo from '@/assets/elation-logo.png'
import hintLogo from '@/assets/hint-logo.png'
import akuteLogo from '@/assets/akute-health-logo.png'

// Urgent Care Visualization - SVG Arc Style
const UrgentCareVisualization = () => {
  const [activeSegment, setActiveSegment] = useState(0)

  const segments = [
    { label: 'Throughput', color: 'hsl(var(--primary))' },
    { label: 'Utilization', color: 'hsl(217, 91%, 60%)' },
    { label: 'Performance', color: 'hsl(142, 76%, 36%)' },
    { label: 'Revenue', color: 'hsl(262, 83%, 58%)' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segments.length)
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
            id='ucCoreGradient'
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
              stopColor='hsl(142, 76%, 36%)'
            />
          </linearGradient>
          <filter id='ucGlow'>
            <feGaussianBlur
              stdDeviation='3'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='ucSoftGlow'>
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

        {/* Background rings */}
        <circle
          cx='200'
          cy='200'
          r='160'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='4 4'
          opacity='0.3'
        />
        <circle
          cx='200'
          cy='200'
          r='120'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='2 2'
          opacity='0.2'
        />

        {/* Data arc segments */}
        {segments.map((segment, i) => {
          const startAngle = (i * 90 - 90) * (Math.PI / 180)
          const endAngle = ((i + 1) * 90 - 90) * (Math.PI / 180)
          const innerRadius = 75
          const outerRadius = 95
          const isActive = i <= activeSegment

          const x1Inner = 200 + Math.cos(startAngle) * innerRadius
          const y1Inner = 200 + Math.sin(startAngle) * innerRadius
          const x1Outer = 200 + Math.cos(startAngle) * outerRadius
          const y1Outer = 200 + Math.sin(startAngle) * outerRadius
          const x2Inner = 200 + Math.cos(endAngle) * innerRadius
          const y2Inner = 200 + Math.sin(endAngle) * innerRadius
          const x2Outer = 200 + Math.cos(endAngle) * outerRadius
          const y2Outer = 200 + Math.sin(endAngle) * outerRadius

          const d = `M ${x1Inner} ${y1Inner} 
                     L ${x1Outer} ${y1Outer} 
                     A ${outerRadius} ${outerRadius} 0 0 1 ${x2Outer} ${y2Outer}
                     L ${x2Inner} ${y2Inner}
                     A ${innerRadius} ${innerRadius} 0 0 0 ${x1Inner} ${y1Inner}`

          return (
            <path
              key={segment.label}
              d={d}
              fill={isActive ? segment.color : 'hsl(var(--muted))'}
              opacity={isActive ? (i === activeSegment ? 1 : 0.7) : 0.2}
              filter={i === activeSegment ? 'url(#ucGlow)' : ''}
              className='transition-all duration-500'
            />
          )
        })}

        {/* Segment labels */}
        {segments.map((segment, i) => {
          const angle = (i * 90 + 45 - 90) * (Math.PI / 180)
          const labelRadius = 135
          const x = 200 + Math.cos(angle) * labelRadius
          const y = 200 + Math.sin(angle) * labelRadius
          const isActive = i === activeSegment

          return (
            <g key={`label-${segment.label}`}>
              <circle
                cx={x}
                cy={y}
                r='28'
                fill={isActive ? segment.color : 'hsl(var(--card))'}
                stroke={isActive ? segment.color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                filter={isActive ? 'url(#ucGlow)' : ''}
                className='transition-all duration-300'
              />
              <text
                x={x}
                y={y + 4}
                textAnchor='middle'
                className={`text-[8px] font-medium ${
                  isActive ? 'fill-white' : 'fill-muted-foreground'
                }`}
              >
                {segment.label}
              </text>
            </g>
          )
        })}

        {/* Central core */}
        <g>
          <circle
            cx='200'
            cy='200'
            r='55'
            fill='url(#ucCoreGradient)'
            opacity='0.15'
            filter='url(#ucSoftGlow)'
          >
            <animate
              attributeName='r'
              values='55;60;55'
              dur='3s'
              repeatCount='indefinite'
            />
          </circle>

          <circle
            cx='200'
            cy='200'
            r='45'
            fill='url(#ucCoreGradient)'
            filter='url(#ucGlow)'
          >
            <animate
              attributeName='r'
              values='45;48;45'
              dur='2s'
              repeatCount='indefinite'
            />
          </circle>

          <circle
            cx='200'
            cy='200'
            r='35'
            fill='hsl(var(--card))'
            opacity='0.2'
          />

          <text
            x='200'
            y='195'
            textAnchor='middle'
            className='fill-white text-[11px] font-semibold'
          >
            Multi-Site
          </text>
          <text
            x='200'
            y='210'
            textAnchor='middle'
            className='fill-white/80 text-[9px]'
          >
            Intelligence
          </text>
        </g>

        {/* Pulse effect */}
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
            values='50;90'
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

        {/* Data particles */}
        {[0, 1, 2].map((i) => (
          <circle
            key={`particle-${i}`}
            r='4'
            fill='hsl(var(--primary))'
            opacity='0.8'
          >
            <animateMotion
              dur={`${3 + i * 0.5}s`}
              repeatCount='indefinite'
              path='M0,160 Q80,80 0,0 Q-80,-80 0,-160 Q80,-80 0,0 Q-80,80 0,160'
              begin={`${i * 1}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  )
}
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
              <UrgentCareVisualization />
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
