"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CatMascotProps = {
  className?: string;
  float?: boolean;
};

export function CatMascot({ className, float = true }: CatMascotProps) {
  return (
    <motion.div
      animate={float ? { y: [0, -10, 0] } : undefined}
      transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className={cn("relative overflow-hidden rounded-full border border-cosmic-gold/45", className)}
    >
      <div className="pointer-events-none absolute inset-0 z-10 rounded-full ring-2 ring-cosmic-gold/35" />
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-cosmic-gold/30 blur-3xl" />
      <video
        src="/gokucat.mp4"
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    </motion.div>
  );
}
