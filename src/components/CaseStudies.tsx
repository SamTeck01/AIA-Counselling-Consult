import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import caseStudy1 from "../assets/social anxiety.jpg";
import chocolateWomanSmiling from '@/assets/chocolate-woman-smiling.jpg';
import blackWomanSmiling from '@/assets/black-woman-smiling.jpg';


// 📝 Sample Case Study data
const caseStudies = [
  {
    title: "Beyond Social Fear",
    image: caseStudy1,
  },
  {
    title: "Social Anxiety Breakthrough",
    image: blackWomanSmiling,
  },
  {
    title: "Rise Above Anxiety",
    image: chocolateWomanSmiling,
  },
];

export default function CaseStudies() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 container">
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= Header ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-7 flex-row mb-8">
              <div className="h-[1.2px] bg-primary w-[50px]" />
              <span className="text-sm text-primary tracking-wider uppercase">
                Case Study's
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-primary md:w-[70%]">
              Real Stories of Healing and Growth
            </h2>
          </div>

          <div>
            <button className="bg-transparent border border-primary text-primary rounded-full px-6 py-3 text-sm font-medium hover:bg-primary hover:text-white transition">
              View All Case Study's
              <span className="inline-block ml-2 animate-bounce-arrow">→</span>
            </button>
          </div>
        </div>

        {/* ================= Carousel ================= */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((item, i) => (
            <div
              key={i}
              className="relative min-w-[280px] md:min-w-[350px] lg:min-w-[400px] aspect-[3/4] rounded-[2rem] overflow-hidden snap-start group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-['Playfair_Display'] text-xl mb-4">
                  {item.title}
                </h3>
                <button className="inline-flex items-center px-5 py-2 rounded-full border border-white/80 text-sm font-medium bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Navigation Arrows ================= */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
