import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqCategories = [
  { title: "Direct Primary Care", anchor: "FAQ-DPC" },
  { title: "Direct Specialty Care", anchor: "FAQ-DSC" },
  { title: "Choosing the Right EHR", anchor: "FAQ-EHR" },
  { title: "Human Capital Insights", anchor: "FAQ-HCI" },
  { title: "Self Funded Plans", anchor: "FAQ-SFP" },
  { title: "Benefit Advisors Insights", anchor: "FAQ-BAI" },
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

const FAQs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium mb-4">FAQs</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions in the sections below
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {faqCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                <a
                  href={`#${category.anchor}`}
                  className="text-primary hover:underline font-medium"
                >
                  Explore FAQs
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Primary Care FAQs */}
      <section id="FAQ-DPC" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Direct Primary Care</h2>
          <Accordion type="single" collapsible className="w-full max-w-4xl">
            {dpcFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-lg font-medium text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Talk to Us Today</h2>
          <p className="text-muted-foreground mb-8">
            Send us your details and we'll get back to you to schedule a time to talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">DPC Insights & Reporting Platform</h3>
              <p className="text-muted-foreground mb-6">
                Unlock the power of wearables and device analytics for real-time health data. Seamlessly gather patients vital information, enabling comprehensive insights.
              </p>
              <Link
                to="/solutions/direct-primary-care"
                className="text-primary hover:underline font-medium"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">DPC Marketing Automation Platform</h3>
              <p className="text-muted-foreground mb-6">
                Effortlessly manage patient, organize local contacts, and run targeted campaigns with our streamlined system. Prioritize tasks, use customizable templates, and integrate with your EHR for personalized patient engagement.
              </p>
              <Link
                to="/solutions/direct-primary-care"
                className="text-primary hover:underline font-medium"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Website and Marketing Services</h3>
              <p className="text-muted-foreground mb-6">
                Unlock the potential of a custom-designed DPC website, you can do changes without having to code, ensuring a hassle-free experience. Benefit from SEO, ensuring easy discoverability and attracting targeted local traffic and leads.
              </p>
              <Link
                to="/solutions/direct-primary-care"
                className="text-primary hover:underline font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
