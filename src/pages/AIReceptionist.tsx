import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CTAButton, GridSection } from '@/components/ui'
import {
  Phone,
  MessageSquare,
  Globe,
  Calendar,
  Mail,
  Users,
  AlertCircle,
  Bot,
  Brain,
  Zap,
  UserPlus,
  Bell,
  Shield,
  HelpCircle,
  HeadphonesIcon,
  ArrowRight,
  Megaphone,
  Workflow,
} from 'lucide-react'

import elationLogo from '@/assets/elation-logo.png'
import hintLogo from '@/assets/hint-logo.png'
import akuteLogo from '@/assets/akute-health-logo.png'

// AI Receptionist Flow Visualization
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
              <path
                d={`M80,${y} Q150,${y} 200,175`}
                fill='none'
                stroke='hsl(var(--border))'
                strokeWidth='2'
                strokeDasharray='4 4'
                opacity='0.5'
              />
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
              <path
                d={`M300,175 Q350,${y} 400,${y}`}
                fill='none'
                stroke={isActive ? outcome.color : 'hsl(var(--border))'}
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray={isActive ? '0' : '4 4'}
                opacity={isActive ? 0.8 : 0.4}
                className='transition-all duration-500'
              />
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

const AIReceptionist = () => {
  const receptionistBenefits = [
    { icon: Phone, text: 'Answer every call, text, and web inquiry 24/7' },
    { icon: Calendar, text: 'Automate appointment scheduling and confirmations' },
    { icon: HeadphonesIcon, text: 'Route complex requests to the right staff' },
    { icon: Zap, text: 'Reduce front desk overload and missed opportunities' },
    { icon: Users, text: 'Improve patient experience with instant responses' },
  ]

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Call Handling',
      description:
        'Intelligent call routing and response that understands context, urgency, and intent. Designed to handle the majority of routine inquiries automatically.',
    },
    {
      icon: Bot,
      title: 'Multi-Channel Support',
      description:
        'Unified AI support across phone, SMS, and web chat. Patients get consistent, helpful responses regardless of how they reach out.',
    },
    {
      icon: Megaphone,
      title: 'Smart Escalation',
      description:
        'Recognizes when human attention is needed and routes appropriately. Staff focus on complex cases while AI handles the routine.',
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
                AI Receptionist for{' '}
                <span className='text-primary'>Modern Healthcare</span>
              </h1>

              <p className='text-xl text-muted-foreground mb-8'>
                Answer every call. Schedule every visit. Route every request—automatically.
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
                  24/7 availability
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

            {/* Right: Visualization */}
            <div className='lg:pl-8'>
              <AIReceptionistFlow />
            </div>
          </div>
        </div>
      </GridSection>

      {/* Never Miss Another Call */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Never Miss Another Call
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              AI Receptionist handles incoming communications so your team can focus on care. Here's what becomes easier:
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {receptionistBenefits.map((benefit, index) => (
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

      {/* How AI Receptionist Works */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4 text-center'>
            How AI Receptionist Works
          </h2>
          <p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Comprehensive AI support designed to transform your front desk
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
              AI Receptionist integrates with the tools your practice already uses.
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

      {/* Built for Healthcare */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
                <Shield className='h-4 w-4' />
                Healthcare Ready
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Built for Healthcare
              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
                AI Receptionist understands healthcare workflows and patient communication needs.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <Shield className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>HIPAA-compliant architecture</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Bell className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>Appointment reminders and confirmations</span>
                </div>
                <div className='flex items-center gap-3'>
                  <UserPlus className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>New patient intake support</span>
                </div>
                <div className='flex items-center gap-3'>
                  <HelpCircle className='h-5 w-5 text-primary flex-shrink-0' />
                  <span className='text-foreground'>FAQ handling and general inquiries</span>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/20'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Calls Handled</span>
                    <span className='text-lg font-bold text-primary'>94%</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Avg. Response Time</span>
                    <span className='text-lg font-bold text-green-600'>&lt;3s</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-background rounded-xl'>
                    <span className='text-sm font-medium text-foreground'>Patient Satisfaction</span>
                    <span className='text-lg font-bold text-primary'>4.8/5</span>
                  </div>
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
              Ready to Transform Your Front Desk?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Get started with AI Receptionist for your practice.
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

export default AIReceptionist
