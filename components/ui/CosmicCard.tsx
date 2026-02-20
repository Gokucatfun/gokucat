import { cn } from "@/lib/utils";

type CosmicCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function CosmicCard({ children, className }: CosmicCardProps) {
  return (
    <div className={cn("glass-card", className)}>
      <div className="glass-content">{children}</div>
    </div>
  );
}
