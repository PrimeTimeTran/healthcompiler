import { Layout } from '@/components/layout/Layout'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { IntegrationScene3D } from '@/components/integration/IntegrationScene3D'

const categories = [
  'Electronic Health Records',
  'Claims',
  'Wearables',
  'Communication',
  'Labs',
  'Continuous Glucose Monitoring',
  'Dental',
  'Billing',
  'Human Capital',
]

const Integration = () => {
  const [email, setEmail] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: 'Request submitted!',
        description: "We'll be in touch about building your integration.",
      })
      setEmail('')
    }
  }

  return (
    <Layout>
      <section className='relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden'>
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px),
                           linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className='container mx-auto px-4 relative'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
              Connect with your{' '}
              <span className='text-primary'>existing apps</span>
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Seamlessly integrate with 50+ healthcare and business applications
            </p>
          </div>
          <div className='max-w-6xl mx-auto mb-16'>
            <IntegrationScene3D />
          </div>
          <div className='max-w-xl mx-auto text-center'>
            <p className='text-lg text-foreground mb-8'>
              If your app is missing, we can help quickly build an integration
            </p>
            <form
              onSubmit={handleSubmit}
              className='space-y-4'
            >
              <Input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='h-14 text-base bg-white border-border rounded-lg'
                required
              />
              <Button
                size='lg'
                type='submit'
                variant='gradient'
                className='w-full sm:w-auto h-14 px-16 text-base font-semibold rounded-lg bg-primary hover:bg-primary/90'
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Integration
