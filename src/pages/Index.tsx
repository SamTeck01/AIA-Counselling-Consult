import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubHero from '@/components/SubHero';
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4 space-y-11">
        <Hero />
      </div>
      <SubHero/>
      <About />
      <Services />
      <WhyChooseUs/>
      <CaseStudies />
      <Testimonials />
      <Team />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
