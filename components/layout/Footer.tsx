export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cosmic-black/50 px-6 py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-5 text-sm text-slate-300 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-medium text-white">cloudcat.eth</p>
          <p className="mt-2 text-xs text-slate-400">
            CloudCat is an experimental meme token. Not financial advice.
          </p>
        </div>

        <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
          <span className="mr-3 text-xs text-slate-400">Contract: 0x...CLOUD</span>
          <button className="rounded-full border border-cosmic-gold/30 px-3 py-1 text-xs text-cosmic-gold transition hover:bg-cosmic-gold/15">
            Copy
          </button>
        </div>
      </div>
    </footer>
  );
}
