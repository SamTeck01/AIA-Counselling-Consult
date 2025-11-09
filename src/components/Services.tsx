"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  HeartCrack, 
  Briefcase, 
  Brain, 
  Lightbulb, 
  Wind, 
  Shield, 
  HeartHandshake, 
  Scale, 
  Flame, 
  Sparkles, 
  Heart, 
  Puzzle, 
  Users, 
  Zap, 
  ShieldAlert, 
  Apple, 
  Users2, 
  Baby, 
  GraduationCap,
  LucideIcon
} from "lucide-react";
import { getFeaturedExpandedServices } from "@/data/expandedServicesData";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  HeartCrack,
  Briefcase,
  Brain,
  Lightbulb,
  Wind,
  Shield,
  HeartHandshake,
  Scale,
  Flame,
  Sparkles,
  Heart,
  Puzzle,
  Users,
  Zap,
  ShieldAlert,
  Apple,
  Users2,
  Baby,
  GraduationCap,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const services = getFeaturedExpandedServices();

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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="divide-y divide-dashed divide-border">
          {services.map((service, index) => (
            <Link key={service.id} to={`/services/${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_4fr_4fr] gap-8 py-8 items-center group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex-shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center">
                  {(() => {
                    const IconComponent = iconMap[service.icon];
                    return IconComponent ? (
                      <IconComponent className="w-8 h-8 text-primary" />
                    ) : null;
                  })()}
                </div> 

                {/* Title & Description */}
                <div className="md:w-[100%]">
                  <h3
                    className="text-[20px] md:text-[22px] font-thin mb-2 group-hover:text-primary transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Schedule Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-36 md:h-28 rounded-3xl overflow-hidden w-full"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 group-hover:opacity-0 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
