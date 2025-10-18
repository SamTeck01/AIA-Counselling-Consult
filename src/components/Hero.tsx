import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPsychologist from "@/assets/truemo-woman.png";
import quote from '@/assets/quote.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#594A66] via-[#6A5A76] to-[#594A66] overflow-hidden mt-[82px] rounded-[20px] md:rounded-[38px]"
    >
      {/* Decorative Background Circles with Animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-4 w-40 h-40 md:top-32 md:left-16 md:w-80 md:h-80 border border-white/10 rounded-full animate-float"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-10 left-8 w-[200px] h-[200px] md:bottom-20 md:left-32 md:w-[500px] md:h-[500px] border border-white/8 rounded-full animate-float-slow"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute top-32 right-4 w-32 h-32 md:top-48 md:right-40 md:w-64 md:h-64 border border-white/10 rounded-full animate-breathe"
      />

      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="relative flex items-center space-y-4 justify-end flex-col min-h-[600px] sm:min-h-[700px] md:min-h-[880px]">
          {/* Massive Background Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex flex-col top-20 sm:top-32 md:top-40 text-center select-none w-full"
          >
            <div className="relative w-full flexCenter">
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-light text-white/90 leading-[1] tracking-tight w-[90%] sm:w-[85%] md:w-[82%] relative" style={{fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"}}>
                Psychology and Counseling
                {/* Decorative lines top-right */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -top-6 right-0 flex gap-2 origin-right md:-top-10 scale-50 md:scale-100"
                >
                  <img src={quote} />
                </motion.div>
              </h1>

            </div>
          </motion.div>

          {/* Floating Psychologist Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flexCenter z-20"
          >
            <img
              src={heroPsychologist}
              alt="Professional Psychologist"
              className="w-[85%] sm:w-[75%] md:w-[90%] lg:w-[100%] max-w-[600px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative text-center md:absolute md:right-12 md:bottom-12 md:-translate-y-1/2 max-w-xs z-30 space-y-4 md:space-y-6 md:text-right pb-4 px-4 md:px-0"
          >
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Professional counselling services with over two decades of experience. We empower adolescents, youths and couples through personalized and multi-dimensional counselling, guaranteeing transformative results.
            </p>
            <Button className="bg-white text-[#594A66] hover:bg-white/90 rounded-full px-8 py-4 sm:px-10 sm:py-6 text-sm sm:text-base font-light shadow-lg">
              Book Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
