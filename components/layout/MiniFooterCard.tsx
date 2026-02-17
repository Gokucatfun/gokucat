import { CosmicCard } from "@/components/ui/CosmicCard";

export function MiniFooterCard() {
  return (
    <CosmicCard className="p-5">
      <div className="rounded-xl border border-white/20 bg-black/30 p-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">gokucat.eth</span>
          <div className="h-6 flex-1 rounded-md border border-white/15 bg-black/40" />
          <button className="rounded-md border border-cosmic-gold/40 px-2 py-1 text-[10px] text-cosmic-gold transition hover:bg-cosmic-gold/20">
            Copy
          </button>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-300">Contact: 0x...GOKU</p>
    </CosmicCard>
  );
}
