import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const DirectPrimaryCareGuide = () => {
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-medium mb-4 block">Direct Primary Care (DPC)</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Direct Primary Care Practice Model:</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Personalized care, No Insurance, Affordable Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Reimagined Healthcare Delivery Through Accessible, Personalized, and Transparent Services
          </p>
          <div className="max-w-md mx-auto">
            <img 
              src="https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/How-to-DPC-whitepaper-thumbnail-1920w.png" 
              alt="Direct Primary Care Guide"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Key points: What is Direct Primary Care Model
          </h2>
          <p className="text-muted-foreground mb-8">
            Direct Primary Care is a healthcare model where patients pay a monthly or annual fee directly to their primary care physician, eliminating insurance for routine care:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Offers unlimited access to primary care and longer, personalized appointments
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Includes routine screenings, chronic condition management, and acute-care visits
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Provides care coordination to help navigate the broader healthcare system
              </li>
            </ul>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Often covers basic lab work and procedures at no extra cost
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Aims to reduce overall healthcare costs for patients
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Decreases administrative burden for physicians, allowing more focus on patient care
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Important considerations</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                DPC is not insurance and doesn't cover emergency or hospital services
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Patients may need a high-deductible health plan or other insurance for comprehensive coverage
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground">
            DPC seeks to improve healthcare accessibility, enhance the doctor-patient relationship, and offer more transparent pricing for primary care services.
          </p>
        </div>
      </section>

      {/* How Does DPC Work Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-8">
            As health insurance becomes increasingly confusing and expensive, new care models have emerged. One option people are considering is direct primary care (DPC) to access and afford basic medical services. Here's what you need to know about DPC to determine if it's the right choice for you.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            How Does Direct Patient Care Model Work?
          </h2>
          <h3 className="text-xl font-bold text-white mb-6">
            A more In-depth guide on DPC Model
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Direct primary care (DPC) is a financial arrangement directly between you and your healthcare provider, bypassing insurance companies and eliminating the need to file insurance claims.
          </p>
          
          <p className="text-muted-foreground mb-8">
            Instead of paying monthly health insurance premiums or copays, you pay your healthcare provider a monthly fee. Since DPC practices don't bill insurance companies, they do not accept any form of insurance. However, most individuals using DPC are also enrolled in a high-deductible health plan.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-3">Better Health Outcomes</h4>
              <p className="text-muted-foreground text-sm">
                Patients achieve superior health outcomes with Direct Primary Care's innovative service delivery. DPCs provide better access to physicians, empower an authentic therapeutic relationship, and comprehensive patient care.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-3">Lower Costs</h4>
              <p className="text-muted-foreground text-sm">
                Direct Primary Care (DPC) offers affordable and transparent costs structured around a periodic flat rate, such as membership or subscription. Patients pay directly to their physician, eliminating third parties and Fee-for-Service billing ("FFS") that can inflate costs. Most DPC memberships or subscriptions are priced lower than the average cell phone bill.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-3">Enhanced Patient Experience</h4>
              <p className="text-muted-foreground text-sm">
                Patients enjoy unrestricted access to their healthcare provider with minimal to no wait times and longer appointments, whether in-person, virtual, or via phone. This fosters a genuine therapeutic relationship between patient and provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DPC Specialties Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-white mb-6">
            Most DPC professionals come from primary care specialties, including:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Internal Medicine</h4>
              <p className="text-muted-foreground text-sm">
                Internal medicine physicians, or internists, who treat adults.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Family Medicine</h4>
              <p className="text-muted-foreground text-sm">
                Family medicine physicians who care for individuals across all age groups, from infants to seniors.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Pediatrics</h4>
              <p className="text-muted-foreground text-sm">
                Pediatricians who treat babies, children, and adolescents.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Depending on your location, DPC practices may include the following healthcare providers as part of the care team, with full or partial authority to diagnose, order tests, and prescribe medications:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Physician Associates (PAs)</h4>
              <p className="text-muted-foreground text-sm">
                Also known as physician assistants, they may use either title depending on the jurisdiction.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Advanced Practice Registered Nurses (APRNs)</h4>
              <p className="text-muted-foreground text-sm">
                Such as nurse practitioners.
              </p>
            </div>
          </div>

          <div className="bg-card/50 rounded-lg p-6">
            <p className="text-muted-foreground">
              There is a distinction between DPC and concierge medicine, which provides premium services typically catering to higher-income individuals. Both models offer extended visits with physicians, but concierge medicine practices usually charge higher monthly fees and also accept insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Benefits of Direct Primary Care (DPC) Model
          </h3>
          <h4 className="text-lg font-bold text-white mb-6">
            A. The benefits of direct primary care model
          </h4>
          
          <p className="text-muted-foreground mb-8">
            There are many advantages to using DPC. Here are some direct primary care benefits of entering into a financial agreement with a healthcare professional:
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-white mb-3">More Time with Your Healthcare Professional</h5>
              <p className="text-muted-foreground">
                DPC practitioners don't have to prepare and file insurance paperwork, allowing for more in-depth visits and extended time with you. DPC offices typically treat fewer patients than practices that accept insurance, enabling healthcare professionals to take the time to understand your health history in detail and provide more personalized care.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-white mb-3">Upfront Pricing</h5>
              <p className="text-muted-foreground mb-4">
                With traditional health insurance, it's often unclear what will be billed and your out-of-pocket costs. Deductibles, copays, and coinsurance are applied, and discounts are negotiated between your healthcare professional and insurance company. Afterward, you receive an explanation of your expected payment.
              </p>
              <p className="text-muted-foreground">
                DPC removes this confusion. You'll know the exact monthly membership cost for basic care and any specific additional fees for enhanced services.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-white mb-3">Accessibility and Convenience</h5>
              <p className="text-muted-foreground mb-4">DPC often comes with several perks, including:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>1. Same-day and next-day visits</li>
                <li>2. Appointments lasting 30 to 60 minutes</li>
                <li>3. Telehealth options such as phone calls, emails, texts, and video visits</li>
                <li>4. Around-the-clock access to your healthcare professional</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-bold text-white mb-6">
            B. Disadvantages of Direct Primary Care
          </h4>
          
          <p className="text-muted-foreground mb-6">
            While DPC has many benefits, there are some challenges to consider before entering into a DPC arrangement with your healthcare professional.
          </p>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-white mb-3">You Still Need an Insurance Plan</h5>
              <p className="text-muted-foreground mb-4">
                The monthly fee for DPC covers consultations, office visits, and basic care, but you may incur additional costs for lab work, imaging, or procedures depending on your contract. Therefore, you'll likely need to pair your DPC membership with some form of insurance plan. Many DPC users also have a high-deductible health plan.
              </p>
              <p className="text-muted-foreground">
                If you have private health insurance, you can use DPC. However, if you have government health insurance, such as Medicare or Medicaid, you must sign an agreement stating that none of the services provided will be billed to those health plans.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-white mb-3">Membership Doesn't Count Toward a Deductible</h5>
              <p className="text-muted-foreground">
                According to the IRS, you can deduct your monthly membership fee as a medical expense on your taxes. However, the cost of DPC cannot be counted toward your deductible if you also have a high-deductible health plan or other insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            What Are the Costs and Payments for Direct Primary Care?
          </h3>
          
          <p className="text-muted-foreground mb-6">
            The monthly fee for most DPC services is typically around $100, and it may be even less. This fee provides you with unlimited and direct access to your primary care provider (PCP), also known as a primary care professional. Some DPC practices may charge an additional visit fee at the time of service.
          </p>

          <p className="text-muted-foreground mb-6">
            In general, fees are based on factors such as your age, the type of practice, and the number of family members on your plan. The monthly fee may cover all or some of the following typical primary care services:
          </p>

          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>1. Preventive care (e.g., routine screenings)</li>
            <li>2. Laboratory tests (e.g., blood tests or urinalysis)</li>
            <li>3. Management of chronic conditions (e.g., medication checkups)</li>
            <li>4. Acute-care visits (e.g., for strep throat or the flu)</li>
            <li>5. Consultations</li>
          </ul>

          <p className="text-muted-foreground">
            However, the monthly fee does not include visits to specialists, urgent care, or hospital services. Medications, whether prescription or over the counter, are also not part of a DPC financial agreement.
          </p>
        </div>
      </section>

      {/* Insurance with DPC Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Why Do You Sometimes Need Insurance with DPC?
          </h3>
          
          <p className="text-muted-foreground mb-6">
            While DPC's monthly fee may be less than a health insurance premium, relying solely on DPC can leave you vulnerable to medical debt. This is because DPC does not cover other health-related expenses such as emergency and hospital care, or prescription medications. To avoid incurring unmanageable medical bills, DPC is often paired with one or more of the following options:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-3">High-Deductible Health Plan (HDHP)</h4>
              <p className="text-muted-foreground">
                This plan covers services like surgeries, catastrophic health issues, emergency room treatment, and hospitalization. An HDHP helps prevent financial devastation in case you need emergency or extensive care.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-3">Health Savings Account (HSA)</h4>
              <p className="text-muted-foreground">
                If you are enrolled in an HDHP, you are eligible to contribute to an HSA. Contributions are made before income tax is deducted, reducing your taxable income. Funds in an HSA can be used for eligible health-related expenses, such as prescriptions, copays, deductibles, vision care, and dental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is DPC Worth It Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Is Direct Primary Care Worth It?
          </h3>
          
          <p className="text-muted-foreground mb-6">
            People using DPC often value the ability to contact their provider at any time, making it particularly appealing to:
          </p>

          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>1. Families with young children</li>
            <li>2. Frequent travelers</li>
            <li>3. Older adults with limited mobility</li>
          </ul>

          <p className="text-muted-foreground mb-6">
            However, since DPC arrangements are commonly paired with high-deductible health plans, they may not be suitable for everyone. DPC may not be ideal for individuals requiring specialized care or those with complex medical conditions. Instead, DPC is typically most beneficial for individuals who are generally healthy or seek enhanced access to a primary care provider for routine visits or short-term health concerns.
          </p>

          <p className="text-muted-foreground">
            If you are considering a high-deductible health plan or already have one, adding a DPC membership could be a beneficial option for you.
          </p>
        </div>
      </section>

      {/* DPC Software Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Direct Primary Care Software
          </h3>
          
          <p className="text-muted-foreground mb-6">
            In today's rapidly evolving healthcare landscape, prioritizing patient engagement and delivering efficient care have become essential. Seamless integration of EHR software is now more critical than ever, as it allows healthcare providers to streamline workflows and achieve the best possible patient outcomes. EHR systems enhance communication between direct primary care (DPC) providers and patients while empowering providers to make informed, data-driven decisions that lead to improved treatment results.
          </p>

          <p className="text-muted-foreground mb-6">
            When evaluating <Link to="/solutions/direct-primary-care" className="text-primary hover:underline">EHR software for direct primary care</Link>, it becomes evident that user-friendly interfaces and strong data security features are crucial components. These attributes not only improve usability but also safeguard the integrity and protection of patient information, making EHR systems indispensable in modern healthcare practices.
          </p>

          <p className="text-muted-foreground">
            Health Compiler stands out as the perfect EHR system for Direct Primary Care, offering a customizable platform that boosts clinical efficiency and productivity to support optimal care delivery. By focusing on the doctor-patient relationship, Health Compiler enables providers to deliver exceptional, personalized care within the Direct Primary Care model.
          </p>
        </div>
      </section>

      {/* CME Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Continuing Medical Education Primary Care
          </h3>
          
          <p className="text-muted-foreground">
            Continuing Medical Education (CME) in primary care refers to ongoing educational activities designed for healthcare professionals, particularly those working in primary care settings such as family medicine, internal medicine, pediatrics, and general practice. These activities are structured to help healthcare providers maintain and enhance their knowledge, skills, and competence throughout their careers. CME in primary care typically covers a broad range of medical topics relevant to the diagnosis, treatment, and management of common conditions encountered in primary care practice.
          </p>
        </div>
      </section>

      {/* How to Find Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            How to Find a Direct Primary Care Professional
          </h3>
          
          <p className="text-muted-foreground mb-6">
            If your current primary care provider is open to it, ask if they are willing to enter into a DPC agreement. If that isn't an option, you can search for a nearby DPC practice.
          </p>

          <p className="text-muted-foreground">
            Two helpful resources for locating a DPC practice in your area are the{" "}
            <a href="https://www.dpcare.org/dpc-practice-locations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Direct Primary Care Coalition
            </a>{" "}
            and the{" "}
            <a href="https://mapper.dpcfrontier.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              DPC Frontier Mapper
            </a>.
          </p>
        </div>
      </section>

      {/* DPC vs Concierge Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Direct Primary Care vs Concierge Medicine
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Direct primary care differs from concierge care by featuring lower monthly fees, opting out of participation in payer programs, and applying patient membership fees to a wider array of services.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-4">DPC Practices:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>1. Patients or sometimes their employers pay monthly membership fees.</li>
                <li>2. These fees cover extended visits, clinical, lab, and consultative services, care coordination, and comprehensive care management.</li>
                <li>3. Direct primary care practices do not accept insurance or participate in government programs; they rely solely on patient fees.</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-4">Concierge Practices:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>1. Patients sign an annual membership contract with the option to pay higher fees annually or monthly.</li>
                <li>2. Membership fees include comprehensive physical exams and screenings.</li>
                <li>3. These practices may still accept insurance plans and government programs and bill the patient's insurance company for covered services.</li>
                <li>4. They typically serve higher-income populations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Self-funded Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h4 className="text-xl font-bold text-white mb-4">
            What is self funded health insurance plan?
          </h4>
          
          <p className="text-muted-foreground mb-6">
            Self-funded health insurance, also known as self-insured plans, is a healthcare financing arrangement where an employer assumes the financial risk for providing health benefits to its employees. Instead of purchasing a traditional insurance policy, the employer sets aside funds to pay employee health claims directly. Typically, these plans are administered by a third-party administrator (TPA) who handles claims processing and other administrative tasks. The employer maintains control over the health plan reserves, earning interest on unused funds, and has the flexibility to design custom benefits tailored to their workforce's needs.
          </p>

          <p className="text-muted-foreground mb-8">
            To protect against unexpectedly high claims, most self-funded plans include stop-loss insurance, which reimburses the employer for claims above a specified threshold. This model can potentially lead to cost savings by eliminating insurer profit margins and reducing state premium taxes. However, it requires careful financial management and may be more suitable for larger companies with predictable cash flow. Self-funding offers greater access to claims data, allowing employers to make informed decisions about health benefits and wellness programs.
          </p>

          <div className="bg-card rounded-lg p-6">
            <h5 className="text-lg font-bold text-white mb-4">Conclusion</h5>
            <p className="text-muted-foreground mb-4">
              If you're facing challenges affording medical care or health insurance, or if you're concerned about potential medical debt, direct primary care (DPC) could be a viable option for you. However, before committing to a DPC plan, it's important to carefully evaluate all its advantages and disadvantages. Financial considerations should be a primary focus. Additionally, pairing DPC with enrollment in a high-deductible health plan (HDHP) and a health savings account (HSA) can help manage healthcare costs effectively.
            </p>
            <p className="text-muted-foreground">
              If you're contemplating DPC, consult with your primary healthcare provider to determine if this approach aligns well with your health needs and financial situation.
            </p>
          </div>
        </div>
      </section>

      {/* State Links Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-8">
            Exploring other DPC practices in your area serves a dual purpose: it identifies local peers and opens doors for potential collaboration. By connecting with nearby Direct Care providers, you can significantly enhance your practice's reach and efficacy. To assist you in locating DPC practices in your state, we've compiled a list of direct links below.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {states.map((state) => (
              <a
                key={state}
                href={`https://www.google.com/search?q=Direct+Primary+Care+in+${state.replace(/ /g, "+")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Direct Primary Care in {state}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h4 className="text-lg font-bold text-white mb-4">References:</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              American Academy of Family Physicians. (n.d.).{" "}
              <a 
                href="https://www.aafp.org/family-physician/practice-and-career/delivery-payment-models/direct-primary-care.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Direct primary care: What is direct primary care?
              </a>
            </li>
            <li>
              American Academy of Family Physicians. (n.d.).{" "}
              <a 
                href="https://www.aafp.org/about/policies/all/direct-primary-care.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Direct primary care
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Do you have any other questions?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's Contact us today & Let our experts help you!
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DirectPrimaryCareGuide;
