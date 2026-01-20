import { Layout } from '@/components/layout/Layout'
import { CTAButton, GridSection } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

const CINs = () => {
  const section1 = [
    'Aggregate clinical and utilization data across member practices',
    'Apply consistent quality and performance views across the network',
    'Identify care variation, gaps, and outcome differences',
    'Support value-based contracts with credible, shared data',
    'Enable accountability without centralizing care delivery',
  ]

  const section2 = [
    'A shared understanding of what “good performance” looks like',
    'Fewer disputes about data accuracy or interpretation',
    'Stronger alignment with payers and partners',
    'A network that behaves like a system, not a loose affiliation',
  ]
  const section3 = [
    'Integrates with member practice systems',
    'No forced tool standardization',
    'Local control remains intact',
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Clinically Integrated Networks (CINs)
              </h1>

              {/* <p className='text-xl text-muted-foreground mb-8'>
                Make network-wide performance visible and actionable
              </p> */}

              <div className='flex flex-wrap gap-4 mb-6'>
                <Button
                  asChild
                  size='lg'
                >
                  <Link to='/contact'>Book a Demo</Link>
                </Button>
              </div>
            </div>
            <div className='relative h-[450px] flex items-center justify-center'></div>
          </div>
        </div>
      </GridSection>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Make network-wide performance visible and actionable
            </h2>
            <div className='space-y-4 mb-8'>
              {section1.map((need, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{need}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              What this unlocks for CIN leadership
            </h2>
            <div className='space-y-4 mb-8'>
              {section2.map((need, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{need}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Shared insight, preserved autonomy
            </h2>
            <div className='space-y-4 mb-8'>
              {section3.map((need, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <p className='text-foreground'>{need}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='max-w-4xl'>
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
export default CINs
