import { useState, useEffect, useRef } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Target,
  TrendingUp,
  Heart,
  Shield,
  Activity,
  CheckCircle,
  Users,
  Pill,
  Calendar,
  BarChart3,
  Zap,
  Eye,
  FileText,
  Settings,
} from 'lucide-react'
import { CTAButton, GridSection } from '@/components/ui'

const HeroSection = () => {
  const [measures, setMeasures] = useState([
    { name: 'Preventive Care', status: 0 },
    { name: 'Diabetes Mgmt', status: 0 },
    { name: 'BP Control', status: 0 },
    { name: 'Screenings', status: 0 },
    { name: 'Medication', status: 0 },
    { name: 'Follow-ups', status: 0 },
    { name: 'Immunizations', status: 0 },
    { name: 'Mental Health', status: 0 },
    { name: 'Chronic Care', status: 0 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMeasures((prev) =>
        prev.map((measure, idx) => ({
          ...measure,
          status: Math.min(2, measure.status + (Math.random() > 0.6 ? 1 : 0)),
        }))
      )
    }, 800)

    // Reset periodically
    const resetInterval = setInterval(() => {
      setMeasures((prev) => prev.map((m) => ({ ...m, status: 0 })))
    }, 8000)

    return () => {
      clearInterval(interval)
      clearInterval(resetInterval)
    }
  }, [])

  const getStatusColor = (status: number) => {
    if (status === 0)
      return { bg: 'bg-red-100', border: 'border-red-300', dot: 'bg-red-500' }
    if (status === 1)
      return {
        bg: 'bg-yellow-100',
        border: 'border-yellow-300',
        dot: 'bg-yellow-500',
      }
    return {
      bg: 'bg-green-100',
      border: 'border-green-300',
      dot: 'bg-green-500',
    }
  }

  return (
    <GridSection>
      <div className='container mx-auto px-6 py-24 lg:py-32'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
          {/* Left - Content */}
          <div className='space-y-8'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
              Quality Measures,{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                Continuously Improved
              </span>
            </h1>

            <p className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl'>
              Track, close, and improve HEDIS and quality gaps in real
              time—without chasing reports or year-end fire drills.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <CTAButton
                link='/contact'
                text='Explore Quality Measures'
                suffixIconDefault
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
                <Activity className='w-4 h-4 text-primary' /> Always-on
              </span>
              <span className='flex items-center gap-1.5'>
                <Target className='w-4 h-4 text-primary' /> Measure-driven
              </span>
              <span className='flex items-center gap-1.5'>
                <Zap className='w-4 h-4 text-primary' /> Workflow-enabled
              </span>
            </p>
          </div>

          {/* Right - Animation #1: Quality Score Grid */}
          <div className='relative h-[450px] flex items-center justify-center'>
            <div className='relative w-full max-w-sm'>
              {/* Header */}
              <div className='bg-white rounded-t-2xl border border-b-0 border-border p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-semibold text-foreground'>
                      Quality Dashboard
                    </h3>
                    <p className='text-xs text-muted-foreground'>
                      Real-time measure tracking
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs text-muted-foreground'>Live</span>
                    <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className='bg-white rounded-b-2xl border border-border p-4 shadow-xl'>
                <div className='grid grid-cols-3 gap-3'>
                  {measures.map((measure, idx) => {
                    const colors = getStatusColor(measure.status)
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border-2 transition-all duration-500 ${colors.bg} ${colors.border}`}
                        style={{
                          animation:
                            measure.status === 2
                              ? 'pulse 2s ease-in-out infinite'
                              : 'none',
                        }}
                      >
                        <div className='flex items-center gap-2 mb-2'>
                          <div
                            className={`w-2 h-2 rounded-full ${colors.dot}`}
                          />
                          <span className='text-[10px] font-medium text-foreground/70 truncate'>
                            {measure.name}
                          </span>
                        </div>
                        <div className='text-lg font-bold text-foreground'>
                          {measure.status === 0
                            ? '—'
                            : measure.status === 1
                            ? '~'
                            : '✓'}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Summary bar */}
                <div className='mt-4 pt-4 border-t border-border'>
                  <div className='flex items-center justify-between text-xs text-muted-foreground mb-2'>
                    <span>Overall Quality Score</span>
                    <span className='font-semibold text-foreground'>
                      {Math.round(
                        (measures.filter((m) => m.status === 2).length /
                          measures.length) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className='h-2 bg-slate-100 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 rounded-full'
                      style={{
                        width: `${
                          (measures.filter((m) => m.status === 2).length /
                            measures.length) *
                          100
                        }%`,
                      }}
                    />
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
      icon: Target,
      title: 'Close Care Gaps',
      desc: 'Identify patients who need action now',
    },
    {
      icon: TrendingUp,
      title: 'Improve Scores',
      desc: 'Raise HEDIS and quality performance',
    },
    {
      icon: Shield,
      title: 'Build Trust',
      desc: 'Confidence for payers, providers, and employers',
    },
  ]

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-foreground'>
            Why Quality Measurement Matters
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
      title: 'Unify',
      desc: 'Claims, EHR, labs, pharmacy, and files',
      icon: FileText,
    },
    {
      title: 'Detect',
      desc: 'Surface quality gaps and unmet measures',
      icon: Eye,
    },
    {
      title: 'Activate',
      desc: 'Trigger outreach, tasks, and reminders',
      icon: Zap,
    },
    {
      title: 'Track',
      desc: 'Monitor closure and score improvement',
      icon: BarChart3,
    },
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
            From Gaps to Better Care
          </h2>
          <p className='text-muted-foreground'>
            Continuous quality management, not annual audits
          </p>
        </div>

        {/* Animation #2: Flow diagram */}
        <div className='relative max-w-4xl mx-auto'>
          <div className='absolute top-1/2 left-0 right-0 h-1 bg-border/30 -translate-y-1/2 hidden md:block'>
            <div
              className='h-full bg-gradient-to-r from-primary to-accent transition-all duration-700'
              style={{ width: `${(activeStep + 1) * 25}%` }}
            />
          </div>

          {/* Loop indicator to Detect */}
          <svg className='absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 hidden lg:block opacity-30'>
            <path
              d='M 30 6 A 24 24 0 1 1 6 30'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeDasharray='4 4'
              className='text-primary'
            />
            <polygon
              points='6,26 6,34 12,30'
              fill='currentColor'
              className='text-primary'
            />
          </svg>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  className={`relative text-center transition-all duration-500 ${
                    idx <= activeStep
                      ? 'opacity-100 scale-100'
                      : 'opacity-40 scale-95'
                  }`}
                >
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      idx <= activeStep
                        ? 'bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30'
                        : 'bg-slate-100 border border-border'
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        idx <= activeStep
                          ? 'text-white'
                          : 'text-muted-foreground'
                      }`}
                    />
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
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== MEASURES WE ACTIVATE SECTION ==========
const MeasuresSection = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null)

  const tiles = [
    {
      icon: Heart,
      title: 'Preventive Screenings',
      detail:
        'Mammograms, colonoscopies, and wellness visits tracked and scheduled automatically',
    },
    {
      icon: Activity,
      title: 'Chronic Condition Mgmt',
      detail:
        'Diabetes, hypertension, and heart disease measures with proactive intervention',
    },
    {
      icon: Pill,
      title: 'Medication Adherence',
      detail:
        'Refill gaps detected and patient nudges triggered before issues arise',
    },
    {
      icon: Calendar,
      title: 'Care Follow-ups',
      detail:
        'Post-discharge and specialist follow-up tracking with automated reminders',
    },
    {
      icon: Users,
      title: 'Population Health',
      detail:
        'Aggregate quality metrics across patient populations and risk segments',
    },
    {
      icon: Settings,
      title: 'Custom Programs',
      detail:
        'Configure custom measures for employer wellness or payer-specific requirements',
    },
  ]

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-foreground'>
            Measures We Activate
          </h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {tiles.map((tile, idx) => {
            const Icon = tile.icon
            return (
              <div
                key={idx}
                className='group relative p-6 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden'
                onMouseEnter={() => setHoveredTile(idx)}
                onMouseLeave={() => setHoveredTile(null)}
              >
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform'>
                    <Icon className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-foreground mb-1'>
                      {tile.title}
                    </h3>
                    <p
                      className={`text-sm text-muted-foreground transition-all duration-300 ${
                        hoveredTile === idx
                          ? 'opacity-100 max-h-20'
                          : 'opacity-0 max-h-0'
                      } overflow-hidden`}
                    >
                      {tile.detail}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ========== QUALITY IN PRACTICE SECTION ==========
const QualityInPracticeSection = () => {
  const results = [
    {
      before: 'Retrospective reporting',
      after: 'Real-time gap visibility',
      icon: Eye,
    },
    { before: 'Manual outreach', after: 'Automated patient nudges', icon: Zap },
    {
      before: 'Static scores',
      after: 'Continuous improvement',
      icon: TrendingUp,
    },
  ]

  return (
    <section className='py-24 bg-gradient-to-b from-white to-slate-50'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-display font-bold text-foreground'>
            Quality in Practice
          </h2>
        </div>

        {/* Animation #3: Before/After cards with fade transition */}
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
                  <div className='absolute inset-0 backface-hidden'>
                    <div className='h-full p-6 rounded-2xl bg-slate-100 border border-border flex flex-col items-center justify-center text-center'>
                      <div className='text-xs uppercase tracking-wider text-muted-foreground mb-3'>
                        Before
                      </div>
                      <Icon className='w-8 h-8 text-muted-foreground mb-3' />
                      <p className='text-foreground font-medium'>
                        {item.before}
                      </p>
                    </div>
                  </div>

                  {/* After - Back */}
                  <div className='absolute inset-0 backface-hidden rotate-y-180'>
                    <div className='h-full p-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex flex-col items-center justify-center text-center'>
                      <div className='text-xs uppercase tracking-wider text-white/70 mb-3'>
                        After
                      </div>
                      <Icon className='w-8 h-8 text-white mb-3' />
                      <p className='text-white font-medium'>{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ========== BUILT FOR SECTION ==========
const BuiltForSection = () => {
  const points = [
    'Supports HEDIS, ACO quality, and custom measure sets',
    'Works across MA, ACOs, employer-sponsored, and direct care models',
    'Designed to evolve as quality programs change',
  ]

  return (
    <section className='py-20 bg-slate-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-2xl md:text-3xl font-display font-bold text-foreground mb-8'>
            Built for Value-Based Healthcare
          </h2>
          <div className='space-y-4'>
            {points.map((point, idx) => (
              <div
                key={idx}
                className='flex items-center gap-3 justify-center text-muted-foreground'
              >
                <CheckCircle className='w-5 h-5 text-primary flex-shrink-0' />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== FINAL CTA SECTION ==========
const CTASection = () => {
  return (
    <section className='py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-4xl font-display font-bold text-foreground mb-4'>
          Turn Quality Measurement into Better Care
        </h2>
        <p className='text-lg text-muted-foreground max-w-xl mx-auto mb-8'>
          Stop reporting on quality. Start improving it—every day.
        </p>
        <CTAButton
          link='/contact'
          text='Book a quality performance walkthrough'
          suffixIconDefault
        />
      </div>
    </section>
  )
}

// ========== MAIN PAGE COMPONENT ==========
const HEDISQuality = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyItMattersSection />
      <HowItWorksSection />
      <MeasuresSection />
      <QualityInPracticeSection />
      <BuiltForSection />
      <CTASection />

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .group:hover .group-hover\\:rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </Layout>
  )
}

export default HEDISQuality
