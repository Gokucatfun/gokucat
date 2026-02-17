import { cn } from "@/lib/utils";

type CosmicCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function CosmicCard({ children, className }: CosmicCardProps) {
  return (
    <div className={cn("cosmic-card", className)}>
      <div className="cosmic-card-content">{children}</div>
    </div>
  );
}
