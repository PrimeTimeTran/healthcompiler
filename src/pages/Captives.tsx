import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout/Layout'
import { 
  Database, 
  BarChart3, 
  Brain, 
  FileText, 
  Shield, 
  AlertTriangle,
  TrendingUp,
  Users,
  Handshake,
  PieChart,
  Target,
  FileCheck,
  Link2
} from 'lucide-react'
import { GridSection } from '@/components/ui'
import CaptivesViz from '@/components/hero-visualizations/CaptivesViz'

export const llms = {
  title: 'Captives & Union Health Plans',
  description: 'Intelligence and analytics for self-funded captives and union health plans—bringing clarity, control, and defensible insight to pooled risk.',
}

const Captives = () => {
  const challenges = [
    {
      icon: Database,
      title: 'Fragmented Data',
      description: 'Claims, eligibility, pharmacy, and clinical data live in disconnected systems.',
    },
    {
      icon: AlertTriangle,
      title: 'Reactive Insight',
      description: 'Risk and large claims are often identified after financial impact.',
    },
    {
      icon: Shield,
      title: 'Fiduciary Pressure',
      description: 'Trustees and boards need defensible, transparent reporting.',
    },
    {
      icon: TrendingUp,
      title: 'Stop-Loss Complexity',
      description: 'Deductibles and renewals are negotiated without clear data context.',
    },
  ]

  const capabilities = [
    {
      icon: Database,
      title: 'Unified Data Foundation',
      description: 'Normalize claims, clinical, pharmacy, and eligibility data across TPAs and vendors.',
    },
    {
      icon: BarChart3,
      title: 'Pool-Level Analytics',
      description: 'Understand utilization, cost drivers, and trends across employers or member cohorts.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Risk Signals',
      description: 'Surface emerging high-cost patterns and utilization shifts early.',
    },
    {
      icon: FileText,
      title: 'Fiduciary-Ready Reporting',
      description: 'Board- and trustee-ready reports built for clarity and accountability.',
    },
  ]

  const stopLossCards = [
    {
      icon: Target,
      title: 'Large Claim Intelligence',
      description: 'Track high-cost claimants and emerging risk patterns across the pool.',
    },
    {
      icon: PieChart,
      title: 'Deductible & Exposure Analysis',
      description: 'Understand how deductible levels impact risk retention and premiums.',
    },
    {
      icon: TrendingUp,
      title: 'Renewal & Benchmarking Insight',
      description: 'Support data-driven discussions with carriers and stop-loss partners.',
    },
  ]

  const brokerCards = [
    {
      icon: BarChart3,
      title: 'Advisor-Ready Insights',
      description: 'Translate complex data into narratives clients and trustees understand.',
    },
    {
      icon: Users,
      title: 'Retention & Growth Support',
      description: 'Demonstrate proactive risk management beyond annual renewals.',
    },
    {
      icon: Handshake,
      title: 'Neutral & Partner-Friendly',
      description: 'Works alongside TPAs, stop-loss carriers, and existing vendors.',
    },
  ]

  const reportTypes = [
    'Pool performance summaries',
    'Employer or member cohort analysis',
    'Large claim and stop-loss exposure reports',
    'Cost and utilization trend analysis',
  ]

  return (
    <Layout>
      <Helmet>
        <title>Captives & Union Health Plans | Health Compiler</title>
        <meta name="description" content="Intelligence and analytics for self-funded captives and union health plans—bringing clarity, control, and defensible insight to pooled risk." />
      </Helmet>

      {/* Hero Section */}
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Captives & Union
              </h1>

              <p className='text-xl text-muted-foreground'>
                Intelligence and analytics for self-funded captives and union health plans—bringing clarity, control, and defensible insight to pooled risk.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button size='lg' asChild>
                  <Link to='/contact'>Request a Demo</Link>
                </Button>
                <Button size='lg' variant='outline' asChild>
                  <Link to='/platform'>See the Platform</Link>
                </Button>
              </div>
            </div>
            <CaptivesViz />
          </div>
        </div>
      </GridSection>

      {/* Section 1 — The Self-Funded Risk Reality */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Managing pooled risk requires more than claims reports
            </h2>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className='bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow'
              >
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                  <challenge.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  {challenge.title}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Health Compiler for Captives & Union Plans */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              One intelligence layer for pooled self-funded plans
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className='bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow'
              >
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6'>
                  <capability.icon className='w-7 h-7 text-primary' />
                </div>
                <h3 className='text-xl font-semibold text-foreground mb-3'>
                  {capability.title}
                </h3>
                <p className='text-muted-foreground'>
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Stop-Loss Optimization */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Smarter stop-loss decisions, backed by data
            </h2>
            <p className='text-lg text-muted-foreground'>
              Health Compiler supports stop-loss optimization by providing visibility into large claims, risk distribution, and deductible exposure across pooled populations.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {stopLossCards.map((card, index) => (
              <div
                key={index}
                className='bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow'
              >
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                  <card.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Built for Brokers & Advisors */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              A force multiplier for brokers and advisors
            </h2>
            <p className='text-lg text-muted-foreground'>
              Health Compiler enhances broker and advisor relationships by providing a shared intelligence layer that supports better strategy, clearer storytelling, and stronger client outcomes.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {brokerCards.map((card, index) => (
              <div
                key={index}
                className='bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow'
              >
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                  <card.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Reporting Built for Fiduciaries */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
                Reporting that stands up to scrutiny
              </h2>
              <p className='text-lg text-muted-foreground mb-8'>
                Every report is designed to support fiduciary responsibility, long-term sustainability, and confident decision-making.
              </p>
              
              <div className='space-y-4'>
                {reportTypes.map((report, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0'>
                      <FileCheck className='w-4 h-4 text-primary' />
                    </div>
                    <span className='text-foreground'>{report}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-card border border-border rounded-2xl p-8'>
              <div className='space-y-6'>
                <div className='flex items-center justify-between pb-4 border-b border-border'>
                  <span className='text-sm font-medium text-muted-foreground'>Report Type</span>
                  <span className='text-sm font-medium text-muted-foreground'>Status</span>
                </div>
                {['Pool Performance', 'Cohort Analysis', 'Stop-Loss Exposure', 'Trend Report'].map((report, idx) => (
                  <div key={idx} className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <FileText className='w-5 h-5 text-muted-foreground' />
                      <span className='text-foreground'>{report}</span>
                    </div>
                    <span className='text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700'>Ready</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Secure, Neutral, Interoperable */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-6'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-4'>
              Secure, Neutral, Interoperable
            </h2>
            <p className='text-muted-foreground mb-8'>
              Health Compiler integrates into existing self-funded ecosystems without disruption.
            </p>
            
            <div className='flex flex-wrap justify-center gap-6'>
              {[
                { icon: Shield, label: 'HIPAA-ready' },
                { icon: Database, label: 'Secure by design' },
                { icon: Link2, label: 'Interoperable across TPAs, brokers, and vendors' },
              ].map((item, idx) => (
                <div key={idx} className='flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full'>
                  <item.icon className='w-4 h-4 text-primary' />
                  <span className='text-sm text-foreground'>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Bring clarity and control to pooled self-funded risk
          </h2>

          <Button size='lg' asChild>
            <Link to='/contact'>Talk to Health Compiler</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default Captives
