import BgGradient from "@/components/common/BgGradient";
import HeroSection from "@/components/Home/HeroSection";
import DemoSection from "@/components/Home/DemoSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import PricingSection from "@/components/Home/PricingSection";
import CTASection from "@/components/Home/CTASection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
}
