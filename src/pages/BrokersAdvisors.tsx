import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Target, Eye, Award, BarChart3 } from 'lucide-react';
import accountabilityImg from '@/assets/employers-accountability.png';
import quantifiableImg from '@/assets/employers-quantifiable.png';
import targetedSolutionsImg from '@/assets/employers-targeted-solutions.png';
import intuitivePlatformImg from '@/assets/employers-intuitive-platform.png';
import teamExpertsImg from '@/assets/employers-team-experts.png';
import planBenchmarkingImg from '@/assets/employers-plan-benchmarking.png';

const BrokersAdvisors = () => {
  const dpcBenefits = [
    { 
      image: accountabilityImg, 
      title: 'Personalized Care', 
      description: 'DPC offers longer appointment times and direct communication with physicians, fostering a more personalized healthcare experience.' 
    },
    { 
      image: quantifiableImg, 
      title: 'Increased Access', 
      description: 'Patients enjoy same-day or next-day visits, reducing wait times and enhancing satisfaction.' 
    },
    { 
      image: targetedSolutionsImg, 
      title: 'Targeted Solutions', 
      description: 'Employers can budget healthcare costs more effectively with fixed monthly fees per employee, eliminating unexpected expenses associated with traditional insurance models.' 
    },
  ];

  const valueProposition = [
    { 
      title: 'Enhanced Employee Health', 
      description: 'Studies show that DPC models lead to better health outcomes, particularly for chronic disease management. Continuous access to care encourages proactive health monitoring.' 
    },
    { 
      title: 'Reduced Healthcare Costs', 
      description: 'By focusing on preventive care and reducing unnecessary emergency visits, DPC can lower overall healthcare expenditures for employers.' 
    },
    { 
      title: 'Improved Employee Satisfaction', 
      description: 'A patient-centered approach leads to happier employees who feel valued and supported in their health journey.' 
    },
  ];

  const analyticsFeatures = [
    { 
      image: intuitivePlatformImg, 
      title: 'Provide Transparency', 
      description: 'Share clear insights into how DPC positively influences employee health and reduces costs.' 
    },
    { 
      image: teamExpertsImg, 
      title: 'Reinforce Confidence', 
      description: 'Equip your clients with solid data that reinforces their investment in DPC models.' 
    },
    { 
      image: planBenchmarkingImg, 
      title: 'Enhance Advisory Credibility', 
      description: 'By leveraging analytics, you position yourself as a knowledgeable advisor who understands the intricacies of modern healthcare solutions.' 
    },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3 border-b">
        <div className="container mx-auto px-4">
          <span className="text-sm text-muted-foreground">Benefits Advisors</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock the Power of Self Funded Plans & <span className="text-primary">Showcase it's value</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              As an Employee Benefits Advisor, your role in shaping healthcare strategies is pivotal. Understanding and showcasing innovative models like Direct Primary Care (DPC) can empower you to enhance existing employer relationships and open new opportunities. At HC Insights, we provide you with the tools to effectively illustrate the value of DPC plans, ensuring you stand out as a credible advisor in the evolving healthcare landscape.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Unlock Insights now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Direct Primary Care Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Why Direct Primary Care?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
            Direct Primary Care is revolutionizing how primary healthcare is delivered. By establishing a direct relationship between patients and their primary care providers, DPC bypasses traditional insurance complexities, allowing for:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dpcBenefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
                <img src={benefit.image} alt={benefit.title} className="w-16 h-16 mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            The <span className="text-primary">Value Proposition</span> for Employers
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
            Presenting DPC to your clients can significantly impact their employee health strategies. Here's how:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {valueProposition.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Book a meeting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Continuous Access to Analytics Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Continuous Access to Analytics</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
            With HC Insights, you gain continuous access to robust analytics that demonstrate the effectiveness of DPC services. This data allows you to:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
                <img src={feature.image} alt={feature.title} className="w-16 h-16 mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Empower your advisory practice by embracing Direct Primary Care. With HC Insights as your partner, you can confidently present DPC's benefits to both current and prospective clients. Together, we can transform healthcare strategies that not only meet employer needs but also enhance the well-being of employees. For more information on how HC Insights can support your efforts in promoting Direct Primary Care, contact us today.
            </p>
            <h3 className="text-2xl font-bold text-primary">
              Let's work together to create healthier workplaces through innovative healthcare solutions.
            </h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Book Your Demo</h2>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BrokersAdvisors;
