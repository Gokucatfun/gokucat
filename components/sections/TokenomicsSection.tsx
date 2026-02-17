"use client";

import { motion } from "framer-motion";
import { CosmicCard } from "@/components/ui/CosmicCard";
import { FadeIn } from "@/components/ui/FadeIn";

const distribution = [
  { label: "Liquidity", value: 35, color: "#8ae29a", note: "Locked Liquidity" },
  { label: "Community", value: 25, color: "#c5a3ff", note: "Community Reserve" },
  { label: "Ecosystem", value: 15, color: "#ffc16d", note: "Token utility" },
  { label: "Treasury", value: 15, color: "#8ea6ff", note: "Treasury (Vested)" },
  { label: "Team", value: 10, color: "#ffe076", note: "Vested" }
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
          <h3 className="text-center font-[var(--font-space-grotesk)] text-[3.8rem] font-semibold text-white">
            Tokenomics
          </h3>

          <div className="mt-5 flex flex-col items-center">
            <motion.div
              animate={{ rotate: [0, 4, 0, -4, 0] }}
              transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative h-64 w-64 rounded-full border border-white/20"
              style={{ background: `conic-gradient(${conicStops})` }}
            >
              <div className="absolute inset-11 rounded-full border border-white/15 bg-[#1b1434]/75" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(243,201,105,0.28)]" />
            </motion.div>

            <p className="mt-4 text-[2rem] text-slate-100">Total Supply</p>
            <p className="text-[3rem] font-extrabold tracking-tight text-white sm:text-[3.3rem]">
              1,000,000,000 $GOKU
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {distribution.map((item, index) => (
              <FadeIn
                key={item.label}
                delay={0.06 * index}
                className="rounded-xl border border-white/15 bg-black/28 p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <p className="text-xl font-semibold text-white">{item.label}</p>
                </div>
                <p className="mt-2 text-[2.5rem] font-bold leading-none text-white">{item.value}%</p>
                <p className="mt-1 text-sm text-slate-300">{item.note}</p>
              </FadeIn>
            ))}
          </div>
        </CosmicCard>
      </FadeIn>
    </section>
  );
}
