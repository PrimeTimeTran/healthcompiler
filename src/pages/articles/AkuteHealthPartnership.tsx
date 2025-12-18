import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { Link } from "react-router-dom";

const AkuteHealthPartnership = () => {
  return (
    <ArticleLayout
      title="Akute Health + Health Compiler: Turning Simplicity into Insight"
      heroImage="https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/News+article+image+%283%29-1920w.png"
    >
      <p className="text-lg text-muted-foreground mb-8">
        Akute Health is known for its refreshingly simple, physician-first EHR. With no forced data entry fields, clean separation between clinical flows, and an intuitive interface, it's a favorite among DPC physicians who prioritize care over clicks. But with simplicity comes a challenge: how do you extract deep insight from a system that keeps documentation light by design?
      </p>

      <p className="mb-6">That's where Health Compiler comes in.</p>

      <p className="mb-6">
        Our platform now connects directly with Akute Health, making it easy to access powerful analytics, whether you're tracking trends across your patient panel or delivering clear reports to employer partners. From member-friendly dashboards to contract-ready insights, everything runs quietly in the background, without interrupting the simple, flexible workflows Akute is known for.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">What This Integration Delivers</h2>
      
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Effortless Data, Meaningful Insight</h3>
      <p className="mb-6">
        While Akute keeps things lean, Health Compiler pulls both structured and unstructured data via API, including notes, tasks, medications, and more. Every note, list, or observation can now surface real insight that drives smarter care, stronger reporting, and better decision-making at both the patient and population level.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Plug-and-Play Simplicity</h3>
      <p className="mb-6">
        Akute Health is built for ease, and Health Compiler makes it smarter. With this integration, clinicians can document however they prefer. Structured fields, free-text notes, everything gets analyzed. Health Compiler works quietly in the background, turning everyday documentation into clear, actionable insights. No workflow changes. No extra clicks. You focus on care. We surface the data that proves your impact.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">More Signal, Less Noise</h3>
      <p className="mb-6">
        Even in data-light environments, Health Compiler delivers the metrics that matter most. From cost-of-care visuals and engagement summaries to risk trends and patient-level outcomes, our tools give practices the clarity they need to scale and the credibility employers expect, without adding reporting tasks to the practitioner's day. It's clean, relevant data that helps you prove value with confidence.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Why This Matters for Direct Care Practices</h2>
      
      <p className="mb-6">
        For employer-facing DPC practices, this partnership fills a critical gap. While Akute makes day-to-day documentation frictionless, Health Compiler ensures clinics can still surface the hard data that employer contracts often require, without altering their workflow.
      </p>

      <p className="mb-6">Together, we're helping clinics remain agile, impactful, and ready for growth.</p>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Built for the Direct Care Movement</h2>
      
      <p className="mb-6">
        Health Compiler and Akute Health share a vision: to equip providers with the tools they need to thrive, without burdening them with complexity. This integration is part of our ongoing commitment to support the growing DPC ecosystem, one smart connection at a time.
      </p>

      <p className="mb-6">
        Interested in what this could look like for your practice?{" "}
        <Link to="/contact" className="text-primary hover:underline font-medium">
          Let's talk →
        </Link>
      </p>
    </ArticleLayout>
  );
};

export default AkuteHealthPartnership;
