import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getAllAssessments, assessmentCategories } from "@/data/assessmentData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Wind, 
  Sparkles, 
  HeartHandshake, 
  Flame, 
  Brain, 
  Baby,
  Heart,
  HeartCrack,
  Scale,
  Lightbulb,
  Briefcase,
  LucideIcon,
  ArrowRight
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Wind,
  Sparkles,
  HeartHandshake,
  Flame,
  Brain,
  Baby,
  Heart,
  HeartCrack,
  Scale,
  Lightbulb,
  Briefcase,
};

export default function SelfAssessmentPage() {
  const assessments = getAllAssessments();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredAssessments = selectedCategory === "All" 
    ? assessments 
    : assessments.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#FDF9F7] to-white">
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
                Self-Assessment
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
              Understand Yourself Better
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Take a free, confidential self-assessment to gain insights into your mental health 
              and receive personalized recommendations for support.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>Takes 2-3 Minutes</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>Instant Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className="rounded-full"
            >
              All Assessments
            </Button>
            {assessmentCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Assessments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAssessments.map((assessment, index) => {
              const IconComponent = iconMap[assessment.icon];
              
              return (
                <motion.div
                  key={assessment.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Link to={`/self-assessment/${assessment.id}`}>
                    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full p-8">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs text-primary font-medium uppercase tracking-wider">
                            {assessment.category}
                          </span>
                          <h3
                            className="text-2xl mt-2 group-hover:text-primary transition-colors"
                            style={{
                              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                              fontWeight: 400,
                            }}
                          >
                            {assessment.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {assessment.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all pt-2">
                          <span className="text-sm">Take Assessment</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FDF9F7]">
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
              Need Professional Support?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our experienced counsellors are here to provide personalized support for your
              unique situation. Book a session today.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
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
