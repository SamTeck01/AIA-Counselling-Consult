import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Started",
    price: "$10",
    period: "Mont",
    description: "The wise man therefore always holds in these matters to this principle of selection pleasures pains.",
    features: [
      "Individual Therapy Sessions",
      "Personalized Care Plan",
      "Initial Assessment",
      "Flexible Scheduling",
    ],
  },
  {
    name: "Professional",
    price: "$90",
    period: "Mont",
    description: "The wise man therefore always holds in these matters to this principle of selection pleasures pains.",
    features: [
      "Individual Therapy Sessions",
      "Personalized Care Plan",
      "Initial Assessment",
      "Flexible Scheduling",
    ],
    featured: true,
  },
  {
    name: "Genius",
    price: "$110",
    period: "Mont",
    description: "The wise man therefore always holds in these matters to this principle of selection pleasures pains.",
    features: [
      "Individual Therapy Sessions",
      "Personalized Care Plan",
      "Initial Assessment",
      "Flexible Scheduling",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Pricing Plan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Transparent pricing, with top tier design partner
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 ${plan.featured ? 'border-primary shadow-xl scale-105' : ''}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.featured ? 'bg-primary text-primary-foreground hover:bg-accent' : ''}`}
                variant={plan.featured ? "default" : "outline"}
              >
                Buy Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
