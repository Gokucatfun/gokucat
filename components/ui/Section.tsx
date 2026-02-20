import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-10 sm:px-6 md:py-14", className)}>
      <div className="mx-auto w-full max-w-6xl">
        {title ? (
          <h2 className="mb-7 text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl">{title}</h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
