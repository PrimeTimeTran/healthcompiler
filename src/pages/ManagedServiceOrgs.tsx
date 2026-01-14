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
} from 'lucide-react'
import { CTAButton, GridSection } from '@/components/ui'

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
              {/* Connection line to center */}
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

              {/* Data flow particle */}
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

              {/* Practice node */}
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
          {/* Outer glow */}
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

          {/* Main hub */}
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

          {/* Inner highlight */}
          <circle
            cx='200'
            cy='200'
            r='40'
            fill='hsl(var(--card))'
            opacity='0.15'
          />

          {/* Hub text */}
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
  const msoCapabilities = [
    'Understanding engagement and utilization patterns across practices',
    'Identifying trends that point to operational or care-related issues',
    'Supporting practices with insight instead of assumptions',
    'Sharing clear, high-level views with leadership and partners',
    'Scaling support without scaling manual work',
  ]

  const valueProps = [
    {
      icon: Eye,
      title: 'Complete Visibility',
      description:
        'See engagement and utilization patterns across all practices from one unified view.',
    },
    {
      icon: TrendingUp,
      title: 'Trend Identification',
      description:
        'Spot operational and care-related issues before they become problems.',
    },
    {
      icon: Users,
      title: 'Informed Support',
      description:
        'Guide practices with data-driven insights instead of assumptions.',
    },
    {
      icon: BarChart3,
      title: 'Leadership Reporting',
      description:
        'Share clear, actionable views with leadership and partners effortlessly.',
    },
  ]

  const whyMatters = [
    {
      icon: Building2,
      title: 'Consistency',
      description:
        'Drive consistent quality across all practices without forcing uniformity.',
    },
    {
      icon: Shield,
      title: 'Quality',
      description:
        'Maintain high standards through visibility and proactive support.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Scale operations confidently with clear signals to act on.',
    },
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

              <p className='text-lg text-muted-foreground mb-8'>
                Helping Managed Service Organizations bring clarity,
                consistency, and confidence with AI powered data solutions.
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
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Seeing the Bigger Picture
            </h2>
            <p className='text-lg text-muted-foreground mb-6'>
              We give MSOs a clearer view across the organizations they support.
            </p>
            <p className='text-lg text-muted-foreground mb-6'>
              Instead of piecing together updates, MSOs can understand how
              practices are engaging patients, how care is being used, and where
              coordination or support can make the biggest difference.
            </p>
            <p className='text-lg text-muted-foreground'>
              This creates alignment without interfering with how individual
              practices operate.
            </p>
          </div>
        </div>
      </section>

      {/* What Becomes Easier */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
              What Becomes Easier for MSOs
            </h2>
            <div className='space-y-4 mb-8'>
              {msoCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{capability}</p>
                </div>
              ))}
            </div>
            <p className='text-lg text-muted-foreground mb-8'>
              The result is less guesswork and more informed decision-making.
            </p>
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

      {/* Value Props Grid */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className='bg-muted/30 rounded-xl p-6 border border-border'
              >
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <prop.icon className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-lg font-bold text-foreground mb-2'>
                  {prop.title}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Support, Not Disrupt */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Built to Support, Not Disrupt
            </h2>
            <p className='text-lg text-muted-foreground mb-6'>
              Practices continue using the tools and workflows they are
              comfortable with.
            </p>
            <p className='text-lg text-muted-foreground mb-6'>
              Health Compiler works quietly in the background, creating a shared
              layer of insight for the MSO.
            </p>
            <p className='text-lg text-muted-foreground'>
              This makes it easier to guide, support, and standardize where it
              matters without forcing uniformity everywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Why This Matters for Managed Service Organizations
            </h2>
            <p className='text-lg text-muted-foreground'>
              Strong MSOs are measured by how well they support consistency,
              quality, and growth across practices. Health Compiler helps MSOs
              stay ahead by turning everyday activity into clear signals they
              can act on.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {whyMatters.map((item, index) => (
              <div
                key={index}
                className='text-center p-8 bg-muted/30 rounded-xl border border-border'
              >
                <div className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <item.icon className='h-7 w-7 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-foreground mb-3'>
                  {item.title}
                </h3>
                <p className='text-muted-foreground'>{item.description}</p>
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
              Ready for Clearer Insight Across Your Organization?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              If you support multiple practices and want better visibility
              without added operational burden, let's talk.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <CTAButton
                link='/contact'
                text='Request a Demo'
                suffixIconDefault
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ManagedServiceOrgs
