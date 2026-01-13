import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  DollarSign,
  Users,
  Activity,
  FileText,
  CheckCircle,
  Heart,
  Code,
  Eye,
  Leaf,
  Building,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import acoHeroImg from '@/assets/aco-hero-image.png'

const ACOs = () => {
  const helpCards = [
    {
      icon: DollarSign,
      title: 'Cost and Utilization',
      description: 'Effective cost management and resource utilization.',
    },
    {
      icon: Users,
      title: 'Care Management',
      description: 'Comprehensive care coordination and patient management.',
    },
    {
      icon: Activity,
      title: 'Patient Risk attribution',
      description:
        'Accurate and timely patient risk assessment (CMS HCC and HSS HCC).',
    },
    {
      icon: FileText,
      title: 'ACO Reporting',
      description: 'Detailed and compliant ACO performance reporting.',
    },
    {
      icon: CheckCircle,
      title: 'Quality and Evidence based reporting',
      description:
        'Reporting grounded in quality metrics and evidence-based practices.',
    },
    {
      icon: Heart,
      title: 'Membership and Critical care',
      description:
        'Management of membership data and critical care coordination.',
    },
    {
      icon: Code,
      title: 'HCC Coding',
      description: 'Structured coding, better forecasting',
    },
    {
      icon: Eye,
      title: 'Patient 360',
      description: 'Holistic view of patient data and insights.',
    },
    {
      icon: Leaf,
      title: 'Health Outcomes',
      description: 'Healthy people, stronger communities',
    },
  ]

  const features = [
    {
      number: '1',
      title: 'Dynamic Dashboards',
      description:
        'Take full control with interactive dashboards, offering customized views through user-friendly filters tailored to each client population.',
    },
    {
      number: '2',
      title: 'Versatile Data Views',
      description:
        'Explore data from various perspectives with customizable reporting views. Filter data by time period, demographics, provider groups, regions, and more to extract meaningful insights.',
    },
    {
      number: '3',
      title: 'Comprehensive Summaries',
      description:
        "Get a high-level overview including population characteristics, risk scores, and annual per member costs for quick insights into your ACO's performance.",
    },
    {
      number: '4',
      title: 'Claims Utilization Analysis',
      description:
        'Assess service utilization against benchmarks to identify areas for cost reduction. Benchmarks are adjusted for risk or demographics to ensure accurate performance evaluation.',
    },
    {
      number: '5',
      title: 'Leakage Identification',
      description:
        'Identify high out-of-network utilization to address potential leakage issues. Drill down into specific service categories to understand patient-provider interactions better.',
    },
  ]

  const apmInfo = {
    whatAreApms: [
      'Payment approaches link reimbursemend to a quality and cost',
      'Types of APM: MS ACOs, bundled payments',
      'ACO REACH: an advanced accountable care model',
    ],
    acoReach: [
      'CMS total cost of care model starting in 2023',
      'Full or partial risk—options',
    ],
    rightSide: [
      'Full or partial risk',
      'Standard ACOs Today',
      'High needs ACOs',
      'REACH-specific quality measures',
    ],
  }

  return (
    <Layout>
      <section className='py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='text-primary'>ACO Utilization</span> & Cost
                Evaluation
              </h1>
              <p className='text-lg text-muted-foreground mb-8'>
                HealthCompiler Insight for ACOs is an advanced reporting
                interface designed to provide Accountable Care Organizations
                with comprehensive clinical and claims data analysis. Our
                solution equips ACOs with crucial insights into healthcare
                utilization and cost trends, promoting data-driven
                decision-making and optimized care management strategies.
              </p>
              <Button
                asChild
                size='lg'
                className='bg-primary hover:bg-primary/90'
              >
                <Link to='/contact'>Contact Us</Link>
              </Button>
            </div>
            <div className='flex justify-center'>
              <img
                src={acoHeroImg}
                alt='ACO Utilization'
                className='max-w-full h-auto rounded-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-primary text-2xl font-bold mb-4'>Overview</h2>
              <h3 className='text-2xl font-bold mb-6'>
                Unlock Deeper Insights from Your Data
              </h3>
              <p className='text-muted-foreground'>
                <strong>HealthCompiler Insight for ACO</strong> offers a
                sophisticated reporting interface for analyzing claims data,
                purpose-built to support Medicare, Medicaid, and commercial ACO
                populations. Designed with both primary care and specialty care
                in mind, this platform helps organizations manage costs and
                improve care quality across the continuum. Users can track
                utilization patterns, explore detailed patient cohort analyses,
                and uncover potential cost-saving opportunities. The web-based
                tool features predefined data views and benchmarks, delivering
                convenient access to personalized, comprehensive reports
                tailored to the unique needs of value-based care organizations.
              </p>
            </div>

            <div className='bg-muted/30 rounded-xl p-8'>
              <h3 className='text-2xl font-bold mb-6 text-center'>
                ACO REACH and Alternative Payment Models
              </h3>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-semibold mb-3'>What Are APMs</h4>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    {apmInfo.whatAreApms.map((item, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2'
                      >
                        <span className='text-primary mt-1'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    {apmInfo.rightSide.map((item, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2'
                      >
                        <span className='text-primary mt-1'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='mt-6 bg-primary text-primary-foreground rounded-lg p-4'>
                <h4 className='font-bold text-lg mb-2'>ACO REACH</h4>
                <p className='text-sm'>
                  Realizing Equity, Access, and Community Health
                </p>
                <ul className='mt-3 space-y-1 text-sm'>
                  {apmInfo.acoReach.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-2'
                    >
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-6'>
                <h4 className='font-semibold mb-4'>How ACO REACH Works</h4>
                <div className='flex items-center justify-between text-sm'>
                  <div className='text-center'>
                    <Building className='w-8 h-8 mx-auto mb-2 text-primary' />
                    <span>ACO</span>
                  </div>
                  <ArrowRight className='w-4 h-4 text-muted-foreground' />
                  <div className='text-center'>
                    <TrendingUp className='w-8 h-8 mx-auto mb-2 text-primary' />
                    <span className='block'>BENCHMARK</span>
                    <span className='text-xs text-muted-foreground'>
                      COST MODE
                    </span>
                  </div>
                  <ArrowRight className='w-4 h-4 text-muted-foreground' />
                  <div className='text-center'>
                    <DollarSign className='w-8 h-8 mx-auto mb-2 text-primary' />
                    <span className='block'>ACTUAL</span>
                    <span className='text-xs text-muted-foreground'>
                      SPENDING
                    </span>
                  </div>
                  <ArrowRight className='w-4 h-4 text-muted-foreground' />
                  <div className='text-center text-xs'>
                    <span className='block'>SAVE → OWE</span>
                    <span className='block mt-1'>OWE →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help ACOs Section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            How do we help <span className='text-primary'>ACO's</span>
          </h2>

          <div className='grid md:grid-cols-3 gap-6'>
            {helpCards.map((card, index) => (
              <div
                key={index}
                className='bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border'
              >
                <card.icon className='w-10 h-10 text-primary mb-4' />
                <h3 className='text-lg font-semibold mb-2'>{card.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Solution Features Section */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <p className='text-sm text-muted-foreground mb-2'>
            HealthCompiler Insights for ACO's
          </p>
          <h2 className='text-3xl font-bold mb-12'>Key Solution Features</h2>

          <div className='space-y-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='flex gap-6 items-start p-6 bg-muted/30 rounded-xl'
              >
                <span className='text-4xl font-bold text-primary'>
                  {feature.number}.
                </span>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>
                    {feature.title}:
                  </h3>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-2xl font-bold mb-4'>
            Let Health Compiler do the heavy lifting, so you can focus on what
            you do best — providing exceptional Direct Care
          </h2>
          <p className='text-lg mb-4 opacity-90'>
            Unveil the value of your services and free yourself from the manual
            effort of reporting
          </p>
          <p className='text-lg mb-8 opacity-90'>
            Ready to enhance your practice's efficiency and growth? Connect with
            us today.
          </p>
          <Button
            asChild
            size='lg'
            variant='secondary'
          >
            <Link to='/contact'>Schedule a demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default ACOs
