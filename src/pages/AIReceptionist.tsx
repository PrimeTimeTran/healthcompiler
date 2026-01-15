import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CTAButton, GridSection } from '@/components/ui'
import {
  Phone,
  MessageSquare,
  Globe,
  Calendar,
  Mail,
  Users,
  AlertCircle,
  PhoneCall,
  Brain,
  Zap,
  ArrowUpRight,
  UserPlus,
  Bell,
  Shield,
  HelpCircle,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const AIReceptionistFlow = () => {
  const [activeOutcome, setActiveOutcome] = useState(0)

  const inputs = [
    { icon: Phone, label: 'Calls' },
    { icon: MessageSquare, label: 'SMS' },
    { icon: Globe, label: 'Web Chat' },
  ]

  const outcomes = [
    { icon: Calendar, label: 'Scheduled', color: 'hsl(142, 76%, 36%)' },
    { icon: Mail, label: 'Message Sent', color: 'hsl(217, 91%, 60%)' },
    { icon: Users, label: 'Task Routed', color: 'hsl(45, 93%, 47%)' },
    { icon: AlertCircle, label: 'Escalated', color: 'hsl(0, 84%, 60%)' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOutcome((prev) => (prev + 1) % outcomes.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative w-full h-[400px] flex items-center justify-center'>
      <svg
        viewBox='0 0 500 350'
        className='w-full h-full max-w-lg'
      >
        <defs>
          <linearGradient
            id='aiGradient'
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
              stopColor='hsl(var(--accent))'
            />
          </linearGradient>
          <filter id='glow'>
            <feGaussianBlur
              stdDeviation='4'
              result='blur'
            />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        {/* Input channels */}
        {inputs.map((input, i) => {
          const y = 100 + i * 75
          return (
            <g key={input.label}>
              {/* Connection line */}
              <path
                d={`M80,${y} Q150,${y} 200,175`}
                fill='none'
                stroke='hsl(var(--border))'
                strokeWidth='2'
                strokeDasharray='4 4'
                opacity='0.5'
              />
              {/* Animated particle */}
              <circle
                r='4'
                fill='hsl(var(--primary))'
                filter='url(#glow)'
              >
                <animateMotion
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount='indefinite'
                  path={`M80,${y} Q150,${y} 200,175`}
                />
              </circle>
              {/* Input node */}
              <circle
                cx='60'
                cy={y}
                r='28'
                fill='hsl(var(--card))'
                stroke='hsl(var(--border))'
                strokeWidth='1'
              />
              <text
                x='60'
                y={y + 4}
                textAnchor='middle'
                className='fill-foreground text-[10px] font-medium'
              >
                {input.label}
              </text>
            </g>
          )
        })}

        {/* Central AI Receptionist */}
        <g>
          <circle
            cx='250'
            cy='175'
            r='55'
            fill='url(#aiGradient)'
            filter='url(#glow)'
          >
            <animate
              attributeName='r'
              values='55;58;55'
              dur='2s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx='250'
            cy='175'
            r='45'
            fill='hsl(var(--card))'
            opacity='0.2'
          />
          <text
            x='250'
            y='170'
            textAnchor='middle'
            className='fill-white text-[11px] font-semibold'
          >
            AI
          </text>
          <text
            x='250'
            y='185'
            textAnchor='middle'
            className='fill-white text-[10px]'
          >
            Receptionist
          </text>
        </g>

        {/* Output outcomes */}
        {outcomes.map((outcome, i) => {
          const y = 70 + i * 70
          const isActive = i === activeOutcome
          return (
            <g key={outcome.label}>
              {/* Connection line */}
              <path
                d={`M300,175 Q350,${y} 400,${y}`}
                fill='none'
                stroke={isActive ? outcome.color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray={isActive ? '0' : '4 4'}
                opacity={isActive ? 0.8 : 0.4}
                className='transition-all duration-500'
              />
              {/* Animated particle when active */}
              {isActive && (
                <circle
                  r='4'
                  fill={outcome.color}
                  filter='url(#glow)'
                >
                  <animateMotion
                    dur='1s'
                    repeatCount='indefinite'
                    path={`M300,175 Q350,${y} 400,${y}`}
                  />
                </circle>
              )}
              {/* Outcome node */}
              <rect
                x='400'
                y={y - 18}
                width='85'
                height='36'
                rx='6'
                fill='hsl(var(--card))'
                stroke={isActive ? outcome.color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                className='transition-all duration-300'
              />
              <text
                x='442'
                y={y + 4}
                textAnchor='middle'
                className='fill-foreground text-[10px]'
              >
                {outcome.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// Step component for How It Works
const ProcessStep = ({
  step,
  title,
  description,
  icon: Icon,
  isActive,
  isLast,
}: {
  step: number
  title: string
  description: string
  icon: React.ElementType
  isActive: boolean
  isLast: boolean
}) => (
  <div
    className={`relative flex flex-col items-center text-center transition-all duration-500 ${
      isActive ? 'scale-105' : 'opacity-60'
    }`}
  >
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
        isActive
          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
          : 'bg-slate-100 text-slate-500'
      }`}
    >
      <Icon className='w-7 h-7' />
    </div>
    <span className='text-xs font-medium text-primary mb-2'>Step {step}</span>
    <h3 className='font-semibold text-foreground mb-1'>{title}</h3>
    <p className='text-sm text-muted-foreground max-w-[140px]'>{description}</p>
    {!isLast && (
      <ArrowRight
        className={`absolute -right-4 top-7 w-5 h-5 transition-colors duration-500 ${
          isActive ? 'text-primary' : 'text-slate-300'
        } hidden lg:block`}
      />
    )}
  </div>
)

// Capability tile component
const CapabilityTile = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='group relative bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`transition-all duration-300 ${
          isHovered ? 'opacity-0 translate-y-[-10px]' : 'opacity-100'
        }`}
      >
        <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4'>
          <Icon className='w-6 h-6 text-primary' />
        </div>
        <h3 className='font-semibold text-foreground'>{title}</h3>
      </div>
      <div
        className={`absolute inset-0 p-6 flex items-center transition-all duration-300 bg-primary/5 ${
          isHovered ? 'opacity-100' : 'opacity-0 translate-y-[10px]'
        }`}
      >
        <p className='text-sm text-foreground leading-relaxed'>{description}</p>
      </div>
    </div>
  )
}

// Before/After card component
const BeforeAfterCard = ({
  before,
  after,
  index,
}: {
  before: string
  after: string
  index: number
}) => {
  const [showAfter, setShowAfter] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className='relative h-32 rounded-xl overflow-hidden cursor-pointer'
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
    >
      {/* Before state */}
      <div
        className={`absolute inset-0 bg-slate-100 p-6 flex items-center transition-all duration-500 ${
          showAfter
            ? 'opacity-0 -translate-x-full'
            : 'opacity-100 translate-x-0'
        }`}
      >
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 rounded-full bg-red-100 flex items-center justify-center'>
            <span className='text-red-500 text-lg'>✕</span>
          </div>
          <div>
            <span className='text-xs font-medium text-red-500 uppercase tracking-wide'>
              Before
            </span>
            <p className='text-foreground font-medium'>{before}</p>
          </div>
        </div>
      </div>

      {/* After state */}
      <div
        className={`absolute inset-0 bg-green-50 p-6 flex items-center transition-all duration-500 ${
          showAfter ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
            <CheckCircle className='w-5 h-5 text-green-600' />
          </div>
          <div>
            <span className='text-xs font-medium text-green-600 uppercase tracking-wide'>
              After
            </span>
            <p className='text-foreground font-medium'>{after}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const AIReceptionist = () => {
  const [activeStep, setActiveStep] = useState(0)

  // Animation #2: Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const processSteps = [
    {
      title: 'Answer',
      description: 'Phone, text, and web in real time',
      icon: PhoneCall,
    },
    {
      title: 'Understand',
      description: 'Reason for call, intent, urgency',
      icon: Brain,
    },
    {
      title: 'Act',
      description: 'Schedule, confirm, route, or respond',
      icon: Zap,
    },
    {
      title: 'Escalate',
      description: 'Hand off to staff when needed',
      icon: ArrowUpRight,
    },
  ]

  const capabilities = [
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description:
        'Automatically books or reschedules appointments based on clinic rules and availability.',
    },
    {
      icon: UserPlus,
      title: 'New Patient Intake',
      description:
        'Captures new patient information and initiates onboarding workflows.',
    },
    {
      icon: Bell,
      title: 'Reminders & Confirmations',
      description:
        'Sends automated appointment reminders and handles confirmations.',
    },
    {
      icon: Shield,
      title: 'Insurance & Eligibility',
      description:
        'Answers common insurance questions and routes complex inquiries.',
    },
    {
      icon: HelpCircle,
      title: 'General Inquiries',
      description:
        'Handles FAQs about hours, location, services, and policies.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Smart Escalation',
      description:
        'Recognizes urgency and routes to the right staff member instantly.',
    },
  ]

  const beforeAfterItems = [
    { before: 'Missed calls', after: 'Every call answered' },
    { before: 'Manual scheduling', after: 'Automated bookings' },
    { before: 'Front desk overload', after: 'Staff focused on care' },
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                AI Receptionist for{' '}
                <span className='text-primary'>Modern Healthcare</span>
              </h1>
              <p className='text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl'>
                Answer every call. Schedule every visit. Route every
                request—automatically.
              </p>

              <div className='flex flex-wrap gap-4 mb-6'>
                <CTAButton
                  link='/contact'
                  text='Book a demo'
                  suffixIconDefault
                />
                <Button
                  variant='outline'
                  size='lg'
                >
                  See how it works
                </Button>
              </div>

              <div className='flex items-center gap-6 text-sm text-muted-foreground'>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  24/7
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  HIPAA-ready
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full bg-green-500' />
                  Workflow-driven
                </span>
              </div>
            </div>
            <div className='lg:pl-8'>
              <AIReceptionistFlow />
            </div>
          </div>
        </div>
      </GridSection>
      {/* Why Section */}
      <section className='py-20 md:py-28 bg-background'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-foreground mb-12'>
            Why an AI Receptionist
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {[
              {
                icon: PhoneCall,
                title: 'Never Miss a Patient Interaction',
                desc: 'Every call and message answered',
              },
              {
                icon: Users,
                title: 'Reduce Front Desk Load',
                desc: 'Automate repetitive tasks',
              },
              {
                icon: Zap,
                title: 'Improve Patient Experience',
                desc: 'Faster responses, fewer delays',
              },
            ].map((item) => (
              <div
                key={item.title}
                className='text-center'
              >
                <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                  <item.icon className='w-7 h-7 text-primary' />
                </div>
                <h3 className='font-semibold text-foreground mb-2'>
                  {item.title}
                </h3>
                <p className='text-sm text-muted-foreground'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='py-20 md:py-28 bg-muted/40'>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              From Incoming Requests to Action
            </h2>
            <p className='text-muted-foreground'>
              How the AI Receptionist handles every interaction
            </p>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto'>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isActive={index === activeStep}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>

          {/* Loop indicator */}
          <div className='flex justify-center mt-8'>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
              Continuous coverage, 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className='py-20 md:py-28 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              What the AI Receptionist Can Handle
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            {capabilities.map((cap) => (
              <CapabilityTile
                key={cap.title}
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='py-20 md:py-28 bg-muted/40'>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Before vs After AI Receptionist
            </h2>
            <p className='text-muted-foreground'>The difference in practice</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            {beforeAfterItems.map((item, index) => (
              <BeforeAfterCard
                key={index}
                before={item.before}
                after={item.after}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='py-20 md:py-28 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8 text-center'>
              Built for Real Healthcare Operations
            </h2>

            <div className='space-y-4'>
              {[
                'Integrates with EHRs, scheduling systems, and messaging tools',
                'Rule-based, auditable, and HIPAA-ready',
                'Designed for clinics, DPC practices, networks, and value-based care',
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-4 rounded-xl bg-slate-50'
                >
                  <CheckCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <p className='text-foreground'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 md:py-28 bg-muted/40'>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6'>
              Let Your AI Receptionist Handle the Front Desk
            </h2>
            <p className='text-lg md:text-xl text-muted-foreground mb-8'>
              So your team can focus on patients—not phones.
            </p>
            <CTAButton
              link='/contact'
              text='Book your Demo'
              suffixIconDefault
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AIReceptionist
