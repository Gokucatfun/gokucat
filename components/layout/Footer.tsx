import { CosmicCard } from "@/components/ui/CosmicCard";

export function Footer() {
  return (
    <footer>
      <CosmicCard className="h-full min-h-[290px] p-6 sm:p-8">
        <h3 className="text-center font-[var(--font-space-grotesk)] text-4xl font-semibold text-white">
          gokucat.eth
        </h3>

        <div className="mx-auto mt-8 max-w-xl rounded-xl border border-white/20 bg-black/30 p-3">
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-300">Contract Address</span>
            <div className="h-8 flex-1 rounded-md border border-white/15 bg-black/40" />
            <button className="rounded-md border border-cosmic-gold/40 px-3 py-1 text-xs text-cosmic-gold transition hover:bg-cosmic-gold/20">
              Copy
            </button>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-slate-300">
          GokuCat is an experimental meme token. Not financial advice.
        </p>
      </CosmicCard>
    </footer>
  );
}
