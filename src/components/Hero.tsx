import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-psychologist.png";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Psychology and Counseling
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Psychology &<br />Counseling
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              We offer comprehensive care focusing on our patients' individual goals and offer a friendly dental home for all of your oral healthcare.
            </p>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg rounded-full">
              Book Today
            </Button>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Psychotherapy</h3>
                <p className="text-sm text-muted-foreground">
                  Long-term process that focuses on you as an individual, your thoughts, motivations & behaviors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Counselling</h3>
                <p className="text-sm text-muted-foreground">
                  Short term process that focuses on specific issues and helps a person address a particular problem.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Book a Session</h3>
                <p className="text-sm text-muted-foreground">
                  First session is free. Bring to the table win-win survival strategies to ensure proactive domination.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Professional Psychologist" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
