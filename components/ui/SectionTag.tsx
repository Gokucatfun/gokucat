import { cn } from "@/lib/utils";

type SectionTagProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <h2
      className={cn(
        "text-center font-[var(--font-space-grotesk)] text-[2.3rem] font-extrabold uppercase tracking-[0.02em] text-white sm:text-[2.8rem]",
        className
      )}
    >
      {children}
    </h2>
  );
}
