import { Button } from "@/components/ui/button";
import { Shield, Wifi, Server } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Shield className="w-4 h-4" />
                100% Offline & Private
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                EduBot – The{" "}
                <span className="gradient-text">Offline AI</span>{" "}
                Learning Assistant for Schools
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                A fully local, privacy-first AI chatbot that runs on your school's network. 
                No cloud. No internet required. Aligned with your textbooks and curriculum.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-up stagger-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm">
                <Wifi className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Works Offline</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Data Never Leaves Campus</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm">
                <Server className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Runs on Local Hardware</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Request a Demo</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-fade-up stagger-2">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20 animate-pulse-slow" />
              <img
                src={heroIllustration}
                alt="EduBot - Local AI assistant helping students learn"
                className="relative w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
