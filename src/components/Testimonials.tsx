import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import AOS from "aos";

const testimonials = [
  {
    name: "Clare Bamford",
    role: "@staking",
    content: "On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure pain.",
    avatar: "CB",
  },
  {
    name: "Clark Jhonso",
    role: "@staking",
    content: "Conversely, we condemn with firm conviction and disfavor those who are misled and corrupted by the allure of comfort and.",
    avatar: "CJ",
  },
  {
    name: "Mia Lan",
    role: "@staking",
    content: "On the contrary, we firmly reject and disapprove of those who let themselves be deceived and weakened by temptations of desire and ease.",
    avatar: "ML",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Client's Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            You're in good company
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear, actionable plans to align business success.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
