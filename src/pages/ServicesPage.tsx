import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getAllExpandedServices } from "@/data/expandedServicesData";
import { Button } from "@/components/ui/button";
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
import { motion } from "framer-motion";

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

export default function ServicesPage() {
  const services = getAllExpandedServices();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-[1.2px] bg-primary w-[50px]" />
              <span className="text-sm text-primary tracking-wider uppercase">
                Our Services
              </span>
              <div className="h-[1.2px] bg-primary w-[50px]" />
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontWeight: 400,
              }}
            >
              Comprehensive Counselling Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer 20 specialized counselling services designed to support your mental health 
              and well-being. Click any service to learn more and book a session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <Link to={`/services/${service.id}`}>
                  <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Icon */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        {(() => {
                          const IconComponent = iconMap[service.icon];
                          return IconComponent ? (
                            <IconComponent className="w-6 h-6 text-primary" />
                          ) : null;
                        })()}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2"
                        style={{
                          fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                          fontWeight: 400,
                        }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                        <span className="text-sm">Learn More & Book</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F8FC]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontWeight: 400,
              }}
            >
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our experienced counsellors are here to help you find the right support for your
              unique situation. Reach out to us today.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-[#E8F02C] hover:bg-[#E8F02C]/90 text-primary font-semibold">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>


      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
