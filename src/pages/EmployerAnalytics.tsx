import { Layout } from '@/components/layout/Layout';
import { EmployerCoreOrb } from '@/components/employer-analytics/EmployerCoreOrb';
import { HealthBenefitsLayers } from '@/components/employer-analytics/HealthBenefitsLayers';
import { WorkforceHealthSphere } from '@/components/employer-analytics/WorkforceHealthSphere';
import { HumanCapitalTriangle } from '@/components/employer-analytics/HumanCapitalTriangle';
import { FinancialRiskTimeline } from '@/components/employer-analytics/FinancialRiskTimeline';
import { FiduciaryShield } from '@/components/employer-analytics/FiduciaryShield';
import { DataFoundationPipeline } from '@/components/employer-analytics/DataFoundationPipeline';
import { EmployerAnalyticsCTA } from '@/components/employer-analytics/EmployerAnalyticsCTA';

const EmployerAnalytics = () => {
  return (
    <Layout>
      {/* Section 1 - Hero with 3D Orb */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Employer Intelligence,{' '}
                <span className="text-gradient">Unified</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                A single analytics layer for health benefits, workforce health, and human capital performance.
              </h2>
              <p className="text-lg text-muted-foreground/80 max-w-lg">
                Unifying claims, clinical data, benefits, and people data into actionable employer insight.
              </p>
            </div>

            {/* Right - 3D Visualization */}
            <div className="relative">
              <EmployerCoreOrb />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Health Benefits Intelligence */}
      <HealthBenefitsLayers />

      {/* Section 3 - Workforce Health */}
      <WorkforceHealthSphere />

      {/* Section 4 - Human Capital Intelligence */}
      <HumanCapitalTriangle />

      {/* Section 5 - Financial Risk & Forecasting */}
      <FinancialRiskTimeline />

      {/* Section 6 - Fiduciary & Compliance */}
      <FiduciaryShield />

      {/* Section 7 - Data Foundation */}
      <DataFoundationPipeline />

      {/* Section 8 - CTA */}
      <EmployerAnalyticsCTA />
    </Layout>
  );
};

export default EmployerAnalytics;