import { Card } from "@/components/ui/card";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

const testimonials = [
  {
    name: "Clare Bamford",
    role: "@staking",
    content:
      "On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure pain.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Clark Jhonso",
    role: "@staking",
    content:
      "Conversely, we condemn with firm conviction and disfavor those who are misled and corrupted by the allure of comfort and.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Mia Lan",
    role: "@staking",
    content:
      "On the contrary, we firmly reject and disapprove of those who let themselves be deceived and weakened by temptations of desire and ease.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Clare Bamford",
    role: "@staking",
    content:
      "On the contrary, we firmly reject and disapprove of those who let themselves be deceived and weakened by temptations of desire and ease.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Clark Jhonso",
    role: "@staking",
    content:
      "On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure pain.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Mia Lan",
    role: "@staking",
    content:
      "Conversely, we condemn with firm conviction and disfavor those who are misled and corrupted by the allure of comfort and.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalPages = 3;

  const row1Controls = useAnimation();
  const row2Controls = useAnimation();

  // Auto-cycle through pages
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, totalPages]);

  // Animate both rows when page changes
  useEffect(() => {
    const offset = -currentPage * 33.33; // Each page shifts by 1/3 of the width
    row1Controls.start({ x: `${offset}%`, transition: { duration: 0.8, ease: "easeInOut" } });
    row2Controls.start({ x: `${offset}%`, transition: { duration: 0.8, ease: "easeInOut" } });
  }, [currentPage, row1Controls, row2Controls]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flexCenter space-x-7 flex-row mb-6">
            <div className="h-[1.2px] bg-primary w-[50px]" />
            <span className="text-sm text-primary tracking-wider uppercase">
              Client's Testimonials
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            You're in good company
          </h2>
          <p className="text-base text-muted-foreground">
            Clear, actionable plans to align business success.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - Draggable */}
          <div className="overflow-hidden mb-6">
            <motion.div
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -800, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsPlaying(false)}
              animate={row1Controls}
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-full md:w-[calc((100%-48px)/3)] flex-shrink-0"
                >
                  <Card className="p-8 rounded-3xl bg-muted/30 border-0 h-full flex flex-col">
                    <p className="text-muted-foreground mb-8 leading-relaxed flex-grow text-sm">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Draggable */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -800, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsPlaying(false)}
              animate={row2Controls}
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i + 6}
                  variants={cardVariants}
                  custom={i + 6}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-full md:w-[calc((100%-48px)/3)] flex-shrink-0"
                >
                  <Card className="p-8 rounded-3xl bg-muted/30 border-0 h-full flex flex-col">
                    <p className="text-muted-foreground mb-8 leading-relaxed flex-grow text-sm">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-3 mt-12">
          <button
            onClick={togglePlayPause}
            className={cn(
              "w-8 h-8 rounded-full border flex items-center justify-center transition-all hover:border-foreground",
              isPlaying
                ? "border-foreground"
                : "border-muted-foreground/30"
            )}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 fill-current" />
            ) : (
              <Play className="w-3 h-3 fill-current ml-0.5" />
            )}
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentPage === i ? "bg-foreground" : "bg-muted-foreground/30"
              )}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
