import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, Phone } from "lucide-react";

const faqs = [
  {
    question: "What is mental therapy, and how can it help me?",
    answer: "There but the majority have in some form or randomised words which don't look even slightly believable. If you are going to use a passage of you need to text.",
  },
  {
    question: "What if I don't feel a connection with my therapist?",
    answer: "There but the majority have in some form or randomised words which don't look even slightly believable. If you are going to use a passage of you need to text.",
  },
  {
    question: "What should I expect in my first session?",
    answer: "There but the majority have in some form or randomised words which don't look even slightly believable. If you are going to use a passage of you need to text.",
  },
  {
    question: "Will therapy be covered by my insurance?",
    answer: "There but the majority have in some form or randomised words which don't look even slightly believable. If you are going to use a passage of you need to text.",
  },
  {
    question: "How long does therapy usually take?",
    answer: "There but the majority have in some form or randomised words which don't look even slightly believable. If you are going to use a passage of you need to text.",
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-background container">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Header & Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center space-x-7 flex-row mb-6">
                <div className="h-[1.2px] bg-primary w-[50px]" />
                <span className="text-sm text-primary tracking-wider uppercase">
                  Our faq's
                </span>
              </div>
              <h2
                className="text-[52px] leading-tight font-light text-foreground"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Frequently asked questions
              </h2>
            </div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary rounded-[40px] py-6 px-12 relative overflow-hidden w-fit rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full "
            >
              {/* Avatar Group */}
              <div className="flex items-center mb-2">
                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                  <img
                    src="https://i.pravatar.cc/150?img=5"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                  <img
                    src="https://i.pravatar.cc/150?img=8"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                </div>
              </div>

              <h3 className="text-white text-[22px] font-normal mb-2">
                Still have you any question?
              </h3>

              <a
                href="tel:+0079000665"
                className="inline-flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-medium">+0079 000 665</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-dashed border-muted-foreground/20 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between gap-4 text-left py-4 group"
                >
                  <div className="flex-1">
                    <span className="text-muted-foreground text-sm mb-2 block">
                      ({String(index + 1).padStart(2, "0")})
                    </span>
                    <h3 className="text-lg md:text-xl font-light text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground text-sm leading-relaxed pb-4 pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
