import { CatMascot } from "@/components/ui/CatMascot";
import { CosmicCard } from "@/components/ui/CosmicCard";
import { FadeIn } from "@/components/ui/FadeIn";

const features = ["Fair Launch", "Locked Liquidity", "Transparent Tokenomics"];

export function AboutSection() {
  return (
    <section id="about">
      <FadeIn>
        <CosmicCard className="h-full min-h-[640px] p-7">
          <h3 className="font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-white">
            What is GokuCat?
          </h3>
          <p className="mt-5 max-w-sm text-xl leading-relaxed text-slate-200">
            GokuCat is a community-driven meme token floating above market noise. No promises. Just
            cloud energy.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-2xl text-slate-100">
                <span className="text-cyan-300">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center sm:justify-end">
            <CatMascot className="h-52 w-52 sm:h-64 sm:w-64" />
          </div>
        </CosmicCard>
      </FadeIn>
    </section>
  );
}
