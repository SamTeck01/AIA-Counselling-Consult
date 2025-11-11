import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getAssessmentById, calculateResultLevel } from "@/data/assessmentData";
import { getExpandedServiceById } from "@/data/expandedServicesData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/utils/whatsapp";

export default function AssessmentResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, assessmentId } = location.state || {};

  const assessment = assessmentId ? getAssessmentById(assessmentId) : null;
  const service = assessment ? getExpandedServiceById(assessment.relatedService) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!score || !assessmentId) {
      navigate("/self-assessment");
    }
  }, [score, assessmentId, navigate]);

  if (!assessment || !service) {
    return null;
  }

  const maxScore = assessment.questions.reduce(
    (max, q) => max + Math.max(...q.options.map(o => o.score)),
    0
  );

  const result = calculateResultLevel(score, maxScore);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Results Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#FDF9F7] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontWeight: 400,
              }}
            >
              Your Assessment Results
            </h1>
            <p className="text-lg text-muted-foreground">
              {assessment.title}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Score Card */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-100 text-center">
              <div className="mb-6">
                <div className={`text-6xl font-light mb-2 ${result.color}`}>
                  {result.level}
                </div>
                <div className="text-muted-foreground">
                  Score: {score} out of {maxScore}
                </div>
              </div>

              <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / maxScore) * 100}%` }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className={`h-full ${
                    result.level === "Low" ? "bg-green-500" :
                    result.level === "Moderate" ? "bg-yellow-500" :
                    result.level === "High" ? "bg-orange-500" :
                    "bg-red-500"
                  }`}
                />
              </div>

              <p className="text-lg leading-relaxed">{result.message}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended Service */}
      <section className="py-12 bg-[#F5F8FC]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl mb-4"
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontWeight: 400,
                }}
              >
                Recommended Service
              </h2>
              <p className="text-muted-foreground">
                Based on your assessment, we recommend the following counselling service
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl md:text-3xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">What to Expect:</h4>
                  <ul className="space-y-2">
                    {service.whatToExpect.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => openWhatsApp(WHATSAPP_MESSAGES.BOOK_SESSION)}
                  className="bg-primary hover:bg-primary/90 text-white flex-1"
                >
                  Book a Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Link to={`/services/${service.id}`} className="flex-1">
                  <Button size="lg" variant="outline" className="w-full">
                    Learn More About This Service
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Actions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl mb-6">What would you like to do next?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => navigate("/self-assessment")}
              >
                Take Another Assessment
              </Button>
              <Link to="/services">
                <Button variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
