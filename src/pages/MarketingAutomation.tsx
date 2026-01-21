import { Helmet } from 'react-helmet'
import { Layout } from '@/components/layout/Layout'
import CTAButton from '@/components/ui/CTAButton'
import { GridSection } from '@/components/ui/GridSection'
import MarketingAutomationViz from '@/components/hero-visualizations/MarketingAutomationViz'
import MarketingCapabilitiesSection from '@/components/marketing/MarketingCapabilitiesSection'
import RevenueAnalyticsModule from '@/components/marketing/RevenueAnalyticsModule'
import RevenueBifurcationStrip from '@/components/marketing/RevenueBifurcationStrip'
import MarketingIntegrationsSection from '@/components/marketing/MarketingIntegrationsSection'

const MarketingAutomation = () => {
  return (
    <Layout>
      <Helmet>
        <title>Healthcare Marketing Automation & Revenue Analytics | Health Compiler</title>
        <meta
          name='description'
          content='Automate patient outreach, track conversions, and understand exactly where practice revenue comes from—campaign to collection.'
        />
        <meta
          name='keywords'
          content='healthcare marketing automation, medical practice revenue analytics, patient acquisition analytics, CRM for healthcare practices, marketing ROI for doctors'
        />
      </Helmet>

      {/* Hero Section */}
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6'>
                  Turn Inquiries Into{' '}
                  <span className='text-primary'>Conversations</span>
                </h1>

                <p className='text-lg text-muted-foreground mb-4'>
                  Health Compiler automates patient outreach, tracks marketing performance, and connects every inquiry to measurable revenue—without adding operational complexity.
                </p>
                
                <p className='text-base text-muted-foreground mb-8'>
                  From first touch to booked visit to collected revenue, see exactly what's working—and what's not.
                </p>

                <CTAButton
                  link='/contact'
                  text='Book a Demo'
                  suffixIconDefault
                />
              </div>
            </div>
            <MarketingAutomationViz />
          </div>
        </div>
      </GridSection>

      {/* Marketing Capabilities Section */}
      <MarketingCapabilitiesSection />

      {/* Revenue Analytics Module */}
      <RevenueAnalyticsModule />

      {/* Revenue Bifurcation Strip */}
      <RevenueBifurcationStrip />

      {/* Integrations Section */}
      <MarketingIntegrationsSection />

      {/* Final CTA */}
      <section className='py-20 bg-primary/5'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Ready to See How This Works for Your Practice?
          </h2>

          <CTAButton
            link='/contact'
            text='Request a Demo'
            suffixIconDefault
          />
        </div>
      </section>
    </Layout>
  )
}

export default MarketingAutomation
