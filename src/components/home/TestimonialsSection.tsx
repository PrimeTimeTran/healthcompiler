import { Quote } from 'lucide-react';
import brianFretwellImg from '@/assets/testimonial-brian-fretwell.png';
import drKenRictorImg from '@/assets/dr-ken-rictor.png';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials?: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "HealthCompiler has become an indispensable analytics partner. Their platform empowers us to gain deep, real-time insights into patient populations, utilization patterns, and cost drivers. What sets them apart is the clarity and operational utility of their analytics — reports that are not just comprehensive but intuitive and immediately actionable.",
    name: "Brian Fretwell",
    title: "CEO, Direct Primary Care Associates",
    image: brianFretwellImg,
  },
  {
    quote: "Before Health Compiler, compiling these metrics was a manual and time-consuming process. Now, everything is captured automatically, and employers can access a dashboard with these metrics anytime.",
    name: "Dr. Ken Rictor",
    title: "Genovo Health & Scotland Family Medicine",
    image: drKenRictorImg,
  },
  {
    quote: "Self-funded employers should not underestimate the criticality of choosing the right data partner. Integrity and competency matters, which is why we chose Health Compiler.",
    name: "Jennifer Walsh",
    title: "CFO, TechServe Industries",
    initials: "TSI",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          Our <span className="text-gradient">testimonials</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/50 rounded-xl p-8 flex flex-col justify-between min-h-[320px]"
            >
              {/* Quote Icon */}
              <div>
                <Quote className="w-8 h-8 text-accent mb-6 rotate-180" fill="currentColor" />
                
                {/* Quote Text */}
                <p className="text-foreground leading-relaxed text-[15px]">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
                
                {/* Photo or Initials */}
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{testimonial.initials}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
