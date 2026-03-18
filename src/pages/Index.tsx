import HeroSection from "@/components/HeroSection";
import DamageSection from "@/components/DamageSection";
import PropertySelector from "@/components/PropertySelector";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <DamageSection />
      <PropertySelector />
      <FooterSection />
    </div>
  );
};

export default Index;
