"use client";

import { motion } from "framer-motion";
import { CosmicCard } from "@/components/ui/CosmicCard";
import { FadeIn } from "@/components/ui/FadeIn";

const distribution = [
  { label: "Liquidity", value: 35, color: "#82d68f", note: "Locked Liquidity" },
  { label: "Community", value: 25, color: "#b594ff", note: "Community Reserve" },
  { label: "Ecosystem", value: 15, color: "#ffc06b", note: "Growth + Integrations" },
  { label: "Treasury", value: 15, color: "#8eabff", note: "Ops + Marketing" },
  { label: "Team", value: 10, color: "#ffd86b", note: "Vested" }
];

const conicStops = distribution
  .reduce(
    (acc, item) => {
      const end = acc.current + item.value;
      acc.stops.push(`${item.color} ${acc.current}% ${end}%`);
      acc.current = end;
      return acc;
    },
    { current: 0, stops: [] as string[] }
  )
  .stops.join(", ");

export function TokenomicsSection() {
  return (
    <section id="tokenomics">
      <FadeIn>
        <CosmicCard className="p-6 sm:p-8">
          <h3 className="text-center font-[var(--font-space-grotesk)] text-5xl font-semibold text-white">
            Tokenomics
          </h3>

          <div className="mt-6 flex flex-col items-center">
            {/* Animated donut chart inspired by the provided reference layout. */}
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative h-64 w-64 rounded-full border border-white/20"
              style={{ background: `conic-gradient(${conicStops})` }}
            >
              <div className="absolute inset-10 rounded-full border border-white/15 bg-slate-950/70" />
              <div className="absolute inset-0 rounded-full shadow-glow-soft" />
            </motion.div>

            <p className="mt-5 text-3xl text-slate-100">Total Supply</p>
            <p className="text-5xl font-extrabold text-white">1,000,000,000 $GOKU</p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {distribution.map((item, index) => (
              <FadeIn
                key={item.label}
                delay={0.07 * index}
                className="rounded-xl border border-white/15 bg-black/20 p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <p className="font-semibold text-white">{item.label}</p>
                </div>
                <p className="mt-2 text-4xl font-bold text-white">{item.value}%</p>
                <p className="mt-1 text-sm text-slate-300">{item.note}</p>
              </FadeIn>
            ))}
          </div>
        </CosmicCard>
      </FadeIn>
    </section>
  );
}
