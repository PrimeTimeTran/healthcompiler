import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Stethoscope, Building2, Clipboard, Users, Briefcase, HeartPulse } from "lucide-react";

const faqCategories = [
  { title: "Direct Primary Care", anchor: "FAQ-DPC", icon: Stethoscope },
  { title: "Direct Specialty Care", anchor: "FAQ-DSC", icon: HeartPulse },
  { title: "Choosing the Right EHR", anchor: "FAQ-EHR", icon: Clipboard },
  { title: "Human Capital Insights", anchor: "FAQ-HCI", icon: Users },
  { title: "Self Funded Plans", anchor: "FAQ-SFP", icon: Building2 },
  { title: "Benefit Advisors Insights", anchor: "FAQ-BAI", icon: Briefcase },
];

const dpcFaqs = [
  {
    question: "What is direct care?",
    answer: "Direct care is a healthcare delivery model where patients pay a monthly or annual membership fee directly to a provider for basic primary care services. This eliminates the middleman of insurance companies and allows for more personalized care."
  },
  {
    question: "Is direct care right for me?",
    answer: "Direct care may be right for you if you want longer appointments, upfront pricing, and easy access to your doctor without the hassle of insurance. It works especially well for people looking for personalized, preventive care and more control over their healthcare experience."
  },
  {
    question: "What are the benefits of direct care?",
    answer: `Cost-effective: Direct care typically has lower monthly fees than traditional health insurance premiums.

Easier access to doctors: You can usually schedule same-day or next-day appointments with your direct care provider.

More time with your doctor: Direct care providers typically spend more time with each patient during appointments.

Improved preventive care: Direct care providers can focus on preventive care to help you stay healthy.`
  },
  {
    question: "How much does direct care cost?",
    answer: "Direct care costs vary depending on the provider and location, but typically range from $40 to $150 per month."
  },
  {
    question: "Is Health Compiler compliant with HIPAA regulations?",
    answer: "Yes, Health Compiler is fully compliant with HIPAA regulations. We take data security and patient privacy extremely seriously and have implemented comprehensive measures to ensure all health information is protected."
  },
  {
    question: "How does Health Compiler's DPC Insights & Reporting Platform utilize real-time health data?",
    answer: "Health Compiler's DPC Insights & Reporting Platform integrates with wearables and other data sources to collect real-time health data. This data is then analyzed to provide actionable insights for DPC practices, helping them monitor patient health trends, identify at-risk patients, and personalize care."
  },
  {
    question: "What services are typically not included in a DPC membership?",
    answer: "Services like specialist consultations, advanced imaging, and hospitalization are generally excluded and billed separately."
  },
  {
    question: "How can a DPC practice improve its online presence and attract new patients?",
    answer: "Health Compiler offers Website and SEO services specifically for DPC practices. These services help practices create professional, engaging websites and optimize their online content to rank higher in search engine results, making it easier for potential patients to find them."
  },
  {
    question: "Can children and families join a DPC practice?",
    answer: "Our DPC engagement & utilization management software is built to streamline patient interactions. It helps track patient engagement, identify trends in service utilization, and optimize strategies to keep patients actively involved in their health. For employer partnerships, it provides clear, actionable metrics on how their employees are utilizing your DPC services, demonstrating tangible value."
  },
  {
    question: "How can Health Compiler help me attract and retain patients for my DPC practice?",
    answer: "Health Compiler offers comprehensive solutions for patient acquisition and retention, including HC Growth AI Agents and a DPC Marketing Automation Platform. These tools assist with targeted email campaigns, website development and management, local SEO, content planning, social media marketing, and lead management. By automating outreach and optimizing your online presence, we help you reach potential patients and build lasting relationships."
  },
];

const solutions = [
  {
    title: "DPC Insights & Reporting Platform",
    description: "Unlock the power of wearables and device analytics for real-time health data. Seamlessly gather patients vital information, enabling comprehensive insights.",
    link: "/solutions/direct-primary-care"
  },
  {
    title: "DPC Marketing Automation Platform",
    description: "Effortlessly manage patient, organize local contacts, and run targeted campaigns with our streamlined system. Prioritize tasks, use customizable templates, and integrate with your EHR for personalized patient engagement.",
    link: "/solutions/direct-primary-care"
  },
  {
    title: "Website and Marketing Services",
    description: "Unlock the potential of a custom-designed DPC website, you can do changes without having to code, ensuring a hassle-free experience. Benefit from SEO, ensuring easy discoverability and attracting targeted local traffic and leads.",
    link: "/solutions/direct-primary-care"
  },
];

const FAQs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient italic">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our platform, services, and healthcare solutions
            </p>
          </div>

          {/* Category Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {faqCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <a
                  key={index}
                  href={`#${category.anchor}`}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Icon Area */}
                  <div className="bg-muted/30 p-8 md:p-10 flex items-center justify-center min-h-[140px] relative">
                    {/* Corner brackets */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-border/50"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-border/50"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-border/50"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-border/50"></div>
                    
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      Explore frequently asked questions about {category.title.toLowerCase()}
                    </p>
                    
                    <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      <span>Explore FAQs</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Primary Care FAQs */}
      <section id="FAQ-DPC" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Direct Primary Care</h2>
            </div>
            
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {dpcFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-b border-border last:border-b-0"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline px-6 py-5">
                      <span className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground px-6 pb-5 pl-14 whitespace-pre-line leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Send us your details and we'll get back to you to schedule a time to talk.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-10">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive suite of healthcare technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Header Area */}
                <div className="bg-muted/30 p-6 relative">
                  {/* Corner brackets */}
                  <div className="absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 border-border/50"></div>
                  <div className="absolute top-4 right-4 w-5 h-5 border-r-2 border-t-2 border-border/50"></div>
                  
                  <h3 className="text-xl font-bold text-foreground px-4">
                    {solution.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {solution.description}
                  </p>
                  
                  <div className="mt-6">
                    <Link to={solution.link}>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
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
  );
};

export default FAQs;
