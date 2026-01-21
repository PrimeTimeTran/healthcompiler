import { Layout } from '@/components/layout/Layout'
import { CTAButton, GridSection } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, Plug } from 'lucide-react'
import CINsViz from '@/components/hero-visualizations/CINsViz'

const CINs = () => {
  const networkCapabilities = [
    'Aggregate clinical and utilization data across the network',
    'Apply standardized views for quality and performance',
    'Identify care variation, gaps, and outcome differences',
    'Support value-based contracts with credible, shared data',
    'Enable accountability across the network without centralizing care',
  ]

  const qualityReporting = [
    'Enable consistent CIN quality reporting across member practices',
    'Establish a shared definition of quality and performance',
    'Reduce disputes related to data accuracy and interpretation',
    'Support broader healthcare network optimization efforts',
  ]

  const cinEnvironment = [
    'Integrates with member practice systems',
    'Supports clinically integrated network CMS and HIPAA requirements',
    'No forced tool standardization',
    'Local control remains intact',
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Clinically Integrated Networks (CINs)
              </h1>

              <p className='text-xl text-muted-foreground'>
                Health Compiler supports clinically integrated networks by enabling consistent performance measurement across independent member practices.
              </p>

              <div className='flex flex-wrap gap-4'>
                <CTAButton link='/contact' text='Book a Demo' suffixIconDefault />
              </div>
            </div>
            <CINsViz />
          </div>
        </div>
      </GridSection>

      {/* Network-Wide Performance Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Make network-wide performance visible and actionable
            </h2>
            <div className='space-y-4 mb-8'>
              {networkCapabilities.map((item, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Reporting Section */}
      <section className='relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Support CIN quality reporting and network alignment
            </h2>
            <div className='space-y-4 mb-8'>
              {qualityReporting.map((item, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{item}</p>
                </div>
              ))}
            </div>
            <Button size='lg' variant='outline' asChild>
              <Link to='/capabilities'>Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Built for CIN Environments Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Built for real-world CIN environments
            </h2>
            <div className='space-y-4 mb-8'>
              {cinEnvironment.map((item, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-slate-50 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>HIPAA-ready</span>
            </div>
            <span className="hidden md:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>CMS compliant</span>
            </div>
            <span className="hidden md:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <Plug className="w-5 h-5 text-primary" />
              <span>Interoperable across member systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-background'>
        <div className='max-w-4xl mx-auto text-center px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Make network-wide performance visible and actionable
          </h2>
          <CTAButton
            link='/contact'
            text='Book a Demo'
            suffixIconDefault
          />
        </div>
      </section>
    </Layout>
  )
}
export default CINs
