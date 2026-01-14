import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Bot,
  Eye,
  Users,
  Heart,
  Clock,
  Activity,
  BarChart3,
  Megaphone,
  Workflow,
  Handshake,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from 'lucide-react'
import { CTAButton, GridSection } from '@/components/ui'

// Weight Loss Progress Visualization
const ProgressVisualization = () => {
  const [activeStage, setActiveStage] = useState(0)

  const stages = [
    { label: 'Engagement', color: 'hsl(var(--primary))' },
    { label: 'Adherence', color: 'hsl(217, 91%, 60%)' },
    { label: 'Progress', color: 'hsl(142, 76%, 36%)' },
    { label: 'Outcomes', color: 'hsl(262, 83%, 58%)' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
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
            id='progressCoreGradient'
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
          <filter id='progressGlow'>
            <feGaussianBlur
              stdDeviation='3'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter id='progressSoftGlow'>
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

        {/* Progress arc segments */}
        {stages.map((stage, i) => {
          const startAngle = (i * 90 - 90) * (Math.PI / 180)
          const endAngle = ((i + 1) * 90 - 90) * (Math.PI / 180)
          const innerRadius = 75
          const outerRadius = 95
          const isActive = i <= activeStage

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
              key={stage.label}
              d={d}
              fill={isActive ? stage.color : 'hsl(var(--muted))'}
              opacity={isActive ? (i === activeStage ? 1 : 0.7) : 0.2}
              filter={i === activeStage ? 'url(#progressGlow)' : ''}
              className='transition-all duration-500'
            />
          )
        })}

        {/* Stage labels */}
        {stages.map((stage, i) => {
          const angle = (i * 90 + 45 - 90) * (Math.PI / 180)
          const labelRadius = 135
          const x = 200 + Math.cos(angle) * labelRadius
          const y = 200 + Math.sin(angle) * labelRadius
          const isActive = i === activeStage

          return (
            <g key={`label-${stage.label}`}>
              <circle
                cx={x}
                cy={y}
                r='28'
                fill={isActive ? stage.color : 'hsl(var(--card))'}
                stroke={isActive ? stage.color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                filter={isActive ? 'url(#progressGlow)' : ''}
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
                {stage.label}
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
            fill='url(#progressCoreGradient)'
            opacity='0.15'
            filter='url(#progressSoftGlow)'
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
            fill='url(#progressCoreGradient)'
            filter='url(#progressGlow)'
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
            Long-Term
          </text>
          <text
            x='200'
            y='210'
            textAnchor='middle'
            className='fill-white/80 text-[9px]'
          >
            Progress
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

const MedicalWeightLoss = () => {
  const journeyBenefits = [
    { icon: Users, text: 'Track patient engagement and follow-through' },
    { icon: TrendingUp, text: 'Monitor progress and outcomes over time' },
    { icon: AlertCircle, text: 'Identify gaps before patients drop off' },
    { icon: Clock, text: 'Support care teams with timely insight' },
    {
      icon: Handshake,
      text: 'Share clear progress with patients and partners',
    },
  ]

  const solutions = [
    {
      icon: BarChart3,
      title: 'AI-Powered Analytics',
      description:
        'See engagement, utilization, and outcome trends across your patient population. Designed to support proactive care and long-term progress.',
    },
    {
      icon: Bot,
      title: 'AI Support for Communication and Triage',
      description:
        'AI support for new inquiries and ongoing triage, helping teams keep up with calls, questions, and follow-ups from patients.',
    },
    {
      icon: Megaphone,
      title: 'Marketing Automation for Program Growth',
      description:
        'Consistent follow-ups and outreach without extra manual effort. Designed to support patient education, retention, and steady program growth.',
    },
  ]

  const integrationLogos = [
    { name: 'Elation', src: '/src/assets/elation-logo.png' },
    { name: 'Hint', src: '/src/assets/hint-logo.png' },
    { name: 'Akute', src: '/src/assets/akute-health-logo.png' },
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Clear Insight for{' '}
                <span className='text-primary'>
                  Long-Term Weight Loss Progress
                </span>{' '}
              </h1>

              <p className='text-xl text-muted-foreground mb-8'>
                Clear data helps teams understand what is working, where
                patients disengage, and when support is needed.
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
                  Patient engagement
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Outcome tracking
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Proactive care
                </span>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className='lg:pl-8'>
              <ProgressVisualization />
            </div>
          </div>
        </div>
      </GridSection>

      {/* Seeing Progress Beyond the Scale */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Seeing Progress Beyond the Scale
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Track adherence and outcomes across the patient journey. Bringing
              that information together makes it easier to:
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {journeyBenefits.map((benefit, index) => (
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

      {/* How We Support Medical Weight Loss Programs */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-center'>
            How We Support Medical Weight Loss Programs
          </h2>
          <p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Comprehensive tools designed to help your program thrive
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
              Health Compiler integrates with the tools medical weight-loss
              teams already use.
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

      {/* Designed for Accountability and Outcomes */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
                <Activity className='h-4 w-4' />
                Accountability
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Designed for Accountability and Outcomes
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                Medical weight loss depends on sustained engagement and
                measurable progress.
              </p>
              <p className='text-lg text-foreground font-medium'>
                Clear insight helps teams stay aligned, patients stay supported,
                and outcomes stay visible.
              </p>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20'>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    { icon: Heart, label: 'Engagement' },
                    { icon: Eye, label: 'Visibility' },
                    { icon: TrendingUp, label: 'Progress' },
                    { icon: CheckCircle, label: 'Outcomes' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className='bg-background rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow'
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

      {/* Final CTA Section */}
      <section className='py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Ready to See How This Fits Your Program?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Get started with clear insights for your medical weight loss
              program.
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
                className='gap-2'
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

export default MedicalWeightLoss
