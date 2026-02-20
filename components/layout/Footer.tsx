import { CosmicCard } from "@/components/ui/CosmicCard";

export function Footer() {
  return (
    <footer className="px-4 pb-12 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <CosmicCard className="rounded-2xl p-6 sm:p-8">
          <p className="text-center text-2xl font-bold text-white">cloudcat.eth</p>

          <div className="mx-auto mt-5 flex max-w-3xl flex-col gap-2 rounded-xl border border-violet-200/25 bg-slate-950/45 p-3 sm:flex-row sm:items-center">
            <span className="text-xs text-slate-300">Contract Address</span>
            <div className="h-8 flex-1 rounded-md border border-violet-200/20 bg-black/35" />
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            CloudCat is an experimental meme token. Not financial advice.
          </p>
        </CosmicCard>
      </div>
    </footer>
  );
}
