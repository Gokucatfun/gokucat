import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <div className="flex items-center justify-between gap-3">
      <a href="#top" className="font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white">
        GokuCat
      </a>
      <Button variant="secondary" className="rounded-full px-5 py-2 text-xs sm:text-sm">
        Connect Wallet
      </Button>
    </div>
  );
}
