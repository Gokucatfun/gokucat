"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const distribution = [
  { label: "Liquidity", value: 35, color: "#f3c969" },
  { label: "Community", value: 25, color: "#7dd3fc" },
  { label: "Ecosystem", value: 15, color: "#a78bfa" },
  { label: "Treasury", value: 15, color: "#34d399" },
  { label: "Team", value: 10, color: "#fca5a5", note: "(Vested)" }
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
    <Section id="tokenomics" title="Tokenomics">
      <FadeIn>
        <p className="text-center text-lg text-slate-300">
          Total Supply: <span className="font-semibold text-cosmic-gold">1,000,000,000 $CLOUD</span>
        </p>
      </FadeIn>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[340px_1fr]">
        <FadeIn className="mx-auto" delay={0.1}>
          {/* Circular distribution chart with subtle orbital animation. */}
          <motion.div
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative h-72 w-72 rounded-full border border-white/10"
            style={{
              background: `conic-gradient(${conicStops})`
            }}
          >
            <div className="absolute inset-8 rounded-full bg-cosmic-black/90 backdrop-blur-sm" />
            <div className="absolute inset-0 rounded-full shadow-glow-soft" />
            <div className="absolute inset-0 grid place-items-center text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Distribution</p>
            </div>
          </motion.div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {distribution.map((item, index) => (
            <FadeIn
              key={item.label}
              delay={0.1 * index}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <p className="font-medium text-white">
                    {item.label} {item.note ?? ""}
                  </p>
                </div>
                <p className="font-semibold text-cosmic-gold">{item.value}%</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
