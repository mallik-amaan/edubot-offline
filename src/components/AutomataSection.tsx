import { GitBranch, Circle, ArrowRight, Shield, Filter, FileWarning, ClipboardCheck, MessageSquare } from "lucide-react";

const automataFeatures = [
  {
    icon: Filter,
    title: "DFA Query Filtering",
    description: "Deterministic Finite Automata ensure only valid academic queries pass through.",
  },
  {
    icon: GitBranch,
    title: "NFA → DFA Conversion",
    description: "Non-deterministic patterns converted to efficient deterministic state machines.",
  },
  {
    icon: ClipboardCheck,
    title: "Grammar Checking",
    description: "Validate query structure using context-free grammar rules.",
  },
  {
    icon: MessageSquare,
    title: "Topic Classification",
    description: "Automatically categorize queries into subject areas using state transitions.",
  },
  {
    icon: Circle,
    title: "Session State Tracking",
    description: "FSM-based session management tracks conversation context.",
  },
  {
    icon: FileWarning,
    title: "Forbidden Query Detection",
    description: "Pattern matching blocks inappropriate or off-topic requests.",
  },
];

const AutomataSection = () => {
  return (
    <section id="automata" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <GitBranch className="w-4 h-4" />
            Automata Integration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            <span className="gradient-text">Formal Methods</span> for Query Safety
          </h2>
          <p className="text-lg text-muted-foreground">
            EduBot uses computational automata theory to validate, filter, and process 
            student queries—ensuring safe, on-topic, and grammatically sound interactions.
          </p>
        </div>

        {/* State Machine Visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 bg-background rounded-2xl border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Query Processing State Machine</h3>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {/* State 1: Input */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">q₀</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Input</span>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary hidden sm:block" />
              
              {/* State 2: Sanitize */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">q₁</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Sanitize</span>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary hidden sm:block" />
              
              {/* State 3: Classify */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">q₂</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Classify</span>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary hidden sm:block" />
              
              {/* State 4: Validate */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">q₃</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Validate</span>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary hidden sm:block" />
              
              {/* State 5: Accept (double circle) */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-primary bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">q₄</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Accept</span>
              </div>
            </div>
            
            {/* Reject state */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-destructive/10 rounded-full">
                <div className="w-8 h-8 rounded-full border-2 border-destructive flex items-center justify-center">
                  <span className="text-xs font-bold text-destructive">qᵣ</span>
                </div>
                <span className="text-sm text-destructive font-medium">Reject (forbidden pattern detected)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automataFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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

export default AutomataSection;
