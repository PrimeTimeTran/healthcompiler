import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

import automatedTrackingImg from '@/assets/fm-automated-tracking.png'
import hipaaComplianceImg from '@/assets/fm-hipaa-compliance.png'
import employerInsightsImg from '@/assets/fm-employer-insights.png'
import { CTAButton, GridSection } from '@/components/ui'

const FunctionalMedicine = () => {
  const dataNeeds = [
    'Track patient engagement and follow-through',
    'Monitor trends across labs and care plans',
    'Identify gaps in adherence or preventive care',
    'Understand outcomes across the patient population',
    'Support growth without losing personalization',
  ]
  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6'>
                Clarity for Personalized, Root-Cause Care
              </h1>
              <p className='text-lg text-muted-foreground mb-4'>
                Track engagement, follow-through, and outcomes across long-term
                care plans. Layered patient data becomes easier to understand,
                compare, and act on over time.
              </p>
              <CTAButton
                link='/contact'
                text='Book a Demo'
                suffixIconDefault
              />
            </div>
          </div>
        </div>
      </GridSection>
      <section className='py-16 bg-primary/5'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-4'>
                Turning Complex Data Into Usable Insight
              </h2>
              <p className='text-lg font-semibold text-foreground mb-4'>
                Health Compiler helps practices:
              </p>
            </div>
            <div>
              {dataNeeds.map((need, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-0.5' />
                  <h1 className='md:text-1xl text-foreground'>{need}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4 flex flex-col space-y-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
              How We Support Functional Medicine Practices
            </h2>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Automated Tracking */}
            <div className='bg-card rounded-lg p-6 shadow-md'>
              <img
                src={automatedTrackingImg}
                alt='Automated Tracking'
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <h4 className='text-xl font-bold text-foreground mb-3'>
                AI-Powered Analytics
              </h4>
              <p className='text-muted-foreground'>
                Views that help teams understand engagement, trends, and
                outcomes over time.
              </p>
            </div>

            {/* HIPAA Compliance */}
            <div className='bg-card rounded-lg p-6 shadow-md'>
              <img
                src={hipaaComplianceImg}
                alt='HIPAA Compliance'
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <h4 className='text-xl font-bold text-foreground mb-3'>
                AI Agents for Patient Communication
              </h4>
              <p className='text-muted-foreground'>
                AI support for new inquiries and ongoing triage, helping teams
                stay responsive as patient panels grow.
              </p>
            </div>

            {/* Accessible Employer Insights */}
            <div className='bg-card rounded-lg p-6 shadow-md'>
              <img
                src={employerInsightsImg}
                alt='Accessible Employer Insights'
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <h4 className='text-xl font-bold text-foreground mb-3'>
                Marketing Automation
              </h4>
              <p className='text-muted-foreground'>
                Tools that help practices educate, follow up, and stay connected
                with patients.
              </p>
            </div>
          </div>
          <Button
            asChild
            size='lg'
            className='bg-primary hover:bg-primary/90 align-middle  w-1/4 mx-auto'
          >
            <Link to='/contact'>Explore</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-primary/5'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-semibold text-foreground mb-4'>
            Designed to Fit Your Practice
          </h2>
          <h2 className='text-2xl md:text-3xl font-semibold text-foreground mb-4'>
            No workflow disruption. Just clearer insight.
          </h2>
          <p className='text-lg text-muted-foreground mb-4'>
            Health Compiler integrates with the tools functional medicine teams
            already rely on.
          </p>
        </div>
      </section>

      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Ready to See How This Fits Your Practice?
          </h2>
          <p className='text-lg text-muted-foreground mb-4'>
            Health Compiler helps functional medicine practices connect data,
            care, and outcomes, so teams can focus on what matters most.
          </p>
          <div className='flex justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-primary hover:bg-primary/90 w-1/4'
            >
              <Link to='/contact'>Book A Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FunctionalMedicine
