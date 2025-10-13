import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-psychologist.png";
import floatDecor1 from "@/assets/float-decoration-1.png";
import floatDecor2 from "@/assets/float-decoration-2.png";
import floatDecor3 from "@/assets/float-decoration-3.png";
import { useEffect } from "react";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Floating decorative elements */}
      <img 
        src={floatDecor1} 
        alt="" 
        className="absolute top-20 left-10 w-32 h-32 opacity-30 animate-float pointer-events-none"
      />
      <img 
        src={floatDecor2} 
        alt="" 
        className="absolute top-40 right-20 w-24 h-24 opacity-40 animate-float-slow pointer-events-none"
      />
      <img 
        src={floatDecor3} 
        alt="" 
        className="absolute bottom-40 left-1/4 w-16 h-16 opacity-50 animate-pulse-slow pointer-events-none"
      />
      <img 
        src={floatDecor1} 
        alt="" 
        className="absolute bottom-20 right-1/3 w-20 h-20 opacity-20 animate-float pointer-events-none"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block" data-aos="fade-right">
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Psychology and Counseling
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" data-aos="fade-up">
              Psychology &<br />Counseling
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg" data-aos="fade-up" data-aos-delay="100">
              We offer comprehensive care focusing on our patients' individual goals and offer a friendly dental home for all of your oral healthcare.
            </p>

            <div data-aos="fade-up" data-aos-delay="200">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform duration-300">
                Book Today
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-semibold mb-2">Psychotherapy</h3>
                <p className="text-sm text-muted-foreground">
                  Long-term process that focuses on you as an individual, your thoughts, motivations & behaviors.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-xl font-semibold mb-2">Counselling</h3>
                <p className="text-sm text-muted-foreground">
                  Short term process that focuses on specific issues and helps a person address a particular problem.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-xl font-semibold mb-2">Book a Session</h3>
                <p className="text-sm text-muted-foreground">
                  First session is free. Bring to the table win-win survival strategies to ensure proactive domination.
                </p>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3 animate-pulse-slow"></div>
            <img 
              src={heroImage} 
              alt="Professional Psychologist" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
