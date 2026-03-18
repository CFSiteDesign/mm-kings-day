import HeroSection from "@/components/HeroSection";
import DamageSection from "@/components/DamageSection";
import PropertySelector from "@/components/PropertySelector";
import FooterSection from "@/components/FooterSection";

const DutchDivider = () => <div className="h-2 dutch-flag-stripe-h relative z-20" />;

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <DutchDivider />
      <DamageSection />
      <DutchDivider />
      <PropertySelector />
      <DutchDivider />
      <FooterSection />
    </div>
  );
};

export default Index;
