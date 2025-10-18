import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 container ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-background backdrop-blur-md"
      } `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
              <span className="text-primary">AIA</span>
              <span className="text-foreground"> Counselling</span>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {["Home", "About", "Services", "Studies", "Blog"].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
                style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 hidden lg:flex"
              >
                Let's Talk
              </Button>
            </motion.div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-foreground p-2 text-3xl"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border/50"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {["Home", "About", "Services", "Studies", "Blog"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full mt-2"
                style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}

              >
                Let's Talk
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
