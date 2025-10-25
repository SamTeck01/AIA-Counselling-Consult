import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { LinkedinIcon, Mail, Twitter } from "lucide-react";
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile 2.jpg'
import profile3 from '../assets/profile 3.jpg'
import profile4 from '../assets/profile 4.jpg'

const teamMembers = [
  {
    name: "Meghan Bennet",
    role: "Psychiatry",
    image: profile1,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:meghan@example.com",
    },
  },
  {
    name: "Mikey Kenny",
    role: "Psychiatrist",
    image: profile2,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:mikey@example.com",
    },
  },
  {
    name: "Lidia Huynh",
    role: "Therapy Expert",
    image: profile3,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:lidia@example.com",
    },
  },
  {
    name: "Zackery Mills",
    role: "Managing Director",
    image: profile4,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:zackery@example.com",
    },
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // For drag
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="team" className="mx-[2%] py-16 bg-primary relative overflow-hidden rounded-[38px]">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flexCenter space-x-7 flex-row mb-6">
            <div className="h-[1.2px] bg-white w-[50px]" />
            <span className="text-sm text-white tracking-wider uppercase">
              Our Expert
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl text-white font-normal"
            style={{
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
            }}
          >
            Meet Our International Network <br /> of Practitioners
          </h2>
        </motion.div>

        {/* Draggable Carousel */}
        <motion.div
          ref={carouselRef}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Background Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white text-[#5B4A78] flex items-center justify-center hover:bg-[#FFD6E0] transition"
                    >
                      <Twitter />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white text-[#5B4A78] flex items-center justify-center hover:bg-[#FFD6E0] transition"
                    >
                      <LinkedinIcon />
                    </a>
                    <a
                      href={member.socials.email}
                      className="w-10 h-10 rounded-full bg-white text-[#5B4A78] flex items-center justify-center hover:bg-[#FFD6E0] transition"
                    >
                      <Mail />
                    </a>
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm opacity-80">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
