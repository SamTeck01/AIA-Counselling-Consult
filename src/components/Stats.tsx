const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "150k+", label: "Satisfied Clients" },
  { value: "30+", label: "Countries Reached" },
  { value: "22k+", label: "Classes Conducted" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
