import { Layout } from '@/components/layout/Layout'
import { DAPFlowSection } from '@/components/platform/DAPFlowSection'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  Zap,
  Heart,
  Users,
  Brain,
  Shield,
  Activity,
  TrendingUp,
  Building2,
} from 'lucide-react'
import { GridSection } from '@/components/ui'

const features = [
  {
    icon: Brain,
    title: 'Healthcare-Native AI',
    description:
      'Purpose-built models trained on healthcare claims, clinical, and outcomes data.',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description:
      'Process member data in real-time to surface actionable care gaps and risks.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description:
      'Enterprise-grade security with full HIPAA compliance and SOC 2 Type II.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description:
      'Models improve based on outcomes, driving better predictions over time.',
  },
]

const personas = [
  {
    icon: Building2,
    title: 'Self-Funded Employers',
    description:
      'Cost transparency, utilization insights, and population health analytics.',
  },
  {
    icon: Heart,
    title: 'Direct Care',
    description: 'Patient engagement, AI call triage, and outcomes reporting.',
  },
  {
    icon: Activity,
    title: 'Value-Based / ACOs',
    description: 'HCC suspecting, HEDIS/MIPS performance, and risk adjustment.',
  },
  {
    icon: Users,
    title: 'Level-Funded Plans',
    description:
      'Claims analytics, stop-loss optimization, and member health scoring.',
  },
]

const Infera = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <GridSection>
        <div className='container mx-auto px-6 relative'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6'>
              Meet <span className='text-gradient'>Infera</span>
            </h1>
            <p className='text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed'>
              The AI engine purpose-built for healthcare — powering intelligent
              automation, predictive analytics, and personalized experiences for
              self-funded employers, direct care practices, and value-based
              organizations.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button
                variant='gradient'
                size='lg'
                asChild
              >
                <Link to='/contact'>Schedule a Demo →</Link>
              </Button>
              <Button
                variant='outline'
                size='lg'
                asChild
              >
                <Link to='/capabilities'>Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </GridSection>
      <DAPFlowSection />
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
              Built for <span className='text-gradient'>Your Organization</span>
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Infera adapts to your specific needs — whether you're managing
              employer plans, running a direct care practice, or optimizing
              value-based contracts.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {personas.map((persona, index) => (
              <div
                key={index}
                className='p-6 bg-white border border-border/50 rounded-xl hover:shadow-xl hover:border-accent/30 transition-all duration-300'
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

      {/* Features Section */}
      <section className='relative py-20 md:py-28 bg-white overflow-hidden'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-14'>
            <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Why <span className='text-gradient'>Infera</span>?
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Built specifically for healthcare, Infera delivers intelligence
              that generic AI platforms simply cannot match.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='p-6 bg-slate-50/50 border border-border/50 rounded-xl hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300'
              >
                <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4'>
                  <feature.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='font-semibold text-foreground mb-2'>
                  {feature.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden'>
        {/* Subtle grid background */}
        <div
          className='absolute inset-0 opacity-[0.02]'
          style={{
            backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                           linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className='container mx-auto px-6 text-center relative'>
          <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Ready to{' '}
            <span className='text-gradient'>activate your healthcare data</span>
            ?
          </h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto mb-8'>
            See how Infera can transform your organization — whether you're a
            self-funded employer, direct care practice, or value-based
            organization.
          </p>
          <Button
            variant='gradient'
            size='lg'
            asChild
          >
            <Link to='/contact'>Get Started Today →</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default Infera
