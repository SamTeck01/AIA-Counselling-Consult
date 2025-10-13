import { Button } from "@/components/ui/button";
import { Award, Users } from "lucide-react";
import aboutImage from "@/assets/about-office.png";
import { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <img 
              src={aboutImage} 
              alt="Therapy Office" 
              className="rounded-3xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary tracking-wider uppercase">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our Mission Supporting your mental health journey
            </h2>

            <p className="text-lg text-muted-foreground">
              On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the pleasure by those.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Expert Physiotherapist</h3>
                  <p className="text-muted-foreground">
                    Physiatrists also prescribe advices to improve patients function demoralized by the pleasure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Rehabilitation Programs</h3>
                  <p className="text-muted-foreground">
                    Physiatrists also prescribe advices to improve patients function demoralized by the pleasure.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
