import { Layout } from '@/components/layout/Layout';
import { HealthOutcomesHero } from '@/components/health-outcomes/HealthOutcomesHero';
import { MissedBetweenVisits } from '@/components/health-outcomes/MissedBetweenVisits';
import { IoTWearablesSection } from '@/components/health-outcomes/IoTWearablesSection';
import { HowWeImprove } from '@/components/health-outcomes/HowWeImprove';
import { PopulationHealthFeatures } from '@/components/health-outcomes/PopulationHealthFeatures';
import { WhyProactiveCare } from '@/components/health-outcomes/WhyProactiveCare';
import { BuiltForWorkflows } from '@/components/health-outcomes/BuiltForWorkflows';
import { HealthOutcomesCTA } from '@/components/health-outcomes/HealthOutcomesCTA';
import { Helmet } from 'react-helmet';

const HealthOutcomes = () => {
  return (
    <Layout>
      <Helmet>
        <title>Health Outcomes Analytics | Wearables + IoT + Claims | Health Compiler</title>
        <meta 
          name="description" 
          content="Unify wearable, RPM, and clinical data to track outcomes continuously—member to cohort to employer dashboards with actionable insights." 
        />
        <meta 
          name="keywords" 
          content="wearable health data analytics, remote patient monitoring analytics, IoT healthcare outcomes, outcomes reporting for employers, population health outcomes dashboards, health outcomes, proactive care, chronic condition monitoring" 
        />
        <link rel="canonical" href="https://www.healthcompiler.com/solutions/health-outcomes" />
      </Helmet>

      {/* Section 1 - Hero */}
      <HealthOutcomesHero />

      {/* Section 2 - What Gets Missed */}
      <MissedBetweenVisits />

      {/* Section 3 - IoT + Wearables Integration */}
      <IoTWearablesSection />

      {/* Section 3 - How We Improve */}
      <HowWeImprove />

      {/* Section 4 - Population Health Features */}
      <PopulationHealthFeatures />

      {/* Section 5 - Why Proactive Care Matters */}
      <WhyProactiveCare />

      {/* Section 6 - Built for Workflows */}
      <BuiltForWorkflows />

      {/* Section 7 - CTA */}
      <HealthOutcomesCTA />
    </Layout>
  );
};

export default HealthOutcomes;
