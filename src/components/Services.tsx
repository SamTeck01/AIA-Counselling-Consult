"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import relationshipIcon from '@/assets/relationship.png';
import lifeIcon from '@/assets/life-and-councelling.png';
import esteemIcon from '@/assets/Esteem.png';
import anxietyIcon from '@/assets/self-esteem-issue.png';
import chocolateWomanSmiling from '@/assets/chocolate-woman-smiling.jpg';
import blackWomanSmiling from '@/assets/black-woman-smiling.jpg';

const services = [
  {
    icon: relationshipIcon,
    title: "Relationship & Marital Counselling",
    description:
      "Expert guidance for couples navigating relationship and marital challenges. Strengthen your bond and build a more fulfilling partnership.",
    image: blackWomanSmiling,
  },
  {
    icon: lifeIcon,
    title: "Career & Academic Guidance",
    description:
      "Professional support for adolescents and youths facing academic, behaviour, and career-related challenges.",
    image: chocolateWomanSmiling,
  },
  {
    icon: esteemIcon,
    title: "Behaviour Modification",
    description:
      "Specialized therapy for behaviour modification and mental health support with evidence-based approaches.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    icon: anxietyIcon,
    title: "Individual & Group Therapy",
    description:
      "Personalized counselling sessions for individuals, couples, families, and corporate clients both online and in-person.",
    image: blackWomanSmiling,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-[#FDF9F7] relative overflow-hidden">
      {/* Floating Accent Circle */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
      />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-7 mb-8">
          <div className="h-[1.2px] bg-primary w-[50px]" />
          <span className="text-sm text-primary tracking-wider uppercase">
            Our Services
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[48px] leading-tight max-w-xl"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 400,
            }}
          >
            Comprehensive counselling services for mental health and wellness
          </motion.h2>

        </div>

        {/* Services List */}
        <div className="divide-y divide-dashed divide-border">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_4fr_4fr] gap-8 py-8 items-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex-shrink-0">
                <img src={service.icon} alt={service.title} className="w-full h-full object-contain" style={{filter: "brightness(0) invert(0)"}}/>
              </div> 

              {/* Title & Description */}
              <div className="md:w-[100%] ">
                <h3
                  className="text-[20px] md:text-[22px] font-thin mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative h-36 md:h-28 rounded-3xl overflow-hidden cursor-pointer w-full"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 group-hover:opacity-0 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
