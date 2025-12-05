import { Server, GitBranch, Database, Bot, Monitor, ArrowRight, ArrowDown } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Server className="w-4 h-4" />
            System Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How <span className="gradient-text">EduBot Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A simplified view of EduBot's architecture showing how queries flow 
            from student devices through the RAG pipeline to generate answers.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="p-8 bg-background rounded-2xl border border-border">
            {/* Main Flow */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Student UI */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 border-2 border-primary">
                  <Monitor className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Student UI</h3>
                <p className="text-xs text-muted-foreground">Web / Mobile App</p>
              </div>

              <ArrowRight className="w-8 h-8 text-primary hidden lg:block" />
              <ArrowDown className="w-8 h-8 text-primary lg:hidden" />

              {/* Automata Layer */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-3 border-2 border-accent">
                  <GitBranch className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Automata Filter</h3>
                <p className="text-xs text-muted-foreground">DFA Query Validation</p>
              </div>

              <ArrowRight className="w-8 h-8 text-primary hidden lg:block" />
              <ArrowDown className="w-8 h-8 text-primary lg:hidden" />

              {/* RAG Pipeline */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 border-2 border-primary">
                  <Database className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">RAG Pipeline</h3>
                <p className="text-xs text-muted-foreground">FAISS + Embeddings</p>
              </div>

              <ArrowRight className="w-8 h-8 text-primary hidden lg:block" />
              <ArrowDown className="w-8 h-8 text-primary lg:hidden" />

              {/* Local LLM */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-3 shadow-lg glow-shadow">
                  <Bot className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Local LLM</h3>
                <p className="text-xs text-muted-foreground">Phi-3 / Llama 3 / Qwen</p>
              </div>
            </div>

            {/* Local Server Box */}
            <div className="mt-8 p-4 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center justify-center gap-3">
                <Server className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  All Components Run on Local Server — No Internet Required
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Description */}
        <div className="mt-12 grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { step: "1", title: "Query Input", desc: "Student submits question" },
            { step: "2", title: "Validation", desc: "DFA filters unsafe queries" },
            { step: "3", title: "Retrieval", desc: "Fetch relevant context" },
            { step: "4", title: "Generation", desc: "LLM produces answer" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-primary-foreground">{item.step}</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
