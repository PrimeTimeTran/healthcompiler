import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

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
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <p className="text-primary font-medium mb-4">News & Events</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            News & Events
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {featuredNews.isInternal ? (
            <Link to={featuredNews.link} className="block max-w-4xl mx-auto">
              <div className="bg-pink-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-auto object-cover" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-6 hover:text-primary transition-colors">
                {featuredNews.title}
              </h2>
              <span className="inline-block mt-4 text-primary font-medium hover:underline">Read Full News →</span>
            </Link>
          ) : (
            <a href={featuredNews.link} target="_blank" rel="noopener noreferrer" className="block max-w-4xl mx-auto">
              <div className="bg-pink-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-auto object-cover" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-6 hover:text-primary transition-colors">
                {featuredNews.title}
              </h2>
              <span className="inline-block mt-4 text-primary font-medium hover:underline">Read Full News →</span>
            </a>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsEvents.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                {item.isInternal ? (
                  <Link to={item.link}><img src={item.image} alt={item.title} className="w-full h-48 object-cover" /></Link>
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.title} className="w-full h-48 object-cover" /></a>
                )}
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                    item.type === 'event' ? 'bg-blue-100 text-blue-700' :
                    item.type === 'webinar' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {item.type === 'event' ? 'Event' : item.type === 'webinar' ? 'Webinar' : 'News'}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                  {item.description && <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.description}</p>}
                  {item.isInternal ? (
                    <Link to={item.link} className="text-primary font-medium hover:underline">Learn More →</Link>
                  ) : (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Learn More →</a>
                  )}
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
