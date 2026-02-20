import { CosmicCard } from "@/components/ui/CosmicCard";
import { Section } from "@/components/ui/Section";

const phases = [
  { phase: "Phase 1", title: "Takeoff" },
  { phase: "Phase 2", title: "Orbit" },
  { phase: "Phase 3", title: "Stratosphere" },
  { phase: "Phase 4", title: "Expansion" }
];

export function RoadmapSection() {
  return (
    <Section id="roadmap" title="Roadmap">
      <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute left-6 right-6 top-8 hidden h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent lg:block" />
        {phases.map((item) => (
          <CosmicCard key={item.phase} className="rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-200">{item.phase}</p>
            <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
          </CosmicCard>
        ))}
      </div>
    </Section>
  );
}
