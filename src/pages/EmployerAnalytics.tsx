import { Layout } from '@/components/layout/Layout';
import { EmployerAnalyticsHero } from '@/components/employer-analytics/EmployerAnalyticsHero';
import { TheProblemSection } from '@/components/employer-analytics/TheProblemSection';
import { HowItWorksSection } from '@/components/employer-analytics/HowItWorksSection';
import { HealthBenefitsLayers } from '@/components/employer-analytics/HealthBenefitsLayers';
import { WorkforceHealthSphere } from '@/components/employer-analytics/WorkforceHealthSphere';
import { HumanCapitalTriangle } from '@/components/employer-analytics/HumanCapitalTriangle';
import { FinancialRiskTimeline } from '@/components/employer-analytics/FinancialRiskTimeline';
import { FiduciaryShield } from '@/components/employer-analytics/FiduciaryShield';
import { DataFoundationPipeline } from '@/components/employer-analytics/DataFoundationPipeline';
import { WhyHealthCompilerSection } from '@/components/employer-analytics/WhyHealthCompilerSection';
import { EmployerAnalyticsCTA } from '@/components/employer-analytics/EmployerAnalyticsCTA';
import { EmployerAnalyticsFAQ } from '@/components/employer-analytics/EmployerAnalyticsFAQ';

const EmployerAnalytics = () => {
  return (
    <Layout>
      <EmployerAnalyticsHero />
      <TheProblemSection />
      <HowItWorksSection />
      <HealthBenefitsLayers />
      <WorkforceHealthSphere />
      <HumanCapitalTriangle />
      <FinancialRiskTimeline />
      <FiduciaryShield />
      <DataFoundationPipeline />
      <WhyHealthCompilerSection />
      <EmployerAnalyticsCTA />
      <EmployerAnalyticsFAQ />
    </Layout>
  );
};

export default EmployerAnalytics;
