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
    question: "What is counselling/therapy and how can it help me?",
    answer: "Counselling/therapy is a confidential process designed to help you address your concerns, have a better understanding of yourself as a unique individual, and learn effective personal and interpersonal coping strategies. It involves an intentional and systematically progressive helping-relationship between you and a trained counsellor.",
  },
  {
    question: "How is confidentiality maintained?",
    answer: "All interactions during counselling/therapy services, including scheduling of appointments, the content of your sessions, progress in counselling/therapy, and your records are completely confidential. No record of counselling/therapy is contained in any academic, educational, or job placement file. All your information is secured from third party access.",
  },
  {
    question: "What types of sessions are available?",
    answer: "We offer Regular Sessions (scheduled appointments based on identified needs and goals) and Irregular Sessions (as needed and convenient). Sessions can be conducted online (virtual), in-person at our office, or outdoor locations. We provide individual, couple, family, and corporate counselling sessions. Standard session time is between 40 minutes and 1 hour.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We appreciate keeping scheduled appointments. Please notify us 24 hours (1 day) in advance if you need to cancel. In case of missed appointment without due notification, you may forfeit the fee for the session where payment had already been made or could be obligated to pay 50% cost of session for no-show.",
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
