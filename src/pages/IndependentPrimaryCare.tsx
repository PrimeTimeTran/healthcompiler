import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  ArrowRight,
  Database,
  Brain,
  Bell,
  FileText,
  AlertTriangle,
  Eye,
  Plug,
  TrendingUp,
  Users,
  Target,
  Shield,
  Heart,
  DollarSign,
  CheckCircle,
  Building,
  Layers,
} from 'lucide-react'
import { CTAButton, GridSection } from '@/components/ui'
import IndependentPrimaryCareViz from '@/components/hero-visualizations/IndependentPrimaryCareViz'

// Hero Section
const HeroSection = () => {
  return (
    <GridSection>
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Independent Primary Care,{' '}
              <span className="text-primary">Built for Value-Based Care</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Health Compiler supports independent primary care practices by helping teams make better use of the data they already generate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton link="/contact" text="Book a Demo" suffixIconDefault />
              <Button size="lg" variant="outline" asChild>
                <Link to="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          <IndependentPrimaryCareViz />
        </div>
      </div>
    </GridSection>
  )
}

// Lower Operational Cost Section
const LowerCostSection = () => {
  const benefits = [
    'Reduce broad, manual chart reviews by focusing only where clinical signals indicate gaps',
    'Cut down staff time spent pulling records and reconciling reports',
    'Minimize rework caused by late or unclear requests',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Lower operational cost
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Earlier Visibility Section
const EarlierVisibilitySection = () => {
  const benefits = [
    'See care gaps and quality exposure earlier in the year',
    'Surface risk-relevant conditions before reporting deadlines approach',
    'Stay ahead of reviews instead of reacting to them',
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Earlier visibility into quality and risk
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Less Disruption Section
const LessDisruptionSection = () => {
  const benefits = [
    'Fewer last-minute chart requests and documentation fire drills',
    'Less back-and-forth with external partners',
    'More staff time focused on patient care, not paperwork',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Less disruption to day-to-day practice
          </h2>
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
          <Button size="lg" variant="outline" asChild>
            <Link to="/capabilities">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Collaboration Section
const CollaborationSection = () => {
  const benefits = [
    'Work from a consistent clinical picture when engaging with payers, employers, or programs',
    'Reduce misalignment and disputed results',
    'Make performance conversations more straightforward',
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Stronger collaboration with external partners
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// EHR Compatibility Section
const EHRCompatibilitySection = () => {
  const points = [
    'Designed to complement the EHR for independent primary care practices',
    'Does not replace your independent primary care EHR',
    'Connects to the systems you already use',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Works with your existing EHR
          </h2>
          <div className="space-y-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Growth Support Section
const GrowthSupportSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Built to support independent practices as they grow
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Health Compiler helps practices stay focused on care while being better prepared for quality reviews, partner requests, and evolving expectations.
          </p>
          <CTAButton link="/contact" text="Request a Demo" suffixIconDefault />
        </div>
      </div>
    </section>
  )
}

// Reality Section - Pain Points
const RealitySection = () => {
  const painPoints = [
    {
      icon: Database,
      title: 'Fragmented Data',
      description: 'Fragmented data across EHRs, labs, payers, and vendors',
    },
    {
      icon: Eye,
      title: 'Limited Visibility',
      description: 'Limited visibility into quality, attribution, and utilization',
    },
    {
      icon: FileText,
      title: 'Reporting Pressure',
      description: 'Reporting pressure from ACOs, CINs, and payers',
    },
    {
      icon: AlertTriangle,
      title: 'Rising Workload',
      description: 'Rising patient engagement and after-hours workload',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            The challenge of staying independent under value-based care
          </h2>
          <p className="text-lg text-muted-foreground">
            Independent primary care practices are increasingly asked to perform like risk-bearing organizations—without the data infrastructure, analytics teams, or payer insight to support it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Health Compiler Solution Section
const SolutionSection = () => {
  const features = [
    {
      icon: Layers,
      title: 'Unified Record',
      description: 'One longitudinal, normalized view across clinical notes, labs, pharmacy, claims, and engagement.',
    },
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Automated summaries, change detection, and risk signals across care, cost, and engagement.',
    },
    {
      icon: Bell,
      title: 'Smart Signals',
      description: 'Alerts for material changes—after-hours spikes, utilization shifts, care gaps—without noise.',
    },
    {
      icon: FileText,
      title: 'Actionable Reporting',
      description: 'Clean, defensible reports aligned to ACO, CIN, and payer requirements.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Turning primary care into a value-based operating model
          </h2>
          <p className="text-lg text-muted-foreground">
            Health Compiler acts as the intelligence and activation layer around your clinical system—connecting data, surfacing insights, and translating performance into measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-border/50 bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Elation Integration Section
const IntegrationSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Built to extend modern primary care systems
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Health Compiler integrates seamlessly with Elation Health and other modern EHRs—operationalizing clinical data for analytics, reporting, and value-based performance without disrupting clinical workflows.
              </p>
              <div className="flex items-center gap-4">
                <Plug className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Seamless EHR integration</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-border p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Clinical Data</p>
                    <p className="text-xs text-muted-foreground">Notes, labs, encounters</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-px h-8 bg-border" />
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Health Compiler</p>
                    <p className="text-xs text-muted-foreground">Analytics & Intelligence</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-px h-8 bg-border" />
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Value-Based Reports</p>
                    <p className="text-xs text-muted-foreground">ACO, CIN, payer-ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Dashboard Highlights Section
const DashboardSection = () => {
  const highlights = [
    { icon: Users, label: 'Encounter mix and utilization trends' },
    { icon: Bell, label: 'After-hours messages and workload' },
    { icon: FileText, label: 'Prescription and refill patterns' },
    { icon: Heart, label: 'Patient touch ratio and engagement' },
    { icon: Target, label: 'Quality and performance signals' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            See what matters—across care and performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything surfaced in one place—built for operators, clinicians, and payer conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group p-5 rounded-xl border border-border/50 bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Who This Is For Section
const PersonaSection = () => {
  const personas = [
    {
      icon: Building,
      title: 'Shared Savings Entrants',
      description: 'Independent primary care groups entering shared savings',
    },
    {
      icon: Users,
      title: 'ACO/CIN Participants',
      description: 'Practices participating in ACOs or CINs',
    },
    {
      icon: TrendingUp,
      title: 'Risk Preparation',
      description: 'Groups preparing for MA or downside risk',
    },
    {
      icon: Shield,
      title: 'Independence Focused',
      description: 'Primary care teams that want to stay independent—and competitive',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Designed for independent practices at every stage
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {personas.map((persona, idx) => {
            const Icon = persona.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{persona.title}</h3>
                <p className="text-sm text-muted-foreground">{persona.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Outcomes Section
const OutcomesSection = () => {
  const outcomes = [
    { icon: TrendingUp, text: 'Stronger performance in value-based contracts' },
    { icon: Heart, text: 'Reduced operational burden and burnout' },
    { icon: FileText, text: 'Clear, defensible reporting for payers and partners' },
    { icon: DollarSign, text: 'Scalable growth without selling to PE or health systems' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            From care delivery to contract performance
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {outcomes.map((outcome, idx) => {
            const Icon = outcome.icon
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{outcome.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Trust Strip
const TrustStrip = () => {
  return (
    <section className="py-12 bg-slate-50 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span>HIPAA-ready</span>
          </div>
          <span className="hidden md:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Secure by design</span>
          </div>
          <span className="hidden md:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <Plug className="w-5 h-5 text-primary" />
            <span>Built for healthcare data interoperability</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Make independent primary care value-based ready
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Turn clinical and claims data into actionable intelligence that supports value-based success.
        </p>
        <CTAButton
          link="/contact"
          text="Talk to Health Compiler"
          variant="secondary"
          iconSuffix={<ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />}
        />
      </div>
    </section>
  )
}

// Main Page Component
const IndependentPrimaryCare = () => {
  return (
    <Layout>
      <Helmet>
        <title>Independent Primary Care for Value-Based Care | Health Compiler</title>
        <meta
          name="description"
          content="Health Compiler helps independent primary care practices succeed in shared savings and risk-based contracts with actionable healthcare analytics and intelligence."
        />
      </Helmet>

      <HeroSection />
      <LowerCostSection />
      <EarlierVisibilitySection />
      <LessDisruptionSection />
      <CollaborationSection />
      <EHRCompatibilitySection />
      <GrowthSupportSection />
      <RealitySection />
      <SolutionSection />
      <IntegrationSection />
      <DashboardSection />
      <PersonaSection />
      <OutcomesSection />
      <TrustStrip />
      <CTASection />
    </Layout>
  )
}

export default IndependentPrimaryCare
