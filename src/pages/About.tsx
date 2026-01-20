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
      <section className="py-16 md:py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
              About Us
            </h1>
            <div className="h-1 w-20 bg-primary-foreground/40 mb-8 rounded-full" />
            <div className="space-y-5">
              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
                Health Compiler serves independent primary care and specialty practices, Direct Primary Care (DPC) networks, and self-funded healthcare purchasers including employers, TPAs, brokers, and health plans who need clarity and control across care and cost.
              </p>
              <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed">
                Built for modern, value-based healthcare, our platform unifies claims, clinical, pharmacy, and engagement data and turns it into real-time insights, automated workflows, and action. We go beyond dashboards by delivering AI-powered voice agents, intelligent engagement tools, and forward-deployment engineering that adapts to how care is actually delivered. Whether supporting independent and DPC practices, scaling specialty and value-based care models, or enabling self-funded employers to make smarter benefit decisions, Health Compiler helps organizations operate efficiently, reduce waste, and deliver better outcomes with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <img 
                    src={leader.photo} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center bg-card">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Simplifying <span className="text-primary">Healthcare Data</span>
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Healthcare organizations generate massive amounts of data every day—from patient records and claims to operational metrics and financial reports. Yet most teams struggle to transform this data into actionable insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  HealthCompiler was founded to bridge this gap. We combine deep healthcare domain expertise with modern data engineering practices to build platforms that work.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach is straightforward: understand your workflows, design scalable architecture, and deliver solutions that drive real operational improvements.
                </p>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-sm aspect-square bg-[#F5E6E0] rounded-2xl flex items-center justify-center shadow-sm">
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full border-[3px] border-primary/25 animate-pulse" />
                  <div className="absolute inset-4 rounded-full border-[3px] border-primary/35" />
                  <div className="absolute inset-10 rounded-full bg-primary/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 tracking-tight">
              What <span className="text-primary">Drives Us</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values shape every project we take on and every solution we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Video */}
            <div className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/30">
                <video 
                  controls
                  poster="https://irp.cdn-website.com/c9f7398c/dms3rep/multi/GPIwi8FgRgyjPBVfuyoF_Health+Compiler-4K.v2.0000000.jpg"
                  className="w-full aspect-video object-cover"
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
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
                What Our User Say
              </h2>
              <div className="relative pl-5 border-l-4 border-primary/30">
                <blockquote className="text-base md:text-lg text-muted-foreground italic leading-relaxed">
                  "Before Health Compiler, compiling these metrics was a manual and time-consuming process. Now, everything is captured automatically, and employers can access a dashboard with these metrics anytime."
                </blockquote>
                <div className="mt-5">
                  <p className="font-display font-semibold text-foreground">Dr. Ken Rictor</p>
                  <p className="text-muted-foreground text-sm">Genovo Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com Booking Widget */}
      <section className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div 
              className="rounded-xl overflow-hidden shadow-md bg-card border border-border/30"
              style={{ minHeight: '550px' }}
            >
              <iframe
                src="https://cal.com/mehulhc/30min?embed=true&theme=light"
                width="100%"
                height="550"
                frameBorder="0"
                className="w-full"
                title="Schedule a meeting with Mehul Agarwal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members - Built by the Best */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 tracking-tight">
            Built by the Best
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 max-w-4xl">
            {teamMembers.map((name) => (
              <div key={name} className="flex items-center gap-3 py-1">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/25 to-primary/10 flex items-center justify-center text-foreground font-medium text-xs shrink-0 border border-primary/10">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-foreground text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-5 tracking-tight leading-snug">
              Let Health Compiler do the heavy lifting, so you can focus on what you do best — providing exceptional Direct Care
            </h2>
            <p className="text-muted-foreground mb-3">
              Unveil the value of your services and free yourself from the manual effort of reporting
            </p>
            <p className="text-muted-foreground mb-8">
              Ready to enhance your practice's efficiency and growth? Connect with us today.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Schedule a demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;