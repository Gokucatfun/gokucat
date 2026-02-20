import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "social" | "wallet";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "border-yellow-300/70 bg-gradient-to-r from-amber-300/30 to-yellow-400/25 text-yellow-100 glow-gold hover:bg-amber-300/35",
  outline:
    "border-violet-300/45 bg-slate-900/45 text-slate-100 glow-purple hover:border-violet-200/75 hover:bg-violet-500/20",
  social:
    "border-violet-300/55 bg-violet-500/15 text-white glow-purple hover:bg-violet-500/24",
  wallet:
    "border-violet-300/60 bg-slate-900/55 text-slate-100 glow-purple hover:border-violet-200/80"
};

const base =
  "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200";

export function Button({ children, href, variant = "outline", className }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
