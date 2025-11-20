import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPsychologist from "@/assets/new_hero.png";
import quote from '@/assets/quote.png';
import { openWhatsApp, WHATSAPP_MESSAGES } from '@/utils/whatsapp';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-auto max-h-[880px] flex justify-center bg-gradient-to-br from-[#2B4C9E] via-[#3A5FB8] to-[#2B4C9E] overflow-hidden mt-[62px] rounded-[20px] md:rounded-[38px] w-full"
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
        <div className="relative flex space-y-4 justify-end items-center flex-col h-auto min-h-[800px] sm:min-h-[880px] md:min-h-[880px] pb-8 md:pb-2">
          {/* Massive Background Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex flex-col top-20 md:top-20 text-center select-none w-full h-fit"
          >
            <div className="relative w-full flexCenter">
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[90px] font-light text-white/90 leading-[1] tracking-tight w-[90%] sm:w-[85%] md:w-[82%] relative" style={{fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"}}>
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
              className="w-[85%] sm:w-[65%] md:w-[90%] lg:w-[100%] max-w-[600px] h-auto object-contain drop-shadow-2xl rounded-3xl overflow-hidden -bottom-2"
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
            
            {/* Pricing Badge 
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 space-y-2">
              <p className="text-white/70 text-xs">Sessions Starting From</p>
              <div className="flex items-baseline justify-center md:justify-end gap-2">
                <span className="text-3xl font-light text-white" style={{fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"}}>₦15,000</span>
                <span className="text-white/60 text-sm">- ₦25,000</span>
              </div>
              <p className="text-white/60 text-xs">Flexible payment plans available</p>
            </div>*/}

            <Button 
              onClick={() => openWhatsApp(WHATSAPP_MESSAGES.BOOK_TODAY)}
              className="bg-[#E8F02C] text-[#2B4C9E] hover:bg-[#E8F02C]/90 rounded-full px-8 py-4 sm:px-10 sm:py-6 text-sm sm:text-base font-semibold shadow-lg w-full"
            >
              Book Your Session Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
