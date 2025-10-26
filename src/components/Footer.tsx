import { motion } from "framer-motion";
import { Send, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer id="contact" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-[50px] px-4 sm:px-8 md:px-12 py-16 relative overflow-hidden">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1fr_auto_auto_auto] gap-16 mb-20 relative z-10">
            {/* Left Column - Logo & Newsletter */}
            <div className="space-y-12">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <img 
                  src="/aia-logo-white.svg" 
                  alt="AIA Counselling Consult" 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-white text-2xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  AIA Counselling Consult
                </span>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white/80 text-sm mb-4 font-light">Newsletter</h3>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 pr-10 focus:outline-none focus:border-white/60 transition-colors"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Studio Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-white text-base font-normal mb-6">Studio</h3>
              <ul className="space-y-4">
                <li onClick={() => scrollToSection('team')}><a className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer">Doctors</a></li>
                <li onClick={() => scrollToSection('studies')}> <a className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer">Testimonials</a></li>
              </ul>
            </motion.div>

            {/* Navigation Column 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-white text-base font-normal mb-6">Navigation</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Company</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Press Media</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Our Blog</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              </ul>
            </motion.div>*/}

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-white text-base font-normal mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="text-white/60 text-sm">Professional Counselling Services</li>
                <li className="text-white/60 text-sm">Virtual & Physical Sessions</li>
                <li className="text-white/60 text-sm">International Network</li>
                <li><a href="mailto:ibcounsellor@yahoo.com" className="text-white/60 hover:text-white transition-colors text-sm">ibcounsellor@yahoo.com</a></li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between border-t border-white/10 pt-8 relative z-10">
            {/* Social Icons */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-sm">
              Copyright © 2025 <span className="text-white/60">AIA Counselling Consult</span>, All Rights Reserved.
            </p>
          </div>

          {/* Large Truemo Text Background */}
          <div className="absolute bottom-0 right-12 text-[180px] font-light text-white/5 leading-none pointer-events-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            AIA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
