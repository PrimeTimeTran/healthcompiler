import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const SelfFundedHealthPlansGuide = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-medium mb-4 block">Self-Funded Health Plans</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            A Comprehensive Guide to <span className="text-primary">Self-Funded Health Plans</span>
          </h1>
          
          <p className="text-muted-foreground max-w-4xl mx-auto mb-6">
            Self-funded health plans, also known as self-insured health plans, have become increasingly popular among employers of all sizes. In a self-funded plan, the employer assumes the financial risk for employee healthcare costs, rather than paying premiums to an insurance carrier. This approach offers several potential advantages, including greater control over plan design, cost savings, and increased flexibility. However, it also comes with significant financial risk and requires careful planning and management.
          </p>

          <p className="text-muted-foreground max-w-4xl mx-auto mb-8">
            The <Link to="/solutions/employers" className="text-primary hover:underline">Health Rosetta</Link> framework strongly encourages the use of self-funded health plans, where employers assume the financial risk for their employees' healthcare costs. This approach provides greater control over plan design, spending, and the ability to implement innovative cost-saving strategies.
          </p>

          <div className="max-w-2xl mx-auto">
            <img 
              src="https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/pexels-photo-7821915-1920w.jpeg" 
              alt="Self-Funded Health Plans"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-white mb-6">
            This comprehensive guide will delve into the intricacies of self-funded plans, covering key aspects such as:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">•</span>
                Understanding Self-Funded Plans
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">•</span>
                Key Players in Self-Funded Plans
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">•</span>
                The Role of Third-Party Administrators (TPAs)
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">•</span>
                Stop-Loss Insurance
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">•</span>
                Legal and Regulatory Considerations
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">•</span>
                Implementing a Self-Funded Plan
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">•</span>
                Advantages and Disadvantages of Self-Funded Plans
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-primary mr-3">•</span>
                Case Studies and Best Practices
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Understanding Self-Funded Plans
          </h3>
          
          <p className="text-muted-foreground">
            In a traditional fully insured health plan, the employer pays premiums to an insurance carrier, which assumes the financial risk for employee healthcare costs. In contrast, a self-funded plan shifts this risk to the employer. The employer directly pays for employee healthcare claims, while typically using a third-party administrator (TPA) to manage the plan's day-to-day operations.
          </p>
        </div>
      </section>

      {/* Key Players Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Key Players in Self-Funded Plans
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Several key players contribute to the success of a self-funded plan:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Employer</h4>
              <p className="text-muted-foreground text-sm">
                The employer is the plan sponsor and ultimately responsible for the financial well-being of the plan.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Third-Party Administrator (TPA)</h4>
              <p className="text-muted-foreground text-sm">
                The TPA handles the administrative tasks associated with the plan, such as processing claims, managing eligibility, and providing customer service.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Stop-Loss Carrier</h4>
              <p className="text-muted-foreground text-sm">
                Stop-loss insurance protects the employer from catastrophic claims, providing financial protection against unusually high medical expenses.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Network Providers</h4>
              <p className="text-muted-foreground text-sm">
                These are the healthcare providers (doctors, hospitals, etc.) that participate in the plan's network and offer discounted rates to plan members.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Pharmacy Benefit Manager (PBM)</h4>
              <p className="text-muted-foreground text-sm">
                The PBM manages the prescription drug benefits for the plan, negotiating with pharmacies and drug manufacturers to secure favorable pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TPA Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            The Role of Third-Party Administrators (TPAs)
          </h3>
          
          <p className="text-muted-foreground mb-8">
            TPAs play a crucial role in the success of self-funded plans. Their responsibilities typically include:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Claims Processing</h4>
              <p className="text-muted-foreground text-sm">
                Accurately and efficiently processing employee healthcare claims.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Eligibility Management</h4>
              <p className="text-muted-foreground text-sm">
                Maintaining accurate records of plan members and their eligibility for coverage.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Customer Service</h4>
              <p className="text-muted-foreground text-sm">
                Providing support to plan members and employers with questions or issues related to their coverage.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Reporting and Analytics</h4>
              <p className="text-muted-foreground text-sm">
                Generating reports on plan utilization, costs, and trends to help employers make informed decisions.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Network Management</h4>
              <p className="text-muted-foreground text-sm">
                Negotiating with healthcare providers to secure favorable rates for plan members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stop-Loss Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Stop-Loss Insurance
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Stop-loss insurance is a critical component of any self-funded plan. It protects the employer from the financial risk of large or unpredictable claims. There are two main types of stop-loss insurance:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Specific Stop-Loss</h4>
              <p className="text-muted-foreground">
                This type of coverage protects the employer from individual claims that exceed a certain threshold.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">Aggregate Stop-Loss</h4>
              <p className="text-muted-foreground">
                This type of coverage protects the employer from the total cost of claims exceeding a predetermined amount.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground">
            The choice of stop-loss coverage will depend on the specific needs and risk tolerance of the employer.
          </p>
        </div>
      </section>

      {/* Legal Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Legal and Regulatory Considerations
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Self-funded plans are subject to a variety of legal and regulatory requirements, including:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">ERISA</h4>
              <p className="text-muted-foreground text-sm">
                (Employee Retirement Income Security Act) This federal law governs employer-sponsored health plans, including self-funded plans.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">State Laws</h4>
              <p className="text-muted-foreground text-sm">
                Many states have laws that regulate self-funded plans, such as requirements for minimum coverage levels and consumer protections.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-primary mb-2">HIPAA</h4>
              <p className="text-muted-foreground text-sm">
                (Health Insurance Portability and Accountability Act) This federal law protects the privacy and security of employee health information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Implementing a Self-Funded Plan
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Implementing a self-funded plan requires careful planning and execution. Key steps in the implementation process include:
          </p>

          <div className="space-y-4">
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">1. Conducting a Needs Assessment</h4>
              <p className="text-muted-foreground">
                Evaluating the employer's specific needs and objectives for a health plan.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">2. Selecting a TPA</h4>
              <p className="text-muted-foreground">
                Choosing a TPA with the expertise and resources to manage the plan effectively.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">3. Negotiating with Providers</h4>
              <p className="text-muted-foreground">
                Securing favorable rates from healthcare providers.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">4. Developing a Communication Strategy</h4>
              <p className="text-muted-foreground">
                Educating employees about the plan and its benefits.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">5. Monitoring and Evaluating the Plan</h4>
              <p className="text-muted-foreground">
                Continuously monitoring plan performance and making adjustments as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages and Disadvantages Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-8">
            Advantages and Disadvantages of Self-Funded Plans
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-primary mb-6">Advantages</h4>
              <p className="text-muted-foreground mb-4">Self-funded plans offer several potential advantages, including:</p>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4">
                  <h5 className="font-bold text-white mb-2">Cost Savings</h5>
                  <p className="text-muted-foreground text-sm">
                    Employers may be able to save money on healthcare costs by controlling plan design and negotiating directly with providers.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <h5 className="font-bold text-white mb-2">Increased Flexibility</h5>
                  <p className="text-muted-foreground text-sm">
                    Self-funded plans offer greater flexibility in plan design and benefit options.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <h5 className="font-bold text-white mb-2">Improved Control</h5>
                  <p className="text-muted-foreground text-sm">
                    Employers have more control over their healthcare costs and can make decisions based on their specific needs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-destructive mb-6">Disadvantages</h4>
              <p className="text-muted-foreground mb-4">However, self-funded plans also come with some disadvantages, including:</p>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4">
                  <h5 className="font-bold text-white mb-2">Financial Risk</h5>
                  <p className="text-muted-foreground text-sm">
                    Employers assume the financial risk for all employee healthcare costs, which can be significant.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <h5 className="font-bold text-white mb-2">Administrative Complexity</h5>
                  <p className="text-muted-foreground text-sm">
                    Managing a self-funded plan can be more complex than a fully insured plan.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <h5 className="font-bold text-white mb-2">Legal and Regulatory Compliance</h5>
                  <p className="text-muted-foreground text-sm">
                    Self-funded plans are subject to a variety of legal and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Insured Plan Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            What Is a Self-Insured Plan?
          </h3>
          
          <p className="text-muted-foreground mb-6">
            A self-insured plan, also known as a self-funded plan, is a health insurance model where the employer assumes the financial risk for providing healthcare benefits to employees. Instead of paying fixed premiums to an insurance company, the employer directly pays for medical claims as they arise, using a designated fund created from employee and employer contributions. This approach offers greater flexibility in plan design and potential cost savings, as employers can avoid the profit margins typically included in fully insured plans.
          </p>

          <p className="text-muted-foreground">
            Self-insured plans are often managed with the help of third-party administrators (TPAs) who handle tasks like claims processing and provider network management, while the employer retains ultimate financial responsibility. This model is particularly common among larger companies, which may benefit from economies of scale in managing healthcare costs.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            Case Studies and Best Practices
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Many employers have successfully implemented self-funded plans and achieved significant cost savings. Some best practices for successful self-funded plans include:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6">
              <p className="text-muted-foreground">
                Conducting thorough research and due diligence.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <p className="text-muted-foreground">
                Partnering with experienced and reputable vendors.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <p className="text-muted-foreground">
                Developing a comprehensive communication strategy.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <p className="text-muted-foreground">
                Continuously monitoring and evaluating plan performance.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <p className="text-muted-foreground">
                Staying informed about legal and regulatory changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="bg-black py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6">Conclusion</h3>
          
          <p className="text-muted-foreground">
            Self-funded health plans can be a complex but potentially rewarding option for employers seeking to control healthcare costs and improve employee benefits. By carefully considering the factors discussed in this guide and working with experienced partners, employers can successfully implement and manage a self-funded plan that meets their specific needs and objectives.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Do you have any other questions?
          </h2>
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

export default SelfFundedHealthPlansGuide;
