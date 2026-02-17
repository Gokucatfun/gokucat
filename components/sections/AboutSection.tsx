import { CatMascot } from "@/components/ui/CatMascot";
import { CosmicCard } from "@/components/ui/CosmicCard";
import { FadeIn } from "@/components/ui/FadeIn";

const features = ["Fair Launch", "Locked Liquidity", "Transparent tokenomics"];

export function AboutSection() {
  return (
    <section id="about">
      <FadeIn>
        <CosmicCard className="card-sky-about min-h-[800px] p-7">
          <h3 className="font-[var(--font-space-grotesk)] text-[3.2rem] font-bold leading-tight text-white">
            What is GokuCat?
          </h3>

          <p className="mt-5 max-w-md text-[1.45rem] leading-relaxed text-slate-100">
            GokuCat is a community-driven meme token floating above market noise. No promises. No
            hype guarantees. Just cloud energy.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[2rem] text-slate-100 sm:text-[1.7rem]">
                <span className="text-cyan-300">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center sm:justify-end">
            <CatMascot className="h-56 w-56 sm:h-64 sm:w-64" />
          </div>
        </CosmicCard>
      </FadeIn>
    </section>
  );
}
