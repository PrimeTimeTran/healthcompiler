import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link, useSearchParams } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import {
  BarChart3,
  Database,
  Workflow,
  Plug,
  Cloud,
  ArrowRight,
  LucideIcon,
  FlaskConical,
  Pill,
  FileText,
  Stethoscope,
  Heart,
  Smartphone,
  Server,
  TrendingUp,
  Sparkles,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type TabType = 'capabilities' | 'platform'

interface Capability {
  number: string
  tagline: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

const capabilities: Capability[] = [
  {
    number: '01',
    tagline: 'Analytics',
    title: 'Healthcare Analytics',
    description:
      'Transform raw data into actionable insights with custom dashboards, real-time reporting, and advanced analytics tailored for healthcare operations.',
    icon: BarChart3,
    features: [
      'Custom healthcare dashboards',
      'Real-time operational reporting',
      'Patient outcome analytics',
      'Financial performance tracking',
    ],
  },
  {
    number: '02',
    tagline: 'Data Infrastructure',
    title: 'Data Pipelines & ETL',
    description:
      'Build scalable, reliable data pipelines that extract, transform, and load healthcare data from any source into your analytics infrastructure.',
    icon: Database,
    features: [
      'Automated data extraction',
      'Data quality validation',
      'Real-time streaming pipelines',
      'Historical data migration',
    ],
  },
  {
    number: '03',
    tagline: 'Automation',
    title: 'Workflow Automation',
    description:
      'Streamline repetitive tasks and processes with intelligent automation that reduces manual work and improves operational efficiency.',
    icon: Workflow,
    features: [
      'Automated reporting workflows',
      'Alert and notification systems',
      'Task scheduling and orchestration',
      'Process optimization',
    ],
  },
  {
    number: '04',
    tagline: 'Integration',
    title: 'API & System Integrations',
    description:
      'Connect disparate healthcare systems with robust API integrations that enable seamless data flow across your organization.',
    icon: Plug,
    features: [
      'EHR system integrations',
      'Claims data connectivity',
      'Lab and diagnostic integrations',
      'Third-party API development',
    ],
  },
  {
    number: '05',
    tagline: 'Infrastructure',
    title: 'Cloud-native Architecture',
    description:
      'Deploy on modern cloud infrastructure designed for healthcare compliance, scalability, and high availability.',
    icon: Cloud,
    features: [
      'HIPAA-aligned infrastructure',
      'Auto-scaling capabilities',
      'Disaster recovery solutions',
      'Multi-region deployment',
    ],
  },
]

// Platform pipeline data
const dataSources = [
  { icon: FlaskConical, label: 'Labs' },
  { icon: Pill, label: 'Pharmacy' },
  { icon: FileText, label: 'Claims' },
  { icon: Stethoscope, label: 'EMRs' },
  { icon: Heart, label: 'SdoH' },
  { icon: Smartphone, label: 'Consumer & Digital Health' },
  { icon: Server, label: 'Third-party Data' },
]

const pipelineSteps = [
  {
    title: 'Integrate',
    description:
      'Raw data is received from source systems & stored in a data lake.',
    highlighted: false,
  },
  {
    title: 'Harmonize',
    description:
      'Data is parsed & codified, then stored in a simple data structure.',
    highlighted: false,
  },
  {
    title: 'Unify',
    description:
      'Patient & provider information are aggregated into a single record.',
    highlighted: true,
  },
  {
    title: 'Process',
    description:
      'Intelligent algorithms enrich the data with quality measures, gaps in care, & more.',
    highlighted: false,
  },
  {
    title: 'Analyze',
    description: 'Data is denormalized into a structure for analytics & AI.',
    highlighted: false,
  },
]

const outcomes = [
  { icon: TrendingUp, label: 'Drive VBC performance' },
  { icon: Sparkles, label: 'Deliver intelligent experiences' },
  { icon: Users, label: 'Reduce provider burden' },
]

const Capabilities = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabFromUrl = searchParams.get('tab') as TabType | null
  const [activeTab, setActiveTab] = useState<TabType>(
    tabFromUrl === 'platform' ? 'platform' : 'capabilities'
  )
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Sync tab state with URL
  useEffect(() => {
    const tab = searchParams.get('tab') as TabType | null
    if (tab === 'platform') {
      setActiveTab('platform')
    } else if (!tab) {
      setActiveTab('capabilities')
    }
  }, [searchParams])

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    if (tab === 'platform') {
      setSearchParams({ tab: 'platform' })
    } else {
      setSearchParams({})
    }
  }

  const activeCapability = capabilities[activeIndex]

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length)
    }, 5000)
  }, [])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    }
    return () => stopAutoPlay()
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay])

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!sectionRef.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    const isInView = rect.top < window.innerHeight && rect.bottom > 0

    if (isInView) {
      e.preventDefault()
      setIsAutoPlaying(false)

      if (e.deltaY > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, capabilities.length - 1))
      } else {
        setActiveIndex((prev) => Math.max(prev - 1, 0))
      }

      setTimeout(() => setIsAutoPlaying(true), 5000)
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false })
      return () => section.removeEventListener('wheel', handleWheel)
    }
  }, [handleWheel])

  return (
    <Layout>
      {/* Hero */}
      <section className='section-padding bg-gradient-to-b from-background to-background-secondary'>
        <div className='container-tight mx-auto text-center'>
          <p className='text-accent font-medium text-sm uppercase tracking-widest mb-4'>
            Our Capabilities
          </p>
          <h1 className='font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6'>
            A Harmony of Healthcare
            <br />
            <span className='text-primary'>Data Solutions</span>
          </h1>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
            End-to-end healthcare data solutions from analytics to automation,
            built with security and scalability at the core.
          </p>

          {/* Tab Switcher */}
          <div className='inline-flex bg-secondary rounded-full p-1'>
            <button
              onClick={() => handleTabChange('capabilities')}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
                activeTab === 'capabilities'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Capabilities
            </button>
            <button
              onClick={() => handleTabChange('platform')}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
                activeTab === 'platform'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Platform
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'capabilities' ? (
        <>
          {/* Capabilities Tabs Section */}
          <section
            ref={sectionRef}
            className='section-padding bg-background min-h-[80vh]'
          >
            <div className='container-tight mx-auto'>
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16'>
                {/* Left Side - Tabs */}
                <div className='lg:col-span-5'>
                  <div className='space-y-1'>
                    {capabilities.map((capability, index) => (
                      <button
                        key={capability.number}
                        onClick={() => handleTabClick(index)}
                        className={cn(
                          'w-full text-left p-6 rounded-xl transition-all duration-300 group relative overflow-hidden',
                          activeIndex === index
                            ? 'bg-card shadow-card border border-border/50'
                            : 'hover:bg-secondary/50'
                        )}
                      >
                        {/* Progress bar for active item */}
                        {activeIndex === index && isAutoPlaying && (
                          <div className='absolute bottom-0 left-0 h-1 bg-accent animate-progress' />
                        )}

                        <div className='flex items-start gap-4'>
                          <span
                            className={cn(
                              'text-2xl font-bold transition-colors duration-300',
                              activeIndex === index
                                ? 'text-accent'
                                : 'text-muted-foreground/50'
                            )}
                          >
                            {capability.number}
                          </span>
                          <div>
                            <p
                              className={cn(
                                'text-xs uppercase tracking-widest mb-1 transition-colors duration-300',
                                activeIndex === index
                                  ? 'text-accent'
                                  : 'text-muted-foreground'
                              )}
                            >
                              {capability.tagline}
                            </p>
                            <h3
                              className={cn(
                                'font-display text-lg font-semibold transition-colors duration-300',
                                activeIndex === index
                                  ? 'text-foreground'
                                  : 'text-muted-foreground'
                              )}
                            >
                              {capability.title}
                            </h3>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className='lg:col-span-7'>
                  <div className='sticky top-24'>
                    <div
                      key={activeIndex}
                      className='bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 animate-fade-in'
                    >
                      {/* Icon */}
                      <div className='w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8'>
                        <activeCapability.icon className='w-8 h-8 text-accent' />
                      </div>

                      {/* Title & Description */}
                      <h2 className='font-display text-2xl md:text-3xl font-bold text-foreground mb-4'>
                        {activeCapability.title}
                      </h2>
                      <p className='text-muted-foreground mb-8 leading-relaxed text-lg'>
                        {activeCapability.description}
                      </p>

                      {/* Features */}
                      <ul className='space-y-4 mb-8'>
                        {activeCapability.features.map((feature, idx) => (
                          <li
                            key={feature}
                            className='flex items-center gap-3 text-foreground'
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className='w-2 h-2 bg-accent rounded-full flex-shrink-0' />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant='outline'
                        asChild
                        className='group'
                      >
                        <Link
                          to='/contact'
                          className='gap-2'
                        >
                          Learn More
                          <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Platform Section */
        <section className='section-padding bg-background overflow-hidden min-h-[80vh]'>
          <div className='container-tight mx-auto'>
            {/* Platform Title */}
            <div className='text-center mb-16'>
              <h2 className='font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                DAP turns healthcare data into
                <br />
                <span className='text-primary'>actionable intelligence</span>
              </h2>
              <p className='text-muted-foreground text-lg'>
                powered by{' '}
                <span className='text-accent font-semibold'>
                  HealthCompiler AI
                </span>
              </p>
            </div>

            {/* Pipeline Visualization */}
            <div className='relative'>
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                {/* Left - Data Sources */}
                <div className='lg:col-span-2'>
                  <div className='space-y-3'>
                    {dataSources.map((source, idx) => (
                      <div
                        key={source.label}
                        className='flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group'
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className='w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/20 transition-colors'>
                          <source.icon className='w-4 h-4' />
                        </div>
                        <span className='text-sm'>{source.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Center - Pipeline Steps */}
                <div className='lg:col-span-8'>
                  <div className='relative'>
                    {/* Connecting Line */}
                    <div className='absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 hidden lg:block' />

                    <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                      {pipelineSteps.map((step, idx) => (
                        <div
                          key={step.title}
                          className={cn(
                            'relative p-4 rounded-xl text-center transition-all duration-300',
                            step.highlighted
                              ? 'bg-accent text-accent-foreground shadow-lg scale-105 z-10'
                              : 'bg-card border border-border hover:border-accent/50'
                          )}
                          style={{ animationDelay: `${idx * 150}ms` }}
                        >
                          {/* Step Icon */}
                          <div
                            className={cn(
                              'w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center',
                              step.highlighted
                                ? 'bg-accent-foreground/20'
                                : 'bg-secondary'
                            )}
                          >
                            <div className='grid grid-cols-3 gap-0.5'>
                              {[...Array(9)].map((_, i) => (
                                <div
                                  key={i}
                                  className={cn(
                                    'w-1.5 h-1.5 rounded-full',
                                    step.highlighted
                                      ? 'bg-accent-foreground'
                                      : 'bg-accent'
                                  )}
                                />
                              ))}
                            </div>
                          </div>

                          <h4
                            className={cn(
                              'font-display font-semibold mb-2',
                              step.highlighted
                                ? 'text-accent-foreground'
                                : 'text-foreground'
                            )}
                          >
                            {step.title}
                          </h4>
                          <p
                            className={cn(
                              'text-xs leading-relaxed',
                              step.highlighted
                                ? 'text-accent-foreground/80'
                                : 'text-muted-foreground'
                            )}
                          >
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Outcomes */}
                <div className='lg:col-span-2'>
                  <div className='space-y-4'>
                    {outcomes.map((outcome, idx) => (
                      <div
                        key={outcome.label}
                        className='flex items-center gap-3 group'
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className='w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                          <outcome.icon className='w-5 h-5 text-accent-foreground' />
                        </div>
                        <span className='text-sm text-foreground font-medium'>
                          {outcome.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className='section-padding bg-background-secondary'>
        <div className='container-tight mx-auto text-center'>
          <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-muted-foreground mb-8 max-w-xl mx-auto'>
            Let's discuss how our capabilities can address your specific
            healthcare data challenges.
          </p>
          <Button
            variant='primary'
            size='xl'
            asChild
          >
            <Link
              to='/contact'
              className='gap-2'
            >
              Book a Consultation
              <ArrowRight className='w-5 h-5' />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default Capabilities
