"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { CatMascot } from "@/components/ui/CatMascot";
import { CosmicCard } from "@/components/ui/CosmicCard";

export function HeroSection() {
  return (
    <section id="top">
      <CosmicCard className="card-sky-hero min-h-[820px] p-6 sm:p-10">
        <Navbar />

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-56 -translate-x-1/2 rounded-full bg-cosmic-gold/40 blur-3xl" />
            <CatMascot className="h-64 w-64 sm:h-72 sm:w-72" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="mt-14 font-[var(--font-space-grotesk)] text-[4.6rem] font-extrabold tracking-tight text-white sm:text-[5.6rem]"
          >
            GOKUCAT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-3 text-[1.9rem] text-slate-100"
          >
            Above the noise. Riding the cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <Button variant="hero" href="#community" className="min-w-[170px] text-base sm:text-base">
              Buy $GOKU
            </Button>
            <Button variant="hero" href="#tokenomics" className="min-w-[170px] text-base sm:text-base">
              View Chart
            </Button>
            <Button variant="hero" href="#about" className="min-w-[170px] text-base sm:text-base">
              Read the Lore
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-[1.3rem] tracking-[0.12em] text-white"
          >
            gokucat.eth
          </motion.p>
        </div>
      </CosmicCard>
    </section>
  );
}
