import { AlertTriangle, Cloud, Eye, WifiOff, ShieldAlert, Lock } from "lucide-react";

const problems = [
  {
    icon: Cloud,
    title: "Cloud Dependency",
    description: "Online AI tools require constant internet, making them unreliable in many school environments.",
  },
  {
    icon: Eye,
    title: "Privacy Concerns",
    description: "Student data sent to external servers raises serious privacy and compliance issues.",
  },
  {
    icon: ShieldAlert,
    title: "Unfiltered Content",
    description: "Public AI models may generate inappropriate or off-curriculum responses.",
  },
  {
    icon: WifiOff,
    title: "Connectivity Issues",
    description: "Rural and remote schools often lack reliable internet for cloud-based solutions.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Online AI Tools Are{" "}
            <span className="text-destructive">Risky for Schools</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Schools need AI assistance, but current cloud-based solutions pose significant 
            challenges to student privacy, data security, and reliable access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                <Lock className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">The Solution?</h3>
                <p className="text-muted-foreground">No cloud. No internet. 100% secure academic assistance.</p>
              </div>
            </div>
            <a 
              href="#solution" 
              className="text-primary font-semibold hover:underline flex items-center gap-2"
            >
              See how EduBot solves this →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
