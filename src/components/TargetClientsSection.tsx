import { Building2, GraduationCap, School, BookOpen, Building, Landmark } from "lucide-react";

const clients = [
  {
    icon: School,
    title: "Secondary Schools",
    description: "Middle and high schools seeking safe AI assistance for students.",
  },
  {
    icon: GraduationCap,
    title: "Colleges",
    description: "Community colleges and technical institutes with privacy requirements.",
  },
  {
    icon: Building2,
    title: "Academies",
    description: "Specialized academies and charter schools with custom curricula.",
  },
  {
    icon: BookOpen,
    title: "Coaching Centers",
    description: "Test prep and tutoring centers wanting personalized AI help.",
  },
  {
    icon: Landmark,
    title: "Universities",
    description: "Higher education institutions needing internal learning bots.",
  },
  {
    icon: Building,
    title: "Corporate Training",
    description: "Organizations with internal training and compliance needs.",
  },
];

const TargetClientsSection = () => {
  return (
    <section id="clients" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Target Clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built for <span className="gradient-text">Educational Institutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            EduBot is designed to serve a wide range of educational organizations 
            that prioritize student privacy and offline capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client.title}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <client.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{client.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetClientsSection;
