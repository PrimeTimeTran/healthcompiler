import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ArticleLayoutProps {
  title: string;
  heroImage: string;
  children: React.ReactNode;
}

export const ArticleLayout = ({ title, heroImage, children }: ArticleLayoutProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <Link 
            to="/resources/news-events" 
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News & Events
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl">
            {title}
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            {children}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today and let our experts help you!
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};
