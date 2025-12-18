import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Code2, Heart, Handshake } from 'lucide-react';
import mehulPhoto from '@/assets/mehul-agarwal.png';
import santoshPhoto from '@/assets/santosh-pujari.png';
import burhanPhoto from '@/assets/burhan-mithaiwala.png';

const leadershipTeam = [
  {
    name: 'Mehul Agarwal',
    role: 'Business, Product, Marketing',
    photo: mehulPhoto,
  },
  {
    name: 'Santosh Pujari',
    role: 'Data, Engineering, Tech',
    photo: santoshPhoto,
  },
  {
    name: 'Burhan Mithaiwala',
    role: 'Product, Customer Success',
    photo: burhanPhoto,
  },
];

const teamMembers = [
  'Santosh Pujari',
  'Burhan Mithaiwala',
  'Anuj Jain',
  'Sanket Pande',
  'Mahesh Meena',
  'Kumar Anunay',
  'Rahul Kharche',
  'Sukanya Ladi',
  'Pradnya Mahabale',
  'Diksha Munot',
  'Arya Uplap',
  'Shagun Patwa',
  'Noopur Saligram',
  'Nimish Chougule',
  'Dnyaneshwar Bhosle',
  'Vivek Singh',
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We simplify healthcare data so teams can focus on delivering quality care.',
  },
  {
    icon: Code2,
    title: 'Engineering Excellence',
    description: 'Every solution is built with robust architecture, clean code, and best practices.',
  },
  {
    icon: Heart,
    title: 'Healthcare Expertise',
    description: 'Deep domain knowledge in healthcare workflows, compliance, and data standards.',
  },
  {
    icon: Handshake,
    title: 'Long-term Partnership',
    description: 'We build scalable solutions designed to grow with your organization.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
              About Us
            </h1>
            <div className="h-1 w-24 bg-primary-foreground/30 mb-8" />
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6">
              Health Compiler serves independent primary care and specialty practices, Direct Primary Care (DPC) networks, and self-funded healthcare purchasers including employers, TPAs, brokers, and health plans who need clarity and control across care and cost.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Built for modern, value-based healthcare, our platform unifies claims, clinical, pharmacy, and engagement data and turns it into real-time insights, automated workflows, and action. We go beyond dashboards by delivering AI-powered voice agents, intelligent engagement tools, and forward-deployment engineering that adapts to how care is actually delivered. Whether supporting independent and DPC practices, scaling specialty and value-based care models, or enabling self-funded employers to make smarter benefit decisions, Health Compiler helps organizations operate efficiently, reduce waste, and deliver better outcomes with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-28 bg-[#F5E6E0]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <div
                key={leader.name}
                className="bg-card rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <img 
                    src={leader.photo} 
                    alt={leader.name}
                    className={`w-full h-full ${index === 2 ? 'object-cover object-top scale-90' : 'object-cover'}`}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplifying Healthcare Data */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Simplifying <span className="text-primary">Healthcare Data</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Healthcare organizations generate massive amounts of data every day—from patient records and claims to operational metrics and financial reports. Yet most teams struggle to transform this data into actionable insights.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                HealthCompiler was founded to bridge this gap. We combine deep healthcare domain expertise with modern data engineering practices to build platforms that work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach is straightforward: understand your workflows, design scalable architecture, and deliver solutions that drive real operational improvements.
              </p>
            </div>
            
            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-square bg-[#F5E6E0] rounded-3xl flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-4 border-primary/30" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 md:py-28 bg-[#F5E6E0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What <span className="text-primary">Drives Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values shape every project we take on and every solution we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with Video */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Video */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <video 
                  controls
                  poster="https://irp.cdn-website.com/c9f7398c/dms3rep/multi/GPIwi8FgRgyjPBVfuyoF_Health+Compiler-4K.v2.0000000.jpg"
                  className="w-full"
                >
                  <source 
                    src="https://vid.cdn-website.com/c9f7398c/videos/GPIwi8FgRgyjPBVfuyoF_Health+Compiler-4K-v.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Testimonial Text */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                What Our User Say
              </h2>
              <div className="relative">
                <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-6">
                  "Before Health Compiler, compiling these metrics was a manual and time-consuming process. Now, everything is captured automatically, and employers can access a dashboard with these metrics anytime."
                </blockquote>
                <div className="mt-6">
                  <p className="font-display font-bold text-foreground">Dr. Ken Rictor</p>
                  <p className="text-muted-foreground">Genovo Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com Booking Widget */}
      <section className="py-20 md:py-28 bg-[#F5E6E0]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="rounded-2xl overflow-hidden shadow-lg bg-card"
              style={{ minHeight: '600px' }}
            >
              <iframe
                src="https://cal.com/mehulhc/30min?embed=true&theme=light"
                width="100%"
                height="600"
                frameBorder="0"
                className="w-full"
                title="Schedule a meeting with Mehul Agarwal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members - Built by the Best */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Built by the Best
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-5xl">
            {teamMembers.map((name) => (
              <div key={name} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-foreground font-medium text-sm shrink-0">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-foreground font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#F5E6E0]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
            Let Health Compiler do the heavy lifting, so you can focus on what you do best — providing exceptional Direct Care
          </h2>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Unveil the value of your services and free yourself from the manual effort of reporting
          </p>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Ready to enhance your practice's efficiency and growth? Connect with us today.
          </p>
          <Button variant="gradient" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Schedule a demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;