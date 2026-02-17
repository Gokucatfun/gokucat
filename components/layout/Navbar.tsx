import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <div className="flex items-center justify-between gap-3">
      <a href="#top" className="font-[var(--font-space-grotesk)] text-[2rem] font-bold tracking-tight text-white">
        GokuCat
      </a>
      <Button variant="wallet" className="rounded-full px-4 py-2 text-xs">
        Connect Wallet
      </Button>
    </div>
  );
}
