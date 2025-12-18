import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredNews = {
  title: "Health Compiler and Hint Partner to Deliver Data-Driven Proof of Direct Primary Care's Impact on Employers, Practices, and Patients",
  image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/News+article+image+%284%29-1920w.png",
  link: "/resources/news-events/hint-summit-rosettafest-2025",
  isInternal: true
};

const newsEvents = [
  {
    title: "Health Compiler Is Attending the DPC Summit 2025",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/News+article+image-1920w.png",
    link: "/resources/news-events/dpc-summit-2025",
    type: "event",
    isInternal: true
  },
  {
    title: "Akute Health + Health Compiler: Turning Simplicity into Insight",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/News+article+image+%283%29-1920w.png",
    link: "/resources/news-events/akute-health-partnership",
    type: "webinar",
    isInternal: true
  },
  {
    title: "Harnessing Data for a Free Market Revolution!",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Harnessing+Data+for+a+Free+Market+Revolution%21-1920w.png",
    link: "/resources/news-events/harnessing-data-free-market",
    type: "news",
    isInternal: true
  },
  {
    title: "Boost Your DPC with Data, Employer Strategies & Chronic Care",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/image+%283%29-1920w.png",
    link: "https://us06web.zoom.us/webinar/register/WN_sCLcOTRwQx2wBR0CEMlQqA#/registration",
    type: "webinar"
  },
  {
    title: "Health Compiler and Hint Partner to Deliver Data-Driven Proof of Direct Primary Care's Impact on Employers, Practices, and Patients",
    description: "Health Compiler and Hint Health have announced a strategic collaboration aimed at empowering Direct Primary Care (DPC) practices with advanced analytics....",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Health+Compiler+-+hint+%281%29-1920w.jpg",
    link: "/resources/news-events/hint-partnership",
    type: "news",
    isInternal: true
  },
  {
    title: "Health Compiler is excited to be attending FMMA 2025 Annual Conference",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/FMMA+2025-1920w.png",
    link: "/resources/news-events/fmma-membership",
    type: "event",
    isInternal: true
  },
  {
    title: "Elation and HealthCompiler join forces to drive value in the primary care market",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HC+x+Elation-815eabd4-1920w.png",
    link: "/resources/news-events/elation-partnership",
    type: "news",
    isInternal: true
  },
  {
    title: "Health Compiler expands it's analytics solution with NEW integrations for practice growth",
    description: "Health Compiler is proud to announce the launch of a marketing dashboard as part of its advanced analytics platform specifically designed for Practice growth...",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Health+Compiler+expands+it-s+analytics+solution+with+several+integration+for+practice+growth-1920w.png",
    link: "/resources/news-events/analytics-expansion",
    type: "news",
    isInternal: true
  },
  {
    title: "We're Sponsoring HINT SUMMIT 2024, Sept. 27-28, 2024/ Denver, Colorado",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Hint+Summit+2024-1920w.png",
    link: "https://www.pr.com/press-release/915089",
    type: "event"
  },
  {
    title: "Healthcompiler is attending RosettaFest, Sept. 11-14, 2024",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/rosetta+fest-1920w.webp",
    link: "/resources/news-events/rosettafest-2024",
    type: "event",
    isInternal: true
  },
  {
    title: "Webinar: Unveiling the value of DPC for Self Funded Plans",
    description: "Use data to unveil and enhance the value of DPC. See a demo and participate in a discussion on how Direct Primary Care (DPC) models are helping employers achieve more cost-effective healthcare solutions.",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Event+-+Thumb-23a7b5b1-1920w.png",
    link: "/contact",
    type: "webinar",
    isInternal: true
  },
  {
    title: "Direct Primary Care Nuts & Bolts to 2.0 Conference",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/DPC-League-Splash-v3-1920w.jpg",
    link: "https://www.dpcconference.com/",
    type: "event"
  },
  {
    title: "Healthcompiler to Attend HIMSS 2024: Empowering Healthcare Innovation",
    image: "https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/HIMSS2024-1920w.png",
    link: "https://www.himss.org/news/creating-tomorrows-health-2024-himss-global-health-conference-exhibition",
    type: "event"
  },
];

const NewsEvents = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              News & <span className="text-gradient italic">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest news, events, and webinars from Health Compiler
            </p>
          </div>

          {/* Featured News */}
          <div className="max-w-4xl mx-auto mb-16">
            {featuredNews.isInternal ? (
              <Link to={featuredNews.link} className="block group">
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-muted/30 relative">
                    <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-border/50 z-10"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-border/50 z-10"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-border/50 z-10"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-border/50 z-10"></div>
                    <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-auto object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredNews.title}
                    </h2>
                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                      Read Full News
                    </Button>
                  </div>
                </div>
              </Link>
            ) : (
              <a href={featuredNews.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-muted/30 relative">
                    <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-border/50 z-10"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-border/50 z-10"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-border/50 z-10"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-border/50 z-10"></div>
                    <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-auto object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredNews.title}
                    </h2>
                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                      Read Full News
                    </Button>
                  </div>
                </div>
              </a>
            )}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsEvents.map((item, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image Area */}
                <div className="bg-muted/30 relative min-h-[180px] flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-border/50 z-10"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-border/50 z-10"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-border/50 z-10"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-border/50 z-10"></div>
                  
                  {item.isInternal ? (
                    <Link to={item.link} className="w-full h-full">
                      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    </Link>
                  ) : (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 w-fit ${
                    item.type === 'event' ? 'bg-blue-100 text-blue-700' :
                    item.type === 'webinar' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {item.type === 'event' ? 'Event' : item.type === 'webinar' ? 'Webinar' : 'News'}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  )}
                  
                  <div className="mt-auto">
                    {item.isInternal ? (
                      <Link to={item.link}>
                        <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                          Learn more
                        </Button>
                      </Link>
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                          Learn more
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsEvents;
