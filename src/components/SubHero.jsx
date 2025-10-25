// SubHero.jsx
// ✨ Requires: framer-motion, lucide-react, Tailwind CSS, Playfair Display + Urbanist fonts

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import PhysioTherapyIcon from "@/assets/PhysioTheraphyIcon.svg";
import CounsellingIcon from "@/assets/CounsellingIcon.svg";
import BookIcon from "@/assets/BookIcon.svg";
import { openWhatsApp, WHATSAPP_MESSAGES } from '@/utils/whatsapp';

/* ===============================
   ✨ Animation Variants
================================ */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardEntry = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: "easeOut" },
  },
};

/* ===============================
   ✨ Card Component
================================ */
const SubHeroCard = ({ title, subtitle, icon, highlight, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      variants={cardEntry}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.28 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden p-8 flex flex-col h-full cursor-pointer`}
      style={{
        borderRadius: '2.5rem',
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* ===== Quarter Circle Ripple (Orange) ===== */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: 0,
          width: '300px',
          height: '300px',
          borderRadius: '0 100% 0 0',
          backgroundColor: '#FBEFE6',
          transformOrigin: 'bottom left',
          transform: isHovered ? 'scale(2.5)' : 'scale(0)',
          transition: 'transform cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '1.2s',
          zIndex: 0,
        }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 flex items-start gap-4">
        <div className="w-16 h-16 flex items-center justify-center shrink-0">
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </div>

        <div className="flex-1 space-y-3">
          <h3 className="text-2xl md:text-[1.75rem] text-gray-800 leading-tight" style={{fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"}}>
            {title}
          </h3>
          <p className="font-['Urbanist'] text-sm text-slate-500 mt-2 leading-relaxed">
            {subtitle}
          </p>
          
          {/* ===== CTA Button ===== */}
          <button
            aria-label={`Learn more about ${title}`}
            className="flex items-center gap-3 text-sm font-medium transition border duration-200 py-1.5 px-3 rounded-3xl mt-2"
            // style={{border: '1px solid black'}}
          >
            <span 
              className="transition-transform duration-200"
              style={{ transform: isHovered ? "translateX(0.2rem)" : "translateX(0)" }}
            >
              <MoveRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      
      </div>

    </motion.article>
  );
};

/* ===============================
   ✨ Main Section
================================ */
export default function SubHero() {
  const cards = [
    {
      title: "Psychotherapy",
      subtitle:
        "Long-term process that focuses on you as an individual — your thoughts, motivations & behaviors.",
      icon: PhysioTherapyIcon,
      highlight: false,
    },
    {
      title: "Counselling",
      subtitle:
        "Short-term process that focuses on specific issues and helps address a particular problem.",
      icon: CounsellingIcon,
      highlight: true,
    },
    {
      title: "Book a Session",
      subtitle:
        "First session is free. Start with a friendly, confidential session to see how we can help.",
      icon: BookIcon,
      highlight: false,
      onClick: () => openWhatsApp(WHATSAPP_MESSAGES.BOOK_SESSION),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {cards.map((c, i) => (
            <SubHeroCard
              key={c.title + i}
              title={c.title}
              subtitle={c.subtitle}
              icon={c.icon}
              highlight={c.highlight}
              onClick={c.onClick}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
