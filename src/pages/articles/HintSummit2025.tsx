import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { Link } from "react-router-dom";

const HintSummit2025 = () => {
  return (
    <ArticleLayout
      title="Health Compiler to Attend Hint Summit @ RosettaFest 2025 — Founder Mehul Agarwal to Deliver Key Session on Employers in Healthcare"
      heroImage="https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/News+article+image+%284%29-1920w.png"
    >
      <p className="text-lg text-muted-foreground mb-8">
        Health Compiler is pleased to announce that we will attend <strong>Hint Summit @ RosettaFest 2025</strong>, a gathering of direct care leaders, employers, brokers, TPAs, and benefits innovators. The event brings practitioners and decision makers together to share practical strategies for delivering better value in primary care.
      </p>

      <p className="mb-6">
        The conference takes place at the Colorado Convention Center in Denver, Colorado, from August 24 to 27, 2025. As an exhibitor at Booth 229, Health Compiler will demonstrate how our AI-powered analytics platform helps direct care practices translate clinical and operational data into actionable insights. Our focus is simple: help practices measure engagement, track patient outcomes, and make their impact visible to employer partners without adding administrative burden.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Founder Mehul Agarwal to Speak on Employer Engagement in Healthcare</h2>
      
      <p className="mb-6">
        This year's program features a session with <strong>Mehul Agarwal, Founder of Health Compiler</strong>, and <strong>David Pinkert, Chief Commercial Officer and President at Hint Health</strong>.
      </p>

      <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
        <p className="font-semibold text-foreground mb-2">Session Title:</p>
        <p className="text-lg font-medium text-primary mb-4">Empowering Employers through Fiduciary Alignment with DPC</p>
        
        <p className="font-semibold text-foreground mb-2">Description:</p>
        <p className="text-muted-foreground">
          Join Mehul and David for a conversation about how employers are rethinking their role in health benefits and how Direct Primary Care can support those goals. The discussion will cover how employers are approaching responsibility for employee health, the role of data in decision making, and the steps DPC practices can take to effectively engage and collaborate with employer groups.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Why This Event Matters</h2>
      
      <p className="mb-6">
        Hint Summit @ RosettaFest 2025 is a working conference where ideas meet implementation. For DPC practices it is an opportunity to explore scalable approaches, strengthen employer relationships, and see solutions that make clinical impact measurable. For employers, brokers, and TPAs it is a place to evaluate models that deliver both quality and clarity. The event is timely for any organization focused on improving primary care outcomes and aligning benefits with results.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Let's Connect in Denver</h2>
      
      <p className="mb-6">
        Visit Health Compiler at <strong>Booth 229</strong> to see a short demo of our analytics solution. We make it easy for practices to surface the metrics that matter, iterate on care, and tell a clear value story to employer partners. If you'd like to connect ahead of the summit, feel free to schedule a <Link to="/contact" className="text-primary hover:underline font-medium">brief call</Link> at a time that works best for you.
      </p>
    </ArticleLayout>
  );
};

export default HintSummit2025;
