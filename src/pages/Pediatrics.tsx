import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Layout } from '@/components/layout/Layout'
import { CheckCircle } from 'lucide-react'
import { ChartLine, Headset, BriefcaseBusiness } from 'lucide-react'

const Pediatrics = () => {
  const networkBenefits = [
    'Understand engagement and utilization patterns',
    'Track preventive care and follow-through',
    'Identify gaps before they turn into issues',
    'Support practice growth with confidence',
    'See trends across their patient population',
  ]
  const personas = [
    {
      icon: ChartLine,
      title: 'AI-Powered Analytics',
      description:
        'Clear views into engagement, utilization, and care trends. Built to support proactive outreach and continuity.',
    },
    {
      icon: Headset,
      title: 'AI Agents for Calls and Triage',
      description:
        'AI support for new inquiries and ongoing triage, helping teams keep up with calls and questions from families.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Marketing Automation',
      description:
        'Automation that helps practices stay visible, follow up consistently, and grow without added strain.',
    },
  ]

  return (
    <Layout>
      <section className='relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 lg:py-32 overflow-hidden'>
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='max-w-xl'>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
                <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
                Pediatrics
              </div>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight'>
                <span className='text-primary'>Clarity </span> for Busy
                Pediatric Practices
              </h1>

              <p className='text-xl text-muted-foreground mb-8'>
                See how families engage with your practice, where follow-ups are
                falling behind, and which preventive needs need attention.
              </p>

              <div className='flex flex-wrap gap-4 mb-6'>
                <Button
                  variant='gradient'
                  size='lg'
                  asChild
                >
                  <Link to='/contact'>Book a Demo</Link>
                </Button>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className='lg:pl-8'></div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              A Clear View Across Practices
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              Running a DPC network means supporting many practices at once.
            </p>
            <p className='text-xl font-medium text-foreground mb-8'>
              We make that simpler.
            </p>
            <p className='text-lg text-muted-foreground mb-6'>
              With Health Compiler, DPC networks can:
            </p>
            <div className='space-y-4 mb-8'>
              {networkBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden'>
        <div
          className='absolute inset-0 opacity-[0.02]'
          style={{
            backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                           linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className='container mx-auto px-6 relative'>
          <div className='text-center mb-14'>
            <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mb-4'>
              How We
              <span className='text-gradient'> Support</span> Pediatric
              Practices
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Infera adapts to your specific needs — whether you're managing
              employer plans, running a direct care practice, or optimizing
              value-based contracts.
            </p>
          </div>

          <div className='text-center mb-14 flex justify-center'>
            {personas.map((persona, index) => (
              <div
                key={index}
                className='p-6 m-6 bg-white border border-border/50 rounded-xl hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col items-center text-center w-1/2'
              >
                <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4'>
                  <persona.icon className='w-6 h-6 text-accent' />
                </div>
                <h3 className='font-semibold text-foreground mb-2'>
                  {persona.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='py-20 bg-primary/5'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Supporting Pediatric Care at Scale
          </h2>
          <p className='text-lg text-muted-foreground mb-4'>
            Health Compiler works quietly in the background, helping pediatric
            teams stay organized, responsive, and confident as they grow.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='gradient'
              size='lg'
              asChild
            >
              <Link to='/contact'>Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Pediatrics
