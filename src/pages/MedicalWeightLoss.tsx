import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Bot,
  Users,
  Clock,
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
import ArcHeroViz from '@/components/hero-visualizations/ArcHeroViz'

const MedicalWeightLoss = () => {
  const vizSegments = [
    { label: 'Engagement' },
    { label: 'Adherence' },
    { label: 'Progress' },
    { label: 'Outcomes' },
  ]
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
              <ArcHeroViz
                id='medical-weight-loss'
                segments={vizSegments}
                centerTitle='Long-Term'
                centerSubtitle='Progress'
              />
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
                <BarChart3 className='h-4 w-4' />
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
                    { icon: Users, label: 'Engagement' },
                    { icon: Clock, label: 'Visibility' },
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
