import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const DirectSpecialtyCareGuide = () => {
  const states = [
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Iowa", "Tennessee", "Texas",
    "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
    "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Minnesota",
    "Mississippi", "Missouri", "Michigan", "New Hampshire", "New Jersey", "New Mexico", "New York"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium mb-4 block">Direct Specialty Care</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">Understanding Direct Specialty Care: What It Is and Why You Need It</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Discover the Advantages and Why It Matters
              </p>
            </div>
            <div>
              <img 
                src="https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Direct+Specialty+Care-1920w.webp" 
                alt="Direct Specialty Care"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">→</span>
                What is Direct Specialty Care?
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">→</span>
                Key Components
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">→</span>
                Benefits
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">→</span>
                Comparison with Traditional Healthcare Models
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">→</span>
                Types of Services
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">→</span>
                Implementation of Direct Specialty Care
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What is DSC Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What is Direct Specialty Care?
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Direct Specialty Care is a model of healthcare delivery that promotes the patient-physician relationship and removes third-party payors to protect the best interests of patients.
          </p>

          <p className="text-muted-foreground">
            Direct Specialty Care is a healthcare model different from your typical fee-for-service and insurance billing type of medical practice. Instead, direct specialty care operates like a subscription service. Direct Specialty Care has an affordable membership fee. You join as a member, and, as such, you are entitled to medical services, discounted pricing, and many other services (e.g., nutrition, mindfulness, and physician therapy classes). It is a direct financial arrangement between the patient and the doctor. If you are familiar with the concept of Direct Primary Care, it is very similar in structure. The result is enhanced patient experience, better health outcomes, and more affordable medical care.
          </p>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-8">Key Components</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">A. Direct Access to Specialists</h4>
              
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Streamlined Referrals</h5>
                  <p className="text-muted-foreground">
                    In the DSC model, patients can book appointments directly with specialists without needing a referral from a primary care physician. This approach minimizes delays in accessing specialized care, ensuring more timely and effective interventions.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Enhanced Patient-Provider Relationship</h5>
                  <p className="text-muted-foreground">
                    DSC facilitates more extended and direct interactions between patients and specialists. This increased communication allows specialists to gain a comprehensive understanding of each patient's health history, lifestyle, and concerns, leading to more personalized care and improved health outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">B. Personalized and Focused Care</h4>
              
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Comprehensive Consultations</h5>
                  <p className="text-muted-foreground">
                    In the Direct Specialty Care (DSC) model, appointments are significantly longer, often ranging from 30 to 60 minutes or more, compared to the typical 15-minute slots in traditional settings. This extended time allows for thorough discussions, detailed examinations, and more comprehensive care planning, ensuring that patients receive the attention and care they need.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Tailored Treatment Plans</h5>
                  <p className="text-muted-foreground">
                    Specialists in DSC can develop highly individualized treatment plans that consider not only the medical condition but also the patient's lifestyle, preferences, and long-term health goals. This personalized approach is especially advantageous for managing complex or chronic conditions, providing patients with a more holistic and effective care experience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">C. Transparent and Predictable Costs</h4>
              
              <div className="bg-card rounded-lg p-6">
                <h5 className="text-lg font-bold text-white mb-3">Clear Pricing Models</h5>
                <p className="text-muted-foreground mb-4">
                  DSC practices typically offer a transparent and straightforward pricing structure for all services, which may include:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-white">Flat-Rate Fees:</strong> Set fees for specific procedures, ensuring no surprises in billing.
                  </li>
                  <li>
                    <strong className="text-white">All-Inclusive Membership Fees:</strong> Monthly or annual fees that cover a wide range of services.
                  </li>
                  <li>
                    <strong className="text-white">Tiered Pricing:</strong> Different service levels with corresponding pricing, allowing patients to choose the plan that best fits their needs.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">D. Subscription Fees</h4>
              
              <div className="bg-card rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Many DSC practices utilize a subscription model where patients pay a recurring fee, either monthly or annually. This fee often covers:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-4">
                  <li>
                    <strong className="text-white">Unlimited Consultations:</strong> Patients can see their specialists as often as needed without additional charges.
                  </li>
                  <li>
                    <strong className="text-white">Basic Procedures and Treatments:</strong> Routine care is included in the subscription.
                  </li>
                  <li>
                    <strong className="text-white">Discounts on Additional Services:</strong> Reduced rates for services not covered by the subscription.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  This model provides financial predictability for patients, eliminating unexpected costs and offering peace of mind, while also ensuring a stable income for specialists, allowing them to focus on delivering high-quality care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Benefits</h2>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">A. Improved Patient Outcomes</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Specialized Expertise</h5>
                  <p className="text-muted-foreground">
                    DSC enables patients to engage closely with specialists who possess in-depth knowledge and experience in specific conditions. This concentrated expertise often leads to more accurate diagnoses, more effective treatments, and better management of complex health issues.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Holistic Care Management</h5>
                  <p className="text-muted-foreground">
                    The continuous nature of care in DSC models allows specialists to monitor patient progress closely, make timely adjustments to treatment plans, and promptly address emerging health issues. This proactive approach can prevent complications and significantly improve overall health outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">B. Patient Satisfaction and Engagement</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Personal Attention</h5>
                  <p className="text-muted-foreground">
                    The increased time and attention provided by specialists in DSC models often results in higher patient satisfaction. Patients feel heard, valued, and more involved in their healthcare decisions, fostering a stronger patient-provider relationship.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Empowered Patients</h5>
                  <p className="text-muted-foreground">
                    With direct access to specialists and in-depth education about their conditions, patients in DSC models often become more engaged in managing their health. This increased engagement can lead to better adherence to treatment plans and healthier lifestyle choices.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">C. Cost-Effectiveness</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Elimination of Middlemen</h5>
                  <p className="text-muted-foreground">
                    By removing insurance companies from the equation, DSC reduces administrative overhead and potentially lowers overall healthcare costs. This can lead to financial savings for both patients and providers.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Preventative Care Focus</h5>
                  <p className="text-muted-foreground">
                    Emphasizing preventive care and early intervention in DSC models helps avoid costly emergency treatments and hospitalizations. This proactive approach not only enhances patient health but also reduces long-term healthcare expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Comparison with Traditional Healthcare Models
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Traditional healthcare models often entail lengthy wait times to see specialists, limited appointment durations, and intricate billing processes. In contrast, DSC addresses these challenges by offering:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-primary mb-2">Quicker Access to Specialists</h5>
              <p className="text-muted-foreground">
                Patients can see specialists sooner, reducing the time to receive necessary care.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-primary mb-2">Longer, More Comprehensive Appointments</h5>
              <p className="text-muted-foreground">
                Specialists can spend more time with each patient, ensuring thorough evaluations and care plans.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-primary mb-2">Simplified, Transparent Pricing</h5>
              <p className="text-muted-foreground">
                Clear, upfront costs eliminate the confusion associated with traditional billing.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h5 className="text-lg font-bold text-primary mb-2">Continuous Care</h5>
              <p className="text-muted-foreground">
                DSC promotes ongoing patient care rather than episodic treatments, enhancing overall health management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Services Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-8">Types of Services</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">A. Chronic Disease Management</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Diabetes Care</h5>
                  <p className="text-muted-foreground">
                    Comprehensive diabetes management includes regular blood sugar monitoring, medication management, nutritional counseling, and education on lifestyle modifications.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Cardiology</h5>
                  <p className="text-muted-foreground">
                    Specialized heart care services such as advanced cardiac imaging, stress testing, heart rhythm monitoring, and ongoing management of conditions like hypertension and heart failure.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">B. Advanced Diagnostics and Treatments</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Imaging Services</h5>
                  <p className="text-muted-foreground">
                    Quick access to advanced imaging techniques like MRI, CT scans, and ultrasounds, often at lower costs than traditional healthcare settings.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Surgical Procedures</h5>
                  <p className="text-muted-foreground">
                    Minor surgical procedures that can be safely performed in an outpatient setting, such as skin biopsies, minor orthopedic procedures, or endoscopies.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">C. Specialty Consultations</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Dermatology</h5>
                  <p className="text-muted-foreground">
                    Comprehensive skin care services, including treatment of skin conditions, cosmetic procedures, and skin cancer screenings.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-2">Orthopedics</h5>
                  <p className="text-muted-foreground">
                    Specialized care for musculoskeletal issues, including joint pain management, sports injury treatment, and rehabilitation services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-8">Implementation of Direct Specialty Care</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">A. Establishing Direct Care Practices</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-3">Setting Up Clinics</h5>
                  <p className="text-muted-foreground mb-3">This involves:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Selecting and equipping appropriate facilities.</li>
                    <li>• Implementing necessary technology (EHR systems, telemedicine platforms).</li>
                    <li>• Hiring support staff (nurses, technicians, administrative personnel).</li>
                    <li>• Developing operational protocols and procedures.</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-3">Developing Pricing Models</h5>
                  <p className="text-muted-foreground mb-3">Requires careful consideration of:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Operational costs.</li>
                    <li>• Desired patient panel size.</li>
                    <li>• Range of services offered.</li>
                    <li>• Local market conditions and competition.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">B. Patient Enrollment and Education</h4>
              
              <div className="bg-card rounded-lg p-6">
                <h5 className="text-lg font-bold text-white mb-3">Outreach Programs</h5>
                <p className="text-muted-foreground mb-3">These may include:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Informational seminars and webinars.</li>
                  <li>• Community health fairs.</li>
                  <li>• Partnerships with local businesses and organizations.</li>
                  <li>• Digital marketing campaigns.</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">C. Integration with Primary Care</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-3">Collaborative Networks</h5>
                  <p className="text-muted-foreground mb-3">Building relationships with primary care providers through:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Professional networking events.</li>
                    <li>• Shared continuing education opportunities.</li>
                    <li>• Collaborative care agreements.</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h5 className="text-lg font-bold text-white mb-3">Shared Medical Records</h5>
                  <p className="text-muted-foreground mb-3">Implementing secure systems for sharing patient information, such as:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Interoperable Electronic Health Record (EHR) systems.</li>
                    <li>• Health Information Exchanges (HIEs).</li>
                    <li>• Secure messaging platforms for provider-to-provider communication.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">Conclusion</h3>
          
          <p className="text-muted-foreground">
            Direct Specialty Care revolutionizes healthcare by fostering a direct financial relationship between patients and physicians, bypassing third-party payors. This model ensures patients receive personalized, high-quality care with enhanced access to medical services and holistic health benefits. By focusing on the patient-physician relationship and offering an affordable membership, Direct Specialty Care delivers better health outcomes, reduced medical costs, and an improved patient experience.
          </p>
        </div>
      </section>

      {/* State Links Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-white mb-6">Find Direct Specialty Care by State</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {states.map((state) => (
              <a
                key={state}
                href={`https://www.google.com/search?q=Direct+Specialty+Care+in+${state.replace(/ /g, "+")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Direct Specialty Care in {state}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Do you have any other questions?
          </h3>
          <p className="text-muted-foreground mb-8">
            Fill the form or choose a time from the calendar below and our experts can help you further
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

export default DirectSpecialtyCareGuide;
