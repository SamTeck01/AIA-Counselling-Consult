import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import about from '@/assets/about.png';
import Physiotherapy from '@/assets/PhysioTheraphyIcon.svg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="flex items-center space-x-7 flex-row">
          <div className="h-[1.2px] bg-primary w-[50px]" />
          <span className="text-sm text-primary tracking-wider uppercase">
             About Us
          </span>
        </div>

        <div className="flex lg:flex-row gap-6 items-center">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative"
          >   
            <h2 className="text-4xl md:text-5xl lg:text-[48px] leading-tight" style={{fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", fontWeight: '400'}}>
              Our Mission
              <span className="text-primary"> Supporting your </span>
              mental health journey
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the pleasure by those.
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-start flex-col gap-2 p-4 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center flex-row space-x-6 p-2">
                  <img src={Physiotherapy} alt='Physiotherapy' />
                  <h3 className="text-[22px] font-thin mb-1">Expert Physiotherapist</h3>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm w-[67%]">
                    Licensed professionals with years of experience in various therapeutic approaches.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-start flex-col gap-2 p-4 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center flex-row space-x-6 p-2">
                  <img src={Physiotherapy} alt='Physiotherapy' />
                  <h3 className="text-[22px] font-thin mb-1">Personalized Care</h3>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm w-[67%]">
                    Customized treatment plans designed to address your specific goals and challenges.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-row justify-between"
            >
              <Button size="lg" className="mt-4 rounded-full group bg-primary hover:bg-primary/90 p-8 text-md" style={{fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", fontWeight: '400'}} >
                Learn More
              </Button>

              <div className="scale-75 md:scale-100">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 right-0 bg-primary/10 p-6 h-[220px] rounded-t-full flexCenter"
                >
                  <div className="flex items-center gap-4 flex-col">
                    <div className="text-[120px] leading-[0.8] tracking-tighter" style={{fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", fontWeight: '400'}}>10+</div>
                    <div className="font-medium text-muted-foreground text-center">Years of<br/> Experience</div>
                  </div>
                </motion.div>
              </div>  
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-[100%] hidden md:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img src={about} className='rounded-t-full'/>
              

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
