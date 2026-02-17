"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    // Hero occupies full viewport height and anchors top for navbar logo link.
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-16 text-center"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1fr_auto] md:text-left">
        <div className="mx-auto max-w-2xl md:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-[var(--font-space-grotesk)] text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            CLOUDCAT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
            className="mt-5 text-lg text-slate-300 sm:text-xl"
          >
            Above the noise. Riding the cloud.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <Button variant="primary" href="#community">
              Buy $CLOUD
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
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-sm uppercase tracking-[0.25em] text-cosmic-gold/90"
          >
            cloudcat.eth
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-cosmic-gold/20 blur-3xl" />
            <div className="absolute -inset-3 -z-10 rounded-full border border-cosmic-gold/30" />
            <Image
              src="/mascot-cloudcat.svg"
              alt="Floating CloudCat mascot"
              width={300}
              height={300}
              priority
              className="h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
