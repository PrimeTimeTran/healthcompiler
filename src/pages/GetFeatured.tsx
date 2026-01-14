import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ArrowRight, CheckCircle } from 'lucide-react'

const GetFeatured = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    story: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success(
      "Thank you! Your submission has been received. We'll be in touch soon."
    )
    setFormData({ name: '', email: '', organization: '', role: '', story: '' })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Layout>
      {/* Hero */}
      <section className='pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-background to-background-secondary'>
        <div className='container mx-auto px-6 text-center'>
          <p className='text-sm uppercase tracking-widest text-accent mb-4'>
            APEX Magazine
          </p>
          <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Get <span className='text-primary'>Featured</span>
          </h1>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Share your story with the APEX community. We feature change makers
            in Direct Primary Care, Direct Specialty Care, and Self-Funded
            Benefits Advisory.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto'>
            {/* Form */}
            <div className='bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50'>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                Tell Us About Yourself
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
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                    placeholder='Dr. Jane Smith'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                    placeholder='jane@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='organization'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Organization / Practice
                  </label>
                  <input
                    type='text'
                    id='organization'
                    name='organization'
                    value={formData.organization}
                    onChange={handleChange}
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                    placeholder='Your practice or company name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='role'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Your Role *
                  </label>
                  <select
                    id='role'
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                  >
                    <option value=''>Select your role</option>
                    <option value='dpc'>Direct Primary Care Physician</option>
                    <option value='dsc'>Direct Specialty Care Provider</option>
                    <option value='benefits'>Benefits Advisor</option>
                    <option value='employer'>Employer / HR Leader</option>
                    <option value='other'>Other Healthcare Professional</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='story'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Your Story *
                  </label>
                  <textarea
                    id='story'
                    name='story'
                    value={formData.story}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none'
                    placeholder="Tell us about your journey, what makes you a change maker in healthcare, and what you'd like to share with our community..."
                  />
                </div>

                <Button
                  type='submit'
                  variant='gradient'
                  size='lg'
                  className='w-full'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Your Story'}
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className='space-y-8'>
              <div>
                <h2 className='font-display text-2xl font-bold text-foreground mb-4'>
                  Why Get Featured?
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-6'>
                  APEX Magazine celebrates the innovators and change makers who
                  are transforming healthcare delivery. Being featured connects
                  you with a community of like-minded professionals and
                  amplifies your impact.
                </p>
              </div>

              <div className='space-y-4'>
                <h3 className='font-semibold text-foreground'>
                  What to expect:
                </h3>
                {[
                  'Professional photo shoot or use your own',
                  'In-depth interview about your journey',
                  'Feature article on APEX Magazine',
                  'Social media promotion across our channels',
                  'Connection with the APEX community',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className='flex items-start gap-3'
                  >
                    <CheckCircle className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                    <span className='text-muted-foreground'>{item}</span>
                  </div>
                ))}
              </div>

              <div className='bg-secondary rounded-2xl p-6'>
                <h4 className='font-semibold text-foreground mb-2'>
                  Questions?
                </h4>
                <p className='text-sm text-muted-foreground mb-4'>
                  Reach out to our team at{' '}
                  <a
                    href='mailto:apex@healthcompiler.com'
                    className='text-accent hover:underline'
                  >
                    apex@healthcompiler.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GetFeatured
