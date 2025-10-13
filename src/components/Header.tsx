import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">Truemo</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("studies")} className="text-foreground hover:text-primary transition-colors">
              Studies
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-foreground hover:text-primary transition-colors">
              Pricing
            </button>
          </nav>

          <Button onClick={() => scrollToSection("contact")} className="bg-primary text-primary-foreground hover:bg-accent">
            Let's Talk
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
