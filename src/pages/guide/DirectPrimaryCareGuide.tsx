import { Layout } from '@/components/layout/Layout'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  CheckCircle,
  AlertCircle,
  Clock,
  DollarSign,
  Heart,
  Users,
  Stethoscope,
  Building2,
  ArrowRight,
} from 'lucide-react'

const DirectPrimaryCareGuide = () => {
  const states = [
    'Alabama',
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
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]

  const keyPoints = [
    'Offers unlimited access to primary care and longer, personalized appointments',
    'Includes routine screenings, chronic condition management, and acute-care visits',
    'Provides care coordination to help navigate the broader healthcare system',
    'Often covers basic lab work and procedures at no extra cost',
    'Aims to reduce overall healthcare costs for patients',
    'Decreases administrative burden for physicians, allowing more focus on patient care',
  ]

  const considerations = [
    "DPC is not insurance and doesn't cover emergency or hospital services",
    'Patients may need a high-deductible health plan or other insurance for comprehensive coverage',
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
                Direct Primary Care (DPC)
              </span>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4'>
                <span className='text-primary'>Direct Primary Care</span>{' '}
                Practice Model
              </h1>
              <h2 className='text-2xl md:text-3xl font-semibold text-foreground/80 mb-6'>
                Personalized care, No Insurance, Affordable Pricing
              </h2>
              <p className='text-lg text-muted-foreground mb-8 max-w-xl'>
                Reimagined Healthcare Delivery Through Accessible, Personalized,
                and Transparent Services
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
                  src='https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/How-to-DPC-whitepaper-thumbnail-1920w.png'
                  alt='Direct Primary Care Guide'
                  className='relative rounded-xl shadow-elevated w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Key points: What is{' '}
            <span className='text-primary'>Direct Primary Care Model</span>
          </h2>
          <p className='text-lg text-muted-foreground mb-10 max-w-3xl'>
            Direct Primary Care is a healthcare model where patients pay a
            monthly or annual fee directly to their primary care physician,
            eliminating insurance for routine care:
          </p>

          <div className='grid md:grid-cols-2 gap-4 mb-12'>
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className='flex items-start gap-3 p-4 rounded-lg bg-card shadow-soft card-hover'
              >
                <CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                <p className='text-muted-foreground'>{point}</p>
              </div>
            ))}
          </div>

          <div className='bg-muted/50 rounded-xl p-6 md:p-8 border border-border'>
            <div className='flex items-center gap-3 mb-4'>
              <AlertCircle className='h-6 w-6 text-accent' />
              <h3 className='text-xl font-bold text-foreground'>
                Important Considerations
              </h3>
            </div>
            <div className='space-y-3'>
              {considerations.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3'
                >
                  <span className='h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0' />
                  <p className='text-muted-foreground'>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <p className='text-lg text-muted-foreground mt-8 max-w-3xl'>
            DPC seeks to improve healthcare accessibility, enhance the
            doctor-patient relationship, and offer more transparent pricing for
            primary care services.
          </p>
        </div>
      </section>

      {/* How DPC Works Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <p className='text-lg text-muted-foreground mb-10 max-w-4xl'>
            As health insurance becomes increasingly confusing and expensive,
            new care models have emerged. One option people are considering is
            direct primary care (DPC) to access and afford basic medical
            services.
          </p>

          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-2'>
            How Does Direct Patient Care Model Work?
          </h2>
          <h3 className='text-xl font-semibold text-muted-foreground mb-8'>
            A more In-depth guide on DPC Model
          </h3>

          <p className='text-lg text-muted-foreground mb-6 max-w-4xl'>
            Direct primary care (DPC) is a financial arrangement directly
            between you and your healthcare provider, bypassing insurance
            companies and eliminating the need to file insurance claims.
          </p>

          <p className='text-lg text-muted-foreground mb-12 max-w-4xl'>
            Instead of paying monthly health insurance premiums or copays, you
            pay your healthcare provider a monthly fee. Since DPC practices
            don't bill insurance companies, they do not accept any form of
            insurance. However, most individuals using DPC are also enrolled in
            a high-deductible health plan.
          </p>

          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                icon: Heart,
                title: 'Better Health Outcomes',
                description:
                  "Patients achieve superior health outcomes with Direct Primary Care's innovative service delivery. DPCs provide better access to physicians, empower an authentic therapeutic relationship, and comprehensive patient care.",
              },
              {
                icon: DollarSign,
                title: 'Lower Costs',
                description:
                  'Direct Primary Care (DPC) offers affordable and transparent costs structured around a periodic flat rate. Patients pay directly to their physician, eliminating third parties. Most DPC memberships are priced lower than the average cell phone bill.',
              },
              {
                icon: Users,
                title: 'Enhanced Patient Experience',
                description:
                  'Patients enjoy unrestricted access to their healthcare provider with minimal to no wait times and longer appointments, whether in-person, virtual, or via phone.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-card rounded-xl p-6 shadow-card card-hover'
              >
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                  <item.icon className='h-6 w-6 text-primary' />
                </div>
                <h4 className='text-lg font-bold text-foreground mb-3'>
                  {item.title}
                </h4>
                <p className='text-muted-foreground text-sm'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPC Specialties Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h3 className='text-2xl md:text-3xl font-bold text-foreground mb-8'>
            Most DPC professionals come from primary care specialties
          </h3>

          <div className='grid md:grid-cols-3 gap-6 mb-10'>
            {[
              {
                icon: Stethoscope,
                title: 'Internal Medicine',
                description:
                  'Internal medicine physicians, or internists, who treat adults.',
              },
              {
                icon: Users,
                title: 'Family Medicine',
                description:
                  'Family medicine physicians who care for individuals across all age groups, from infants to seniors.',
              },
              {
                icon: Heart,
                title: 'Pediatrics',
                description:
                  'Pediatricians who treat babies, children, and adolescents.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-6 border border-border'
              >
                <item.icon className='h-8 w-8 text-primary mb-4' />
                <h4 className='text-lg font-bold text-foreground mb-2'>
                  {item.title}
                </h4>
                <p className='text-muted-foreground text-sm'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className='text-muted-foreground mb-6'>
            Depending on your location, DPC practices may include the following
            healthcare providers as part of the care team:
          </p>

          <div className='grid md:grid-cols-2 gap-6 mb-10'>
            <div className='bg-card rounded-lg p-5 shadow-soft'>
              <h4 className='font-bold text-foreground mb-2'>
                Physician Associates (PAs)
              </h4>
              <p className='text-muted-foreground text-sm'>
                Also known as physician assistants, they may use either title
                depending on the jurisdiction.
              </p>
            </div>
            <div className='bg-card rounded-lg p-5 shadow-soft'>
              <h4 className='font-bold text-foreground mb-2'>
                Advanced Practice Registered Nurses (APRNs)
              </h4>
              <p className='text-muted-foreground text-sm'>
                Such as nurse practitioners.
              </p>
            </div>
          </div>

          <div className='bg-muted/50 rounded-xl p-6 border border-border'>
            <p className='text-muted-foreground'>
              <strong className='text-foreground'>Note:</strong> There is a
              distinction between DPC and concierge medicine, which provides
              premium services typically catering to higher-income individuals.
              Both models offer extended visits with physicians, but concierge
              medicine practices usually charge higher monthly fees and also
              accept insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Benefits of Direct Primary Care (DPC) Model
          </h2>
          <p className='text-lg text-muted-foreground mb-10 max-w-3xl'>
            There are many advantages to using DPC. Here are some direct primary
            care benefits of entering into a financial agreement with a
            healthcare professional:
          </p>

          <div className='space-y-6 mb-16'>
            {[
              {
                title: 'More Time with Your Healthcare Professional',
                description:
                  "DPC practitioners don't have to prepare and file insurance paperwork, allowing for more in-depth visits and extended time with you. DPC offices typically treat fewer patients than practices that accept insurance, enabling healthcare professionals to take the time to understand your health history in detail and provide more personalized care.",
              },
              {
                title: 'Upfront Pricing',
                description:
                  "With traditional health insurance, it's often unclear what will be billed and your out-of-pocket costs. DPC removes this confusion. You'll know the exact monthly membership cost for basic care and any specific additional fees for enhanced services.",
              },
              {
                title: 'Accessibility and Convenience',
                description:
                  'DPC often comes with several perks, including same-day and next-day visits, appointments lasting 30 to 60 minutes, telehealth options such as phone calls, emails, texts, and video visits, and around-the-clock access to your healthcare professional.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className='bg-card rounded-xl p-6 shadow-card'
              >
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                    <CheckCircle className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h4 className='text-lg font-bold text-foreground mb-2'>
                      {benefit.title}
                    </h4>
                    <p className='text-muted-foreground'>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className='text-2xl font-bold text-foreground mb-6'>
            Disadvantages of Direct Primary Care
          </h3>
          <p className='text-muted-foreground mb-6'>
            While DPC has many benefits, there are some challenges to consider:
          </p>

          <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                title: 'You Still Need an Insurance Plan',
                description:
                  'The monthly fee for DPC covers consultations, office visits, and basic care, but you may incur additional costs for lab work, imaging, or procedures depending on your contract.',
              },
              {
                title: "Membership Doesn't Count Toward a Deductible",
                description:
                  'According to the IRS, you can deduct your monthly membership fee as a medical expense on your taxes. However, the cost of DPC cannot be counted toward your deductible.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-card rounded-xl p-6 border border-destructive/20'
              >
                <div className='flex items-start gap-4'>
                  <AlertCircle className='h-5 w-5 text-destructive flex-shrink-0 mt-1' />
                  <div>
                    <h4 className='font-bold text-foreground mb-2'>
                      {item.title}
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            What Are the Costs and Payments for Direct Primary Care?
          </h2>

          <div className='grid lg:grid-cols-2 gap-8'>
            <div>
              <p className='text-lg text-muted-foreground mb-6'>
                The monthly fee for most DPC services is typically around{' '}
                <strong className='text-foreground'>$100</strong>, and it may be
                even less. This fee provides you with unlimited and direct
                access to your primary care provider (PCP).
              </p>
              <p className='text-muted-foreground mb-6'>
                In general, fees are based on factors such as your age, the type
                of practice, and the number of family members on your plan.
              </p>
            </div>
            <div className='bg-card rounded-xl p-6 shadow-card'>
              <h4 className='font-bold text-foreground mb-4'>
                The monthly fee may cover:
              </h4>
              <ul className='space-y-3'>
                {[
                  'Preventive care (e.g., routine screenings)',
                  'Laboratory tests (e.g., blood tests or urinalysis)',
                  'Management of chronic conditions',
                  'Acute-care visits (e.g., for strep throat or flu)',
                  'Consultations',
                ].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-3 text-muted-foreground'
                  >
                    <span className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary'>
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className='text-muted-foreground mt-8 p-4 bg-muted/50 rounded-lg border border-border'>
            <strong className='text-foreground'>Note:</strong> The monthly fee
            does not include visits to specialists, urgent care, or hospital
            services. Medications, whether prescription or over the counter, are
            also not part of a DPC financial agreement.
          </p>
        </div>
      </section>

      {/* Insurance with DPC Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Why Do You Sometimes Need Insurance with DPC?
          </h2>

          <p className='text-lg text-muted-foreground mb-10 max-w-3xl'>
            While DPC's monthly fee may be less than a health insurance premium,
            relying solely on DPC can leave you vulnerable to medical debt. To
            avoid incurring unmanageable medical bills, DPC is often paired
            with:
          </p>

          <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                title: 'High-Deductible Health Plan (HDHP)',
                description:
                  'This plan covers services like surgeries, catastrophic health issues, emergency room treatment, and hospitalization. An HDHP helps prevent financial devastation in case you need emergency or extensive care.',
              },
              {
                title: 'Health Savings Account (HSA)',
                description:
                  'If you are enrolled in an HDHP, you are eligible to contribute to an HSA. Contributions are made before income tax is deducted. Funds can be used for eligible health-related expenses, such as prescriptions, copays, deductibles, vision care, and dental care.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-card rounded-xl p-6 shadow-card card-hover'
              >
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                  <DollarSign className='h-6 w-6 text-primary' />
                </div>
                <h4 className='text-lg font-bold text-foreground mb-3'>
                  {item.title}
                </h4>
                <p className='text-muted-foreground'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is DPC Worth It Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Is Direct Primary Care Worth It?
          </h2>

          <p className='text-lg text-muted-foreground mb-6'>
            People using DPC often value the ability to contact their provider
            at any time, making it particularly appealing to:
          </p>

          <div className='flex flex-wrap gap-4 mb-8'>
            {[
              'Families with young children',
              'Frequent travelers',
              'Older adults with limited mobility',
            ].map((item, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium'
              >
                {item}
              </span>
            ))}
          </div>

          <div className='bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 md:p-8 border border-border'>
            <p className='text-muted-foreground mb-4'>
              However, since DPC arrangements are commonly paired with
              high-deductible health plans, they may not be suitable for
              everyone. DPC may not be ideal for individuals requiring
              specialized care or those with complex medical conditions.
            </p>
            <p className='text-foreground font-medium'>
              DPC is typically most beneficial for individuals who are generally
              healthy or seek enhanced access to a primary care provider for
              routine visits or short-term health concerns.
            </p>
          </div>
        </div>
      </section>

      {/* DPC Software Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Direct Primary Care Software
          </h2>

          <p className='text-lg text-muted-foreground mb-6 max-w-4xl'>
            In today's rapidly evolving healthcare landscape, prioritizing
            patient engagement and delivering efficient care have become
            essential. Seamless integration of EHR software is now more critical
            than ever.
          </p>

          <p className='text-muted-foreground mb-6 max-w-4xl'>
            When evaluating{' '}
            <Link
              to='/solutions/direct-primary-care'
              className='text-primary hover:underline font-medium'
            >
              EHR software for direct primary care
            </Link>
            , user-friendly interfaces and strong data security features are
            crucial components.
          </p>

          <div className='bg-card rounded-xl p-6 md:p-8 shadow-card'>
            <p className='text-foreground font-medium'>
              Health Compiler stands out as the perfect EHR system for Direct
              Primary Care, offering a customizable platform that boosts
              clinical efficiency and productivity to support optimal care
              delivery.
            </p>
          </div>
        </div>
      </section>

      {/* DPC vs Concierge Section */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            Direct Primary Care vs Concierge Medicine
          </h2>

          <p className='text-lg text-muted-foreground mb-10 max-w-3xl'>
            Direct primary care differs from concierge care by featuring lower
            monthly fees, opting out of participation in payer programs, and
            applying patient membership fees to a wider array of services.
          </p>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-card rounded-xl p-6 shadow-card border-2 border-primary/20'>
              <h4 className='text-xl font-bold text-primary mb-4'>
                DPC Practices
              </h4>
              <ul className='space-y-4'>
                {[
                  'Patients or sometimes their employers pay monthly membership fees.',
                  'Fees cover extended visits, clinical, lab, and consultative services, care coordination, and comprehensive care management.',
                  'Do not accept insurance or participate in government programs; rely solely on patient fees.',
                ].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-3 text-muted-foreground'
                  >
                    <span className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary flex-shrink-0'>
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-card rounded-xl p-6 shadow-card border-2 border-accent/20'>
              <h4 className='text-xl font-bold text-accent mb-4'>
                Concierge Practices
              </h4>
              <ul className='space-y-4'>
                {[
                  'Patients sign an annual membership contract with the option to pay higher fees annually or monthly.',
                  'Membership fees include comprehensive physical exams and screenings.',
                  'May still accept insurance plans and government programs.',
                  'Typically serve higher-income populations.',
                ].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-3 text-muted-foreground'
                  >
                    <span className='w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium text-accent flex-shrink-0'>
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
            How to Find a Direct Primary Care Professional
          </h2>

          <p className='text-lg text-muted-foreground mb-8 max-w-3xl'>
            If your current primary care provider is open to it, ask if they are
            willing to enter into a DPC agreement. Two helpful resources for
            locating a DPC practice in your area:
          </p>

          <div className='flex flex-wrap gap-4 mb-12'>
            <a
              href='https://www.dpcare.org/dpc-practice-locations'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg shadow-soft hover:shadow-card transition-all text-foreground font-medium'
            >
              Direct Primary Care Coalition <ArrowRight className='h-4 w-4' />
            </a>
            <a
              href='https://mapper.dpcfrontier.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg shadow-soft hover:shadow-card transition-all text-foreground font-medium'
            >
              DPC Frontier Mapper <ArrowRight className='h-4 w-4' />
            </a>
          </div>

          <h3 className='text-xl font-bold text-foreground mb-6'>
            Find DPC by State
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            {states.map((state) => (
              <a
                key={state}
                href={`https://www.google.com/search?q=Direct+Primary+Care+in+${state.replace(
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

      {/* References Section */}
      <section className='py-12 bg-background border-t border-border'>
        <div className='container mx-auto px-4 md:px-6'>
          <h4 className='font-bold text-foreground mb-4'>References:</h4>
          <ul className='space-y-2 text-sm text-muted-foreground'>
            <li>
              American Academy of Family Physicians. (n.d.).{' '}
              <a
                href='https://www.aafp.org/family-physician/practice-and-career/delivery-payment-models/direct-primary-care.html'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                Direct primary care: What is direct primary care?
              </a>
            </li>
            <li>
              American Academy of Family Physicians. (n.d.).{' '}
              <a
                href='https://www.aafp.org/about/policies/all/direct-primary-care.html'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                Direct primary care
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-primary'>
        <div className='container mx-auto px-4 md:px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-foreground mb-4'>
            Do you have any other questions?
          </h2>
          <p className='text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
            Contact us today and let our experts help you navigate Direct
            Primary Care.
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

export default DirectPrimaryCareGuide
