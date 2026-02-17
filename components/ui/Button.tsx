import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

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
    "border-cosmic-gold/60 bg-cosmic-gold/20 text-cosmic-gold hover:bg-cosmic-gold/30 hover:shadow-glow",
  secondary:
    "border-white/20 bg-white/5 text-white hover:border-cosmic-gold/40 hover:text-cosmic-gold hover:shadow-glow-soft",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";

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
