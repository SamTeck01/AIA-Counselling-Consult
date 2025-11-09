import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { getFeaturedPosts } from "@/data/blogData";
import { ArrowRight } from "lucide-react";

const blogPosts = getFeaturedPosts();

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 bg-background relative overflow-hidden">
      {/* Floating Accent Circle */}
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
        className="absolute top-1/2 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"
      />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-7 mb-8">
          <div className="h-[1.2px] bg-primary w-[50px]" />
          <span className="text-sm text-primary tracking-wider uppercase">
            Latest Articles
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-[48px] leading-tight max-w-xl"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 400,
            }}
          >
            Guidance and insights for Mental Wellness Journey
          </motion.h2>
        </div>

        {/* Blog List */}
        <div className="space-y-0">
          {blogPosts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_6fr_500px] gap-4 md:gap-14 py-12 items-start group cursor-pointer"
              >
                {/* Number and title that show on mobile*/}
                <div className="flex-shrink-0 flex flex-row gap-2">
                  <span className="text-foreground/30 text-xl font-light h-fit">
                    ({String(index + 1).padStart(2, "0")})
                  </span>
                  <span
                    className="text-[24px] font-light leading-tight inline-flex md:hidden group-hover:text-primary transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {post.title}
                  </span>
                </div>

                {/* Title & Tags & Info */}
                <div className="space-y-4 mt-2">
                  <div className="flex flex-wrap gap-4">
                    <span className="text-[12px] text-muted-foreground tracking-wide uppercase border border-muted-foreground/25 rounded-full px-2 py-1">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-muted-foreground tracking-wide uppercase border border-muted-foreground/25 rounded-full px-2 py-1">
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-[24px] font-light leading-tight hidden md:block group-hover:text-primary transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed hidden md:block">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[280px] rounded-[30px] overflow-hidden w-full"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
