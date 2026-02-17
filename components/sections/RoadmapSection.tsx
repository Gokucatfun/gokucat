import { CosmicCard } from "@/components/ui/CosmicCard";
import { FadeIn } from "@/components/ui/FadeIn";

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
    <section id="roadmap">
      <FadeIn>
        <CosmicCard className="p-6 sm:p-8">
          <h3 className="text-center font-[var(--font-space-grotesk)] text-5xl font-semibold text-white">
            Roadmap
          </h3>

          {/* Horizontal timeline that collapses to stacked cards on smaller viewports. */}
          <div className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="pointer-events-none absolute left-8 right-8 top-5 hidden h-px bg-gradient-to-r from-cosmic-gold/20 via-cosmic-gold/80 to-cosmic-gold/20 xl:block" />
            {phases.map((item) => (
              <div key={item.phase} className="rounded-xl border border-white/15 bg-black/20 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-cosmic-gold shadow-glow" />
                  <span className="text-xs uppercase tracking-[0.18em] text-cosmic-gold">{item.phase}</span>
                </div>
                <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-base text-slate-200">{item.details}</p>
              </div>
            ))}
          </div>
        </CosmicCard>
      </FadeIn>
    </section>
  );
}
