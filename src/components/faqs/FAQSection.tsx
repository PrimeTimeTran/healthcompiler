import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'
import { Helmet } from 'react-helmet'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  id: string
  title: string
  icon: React.ElementType
  intro: string
  faqs: FAQ[]
  bgClass?: string
}

function FAQJsonLd({ faqs, sectionName }: { faqs: FAQ[]; sectionName: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `${sectionName} — Health Compiler FAQs`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\n/g, ' ').replace(/•/g, '-'),
      },
    })),
  }

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function FAQSection({
  id,
  title,
  icon: IconComponent,
  intro,
  faqs,
  bgClass = 'bg-muted/30',
}: FAQSectionProps) {
  return (
    <section id={id} className={`py-20 ${bgClass}`}>
      <FAQJsonLd faqs={faqs} sectionName={title} />
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
              <IconComponent className='w-6 h-6 text-primary' />
            </div>
            <h2 className='text-3xl font-bold text-foreground'>{title}</h2>
          </div>

          <p className='text-muted-foreground leading-relaxed mb-8'>{intro}</p>

          <div className='bg-card border border-border rounded-2xl overflow-hidden'>
            <Accordion type='single' collapsible className='w-full'>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className='border-b border-border last:border-b-0'
                >
                  <AccordionTrigger className='text-left text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline px-6 py-5'>
                    <span className='flex items-start gap-3'>
                      <HelpCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground px-6 pb-5 pl-14 whitespace-pre-line leading-relaxed'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
