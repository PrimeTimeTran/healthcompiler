import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Stethoscope,
  Building2,
  HeartPulse,
  Landmark,
  Hospital,
  LineChart,
} from 'lucide-react'
import { Helmet } from 'react-helmet'
import { FAQSection } from '@/components/faqs/FAQSection'
import {
  directCareFaqs,
  directCareIntro,
  selfFundedEmployersFaqs,
  selfFundedEmployersIntro,
  acosFaqs,
  acosIntro,
  healthPlansTpasFaqs,
  healthPlansTpasIntro,
  healthSystemsMsosFaqs,
  healthSystemsMsosIntro,
  investorsPartnersFaqs,
  investorsPartnersIntro,
} from '@/data/faqs'

const faqCategories = [
  { title: 'Direct Care', anchor: 'FAQ-DC', icon: Stethoscope },
  { title: 'Self-Funded Employers', anchor: 'FAQ-SFE', icon: Building2 },
  { title: 'ACOs & Value-Based Care', anchor: 'FAQ-ACO', icon: HeartPulse },
  { title: 'Health Plans & TPAs', anchor: 'FAQ-HPT', icon: Landmark },
  { title: 'Health Systems & MSOs', anchor: 'FAQ-HSM', icon: Hospital },
  { title: 'Investors & Strategic Partners', anchor: 'FAQ-ISP', icon: LineChart },
]

const faqSections = [
  { id: 'FAQ-DC', title: 'Direct Care', icon: Stethoscope, intro: directCareIntro, faqs: directCareFaqs },
  { id: 'FAQ-SFE', title: 'Self-Funded Employers', icon: Building2, intro: selfFundedEmployersIntro, faqs: selfFundedEmployersFaqs },
  { id: 'FAQ-ACO', title: 'ACOs & Value-Based Care', icon: HeartPulse, intro: acosIntro, faqs: acosFaqs },
  { id: 'FAQ-HPT', title: 'Health Plans & TPAs', icon: Landmark, intro: healthPlansTpasIntro, faqs: healthPlansTpasFaqs },
  { id: 'FAQ-HSM', title: 'Health Systems & MSOs', icon: Hospital, intro: healthSystemsMsosIntro, faqs: healthSystemsMsosFaqs },
  { id: 'FAQ-ISP', title: 'Investors & Strategic Partners', icon: LineChart, intro: investorsPartnersIntro, faqs: investorsPartnersFaqs },
]

const FAQs = () => {
  return (
    <Layout>
      <Helmet>
        <title>FAQs | Healthcare Analytics Platform for DPC, Employers, ACOs | Health Compiler</title>
        <meta
          name='description'
          content="Find answers about Health Compiler's healthcare analytics infrastructure for direct care practices, self-funded employers, ACOs, health plans, health systems, and investors."
        />
      </Helmet>

      {/* Hero Section */}
      <section className='py-20 md:py-28 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4'>
              Frequently Asked{' '}
              <span className='text-primary italic'>Questions</span>
            </h1>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Find answers to common questions about Health Compiler's healthcare analytics infrastructure platform
            </p>
          </div>

          {/* Anchor Jump Navigation */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {faqCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <a
                  key={index}
                  href={`#${category.anchor}`}
                  className='group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col'
                >
                  <div className='bg-muted/30 p-8 md:p-10 flex items-center justify-center min-h-[140px] relative'>
                    <div className='absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-border/50'></div>
                    <div className='absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-border/50'></div>
                    <div className='absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-border/50'></div>
                    <div className='absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-border/50'></div>
                    <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                      <IconComponent className='w-8 h-8 text-primary' />
                    </div>
                  </div>
                  <div className='p-6 flex flex-col flex-1'>
                    <h3 className='text-xl font-bold text-foreground mb-3'>
                      {category.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed flex-1'>
                      Explore frequently asked questions about{' '}
                      {category.title.toLowerCase()}
                    </p>
                    <div className='mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all'>
                      <span>Explore FAQs</span>
                      <ArrowRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' />
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqSections.map((section, index) => (
        <FAQSection
          key={section.id}
          {...section}
          bgClass={index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}
        />
      ))}

      {/* Conversion CTA Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Data Infrastructure for the Future of Direct & Value-Based Care
            </h2>
            <p className='text-lg text-muted-foreground mb-4'>
              HIPAA compliant architecture. Interoperability across DPC, employers, ACOs, and health plans. AI-powered analytics that turn fragmented data into unified intelligence.
            </p>
            <p className='text-lg text-muted-foreground mb-8'>
              Multi-model support for fee-for-service, membership, and value-based care — all from a single platform.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/book-a-demo'>
                <Button size='lg' className='px-10'>
                  Request a Demo
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </Link>
              <Link to='/contact'>
                <Button size='lg' variant='outline' className='px-10 border-primary/50 text-primary hover:bg-primary/10'>
                  Schedule a Strategy Call
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FAQs
