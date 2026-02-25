import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is employer healthcare analytics?',
    answer: 'Employer healthcare analytics is the practice of unifying claims, benefits, clinical, and workforce data to help self-funded employers understand how their healthcare dollars are being spent, identify cost-saving opportunities, and make evidence-based benefits decisions. Unlike traditional reporting — which tends to be backward-looking and fragmented — modern employer analytics platforms like HealthCompiler provide real-time intelligence that connects financial performance, clinical outcomes, and workforce health.',
  },
  {
    question: "How is HealthCompiler different from my TPA's reporting?",
    answer: "TPA reports are limited to claims data — and typically arrive weeks or months after the fact. HealthCompiler ingests claims alongside pharmacy, clinical, benefits, HRIS, and wearable data, normalizes everything into a single member record, and gives you a live view of your plan's performance. It's the difference between a rearview mirror and a windshield.",
  },
  {
    question: 'Do I need to replace my current vendors to use HealthCompiler?',
    answer: "No. HealthCompiler is designed to sit on top of your existing ecosystem. We integrate with your TPA, PBM, stop-loss carrier, HRIS, DPC provider, and other data sources through standard file feeds and API connections. You keep your vendors — you just finally get to see whether they're working.",
  },
  {
    question: 'How long does implementation take?',
    answer: "Most employers are fully onboarded and seeing live data within two weeks. We handle the data integration, normalization, and validation. Your team doesn't need to build anything.",
  },
  {
    question: 'Is HealthCompiler HIPAA compliant?',
    answer: 'Yes. HealthCompiler is fully HIPAA compliant and uses enterprise-grade encryption, access controls, and audit logging. We\'re built for organizations that handle sensitive health information and take data security seriously.',
  },
  {
    question: 'Can my broker or consultant access the platform?',
    answer: 'Absolutely. HealthCompiler supports role-based access, so your broker, consultant, and internal leadership team can all view the same data — with appropriate permissions. This creates a shared language for benefits strategy conversations.',
  },
]

export function EmployerAnalyticsFAQ() {
  return (
    <section className='py-20 md:py-28 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
              Frequently Asked Questions
            </div>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Common Questions About Employer Healthcare Analytics
            </h2>
          </div>

          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className='text-left text-base font-semibold'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground leading-relaxed'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
