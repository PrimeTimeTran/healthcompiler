import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  Brain,
  Database,
  BarChart3,
  Mic,
  ShieldCheck,
  TrendingUp,
  Building2,
  Stethoscope,
  Users,
  Hospital,
  Lightbulb,
  Layers,
  Zap,
  Target,
  Eye,
} from 'lucide-react';
import mehulPhoto from '@/assets/mehul-agarwal.png';
import santoshPhoto from '@/assets/santosh-pujari.png';
import burhanPhoto from '@/assets/burhan-mithaiwala.png';

const leadershipTeam = [
  { name: 'Mehul Agarwal', role: 'Business, Product, Marketing', photo: mehulPhoto },
  { name: 'Santosh Pujari', role: 'Data, Engineering, Tech', photo: santoshPhoto },
  { name: 'Burhan Mithaiwala', role: 'Product, Customer Success', photo: burhanPhoto },
];

const teamMembers = [
  'Santosh Pujari', 'Burhan Mithaiwala', 'Anuj Jain', 'Sanket Pande',
  'Mahesh Meena', 'Kumar Anunay', 'Rahul Kharche', 'Sukanya Ladi',
  'Pradnya Mahabale', 'Diksha Munot', 'Arya Uplap', 'Shagun Patwa',
  'Noopur Saligram', 'Nimish Chougule', 'Dnyaneshwar Bhosle', 'Vivek Singh',
];

const aiStack = [
  {
    icon: Database,
    title: 'AI Data Structuring',
    description: 'Ingest claims, clinical, pharmacy, and HRIS data from disparate sources. Our Infera engine normalizes, deduplicates, and maps everything to a unified member record — automatically.',
  },
  {
    icon: Brain,
    title: 'Intelligent Signal Detection',
    description: 'Surface care gaps, utilization anomalies, and cost outliers before they compound. AI identifies patterns across populations that manual review consistently misses.',
  },
  {
    icon: BarChart3,
    title: 'Automated Employer Reporting',
    description: 'Generate employer-ready ROI reports, PMPM trend analyses, and DPC value summaries without manual data pulls. Reports update in real time as new data flows in.',
  },
  {
    icon: Mic,
    title: 'Voice & Workflow Automation',
    description: 'AI-powered voice agents handle scheduling, triage, and patient outreach. Workflow automation eliminates repetitive administrative tasks across care operations.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Risk & Engagement',
    description: 'Risk-stratify patient populations using clinical and behavioral signals. Predict disengagement, identify high-cost trajectory members, and trigger proactive interventions.',
  },
  {
    icon: Eye,
    title: 'Autonomous Performance Monitoring',
    description: 'Continuous monitoring of quality metrics, cost benchmarks, and engagement KPIs. Automated alerts when performance deviates from targets — no one needs to check a dashboard.',
  },
];

const pillars = [
  {
    icon: Layers,
    title: 'Unified Healthcare Intelligence',
    description: 'Integrate EMR, claims, pharmacy, wearable, and engagement data into a single structured layer. One source of truth across your entire care ecosystem.',
    details: ['Multi-source data ingestion', 'Real-time normalization', 'Unified member records', 'Cross-system interoperability'],
  },
  {
    icon: Zap,
    title: 'AI-Powered Action',
    description: 'Move beyond static dashboards. Automated insights, intelligent alerts, care gap detection, and employer ROI modeling — all driven by your own data.',
    details: ['Automated insight generation', 'Care gap identification', 'Cost driver detection', 'Predictive utilization modeling'],
  },
  {
    icon: Target,
    title: 'Growth & Employer Enablement',
    description: 'Equip direct care practices with the proof-of-value tools they need to win, retain, and expand employer contracts.',
    details: ['Employer-ready reporting', 'DPC ROI dashboards', 'Contract performance tracking', 'Renewal intelligence'],
  },
];

const audiences = [
  {
    icon: Stethoscope,
    title: 'Direct Care Practices',
    subtitle: 'DPC · Direct Specialty · Concierge · Functional Medicine',
    before: 'Manual reporting, unstructured data, no employer-facing analytics, reactive patient engagement.',
    after: 'Automated employer reports, AI-driven patient engagement, predictive retention insights, and measurable ROI documentation.',
  },
  {
    icon: Building2,
    title: 'Self-Funded Employers',
    subtitle: 'HR Leaders · CFOs · Benefits Directors',
    before: 'Fragmented vendor reports, delayed claims data, no visibility into what healthcare spend actually delivers.',
    after: 'Unified cost intelligence, real-time PMPM tracking, predictive risk modeling, and fiduciary-grade oversight.',
  },
  {
    icon: Users,
    title: 'Benefit Advisors & TPAs',
    subtitle: 'Brokers · Consultants · Third-Party Administrators',
    before: 'Static spreadsheets, manual data reconciliation, limited ability to demonstrate advisory value to clients.',
    after: 'Live client dashboards, AI-powered plan design modeling, automated benchmark reports, and shared intelligence.',
  },
  {
    icon: Hospital,
    title: 'ACOs & Value-Based Organizations',
    subtitle: 'Accountable Care · CINs · MSOs',
    before: 'Siloed quality data, lagging performance reports, manual risk adjustment tracking, limited population visibility.',
    after: 'Real-time quality metrics, HCC capture optimization, population risk stratification, and automated CMS-aligned reporting.',
  },
];

const philosophy = [
  { icon: Stethoscope, text: 'AI that amplifies clinicians — not replaces them. Every feature is designed to give care teams more time, not more complexity.' },
  { icon: Zap, text: 'Automation that eliminates administrative burden. If a task is repetitive, predictable, and data-dependent, it should run itself.' },
  { icon: Eye, text: 'Transparency in every report. Employers, advisors, and care teams see the same data — no hidden numbers, no black boxes.' },
  { icon: TrendingUp, text: 'Measurable impact across financial and clinical outcomes. If we can\'t quantify the result, we haven\'t finished the work.' },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Health Compiler | AI Intelligence Layer for Healthcare Analytics</title>
        <meta name="description" content="Health Compiler is the AI-powered intelligence layer transforming fragmented healthcare data into autonomous insight, workflow automation, and measurable ROI for Direct Care, employers, and value-based organizations." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-28 lg:py-36 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 text-sm font-medium text-primary-foreground/90 mb-6">
              <Brain className="w-4 h-4" />
              The AI Intelligence Layer for Healthcare
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight leading-[1.1]">
              We Don't Build Dashboards.{' '}
              <span className="text-primary-foreground/80">We Activate Healthcare Data.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-3xl mb-8">
              Health Compiler is the AI infrastructure layer that transforms fragmented claims, clinical, pharmacy, and engagement data into autonomous insight, automated reporting, and measurable ROI — across Direct Care, self-funded employers, and value-based care ecosystems.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((leader) => (
              <div key={leader.name} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 text-center bg-card">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{leader.name}</h3>
                  <p className="text-muted-foreground text-sm">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">The Problem</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">
              Healthcare Data Is Everywhere.{' '}
              <span className="text-primary">Intelligence Is Not.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Self-funded employers spend 20–40% of total compensation on healthcare and can't answer basic questions about what they're getting. TPAs send one report. PBMs send another. Stop-loss carriers have their own version of the truth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Direct care practices generate clinical value every day but lack the analytics infrastructure to prove it. Employer reporting is manual. Patient engagement tracking is inconsistent. ROI conversations default to anecdotes instead of evidence.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Most analytics platforms stop at visualization — they show you what happened, then leave you to figure out what to do about it. The data exists, but it's fragmented across systems that don't communicate, formatted in ways that aren't compatible, and delivered too late to change outcomes.
                </p>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-foreground font-medium leading-relaxed">
                    Health Compiler was built to close this gap — an AI layer that doesn't just aggregate data, but structures it, interprets it, and activates it across every stakeholder in the care ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Layer */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">How We're Different</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                The AI Layer — Not Another Dashboard
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Six distinct AI capabilities embedded across every data workflow — from ingestion to employer reporting.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiStack.map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">What We Do</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Three Pillars of Healthcare Intelligence
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">Who We Serve</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Built for the Stakeholders Who Move Healthcare Forward
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {audiences.map((aud) => (
                <div key={aud.title} className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <aud.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{aud.title}</h3>
                      <p className="text-xs text-muted-foreground">{aud.subtitle}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide mb-1.5">Before</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{aud.before}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-[11px] font-medium text-primary uppercase tracking-wide mb-1.5">After</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{aud.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">Our Philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 tracking-tight">
              AI That Serves Clinicians, Not Replaces Them
            </h2>
            <div className="space-y-5">
              {philosophy.map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/30">
                <video
                  controls
                  poster="https://irp.cdn-website.com/c9f7398c/dms3rep/multi/GPIwi8FgRgyjPBVfuyoF_Health+Compiler-4K.v2.0000000.jpg"
                  className="w-full aspect-video object-cover"
                >
                  <source src="https://vid.cdn-website.com/c9f7398c/videos/GPIwi8FgRgyjPBVfuyoF_Health+Compiler-4K-v.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                What Our Users Say
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

      {/* Future Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">Looking Ahead</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Infrastructure for the Next Decade of Healthcare
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              The future of healthcare isn't fee-for-service. It's employer-driven, direct care–centered, and powered by AI that operates continuously — not just when someone opens a report. Health Compiler is building the intelligence infrastructure for this shift.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              As direct care models scale, employer demand for cost transparency grows, and value-based contracts require real-time quality measurement, the need for an autonomous AI layer across healthcare data will define which organizations lead — and which fall behind.
            </p>
          </div>
        </div>
      </section>

      {/* Cal.com Booking */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                See Your Data Transformed Into Intelligence
              </h2>
              <p className="text-muted-foreground">Schedule a demo and see Health Compiler working with your own data sources.</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-card border border-border/30" style={{ minHeight: '550px' }}>
              <iframe
                src="https://cal.com/mehulhc/30min?embed=true&theme=light"
                width="100%"
                height="550"
                frameBorder="0"
                className="w-full"
                title="Schedule a meeting with Health Compiler"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 tracking-tight leading-snug">
              Stop Guessing. Start Knowing.
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
              Transform fragmented health data into unified employer intelligence. See how Health Compiler activates your data into measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/book-a-demo" className="gap-2">
                  Schedule a Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
