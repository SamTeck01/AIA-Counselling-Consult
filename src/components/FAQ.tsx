import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import AOS from "aos";

const faqs = [
  {
    question: "What is mental therapy, and how can it help me?",
    answer: "There but the majority have in some form or randomised words which don't look even slightly believable. If you are going to use a passage of you need to of text.",
  },
  {
    question: "What if I don't feel a connection with my therapist?",
    answer: "It's important to feel comfortable with your therapist. We offer initial consultations to help you find the right match for your needs.",
  },
  {
    question: "How long does therapy typically last?",
    answer: "The duration varies depending on individual needs and goals. Some clients benefit from short-term therapy while others prefer ongoing support.",
  },
  {
    question: "Is online therapy as effective as in-person sessions?",
    answer: "Research shows that online therapy can be just as effective as in-person sessions for many types of mental health concerns.",
  },
];

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-primary tracking-wider uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full" data-aos="fade-up" data-aos-delay="200">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  ({String(index + 1).padStart(2, '0')}) {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
