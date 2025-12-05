import { Server, BookOpen, Brain, Users, CheckCircle } from "lucide-react";

const benefits = [
  "Runs entirely on your school's local network",
  "Uses your own textbooks, notes, and syllabus",
  "Lightweight LLMs optimized for educational content",
  "Zero data leaves your campus",
  "Works without internet connection",
  "Personalized help for every student",
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative p-8 bg-card rounded-2xl border border-border shadow-xl">
              {/* Server illustration */}
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center shadow-lg glow-shadow">
                  <Server className="w-12 h-12 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">Local AI Server</p>
                  <p className="text-sm text-muted-foreground">Phi-3, Llama 3 8B, Qwen</p>
                </div>
                
                {/* Connection lines */}
                <div className="w-px h-8 bg-gradient-to-b from-primary to-primary/30" />
                
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[
                    { icon: BookOpen, label: "Textbooks" },
                    { icon: Brain, label: "RAG Engine" },
                    { icon: Users, label: "Students" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-2 p-4 bg-background rounded-xl border border-border">
                      <item.icon className="w-8 h-8 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg">
              100% Offline
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium shadow-lg">
              Privacy First
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Brain className="w-4 h-4" />
                The Solution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet <span className="gradient-text">EduBot</span>: Your School's Private AI Assistant
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EduBot is an offline LLM-based chatbot designed specifically for educational institutions. 
                It uses your school-provided textbooks, notes, and syllabus documents to deliver 
                personalized, curriculum-aligned assistance to students.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Powered by:</span>{" "}
                phi3-mini, Llama 3 8B, Qwen – lightweight models optimized for local inference
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
