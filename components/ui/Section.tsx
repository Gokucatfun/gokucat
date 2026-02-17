import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
};

export function Section({ id, title, children, className, titleClassName }: SectionProps) {
  return (
    <section id={id} className={cn("px-6 py-20 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">
        {title ? (
          <h2
            className={cn(
              "mb-10 text-center font-[var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white md:text-4xl",
              titleClassName
            )}
          >
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
