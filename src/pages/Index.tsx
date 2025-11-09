import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubHero from '@/components/SubHero';
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import SelfAssessmentCTA from "@/components/SelfAssessmentCTA";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <div className="px-4">
        <Hero />
      </div>
      <SubHero/>
      <About />
      <Services />
      <SelfAssessmentCTA />
      <WhyChooseUs/>
      <Testimonials />
      <Team />
      <Pricing />
      <Contact />
      <Blog />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
