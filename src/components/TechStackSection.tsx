import { Server, Monitor, Cog } from "lucide-react";

const backendTech = [
  { name: "Python", description: "Core backend language" },
  { name: "FastAPI", description: "High-performance API framework" },
  { name: "FAISS", description: "Vector similarity search" },
  { name: "Sentence-transformers", description: "mpnet / MiniLM embeddings" },
  { name: "Ollama", description: "Local LLM inference" },
  { name: "LangChain", description: "LLM orchestration" },
];

const frontendTech = [
  { name: "React", description: "Modern UI framework" },
  { name: "TypeScript", description: "Type-safe development" },
  { name: "Tailwind CSS", description: "Utility-first styling" },
  { name: "Flutter (Optional)", description: "Mobile app support" },
];

const otherTech = [
  { name: "OCR Pipeline", description: "PDF text extraction" },
  { name: "RAG Pipeline", description: "Document retrieval system" },
  { name: "DFA Engine", description: "Query validation" },
  { name: "SQLite/PostgreSQL", description: "Local database" },
];

const TechStackSection = () => {
  return (
    <section id="technology" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Cog className="w-4 h-4" />
            Technology Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built with <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            EduBot leverages cutting-edge open-source technologies to deliver 
            a robust, scalable, and maintainable solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Backend */}
          <div className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <Server className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Backend</h3>
                <p className="text-sm text-muted-foreground">Server & AI Logic</p>
              </div>
            </div>
            <div className="space-y-3">
              {backendTech.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                  <span className="font-medium text-foreground">{tech.name}</span>
                  <span className="text-xs text-muted-foreground">{tech.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Frontend</h3>
                <p className="text-sm text-muted-foreground">User Interface</p>
              </div>
            </div>
            <div className="space-y-3">
              {frontendTech.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                  <span className="font-medium text-foreground">{tech.name}</span>
                  <span className="text-xs text-muted-foreground">{tech.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Other</h3>
                <p className="text-sm text-muted-foreground">Infrastructure</p>
              </div>
            </div>
            <div className="space-y-3">
              {otherTech.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/50">
                  <span className="font-medium text-foreground">{tech.name}</span>
                  <span className="text-xs text-muted-foreground">{tech.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
