import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-xl font-semibold text-white">CloudCat</p>
      <Button variant="wallet">Connect Wallet</Button>
    </div>
  );
}
