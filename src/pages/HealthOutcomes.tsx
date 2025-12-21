import { Layout } from '@/components/layout/Layout';
import { HealthOutcomesHero } from '@/components/health-outcomes/HealthOutcomesHero';
import { MissedBetweenVisits } from '@/components/health-outcomes/MissedBetweenVisits';
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
        <title>Health Outcomes - Proactive Population Health Management | Health Compiler</title>
        <meta 
          name="description" 
          content="Monitor patient health between visits, surface population health risk early, and take action before outcomes decline. Enable proactive care with Health Compiler." 
        />
        <meta 
          name="keywords" 
          content="population health, health outcomes, proactive care, preventive care gaps, chronic condition monitoring, medication adherence, population health management, early intervention" 
        />
        <link rel="canonical" href="https://www.healthcompiler.com/solutions/health-outcomes" />
      </Helmet>

      {/* Section 1 - Hero */}
      <HealthOutcomesHero />

      {/* Section 2 - What Gets Missed */}
      <MissedBetweenVisits />

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
