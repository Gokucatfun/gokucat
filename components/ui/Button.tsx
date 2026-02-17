import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "hero" | "wallet" | "social";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  hero:
    "border-indigo-200/40 bg-gradient-to-r from-indigo-500/28 via-violet-500/28 to-fuchsia-500/28 text-white shadow-[0_0_20px_rgba(147,51,234,0.26)] hover:border-cosmic-gold/60 hover:shadow-glow-soft",
  wallet:
    "border-indigo-200/45 bg-black/30 text-white shadow-[0_0_14px_rgba(104,90,255,0.28)] hover:border-cosmic-gold/70 hover:text-cosmic-gold",
  social:
    "border-violet-200/45 bg-gradient-to-r from-indigo-500/22 to-fuchsia-500/22 text-white shadow-[0_0_20px_rgba(139,92,246,0.24)] hover:border-cosmic-gold/65 hover:shadow-glow-soft"
};

const baseStyles =
  "inline-flex items-center justify-center rounded-xl border px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300";

export function Button({
  children,
  href,
  variant = "hero",
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
