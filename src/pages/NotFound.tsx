import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-20">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Good things take time
          </h1>
          <p className="text-lg text-muted-foreground">
            We're working on something amazing. Check back soon!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
