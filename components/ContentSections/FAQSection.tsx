'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { FadeIn } from '../Animations';

export function FAQSection() {
    const faqs = [
        {
            question: "What exactly is Sujoku therapy?",
            answer: "Sujoku is a highly effective healing method originating from Korea. 'Su' means hand and 'Joku' means foot. It operates on the principle that the entire body is represented in miniature on your hands and feet. By stimulating specific points, we can treat ailments throughout the entire body."
        },
        {
            question: "Is the treatment painful?",
            answer: "We use micro-needles, seeds, and targeted acupressure. While you may feel a slight prick or pressure, it is generally considered painless and very relaxing. Many patients even fall asleep during longer sessions."
        },
        {
            question: "How many sessions will I need?",
            answer: "This varies entirely based on the condition being treated. Acute issues (like a recent minor injury) might resolve in 1-2 sessions. Chronic conditions generally require a comprehensive plan of 5-10 sessions to truly rebalance the body's systems."
        },
        {
            question: "Do I need to prepare anything before my appointment?",
            answer: "No special preparation is required. We recommend wearing comfortable clothing and ensuring you are well-hydrated. Our therapists will guide you through the rest during your initial consultation."
        }
    ];

    return (
        <section id="faq" className="bg-background text-foreground w-full py-24 px-8 border-t border-border">
            <div className="max-w-4xl mx-auto flex flex-col">

                <FadeIn className="w-full text-center space-y-6 mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                        Questions & Answers
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">Frequently Asked Questions</h2>
                </FadeIn>

                <FadeIn delay={0.2} direction="up" className="w-full">
                    <Accordion.Root type="single" defaultValue="item-0" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <Accordion.Item
                                key={idx}
                                value={`item-${idx}`}
                                className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/50 transition-all duration-300"
                            >
                                <Accordion.Header className="flex">
                                    <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 px-8 text-left text-lg font-medium group hover:text-primary transition-colors">
                                        {faq.question}
                                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-data-[state=open]:rotate-180 transition-transform duration-300">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden text-muted-foreground font-light leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                    <div className="px-8 pb-6 pt-0 opacity-80">
                                        {faq.answer}
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </FadeIn>

            </div>
        </section>
    );
}
