import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import iconRelationship from "@/assets/icon-relationship.png";
import iconLife from "@/assets/icon-life.png";
import iconEsteem from "@/assets/icon-esteem.png";
import iconAnxiety from "@/assets/icon-anxiety.png";
import { useEffect } from "react";
import AOS from "aos";

const services = [
  {
    icon: iconRelationship,
    title: "Relationship Dating",
    description: "For our patients with impairments resulting from injury affecting the system.",
  },
  {
    icon: iconLife,
    title: "Life and Counseling",
    description: "For our patients with impairments resulting from injury affecting the system.",
  },
  {
    icon: iconEsteem,
    title: "Best Esteem Counseling",
    description: "For our patients with impairments resulting from injury affecting the system.",
  },
  {
    icon: iconAnxiety,
    title: "Self Esteem Issues",
    description: "For our patients with impairments resulting from injury affecting the system.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive services care for mind and wellness
          </h2>
          <Button variant="outline" className="mt-4">
            Explore Services
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
