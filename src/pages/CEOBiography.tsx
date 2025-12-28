import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import ceo from "@/assets/ceo.jpg";
import { useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  ShieldCheck,
  Heart,
  BookOpen,
  Quote,
  Target,
  Trophy,
} from "lucide-react";

const CEOBiography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      {/* Decorative Background Elements */}
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
        className="absolute top-1/4 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent rounded-full blur-3xl -z-10"
      />

      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-7 flex-row mb-12">
            <div className="h-[1.2px] bg-primary w-[50px]" />
            <span className="text-sm text-primary tracking-wider uppercase">
              CEO Biography
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-center">
              <motion.div
                variants={itemVariants}
                className="md:col-span-5 lg:col-span-4"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <img
                      src={ceo}
                      alt="Prof. Sabitu Ariyo Olagoke"
                      className="rounded-t-full shadow-2xl w-full object-cover aspect-[3/4] border-8 border-background"
                    />
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/5 rounded-t-full -z-10" />

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#E8F02C] text-primary px-8 py-4 rounded-2xl shadow-xl z-20 font-bold text-center whitespace-nowrap"
                  >
                    <div className="text-3xl">40+</div>
                    <div className="text-xs uppercase tracking-wider">
                      Years of Excellence
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="md:col-span-7 lg:col-span-8 space-y-8"
              >
                <div className="space-y-4">
                  <h1
                    className="text-4xl md:text-5xl lg:text-7xl leading-tight"
                    style={{
                      fontFamily:
                        "'Playfair Display', Georgia, 'Times New Roman', serif",
                      fontWeight: "400",
                    }}
                  >
                    Prof. Sabitu Ariyo <br />
                    <span className="text-primary font-medium italic">
                      Olagoke
                    </span>
                  </h1>
                  <div className="h-1 w-20 bg-primary/20" />
                </div>

                <p className="text-lg md:text-xl text-primary font-medium italic leading-relaxed bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                  JPFNSE, FNIM, FAES, FNATE MNSChE, REGD. ENGR (COREN), MNIEM,
                  MIRDI, FCPHMN, FCMPA, FRecon, FISM {"{Ghana}"}, FIPMD, CFIAR,
                  CP, SPE, COM, POF, MDII
                </p>

                <div className="flex items-start gap-4">
                  <Quote className="text-primary/20 w-12 h-12 flex-shrink-0" />
                  <p className="text-muted-foreground text-xl leading-relaxed italic">
                    A consummate Management Consultant on Education, Religion
                    and Politics; a Justice of the Peace, Mentor, and Social
                    commentator.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Main Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-20">
                <motion.section variants={itemVariants} className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <GraduationCap size={24} />
                    </div>
                    <h2
                      className="text-3xl font-medium text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Early Life & Education
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 leading-relaxed">
                    <p>
                      Professor Olagoke was born on 10th November 1956 at
                      Ibadan. He attended Christ Church School II, Mapo, Ibadan
                      (1960-1970) for his Primary education, Prospect High
                      School, Abanla, Ibadan, Oyo State - 1976 for his O’Levels;
                      University of Ife (Now Obafemi Awolowo University, Ile
                      Ife, Osun State for B.Sc. Degree in Chemical Engineering,
                      1982).
                    </p>
                    <p>
                      He furthered his studies at the University of Ibadan for
                      his MSc. Degree in Industrial Engineering (1990), Stanton
                      University for a Ph.D in Comparative Religion (1998), and
                      Bradley University for a Professorial Degree in Public
                      Administration (2010).
                    </p>
                  </div>
                </motion.section>

                <motion.section variants={itemVariants} className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Briefcase size={24} />
                    </div>
                    <h2
                      className="text-3xl font-medium text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Career Highlights
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 leading-relaxed">
                    <p>
                      Prof. Olagoke retired as a Chief Lecturer at The Federal
                      Polytechnic Ilaro, Ogun State in December 2017. He served
                      the Institution in various capacities, such as HOD
                      (Mechanical Engineering, 2007-2011), Dean (Sch. of
                      Engineering, 2011-2015), Resource Inspector for Bio-Agric
                      Engineering.
                    </p>
                    <p>
                      He is the Executive Director, Shafaudeen Vocational
                      Training and Entrepreneurship Centre, Oyo State, Nigeria,
                      Managing Director and Chief Executive Officer, SOA
                      Management Consultancy and Engineering Services Limited.
                    </p>
                  </div>
                </motion.section>

                <motion.section variants={itemVariants} className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Heart size={24} />
                    </div>
                    <h2
                      className="text-3xl font-medium text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Religious & Social Impact
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 leading-relaxed">
                    <p>
                      Religion wise, he is a Patriarch of Faith (POF), the
                      Founder, Spiritual Head/Grand Imam, Shafaudeen In Islam
                      Worldwide; Member, League of Imam and Alfas Yorubaland,
                      Nigeria; Executive Director, Centre For Religious
                      Cooperation and Tolerance.
                    </p>
                    <p>
                      He also serves as Executive Director, Ajagun Esin Centre
                      for the Physically Challenged, and President, Ajagun Esin
                      Consultative Forum. He is an accomplished author with more
                      than two thousand publications.
                    </p>
                  </div>
                </motion.section>

                <motion.section variants={itemVariants} className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <ShieldCheck size={24} />
                    </div>
                    <h2
                      className="text-3xl font-medium text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Administrative & Leadership
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 leading-relaxed">
                    <p>
                      Administratively, he serves as an Examiner for NSE
                      Corporate Membership Examinations and is a member of the
                      NSE Elders Forum in Abeokuta, Ogun State. He is also a
                      COREN Engineering Regulation Monitoring Inspector and Vice
                      Chairman of the Governing Council for the Institute of
                      Policy Management Development.
                    </p>
                    <p>
                      He holds the prestigious position of Chairman of the
                      Senate in Africa for Bradley University, USA. His
                      leadership extends to being the Executive Director of
                      Shafaudeen Vocational Training and Entrepreneurship Centre
                      and the CEO of SOA Management Consultancy and Engineering
                      Services Limited.
                    </p>
                  </div>
                </motion.section>

                <motion.section variants={itemVariants} className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <BookOpen size={24} />
                    </div>
                    <h2
                      className="text-3xl font-medium text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Publications & Authorship
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 leading-relaxed">
                    <p>
                      Prof. Olagoke is an accomplished author with more than two
                      thousand publications to his credit. His work spans
                      various disciplines:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "7 Engineering Books",
                        "15 Social Sciences Texts",
                        "16 Socio-Religious Texts",
                        "Technical/Management Papers",
                        "Journal publications",
                        "Conference proceedings",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>
              </div>

              <motion.div variants={itemVariants} className="space-y-10">
                <div className="bg-white p-10 rounded-[40px] shadow-xl border border-primary/5 space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                  <h3 className="text-2xl font-serif text-primary relative z-10">
                    Professional Memberships
                  </h3>
                  <div className="space-y-6 relative z-10">
                    {[
                      "Registered Engineer (COREN)",
                      "Fellow, Nigerian Society of Engineers",
                      "Fellow, Nigeria Institute of Management (Chartered)",
                      "Fellow, Nigerian Association of Technologists in Engineering",
                      "Member, Nigerian Society of Chemical Engineers",
                      "Fellow, Academy for Entrepreneurial Studies",
                    ].map((member, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <Award className="w-5 h-5 text-primary/40 mt-1 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {member}
                        </span>
                      </div>
                    ))}
                    <div className="pt-6 border-t border-primary/10">
                      <p className="text-xs italic text-muted-foreground">
                        + Fellow of 10 and Member of 4 professional bodies
                        globally.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary p-10 rounded-[40px] shadow-2xl text-white space-y-8 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full -mb-20 -mr-20" />
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif">Core Vision</h3>
                  <ul className="space-y-6">
                    {[
                      "Functional education & politics",
                      "Youth emancipation & good governance",
                      "Inclusive society for PWDs",
                      "Functional religion without discrimination",
                    ].map((vision, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8F02C] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-light text-white/90">
                          {vision}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-muted/30 rounded-[32px] border border-primary/5 space-y-6">
                  <Trophy className="text-primary/20 w-10 h-10" />
                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    "Professor Sabitu Ariyo Olagoke, JP is the Patron, Assembly
                    of Justices of the Peace, Oyo State, Nigeria."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default CEOBiography;
