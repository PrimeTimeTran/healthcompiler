import { Layout } from '@/components/layout/Layout';
import { SurveysHero } from '@/components/surveys/SurveysHero';
import { WhyFeedbackMissed } from '@/components/surveys/WhyFeedbackMissed';
import { AutomatedSurveys } from '@/components/surveys/AutomatedSurveys';
import { SurveyFeatures } from '@/components/surveys/SurveyFeatures';
import { IntegratedTools } from '@/components/surveys/IntegratedTools';
import { ForwardDeployment } from '@/components/surveys/ForwardDeployment';
import { WhyAutomatedFeedback } from '@/components/surveys/WhyAutomatedFeedback';
import { SurveysCTA } from '@/components/surveys/SurveysCTA';
import { Helmet } from 'react-helmet';

const Surveys = () => {
  return (
    <Layout>
      <Helmet>
        <title>Automated Surveys - NPS, CSAT & Google Reviews | Health Compiler</title>
        <meta 
          name="description" 
          content="Automatically collect NPS, CSAT, and Google reviews integrated into your workflows. Turn customer feedback into actionable insights with Health Compiler." 
        />
        <meta 
          name="keywords" 
          content="NPS surveys, CSAT surveys, automated surveys, feedback automation, Google review automation, customer feedback, patient satisfaction, experience measurement, proactive improvement, workflow-integrated surveys" 
        />
        <link rel="canonical" href="https://www.healthcompiler.com/solutions/surveys" />
      </Helmet>

      {/* Section 1 - Hero */}
      <SurveysHero />

      {/* Section 2 - Why Feedback Gets Missed */}
      <WhyFeedbackMissed />

      {/* Section 3 - Automated Surveys */}
      <AutomatedSurveys />

      {/* Section 4 - Survey Features */}
      <SurveyFeatures />

      {/* Section 5 - Integrated Tools */}
      <IntegratedTools />

      {/* Section 6 - Forward Deployment */}
      <ForwardDeployment />

      {/* Section 7 - Why Automated Feedback */}
      <WhyAutomatedFeedback />

      {/* Section 8 - CTA */}
      <SurveysCTA />
    </Layout>
  );
};

export default Surveys;
