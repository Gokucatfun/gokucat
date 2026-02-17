import { Starfield } from "@/components/background/Starfield";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { TokenomicsSection } from "@/components/sections/TokenomicsSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Starfield />
      <div className="cosmic-overlay pointer-events-none absolute inset-0" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <TokenomicsSection />
          <RoadmapSection />
          <CommunitySection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
