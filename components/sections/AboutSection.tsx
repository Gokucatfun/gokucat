import Image from "next/image";
import { CosmicCard } from "@/components/ui/CosmicCard";
import { Section } from "@/components/ui/Section";

const bullets = ["Fair Launch", "Locked Liquidity", "Transparent Tokenomics"];

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-6 md:grid-cols-2">
        <CosmicCard className="rounded-2xl p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">What is CloudCat?</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200 md:text-lg">
            CloudCat is a community-driven meme token floating above market noise. No promises. No
            hype guarantees. Just cloud energy.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-100">
                <span className="text-cyan-300">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CosmicCard>

        <CosmicCard className="rounded-2xl p-4">
          <div className="relative h-[320px] overflow-hidden rounded-xl border border-violet-200/30 shadow-[0_0_26px_rgba(168,85,247,0.2)] sm:h-[380px]">
            <Image src="/gokucat-still.png" alt="CloudCat art" fill className="object-cover" />
          </div>
        </CosmicCard>
      </div>
    </Section>
  );
}
