import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Users, CheckCircle } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Certified Clinical Psychologists",
    description: "Licensed and registered professionals with verified credentials",
  },
  {
    icon: Shield,
    title: "25+ Years Experience",
    description: "Over two decades of proven expertise in counselling and therapy",
  },
  {
    icon: Users,
    title: "150,000+ Clients Served",
    description: "Trusted by thousands across Nigeria and internationally",
  },
  {
    icon: CheckCircle,
    title: "Evidence-Based Approaches",
    description: "Using scientifically-proven therapeutic methods and techniques",
  },
];

const certifications = [
  "Registered Clinical Psychologist",
  "Certified Counsellor & Therapist",
  "Member, Nigerian Psychological Association",
  "Certified Behaviour Modification Specialist",
  "Human Resource Development Expert",
  "Relationship & Mental Health Specialist",
];

const achievements = [
  {
    metric: "95%",
    label: "Client Satisfaction Rate",
  },
  {
    metric: "3",
    label: "Countries Reached",
  },
  {
    metric: "2,000+",
    label: "Training Sessions",
  },
  {
    metric: "12+",
    label: "Years Average Experience",
  },
];

export default function Credentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-3xl"
      />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-7 mb-8">
          <div className="h-[1.2px] bg-primary w-[50px]" />
          <span className="text-sm text-primary tracking-wider uppercase">
            Our Credentials
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-[48px] leading-tight max-w-3xl mb-16"
          style={{
            fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
            fontWeight: 400,
          }}
        >
          Certified professionals you can trust
        </motion.h2>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <credential.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{credential.title}</h3>
              <p className="text-sm text-muted-foreground">{credential.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#FDF9F7] rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3
            className="text-2xl md:text-3xl mb-8 text-center"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 400,
            }}
          >
            Professional Certifications & Memberships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3
            className="text-2xl md:text-3xl mb-8 text-center"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 400,
            }}
          >
            Proven Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-white rounded-2xl border border-primary/10 hover:shadow-lg transition-shadow"
              >
                <div
                  className="text-4xl md:text-5xl font-light text-primary mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  }}
                >
                  {achievement.metric}
                </div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            All our counsellors are verified, licensed professionals committed to maintaining
            the highest standards of ethical practice and confidentiality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
