import { Layout } from '@/components/layout/Layout'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  HelpCircle,
  Stethoscope,
  Building2,
  Users,
  Briefcase,
  HeartPulse,
  LineChart,
  Landmark,
  Hospital,
} from 'lucide-react'
import { Helmet } from 'react-helmet'

const faqCategories = [
  { title: 'Direct Primary Care', anchor: 'FAQ-DPC', icon: Stethoscope },
  { title: 'Self-Funded Employers', anchor: 'FAQ-SFE', icon: Building2 },
  { title: 'ACOs', anchor: 'FAQ-ACO', icon: HeartPulse },
  { title: 'Health Plans & TPAs', anchor: 'FAQ-HPT', icon: Landmark },
  { title: 'Health Systems & MSOs', anchor: 'FAQ-HSM', icon: Hospital },
  { title: 'Investors & Strategic Partners', anchor: 'FAQ-ISP', icon: LineChart },
]

const dpcFaqs = [
  {
    question: 'What is Health Compiler for Direct Primary Care practices?',
    answer:
      'Health Compiler is a healthcare analytics and reporting infrastructure platform designed specifically for Direct Primary Care (DPC) practices. It helps DPC clinics measure utilization, demonstrate employer value, and improve operational efficiency without relying on insurance billing data.\n\nUnlike traditional EHRs, Health Compiler sits on top of your existing systems and transforms clinical and membership data into employer-ready reports, dashboards, and AI-powered insights. It enables DPC practices to quantify value, strengthen employer relationships, and scale sustainably.',
  },
  {
    question: 'How does Health Compiler help DPC practices prove ROI to employers?',
    answer:
      'Health Compiler calculates and visualizes DPC ROI using utilization trends, emergency department diversion, care engagement metrics, and cost avoidance modeling.\n\nThe platform:\n• Tracks visit frequency and preventive engagement\n• Measures urgent care and ER diversion\n• Creates employer-specific summary reports\n• Provides utilization comparisons against traditional primary care\n\nThis enables DPC practices to communicate financial and clinical value clearly to self-funded employers.',
  },
  {
    question: 'Does Health Compiler replace my EHR?',
    answer:
      'No. Health Compiler does not replace your EHR. It integrates with your existing EHR or DPC platform and acts as an analytics and intelligence layer.\n\nYour clinical workflow remains unchanged. Health Compiler extracts structured data securely and converts it into dashboards, employer reporting tools, and operational insights.',
  },
  {
    question: 'Can Health Compiler integrate with Hint or other DPC platforms?',
    answer:
      'Yes. Health Compiler integrates with leading DPC platforms including Hint and other practice management systems using secure APIs and structured data feeds.\n\nThis allows seamless reporting without disrupting clinical workflows.',
  },
  {
    question: 'Is Health Compiler HIPAA compliant?',
    answer:
      'Health Compiler is built with HIPAA-aligned security principles. It uses secure infrastructure, encrypted data pipelines, and strict access controls to protect Protected Health Information (PHI).\n\nCompliance and data protection are foundational design principles.',
  },
  {
    question: 'How does Health Compiler improve patient retention in DPC?',
    answer:
      'Health Compiler identifies engagement gaps and utilization trends that may indicate disengagement.\n\nIt helps practices:\n• Track visit frequency\n• Monitor chronic condition engagement\n• Identify inactive members\n• Generate retention-focused insights\n\nThis supports proactive outreach and better patient continuity.',
  },
]

const selfFundedFaqs = [
  {
    question: 'What is Health Compiler for self-funded employers?',
    answer:
      'Health Compiler is a healthcare analytics platform that provides self-funded employers with visibility into healthcare utilization, cost trends, and Direct Primary Care performance.\n\nIt transforms fragmented healthcare data into structured dashboards that support cost control and informed benefits strategy decisions.',
  },
  {
    question: 'How does Health Compiler reduce employer healthcare costs?',
    answer:
      'Health Compiler reduces costs by identifying utilization patterns and avoidable high-cost events.\n\nThe platform highlights:\n• Emergency department usage trends\n• Preventable admissions\n• Chronic condition management gaps\n• Engagement patterns\n• DPC impact modeling\n\nThis enables proactive cost containment strategies.',
  },
  {
    question: 'Can Health Compiler measure Direct Primary Care ROI?',
    answer:
      'Yes. Health Compiler measures DPC ROI by combining utilization analytics, cost modeling, and engagement metrics.\n\nIt provides:\n• Avoided claims estimations\n• Utilization trend comparisons\n• Cost transparency dashboards\n• Employer-specific value reporting\n\nThis supports data-driven DPC adoption decisions.',
  },
  {
    question: 'Does Health Compiler replace a TPA?',
    answer:
      'No. Health Compiler works alongside TPAs. It enhances claims and eligibility data with advanced analytics and employer-facing dashboards.\n\nIt is an intelligence layer, not a replacement.',
  },
  {
    question: 'How does Health Compiler improve healthcare cost transparency?',
    answer:
      'Health Compiler consolidates data across DPC, claims, and utilization feeds into structured dashboards.\n\nThis gives employers:\n• Clear cost visibility\n• Population-level insights\n• Predictive trend analysis\n• Benchmark comparisons',
  },
]

const acoFaqs = [
  {
    question: 'What is Health Compiler for ACOs?',
    answer:
      'Health Compiler is an analytics infrastructure platform for Accountable Care Organizations participating in value-based care programs.\n\nIt supports population health analytics, risk adjustment visibility, and performance reporting aligned with CMS and other value-based contracts.',
  },
  {
    question: 'Does Health Compiler support CMS reporting?',
    answer:
      'Health Compiler supports structured data aggregation, quality tracking, and performance visibility aligned with CMS value-based programs.\n\nIt helps ACOs prepare for reporting by consolidating data across care settings.',
  },
  {
    question: 'Can Health Compiler assist with risk adjustment analytics?',
    answer:
      'Yes. Health Compiler provides HCC tracking, risk score visibility, and coding performance insights.\n\nThis helps ACOs monitor risk capture and improve documentation alignment.',
  },
  {
    question: 'How is Health Compiler different from traditional population health tools?',
    answer:
      'Health Compiler is modular, AI-enabled, and interoperability-focused.\n\nUnlike legacy systems, it:\n• Integrates multiple data sources\n• Provides employer-facing reporting layers\n• Supports DPC + ACO hybrid models\n• Emphasizes structured analytics over static dashboards',
  },
]

const healthPlanFaqs = [
  {
    question: 'How does Health Compiler integrate with TPAs?',
    answer:
      'Health Compiler integrates using structured claims feeds, eligibility files, and secure APIs.\n\nIt normalizes claims data and transforms it into advanced analytics dashboards.',
  },
  {
    question: 'Can Health Compiler unify DPC and claims data?',
    answer:
      'Yes. Health Compiler can combine DPC membership data with traditional claims feeds.\n\nThis creates a unified view of:\n• Total cost of care\n• Utilization trends\n• Care engagement\n• Cost drivers',
  },
  {
    question: 'Does Health Compiler replace existing analytics systems?',
    answer:
      'No. It enhances existing systems by adding AI-powered insights, employer dashboards, and cross-model analytics.',
  },
  {
    question: 'How does Health Compiler support value-based plan design?',
    answer:
      'Health Compiler provides cost and utilization modeling tools that support innovative plan structures, including DPC-integrated models.',
  },
]

const healthSystemFaqs = [
  {
    question: 'How can Health Systems use Health Compiler?',
    answer:
      'Health Systems can use Health Compiler to unify data across employed providers, DPC models, and value-based programs.\n\nIt enables system-wide visibility into performance, cost trends, and population health outcomes.',
  },
  {
    question: 'Can MSOs use Health Compiler across multiple practices?',
    answer:
      'Yes. Health Compiler supports multi-entity aggregation, allowing MSOs to view performance across multiple affiliated clinics.\n\nIt standardizes reporting across diverse data systems.',
  },
  {
    question: 'Does Health Compiler support hybrid care models?',
    answer:
      'Yes. It supports fee-for-service, DPC, and value-based care analytics within a single infrastructure framework.',
  },
  {
    question: 'How does Health Compiler improve strategic decision-making?',
    answer:
      'Health Compiler provides leadership dashboards that highlight:\n• Cost drivers\n• Utilization anomalies\n• Population risk trends\n• Growth opportunities',
  },
]

const investorFaqs = [
  {
    question: 'What problem does Health Compiler solve?',
    answer:
      'Health Compiler solves healthcare data fragmentation across DPC, employers, ACOs, and health plans.\n\nIt creates a unified analytics infrastructure layer that supports cost transparency and value-based transformation.',
  },
  {
    question: 'What makes Health Compiler defensible?',
    answer:
      'Health Compiler\'s defensibility comes from:\n• Infrastructure-first architecture\n• Multi-sided integration (DPC + Employer + VBC)\n• AI-enabled analytics\n• Compliance-first design\n• Data network effects',
  },
  {
    question: 'Is Health Compiler a SaaS company or infrastructure platform?',
    answer:
      'Health Compiler is an infrastructure-grade SaaS platform. It provides analytics, reporting, and AI enablement layers that integrate across healthcare ecosystems.',
  },
  {
    question: 'Who benefits most from Health Compiler?',
    answer:
      'The primary beneficiaries are:\n• Direct Primary Care practices\n• Self-funded employers\n• Accountable Care Organizations\n• Health plans\n• Value-based networks',
  },
]

interface FAQSectionProps {
  id: string
  title: string
  icon: React.ElementType
  faqs: { question: string; answer: string }[]
  bgClass?: string
}

const FAQSection = ({ id, title, icon: IconComponent, faqs, bgClass = 'bg-muted/30' }: FAQSectionProps) => (
  <section id={id} className={`py-20 ${bgClass}`}>
    <div className='container mx-auto px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center gap-3 mb-8'>
          <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
            <IconComponent className='w-6 h-6 text-primary' />
          </div>
          <h2 className='text-3xl font-bold text-foreground'>{title}</h2>
        </div>

        <div className='bg-card border border-border rounded-2xl overflow-hidden'>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-b border-border last:border-b-0'
              >
                <AccordionTrigger className='text-left text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline px-6 py-5'>
                  <span className='flex items-start gap-3'>
                    <HelpCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground px-6 pb-5 pl-14 whitespace-pre-line leading-relaxed'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
)

const faqSections = [
  { id: 'FAQ-DPC', title: 'Direct Primary Care', icon: Stethoscope, faqs: dpcFaqs },
  { id: 'FAQ-SFE', title: 'Self-Funded Employers', icon: Building2, faqs: selfFundedFaqs },
  { id: 'FAQ-ACO', title: 'ACOs', icon: HeartPulse, faqs: acoFaqs },
  { id: 'FAQ-HPT', title: 'Health Plans & TPAs', icon: Landmark, faqs: healthPlanFaqs },
  { id: 'FAQ-HSM', title: 'Health Systems & MSOs', icon: Hospital, faqs: healthSystemFaqs },
  { id: 'FAQ-ISP', title: 'Investors & Strategic Partners', icon: LineChart, faqs: investorFaqs },
]

const solutions = [
  {
    title: 'DPC Insights & Reporting Platform',
    description:
      'Unlock the power of wearables and device analytics for real-time health data. Seamlessly gather patients vital information, enabling comprehensive insights.',
    link: '/solutions/direct-primary-care',
  },
  {
    title: 'DPC Marketing Automation Platform',
    description:
      'Effortlessly manage patient, organize local contacts, and run targeted campaigns with our streamlined system. Prioritize tasks, use customizable templates, and integrate with your EHR for personalized patient engagement.',
    link: '/solutions/direct-primary-care',
  },
  {
    title: 'Website and Marketing Services',
    description:
      'Unlock the potential of a custom-designed DPC website, you can do changes without having to code, ensuring a hassle-free experience. Benefit from SEO, ensuring easy discoverability and attracting targeted local traffic and leads.',
    link: '/solutions/direct-primary-care',
  },
]

const FAQs = () => {
  return (
    <Layout>
      <Helmet>
        <title>FAQs | Health Compiler — Healthcare Analytics Platform</title>
        <meta
          name='description'
          content="Find answers to common questions about Health Compiler's healthcare analytics platform for DPC practices, self-funded employers, ACOs, health plans, health systems, and investors."
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
              Find answers to common questions about our platform, services, and
              healthcare solutions
            </p>
          </div>

          {/* Category Cards Grid */}
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

      {/* Contact CTA Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Still Have Questions?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Send us your details and we'll get back to you to schedule a time
              to talk.
            </p>
            <Link to='/contact'>
              <Button size='lg' className='px-10'>
                Contact Us
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Our Solutions
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Explore our comprehensive suite of healthcare technology solutions
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className='group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col'
              >
                <div className='bg-muted/30 p-6 relative'>
                  <div className='absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 border-border/50'></div>
                  <div className='absolute top-4 right-4 w-5 h-5 border-r-2 border-t-2 border-border/50'></div>

                  <h3 className='text-xl font-bold text-foreground px-4'>
                    {solution.title}
                  </h3>
                </div>

                <div className='p-6 flex flex-col flex-1'>
                  <p className='text-muted-foreground text-sm leading-relaxed flex-1'>
                    {solution.description}
                  </p>

                  <div className='mt-6'>
                    <Link to={solution.link}>
                      <Button
                        variant='outline'
                        className='w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary'
                      >
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FAQs
