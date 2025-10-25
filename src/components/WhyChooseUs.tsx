import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import chocolateWomanSmiling from "@/assets/chocolate-woman-smiling.jpg";

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "150k+", label: "Satisfied Clients" },
  { value: "3", label: "Countries Reached" },
  { value: "2k+", label: "Classes Conducted" },
];

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
      </svg>
    ),
    title: "Root Cause Solutions",
    description: "We uncover the root causes of intractable issues and treat problems from the root, ensuring effective, enduring and sustainable solutions with comprehensive follow-up services.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="12" r="4" />
        <path d="M8 26c0-4 3.5-8 8-8s8 4 8 8" />
        <circle cx="24" cy="10" r="3" />
        <path d="M26 20c2 0 4 2 4 4" />
      </svg>
    ),
    title: "Personalized Care Model",
    description: "We understand each individual is unique. Our counselling model helps clients express and empower themselves by focusing on what works for them, with choice of male or female counsellor.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16l8 8 16-16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Professional Excellence",
    description: "We place immeasurable value on our clients and believe that our professional relationship is the hallmark of the helping relationship. We handle only our core areas of specialization.",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="studies" className="mx-[2%] py-16 bg-primary relative overflow-hidden rounded-[38px]">
      <div className="container mx-auto px-6 relative z-10 flexCenter flex-col" ref={ref}>
        {/* Hero Image with Stats Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-[38px] overflow-hidden mb-16 h-[450px] w-full"
        >
          <img
            src={chocolateWomanSmiling}
            alt="Therapy session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Stats Overlay */}
          <div className="relative">
            <div className="absolute bottom-0 left-0 right-0 p-8 w-full">
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 px-10 ">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className="text-white"
                    >
                      <div
                        className="text-4xl md:text-5xl font-light mb-2"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                          fontWeight: 300,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/90">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>  
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="flexCenter flex-row space-x-7 mb-8">
          <div className="h-[1.2px] bg-white w-[50px]" />
          <span className="text-sm text-white tracking-wider uppercase">
            Why Choose Us
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[48px] leading-tight text-white mb-6 max-w-2xl text-center"
          style={{
            fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            fontWeight: 400,
          }}
        >
          Trusted Care, Lasting Positive Change
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/80 mb-16 max-w-2xl text-center"
        >
          At AIA Counselling Consult, we are a team of certified and registered professionals experienced in counselling, psychotherapy, behaviour modification, human resource development, relationship and mental health.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              className="flexCenter flex-col"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-12 text-white">
                {feature.icon}
              </div>
              <h3
                className="text-2xl text-white mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontWeight: 400,
                }}
              >
                {feature.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed  text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
