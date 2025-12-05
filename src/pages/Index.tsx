import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import RAGSection from "@/components/RAGSection";
import AutomataSection from "@/components/AutomataSection";
import TechStackSection from "@/components/TechStackSection";
import TargetClientsSection from "@/components/TargetClientsSection";
import UsageScenariosSection from "@/components/UsageScenariosSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <RAGSection />
        <AutomataSection />
        <TechStackSection />
        <TargetClientsSection />
        <UsageScenariosSection />
        <ArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
