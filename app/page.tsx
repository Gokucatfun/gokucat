import { Starfield } from "@/components/background/Starfield";
import { Footer } from "@/components/layout/Footer";
import { MiniFooterCard } from "@/components/layout/MiniFooterCard";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { TokenomicsSection } from "@/components/sections/TokenomicsSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionTag } from "@/components/ui/SectionTag";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-8">
      <Starfield />
      <div className="cosmic-overlay pointer-events-none absolute inset-0" />

      <main className="relative z-10 mx-auto max-w-[1550px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-3">
            <SectionTag>Hero Section</SectionTag>
            <HeroSection />
          </div>
          <div className="space-y-3">
            <SectionTag>About</SectionTag>
            <AboutSection />
          </div>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-3">
            <SectionTag>Tokenomics</SectionTag>
            <TokenomicsSection />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <SectionTag>Community</SectionTag>
              <CommunitySection />
            </div>
            <div className="space-y-3">
              <SectionTag>Footer</SectionTag>
              <MiniFooterCard />
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <SectionTag>Roadmap</SectionTag>
            <RoadmapSection />
          </div>
          <div className="space-y-3">
            <SectionTag>Footer</SectionTag>
            <FadeIn>
              <Footer />
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  );
}
