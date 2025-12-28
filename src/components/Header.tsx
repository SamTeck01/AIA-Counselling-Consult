import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/utils/whatsapp";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (
      location.pathname === "/" &&
      location.state &&
      (location.state as any).scrollTo
    ) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      // Clear the state so it doesn't scroll again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-background backdrop-blur-md"
      } `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between  lg:grid lg:grid-cols-[1fr_auto_1fr] items-center h-[60px] gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 cursor-pointer justify-start"
            onClick={() => scrollToSection("home")}
          >
            <div
              className="text-3xl font-light tracking-tight flex flex-row space-x-2 h-fit "
              onClick={() => navigate("/")}
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, 'Times New Roman', serif",
              }}
            >
              <span className="text-primary">AIA</span>
              <span className="hidden md:block text-foreground">
                {" "}
                Counselling
              </span>
              <span className=" text-primary"> Consult</span>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "Home", action: "link", target: "/" },
              { label: "About", action: "scroll", target: "about" },
              { label: "Services", action: "link", target: "/services" },
              {
                label: "Self-Assessment",
                action: "link",
                target: "/self-assessment",
              },
              { label: "Blog", action: "link", target: "/blog" },
              { label: "Contact", action: "scroll", target: "contact" },
            ].map((item, index) =>
              item.action === "link" ? (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  href={item.target}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
                  style={{
                    fontFamily:
                      "'Playfair Display', Georgia, 'Times New Roman', serif",
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ) : (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.target)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
                  style={{
                    fontFamily:
                      "'Playfair Display', Georgia, 'Times New Roman', serif",
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.button>
              )
            )}
          </nav>

          <div className="flex items-center gap-4 justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.LETS_TALK)}
                className="bg-[#E8F02C] text-primary hover:bg-[#E8F02C]/90 rounded-full px-6 hidden lg:flex font-semibold"
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
              {[
                { label: "Home", action: "link", target: "/" },
                { label: "About", action: "scroll", target: "about" },
                { label: "Services", action: "link", target: "/services" },
                {
                  label: "Self-Assessment",
                  action: "link",
                  target: "/self-assessment",
                },
                { label: "Blog", action: "link", target: "/blog" },
                { label: "Contact", action: "scroll", target: "contact" },
              ].map((item) =>
                item.action === "link" ? (
                  <a
                    key={item.label}
                    href={item.target}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
                    style={{
                      fontFamily:
                        "'Playfair Display', Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.target)}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
                    style={{
                      fontFamily:
                        "'Playfair Display', Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {item.label}
                  </button>
                )
              )}
              <Button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.LETS_TALK)}
                className="bg-[#E8F02C] text-primary hover:bg-[#E8F02C]/90 rounded-full w-full mt-2 font-semibold"
                style={{
                  fontFamily:
                    "'Playfair Display', Georgia, 'Times New Roman', serif",
                }}
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
