import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const phases = [
  {
    phase: "Phase 1",
    title: "Takeoff",
    details: "Launch + Liquidity"
  },
  {
    phase: "Phase 2",
    title: "Orbit",
    details: "NFT Drop + Community Growth"
  },
  {
    phase: "Phase 3",
    title: "Stratosphere",
    details: "Mini Game + Staking Visual"
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    details: "Ecosystem Integration"
  }
];

export function RoadmapSection() {
  return (
    <Section id="roadmap" title="Roadmap">
      {/* Horizontal timeline remains scrollable on small screens. */}
      <FadeIn>
        <div className="overflow-x-auto pb-4">
          <div className="relative flex min-w-[760px] gap-5 px-2 md:min-w-full">
            <div className="absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-cosmic-gold/60 to-transparent" />
            {phases.map((item) => (
              <div
                key={item.phase}
                className="relative flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <div className="mb-4 h-3 w-3 rounded-full bg-cosmic-gold shadow-glow" />
                <p className="text-xs uppercase tracking-[0.18em] text-cosmic-gold">{item.phase}</p>
                <h3 className="mt-2 font-[var(--font-space-grotesk)] text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
