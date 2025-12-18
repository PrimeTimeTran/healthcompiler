import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { Link } from "react-router-dom";

const AnalyticsExpansion = () => {
  return (
    <ArticleLayout
      title="Health Compiler expands it's analytics solution with several integrations for practice growth"
      heroImage="https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Health+Compiler+expands+it-s+analytics+solution+with+several+integration+for+practice+growth-1920w.png"
    >
      <p className="text-lg text-muted-foreground mb-8">
        Health Compiler is proud to announce the launch of a marketing dashboard as part of its advanced analytics platform specifically designed for <strong>Practice growth</strong>. The dashboard is part of the advanced analytics platform that seamlessly integrates essential tools such as Google Search Console, Google Analytics, and Lemlist, allowing practice owners to know the health of their marketing efforts. Health Compiler offers <strong>Growth solution</strong> known as "<Link to="/solutions/direct-primary-care" className="text-primary hover:underline">HCGrowth</Link>" which helps direct primary care practices to scale their marketing efforts.
      </p>

      <p className="mb-6">
        By consolidating critical metrics into one location, the platform provides healthcare providers with valuable insights into their online presence and patient engagement.
      </p>

      <p className="mb-6">
        The advanced analytics platform known as "<Link to="/solutions/direct-primary-care" className="text-primary hover:underline">HCInsights</Link>" provides a complete view of Engagement and Utilization Analytics, Cost Savings, claims analytics using the raw claims data from TPA's, utilization gaps and beyond. This platform streamlines the aggregation and analysis of essential healthcare metrics, offering clear and actionable insights. It goes beyond mere data collection; it delivers valuable information that showcases the impact of your services on patients, <strong>as stated by Mehul Agarwal, founder of Health Compiler.</strong>
      </p>

      <p className="mb-6">
        Looking forward, Health Compiler is dedicated to expanding the platform's functionality by adding more integrations in the future. This commitment to ongoing development will ensure that healthcare providers can manage their data efficiently, allowing them to focus on delivering high-quality patient care.
      </p>

      <p className="mb-6">
        Security remains a top priority for Health Compiler. The platform complies with HIPAA and SOC 2 standards, ensuring that sensitive patient information is safeguarded while offering robust data analytics.
      </p>

      <p className="mb-6">
        For more information about Health Compiler's analytics platform & its advantages for practices, please visit our website at <Link to="/solutions/direct-primary-care" className="text-primary hover:underline">healthcompiler.com/dpc-growth</Link>
      </p>

      <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Media Contact</h3>
        <p className="text-muted-foreground">
          <strong>Ray Davis</strong><br />
          Growth Marketer<br />
          ray@healthcompiler.com<br />
          +1 (408) 883-7902
        </p>
      </div>
    </ArticleLayout>
  );
};

export default AnalyticsExpansion;
