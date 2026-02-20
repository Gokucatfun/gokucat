import { Starfield } from "@/components/background/Starfield";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { TokenomicsSection } from "@/components/sections/TokenomicsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Starfield />
      <div className="page-overlay pointer-events-none absolute inset-0" />

      <main className="relative z-10 pb-8">
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <RoadmapSection />
        <CommunitySection />
        <QuoteFormSection />
      </main>

      <Footer />
    </div>
  );
}
