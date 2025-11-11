import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAssessmentById } from "@/data/assessmentData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function AssessmentTestPage() {
  const { assessmentId } = useParams<{ assessmentId: string }>();
  const navigate = useNavigate();
  const assessment = assessmentId ? getAssessmentById(assessmentId) : null;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [started, setStarted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestion]);

  if (!assessment) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Assessment Not Found</h1>
          <Button onClick={() => navigate("/self-assessment")}>
            Back to Assessments
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers({ ...answers, [questionId]: score });
  };

  const handleNext = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate total score and navigate to results
      const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
      navigate(`/self-assessment/${assessmentId}/results`, {
        state: { score: totalScore, assessmentId },
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isCurrentQuestionAnswered = answers[assessment.questions[currentQuestion].id] !== undefined;
  const progress = ((currentQuestion + 1) / assessment.questions.length) * 100;

  if (!started) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-[#F5F8FC]">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Button
                variant="ghost"
                onClick={() => navigate("/self-assessment")}
                className="mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Assessments
              </Button>

              <h1
                className="text-4xl md:text-5xl mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontWeight: 400,
                }}
              >
                {assessment.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {assessment.description}
              </p>

              <div className="bg-white rounded-3xl p-8 mb-8 text-left">
                <h3 className="text-xl font-medium mb-4">Instructions:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Answer all questions honestly based on how you've been feeling recently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>There are {assessment.questions.length} questions in total</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>This assessment takes approximately 2-3 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Your responses are completely confidential</span>
                  </li>
                </ul>
              </div>

              <Button
                size="lg"
                onClick={() => setStarted(true)}
                className="bg-[#E8F02C] hover:bg-[#E8F02C]/90 text-primary font-semibold"
              >
                Start Assessment
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const question = assessment.questions[currentQuestion];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F8FC]">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion + 1} of {assessment.questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>

            {/* Question Card */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 mb-8"
            >
              <h2
                className="text-2xl md:text-3xl mb-8"
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontWeight: 400,
                }}
              >
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(question.id, option.score)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                      answers[question.id] === option.score
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          answers[question.id] === option.score
                            ? "border-primary"
                            : "border-gray-300"
                        }`}
                      >
                        {answers[question.id] === option.score && (
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        )}
                      </div>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!isCurrentQuestionAnswered}
                className="bg-[#E8F02C] hover:bg-[#E8F02C]/90 text-primary font-semibold disabled:opacity-50"
              >
                {currentQuestion === assessment.questions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
