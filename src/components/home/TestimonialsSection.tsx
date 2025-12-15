import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Health Compiler's modern technology makes data integration possible — something legacy systems, built on 20-30+ year-old infrastructure, simply can't deliver.",
    name: "Dr. Sarah Mitchell",
    title: "Medical Director, Premier DPC Network",
    initials: "PDN",
  },
  {
    quote: "Health Compiler has exceeded expectations in every way for us. From implementation to ongoing support, they are making a statement as to why they belong as a leader in the market.",
    name: "Michael Chen",
    title: "VP Operations, Midwest Health Partners",
    initials: "MHP",
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
          Our testimonials
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
                
                {/* Company Logo Placeholder */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{testimonial.initials}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
