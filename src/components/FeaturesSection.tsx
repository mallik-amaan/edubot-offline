import { 
  WifiOff, Shield, BookOpen, GitBranch, Filter, 
  FileText, Zap, LayoutDashboard, Users 
} from "lucide-react";

const features = [
  {
    icon: WifiOff,
    title: "Offline AI Chatbot",
    description: "Fully functional without internet. Students can access help anytime on the campus network.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Privacy-First Inference",
    description: "All processing happens locally. No student data ever leaves your school's servers.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Textbook-Based Answers",
    description: "RAG-powered responses grounded in your actual curriculum materials and syllabus.",
    color: "primary",
  },
  {
    icon: GitBranch,
    title: "Automata Input Validation",
    description: "Finite-state machines validate and sanitize every student query for safety.",
    color: "primary",
  },
  {
    icon: Filter,
    title: "DFA Topic Filtering",
    description: "Deterministic automata ensure responses stay within approved academic topics.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Multi-Document Retrieval",
    description: "Ingests PDFs, notes, and documents. Combines knowledge from multiple sources.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Fast Local Inference",
    description: "Optimized for low-resource environments. Quick responses even on modest hardware.",
    color: "primary",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Monitor usage, manage documents, configure topics, and view analytics.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Student Login System",
    description: "Secure authentication with session management and usage tracking per student.",
    color: "primary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Everything You Need for{" "}
            <span className="gradient-text">Secure AI Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            EduBot combines cutting-edge AI technology with enterprise-grade security 
            to deliver a safe, effective learning assistant for your institution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
