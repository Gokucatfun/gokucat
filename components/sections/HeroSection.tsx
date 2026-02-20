import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { CosmicCard } from "@/components/ui/CosmicCard";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <Section id="hero" className="pt-8 md:pt-12">
      <CosmicCard className="rounded-2xl p-6 sm:p-8">
        <Navbar />

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center text-center">
          <div className="float-image relative h-56 w-56 overflow-hidden rounded-xl border border-violet-200/30 shadow-[0_0_35px_rgba(250,204,21,0.18)] sm:h-64 sm:w-64">
            <Image src="/gokucat-still.png" alt="Warrior CloudCat" fill className="object-cover" priority />
          </div>

          <h1 className="mt-10 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">CLOUDCAT</h1>
          <p className="mt-4 text-lg text-slate-200 sm:text-2xl">Above the noise. Riding the cloud.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="primary" href="#community">
              Buy $CLOUD
            </Button>
            <Button variant="outline" href="#tokenomics">
              View Chart
            </Button>
            <Button variant="outline" href="#about">
              Read the Lore
            </Button>
          </div>

          <p className="mt-6 text-sm tracking-[0.18em] text-slate-300">cloudcat.eth</p>
        </div>
      </CosmicCard>
    </Section>
  );
}
