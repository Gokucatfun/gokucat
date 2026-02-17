"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { CatMascot } from "@/components/ui/CatMascot";
import { CosmicCard } from "@/components/ui/CosmicCard";

export function HeroSection() {
  return (
    <section id="top">
      <CosmicCard className="min-h-[640px] p-6 sm:p-8 lg:min-h-[680px]">
        <Navbar />

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center text-center sm:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CatMascot className="h-44 w-44 sm:h-56 sm:w-56" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="mt-8 font-[var(--font-space-grotesk)] text-6xl font-extrabold tracking-tight text-white sm:text-7xl"
          >
            GOKUCAT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-2 text-2xl text-slate-100/95"
          >
            Above the noise. Riding the cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button variant="primary" href="#community">
              Buy $GOKU
            </Button>
            <Button variant="secondary" href="#tokenomics">
              View Chart
            </Button>
            <Button variant="secondary" href="#about">
              Read the Lore
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-3xl tracking-wide text-white"
          >
            gokucat.eth
          </motion.p>
        </div>
      </CosmicCard>
    </section>
  );
}
