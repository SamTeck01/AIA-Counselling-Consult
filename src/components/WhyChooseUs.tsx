import { CheckCircle, Heart, TrendingUp } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Experienced Professionals",
    description: "On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure pain.",
  },
  {
    icon: Heart,
    title: "Client Centered Approach",
    description: "On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure pain.",
  },
  {
    icon: TrendingUp,
    title: "Commitment To Growth",
    description: "On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure pain.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted Care, Lasting Positive Change
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure pain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
