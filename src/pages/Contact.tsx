import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Mail, MapPin } from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const body = {
        fields: [
          { name: 'name', value: formData.name },
          { name: 'email', value: formData.email },
          { name: 'company', value: formData.company || '' },
          { name: 'message', value: formData.message },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }

      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/21742361/e3e19336-05db-4c5f-8bb2-0b553d3c9b15',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      if (!response.ok) {
        const text = await response.text()
        throw new Error(`HubSpot submission failed: ${response.status} ${text}`)
      }

      toast.success("Thank you for your message! We'll be in touch soon.")
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error('Failed to submit the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Layout>
      {/* Contact Form */}
      <section className='section-padding bg-background'>
        <div className='container-tight mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
            {/* Form */}
            <div className='bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50'>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                Book a Consultation
              </h2>
              <form
                onSubmit={handleSubmit}
                className='space-y-6'
              >
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all'
                    placeholder='you@company.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Company
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all'
                    placeholder='Your company name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none'
                    placeholder='Tell us about your project or data challenges...'
                  />
                </div>
                <Button
                  type='submit'
                  size='lg'
                  className='w-full'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='space-y-8'>
              <div>
                <h2 className='font-display text-2xl font-bold text-foreground mb-4'>
                  Let's Start a Conversation
                </h2>
                <p className='text-muted-foreground leading-relaxed'>
                  Whether you're looking to modernize your healthcare data
                  infrastructure, build custom analytics solutions, or automate
                  operational workflows—we're here to help.
                </p>
              </div>

              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-5 h-5 text-accent' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground'>Email</h4>
                    <p className='text-muted-foreground text-sm'>
                      hello@healthcompiler.com
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-5 h-5 text-accent' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-foreground'>Location</h4>
                    <p className='text-muted-foreground text-sm'>
                      United States (Remote-first)
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-secondary rounded-2xl p-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  What to Expect
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                    Response within 24 hours
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                    No-pressure discovery call
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                    Clear project scoping
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 bg-accent rounded-full' />
                    Transparent pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
