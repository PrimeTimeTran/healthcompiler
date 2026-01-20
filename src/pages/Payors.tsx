import { Layout } from '@/components/layout/Layout'
import { CTAButton, GridSection } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  Database, 
  AlertTriangle, 
  BarChart3, 
  FileText,
  Brain,
  TrendingUp,
  AlertCircle,
  Users,
  Shield,
  Network,
  Target,
  Activity,
  PieChart
} from 'lucide-react'
import HealthPlansPayersViz from '@/components/hero-visualizations/HealthPlansPayersViz'

const Payors = () => {
  const challenges = [
    { 
      icon: Database, 
      title: 'Disconnected Data', 
      description: 'Claims data disconnected from clinical reality' 
    },
    { 
      icon: Network, 
      title: 'Limited Visibility', 
      description: 'Limited visibility into provider performance' 
    },
    { 
      icon: FileText, 
      title: 'Reporting Pressure', 
      description: 'Reporting pressure across CMS and state programs' 
    },
    { 
      icon: AlertTriangle, 
      title: 'Brittle Pipelines', 
      description: 'Manual and brittle analytics pipelines' 
    },
  ]

  const capabilities = [
    {
      icon: Database,
      title: 'Unified Data Foundation',
      description: 'Normalize claims, clinical, pharmacy, lab, eligibility, and quality data into a single longitudinal view.',
    },
    {
      icon: AlertCircle,
      title: 'Risk & Utilization Intelligence',
      description: 'Identify high-risk members, cost drivers, utilization patterns, and emerging trends across populations.',
    },
    {
      icon: BarChart3,
      title: 'Quality & Performance Analytics',
      description: 'Support HEDIS, Stars, MIPS, and contract performance with clean, traceable metrics.',
    },
    {
      icon: FileText,
      title: 'Plan-Ready Reporting',
      description: 'Generate audit-safe, defensible reports for internal teams, regulators, and partners.',
    },
  ]

  const aiInsights = [
    { icon: AlertCircle, label: 'Risk escalation signals' },
    { icon: TrendingUp, label: 'Quality measure drift' },
    { icon: Users, label: 'Provider performance outliers' },
    { icon: Activity, label: 'Utilization anomalies' },
  ]

  const networkMetrics = [
    { label: 'Performance by provider organization', icon: PieChart },
    { label: 'Quality vs cost trends', icon: TrendingUp },
    { label: 'Attribution and leakage analysis', icon: Target },
  ]

  const useCases = [
    'Contract performance tracking',
    'Shared savings analysis',
    'Risk pool visibility',
    'Partner reporting',
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <GridSection>
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Value-Based Care</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
                Intelligence Infrastructure for Health Plans & Payers
              </h1>

              <p className="text-xl text-muted-foreground">
                Health Compiler unifies claims, clinical, pharmacy, and quality data into a single intelligence layer—supporting risk management, quality performance, and value-based operations across commercial, Medicare Advantage, and Medicaid plans.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/capabilities">See the Platform</Link>
                </Button>
              </div>
            </div>
            <HealthPlansPayersViz />
          </div>
        </div>
      </GridSection>

      {/* Section 1 - The Payer Operating Reality */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for payer-scale complexity
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern health plans operate across fragmented data sources, diverse provider networks, and increasingly complex value-based contracts. Health Compiler provides the intelligence layer needed to turn this complexity into clarity and action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 2 - Core Capabilities */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A unified intelligence layer for payer operations
            </h2>
            <p className="text-lg text-muted-foreground">
              Health Compiler acts as a neutral data activation layer—connecting plan data with provider and clinical signals to drive insight, accountability, and measurable performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 3 - AI-Powered Insight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Brain className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">AI-Powered</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                AI that supports payer decisions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Health Compiler applies AI to summarize population trends, detect material changes, and surface risks and gaps—helping payer teams act faster with confidence.
              </p>

              <div className="space-y-4">
                {aiInsights.map((insight, index) => {
                  const Icon = insight.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{insight.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 border border-border">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">Population Insight</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">Alert</span>
                  </div>
                  <p className="text-sm text-foreground mb-2">
                    <span className="font-semibold">Rising risk cluster detected</span> in diabetic population segment
                  </p>
                  <p className="text-xs text-muted-foreground">
                    12% increase in A1C values across 847 members over 90 days
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">Quality Signal</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">Positive</span>
                  </div>
                  <p className="text-sm text-foreground mb-2">
                    <span className="font-semibold">HEDIS measure improvement</span> detected
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Colorectal screening rate up 8.2% QoQ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Network & Partner Visibility */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              See performance across your network
            </h2>
            <p className="text-lg text-muted-foreground">
              Health Compiler provides transparency across ACOs, IPAs, and independent provider groups—enabling payers to understand how care is delivered and where performance varies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {networkMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{metric.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 5 - Value-Based Contract Enablement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for value-based care at scale
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From shared savings to downside risk and capitation, Health Compiler supports the analytics and reporting needed to manage value-based contracts across populations and partners.
              </p>

              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-5 border border-border">
                    <p className="text-2xl font-bold text-foreground mb-1">$4.2M</p>
                    <p className="text-xs text-muted-foreground">Shared Savings</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-border">
                    <p className="text-2xl font-bold text-foreground mb-1">142K</p>
                    <p className="text-xs text-muted-foreground">Attributed Lives</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-border">
                    <p className="text-2xl font-bold text-foreground mb-1">4.1</p>
                    <p className="text-xs text-muted-foreground">Stars Rating</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-border">
                    <p className="text-2xl font-bold text-foreground mb-1">91%</p>
                    <p className="text-xs text-muted-foreground">Quality Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Trust & Compliance */}
      <section className="py-12 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Built for healthcare trust
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Health Compiler is designed for secure, compliant, and interoperable healthcare data exchange—meeting payer-grade governance and scale requirements.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>HIPAA-ready</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Secure by design</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-primary" />
              <span>Interoperable across ecosystems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Turn payer data into value-based intelligence
            </h2>
            <CTAButton
              link="/contact"
              text="Talk to Health Compiler"
              suffixIconDefault
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Payors
