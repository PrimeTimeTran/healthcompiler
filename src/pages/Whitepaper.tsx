import { Layout } from "@/components/layout/Layout";

const whitepapers = [
  {
    title: "How to DPC?",
    description: "A guide for initiating and expanding your Direct primary care practice.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/How+to+DPC+whitepaper+thumbnail-1920w.png",
    downloadLink: "https://www.healthcompiler.com/contact-us---whiteletter"
  },
  {
    title: "Employer Gains with DPC",
    description: "Cost Savings and Improved Care Outcomes: How Employers Benefit from DPC-Integrated Self-Funded Health Plans",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Employer+Whitepaper-1920w.png",
    downloadLink: "https://hubs.ly/Q03lmNTl0"
  }
];

const Whitepaper = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium mb-4">Whitepaper</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Whitepaper
          </h1>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whitepapers.map((whitepaper, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:w-1/2 bg-pink-100">
                  <img
                    src={whitepaper.image}
                    alt={whitepaper.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {whitepaper.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {whitepaper.description}
                  </p>
                  <a
                    href={whitepaper.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors w-fit"
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                      />
                    </svg>
                    Download Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Whitepaper;
