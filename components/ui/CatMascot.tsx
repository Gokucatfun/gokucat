"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CatMascotProps = {
  className?: string;
  float?: boolean;
};

export function CatMascot({ className, float = true }: CatMascotProps) {
  return (
    <motion.div
      animate={float ? { y: [0, -12, 0] } : undefined}
      transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className={cn("relative overflow-hidden rounded-3xl border border-white/20 shadow-[0_0_22px_rgba(243,201,105,0.26)]", className)}
    >
      <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-white/20" />
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-cosmic-gold/28 blur-3xl" />
      <Image
        src="/gokucat-still.png"
        alt="GokuCat mascot"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
