import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  CheckCircle,
  Users,
  Clock,
  DollarSign,
  Heart,
  Stethoscope,
  Building2,
  ArrowRight,
  Shield,
  TrendingUp,
} from 'lucide-react'

const DirectSpecialtyCareGuide = () => {
  const states = [
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Iowa',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Michigan',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
  ]

  const overviewItems = [
    'What is Direct Specialty Care?',
    'Key Components',
    'Benefits',
    'Comparison with Traditional Healthcare Models',
    'Types of Services',
    'Implementation of Direct Specialty Care',
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-28 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent' />
        <div className='container mx-auto px-4 md:px-6 relative'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='fade-in'>
              <span className='inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6'>
                Direct Specialty Care
              </span>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4'>
                Understanding{' '}
                <span className='text-primary'>Direct Specialty Care</span>
              </h1>
              <h2 className='text-xl md:text-2xl font-semibold text-foreground/80 mb-6'>
                What It Is and Why You Need It
              </h2>
              <p className='text-lg text-muted-foreground mb-8 max-w-xl'>
                Discover the Advantages and Why It Matters
              </p>
              <Link to='/contact'>
                <Button
                  size='lg'
                  className='bg-primary hover:bg-primary/90 text-primary-foreground'
                >
                  Talk to Us <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </Link>
            </div>
            <div className='slide-up stagger-2'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl' />
                <img
                  src='https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Direct+Specialty+Care-1920w.webp'
                  alt='Direct Specialty Care'
                  className='relative rounded-xl shadow-elevated w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-8'>
            Overview
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            {overviewItems.map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft card-hover'
              >
                <ArrowRight className='h-5 w-5 text-primary flex-shrink-0' />
                <span className='text-foreground font-medium'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is DSC Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            What is <span className='text-primary'>Direct Specialty Care?</span>
          </h2>

          <div className='max-w-4xl'>
            <p className='text-lg text-muted-foreground mb-6'>
              Direct Specialty Care is a model of healthcare delivery that
              promotes the patient-physician relationship and removes
              third-party payors to protect the best interests of patients.
            </p>

            <div className='bg-card rounded-xl p-6 md:p-8 shadow-card'>
              <p className='text-muted-foreground'>
                Direct Specialty Care is a healthcare model different from your
                typical fee-for-service and insurance billing type of medical
                practice. Instead, direct specialty care operates like a
                subscription service with an affordable membership fee. You join
                as a member, and, as such, you are entitled to medical services,
                discounted pricing, and many other services (e.g., nutrition,
                mindfulness, and physician therapy classes). It is a direct
                financial arrangement between the patient and the doctor.
              </p>
              <p className='text-foreground font-medium mt-4'>
                The result is enhanced patient experience, better health
                outcomes, and more affordable medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-10'>
            Key Components
          </h2>

          <div className='space-y-12'>
            {/* Direct Access */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <Users className='h-5 w-5 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-foreground'>
                  A. Direct Access to Specialists
                </h3>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-card rounded-xl p-6 shadow-card card-hover'>
                  <h4 className='font-bold text-foreground mb-3'>
                    Streamlined Referrals
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    In the DSC model, patients can book appointments directly
                    with specialists without needing a referral from a primary
                    care physician. This approach minimizes delays in accessing
                    specialized care, ensuring more timely and effective
                    interventions.
                  </p>
                </div>
                <div className='bg-card rounded-xl p-6 shadow-card card-hover'>
                  <h4 className='font-bold text-foreground mb-3'>
                    Enhanced Patient-Provider Relationship
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    DSC facilitates more extended and direct interactions
                    between patients and specialists. This increased
                    communication allows specialists to gain a comprehensive
                    understanding of each patient's health history, lifestyle,
                    and concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* Personalized Care */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <Heart className='h-5 w-5 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-foreground'>
                  B. Personalized and Focused Care
                </h3>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-card rounded-xl p-6 shadow-card card-hover'>
                  <h4 className='font-bold text-foreground mb-3'>
                    Comprehensive Consultations
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Appointments are significantly longer, often ranging from 30
                    to 60 minutes or more, compared to the typical 15-minute
                    slots in traditional settings. This extended time allows for
                    thorough discussions, detailed examinations, and more
                    comprehensive care planning.
                  </p>
                </div>
                <div className='bg-card rounded-xl p-6 shadow-card card-hover'>
                  <h4 className='font-bold text-foreground mb-3'>
                    Tailored Treatment Plans
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Specialists in DSC can develop highly individualized
                    treatment plans that consider not only the medical condition
                    but also the patient's lifestyle, preferences, and long-term
                    health goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Costs */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <DollarSign className='h-5 w-5 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-foreground'>
                  C. Transparent and Predictable Costs
                </h3>
              </div>

              <div className='bg-card rounded-xl p-6 shadow-card'>
                <h4 className='font-bold text-foreground mb-4'>
                  Clear Pricing Models
                </h4>
                <p className='text-muted-foreground mb-4'>
                  DSC practices typically offer a transparent and
                  straightforward pricing structure for all services:
                </p>
                <div className='grid md:grid-cols-3 gap-4'>
                  {[
                    {
                      title: 'Flat-Rate Fees',
                      desc: 'Set fees for specific procedures, ensuring no surprises in billing.',
                    },
                    {
                      title: 'All-Inclusive Membership',
                      desc: 'Monthly or annual fees that cover a wide range of services.',
                    },
                    {
                      title: 'Tiered Pricing',
                      desc: 'Different service levels with corresponding pricing options.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='p-4 bg-muted/50 rounded-lg'
                    >
                      <h5 className='font-semibold text-foreground mb-1'>
                        {item.title}
                      </h5>
                      <p className='text-sm text-muted-foreground'>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subscription Fees */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <Clock className='h-5 w-5 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-foreground'>
                  D. Subscription Fees
                </h3>
              </div>

              <div className='bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border'>
                <p className='text-muted-foreground mb-4'>
                  Many DSC practices utilize a subscription model where patients
                  pay a recurring fee. This fee often covers:
                </p>
                <div className='space-y-3 mb-4'>
                  {[
                    {
                      label: 'Unlimited Consultations',
                      desc: 'See specialists as often as needed without additional charges.',
                    },
                    {
                      label: 'Basic Procedures and Treatments',
                      desc: 'Routine care included in subscription.',
                    },
                    {
                      label: 'Discounts on Additional Services',
                      desc: 'Reduced rates for services not covered.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3'
                    >
                      <CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <p className='text-muted-foreground'>
                        <strong className='text-foreground'>
                          {item.label}:
                        </strong>{' '}
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p className='text-foreground font-medium'>
                  This model provides financial predictability for patients
                  while ensuring a stable income for specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-10'>
            Benefits
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                icon: TrendingUp,
                title: 'Improved Patient Outcomes',
                subtitle: 'Specialized Expertise',
                description:
                  'DSC enables patients to engage closely with specialists who possess in-depth knowledge and experience in specific conditions, leading to more accurate diagnoses and effective treatments.',
              },
              {
                icon: Heart,
                title: 'Holistic Care Management',
                subtitle: 'Continuous Monitoring',
                description:
                  'The continuous nature of care allows specialists to monitor patient progress closely, make timely adjustments to treatment plans, and promptly address emerging health issues.',
              },
              {
                icon: Users,
                title: 'Patient Satisfaction',
                subtitle: 'Personal Attention',
                description:
                  'Increased time and attention often results in higher patient satisfaction. Patients feel heard, valued, and more involved in their healthcare decisions.',
              },
              {
                icon: Shield,
                title: 'Empowered Patients',
                subtitle: 'Direct Access',
                description:
                  'With direct access to specialists and in-depth education about their conditions, patients become more engaged in managing their health.',
              },
              {
                icon: DollarSign,
                title: 'Cost-Effectiveness',
                subtitle: 'Elimination of Middlemen',
                description:
                  'By removing insurance companies from the equation, DSC reduces administrative overhead and potentially lowers overall healthcare costs.',
              },
              {
                icon: Stethoscope,
                title: 'Preventative Care Focus',
                subtitle: 'Early Intervention',
                description:
                  'Emphasizing preventive care and early intervention helps avoid costly emergency treatments and hospitalizations.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className='bg-card rounded-xl p-6 shadow-card card-hover'
              >
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                  <benefit.icon className='h-6 w-6 text-primary' />
                </div>
                <h4 className='text-lg font-bold text-foreground mb-1'>
                  {benefit.title}
                </h4>
                <p className='text-sm text-primary font-medium mb-3'>
                  {benefit.subtitle}
                </p>
                <p className='text-muted-foreground text-sm'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Comparison with Traditional Healthcare Models
          </h2>

          <p className='text-lg text-muted-foreground mb-10 max-w-3xl'>
            Traditional healthcare models often entail lengthy wait times,
            limited appointment durations, and intricate billing processes. DSC
            addresses these challenges by offering:
          </p>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: 'Quicker Access',
                desc: 'Patients can see specialists sooner, reducing the time to receive necessary care.',
              },
              {
                title: 'Longer Appointments',
                desc: 'Specialists can spend more time with each patient, ensuring thorough evaluations.',
              },
              {
                title: 'Transparent Pricing',
                desc: 'Clear, upfront costs eliminate the confusion associated with traditional billing.',
              },
              {
                title: 'Continuous Care',
                desc: 'Promotes ongoing patient care rather than episodic treatments.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-6 border border-border'
              >
                <h4 className='font-bold text-foreground mb-2'>{item.title}</h4>
                <p className='text-muted-foreground text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Services Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-10'>
            Types of Services
          </h2>

          <div className='space-y-10'>
            {[
              {
                title: 'A. Chronic Disease Management',
                services: [
                  {
                    name: 'Diabetes Care',
                    desc: 'Comprehensive diabetes management includes regular blood sugar monitoring, medication management, nutritional counseling, and education on lifestyle modifications.',
                  },
                  {
                    name: 'Cardiology',
                    desc: 'Specialized heart care services such as advanced cardiac imaging, stress testing, heart rhythm monitoring, and ongoing management of conditions like hypertension and heart failure.',
                  },
                ],
              },
              {
                title: 'B. Advanced Diagnostics and Treatments',
                services: [
                  {
                    name: 'Imaging Services',
                    desc: 'Quick access to advanced imaging techniques like MRI, CT scans, and ultrasounds, often at lower costs than traditional healthcare settings.',
                  },
                  {
                    name: 'Surgical Procedures',
                    desc: 'Minor surgical procedures that can be safely performed in an outpatient setting, such as skin biopsies, minor orthopedic procedures, or endoscopies.',
                  },
                ],
              },
              {
                title: 'C. Specialty Consultations',
                services: [
                  {
                    name: 'Dermatology',
                    desc: 'Comprehensive skin care services, including treatment of skin conditions, cosmetic procedures, and skin cancer screenings.',
                  },
                  {
                    name: 'Orthopedics',
                    desc: 'Specialized care for musculoskeletal issues, including joint pain management, sports injury treatment, and rehabilitation services.',
                  },
                ],
              },
            ].map((category, index) => (
              <div key={index}>
                <h3 className='text-xl font-bold text-foreground mb-6'>
                  {category.title}
                </h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  {category.services.map((service, idx) => (
                    <div
                      key={idx}
                      className='bg-card rounded-xl p-6 shadow-card card-hover'
                    >
                      <h4 className='font-bold text-foreground mb-2'>
                        {service.name}
                      </h4>
                      <p className='text-muted-foreground text-sm'>
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-10'>
            Implementation of Direct Specialty Care
          </h2>

          <div className='space-y-10'>
            {[
              {
                title: 'A. Establishing Direct Care Practices',
                items: [
                  {
                    subtitle: 'Setting Up Clinics',
                    points: [
                      'Selecting and equipping appropriate facilities',
                      'Implementing necessary technology (EHR systems, telemedicine platforms)',
                      'Hiring support staff',
                      'Developing operational protocols',
                    ],
                  },
                  {
                    subtitle: 'Developing Pricing Models',
                    points: [
                      'Operational costs',
                      'Desired patient panel size',
                      'Range of services offered',
                      'Local market conditions',
                    ],
                  },
                ],
              },
              {
                title: 'B. Patient Enrollment and Education',
                items: [
                  {
                    subtitle: 'Outreach Programs',
                    points: [
                      'Informational seminars and webinars',
                      'Community health fairs',
                      'Partnerships with local businesses',
                      'Digital marketing campaigns',
                    ],
                  },
                ],
              },
              {
                title: 'C. Integration with Primary Care',
                items: [
                  {
                    subtitle: 'Collaborative Networks',
                    points: [
                      'Professional networking events',
                      'Shared continuing education',
                      'Collaborative care agreements',
                    ],
                  },
                  {
                    subtitle: 'Shared Medical Records',
                    points: [
                      'Interoperable EHR systems',
                      'Health Information Exchanges (HIEs)',
                      'Secure messaging platforms',
                    ],
                  },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className='text-xl font-bold text-foreground mb-6'>
                  {section.title}
                </h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className='bg-card rounded-xl p-6 shadow-soft'
                    >
                      <h4 className='font-bold text-foreground mb-4'>
                        {item.subtitle}
                      </h4>
                      <ul className='space-y-2'>
                        {item.points.map((point, pidx) => (
                          <li
                            key={pidx}
                            className='flex items-start gap-2 text-muted-foreground text-sm'
                          >
                            <span className='h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0' />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Conclusion
          </h2>

          <div className='bg-card rounded-xl p-6 md:p-8 shadow-card max-w-4xl'>
            <p className='text-lg text-muted-foreground'>
              Direct Specialty Care revolutionizes healthcare by fostering a
              direct financial relationship between patients and physicians,
              bypassing third-party payors. This model ensures patients receive
              personalized, high-quality care with enhanced access to medical
              services and holistic health benefits. By focusing on the
              patient-physician relationship and offering an affordable
              membership, Direct Specialty Care delivers{' '}
              <strong className='text-foreground'>
                better health outcomes, reduced medical costs, and an improved
                patient experience
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* State Links Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h3 className='text-xl font-bold text-foreground mb-6'>
            Find Direct Specialty Care by State
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            {states.map((state) => (
              <a
                key={state}
                href={`https://www.google.com/search?q=Direct+Specialty+Care+in+${state.replace(
                  / /g,
                  '+'
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-muted-foreground hover:text-primary transition-colors py-1'
              >
                {state}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-primary'>
        <div className='container mx-auto px-4 md:px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-foreground mb-4'>
            Do you have any other questions?
          </h2>
          <p className='text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
            Fill the form or choose a time from the calendar and our experts can
            help you further.
          </p>
          <Link to='/contact'>
            <Button
              size='lg'
              variant='secondary'
              className='bg-white text-primary hover:bg-white/90'
            >
              Talk to Us <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default DirectSpecialtyCareGuide
