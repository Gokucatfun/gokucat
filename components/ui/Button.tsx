import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "social" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-cosmic-gold/70 bg-gradient-to-r from-indigo-500/25 via-violet-500/25 to-fuchsia-500/25 text-white hover:border-cosmic-gold hover:shadow-glow",
  secondary:
    "border-white/30 bg-slate-900/55 text-white hover:border-cosmic-gold/70 hover:text-cosmic-gold hover:shadow-glow-soft",
  social:
    "border-violet-300/45 bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 text-white hover:border-cosmic-gold/60 hover:shadow-glow-soft",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
};

const baseStyles =
  "inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300";

export function Button({
  children,
  href,
  variant = "secondary",
  className,
  target,
  rel
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} target={target ?? "_blank"} rel={rel ?? "noreferrer"} className={classes}>
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
