import { CosmicCard } from "@/components/ui/CosmicCard";

export function Footer() {
  return (
    <footer>
      <CosmicCard className="min-h-[320px] p-6 sm:p-8">
        <h3 className="text-center font-[var(--font-space-grotesk)] text-[3.1rem] font-semibold text-white">
          gokucat.eth
        </h3>

        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-white/20 bg-black/35 p-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-200">Contract Address</span>
            <div className="h-8 flex-1 rounded-md border border-white/15 bg-black/50" />
            <button className="rounded-md border border-cosmic-gold/45 px-3 py-1 text-xs text-cosmic-gold transition hover:bg-cosmic-gold/20">
              Copy
            </button>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-300">
          GokuCat is an experimental meme token. No financial guarantees.
        </p>
      </CosmicCard>
    </footer>
  );
}
