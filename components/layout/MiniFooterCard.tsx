import { CosmicCard } from "@/components/ui/CosmicCard";

export function MiniFooterCard() {
  return (
    <CosmicCard className="p-5">
      <div className="rounded-xl border border-cosmic-gold/35 bg-black/35 p-3 shadow-[0_0_18px_rgba(243,201,105,0.18)]">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-white">gokucat.eth</span>
          <div className="h-7 flex-1 rounded-md border border-white/15 bg-black/45" />
          <button className="rounded-md border border-cosmic-gold/50 px-2 py-1 text-[10px] text-cosmic-gold transition hover:bg-cosmic-gold/20">
            Copy
          </button>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-300">Contract: 0x...GOKU</p>
    </CosmicCard>
  );
}
