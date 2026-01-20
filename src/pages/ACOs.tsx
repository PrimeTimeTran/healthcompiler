import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  ArrowRight,
  Users,
  Layers,
  Target,
  FileText,
  Database,
  Activity,
  Brain,
  TrendingUp,
  Shield,
  CheckCircle,
  Plug,
  BarChart3,
  Heart,
  AlertTriangle,
  ClipboardList,
} from 'lucide-react'
import { CTAButton, GridSection } from '@/components/ui'
import ACOsRegistriesViz from '@/components/hero-visualizations/ACOsRegistriesViz'

// Hero Section
const HeroSection = () => {
  return (
    <GridSection>
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Intelligence Infrastructure for{' '}
              <span className="text-primary">ACOs & Registries</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Health Compiler unifies clinical, claims, and quality data into a single intelligence layer—powering performance, reporting, and outcomes across accountable care organizations and registry programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton link="/contact" text="Request a Demo" suffixIconDefault />
              <Button size="lg" variant="outline" asChild>
                <Link to="/platform">See the Platform</Link>
              </Button>
            </div>
          </div>

          <ACOsRegistriesViz />
        </div>
      </div>
    </GridSection>
  )
}

// ACO Section
const ACOSection = () => {
  const capabilities = [
    {
      icon: Layers,
      title: 'Longitudinal Records',
      description: 'Longitudinal member and population records',
    },
    {
      icon: Activity,
      title: 'Attribution Analytics',
      description: 'Attribution, utilization, and cost analytics',
    },
    {
      icon: Target,
      title: 'Quality Measures',
      description: 'Quality measures, HEDIS, MIPS, and care gaps',
    },
    {
      icon: FileText,
      title: 'ACO Reporting',
      description: 'ACO- and CMS-ready reporting',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Built for accountable care performance
          </h2>
          <p className="text-lg text-muted-foreground">
            ACOs operate at the intersection of quality, cost, and coordination. Health Compiler provides the data foundation and intelligence needed to track performance, surface risk, and deliver defensible results across MSSP, REACH, and commercial ACO models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Registry Section
const RegistrySection = () => {
  const capabilities = [
    {
      icon: Database,
      title: 'Multi-Source Ingestion',
      description: 'Multi-source data ingestion (EHRs, labs, claims)',
    },
    {
      icon: Users,
      title: 'Cohort Tracking',
      description: 'Condition and cohort-level tracking',
    },
    {
      icon: TrendingUp,
      title: 'Outcome Measurement',
      description: 'Longitudinal outcome measurement',
    },
    {
      icon: ClipboardList,
      title: 'Clean Exports',
      description: 'Clean exports and reporting for partners and agencies',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Powering registry-driven insight and reporting
          </h2>
          <p className="text-lg text-muted-foreground">
            Registries play a critical role in measuring outcomes, tracking disease burden, and supporting value-based programs. Health Compiler enables registries to aggregate, normalize, and analyze data across sources—without building custom infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border/50 bg-white hover:shadow-xl hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Shared Platform Section
const SharedPlatformSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              A shared intelligence layer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether supporting accountable care performance or population-level registries, Health Compiler acts as the neutral data activation layer—connecting fragmented systems into decision-grade intelligence.
            </p>
          </div>

          {/* Split Visual */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* ACO Side */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                ACO Performance
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Quality Score</span>
                    <span className="text-sm font-bold text-foreground">94%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Cost Savings</span>
                    <span className="text-sm font-bold text-green-600">+$2.1M</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Care Gaps Closed</span>
                    <span className="text-sm font-bold text-foreground">847</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registry Side */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20 p-8">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-accent" />
                Registry Outcomes
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Active Cohorts</span>
                    <span className="text-sm font-bold text-foreground">12</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-2 flex-1 bg-accent/60 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Patients Tracked</span>
                    <span className="text-sm font-bold text-foreground">8,421</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[84%] bg-accent rounded-full" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Outcome Reports</span>
                    <span className="text-sm font-bold text-foreground">156</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shared Foundation */}
          <div className="mt-8 bg-slate-50 rounded-2xl border border-border p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Database className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Unified Data Foundation</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Clinical, claims, and quality data normalized and connected
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// AI Section
const AISection = () => {
  const examples = [
    { icon: AlertTriangle, label: 'Emerging risk clusters', color: 'text-amber-500' },
    { icon: Target, label: 'Quality measure changes', color: 'text-primary' },
    { icon: Activity, label: 'Utilization shifts', color: 'text-blue-500' },
    { icon: TrendingUp, label: 'Registry trend deviations', color: 'text-accent' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              AI that surfaces what matters
            </h2>
            <p className="text-lg text-muted-foreground">
              Health Compiler applies AI to summarize population trends, highlight meaningful changes, and surface risks and gaps—helping both ACO operators and registry teams focus on action, not data wrangling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {examples.map((example, idx) => {
              const Icon = example.icon
              return (
                <div
                  key={idx}
                  className="group p-5 rounded-xl border border-border/50 bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-slate-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${example.color}`} />
                  </div>
                  <p className="text-sm font-medium text-foreground">{example.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Reporting Section
const ReportingSection = () => {
  const reportTypes = [
    { icon: FileText, title: 'CMS & ACO performance reports' },
    { icon: BarChart3, title: 'Quality and outcome summaries' },
    { icon: ClipboardList, title: 'Registry exports and submissions' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Reporting that stands up to scrutiny
            </h2>
            <p className="text-lg text-muted-foreground">
              Generate clean, defensible reports aligned to CMS, payer, and public health requirements—built to support audits, reviews, and stakeholder communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reportTypes.map((report, idx) => {
              const Icon = report.icon
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{report.title}</p>
                </div>
              )
            })}
          </div>
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
            <span>Secure data handling</span>
          </div>
          <span className="hidden md:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <Plug className="w-5 h-5 text-primary" />
            <span>Interoperable by design</span>
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
          Power accountable care and registry insight from one platform
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Unify clinical, claims, and quality data into decision-grade intelligence for ACOs and registries.
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

// Main Page
const ACOs = () => {
  return (
    <Layout>
      <Helmet>
        <title>ACOs & Registries Intelligence Platform | Health Compiler</title>
        <meta
          name="description"
          content="Health Compiler unifies clinical, claims, and quality data into a single intelligence layer—powering performance, reporting, and outcomes for ACOs and registry programs."
        />
      </Helmet>

      <HeroSection />
      <ACOSection />
      <RegistrySection />
      <SharedPlatformSection />
      <AISection />
      <ReportingSection />
      <TrustStrip />
      <CTASection />
    </Layout>
  )
}

export default ACOs
