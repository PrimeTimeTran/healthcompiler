import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  Database,
  Upload,
  Settings,
  Download,
  BarChart3,
  Zap,
} from 'lucide-react'
import transparencyImg from '@/assets/employers-transparency.png'
import quantifiableImg from '@/assets/employers-quantifiable.png'
import accountabilityImg from '@/assets/employers-accountability.png'
import intuitivePlatformImg from '@/assets/employers-intuitive-platform.png'
import teamExpertsImg from '@/assets/employers-team-experts.png'
import planBenchmarkingImg from '@/assets/employers-plan-benchmarking.png'
import targetedSolutionsImg from '@/assets/employers-targeted-solutions.png'
import { GridSection } from '@/components/ui'

const Employers = () => {
  const dataProcessSteps = [
    {
      icon: Database,
      title: 'Extraction',
      description:
        'Unlock data from diverse sources with precision and efficiency.',
    },
    {
      icon: Upload,
      title: 'Ingestion',
      description: 'Seamlessly integrate data into your ecosystem at scale.',
    },
    {
      icon: Settings,
      title: 'Transformation',
      description:
        'Turn raw data into actionable insights with advanced processing.',
    },
    {
      icon: Download,
      title: 'Loading',
      description:
        'Deliver clean, ready-to-use data to your systems with speed.',
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      description: 'Unveil insights through intuitive and dynamic dashboards.',
    },
    {
      icon: Zap,
      title: 'Action',
      description: 'Drive impactful decisions with data-driven strategies.',
    },
  ]

  const keyBenefits = [
    {
      image: transparencyImg,
      title: 'Transparency',
      description:
        'Collect and enhance your data intelligently. Monitor your programs financially in real time to minimize waste in healthcare spending and achieve better outcomes.',
    },
    {
      image: quantifiableImg,
      title: 'Quantifiable',
      description:
        'Our solutions identify the key areas to focus on for maximum impact, enabling measurable savings and improved outcomes for your employees.',
    },
    {
      image: accountabilityImg,
      title: 'Accountability',
      description:
        'Maintain vendor accountability through complete data transparency. Track results in real time to assess and modify strategies as necessary.',
    },
    {
      image: intuitivePlatformImg,
      title: 'Intuitive Platform',
      description:
        'Get immediate answers with a flexible platform that provides high-level dashboards and detailed data reports at your fingertips.',
    },
    {
      image: teamExpertsImg,
      title: 'Team of Experts',
      description:
        'Collaborate with industry experts and innovative analysts who work with your team to uncover opportunities, identify inefficiencies, and monitor emerging risks.',
    },
    {
      image: planBenchmarkingImg,
      title: 'Plan Design Benchmarking',
      description:
        "Health Compiler's proprietary benchmarking technology offers a comprehensive benefits strategy that sets you apart from competitors.",
    },
    {
      image: targetedSolutionsImg,
      title: 'Targeted Solutions',
      description:
        'We apply clinical and industry methodologies to analyze your claims data, effectively identifying savings tailored to your unique profile.',
    },
  ]

  return (
    <Layout>
      <GridSection>
        <div className='container mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            <div className='space-y-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]'>
                Employers can Level up cost savings, better outcomes with solid
                benefits using{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                  Human Capital Data
                </span>
              </h1>
              <p className='text-xl text-muted-foreground mb-8'>
                Our platform + expertise can help reduces your healthcare spend
                by eliminating waste and enhancing risk outcomes
              </p>
              <Button
                asChild
                size='lg'
                variant='gradient'
                className='bg-primary hover:bg-primary/90'
              >
                <Link to='/contact'>Unlock Insights now</Link>
              </Button>
            </div>
          </div>
        </div>
      </GridSection>
      {/* Data Integration Section */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <p className='text-lg text-muted-foreground mb-12 max-w-5xl'>
            Integrating your human capital data provides you and your advisors
            with a comprehensive view of the challenges and cost-saving
            opportunities within your population. Leverage these insights to
            make strategic decisions that lower expenses and enhance member
            health.
          </p>

          <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {dataProcessSteps.map((step, index) => (
              <div
                key={index}
                className='text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                  <step.icon className='w-8 h-8 text-primary' />
                </div>
                <h4 className='font-semibold mb-2'>{step.title}</h4>
                <p className='text-sm text-muted-foreground'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Compiler Solutions Section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-6'>Health Compiler Solutions</h2>
          <p className='text-lg text-muted-foreground max-w-5xl'>
            By integrating your human capital data, you and your advisors gain a
            thorough understanding of the challenges and potential cost-saving
            opportunities within your workforce. Leverage these insights to make
            strategic decisions that lower expenses and improve member health.
            We focus on providing employees with real-time analytics and
            comprehensive data insights. Our platform enhances transparency
            regarding the value and ROI of Direct Care services, offering
            continuous insights into service value, employee engagement, Human
            Capital Analytics, and healthcare utilization.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Key <span className='text-primary'>Benefits</span>
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className='bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border'
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className='w-16 h-16 mb-4 object-contain'
                />
                <h3 className='text-xl font-semibold mb-3'>{benefit.title}</h3>
                <p className='text-muted-foreground'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Data Section */}
      <section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-6'>
            Real-Time Data, Real-World Decisions
          </h2>
          <p className='text-lg text-muted-foreground max-w-5xl'>
            Say goodbye to waiting for quarterly reports or manual data
            compilations. HC Insights delivers real-time data on Direct Primary
            Care (DPC) performance, directly influencing employer
            decision-making. With our all-encompassing dashboard, you can track
            service utilization trends, monitor employee health engagement, and
            evaluate the financial impact of healthcare investments - all in one
            convenient location.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Are you ready to discover the value of direct care services?
          </h2>
          <p className='text-lg mb-8 opacity-90'>
            Let Health Compiler Insights guide you towards informed decisions
            and transparent healthcare solutions. Connect with us today to learn
            more.
          </p>
          <Button
            asChild
            size='lg'
            variant='secondary'
          >
            <Link to='/contact'>Book Your Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default Employers
