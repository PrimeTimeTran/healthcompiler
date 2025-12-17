import { Layout } from "@/components/layout/Layout";

const WhoWeServe = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Good things take time
          </h1>
          <p className="text-lg text-muted-foreground">
            We're working on something amazing. Check back soon!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default WhoWeServe;
