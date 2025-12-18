import { Layout } from '@/components/layout/Layout';
import { EmployerAnalyticsHero } from '@/components/employer-analytics/EmployerAnalyticsHero';
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
      {/* Section 1 - Hero */}
      <EmployerAnalyticsHero />

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