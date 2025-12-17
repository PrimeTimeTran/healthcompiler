import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import elationLogo from "@/assets/elation-logo.png";
import fmmaLogo from "@/assets/fmma-logo.png";
import hintLogo from "@/assets/hint-logo.png";
import akuteHealthLogo from "@/assets/akute-health-logo.png";
import drgLogo from "@/assets/drg-logo.png";
import somedocsLogo from "@/assets/somedocs-logo.png";

const partners = [
  {
    name: "Elation",
    logoImage: elationLogo,
    description: "Elation Health is a cloud-based healthcare platform designed for physicians, facilitating patient-provider connections through a health information network. Founded in 2010 and based in San Francisco, the company enables collaboration among healthcare providers by allowing them to share patient information effectively at the point of care.",
    link: "#"
  },
  {
    name: "FMMA Member",
    logoImage: fmmaLogo,
    description: "The Free Market Medical Association (FMMA) promotes transparency and competition in healthcare, advocating for a system where patients can shop for medical services at competitive prices through platforms like ShopHealth, organizing events such as their annual conference to foster collaboration and innovation in the direct care movement.",
    link: "#"
  },
  {
    name: "Hint",
    logoImage: hintLogo,
    description: "Hint Health is a leading platform for Direct Primary Care (DPC) management, offering streamlined solutions for membership management, billing, and patient payments. Founded to empower providers and patients, Hint's tools help practices operate more efficiently, reduce administrative burdens, and focus on delivering high-quality, personalized care.",
    link: "#"
  },
  {
    name: "Akute Health",
    logoImage: akuteHealthLogo,
    description: "Akute Health is a modern EHR platform designed for direct-to-patient care models like DPC, concierge, and digital health. It combines scheduling, charting, billing, telemedicine, and patient communication into one seamless system. Built for ease of use and rapid growth, Akute helps providers streamline operations, improve patient experience, and scale efficiently without the complexity of traditional healthcare software.",
    link: "#"
  },
  {
    name: "Diabetes Reversal Group (DRG)",
    logoImage: drgLogo,
    description: "Diabetes Reversal Group (DRG) is the world's first clinically led, one-stop service focused on reversing Type 2 Diabetes naturally. With over 13 years of success, DRG offers a patented, non drug approach, combining personalized nutrition, targeted supplements, and exercise protocols. Led by experts like Dr. Kristine Burke and Dr. Hockings, the company empowers patients to restore metabolic balance and reduce reliance on medications.",
    link: "#"
  },
  {
    name: "SomeDocs",
    logoImage: somedocsLogo,
    description: "Health Compiler is a proud member of SomeDocs, the ultimate hub for healthcare professionals seeking to amplify their impact. SomeDocs offers cutting-edge tools, resources, and a vibrant community to help doctors build strong online presences, connect with peers, and share expertise. By joining this dynamic network, Health Compiler aligns with SomeDocs' mission to empower healthcare providers and drive innovation in the industry.",
    link: "#"
  },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Together, We're <span className="text-gradient italic">Reimagining</span> Care
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Partnering with Industry Leaders to Advance Direct Primary Care, Health Innovation, and Patient-Centered Solutions
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Logo Area */}
                <div className="bg-muted/30 p-8 md:p-10 flex items-center justify-center min-h-[180px] relative">
                  {/* Corner brackets */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-border/50"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-border/50"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-border/50"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-border/50"></div>
                  
                  <div className="text-center">
                    <img 
                      src={partner.logoImage} 
                      alt={partner.name} 
                      className={`w-auto mx-auto ${partner.name === "FMMA Member" ? "h-20 md:h-24 mix-blend-multiply" : "h-12 md:h-16"}`} 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {partner.description}
                  </p>
                  
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Become a Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our growing network of healthcare innovators and help shape the future of patient care.
          </p>
          <Button size="lg" className="px-10">
            Get in Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;