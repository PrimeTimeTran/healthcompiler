import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

const leadershipTeam = [
  {
    name: 'Mehul Agarwal',
    role: 'Business, Product, Marketing',
  },
  {
    name: 'Santosh Pujari',
    role: 'Data, Engineering, Tech',
  },
  {
    name: 'Burhan Mithaiwala',
    role: 'Product, Customer Success',
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

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
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
      <section className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="bg-card rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-foreground font-bold text-4xl">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
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

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              What Our Users Say
            </h2>
            <div className="relative">
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "Before Health Compiler, compiling these metrics was a manual and time-consuming process. Now, everything is captured automatically, and employers can access a dashboard with these metrics anytime."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-foreground font-bold text-xl">
                  KR
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-foreground">Dr. Ken Rictor</p>
                  <p className="text-muted-foreground">Genovo Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
            Built by the Best
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-5">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 max-w-4xl mx-auto">
            Let Health Compiler do the heavy lifting, so you can focus on what you do best — providing exceptional Direct Care
          </h2>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Unveil the value of your services and free yourself from the manual effort of reporting
          </p>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
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
