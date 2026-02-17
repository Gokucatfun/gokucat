import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const features = ["Fair Launch", "Locked Liquidity", "Transparent Tokenomics"];

export function AboutSection() {
  return (
    <Section id="about" className="pt-14" title="What is CloudCat?" titleClassName="text-left md:text-center">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <FadeIn>
          <p className="text-lg leading-relaxed text-slate-300">
            CloudCat is a community-driven meme token floating above market noise. No promises. Just
            cloud energy.
          </p>
          <ul className="mt-7 space-y-4">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-base text-slate-200 before:h-2 before:w-2 before:rounded-full before:bg-cosmic-gold"
              >
                {feature}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2} className="mx-auto">
          <div className="relative rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-lg">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-cosmic-gold/10 blur-2xl" />
            <Image
              src="/mascot-cloudcat.svg"
              alt="CloudCat mascot"
              width={260}
              height={260}
              className="h-56 w-56"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
