import { useState, useEffect, useRef } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import CTAButton from '@/components/ui/CTAButton'
import {
  ArrowRight,
  FileText,
  Activity,
  Pill,
  TestTube,
  Target,
  TrendingUp,
  Heart,
  Zap,
  Shield,
  Clock,
} from 'lucide-react'
import { GridSection } from '@/components/ui'

// ========== HERO SECTION ==========
const HeroSection = () => {
  const [activeSource, setActiveSource] = useState(0)
  const dataSources = [
    { icon: FileText, label: 'EHR', color: '#E94E87' },
    { icon: Activity, label: 'Claims', color: '#F97316' },
    { icon: TestTube, label: 'Labs', color: '#8B5CF6' },
    { icon: Pill, label: 'Rx', color: '#06B6D4' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSource((prev) => (prev + 1) % dataSources.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <GridSection>
      <div className='container mx-auto px-6 py-24 lg:py-32'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
          <div className='space-y-8'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
              HCC Suspecting for{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                Better Risk Capture
              </span>
            </h1>

            <p className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl'>
              Proactively identify likely but undocumented chronic conditions
              that matter for care quality and accurate reimbursement.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <CTAButton
                link='/contact'
                text='Explore HCC Suspecting'
                iconSuffix={
                  <ArrowRight className='ml-2 transition-transform group-hover:translate-x-1' />
                }
              />
              <Button
                size='lg'
                variant='outline'
                asChild
              >
                <Link to='/contact'>See a live demo</Link>
              </Button>
            </div>

            <p className='text-sm text-muted-foreground flex items-center gap-4'>
              <span className='flex items-center gap-1.5'>
                <Zap className='w-4 h-4 text-primary' /> AI-powered
              </span>
              <span className='flex items-center gap-1.5'>
                <Shield className='w-4 h-4 text-primary' /> EHR integrated
              </span>
              <span className='flex items-center gap-1.5'>
                <Heart className='w-4 h-4 text-primary' /> Clinician-ready
              </span>
            </p>
          </div>

          {/* Right - Animation #1: Data flow to suspecting engine */}
          <div className='relative h-[450px] flex items-center justify-center'>
            {/* Data sources flowing in */}
            <div className='absolute left-0 top-1/2 -translate-y-1/2 space-y-6'>
              {dataSources.map((source, idx) => {
                const Icon = source.icon
                const isActive = idx === activeSource
                return (
                  <div
                    key={source.label}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                      isActive
                        ? 'bg-white shadow-lg scale-105 border-primary/30'
                        : 'bg-white/60 border-border/50'
                    }`}
                    style={{
                      boxShadow: isActive
                        ? `0 0 30px ${source.color}30`
                        : 'none',
                    }}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'scale-110' : ''
                      }`}
                      style={{ backgroundColor: `${source.color}15` }}
                    >
                      <Icon
                        className='w-5 h-5'
                        style={{ color: source.color }}
                      />
                    </div>
                    <span
                      className={`font-medium transition-colors ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {source.label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Flow lines */}
            <svg className='absolute inset-0 w-full h-full pointer-events-none'>
              <defs>
                <linearGradient
                  id='flowGrad'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='0%'
                >
                  <stop
                    offset='0%'
                    stopColor='#E94E87'
                    stopOpacity='0.3'
                  />
                  <stop
                    offset='50%'
                    stopColor='#E94E87'
                    stopOpacity='0.8'
                  />
                  <stop
                    offset='100%'
                    stopColor='#E94E87'
                    stopOpacity='0'
                  />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <path
                    d={`M 160 ${140 + i * 60} Q 250 ${140 + i * 60} 280 225`}
                    fill='none'
                    stroke='url(#flowGrad)'
                    strokeWidth='2'
                    strokeDasharray='8 4'
                    className={`transition-opacity duration-500 ${
                      i === activeSource ? 'opacity-100' : 'opacity-20'
                    }`}
                  />
                  {i === activeSource && (
                    <circle
                      r='4'
                      fill='#E94E87'
                    >
                      <animateMotion
                        dur='1s'
                        repeatCount='indefinite'
                        path={`M 160 ${140 + i * 60} Q 250 ${
                          140 + i * 60
                        } 280 225`}
                      />
                    </circle>
                  )}
                </g>
              ))}
            </svg>

            {/* Suspecting Engine */}
            <div className='absolute right-0 top-1/2 -translate-y-1/2'>
              <div className='relative'>
                {/* Glow effect */}
                <div className='absolute inset-0 -m-4 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl animate-pulse' />

                {/* Engine card */}
                <div className='relative bg-white rounded-2xl border border-primary/20 shadow-2xl p-6 w-[200px]'>
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5' />
                  <div className='relative space-y-4'>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                      <Target className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='text-sm font-semibold text-foreground'>
                        Suspecting Engine
                      </div>
                      <div className='text-xs text-muted-foreground mt-1'>
                        Identifying HCCs
                      </div>
                    </div>

                    {/* Output flags */}
                    <div className='space-y-2 pt-2 border-t border-border/50'>
                      {['HCC 18', 'HCC 85', 'HCC 108'].map((hcc, i) => (
                        <div
                          key={hcc}
                          className='flex items-center gap-2 text-xs animate-fade-in'
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          <div className='w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse' />
                          <span className='text-muted-foreground'>
                            {hcc} Suspect
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  )
}

// ========== WHY IT MATTERS SECTION ==========
const WhyItMattersSection = () => {
  const outcomes = [
    {
      icon: FileText,
      title: 'Close Documentation Gaps',
      desc: 'Find conditions not yet coded',
    },
    {
      icon: TrendingUp,
      title: 'Boost RAF Accuracy',
      desc: 'Improve risk score precision',
    },
    {
      icon: Heart,
      title: 'Drive Better Care Decisions',
      desc: 'Clinicians see the right picture',
    },
  ]

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-foreground'>
            Why HCC Suspecting Matters
          </h2>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          {outcomes.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className='group text-center p-8 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300'
              >
                <div className='w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                  <Icon className='w-7 h-7 text-primary' />
                </div>
                <h3 className='font-semibold text-foreground mb-2'>
                  {item.title}
                </h3>
                <p className='text-sm text-muted-foreground'>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ========== HOW IT WORKS SECTION ==========
const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      title: 'Aggregate',
      desc: 'Unify claims, EHR, labs, Rx, and notes',
      icon: '📊',
    },
    {
      title: 'Detect',
      desc: 'Surface patterns and likely conditions',
      icon: '🔍',
    },
    {
      title: 'Suggest',
      desc: 'Present suspect HCCs with clinical evidence',
      icon: '💡',
    },
    { title: 'Validate', desc: 'Clinicians confirm and code', icon: '✓' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (rect.height + 200))
      )
      const step = Math.min(3, Math.floor(progress * 4))
      setActiveStep(step)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className='py-24 bg-gradient-to-b from-slate-50 to-white'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-foreground mb-4'>
            From Signals to Suspects
          </h2>
          <p className='text-muted-foreground'>
            How HCC Suspecting transforms data into actionable insights
          </p>
        </div>

        {/* Animation #2: Flow diagram with scroll-triggered highlights */}
        <div className='relative max-w-4xl mx-auto'>
          {/* Connection line */}
          <div className='absolute top-1/2 left-0 right-0 h-1 bg-border/30 -translate-y-1/2 hidden md:block'>
            <div
              className='h-full bg-gradient-to-r from-primary to-accent transition-all duration-700'
              style={{ width: `${(activeStep + 1) * 25}%` }}
            />
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative text-center transition-all duration-500 ${
                  idx <= activeStep
                    ? 'opacity-100 scale-100'
                    : 'opacity-40 scale-95'
                }`}
              >
                {/* Step indicator */}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-500 ${
                    idx <= activeStep
                      ? 'bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30'
                      : 'bg-slate-100 border border-border'
                  }`}
                  style={{
                    animation:
                      idx === activeStep
                        ? 'pulse 2s ease-in-out infinite'
                        : 'none',
                  }}
                >
                  <span
                    className={idx <= activeStep ? 'grayscale-0' : 'grayscale'}
                  >
                    {step.icon}
                  </span>
                </div>

                <h3
                  className={`font-semibold mb-2 transition-colors ${
                    idx <= activeStep
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {step.title}
                </h3>
                <p className='text-sm text-muted-foreground'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== RESULTS SECTION ==========
const ResultsSection = () => {
  const results = [
    {
      before: 'Incomplete risk capture',
      after: 'Complete HCC-level picture',
      icon: Target,
    },
    {
      before: 'Low RAF scores',
      after: 'Aligned reimbursement',
      icon: TrendingUp,
    },
    {
      before: 'Reactive coding reviews',
      after: 'Proactive suspecting insights',
      icon: Zap,
    },
  ]

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-foreground'>
            Results That Matter
          </h2>
        </div>

        {/* Animation #3: Before/After flip cards */}
        <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          {results.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className='group perspective-1000'
              >
                <div className='relative h-48 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180'>
                  {/* Before - Front */}
                  <div className='absolute inset-0 backface-hidden rounded-2xl border border-border bg-slate-50 p-6 flex flex-col items-center justify-center text-center'>
                    <div className='w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4'>
                      <Icon className='w-6 h-6 text-muted-foreground' />
                    </div>
                    <div className='text-xs uppercase tracking-wider text-muted-foreground mb-2'>
                      Before
                    </div>
                    <p className='text-sm text-muted-foreground'>
                      {item.before}
                    </p>
                  </div>

                  {/* After - Back */}
                  <div className='absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-6 flex flex-col items-center justify-center text-center'>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4'>
                      <Icon className='w-6 h-6 text-white' />
                    </div>
                    <div className='text-xs uppercase tracking-wider text-primary mb-2'>
                      After
                    </div>
                    <p className='text-sm font-medium text-foreground'>
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className='text-center text-sm text-muted-foreground mt-8'>
          Hover to see the transformation
        </p>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .group-hover\\:rotate-y-180:hover { transform: rotateY(180deg); }
      `}</style>
    </section>
  )
}

// ========== BUILT FOR HEALTHCARE SECTION ==========
const BuiltForHealthcareSection = () => {
  const features = [
    {
      icon: Activity,
      text: 'Integrates with EHR, claims, labs, and Rx at scale',
    },
    {
      icon: Clock,
      text: 'Real-time insights at point of care and point of coding',
    },
    {
      icon: Shield,
      text: 'Designed for Medicare Advantage, ACOs, and value-based models',
    },
  ]

  return (
    <section className='py-24 bg-gradient-to-b from-white to-slate-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12'>
            Built for Real-World Healthcare
          </h2>

          <div className='space-y-6'>
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className='flex items-start gap-4 p-6 rounded-xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300'
                >
                  <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0'>
                    <Icon className='w-5 h-5 text-primary' />
                  </div>
                  <p className='text-foreground leading-relaxed'>
                    {feature.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== FINAL CTA SECTION ==========
const FinalCTASection = () => {
  return (
    <section className='py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-white mb-4'>
            Start Capturing the Risk You Deserve
          </h2>
          <p className='text-lg text-white/70 mb-8'>
            Turn suspect conditions into documented HCCs with confidence.
          </p>
          <Button
            size='lg'
            className='group bg-white text-slate-900 hover:bg-white/90'
            asChild
          >
            <Link to='/contact'>
              Book a discovery call
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// ========== MAIN PAGE ==========
const HCCSuspecting = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyItMattersSection />
      <HowItWorksSection />
      <ResultsSection />
      <BuiltForHealthcareSection />
      <FinalCTASection />
    </Layout>
  )
}

export default HCCSuspecting
