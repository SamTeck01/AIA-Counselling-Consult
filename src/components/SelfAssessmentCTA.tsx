import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function SelfAssessmentCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <ClipboardCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Free Self-Assessment</span>
              </div>

              <h2
                className="text-4xl md:text-5xl mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontWeight: 400,
                }}
              >
                Not Sure Where to Start?
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Take a free, confidential self-assessment to understand your mental health better. 
                Get personalized recommendations and discover which counselling service is right for you.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">100% Confidential & Free</h4>
                    <p className="text-sm text-muted-foreground">Your responses are completely private and secure</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Quick & Easy</h4>
                    <p className="text-sm text-muted-foreground">Takes only 2-3 minutes to complete</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Personalized Results</h4>
                    <p className="text-sm text-muted-foreground">Get tailored service recommendations based on your needs</p>
                  </div>
                </div>
              </div>

              <Link to="/self-assessment">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                  Take Free Assessment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  {/* Assessment Preview Cards */}
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <ClipboardCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Stress Level Check</h4>
                      <p className="text-xs text-muted-foreground">5 questions • 2 mins</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-2xl">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <ClipboardCheck className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Anxiety Assessment</h4>
                      <p className="text-xs text-muted-foreground">5 questions • 2 mins</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-pink-100/50 rounded-2xl">
                    <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center">
                      <ClipboardCheck className="w-6 h-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Relationship Health</h4>
                      <p className="text-xs text-muted-foreground">5 questions • 2 mins</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                      <ClipboardCheck className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Burnout Risk Check</h4>
                      <p className="text-xs text-muted-foreground">5 questions • 2 mins</p>
                    </div>
                  </div>

                  {/* More indicator */}
                  <div className="text-center pt-2">
                    <p className="text-sm text-muted-foreground">+ 8 more assessments available</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
