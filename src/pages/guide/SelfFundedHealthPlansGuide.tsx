import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Users, DollarSign, Shield, Building2, ArrowRight, FileText, Scale, Settings, TrendingUp, XCircle } from "lucide-react";

const SelfFundedHealthPlansGuide = () => {
  const guideTopics = [
    "Understanding Self-Funded Plans",
    "Key Players in Self-Funded Plans",
    "The Role of Third-Party Administrators (TPAs)",
    "Stop-Loss Insurance",
    "Legal and Regulatory Considerations",
    "Implementing a Self-Funded Plan",
    "Advantages and Disadvantages of Self-Funded Plans",
    "Case Studies and Best Practices"
  ];

  const keyPlayers = [
    { icon: Building2, title: "Employer", description: "The plan sponsor ultimately responsible for the financial well-being of the plan." },
    { icon: Users, title: "Third-Party Administrator (TPA)", description: "Handles administrative tasks like processing claims, managing eligibility, and providing customer service." },
    { icon: Shield, title: "Stop-Loss Carrier", description: "Protects the employer from catastrophic claims, providing financial protection against unusually high medical expenses." },
    { icon: Building2, title: "Network Providers", description: "Healthcare providers that participate in the plan's network and offer discounted rates to plan members." },
    { icon: FileText, title: "Pharmacy Benefit Manager (PBM)", description: "Manages prescription drug benefits, negotiating with pharmacies and drug manufacturers." }
  ];

  const tpaResponsibilities = [
    { title: "Claims Processing", description: "Accurately and efficiently processing employee healthcare claims." },
    { title: "Eligibility Management", description: "Maintaining accurate records of plan members and their eligibility for coverage." },
    { title: "Customer Service", description: "Providing support to plan members and employers with questions or issues." },
    { title: "Reporting and Analytics", description: "Generating reports on plan utilization, costs, and trends." },
    { title: "Network Management", description: "Negotiating with healthcare providers to secure favorable rates." }
  ];

  const implementationSteps = [
    { step: 1, title: "Conducting a Needs Assessment", description: "Evaluating the employer's specific needs and objectives for a health plan." },
    { step: 2, title: "Selecting a TPA", description: "Choosing a TPA with the expertise and resources to manage the plan effectively." },
    { step: 3, title: "Negotiating with Providers", description: "Securing favorable rates from healthcare providers." },
    { step: 4, title: "Developing a Communication Strategy", description: "Educating employees about the plan and its benefits." },
    { step: 5, title: "Monitoring and Evaluating", description: "Continuously monitoring plan performance and making adjustments as needed." }
  ];

  const advantages = [
    { title: "Cost Savings", description: "Employers may save money on healthcare costs by controlling plan design and negotiating directly with providers." },
    { title: "Increased Flexibility", description: "Self-funded plans offer greater flexibility in plan design and benefit options." },
    { title: "Improved Control", description: "Employers have more control over their healthcare costs and can make decisions based on their specific needs." }
  ];

  const disadvantages = [
    { title: "Financial Risk", description: "Employers assume the financial risk for all employee healthcare costs, which can be significant." },
    { title: "Administrative Complexity", description: "Managing a self-funded plan can be more complex than a fully insured plan." },
    { title: "Legal and Regulatory Compliance", description: "Self-funded plans are subject to a variety of legal and regulatory requirements." }
  ];

  const bestPractices = [
    "Conducting thorough research and due diligence",
    "Partnering with experienced and reputable vendors",
    "Developing a comprehensive communication strategy",
    "Continuously monitoring and evaluating plan performance",
    "Staying informed about legal and regulatory changes"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Self-Funded Health Plans
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              A Comprehensive Guide to <span className="text-gradient">Self-Funded Health Plans</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Self-funded health plans have become increasingly popular among employers of all sizes. In a self-funded plan, the employer assumes the financial risk for employee healthcare costs, offering greater control over plan design, cost savings, and increased flexibility.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-8 text-center">
              The <Link to="/solutions/employers" className="text-primary hover:underline font-medium">Health Rosetta</Link> framework strongly encourages the use of self-funded health plans, where employers assume the financial risk for their employees' healthcare costs.
            </p>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img 
                src="https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/pexels-photo-7821915-1920w.jpeg" 
                alt="Self-Funded Health Plans"
                className="relative rounded-xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guide Overview Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            This comprehensive guide covers:
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {guideTopics.map((topic, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft card-hover">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-foreground font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Understanding Self-Funded Plans
          </h2>
          
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground mb-6">
              In a traditional fully insured health plan, the employer pays premiums to an insurance carrier, which assumes the financial risk for employee healthcare costs.
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 md:p-8 border border-border">
              <p className="text-foreground font-medium">
                In contrast, a self-funded plan shifts this risk to the employer. The employer directly pays for employee healthcare claims, while typically using a third-party administrator (TPA) to manage the plan's day-to-day operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Players Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Players in Self-Funded Plans
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Several key players contribute to the success of a self-funded plan:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPlayers.map((player, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <player.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{player.title}</h4>
                <p className="text-muted-foreground text-sm">{player.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TPA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Role of Third-Party Administrators (TPAs)
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            TPAs play a crucial role in the success of self-funded plans. Their responsibilities typically include:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tpaResponsibilities.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-5 shadow-soft card-hover">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stop-Loss Insurance Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stop-Loss Insurance
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Stop-loss insurance is a critical component of any self-funded plan. It protects the employer from the financial risk of large or unpredictable claims.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-xl p-6 shadow-card border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-primary" />
                <h4 className="text-lg font-bold text-foreground">Specific Stop-Loss</h4>
              </div>
              <p className="text-muted-foreground">
                This type of coverage protects the employer from individual claims that exceed a certain threshold.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-accent" />
                <h4 className="text-lg font-bold text-foreground">Aggregate Stop-Loss</h4>
              </div>
              <p className="text-muted-foreground">
                This type of coverage protects the employer from the total cost of claims exceeding a predetermined amount.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground bg-card rounded-lg p-4 border border-border">
            The choice of stop-loss coverage will depend on the specific needs and risk tolerance of the employer.
          </p>
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Legal and Regulatory Considerations
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Self-funded plans are subject to a variety of legal and regulatory requirements:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "ERISA", subtitle: "Employee Retirement Income Security Act", description: "This federal law governs employer-sponsored health plans, including self-funded plans." },
              { icon: Building2, title: "State Laws", subtitle: "Local Regulations", description: "Many states have laws that regulate self-funded plans, such as requirements for minimum coverage levels." },
              { icon: Shield, title: "HIPAA", subtitle: "Health Insurance Portability and Accountability Act", description: "This federal law protects the privacy and security of employee health information." }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-6 border border-border">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-primary font-medium mb-2">{item.subtitle}</p>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Implementing a Self-Funded Plan
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Implementing a self-funded plan requires careful planning and execution. Key steps include:
          </p>

          <div className="space-y-4">
            {implementationSteps.map((step, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages and Disadvantages Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Advantages and Disadvantages
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Advantages</h3>
              </div>
              <div className="space-y-4">
                {advantages.map((item, index) => (
                  <div key={index} className="bg-card rounded-lg p-5 shadow-soft border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Disadvantages</h3>
              </div>
              <div className="space-y-4">
                {disadvantages.map((item, index) => (
                  <div key={index} className="bg-card rounded-lg p-5 shadow-soft border-l-4 border-destructive">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Self-Insured Plan Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Is a Self-Insured Plan?
          </h2>
          
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground mb-6">
              A self-insured plan, also known as a self-funded plan, is a health insurance model where the employer assumes the financial risk for providing healthcare benefits to employees. Instead of paying fixed premiums to an insurance company, the employer directly pays for medical claims as they arise.
            </p>
            <div className="bg-card rounded-xl p-6 shadow-card">
              <p className="text-muted-foreground">
                Self-insured plans are often managed with the help of third-party administrators (TPAs) who handle tasks like claims processing and provider network management, while the employer retains ultimate financial responsibility. This model is particularly common among larger companies, which may benefit from economies of scale in managing healthcare costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies and Best Practices
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Many employers have successfully implemented self-funded plans and achieved significant cost savings. Some best practices include:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Conclusion</h2>
          
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card max-w-4xl">
            <p className="text-lg text-muted-foreground">
              Self-funded health plans can be a complex but potentially rewarding option for employers seeking to control healthcare costs and improve employee benefits. By carefully considering the factors discussed in this guide and working with experienced partners, employers can successfully implement and manage a self-funded plan that meets their specific needs and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Do you have any other questions?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fill the form or choose a time from the calendar and our experts can help you further.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SelfFundedHealthPlansGuide;
