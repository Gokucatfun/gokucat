import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-cosmic-black/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-[var(--font-space-grotesk)] text-xl font-bold tracking-wide text-white">
          CloudCat
        </a>
        <Button variant="primary" className="px-5 py-2 text-xs sm:text-sm">
          Connect Wallet
        </Button>
      </div>
    </header>
  );
}
