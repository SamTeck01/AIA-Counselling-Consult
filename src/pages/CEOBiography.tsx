import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import ceo from "@/assets/ceo.jpg";
import { useEffect } from "react";

const CEOBiography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-center">
              <div className="md:col-span-5 lg:col-span-4">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <img
                      src={ceo}
                      alt="ALHAJI ENGR. PROF. SABITU ARIYO OLAGOKE"
                      className="rounded-t-full shadow-2xl w-full object-cover aspect-[3/4] border-8 border-background"
                    />
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/5 rounded-t-full -z-10" />
                </div>
              </div>

              <div className="md:col-span-7 lg:col-span-8 space-y-6">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl leading-tight"
                  style={{
                    fontFamily:
                      "'Playfair Display', Georgia, 'Times New Roman', serif",
                    fontWeight: "400",
                  }}
                >
                  Prof. Sabitu Ariyo <br />
                  <span className="text-primary font-medium">Olagoke</span>
                </h1>

                <div className="h-1 w-20 bg-primary/20" />

                <p className="text-lg md:text-xl text-primary font-medium italic leading-relaxed">
                  JPFNSE, FNIM, FAES, FNATE MNSChE, REGD. ENGR (COREN), MNIEM,
                  MIRDI, FCPHMN, FCMPA, FRecon, FISM {"{Ghana}"}, FIPMD, CFIAR,
                  CP, SPE, COM, POF, MDII
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  A consummate Management Consultant on Education, Religion and
                  Politics; a Justice of the Peace, Mentor, and Social
                  commentator.
                </p>
              </div>
            </div>

            {/* Main Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-primary/30 flex-grow" />
                    <h2
                      className="text-2xl font-medium text-foreground whitespace-nowrap"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Early Life & Education
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
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
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-primary/30 flex-grow" />
                    <h2
                      className="text-2xl font-medium text-foreground whitespace-nowrap"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Career Highlights
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
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
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-primary/30 flex-grow" />
                    <h2
                      className="text-2xl font-medium text-foreground whitespace-nowrap"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Religious & Social Impact
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
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
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-primary/30 flex-grow" />
                    <h2
                      className="text-2xl font-medium text-foreground whitespace-nowrap"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Administrative & Leadership Roles
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
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
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-primary/30 flex-grow" />
                    <h2
                      className="text-2xl font-medium text-foreground whitespace-nowrap"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Publications & Authorship
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Prof. Olagoke is an accomplished author with more than two
                      thousand publications to his credit. His work spans
                      various disciplines:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>7 Engineering Books</li>
                      <li>15 Social Sciences Texts</li>
                      <li>16 Socio-Religious Texts</li>
                      <li>
                        Numerous Journal publications and Conference proceedings
                      </li>
                      <li>
                        Technical/Management Papers and Column/Feature Articles
                        in national dailies
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-primary/30 flex-grow" />
                    <h2
                      className="text-2xl font-medium text-foreground whitespace-nowrap"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Patronage & Recognition
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      He serves as Patron and Grand Patron to numerous notable
                      bodies, including the Nigeria Union of Journalists, Muslim
                      Media Practitioners, Scouts Association of Nigeria, and
                      various youth and student organizations across the
                      country.
                    </p>
                    <p>
                      His contributions have been recognized with over 90
                      honours and awards from state governments, professional
                      bodies, and religious institutions, highlighting his
                      result-oriented leadership and public relations skills.
                    </p>
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <div className="bg-muted/30 p-8 rounded-3xl border border-primary/10">
                  <h3 className="text-xl font-semibold mb-6 text-primary">
                    Professional Memberships
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-4">
                    <p>Registered Engineer (COREN)</p>
                    <p>Fellow, Nigerian Society of Engineers</p>
                    <p>Fellow, Nigeria Institute of Management (Chartered)</p>
                    <p>
                      Fellow, Nigerian Association of Technologists in
                      Engineering
                    </p>
                    <p>Member, Nigerian Society of Chemical Engineers</p>
                    <p>Fellow, Academy for Entrepreneurial Studies</p>
                    <p className="text-xs pt-4 border-t border-primary/5">
                      + Fellow of 10 and Member of 4 professional bodies
                      globally.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-3xl">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    Core Vision
                  </h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>Functional education and functional politics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>Youth emancipation and good governance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>Inclusive society for PWDs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>Functional religion without discrimination</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm italic text-muted-foreground p-4 border-l-2 border-primary/20">
                  "Professor Sabitu Ariyo Olagoke, JP is the Patron, Assembly of
                  Justices of the Peace, Oyo State, Nigeria."
                </p>
              </div>
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
