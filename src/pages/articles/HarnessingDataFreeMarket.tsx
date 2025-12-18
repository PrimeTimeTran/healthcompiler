import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { Link } from "react-router-dom";

const HarnessingDataFreeMarket = () => {
  return (
    <ArticleLayout
      title="Harnessing Data for a Free Market Revolution!"
      heroImage="https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Harnessing+Data+for+a+Free+Market+Revolution%21-1920w.png"
    >
      <p className="text-lg text-muted-foreground mb-8">
        Join us for an insightful webinar on how data-driven insights can transform healthcare decision-making for Direct Primary Care providers, self-funded employers, and benefits advisors. In today's landscape, leveraging real-time analytics is key to optimizing patient care, demonstrating cost savings, and improving benefit plan efficiency.
      </p>

      <p className="mb-6">In this session, we'll explore how unlocking data from EHRs, claims, and provider networks can:</p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Enhance patient engagement and utilization tracking</li>
        <li>Identify care gaps to improve access and outcomes</li>
        <li>Provide claims-based cost and risk analysis</li>
        <li>Enable better coordination between providers, employers, and advisors</li>
      </ul>

      <p className="mb-6">
        Whether you are looking to streamline reporting, showcase ROI, or make data-backed decisions, this webinar will provide actionable insights tailored to your role.
      </p>

      <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
        <p className="font-semibold text-foreground mb-2">Event Details:</p>
        <p className="text-muted-foreground"><strong>Date:</strong> Tuesday, Apr 1, 12:30 PM EST</p>
      </div>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">About Health Compiler</h2>
      
      <p className="mb-6">
        Health Compiler (<a href="https://www.healthcompiler.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.healthcompiler.com</a>) specializes in providing a suite of tailored digital solutions at the intersection of analytics and marketing solution, specifically designed to elevate Direct Primary Care (DPC) practices, employers and benefit advisors. Our mission is to empower DPC providers with the necessary tools to enhance their digital presence, streamline operations, and build stronger connections with their patients.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">About FMMA</h2>
      
      <p className="mb-6">
        The free market movement (<a href="https://fmma.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://fmma.org/</a>) in healthcare is gaining steam. This is because of providers, patients, and self-funded employers, who believe that changing the way we purchase healthcare services is necessary, and seeking out value driven healthcare providers is important.
      </p>

      <p className="mb-6">
        Matching a willing buyer with a willing seller of valuable healthcare services is the goal of everyone involved in this movement. We help identify patients willing to pay cash, doctors willing to list their prices, businesses attempting to provide affordable quality insurance, and providers/services/and patient advocates that are helping make everything work.
      </p>
    </ArticleLayout>
  );
};

export default HarnessingDataFreeMarket;
