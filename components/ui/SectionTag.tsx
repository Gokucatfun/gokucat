import { cn } from "@/lib/utils";

type SectionTagProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <h2
      className={cn(
        "px-1 text-center font-[var(--font-space-grotesk)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
