import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { MessageSquare, CheckCircle, Search, Workflow } from 'lucide-react'

const MarketingAutomation = () => {
  const crmBenefits = [
    'Track leads from every source in one place',
    'Manage referrals and follow-through without losing context',
    'See the full history of every interaction',
    'Ensure no inquiry or lead is missed',
    'Run follow-ups, reminders, and outreach automatically',
    'Keep communication consistent even when teams are busy',
  ]

  const growthSupport = [
    'Website management',
    'SEO for search visibility',
    'Answer Engine Optimization so practices appear where patients ask questions',
  ]

  return (
    <Layout>
      {/* Hero – split layout */}
      <section className='py-20 lg:py-28 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left */}
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
                <MessageSquare className='h-4 w-4' />
                Marketing Automation
              </div>

              <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight'>
                Turn Inquiries Into Conversations
              </h1>

              <p className='text-lg text-muted-foreground mb-8'>
                Health Compiler provides a unified system that captures every
                inquiry, organizes it, and keeps communication moving forward
                without manual effort.
              </p>

              <Button
                asChild
                size='lg'
                className='bg-primary hover:bg-primary/90'
              >
                <Link to='/contact'>Book a Demo</Link>
              </Button>
            </div>

            {/* Right – visual placeholder */}
            <div className='bg-muted/30 rounded-xl p-10 border border-border'>
              <Workflow className='h-10 w-10 text-primary mb-4' />
              <p className='text-foreground font-medium mb-2'>
                One System for Growth
              </p>
              <p className='text-muted-foreground text-sm'>
                Inquiries, follow-ups, outreach, and reminders—connected and
                visible in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRM + Automation Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Manage Inquiries, Follow-Up, and Outreach in One Place
            </h2>

            <p className='text-lg text-muted-foreground mb-8'>
              Inquiries are centralized automatically, making it easy to stay
              organized and responsive without extra manual work.
            </p>

            <div className='grid sm:grid-cols-2 gap-6 mb-8'>
              {crmBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
                  <p className='text-foreground'>{benefit}</p>
                </div>
              ))}
            </div>

            <p className='text-lg text-muted-foreground'>
              All of this is supported by a built-in CRM that keeps leads,
              conversations, next steps, and reminders organized—without adding
              another system to manage.
            </p>
          </div>
        </div>
      </section>

      {/* Visibility & Discovery */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
                Support for Visibility and Discovery
              </h2>

              <p className='text-lg text-muted-foreground mb-6'>
                Growth also depends on being easy to find.
              </p>

              <div className='space-y-4'>
                {growthSupport.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-3'
                  >
                    <Search className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
                    <p className='text-foreground'>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-muted/30 rounded-xl p-8 border border-border'>
              <p className='text-sm text-muted-foreground'>
                Designed to help practices show up consistently in search
                results and modern answer-driven platforms—without ongoing
                manual effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Fit */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Designed to Fit Your Workflow
            </h2>

            <p className='text-lg text-muted-foreground mb-4'>
              This system works alongside the tools practices already use.
            </p>

            <p className='text-lg text-muted-foreground'>
              No disruption. No forced changes.
            </p>

            {/* Integration logos placeholder */}
            <div className='mt-10 flex flex-wrap gap-8'>
              <div className='h-10 w-32 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground'>
                Integration Logo
              </div>
              <div className='h-10 w-32 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground'>
                Integration Logo
              </div>
              <div className='h-10 w-32 bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground'>
                Integration Logo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-20 bg-primary/5'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Ready to See How This Works for Your Practice?
          </h2>

          <Button
            asChild
            size='lg'
            className='bg-primary hover:bg-primary/90'
          >
            <Link to='/contact'>Request a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default MarketingAutomation
