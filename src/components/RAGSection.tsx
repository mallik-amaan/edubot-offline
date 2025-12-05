import { FileUp, Scissors, Binary, Database, Search, Bot, ArrowRight } from "lucide-react";

const ragSteps = [
  {
    icon: FileUp,
    title: "Document Ingestion",
    description: "Upload PDFs, textbooks, notes, and syllabus documents into the system.",
  },
  {
    icon: Scissors,
    title: "Chunking",
    description: "Documents are split into semantic chunks for optimal retrieval.",
  },
  {
    icon: Binary,
    title: "Embedding",
    description: "Text chunks converted to vectors using sentence-transformers.",
  },
  {
    icon: Database,
    title: "FAISS Vector Store",
    description: "Embeddings stored in high-performance FAISS index for fast search.",
  },
  {
    icon: Search,
    title: "Retrieval",
    description: "Student queries matched to most relevant document chunks.",
  },
  {
    icon: Bot,
    title: "LLM Generation",
    description: "Local model generates answer using retrieved context.",
  },
];

const RAGSection = () => {
  return (
    <section id="rag" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Database className="w-4 h-4" />
            RAG Framework
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How <span className="gradient-text">Document Retrieval</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Retrieval-Augmented Generation pipeline ensures answers are always 
            grounded in your actual curriculum materials, not hallucinated content.
          </p>
        </div>

        {/* RAG Flow Diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ragSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step Card */}
                  <div className="w-full p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">Step {index + 1}</div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Arrow (hidden on last item) */}
                {index < ragSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-card rounded-xl border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">Embedding Models</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use state-of-the-art sentence transformers for semantic understanding:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">all-mpnet-base-v2</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">MiniLM-L6-v2</span>
            </div>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">Vector Search</h3>
            <p className="text-sm text-muted-foreground mb-4">
              FAISS provides fast, accurate similarity search even with large document collections:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Sub-millisecond search</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">GPU acceleration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAGSection;
