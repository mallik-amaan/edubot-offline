import { BookOpen, HelpCircle, FileEdit, Laptop, WifiOff, MapPin } from "lucide-react";

const scenarios = [
  {
    icon: BookOpen,
    title: "Exam Preparation",
    description: "Students review concepts and practice questions aligned with their syllabus before exams.",
  },
  {
    icon: HelpCircle,
    title: "Textbook Questions",
    description: "Get instant answers to questions directly from assigned textbooks and course materials.",
  },
  {
    icon: FileEdit,
    title: "Practice Material Creation",
    description: "Teachers generate quizzes, worksheets, and practice problems from curriculum content.",
  },
  {
    icon: Laptop,
    title: "Self-Study Labs",
    description: "Students work independently in computer labs with AI-assisted learning support.",
  },
  {
    icon: WifiOff,
    title: "Offline Computer Labs",
    description: "Schools without reliable internet can still provide AI-powered learning assistance.",
  },
  {
    icon: MapPin,
    title: "Remote & Rural Areas",
    description: "Perfect for schools in areas with weak or no internet connectivity.",
  },
];

const UsageScenariosSection = () => {
  return (
    <section id="scenarios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Laptop className="w-4 h-4" />
            Usage Scenarios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How Schools <span className="gradient-text">Use EduBot</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From exam prep to self-study, EduBot supports diverse learning 
            scenarios across different educational environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.title}
              className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <scenario.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{scenario.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{scenario.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageScenariosSection;
