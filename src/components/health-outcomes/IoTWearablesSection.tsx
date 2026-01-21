import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CTAButton from '@/components/ui/CTAButton'
import { IntegrationHub } from './IntegrationHub'
import { OutcomesMeasureCards } from './OutcomesMeasureCards'
import { OutcomesAnalyticsViews } from './OutcomesAnalyticsViews'

export function IoTWearablesSection() {
  return (
    <section className='py-20 md:py-28 bg-muted/30'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            IoT + Wearables → Outcomes Intelligence
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>
            Connect member-generated health data to clinical and claims signals to track outcomes continuously — not quarterly.
          </p>
          <p className='text-base text-muted-foreground max-w-3xl mx-auto'>
            Health Compiler unifies wearable, RPM, and home device data with your care workflows to measure real-world outcomes: activity, sleep, cardio-metabolic control, adherence, and longitudinal trend improvement—at the member, cohort, and employer level.
          </p>
          
          {/* CTAs */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
            <CTAButton
              text='See Integrations'
              link='/integration'
              suffixIconDefault
            />
            <Button variant='outline' size='lg' asChild>
              <Link to='/book-a-demo'>
                <Calendar className='mr-2 h-4 w-4' />
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Integration Hub */}
        <IntegrationHub />

        {/* What you can measure cards */}
        <OutcomesMeasureCards />

        {/* Outcomes Analytics Views */}
        <OutcomesAnalyticsViews />

        {/* Compliance/Trust line */}
        <div className='text-center mt-16 pt-8 border-t border-border/50'>
          <p className='text-sm text-muted-foreground'>
            HIPAA-aware data handling and consent-friendly integration patterns for member-generated health data.
          </p>
        </div>
      </div>
    </section>
  )
}
