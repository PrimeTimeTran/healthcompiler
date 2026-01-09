import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, Brain, Bot, TrendingUp, Quote } from 'lucide-react'

// Import images
import engagementUtilization from '@/assets/dpc-engagement-utilization.png'
import careGaps from '@/assets/dpc-care-gaps.png'

// Integration logos
import elationLogo from '@/assets/elation-logo.png'
import hintLogo from '@/assets/hint-logo.png'
import akuteLogo from '@/assets/akute-health-logo.png'

// DPC Data Clarity Visualization
const DPCClarityVisualization = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  const dataStreams = [
    { label: 'Engagement', color: 'hsl(217, 91%, 60%)' },
    { label: 'Utilization', color: 'hsl(142, 76%, 36%)' },
    { label: 'Outcomes', color: 'hsl(280, 65%, 60%)' },
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
            id='dpcCoreGradient'
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
          <filter id='dpcGlow'>
            <feGaussianBlur
              stdDeviation='3'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='dpcSoftGlow'>
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

        {/* Outer ring - pulsing */}
        <circle
          cx='200'
          cy='200'
          r='150'
          fill='none'
          stroke='hsl(var(--border))'
          strokeWidth='1'
          strokeDasharray='8 4'
          opacity='0.3'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 200 200'
            to='360 200 200'
            dur='60s'
            repeatCount='indefinite'
          />
        </circle>

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
                filter={isActive ? 'url(#dpcGlow)' : ''}
                opacity={isActive ? 1 : 0.5}
              >
                <animateMotion
                  dur={`${2 + i * 0.3}s`}
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

        {/* Central clarity core */}
        <g>
          {/* Outer glow ring */}
          <circle
            cx='200'
            cy='200'
            r='70'
            fill='url(#dpcCoreGradient)'
            opacity='0.15'
            filter='url(#dpcSoftGlow)'
          >
            <animate
              attributeName='r'
              values='70;75;70'
              dur='3s'
              repeatCount='indefinite'
            />
          </circle>

          {/* Main core circle */}
          <circle
            cx='200'
            cy='200'
            r='55'
            fill='url(#dpcCoreGradient)'
            filter='url(#dpcGlow)'
          >
            <animate
              attributeName='r'
              values='55;58;55'
              dur='2s'
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
            Clarity
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
          stroke='hsl(var(--primary))'
          strokeWidth='1'
          opacity='0'
        >
          <animate
            attributeName='r'
            values='60;120'
            dur='2s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.5;0'
            dur='2s'
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
            dur='2s'
            begin='1s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.5;0'
            dur='2s'
            begin='1s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
}

const DirectPrimaryCare = () => {
  const dataNeeds = [
    'Understand patient engagement and utilization',
    'Track care gaps, outcomes, and trends over time',
    'Reduce manual effort at the front desk',
    'Support sustainable growth',
    'Clearly demonstrate value to employers and partners',
  ]

  const supportFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description:
        'Clear views into engagement, utilization, avoidance, and outcomes across your patient panel.',
      subtext:
        'Designed to support better decisions inside the practice and provide simple, credible reporting when employers need to understand impact.',
    },
    {
      icon: Bot,
      title: 'AI Agents for Front Desk Support',
      description: 'Two AI agents built specifically for DPC workflows:',
      bullets: [
        'An AI receptionist that handles new patient inquiries',
        'A triage agent that supports existing patients and routes requests appropriately',
      ],
      subtext:
        'The result is less front-desk overload and a more responsive patient experience.',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Automation for Steady Growth',
      description:
        'Quiet systems that help practices follow up consistently, stay visible, and convert interest into long-term relationships—without adding operational noise.',
    },
  ]

  const testimonials = [
    {
      quote:
        'Health Compiler gives us clarity without adding complexity. It helps us understand our practice and communicate value externally.',
      author: 'DPC Practice Owner',
    },
    {
      quote:
        'The data finally feels usable, and the automation actually helps day to day.',
      author: 'DPC Practice Manager',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 lg:py-32 overflow-hidden'>
        {/* Subtle grid pattern */}
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left: Text */}
            <div className='max-w-xl'>
              {/* Pill thingy */}
              {/* <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
                <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
                Direct Primary Care
              </div> */}

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight'>
                <span className='text-primary'>Direct Primary Care </span>
                Supported With Clarity
              </h1>

              <p className='text-lg text-muted-foreground mb-4'>
                Health Compiler supports Direct Primary Care practices with
                AI-powered data and growth solutions that make day-to-day
                operations simpler and long-term value easier to show.
              </p>
              <p className='text-lg text-muted-foreground mb-8'>
                We work alongside your existing tools to give you clear insight
                into engagement, utilization, outcomes, and growth—without
                changing how you practice medicine.
              </p>

              <div className='flex flex-wrap gap-4 mb-6'>
                <Button
                  asChild
                  size='lg'
                  className='gap-2 bg-primary hover:bg-primary/90'
                >
                  <Link to='/contact'>Book a Demo</Link>
                </Button>
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
              <DPCClarityVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* One Place for Data Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              One Place for the Data DPC Practices Need
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              Direct Primary Care generates meaningful data every day.
            </p>
            <p className='text-lg text-muted-foreground mb-8'>
              The challenge is turning that data into something useful.
            </p>
            <p className='text-lg text-muted-foreground mb-6'>
              Health Compiler brings it together so practices can:
            </p>
            <div className='space-y-4 mb-8'>
              {dataNeeds.map((need, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{need}</p>
                </div>
              ))}
            </div>
            <p className='text-lg text-muted-foreground'>
              All without disrupting existing workflows.
            </p>
          </div>
        </div>
      </section>

      {/* How We Support DPC Practices */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-12 text-center'>
            How We Support DPC Practices
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
        </div>
      </section>

      {/* Built to Fit Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Built to Fit Into Your Existing Workflow
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              Health Compiler integrates seamlessly with the tools DPC practices
              already use.
            </p>
            <p className='text-lg text-muted-foreground'>
              No switching systems. No retraining teams.
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
          <p className='text-center text-sm text-muted-foreground mt-6'>
            EHRs, communication tools, scheduling, forms, and more
          </p>
        </div>
      </section>

      {/* Employer Conversations Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Designed to Support Employer Conversations
              </h2>
              <p className='text-lg text-muted-foreground mb-4'>
                As more DPC practices work with employers, the ability to show
                value matters.
              </p>
              <p className='text-lg text-muted-foreground'>
                Health Compiler provides clear, high-level insight into
                utilization, engagement, outcomes, and avoidance—making employer
                conversations easier and more credible.
              </p>
            </div>
            <div>
              <img
                src={engagementUtilization}
                alt='Employer Analytics Dashboard'
                className='rounded-lg shadow-lg w-full'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-12 text-center'>
            What DPC Practices Say
          </h2>
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='bg-muted/30 rounded-xl p-8 relative'
              >
                <Quote className='h-8 w-8 text-primary/20 absolute top-6 left-6' />
                <p className='text-lg text-foreground mb-4 relative z-10 pl-6'>
                  "{testimonial.quote}"
                </p>
                <p className='text-sm text-muted-foreground pl-6'>
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Layer Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              A Support Layer for How DPC Actually Works
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              Health Compiler is not another system to manage.
            </p>
            <p className='text-lg text-muted-foreground'>
              It is a support layer that helps DPC practices operate with
              confidence, show impact, and grow intentionally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary/5'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
            Ready to See How This Fits Your Practice?
          </h2>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-primary hover:bg-primary/90'
            >
              <Link to='/contact'>Book a Demo</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
            >
              <Link to='/contact'>Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DirectPrimaryCare
